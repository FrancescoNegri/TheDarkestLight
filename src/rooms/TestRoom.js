import TDLib from '../../lib/the-darkest-lib';
import Phaser from 'phaser';
import Debugger from '../sprites/characters/players/Debugger';
import TestRoom2 from './TestRoom2';

export default class TestRoom extends TDLib.Rooms.Room {
  constructor() {
    super(
      'TestRoom',
      {
        image: {
          tiles: {
            background: {
              path: 'assets/MANSION_INTERIOR_BACKGROUND_2.png',
              nPath: 'assets/MANSION_INTERIOR_BACKGROUND_2_n.png'
            },
            walls: {
              path: 'assets/MANSION_INTERIOR_WALLS_2.png',
              bPath: 'assets/MANSION_INTERIOR_WALLS_2_b.png'
            }
          },
          lightSources: {
            testLamp: { path: 'assets/CeilingLamp.png', nPath: 'assets/CeilingLamp_n.png' }
          },
          sprites: [
            { path: 'assets/NaziBanner01.png', nPath: 'assets/NaziBanner01_n.png' },
            { path: 'assets/GardenCar01.png', nPath: 'assets/GardenCar01_n.png' },
            { path: 'assets/LibraryMap01.png', nPath: 'assets/LibraryMap01_n.png' }
          ]

        },
        tilemapTiledJSON:
          { path: 'assets/Rooms/TestRoomNew.json' }
      }
    );
  }

  preload() {
    super.preload();

    this.load.spritesheet('player', ['assets/player.png', 'assets/player_n.png'], { frameWidth: 52, frameHeight: 100 });
  }

  create() {
    super.create(new Debugger(this, 300, 250));
    // this.diffusedLightSource1 = new TestDiffusedLightSource(this, 200, 96);
    // this.blankLightSource1= new TestBlankLightSource(this, 350, 200);

    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
  }

  update() {
    super.update();

    if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
      this.player.isBlocked = true;
      this.cursors.hideCursor();
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
      this.player.isBlocked = false;
      this.cursors.showCursor();
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyD)) {
      this.objects.lamp2.switch();
      // this.player.actions.add(ARunTo, { target: { x: this.input.activePointer.worldX } });
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
      // console.log(this.lightSources.calculateLightsContribuitePoint(this.player));
      this.rooms.start(TestRoom2);
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyX)) {
      this.objects.lamp2.effects.play('Trembling', 5000);
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyZ)) {
      this.objects.lamp2.effects.play('HardFlickering', 3000);
    }
    if (Phaser.Input.Keyboard.JustDown(this.keyC)) {
      this.objects.lamp2.effects.play('RadiusFlickering');
    }
  }
}
