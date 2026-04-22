const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 950,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  win.loadFile(path.join(__dirname, 'renderer.html'));
}

app.whenReady().then(createWindow);

ipcMain.handle('pickLocalScript', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'Userscript', extensions: ['js', 'user.js'] }]
  });
  if (canceled || !filePaths[0]) return null;
  return { path: filePaths[0], code: fs.readFileSync(filePaths[0], 'utf8') };
});

ipcMain.handle('discoverScripts', async () => {
  const scriptsDir = path.join(app.getPath('userData'), 'scripts');
  fs.mkdirSync(scriptsDir, { recursive: true });
  return fs.readdirSync(scriptsDir).filter((f) => f.endsWith('.user.js')).map((f) => ({
    name: f,
    path: path.join(scriptsDir, f),
    code: fs.readFileSync(path.join(scriptsDir, f), 'utf8')
  }));
});

ipcMain.handle('saveExport', async (_event, payload) => {
  const { canceled, filePath } = await dialog.showSaveDialog({ defaultPath: payload.fileName });
  if (canceled || !filePath) return false;
  fs.writeFileSync(filePath, payload.content, 'utf8');
  return true;
});
