const remote = require('electron').remote;

var maximised = false;

function minimise() {
    remote.BrowserWindow.getFocusedWindow().minimize();
}
function maximise() {
    if(remote.BrowserWindow.getFocusedWindow().isMaximized()) {
        maximised = true;
    } else {
        maximised = false;
    }
    if(!maximised) {
        remote.BrowserWindow.getFocusedWindow().maximize();
        maximised = true;
    } else {
        remote.BrowserWindow.getFocusedWindow().restore();
        maximised = false;
    }
}
document.getElementById("close").addEventListener("click", function() {
    remote.getCurrentWindow().close();
});