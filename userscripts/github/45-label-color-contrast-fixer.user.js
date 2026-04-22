// ==UserScript==
// @name         github: Label Color Contrast Fixer
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Label Color Contrast Fixer.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-45';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Label Color Contrast Fixer`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
