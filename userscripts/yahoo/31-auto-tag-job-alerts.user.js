// ==UserScript==
// @name         yahoo: Auto Tag Job Alerts
// @namespace    vm-userscripts-yahoo
// @version      0.1.0
// @description  Automation helper for yahoo - Auto Tag Job Alerts.
// @author       repo-bot
// @match        https://mail.yahoo.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'yahoo-31';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Tag Job Alerts`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
