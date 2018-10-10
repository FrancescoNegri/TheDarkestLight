class TDLSprite extends Phaser.Physics.Arcade.Sprite {
    constructor(room, x, y, texture, hasBody = true) {
        super(room, x, y, texture);
        this.room = room;
        room.add.existing(this);
        if (hasBody) room.physics.add.existing(this);
    }
}