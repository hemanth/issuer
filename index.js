'use strict';
const process = require('process');
const exec = require('child_process').exec;
const os = require('os');
const issueTypes = {
	node: () => {
		var promise = new Promise((resolve, reject) => {
			var info = {
				os: os.type && os.type(),
				version: process.version,
				path: process.env.PATH
			};
			exec('npm --version', {encoding: 'utf8'}, (err, data) => {
				if (err) {
					reject(err);
				} else {
					info.nvm = data.replace('\n', '');
					resolve(info);
				}
			});
		});
		return promise;
	}
};

module.exports = function (lang) {
	if (issueTypes.hasOwnProperty(lang)) {
		return issueTypes[lang]();
	}
};
