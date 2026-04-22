// ==UserScript==
// @name         yahoo: Rule Conflict Detector
// @namespace    vm-userscripts-yahoo
// @version      0.1.0
// @description  Automation helper for yahoo - Rule Conflict Detector.
// @author       repo-bot
// @match        https://mail.yahoo.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'yahoo-45';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Rule Conflict Detector`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
