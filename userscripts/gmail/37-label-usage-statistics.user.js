// ==UserScript==
// @name         gmail: Label Usage Statistics
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Label Usage Statistics.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-37';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Label Usage Statistics`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
