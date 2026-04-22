# USERSCRIPTS DEVELOPERS

## Canonical Category Tree

```text
scripts/
├── Navigation-UI-Enhancements/
│   ├── Layout-Tweaks/
│   ├── Theme-Styling/
│   ├── Keyboard-Shortcuts/
│   └── Menu-Injection/
├── Automation-Workflow/
│   ├── Form-Automation/
│   ├── Click-Action-Automation/
│   ├── Batch-Operations/
│   └── Task-Scheduling/
├── Data-Extraction-Scraping/
│   ├── DOM-Scrapers/
│   ├── API-Interceptors/
│   ├── Exporters/
│   └── Monitoring/
├── Security-Privacy-Anti-Tracking/
│   ├── Ad-Tracker-Blocking/
│   ├── Privacy-Hardening/
│   ├── Anti-Fingerprint/
│   └── Permission-Guards/
├── Developer-Tools-Debugging/
│   ├── DOM-Inspectors/
│   ├── Network-Tools/
│   ├── Debug-Panels/
│   └── Injection-Helpers/
├── Site-Specific-Enhancements/
│   ├── YouTube/
│   ├── Google-Services/
│   ├── Social-Media/
│   └── E-commerce/
├── Content-Manipulation/
│   ├── Text-Tools/
│   ├── Media-Tools/
│   ├── Content-Filters/
│   └── Reader-Modes/
├── Integration-Cross-Platform-Sync/
│   ├── Cloud-Sync/
│   ├── API-Bridges/
│   ├── Clipboard-Share-Tools/
│   └── Local-Storage-Managers/
├── Experimental-Beta-Sandbox/
│   ├── Prototype-Features/
│   ├── Testing-Utilities/
│   ├── Compatibility-Layers/
│   └── Performance-Experiments/
└── Meta-Management-Script-Infrastructure/
    ├── Script-Loaders/
    ├── Environment-Detection/
    ├── Versioning-Tools/
    └── Safety-Nets/
```

## Script Authoring Standards

- Use `.user.js` extension.
- Include a complete metadata header.
- Prefer explicit `@category Category / Subcategory`.
- Keep script scope constrained with minimal `@match` patterns.
- Update index after changes:
  - `python tools/classify_scripts.py`

## Developer Workflow

1. Create/import script with Python or PowerShell tool.
2. Place script into the best matching subfolder.
3. Run classifier and verify `scripts-index.json`.
4. Open PR and ensure CI passes.
