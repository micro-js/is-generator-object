/**
 * Modules
 */

/**
 * Expose isGeneratorObject
 */

module.exports = isGeneratorObject['default'] = isGeneratorObject

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGeneratorObject (obj) {
  return !!obj &&
   typeof obj.next === 'function' &&
   typeof obj.throw === 'function'
}
