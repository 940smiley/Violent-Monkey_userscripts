// ==UserScript==
// @name         gmail: Label Color Optimizer
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Label Color Optimizer.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-20';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Label Color Optimizer`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
