var mongoose = require('mongoose');

exports.index = function (req, res) {
	res.render('login-page', {
		title : "login please"
	});
}

exports.doLogin = function(req, res) {
	res.render('login-page', {
		title : "Loged in not!"
	});
}