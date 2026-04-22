// ==UserScript==
// @name         reddit: Time Spent Reminder
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Time Spent Reminder.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-16';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Time Spent Reminder`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
