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
            else if ('bPath' in obj) {
                this.load[obj.type](obj.key, obj.path);
                this.load[obj.type](obj.key + '_b', obj.bPath);
            }
            else {
                this.load[obj.type](obj.key, obj.path);
            }
        });

        //Loading Border Camera Masks
        this.load.image('top-border-mask-camera', 'img/Masks/topMaskCamera.png');
        this.load.image('bottom-border-mask-camera', 'img/Masks/bottomMaskCamera.png');
        this.load.image('left-border-mask-camera', 'img/Masks/leftMaskCamera.png');
        this.load.image('right-border-mask-camera', 'img/Masks/rightMaskCamera.png');
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

    create() {
        this.lights.enable();
        this.lightSource.boot();
        this.setCameraViewport();
        this.createRoom();
        this.applyBorderMasks();

        //Camera bounds, anche il wallsLayer
        this.cameras.main.setBounds(0, 0, this.layers.wallsLayer.width, this.layers.wallsLayer.height);
        //Physics Bounds, sarà solo lo spazio di gioco (togliamo il wall layer tutto attorno!!)
        this.physics.world.setBounds(TILE_SIZE, TILE_SIZE, this.layers.wallsLayer.width - 2 * TILE_SIZE, this.layers.wallsLayer.height - 2 * TILE_SIZE);
    }

    createRoom() {
        this.map = this.make.tilemap({ key: findFileNameFromPath(this.assets.raw.tilemapTiledJSON.path), tileWidth: TILE_SIZE, tileHeight: TILE_SIZE });
        this.layers.backgroundLayer = this.map.createDynamicLayer('Background', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.background.path)), 0, 0).setPipeline('Light2D');
        this.layers.wallsLayer = this.map.createDynamicLayer('Walls', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.walls.path)), 0, 0);
        this.layers.wallsMaskLayer = this.map.createDynamicLayer('WallsMask', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.walls.bPath)), 0, 0);
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

    applyBorderMasks() {
        this.layers.borderMasksLayer = this.add.group();
        this.layers.borderMasksLayer.create(0, 0, 'top-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.layers.borderMasksLayer.create(0, 0, 'left-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.layers.borderMasksLayer.create(this.cameras.main.width - TILE_SIZE, 0, 'right-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.layers.borderMasksLayer.create(0, this.cameras.main.height - TILE_SIZE, 'bottom-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
    }

    update() {
        this.updateMasksByLightDiffusion();
        this.lightsContribute = this.calculateLightsContribuite();
        //console.log(this.lightsContribute);
    }

    updateMasksByLightDiffusion() {
        //Da rivedere tutto in seguito => cambiare dal lightManager al lightSourceManager !!!
        var averageDiffusedLight = 0;
        var tot_intensity = 0;
        this.lights.lights.forEach(light => {
            tot_intensity += light.intensity;
        });
        averageDiffusedLight =  Math.floor((tot_intensity * 10000 / this.layers.wallsLayer.width / TILE_SIZE) * 100) / 100 + 0.3;
        //console.log(averageDiffusedLight, 1 - averageDiffusedLight);
        this.layers.wallsMaskLayer.setAlpha(1 - averageDiffusedLight);
    }

    calculateLightsContribuite() {
        //da ripensare per il lightSourcesManager
        var numerator = 0;
        var denominator = 0;
        
        var sommatoria = 0;
        this.lights.lights.forEach(light => {
            numerator += light.intensity * 1 / Math.abs(light.x - this.debugger.x);
            denominator += 1 / Math.abs(light.x - this.debugger.x)^1.1;

            sommatoria += light.intensity / (Math.abs(light.x - this.debugger.x)^2);
        });

        //return (numerator / denominator) * 100;
        return Math.floor(sommatoria * 1000)/1000;
    }
}





