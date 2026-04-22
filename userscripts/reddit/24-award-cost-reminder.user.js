// ==UserScript==
// @name         reddit: Award Cost Reminder
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Award Cost Reminder.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-24';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Award Cost Reminder`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
