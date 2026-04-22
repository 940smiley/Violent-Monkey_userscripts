// ==UserScript==
// @name         gmail: Auto Archive Completed Tasks
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Auto Archive Completed Tasks.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-41';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Archive Completed Tasks`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
