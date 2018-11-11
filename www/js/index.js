document.addEventListener('deviceready', function () {
    getDeviceType();

    //se autoResize è attivo, allora zoom non funziona!
    var config = {
        title: 'The Darkest Light',
        version: '1.0.0',
        url: 'https://thedarkestlight.io'
    };

    GAME = new TDLib.Game(config);
    console.log(TDLib);
});

if (!window.cordova) {
    window.dispatchEvent('deviceready');
}

// Spostare nelle Utils di TDLib
function getDeviceType() {
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile() != null) DEVICE = 'MOBILE';
    else DEVICE = 'DESKTOP';
}