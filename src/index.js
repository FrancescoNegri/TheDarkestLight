import TDLib from '../lib/the-darkest-lib';
import Screens from './screens';
import Sprites from './sprites';

let config = {
  title: require('../package.json').title,
  version: require('../package.json').version, // Get dinamically from package.json
  url: require('../package.json').homepage,
  startingScene: Screens.TestScreen.default,
  sprites: Sprites
};

// eslint-disable-next-line no-new
new TDLib.Game(config);
console.log(TDLib);
