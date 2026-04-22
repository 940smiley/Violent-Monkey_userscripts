// ==UserScript==
// @name         facebook: Comment Toxicity Flagger
// @namespace    vm-userscripts-facebook
// @version      0.1.0
// @description  Automation helper for facebook - Comment Toxicity Flagger.
// @author       repo-bot
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'facebook-29';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Comment Toxicity Flagger`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
