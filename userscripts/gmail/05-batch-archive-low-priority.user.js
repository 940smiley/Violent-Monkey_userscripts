// ==UserScript==
// @name         gmail: Batch Archive Low Priority
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Batch Archive Low Priority.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-05';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Batch Archive Low Priority`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
