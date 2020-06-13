const remote = require('electron').remote;

var maximised = false;

function minimise() {
    remote.BrowserWindow.getFocusedWindow().minimize();
}
function maximise() {
    if(!maximised) {
        remote.BrowserWindow.getFocusedWindow().maximize();
        maximised = true;
    } else {
        remote.BrowserWindow.getFocusedWindow().restore();
        maximised = false;
    }
}
function close() {
    remote.getCurrentWindow().close();
}