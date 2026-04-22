// ==UserScript==
// @name         facebook: Ad Preference Quick Linker
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Ad Preference Quick Linker.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-40';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Ad Preference Quick Linker`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
