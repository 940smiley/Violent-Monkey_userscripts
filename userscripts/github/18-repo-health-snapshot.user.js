// ==UserScript==
// @name         github: Repo Health Snapshot
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Repo Health Snapshot.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-18';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Repo Health Snapshot`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
