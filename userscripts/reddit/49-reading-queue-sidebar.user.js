// ==UserScript==
// @name         reddit: Reading Queue Sidebar
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Reading Queue Sidebar.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-49';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Reading Queue Sidebar`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
