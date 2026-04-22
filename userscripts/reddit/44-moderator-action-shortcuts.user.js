// ==UserScript==
// @name         reddit: Moderator Action Shortcuts
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Moderator Action Shortcuts.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-44';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Moderator Action Shortcuts`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
