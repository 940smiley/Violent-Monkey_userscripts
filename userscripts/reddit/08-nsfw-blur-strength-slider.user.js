// ==UserScript==
// @name         reddit: NSFW Blur Strength Slider
// @namespace    vm-userscripts-reddit
// @version      0.1.0
// @description  Automation helper for reddit - NSFW Blur Strength Slider.
// @author       repo-bot
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'reddit-08';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: NSFW Blur Strength Slider`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
