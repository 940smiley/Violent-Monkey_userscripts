// ==UserScript==
// @name         reddit: Mod Queue Helper
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Mod Queue Helper.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-14';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Mod Queue Helper`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
