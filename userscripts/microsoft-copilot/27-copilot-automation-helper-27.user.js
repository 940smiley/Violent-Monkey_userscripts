// ==UserScript==
// @name         microsoft-copilot: Copilot Automation Helper 27
// @namespace    vm-userscripts-microsoft-copilot
// @version      0.1.0
// @description  Automation helper for microsoft-copilot - Copilot Automation Helper 27.
// @author       repo-bot
// @match        https://copilot.microsoft.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'microsoft-copilot-27';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Copilot Automation Helper 27`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
