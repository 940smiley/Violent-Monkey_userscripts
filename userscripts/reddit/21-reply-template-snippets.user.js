// ==UserScript==
// @name         reddit: Reply Template Snippets
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Reply Template Snippets.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-21';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Reply Template Snippets`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
