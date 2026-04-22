// ==UserScript==
// @name         gmail: OTP Message Booster
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - OTP Message Booster.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-29';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: OTP Message Booster`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
