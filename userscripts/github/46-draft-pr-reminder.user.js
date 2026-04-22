// ==UserScript==
// @name         github: Draft PR Reminder
// @namespace    vm-userscripts-github
// @version      0.1.0
// @description  Automation helper for github - Draft PR Reminder.
// @author       repo-bot
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'github-46';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Draft PR Reminder`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
