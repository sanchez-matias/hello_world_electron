const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 400,
        // icon: path.join(__dirname, 'assets/icon.png'),
    });

    window.loadURL('https://prx.xrp.com.ar');
}

app.whenReady().then(() => {

    // Llamar al proceso create window solo una vez
    createWindow();
    
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});