// ==UserScript==
// @name         github: Stale Branch Detector
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Stale Branch Detector.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-19';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Stale Branch Detector`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
