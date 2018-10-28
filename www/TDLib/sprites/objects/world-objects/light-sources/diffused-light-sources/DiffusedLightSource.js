class DiffusedLightSource extends LightSource {

    static get TYPE(){
        return 'DiffusedLightSource'
    }
    constructor(room, x, y, texture, layer, diffusedLightConfig, offset, allowedBehaviours, isOn) {
        super(room, x, y, texture, layer, null, diffusedLightConfig, offset, allowedBehaviours, isOn);
    }
}