// ==UserScript==
// @name         gmail: Duplicate Thread Detector
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Duplicate Thread Detector.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-18';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Duplicate Thread Detector`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
