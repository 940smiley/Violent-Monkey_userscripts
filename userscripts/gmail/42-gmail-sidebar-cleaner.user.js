// ==UserScript==
// @name         gmail: Gmail Sidebar Cleaner
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Gmail Sidebar Cleaner.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-42';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Gmail Sidebar Cleaner`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
