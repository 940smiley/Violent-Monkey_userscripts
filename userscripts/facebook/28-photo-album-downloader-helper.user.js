// ==UserScript==
// @name         facebook: Photo Album Downloader Helper
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Photo Album Downloader Helper.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-28';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Photo Album Downloader Helper`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
