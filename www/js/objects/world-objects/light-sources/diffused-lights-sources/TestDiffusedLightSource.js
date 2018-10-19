class TestDiffusedLightSource extends DiffusedLightSource {
    constructor(room, x, y, layer = 'cielingObjectsLayer') {
        super(room, x, y, 'CeilingLamp', layer, { intensity: .8, radius: 4000 }, { x: 0, y: 20 });
    }
}