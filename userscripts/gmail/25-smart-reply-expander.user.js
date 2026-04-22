// ==UserScript==
// @name         gmail: Smart Reply Expander
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Smart Reply Expander.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-25';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Smart Reply Expander`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
