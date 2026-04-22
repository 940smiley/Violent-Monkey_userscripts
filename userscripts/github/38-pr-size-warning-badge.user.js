// ==UserScript==
// @name         github: PR Size Warning Badge
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - PR Size Warning Badge.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-38';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: PR Size Warning Badge`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
