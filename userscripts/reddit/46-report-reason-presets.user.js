// ==UserScript==
// @name         reddit: Report Reason Presets
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Report Reason Presets.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-46';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Report Reason Presets`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
