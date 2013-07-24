/**
 * Module dependencies.
 */


/**
 * Configurations.
 */
var config = require('../../config.js');


exports.index = function (req, res) {
  res.render('index');
}

exports.error = function (req, res) {
  res.render('404');
}