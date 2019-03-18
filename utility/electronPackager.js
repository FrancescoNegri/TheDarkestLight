const ncp = require('ncp').ncp;
const path = require('path');

ncp.limit = 16;

let source = path.resolve(__dirname, '../platforms/browser/www');

let destination = path.resolve(__dirname, '../../TheDarkestLightElectron/src/www');

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  return console.log('TheDarkestLightElectron packaged with the latest version of TheDarkestLight!');
});
