# Electron Userscript Runner

## Setup

```bash
npm install
npm start
```

## Build Windows executable

```bash
npm run build:win
```

## Features

- Local script selection (`.user.js`)
- Remote script fetch from GitHub URLs
- Plugin discovery from Electron app data `scripts/`
- Metadata parsing and grant display
- Script editor + execution controls
- Target URL loader with preview frame
- Export HTML result to JSON/CSV/TXT
