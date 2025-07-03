const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 400
    });

    window.loadURL('https://framework.xrp.dev/?sid=39f995f287bd7b92f43a152dbe235a9044a6477a57db429fc6bf30928ea8386bc7c6da2c806cac03295802ded5b603cade8c27ddff5c5d53f03fb04146200a83&psid=bc2cNbIrsxcE4RgE4eCt'); // Este debe ser el html del contenido
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