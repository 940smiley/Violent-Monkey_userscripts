// ==UserScript==
// @name         github: Bulk Add Labels by Query
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Bulk Add Labels by Query.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-03';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Bulk Add Labels by Query`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
