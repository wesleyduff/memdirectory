var mongoose = require('mongoose');
var User = mongoose.model('User');

// GET user creation form
exports.create = function (req, res) {
    res.render('user-form', {
        title: 'Create user',
        buttonText: "Join!"
    });
};

exports.index = function (req, res) {
	var isLoggedIn = false;
    if(typeof(Storage) !== "undefined")
	{
		var user = JSON.parse(localStorage.getItem("user"));
		if(user !== "undefined"){
			//logged in
			res.render('user-page', {
				title : user.name,
				name: user.name,
				email: user.email,
				userId: user._id
			})
		} else {
			res.redirect('/login');
		}
	} else {
		if(req.session.loggedIn){
			res.render('user-page', {
				title : req.session.user.name,
				name: req.session.user.name,
				email: req.session.user.email,
				userId: req.session.user._id
			})
		} else {
			res.redirect('/login');
		}
	}
};

// POST new user creation form
exports.doCreate = function (req, res) {
    console.log(req);
    User.create({
        name: req.body.fullName,
        email: req.body.email,
        modifiedOn: req.body.modifiedOn,
        lastLogin: req.body.lastLogin
    }, function (err, user) {
        if (err) {
            console.log(err);
            if (err.code === 11000) {
                res.redirect('/user/new?exists=true');
            } else {
                res.redirect('/?error=true');
            }
        } else {
            // Success
            console.log("User cretated and savced: " + user);
			
            res.redirect('/user?saved=true');
        }
    });
};