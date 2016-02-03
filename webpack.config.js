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
      // Due to zone.js node_modules can't be excluded for ts
      { test: /\.ts$/, loader: 'ts' },
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
    })
  ];
}

module.exports = config;
