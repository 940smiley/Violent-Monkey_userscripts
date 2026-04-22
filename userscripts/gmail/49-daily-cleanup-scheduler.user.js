// ==UserScript==
// @name         gmail: Daily Cleanup Scheduler
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Daily Cleanup Scheduler.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-49';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Daily Cleanup Scheduler`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
