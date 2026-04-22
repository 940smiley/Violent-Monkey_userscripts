// ==UserScript==
// @name         github: Auto Expand Diffs
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Auto Expand Diffs.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-05';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Expand Diffs`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
