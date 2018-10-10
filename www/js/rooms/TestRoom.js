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

        this.debugger = new TDLSprite(this, 100, 100, 'debugger').setPipeline('Light2D'); //Pensare se inserire il layer direttamente qui (forse è meglio!)
        this.debugger.setCollideWorldBounds(true);
        this.layers.playerLayer.add(this.debugger); //Il gruppo restituisce il gruppo stesso, non il singolo elemento!!
        this.cameras.main.startFollow(this.debugger);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.layers.cielingObjectsLayer.add(new TestLamp(this, 200, 96));
        this.lamp1 = new TestLamp(this, 600, 96);
        this.layers.cielingObjectsLayer.add(this.lamp1);

        this.layers.setLayersDepth();

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        /*this.input.on('pointermove', function (pointer) {

            this.light.setPosition(pointer.x, pointer.y);
    
        });*/
    }

    update() {
        super.update();
        this.debugger.body.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.debugger.body.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown) {
            this.debugger.body.setVelocityX(300);
        }

        if (this.cursors.up.isDown) {
            this.debugger.body.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown) {
            this.debugger.body.setVelocityY(300);
        }

        
        if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
            this.lamp1.turnOn();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            this.lamp1.turnOff();
        }
    }
}