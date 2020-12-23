import TDLib from '../../lib/the-darkest-lib';
import TestScreen2 from './TestScreen2';

export default class TestScreen extends TDLib.Screens.Screen {
  constructor() {
    super(
      'TestScreen'
    );
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();

    this.title = this.add.text(0, 0, 'The Darkest Light');
    this.title.x = TDLib.Settings.SCREEN_PROPS.calculatedWidth / 2;
    this.title.y = TDLib.Settings.SCREEN_PROPS.calculatedHeight / 2;
    this.title.setStyle({ fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
    this.title.setOrigin(0.5);

    this.cameras.main.on('camerafadeoutcomplete', function () {
      this.start(TestScreen2);
    }, this);
    this.cameras.main.fadeOut(1500);
  }

  update() {
    super.update();
    this.cursors.hideCursor();
  }
}
