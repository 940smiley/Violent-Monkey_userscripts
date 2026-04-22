// ==UserScript==
// @name         facebook: Marketplace Listing Notes
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Marketplace Listing Notes.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-26';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Marketplace Listing Notes`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
