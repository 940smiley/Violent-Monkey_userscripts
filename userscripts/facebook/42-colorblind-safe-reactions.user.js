// ==UserScript==
// @name         facebook: Colorblind Safe Reactions
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Colorblind Safe Reactions.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-42';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Colorblind Safe Reactions`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
