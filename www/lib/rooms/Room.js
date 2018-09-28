class Room extends Phaser.Scene {
    constructor(sceneKey, assets) {
        super(sceneKey);

        this.assets = assets;
        this.layers = {};
    }

    preload() {

        //Loading Border Camera Masks
        this.load.image('top-mask-camera', 'img/Masks/topMaskCamera.png');
        this.load.image('bottom-mask-camera', 'img/Masks/bottomMaskCamera.png');
        this.load.image('left-mask-camera', 'img/Masks/leftMaskCamera.png');
        this.load.image('right-mask-camera', 'img/Masks/rightMaskCamera.png');
    }

    create() {
        this.setCameraViewport();
        this.createRoom();
        this.applyCameraMasks();

        //Camera bounds, anche il wallsLayer
        this.cameras.main.setBounds(0, 0, this.layers.wallsLayer.width, this.layers.wallsLayer.height);
        //Physics Bounds, sarà solo lo spazio di gioco (togliamo il wall layer tutto attorno!!)
        this.physics.world.setBounds(TILE_SIZE, TILE_SIZE, this.layers.wallsLayer.width - 2 * TILE_SIZE, this.layers.wallsLayer.height - 2 * TILE_SIZE);
    }

    createRoom() {
        this.map = this.make.tilemap({ key: 'map', tileWidth: TILE_SIZE, tileHeight: TILE_SIZE });
        this.layers.backgroundLayer = this.map.createDynamicLayer('Background', this.map.addTilesetImage('MANSION_INTERIOR_BACKGROUND_2'), 0, 0);
        this.layers.wallsLayer = this.map.createDynamicLayer('Walls', this.map.addTilesetImage('MANSION_INTERIOR_WALLS_2'), 0, 0);
    }

    setCameraViewport() {
        if (DEVICE == 'MOBILE') {
            this.cameras.main.setPosition((ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * TILE_SIZE, (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_HEIGHT_IN_TILES_MOBILE) * TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * TILE_SIZE, ROOM_HEIGHT_IN_TILE * TILE_SIZE);
        }
        else {
            this.cameras.main.setPosition(ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE, ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE, ROOM_HEIGHT_IN_TILE * TILE_SIZE);
        }
    }

    applyCameraMasks() {
        this.add.sprite(0, 0, 'top-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(0, 0, 'left-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(this.cameras.main.width - TILE_SIZE, 0, 'right-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(0, this.cameras.main.height - TILE_SIZE, 'bottom-mask-camera').setScrollFactor(0).setOrigin(0, 0);
    }



    ricorsiveResList(assetFile, typeRes) {
        /*console.log("we enterd in ", assetFile);*/
        //siamo sicuramente nel caso di un oggetto, vuoto o meno.
        var assetKeyList = Object.keys(assetFile);

        //controlliamo se è un oggetto o una variabile normale.
        if (isObject(assetFile)) {

            //controllo se siamo nel caso in cui ho un'attributo di nome path. Se siamo in questo caso, dobbiamo ritornare l'oggetto.
            for (var j = 0; j < assetKeyList.length; j++) {
                if (assetKeyList[j].localeCompare("path") == 0) {
                    //se lo troviamo dobbiamo ritornare tutto l'oggetto perchè è una delle res da caricare. per farlo lo dobbiamo mettere in un array di 1 elemento.
                    assetFile.type = typeRes;
                    assetFile.key = findFileNameFromPath(assetFile.path);
                    let assetList = [];
                    assetList.push(assetFile);
                    return assetList;
                }
            }


            //se non abbiamo ancora trovato l'attributo path, dobbiamo iterare in tutti gli attributi che abbiamo.
            let assetList = [];
            //controllo per ogni proprietà se è un array perchè devo lavorare in modo diverso.
            for (var j = 0; j < assetKeyList.length; j++) {
                //prendo in considerazione un solo attributo alla volta
                var attributeKey = assetKeyList[j];

                if (Array.isArray(assetFile[attributeKey])) {
                    //se è un array itero per ogni valore dell'array.
                    for (let i = 0; i < assetFile[attributeKey].length; i++) {
                        assetList = assetList.concat(ricorsiveResList(assetFile[attributeKey][i], typeRes));
                    }
                } else {
                    //altrimenti lo tratto come un oggetto e richiamo questa funzione
                    assetList = assetList.concat(ricorsiveResList(assetFile[attributeKey], typeRes));
                }
            }
            return assetList;

        } else {
            //l'array vuoto nel caso non trovi niente.
            let assetList = [];
            /*console.log("exit without res");*/
            return assetList;
        }
    }

    getResListFromAsset(asset) {
        var resList = [];
        var i = 0;
        for (var typeRes in asset) {
            /*console.log("we are in " + typeRes);*/
            resList = resList.concat(ricorsiveResList(asset[typeRes], typeRes));
            /*console.log(resList);*/
            i++;
        }
        return resList;
    }
}