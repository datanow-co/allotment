"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e30) { throw _e30; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e31) { didErr = true; err = _e31; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var e = require("react"),
  t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
}
var n,
  s = {
    exports: {}
  };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
n = s, function () {
  var e = {}.hasOwnProperty;
  function t() {
    for (var i = [], n = 0; n < arguments.length; n++) {
      var s = arguments[n];
      if (s) {
        var r = _typeof(s);
        if ("string" === r || "number" === r) i.push(s);else if (Array.isArray(s)) {
          if (s.length) {
            var o = t.apply(null, s);
            o && i.push(o);
          }
        } else if ("object" === r) if (s.toString === Object.prototype.toString) for (var a in s) e.call(s, a) && s[a] && i.push(a);else i.push(s.toString());
      }
    }
    return i.join(" ");
  }
  n.exports ? (t["default"] = t, n.exports = t) : window.classNames = t;
}();
var r = i(s.exports),
  o = /^\s+|\s+$/g,
  a = /^[-+]0x[0-9a-f]+$/i,
  u = /^0b[01]+$/i,
  c = /^0o[0-7]+$/i,
  h = parseInt,
  l = Object.prototype.toString;
function f(e) {
  var t = _typeof(e);
  return !!e && ("object" == t || "function" == t);
}
function m(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == _typeof(e) || function (e) {
      return !!e && "object" == _typeof(e);
    }(e) && "[object Symbol]" == l.call(e);
  }(e)) return NaN;
  if (f(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = f(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(o, "");
  var i = u.test(e);
  return i || c.test(e) ? h(e.slice(2), i ? 2 : 8) : a.test(e) ? NaN : +e;
}
var d = i(function (e, t, i) {
    return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = m(i)) == i ? i : 0), void 0 !== t && (t = (t = m(t)) == t ? t : 0), function (e, t, i) {
      return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
    }(m(e), t, i);
  }),
  p = {
    exports: {}
  };
