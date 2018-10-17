class TDLSprite extends Phaser.Physics.Arcade.Sprite {
    constructor(room, x, y, texture, layer = null, hasBody = true) {
        super(room, x, y, texture);

        this.room = room;
        this.name = this.constructor.name;

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
        console.log('Created:', this.name);
        this.setInteractionType();
    }

    setInteractionType() {
        this.setInteractive({cursor: 'url(assets/Cursors/CursorExamine.cur), pointer'});
        this.on('pointerover', function (event) {
            console.log('MouseOver on', this);
        });
        this.on('pointerout', function (event) {
            console.log('MouseOut on', this);
        });
    }

    update() {

    }
}