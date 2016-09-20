const {app, BrowserWindow} = require('electron')
const pxt = require('pxt-core')
const path = require('path')

let win

function createWindow () {

  pxt.mainCli(path.join(process.cwd(), "node_modules/pxt-microbit"), ["serve", "-no-browser"])
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})