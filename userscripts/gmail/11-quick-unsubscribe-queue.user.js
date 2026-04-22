// ==UserScript==
// @name         gmail: Quick Unsubscribe Queue
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Quick Unsubscribe Queue.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-11';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Quick Unsubscribe Queue`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
