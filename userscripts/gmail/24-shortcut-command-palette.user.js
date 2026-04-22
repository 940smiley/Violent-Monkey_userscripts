// ==UserScript==
// @name         gmail: Shortcut Command Palette
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Shortcut Command Palette.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-24';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Shortcut Command Palette`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
