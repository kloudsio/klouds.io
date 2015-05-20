var blessed = require('blessed')
var contrib = require('blessed-contrib')

var exec = require('child_process').exec;

var screen = blessed.screen();

var grid = new contrib.grid({rows: 12, cols: 12, screen: screen})

var a = grid.set(0, 0, 6, 12, contrib.log, {
	label: 'Client',
	tags: true,
})

var b = grid.set(6, 0, 6, 12, contrib.log, {
	label: 'Server',
	tags: true,
})

screen.render()

exec2log(a, 'make\ -C\ client');
exec2log(b, 'make');

function exec2log(widget, cmd) {
	var obj = exec(cmd);

	obj.stdout.on('data', function (data) {
		widget.log(data);
	});

	obj.stderr.on('data', function (err) {
		widget.log('{red-fg}' + err + '{/red-fg}');
	});

	obj.on('exit', function (code) {
		widget.log('child process exited with code ' + code);
	});
}
