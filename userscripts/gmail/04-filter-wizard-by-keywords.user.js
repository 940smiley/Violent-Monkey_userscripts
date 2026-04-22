// ==UserScript==
// @name         gmail: Filter Wizard by Keywords
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Filter Wizard by Keywords.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-04';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Filter Wizard by Keywords`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
