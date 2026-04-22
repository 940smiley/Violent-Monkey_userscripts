// ==UserScript==
// @name         github: Issue Template Autofill
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Issue Template Autofill.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-09';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Issue Template Autofill`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
