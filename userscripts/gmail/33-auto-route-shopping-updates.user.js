// ==UserScript==
// @name         gmail: Auto Route Shopping Updates
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Auto Route Shopping Updates.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-33';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Route Shopping Updates`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
