class Player extends TDLCharacter {
    constructor(room, x, y, texture) {
        super(room, x, y, texture, 'playerLayer');
    }

    create() {
        super.create();

        this.room.input.on('pointerdown', function (pointer) {
            this.room.cursors.pointerDown();    
        }, this);
    }
}