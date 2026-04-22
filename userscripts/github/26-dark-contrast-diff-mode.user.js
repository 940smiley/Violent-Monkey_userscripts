// ==UserScript==
// @name         github: Dark Contrast Diff Mode
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Dark Contrast Diff Mode.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-26';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Dark Contrast Diff Mode`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
