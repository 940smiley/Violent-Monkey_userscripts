// ==UserScript==
// @name         github: Keyboard Shortcuts Overlay
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Keyboard Shortcuts Overlay.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-25';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Keyboard Shortcuts Overlay`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
