// ==UserScript==
// @name         facebook: Animated Gradient Header
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Animated Gradient Header.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-13';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Animated Gradient Header`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
