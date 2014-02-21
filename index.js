/**
 * Module dependencies.
 */

var whitespace = require('css-whitespace');

/**
 * Exports
 */

module.exports = function () {
  return function (file, done) {
    if (file.extension !== 'styl') return done();
    file.read(function (err, string) {
      if (err) done(err);
      file.string = whitespace(string);
      done();
    });
  }
}