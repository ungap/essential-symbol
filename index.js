/*! (c) Andrea Giammarchi - ISC */
var self = this || /* istanbul ignore next */ {};
try { self.Symbol = Symbol; }
catch(Symbol) {
  (function (String, dict, id) {'use strict';
    Symbol.for = function (name) {
      return dict[name] || (dict[name] = Symbol(id++));
    };
    self.Symbol = Symbol;
    function Symbol(name) {
      return new String('Symbol(_@ungap/' + name + ')');
    }
  }(String, Object.create(null), Math.random()));
}
