// ==UserScript==
// @name         reddit: Downvote Confirmation Guard
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Downvote Confirmation Guard.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-07';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Downvote Confirmation Guard`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
