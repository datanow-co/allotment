function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import e, { useRef as t, useState as i, useEffect as n, useCallback as r, useMemo as s, useLayoutEffect as o, forwardRef as a, useImperativeHandle as u } from "react";
var c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l,
  f = {
    exports: {}
  };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
l = f, function () {
  var e = {}.hasOwnProperty;
  function t() {
    for (var i = [], n = 0; n < arguments.length; n++) {
      var r = arguments[n];
      if (r) {
        var s = typeof r;
        if ("string" === s || "number" === s) i.push(r);else if (Array.isArray(r)) {
          if (r.length) {
            var o = t.apply(null, r);
            o && i.push(o);
          }
        } else if ("object" === s) if (r.toString === Object.prototype.toString) for (var a in r) e.call(r, a) && r[a] && i.push(a);else i.push(r.toString());
      }
    }
    return i.join(" ");
  }
  l.exports ? (t.default = t, l.exports = t) : window.classNames = t;
}();
var m = h(f.exports),
  d = /^\s+|\s+$/g,
  p = /^[-+]0x[0-9a-f]+$/i,
  v = /^0b[01]+$/i,
  y = /^0o[0-7]+$/i,
  b = parseInt,
  g = Object.prototype.toString;
function z(e) {
  var t = typeof e;
  return !!e && ("object" == t || "function" == t);
}
function w(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == typeof e || function (e) {
      return !!e && "object" == typeof e;
    }(e) && "[object Symbol]" == g.call(e);
  }(e)) return NaN;
  if (z(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = z(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(d, "");
  var i = v.test(e);
  return i || y.test(e) ? b(e.slice(2), i ? 2 : 8) : p.test(e) ? NaN : +e;
}
var S = h(function (e, t, i) {
    return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = w(i)) == i ? i : 0), void 0 !== t && (t = (t = w(t)) == t ? t : 0), function (e, t, i) {
      return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
    }(w(e), t, i);
  }),
  _ = {
    exports: {}
  };
