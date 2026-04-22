// ==UserScript==
// @name         reddit: Video Speed Controls
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Video Speed Controls.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-37';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Video Speed Controls`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
