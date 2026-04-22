// ==UserScript==
// @name Example Scraper
// @description Captures heading texts from the page.
// @match *://*/*
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==
(async function () {
  const headings = [...document.querySelectorAll('h1,h2,h3')].map((h) => h.textContent?.trim()).filter(Boolean);
  GM_setValue('lastHeadings', headings);
  console.log('Captured headings:', headings);
})();
