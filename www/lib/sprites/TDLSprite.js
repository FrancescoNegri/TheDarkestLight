class TDLSprite extends Phaser.Physics.Arcade.Sprite {
    constructor(room, x, y, texture, layer = null, hasBody = true) {
        super(room, x, y, texture);
        
        this.room = room;
        
        this.room.add.existing(this);
        if (hasBody) this.room.physics.add.existing(this);
        
        if (layer != null) {
            if (layer in this.room.layers) {
                this.room.layers[layer].add(this);
                this.room.layers.setLayersDepth();
            }
            else console.warn('ALERT: layer not found for object', this);
        }

        this.create();
        this.room.updates.add(this);
    }

    create() {
        console.log('Created:', this);
    }

    update() {

    }
}