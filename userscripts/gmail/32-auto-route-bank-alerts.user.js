// ==UserScript==
// @name         gmail: Auto Route Bank Alerts
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Auto Route Bank Alerts.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-32';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Route Bank Alerts`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
