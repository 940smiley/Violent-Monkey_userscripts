// ==UserScript==
// @name         facebook: Hover Glow Buttons
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Hover Glow Buttons.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-20';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Hover Glow Buttons`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
