// ==UserScript==
// @name         facebook: Scroll Progress Indicator
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Scroll Progress Indicator.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-44';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Scroll Progress Indicator`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
