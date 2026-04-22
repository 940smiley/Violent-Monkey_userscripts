// ==UserScript==
// @name         google-workspace: Sheets Range Naming Helper
// @namespace    vm-userscripts-google-workspace
// @version      0.1.0
// @description  Automation helper for google-workspace - Sheets Range Naming Helper.
// @author       repo-bot
// @match        https://docs.google.com/spreadsheets/*
// @match        https://docs.google.com/document/*
// @match        https://docs.google.com/presentation/*
// @match        https://sites.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'google-workspace-08';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Sheets Range Naming Helper`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
