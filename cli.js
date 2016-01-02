#!/usr/bin/env node
'use strict';
var meow = require('meow');
var issuer = require('./');

var cli = meow([
	'Usage',
	'  $ issuer <input>',
	'',
	'Options',
	'  --type  <lang>',
	'',
	'Examples',
	'  $ issuer node'
]);

var type = (cli.input[0] || cli.flags.type).toLowerCase();
issuer(type).then(data => {
	for (var type in data) {
		if (data.hasOwnProperty(type)) {
			console.log(`* ${type} : \`${data[type]}\``);
		}
	}
});
