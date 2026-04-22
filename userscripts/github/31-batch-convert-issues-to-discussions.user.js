// ==UserScript==
// @name         github: Batch Convert Issues to Discussions
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Batch Convert Issues to Discussions.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-31';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Batch Convert Issues to Discussions`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
