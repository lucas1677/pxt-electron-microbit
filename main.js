"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var _a = require("electron"), app = _a.app, BrowserWindow = _a.BrowserWindow;
var mainWindow;
var appRootPath = 'public';
var listenPort = 61677;
var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic(path.join(__dirname, appRootPath));
var server = http.createServer(function (req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});
server.listen(listenPort);
app.on('ready', function () {
    mainWindow = new BrowserWindow({
        title: "Magibit",
        show: true,
        webPreferences: {
            nodeIntegrationInWorker: true
        }
    });
    // if you need dev tools do as follow ⤵️
    // mainWindow.webContents.openDevTools();
    mainWindow.loadURL("http://127.0.0.1:" + listenPort + "/index.html");
    mainWindow.on("ready-to-show", function () {
        mainWindow.show();
    });
    mainWindow.on("closed", function () {
        mainWindow = null;
        app.exit(0);
    });
});
