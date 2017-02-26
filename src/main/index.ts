import { app, BrowserWindow, globalShortcut } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import {enableLiveReload} from 'electron-compile';
import Native from '../native';
enableLiveReload();

// app.dock.hide();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow | null = null;

const isDevMode = process.execPath.match(/[\\/]electron/);

const createWindow = () => {
  const screen = require('electron').screen; // tslint:disable-line
  // Create the browser window.
  mainWindow = new BrowserWindow({
    ...screen.getPrimaryDisplay().bounds,
    show: false,
    // resizable: false,
    transparent: true,
    frame: false,
    hasShadow: false,
    // skipTaskbar: true,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${require.resolve('../index.html')}`);

  mainWindow.on('ready-to-show', async () => {
    if (mainWindow) {
      mainWindow.show();
      if (isDevMode) {
        await installExtension(REACT_DEVELOPER_TOOLS);
        // mainWindow.webContents.openDevTools();
      }

      Native.init(mainWindow.getNativeWindowHandle());
    }
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });


  // On OS X, the standard behaviour is for the application
  // to hide itself when the window is closed
  const closeHandler = (event: Event) => {
    if (process.platform === 'darwin') {
      event.preventDefault();
      mainWindow && mainWindow.hide();
    }
  };

  mainWindow.on('close', closeHandler);
  app.on('before-quit', () => mainWindow && mainWindow.removeListener('close', closeHandler));
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  } else {
    mainWindow.show();
  }
});


app.on('ready', () => {
  // Register a 'CommandOrControl+X' shortcut listener.
  let isGhost = false;
  const ret = globalShortcut.register('CommandOrControl+`', () => {
    isGhost ? Native.disableGhost() : Native.enableGhost();
    isGhost = !isGhost;
  });

  if (!ret) {
    console.log('registration failed');
  }
});

app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll();
});
