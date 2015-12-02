/**
 * Modules
 */

/**
 * Expose isGenerator
 */

module.exports = isGenerator['default'] = isGenerator

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGenerator(obj) {
  return !!obj &&
   typeof obj.next === 'function' &&
   typeof obj.throw === 'function'
}
