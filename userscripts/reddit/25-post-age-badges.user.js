// ==UserScript==
// @name         reddit: Post Age Badges
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Post Age Badges.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-25';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Post Age Badges`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