!function (e, t) {
  var i = "__lodash_hash_undefined__",
    n = 9007199254740991,
    r = "[object Arguments]",
    s = "[object Array]",
    o = "[object Boolean]",
    a = "[object Date]",
    u = "[object Error]",
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
  I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[r] = I[s] = I[z] = I[o] = I[w] = I[a] = I[u] = I[h] = I[l] = I[f] = I[m] = I[p] = I[v] = I[y] = I[g] = !1;
  var x = "object" == typeof c && c && c.Object === Object && c,
    E = "object" == typeof self && self && self.Object === Object && self,
    V = x || E || Function("return this")(),
    j = t && !t.nodeType && t,
    N = j && e && !e.nodeType && e,
    L = N && N.exports === j,
    O = L && x.process,
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
  function T(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e) {
      i[++t] = e;
    }), i;
  }
  var C,
    F,
    k,
    $ = Array.prototype,
    H = Function.prototype,
    Y = Object.prototype,
    B = V["__core-js_shared__"],
    R = H.toString,
    W = Y.hasOwnProperty,
    G = (C = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "")) ? "Symbol(src)_1." + C : "",
    U = Y.toString,
    X = RegExp("^" + R.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    J = L ? V.Buffer : void 0,
    K = V.Symbol,
    Z = V.Uint8Array,
    Q = Y.propertyIsEnumerable,
    q = $.splice,
    ee = K ? K.toStringTag : void 0,
    te = Object.getOwnPropertySymbols,
    ie = J ? J.isBuffer : void 0,
    ne = (F = Object.keys, k = Object, function (e) {
      return F(k(e));
    }),
    re = De(V, "DataView"),
    se = De(V, "Map"),
    oe = De(V, "Promise"),
    ae = De(V, "Set"),
    ue = De(V, "WeakMap"),
    ce = De(Object, "create"),
    he = Te(re),
    le = Te(se),
    fe = Te(oe),
    me = Te(ae),
    de = Te(ue),
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
    var i = ke(e),
      n = !i && Fe(e),
      r = !i && !n && $e(e),
      s = !i && !n && !r && We(e),
      o = i || n || r || s,
      a = o ? function (e, t) {
        for (var i = -1, n = Array(e); ++i < e;) n[i] = t(i);
        return n;
      }(e.length, String) : [],
      u = a.length;
    for (var c in e) !t && !W.call(e, c) || o && ("length" == c || r && ("offset" == c || "parent" == c) || s && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ae(c, u)) || a.push(c);
    return a;
  }
  function _e(e, t) {
    for (var i = e.length; i--;) if (Ce(e[i][0], t)) return i;
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
      var r = U.call(e);
      n && (t ? e[ee] = i : delete e[ee]);
      return r;
    }(e) : function (e) {
      return U.call(e);
    }(e);
  }
  function xe(e) {
    return Re(e) && Ie(e) == r;
  }
  function Ee(e, t, i, n, c) {
    return e === t || (null == e || null == t || !Re(e) && !Re(t) ? e != e && t != t : function (e, t, i, n, c, h) {
      var d = ke(e),
        g = ke(t),
        S = d ? s : Pe(e),
        _ = g ? s : Pe(t),
        I = (S = S == r ? m : S) == m,
        x = (_ = _ == r ? m : _) == m,
        E = S == _;
      if (E && $e(e)) {
        if (!$e(t)) return !1;
        d = !0, I = !1;
      }
      if (E && !I) return h || (h = new we()), d || We(e) ? Ne(e, t, i, n, c, h) : function (e, t, i, n, r, s, c) {
        switch (i) {
          case w:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case z:
            return !(e.byteLength != t.byteLength || !s(new Z(e), new Z(t)));
          case o:
          case a:
          case f:
            return Ce(+e, +t);
          case u:
            return e.name == t.name && e.message == t.message;
          case p:
          case y:
            return e == t + "";
          case l:
            var h = A;
          case v:
            var m = 1 & n;
            if (h || (h = T), e.size != t.size && !m) return !1;
            var d = c.get(e);
            if (d) return d == t;
            n |= 2, c.set(e, t);
            var g = Ne(h(e), h(t), n, r, s, c);
            return c.delete(e), g;
          case b:
            if (ve) return ve.call(e) == ve.call(t);
        }
        return !1;
      }(e, t, S, i, n, c, h);
      if (!(1 & i)) {
        var V = I && W.call(e, "__wrapped__"),
          j = x && W.call(t, "__wrapped__");
        if (V || j) {
          var N = V ? e.value() : e,
            L = j ? t.value() : t;
          return h || (h = new we()), c(N, L, i, n, h);
        }
      }
      if (!E) return !1;
      return h || (h = new we()), function (e, t, i, n, r, s) {
        var o = 1 & i,
          a = Le(e),
          u = a.length,
          c = Le(t).length;
        if (u != c && !o) return !1;
        var h = u;
        for (; h--;) {
          var l = a[h];
          if (!(o ? l in t : W.call(t, l))) return !1;
        }
        var f = s.get(e);
        if (f && s.get(t)) return f == t;
        var m = !0;
        s.set(e, t), s.set(t, e);
        var d = o;
        for (; ++h < u;) {
          var p = e[l = a[h]],
            v = t[l];
          if (n) var y = o ? n(v, p, l, t, e, s) : n(p, v, l, e, t, s);
          if (!(void 0 === y ? p === v || r(p, v, i, n, s) : y)) {
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
        return s.delete(e), s.delete(t), m;
      }(e, t, i, n, c, h);
    }(e, t, i, n, Ee, c));
  }
  function Ve(e) {
    return !(!Be(e) || function (e) {
      return !!G && G in e;
    }(e)) && (He(e) ? X : S).test(Te(e));
  }
  function je(e) {
    if (i = (t = e) && t.constructor, n = "function" == typeof i && i.prototype || Y, t !== n) return ne(e);
    var t,
      i,
      n,
      r = [];
    for (var s in Object(e)) W.call(e, s) && "constructor" != s && r.push(s);
    return r;
  }
  function Ne(e, t, i, n, r, s) {
    var o = 1 & i,
      a = e.length,
      u = t.length;
    if (a != u && !(o && u > a)) return !1;
    var c = s.get(e);
    if (c && s.get(t)) return c == t;
    var h = -1,
      l = !0,
      f = 2 & i ? new ze() : void 0;
    for (s.set(e, t), s.set(t, e); ++h < a;) {
      var m = e[h],
        d = t[h];
      if (n) var p = o ? n(d, m, h, t, e, s) : n(m, d, h, e, t, s);
      if (void 0 !== p) {
        if (p) continue;
        l = !1;
        break;
      }
      if (f) {
        if (!P(t, function (e, t) {
          if (o = t, !f.has(o) && (m === e || r(m, e, i, n, s))) return f.push(t);
          var o;
        })) {
          l = !1;
          break;
        }
      } else if (m !== d && !r(m, d, i, n, s)) {
        l = !1;
        break;
      }
    }
    return s.delete(e), s.delete(t), l;
  }
  function Le(e) {
    return function (e, t, i) {
      var n = t(e);
      return ke(e) ? n : function (e, t) {
        for (var i = -1, n = t.length, r = e.length; ++i < n;) e[r + i] = t[i];
        return e;
      }(n, i(e));
    }(e, Ge, Me);
  }
  function Oe(e, t) {
    var i,
      n,
      r = e.__data__;
    return ("string" == (n = typeof (i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? r["string" == typeof t ? "string" : "hash"] : r.map;
  }
  function De(e, t) {
    var i = function (e, t) {
      return null == e ? void 0 : e[t];
    }(e, t);
    return Ve(i) ? i : void 0;
  }
  ye.prototype.clear = function () {
    this.__data__ = ce ? ce(null) : {}, this.size = 0;
  }, ye.prototype.delete = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }, ye.prototype.get = function (e) {
    var t = this.__data__;
    if (ce) {
      var n = t[e];
      return n === i ? void 0 : n;
    }
    return W.call(t, e) ? t[e] : void 0;
  }, ye.prototype.has = function (e) {
    var t = this.__data__;
    return ce ? void 0 !== t[e] : W.call(t, e);
  }, ye.prototype.set = function (e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = ce && void 0 === t ? i : t, this;
  }, be.prototype.clear = function () {
    this.__data__ = [], this.size = 0;
  }, be.prototype.delete = function (e) {
    var t = this.__data__,
      i = _e(t, e);
    return !(i < 0) && (i == t.length - 1 ? t.pop() : q.call(t, i, 1), --this.size, !0);
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
      map: new (se || be)(),
      string: new ye()
    };
  }, ge.prototype.delete = function (e) {
    var t = Oe(this, e).delete(e);
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
    return this.__data__.set(e, i), this;
  }, ze.prototype.has = function (e) {
    return this.__data__.has(e);
  }, we.prototype.clear = function () {
    this.__data__ = new be(), this.size = 0;
  }, we.prototype.delete = function (e) {
    var t = this.__data__,
      i = t.delete(e);
    return this.size = t.size, i;
  }, we.prototype.get = function (e) {
    return this.__data__.get(e);
  }, we.prototype.has = function (e) {
    return this.__data__.has(e);
  }, we.prototype.set = function (e, t) {
    var i = this.__data__;
    if (i instanceof be) {
      var n = i.__data__;
      if (!se || n.length < 199) return n.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new ge(n);
    }
    return i.set(e, t), this.size = i.size, this;
  };
  var Me = te ? function (e) {
      return null == e ? [] : (e = Object(e), function (e, t) {
        for (var i = -1, n = null == e ? 0 : e.length, r = 0, s = []; ++i < n;) {
          var o = e[i];
          t(o, i, e) && (s[r++] = o);
        }
        return s;
      }(te(e), function (t) {
        return Q.call(e, t);
      }));
    } : function () {
      return [];
    },
    Pe = Ie;
  function Ae(e, t) {
    return !!(t = null == t ? n : t) && ("number" == typeof e || _.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function Te(e) {
    if (null != e) {
      try {
        return R.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  }
  function Ce(e, t) {
    return e === t || e != e && t != t;
  }
  (re && Pe(new re(new ArrayBuffer(1))) != w || se && Pe(new se()) != l || oe && Pe(oe.resolve()) != d || ae && Pe(new ae()) != v || ue && Pe(new ue()) != g) && (Pe = function (e) {
    var t = Ie(e),
      i = t == m ? e.constructor : void 0,
      n = i ? Te(i) : "";
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
      return Re(e) && W.call(e, "callee") && !Q.call(e, "callee");
    },
    ke = Array.isArray;
  var $e = ie || function () {
    return !1;
  };
  function He(e) {
    if (!Be(e)) return !1;
    var t = Ie(e);
    return t == h || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
  }
  function Ye(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
  }
  function Be(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  }
  function Re(e) {
    return null != e && "object" == typeof e;
  }
  var We = M ? function (e) {
    return function (t) {
      return e(t);
    };
  }(M) : function (e) {
    return Re(e) && Ye(e.length) && !!I[Ie(e)];
  };
  function Ge(e) {
    return null != (t = e) && Ye(t.length) && !He(t) ? Se(e) : je(e);
    var t;
  }
  e.exports = function (e, t) {
    return Ee(e, t);
  };
}(_, _.exports);
var I = h(_.exports);
function x(e, t, i) {
  return e[t] ? e[t][0] ? e[t][0][i] : e[t][i] : "contentBoxSize" === t ? e.contentRect["inlineSize" === i ? "width" : "height"] : void 0;
}
function E(e) {
  void 0 === e && (e = {});
  var o = e.onResize,
    a = t(void 0);
  a.current = o;
  var u = e.round || Math.round,
    c = t(),
    h = i({
      width: void 0,
      height: void 0
    }),
    l = h[0],
    f = h[1],
    m = t(!1);
  n(function () {
    return m.current = !1, function () {
      m.current = !0;
    };
  }, []);
  var d = t({
      width: void 0,
      height: void 0
    }),
    p = function (e, i) {
      var s = t(null),
        o = t(null);
      o.current = i;
      var a = t(null);
      n(function () {
        u();
      });
      var u = r(function () {
        var t = a.current,
          i = o.current,
          n = t || (i ? i instanceof Element ? i : i.current : null);
        s.current && s.current.element === n && s.current.subscriber === e || (s.current && s.current.cleanup && s.current.cleanup(), s.current = {
          element: n,
          subscriber: e,
          cleanup: n ? e(n) : void 0
        });
      }, [e]);
      return n(function () {
        return function () {
          s.current && s.current.cleanup && (s.current.cleanup(), s.current = null);
        };
      }, []), r(function (e) {
        a.current = e, u();
      }, [u]);
    }(r(function (t) {
      return c.current && c.current.box === e.box && c.current.round === u || (c.current = {
        box: e.box,
        round: u,
        instance: new ResizeObserver(function (t) {
          var i = t[0],
            n = "border-box" === e.box ? "borderBoxSize" : "device-pixel-content-box" === e.box ? "devicePixelContentBoxSize" : "contentBoxSize",
            r = x(i, n, "inlineSize"),
            s = x(i, n, "blockSize"),
            o = r ? u(r) : void 0,
            c = s ? u(s) : void 0;
          if (d.current.width !== o || d.current.height !== c) {
            var h = {
              width: o,
              height: c
            };
            d.current.width = o, d.current.height = c, a.current ? a.current(h) : m.current || f(h);
          }
        })
      }), c.current.instance.observe(t, {
        box: e.box
      }), function () {
        c.current && c.current.instance.unobserve(t);
      };
    }, [e.box, u]), e.ref);
  return s(function () {
    return {
      ref: p,
      width: l.width,
      height: l.height
    };
  }, [p, l.width, l.height]);
}
var V = "allotment-module_splitView__L-yRc",
  j = "allotment-module_sashContainer__fzwJF",
  N = "allotment-module_splitViewContainer__rQnVa",
  L = "allotment-module_splitViewView__MGZ6O",
  O = "allotment-module_vertical__WSwwa",
  D = "allotment-module_horizontal__7doS8",
  M = "allotment-module_separatorBorder__x-rDS";
let P,
  A = !1,
  T = !1;
"object" == typeof navigator && (P = navigator.userAgent, T = P.indexOf("Macintosh") >= 0, A = (P.indexOf("Macintosh") >= 0 || P.indexOf("iPad") >= 0 || P.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const C = A,
  F = T,
  k = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? o : n;
class $ {
  constructor() {
    this._size = void 0;
  }
  getSize() {
    return this._size;
  }
  setSize(e) {
    this._size = e;
  }
}
function H(e, t) {
  const i = e.length,
    n = i - t.length;
  return n >= 0 && e.slice(n, i) === t;
}
var Y = {
  exports: {}
};
!function (e) {
  var t = Object.prototype.hasOwnProperty,
    i = "~";
  function n() {}
  function r(e, t, i) {
    this.fn = e, this.context = t, this.once = i || !1;
  }
  function s(e, t, n, s, o) {
    if ("function" != typeof n) throw new TypeError("The listener must be a function");
    var a = new r(n, s || e, o),
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
      r = [];
    if (0 === this._eventsCount) return r;
    for (n in e = this._events) t.call(e, n) && r.push(i ? n.slice(1) : n);
    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
  }, a.prototype.listeners = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    if (!n) return [];
    if (n.fn) return [n.fn];
    for (var r = 0, s = n.length, o = new Array(s); r < s; r++) o[r] = n[r].fn;
    return o;
  }, a.prototype.listenerCount = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    return n ? n.fn ? 1 : n.length : 0;
  }, a.prototype.emit = function (e, t, n, r, s, o) {
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
          return h.fn.call(h.context, t, n, r), !0;
        case 5:
          return h.fn.call(h.context, t, n, r, s), !0;
        case 6:
          return h.fn.call(h.context, t, n, r, s, o), !0;
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
          h[c].fn.call(h[c].context, t, n, r);
          break;
        default:
          if (!u) for (f = 1, u = new Array(l - 1); f < l; f++) u[f - 1] = arguments[f];
          h[c].fn.apply(h[c].context, u);
      }
    }
    return !0;
  }, a.prototype.on = function (e, t, i) {
    return s(this, e, t, i, !1);
  }, a.prototype.once = function (e, t, i) {
    return s(this, e, t, i, !0);
  }, a.prototype.removeListener = function (e, t, n, r) {
    var s = i ? i + e : e;
    if (!this._events[s]) return this;
    if (!t) return o(this, s), this;
    var a = this._events[s];
    if (a.fn) a.fn !== t || r && !a.once || n && a.context !== n || o(this, s);else {
      for (var u = 0, c = [], h = a.length; u < h; u++) (a[u].fn !== t || r && !a[u].once || n && a[u].context !== n) && c.push(a[u]);
      c.length ? this._events[s] = 1 === c.length ? c[0] : c : o(this, s);
    }
    return this;
  }, a.prototype.removeAllListeners = function (e) {
    var t;
    return e ? (t = i ? i + e : e, this._events[t] && o(this, t)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a;
}(Y);
var B = h(Y.exports);
function R(e, t) {
  const i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function W(e, t) {
  const i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function G(e, t, i = 1) {
  const n = Math.max(0, Math.ceil((t - e) / i)),
    r = new Array(n);
  let s = -1;
  for (; ++s < n;) r[s] = e + s * i;
  return r;
}
var U = /^\s+|\s+$/g,
  X = /^[-+]0x[0-9a-f]+$/i,
  J = /^0b[01]+$/i,
  K = /^0o[0-7]+$/i,
  Z = parseInt,
  Q = "object" == typeof c && c && c.Object === Object && c,
  q = "object" == typeof self && self && self.Object === Object && self,
  ee = Q || q || Function("return this")(),
  te = Object.prototype.toString,
  ie = Math.max,
  ne = Math.min,
  re = function re() {
    return ee.Date.now();
  };
function se(e) {
  var t = typeof e;
  return !!e && ("object" == t || "function" == t);
}
function oe(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == typeof e || function (e) {
      return !!e && "object" == typeof e;
    }(e) && "[object Symbol]" == te.call(e);
  }(e)) return NaN;
  if (se(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = se(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(U, "");
  var i = J.test(e);
  return i || K.test(e) ? Z(e.slice(2), i ? 2 : 8) : X.test(e) ? NaN : +e;
}
var ae = h(function (e, t, i) {
    var n,
      r,
      s,
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
        s = r;
      return n = r = void 0, c = t, o = e.apply(s, i);
    }
    function d(e) {
      return c = e, a = setTimeout(v, t), h ? m(e) : o;
    }
    function p(e) {
      var i = e - u;
      return void 0 === u || i >= t || i < 0 || l && e - c >= s;
    }
    function v() {
      var e = re();
      if (p(e)) return y(e);
      a = setTimeout(v, function (e) {
        var i = t - (e - u);
        return l ? ne(i, s - (e - c)) : i;
      }(e));
    }
    function y(e) {
      return a = void 0, f && n ? m(e) : (n = r = void 0, o);
    }
    function b() {
      var e = re(),
        i = p(e);
      if (n = arguments, r = this, u = e, i) {
        if (void 0 === a) return d(u);
        if (l) return a = setTimeout(v, t), m(u);
      }
      return void 0 === a && (a = setTimeout(v, t)), o;
    }
    return t = oe(t) || 0, se(i) && (h = !!i.leading, s = (l = "maxWait" in i) ? ie(oe(i.maxWait) || 0, t) : s, f = "trailing" in i ? !!i.trailing : f), b.cancel = function () {
      void 0 !== a && clearTimeout(a), c = 0, n = u = r = a = void 0;
    }, b.flush = function () {
      return void 0 === a ? o : y(re());
    }, b;
  }),
  ue = "sash-module_sash__K-9lB",
  ce = "sash-module_disabled__Hm-wx",
  he = "sash-module_mac__Jf6OJ",
  le = "sash-module_vertical__pB-rs",
  fe = "sash-module_minimum__-UKxp",
  me = "sash-module_maximum__TCWxD",
  de = "sash-module_horizontal__kFbiw",
  pe = "sash-module_hover__80W6I",
  ve = "sash-module_active__bJspD";
let ye = function (e) {
    return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
  }({}),
  be = function (e) {
    return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
  }({}),
  ge = C ? 20 : 8;
const ze = new B();
class we extends B {
  get state() {
    return this._state;
  }
  set state(e) {
    this._state !== e && (this.el.classList.toggle(ce, e === be.Disabled), this.el.classList.toggle("dash-disabled", e === be.Disabled), this.el.classList.toggle(fe, e === be.Minimum), this.el.classList.toggle("sash-minimum", e === be.Minimum), this.el.classList.toggle(me, e === be.Maximum), this.el.classList.toggle("sash-maximum", e === be.Maximum), this._state = e, this.emit("enablementChange", e));
  }
  constructor(e, t, i) {
    var _i$orientation;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = ae(e => e.classList.add("sash-hover", pe), this.hoverDelay), this._state = be.Enabled, this.onPointerStart = e => {
      const t = e.pageX,
        i = e.pageY,
        n = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      this.el.classList.add("sash-active", ve), this.emit("start", n), this.el.setPointerCapture(e.pointerId);
      const r = e => {
          e.preventDefault();
          const n = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          this.emit("change", n);
        },
        s = e => {
          e.preventDefault(), this.el.classList.remove("sash-active", ve), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", s);
        };
      window.addEventListener("pointermove", r), window.addEventListener("pointerup", s);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(ve) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", pe)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", pe);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", ue), this.el.dataset.testid = "sash", e.append(this.el), F && this.el.classList.add("sash-mac", he), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), "number" == typeof i.size ? (this.size = i.size, i.orientation === ye.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = ge, ze.on("onDidChangeGlobalSize", e => {
      this.size = e, this.layout();
    })), this.layoutProvider = t, this.orientation = (_i$orientation = i.orientation) != null ? _i$orientation : ye.Vertical, this.orientation === ye.Horizontal ? (this.el.classList.add("sash-horizontal", de), this.el.classList.remove("sash-vertical", le)) : (this.el.classList.remove("sash-horizontal", de), this.el.classList.add("sash-vertical", le)), this.layout();
  }
  layout() {
    if (this.orientation === ye.Vertical) {
      const e = this.layoutProvider;
      this.el.style.left = e.getVerticalSashLeft(this) - this.size / 2 + "px", e.getVerticalSashTop && (this.el.style.top = e.getVerticalSashTop(this) + "px"), e.getVerticalSashHeight && (this.el.style.height = e.getVerticalSashHeight(this) + "px");
    } else {
      const e = this.layoutProvider;
      this.el.style.top = e.getHorizontalSashTop(this) - this.size / 2 + "px", e.getHorizontalSashLeft && (this.el.style.left = e.getHorizontalSashLeft(this) + "px"), e.getHorizontalSashWidth && (this.el.style.width = e.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
let Se;
var _e;
(_e = Se || (Se = {})).Distribute = {
  type: "distribute"
}, _e.Split = function (e) {
  return {
    type: "split",
    index: e
  };
}, _e.Invisible = function (e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
};
let Ie = function (e) {
  return e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH", e;
}({});
class xe {
  constructor(e, t, i) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = t, this.container.classList.add("split-view-view", L), this.container.dataset.testid = "split-view-view", "number" == typeof i ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
  }
  set size(e) {
    this._size = e;
  }
  get size() {
    return this._size;
  }
  get priority() {
    return this.view.priority;
  }
  get snap() {
    return !!this.view.snap;
  }
  get cachedVisibleSize() {
    return this._cachedVisibleSize;
  }
  get visible() {
    return void 0 === this._cachedVisibleSize;
  }
  setVisible(e, t) {
    e !== this.visible && (e ? (this.size = S(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = "number" == typeof t ? t : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
  }
  get minimumSize() {
    return this.visible ? this.view.minimumSize : 0;
  }
  get viewMinimumSize() {
    return this.view.minimumSize;
  }
  get maximumSize() {
    return this.visible ? this.view.maximumSize : 0;
  }
  get viewMaximumSize() {
    return this.view.maximumSize;
  }
  set enabled(e) {
    this.container.style.pointerEvents = e ? "" : "none";
  }
  layout(e) {
    this.layoutContainer(e), this.view.layout(this.size, e);
  }
}
class Ee extends xe {
  layoutContainer(e) {
    this.container.style.left = `${e}px`, this.container.style.width = `${this.size}px`;
  }
}
class Ve extends xe {
  layoutContainer(e) {
    this.container.style.top = `${e}px`, this.container.style.height = `${this.size}px`;
  }
}
class je extends B {
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  set startSnappingEnabled(e) {
    this._startSnappingEnabled !== e && (this._startSnappingEnabled = e, this.updateSashEnablement());
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set endSnappingEnabled(e) {
    this._endSnappingEnabled !== e && (this._endSnappingEnabled = e, this.updateSashEnablement());
  }
  constructor(e, t = {}, i, n, r) {
    var _t$orientation, _t$proportionalLayout;
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = e => {
      this.emit("sashchange", e), this.saveProportions();
      for (const _e2 of this.viewItems) _e2.enabled = !0;
    }, this.orientation = (_t$orientation = t.orientation) != null ? _t$orientation : ye.Vertical, this.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) != null ? _t$proportionalLayout : !0, this.getSashOrthogonalSize = t.getSashOrthogonalSize, i && (this.onDidChange = i), n && (this.onDidDragStart = n), r && (this.onDidDragEnd = r), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", j), e.prepend(this.sashContainer), t.descriptor) {
      this.size = t.descriptor.size;
      for (const [_e3, _i] of t.descriptor.views.entries()) {
        const _t = _i.size,
          _n = _i.container,
          _r = _i.view;
        this.addView(_n, _r, _t, _e3, !0);
      }
      this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions();
    }
  }
  addView(e, t, i, n = this.viewItems.length, r) {
    let s;
    s = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
      cachedVisibleSize: i.cachedVisibleSize
    } : t.minimumSize;
    const o = this.orientation === ye.Vertical ? new Ve(e, t, s) : new Ee(e, t, s);
    if (this.viewItems.splice(n, 0, o), this.viewItems.length > 1) {
      const _e4 = this.orientation === ye.Vertical ? new we(this.sashContainer, {
          getHorizontalSashTop: e => this.getSashPosition(e),
          getHorizontalSashWidth: this.getSashOrthogonalSize
        }, {
          orientation: ye.Horizontal
        }) : new we(this.sashContainer, {
          getVerticalSashLeft: e => this.getSashPosition(e),
          getVerticalSashHeight: this.getSashOrthogonalSize
        }, {
          orientation: ye.Vertical
        }),
        _t2 = this.orientation === ye.Vertical ? t => ({
          sash: _e4,
          start: t.startY,
          current: t.currentY
        }) : t => ({
          sash: _e4,
          start: t.startX,
          current: t.currentX
        });
      _e4.on("start", e => {
        var _this$onDidDragStart;
        this.emit("sashDragStart"), this.onSashStart(_t2(e));
        const i = this.viewItems.map(e => e.size);
        (_this$onDidDragStart = this.onDidDragStart) == null ? void 0 : _this$onDidDragStart.call(this, i);
      }), _e4.on("change", e => this.onSashChange(_t2(e))), _e4.on("end", () => {
        var _this$onDidDragEnd;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex(t => t.sash === _e4));
        const t = this.viewItems.map(e => e.size);
        (_this$onDidDragEnd = this.onDidDragEnd) == null ? void 0 : _this$onDidDragEnd.call(this, t);
      }), _e4.on("reset", () => {
        const t = this.sashItems.findIndex(t => t.sash === _e4),
          i = G(t, -1, -1),
          n = G(t + 1, this.viewItems.length),
          r = this.findFirstSnapIndex(i),
          s = this.findFirstSnapIndex(n);
        ("number" != typeof r || this.viewItems[r].visible) && ("number" != typeof s || this.viewItems[s].visible) && this.emit("sashreset", t);
      });
      const _i2 = {
        sash: _e4
      };
      this.sashItems.splice(n - 1, 0, _i2);
    }
    r || this.relayout(), r || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
  }
  removeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    const i = this.viewItems.splice(e, 1)[0].view;
    if (this.viewItems.length >= 1) {
      const _t3 = Math.max(e - 1, 0);
      this.sashItems.splice(_t3, 1)[0].sash.dispose();
    }
    return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
  }
  moveView(e, t, i) {
    const n = this.getViewCachedVisibleSize(t),
      r = void 0 === n ? this.getViewSize(t) : Se.Invisible(n),
      s = this.removeView(t);
    this.addView(e, s, r, i);
  }
  getViewCachedVisibleSize(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].cachedVisibleSize;
  }
  layout(e = this.size) {
    const t = Math.max(this.size, this.contentSize);
    if (this.size = e, this.proportions) for (let _t4 = 0; _t4 < this.viewItems.length; _t4++) {
      const i = this.viewItems[_t4];
      i.size = S(Math.round(this.proportions[_t4] * e), i.minimumSize, i.maximumSize);
    } else {
      const i = G(0, this.viewItems.length),
        n = i.filter(e => this.viewItems[e].priority === Ie.Low),
        r = i.filter(e => this.viewItems[e].priority === Ie.High);
      this.resize(this.viewItems.length - 1, e - t, void 0, n, r);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) return;
    const i = G(0, this.viewItems.length).filter(t => t !== e),
      n = [...i.filter(e => this.viewItems[e].priority === Ie.Low), e],
      r = i.filter(e => this.viewItems[e].priority === Ie.High),
      s = this.viewItems[e];
    t = Math.round(t), t = S(t, s.minimumSize, Math.min(s.maximumSize, this.size)), s.size = t, this.relayout(n, r);
  }
  resizeViews(e) {
    for (let t = 0; t < e.length; t++) {
      const i = this.viewItems[t];
      let n = e[t];
      n = Math.round(n), n = S(n, i.minimumSize, Math.min(i.maximumSize, this.size)), i.size = n;
    }
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions(), this.layout(this.size);
  }
  getViewSize(e) {
    return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
  }
  isViewVisible(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].visible;
  }
  setViewVisible(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    this.viewItems[e].setVisible(t), this.distributeEmptySpace(e), this.layoutViews(), this.saveProportions();
  }
  distributeViewSizes() {
    const e = [];
    let t = 0;
    for (const _i3 of this.viewItems) _i3.maximumSize - _i3.minimumSize > 0 && (e.push(_i3), t += _i3.size);
    const i = Math.floor(t / e.length);
    for (const _t5 of e) _t5.size = S(i, _t5.minimumSize, _t5.maximumSize);
    const n = G(0, this.viewItems.length),
      r = n.filter(e => this.viewItems[e].priority === Ie.Low),
      s = n.filter(e => this.viewItems[e].priority === Ie.High);
    this.relayout(r, s);
  }
  dispose() {
    this.sashItems.forEach(e => e.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(e, t) {
    const i = this.viewItems.reduce((e, t) => e + t.size, 0);
    this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart({
    sash: e,
    start: t
  }) {
    const i = this.sashItems.findIndex(t => t.sash === e);
    (e => {
      const t = this.viewItems.map(e => e.size);
      let n,
        r,
        s = Number.NEGATIVE_INFINITY,
        o = Number.POSITIVE_INFINITY;
      const a = G(i, -1, -1),
        u = G(i + 1, this.viewItems.length),
        c = a.reduce((e, i) => e + (this.viewItems[i].minimumSize - t[i]), 0),
        h = a.reduce((e, i) => e + (this.viewItems[i].viewMaximumSize - t[i]), 0),
        l = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].minimumSize), 0),
        f = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].viewMaximumSize), 0);
      s = Math.max(c, f), o = Math.min(l, h);
      const m = this.findFirstSnapIndex(a),
        d = this.findFirstSnapIndex(u);
      if ("number" == typeof m) {
        const _e5 = this.viewItems[m],
          _t6 = Math.floor(_e5.viewMinimumSize / 2);
        n = {
          index: m,
          limitDelta: _e5.visible ? s - _t6 : s + _t6,
          size: _e5.size
        };
      }
      if ("number" == typeof d) {
        const _e6 = this.viewItems[d],
          _t7 = Math.floor(_e6.viewMinimumSize / 2);
        r = {
          index: d,
          limitDelta: _e6.visible ? o + _t7 : o - _t7,
          size: _e6.size
        };
      }
      this.sashDragState = {
        start: e,
        current: e,
        index: i,
        sizes: t,
        minDelta: s,
        maxDelta: o,
        snapBefore: n,
        snapAfter: r
      };
    })(t);
  }
  onSashChange({
    current: e
  }) {
    const {
      index: t,
      start: i,
      sizes: n,
      minDelta: r,
      maxDelta: s,
      snapBefore: o,
      snapAfter: a
    } = this.sashDragState;
    this.sashDragState.current = e;
    const u = e - i;
    this.resize(t, u, n, void 0, void 0, r, s, o, a), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(e) {
    let t = 0;
    for (let i = 0; i < this.sashItems.length; i++) if (t += this.viewItems[i].size, this.sashItems[i].sash === e) return t;
    return 0;
  }
  resize(e, t, i = this.viewItems.map(e => e.size), n, r, s = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY, a, u) {
    if (e < 0 || e >= this.viewItems.length) return 0;
    const c = G(e, -1, -1),
      h = G(e + 1, this.viewItems.length);
    if (r) for (const _e7 of r) R(c, _e7), R(h, _e7);
    if (n) for (const _e8 of n) W(c, _e8), W(h, _e8);
    const l = c.map(e => this.viewItems[e]),
      f = c.map(e => i[e]),
      m = h.map(e => this.viewItems[e]),
      d = h.map(e => i[e]),
      p = c.reduce((e, t) => e + (this.viewItems[t].minimumSize - i[t]), 0),
      v = c.reduce((e, t) => e + (this.viewItems[t].maximumSize - i[t]), 0),
      y = 0 === h.length ? Number.POSITIVE_INFINITY : h.reduce((e, t) => e + (i[t] - this.viewItems[t].minimumSize), 0),
      b = 0 === h.length ? Number.NEGATIVE_INFINITY : h.reduce((e, t) => e + (i[t] - this.viewItems[t].maximumSize), 0),
      g = Math.max(p, b, s),
      z = Math.min(y, v, o);
    let w = !1;
    if (a) {
      const _e9 = this.viewItems[a.index],
        _i4 = t >= a.limitDelta;
      w = _i4 !== _e9.visible, _e9.setVisible(_i4, a.size);
    }
    if (!w && u) {
      const _e10 = this.viewItems[u.index],
        _i5 = t < u.limitDelta;
      w = _i5 !== _e10.visible, _e10.setVisible(_i5, u.size);
    }
    if (w) return this.resize(e, t, i, n, r, s, o);
    for (let _e11 = 0, _i6 = t = S(t, g, z); _e11 < l.length; _e11++) {
      const _t8 = l[_e11],
        _n2 = S(f[_e11] + _i6, _t8.minimumSize, _t8.maximumSize);
      _i6 -= _n2 - f[_e11], _t8.size = _n2;
    }
    for (let _e12 = 0, _i7 = t; _e12 < m.length; _e12++) {
      const _t9 = m[_e12],
        _n3 = S(d[_e12] - _i7, _t9.minimumSize, _t9.maximumSize);
      _i7 += _n3 - d[_e12], _t9.size = _n3;
    }
    return t;
  }
  distributeEmptySpace(e) {
    const t = this.viewItems.reduce((e, t) => e + t.size, 0);
    let i = this.size - t;
    const n = G(this.viewItems.length - 1, -1, -1);
    "number" == typeof e && W(n, e);
    for (let _e13 = 0; 0 !== i && _e13 < n.length; _e13++) {
      const _t10 = this.viewItems[n[_e13]],
        r = S(_t10.size + i, _t10.minimumSize, _t10.maximumSize);
      i -= r - _t10.size, _t10.size = r;
    }
  }
  layoutViews() {
    var _this$onDidChange;
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0);
    let e = 0;
    for (const t of this.viewItems) t.layout(e), e += t.size;
    (_this$onDidChange = this.onDidChange) != null && _this$onDidChange.call(this, this.viewItems.map(e => e.size)), this.sashItems.forEach(e => e.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(e => e.size / this.contentSize));
  }
  updateSashEnablement() {
    let e = !1;
    const t = this.viewItems.map(t => e = t.size - t.minimumSize > 0 || e);
    e = !1;
    const i = this.viewItems.map(t => e = t.maximumSize - t.size > 0 || e),
      n = [...this.viewItems].reverse();
    e = !1;
    const r = n.map(t => e = t.size - t.minimumSize > 0 || e).reverse();
    e = !1;
    const s = n.map(t => e = t.maximumSize - t.size > 0 || e).reverse();
    let o = 0;
    for (let _e14 = 0; _e14 < this.sashItems.length; _e14++) {
      const {
        sash: _n4
      } = this.sashItems[_e14];
      o += this.viewItems[_e14].size;
      const a = !(t[_e14] && s[_e14 + 1]),
        u = !(i[_e14] && r[_e14 + 1]);
      if (a && u) {
        const _i8 = G(_e14, -1, -1),
          _s = G(_e14 + 1, this.viewItems.length),
          _a = this.findFirstSnapIndex(_i8),
          _u = this.findFirstSnapIndex(_s),
          c = "number" == typeof _a && !this.viewItems[_a].visible,
          h = "number" == typeof _u && !this.viewItems[_u].visible;
        c && r[_e14] && (o > 0 || this.startSnappingEnabled) ? _n4.state = be.Minimum : h && t[_e14] && (o < this.contentSize || this.endSnappingEnabled) ? _n4.state = be.Maximum : _n4.state = be.Disabled;
      } else _n4.state = a && !u ? be.Minimum : !a && u ? be.Maximum : be.Enabled;
    }
  }
  findFirstSnapIndex(e) {
    for (const t of e) {
      const _e15 = this.viewItems[t];
      if (_e15.visible && _e15.snap) return t;
    }
    for (const t of e) {
      const _e16 = this.viewItems[t];
      if (_e16.visible && _e16.maximumSize - _e16.minimumSize > 0) return;
      if (!_e16.visible && _e16.snap) return t;
    }
  }
}
class Ne {
  constructor(e) {
    this.size = void 0, this.size = e;
  }
  getPreferredSize() {
    return this.size;
  }
}
class Le {
  constructor(e, t) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = t;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class Oe {
  getPreferredSize() {}
}
class De {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(e) {
    if ("number" == typeof e) this.layoutStrategy = new Ne(e);else if ("string" == typeof e) {
      const t = e.trim();
      if (H(t, "%")) {
        const _e17 = Number(t.slice(0, -1)) / 100;
        this.layoutStrategy = new Le(_e17, this.layoutService);
      } else if (H(t, "px")) {
        const _e18 = Number(t.slice(0, -2)) / 100;
        this.layoutStrategy = new Ne(_e18);
      } else if ("number" == typeof Number.parseFloat(t)) {
        const _e19 = Number.parseFloat(t);
        this.layoutStrategy = new Ne(_e19);
      } else this.layoutStrategy = new Oe();
    } else this.layoutStrategy = new Oe();
  }
  constructor(e, t) {
    var _t$priority;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new Ne(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      const _e20 = t.preferredSize.trim();
      if (H(_e20, "%")) {
        const _t11 = Number(_e20.slice(0, -1)) / 100;
        this.layoutStrategy = new Le(_t11, this.layoutService);
      } else if (H(_e20, "px")) {
        const _t12 = Number(_e20.slice(0, -2));
        this.layoutStrategy = new Ne(_t12);
      } else if ("number" == typeof Number.parseFloat(_e20)) {
        const _t13 = Number.parseFloat(_e20);
        this.layoutStrategy = new Ne(_t13);
      } else this.layoutStrategy = new Oe();
    } else this.layoutStrategy = new Oe();
    this.priority = (_t$priority = t.priority) != null ? _t$priority : Ie.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  layout(e) {}
}
function Me(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
const Pe = a(({
  className: t,
  children: i
}, n) => e.createElement("div", {
  ref: n,
  className: m("split-view-view", L, t)
}, i));
Pe.displayName = "Allotment.Pane";
const Ae = a(({
  children: o,
  className: a,
  maxSize: c = 1 / 0,
  minSize: h = 30,
  proportionalLayout: l = !0,
  separator: f = !0,
  sizes: d,
  defaultSizes: p = d,
  snap: v = !1,
  vertical: y = !1,
  onChange: b,
  onReset: g,
  onVisibleChange: z,
  onDragStart: w,
  onDragEnd: S
}, _) => {
  const x = t(null),
    j = t([]),
    L = t(new Map()),
    P = t(null),
    A = t(new Map()),
    T = t(new $()),
    F = t([]),
    [H, Y] = i(!1);
  "production" !== process.env.NODE_ENV && d && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  const B = s(() => e.Children.toArray(o).filter(e.isValidElement), [o]),
    R = r(e => {
      var _F$current, _P$current;
      const t = (_F$current = F.current) == null ? void 0 : _F$current[e];
      return "number" == typeof (t == null ? void 0 : t.preferredSize) && ((_P$current = P.current) != null && _P$current.resizeView(e, Math.round(t.preferredSize)), !0);
    }, []);
  return u(_, () => ({
    reset: () => {
      if (g) g();else {
        var _P$current2;
        (_P$current2 = P.current) == null ? void 0 : _P$current2.distributeViewSizes();
        for (let e = 0; e < F.current.length; e++) R(e);
      }
    },
    resize: e => {
      var _P$current3;
      (_P$current3 = P.current) == null ? void 0 : _P$current3.resizeViews(e);
    }
  })), k(() => {
    let e = !0;
    p && A.current.size !== p.length && (e = !1, console.warn(`Expected ${p.length} children based on defaultSizes but found ${A.current.size}`)), e && p && (j.current = B.map(e => e.key));
    const t = _extends({
      orientation: y ? ye.Vertical : ye.Horizontal,
      proportionalLayout: l
    }, e && p && {
      descriptor: {
        size: p.reduce((e, t) => e + t, 0),
        views: p.map((e, t) => {
          var _i$minSize, _i$maxSize, _i$priority, _i$snap;
          const i = L.current.get(j.current[t]),
            n = new De(T.current, _extends({
              element: document.createElement("div"),
              minimumSize: (_i$minSize = i == null ? void 0 : i.minSize) != null ? _i$minSize : h,
              maximumSize: (_i$maxSize = i == null ? void 0 : i.maxSize) != null ? _i$maxSize : c,
              priority: (_i$priority = i == null ? void 0 : i.priority) != null ? _i$priority : Ie.Normal
            }, (i == null ? void 0 : i.preferredSize) && {
              preferredSize: i == null ? void 0 : i.preferredSize
            }, {
              snap: (_i$snap = i == null ? void 0 : i.snap) != null ? _i$snap : v
            }));
          return F.current.push(n), {
            container: [...A.current.values()][t],
            size: e,
            view: n
          };
        })
      }
    });
    P.current = new je(x.current, t, b, w, S), P.current.on("sashDragStart", () => {
      var _x$current;
      (_x$current = x.current) == null ? void 0 : _x$current.classList.add("split-view-sash-dragging");
    }), P.current.on("sashDragEnd", () => {
      var _x$current2;
      (_x$current2 = x.current) == null ? void 0 : _x$current2.classList.remove("split-view-sash-dragging");
    }), P.current.on("sashchange", e => {
      if (z && P.current) {
        const _e21 = B.map(e => e.key);
        for (let t = 0; t < _e21.length; t++) {
          const i = L.current.get(_e21[t]);
          void 0 !== (i == null ? void 0 : i.visible) && i.visible !== P.current.isViewVisible(t) && z(t, P.current.isViewVisible(t));
        }
      }
    }), P.current.on("sashreset", e => {
      if (g) g();else {
        var _P$current4;
        if (R(e)) return;
        if (R(e + 1)) return;
        (_P$current4 = P.current) == null ? void 0 : _P$current4.distributeViewSizes();
      }
    });
    const i = P.current;
    return () => {
      i.dispose();
    };
  }, []), k(() => {
    if (H) {
      const e = B.map(e => e.key),
        t = [...j.current],
        i = e.filter(e => !j.current.includes(e)),
        n = e.filter(e => j.current.includes(e)),
        r = j.current.map(t => !e.includes(t));
      for (let _e22 = r.length - 1; _e22 >= 0; _e22--) {
        var _P$current5;
        r[_e22] && ((_P$current5 = P.current) != null && _P$current5.removeView(_e22), t.splice(_e22, 1), F.current.splice(_e22, 1));
      }
      for (const _n5 of i) {
        var _i9$minSize, _i9$maxSize, _i9$priority, _i9$snap, _P$current6;
        const _i9 = L.current.get(_n5),
          _r2 = new De(T.current, _extends({
            element: document.createElement("div"),
            minimumSize: (_i9$minSize = _i9 == null ? void 0 : _i9.minSize) != null ? _i9$minSize : h,
            maximumSize: (_i9$maxSize = _i9 == null ? void 0 : _i9.maxSize) != null ? _i9$maxSize : c,
            priority: (_i9$priority = _i9 == null ? void 0 : _i9.priority) != null ? _i9$priority : Ie.Normal
          }, (_i9 == null ? void 0 : _i9.preferredSize) && {
            preferredSize: _i9 == null ? void 0 : _i9.preferredSize
          }, {
            snap: (_i9$snap = _i9 == null ? void 0 : _i9.snap) != null ? _i9$snap : v
          }));
        (_P$current6 = P.current) != null && _P$current6.addView(A.current.get(_n5), _r2, Se.Distribute, e.findIndex(e => e === _n5)), t.splice(e.findIndex(e => e === _n5), 0, _n5), F.current.splice(e.findIndex(e => e === _n5), 0, _r2);
      }
      for (; !I(e, t);) for (const [_i10, _n6] of e.entries()) {
        const _e23 = t.findIndex(e => e === _n6);
        if (_e23 !== _i10) {
          var _P$current7;
          (_P$current7 = P.current) == null ? void 0 : _P$current7.moveView(A.current.get(_n6), _e23, _i10);
          const _r3 = t[_e23];
          t.splice(_e23, 1), t.splice(_i10, 0, _r3);
          break;
        }
      }
      for (const _t14 of i) {
        var _P$current8;
        const _i11 = e.findIndex(e => e === _t14),
          _n7 = F.current[_i11].preferredSize;
        void 0 !== _n7 && ((_P$current8 = P.current) == null ? void 0 : _P$current8.resizeView(_i11, _n7));
      }
      for (const _t15 of [...i, ...n]) {
        var _P$current9, _P$current10;
        const _i12 = L.current.get(_t15),
          _n8 = e.findIndex(e => e === _t15);
        _i12 && Me(_i12) && void 0 !== _i12.visible && ((_P$current9 = P.current) == null ? void 0 : _P$current9.isViewVisible(_n8)) !== _i12.visible && ((_P$current10 = P.current) == null ? void 0 : _P$current10.setViewVisible(_n8, _i12.visible));
      }
      for (const _t16 of n) {
        const _i13 = L.current.get(_t16),
          _n9 = e.findIndex(e => e === _t16);
        if (_i13 && Me(_i13)) {
          var _P$current11;
          void 0 !== _i13.preferredSize && F.current[_n9].preferredSize !== _i13.preferredSize && (F.current[_n9].preferredSize = _i13.preferredSize);
          let _e24 = !1;
          void 0 !== _i13.minSize && F.current[_n9].minimumSize !== _i13.minSize && (F.current[_n9].minimumSize = _i13.minSize, _e24 = !0), void 0 !== _i13.maxSize && F.current[_n9].maximumSize !== _i13.maxSize && (F.current[_n9].maximumSize = _i13.maxSize, _e24 = !0), _e24 && ((_P$current11 = P.current) == null ? void 0 : _P$current11.layout());
        }
      }
      (i.length > 0 || r.length > 0) && (j.current = e);
    }
  }, [B, H, c, h, v]), n(() => {
    P.current && (P.current.onDidChange = b);
  }, [b]), n(() => {
    P.current && (P.current.onDidDragStart = w);
  }, [w]), n(() => {
    P.current && (P.current.onDidDragEnd = S);
  }, [S]), E({
    ref: x,
    onResize: ({
      width: e,
      height: t
    }) => {
      var _P$current12;
      e && t && ((_P$current12 = P.current) != null && _P$current12.layout(y ? t : e), T.current.setSize(y ? t : e), Y(!0));
    }
  }), k(() => {
    if (!H) {
      var _P$current13;
      const {
        height: e,
        width: t
      } = x.current.getBoundingClientRect();
      (_P$current13 = P.current) != null && _P$current13.layout(y ? e : t), T.current.setSize(y ? e : t), Y(!0);
    }
  }, [H, y]), n(() => {
    C && Te(20);
  }, []), e.createElement("div", {
    ref: x,
    className: m("split-view", y ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": f
    }, V, y ? O : D, {
      [M]: f
    }, a)
  }, e.createElement("div", {
    className: m("split-view-container", N)
  }, e.Children.toArray(o).map(t => {
    if (!e.isValidElement(t)) return null;
    const i = t.key;
    return "Allotment.Pane" === t.type.displayName ? (L.current.set(i, t.props), e.cloneElement(t, {
      key: i,
      ref: e => {
        e ? A.current.set(i, e) : A.current.delete(i);
      }
    })) : e.createElement(Pe, {
      key: i,
      ref: e => {
        e ? A.current.set(i, e) : A.current.delete(i);
      }
    }, t);
  })));
});
function Te(e) {
  const t = S(e, 4, 20),
    i = S(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", t + "px"), document.documentElement.style.setProperty("--sash-hover-size", i + "px"), function (e) {
    ge = e, ze.emit("onDidChangeGlobalSize", e);
  }(t);
}
Ae.displayName = "Allotment";
var Ce = Object.assign(Ae, {
  Pane: Pe
});
export { Ce as Allotment, Ie as LayoutPriority, Te as setSashSize };
