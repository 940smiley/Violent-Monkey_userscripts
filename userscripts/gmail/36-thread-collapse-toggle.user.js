// ==UserScript==
// @name         gmail: Thread Collapse Toggle
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Thread Collapse Toggle.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-36';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Thread Collapse Toggle`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
