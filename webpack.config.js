var path = require('path');
var webpack = require('webpack');

var config = {
  devtool: 'source-map',
  entry: {
    'vendor': './src/vendor',
    'app': './src/bootstrap' 
  },
  output: {
    filename: 'dist/[name].js'   
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

if (!(process.env.NODE_ENV === 'production')) {
  config.plugins = [
    new webpack.DefinePlugin({
      'NODE_ENV': '"dev"'
    })
  ]
} else {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': '"production"'
    })
  ];
}

module.exports = config;