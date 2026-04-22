// ==UserScript==
// @name         facebook: Auto Expand See More
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Auto Expand See More.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-21';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Expand See More`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
