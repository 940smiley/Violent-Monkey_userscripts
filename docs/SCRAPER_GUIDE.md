# SCRAPER GUIDE

## Script

`scripts/Data-Extraction-Scraping/DOM-Scrapers/classaction-multi-scraper.user.js`

## Supported Sites

- `classaction.org`
- `claimdepot.com`
- `openclassactions.com`
- `classaction.com`

## Default Behavior

From userscript menu:
- **Run default scan**: scans current origin + default target list.
- **Run with custom targets**: accepts comma/newline separated URLs.
- **Toggle debug mode**: enables verbose logging in console.

## Extracted Fields

- `title`
- `category`
- `status`
- `claim_url`
- `deadline`
- `summary`
- `source`

## Post-processing

- Text normalization
- Status normalization
- Deduplication by `title + claim_url`
- Grouping by eligibility:
  - `could be eligible`
  - `eligible`
  - `claimed`
  - `not eligible`

## Export

- JSON file: `classaction-multi-scraper.json`
- CSV file: `classaction-multi-scraper.csv`

Both exports download automatically after scan completion.
