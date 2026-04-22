// ==UserScript==
// @name         reddit: Blocked User Marker
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Blocked User Marker.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-29';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Blocked User Marker`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
