class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    create() {
        this.configPlugins();

        //this.input.setDefaultCursor('url(assets/Cursors/CursorMove.cur), pointer');
        this.room.add('TestRoom', TestRoom, true);
    }

    configPlugins() {
        this.room.scene = GAME.scene;
    }
}