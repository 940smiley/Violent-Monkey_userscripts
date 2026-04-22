// ==UserScript==
// @name         gmail: Auto Route GitHub Notifications
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Auto Route GitHub Notifications.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-31';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Route GitHub Notifications`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
