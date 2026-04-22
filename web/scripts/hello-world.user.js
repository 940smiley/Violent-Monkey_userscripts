// ==UserScript==
// @name Hello World Banner
// @description Adds a banner to the target page.
// @match *://*/*
// @grant GM_addStyle
// ==/UserScript==
(function(){
  GM_addStyle('#us-banner{position:fixed;top:0;left:0;right:0;background:#222;color:#fff;padding:8px;z-index:9999}');
  const div=document.createElement('div');
  div.id='us-banner';
  div.textContent='Userscript runner banner';
  document.body.appendChild(div);
})();
