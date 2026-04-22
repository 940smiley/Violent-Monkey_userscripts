// ==UserScript==
// @name         facebook: One-Click Unfollow Suggestions
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - One-Click Unfollow Suggestions.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-02';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: One-Click Unfollow Suggestions`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
