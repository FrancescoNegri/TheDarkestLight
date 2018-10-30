class LightSourceManager extends TDLRoomPlugin {
    constructor(room, pluginManager) {
        super(room, pluginManager);

        this.graphicLights = [];
        this.diffusedLights = [];
    }

    boot() {
        this.lightSources = this.room.add.group();
    }

    add(source) {
        this.lightSources.add(source, true);
        this.lightSources.getChildren().forEach(lightSource => {
            lightSource.setPipeline('Light2D');
        });

        return source;
    }

    //Le luci che flickerano o con comportamenti strani vanno contate?
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
        var averageLightsContribute = 0;
        if (singleLightIntensityAccumulator != 0) averageLightsContribute = Math.floor((singleLightIntensityAccumulator * 10000 / this.room.layers.wallsLayer.width / Global.TILE_SIZE) * 100) / 100 + 0.3;
        return averageLightsContribute;
    }
}