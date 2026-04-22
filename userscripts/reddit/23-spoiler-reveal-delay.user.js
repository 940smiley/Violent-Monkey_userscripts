// ==UserScript==
// @name         reddit: Spoiler Reveal Delay
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Spoiler Reveal Delay.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-23';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Spoiler Reveal Delay`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
