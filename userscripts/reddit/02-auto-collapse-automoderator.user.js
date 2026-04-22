// ==UserScript==
// @name         reddit: Auto Collapse AutoModerator
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - Auto Collapse AutoModerator.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-02';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Auto Collapse AutoModerator`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
