// ==UserScript==
// @name         github: Issue SLA Timer
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Issue SLA Timer.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-37';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Issue SLA Timer`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
