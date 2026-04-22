# Web Userscript Runner (GitHub Pages Compatible)

## Run locally

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy to GitHub Pages

Publish the `web/` folder as a static site.

## Features

- Iframe sandbox for target page loading
- Script loading from local file + remote URL
- Plugin discovery using `scripts/manifest.json`
- Metadata parser and GM runtime API support
- Export output to JSON/CSV/TXT

## CSP / iframe limitations

If a target site blocks framing or script injection, the app reports the issue in the console panel.
