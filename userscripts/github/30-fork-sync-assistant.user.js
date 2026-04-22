// ==UserScript==
// @name         github: Fork Sync Assistant
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Fork Sync Assistant.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-30';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Fork Sync Assistant`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
