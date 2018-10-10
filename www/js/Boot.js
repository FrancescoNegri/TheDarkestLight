class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    create() {
        this.configPlugins();

        this.room.add('TestRoom', TestRoom, true);
    }

    configPlugins() {
        this.room.scene = GAME.scene;
    }
}