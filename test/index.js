/**
 * Imports
 */

var isGeneratorObject = require('..')
var test = require('tape')

/**
 * Tests
 */

test('generator is generator', function (t) {
  t.equal(isGeneratorObject(function * () {}()), true)
  t.end()
})

test('almost generator is not generator', function (t) {
  t.equal(isGeneratorObject({ next: function () {} }), false)
  t.end()
})

test('no arg is not generator', function (t) {
  t.equal(isGeneratorObject(), false)
  t.end()
})

test('obj is not generator', function (t) {
  t.equal(isGeneratorObject({}), false)
  t.end()
})

test('function is not generator', function (t) {
  t.equal(isGeneratorObject(function () {}), false)
  t.end()
})

test('null is not generator', function (t) {
  t.equal(isGeneratorObject(null), false)
  t.end()
})

test('bool is not generator', function (t) {
  t.equal(isGeneratorObject(true), false)
  t.end()
})
