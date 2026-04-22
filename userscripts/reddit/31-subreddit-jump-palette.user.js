// ==UserScript==
// @name         reddit: Subreddit Jump Palette
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Subreddit Jump Palette.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-31';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Subreddit Jump Palette`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
