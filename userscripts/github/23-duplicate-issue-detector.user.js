// ==UserScript==
// @name         github: Duplicate Issue Detector
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Duplicate Issue Detector.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-23';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Duplicate Issue Detector`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
