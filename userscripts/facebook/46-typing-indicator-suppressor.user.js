// ==UserScript==
// @name         facebook: Typing Indicator Suppressor
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Typing Indicator Suppressor.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-46';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Typing Indicator Suppressor`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
