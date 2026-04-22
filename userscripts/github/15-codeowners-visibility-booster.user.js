// ==UserScript==
// @name         github: Codeowners Visibility Booster
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Codeowners Visibility Booster.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-15';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Codeowners Visibility Booster`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
