/**
 * Module dependencies.
 */
var site = require('./controllers/app/site.js');

module.exports = function (app) {
  app.get('/', site.index);
  app.get('/404', site.error);
};
