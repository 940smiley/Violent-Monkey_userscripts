// ==UserScript==
// @name         gmail: Rule Restore Import
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Rule Restore Import.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-39';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Rule Restore Import`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
