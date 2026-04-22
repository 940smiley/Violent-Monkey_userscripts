// ==UserScript==
// @name         gmail: Spam Burst Cleanup
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Spam Burst Cleanup.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-12';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Spam Burst Cleanup`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
