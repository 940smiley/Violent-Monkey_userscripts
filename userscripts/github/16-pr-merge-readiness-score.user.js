// ==UserScript==
// @name         github: PR Merge Readiness Score
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - PR Merge Readiness Score.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-16';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: PR Merge Readiness Score`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
