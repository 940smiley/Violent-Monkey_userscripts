// ==UserScript==
// @name         reddit: Compact Post Cards
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Compact Post Cards.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-09';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Compact Post Cards`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
