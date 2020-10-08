const { merge } = require('webpack-merge');
const path = require('path');
const basicSettings = require('./basicSettings');
const extraSettings = require('./extraSettings');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const ncp = require('ncp').ncp;
const del = require('del');

const deployingAddress = path.resolve(__dirname, '../../TheDarkestCordova/www');

module.exports = merge(basicSettings, extraSettings, {
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: [
          () => {
            setTimeout(() => {
              console.log('\nBundle completed.');
              console.log('Deploying to:', deployingAddress);
              del.sync(deployingAddress, {force: true});
              ncp(path.resolve(__dirname, '../dist'), deployingAddress, (err) => {
                if (err) {
                  return console.error(err);
                }
                return console.log('Deployed.\n');
              });
            }, 500);
          }
        ],
        blocking: false
      }
    })
  ]
});
