import { app, BrowserWindow } from 'electron';

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile(`src/index.html`);
}

app.whenReady().then(createWindow);