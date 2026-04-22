// ==UserScript==
// @name         facebook: Compact Chat Panels
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Compact Chat Panels.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-37';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Compact Chat Panels`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
