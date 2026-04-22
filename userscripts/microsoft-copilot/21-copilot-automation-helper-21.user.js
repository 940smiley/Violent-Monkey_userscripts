// ==UserScript==
// @name         microsoft-copilot: Copilot Automation Helper 21
// @namespace    vm-userscripts-microsoft-copilot
// @version      0.1.0
// @description  Automation helper for microsoft-copilot - Copilot Automation Helper 21.
// @author       repo-bot
// @match        https://copilot.microsoft.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'microsoft-copilot-21';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Copilot Automation Helper 21`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
