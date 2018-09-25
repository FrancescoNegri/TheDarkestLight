document.addEventListener('deviceready', function () {
    getDeviceType();
    SCREEN_PROPS = getScreenProps();

    //se autoResize è attivo, allora zoom non funziona!
    var config = {
        type: Phaser.WEBGL,
        autoResize: false,
        zoom: SCREEN_PROPS.calculatedZoom,
        parent: 'game',
        width: SCREEN_PROPS.calculatedWidth,
        height: SCREEN_PROPS.calculatedHeight,
        scene: [Boot],
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
                gravity: { y: 1000 }
            }
        },
        backgroundColor: '#ff0000',
        pixelArt: true,
        plugins: {
            global: [
                { key: 'RoomManager', plugin: RoomManager, start: false, mapping: 'room' }
            ]
        }
    };

    GAME = new Phaser.Game(config);
});

if (!window.cordova) {
    window.dispatchEvent('deviceready');
}

function getDeviceType() {
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile() != null) DEVICE = 'MOBILE';
    else DEVICE = 'DESKTOP';
}

function getScreenProps() {
    var returnValue = {};

    // cz : ah = 1 : mh
    if (DEVICE == 'MOBILE') {
        returnValue.availHeight = window.innerHeight;
        returnValue.availWidth = window.innerWidth;
        returnValue.calculatedZoom = returnValue.availHeight / ((ROOM_HEIGHT_IN_TILE + INVENTORY_HEIGHT_IN_TILES_MOBILE + ROOM_FRAME_IN_TILES_MOBILE * 2) * TILE_SIZE);
    }
    else {
        returnValue.availHeight = screen.height;
        returnValue.availWidth = screen.width;
        returnValue.calculatedZoom = returnValue.availHeight / ((ROOM_HEIGHT_IN_TILE + INVENTORY_HEIGHT_IN_TILES_DESKTOP + ROOM_FRAME_IN_TILES_DESKTOP * 2) * TILE_SIZE);
    }

    console.log('ZOOM: ' + returnValue.calculatedZoom);

    //Sono le dimensioni riaggiustate rispetto allo zoom scelto
    //ch : ah = 1 : cz
    returnValue.calculatedHeight = returnValue.availHeight / returnValue.calculatedZoom;
    returnValue.calculatedWidth = returnValue.availWidth / returnValue.calculatedZoom;

    console.log('AVAIL-H: ' + returnValue.availHeight + '\nCALC-H: ' + returnValue.calculatedHeight);
    console.log('AVAIL-W: ' + returnValue.availWidth + '\nCALC-W: ' + returnValue.calculatedWidth);

    return returnValue;
}