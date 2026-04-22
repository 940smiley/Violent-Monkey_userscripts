// ==UserScript==
// @name         reddit: Live Thread Auto Refresh
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Live Thread Auto Refresh.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-27';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Live Thread Auto Refresh`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
