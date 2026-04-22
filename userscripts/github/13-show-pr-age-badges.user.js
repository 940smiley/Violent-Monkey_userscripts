// ==UserScript==
// @name         github: Show PR Age Badges
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Show PR Age Badges.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-13';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Show PR Age Badges`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
