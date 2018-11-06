class TestRoom extends TDLRoom {

    constructor() {
        super(
            'TestRoom',
            {
                image: {
                    tiles: {
                        background: { path: 'assets/MANSION_INTERIOR_BACKGROUND_2.png', nPath: 'assets/MANSION_INTERIOR_BACKGROUND_2_n.png' },
                        walls: { path: 'assets/MANSION_INTERIOR_WALLS_2.png', bPath: 'assets/MANSION_INTERIOR_WALLS_2_b.png' }
                    },
                    lightSources: {
                        testLamp: { path: 'assets/CeilingLamp.png', nPath: 'assets/CeilingLamp_n.png' }
                    },
                    sprites: [
                        { path: 'assets/NaziBanner01.png', nPath: 'assets/NaziBanner01_n.png' },
                        { path: 'assets/GardenCar01.png', nPath: 'assets/GardenCar01_n.png' },
                        { path: 'assets/LibraryMap01.png', nPath: 'assets/LibraryMap01_n.png' }
                    ]

                },
                tilemapTiledJSON:
                    { path: 'assets/Rooms/TestRoomNew.json' }
            }
        );
    }

    preload() {
        super.preload();

        this.load.spritesheet('player', ['assets/player.png', 'assets/player_n.png'], { frameWidth: 52, frameHeight: 100 });
        //this.load.image('player', ['assets/player_temp.png', 'assets/player_temp_n.png']);
    }

    create() {
        super.create(new Debugger(this, 300, 250));
        //this.diffusedLightSource1 = new TestDiffusedLightSource(this, 200, 96);
        //this.blankLightSource1= new TestBlankLightSource(this, 350, 200);

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update() {
        super.update();

        if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
            this.player.isBlocked = true;
            this.cursors.hideCursor();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            this.player.isBlocked = false;
            this.cursors.showCursor();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyD)) {
            this.lamp2.switch();
            //this.player.actions.add(ARunTo, { target: { x: this.input.activePointer.worldX } });
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
            this.lamp2.turnOn();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyX)) {
            //this.lamp1.startHardFlickeringAndTrembling();
            this.lamp2.startHardFlickeringAndTrembling();

            //this.lamp2.startSoftFlickeringAndTrembling();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyZ)) {
            this.lamp2.stopSoftFlickering(false);
            this.lamp1.lightBehaviour.stopAllBehaviours();
            this.lamp2.lightBehaviour.stopAllBehaviours();
        }
    }
}