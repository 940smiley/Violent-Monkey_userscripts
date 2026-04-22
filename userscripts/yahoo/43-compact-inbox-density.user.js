// ==UserScript==
// @name         yahoo: Compact Inbox Density
// @namespace    vm-userscripts-yahoo
// @version      0.1.0
// @description  Automation helper for yahoo - Compact Inbox Density.
// @author       repo-bot
// @match        https://mail.yahoo.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'yahoo-43';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Compact Inbox Density`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
