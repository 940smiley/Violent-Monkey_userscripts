// ==UserScript==
// @name         github: Repo File Tree Width Toggle
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Repo File Tree Width Toggle.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-33';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Repo File Tree Width Toggle`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
