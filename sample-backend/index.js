var express = require('express');
var devices_controller = require('./controllers/devices');
var local_auth = require('./auth/local_authenticator');
// var aws_auth = require('./auth/aws_authenticator');

var app = express();

app.use('/devices', local_auth.authenticate, devices_controller);
// app.use('/devices', aws_auth.authenticate, devices_controller);

app.listen(3000);

module.exports = app; // for testing 