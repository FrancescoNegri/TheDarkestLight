class Room extends Phaser.Scene {
    constructor(sceneKey) {
        super(sceneKey);

        //Prende in ingresso tutti gli assets della Room figlia e li mette nel membro this.assets
    }

    preload() {
        console.log('Preloading...');
        this.load.image('top-mask-camera', 'img/Masks/topMaskCamera.png');
        this.load.image('bottom-mask-camera', 'img/Masks/bottomMaskCamera.png');
        this.load.image('left-mask-camera', 'img/Masks/leftMaskCamera.png');
        this.load.image('right-mask-camera', 'img/Masks/rightMaskCamera.png');
    }

    generateRoom() {
        /*await*/ this.loadAssets(); //Carica gli assets e deve aspettare che finisca il loading
        if (DEVICE == 'MOBILE'){
            this.cameras.main.setPosition((ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * TILE_SIZE, (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_HEIGHT_IN_TILES_MOBILE) * TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * TILE_SIZE, ROOM_HEIGHT_IN_TILE * TILE_SIZE);
        }
        else {
            this.cameras.main.setPosition(ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE, ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE, ROOM_HEIGHT_IN_TILE * TILE_SIZE);
        }

        var map = this.make.tilemap({ key: 'map', tileWidth: TILE_SIZE, tileHeight: TILE_SIZE});
        var bg_tileset = map.addTilesetImage('MANSION_INTERIOR_BACKGROUND_2');
        var bg_layer = map.createDynamicLayer('Background', bg_tileset, 0, 0);
        var walls_tileset = map.addTilesetImage('MANSION_INTERIOR_WALLS_2');
        var walls_layer = map.createDynamicLayer('Walls', walls_tileset, 0, 0);

        //Adding Masks
        //alert(this.cameras.main.width + '    ' + (SCREEN_PROPS.calculatedWidth - 2 * ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE));
        this.add.sprite(0, 0, 'top-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(0, 0, 'left-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(this.cameras.main.width - TILE_SIZE, 0, 'right-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(0, this.cameras.main.height - TILE_SIZE, 'bottom-mask-camera').setScrollFactor(0).setOrigin(0, 0);
    }

    loadAssets() {
        //Carica tutti gli assets dal parametro passato dalla Room figlia e, quando termina, ripassa il controllo a generateRoom che procede con la creazione della Room figlia
    }

    findFileNameFromPath(path){
        var nameFirstCharachterPosition= path.lastIndexOf("/") +1;
        var nameLastCharachterPosition = path.lastIndexOf(".");
        if (nameFirstCharachterPosition == -1) nameFirstCharachterPosition=0;
        if (nameLastCharachterPosition== -1) return -1;
        var filename= path.slice(nameFirstCharachterPosition,nameLastCharachterPosition);
        return filename;
    }
}