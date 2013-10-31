var mongoose = require( 'mongoose');
var User = mongoose.model( 'User' );

// Get all users
exports.index = function(req, res){
	res.render('user-index', {
		title: 'All Users will display here'
	});
};

// Get user creation form
exports.create = function(req, res){
	res.render('user-form', {
		title: 'Create user',
		buttonText: "Join!"
	});
};

// Post new user creation form
exports.doCreate = function(req, res){
	User.create({
		name: req.body.FullName,
		email: req.body.Email,
		modifiedOn : Date.now(),
		lastLogin: Date.now()
	}, function( err, user ){
		if(err){
			console.log(err);
			if(err.code===11000){
				res.redirect('/user/new?exists=true');
			}
		} else {
			//success
			console.log("User created and saved: " + user);
		}
	});
};