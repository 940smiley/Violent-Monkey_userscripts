// ==UserScript==
// @name         facebook: Batch Unlike Pages
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Batch Unlike Pages.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-49';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Batch Unlike Pages`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
