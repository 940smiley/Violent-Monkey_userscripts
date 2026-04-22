#!/usr/bin/env python3
"""Classify userscripts and rebuild scripts-index.json."""
from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Iterable, List, Tuple

ROOT = Path(__file__).resolve().parents[1]
SCRIPTS_ROOT = ROOT / "scripts"
INDEX_FILE = ROOT / "scripts-index.json"

CATEGORY_RULES: List[Tuple[str, str, List[str]]] = [
    ("Navigation & UI Enhancements", "Layout Tweaks", ["layout", "sidebar", "toolbar", "panel", "ui"]),
    ("Navigation & UI Enhancements", "Theme/Styling", ["theme", "style", "dark mode", "css"]),
    ("Navigation & UI Enhancements", "Keyboard Shortcuts", ["shortcut", "hotkey", "keyboard"]),
    ("Navigation & UI Enhancements", "Menu Injection", ["menu", "inject", "context menu"]),
    ("Automation & Workflow", "Form Automation", ["form", "autofill", "input"]),
    ("Automation & Workflow", "Click/Action Automation", ["auto click", "click", "action", "workflow"]),
    ("Automation & Workflow", "Batch Operations", ["batch", "bulk", "multi"]),
    ("Automation & Workflow", "Task Scheduling", ["schedule", "timer", "interval", "cron"]),
    ("Data Extraction & Scraping", "DOM Scrapers", ["scrape", "parser", "extract", "dom"]),
    ("Data Extraction & Scraping", "API Interceptors", ["api", "xhr", "fetch", "intercept"]),
    ("Data Extraction & Scraping", "Exporters", ["csv", "json", "export"]),
    ("Data Extraction & Scraping", "Monitoring", ["monitor", "watch", "observe"]),
    ("Security Privacy & Anti-Tracking", "Ad/Tracker Blocking", ["adblock", "tracker", "block"]),
    ("Security Privacy & Anti-Tracking", "Privacy Hardening", ["privacy", "hardening", "consent"]),
    ("Security Privacy & Anti-Tracking", "Anti-Fingerprint", ["fingerprint", "spoof", "canvas"]),
    ("Security Privacy & Anti-Tracking", "Permission Guards", ["permission", "guard", "prompt"]),
    ("Developer Tools & Debugging", "DOM Inspectors", ["inspect", "element", "dom tree"]),
    ("Developer Tools & Debugging", "Network Tools", ["network", "request", "response"]),
    ("Developer Tools & Debugging", "Debug Panels", ["debug", "panel", "console"]),
    ("Developer Tools & Debugging", "Injection Helpers", ["inject", "hook", "helper"]),
    ("Site-Specific Enhancements", "YouTube", ["youtube", "yt"]),
    ("Site-Specific Enhancements", "Google Services", ["google", "gmail", "docs", "drive"]),
    ("Site-Specific Enhancements", "Social Media", ["x.com", "twitter", "facebook", "reddit", "social"]),
    ("Site-Specific Enhancements", "E-commerce", ["amazon", "ebay", "shop", "ecommerce"]),
    ("Content Manipulation", "Text Tools", ["text", "markdown", "editor"]),
    ("Content Manipulation", "Media Tools", ["image", "video", "media"]),
    ("Content Manipulation", "Content Filters", ["filter", "hide", "block content"]),
    ("Content Manipulation", "Reader Modes", ["reader", "read mode", "article"]),
    ("Integration & Cross-Platform Sync", "Cloud Sync", ["sync", "cloud", "backup"]),
    ("Integration & Cross-Platform Sync", "API Bridges", ["bridge", "webhook", "api"]),
    ("Integration & Cross-Platform Sync", "Clipboard/Share Tools", ["clipboard", "share", "copy"]),
    ("Integration & Cross-Platform Sync", "Local Storage Managers", ["storage", "indexeddb", "localstorage"]),
    ("Experimental Beta & Sandbox", "Prototype Features", ["prototype", "beta", "alpha"]),
    ("Experimental Beta & Sandbox", "Testing Utilities", ["test", "mock", "fixture"]),
    ("Experimental Beta & Sandbox", "Compatibility Layers", ["compatibility", "polyfill", "shim"]),
    ("Experimental Beta & Sandbox", "Performance Experiments", ["performance", "benchmark", "optimize"]),
    ("Meta-Management & Script Infrastructure", "Script Loaders", ["loader", "bootstrap"]),
    ("Meta-Management & Script Infrastructure", "Environment Detection", ["environment", "detect", "runtime"]),
    ("Meta-Management & Script Infrastructure", "Versioning Tools", ["version", "semver", "migrate"]),
    ("Meta-Management & Script Infrastructure", "Safety Nets", ["safety", "rollback", "failsafe"]),
]

