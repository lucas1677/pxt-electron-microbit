const {app, BrowserWindow, Menu, dialog} = require('electron');
const pxt = require('pxt-core');
const path = require('path');

let mainWindow;
const isWindows = process.platform === 'win32';

const cliPath = path.join(__dirname, "node_modules/pxt-microbit");

pxt.mainCli(cliPath, ["serve", "-no-browser"]);

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegrationInWorker: true
    }
  });

  mainWindow.loadURL(path.join('file://', __dirname, `index.html#local_token=${pxt.globalConfig.localToken}`));
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  const menu = Menu.buildFromTemplate([
    {
      label: isWindows ? 'File' : app.getName(),
      submenu: [
        {
          label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
          accelerator: isWindows ? null : 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        },
        {
          label: 'Say Hello',
          click() {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              message: 'Hello',
              detail: 'Just a friendly meow.',
              buttons: ['Meow', 'Close'], //can pass multiple buttons in here and then get the index of the clicked on in the callback
              defaultId: 0
            });
          }
        }
      ]
    },
  ]);
  Menu.setApplicationMenu(menu);
});
