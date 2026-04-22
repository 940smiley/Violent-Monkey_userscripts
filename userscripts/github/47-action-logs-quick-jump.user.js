// ==UserScript==
// @name         github: Action Logs Quick Jump
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Action Logs Quick Jump.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-47';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Action Logs Quick Jump`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
