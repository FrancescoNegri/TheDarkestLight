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

        this.load.image('debugger', 'img/debugger.png');
    }

    create() {
        super.create();
        this.debugger = this.physics.add.sprite(100, 100, 'debugger');
        this.debugger.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.startFollow(this.debugger);

        this.lightSource.add(new LightSource(this, 200, 96, 'CeilingLamp', { intensity: .5, radius: 150 }, { intensity: .8, radius: 4000 }, { x: 0, y: 20 }));

        //this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        //this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

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

        /*
        if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
            this.lights.removeLight(this.diffusedLight);
            this.diffusedLight2 = this.lights.addLight(200, 40, 4000).setIntensity(2);
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            this.lights.removeLight(this.diffusedLight2);
            this.diffusedLight = this.lights.addLight(200, 40, 4000).setIntensity(1);
        }
        */
    }
}