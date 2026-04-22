// ==UserScript==
// @name         facebook: Minimalist Feed Layout
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Minimalist Feed Layout.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-16';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Minimalist Feed Layout`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
