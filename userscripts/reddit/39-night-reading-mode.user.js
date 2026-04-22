// ==UserScript==
// @name         reddit: Night Reading Mode
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Night Reading Mode.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-39';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Night Reading Mode`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
