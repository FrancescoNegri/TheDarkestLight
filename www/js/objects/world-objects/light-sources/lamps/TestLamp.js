class TestLamp extends LightSource {
    constructor(room, x, y) {
        super(room, x, y, 'CeilingLamp', { intensity: .5, radius: 150 }, { intensity: .8, radius: 4000 }, { x: 0, y: 20 });
    }
}