const {app, BrowserWindow, Menu, dialog} = require("electron");
const path = require("path");
const http = require("http");

let mainWindow: any;

const appRootPath = 'app-packaged';

http.createServer();

mainWindow = new BrowserWindow({
  title: "Magibit micro:bit",
  show: false,
  webPreferences: {
    nodeIntegrationInWorker: true
  }
});

mainWindow.loadURL(path.join("file://", appRootPath, `index.html`));
mainWindow.on("ready-to-show", () => {
  mainWindow.show();
});

mainWindow.on("closed", () => {
  mainWindow = null;
});
