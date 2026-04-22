// ==UserScript==
// @name         github: Batch Reopen Closed Issues
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Batch Reopen Closed Issues.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-42';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Batch Reopen Closed Issues`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
