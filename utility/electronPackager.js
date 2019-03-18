const ncp = require('ncp').ncp;
const path = require('path');

ncp.limit = 16;

ncp(path.resolve(__dirname, '../platforms/browser/www'), path.resolve(__dirname, '../../TheDarkestLightElectron/src/www'), function (err) {
    if (err) {
        return console.error(err);
    } else {
        return console.log('TheDarkestLightElectron packaged with the latest version of TheDarkestLight!');
    }
});