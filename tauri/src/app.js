import { invoke } from '@tauri-apps/api/core';

const scripts = [];
let current = null;
const el = (id) => document.getElementById(id);
const log = (m) => { el('console').textContent += `${m}\n`; };

function refresh() {
  el('scriptList').innerHTML = scripts.map((s,i)=>`<option value="${i}">${s.name}</option>`).join('');
}

el('scriptList').onchange = () => {
  current = scripts[Number(el('scriptList').value)];
  el('editor').value = current.code;
  el('meta').textContent = JSON.stringify(UserscriptRuntime.parseMetadata(current.code), null, 2);
};

el('discover').onclick = async () => {
  scripts.push(...await invoke('discover_scripts'));
  refresh();
};

el('localFile').onchange = async (evt) => {
  const f = evt.target.files[0]; if (!f) return;
  scripts.push({ name: f.name, code: await f.text() }); refresh();
};

el('fetchRemote').onclick = async () => {
  const url = el('remoteUrl').value.trim();
  const code = await fetch(url).then(r=>r.text());
  scripts.push({ name: url.split('/').pop(), code, source: url }); refresh();
};

el('load').onclick = () => { el('preview').src = el('targetUrl').value.trim(); };

el('run').onclick = async () => {
  if (!current) return log('Select script first');
  try {
    const rt = UserscriptRuntime.createRuntime({ onMenuCommand: (cmds)=>log(`menu: ${cmds.map(c=>c.caption).join(',')}`) });
    const result = await rt.runUserScript(el('editor').value, el('preview').src || el('targetUrl').value);
    log(`Ran ${result.meta.name} (skipped=${result.skipped})`);
  } catch (e) { log(String(e)); }
};
