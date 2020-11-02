const { merge } = require('webpack-merge');
const basicSettings = require('./basicSettings');

module.exports = merge(
  basicSettings,
  module.exports = {
    devServer: {
      open: true
    }
  }
);
