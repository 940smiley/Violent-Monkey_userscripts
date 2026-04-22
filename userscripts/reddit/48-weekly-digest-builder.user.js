// ==UserScript==
// @name         reddit: Weekly Digest Builder
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Weekly Digest Builder.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-48';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Weekly Digest Builder`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
