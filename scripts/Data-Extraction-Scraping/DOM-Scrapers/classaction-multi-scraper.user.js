// ==UserScript==
// @name        ClassAction Multi Scraper
// @namespace   https://github.com/Violent-Monkey_userscripts
// @version     1.0.0
// @description Scrape class action case data from multiple legal settlement sites and export JSON/CSV.
// @match       *://*.classaction.org/*
// @match       *://*.claimdepot.com/*
// @match       *://*.openclassactions.com/*
// @match       *://*.classaction.com/*
// @category    Data Extraction & Scraping / DOM Scrapers
// @grant       GM_registerMenuCommand
// @grant       GM_xmlhttpRequest
// @connect     classaction.org
// @connect     claimdepot.com
// @connect     openclassactions.com
// @connect     classaction.com
// ==/UserScript==

(function () {
  'use strict';

  const DEFAULT_TARGETS = [
    'https://www.classaction.org',
    'https://claimdepot.com',
    'https://openclassactions.com',
    'https://www.classaction.com'
  ];

  const config = {
    debug: false,
    includeCurrentPage: true,
    customTargets: []
  };

  const log = (...args) => config.debug && console.log('[classaction-multi-scraper]', ...args);

  function normalizeText(value) {
    return (value || '')
      .replace(/\s+/g, ' ')
      .replace(/\u00a0/g, ' ')
      .trim();
  }

  function parseDate(text) {
    if (!text) return '';
    const match = text.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{1,2},?\s+\d{4}\b/i);
    return match ? match[0] : '';
  }

  function normalizeStatus(raw = '') {
    const value = normalizeText(raw).toLowerCase();
    if (!value) return 'could be eligible';
    if (/(claimed|already filed|submitted)/.test(value)) return 'claimed';
    if (/(not eligible|ineligible|excluded|closed)/.test(value)) return 'not eligible';
    if (/(eligible|qualify|can claim|open)/.test(value)) return 'eligible';
    return 'could be eligible';
  }

  function classifyCategory(text) {
    const source = normalizeText(text).toLowerCase();
    if (/(data|privacy|breach)/.test(source)) return 'Privacy/Data Breach';
    if (/(consumer|product|retail|service)/.test(source)) return 'Consumer';
    if (/(employment|wage|labor|work)/.test(source)) return 'Employment';
    if (/(insurance|medical|health|drug)/.test(source)) return 'Health/Insurance';
    if (/(securities|investor|finance|bank)/.test(source)) return 'Financial';
    return 'General';
  }

  function uniqueBy(items, keyer) {
    const seen = new Set();
    return items.filter((item) => {
      const key = keyer(item);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function extractFromDocument(doc, sourceUrl) {
    const itemSelectors = [
      'article',
      '.post',
      '.entry',
      '.claim',
      '.settlement',
      '.card',
      '.listing-item',
      '.list-item'
    ];

    let nodes = [];
    for (const selector of itemSelectors) {
      const found = Array.from(doc.querySelectorAll(selector));
      if (found.length >= 5) {
        nodes = found;
        break;
      }
    }
    if (nodes.length === 0) {
      nodes = Array.from(doc.querySelectorAll('a[href*="claim"], a[href*="settlement"], a[href*="class-action"]'));
    }

    log('candidate nodes', sourceUrl, nodes.length);

    const records = nodes.map((node) => {
      const anchor = node.matches('a') ? node : node.querySelector('a[href]');
      const titleNode = node.querySelector('h1, h2, h3, .title, .entry-title') || anchor || node;
      const text = normalizeText(node.textContent || '');
      const title = normalizeText(titleNode.textContent || '');
      const url = anchor ? new URL(anchor.getAttribute('href'), sourceUrl).href : sourceUrl;
      const deadline = parseDate(text);
      const status = normalizeStatus(text);
      const summary = normalizeText(text).slice(0, 350);
      const category = classifyCategory(`${title} ${summary}`);

      return {
        title,
        category,
        status,
        claim_url: url,
        deadline,
        summary,
        source: new URL(sourceUrl).hostname
      };
    }).filter((item) => item.title && item.claim_url);

    return uniqueBy(records, (item) => `${item.title.toLowerCase()}|${item.claim_url.toLowerCase()}`);
  }

  function fetchHtml(url) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'GET',
        url,
        onload: (response) => {
          if (response.status >= 200 && response.status < 400) {
            resolve(response.responseText);
            return;
          }
          reject(new Error(`HTTP ${response.status} for ${url}`));
        },
        onerror: () => reject(new Error(`Request failed for ${url}`))
      });
    });
  }

  function parseHtmlToDocument(html, sourceUrl) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const base = doc.createElement('base');
    base.href = sourceUrl;
    doc.head.prepend(base);
    return doc;
  }

  async function scanTarget(url) {
    try {
      log('scanning', url);
      const html = await fetchHtml(url);
      const doc = parseHtmlToDocument(html, url);
      const rows = extractFromDocument(doc, url);
      return rows;
    } catch (error) {
      console.warn(`[classaction-multi-scraper] Failed to scan ${url}:`, error.message);
      return [];
    }
  }

  function toCsv(rows) {
    const headers = ['title', 'category', 'status', 'claim_url', 'deadline', 'summary', 'source'];
    const escape = (v) => `"${String(v || '').replace(/"/g, '""')}"`;
    return [headers.join(','), ...rows.map((row) => headers.map((h) => escape(row[h])).join(','))].join('\n');
  }

  function download(filename, type, content) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function groupByEligibility(rows) {
    const groups = {
      'could be eligible': [],
      eligible: [],
      claimed: [],
      'not eligible': []
    };

    rows.forEach((row) => {
      const status = normalizeStatus(row.status);
      groups[status] = groups[status] || [];
      groups[status].push(row);
    });

    return groups;
  }

  async function runScrape(customUrlInput = '') {
    const provided = customUrlInput
      .split(/[\n,]/)
      .map((v) => v.trim())
      .filter(Boolean);

    const targets = uniqueBy([
      ...(config.includeCurrentPage ? [location.origin] : []),
      ...DEFAULT_TARGETS,
      ...config.customTargets,
      ...provided
    ], (value) => value.toLowerCase());

    alert(`ClassAction Multi Scraper: scanning ${targets.length} target(s).`);

    const all = [];
    for (const target of targets) {
      const rows = await scanTarget(target);
      all.push(...rows);
    }

    const normalized = uniqueBy(all.map((item) => ({
      ...item,
      title: normalizeText(item.title),
      category: normalizeText(item.category) || 'General',
      status: normalizeStatus(item.status),
      claim_url: normalizeText(item.claim_url),
      deadline: normalizeText(item.deadline),
      summary: normalizeText(item.summary),
      source: normalizeText(item.source)
    })), (row) => `${row.title.toLowerCase()}|${row.claim_url.toLowerCase()}`);

    const grouped = groupByEligibility(normalized);
    const output = {
      generated_at: new Date().toISOString(),
      total_records: normalized.length,
      groups: grouped,
      records: normalized
    };

    log('scrape output', output);

    download('classaction-multi-scraper.json', 'application/json', JSON.stringify(output, null, 2));
    download('classaction-multi-scraper.csv', 'text/csv;charset=utf-8', toCsv(normalized));

    alert(`ClassAction Multi Scraper finished. ${normalized.length} records exported.`);
  }

  function promptCustomTargets() {
    const input = prompt('Enter additional target URLs separated by comma or newline. Leave empty for defaults.');
    if (input === null) return;
    runScrape(input);
  }

  GM_registerMenuCommand('ClassAction Scraper: Run default scan', () => runScrape(''));
  GM_registerMenuCommand('ClassAction Scraper: Run with custom targets', promptCustomTargets);
  GM_registerMenuCommand('ClassAction Scraper: Toggle debug mode', () => {
    config.debug = !config.debug;
    alert(`ClassAction Multi Scraper debug mode: ${config.debug ? 'ON' : 'OFF'}`);
  });
})();
