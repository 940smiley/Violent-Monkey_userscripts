// ==UserScript==
// @name         reddit: Content Type Filter
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Content Type Filter.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-36';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Content Type Filter`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
