const config = require('../../config');
var mongoose = require('mongoose');

const connect = ()=>{
	return new Promise((resolve, reject)=>{
		var url = "mongodb://" + config.mongo.host + ":" + config.mongo.port + "/" + config.mongo.database;
		if(config.mongo.user){
			url = "mongodb+srv://" + config.mongo.user + ":" + config.mongo.password + "@" + config.mongo.host; // online
      console.log(url)
		}

		mongoose.connect(url, {useNewUrlParser: true});
		mongoose.Promise = global.Promise;
		var connection = mongoose.connection;
		connection.on('error', err => reject(err));
		connection.on('connected', () => resolve());
	});
}

const close = ()=>{
    return mongoose.connection.close()
}

module.exports = {connect, close};