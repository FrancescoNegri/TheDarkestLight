class Room extends Phaser.Scene {
    constructor(sceneKey) {
        super(sceneKey);

        this.assets;
        this.layers = {}; 
        //Prende in ingresso tutti gli assets della Room figlia e li mette nel membro this.assets
    }

    preload() {
        this.load.image('top-mask-camera', 'img/Masks/topMaskCamera.png');
        this.load.image('bottom-mask-camera', 'img/Masks/bottomMaskCamera.png');
        this.load.image('left-mask-camera', 'img/Masks/leftMaskCamera.png');
        this.load.image('right-mask-camera', 'img/Masks/rightMaskCamera.png');
    }

    create() {
        this.generateRoom();
    }

    generateRoom() {
        //Resizing the viewport
        if (DEVICE == 'MOBILE'){
            this.cameras.main.setPosition((ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * TILE_SIZE, (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_HEIGHT_IN_TILES_MOBILE) * TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * TILE_SIZE, ROOM_HEIGHT_IN_TILE * TILE_SIZE);
        }
        else {
            this.cameras.main.setPosition(ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE, ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE, ROOM_HEIGHT_IN_TILE * TILE_SIZE);
        }

        this.map = this.make.tilemap({ key: 'map', tileWidth: TILE_SIZE, tileHeight: TILE_SIZE});
        this.layers.backgroundLayer = this.map.createDynamicLayer('Background', this.map.addTilesetImage('MANSION_INTERIOR_BACKGROUND_2'), 0, 0);
        this.layers.wallsLayer = this.map.createDynamicLayer('Walls', this.map.addTilesetImage('MANSION_INTERIOR_WALLS_2'), 0, 0);

        //Adding Masks
        //alert(this.cameras.main.width + '    ' + (SCREEN_PROPS.calculatedWidth - 2 * ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE));
        this.add.sprite(0, 0, 'top-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(0, 0, 'left-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(this.cameras.main.width - TILE_SIZE, 0, 'right-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(0, this.cameras.main.height - TILE_SIZE, 'bottom-mask-camera').setScrollFactor(0).setOrigin(0, 0);
    }

    findFileNameFromPath(path){
        var nameFirstCharachterPosition= path.lastIndexOf("/") +1;
        var nameLastCharachterPosition = path.lastIndexOf(".");
        if (nameFirstCharachterPosition == -1) nameFirstCharachterPosition=0;
        if (nameLastCharachterPosition== -1) return -1;
        var filename= path.slice(nameFirstCharachterPosition,nameLastCharachterPosition);
        return filename;
    }

    /*
    function ricorsiveResList(assetFile, typeRes) {
        var assetKeyList = Object.keys(assetFile);
        if (assetKeyList.length != 0) {
            for (let i = 0; i < assetKeyList.length; i++) {
                console.log("we enterd in " + assetKeyList[i]);
                if (assetKeyList[i].localeCompare("path") == 0) {
                    assetFile.type = typeRes;
                    assetFile.key = findFileNameFromPath(assetFile.path);
                    let assetList=[];
                    assetList.push(assetFile);
                    return assetList;
                }
            }
            //se non trova la propieta' path, deve scendere di profondità.
            var assetList = [];
            for (let i = 0; i < assetKeyList.length; i++) {
                assetList= assetList.concat(ricorsiveResList(assetFile.assetKeyList[i], typeRes));  
            }
            return assetList;
        } else {
          let assetList=[];
          console.log("exit without res");
          return assetList;
        }
    }
    
    function getResListFromAsset(asset) {
        var resList= [];
        var i = 0;
        for (var typeRes in asset) {
            console.log("we are in " + typeRes);
            resList=resList.concat(ricorsiveResList(asset[typeRes], typeRes));
            console.log(resList);
            i++;
        }
        return resList;
    
    }*/
}