// ==UserScript==
// @name         github: Security Advisory Banner
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Security Advisory Banner.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-29';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Security Advisory Banner`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
