// ==UserScript==
// @name         reddit: Bulk Hide Read Posts
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Bulk Hide Read Posts.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-15';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Bulk Hide Read Posts`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
