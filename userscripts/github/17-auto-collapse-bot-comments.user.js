// ==UserScript==
// @name         github: Auto Collapse Bot Comments
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Auto Collapse Bot Comments.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-17';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Collapse Bot Comments`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
