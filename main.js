const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater'); // Line 2: Qalabka auto-update
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'first.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('Habeeye.html');

  // LINE-KA AAD WEIDIISAY (Hubinta Update-ka):
  autoUpdater.checkForUpdatesAndNotify();
}

app.whenReady().then(() => {
  createWindow();
});

// Ogeysiisyada Update-ka:
autoUpdater.on('update-available', () => {
  console.log('Update cusub ayaa jira!');
});

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall();
});