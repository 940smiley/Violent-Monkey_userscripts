// ==UserScript==
// @name         facebook: Mass Hide Sponsored Posts
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Mass Hide Sponsored Posts.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-03';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Mass Hide Sponsored Posts`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
