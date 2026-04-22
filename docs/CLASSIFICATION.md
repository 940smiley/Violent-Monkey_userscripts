# CLASSIFICATION

## Inputs

`tools/classify_scripts.py` classifies each `.user.js` from:
- Userscript metadata (`@name`, `@description`, `@match`, `@category`)
- Script path and filename
- Script body text (first 5000 chars)

## Resolution Order

1. `@category` metadata (exact):
   - Format: `Category / Subcategory`
2. Keyword scoring map:
   - Scores category/subcategory by keyword hit count
3. Fallback:
   - `Experimental Beta & Sandbox / Prototype Features`

## Output

The script writes `scripts-index.json` with:
- `generatedAt`
- `scriptCount`
- `categories` object grouped by category/subcategory
- Per-script metadata and classification source

## CI Integration

Workflow `.github/workflows/classify-userscripts.yml`:
- On PRs: rebuild + check index consistency
- On push to main: rebuild and auto-commit index changes
