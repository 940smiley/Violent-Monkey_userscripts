// ==UserScript==
// @name         facebook: Post Scheduler Helper
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Post Scheduler Helper.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-35';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Post Scheduler Helper`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
