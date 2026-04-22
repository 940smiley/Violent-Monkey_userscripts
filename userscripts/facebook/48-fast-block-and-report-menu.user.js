// ==UserScript==
// @name         facebook: Fast Block and Report Menu
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Fast Block and Report Menu.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-48';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Fast Block and Report Menu`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
