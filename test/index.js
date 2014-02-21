
/**
 * Module dependencies.
 */

var resolve = require('component-resolver')
var build = require('component-builder2')
var join = require('path').join;
var whitespace = require('../');
var assert = require('assert');
var co = require('co');
var fs = require('fs');

/**
 * Test plugin.
 */

describe('builder-css-whitespace', function () {
  it('should compile whitespaced css to normal css', co(function* () {
    var resolver = resolve(__dirname + '/fixture', {});
    var tree = yield* resolver.tree();
    var nodes = resolver.flatten(tree);
    var output = read('out.css');

    var style = build.styles(nodes)
      .use('styles', whitespace());

    var input = yield style.toStr()

    assert.equal(input.trim(), output.trim())
  }));
});

/**
 * Read css fixture.
 *
 * @param {String} path
 */

function read (file) {
  var path = join(__dirname, 'fixture', file)
  return fs.readFileSync(path, 'utf-8')
}