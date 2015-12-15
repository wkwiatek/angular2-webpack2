var path = require('path');

module.exports = {
  entry: './src/bootstrap',
  output: {
    filename: 'dist/bundle.js'   
  },
  resolve: {
    extensions: ['', '.ts', '.es6', '.js', '.json']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts' },
      { test: /\.html/, loader: 'raw' },
      { test: /\.styl$/, loader: 'css!stylus' },
      { test: /\.css$/, loader: 'css' },
      { test: /\.(gif|png|jpe?g)$/i, loader: 'file' }
    ]
  }
};