var path = require('path');
var webpack = require('webpack');

var config = {
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
      { test: /\.html/, loader: 'html?minimize=false' },
      { test: /\.styl$/, loader: 'raw!stylus' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.svg$/, loader: 'svg' },
      { test: /\.(gif|png|jpe?g)$/i, loader: 'file?name=dist/images/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?name=dist/fonts/[name].[ext]&limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file?name=dist/fonts/[name].[ext]' }
    ]
  }
};

if (!(process.env.NODE_ENV === 'production')) {
  config.devtool = 'source-map';
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
