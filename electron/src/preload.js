const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronApi', {
  pickLocalScript: () => ipcRenderer.invoke('pickLocalScript'),
  discoverScripts: () => ipcRenderer.invoke('discoverScripts'),
  saveExport: (payload) => ipcRenderer.invoke('saveExport', payload)
});
