// ==UserScript==
// @name         github: Pinned Repositories Sidebar
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Pinned Repositories Sidebar.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-49';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Pinned Repositories Sidebar`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
