import TDLib from '../../../../lib/the-darkest-lib';

export default class TestLamp extends TDLib.Sprites.WorldItems.LightSources.LightSource {
  constructor(room, x, y, layer = 'cielingObjectsLayer') {
    super(
      room, x, y, 'CeilingLamp', layer,
      { intensity: 0.4, radius: 150, color: 0xFF9900 },
      { intensity: 1, radius: 6000 },
      { x: 0, y: 20 }
    );
  }
}
