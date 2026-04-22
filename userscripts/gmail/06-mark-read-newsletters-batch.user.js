// ==UserScript==
// @name         gmail: Mark Read Newsletters Batch
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Mark Read Newsletters Batch.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-06';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Mark Read Newsletters Batch`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
