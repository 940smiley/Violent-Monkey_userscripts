// ==UserScript==
// @name         gmail: Mass Delete No-Reply
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Mass Delete No-Reply.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-40';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Mass Delete No-Reply`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
