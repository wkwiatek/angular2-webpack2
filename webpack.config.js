const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    'vendor': './src/vendor',
    'app': './src/bootstrap'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
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
      { test: /\.(gif|png|jpe?g)$/i, loader: 'file?name=dist/images/[name].[ext]' },
      { test: /\.woff2?$/, loader: 'url?name=dist/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)$/, loader: 'file?name=dist/fonts/[name].[ext]' }
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
    }),
    new CopyWebpackPlugin([{ from: './src/index.html' }], {})
  ];
}

module.exports = config;
