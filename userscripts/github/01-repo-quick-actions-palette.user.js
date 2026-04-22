// ==UserScript==
// @name         github: Repo Quick Actions Palette
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Repo Quick Actions Palette.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-01';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Repo Quick Actions Palette`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
