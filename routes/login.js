var mongoose = require('mongoose');

exports.index = function (req, res) {
	res.render('login-page');
}

exports.doLogin = function(req, res) {
	//check for user
	console.log('in doLogin');
	if(typeof(Storage) !== "undefined"){
		res.redirect('/safe');
	} else {
		res.redirect('/old');
	}
}