// ==UserScript==
// @name         reddit: Thread Depth Limiter
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Thread Depth Limiter.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-26';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Thread Depth Limiter`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
