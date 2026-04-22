// ==UserScript==
// @name         reddit: New Comment Ping Sounds
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - New Comment Ping Sounds.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-18';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: New Comment Ping Sounds`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
