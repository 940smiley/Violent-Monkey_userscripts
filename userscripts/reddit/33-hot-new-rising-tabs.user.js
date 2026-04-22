// ==UserScript==
// @name         reddit: Hot-New-Rising Tabs
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Hot-New-Rising Tabs.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-33';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Hot-New-Rising Tabs`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
