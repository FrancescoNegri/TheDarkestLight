class TestRoom extends Room {

    constructor() {
        super(
            'TestRoom',
            {
                image: {
                    tiles: {
                        background: { path: 'img/MANSION_INTERIOR_BACKGROUND_2.png', nPath: 'img/MANSION_INTERIOR_BACKGROUND_2_n.png' },
                        walls: { path: 'img/MANSION_INTERIOR_WALLS_2.png', bPath: 'img/MANSION_INTERIOR_WALLS_2_b.png' }
                    },
                    lightSources: {
                        testLamp: { path: 'img/CeilingLamp.png', nPath: 'img/CeilingLamp_n.png' }
                    }
                },
                tilemapTiledJSON:
                    { path: 'img/Rooms/TestRoom.json' }
            }
        );
    }

    preload() {
        super.preload();
        
        this.load.image('debugger', ['img/debugger.png', 'img/debugger_n.png']);
    }

    create() {
        super.create();

        this.debugger = new Debugger(this, 100, 100);
        this.cameras.main.startFollow(this.debugger);

        this.lamp1 = new TestLamp(this, 200, 96);
        this.lamp2 = new TestLamp(this, 600, 96);

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        /*this.input.on('pointermove', function (pointer) {

            this.light.setPosition(pointer.x, pointer.y);
    
        });*/
    }

    update() {
        super.update();

        if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
            this.lamp1.turnOn();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            this.lamp1.turnOff();
        }
    }
}