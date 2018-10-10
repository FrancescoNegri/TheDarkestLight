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

        return source;
    }

    calculateLightsContribuitePoint(target) {
        var singleLightContributeAccumulator = 0;
        this.diffusedLights.forEach(light => {
            singleLightContributeAccumulator += light.intensity / (Math.abs(light.x - target.x) ^ 2);
        });

        return Math.floor(singleLightContributeAccumulator * 10000) / 1000;
    }

    calculateAverageLightsContribute() {
        var singleLightIntensityAccumulator = 0;
        this.diffusedLights.forEach(light => {
            singleLightIntensityAccumulator += light.intensity;
        });
        var averageLightsContribute = Math.floor((singleLightIntensityAccumulator * 10000 / this.scene.layers.wallsLayer.width / TILE_SIZE) * 100) / 100 + 0.3;
        return averageLightsContribute;
    }
}