// ==UserScript==
// @name         gmail: Inbox Zero Macro
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Inbox Zero Macro.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-13';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Inbox Zero Macro`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
