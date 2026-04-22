#!/usr/bin/env python3
"""Create and import userscripts with metadata support."""
from __future__ import annotations

import argparse
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DEST = ROOT / "scripts" / "Experimental-Beta-Sandbox" / "Prototype-Features"
SLUG_PATTERN = re.compile(r"[^a-z0-9]+")


def slugify(name: str) -> str:
    slug = SLUG_PATTERN.sub("-", name.strip().lower()).strip("-")
    return slug or "new-userscript"


def parse_metadata_items(values: list[str]) -> dict[str, list[str]]:
    parsed: dict[str, list[str]] = {}
    for item in values:
        if "=" not in item:
            raise ValueError(f"metadata must be key=value, got: {item}")
        key, value = item.split("=", 1)
        parsed.setdefault(key.strip(), []).append(value.strip())
    return parsed


def render_userscript(name: str, namespace: str, version: str, description: str, matches: list[str], metadata: dict[str, list[str]]) -> str:
    lines = [
        "// ==UserScript==",
        f"// @name        {name}",
        f"// @namespace   {namespace}",
        f"// @version     {version}",
        f"// @description {description}",
    ]
    for m in matches or ["*://*/*"]:
        lines.append(f"// @match       {m}")
    for key, vals in metadata.items():
        for val in vals:
            lines.append(f"// @{key:<11} {val}")
    lines.extend([
        "// @grant       none",
        "// ==/UserScript==",
        "",
        "(function () {",
        "  'use strict';",
        "  console.log('[userscript] loaded:', GM_info?.script?.name || 'Unnamed');",
        "})();",
        "",
    ])
    return "\n".join(lines)


def cmd_create(args: argparse.Namespace) -> int:
    metadata = parse_metadata_items(args.meta or [])
    dest_dir = (ROOT / args.destination).resolve() if args.destination else DEFAULT_DEST
    dest_dir.mkdir(parents=True, exist_ok=True)
    filename = args.filename or f"{slugify(args.name)}.user.js"
    path = dest_dir / filename

    payload = render_userscript(
        name=args.name,
        namespace=args.namespace,
        version=args.version,
        description=args.description,
        matches=args.match or [],
        metadata=metadata,
    )

    if args.verbose:
        print(f"target: {path}")
    if args.dry_run:
        print(payload)
        return 0

    if path.exists() and not args.force:
        raise FileExistsError(f"file already exists: {path}")

    path.write_text(payload, encoding="utf-8")
    print(f"created {path.relative_to(ROOT)}")
    return 0


def cmd_import(args: argparse.Namespace) -> int:
    source = Path(args.source).resolve()
    if not source.exists():
        raise FileNotFoundError(source)

    metadata = parse_metadata_items(args.meta or [])
    dest_dir = (ROOT / args.destination).resolve() if args.destination else DEFAULT_DEST
    dest_dir.mkdir(parents=True, exist_ok=True)

    filename = args.filename or source.name
    if not filename.endswith(".user.js"):
        filename += ".user.js"
    dest = dest_dir / filename

    content = source.read_text(encoding="utf-8")
    if metadata:
        insert = "\n".join([f"// @{k} {v}" for k, vals in metadata.items() for v in vals])
        if "// ==/UserScript==" in content:
            content = content.replace("// ==/UserScript==", f"{insert}\n// ==/UserScript==", 1)

    if args.verbose:
        print(f"source: {source}")
        print(f"destination: {dest}")

    if args.dry_run:
        print(content[:2000])
        return 0

    if dest.exists() and not args.force:
        raise FileExistsError(f"destination already exists: {dest}")

    shutil.copy2(source, dest)
    if metadata:
        dest.write_text(content, encoding="utf-8")
    print(f"imported {dest.relative_to(ROOT)}")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)

    common = argparse.ArgumentParser(add_help=False)
    common.add_argument("--destination", help="destination directory relative to repository root")
    common.add_argument("--filename", help="explicit output filename")
    common.add_argument("--meta", action="append", help="extra metadata key=value")
    common.add_argument("--dry-run", action="store_true", help="show output without writing")
    common.add_argument("--verbose", action="store_true", help="verbose logging")
    common.add_argument("--force", action="store_true", help="overwrite existing files")

    create = sub.add_parser("create", parents=[common], help="create a new userscript")
    create.add_argument("name")
    create.add_argument("--namespace", default="https://github.com/yourname/userscripts")
    create.add_argument("--version", default="0.1.0")
    create.add_argument("--description", default="New userscript")
    create.add_argument("--match", action="append", help="@match value (repeatable)")
    create.set_defaults(func=cmd_create)

    imp = sub.add_parser("import", parents=[common], help="import existing userscript")
    imp.add_argument("source", help="path to an existing .user.js file")
    imp.set_defaults(func=cmd_import)
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
