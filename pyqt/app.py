import csv
import json
import os
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from urllib.parse import urlparse

import requests
from PyQt6.QtCore import QUrl
from PyQt6.QtWidgets import (
    QApplication, QHBoxLayout, QLabel, QLineEdit, QListWidget, QMainWindow,
    QPushButton, QTextEdit, QVBoxLayout, QWidget, QFileDialog
)
from PyQt6.QtWebEngineWidgets import QWebEngineView

META_RE = re.compile(r"//\s*==UserScript==(.*?)//\s*==/UserScript==", re.S)
LINE_RE = re.compile(r"//\s*@([\w:-]+)\s+(.+)")
RUNTIME = Path(__file__).resolve().parent.parent / "shared-docs" / "userscript-runtime.js"

@dataclass
class ScriptItem:
    name: str
    code: str
    source: str = ""
    meta: dict = field(default_factory=dict)


def parse_meta(code: str):
    out = {"name": "Unnamed Script", "description": "", "match": [], "include": [], "grant": []}
    m = META_RE.search(code)
    if not m:
        return out
    for line in m.group(1).splitlines():
        lm = LINE_RE.match(line.strip())
        if not lm:
            continue
        key, value = lm.group(1), lm.group(2)
        if key in ("match", "include", "grant"):
            out[key].append(value)
        else:
            out[key] = value
    return out


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Userscript Runner PyQt")
        self.resize(1500, 900)
        self.scripts = []
        self._build_ui()
        self.discover_plugins()

    def _build_ui(self):
        root = QWidget()
        self.setCentralWidget(root)
        layout = QHBoxLayout(root)

        left = QVBoxLayout()
        self.script_list = QListWidget()
        self.script_list.currentRowChanged.connect(self.load_selected)
        left.addWidget(QLabel("Scripts"))
        left.addWidget(self.script_list)

        self.url_input = QLineEdit()
        self.url_input.setPlaceholderText("GitHub Pages or raw URL")
        fetch_btn = QPushButton("Fetch URL")
        fetch_btn.clicked.connect(self.fetch_remote)
        local_btn = QPushButton("Open local .user.js")
        local_btn.clicked.connect(self.pick_file)
        export_btn = QPushButton("Export JSON/CSV/TXT")
        export_btn.clicked.connect(self.export_results)
        left.addWidget(self.url_input)
        left.addWidget(fetch_btn)
        left.addWidget(local_btn)
        left.addWidget(export_btn)
        self.meta_view = QTextEdit(); self.meta_view.setReadOnly(True)
        left.addWidget(self.meta_view)

        main = QVBoxLayout()
        self.target_url = QLineEdit("https://example.org")
        load_btn = QPushButton("Load target page"); load_btn.clicked.connect(self.load_target)
        run_btn = QPushButton("Run Script"); run_btn.clicked.connect(self.run_script)
        self.editor = QTextEdit()
        self.web = QWebEngineView()
        self.console = QTextEdit(); self.console.setReadOnly(True)

        main.addWidget(self.target_url)
        main.addWidget(load_btn)
        main.addWidget(run_btn)
        main.addWidget(self.editor)
        main.addWidget(self.web, 2)
        main.addWidget(self.console)

        layout.addLayout(left, 1)
        layout.addLayout(main, 3)

    def log(self, msg):
        self.console.append(msg)

    def discover_plugins(self):
        scripts_dir = Path(__file__).resolve().parent / "scripts"
        scripts_dir.mkdir(exist_ok=True)
        for path in scripts_dir.glob("*.user.js"):
            self.add_script(ScriptItem(path.name, path.read_text(encoding="utf-8"), str(path)))

    def add_script(self, script):
        script.meta = parse_meta(script.code)
        self.scripts.append(script)
        self.script_list.addItem(script.meta.get("name") or script.name)

    def load_selected(self, row):
        if row < 0 or row >= len(self.scripts):
            return
        script = self.scripts[row]
        self.editor.setPlainText(script.code)
        self.meta_view.setPlainText(json.dumps(script.meta, indent=2))

    def pick_file(self):
        path, _ = QFileDialog.getOpenFileName(self, "Open userscript", "", "Userscript (*.js *.user.js)")
        if not path:
            return
        self.add_script(ScriptItem(os.path.basename(path), Path(path).read_text(encoding="utf-8"), path))

    def fetch_remote(self):
        url = self.url_input.text().strip()
        if not url:
            return
        code = requests.get(url, timeout=20).text
        self.add_script(ScriptItem(Path(urlparse(url).path).name or "remote.user.js", code, url))

    def load_target(self):
        self.web.setUrl(QUrl(self.target_url.text().strip()))

    def run_script(self):
        row = self.script_list.currentRow()
        if row < 0:
            self.log("Select a script first")
            return
        code = self.editor.toPlainText()
        runtime_js = RUNTIME.read_text(encoding="utf-8")
        injection = f"{runtime_js}\nwindow.__rt = UserscriptRuntime.createRuntime({{onMenuCommand:(i)=>console.log('menu',i)}}); window.__rt.runUserScript({json.dumps(code)}, {json.dumps(self.target_url.text().strip())}).then(r=>console.log('ran', r.meta.name));"
        self.web.page().runJavaScript(injection)
        self.log("Script injected. Check page console for runtime logs.")

    def export_results(self):
        html_holder = {"html": ""}
        def done(html):
            html_holder["html"] = html or ""
            base, _ = QFileDialog.getSaveFileName(self, "Export base filename", "userscript-output", "All (*.*)")
            if not base:
                return
            Path(base + ".txt").write_text(html_holder["html"], encoding="utf-8")
            Path(base + ".json").write_text(json.dumps(html_holder, indent=2), encoding="utf-8")
            with open(base + ".csv", "w", newline="", encoding="utf-8") as f:
                w = csv.writer(f); w.writerow(["field", "value"]); w.writerow(["html", html_holder["html"]])
            self.log("Exported TXT/JSON/CSV")
        self.web.page().toHtml(done)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    win = MainWindow()
    win.show()
    sys.exit(app.exec())
