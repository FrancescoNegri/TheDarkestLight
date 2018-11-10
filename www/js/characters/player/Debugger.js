class Debugger extends TDLib.Sprites.Characters.Players.Player {
    constructor(room, x, y) {
        super(room, x, y, 'player');
    }

    create() {
        super.create();

        let config = {
            key: 'walk',
            frames: this.anims.animationManager.generateFrameNumbers('player', { start: 2, end: 7 }),
            frameRate: 8,
            repeat: -1
        };
        this.anims.animationManager.create(config);

        config ={
            key: 'run',
            frames: this.anims.animationManager.generateFrameNumbers('player',{ start: 8, end: 13}),
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
        this.anims.animationManager.create(config);+;
    }

    update() {
        super.update();
    }
}