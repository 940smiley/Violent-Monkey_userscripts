// ==UserScript==
// @name         google-workspace: Sites Content Staleness Badge
// @namespace    vm-userscripts-google-workspace
// @version      0.1.0
// @description  Automation helper for google-workspace - Sites Content Staleness Badge.
// @author       repo-bot
// @match        https://docs.google.com/spreadsheets/*
// @match        https://docs.google.com/document/*
// @match        https://docs.google.com/presentation/*
// @match        https://sites.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'google-workspace-39';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Sites Content Staleness Badge`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
