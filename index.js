// Dependencies
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

require('./lib/db.js');
global.logger = require('./lib/logger');

// Set public folder
app.use(express.static(__dirname + '/public'));

// Setup template engine
app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

// Load routing & controllers
require('./lib/routes')(app, { verbose: !module.parent });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup server
var server = app.listen(3000, function () {

	var port = server.address().port;
	console.log('listening on %s', port);
});
