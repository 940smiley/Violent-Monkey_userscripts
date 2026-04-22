// ==UserScript==
// @name         reddit: Unread Comment Highlighter
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Unread Comment Highlighter.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-28';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Unread Comment Highlighter`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
