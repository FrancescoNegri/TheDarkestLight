class LightSource extends WorldObject {
    constructor(room, x, y, texture, graphicLightConfig, diffusedLightConfig, offset) {
        super(room, x, y, texture, false);

        this.config = {
            graphicLight : graphicLightConfig,
            diffusedLight: diffusedLightConfig,
            offset: offset
        }

        this.diffusedLight = this.scene.lights.addLight(x + this.config.offset.x, y + this.config.offset.y, this.config.diffusedLight.radius).setIntensity(this.config.diffusedLight.intensity);
        this.scene.lightSource.diffusedLights.push(this.diffusedLight);

        this.graphicLight = this.scene.lights.addLight(x + this.config.offset.x, y + this.config.offset.y, this.config.graphicLight.radius).setIntensity(this.config.graphicLight.intensity);
        this.scene.lightSource.graphicLights.push(this.graphicLight);
    
        this.room.lightSource.add(this);
    }
}