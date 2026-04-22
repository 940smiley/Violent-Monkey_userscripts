// ==UserScript==
// @name         gmail: Bounce Detection Helper
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Bounce Detection Helper.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-46';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Bounce Detection Helper`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
