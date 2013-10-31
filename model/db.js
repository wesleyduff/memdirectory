// Bring Mongoose into the project
var mongoose = require( 'mongoose' );

//Here we find an appropriate database to connect to, defaulting to localhst if we don't find one.
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/MongoosePM'

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) { 
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

/* ********************************************
      HANDLE EVENTS
   ******************************************** */
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + uristring);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

/* ********************************************
      USER SCHEMA
   ******************************************** */
var userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique:true},
  createdOn: { type: Date, default: Date.now },
  modifiedOn: Date,
  lastLogin: Date
});

// Build the User model
mongoose.model( 'User', userSchema );

/* ********************************************
      PROJECT SCHEMA
   ******************************************** */
var projectSchema = new mongoose.Schema({
  projectName: String,
  createdOn: { type: Date, default: Date.now },
  modifiedOn: Date,
  createdBy: String,
  contributors: String,
  tasks: String
});

// Build the Project model
mongoose.model( 'Project', projectSchema );