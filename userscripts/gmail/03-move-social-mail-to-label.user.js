// ==UserScript==
// @name         gmail: Move Social Mail to Label
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Move Social Mail to Label.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-03';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Move Social Mail to Label`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