!function (e, i) {
  var n = "__lodash_hash_undefined__",
    s = 9007199254740991,
    r = "[object Arguments]",
    o = "[object Array]",
    a = "[object Boolean]",
    u = "[object Date]",
    c = "[object Error]",
    h = "[object Function]",
    l = "[object Map]",
    f = "[object Number]",
    m = "[object Object]",
    d = "[object Promise]",
    p = "[object RegExp]",
    v = "[object Set]",
    y = "[object String]",
    b = "[object Symbol]",
    g = "[object WeakMap]",
    z = "[object ArrayBuffer]",
    w = "[object DataView]",
    S = /^\[object .+?Constructor\]$/,
    _ = /^(?:0|[1-9]\d*)$/,
    I = {};
  I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[r] = I[o] = I[z] = I[a] = I[w] = I[u] = I[c] = I[h] = I[l] = I[f] = I[m] = I[p] = I[v] = I[y] = I[g] = !1;
  var x = "object" == _typeof(t) && t && t.Object === Object && t,
    E = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
    V = x || E || Function("return this")(),
    j = i && !i.nodeType && i,
    L = j && e && !e.nodeType && e,
    N = L && L.exports === j,
    O = N && x.process,
    D = function () {
      try {
        return O && O.binding && O.binding("util");
      } catch (e) {}
    }(),
    M = D && D.isTypedArray;
  function P(e, t) {
    for (var i = -1, n = null == e ? 0 : e.length; ++i < n;) if (t(e[i], i, e)) return !0;
    return !1;
  }
  function A(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e, n) {
      i[++t] = [n, e];
    }), i;
  }
  function C(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e) {
      i[++t] = e;
    }), i;
  }
  var T,
    F,
    R,
    k = Array.prototype,
    H = Function.prototype,
    $ = Object.prototype,
    Y = V["__core-js_shared__"],
    B = H.toString,
    W = $.hasOwnProperty,
    G = (T = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + T : "",
    U = $.toString,
    X = RegExp("^" + B.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    J = N ? V.Buffer : void 0,
    K = V.Symbol,
    Z = V.Uint8Array,
    q = $.propertyIsEnumerable,
    Q = k.splice,
    ee = K ? K.toStringTag : void 0,
    te = Object.getOwnPropertySymbols,
    ie = J ? J.isBuffer : void 0,
    ne = (F = Object.keys, R = Object, function (e) {
      return F(R(e));
    }),
    se = De(V, "DataView"),
    re = De(V, "Map"),
    oe = De(V, "Promise"),
    ae = De(V, "Set"),
    ue = De(V, "WeakMap"),
    ce = De(Object, "create"),
    he = Ce(se),
    le = Ce(re),
    fe = Ce(oe),
    me = Ce(ae),
    de = Ce(ue),
    pe = K ? K.prototype : void 0,
    ve = pe ? pe.valueOf : void 0;
  function ye(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function be(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function ge(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function ze(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.__data__ = new ge(); ++t < i;) this.add(e[t]);
  }
  function we(e) {
    var t = this.__data__ = new be(e);
    this.size = t.size;
  }
  function Se(e, t) {
    var i = Re(e),
      n = !i && Fe(e),
      s = !i && !n && ke(e),
      r = !i && !n && !s && We(e),
      o = i || n || s || r,
      a = o ? function (e, t) {
        for (var i = -1, n = Array(e); ++i < e;) n[i] = t(i);
        return n;
      }(e.length, String) : [],
      u = a.length;
    for (var c in e) !t && !W.call(e, c) || o && ("length" == c || s && ("offset" == c || "parent" == c) || r && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ae(c, u)) || a.push(c);
    return a;
  }
  function _e(e, t) {
    for (var i = e.length; i--;) if (Te(e[i][0], t)) return i;
    return -1;
  }
  function Ie(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ee && ee in Object(e) ? function (e) {
      var t = W.call(e, ee),
        i = e[ee];
      try {
        e[ee] = void 0;
        var n = !0;
      } catch (e) {}
      var s = U.call(e);
      n && (t ? e[ee] = i : delete e[ee]);
      return s;
    }(e) : function (e) {
      return U.call(e);
    }(e);
  }
  function xe(e) {
    return Be(e) && Ie(e) == r;
  }
  function Ee(e, t, i, n, s) {
    return e === t || (null == e || null == t || !Be(e) && !Be(t) ? e != e && t != t : function (e, t, i, n, s, h) {
      var d = Re(e),
        g = Re(t),
        S = d ? o : Pe(e),
        _ = g ? o : Pe(t),
        I = (S = S == r ? m : S) == m,
        x = (_ = _ == r ? m : _) == m,
        E = S == _;
      if (E && ke(e)) {
        if (!ke(t)) return !1;
        d = !0, I = !1;
      }
      if (E && !I) return h || (h = new we()), d || We(e) ? Le(e, t, i, n, s, h) : function (e, t, i, n, s, r, o) {
        switch (i) {
          case w:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case z:
            return !(e.byteLength != t.byteLength || !r(new Z(e), new Z(t)));
          case a:
          case u:
          case f:
            return Te(+e, +t);
          case c:
            return e.name == t.name && e.message == t.message;
          case p:
          case y:
            return e == t + "";
          case l:
            var h = A;
          case v:
            var m = 1 & n;
            if (h || (h = C), e.size != t.size && !m) return !1;
            var d = o.get(e);
            if (d) return d == t;
            n |= 2, o.set(e, t);
            var g = Le(h(e), h(t), n, s, r, o);
            return o["delete"](e), g;
          case b:
            if (ve) return ve.call(e) == ve.call(t);
        }
        return !1;
      }(e, t, S, i, n, s, h);
      if (!(1 & i)) {
        var V = I && W.call(e, "__wrapped__"),
          j = x && W.call(t, "__wrapped__");
        if (V || j) {
          var L = V ? e.value() : e,
            N = j ? t.value() : t;
          return h || (h = new we()), s(L, N, i, n, h);
        }
      }
      if (!E) return !1;
      return h || (h = new we()), function (e, t, i, n, s, r) {
        var o = 1 & i,
          a = Ne(e),
          u = a.length,
          c = Ne(t).length;
        if (u != c && !o) return !1;
        var h = u;
        for (; h--;) {
          var l = a[h];
          if (!(o ? l in t : W.call(t, l))) return !1;
        }
        var f = r.get(e);
        if (f && r.get(t)) return f == t;
        var m = !0;
        r.set(e, t), r.set(t, e);
        var d = o;
        for (; ++h < u;) {
          var p = e[l = a[h]],
            v = t[l];
          if (n) var y = o ? n(v, p, l, t, e, r) : n(p, v, l, e, t, r);
          if (!(void 0 === y ? p === v || s(p, v, i, n, r) : y)) {
            m = !1;
            break;
          }
          d || (d = "constructor" == l);
        }
        if (m && !d) {
          var b = e.constructor,
            g = t.constructor;
          b == g || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof g && g instanceof g || (m = !1);
        }
        return r["delete"](e), r["delete"](t), m;
      }(e, t, i, n, s, h);
    }(e, t, i, n, Ee, s));
  }
  function Ve(e) {
    return !(!Ye(e) || function (e) {
      return !!G && G in e;
    }(e)) && (He(e) ? X : S).test(Ce(e));
  }
  function je(e) {
    if (i = (t = e) && t.constructor, n = "function" == typeof i && i.prototype || $, t !== n) return ne(e);
    var t,
      i,
      n,
      s = [];
    for (var r in Object(e)) W.call(e, r) && "constructor" != r && s.push(r);
    return s;
  }
  function Le(e, t, i, n, s, r) {
    var o = 1 & i,
      a = e.length,
      u = t.length;
    if (a != u && !(o && u > a)) return !1;
    var c = r.get(e);
    if (c && r.get(t)) return c == t;
    var h = -1,
      l = !0,
      f = 2 & i ? new ze() : void 0;
    for (r.set(e, t), r.set(t, e); ++h < a;) {
      var m = e[h],
        d = t[h];
      if (n) var p = o ? n(d, m, h, t, e, r) : n(m, d, h, e, t, r);
      if (void 0 !== p) {
        if (p) continue;
        l = !1;
        break;
      }
      if (f) {
        if (!P(t, function (e, t) {
          if (o = t, !f.has(o) && (m === e || s(m, e, i, n, r))) return f.push(t);
          var o;
        })) {
          l = !1;
          break;
        }
      } else if (m !== d && !s(m, d, i, n, r)) {
        l = !1;
        break;
      }
    }
    return r["delete"](e), r["delete"](t), l;
  }
  function Ne(e) {
    return function (e, t, i) {
      var n = t(e);
      return Re(e) ? n : function (e, t) {
        for (var i = -1, n = t.length, s = e.length; ++i < n;) e[s + i] = t[i];
        return e;
      }(n, i(e));
    }(e, Ge, Me);
  }
  function Oe(e, t) {
    var i,
      n,
      s = e.__data__;
    return ("string" == (n = _typeof(i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? s["string" == typeof t ? "string" : "hash"] : s.map;
  }
  function De(e, t) {
    var i = function (e, t) {
      return null == e ? void 0 : e[t];
    }(e, t);
    return Ve(i) ? i : void 0;
  }
  ye.prototype.clear = function () {
    this.__data__ = ce ? ce(null) : {}, this.size = 0;
  }, ye.prototype["delete"] = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }, ye.prototype.get = function (e) {
    var t = this.__data__;
    if (ce) {
      var i = t[e];
      return i === n ? void 0 : i;
    }
    return W.call(t, e) ? t[e] : void 0;
  }, ye.prototype.has = function (e) {
    var t = this.__data__;
    return ce ? void 0 !== t[e] : W.call(t, e);
  }, ye.prototype.set = function (e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = ce && void 0 === t ? n : t, this;
  }, be.prototype.clear = function () {
    this.__data__ = [], this.size = 0;
  }, be.prototype["delete"] = function (e) {
    var t = this.__data__,
      i = _e(t, e);
    return !(i < 0) && (i == t.length - 1 ? t.pop() : Q.call(t, i, 1), --this.size, !0);
  }, be.prototype.get = function (e) {
    var t = this.__data__,
      i = _e(t, e);
    return i < 0 ? void 0 : t[i][1];
  }, be.prototype.has = function (e) {
    return _e(this.__data__, e) > -1;
  }, be.prototype.set = function (e, t) {
    var i = this.__data__,
      n = _e(i, e);
    return n < 0 ? (++this.size, i.push([e, t])) : i[n][1] = t, this;
  }, ge.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new ye(),
      map: new (re || be)(),
      string: new ye()
    };
  }, ge.prototype["delete"] = function (e) {
    var t = Oe(this, e)["delete"](e);
    return this.size -= t ? 1 : 0, t;
  }, ge.prototype.get = function (e) {
    return Oe(this, e).get(e);
  }, ge.prototype.has = function (e) {
    return Oe(this, e).has(e);
  }, ge.prototype.set = function (e, t) {
    var i = Oe(this, e),
      n = i.size;
    return i.set(e, t), this.size += i.size == n ? 0 : 1, this;
  }, ze.prototype.add = ze.prototype.push = function (e) {
    return this.__data__.set(e, n), this;
  }, ze.prototype.has = function (e) {
    return this.__data__.has(e);
  }, we.prototype.clear = function () {
    this.__data__ = new be(), this.size = 0;
  }, we.prototype["delete"] = function (e) {
    var t = this.__data__,
      i = t["delete"](e);
    return this.size = t.size, i;
  }, we.prototype.get = function (e) {
    return this.__data__.get(e);
  }, we.prototype.has = function (e) {
    return this.__data__.has(e);
  }, we.prototype.set = function (e, t) {
    var i = this.__data__;
    if (i instanceof be) {
      var n = i.__data__;
      if (!re || n.length < 199) return n.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new ge(n);
    }
    return i.set(e, t), this.size = i.size, this;
  };
  var Me = te ? function (e) {
      return null == e ? [] : (e = Object(e), function (e, t) {
        for (var i = -1, n = null == e ? 0 : e.length, s = 0, r = []; ++i < n;) {
          var o = e[i];
          t(o, i, e) && (r[s++] = o);
        }
        return r;
      }(te(e), function (t) {
        return q.call(e, t);
      }));
    } : function () {
      return [];
    },
    Pe = Ie;
  function Ae(e, t) {
    return !!(t = null == t ? s : t) && ("number" == typeof e || _.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function Ce(e) {
    if (null != e) {
      try {
        return B.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  }
  function Te(e, t) {
    return e === t || e != e && t != t;
  }
  (se && Pe(new se(new ArrayBuffer(1))) != w || re && Pe(new re()) != l || oe && Pe(oe.resolve()) != d || ae && Pe(new ae()) != v || ue && Pe(new ue()) != g) && (Pe = function Pe(e) {
    var t = Ie(e),
      i = t == m ? e.constructor : void 0,
      n = i ? Ce(i) : "";
    if (n) switch (n) {
      case he:
        return w;
      case le:
        return l;
      case fe:
        return d;
      case me:
        return v;
      case de:
        return g;
    }
    return t;
  });
  var Fe = xe(function () {
      return arguments;
    }()) ? xe : function (e) {
      return Be(e) && W.call(e, "callee") && !q.call(e, "callee");
    },
    Re = Array.isArray;
  var ke = ie || function () {
    return !1;
  };
  function He(e) {
    if (!Ye(e)) return !1;
    var t = Ie(e);
    return t == h || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
  }
  function $e(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s;
  }
  function Ye(e) {
    var t = _typeof(e);
    return null != e && ("object" == t || "function" == t);
  }
  function Be(e) {
    return null != e && "object" == _typeof(e);
  }
  var We = M ? function (e) {
    return function (t) {
      return e(t);
    };
  }(M) : function (e) {
    return Be(e) && $e(e.length) && !!I[Ie(e)];
  };
  function Ge(e) {
    return null != (t = e) && $e(t.length) && !He(t) ? Se(e) : je(e);
    var t;
  }
  e.exports = function (e, t) {
    return Ee(e, t);
  };
}(p, p.exports);
var v = i(p.exports);
function y(e, t, i) {
  return e[t] ? e[t][0] ? e[t][0][i] : e[t][i] : "contentBoxSize" === t ? e.contentRect["inlineSize" === i ? "width" : "height"] : void 0;
}
function b(t) {
  void 0 === t && (t = {});
  var i = t.onResize,
    n = e.useRef(void 0);
  n.current = i;
  var s = t.round || Math.round,
    r = e.useRef(),
    o = e.useState({
      width: void 0,
      height: void 0
    }),
    a = o[0],
    u = o[1],
    c = e.useRef(!1);
  e.useEffect(function () {
    return c.current = !1, function () {
      c.current = !0;
    };
  }, []);
  var h = e.useRef({
      width: void 0,
      height: void 0
    }),
    l = function (t, i) {
      var n = e.useRef(null),
        s = e.useRef(null);
      s.current = i;
      var r = e.useRef(null);
      e.useEffect(function () {
        o();
      });
      var o = e.useCallback(function () {
        var e = r.current,
          i = s.current,
          o = e || (i ? i instanceof Element ? i : i.current : null);
        n.current && n.current.element === o && n.current.subscriber === t || (n.current && n.current.cleanup && n.current.cleanup(), n.current = {
          element: o,
          subscriber: t,
          cleanup: o ? t(o) : void 0
        });
      }, [t]);
      return e.useEffect(function () {
        return function () {
          n.current && n.current.cleanup && (n.current.cleanup(), n.current = null);
        };
      }, []), e.useCallback(function (e) {
        r.current = e, o();
      }, [o]);
    }(e.useCallback(function (e) {
      return r.current && r.current.box === t.box && r.current.round === s || (r.current = {
        box: t.box,
        round: s,
        instance: new ResizeObserver(function (e) {
          var i = e[0],
            r = "border-box" === t.box ? "borderBoxSize" : "device-pixel-content-box" === t.box ? "devicePixelContentBoxSize" : "contentBoxSize",
            o = y(i, r, "inlineSize"),
            a = y(i, r, "blockSize"),
            l = o ? s(o) : void 0,
            f = a ? s(a) : void 0;
          if (h.current.width !== l || h.current.height !== f) {
            var m = {
              width: l,
              height: f
            };
            h.current.width = l, h.current.height = f, n.current ? n.current(m) : c.current || u(m);
          }
        })
      }), r.current.instance.observe(e, {
        box: t.box
      }), function () {
        r.current && r.current.instance.unobserve(e);
      };
    }, [t.box, s]), t.ref);
  return e.useMemo(function () {
    return {
      ref: l,
      width: a.width,
      height: a.height
    };
  }, [l, a.width, a.height]);
}
var g = "allotment-module_splitView__L-yRc",
  z = "allotment-module_sashContainer__fzwJF",
  w = "allotment-module_splitViewContainer__rQnVa",
  S = "allotment-module_splitViewView__MGZ6O",
  _ = "allotment-module_vertical__WSwwa",
  I = "allotment-module_horizontal__7doS8",
  x = "allotment-module_separatorBorder__x-rDS";
var E,
  V = !1,
  j = !1;
"object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && (E = navigator.userAgent, j = E.indexOf("Macintosh") >= 0, V = (E.indexOf("Macintosh") >= 0 || E.indexOf("iPad") >= 0 || E.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
var L = V,
  N = j,
  O = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? e.useLayoutEffect : e.useEffect;
var D = /*#__PURE__*/function () {
  function D() {
    _classCallCheck(this, D);
    this._size = void 0;
  }
  _createClass(D, [{
    key: "getSize",
    value: function getSize() {
      return this._size;
    }
  }, {
    key: "setSize",
    value: function setSize(e) {
      this._size = e;
    }
  }]);
  return D;
}();
function M(e, t) {
  var i = e.length,
    n = i - t.length;
  return n >= 0 && e.slice(n, i) === t;
}
var P = {
  exports: {}
};
!function (e) {
  var t = Object.prototype.hasOwnProperty,
    i = "~";
  function n() {}
  function s(e, t, i) {
    this.fn = e, this.context = t, this.once = i || !1;
  }
  function r(e, t, n, r, o) {
    if ("function" != typeof n) throw new TypeError("The listener must be a function");
    var a = new s(n, r || e, o),
      u = i ? i + t : t;
    return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e;
  }
  function o(e, t) {
    0 == --e._eventsCount ? e._events = new n() : delete e._events[t];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  Object.create && (n.prototype = Object.create(null), new n().__proto__ || (i = !1)), a.prototype.eventNames = function () {
    var e,
      n,
      s = [];
    if (0 === this._eventsCount) return s;
    for (n in e = this._events) t.call(e, n) && s.push(i ? n.slice(1) : n);
    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(e)) : s;
  }, a.prototype.listeners = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    if (!n) return [];
    if (n.fn) return [n.fn];
    for (var s = 0, r = n.length, o = new Array(r); s < r; s++) o[s] = n[s].fn;
    return o;
  }, a.prototype.listenerCount = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    return n ? n.fn ? 1 : n.length : 0;
  }, a.prototype.emit = function (e, t, n, s, r, o) {
    var a = i ? i + e : e;
    if (!this._events[a]) return !1;
    var u,
      c,
      h = this._events[a],
      l = arguments.length;
    if (h.fn) {
      switch (h.once && this.removeListener(e, h.fn, void 0, !0), l) {
        case 1:
          return h.fn.call(h.context), !0;
        case 2:
          return h.fn.call(h.context, t), !0;
        case 3:
          return h.fn.call(h.context, t, n), !0;
        case 4:
          return h.fn.call(h.context, t, n, s), !0;
        case 5:
          return h.fn.call(h.context, t, n, s, r), !0;
        case 6:
          return h.fn.call(h.context, t, n, s, r, o), !0;
      }
      for (c = 1, u = new Array(l - 1); c < l; c++) u[c - 1] = arguments[c];
      h.fn.apply(h.context, u);
    } else {
      var f,
        m = h.length;
      for (c = 0; c < m; c++) switch (h[c].once && this.removeListener(e, h[c].fn, void 0, !0), l) {
        case 1:
          h[c].fn.call(h[c].context);
          break;
        case 2:
          h[c].fn.call(h[c].context, t);
          break;
        case 3:
          h[c].fn.call(h[c].context, t, n);
          break;
        case 4:
          h[c].fn.call(h[c].context, t, n, s);
          break;
        default:
          if (!u) for (f = 1, u = new Array(l - 1); f < l; f++) u[f - 1] = arguments[f];
          h[c].fn.apply(h[c].context, u);
      }
    }
    return !0;
  }, a.prototype.on = function (e, t, i) {
    return r(this, e, t, i, !1);
  }, a.prototype.once = function (e, t, i) {
    return r(this, e, t, i, !0);
  }, a.prototype.removeListener = function (e, t, n, s) {
    var r = i ? i + e : e;
    if (!this._events[r]) return this;
    if (!t) return o(this, r), this;
    var a = this._events[r];
    if (a.fn) a.fn !== t || s && !a.once || n && a.context !== n || o(this, r);else {
      for (var u = 0, c = [], h = a.length; u < h; u++) (a[u].fn !== t || s && !a[u].once || n && a[u].context !== n) && c.push(a[u]);
      c.length ? this._events[r] = 1 === c.length ? c[0] : c : o(this, r);
    }
    return this;
  }, a.prototype.removeAllListeners = function (e) {
    var t;
    return e ? (t = i ? i + e : e, this._events[t] && o(this, t)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a;
}(P);
var A = i(P.exports);
function C(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function T(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function F(e, t) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var n = Math.max(0, Math.ceil((t - e) / i)),
    s = new Array(n);
  var r = -1;
  for (; ++r < n;) s[r] = e + r * i;
  return s;
}
var R = /^\s+|\s+$/g,
  k = /^[-+]0x[0-9a-f]+$/i,
  H = /^0b[01]+$/i,
  $ = /^0o[0-7]+$/i,
  Y = parseInt,
  B = "object" == _typeof(t) && t && t.Object === Object && t,
  W = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
  G = B || W || Function("return this")(),
  U = Object.prototype.toString,
  X = Math.max,
  J = Math.min,
  K = function K() {
    return G.Date.now();
  };
function Z(e) {
  var t = _typeof(e);
  return !!e && ("object" == t || "function" == t);
}
function q(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == _typeof(e) || function (e) {
      return !!e && "object" == _typeof(e);
    }(e) && "[object Symbol]" == U.call(e);
  }(e)) return NaN;
  if (Z(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = Z(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(R, "");
  var i = H.test(e);
  return i || $.test(e) ? Y(e.slice(2), i ? 2 : 8) : k.test(e) ? NaN : +e;
}
var Q = i(function (e, t, i) {
    var n,
      s,
      r,
      o,
      a,
      u,
      c = 0,
      h = !1,
      l = !1,
      f = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    function m(t) {
      var i = n,
        r = s;
      return n = s = void 0, c = t, o = e.apply(r, i);
    }
    function d(e) {
      return c = e, a = setTimeout(v, t), h ? m(e) : o;
    }
    function p(e) {
      var i = e - u;
      return void 0 === u || i >= t || i < 0 || l && e - c >= r;
    }
    function v() {
      var e = K();
      if (p(e)) return y(e);
      a = setTimeout(v, function (e) {
        var i = t - (e - u);
        return l ? J(i, r - (e - c)) : i;
      }(e));
    }
    function y(e) {
      return a = void 0, f && n ? m(e) : (n = s = void 0, o);
    }
    function b() {
      var e = K(),
        i = p(e);
      if (n = arguments, s = this, u = e, i) {
        if (void 0 === a) return d(u);
        if (l) return a = setTimeout(v, t), m(u);
      }
      return void 0 === a && (a = setTimeout(v, t)), o;
    }
    return t = q(t) || 0, Z(i) && (h = !!i.leading, r = (l = "maxWait" in i) ? X(q(i.maxWait) || 0, t) : r, f = "trailing" in i ? !!i.trailing : f), b.cancel = function () {
      void 0 !== a && clearTimeout(a), c = 0, n = u = s = a = void 0;
    }, b.flush = function () {
      return void 0 === a ? o : y(K());
    }, b;
  }),
  ee = "sash-module_sash__K-9lB",
  te = "sash-module_disabled__Hm-wx",
  ie = "sash-module_mac__Jf6OJ",
  ne = "sash-module_vertical__pB-rs",
  se = "sash-module_minimum__-UKxp",
  re = "sash-module_maximum__TCWxD",
  oe = "sash-module_horizontal__kFbiw",
  ae = "sash-module_hover__80W6I",
  ue = "sash-module_active__bJspD";
var ce = function (e) {
    return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
  }({}),
  he = function (e) {
    return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
  }({}),
  le = L ? 20 : 8;
var fe = new A();
var me = /*#__PURE__*/function (_A) {
  _inherits(me, _A);
  var _super = _createSuper(me);
  function me(e, t, i) {
    var _i$orientation;
    var _this;
    _classCallCheck(this, me);
    _this = _super.call(this), _this.el = void 0, _this.layoutProvider = void 0, _this.orientation = void 0, _this.size = void 0, _this.hoverDelay = 300, _this.hoverDelayer = Q(function (e) {
      return e.classList.add("sash-hover", ae);
    }, _this.hoverDelay), _this._state = he.Enabled, _this.onPointerStart = function (e) {
      var t = e.pageX,
        i = e.pageY,
        n = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      _this.el.classList.add("sash-active", ue), _this.emit("start", n), _this.el.setPointerCapture(e.pointerId);
      var s = function s(e) {
          e.preventDefault();
          var n = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          _this.emit("change", n);
        },
        r = function r(e) {
          e.preventDefault(), _this.el.classList.remove("sash-active", ue), _this.hoverDelayer.cancel(), _this.emit("end"), _this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", r);
        };
      window.addEventListener("pointermove", s), window.addEventListener("pointerup", r);
    }, _this.onPointerDoublePress = function () {
      _this.emit("reset");
    }, _this.onMouseEnter = function () {
      _this.el.classList.contains(ue) ? (_this.hoverDelayer.cancel(), _this.el.classList.add("sash-hover", ae)) : _this.hoverDelayer(_this.el);
    }, _this.onMouseLeave = function () {
      _this.hoverDelayer.cancel(), _this.el.classList.remove("sash-hover", ae);
    }, _this.el = document.createElement("div"), _this.el.classList.add("sash", ee), _this.el.dataset.testid = "sash", e.append(_this.el), N && _this.el.classList.add("sash-mac", ie), _this.el.addEventListener("pointerdown", _this.onPointerStart), _this.el.addEventListener("dblclick", _this.onPointerDoublePress), _this.el.addEventListener("mouseenter", _this.onMouseEnter), _this.el.addEventListener("mouseleave", _this.onMouseLeave), "number" == typeof i.size ? (_this.size = i.size, i.orientation === ce.Vertical ? _this.el.style.width = "".concat(_this.size, "px") : _this.el.style.height = "".concat(_this.size, "px")) : (_this.size = le, fe.on("onDidChangeGlobalSize", function (e) {
      _this.size = e, _this.layout();
    })), _this.layoutProvider = t, _this.orientation = (_i$orientation = i.orientation) !== null && _i$orientation !== void 0 ? _i$orientation : ce.Vertical, _this.orientation === ce.Horizontal ? (_this.el.classList.add("sash-horizontal", oe), _this.el.classList.remove("sash-vertical", ne)) : (_this.el.classList.remove("sash-horizontal", oe), _this.el.classList.add("sash-vertical", ne)), _this.layout();
    return _this;
  }
  _createClass(me, [{
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(e) {
      this._state !== e && (this.el.classList.toggle(te, e === he.Disabled), this.el.classList.toggle("dash-disabled", e === he.Disabled), this.el.classList.toggle(se, e === he.Minimum), this.el.classList.toggle("sash-minimum", e === he.Minimum), this.el.classList.toggle(re, e === he.Maximum), this.el.classList.toggle("sash-maximum", e === he.Maximum), this._state = e, this.emit("enablementChange", e));
    }
  }, {
    key: "layout",
    value: function layout() {
      if (this.orientation === ce.Vertical) {
        var _e2 = this.layoutProvider;
        this.el.style.left = _e2.getVerticalSashLeft(this) - this.size / 2 + "px", _e2.getVerticalSashTop && (this.el.style.top = _e2.getVerticalSashTop(this) + "px"), _e2.getVerticalSashHeight && (this.el.style.height = _e2.getVerticalSashHeight(this) + "px");
      } else {
        var _e3 = this.layoutProvider;
        this.el.style.top = _e3.getHorizontalSashTop(this) - this.size / 2 + "px", _e3.getHorizontalSashLeft && (this.el.style.left = _e3.getHorizontalSashLeft(this) + "px"), _e3.getHorizontalSashWidth && (this.el.style.width = _e3.getHorizontalSashWidth(this) + "px");
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this2 = this;
      this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", function () {
        return _this2.onMouseLeave;
      }), this.el.remove();
    }
  }]);
  return me;
}(A);
var de;
var pe;
(pe = de || (de = {})).Distribute = {
  type: "distribute"
}, pe.Split = function (e) {
  return {
    type: "split",
    index: e
  };
}, pe.Invisible = function (e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
};
var ve = function (e) {
  return e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH", e;
}({});
var ye = /*#__PURE__*/function () {
  function ye(e, t, i) {
    _classCallCheck(this, ye);
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = t, this.container.classList.add("split-view-view", S), this.container.dataset.testid = "split-view-view", "number" == typeof i ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
  }
  _createClass(ye, [{
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(e) {
      this._size = e;
    }
  }, {
    key: "priority",
    get: function get() {
      return this.view.priority;
    }
  }, {
    key: "snap",
    get: function get() {
      return !!this.view.snap;
    }
  }, {
    key: "cachedVisibleSize",
    get: function get() {
      return this._cachedVisibleSize;
    }
  }, {
    key: "visible",
    get: function get() {
      return void 0 === this._cachedVisibleSize;
    }
  }, {
    key: "setVisible",
    value: function setVisible(e, t) {
      e !== this.visible && (e ? (this.size = d(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = "number" == typeof t ? t : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
    }
  }, {
    key: "minimumSize",
    get: function get() {
      return this.visible ? this.view.minimumSize : 0;
    }
  }, {
    key: "viewMinimumSize",
    get: function get() {
      return this.view.minimumSize;
    }
  }, {
    key: "maximumSize",
    get: function get() {
      return this.visible ? this.view.maximumSize : 0;
    }
  }, {
    key: "viewMaximumSize",
    get: function get() {
      return this.view.maximumSize;
    }
  }, {
    key: "enabled",
    set: function set(e) {
      this.container.style.pointerEvents = e ? "" : "none";
    }
  }, {
    key: "layout",
    value: function layout(e) {
      this.layoutContainer(e), this.view.layout(this.size, e);
    }
  }]);
  return ye;
}();
var be = /*#__PURE__*/function (_ye) {
  _inherits(be, _ye);
  var _super2 = _createSuper(be);
  function be() {
    _classCallCheck(this, be);
    return _super2.apply(this, arguments);
  }
  _createClass(be, [{
    key: "layoutContainer",
    value: function layoutContainer(e) {
      this.container.style.left = "".concat(e, "px"), this.container.style.width = "".concat(this.size, "px");
    }
  }]);
  return be;
}(ye);
var ge = /*#__PURE__*/function (_ye2) {
  _inherits(ge, _ye2);
  var _super3 = _createSuper(ge);
  function ge() {
    _classCallCheck(this, ge);
    return _super3.apply(this, arguments);
  }
  _createClass(ge, [{
    key: "layoutContainer",
    value: function layoutContainer(e) {
      this.container.style.top = "".concat(e, "px"), this.container.style.height = "".concat(this.size, "px");
    }
  }]);
  return ge;
}(ye);
var ze = /*#__PURE__*/function (_A2) {
  _inherits(ze, _A2);
  var _super4 = _createSuper(ze);
  function ze(e) {
    var _t$orientation, _t$proportionalLayout;
    var _this3;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i = arguments.length > 2 ? arguments[2] : undefined;
    var n = arguments.length > 3 ? arguments[3] : undefined;
    var s = arguments.length > 4 ? arguments[4] : undefined;
    _classCallCheck(this, ze);
    if (_this3 = _super4.call(this), _this3.onDidChange = void 0, _this3.onDidDragStart = void 0, _this3.onDidDragEnd = void 0, _this3.orientation = void 0, _this3.sashContainer = void 0, _this3.size = 0, _this3.contentSize = 0, _this3.proportions = void 0, _this3.viewItems = [], _this3.sashItems = [], _this3.sashDragState = void 0, _this3.proportionalLayout = void 0, _this3.getSashOrthogonalSize = void 0, _this3._startSnappingEnabled = !0, _this3._endSnappingEnabled = !0, _this3.onSashEnd = function (e) {
      _this3.emit("sashchange", e), _this3.saveProportions();
      var _iterator = _createForOfIteratorHelper(_this3.viewItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e4 = _step.value;
          _e4.enabled = !0;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }, _this3.orientation = (_t$orientation = t.orientation) !== null && _t$orientation !== void 0 ? _t$orientation : ce.Vertical, _this3.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) !== null && _t$proportionalLayout !== void 0 ? _t$proportionalLayout : !0, _this3.getSashOrthogonalSize = t.getSashOrthogonalSize, i && (_this3.onDidChange = i), n && (_this3.onDidDragStart = n), s && (_this3.onDidDragEnd = s), _this3.sashContainer = document.createElement("div"), _this3.sashContainer.classList.add("sash-container", z), e.prepend(_this3.sashContainer), t.descriptor) {
      _this3.size = t.descriptor.size;
      var _iterator2 = _createForOfIteratorHelper(t.descriptor.views.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            _e5 = _step2$value[0],
            _i2 = _step2$value[1];
          var _t = _i2.size,
            _n2 = _i2.container,
            _s2 = _i2.view;
          _this3.addView(_n2, _s2, _t, _e5, !0);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      _this3.contentSize = _this3.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0), _this3.saveProportions();
    }
    return _possibleConstructorReturn(_this3);
  }
  _createClass(ze, [{
    key: "startSnappingEnabled",
    get: function get() {
      return this._startSnappingEnabled;
    },
    set: function set(e) {
      this._startSnappingEnabled !== e && (this._startSnappingEnabled = e, this.updateSashEnablement());
    }
  }, {
    key: "endSnappingEnabled",
    get: function get() {
      return this._endSnappingEnabled;
    },
    set: function set(e) {
      this._endSnappingEnabled !== e && (this._endSnappingEnabled = e, this.updateSashEnablement());
    }
  }, {
    key: "addView",
    value: function addView(e, t, i) {
      var _this4 = this;
      var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.viewItems.length;
      var s = arguments.length > 4 ? arguments[4] : undefined;
      var r;
      r = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
        cachedVisibleSize: i.cachedVisibleSize
      } : t.minimumSize;
      var o = this.orientation === ce.Vertical ? new ge(e, t, r) : new be(e, t, r);
      if (this.viewItems.splice(n, 0, o), this.viewItems.length > 1) {
        var _e6 = this.orientation === ce.Vertical ? new me(this.sashContainer, {
            getHorizontalSashTop: function getHorizontalSashTop(e) {
              return _this4.getSashPosition(e);
            },
            getHorizontalSashWidth: this.getSashOrthogonalSize
          }, {
            orientation: ce.Horizontal
          }) : new me(this.sashContainer, {
            getVerticalSashLeft: function getVerticalSashLeft(e) {
              return _this4.getSashPosition(e);
            },
            getVerticalSashHeight: this.getSashOrthogonalSize
          }, {
            orientation: ce.Vertical
          }),
          _t2 = this.orientation === ce.Vertical ? function (t) {
            return {
              sash: _e6,
              start: t.startY,
              current: t.currentY
            };
          } : function (t) {
            return {
              sash: _e6,
              start: t.startX,
              current: t.currentX
            };
          };
        _e6.on("start", function (e) {
          var _this4$onDidDragStart;
          _this4.emit("sashDragStart"), _this4.onSashStart(_t2(e));
          var i = _this4.viewItems.map(function (e) {
            return e.size;
          });
          (_this4$onDidDragStart = _this4.onDidDragStart) === null || _this4$onDidDragStart === void 0 ? void 0 : _this4$onDidDragStart.call(_this4, i);
        }), _e6.on("change", function (e) {
          return _this4.onSashChange(_t2(e));
        }), _e6.on("end", function () {
          var _this4$onDidDragEnd;
          _this4.emit("sashDragEnd"), _this4.onSashEnd(_this4.sashItems.findIndex(function (t) {
            return t.sash === _e6;
          }));
          var t = _this4.viewItems.map(function (e) {
            return e.size;
          });
          (_this4$onDidDragEnd = _this4.onDidDragEnd) === null || _this4$onDidDragEnd === void 0 ? void 0 : _this4$onDidDragEnd.call(_this4, t);
        }), _e6.on("reset", function () {
          var t = _this4.sashItems.findIndex(function (t) {
              return t.sash === _e6;
            }),
            i = F(t, -1, -1),
            n = F(t + 1, _this4.viewItems.length),
            s = _this4.findFirstSnapIndex(i),
            r = _this4.findFirstSnapIndex(n);
          ("number" != typeof s || _this4.viewItems[s].visible) && ("number" != typeof r || _this4.viewItems[r].visible) && _this4.emit("sashreset", t);
        });
        var _i3 = {
          sash: _e6
        };
        this.sashItems.splice(n - 1, 0, _i3);
      }
      s || this.relayout(), s || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
    }
  }, {
    key: "removeView",
    value: function removeView(e, t) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      var i = this.viewItems.splice(e, 1)[0].view;
      if (this.viewItems.length >= 1) {
        var _t3 = Math.max(e - 1, 0);
        this.sashItems.splice(_t3, 1)[0].sash.dispose();
      }
      return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
    }
  }, {
    key: "moveView",
    value: function moveView(e, t, i) {
      var n = this.getViewCachedVisibleSize(t),
        s = void 0 === n ? this.getViewSize(t) : de.Invisible(n),
        r = this.removeView(t);
      this.addView(e, r, s, i);
    }
  }, {
    key: "getViewCachedVisibleSize",
    value: function getViewCachedVisibleSize(e) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      return this.viewItems[e].cachedVisibleSize;
    }
  }, {
    key: "layout",
    value: function layout() {
      var _this5 = this;
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.size;
      var t = Math.max(this.size, this.contentSize);
      if (this.size = e, this.proportions) for (var _t4 = 0; _t4 < this.viewItems.length; _t4++) {
        var _i4 = this.viewItems[_t4];
        _i4.size = d(Math.round(this.proportions[_t4] * e), _i4.minimumSize, _i4.maximumSize);
      } else {
        var _i5 = F(0, this.viewItems.length),
          _n3 = _i5.filter(function (e) {
            return _this5.viewItems[e].priority === ve.Low;
          }),
          _s3 = _i5.filter(function (e) {
            return _this5.viewItems[e].priority === ve.High;
          });
        this.resize(this.viewItems.length - 1, e - t, void 0, _n3, _s3);
      }
      this.distributeEmptySpace(), this.layoutViews();
    }
  }, {
    key: "resizeView",
    value: function resizeView(e, t) {
      var _this6 = this;
      if (e < 0 || e >= this.viewItems.length) return;
      var i = F(0, this.viewItems.length).filter(function (t) {
          return t !== e;
        }),
        n = [].concat(_toConsumableArray(i.filter(function (e) {
          return _this6.viewItems[e].priority === ve.Low;
        })), [e]),
        s = i.filter(function (e) {
          return _this6.viewItems[e].priority === ve.High;
        }),
        r = this.viewItems[e];
      t = Math.round(t), t = d(t, r.minimumSize, Math.min(r.maximumSize, this.size)), r.size = t, this.relayout(n, s);
    }
  }, {
    key: "resizeViews",
    value: function resizeViews(e) {
      for (var _t5 = 0; _t5 < e.length; _t5++) {
        var _i6 = this.viewItems[_t5];
        var _n4 = e[_t5];
        _n4 = Math.round(_n4), _n4 = d(_n4, _i6.minimumSize, Math.min(_i6.maximumSize, this.size)), _i6.size = _n4;
      }
      this.contentSize = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0), this.saveProportions(), this.layout(this.size);
    }
  }, {
    key: "getViewSize",
    value: function getViewSize(e) {
      return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
    }
  }, {
    key: "isViewVisible",
    value: function isViewVisible(e) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      return this.viewItems[e].visible;
    }
  }, {
    key: "setViewVisible",
    value: function setViewVisible(e, t) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      this.viewItems[e].setVisible(t), this.distributeEmptySpace(e), this.layoutViews(), this.saveProportions();
    }
  }, {
    key: "distributeViewSizes",
    value: function distributeViewSizes() {
      var _this7 = this;
      var e = [];
      var t = 0;
      var _iterator3 = _createForOfIteratorHelper(this.viewItems),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _i8 = _step3.value;
          _i8.maximumSize - _i8.minimumSize > 0 && (e.push(_i8), t += _i8.size);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var i = Math.floor(t / e.length);
      for (var _i7 = 0, _e7 = e; _i7 < _e7.length; _i7++) {
        var _t6 = _e7[_i7];
        _t6.size = d(i, _t6.minimumSize, _t6.maximumSize);
      }
      var n = F(0, this.viewItems.length),
        s = n.filter(function (e) {
          return _this7.viewItems[e].priority === ve.Low;
        }),
        r = n.filter(function (e) {
          return _this7.viewItems[e].priority === ve.High;
        });
      this.relayout(s, r);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.sashItems.forEach(function (e) {
        return e.sash.dispose();
      }), this.sashItems = [], this.sashContainer.remove();
    }
  }, {
    key: "relayout",
    value: function relayout(e, t) {
      var i = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0);
      this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
    }
  }, {
    key: "onSashStart",
    value: function onSashStart(_ref) {
      var _this8 = this;
      var e = _ref.sash,
        t = _ref.start;
      var i = this.sashItems.findIndex(function (t) {
        return t.sash === e;
      });
      (function (e) {
        var t = _this8.viewItems.map(function (e) {
          return e.size;
        });
        var n,
          s,
          r = Number.NEGATIVE_INFINITY,
          o = Number.POSITIVE_INFINITY;
        var a = F(i, -1, -1),
          u = F(i + 1, _this8.viewItems.length),
          c = a.reduce(function (e, i) {
            return e + (_this8.viewItems[i].minimumSize - t[i]);
          }, 0),
          h = a.reduce(function (e, i) {
            return e + (_this8.viewItems[i].viewMaximumSize - t[i]);
          }, 0),
          l = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce(function (e, i) {
            return e + (t[i] - _this8.viewItems[i].minimumSize);
          }, 0),
          f = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce(function (e, i) {
            return e + (t[i] - _this8.viewItems[i].viewMaximumSize);
          }, 0);
        r = Math.max(c, f), o = Math.min(l, h);
        var m = _this8.findFirstSnapIndex(a),
          d = _this8.findFirstSnapIndex(u);
        if ("number" == typeof m) {
          var _e8 = _this8.viewItems[m],
            _t7 = Math.floor(_e8.viewMinimumSize / 2);
          n = {
            index: m,
            limitDelta: _e8.visible ? r - _t7 : r + _t7,
            size: _e8.size
          };
        }
        if ("number" == typeof d) {
          var _e9 = _this8.viewItems[d],
            _t8 = Math.floor(_e9.viewMinimumSize / 2);
          s = {
            index: d,
            limitDelta: _e9.visible ? o + _t8 : o - _t8,
            size: _e9.size
          };
        }
        _this8.sashDragState = {
          start: e,
          current: e,
          index: i,
          sizes: t,
          minDelta: r,
          maxDelta: o,
          snapBefore: n,
          snapAfter: s
        };
      })(t);
    }
  }, {
    key: "onSashChange",
    value: function onSashChange(_ref2) {
      var e = _ref2.current;
      var _this$sashDragState = this.sashDragState,
        t = _this$sashDragState.index,
        i = _this$sashDragState.start,
        n = _this$sashDragState.sizes,
        s = _this$sashDragState.minDelta,
        r = _this$sashDragState.maxDelta,
        o = _this$sashDragState.snapBefore,
        a = _this$sashDragState.snapAfter;
      this.sashDragState.current = e;
      var u = e - i;
      this.resize(t, u, n, void 0, void 0, s, r, o, a), this.distributeEmptySpace(), this.layoutViews();
    }
  }, {
    key: "getSashPosition",
    value: function getSashPosition(e) {
      var t = 0;
      for (var _i9 = 0; _i9 < this.sashItems.length; _i9++) if (t += this.viewItems[_i9].size, this.sashItems[_i9].sash === e) return t;
      return 0;
    }
  }, {
    key: "resize",
    value: function resize(e, t) {
      var _this9 = this;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.viewItems.map(function (e) {
        return e.size;
      });
      var n = arguments.length > 3 ? arguments[3] : undefined;
      var s = arguments.length > 4 ? arguments[4] : undefined;
      var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Number.NEGATIVE_INFINITY;
      var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Number.POSITIVE_INFINITY;
      var a = arguments.length > 7 ? arguments[7] : undefined;
      var u = arguments.length > 8 ? arguments[8] : undefined;
      if (e < 0 || e >= this.viewItems.length) return 0;
      var c = F(e, -1, -1),
        h = F(e + 1, this.viewItems.length);
      if (s) {
        var _iterator4 = _createForOfIteratorHelper(s),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _e10 = _step4.value;
            C(c, _e10), C(h, _e10);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      if (n) {
        var _iterator5 = _createForOfIteratorHelper(n),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _e11 = _step5.value;
            T(c, _e11), T(h, _e11);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      var l = c.map(function (e) {
          return _this9.viewItems[e];
        }),
        f = c.map(function (e) {
          return i[e];
        }),
        m = h.map(function (e) {
          return _this9.viewItems[e];
        }),
        p = h.map(function (e) {
          return i[e];
        }),
        v = c.reduce(function (e, t) {
          return e + (_this9.viewItems[t].minimumSize - i[t]);
        }, 0),
        y = c.reduce(function (e, t) {
          return e + (_this9.viewItems[t].maximumSize - i[t]);
        }, 0),
        b = 0 === h.length ? Number.POSITIVE_INFINITY : h.reduce(function (e, t) {
          return e + (i[t] - _this9.viewItems[t].minimumSize);
        }, 0),
        g = 0 === h.length ? Number.NEGATIVE_INFINITY : h.reduce(function (e, t) {
          return e + (i[t] - _this9.viewItems[t].maximumSize);
        }, 0),
        z = Math.max(v, g, r),
        w = Math.min(b, y, o);
      var S = !1;
      if (a) {
        var _e12 = this.viewItems[a.index],
          _i10 = t >= a.limitDelta;
        S = _i10 !== _e12.visible, _e12.setVisible(_i10, a.size);
      }
      if (!S && u) {
        var _e13 = this.viewItems[u.index],
          _i11 = t < u.limitDelta;
        S = _i11 !== _e13.visible, _e13.setVisible(_i11, u.size);
      }
      if (S) return this.resize(e, t, i, n, s, r, o);
      for (var _e14 = 0, _i12 = t = d(t, z, w); _e14 < l.length; _e14++) {
        var _t9 = l[_e14],
          _n5 = d(f[_e14] + _i12, _t9.minimumSize, _t9.maximumSize);
        _i12 -= _n5 - f[_e14], _t9.size = _n5;
      }
      for (var _e15 = 0, _i13 = t; _e15 < m.length; _e15++) {
        var _t10 = m[_e15],
          _n6 = d(p[_e15] - _i13, _t10.minimumSize, _t10.maximumSize);
        _i13 += _n6 - p[_e15], _t10.size = _n6;
      }
      return t;
    }
  }, {
    key: "distributeEmptySpace",
    value: function distributeEmptySpace(e) {
      var t = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0);
      var i = this.size - t;
      var n = F(this.viewItems.length - 1, -1, -1);
      "number" == typeof e && T(n, e);
      for (var _e16 = 0; 0 !== i && _e16 < n.length; _e16++) {
        var _t11 = this.viewItems[n[_e16]],
          _s4 = d(_t11.size + i, _t11.minimumSize, _t11.maximumSize);
        i -= _s4 - _t11.size, _t11.size = _s4;
      }
    }
  }, {
    key: "layoutViews",
    value: function layoutViews() {
      var _this$onDidChange;
      this.contentSize = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0);
      var e = 0;
      var _iterator6 = _createForOfIteratorHelper(this.viewItems),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t12 = _step6.value;
          _t12.layout(e), e += _t12.size;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      (_this$onDidChange = this.onDidChange) !== null && _this$onDidChange !== void 0 && _this$onDidChange.call(this, this.viewItems.map(function (e) {
        return e.size;
      })), this.sashItems.forEach(function (e) {
        return e.sash.layout();
      }), this.updateSashEnablement();
    }
  }, {
    key: "saveProportions",
    value: function saveProportions() {
      var _this10 = this;
      this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(function (e) {
        return e.size / _this10.contentSize;
      }));
    }
  }, {
    key: "updateSashEnablement",
    value: function updateSashEnablement() {
      var e = !1;
      var t = this.viewItems.map(function (t) {
        return e = t.size - t.minimumSize > 0 || e;
      });
      e = !1;
      var i = this.viewItems.map(function (t) {
          return e = t.maximumSize - t.size > 0 || e;
        }),
        n = _toConsumableArray(this.viewItems).reverse();
      e = !1;
      var s = n.map(function (t) {
        return e = t.size - t.minimumSize > 0 || e;
      }).reverse();
      e = !1;
      var r = n.map(function (t) {
        return e = t.maximumSize - t.size > 0 || e;
      }).reverse();
      var o = 0;
      for (var _e17 = 0; _e17 < this.sashItems.length; _e17++) {
        var _n7 = this.sashItems[_e17].sash;
        o += this.viewItems[_e17].size;
        var _a = !(t[_e17] && r[_e17 + 1]),
          _u = !(i[_e17] && s[_e17 + 1]);
        if (_a && _u) {
          var _i14 = F(_e17, -1, -1),
            _r2 = F(_e17 + 1, this.viewItems.length),
            _a2 = this.findFirstSnapIndex(_i14),
            _u2 = this.findFirstSnapIndex(_r2),
            _c = "number" == typeof _a2 && !this.viewItems[_a2].visible,
            _h = "number" == typeof _u2 && !this.viewItems[_u2].visible;
          _c && s[_e17] && (o > 0 || this.startSnappingEnabled) ? _n7.state = he.Minimum : _h && t[_e17] && (o < this.contentSize || this.endSnappingEnabled) ? _n7.state = he.Maximum : _n7.state = he.Disabled;
        } else _n7.state = _a && !_u ? he.Minimum : !_a && _u ? he.Maximum : he.Enabled;
      }
    }
  }, {
    key: "findFirstSnapIndex",
    value: function findFirstSnapIndex(e) {
      var _iterator7 = _createForOfIteratorHelper(e),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _t13 = _step7.value;
          var _e18 = this.viewItems[_t13];
          if (_e18.visible && _e18.snap) return _t13;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper(e),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _t14 = _step8.value;
          var _e19 = this.viewItems[_t14];
          if (_e19.visible && _e19.maximumSize - _e19.minimumSize > 0) return;
          if (!_e19.visible && _e19.snap) return _t14;
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }]);
  return ze;
}(A);
var we = /*#__PURE__*/function () {
  function we(e) {
    _classCallCheck(this, we);
    this.size = void 0, this.size = e;
  }
  _createClass(we, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {
      return this.size;
    }
  }]);
  return we;
}();
var Se = /*#__PURE__*/function () {
  function Se(e, t) {
    _classCallCheck(this, Se);
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = t;
  }
  _createClass(Se, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {
      return this.proportion * this.layoutService.getSize();
    }
  }]);
  return Se;
}();
var _e = /*#__PURE__*/function () {
  function _e() {
    _classCallCheck(this, _e);
  }
  _createClass(_e, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {}
  }]);
  return _e;
}();
var Ie = /*#__PURE__*/function () {
  function Ie(e, t) {
    var _t$priority;
    _classCallCheck(this, Ie);
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new we(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      var _e20 = t.preferredSize.trim();
      if (M(_e20, "%")) {
        var _t15 = Number(_e20.slice(0, -1)) / 100;
        this.layoutStrategy = new Se(_t15, this.layoutService);
      } else if (M(_e20, "px")) {
        var _t16 = Number(_e20.slice(0, -2));
        this.layoutStrategy = new we(_t16);
      } else if ("number" == typeof Number.parseFloat(_e20)) {
        var _t17 = Number.parseFloat(_e20);
        this.layoutStrategy = new we(_t17);
      } else this.layoutStrategy = new _e();
    } else this.layoutStrategy = new _e();
    this.priority = (_t$priority = t.priority) !== null && _t$priority !== void 0 ? _t$priority : ve.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  _createClass(Ie, [{
    key: "preferredSize",
    get: function get() {
      return this.layoutStrategy.getPreferredSize();
    },
    set: function set(e) {
      if ("number" == typeof e) this.layoutStrategy = new we(e);else if ("string" == typeof e) {
        var _t18 = e.trim();
        if (M(_t18, "%")) {
          var _e21 = Number(_t18.slice(0, -1)) / 100;
          this.layoutStrategy = new Se(_e21, this.layoutService);
        } else if (M(_t18, "px")) {
          var _e22 = Number(_t18.slice(0, -2)) / 100;
          this.layoutStrategy = new we(_e22);
        } else if ("number" == typeof Number.parseFloat(_t18)) {
          var _e23 = Number.parseFloat(_t18);
          this.layoutStrategy = new we(_e23);
        } else this.layoutStrategy = new _e();
      } else this.layoutStrategy = new _e();
    }
  }, {
    key: "layout",
    value: function layout(e) {}
  }]);
  return Ie;
}();
function xe(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
var Ee = e.forwardRef(function (_ref3, n) {
  var t = _ref3.className,
    i = _ref3.children;
  return e.createElement("div", {
    ref: n,
    className: r("split-view-view", S, t)
  }, i);
});
Ee.displayName = "Allotment.Pane";
var Ve = e.forwardRef(function (_ref4, z) {
  var t = _ref4.children,
    i = _ref4.className,
    _ref4$maxSize = _ref4.maxSize,
    n = _ref4$maxSize === void 0 ? 1 / 0 : _ref4$maxSize,
    _ref4$minSize = _ref4.minSize,
    s = _ref4$minSize === void 0 ? 30 : _ref4$minSize,
    _ref4$proportionalLay = _ref4.proportionalLayout,
    o = _ref4$proportionalLay === void 0 ? !0 : _ref4$proportionalLay,
    _ref4$separator = _ref4.separator,
    a = _ref4$separator === void 0 ? !0 : _ref4$separator,
    u = _ref4.sizes,
    _ref4$defaultSizes = _ref4.defaultSizes,
    c = _ref4$defaultSizes === void 0 ? u : _ref4$defaultSizes,
    _ref4$snap = _ref4.snap,
    h = _ref4$snap === void 0 ? !1 : _ref4$snap,
    _ref4$vertical = _ref4.vertical,
    l = _ref4$vertical === void 0 ? !1 : _ref4$vertical,
    f = _ref4.onChange,
    m = _ref4.onReset,
    d = _ref4.onVisibleChange,
    p = _ref4.onDragStart,
    y = _ref4.onDragEnd;
  var S = e.useRef(null),
    E = e.useRef([]),
    V = e.useRef(new Map()),
    j = e.useRef(null),
    N = e.useRef(new Map()),
    M = e.useRef(new D()),
    P = e.useRef([]),
    _e$useState = e.useState(!1),
    _e$useState2 = _slicedToArray(_e$useState, 2),
    A = _e$useState2[0],
    C = _e$useState2[1];
  "production" !== process.env.NODE_ENV && u && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  var T = e.useMemo(function () {
      return e.Children.toArray(t).filter(e.isValidElement);
    }, [t]),
    F = e.useCallback(function (e) {
      var _P$current, _j$current;
      var t = (_P$current = P.current) === null || _P$current === void 0 ? void 0 : _P$current[e];
      return "number" == typeof (t === null || t === void 0 ? void 0 : t.preferredSize) && ((_j$current = j.current) !== null && _j$current !== void 0 && _j$current.resizeView(e, Math.round(t.preferredSize)), !0);
    }, []);
  return e.useImperativeHandle(z, function () {
    return {
      reset: function reset() {
        if (m) m();else {
          var _j$current2;
          (_j$current2 = j.current) === null || _j$current2 === void 0 ? void 0 : _j$current2.distributeViewSizes();
          for (var _e24 = 0; _e24 < P.current.length; _e24++) F(_e24);
        }
      },
      resize: function resize(e) {
        var _j$current3;
        (_j$current3 = j.current) === null || _j$current3 === void 0 ? void 0 : _j$current3.resizeViews(e);
      }
    };
  }), O(function () {
    var e = !0;
    c && N.current.size !== c.length && (e = !1, console.warn("Expected ".concat(c.length, " children based on defaultSizes but found ").concat(N.current.size))), e && c && (E.current = T.map(function (e) {
      return e.key;
    }));
    var t = _objectSpread({
      orientation: l ? ce.Vertical : ce.Horizontal,
      proportionalLayout: o
    }, e && c && {
      descriptor: {
        size: c.reduce(function (e, t) {
          return e + t;
        }, 0),
        views: c.map(function (e, t) {
          var _i$minSize, _i$maxSize, _i$priority, _i$snap;
          var i = V.current.get(E.current[t]),
            r = new Ie(M.current, _objectSpread(_objectSpread({
              element: document.createElement("div"),
              minimumSize: (_i$minSize = i === null || i === void 0 ? void 0 : i.minSize) !== null && _i$minSize !== void 0 ? _i$minSize : s,
              maximumSize: (_i$maxSize = i === null || i === void 0 ? void 0 : i.maxSize) !== null && _i$maxSize !== void 0 ? _i$maxSize : n,
              priority: (_i$priority = i === null || i === void 0 ? void 0 : i.priority) !== null && _i$priority !== void 0 ? _i$priority : ve.Normal
            }, (i === null || i === void 0 ? void 0 : i.preferredSize) && {
              preferredSize: i === null || i === void 0 ? void 0 : i.preferredSize
            }), {}, {
              snap: (_i$snap = i === null || i === void 0 ? void 0 : i.snap) !== null && _i$snap !== void 0 ? _i$snap : h
            }));
          return P.current.push(r), {
            container: _toConsumableArray(N.current.values())[t],
            size: e,
            view: r
          };
        })
      }
    });
    j.current = new ze(S.current, t, f, p, y), j.current.on("sashDragStart", function () {
      var _S$current;
      (_S$current = S.current) === null || _S$current === void 0 ? void 0 : _S$current.classList.add("split-view-sash-dragging");
    }), j.current.on("sashDragEnd", function () {
      var _S$current2;
      (_S$current2 = S.current) === null || _S$current2 === void 0 ? void 0 : _S$current2.classList.remove("split-view-sash-dragging");
    }), j.current.on("sashchange", function (e) {
      if (d && j.current) {
        var _e25 = T.map(function (e) {
          return e.key;
        });
        for (var _t19 = 0; _t19 < _e25.length; _t19++) {
          var _i15 = V.current.get(_e25[_t19]);
          void 0 !== (_i15 === null || _i15 === void 0 ? void 0 : _i15.visible) && _i15.visible !== j.current.isViewVisible(_t19) && d(_t19, j.current.isViewVisible(_t19));
        }
      }
    }), j.current.on("sashreset", function (e) {
      if (m) m();else {
        var _j$current4;
        if (F(e)) return;
        if (F(e + 1)) return;
        (_j$current4 = j.current) === null || _j$current4 === void 0 ? void 0 : _j$current4.distributeViewSizes();
      }
    });
    var i = j.current;
    return function () {
      i.dispose();
    };
  }, []), O(function () {
    if (A) {
      var _e26 = T.map(function (e) {
          return e.key;
        }),
        _t20 = _toConsumableArray(E.current),
        _i16 = _e26.filter(function (e) {
          return !E.current.includes(e);
        }),
        _r3 = _e26.filter(function (e) {
          return E.current.includes(e);
        }),
        _o = E.current.map(function (t) {
          return !_e26.includes(t);
        });
      for (var _e27 = _o.length - 1; _e27 >= 0; _e27--) {
        var _j$current5;
        _o[_e27] && ((_j$current5 = j.current) !== null && _j$current5 !== void 0 && _j$current5.removeView(_e27), _t20.splice(_e27, 1), P.current.splice(_e27, 1));
      }
      var _iterator9 = _createForOfIteratorHelper(_i16),
        _step9;
      try {
        var _loop3 = function _loop3() {
          var _i$minSize2, _i$maxSize2, _i$priority2, _i$snap2, _j$current9;
          var r = _step9.value;
          var i = V.current.get(r),
            o = new Ie(M.current, _objectSpread(_objectSpread({
              element: document.createElement("div"),
              minimumSize: (_i$minSize2 = i === null || i === void 0 ? void 0 : i.minSize) !== null && _i$minSize2 !== void 0 ? _i$minSize2 : s,
              maximumSize: (_i$maxSize2 = i === null || i === void 0 ? void 0 : i.maxSize) !== null && _i$maxSize2 !== void 0 ? _i$maxSize2 : n,
              priority: (_i$priority2 = i === null || i === void 0 ? void 0 : i.priority) !== null && _i$priority2 !== void 0 ? _i$priority2 : ve.Normal
            }, (i === null || i === void 0 ? void 0 : i.preferredSize) && {
              preferredSize: i === null || i === void 0 ? void 0 : i.preferredSize
            }), {}, {
              snap: (_i$snap2 = i === null || i === void 0 ? void 0 : i.snap) !== null && _i$snap2 !== void 0 ? _i$snap2 : h
            }));
          (_j$current9 = j.current) !== null && _j$current9 !== void 0 && _j$current9.addView(N.current.get(r), o, de.Distribute, _e26.findIndex(function (e) {
            return e === r;
          })), _t20.splice(_e26.findIndex(function (e) {
            return e === r;
          }), 0, r), P.current.splice(_e26.findIndex(function (e) {
            return e === r;
          }), 0, o);
        };
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      for (; !v(_e26, _t20);) {
        var _iterator10 = _createForOfIteratorHelper(_e26.entries()),
          _step10;
        try {
          var _loop = function _loop() {
            var _step10$value = _slicedToArray(_step10.value, 2),
              i = _step10$value[0],
              n = _step10$value[1];
            var e = _t20.findIndex(function (e) {
              return e === n;
            });
            if (e !== i) {
              var _j$current6;
              (_j$current6 = j.current) === null || _j$current6 === void 0 ? void 0 : _j$current6.moveView(N.current.get(n), e, i);
              var _s5 = _t20[e];
              _t20.splice(e, 1), _t20.splice(i, 0, _s5);
              return "break";
            }
          };
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _ret = _loop();
            if (_ret === "break") break;
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
      var _iterator11 = _createForOfIteratorHelper(_i16),
        _step11;
      try {
        var _loop4 = function _loop4() {
          var _j$current10;
          var t = _step11.value;
          var i = _e26.findIndex(function (e) {
              return e === t;
            }),
            n = P.current[i].preferredSize;
          void 0 !== n && ((_j$current10 = j.current) === null || _j$current10 === void 0 ? void 0 : _j$current10.resizeView(i, n));
        };
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          _loop4();
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      var _loop2 = function _loop2() {
        var _j$current7, _j$current8;
        var t = _arr2[_i17];
        var i = V.current.get(t),
          n = _e26.findIndex(function (e) {
            return e === t;
          });
        i && xe(i) && void 0 !== i.visible && ((_j$current7 = j.current) === null || _j$current7 === void 0 ? void 0 : _j$current7.isViewVisible(n)) !== i.visible && ((_j$current8 = j.current) === null || _j$current8 === void 0 ? void 0 : _j$current8.setViewVisible(n, i.visible));
      };
      for (var _i17 = 0, _arr2 = [].concat(_toConsumableArray(_i16), _toConsumableArray(_r3)); _i17 < _arr2.length; _i17++) {
        _loop2();
      }
      var _iterator12 = _createForOfIteratorHelper(_r3),
        _step12;
      try {
        var _loop5 = function _loop5() {
          var t = _step12.value;
          var i = V.current.get(t),
            n = _e26.findIndex(function (e) {
              return e === t;
            });
          if (i && xe(i)) {
            var _j$current11;
            void 0 !== i.preferredSize && P.current[n].preferredSize !== i.preferredSize && (P.current[n].preferredSize = i.preferredSize);
            var _e28 = !1;
            void 0 !== i.minSize && P.current[n].minimumSize !== i.minSize && (P.current[n].minimumSize = i.minSize, _e28 = !0), void 0 !== i.maxSize && P.current[n].maximumSize !== i.maxSize && (P.current[n].maximumSize = i.maxSize, _e28 = !0), _e28 && ((_j$current11 = j.current) === null || _j$current11 === void 0 ? void 0 : _j$current11.layout());
          }
        };
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          _loop5();
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      (_i16.length > 0 || _o.length > 0) && (E.current = _e26);
    }
  }, [T, A, n, s, h]), e.useEffect(function () {
    j.current && (j.current.onDidChange = f);
  }, [f]), e.useEffect(function () {
    j.current && (j.current.onDidDragStart = p);
  }, [p]), e.useEffect(function () {
    j.current && (j.current.onDidDragEnd = y);
  }, [y]), b({
    ref: S,
    onResize: function onResize(_ref5) {
      var _j$current12;
      var e = _ref5.width,
        t = _ref5.height;
      e && t && ((_j$current12 = j.current) !== null && _j$current12 !== void 0 && _j$current12.layout(l ? t : e), M.current.setSize(l ? t : e), C(!0));
    }
  }), O(function () {
    if (!A) {
      var _j$current13;
      var _S$current$getBoundin = S.current.getBoundingClientRect(),
        _e29 = _S$current$getBoundin.height,
        _t21 = _S$current$getBoundin.width;
      (_j$current13 = j.current) !== null && _j$current13 !== void 0 && _j$current13.layout(l ? _e29 : _t21), M.current.setSize(l ? _e29 : _t21), C(!0);
    }
  }, [A, l]), e.useEffect(function () {
    L && je(20);
  }, []), e.createElement("div", {
    ref: S,
    className: r("split-view", l ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": a
    }, g, l ? _ : I, _defineProperty({}, x, a), i)
  }, e.createElement("div", {
    className: r("split-view-container", w)
  }, e.Children.toArray(t).map(function (t) {
    if (!e.isValidElement(t)) return null;
    var i = t.key;
    return "Allotment.Pane" === t.type.displayName ? (V.current.set(i, t.props), e.cloneElement(t, {
      key: i,
      ref: function ref(e) {
        e ? N.current.set(i, e) : N.current["delete"](i);
      }
    })) : e.createElement(Ee, {
      key: i,
      ref: function ref(e) {
        e ? N.current.set(i, e) : N.current["delete"](i);
      }
    }, t);
  })));
});
function je(e) {
  var t = d(e, 4, 20),
    i = d(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", t + "px"), document.documentElement.style.setProperty("--sash-hover-size", i + "px"), function (e) {
    le = e, fe.emit("onDidChangeGlobalSize", e);
  }(t);
}
Ve.displayName = "Allotment";
var Le = Object.assign(Ve, {
  Pane: Ee
});
exports.Allotment = Le, exports.LayoutPriority = ve, exports.setSashSize = je;
