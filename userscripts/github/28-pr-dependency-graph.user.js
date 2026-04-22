// ==UserScript==
// @name         github: PR Dependency Graph
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - PR Dependency Graph.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-28';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: PR Dependency Graph`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
