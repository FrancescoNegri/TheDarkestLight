class TestRoom extends Room {

    constructor() {
        super(
            'TestRoom',
            {
                image: {
                    tiles: {
                        background: { path: 'img/MANSION_INTERIOR_BACKGROUND_2.png', nPath: 'img/MANSION_INTERIOR_BACKGROUND_2_n.png' },
                        walls: { path: 'img/MANSION_INTERIOR_WALLS_2.png', bPath: 'img/MANSION_INTERIOR_WALLS_2_b.png' }
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

        this.light1 = this.lights.addLight(20, -30, 250).setIntensity(2);
        this.light2 = this.lights.addLight(200, -30, 30000).setIntensity(2);

        /*this.input.on('pointermove', function (pointer) {

            this.light.setPosition(pointer.x, pointer.y);
    
        });*/
    }

    update() {
        super.update();
        this.debugger.body.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.debugger.body.setVelocityX(-300);
            this.light2.setIntensity(this.light2.intensity - .5);
        }
        else if (this.cursors.right.isDown) {
            this.debugger.body.setVelocityX(300);
            this.light2.setIntensity(this.light2.intensity + .5);
        }

        if (this.cursors.up.isDown) {
            this.debugger.body.setVelocityY(-300);
            this.lights.removeLight(this.light2);
        }
        else if (this.cursors.down.isDown) {
            this.debugger.body.setVelocityY(300);
            this.lights.removeLight(this.light1);
        }
    }
}