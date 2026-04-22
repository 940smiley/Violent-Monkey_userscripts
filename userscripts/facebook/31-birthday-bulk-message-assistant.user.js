// ==UserScript==
// @name         facebook: Birthday Bulk Message Assistant
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Birthday Bulk Message Assistant.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-31';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Birthday Bulk Message Assistant`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
