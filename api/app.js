var express = require('express');

var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);
exports.io = io;



console.log('live-tweet-io started on port ' + server.address().port);

//Configuration
app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger());

app.all('*', function(req, res, next) {
  	res.set('Access-Control-Allow-Origin', '*');
  	res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  	res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  	if ('OPTIONS' == req.method) return res.send(200);
  	next();
});


var streamControl = require('./config/streamControl.js');