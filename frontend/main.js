const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { uploadFile, downloadFile } = require('../backend/storage.js');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
    },
  });

  mainWindow.loadFile('index.html');
});

// Gestionare sincronizare cu Google Cloud
ipcMain.handle('upload-data', async (event, filePath, destination) => {
  await uploadFile(filePath, destination);
  return 'File uploaded successfully';
});

ipcMain.handle('download-data', async (event, fileName, destination) => {
  await downloadFile(fileName, destination);
  return 'File downloaded successfully';
});
