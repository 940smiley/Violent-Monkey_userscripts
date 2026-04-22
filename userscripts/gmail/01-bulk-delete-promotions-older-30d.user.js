// ==UserScript==
// @name         gmail: Bulk Delete Promotions Older 30d
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Bulk Delete Promotions Older 30d.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-01';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Bulk Delete Promotions Older 30d`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
