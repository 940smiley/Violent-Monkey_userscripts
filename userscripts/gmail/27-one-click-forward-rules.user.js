// ==UserScript==
// @name         gmail: One-Click Forward Rules
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - One-Click Forward Rules.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-27';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: One-Click Forward Rules`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
