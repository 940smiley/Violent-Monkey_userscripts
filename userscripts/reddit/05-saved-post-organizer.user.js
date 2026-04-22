// ==UserScript==
// @name         reddit: Saved Post Organizer
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Saved Post Organizer.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-05';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Saved Post Organizer`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
