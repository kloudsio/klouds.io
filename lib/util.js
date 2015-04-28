var _ = require('lodash');

function mlog(prefix) {
	return _.mapValues({
		warn: ['\x1b[35m # WARNING\x1b[36m', '\x1b[2m'],
		error: ['\x1b[31m !?!?', '\x1b[0m'],
		log: ['\x1b[36m\x1b[0m', '\x1b[0m'],
		info: ['\x1b[36m\x1b[2m #', '\x1b[2m'],
	}, function (colors, method) {
		return console[method].bind(
			console,
			'\x1b[0m\x1b[33m' + _.padLeft(prefix.toLowerCase(), 14) + colors[0] +
			colors[1]
		);
	});
}

module.exports.mlog = mlog
