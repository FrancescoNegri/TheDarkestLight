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
        this.generateRoom();
    }

    generateRoom() {
        //Resizing the viewport
        if (DEVICE == 'MOBILE') {
            this.cameras.main.setPosition((ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * TILE_SIZE, (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_HEIGHT_IN_TILES_MOBILE) * TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * TILE_SIZE, ROOM_HEIGHT_IN_TILE * TILE_SIZE);
        }
        else {
            this.cameras.main.setPosition(ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE, ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE, ROOM_HEIGHT_IN_TILE * TILE_SIZE);
        }

        this.map = this.make.tilemap({ key: 'map', tileWidth: TILE_SIZE, tileHeight: TILE_SIZE });
        this.layers.backgroundLayer = this.map.createDynamicLayer('Background', this.map.addTilesetImage('MANSION_INTERIOR_BACKGROUND_2'), 0, 0);
        this.layers.wallsLayer = this.map.createDynamicLayer('Walls', this.map.addTilesetImage('MANSION_INTERIOR_WALLS_2'), 0, 0);

        //Adding Masks
        //alert(this.cameras.main.width + '    ' + (SCREEN_PROPS.calculatedWidth - 2 * ROOM_FRAME_IN_TILES_DESKTOP * TILE_SIZE));
        this.add.sprite(0, 0, 'top-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(0, 0, 'left-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(this.cameras.main.width - TILE_SIZE, 0, 'right-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.add.sprite(0, this.cameras.main.height - TILE_SIZE, 'bottom-mask-camera').setScrollFactor(0).setOrigin(0, 0);
    }
}