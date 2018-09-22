class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    create() {
        console.log('Boot created');
        this.configPlugins();

        this.room.add('TestRoom', TestRoom, true);
    }

    configPlugins() {
        this.room.scene = GAME.scene;
    }
}