// ==UserScript==
// @name         reddit: Duplicate Link Detector
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Duplicate Link Detector.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-13';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Duplicate Link Detector`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
