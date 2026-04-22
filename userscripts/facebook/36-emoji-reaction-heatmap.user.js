// ==UserScript==
// @name         facebook: Emoji Reaction Heatmap
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Emoji Reaction Heatmap.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-36';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Emoji Reaction Heatmap`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
