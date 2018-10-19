class TestBlankLightSource extends BlankLightSource {
    constructor(room, x, y, layer = 'cielingObjectsLayer') {
        super(room, x, y, layer, { intensity: .5, radius: 150 }, { intensity: .8, radius: 4000 }, { x: 0, y: 20 }, ['HardFlickeringBehaviour', 'TremblingBehaviour', 'HardFlickeringAndTremblingBehaviour', 'SoftFlickeringBehaviour']);
        this.startSoftFlickering();
    }
}