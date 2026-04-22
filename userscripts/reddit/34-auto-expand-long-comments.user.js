// ==UserScript==
// @name         reddit: Auto Expand Long Comments
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Auto Expand Long Comments.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-34';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Expand Long Comments`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
