import * as path from "path";

const {app, BrowserWindow} = require("electron");

let mainWindow: any;

const appRootPath = 'public';
const listenPort = 61677;

let http = require('http');

let finalhandler = require('finalhandler');
let serveStatic = require('serve-static');

let serve = serveStatic(path.join(__dirname, appRootPath));

let server = http.createServer(function (req: any, res: any) {
  let done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(listenPort);

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    title: "Magibit",
    show: true,
    webPreferences: {
      nodeIntegrationInWorker: true
    }
  });

  // if you need dev tools do as follow ⤵️
  // mainWindow.webContents.openDevTools();

  mainWindow.loadURL(`http://127.0.0.1:${listenPort}/index.html`);

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
    app.exit(0);
  });
});
