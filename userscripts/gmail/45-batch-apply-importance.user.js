// ==UserScript==
// @name         gmail: Batch Apply Importance
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Batch Apply Importance.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-45';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Batch Apply Importance`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
