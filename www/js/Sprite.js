class Sprite extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, hasBody = true) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        if (hasBody) scene.physics.add.existing(this);
    }
}