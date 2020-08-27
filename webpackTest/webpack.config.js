const path = require('path');

module.exports = {
  entry: [
    __dirname + '/webpack.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  optimization: {
    usedExports: true,
  },
  module: {},
  // mode: 'development'
  mode: 'production'
};