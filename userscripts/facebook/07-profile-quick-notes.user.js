// ==UserScript==
// @name         facebook: Profile Quick Notes
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Profile Quick Notes.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-07';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Profile Quick Notes`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
