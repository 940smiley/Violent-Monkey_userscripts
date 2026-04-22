// ==UserScript==
// @name         reddit: Keyword Mute Rules
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Keyword Mute Rules.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-17';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Keyword Mute Rules`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
