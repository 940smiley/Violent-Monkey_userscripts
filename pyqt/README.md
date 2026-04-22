# PyQt Userscript Runner

## Setup

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Build Windows executable

```bash
pip install pyinstaller
pyinstaller --noconfirm --windowed --name userscript-runner app.py
```

## Features

- QtWebEngine target preview
- JS runtime injection for userscript execution
- Python-managed script discovery/cache/export operations
- URL + local script loading
