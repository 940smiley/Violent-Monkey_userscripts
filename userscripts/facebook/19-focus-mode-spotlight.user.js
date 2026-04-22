// ==UserScript==
// @name         facebook: Focus Mode Spotlight
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Focus Mode Spotlight.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-19';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Focus Mode Spotlight`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
