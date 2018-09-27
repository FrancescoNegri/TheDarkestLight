class TestRoom extends Room {

    constructor() {
        super(
            'TestRoom',
            {
                image: {
                    tiles: [
                        { path: 'img/MANSION_INTERIOR_BACKGROUND_2.png' },
                        { path: 'img/MANSION_INTERIOR_WALLS_2.png' }
                    ]
                },
                tilemapTiledJSON: [
                    { path: 'img/Rooms/TestRoom.json' }
                ]
            }
        );
    }

    preload() {
        super.preload();
        this.load.image('MANSION_INTERIOR_BACKGROUND_2', 'img/MANSION_INTERIOR_BACKGROUND_2.png');
        this.load.image('MANSION_INTERIOR_WALLS_2', 'img/MANSION_INTERIOR_WALLS_2.png');
        this.load.tilemapTiledJSON('map', 'img/Rooms/TestRoom.json');

        this.load.image('debugger', 'img/debugger.png');
    }

    create() {
        super.create();
        this.debugger = this.physics.add.sprite(100, 100, 'debugger');
        this.cursors = this.input.keyboard.createCursorKeys();
        this.debugger.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.debugger);
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
    }
}