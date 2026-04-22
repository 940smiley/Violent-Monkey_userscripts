// ==UserScript==
// @name         github: Changelog Snippet Generator
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Changelog Snippet Generator.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-21';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Changelog Snippet Generator`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
