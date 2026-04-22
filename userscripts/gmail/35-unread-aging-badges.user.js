// ==UserScript==
// @name         gmail: Unread Aging Badges
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Unread Aging Badges.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-35';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Unread Aging Badges`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
