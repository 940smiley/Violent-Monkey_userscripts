// ==UserScript==
// @name         github: Bulk Close Stale Issues
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Bulk Close Stale Issues.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-02';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Bulk Close Stale Issues`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
