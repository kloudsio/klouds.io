var webpack = require('webpack');
var BowerWebpackPlugin = require("bower-webpack-plugin");

var config = {
  context: __dirname,
  entry: {
    bundle: './src/app.js',
  },
  output: {
    path: 'static',
    filename: '[name].js',
  },

  module: {
    loaders: [{
      test: /\.yaml/,
      loader: 'json!yaml'
    }, {
      test: /\.ejs$/,
      loader: 'ejs-compiled'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.md$/,
      loader: 'html!markdown',
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, ]
  },

  // bower

  resolve: {
    root: ['./bower_components']
  },
  plugins: [
    new BowerWebpackPlugin({
      modulesDirectories: ["bower_components"],
      manifestFiles: "bower.json",
      includes: /.*/,
      excludes: [],
      searchResolveModulesDirectories: true
    })
  ]
};

module.exports = config;
