// ==UserScript==
// @name         facebook: Engagement Analytics Overlay
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Engagement Analytics Overlay.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-50';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Engagement Analytics Overlay`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
