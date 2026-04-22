// ==UserScript==
// @name         localhost: Localhost Dev Utility 06
// @namespace    vm-userscripts-localhost
// @version      0.1.0
// @description  Automation helper for localhost - Localhost Dev Utility 06.
// @author       repo-bot
// @match        http://localhost/*
// @match        http://127.0.0.1/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'localhost-06';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Localhost Dev Utility 06`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
