// ==UserScript==
// @name         github: Template Variable Inserter
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Template Variable Inserter.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-43';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Template Variable Inserter`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
