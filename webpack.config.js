const webpack = require('webpack');
const path = require('path');
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // all your loaders will be here.
      // loaders enables you to use all kinds of
      // file types
    ]
  }
}
module.exports = config;
