// ==UserScript==
// @name         gmail: Digest Consolidation Helper
// @namespace    vm-userscripts-gmail
// @version      0.1.0
// @description  Automation helper for gmail - Digest Consolidation Helper.
// @author       repo-bot
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'gmail-34';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Digest Consolidation Helper`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
