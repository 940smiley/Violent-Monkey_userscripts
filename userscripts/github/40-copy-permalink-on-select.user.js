// ==UserScript==
// @name         github: Copy Permalink on Select
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Copy Permalink on Select.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-40';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Copy Permalink on Select`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
