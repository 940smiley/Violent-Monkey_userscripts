// ==UserScript==
// @name         facebook: Event RSVP Batch Helper
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Event RSVP Batch Helper.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-09';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Event RSVP Batch Helper`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
