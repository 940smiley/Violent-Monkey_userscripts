// ==UserScript==
// @name         gmail: Create Label from Sender
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Create Label from Sender.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-02';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Create Label from Sender`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
