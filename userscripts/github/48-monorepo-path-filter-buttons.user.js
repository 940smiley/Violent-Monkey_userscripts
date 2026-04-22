// ==UserScript==
// @name         github: Monorepo Path Filter Buttons
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Monorepo Path Filter Buttons.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-48';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Monorepo Path Filter Buttons`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
