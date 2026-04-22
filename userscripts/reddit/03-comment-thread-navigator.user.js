// ==UserScript==
// @name         reddit: Comment Thread Navigator
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Comment Thread Navigator.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-03';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Comment Thread Navigator`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
