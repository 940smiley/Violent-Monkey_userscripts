// ==UserScript==
// @name         yahoo: Move and Mark Read Combo
// @namespace    vm-userscripts-yahoo
// @version      0.1.0
// @description  Automation helper for yahoo - Move and Mark Read Combo.
// @author       repo-bot
// @match        https://mail.yahoo.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'yahoo-36';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Move and Mark Read Combo`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
