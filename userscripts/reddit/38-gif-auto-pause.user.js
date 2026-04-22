// ==UserScript==
// @name         reddit: GIF Auto Pause
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - GIF Auto Pause.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-38';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: GIF Auto Pause`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
