class Debugger extends Player {
    constructor(room, x, y) {
        super(room, x, y, 'player');
    }

    create() {
        super.create();
        this.setCollideWorldBounds(true); //.setPipeline('Light2D');
        this.room.cursors = this.room.input.keyboard.createCursorKeys();

        let config = {
            key: 'walk',
            frames: this.anims.animationManager.generateFrameNumbers('player', { start: 2, end: 7 }),
            frameRate: 8,
            repeat: -1
        };
        this.anims.animationManager.create(config);

        config = {
            key: 'idle',
            frames: this.anims.animationManager.generateFrameNumbers('player', { start: 0, end: 0 }),
            frameRate: 0,
            repeat: -1
        };
        this.anims.animationManager.create(config);
    }

    update() {
        super.update();
        /*this.body.setVelocity(0);

        if (this.room.cursors.left.isDown) {
            this.body.setVelocityX(-300);
        }
        else if (this.room.cursors.right.isDown) {
            this.body.setVelocityX(300);
        }

        if (this.room.cursors.up.isDown) {
            this.body.setVelocityY(-300);
        }
        else if (this.room.cursors.down.isDown) {
            this.body.setVelocityY(300);
        }*/
    }
}