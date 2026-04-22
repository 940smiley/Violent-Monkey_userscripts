// ==UserScript==
// @name         reddit: Comment Sentiment Flags
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Comment Sentiment Flags.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-42';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Comment Sentiment Flags`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
