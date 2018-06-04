const {app, BrowserWindow, Menu, dialog} = require("electron");
const path = require("path");
import * as HS from "http-server";

let mainWindow: any;

const appRootPath = 'public';


mainWindow = new BrowserWindow({
  title: "Magibit micro:bit",
  show: false,
  webPreferences: {
    nodeIntegrationInWorker: true
  }
});

HS.createServer({
  root: path.join(__dirname, appRootPath),
});

mainWindow.loadURL(path.join("file://", appRootPath, `index.html`));
mainWindow.on("ready-to-show", () => {
  mainWindow.show();
});

mainWindow.on("closed", () => {
  mainWindow = null;
});
