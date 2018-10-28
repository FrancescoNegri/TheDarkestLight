class BlankLightSource extends LightSource {

    static get TYPE(){
        return 'BlankLightSource'
    }
    constructor(room, x, y, layer, graphicLightConfig, diffusedLightConfig, offset, allowedBehaviours, isOn) {
        super(room, x, y, null, layer, graphicLightConfig, diffusedLightConfig, offset, allowedBehaviours, isOn)
    }
} 