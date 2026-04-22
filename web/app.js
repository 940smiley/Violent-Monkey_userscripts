const scripts = [];
let selected = null;
const $ = (id) => document.getElementById(id);
const log = (lvl, msg) => { $('console').textContent += `[${lvl}] ${msg}\n`; };

function refresh() {
  $('scriptList').innerHTML = scripts.map((s,i)=>`<option value="${i}">${s.meta?.name || s.name}</option>`).join('');
}
function addScript(name, code, source='') {
  const meta = UserscriptRuntime.parseMetadata(code);
  scripts.push({ name, code, source, meta });
  refresh();
}

$('discoverBtn').onclick = async () => {
  try {
    const manifest = await fetch('scripts/manifest.json').then((r)=>r.json());
    for (const item of manifest.scripts) {
      const code = await fetch(`scripts/${item.file}`).then((r)=>r.text());
      addScript(item.file, code, `scripts/${item.file}`);
    }
    log('info', `Loaded ${manifest.scripts.length} plugin scripts from manifest`);
  } catch (e) { log('warn', `No manifest or scripts folder available: ${e}`); }
};

$('fetchBtn').onclick = async () => {
  const url = $('remoteUrl').value.trim();
  const code = await fetch(url).then((r)=>r.text());
  addScript(url.split('/').pop(), code, url);
};

$('localFile').onchange = async (ev) => {
  const f = ev.target.files[0]; if (!f) return;
  addScript(f.name, await f.text(), 'local-file');
};

$('scriptList').onchange = () => {
  selected = scripts[Number($('scriptList').value)];
  $('editor').value = selected.code;
  $('metaView').textContent = JSON.stringify(selected.meta, null, 2);
};

$('loadBtn').onclick = () => {
  const url = $('targetUrl').value.trim();
  $('preview').src = url;
};

$('runBtn').onclick = async () => {
  if (!selected) return log('warn', 'Select a script first');
  const frame = $('preview');
  try {
    const frameWindow = frame.contentWindow;
    if (!frameWindow) throw new Error('iframe is not available');
    frameWindow.eval(`${UserscriptRuntime.createRuntime.toString()};`);
    frameWindow.eval(`${UserscriptRuntime.parseMetadata.toString()};`);
    const rt = UserscriptRuntime.createRuntime({ onMenuCommand: (items)=>log('info',`menu: ${items.map(i=>i.caption).join(', ')}`) });
    const result = await rt.runUserScript($('editor').value, frame.src);
    log('info', `Executed: ${result.meta.name}`);
  } catch (e) {
    log('error', `Cannot inject into this page (likely X-Frame-Options/CSP). ${e}`);
  }
};

document.querySelectorAll('[data-export]').forEach((btn) => btn.onclick = () => {
  const format = btn.getAttribute('data-export');
  const html = $('preview').contentDocument?.documentElement?.outerHTML || '';
  const content = format === 'json' ? JSON.stringify({ html }, null, 2) : format === 'csv' ? `field,value\nhtml,${JSON.stringify(html)}` : html;
  const blob = new Blob([content], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `userscript-output.${format}`;
  a.click();
});

addScript('example-plugin.user.js', `// ==UserScript==\n// @name Example Plugin\n// @description Demo discovery script\n// @match *://*/*\n// @grant GM_addStyle\n// ==/UserScript==\nGM_addStyle('body{outline:2px dashed #f80;}');\nconsole.log('plugin ran');`);
