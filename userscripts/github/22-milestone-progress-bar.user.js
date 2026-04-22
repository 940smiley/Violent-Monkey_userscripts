// ==UserScript==
// @name         github: Milestone Progress Bar
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Milestone Progress Bar.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-22';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Milestone Progress Bar`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
