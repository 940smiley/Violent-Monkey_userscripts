// ==UserScript==
// @name         reddit: Subreddit Quick Mute
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Subreddit Quick Mute.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-01';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Subreddit Quick Mute`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
