
# is-generator-object

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if generator object.

## Installation

    $ npm install @micro-js/is-generator-object

## Usage

```js
var isGeneratorObject = require('@micro-js/is-generator-object')

isGeneratorObject(function * () {
  yield 1
}()) // => true

```

## API

### isGeneratorObject(obj)

- `obj` - object to test

**Returns:** boolean

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/is-generator-object.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/is-generator-object
[git-image]: https://img.shields.io/github/tag/micro-js/is-generator-object.svg
[git-url]: https://github.com/micro-js/is-generator-object
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/is-generator-object.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/is-generator-object
