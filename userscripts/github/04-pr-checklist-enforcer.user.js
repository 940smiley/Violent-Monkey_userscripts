// ==UserScript==
// @name         github: PR Checklist Enforcer
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - PR Checklist Enforcer.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-04';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: PR Checklist Enforcer`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
