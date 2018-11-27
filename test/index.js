var Symbol = require('../cjs');
test();

if (typeof process !== 'undefined') {
  delete require.cache[require.resolve('../cjs')];
  delete global.Symbol;
  Symbol = require('../cjs');
  test();
}

function test() {
  var a = Symbol('a');
  var z = Symbol.for('z');
  console.assert(a !== Symbol('a'));
  console.assert(z === Symbol.for('z'));
  console.assert(z !== Symbol.for('a'));
}
