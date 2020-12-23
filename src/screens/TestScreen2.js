import TDLib from '../../lib/the-darkest-lib';
import TestRoom from '../rooms/TestRoom';

export default class TestScreen2 extends TDLib.Screens.Screen {
  constructor() {
    super(
      'TestScreen2'
    );
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();

    this.title = this.add.text(0, 0, 'A dark game.');
    this.title.x = TDLib.Settings.SCREEN_PROPS.calculatedWidth / 2;
    this.title.y = TDLib.Settings.SCREEN_PROPS.calculatedHeight / 2;
    this.title.setStyle({ fontFamily: 'Arial', fontSize: 44, color: '#00ff00' });
    this.title.setOrigin(0.5);

    this.cameras.main.on('camerafadeoutcomplete', function () {
      this.cursors.showCursor();
      this.start(TestRoom);
    }, this);
    this.cameras.main.on('camerafadeincomplete', () => {
      this.cameras.main.fadeOut(1000);
    }, this);

    this.cameras.main.fadeIn(1000);
  }

  update() {
    super.update();
  }
}
