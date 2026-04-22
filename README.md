# Userscript Runner Suite (No Browser Extension Required)

This repository now includes a **multi-implementation userscript runner platform** with four frontends:

- `electron/` — Electron desktop app (JavaScript)
- `tauri/` — Tauri desktop app (Rust + JavaScript)
- `pyqt/` — Python + PyQt desktop app
- `web/` — static web app for GitHub Pages (iframe sandbox model)
- `shared-docs/` — shared runtime notes and cross-implementation architecture

Each frontend provides:

- Script list + selector
- Local `.user.js` file picker
- Remote URL loading (GitHub Pages / raw)
- Script editor panel
- Run Script action
- Console output panel
- DOM preview/inspector panel
- Export output as JSON / CSV / TXT
- Metadata parsing (`@name`, `@description`, `@match`, `@include`, `@grant`)
- GM API runtime support
- Plugin auto-discovery from a scripts directory
- Local-only mode support for offline execution

## Quick Start

### Electron

```bash
cd electron
npm install
npm start
```

Windows build:

```bash
npm run build:win
```

### Tauri

```bash
cd tauri
npm install
npm run dev
```

Cross-platform build (Windows-focused docs in `tauri/README.md`):

```bash
npm run build
```

### PyQt

```bash
cd pyqt
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Package Windows executable:

```bash
pyinstaller --noconfirm --windowed --name userscript-runner app.py
```

### Web (GitHub Pages)

Serve `web/` as static files:

```bash
cd web
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Testing

Use `web/sample-target.html` with `web/scripts/hello-world.user.js` for baseline runtime checks.

## Notes

Security restrictions (CSP / X-Frame-Options / cross-origin policy) may limit injection on certain target websites.
The UI surfaces these issues in each implementation's console panel.
