// ==UserScript==
// @name         github: CI Failure Quick Filter
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - CI Failure Quick Filter.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-27';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: CI Failure Quick Filter`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
