// ==UserScript==
// @name         gmail: Email Template Snippets
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Email Template Snippets.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-26';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Email Template Snippets`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
