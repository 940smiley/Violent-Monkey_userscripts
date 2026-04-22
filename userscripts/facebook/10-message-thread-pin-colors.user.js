// ==UserScript==
// @name         facebook: Message Thread Pin Colors
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Message Thread Pin Colors.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-10';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Message Thread Pin Colors`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
