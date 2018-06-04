var _a = require("electron"), app = _a.app, BrowserWindow = _a.BrowserWindow, Menu = _a.Menu, dialog = _a.dialog;
var path = require("path");
var mainWindow;
var isWindows = process.platform === "win32";
function printCurrentTime(msg) {
    console.log((new Date()).toJSON().slice(0, 24).replace(/[-T]/g, ":"), msg);
}
app.on("ready", function () {
    printCurrentTime("start create window");
    mainWindow = new BrowserWindow({
        title: "Magibit micro:bit",
        show: false,
        webPreferences: {
            nodeIntegrationInWorker: true
        }
    });
    mainWindow.loadURL(path.join("file://", __dirname, "index.html"));
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
