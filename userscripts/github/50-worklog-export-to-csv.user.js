// ==UserScript==
// @name         github: Worklog Export to CSV
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Worklog Export to CSV.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-50';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Worklog Export to CSV`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
