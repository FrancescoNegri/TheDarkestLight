class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
    }

    create() {
        this.configPlugins();
        this.rooms.add(TestRoom);
    }

    configPlugins() {
        this.cursors.configure(GAME.scene);
        this.rooms.configure(GAME.scene);
    }
}