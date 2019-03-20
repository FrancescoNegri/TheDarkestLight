import TDLib from '../lib/the-darkest-lib';
import TestRoom from './rooms/TestRoom';
import Sprites from './sprites';

let config = {
  title: 'The Darkest Light',
  version: '1.0.0', // Get dinamically from package.json
  url: 'https://thedarkestlight.io',
  startingRoom: TestRoom,
  sprites: Sprites
};

// eslint-disable-next-line no-new
new TDLib.Game(config);
console.log(TDLib);
