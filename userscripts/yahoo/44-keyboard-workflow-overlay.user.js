// ==UserScript==
// @name         yahoo: Keyboard Workflow Overlay
// @namespace    vm-userscripts-yahoo
// @version      0.1.0
// @description  Automation helper for yahoo - Keyboard Workflow Overlay.
// @author       repo-bot
// @match        https://mail.yahoo.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'yahoo-44';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Keyboard Workflow Overlay`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
