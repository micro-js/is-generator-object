/**
 * Modules
 */

var isIterator = require('@f/is-iterator')
var isIterable = require('@f/is-iterable')

/**
 * Expose isGeneratorObject
 */

module.exports = isGeneratorObject['default'] = isGeneratorObject

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 */

function isGeneratorObject (obj) {
  var ctor = obj && obj.constructor && obj.constructor.constructor
  if (!ctor) {
    return false
  }
  return isIterator(obj) &&
    isIterable(obj) &&
    (ctor.name === 'GeneratorFunction' || ctor.displayName === 'GeneratorFunction')
}
