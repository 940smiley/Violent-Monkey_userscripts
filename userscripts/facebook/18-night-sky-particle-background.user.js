// ==UserScript==
// @name         facebook: Night Sky Particle Background
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Night Sky Particle Background.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-18';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Night Sky Particle Background`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
