// ==UserScript==
// @name         github: Assignee Load Indicator
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Assignee Load Indicator.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-24';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Assignee Load Indicator`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
