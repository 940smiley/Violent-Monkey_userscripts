// ==UserScript==
// @name         gmail: Mass Remove Category Tabs
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Mass Remove Category Tabs.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-22';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Mass Remove Category Tabs`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
