class Room extends Phaser.Scene {
    constructor(sceneKey, rawAssets) {
        super(sceneKey);

        this.assets = { raw: rawAssets, array: [] };
        this.averageLightsContribute;
        this.layers;
        this.map;
        this.name = this.constructor.name;
        this.player;
    }

    preload() {
        this.scrapeAssets();
        this.assets.array.forEach(obj => {
            if ('nPath' in obj) {
                this.load[obj.type](obj.key, [obj.path, obj.nPath]);
            }
            else if ('bPath' in obj) {
                this.load[obj.type](obj.key, obj.path);
                this.load[obj.type](obj.key + '_b', obj.bPath);
            }
            else {
                this.load[obj.type](obj.key, obj.path);
            }
        });

        //Loading Border Camera Masks
        this.load.image('top-border-mask-camera', 'assets/Masks/topMaskCamera.png');
        this.load.image('bottom-border-mask-camera', 'assets/Masks/bottomMaskCamera.png');
        this.load.image('left-border-mask-camera', 'assets/Masks/leftMaskCamera.png');
        this.load.image('right-border-mask-camera', 'assets/Masks/rightMaskCamera.png');
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

    create(player) {
        this.player = player;
        this.lights.enable(); //Boot Phaser's LightManager
        this.scene.bringToTop(CursorManager.CURSOR_SCENE_KEY); //Add the cursor to the Room

        this.setCameraViewport();
        this.createRoom();
        this.applyBorderMasks();

        //Camera bounds, anche il wallsLayer
        this.cameras.main.setBounds(0, 0, this.layers.wallsLayer.width, this.layers.wallsLayer.height);
        this.cameras.main.startFollow(this.player);
        //Physics Bounds, sarà solo lo spazio di gioco (togliamo il wall layer tutto attorno!!)
        this.physics.world.setBounds(Global.TILE_SIZE, Global.TILE_SIZE, this.layers.wallsLayer.width - 2 * Global.TILE_SIZE, this.layers.wallsLayer.height - 2 * Global.TILE_SIZE);
    }

    createRoom() {
        this.map = this.make.tilemap({ key: findFileNameFromPath(this.assets.raw.tilemapTiledJSON.path), tileWidth: Global.TILE_SIZE, tileHeight: Global.TILE_SIZE });
        this.layers.backgroundLayer = this.map.createDynamicLayer('Background', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.background.path)), 0, 0).setPipeline('Light2D');
        this.layers.wallsLayer = this.map.createDynamicLayer('Walls', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.walls.path)), 0, 0);
        this.layers.wallsMaskLayer = this.map.createDynamicLayer('WallsMask', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.walls.bPath)), 0, 0);
    }

    setCameraViewport() {
        if (DEVICE == 'MOBILE') {
            this.cameras.main.setPosition((ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * Global.TILE_SIZE, (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_HEIGHT_IN_TILES_MOBILE) * Global.TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * Global.TILE_SIZE, ROOM_HEIGHT_IN_TILE * Global.TILE_SIZE);
        }
        else {
            this.cameras.main.setPosition(ROOM_FRAME_IN_TILES_DESKTOP * Global.TILE_SIZE, ROOM_FRAME_IN_TILES_DESKTOP * Global.TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * ROOM_FRAME_IN_TILES_DESKTOP * Global.TILE_SIZE, ROOM_HEIGHT_IN_TILE * Global.TILE_SIZE);
        }
    }

    applyBorderMasks() {
        this.layers.borderMasksLayer.create(0, 0, 'top-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.layers.borderMasksLayer.create(0, 0, 'left-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.layers.borderMasksLayer.create(this.cameras.main.width - Global.TILE_SIZE, 0, 'right-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.layers.borderMasksLayer.create(0, this.cameras.main.height - Global.TILE_SIZE, 'bottom-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
    }

    update() {
        this.updateMasksByLightDiffusion();
        //this.lightsContribute = this.lightSource.calculateLightsContribuitePoint(this.player);

        //Updates all Actions in  every ActionComponent (if present)
        this.children.list.forEach(element => {
            if ('actions' in element) {
                element.actions.update();
            }
        });
    }

    updateMasksByLightDiffusion() {
        this.averageLightsContribute = this.lightSource.calculateAverageLightsContribute();
        this.layers.wallsMaskLayer.setAlpha(1 - this.averageLightsContribute);
    }

}





