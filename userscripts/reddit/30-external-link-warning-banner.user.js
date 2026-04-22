// ==UserScript==
// @name         reddit: External Link Warning Banner
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - External Link Warning Banner.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-30';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: External Link Warning Banner`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
