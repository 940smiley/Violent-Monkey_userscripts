// ==UserScript==
// @name         github: Saved Search Tabs
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Saved Search Tabs.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-36';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Saved Search Tabs`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
