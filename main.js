var _a = require("electron"), app = _a.app, BrowserWindow = _a.BrowserWindow, Menu = _a.Menu, dialog = _a.dialog;
var pxt = require("pxt-core");
var path = require("path");
var Thenjs = require("thenjs");
var mainWindow;
var isWindows = process.platform === "win32";
function printCurrentTime(msg) {
    console.log((new Date()).toJSON().slice(0, 24).replace(/[-T]/g, ":"), msg);
}
function main() {
    printCurrentTime("start main function.");
    var cliPath = path.join(__dirname, "node_modules/pxt-microbit");
    pxt.mainCli(cliPath, ["serve", "-no-browser"]);
    printCurrentTime("end main function");
}
Thenjs(main()).then(function () {
    app.on("ready", function () {
        printCurrentTime("start create window");
        mainWindow = new BrowserWindow({
            title: "Magibit micro:bit",
            show: false,
            webPreferences: {
                nodeIntegrationInWorker: true
            }
        });
        mainWindow.loadURL(path.join("file://", __dirname, "index.html#local_token=" + pxt.globalConfig.localToken));
        mainWindow.on("ready-to-show", function () {
            mainWindow.show();
        });
        mainWindow.on("closed", function () {
            mainWindow = null;
        });
        var menu = Menu.buildFromTemplate([
            {
                label: isWindows ? "File" : app.getName(),
                submenu: [
                    {
                        label: isWindows ? "Exit" : "Quit " + app.getName(),
                        accelerator: isWindows ? null : "CmdOrCtrl+Q",
                        click: function () {
                            app.quit();
                        }
                    },
                    {
                        label: "Say Hello",
                        click: function () {
                            dialog.showMessageBox(mainWindow, {
                                type: "info",
                                message: "Hello",
                                detail: "Just a friendly meow.",
                                buttons: ["Meow", "Close"],
                                defaultId: 0
                            });
                        }
                    }
                ]
            },
        ]);
        Menu.setApplicationMenu(menu);
    });
});
