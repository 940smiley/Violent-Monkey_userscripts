// ==UserScript==
// @name         github: Copy Branch Name Button
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Copy Branch Name Button.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-10';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Copy Branch Name Button`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
