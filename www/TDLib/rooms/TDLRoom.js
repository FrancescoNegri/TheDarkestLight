/**
 * The rooms namespace.
 * @namespace TDLib.Rooms
 * @since 1.0.0
 */

 /**
  * Class representing a TDLRoom.
  * @extends Phaser.Scene
  * @memberof TDLib.Rooms
  * @since 1.0.0
  */
class TDLRoom extends Phaser.Scene {
    /**
     * Create a new TDLRoom.
     * @param {string} sceneKey - The unique key to identify the room.
     * @param {Object} rawAssets - The raw object of assets needed by the room. (Ripensarlo ?)
     */
    constructor(sceneKey, rawAssets) {
        super(sceneKey);

        /**
         * This object contains an array with all the assets needed by the room.
         * @type {Object}
         * @since 1.0.0
         */
        this.assets = { raw: rawAssets, array: [] };

        /**
         * The average contribute of light sources to the room.
         * @type {number}
         * @since 1.0.0
         */
        this.averageLightsContribute;

        /**
         * The layer manager of the room.
         * @type {TDLib.Plugins.RoomPlugins.LayerManager}
         * @since 1.0.0
         */
        this.layers;

        /**
         * The tilemap of the room.
         * @type {Phaser.Tilemaps.Tilemap}
         * @since 1.0.0
         */
        this.map;

        /**
         * The name of the room.
         * @type {string}
         * @since 1.0.0
         */
        this.name = this.constructor.name;

        /**
         * The instance of the TDLCharacter designated as player for the room.
         * @type {TDLib.Sprites.Characters.TDLCharacter}
         * @since 1.0.0
         */
        this.player;

        //Aggiungere tutte le proprietà this.COSE di phaser che vengono utilizzate qui!
    }

    /**
     * The preload function is executed once and load all the assets needed by the room.
     * @since 1.0.0
     */
    preload() {
        this._scrapeAssets();
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
    
    /**
     * Scrape the object of raw assets.
     * @private
     * @since 1.0.0
     */
    _scrapeAssets() {
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

    /**
     * The create function is executed once, when the room is initialized.
     * @param {TDLib.Sprites.Characters.TDLCharacter} player - The instance of the TDLCharacter designated as player for the room.
     * @since 1.0.0
     */
    create(player) {
        this.player = player;
        this.lights.enable(); //Boot Phaser's LightManager
        this.scene.bringToTop(CursorManager.CURSOR_SCENE_KEY); //Add the cursor to the Room

        this._setCameraViewport();
        this._createRoom();
        this._applyBorderMasks();

        //Camera bounds, anche il wallsLayer
        this.cameras.main.setBounds(0, 0, this.layers.wallsLayer.width, this.layers.wallsLayer.height);
        this.cameras.main.startFollow(this.player);
        //Physics Bounds, sarà solo lo spazio di gioco (togliamo il wall layer tutto attorno!!)
        this.physics.world.setBounds(Global.TILE_SIZE, Global.TILE_SIZE, this.layers.wallsLayer.width - 2 * Global.TILE_SIZE, this.layers.wallsLayer.height - 2 * Global.TILE_SIZE);
    }

    /**
     * Set the correct camera viewport.
     * @private
     * @since 1.0.0
     */
    _setCameraViewport() {
        if (DEVICE == 'MOBILE') {
            this.cameras.main.setPosition((ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * Global.TILE_SIZE, (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_HEIGHT_IN_TILES_MOBILE) * Global.TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * (ROOM_FRAME_IN_TILES_MOBILE + INVENTORY_WIDTH_IN_TILES_MOBILE) * Global.TILE_SIZE, ROOM_HEIGHT_IN_TILE * Global.TILE_SIZE);
        }
        else {
            this.cameras.main.setPosition(ROOM_FRAME_IN_TILES_DESKTOP * Global.TILE_SIZE, ROOM_FRAME_IN_TILES_DESKTOP * Global.TILE_SIZE);
            this.cameras.main.setSize(SCREEN_PROPS.calculatedWidth - 2 * ROOM_FRAME_IN_TILES_DESKTOP * Global.TILE_SIZE, ROOM_HEIGHT_IN_TILE * Global.TILE_SIZE);
        }
    }

    /**
     * Create room tilemap and layers.
     * @private
     * @since 1.0.0
     */
    _createRoom() {
        this.map = this.make.tilemap({ key: findFileNameFromPath(this.assets.raw.tilemapTiledJSON.path), tileWidth: Global.TILE_SIZE, tileHeight: Global.TILE_SIZE });
        this.layers.backgroundLayer = this.map.createDynamicLayer('Background', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.background.path)), 0, 0);//.setPipeline('Light2D');
        this.layers.wallsLayer = this.map.createDynamicLayer('Walls', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.walls.path)), 0, 0);
        this.layers.wallsMaskLayer = this.map.createDynamicLayer('WallsMask', this.map.addTilesetImage(findFileNameFromPath(this.assets.raw.image.tiles.walls.bPath)), 0, 0);
    }
    
    /**
     * Apply the four border masks to the camera.
     * @private
     * @since 1.0.0
     */
    _applyBorderMasks() {
        this.layers.borderMasksLayer.create(0, 0, 'top-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.layers.borderMasksLayer.create(0, 0, 'left-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.layers.borderMasksLayer.create(this.cameras.main.width - Global.TILE_SIZE, 0, 'right-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
        this.layers.borderMasksLayer.create(0, this.cameras.main.height - Global.TILE_SIZE, 'bottom-border-mask-camera').setScrollFactor(0).setOrigin(0, 0);
    }

    /**
     * The update function is executed at every cycle of the game loop.
     * @since 1.0.0
     */
    update() {
        this._updateMasksByLightDiffusion();

        //Updates all Actions in  every ActionComponent (if present)
        this.children.list.forEach(element => {
            if ('actions' in element) {
                element.actions.update();
            }
        });
    }

    /**
     * Update the border masks alpha according to the average diffused light in the room.
     * @private
     * @since 1.0.0
     */
    _updateMasksByLightDiffusion() {
        this.averageLightsContribute = this.lightSource.calculateAverageLightsContribute();
        this.layers.wallsMaskLayer.setAlpha(1 - this.averageLightsContribute);
    }

}





