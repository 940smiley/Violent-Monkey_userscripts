// ==UserScript==
// @name         facebook: Timeline Year Navigator
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Timeline Year Navigator.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-30';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Timeline Year Navigator`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
