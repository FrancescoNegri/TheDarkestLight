class TDLRoomPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(room, pluginManager) {
        super(room, pluginManager);

        this.room = room;
    }
}