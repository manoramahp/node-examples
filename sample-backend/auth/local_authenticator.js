var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

module.exports.authenticate = function(req, res, next) {
    console.log("[sample] local authentication")
    next();
}