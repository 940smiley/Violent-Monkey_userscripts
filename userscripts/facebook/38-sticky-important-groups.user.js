// ==UserScript==
// @name         facebook: Sticky Important Groups
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Sticky Important Groups.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-38';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Sticky Important Groups`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
