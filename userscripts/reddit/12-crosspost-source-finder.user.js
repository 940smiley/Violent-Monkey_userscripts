// ==UserScript==
// @name         reddit: Crosspost Source Finder
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Crosspost Source Finder.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-12';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Crosspost Source Finder`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
