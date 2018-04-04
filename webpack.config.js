const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/useless.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'useless',
    library: 'useless',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  mode: process.env.NODE_ENV || 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV || 'development'
    })
  ]
}
