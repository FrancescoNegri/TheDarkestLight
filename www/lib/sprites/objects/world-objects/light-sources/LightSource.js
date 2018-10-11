class LightSource extends WorldObject {
    constructor(room, x, y, texture, layer, graphicLightConfig, diffusedLightConfig, offset, isOn = true) {
        super(room, x, y, texture, layer, false);

        this.config = {
            graphicLight: graphicLightConfig,
            diffusedLight: diffusedLightConfig,
            offset: offset
        }

        this.isOn = false;
        if (isOn) {
            this.turnOn();
        }

        this.room.lightSource.add(this);
    }

    turnOn() {
        if (!this.isOn) {
            this.diffusedLight = this.scene.lights.addLight(this.x + this.config.offset.x, this.y + this.config.offset.y, this.config.diffusedLight.radius).setIntensity(this.config.diffusedLight.intensity);
            this.scene.lightSource.diffusedLights.push(this.diffusedLight);

            this.graphicLight = this.scene.lights.addLight(this.x + this.config.offset.x, this.y + this.config.offset.y, this.config.graphicLight.radius).setIntensity(this.config.graphicLight.intensity);
            this.scene.lightSource.graphicLights.push(this.graphicLight);

            this.isOn = true;
        }
    }

    turnOff() {
        if (this.isOn) {
            var diffusedLightindex = this.scene.lightSource.diffusedLights.indexOf(this.diffusedLight);
            if (diffusedLightindex > -1) {
                this.scene.lightSource.diffusedLights.splice(diffusedLightindex, 1);
                this.scene.lights.removeLight(this.diffusedLight);
            }

            var graphicLightindex = this.scene.lightSource.graphicLights.indexOf(this.graphicLight);
            if (graphicLightindex > -1) {
                this.scene.lightSource.graphicLights.splice(graphicLightindex, 1);
                this.scene.lights.removeLight(this.graphicLight);
            }

            this.isOn = false;
        }
    }
}