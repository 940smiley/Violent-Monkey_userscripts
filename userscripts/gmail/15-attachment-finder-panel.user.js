// ==UserScript==
// @name         gmail: Attachment Finder Panel
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Attachment Finder Panel.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-15';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Attachment Finder Panel`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
