// ==UserScript==
// @name         facebook: Large Font Toggle
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Large Font Toggle.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-15';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Large Font Toggle`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
