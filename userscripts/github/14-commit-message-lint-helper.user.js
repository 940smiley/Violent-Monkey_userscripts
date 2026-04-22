// ==UserScript==
// @name         github: Commit Message Lint Helper
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Commit Message Lint Helper.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-14';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Commit Message Lint Helper`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
