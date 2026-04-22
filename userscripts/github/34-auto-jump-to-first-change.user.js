// ==UserScript==
// @name         github: Auto Jump to First Change
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Auto Jump to First Change.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-34';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Jump to First Change`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
