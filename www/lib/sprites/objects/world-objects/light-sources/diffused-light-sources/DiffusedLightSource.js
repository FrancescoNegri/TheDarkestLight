class DiffusedLightSource extends LightSource {
    constructor(room, x, y, texture, layer, diffusedLightConfig, offset, isOn) {
        super(room, x, y, texture, layer, null, diffusedLightConfig, offset, isOn);
    }
}