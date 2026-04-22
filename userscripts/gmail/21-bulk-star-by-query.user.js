// ==UserScript==
// @name         gmail: Bulk Star by Query
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Bulk Star by Query.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-21';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Bulk Star by Query`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
