class Room extends Phaser.Scene {
    constructor(sceneKey) {
        super(sceneKey);

        //Prende in ingresso tutti gli assets della Room figlia e li mette nel membro this.assets
    }

    preload() {
        console.log('Preloading...');
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
    }

    loadAssets() {
        //Carica tutti gli assets dal parametro passato dalla Room figlia e, quando termina, ripassa il controllo a generateRoom che procede con la creazione della Room figlia
    }
}