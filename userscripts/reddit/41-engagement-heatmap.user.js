// ==UserScript==
// @name         reddit: Engagement Heatmap
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Engagement Heatmap.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-41';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Engagement Heatmap`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
