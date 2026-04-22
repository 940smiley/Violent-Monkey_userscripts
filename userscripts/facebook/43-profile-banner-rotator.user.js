// ==UserScript==
// @name         facebook: Profile Banner Rotator
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Profile Banner Rotator.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-43';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Profile Banner Rotator`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
