// ==UserScript==
// @name         google-workspace: Workspace Activity Digest
// @namespace    vm-userscripts-google-workspace
// @version      0.1.0
// @description  Automation helper for google-workspace - Workspace Activity Digest.
// @author       repo-bot
// @match        https://docs.google.com/spreadsheets/*
// @match        https://docs.google.com/document/*
// @match        https://docs.google.com/presentation/*
// @match        https://sites.google.com/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const scriptId = 'google-workspace-46';
  const logPrefix = `[${scriptId}]`;

  const ready = () => {
    console.info(`${logPrefix} active: Workspace Activity Digest`);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
