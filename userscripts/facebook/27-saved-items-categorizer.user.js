// ==UserScript==
// @name         facebook: Saved Items Categorizer
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Saved Items Categorizer.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-27';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Saved Items Categorizer`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
