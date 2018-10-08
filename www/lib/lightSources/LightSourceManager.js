class LightSourceManager extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);

        this.graphicLights = [];
        this.diffusedLights = [];
    }

    boot() {
        this.lightSources = this.scene.add.group();
    }

    add(source) {
        this.lightSources.add(source, true);
        this.lightSources.getChildren().forEach(lightSource => {
            lightSource.setPipeline('Light2D');
        });
    }
}