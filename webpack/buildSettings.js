const { merge } = require('webpack-merge');
const basicSettings = require('./basicSettings');
const extraSettings = require('./extraSettings');

module.exports = merge(basicSettings, extraSettings);
