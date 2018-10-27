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

        this.load.spritesheet('player', ['assets/player.png', 'assets/player_n.png'], { frameWidth: 52, frameHeight: 100});
        //this.load.image('player', ['assets/player_temp.png', 'assets/player_temp_n.png']);
    }

    create() {
        super.create(new Debugger(this, 100, 100));

        this.lamp1 = new TestLamp(this, 200, 96);
        this.lamp2 = new TestLamp(this, 600, 96);

        //this.player.actions.add(ACount);
        //this.diffusedLightSource1 = new TestDiffusedLightSource(this, 200, 96);
        //this.blankLightSource1= new TestBlankLightSource(this, 350, 200);

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
            /*
            this.lamp1.behaviour.stopAllBehaviours();
            this.lamp2.behaviour.stopAllBehaviours();*/
            this.player.actions.add(ACount, {startingNumber: 34}, ActionComponent.PAUSE_MODE);
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            //this.lamp2.startFlickering(1,50);
            /*this.lamp1.turnOff();
            this.lamp2.turnOff();*/
            this.player.actions.add(AComposedTest, {startingNumber: 10});
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyD)) {
            this.lamp2.startTrembling();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
            this.lamp2.startSoftFlickering();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyX)) {
            this.lamp1.startHardFlickeringAndTrembling();
            this.lamp2.startHardFlickeringAndTrembling();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyZ)) {
            this.lamp2.startSoftFlickeringAndTrembling();
        }
    }
}