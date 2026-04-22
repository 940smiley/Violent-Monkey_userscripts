// ==UserScript==
// @name         reddit: Tab Title Notification Count
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Tab Title Notification Count.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-50';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Tab Title Notification Count`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
