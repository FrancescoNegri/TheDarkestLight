import TDLib from '../../../../lib/the-darkest-lib';

export default class TestLamp extends TDLib.Sprites.WorldItems.LightSources.LightSource {
    constructor(room, x, y, layer = 'cielingObjectsLayer') {
        super(
            room, x, y, 'CeilingLamp', layer,
            { intensity: .5, radius: 150 },
            { intensity: .8, radius: 4000 },
            { x: 0, y: 20 }
        );
    }
}