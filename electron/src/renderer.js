const scriptList = document.getElementById('scriptList');
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const consolePanel = document.getElementById('console');
const metaView = document.getElementById('metaView');

const scripts = [];
let currentScript = null;
let runtime = null;

function log(type, msg) {
  consolePanel.textContent += `[${type}] ${msg}\n`;
  consolePanel.scrollTop = consolePanel.scrollHeight;
}

function refreshList() {
  scriptList.innerHTML = '';
  scripts.forEach((s, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = s.name;
    scriptList.appendChild(opt);
  });
}

scriptList.addEventListener('change', () => {
  currentScript = scripts[Number(scriptList.value)];
  editor.value = currentScript.code;
  const meta = UserscriptRuntime.parseMetadata(currentScript.code);
  metaView.textContent = JSON.stringify(meta, null, 2);
});

document.getElementById('discoverBtn').onclick = async () => {
  const discovered = await window.electronApi.discoverScripts();
  scripts.push(...discovered);
  refreshList();
  log('info', `discovered ${discovered.length} script(s)`);
};

document.getElementById('pickBtn').onclick = async () => {
  const file = await window.electronApi.pickLocalScript();
  if (!file) return;
  scripts.push({ name: file.path.split(/[\\/]/).pop(), code: file.code, source: file.path });
  refreshList();
};

document.getElementById('fetchRemoteBtn').onclick = async () => {
  const url = document.getElementById('remoteUrl').value.trim();
  const res = await fetch(url);
  const code = await res.text();
  scripts.push({ name: url.split('/').pop(), code, source: url });
  refreshList();
};

document.getElementById('loadTargetBtn').onclick = () => {
  preview.src = document.getElementById('targetUrl').value.trim();
};

document.getElementById('runBtn').onclick = async () => {
  if (!currentScript) return log('warn', 'Select a script first');
  const frameWindow = preview.contentWindow;
  if (!frameWindow) return log('error', 'Target frame not available');
  runtime = frameWindow.UserscriptRuntime?.createRuntime({
    logger: { warn: (m) => log('warn', m) },
    onMenuCommand: (items) => log('info', `menu commands: ${items.map((i) => i.caption).join(', ')}`)
  }) || UserscriptRuntime.createRuntime({ onMenuCommand: () => {} });
  try {
    const result = await runtime.runUserScript(editor.value, preview.src);
    log('info', `${result.meta.name} executed (skipped=${result.skipped})`);
  } catch (e) {
    log('error', e.stack || String(e));
  }
};

function exportData(format) {
  const html = preview.contentDocument?.documentElement?.outerHTML || '';
  const payload =
    format === 'json' ? JSON.stringify({ html }, null, 2)
      : format === 'csv' ? `field,value\nhtml,${JSON.stringify(html)}`
      : html;
  window.electronApi.saveExport({ fileName: `userscript-output.${format}`, content: payload });
}

document.getElementById('exportJson').onclick = () => exportData('json');
document.getElementById('exportCsv').onclick = () => exportData('csv');
document.getElementById('exportTxt').onclick = () => exportData('txt');
