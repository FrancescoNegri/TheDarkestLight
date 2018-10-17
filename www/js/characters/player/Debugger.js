class Debugger extends Player {
    constructor(room, x, y) {
        super(room, x, y, 'debugger');
    }

    create() {
        super.create();
        this.setCollideWorldBounds(true).setPipeline('Light2D');
        this.room.cursors = this.room.input.keyboard.createCursorKeys();
    }

    update() {
        this.body.setVelocity(0);

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
        }
    }
}