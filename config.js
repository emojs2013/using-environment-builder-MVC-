/**
 * Configuration for express app.
 */
exports.app = {
  port: 8000,
  host: '127.0.0.1',

  // cookie and session.
  max_age: 3600000 * 24 * 30,
  session_secret: 'myApp',
  auth_cookie_name: 'myApp',

  // pubilc directory.
  public_dir: './public',
  
  // logs.
  error_log: false,
  access_log: false,
  error_logfile: './logs/error.log',
  access_logfile: './logs/access.log',

  // debug control.
  env: 'development'
};


/**
 * Configuration for database connection.
 */
exports.database = {
  
};


/**
 * Configuration for Competence.
 */
exports.competence = {

};


/**
 * Configuration for Website.
 */
exports.site = {
  name: 'myApp',
  version: '0.0.1',
  favicon: '/favicon.ico'
};


