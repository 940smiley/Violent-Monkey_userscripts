// ==UserScript==
// @name         gmail: Rule Conflict Checker
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Rule Conflict Checker.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-19';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Rule Conflict Checker`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
