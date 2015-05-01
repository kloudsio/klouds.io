var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var config = require("./webpack.config.js");



// Start a webpack-dev-server
var middleware = function () {
  config.output.path = "/static";
	var middleware = webpackDevMiddleware(webpack(config), {
    contentBase: '/',
		filename: 'bundle.js',
		watchDelay: 300,
		publicPath: '/static',
		headers: {
			"X-Custom-Header": "yes"
		},
		stats: {
			colors: true
		},
	})
  return middleware;
}

module.exports = middleware;
