class Room extends Phaser.Scene {
    constructor(sceneKey, rawAssets) {
        super(sceneKey);

        this.assets = { raw: rawAssets, array: [] };
        this.layers = {};
    }

    preload() {
        this.scrapeAssets();
        this.assets.array.forEach(obj => {
            if ('nPath' in obj) {
                this.load[obj.type](obj.key, [obj.path, obj.nPath]);
            }
            else {
                this.load[obj.type](obj.key, obj.path);
            }
        });

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
        this.map = this.make.tilemap({ key: findFileNameFromPath(this.assets.raw.tilemapTiledJSON.path), tileWidth: TILE_SIZE, tileHeight: TILE_SIZE });
        this.layers.backgroundLayer = this.map.createDynamicLayer('Background', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.background.path)), 0, 0).setPipeline('Light2D');
        this.layers.wallsLayer = this.map.createDynamicLayer('Walls', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.walls.path)), 0, 0);
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

    scrapeAssets() {
        for (var type in this.assets.raw) {
            scrapeComplexObjKey(
                this.assets.raw[type],
                { type: type },
                'path',
                (obj, params) => {
                    obj['type'] = params.type;
                    obj['key'] = findFileNameFromPath(obj.path);
                    this.assets.array.push(obj);
                }
            );
        }
    }
}





