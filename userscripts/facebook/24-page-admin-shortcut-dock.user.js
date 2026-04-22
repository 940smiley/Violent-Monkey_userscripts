// ==UserScript==
// @name         facebook: Page Admin Shortcut Dock
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Page Admin Shortcut Dock.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-24';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Page Admin Shortcut Dock`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
