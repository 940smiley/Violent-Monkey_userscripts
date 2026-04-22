// ==UserScript==
// @name         gmail: Domain Blocklist Manager
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Domain Blocklist Manager.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-30';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Domain Blocklist Manager`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
