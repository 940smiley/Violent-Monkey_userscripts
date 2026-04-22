// ==UserScript==
// @name         facebook: Notification Filter Chips
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Notification Filter Chips.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-34';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Notification Filter Chips`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
