class TestRoom extends Room {

    constructor() {
        super(
            'TestRoom',
            {
                image: {
                    tiles: {
                        background: { path: 'img/MANSION_INTERIOR_BACKGROUND_2.png', nPath: 'img/MANSION_INTERIOR_BACKGROUND_2_n.png' },
                        walls: { path: 'img/MANSION_INTERIOR_WALLS_2.png', nPath: 'img/MANSION_INTERIOR_WALLS_2_n.png' }
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

        this.light = this.lights.addLight(0, 0, 250).setScrollFactor(0, 0).setIntensity(.5);

        this.lights.enable();

        /*this.input.on('pointermove', function (pointer) {

            this.light.setPosition(pointer.x, pointer.y);
    
        });*/
    }

    update() {
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

        this.light.setPosition(this.debugger.x, this.debugger.y);
    }
}