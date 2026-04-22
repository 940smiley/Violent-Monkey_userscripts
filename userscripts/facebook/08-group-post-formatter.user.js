// ==UserScript==
// @name         facebook: Group Post Formatter
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Group Post Formatter.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-08';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Group Post Formatter`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
