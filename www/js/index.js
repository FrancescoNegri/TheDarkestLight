document.addEventListener('deviceready', function () {
    //var screenProps = getScreenProps();

    var config = {
        type: Phaser.WEBGL,
        autoResize: true,
        parent: 'game',
        width: 1024,
        height: 768,
        scene: [Boot],
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
                gravity: { y: 1000 }
            }
        },
        backgroundColor: '#000000',
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

/*function getScreenProps() {
    var returnValue = {};
    returnValue.availHeight = Math.max(window.innerHeight, document.documentElement.clientHeight);
    returnValue.availWidth = Math.max(window.innerWidth, document.documentElement.clientWidth);

    if (returnValue.availHeight < returnValue.availWidth) {
        returnValue.calculatedHeight = FIXED_HEIGHT;
        returnValue.calculatedWidth = FIXED_WIDTH;
    }
    else {
        returnValue.calculatedHeight = FIXED_WIDTH * returnValue.availHeight / returnValue.availWidth;
        returnValue.calculatedWidth = FIXED_WIDTH;
    }

    return returnValue;
}*/