import TDLib, { Settings } from '../../lib/the-darkest-lib';
import Phaser from 'phaser';
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

    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

    this.title = this.add.text(0, 0, 'The Darkest Light');
    this.title.x = Settings.SCREEN_PROPS.calculatedWidth / 2;
    this.title.y = Settings.SCREEN_PROPS.calculatedHeight / 2;
    this.title.setStyle({ fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
    this.title.setOrigin(0.5);

    this.cameras.main.on('camerafadeoutcomplete', function () {
      this.change(TestScreen2);
    }, this);
  }

  update() {
    super.update();

    if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
      this.cursors.hideCursor();
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
      this.cursors.showCursor();
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyD)) {
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyX)) {
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyZ)) {
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyC)) {
      this.cameras.main.fadeOut(1000);
    }
  }
}
