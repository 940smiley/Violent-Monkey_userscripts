// ==UserScript==
// @name         reddit: Markdown Helper Toolbar
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Markdown Helper Toolbar.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-22';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Markdown Helper Toolbar`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
