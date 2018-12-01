# Symbol

[![Build Status](https://travis-ci.com/ungap/essential-symbol.svg?branch=master)](https://travis-ci.com/ungap/essential-symbol) [![Coverage Status](https://coveralls.io/repos/github/ungap/essential-symbol/badge.svg?branch=master)](https://coveralls.io/github/ungap/essential-symbol?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/ungap/essential-symbol.svg)](https://greenkeeper.io/) ![WebReflection status](https://offline.report/status/webreflection.svg)

An essential [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) poorlyfill, for legacy browsers, that provides only the uniqueness of the symbol itself and its value as property.

**Note** the `typeof` operator will return just `object`, not `symbol`.

  * CDN via https://unpkg.com/@ungap/essential-symbol
  * ESM via `import symbol from '@ungap/essential-symbol'`
  * CJS via `const symbol = require('@ungap/essential-symbol')`

[Live test](https://ungap.github.io/essential-symbol/test/)
