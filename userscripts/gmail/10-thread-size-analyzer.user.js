// ==UserScript==
// @name         gmail: Thread Size Analyzer
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Thread Size Analyzer.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-10';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Thread Size Analyzer`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