META_LINE = re.compile(r"^//\s*@(?P<key>[\w:-]+)\s+(?P<value>.+)$")


@dataclass
class ScriptRecord:
    path: str
    name: str
    version: str
    description: str
    matches: List[str]
    category: str
    subcategory: str
    classification_source: str


def parse_metadata(content: str) -> Dict[str, List[str]]:
    metadata: Dict[str, List[str]] = {}
    in_block = False
    for line in content.splitlines():
        striped = line.strip()
        if striped == "// ==UserScript==":
            in_block = True
            continue
        if striped == "// ==/UserScript==":
            break
        if in_block:
            m = META_LINE.match(striped)
            if m:
                metadata.setdefault(m.group("key").lower(), []).append(m.group("value").strip())
    return metadata


def score_rule(text: str, keywords: Iterable[str]) -> int:
    return sum(2 if f" {k} " in f" {text} " else 0 for k in keywords)


def classify(path: Path, metadata: Dict[str, List[str]], content: str) -> Tuple[str, str, str]:
    if "category" in metadata:
        value = metadata["category"][0]
        if "/" in value:
            cat, subcat = [x.strip() for x in value.split("/", 1)]
            return cat, subcat, "metadata"

    text = " ".join([
        path.as_posix().lower(),
        " ".join(metadata.get("name", [])).lower(),
        " ".join(metadata.get("description", [])).lower(),
        content[:5000].lower(),
    ])
    best = (0, "Experimental Beta & Sandbox", "Prototype Features")
    for cat, subcat, keywords in CATEGORY_RULES:
        score = score_rule(text, keywords)
        if score > best[0]:
            best = (score, cat, subcat)
    return best[1], best[2], "keyword"


def build_index(verbose: bool = False) -> dict:
    records: List[ScriptRecord] = []
    for script in sorted(SCRIPTS_ROOT.rglob("*.user.js")):
        content = script.read_text(encoding="utf-8")
        metadata = parse_metadata(content)
        category, subcategory, source = classify(script, metadata, content)

        name = metadata.get("name", [script.stem])[0]
        version = metadata.get("version", ["0.0.0"])[0]
        description = metadata.get("description", [""])[0]
        matches = metadata.get("match", []) + metadata.get("include", [])

        rel = script.relative_to(ROOT).as_posix()
        records.append(
            ScriptRecord(
                path=rel,
                name=name,
                version=version,
                description=description,
                matches=matches,
                category=category,
                subcategory=subcategory,
                classification_source=source,
            )
        )
        if verbose:
            print(f"classified {rel} -> {category} / {subcategory} ({source})")

    grouped: Dict[str, Dict[str, List[dict]]] = {}
    for r in records:
        grouped.setdefault(r.category, {}).setdefault(r.subcategory, []).append(
            {
                "path": r.path,
                "name": r.name,
                "version": r.version,
                "description": r.description,
                "matches": r.matches,
                "classification_source": r.classification_source,
            }
        )

    return {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "scriptCount": len(records),
        "categories": grouped,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="exit non-zero if scripts-index.json would change")
    parser.add_argument("--verbose", action="store_true", help="print classified scripts")
    args = parser.parse_args()

    index = build_index(verbose=args.verbose)
    payload = json.dumps(index, indent=2, ensure_ascii=False) + "\n"

    current = INDEX_FILE.read_text(encoding="utf-8") if INDEX_FILE.exists() else ""
    changed = current != payload

    if args.check:
        if changed:
            print("scripts-index.json is out of date")
            return 1
        print("scripts-index.json is up to date")
        return 0

    INDEX_FILE.write_text(payload, encoding="utf-8")
    print(f"updated {INDEX_FILE.relative_to(ROOT)} ({index['scriptCount']} scripts)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
