// ==UserScript==
// @name         reddit: Profile Summary Snapshot
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Profile Summary Snapshot.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-19';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Profile Summary Snapshot`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
