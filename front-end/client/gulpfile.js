var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");


// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

gulp.task("webpack-dev-server", function (callback) {
	webpackConfig.output.path = "/static";

	var compiler = webpack(webpackConfig);
	// Start a webpack-dev-server
	new WebpackDevServer(compiler, {
		contentBase: "./static/",
		filename: "./static/bundle.js",
		watchDelay: 300,
		publicPath: "/",
		headers: {
			"X-Custom-Header": "yes"
		},
		stats: {
			colors: true
		},
	}).listen(8080, "localhost", function (err) {
		if (err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/");
	});
});


// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build", ["webpack:build-dev"], function () {
	gulp.watch(["src/**/*"], ["webpack:build-dev"]);
});


gulp.task("webpack:build-dev", function (callback) {
	var compiler = webpack(webpackConfig);
	// run webpack
	compiler.run(function (err, stats) {
		if (err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});
