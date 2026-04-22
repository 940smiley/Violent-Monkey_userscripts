// ==UserScript==
// @name         facebook: Shake to Top Button
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Shake to Top Button.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-45';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Shake to Top Button`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
