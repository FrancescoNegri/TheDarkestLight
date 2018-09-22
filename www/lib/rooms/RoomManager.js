class RoomManager extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);

        this.scene = {}; //Nel Boot questo Member conterrà lo sceneManager
    }

    add(key, scene, autoStart) {
        console.log('Adding Room...');
        this.scene.add(key, scene, autoStart);
    }
}