var koa = require('koa');
var kjson = require('koa-json');
var kjsonb = require('koa-json-body');
var mount = require('koa-mount');
var co = require('co');
var _ = require('lodash');
var path = require('path');

var utils = require('./util');

var mainlog = utils.mlog('main');
var app = koa();

function start(config, modules) {
	config = config;

	co(function* main() {

		mainlog.log('loading');
		yield _.mapValues(modules, function (_modulepath, mpoint) {
			return load(config, _modulepath, mpoint);
		});

		mainlog.log(`listening on port ${config('port')}`);
		app.listen(config('port'));

	}).catch(function onError(err) {
		mainlog.error(err.stack)
	});
}

function* load(config, ppath, mpoint) {
	var ctx = _.assign({
		config: config
	}, utils.mlog(ppath));

	try {

		// KOA
		var sub = koa();
		sub.use(kjson());
		sub.use(function* (next) {
			_.assign(this, ctx);
			this.body = this.request.body;
			this.log(this.originalUrl);
			try {
				yield next;
			} catch (e) {
				this.error(e.stack);
				this.body = e.stack;
			}
		});

		var subapp = yield require(path.join('..', ppath)).call(ctx, sub);
		app.use(mount(mpoint, subapp));
		ctx.info(`mounted on ${mpoint}`);
	} catch (e) {
		mainlog.error(
			`Error Loading Module { '${mpoint}': './${ppath}' }\n${e.stack}`
		);
	}
}


module.exports.start = start;
