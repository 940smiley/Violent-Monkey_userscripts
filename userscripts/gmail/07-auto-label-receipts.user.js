// ==UserScript==
// @name         gmail: Auto Label Receipts
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Auto Label Receipts.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-07';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Label Receipts`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
