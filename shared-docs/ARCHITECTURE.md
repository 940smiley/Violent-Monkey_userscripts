# Shared Userscript Runtime Concepts

This project provides four GUI implementations that all follow the same runtime contract:

- Parse userscript metadata blocks.
- Support GM_* APIs (`GM_xmlhttpRequest`, `GM_getValue`, `GM_setValue`, `GM_addStyle`, `GM_registerMenuCommand`).
- Inject scripts into a target page context where platform security allows.
- Show logs/errors, metadata, and preview DOM output.
- Export results as JSON/CSV/TXT.

## Plugin Discovery

Each implementation supports auto-discovery of `*.user.js` scripts from a local `scripts/` folder (or equivalent local app data folder).

## GitHub Integration

Each implementation provides URL fetch support for:
- GitHub Pages hosted scripts
- GitHub raw script URLs

Implementations may add cache refresh timers (manual or scheduled) and local cache persistence.

## Offline Mode

All implementations can run local scripts against local files/pages without network access.
