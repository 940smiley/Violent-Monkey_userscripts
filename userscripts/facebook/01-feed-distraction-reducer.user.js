// ==UserScript==
// @name         facebook: Feed Distraction Reducer
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Feed Distraction Reducer.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-01';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Feed Distraction Reducer`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
