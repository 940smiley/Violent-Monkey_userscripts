// ==UserScript==
// @name         gmail: Calendar Invite Auto Label
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Calendar Invite Auto Label.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-16';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Calendar Invite Auto Label`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
