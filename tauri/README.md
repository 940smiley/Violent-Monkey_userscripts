# Tauri Userscript Runner

## Setup

Prerequisites:
- Rust toolchain
- Node.js
- Tauri prerequisites for your OS

Run:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Windows build focus

Install Visual Studio Build Tools + WebView2 runtime, then run `npm run build` to produce installers/binaries.

## Feature Summary

- Tauri WebView target loader
- Rust command for script plugin discovery
- Local + remote script loading
- Userscript metadata parsing and runtime API wiring
