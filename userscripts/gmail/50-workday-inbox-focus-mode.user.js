// ==UserScript==
// @name         gmail: Workday Inbox Focus Mode
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Workday Inbox Focus Mode.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-50';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Workday Inbox Focus Mode`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
