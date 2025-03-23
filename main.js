const { app, BrowserWindow } = require("electron")
const path = require("path")

function createWindow(){
    const win = new BrowserWindow({
        width : 800,
        height: 600,
        minWidth : 800,
        minHeight: 600,
        resizable : true,
        webPreferences : {
            nodeIntergration : true
        }
    })
    win.setMenu(null)

    const url = ""
    win.loadURL(url)
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit()
    }
})

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})