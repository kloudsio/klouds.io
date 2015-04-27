var koa = require('koa');
var mount = require('koa-mount');
var co = require('co');
var _ = require('lodash');
var path = require('path');

var app = koa();


function logFactory(prefix) {
	return _.mapValues({
		warn: '\x1b[35m',
		error: '\x1b[31m',
		log: '\x1b[2m',
		info: '\x1b[36m'
	}, function (color, method) {
		return console[method].bind(
			console,
			'\x1b[36m' + color + _.padLeft(method.toUpperCase(), 5) + '\x1b[0m',
			'\x1b[33m' + _.padRight(prefix.toUpperCase(), 8) + '\x1b[0m'
		);
	});
}

var logs = logFactory('Main');


function* load(config, _modulepath, _mountpoint) {
	logs.log(`Loading Module '${_mountpoint}'`);
	try {
		var context = _.assign({
			config: config
		}, logFactory(_modulepath));
		var _module = require(path.join('..', _modulepath));
		var res = yield _module.call(context)
		app.use(mount(_mountpoint, res));
		logs.log(`Loaded Module '${_mountpoint}'`);
	} catch (e) {
		logs.error(
			`Error Loading Module { '${_mountpoint}': './${_modulepath}' }\n${e.stack}`
		);
	}
}

module.exports.start = function (config, modules) {
	config = config;

	co(function* main() {
		var apps = yield _.mapValues(modules, function (_modulepath, _mountpoint) {
			return load(config, _modulepath, _mountpoint);
		});

		app.listen(config('port'));
	}).catch(function onError(err) {
		logs.error(err.stack)
	});
}
