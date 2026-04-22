// ==UserScript==
// @name         facebook: Bulk Remove Pending Requests
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Bulk Remove Pending Requests.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-25';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Bulk Remove Pending Requests`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
