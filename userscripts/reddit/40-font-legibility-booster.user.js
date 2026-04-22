// ==UserScript==
// @name         reddit: Font Legibility Booster
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Font Legibility Booster.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-40';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Font Legibility Booster`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
