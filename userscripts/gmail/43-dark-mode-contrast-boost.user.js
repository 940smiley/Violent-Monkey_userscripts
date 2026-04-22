// ==UserScript==
// @name         gmail: Dark Mode Contrast Boost
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Dark Mode Contrast Boost.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-43';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Dark Mode Contrast Boost`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
