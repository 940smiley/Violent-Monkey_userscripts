# Violent Monkey Userscripts Repository

A structured repository for organizing, creating, importing, and classifying userscripts at scale.

## Repository Overview

This repo organizes userscripts into **10 categories** with 4 subcategories each:

1. Navigation & UI Enhancements
2. Automation & Workflow
3. Data Extraction & Scraping
4. Security Privacy & Anti-Tracking
5. Developer Tools & Debugging
6. Site-Specific Enhancements
7. Content Manipulation
8. Integration & Cross-Platform Sync
9. Experimental Beta & Sandbox
10. Meta-Management & Script Infrastructure

See full tree in [`docs/USERSCRIPTS_DEVELOPERS.md`](docs/USERSCRIPTS_DEVELOPERS.md).

## Folder Structure

- `scripts/` - category/subcategory organized userscripts.
- `tools/classify_scripts.py` - metadata/keyword classifier that rebuilds `scripts-index.json`.
- `tools/userscript_tool.py` - Python tool to create/import userscripts.
- `tools/userscript-tool.ps1` - PowerShell tool to create/import userscripts.
- `.github/workflows/classify-userscripts.yml` - CI classification/index workflow.
- `.github/workflows/self-repair-prs.yml` - PR self-repair checks + auto-merge enablement.
- `.github/dependabot.yml` - Dependabot updates for GitHub Actions dependencies.
- `docs/CLASSIFICATION.md` - classifier logic and rules.
- `docs/SCRAPER_GUIDE.md` - class action scraper usage guide.

## Classification Rules

Classification is resolved in this order:

1. **Metadata override**: `@category Category / Subcategory`
2. **Keyword scoring**: title, description, path, and script content heuristics
3. **Fallback**: `Experimental Beta & Sandbox / Prototype Features`

Run manually:

```bash
python tools/classify_scripts.py --verbose
python tools/classify_scripts.py --check
```

## Usage: Create and Import Userscripts

### Python

```bash
python tools/userscript_tool.py create "My Script" --description "Example" --match "*://example.com/*" --meta "category=Navigation & UI Enhancements / Menu Injection"
python tools/userscript_tool.py import ./tmp/existing.user.js --destination scripts/Content-Manipulation/Text-Tools --dry-run --verbose
```

### PowerShell

```powershell
./tools/userscript-tool.ps1 -Command create -Name "My Script" -Description "Example" -Match "*://example.com/*" -Meta "category=Navigation & UI Enhancements / Menu Injection"
./tools/userscript-tool.ps1 -Command import -Source .\tmp\existing.user.js -Destination scripts\Content-Manipulation\Text-Tools -DryRun -VerboseMode
```

## GitHub Automation

### Auto Classification + Index Updates

On new/updated scripts:
- Classifier rebuilds `scripts-index.json`.
- PRs validate that index is in sync.
- Pushes to `main` auto-commit updated index.

### PR Self-Repair

On PR updates:
- Runs syntax/check pipeline.
- Regenerates and auto-commits stale index fixes.
- Enables auto-merge (`gh pr merge --auto --squash`) if allowed by branch protections.

### Dependabot

Dependabot runs weekly for GitHub Actions dependency updates.

## Included Userscript

- `classaction-multi-scraper.user.js`
  - Multi-site scanner for:
    - classaction.org
    - claimdepot.com
    - openclassactions.com
    - classaction.com
  - Extracts: title, category, status, claim URL, deadline, summary
  - Exports JSON + CSV
  - Includes dedupe, normalization, status grouping
  - Supports default scan, custom target input, and debug mode

See [`docs/SCRAPER_GUIDE.md`](docs/SCRAPER_GUIDE.md) for details.
