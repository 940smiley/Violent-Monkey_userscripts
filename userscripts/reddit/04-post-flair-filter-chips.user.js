// ==UserScript==
// @name         reddit: Post Flair Filter Chips
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Post Flair Filter Chips.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-04';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Post Flair Filter Chips`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
