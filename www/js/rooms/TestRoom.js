class TestRoom extends Room {

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
                    }
                },
                tilemapTiledJSON:
                    { path: 'assets/Rooms/TestRoom.json' }
            }
        );
    }

    preload() {
        super.preload();
        
        this.load.image('debugger', ['assets/debugger.png', 'assets/debugger_n.png']);
    }

    create() {
        super.create();

        this.debugger = new Debugger(this, 100, 100);
        this.cameras.main.startFollow(this.debugger);

        this.lamp1 = new TestLamp(this, 200, 96);
        this.lamp2 = new TestLamp(this, 600, 96);

        //this.lamp1.startFlickering(10, 400);
        //this.lamp2.startFlickering(10, 400);

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        /*this.input.on('pointermove', function (pointer) {

            this.light.setPosition(pointer.x, pointer.y);
    
        });*/
    }

    update() {
        super.update();

        if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
            this.lamp2.stopFlickering();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            this.lamp2.startFlickering(100, 400, 'soft');
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyD)) {
            this.lamp2.stopFlickeringAndTrembling();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
            this.lamp2.startFlickeringAndTrembling();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyX)) {
            this.lamp2.startTrembling(100,400);
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyZ)) {
            this.lamp2.stopTrembling();
        }
    }
}