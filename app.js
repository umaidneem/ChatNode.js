var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var dbConfig = require('./db');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
// Connect to DB
var connection = mongoose.connect(dbConfig.url);
autoIncrement.initialize(connection);

//Data Base
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/LogIndatabase');



var routes = require('./routes/index');
var users = require('./routes/users');
var signup = require('./routes/SignUpScreen');
var login = require('./routes/LoginScreen');
var home = require('./routes/Home');
var chat = require('./routes/ChatPage');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Mongo Db
app.use(function (req, res, next) {
  req.db = db;
  next();
});

app.use('/', routes);
app.use('/users', users);
app.use('/SignUpScreen',signup);
app.use('/LoginScreen',login);
app.use('/Home',home);
app.use('/ChatPage', chat);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
