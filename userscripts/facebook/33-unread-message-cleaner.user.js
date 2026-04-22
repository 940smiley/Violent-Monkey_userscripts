// ==UserScript==
// @name         facebook: Unread Message Cleaner
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Unread Message Cleaner.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-33';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Unread Message Cleaner`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
