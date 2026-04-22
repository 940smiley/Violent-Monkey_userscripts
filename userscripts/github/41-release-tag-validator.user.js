// ==UserScript==
// @name         github: Release Tag Validator
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Release Tag Validator.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-41';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Release Tag Validator`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
