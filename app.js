/**
 * Module dependencies.
 */
var express = require('express');   //core module
var ejs_locals = require('ejs-locals');
var fs = require('fs');


/**
 * Systems Modules need.
 */
var path = require('path');


/**
 * require files.
 */
var config = require('./config');
var app_config = config.app;
var routes = require('./routes');


var app = express();

//error && access LOG path
var access_logfile = fs.WriteStream(app_config.access_logfile, { flags: 'a' });
var error_logfile = fs.WriteStream(app_config.error_logfile, { flags: 'a' });

// use ejs-locals for all ejs templates:
app.engine('ejs', ejs_locals);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('env', app_config.env);

// configuration
app.configure(function () {

  // check access log
  if (app_config.access_log) {
    app.use(express.logger({ stream: access_logfile }));
  }
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.cookieSession({
    secret: app_config.session_secret
  }));
});

var public_dir = app_config.public_dir;
app.configure('development', function () {
  app.use(express.static(public_dir));
  if (app_config.error_log) {
    app.use(function (err, req, res, next) {
      meta += '[' + new Date() + '] ' + req.url + '\n';
      errorLogfile.write(meta + err.stack + '\n');
      next();
    })
  } else {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  }
  app.use(express.bodyParser());
});

app.configure('production', function () {
  app.use(express.static(public_dir, { maxAge: app_config.max_age }));
  app.use(express.errorHandler());
  app.set('view cache', true);
});

app.use(function (req, res, next) {
  res.locals.config = config;
  res.locals.data = {};
  res.locals.error = null;
  res.locals.success = null;
  next();
});

routes(app);
app.listen(app_config.port);
console.log('== Express application listening on port ' +
    app_config.port + '. ==');
