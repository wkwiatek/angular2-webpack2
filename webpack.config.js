module.exports = {
  entry: {
    app: [
      // Angular 2 Deps
      'es6-shim',
      'rxjs',
      'zone.js',
      'reflect-metadata',

      './src/bootstrap'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'   
  },
  resolve: {
    extensions: ['', '.ts', '.es6', '.js', '.json']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { stage: 0 } },
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts' },
      { test: /\.styl$/, loader: 'raw!css!stylus' },
      { test: /\.css$/, loader: 'css' },
      { test: /\.png$/, loader: 'file' }
    ]
  }
};