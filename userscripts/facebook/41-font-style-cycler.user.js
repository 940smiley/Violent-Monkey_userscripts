// ==UserScript==
// @name         facebook: Font Style Cycler
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Font Style Cycler.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-41';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Font Style Cycler`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
