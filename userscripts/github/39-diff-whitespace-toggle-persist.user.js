// ==UserScript==
// @name         github: Diff Whitespace Toggle Persist
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Diff Whitespace Toggle Persist.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-39';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Diff Whitespace Toggle Persist`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
