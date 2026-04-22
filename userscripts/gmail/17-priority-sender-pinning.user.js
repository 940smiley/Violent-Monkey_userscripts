// ==UserScript==
// @name         gmail: Priority Sender Pinning
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Priority Sender Pinning.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-17';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Priority Sender Pinning`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
