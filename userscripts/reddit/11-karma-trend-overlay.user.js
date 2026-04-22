// ==UserScript==
// @name         reddit: Karma Trend Overlay
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Karma Trend Overlay.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-11';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Karma Trend Overlay`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
