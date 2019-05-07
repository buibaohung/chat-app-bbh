var path = require('path');

const root = path.normalize(__dirname + '/..');

const env = process.env.ENV || "staging";

var main_config = {
  env: env,
	host: '0.0.0.0',
	port: 3000,
	secret: 'e66f6bfdea070623c0139e0bee17e8d5024f3f5fe5f66a1fc2c8b41ba3c2f41f',
	root_dir: root,
	public_dir: root + '/public',
	web_dir: root + '/web',
	models_dir: root + '/models',
	controllers_dir: root + '/controllers',
	library_dir: root + '/library',
	console_log: true
};

module.exports = Object.assign(main_config, require('./env/'+env) || {});
