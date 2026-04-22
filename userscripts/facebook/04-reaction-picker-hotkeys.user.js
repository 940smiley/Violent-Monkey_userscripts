// ==UserScript==
// @name         facebook: Reaction Picker Hotkeys
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Reaction Picker Hotkeys.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-04';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Reaction Picker Hotkeys`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
