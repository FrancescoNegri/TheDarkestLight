class Lamp extends LightSource {

    static get TYPE(){
        return 'Lamp'
    }

    constructor(room, x, y, texture, layer, graphicLightConfig, diffusedLightConfig, offset, allowedBehaviours) {
        super(room, x, y, texture, layer, graphicLightConfig, diffusedLightConfig, offset, allowedBehaviours);
    }
}