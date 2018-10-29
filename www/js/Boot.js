class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
    }

    create() {
        this.configPlugins();
        this.room.add('TestRoom', TestRoom, true);
    }

    configPlugins() {
        this.cursors.configure(GAME.scene);
        this.room.configure(GAME.scene);
    }
}