// ==UserScript==
// @name         github: Open Linked Issues Panel
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Open Linked Issues Panel.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-20';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Open Linked Issues Panel`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
