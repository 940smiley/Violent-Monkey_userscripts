// ==UserScript==
// @name         gmail: Notification Noise Filter
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Notification Noise Filter.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-48';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Notification Noise Filter`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
