// ==UserScript==
// @name         reddit: Archived Thread Notifier
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Archived Thread Notifier.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-43';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Archived Thread Notifier`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
