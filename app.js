
/**
 * Module dependencies.
 */

var express = require('express');
var db = require('./model/db');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
//// USER ROUTES
app.get('/user', user.index);          // Current user profile
app.get('/user/new', user.create);     // Create new user form
app.post('/user/save', user.doCreate);  // Create new user action
app.get('/users', user.getAllUsers); //get all the users
//app.get('/user/edit', user.edit);      // Edit current user form
//app.post('/user/edit', user.doEdit);   // Edit current user action
//qpp.get('/user/delete', user.confirmDelete); // delete current//user form
//app.post('/user/delete', user.doDelete);     // Delete current//user action
//app.get('/login', user.login);          // Login form
//app.post('/login', user.doLogin);       // Login action
//app.get('/logout', user.doLogout);      // Logout current user

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
