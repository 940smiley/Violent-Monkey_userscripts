// ==UserScript==
// @name         facebook: Visual Neon Theme
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Visual Neon Theme.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-11';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Visual Neon Theme`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
