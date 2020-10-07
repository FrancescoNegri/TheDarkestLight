import TDLib from '../lib/the-darkest-lib';
import Rooms from './rooms';
import Sprites from './sprites';

let config = {
  title: require('../package.json').title,
  version: require('../package.json').version, // Get dinamically from package.json
  url: require('../package.json').homepage,
  startingRoom: Rooms.TestRoom.default,
  sprites: Sprites
};

// eslint-disable-next-line no-new
new TDLib.Game(config);
console.log(TDLib);
