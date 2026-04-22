// ==UserScript==
// @name         reddit: Batch Save Top Posts
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Batch Save Top Posts.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-32';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Batch Save Top Posts`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
