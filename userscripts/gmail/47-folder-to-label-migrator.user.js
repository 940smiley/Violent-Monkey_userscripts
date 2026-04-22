// ==UserScript==
// @name         gmail: Folder-to-Label Migrator
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Folder-to-Label Migrator.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-47';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Folder-to-Label Migrator`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
