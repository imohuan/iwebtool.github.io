export const css = ".wh-full{width:100%;height:100%}.m-auto{margin:auto}.bottom-0{bottom:0}.right-5{right:5px}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}@media (min-width: 768px){.md\\:overflow-hidden{overflow:hidden}}.absolute{position:absolute}.mt-2{margin-top:.5rem}.block{display:block}.h-full{height:100%}.min-h-\\[500px\\]{min-height:500px}.min-h10{min-height:2.5rem}.w-full{width:100%}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-col{flex-direction:column}.select-text{-webkit-user-select:text;user-select:text}.resize-none{resize:none}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.5rem * var(--un-space-y-reverse))}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded-md{border-radius:.375rem}.p2{padding:.5rem}.pb1{padding-bottom:.25rem}.pb2{padding-bottom:.5rem}.text-xs{font-size:.75rem;line-height:1rem}.text-blue-400{--un-text-opacity:1;color:rgb(96 165 250 / var(--un-text-opacity))}.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity))}.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity))}.hover\\:text-blue-500:hover{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity))}.hover\\:text-gray-700:hover{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity))}.font-bold{font-weight:700}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.hover\\:underline:hover{text-decoration-line:underline}@media (min-width: 768px){.md\\:w80{width:20rem}.md\\:flex-1{flex:1 1 0%}.md\\:flex-row{flex-direction:row}.md\\:space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(.5rem * var(--un-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0px * var(--un-space-y-reverse))}}\n\n";
var ho = Object.defineProperty;
var mo = (e, t, r) => t in e ? ho(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var se = (e, t, r) => (mo(e, typeof t != "symbol" ? t + "" : t, r), r);
var Nr = typeof global == "object" && global && global.Object === Object && global, fo = typeof self == "object" && self && self.Object === Object && self, Ve = Nr || fo || Function("return this")(), be = Ve.Symbol, pr = Object.prototype, So = pr.hasOwnProperty, No = pr.toString, ke = be ? be.toStringTag : void 0;
function po(e) {
  var t = So.call(e, ke), r = e[ke];
  try {
    e[ke] = void 0;
    var o = !0;
  } catch {
  }
  var a = No.call(e);
  return o && (t ? e[ke] = r : delete e[ke]), a;
}
var go = Object.prototype, yo = go.toString;
function Co(e) {
  return yo.call(e);
}
var To = "[object Null]", vo = "[object Undefined]", Rt = be ? be.toStringTag : void 0;
function _e(e) {
  return e == null ? e === void 0 ? vo : To : Rt && Rt in Object(e) ? po(e) : Co(e);
}
function Fe(e) {
  return e != null && typeof e == "object";
}
var bo = "[object Symbol]";
function yt(e) {
  return typeof e == "symbol" || Fe(e) && _e(e) == bo;
}
function Mo(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, a = Array(o); ++r < o; )
    a[r] = t(e[r], r, e);
  return a;
}
var Me = Array.isArray, Go = 1 / 0, Bt = be ? be.prototype : void 0, Ut = Bt ? Bt.toString : void 0;
function gr(e) {
  if (typeof e == "string")
    return e;
  if (Me(e))
    return Mo(e, gr) + "";
  if (yt(e))
    return Ut ? Ut.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Go ? "-0" : t;
}
function oe(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function yr(e) {
  return e;
}
var Vo = "[object AsyncFunction]", Fo = "[object Function]", Ao = "[object GeneratorFunction]", Po = "[object Proxy]";
function Ct(e) {
  if (!oe(e))
    return !1;
  var t = _e(e);
  return t == Fo || t == Ao || t == Vo || t == Po;
}
var at = Ve["__core-js_shared__"], Dt = function() {
  var e = /[^.]+$/.exec(at && at.keys && at.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ko(e) {
  return !!Dt && Dt in e;
}
var xo = Function.prototype, wo = xo.toString;
function Eo(e) {
  if (e != null) {
    try {
      return wo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Lo = /[\\^$.*+?()[\]{}|]/g, Oo = /^\[object .+?Constructor\]$/, _o = Function.prototype, zo = Object.prototype, Io = _o.toString, Ro = zo.hasOwnProperty, Bo = RegExp(
  "^" + Io.call(Ro).replace(Lo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uo(e) {
  if (!oe(e) || ko(e))
    return !1;
  var t = Ct(e) ? Bo : Oo;
  return t.test(Eo(e));
}
function Do(e, t) {
  return e == null ? void 0 : e[t];
}
function Tt(e, t) {
  var r = Do(e, t);
  return Uo(r) ? r : void 0;
}
var Ht = Object.create, Ho = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!oe(t))
      return {};
    if (Ht)
      return Ht(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Cr(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function jo(e, t) {
  var r = -1, o = e.length;
  for (t || (t = Array(o)); ++r < o; )
    t[r] = e[r];
  return t;
}
var Ko = 800, Yo = 16, Jo = Date.now;
function $o(e) {
  var t = 0, r = 0;
  return function() {
    var o = Jo(), a = Yo - (o - r);
    if (r = o, a > 0) {
      if (++t >= Ko)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Zo(e) {
  return function() {
    return e;
  };
}
var Ye = function() {
  try {
    var e = Tt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), qo = Ye ? function(e, t) {
  return Ye(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Zo(t),
    writable: !0
  });
} : yr;
const Wo = qo;
var Xo = $o(Wo), Qo = 9007199254740991, ea = /^(?:0|[1-9]\d*)$/;
function vt(e, t) {
  var r = typeof e;
  return t = t ?? Qo, !!t && (r == "number" || r != "symbol" && ea.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function bt(e, t, r) {
  t == "__proto__" && Ye ? Ye(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function $e(e, t) {
  return e === t || e !== e && t !== t;
}
var ta = Object.prototype, ra = ta.hasOwnProperty;
function Tr(e, t, r) {
  var o = e[t];
  (!(ra.call(e, t) && $e(o, r)) || r === void 0 && !(t in e)) && bt(e, t, r);
}
function oa(e, t, r, o) {
  var a = !r;
  r || (r = {});
  for (var n = -1, l = t.length; ++n < l; ) {
    var f = t[n], N = o ? o(r[f], e[f], f, r, e) : void 0;
    N === void 0 && (N = e[f]), a ? bt(r, f, N) : Tr(r, f, N);
  }
  return r;
}
var jt = Math.max;
function aa(e, t, r) {
  return t = jt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, a = -1, n = jt(o.length - t, 0), l = Array(n); ++a < n; )
      l[a] = o[t + a];
    a = -1;
    for (var f = Array(t + 1); ++a < t; )
      f[a] = o[a];
    return f[t] = r(l), Cr(e, this, f);
  };
}
function vr(e, t) {
  return Xo(aa(e, t, yr), e + "");
}
var ia = 9007199254740991;
function br(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ia;
}
function Mt(e) {
  return e != null && br(e.length) && !Ct(e);
}
function na(e, t, r) {
  if (!oe(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? Mt(r) && vt(t, r.length) : o == "string" && t in r) ? $e(r[t], e) : !1;
}
function sa(e) {
  return vr(function(t, r) {
    var o = -1, a = r.length, n = a > 1 ? r[a - 1] : void 0, l = a > 2 ? r[2] : void 0;
    for (n = e.length > 3 && typeof n == "function" ? (a--, n) : void 0, l && na(r[0], r[1], l) && (n = a < 3 ? void 0 : n, a = 1), t = Object(t); ++o < a; ) {
      var f = r[o];
      f && e(t, f, o, n);
    }
    return t;
  });
}
var la = Object.prototype;
function Mr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || la;
  return e === r;
}
function ca(e, t) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = t(r);
  return o;
}
var ua = "[object Arguments]";
function Kt(e) {
  return Fe(e) && _e(e) == ua;
}
var Gr = Object.prototype, da = Gr.hasOwnProperty, ha = Gr.propertyIsEnumerable, ma = Kt(/* @__PURE__ */ function() {
  return arguments;
}()) ? Kt : function(e) {
  return Fe(e) && da.call(e, "callee") && !ha.call(e, "callee");
};
const ut = ma;
function fa() {
  return !1;
}
var Vr = typeof exports == "object" && exports && !exports.nodeType && exports, Yt = Vr && typeof module == "object" && module && !module.nodeType && module, Sa = Yt && Yt.exports === Vr, Jt = Sa ? Ve.Buffer : void 0, Na = Jt ? Jt.isBuffer : void 0, Fr = Na || fa, pa = "[object Arguments]", ga = "[object Array]", ya = "[object Boolean]", Ca = "[object Date]", Ta = "[object Error]", va = "[object Function]", ba = "[object Map]", Ma = "[object Number]", Ga = "[object Object]", Va = "[object RegExp]", Fa = "[object Set]", Aa = "[object String]", Pa = "[object WeakMap]", ka = "[object ArrayBuffer]", xa = "[object DataView]", wa = "[object Float32Array]", Ea = "[object Float64Array]", La = "[object Int8Array]", Oa = "[object Int16Array]", _a = "[object Int32Array]", za = "[object Uint8Array]", Ia = "[object Uint8ClampedArray]", Ra = "[object Uint16Array]", Ba = "[object Uint32Array]", j = {};
j[wa] = j[Ea] = j[La] = j[Oa] = j[_a] = j[za] = j[Ia] = j[Ra] = j[Ba] = !0;
j[pa] = j[ga] = j[ka] = j[ya] = j[xa] = j[Ca] = j[Ta] = j[va] = j[ba] = j[Ma] = j[Ga] = j[Va] = j[Fa] = j[Aa] = j[Pa] = !1;
function Ua(e) {
  return Fe(e) && br(e.length) && !!j[_e(e)];
}
function Da(e) {
  return function(t) {
    return e(t);
  };
}
var Ar = typeof exports == "object" && exports && !exports.nodeType && exports, Ee = Ar && typeof module == "object" && module && !module.nodeType && module, Ha = Ee && Ee.exports === Ar, it = Ha && Nr.process, $t = function() {
  try {
    var e = Ee && Ee.require && Ee.require("util").types;
    return e || it && it.binding && it.binding("util");
  } catch {
  }
}(), Zt = $t && $t.isTypedArray, Pr = Zt ? Da(Zt) : Ua, ja = Object.prototype, Ka = ja.hasOwnProperty;
function Ya(e, t) {
  var r = Me(e), o = !r && ut(e), a = !r && !o && Fr(e), n = !r && !o && !a && Pr(e), l = r || o || a || n, f = l ? ca(e.length, String) : [], N = f.length;
  for (var M in e)
    (t || Ka.call(e, M)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (M == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (M == "offset" || M == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (M == "buffer" || M == "byteLength" || M == "byteOffset") || // Skip index properties.
    vt(M, N))) && f.push(M);
  return f;
}
function Ja(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function $a(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Za = Object.prototype, qa = Za.hasOwnProperty;
function Wa(e) {
  if (!oe(e))
    return $a(e);
  var t = Mr(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !qa.call(e, o)) || r.push(o);
  return r;
}
function kr(e) {
  return Mt(e) ? Ya(e, !0) : Wa(e);
}
var Xa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Qa = /^\w*$/;
function ei(e, t) {
  if (Me(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || yt(e) ? !0 : Qa.test(e) || !Xa.test(e) || t != null && e in Object(t);
}
var Le = Tt(Object, "create");
function ti() {
  this.__data__ = Le ? Le(null) : {}, this.size = 0;
}
function ri(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var oi = "__lodash_hash_undefined__", ai = Object.prototype, ii = ai.hasOwnProperty;
function ni(e) {
  var t = this.__data__;
  if (Le) {
    var r = t[e];
    return r === oi ? void 0 : r;
  }
  return ii.call(t, e) ? t[e] : void 0;
}
var si = Object.prototype, li = si.hasOwnProperty;
function ci(e) {
  var t = this.__data__;
  return Le ? t[e] !== void 0 : li.call(t, e);
}
var ui = "__lodash_hash_undefined__";
function di(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Le && t === void 0 ? ui : t, this;
}
function Se(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Se.prototype.clear = ti;
Se.prototype.delete = ri;
Se.prototype.get = ni;
Se.prototype.has = ci;
Se.prototype.set = di;
function hi() {
  this.__data__ = [], this.size = 0;
}
function Ze(e, t) {
  for (var r = e.length; r--; )
    if ($e(e[r][0], t))
      return r;
  return -1;
}
var mi = Array.prototype, fi = mi.splice;
function Si(e) {
  var t = this.__data__, r = Ze(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : fi.call(t, r, 1), --this.size, !0;
}
function Ni(e) {
  var t = this.__data__, r = Ze(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function pi(e) {
  return Ze(this.__data__, e) > -1;
}
function gi(e, t) {
  var r = this.__data__, o = Ze(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function de(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
de.prototype.clear = hi;
de.prototype.delete = Si;
de.prototype.get = Ni;
de.prototype.has = pi;
de.prototype.set = gi;
var xr = Tt(Ve, "Map");
function yi() {
  this.size = 0, this.__data__ = {
    hash: new Se(),
    map: new (xr || de)(),
    string: new Se()
  };
}
function Ci(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qe(e, t) {
  var r = e.__data__;
  return Ci(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ti(e) {
  var t = qe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function vi(e) {
  return qe(this, e).get(e);
}
function bi(e) {
  return qe(this, e).has(e);
}
function Mi(e, t) {
  var r = qe(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
fe.prototype.clear = yi;
fe.prototype.delete = Ti;
fe.prototype.get = vi;
fe.prototype.has = bi;
fe.prototype.set = Mi;
var Gi = "Expected a function";
function Gt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Gi);
  var r = function() {
    var o = arguments, a = t ? t.apply(this, o) : o[0], n = r.cache;
    if (n.has(a))
      return n.get(a);
    var l = e.apply(this, o);
    return r.cache = n.set(a, l) || n, l;
  };
  return r.cache = new (Gt.Cache || fe)(), r;
}
Gt.Cache = fe;
var Vi = 500;
function Fi(e) {
  var t = Gt(e, function(o) {
    return r.size === Vi && r.clear(), o;
  }), r = t.cache;
  return t;
}
var Ai = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pi = /\\(\\)?/g, ki = Fi(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ai, function(r, o, a, n) {
    t.push(a ? n.replace(Pi, "$1") : o || r);
  }), t;
});
function xi(e) {
  return e == null ? "" : gr(e);
}
function wr(e, t) {
  return Me(e) ? e : ei(e, t) ? [e] : ki(xi(e));
}
var wi = 1 / 0;
function Er(e) {
  if (typeof e == "string" || yt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -wi ? "-0" : t;
}
function Ei(e, t) {
  t = wr(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[Er(t[r++])];
  return r && r == o ? e : void 0;
}
function Li(e, t, r) {
  var o = e == null ? void 0 : Ei(e, t);
  return o === void 0 ? r : o;
}
var Lr = Ja(Object.getPrototypeOf, Object), Oi = "[object Object]", _i = Function.prototype, zi = Object.prototype, Or = _i.toString, Ii = zi.hasOwnProperty, Ri = Or.call(Object);
function Bi(e) {
  if (!Fe(e) || _e(e) != Oi)
    return !1;
  var t = Lr(e);
  if (t === null)
    return !0;
  var r = Ii.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Or.call(r) == Ri;
}
function Ui() {
  this.__data__ = new de(), this.size = 0;
}
function Di(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Hi(e) {
  return this.__data__.get(e);
}
function ji(e) {
  return this.__data__.has(e);
}
var Ki = 200;
function Yi(e, t) {
  var r = this.__data__;
  if (r instanceof de) {
    var o = r.__data__;
    if (!xr || o.length < Ki - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new fe(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Ae(e) {
  var t = this.__data__ = new de(e);
  this.size = t.size;
}
Ae.prototype.clear = Ui;
Ae.prototype.delete = Di;
Ae.prototype.get = Hi;
Ae.prototype.has = ji;
Ae.prototype.set = Yi;
var _r = typeof exports == "object" && exports && !exports.nodeType && exports, qt = _r && typeof module == "object" && module && !module.nodeType && module, Ji = qt && qt.exports === _r, Wt = Ji ? Ve.Buffer : void 0, Xt = Wt ? Wt.allocUnsafe : void 0;
function $i(e, t) {
  if (t)
    return e.slice();
  var r = e.length, o = Xt ? Xt(r) : new e.constructor(r);
  return e.copy(o), o;
}
var Qt = Ve.Uint8Array;
function Zi(e) {
  var t = new e.constructor(e.byteLength);
  return new Qt(t).set(new Qt(e)), t;
}
function qi(e, t) {
  var r = t ? Zi(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function Wi(e) {
  return typeof e.constructor == "function" && !Mr(e) ? Ho(Lr(e)) : {};
}
function Xi(e) {
  return function(t, r, o) {
    for (var a = -1, n = Object(t), l = o(t), f = l.length; f--; ) {
      var N = l[e ? f : ++a];
      if (r(n[N], N, n) === !1)
        break;
    }
    return t;
  };
}
var Qi = Xi();
function dt(e, t, r) {
  (r !== void 0 && !$e(e[t], r) || r === void 0 && !(t in e)) && bt(e, t, r);
}
function en(e) {
  return Fe(e) && Mt(e);
}
function ht(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function tn(e) {
  return oa(e, kr(e));
}
function rn(e, t, r, o, a, n, l) {
  var f = ht(e, r), N = ht(t, r), M = l.get(N);
  if (M) {
    dt(e, r, M);
    return;
  }
  var G = n ? n(f, N, r + "", e, t, l) : void 0, T = G === void 0;
  if (T) {
    var z = Me(N), _ = !z && Fr(N), p = !z && !_ && Pr(N);
    G = N, z || _ || p ? Me(f) ? G = f : en(f) ? G = jo(f) : _ ? (T = !1, G = $i(N, !0)) : p ? (T = !1, G = qi(N, !0)) : G = [] : Bi(N) || ut(N) ? (G = f, ut(f) ? G = tn(f) : (!oe(f) || Ct(f)) && (G = Wi(N))) : T = !1;
  }
  T && (l.set(N, G), a(G, N, o, n, l), l.delete(N)), dt(e, r, G);
}
function Vt(e, t, r, o, a) {
  e !== t && Qi(t, function(n, l) {
    if (a || (a = new Ae()), oe(n))
      rn(e, t, l, r, Vt, o, a);
    else {
      var f = o ? o(ht(e, l), n, l + "", e, t, a) : void 0;
      f === void 0 && (f = n), dt(e, l, f);
    }
  }, kr);
}
function zr(e, t, r, o, a, n) {
  return oe(e) && oe(t) && (n.set(t, e), Vt(e, t, void 0, zr, n), n.delete(t)), e;
}
var on = sa(function(e, t, r, o) {
  Vt(e, t, r, o);
});
const an = on;
var ge = vr(function(e) {
  return e.push(void 0, zr), Cr(an, void 0, e);
});
function nn(e, t, r, o) {
  if (!oe(e))
    return e;
  t = wr(t, e);
  for (var a = -1, n = t.length, l = n - 1, f = e; f != null && ++a < n; ) {
    var N = Er(t[a]), M = r;
    if (N === "__proto__" || N === "constructor" || N === "prototype")
      return e;
    if (a != l) {
      var G = f[N];
      M = o ? o(G, N, f) : void 0, M === void 0 && (M = oe(G) ? G : vt(t[a + 1]) ? [] : {});
    }
    Tr(f, N, M), f = f[N];
  }
  return e;
}
function sn(e, t, r) {
  return e == null ? e : nn(e, t, r);
}
function er(e, t) {
  var r = document.createElement("a");
  r.href = window.URL.createObjectURL(e), r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
function Ir(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ln } = Object.prototype, { getPrototypeOf: Ft } = Object, We = /* @__PURE__ */ ((e) => (t) => {
  const r = ln.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ie = (e) => (e = e.toLowerCase(), (t) => We(t) === e), Xe = (e) => (t) => typeof t === e, { isArray: Pe } = Array, Oe = Xe("undefined");
function cn(e) {
  return e !== null && !Oe(e) && e.constructor !== null && !Oe(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Rr = ie("ArrayBuffer");
function un(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Rr(e.buffer), t;
}
const dn = Xe("string"), te = Xe("function"), Br = Xe("number"), Qe = (e) => e !== null && typeof e == "object", hn = (e) => e === !0 || e === !1, He = (e) => {
  if (We(e) !== "object")
    return !1;
  const t = Ft(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, mn = ie("Date"), fn = ie("File"), Sn = ie("Blob"), Nn = ie("FileList"), pn = (e) => Qe(e) && te(e.pipe), gn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || te(e.append) && ((t = We(e)) === "formdata" || // detect form-data instance
  t === "object" && te(e.toString) && e.toString() === "[object FormData]"));
}, yn = ie("URLSearchParams"), Cn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ze(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, a;
  if (typeof e != "object" && (e = [e]), Pe(e))
    for (o = 0, a = e.length; o < a; o++)
      t.call(null, e[o], o, e);
  else {
    const n = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = n.length;
    let f;
    for (o = 0; o < l; o++)
      f = n[o], t.call(null, e[f], f, e);
  }
}
function Ur(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, a;
  for (; o-- > 0; )
    if (a = r[o], t === a.toLowerCase())
      return a;
  return null;
}
const Dr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Hr = (e) => !Oe(e) && e !== Dr;
function mt() {
  const { caseless: e } = Hr(this) && this || {}, t = {}, r = (o, a) => {
    const n = e && Ur(t, a) || a;
    He(t[n]) && He(o) ? t[n] = mt(t[n], o) : He(o) ? t[n] = mt({}, o) : Pe(o) ? t[n] = o.slice() : t[n] = o;
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && ze(arguments[o], r);
  return t;
}
const Tn = (e, t, r, { allOwnKeys: o } = {}) => (ze(t, (a, n) => {
  r && te(a) ? e[n] = Ir(a, r) : e[n] = a;
}, { allOwnKeys: o }), e), vn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), bn = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Mn = (e, t, r, o) => {
  let a, n, l;
  const f = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), n = a.length; n-- > 0; )
      l = a[n], (!o || o(l, e, t)) && !f[l] && (t[l] = e[l], f[l] = !0);
    e = r !== !1 && Ft(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Gn = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, Vn = (e) => {
  if (!e)
    return null;
  if (Pe(e))
    return e;
  let t = e.length;
  if (!Br(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Fn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ft(Uint8Array)), An = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = o.next()) && !a.done; ) {
    const n = a.value;
    t.call(e, n[0], n[1]);
  }
}, Pn = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, kn = ie("HTMLFormElement"), xn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, a) {
    return o.toUpperCase() + a;
  }
), tr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), wn = ie("RegExp"), jr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  ze(r, (a, n) => {
    let l;
    (l = t(a, n, e)) !== !1 && (o[n] = l || a);
  }), Object.defineProperties(e, o);
}, En = (e) => {
  jr(e, (t, r) => {
    if (te(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (te(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ln = (e, t) => {
  const r = {}, o = (a) => {
    a.forEach((n) => {
      r[n] = !0;
    });
  };
  return Pe(e) ? o(e) : o(String(e).split(t)), r;
}, On = () => {
}, _n = (e, t) => (e = +e, Number.isFinite(e) ? e : t), nt = "abcdefghijklmnopqrstuvwxyz", rr = "0123456789", Kr = {
  DIGIT: rr,
  ALPHA: nt,
  ALPHA_DIGIT: nt + nt.toUpperCase() + rr
}, zn = (e = 16, t = Kr.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = t;
  for (; e--; )
    r += t[Math.random() * o | 0];
  return r;
};
function In(e) {
  return !!(e && te(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Rn = (e) => {
  const t = new Array(10), r = (o, a) => {
    if (Qe(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[a] = o;
        const n = Pe(o) ? [] : {};
        return ze(o, (l, f) => {
          const N = r(l, a + 1);
          !Oe(N) && (n[f] = N);
        }), t[a] = void 0, n;
      }
    }
    return o;
  };
  return r(e, 0);
}, Bn = ie("AsyncFunction"), Un = (e) => e && (Qe(e) || te(e)) && te(e.then) && te(e.catch), b = {
  isArray: Pe,
  isArrayBuffer: Rr,
  isBuffer: cn,
  isFormData: gn,
  isArrayBufferView: un,
  isString: dn,
  isNumber: Br,
  isBoolean: hn,
  isObject: Qe,
  isPlainObject: He,
  isUndefined: Oe,
  isDate: mn,
  isFile: fn,
  isBlob: Sn,
  isRegExp: wn,
  isFunction: te,
  isStream: pn,
  isURLSearchParams: yn,
  isTypedArray: Fn,
  isFileList: Nn,
  forEach: ze,
  merge: mt,
  extend: Tn,
  trim: Cn,
  stripBOM: vn,
  inherits: bn,
  toFlatObject: Mn,
  kindOf: We,
  kindOfTest: ie,
  endsWith: Gn,
  toArray: Vn,
  forEachEntry: An,
  matchAll: Pn,
  isHTMLForm: kn,
  hasOwnProperty: tr,
  hasOwnProp: tr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jr,
  freezeMethods: En,
  toObjectSet: Ln,
  toCamelCase: xn,
  noop: On,
  toFiniteNumber: _n,
  findKey: Ur,
  global: Dr,
  isContextDefined: Hr,
  ALPHABET: Kr,
  generateString: zn,
  isSpecCompliantForm: In,
  toJSONObject: Rn,
  isAsyncFn: Bn,
  isThenable: Un
};
function D(e, t, r, o, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), a && (this.response = a);
}
b.inherits(D, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: b.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Yr = D.prototype, Jr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Jr[e] = { value: e };
});
Object.defineProperties(D, Jr);
Object.defineProperty(Yr, "isAxiosError", { value: !0 });
D.from = (e, t, r, o, a, n) => {
  const l = Object.create(Yr);
  return b.toFlatObject(e, l, function(N) {
    return N !== Error.prototype;
  }, (f) => f !== "isAxiosError"), D.call(l, e.message, t, r, o, a), l.cause = e, l.name = e.name, n && Object.assign(l, n), l;
};
const Dn = null;
function ft(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function $r(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function or(e, t, r) {
  return e ? e.concat(t).map(function(a, n) {
    return a = $r(a), !r && n ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function Hn(e) {
  return b.isArray(e) && !e.some(ft);
}
const jn = b.toFlatObject(b, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function et(e, t, r) {
  if (!b.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = b.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, g) {
    return !b.isUndefined(g[v]);
  });
  const o = r.metaTokens, a = r.visitor || G, n = r.dots, l = r.indexes, N = (r.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(t);
  if (!b.isFunction(a))
    throw new TypeError("visitor must be a function");
  function M(p) {
    if (p === null)
      return "";
    if (b.isDate(p))
      return p.toISOString();
    if (!N && b.isBlob(p))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(p) || b.isTypedArray(p) ? N && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function G(p, v, g) {
    let V = p;
    if (p && !g && typeof p == "object") {
      if (b.endsWith(v, "{}"))
        v = o ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (b.isArray(p) && Hn(p) || (b.isFileList(p) || b.endsWith(v, "[]")) && (V = b.toArray(p)))
        return v = $r(v), V.forEach(function(F, P) {
          !(b.isUndefined(F) || F === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? or([v], P, n) : l === null ? v : v + "[]",
            M(F)
          );
        }), !1;
    }
    return ft(p) ? !0 : (t.append(or(g, v, n), M(p)), !1);
  }
  const T = [], z = Object.assign(jn, {
    defaultVisitor: G,
    convertValue: M,
    isVisitable: ft
  });
  function _(p, v) {
    if (!b.isUndefined(p)) {
      if (T.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      T.push(p), b.forEach(p, function(V, A) {
        (!(b.isUndefined(V) || V === null) && a.call(
          t,
          V,
          b.isString(A) ? A.trim() : A,
          v,
          z
        )) === !0 && _(V, v ? v.concat(A) : [A]);
      }), T.pop();
    }
  }
  if (!b.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function ar(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function At(e, t) {
  this._pairs = [], e && et(e, this, t);
}
const Zr = At.prototype;
Zr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Zr.toString = function(t) {
  const r = t ? function(o) {
    return t.call(this, o, ar);
  } : ar;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function Kn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function qr(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || Kn, a = r && r.serialize;
  let n;
  if (a ? n = a(t, r) : n = b.isURLSearchParams(t) ? t.toString() : new At(t, r).toString(o), n) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return e;
}
class ir {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    b.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const Wr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yn = typeof URLSearchParams < "u" ? URLSearchParams : At, Jn = typeof FormData < "u" ? FormData : null, $n = typeof Blob < "u" ? Blob : null, Zn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Yn,
    FormData: Jn,
    Blob: $n
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xr = typeof window < "u" && typeof document < "u", qn = ((e) => Xr && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Wn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xr,
  hasStandardBrowserEnv: qn,
  hasStandardBrowserWebWorkerEnv: Wn
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...Xn,
  ...Zn
};
function Qn(e, t) {
  return et(e, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, a, n) {
      return ae.isNode && b.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function es(e) {
  return b.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ts(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const a = r.length;
  let n;
  for (o = 0; o < a; o++)
    n = r[o], t[n] = e[n];
  return t;
}
function Qr(e) {
  function t(r, o, a, n) {
    let l = r[n++];
    if (l === "__proto__")
      return !0;
    const f = Number.isFinite(+l), N = n >= r.length;
    return l = !l && b.isArray(a) ? a.length : l, N ? (b.hasOwnProp(a, l) ? a[l] = [a[l], o] : a[l] = o, !f) : ((!a[l] || !b.isObject(a[l])) && (a[l] = []), t(r, o, a[l], n) && b.isArray(a[l]) && (a[l] = ts(a[l])), !f);
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const r = {};
    return b.forEachEntry(e, (o, a) => {
      t(es(o), a, r, 0);
    }), r;
  }
  return null;
}
function rs(e, t, r) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const Pt = {
  transitional: Wr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const o = r.getContentType() || "", a = o.indexOf("application/json") > -1, n = b.isObject(t);
    if (n && b.isHTMLForm(t) && (t = new FormData(t)), b.isFormData(t))
      return a && a ? JSON.stringify(Qr(t)) : t;
    if (b.isArrayBuffer(t) || b.isBuffer(t) || b.isStream(t) || b.isFile(t) || b.isBlob(t))
      return t;
    if (b.isArrayBufferView(t))
      return t.buffer;
    if (b.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let f;
    if (n) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Qn(t, this.formSerializer).toString();
      if ((f = b.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const N = this.env && this.env.FormData;
        return et(
          f ? { "files[]": t } : t,
          N && new N(),
          this.formSerializer
        );
      }
    }
    return n || a ? (r.setContentType("application/json", !1), rs(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Pt.transitional, o = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (t && b.isString(t) && (o && !this.responseType || a)) {
      const l = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (f) {
        if (l)
          throw f.name === "SyntaxError" ? D.from(f, D.ERR_BAD_RESPONSE, this, null, this.response) : f;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ae.classes.FormData,
    Blob: ae.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
b.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Pt.headers[e] = {};
});
const kt = Pt, os = b.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), as = (e) => {
  const t = {};
  let r, o, a;
  return e && e.split(`
`).forEach(function(l) {
    a = l.indexOf(":"), r = l.substring(0, a).trim().toLowerCase(), o = l.substring(a + 1).trim(), !(!r || t[r] && os[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o);
  }), t;
}, nr = Symbol("internals");
function xe(e) {
  return e && String(e).trim().toLowerCase();
}
function je(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(je) : String(e);
}
function is(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const ns = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function st(e, t, r, o, a) {
  if (b.isFunction(o))
    return o.call(this, t, r);
  if (a && (t = r), !!b.isString(t)) {
    if (b.isString(o))
      return t.indexOf(o) !== -1;
    if (b.isRegExp(o))
      return o.test(t);
  }
}
function ss(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function ls(e, t) {
  const r = b.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(a, n, l) {
        return this[o].call(this, t, a, n, l);
      },
      configurable: !0
    });
  });
}
class tt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, o) {
    const a = this;
    function n(f, N, M) {
      const G = xe(N);
      if (!G)
        throw new Error("header name must be a non-empty string");
      const T = b.findKey(a, G);
      (!T || a[T] === void 0 || M === !0 || M === void 0 && a[T] !== !1) && (a[T || N] = je(f));
    }
    const l = (f, N) => b.forEach(f, (M, G) => n(M, G, N));
    return b.isPlainObject(t) || t instanceof this.constructor ? l(t, r) : b.isString(t) && (t = t.trim()) && !ns(t) ? l(as(t), r) : t != null && n(r, t, o), this;
  }
  get(t, r) {
    if (t = xe(t), t) {
      const o = b.findKey(this, t);
      if (o) {
        const a = this[o];
        if (!r)
          return a;
        if (r === !0)
          return is(a);
        if (b.isFunction(r))
          return r.call(this, a, o);
        if (b.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = xe(t), t) {
      const o = b.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || st(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let a = !1;
    function n(l) {
      if (l = xe(l), l) {
        const f = b.findKey(o, l);
        f && (!r || st(o, o[f], f, r)) && (delete o[f], a = !0);
      }
    }
    return b.isArray(t) ? t.forEach(n) : n(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let o = r.length, a = !1;
    for (; o--; ) {
      const n = r[o];
      (!t || st(this, this[n], n, t, !0)) && (delete this[n], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, o = {};
    return b.forEach(this, (a, n) => {
      const l = b.findKey(o, n);
      if (l) {
        r[l] = je(a), delete r[n];
        return;
      }
      const f = t ? ss(n) : String(n).trim();
      f !== n && delete r[n], r[f] = je(a), o[f] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return b.forEach(this, (o, a) => {
      o != null && o !== !1 && (r[a] = t && b.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const o = new this(t);
    return r.forEach((a) => o.set(a)), o;
  }
  static accessor(t) {
    const o = (this[nr] = this[nr] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function n(l) {
      const f = xe(l);
      o[f] || (ls(a, l), o[f] = !0);
    }
    return b.isArray(t) ? t.forEach(n) : n(t), this;
  }
}
tt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.reduceDescriptors(tt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[r] = o;
    }
  };
});
b.freezeMethods(tt);
const ue = tt;
function lt(e, t) {
  const r = this || kt, o = t || r, a = ue.from(o.headers);
  let n = o.data;
  return b.forEach(e, function(f) {
    n = f.call(r, n, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), n;
}
function eo(e) {
  return !!(e && e.__CANCEL__);
}
function Ie(e, t, r) {
  D.call(this, e ?? "canceled", D.ERR_CANCELED, t, r), this.name = "CanceledError";
}
b.inherits(Ie, D, {
  __CANCEL__: !0
});
function cs(e, t, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : t(new D(
    "Request failed with status code " + r.status,
    [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const us = ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, o, a, n) {
      const l = [e + "=" + encodeURIComponent(t)];
      b.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), b.isString(o) && l.push("path=" + o), b.isString(a) && l.push("domain=" + a), n === !0 && l.push("secure"), document.cookie = l.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ds(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hs(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function to(e, t) {
  return e && !ds(t) ? hs(e, t) : t;
}
const ms = ae.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let o;
    function a(n) {
      let l = n;
      return t && (r.setAttribute("href", l), l = r.href), r.setAttribute("href", l), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return o = a(window.location.href), function(l) {
      const f = b.isString(l) ? a(l) : l;
      return f.protocol === o.protocol && f.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function fs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ss(e, t) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let a = 0, n = 0, l;
  return t = t !== void 0 ? t : 1e3, function(N) {
    const M = Date.now(), G = o[n];
    l || (l = M), r[a] = N, o[a] = M;
    let T = n, z = 0;
    for (; T !== a; )
      z += r[T++], T = T % e;
    if (a = (a + 1) % e, a === n && (n = (n + 1) % e), M - l < t)
      return;
    const _ = G && M - G;
    return _ ? Math.round(z * 1e3 / _) : void 0;
  };
}
function sr(e, t) {
  let r = 0;
  const o = Ss(50, 250);
  return (a) => {
    const n = a.loaded, l = a.lengthComputable ? a.total : void 0, f = n - r, N = o(f), M = n <= l;
    r = n;
    const G = {
      loaded: n,
      total: l,
      progress: l ? n / l : void 0,
      bytes: f,
      rate: N || void 0,
      estimated: N && l && M ? (l - n) / N : void 0,
      event: a
    };
    G[t ? "download" : "upload"] = !0, e(G);
  };
}
const Ns = typeof XMLHttpRequest < "u", ps = Ns && function(e) {
  return new Promise(function(r, o) {
    let a = e.data;
    const n = ue.from(e.headers).normalize();
    let { responseType: l, withXSRFToken: f } = e, N;
    function M() {
      e.cancelToken && e.cancelToken.unsubscribe(N), e.signal && e.signal.removeEventListener("abort", N);
    }
    let G;
    if (b.isFormData(a)) {
      if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
        n.setContentType(!1);
      else if ((G = n.getContentType()) !== !1) {
        const [v, ...g] = G ? G.split(";").map((V) => V.trim()).filter(Boolean) : [];
        n.setContentType([v || "multipart/form-data", ...g].join("; "));
      }
    }
    let T = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      n.set("Authorization", "Basic " + btoa(v + ":" + g));
    }
    const z = to(e.baseURL, e.url);
    T.open(e.method.toUpperCase(), qr(z, e.params, e.paramsSerializer), !0), T.timeout = e.timeout;
    function _() {
      if (!T)
        return;
      const v = ue.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), V = {
        data: !l || l === "text" || l === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: v,
        config: e,
        request: T
      };
      cs(function(F) {
        r(F), M();
      }, function(F) {
        o(F), M();
      }, V), T = null;
    }
    if ("onloadend" in T ? T.onloadend = _ : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, T.onabort = function() {
      T && (o(new D("Request aborted", D.ECONNABORTED, e, T)), T = null);
    }, T.onerror = function() {
      o(new D("Network Error", D.ERR_NETWORK, e, T)), T = null;
    }, T.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const V = e.transitional || Wr;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), o(new D(
        g,
        V.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
        e,
        T
      )), T = null;
    }, ae.hasStandardBrowserEnv && (f && b.isFunction(f) && (f = f(e)), f || f !== !1 && ms(z))) {
      const v = e.xsrfHeaderName && e.xsrfCookieName && us.read(e.xsrfCookieName);
      v && n.set(e.xsrfHeaderName, v);
    }
    a === void 0 && n.setContentType(null), "setRequestHeader" in T && b.forEach(n.toJSON(), function(g, V) {
      T.setRequestHeader(V, g);
    }), b.isUndefined(e.withCredentials) || (T.withCredentials = !!e.withCredentials), l && l !== "json" && (T.responseType = e.responseType), typeof e.onDownloadProgress == "function" && T.addEventListener("progress", sr(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && T.upload && T.upload.addEventListener("progress", sr(e.onUploadProgress)), (e.cancelToken || e.signal) && (N = (v) => {
      T && (o(!v || v.type ? new Ie(null, e, T) : v), T.abort(), T = null);
    }, e.cancelToken && e.cancelToken.subscribe(N), e.signal && (e.signal.aborted ? N() : e.signal.addEventListener("abort", N)));
    const p = fs(z);
    if (p && ae.protocols.indexOf(p) === -1) {
      o(new D("Unsupported protocol " + p + ":", D.ERR_BAD_REQUEST, e));
      return;
    }
    T.send(a || null);
  });
}, St = {
  http: Dn,
  xhr: ps
};
b.forEach(St, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const lr = (e) => `- ${e}`, gs = (e) => b.isFunction(e) || e === null || e === !1, ro = {
  getAdapter: (e) => {
    e = b.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, o;
    const a = {};
    for (let n = 0; n < t; n++) {
      r = e[n];
      let l;
      if (o = r, !gs(r) && (o = St[(l = String(r)).toLowerCase()], o === void 0))
        throw new D(`Unknown adapter '${l}'`);
      if (o)
        break;
      a[l || "#" + n] = o;
    }
    if (!o) {
      const n = Object.entries(a).map(
        ([f, N]) => `adapter ${f} ` + (N === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? n.length > 1 ? `since :
` + n.map(lr).join(`
`) : " " + lr(n[0]) : "as no adapter specified";
      throw new D(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: St
};
function ct(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ie(null, e);
}
function cr(e) {
  return ct(e), e.headers = ue.from(e.headers), e.data = lt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ro.getAdapter(e.adapter || kt.adapter)(e).then(function(o) {
    return ct(e), o.data = lt.call(
      e,
      e.transformResponse,
      o
    ), o.headers = ue.from(o.headers), o;
  }, function(o) {
    return eo(o) || (ct(e), o && o.response && (o.response.data = lt.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = ue.from(o.response.headers))), Promise.reject(o);
  });
}
const ur = (e) => e instanceof ue ? e.toJSON() : e;
function Ge(e, t) {
  t = t || {};
  const r = {};
  function o(M, G, T) {
    return b.isPlainObject(M) && b.isPlainObject(G) ? b.merge.call({ caseless: T }, M, G) : b.isPlainObject(G) ? b.merge({}, G) : b.isArray(G) ? G.slice() : G;
  }
  function a(M, G, T) {
    if (b.isUndefined(G)) {
      if (!b.isUndefined(M))
        return o(void 0, M, T);
    } else
      return o(M, G, T);
  }
  function n(M, G) {
    if (!b.isUndefined(G))
      return o(void 0, G);
  }
  function l(M, G) {
    if (b.isUndefined(G)) {
      if (!b.isUndefined(M))
        return o(void 0, M);
    } else
      return o(void 0, G);
  }
  function f(M, G, T) {
    if (T in t)
      return o(M, G);
    if (T in e)
      return o(void 0, M);
  }
  const N = {
    url: n,
    method: n,
    data: n,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: f,
    headers: (M, G) => a(ur(M), ur(G), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, e, t)), function(G) {
    const T = N[G] || a, z = T(e[G], t[G], G);
    b.isUndefined(z) && T !== f || (r[G] = z);
  }), r;
}
const oo = "1.6.5", xt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  xt[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const dr = {};
xt.transitional = function(t, r, o) {
  function a(n, l) {
    return "[Axios v" + oo + "] Transitional option '" + n + "'" + l + (o ? ". " + o : "");
  }
  return (n, l, f) => {
    if (t === !1)
      throw new D(
        a(l, " has been removed" + (r ? " in " + r : "")),
        D.ERR_DEPRECATED
      );
    return r && !dr[l] && (dr[l] = !0, console.warn(
      a(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(n, l, f) : !0;
  };
};
function ys(e, t, r) {
  if (typeof e != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let a = o.length;
  for (; a-- > 0; ) {
    const n = o[a], l = t[n];
    if (l) {
      const f = e[n], N = f === void 0 || l(f, n, e);
      if (N !== !0)
        throw new D("option " + n + " must be " + N, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new D("Unknown option " + n, D.ERR_BAD_OPTION);
  }
}
const Nt = {
  assertOptions: ys,
  validators: xt
}, he = Nt.validators;
class Je {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ir(),
      response: new ir()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ge(this.defaults, r);
    const { transitional: o, paramsSerializer: a, headers: n } = r;
    o !== void 0 && Nt.assertOptions(o, {
      silentJSONParsing: he.transitional(he.boolean),
      forcedJSONParsing: he.transitional(he.boolean),
      clarifyTimeoutError: he.transitional(he.boolean)
    }, !1), a != null && (b.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : Nt.assertOptions(a, {
      encode: he.function,
      serialize: he.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let l = n && b.merge(
      n.common,
      n[r.method]
    );
    n && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete n[p];
      }
    ), r.headers = ue.concat(l, n);
    const f = [];
    let N = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (N = N && v.synchronous, f.unshift(v.fulfilled, v.rejected));
    });
    const M = [];
    this.interceptors.response.forEach(function(v) {
      M.push(v.fulfilled, v.rejected);
    });
    let G, T = 0, z;
    if (!N) {
      const p = [cr.bind(this), void 0];
      for (p.unshift.apply(p, f), p.push.apply(p, M), z = p.length, G = Promise.resolve(r); T < z; )
        G = G.then(p[T++], p[T++]);
      return G;
    }
    z = f.length;
    let _ = r;
    for (T = 0; T < z; ) {
      const p = f[T++], v = f[T++];
      try {
        _ = p(_);
      } catch (g) {
        v.call(this, g);
        break;
      }
    }
    try {
      G = cr.call(this, _);
    } catch (p) {
      return Promise.reject(p);
    }
    for (T = 0, z = M.length; T < z; )
      G = G.then(M[T++], M[T++]);
    return G;
  }
  getUri(t) {
    t = Ge(this.defaults, t);
    const r = to(t.baseURL, t.url);
    return qr(r, t.params, t.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(t) {
  Je.prototype[t] = function(r, o) {
    return this.request(Ge(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(t) {
  function r(o) {
    return function(n, l, f) {
      return this.request(Ge(f || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: n,
        data: l
      }));
    };
  }
  Je.prototype[t] = r(), Je.prototype[t + "Form"] = r(!0);
});
const Ke = Je;
class wt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(n) {
      r = n;
    });
    const o = this;
    this.promise.then((a) => {
      if (!o._listeners)
        return;
      let n = o._listeners.length;
      for (; n-- > 0; )
        o._listeners[n](a);
      o._listeners = null;
    }), this.promise.then = (a) => {
      let n;
      const l = new Promise((f) => {
        o.subscribe(f), n = f;
      }).then(a);
      return l.cancel = function() {
        o.unsubscribe(n);
      }, l;
    }, t(function(n, l, f) {
      o.reason || (o.reason = new Ie(n, l, f), r(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new wt(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const Cs = wt;
function Ts(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function vs(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const pt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(pt).forEach(([e, t]) => {
  pt[t] = e;
});
const bs = pt;
function ao(e) {
  const t = new Ke(e), r = Ir(Ke.prototype.request, t);
  return b.extend(r, Ke.prototype, t, { allOwnKeys: !0 }), b.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return ao(Ge(e, a));
  }, r;
}
const Z = ao(kt);
Z.Axios = Ke;
Z.CanceledError = Ie;
Z.CancelToken = Cs;
Z.isCancel = eo;
Z.VERSION = oo;
Z.toFormData = et;
Z.AxiosError = D;
Z.Cancel = Z.CanceledError;
Z.all = function(t) {
  return Promise.all(t);
};
Z.spread = Ts;
Z.isAxiosError = vs;
Z.mergeConfig = Ge;
Z.AxiosHeaders = ue;
Z.formToJSON = (e) => Qr(b.isHTMLForm(e) ? new FormData(e) : e);
Z.getAdapter = ro.getAdapter;
Z.HttpStatusCode = bs;
Z.default = Z;
function Ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Gs = /* @__PURE__ */ new Set([
  "ENOTFOUND",
  "ENETUNREACH",
  // SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
  "UNABLE_TO_GET_ISSUER_CERT",
  "UNABLE_TO_GET_CRL",
  "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
  "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
  "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
  "CERT_SIGNATURE_FAILURE",
  "CRL_SIGNATURE_FAILURE",
  "CERT_NOT_YET_VALID",
  "CERT_HAS_EXPIRED",
  "CRL_NOT_YET_VALID",
  "CRL_HAS_EXPIRED",
  "ERROR_IN_CERT_NOT_BEFORE_FIELD",
  "ERROR_IN_CERT_NOT_AFTER_FIELD",
  "ERROR_IN_CRL_LAST_UPDATE_FIELD",
  "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
  "OUT_OF_MEM",
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "SELF_SIGNED_CERT_IN_CHAIN",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "CERT_CHAIN_TOO_LONG",
  "CERT_REVOKED",
  "INVALID_CA",
  "PATH_LENGTH_EXCEEDED",
  "INVALID_PURPOSE",
  "CERT_UNTRUSTED",
  "CERT_REJECTED",
  "HOSTNAME_MISMATCH"
]);
var Vs = (e) => !Gs.has(e && e.code);
const Fs = /* @__PURE__ */ Ms(Vs), io = "axios-retry";
function no(e) {
  const t = ["ERR_CANCELED", "ECONNABORTED"];
  return e.response || !e.code || t.includes(e.code) ? !1 : Fs(e);
}
const so = ["get", "head", "options"], As = so.concat(["put", "delete"]);
function Et(e) {
  return e.code !== "ECONNABORTED" && (!e.response || e.response.status >= 500 && e.response.status <= 599);
}
function Ps(e) {
  var t;
  return (t = e.config) != null && t.method ? Et(e) && so.indexOf(e.config.method) !== -1 : !1;
}
function lo(e) {
  var t;
  return (t = e.config) != null && t.method ? Et(e) && As.indexOf(e.config.method) !== -1 : !1;
}
function co(e) {
  return no(e) || lo(e);
}
function ks() {
  return 0;
}
function xs(e = 0, t = void 0, r = 100) {
  const o = 2 ** e * r, a = o * 0.2 * Math.random();
  return o + a;
}
const ws = {
  retries: 3,
  retryCondition: co,
  retryDelay: ks,
  shouldResetTimeout: !1,
  onRetry: () => {
  }
};
function Es(e, t) {
  return { ...ws, ...t, ...e[io] };
}
function hr(e, t) {
  const r = Es(e, t || {});
  return r.retryCount = r.retryCount || 0, r.lastRequestTime = r.lastRequestTime || Date.now(), e[io] = r, r;
}
function Ls(e, t) {
  e.defaults.agent === t.agent && delete t.agent, e.defaults.httpAgent === t.httpAgent && delete t.httpAgent, e.defaults.httpsAgent === t.httpsAgent && delete t.httpsAgent;
}
async function Os(e, t) {
  const { retries: r, retryCondition: o } = e, a = (e.retryCount || 0) < r && o(t);
  if (typeof a == "object")
    try {
      return await a !== !1;
    } catch {
      return !1;
    }
  return a;
}
const Ne = (e, t) => {
  const r = e.interceptors.request.use((a) => (hr(a, t), a)), o = e.interceptors.response.use(null, async (a) => {
    const { config: n } = a;
    if (!n)
      return Promise.reject(a);
    const l = hr(n, t);
    if (await Os(l, a)) {
      l.retryCount += 1;
      const { retryDelay: f, shouldResetTimeout: N, onRetry: M } = l, G = f(l.retryCount, a);
      if (Ls(e, n), !N && n.timeout && l.lastRequestTime) {
        const T = Date.now() - l.lastRequestTime, z = n.timeout - T - G;
        if (z <= 0)
          return Promise.reject(a);
        n.timeout = z;
      }
      return n.transformRequest = [(T) => T], await M(l.retryCount, a, n), new Promise((T) => {
        setTimeout(() => T(e(n)), G);
      });
    }
    return Promise.reject(a);
  });
  return { requestInterceptorId: r, responseInterceptorId: o };
};
Ne.isNetworkError = no;
Ne.isSafeRequestError = Ps;
Ne.isIdempotentRequestError = lo;
Ne.isNetworkOrIdempotentRequestError = co;
Ne.exponentialDelay = xs;
Ne.isRetryableError = Et;
const Lt = Z.create({
  timeout: 1e3 * 300
});
Ne(Lt, { retries: 3 });
Lt.interceptors.response.use(
  function(e) {
    return e.data.status && e.data.status === 200 ? e.data.data : e.data;
  },
  function(e) {
    return Promise.reject(e);
  }
);
async function _s(e, t = {}) {
  return Lt({ url: e, method: "get", ...t });
}
function Be(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zs = { exports: {} };
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(o, a, n) {
      function l(M, G) {
        if (!a[M]) {
          if (!o[M]) {
            var T = typeof Be == "function" && Be;
            if (!G && T)
              return T(M, !0);
            if (f)
              return f(M, !0);
            throw new Error("Cannot find module '" + M + "'");
          }
          G = a[M] = { exports: {} }, o[M][0].call(G.exports, function(z) {
            var _ = o[M][1][z];
            return l(_ || z);
          }, G, G.exports, r, o, a, n);
        }
        return a[M].exports;
      }
      for (var f = typeof Be == "function" && Be, N = 0; N < n.length; N++)
        l(n[N]);
      return l;
    }({ 1: [function(r, o, a) {
      (function(n, l, f, N, M, G, T, z, _) {
        var p = r("crypto");
        function v(m, y) {
          y = A(m, y);
          var c;
          return (c = y.algorithm !== "passthrough" ? p.createHash(y.algorithm) : new L()).write === void 0 && (c.write = c.update, c.end = c.update), P(y, c).dispatch(m), c.update || c.end(""), c.digest ? c.digest(y.encoding === "buffer" ? void 0 : y.encoding) : (m = c.read(), y.encoding !== "buffer" ? m.toString(y.encoding) : m);
        }
        (a = o.exports = v).sha1 = function(m) {
          return v(m);
        }, a.keys = function(m) {
          return v(m, { excludeValues: !0, algorithm: "sha1", encoding: "hex" });
        }, a.MD5 = function(m) {
          return v(m, { algorithm: "md5", encoding: "hex" });
        }, a.keysMD5 = function(m) {
          return v(m, { algorithm: "md5", encoding: "hex", excludeValues: !0 });
        };
        var g = p.getHashes ? p.getHashes().slice() : ["sha1", "md5"], V = (g.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
        function A(m, y) {
          var c = {};
          if (c.algorithm = (y = y || {}).algorithm || "sha1", c.encoding = y.encoding || "hex", c.excludeValues = !!y.excludeValues, c.algorithm = c.algorithm.toLowerCase(), c.encoding = c.encoding.toLowerCase(), c.ignoreUnknown = y.ignoreUnknown === !0, c.respectType = y.respectType !== !1, c.respectFunctionNames = y.respectFunctionNames !== !1, c.respectFunctionProperties = y.respectFunctionProperties !== !1, c.unorderedArrays = y.unorderedArrays === !0, c.unorderedSets = y.unorderedSets !== !1, c.unorderedObjects = y.unorderedObjects !== !1, c.replacer = y.replacer || void 0, c.excludeKeys = y.excludeKeys || void 0, m === void 0)
            throw new Error("Object argument required.");
          for (var d = 0; d < g.length; ++d)
            g[d].toLowerCase() === c.algorithm.toLowerCase() && (c.algorithm = g[d]);
          if (g.indexOf(c.algorithm) === -1)
            throw new Error('Algorithm "' + c.algorithm + '"  not supported. supported values: ' + g.join(", "));
          if (V.indexOf(c.encoding) === -1 && c.algorithm !== "passthrough")
            throw new Error('Encoding "' + c.encoding + '"  not supported. supported values: ' + V.join(", "));
          return c;
        }
        function F(m) {
          if (typeof m == "function")
            return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(m)) != null;
        }
        function P(m, y, c) {
          c = c || [];
          function d(s) {
            return y.update ? y.update(s, "utf8") : y.write(s, "utf8");
          }
          return { dispatch: function(s) {
            return this["_" + ((s = m.replacer ? m.replacer(s) : s) === null ? "null" : typeof s)](s);
          }, _object: function(s) {
            var S, C = Object.prototype.toString.call(s), R = /\[object (.*)\]/i.exec(C);
            if (R = (R = R ? R[1] : "unknown:[" + C + "]").toLowerCase(), 0 <= (C = c.indexOf(s)))
              return this.dispatch("[CIRCULAR:" + C + "]");
            if (c.push(s), f !== void 0 && f.isBuffer && f.isBuffer(s))
              return d("buffer:"), d(s);
            if (R === "object" || R === "function" || R === "asyncfunction")
              return C = Object.keys(s), m.unorderedObjects && (C = C.sort()), m.respectType === !1 || F(s) || C.splice(0, 0, "prototype", "__proto__", "constructor"), m.excludeKeys && (C = C.filter(function(I) {
                return !m.excludeKeys(I);
              })), d("object:" + C.length + ":"), S = this, C.forEach(function(I) {
                S.dispatch(I), d(":"), m.excludeValues || S.dispatch(s[I]), d(",");
              });
            if (!this["_" + R]) {
              if (m.ignoreUnknown)
                return d("[" + R + "]");
              throw new Error('Unknown object type "' + R + '"');
            }
            this["_" + R](s);
          }, _array: function(s, I) {
            I = I !== void 0 ? I : m.unorderedArrays !== !1;
            var C = this;
            if (d("array:" + s.length + ":"), !I || s.length <= 1)
              return s.forEach(function(B) {
                return C.dispatch(B);
              });
            var R = [], I = s.map(function(B) {
              var O = new L(), K = c.slice();
              return P(m, O, K).dispatch(B), R = R.concat(K.slice(c.length)), O.read().toString();
            });
            return c = c.concat(R), I.sort(), this._array(I, !1);
          }, _date: function(s) {
            return d("date:" + s.toJSON());
          }, _symbol: function(s) {
            return d("symbol:" + s.toString());
          }, _error: function(s) {
            return d("error:" + s.toString());
          }, _boolean: function(s) {
            return d("bool:" + s.toString());
          }, _string: function(s) {
            d("string:" + s.length + ":"), d(s.toString());
          }, _function: function(s) {
            d("fn:"), F(s) ? this.dispatch("[native]") : this.dispatch(s.toString()), m.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(s.name)), m.respectFunctionProperties && this._object(s);
          }, _number: function(s) {
            return d("number:" + s.toString());
          }, _xml: function(s) {
            return d("xml:" + s.toString());
          }, _null: function() {
            return d("Null");
          }, _undefined: function() {
            return d("Undefined");
          }, _regexp: function(s) {
            return d("regex:" + s.toString());
          }, _uint8array: function(s) {
            return d("uint8array:"), this.dispatch(Array.prototype.slice.call(s));
          }, _uint8clampedarray: function(s) {
            return d("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(s));
          }, _int8array: function(s) {
            return d("int8array:"), this.dispatch(Array.prototype.slice.call(s));
          }, _uint16array: function(s) {
            return d("uint16array:"), this.dispatch(Array.prototype.slice.call(s));
          }, _int16array: function(s) {
            return d("int16array:"), this.dispatch(Array.prototype.slice.call(s));
          }, _uint32array: function(s) {
            return d("uint32array:"), this.dispatch(Array.prototype.slice.call(s));
          }, _int32array: function(s) {
            return d("int32array:"), this.dispatch(Array.prototype.slice.call(s));
          }, _float32array: function(s) {
            return d("float32array:"), this.dispatch(Array.prototype.slice.call(s));
          }, _float64array: function(s) {
            return d("float64array:"), this.dispatch(Array.prototype.slice.call(s));
          }, _arraybuffer: function(s) {
            return d("arraybuffer:"), this.dispatch(new Uint8Array(s));
          }, _url: function(s) {
            return d("url:" + s.toString());
          }, _map: function(s) {
            return d("map:"), s = Array.from(s), this._array(s, m.unorderedSets !== !1);
          }, _set: function(s) {
            return d("set:"), s = Array.from(s), this._array(s, m.unorderedSets !== !1);
          }, _file: function(s) {
            return d("file:"), this.dispatch([s.name, s.size, s.type, s.lastModfied]);
          }, _blob: function() {
            if (m.ignoreUnknown)
              return d("[blob]");
            throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
          }, _domwindow: function() {
            return d("domwindow");
          }, _bigint: function(s) {
            return d("bigint:" + s.toString());
          }, _process: function() {
            return d("process");
          }, _timer: function() {
            return d("timer");
          }, _pipe: function() {
            return d("pipe");
          }, _tcp: function() {
            return d("tcp");
          }, _udp: function() {
            return d("udp");
          }, _tty: function() {
            return d("tty");
          }, _statwatcher: function() {
            return d("statwatcher");
          }, _securecontext: function() {
            return d("securecontext");
          }, _connection: function() {
            return d("connection");
          }, _zlib: function() {
            return d("zlib");
          }, _context: function() {
            return d("context");
          }, _nodescript: function() {
            return d("nodescript");
          }, _httpparser: function() {
            return d("httpparser");
          }, _dataview: function() {
            return d("dataview");
          }, _signal: function() {
            return d("signal");
          }, _fsevent: function() {
            return d("fsevent");
          }, _tlswrap: function() {
            return d("tlswrap");
          } };
        }
        function L() {
          return { buf: "", write: function(m) {
            this.buf += m;
          }, end: function(m) {
            this.buf += m;
          }, read: function() {
            return this.buf;
          } };
        }
        a.writeToStream = function(m, y, c) {
          return c === void 0 && (c = y, y = {}), P(y = A(m, y), c).dispatch(m);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
    }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(r, o, a) {
      (function(n, l, f, N, M, G, T, z, _) {
        (function(p) {
          var v = typeof Uint8Array < "u" ? Uint8Array : Array, g = 43, V = 47, A = 48, F = 97, P = 65, L = 45, m = 95;
          function y(c) {
            return c = c.charCodeAt(0), c === g || c === L ? 62 : c === V || c === m ? 63 : c < A ? -1 : c < A + 10 ? c - A + 26 + 26 : c < P + 26 ? c - P : c < F + 26 ? c - F + 26 : void 0;
          }
          p.toByteArray = function(c) {
            var d, s;
            if (0 < c.length % 4)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var S = c.length, S = c.charAt(S - 2) === "=" ? 2 : c.charAt(S - 1) === "=" ? 1 : 0, C = new v(3 * c.length / 4 - S), R = 0 < S ? c.length - 4 : c.length, I = 0;
            function B(O) {
              C[I++] = O;
            }
            for (d = 0; d < R; d += 4, 0)
              B((16711680 & (s = y(c.charAt(d)) << 18 | y(c.charAt(d + 1)) << 12 | y(c.charAt(d + 2)) << 6 | y(c.charAt(d + 3)))) >> 16), B((65280 & s) >> 8), B(255 & s);
            return S == 2 ? B(255 & (s = y(c.charAt(d)) << 2 | y(c.charAt(d + 1)) >> 4)) : S == 1 && (B((s = y(c.charAt(d)) << 10 | y(c.charAt(d + 1)) << 4 | y(c.charAt(d + 2)) >> 2) >> 8 & 255), B(255 & s)), C;
          }, p.fromByteArray = function(c) {
            var d, s, S, C, R = c.length % 3, I = "";
            function B(O) {
              return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(O);
            }
            for (d = 0, S = c.length - R; d < S; d += 3)
              s = (c[d] << 16) + (c[d + 1] << 8) + c[d + 2], I += B((C = s) >> 18 & 63) + B(C >> 12 & 63) + B(C >> 6 & 63) + B(63 & C);
            switch (R) {
              case 1:
                I = (I += B((s = c[c.length - 1]) >> 2)) + B(s << 4 & 63) + "==";
                break;
              case 2:
                I = (I = (I += B((s = (c[c.length - 2] << 8) + c[c.length - 1]) >> 10)) + B(s >> 4 & 63)) + B(s << 2 & 63) + "=";
            }
            return I;
          };
        })(a === void 0 ? this.base64js = {} : a);
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
    }, { buffer: 3, lYpoI2: 11 }], 3: [function(r, o, a) {
      (function(n, l, g, N, M, G, T, z, _) {
        var p = r("base64-js"), v = r("ieee754");
        function g(i, u, h) {
          if (!(this instanceof g))
            return new g(i, u, h);
          var x, k, E, U, J = typeof i;
          if (u === "base64" && J == "string")
            for (i = (U = i).trim ? U.trim() : U.replace(/^\s+|\s+$/g, ""); i.length % 4 != 0; )
              i += "=";
          if (J == "number")
            x = X(i);
          else if (J == "string")
            x = g.byteLength(i, u);
          else {
            if (J != "object")
              throw new Error("First argument needs to be a number, array or string.");
            x = X(i.length);
          }
          if (g._useTypedArrays ? k = g._augment(new Uint8Array(x)) : ((k = this).length = x, k._isBuffer = !0), g._useTypedArrays && typeof i.byteLength == "number")
            k._set(i);
          else if (Y(U = i) || g.isBuffer(U) || U && typeof U == "object" && typeof U.length == "number")
            for (E = 0; E < x; E++)
              g.isBuffer(i) ? k[E] = i.readUInt8(E) : k[E] = i[E];
          else if (J == "string")
            k.write(i, 0, u);
          else if (J == "number" && !g._useTypedArrays && !h)
            for (E = 0; E < x; E++)
              k[E] = 0;
          return k;
        }
        function V(i, u, h, x) {
          return g._charsWritten = Re(function(k) {
            for (var E = [], U = 0; U < k.length; U++)
              E.push(255 & k.charCodeAt(U));
            return E;
          }(u), i, h, x);
        }
        function A(i, u, h, x) {
          return g._charsWritten = Re(function(k) {
            for (var E, U, J = [], q = 0; q < k.length; q++)
              U = k.charCodeAt(q), E = U >> 8, U = U % 256, J.push(U), J.push(E);
            return J;
          }(u), i, h, x);
        }
        function F(i, u, h) {
          var x = "";
          h = Math.min(i.length, h);
          for (var k = u; k < h; k++)
            x += String.fromCharCode(i[k]);
          return x;
        }
        function P(i, u, h, E) {
          E || (w(typeof h == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 1 < i.length, "Trying to read beyond buffer length"));
          var k, E = i.length;
          if (!(E <= u))
            return h ? (k = i[u], u + 1 < E && (k |= i[u + 1] << 8)) : (k = i[u] << 8, u + 1 < E && (k |= i[u + 1])), k;
        }
        function L(i, u, h, E) {
          E || (w(typeof h == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 3 < i.length, "Trying to read beyond buffer length"));
          var k, E = i.length;
          if (!(E <= u))
            return h ? (u + 2 < E && (k = i[u + 2] << 16), u + 1 < E && (k |= i[u + 1] << 8), k |= i[u], u + 3 < E && (k += i[u + 3] << 24 >>> 0)) : (u + 1 < E && (k = i[u + 1] << 16), u + 2 < E && (k |= i[u + 2] << 8), u + 3 < E && (k |= i[u + 3]), k += i[u] << 24 >>> 0), k;
        }
        function m(i, u, h, x) {
          if (x || (w(typeof h == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 1 < i.length, "Trying to read beyond buffer length")), !(i.length <= u))
            return x = P(i, u, h, !0), 32768 & x ? -1 * (65535 - x + 1) : x;
        }
        function y(i, u, h, x) {
          if (x || (w(typeof h == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 3 < i.length, "Trying to read beyond buffer length")), !(i.length <= u))
            return x = L(i, u, h, !0), 2147483648 & x ? -1 * (4294967295 - x + 1) : x;
        }
        function c(i, u, h, x) {
          return x || (w(typeof h == "boolean", "missing or invalid endian"), w(u + 3 < i.length, "Trying to read beyond buffer length")), v.read(i, u, h, 23, 4);
        }
        function d(i, u, h, x) {
          return x || (w(typeof h == "boolean", "missing or invalid endian"), w(u + 7 < i.length, "Trying to read beyond buffer length")), v.read(i, u, h, 52, 8);
        }
        function s(i, u, h, x, k) {
          if (k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(h != null, "missing offset"), w(h + 1 < i.length, "trying to write beyond buffer length"), rt(u, 65535)), k = i.length, !(k <= h))
            for (var E = 0, U = Math.min(k - h, 2); E < U; E++)
              i[h + E] = (u & 255 << 8 * (x ? E : 1 - E)) >>> 8 * (x ? E : 1 - E);
        }
        function S(i, u, h, x, k) {
          if (k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(h != null, "missing offset"), w(h + 3 < i.length, "trying to write beyond buffer length"), rt(u, 4294967295)), k = i.length, !(k <= h))
            for (var E = 0, U = Math.min(k - h, 4); E < U; E++)
              i[h + E] = u >>> 8 * (x ? E : 3 - E) & 255;
        }
        function C(i, u, h, x, k) {
          k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(h != null, "missing offset"), w(h + 1 < i.length, "Trying to write beyond buffer length"), ot(u, 32767, -32768)), i.length <= h || s(i, 0 <= u ? u : 65535 + u + 1, h, x, k);
        }
        function R(i, u, h, x, k) {
          k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(h != null, "missing offset"), w(h + 3 < i.length, "Trying to write beyond buffer length"), ot(u, 2147483647, -2147483648)), i.length <= h || S(i, 0 <= u ? u : 4294967295 + u + 1, h, x, k);
        }
        function I(i, u, h, x, k) {
          k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(h != null, "missing offset"), w(h + 3 < i.length, "Trying to write beyond buffer length"), zt(u, 34028234663852886e22, -34028234663852886e22)), i.length <= h || v.write(i, u, h, x, 23, 4);
        }
        function B(i, u, h, x, k) {
          k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(h != null, "missing offset"), w(h + 7 < i.length, "Trying to write beyond buffer length"), zt(u, 17976931348623157e292, -17976931348623157e292)), i.length <= h || v.write(i, u, h, x, 52, 8);
        }
        a.Buffer = g, a.SlowBuffer = g, a.INSPECT_MAX_BYTES = 50, g.poolSize = 8192, g._useTypedArrays = function() {
          try {
            var i = new ArrayBuffer(0), u = new Uint8Array(i);
            return u.foo = function() {
              return 42;
            }, u.foo() === 42 && typeof u.subarray == "function";
          } catch {
            return !1;
          }
        }(), g.isEncoding = function(i) {
          switch (String(i).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "raw":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }, g.isBuffer = function(i) {
          return !(i == null || !i._isBuffer);
        }, g.byteLength = function(i, u) {
          var h;
          switch (i += "", u || "utf8") {
            case "hex":
              h = i.length / 2;
              break;
            case "utf8":
            case "utf-8":
              h = ne(i).length;
              break;
            case "ascii":
            case "binary":
            case "raw":
              h = i.length;
              break;
            case "base64":
              h = Ot(i).length;
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              h = 2 * i.length;
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return h;
        }, g.concat = function(i, u) {
          if (w(Y(i), `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`), i.length === 0)
            return new g(0);
          if (i.length === 1)
            return i[0];
          if (typeof u != "number")
            for (k = u = 0; k < i.length; k++)
              u += i[k].length;
          for (var h = new g(u), x = 0, k = 0; k < i.length; k++) {
            var E = i[k];
            E.copy(h, x), x += E.length;
          }
          return h;
        }, g.prototype.write = function(i, u, h, x) {
          isFinite(u) ? isFinite(h) || (x = h, h = void 0) : (q = x, x = u, u = h, h = q), u = Number(u) || 0;
          var k, E, U, J, q = this.length - u;
          switch ((!h || q < (h = Number(h))) && (h = q), x = String(x || "utf8").toLowerCase()) {
            case "hex":
              k = function(re, Q, ee, W) {
                ee = Number(ee) || 0;
                var $ = re.length - ee;
                (!W || $ < (W = Number(W))) && (W = $), w(($ = Q.length) % 2 == 0, "Invalid hex string"), $ / 2 < W && (W = $ / 2);
                for (var pe = 0; pe < W; pe++) {
                  var It = parseInt(Q.substr(2 * pe, 2), 16);
                  w(!isNaN(It), "Invalid hex string"), re[ee + pe] = It;
                }
                return g._charsWritten = 2 * pe, pe;
              }(this, i, u, h);
              break;
            case "utf8":
            case "utf-8":
              E = this, U = u, J = h, k = g._charsWritten = Re(ne(i), E, U, J);
              break;
            case "ascii":
            case "binary":
              k = V(this, i, u, h);
              break;
            case "base64":
              E = this, U = u, J = h, k = g._charsWritten = Re(Ot(i), E, U, J);
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              k = A(this, i, u, h);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return k;
        }, g.prototype.toString = function(i, u, h) {
          var x, k, E, U, J = this;
          if (i = String(i || "utf8").toLowerCase(), u = Number(u) || 0, (h = h !== void 0 ? Number(h) : J.length) === u)
            return "";
          switch (i) {
            case "hex":
              x = function(q, re, Q) {
                var ee = q.length;
                (!re || re < 0) && (re = 0), (!Q || Q < 0 || ee < Q) && (Q = ee);
                for (var W = "", $ = re; $ < Q; $++)
                  W += H(q[$]);
                return W;
              }(J, u, h);
              break;
            case "utf8":
            case "utf-8":
              x = function(q, re, Q) {
                var ee = "", W = "";
                Q = Math.min(q.length, Q);
                for (var $ = re; $ < Q; $++)
                  q[$] <= 127 ? (ee += _t(W) + String.fromCharCode(q[$]), W = "") : W += "%" + q[$].toString(16);
                return ee + _t(W);
              }(J, u, h);
              break;
            case "ascii":
            case "binary":
              x = F(J, u, h);
              break;
            case "base64":
              k = J, U = h, x = (E = u) === 0 && U === k.length ? p.fromByteArray(k) : p.fromByteArray(k.slice(E, U));
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              x = function(q, re, Q) {
                for (var ee = q.slice(re, Q), W = "", $ = 0; $ < ee.length; $ += 2)
                  W += String.fromCharCode(ee[$] + 256 * ee[$ + 1]);
                return W;
              }(J, u, h);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return x;
        }, g.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        }, g.prototype.copy = function(i, u, h, x) {
          if (u = u || 0, (x = x || x === 0 ? x : this.length) !== (h = h || 0) && i.length !== 0 && this.length !== 0) {
            w(h <= x, "sourceEnd < sourceStart"), w(0 <= u && u < i.length, "targetStart out of bounds"), w(0 <= h && h < this.length, "sourceStart out of bounds"), w(0 <= x && x <= this.length, "sourceEnd out of bounds"), x > this.length && (x = this.length);
            var k = (x = i.length - u < x - h ? i.length - u + h : x) - h;
            if (k < 100 || !g._useTypedArrays)
              for (var E = 0; E < k; E++)
                i[E + u] = this[E + h];
            else
              i._set(this.subarray(h, h + k), u);
          }
        }, g.prototype.slice = function(i, u) {
          var h = this.length;
          if (i = K(i, h, 0), u = K(u, h, h), g._useTypedArrays)
            return g._augment(this.subarray(i, u));
          for (var x = u - i, k = new g(x, void 0, !0), E = 0; E < x; E++)
            k[E] = this[E + i];
          return k;
        }, g.prototype.get = function(i) {
          return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(i);
        }, g.prototype.set = function(i, u) {
          return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(i, u);
        }, g.prototype.readUInt8 = function(i, u) {
          if (u || (w(i != null, "missing offset"), w(i < this.length, "Trying to read beyond buffer length")), !(i >= this.length))
            return this[i];
        }, g.prototype.readUInt16LE = function(i, u) {
          return P(this, i, !0, u);
        }, g.prototype.readUInt16BE = function(i, u) {
          return P(this, i, !1, u);
        }, g.prototype.readUInt32LE = function(i, u) {
          return L(this, i, !0, u);
        }, g.prototype.readUInt32BE = function(i, u) {
          return L(this, i, !1, u);
        }, g.prototype.readInt8 = function(i, u) {
          if (u || (w(i != null, "missing offset"), w(i < this.length, "Trying to read beyond buffer length")), !(i >= this.length))
            return 128 & this[i] ? -1 * (255 - this[i] + 1) : this[i];
        }, g.prototype.readInt16LE = function(i, u) {
          return m(this, i, !0, u);
        }, g.prototype.readInt16BE = function(i, u) {
          return m(this, i, !1, u);
        }, g.prototype.readInt32LE = function(i, u) {
          return y(this, i, !0, u);
        }, g.prototype.readInt32BE = function(i, u) {
          return y(this, i, !1, u);
        }, g.prototype.readFloatLE = function(i, u) {
          return c(this, i, !0, u);
        }, g.prototype.readFloatBE = function(i, u) {
          return c(this, i, !1, u);
        }, g.prototype.readDoubleLE = function(i, u) {
          return d(this, i, !0, u);
        }, g.prototype.readDoubleBE = function(i, u) {
          return d(this, i, !1, u);
        }, g.prototype.writeUInt8 = function(i, u, h) {
          h || (w(i != null, "missing value"), w(u != null, "missing offset"), w(u < this.length, "trying to write beyond buffer length"), rt(i, 255)), u >= this.length || (this[u] = i);
        }, g.prototype.writeUInt16LE = function(i, u, h) {
          s(this, i, u, !0, h);
        }, g.prototype.writeUInt16BE = function(i, u, h) {
          s(this, i, u, !1, h);
        }, g.prototype.writeUInt32LE = function(i, u, h) {
          S(this, i, u, !0, h);
        }, g.prototype.writeUInt32BE = function(i, u, h) {
          S(this, i, u, !1, h);
        }, g.prototype.writeInt8 = function(i, u, h) {
          h || (w(i != null, "missing value"), w(u != null, "missing offset"), w(u < this.length, "Trying to write beyond buffer length"), ot(i, 127, -128)), u >= this.length || (0 <= i ? this.writeUInt8(i, u, h) : this.writeUInt8(255 + i + 1, u, h));
        }, g.prototype.writeInt16LE = function(i, u, h) {
          C(this, i, u, !0, h);
        }, g.prototype.writeInt16BE = function(i, u, h) {
          C(this, i, u, !1, h);
        }, g.prototype.writeInt32LE = function(i, u, h) {
          R(this, i, u, !0, h);
        }, g.prototype.writeInt32BE = function(i, u, h) {
          R(this, i, u, !1, h);
        }, g.prototype.writeFloatLE = function(i, u, h) {
          I(this, i, u, !0, h);
        }, g.prototype.writeFloatBE = function(i, u, h) {
          I(this, i, u, !1, h);
        }, g.prototype.writeDoubleLE = function(i, u, h) {
          B(this, i, u, !0, h);
        }, g.prototype.writeDoubleBE = function(i, u, h) {
          B(this, i, u, !1, h);
        }, g.prototype.fill = function(i, u, h) {
          if (u = u || 0, h = h || this.length, w(typeof (i = typeof (i = i || 0) == "string" ? i.charCodeAt(0) : i) == "number" && !isNaN(i), "value is not a number"), w(u <= h, "end < start"), h !== u && this.length !== 0) {
            w(0 <= u && u < this.length, "start out of bounds"), w(0 <= h && h <= this.length, "end out of bounds");
            for (var x = u; x < h; x++)
              this[x] = i;
          }
        }, g.prototype.inspect = function() {
          for (var i = [], u = this.length, h = 0; h < u; h++)
            if (i[h] = H(this[h]), h === a.INSPECT_MAX_BYTES) {
              i[h + 1] = "...";
              break;
            }
          return "<Buffer " + i.join(" ") + ">";
        }, g.prototype.toArrayBuffer = function() {
          if (typeof Uint8Array > "u")
            throw new Error("Buffer.toArrayBuffer not supported in this browser");
          if (g._useTypedArrays)
            return new g(this).buffer;
          for (var i = new Uint8Array(this.length), u = 0, h = i.length; u < h; u += 1)
            i[u] = this[u];
          return i.buffer;
        };
        var O = g.prototype;
        function K(i, u, h) {
          return typeof i != "number" ? h : u <= (i = ~~i) ? u : 0 <= i || 0 <= (i += u) ? i : 0;
        }
        function X(i) {
          return (i = ~~Math.ceil(+i)) < 0 ? 0 : i;
        }
        function Y(i) {
          return (Array.isArray || function(u) {
            return Object.prototype.toString.call(u) === "[object Array]";
          })(i);
        }
        function H(i) {
          return i < 16 ? "0" + i.toString(16) : i.toString(16);
        }
        function ne(i) {
          for (var u = [], h = 0; h < i.length; h++) {
            var x = i.charCodeAt(h);
            if (x <= 127)
              u.push(i.charCodeAt(h));
            else
              for (var k = h, E = (55296 <= x && x <= 57343 && h++, encodeURIComponent(i.slice(k, h + 1)).substr(1).split("%")), U = 0; U < E.length; U++)
                u.push(parseInt(E[U], 16));
          }
          return u;
        }
        function Ot(i) {
          return p.toByteArray(i);
        }
        function Re(i, u, h, x) {
          for (var k = 0; k < x && !(k + h >= u.length || k >= i.length); k++)
            u[k + h] = i[k];
          return k;
        }
        function _t(i) {
          try {
            return decodeURIComponent(i);
          } catch {
            return "�";
          }
        }
        function rt(i, u) {
          w(typeof i == "number", "cannot write a non-number as a number"), w(0 <= i, "specified a negative value for writing an unsigned value"), w(i <= u, "value is larger than maximum value for type"), w(Math.floor(i) === i, "value has a fractional component");
        }
        function ot(i, u, h) {
          w(typeof i == "number", "cannot write a non-number as a number"), w(i <= u, "value larger than maximum allowed value"), w(h <= i, "value smaller than minimum allowed value"), w(Math.floor(i) === i, "value has a fractional component");
        }
        function zt(i, u, h) {
          w(typeof i == "number", "cannot write a non-number as a number"), w(i <= u, "value larger than maximum allowed value"), w(h <= i, "value smaller than minimum allowed value");
        }
        function w(i, u) {
          if (!i)
            throw new Error(u || "Failed assertion");
        }
        g._augment = function(i) {
          return i._isBuffer = !0, i._get = i.get, i._set = i.set, i.get = O.get, i.set = O.set, i.write = O.write, i.toString = O.toString, i.toLocaleString = O.toString, i.toJSON = O.toJSON, i.copy = O.copy, i.slice = O.slice, i.readUInt8 = O.readUInt8, i.readUInt16LE = O.readUInt16LE, i.readUInt16BE = O.readUInt16BE, i.readUInt32LE = O.readUInt32LE, i.readUInt32BE = O.readUInt32BE, i.readInt8 = O.readInt8, i.readInt16LE = O.readInt16LE, i.readInt16BE = O.readInt16BE, i.readInt32LE = O.readInt32LE, i.readInt32BE = O.readInt32BE, i.readFloatLE = O.readFloatLE, i.readFloatBE = O.readFloatBE, i.readDoubleLE = O.readDoubleLE, i.readDoubleBE = O.readDoubleBE, i.writeUInt8 = O.writeUInt8, i.writeUInt16LE = O.writeUInt16LE, i.writeUInt16BE = O.writeUInt16BE, i.writeUInt32LE = O.writeUInt32LE, i.writeUInt32BE = O.writeUInt32BE, i.writeInt8 = O.writeInt8, i.writeInt16LE = O.writeInt16LE, i.writeInt16BE = O.writeInt16BE, i.writeInt32LE = O.writeInt32LE, i.writeInt32BE = O.writeInt32BE, i.writeFloatLE = O.writeFloatLE, i.writeFloatBE = O.writeFloatBE, i.writeDoubleLE = O.writeDoubleLE, i.writeDoubleBE = O.writeDoubleBE, i.fill = O.fill, i.inspect = O.inspect, i.toArrayBuffer = O.toArrayBuffer, i;
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
    }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(r, o, a) {
      (function(n, l, p, N, M, G, T, z, _) {
        var p = r("buffer").Buffer, v = 4, g = new p(v);
        g.fill(0), o.exports = { hash: function(V, A, F, P) {
          for (var L = A(function(s, S) {
            s.length % v != 0 && (C = s.length + (v - s.length % v), s = p.concat([s, g], C));
            for (var C, R = [], I = S ? s.readInt32BE : s.readInt32LE, B = 0; B < s.length; B += v)
              R.push(I.call(s, B));
            return R;
          }(V = p.isBuffer(V) ? V : new p(V), P), 8 * V.length), A = P, m = new p(F), y = A ? m.writeInt32BE : m.writeInt32LE, c = 0; c < L.length; c++)
            y.call(m, L[c], 4 * c, !0);
          return m;
        } };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 5: [function(r, o, a) {
      (function(n, l, p, N, M, G, T, z, _) {
        var p = r("buffer").Buffer, v = r("./sha"), g = r("./sha256"), V = r("./rng"), A = { sha1: v, sha256: g, md5: r("./md5") }, F = 64, P = new p(F);
        function L(s, S) {
          var C = A[s = s || "sha1"], R = [];
          return C || m("algorithm:", s, "is not yet supported"), { update: function(I) {
            return p.isBuffer(I) || (I = new p(I)), R.push(I), I.length, this;
          }, digest: function(I) {
            var B = p.concat(R), B = S ? function(O, K, X) {
              p.isBuffer(K) || (K = new p(K)), p.isBuffer(X) || (X = new p(X)), K.length > F ? K = O(K) : K.length < F && (K = p.concat([K, P], F));
              for (var Y = new p(F), H = new p(F), ne = 0; ne < F; ne++)
                Y[ne] = 54 ^ K[ne], H[ne] = 92 ^ K[ne];
              return X = O(p.concat([Y, X])), O(p.concat([H, X]));
            }(C, S, B) : C(B);
            return R = null, I ? B.toString(I) : B;
          } };
        }
        function m() {
          var s = [].slice.call(arguments).join(" ");
          throw new Error([s, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join(`
`));
        }
        P.fill(0), a.createHash = function(s) {
          return L(s);
        }, a.createHmac = L, a.randomBytes = function(s, S) {
          if (!S || !S.call)
            return new p(V(s));
          try {
            S.call(this, void 0, new p(V(s)));
          } catch (C) {
            S(C);
          }
        };
        var y, c = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], d = function(s) {
          a[s] = function() {
            m("sorry,", s, "is not implemented yet");
          };
        };
        for (y in c)
          d(c[y]);
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(r, o, a) {
      (function(n, l, f, N, M, G, T, z, _) {
        var p = r("./helpers");
        function v(m, y) {
          m[y >> 5] |= 128 << y % 32, m[14 + (y + 64 >>> 9 << 4)] = y;
          for (var c = 1732584193, d = -271733879, s = -1732584194, S = 271733878, C = 0; C < m.length; C += 16) {
            var R = c, I = d, B = s, O = S, c = V(c, d, s, S, m[C + 0], 7, -680876936), S = V(S, c, d, s, m[C + 1], 12, -389564586), s = V(s, S, c, d, m[C + 2], 17, 606105819), d = V(d, s, S, c, m[C + 3], 22, -1044525330);
            c = V(c, d, s, S, m[C + 4], 7, -176418897), S = V(S, c, d, s, m[C + 5], 12, 1200080426), s = V(s, S, c, d, m[C + 6], 17, -1473231341), d = V(d, s, S, c, m[C + 7], 22, -45705983), c = V(c, d, s, S, m[C + 8], 7, 1770035416), S = V(S, c, d, s, m[C + 9], 12, -1958414417), s = V(s, S, c, d, m[C + 10], 17, -42063), d = V(d, s, S, c, m[C + 11], 22, -1990404162), c = V(c, d, s, S, m[C + 12], 7, 1804603682), S = V(S, c, d, s, m[C + 13], 12, -40341101), s = V(s, S, c, d, m[C + 14], 17, -1502002290), c = A(c, d = V(d, s, S, c, m[C + 15], 22, 1236535329), s, S, m[C + 1], 5, -165796510), S = A(S, c, d, s, m[C + 6], 9, -1069501632), s = A(s, S, c, d, m[C + 11], 14, 643717713), d = A(d, s, S, c, m[C + 0], 20, -373897302), c = A(c, d, s, S, m[C + 5], 5, -701558691), S = A(S, c, d, s, m[C + 10], 9, 38016083), s = A(s, S, c, d, m[C + 15], 14, -660478335), d = A(d, s, S, c, m[C + 4], 20, -405537848), c = A(c, d, s, S, m[C + 9], 5, 568446438), S = A(S, c, d, s, m[C + 14], 9, -1019803690), s = A(s, S, c, d, m[C + 3], 14, -187363961), d = A(d, s, S, c, m[C + 8], 20, 1163531501), c = A(c, d, s, S, m[C + 13], 5, -1444681467), S = A(S, c, d, s, m[C + 2], 9, -51403784), s = A(s, S, c, d, m[C + 7], 14, 1735328473), c = F(c, d = A(d, s, S, c, m[C + 12], 20, -1926607734), s, S, m[C + 5], 4, -378558), S = F(S, c, d, s, m[C + 8], 11, -2022574463), s = F(s, S, c, d, m[C + 11], 16, 1839030562), d = F(d, s, S, c, m[C + 14], 23, -35309556), c = F(c, d, s, S, m[C + 1], 4, -1530992060), S = F(S, c, d, s, m[C + 4], 11, 1272893353), s = F(s, S, c, d, m[C + 7], 16, -155497632), d = F(d, s, S, c, m[C + 10], 23, -1094730640), c = F(c, d, s, S, m[C + 13], 4, 681279174), S = F(S, c, d, s, m[C + 0], 11, -358537222), s = F(s, S, c, d, m[C + 3], 16, -722521979), d = F(d, s, S, c, m[C + 6], 23, 76029189), c = F(c, d, s, S, m[C + 9], 4, -640364487), S = F(S, c, d, s, m[C + 12], 11, -421815835), s = F(s, S, c, d, m[C + 15], 16, 530742520), c = P(c, d = F(d, s, S, c, m[C + 2], 23, -995338651), s, S, m[C + 0], 6, -198630844), S = P(S, c, d, s, m[C + 7], 10, 1126891415), s = P(s, S, c, d, m[C + 14], 15, -1416354905), d = P(d, s, S, c, m[C + 5], 21, -57434055), c = P(c, d, s, S, m[C + 12], 6, 1700485571), S = P(S, c, d, s, m[C + 3], 10, -1894986606), s = P(s, S, c, d, m[C + 10], 15, -1051523), d = P(d, s, S, c, m[C + 1], 21, -2054922799), c = P(c, d, s, S, m[C + 8], 6, 1873313359), S = P(S, c, d, s, m[C + 15], 10, -30611744), s = P(s, S, c, d, m[C + 6], 15, -1560198380), d = P(d, s, S, c, m[C + 13], 21, 1309151649), c = P(c, d, s, S, m[C + 4], 6, -145523070), S = P(S, c, d, s, m[C + 11], 10, -1120210379), s = P(s, S, c, d, m[C + 2], 15, 718787259), d = P(d, s, S, c, m[C + 9], 21, -343485551), c = L(c, R), d = L(d, I), s = L(s, B), S = L(S, O);
          }
          return Array(c, d, s, S);
        }
        function g(m, y, c, d, s, S) {
          return L((y = L(L(y, m), L(d, S))) << s | y >>> 32 - s, c);
        }
        function V(m, y, c, d, s, S, C) {
          return g(y & c | ~y & d, m, y, s, S, C);
        }
        function A(m, y, c, d, s, S, C) {
          return g(y & d | c & ~d, m, y, s, S, C);
        }
        function F(m, y, c, d, s, S, C) {
          return g(y ^ c ^ d, m, y, s, S, C);
        }
        function P(m, y, c, d, s, S, C) {
          return g(c ^ (y | ~d), m, y, s, S, C);
        }
        function L(m, y) {
          var c = (65535 & m) + (65535 & y);
          return (m >> 16) + (y >> 16) + (c >> 16) << 16 | 65535 & c;
        }
        o.exports = function(m) {
          return p.hash(m, v, 16);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(r, o, a) {
      (function(n, l, f, N, M, G, T, z, _) {
        o.exports = function(p) {
          for (var v, g = new Array(p), V = 0; V < p; V++)
            !(3 & V) && (v = 4294967296 * Math.random()), g[V] = v >>> ((3 & V) << 3) & 255;
          return g;
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 8: [function(r, o, a) {
      (function(n, l, f, N, M, G, T, z, _) {
        var p = r("./helpers");
        function v(A, F) {
          A[F >> 5] |= 128 << 24 - F % 32, A[15 + (F + 64 >> 9 << 4)] = F;
          for (var P, L, m, y = Array(80), c = 1732584193, d = -271733879, s = -1732584194, S = 271733878, C = -1009589776, R = 0; R < A.length; R += 16) {
            for (var I = c, B = d, O = s, K = S, X = C, Y = 0; Y < 80; Y++) {
              y[Y] = Y < 16 ? A[R + Y] : V(y[Y - 3] ^ y[Y - 8] ^ y[Y - 14] ^ y[Y - 16], 1);
              var H = g(g(V(c, 5), (H = d, L = s, m = S, (P = Y) < 20 ? H & L | ~H & m : !(P < 40) && P < 60 ? H & L | H & m | L & m : H ^ L ^ m)), g(g(C, y[Y]), (P = Y) < 20 ? 1518500249 : P < 40 ? 1859775393 : P < 60 ? -1894007588 : -899497514)), C = S, S = s, s = V(d, 30), d = c, c = H;
            }
            c = g(c, I), d = g(d, B), s = g(s, O), S = g(S, K), C = g(C, X);
          }
          return Array(c, d, s, S, C);
        }
        function g(A, F) {
          var P = (65535 & A) + (65535 & F);
          return (A >> 16) + (F >> 16) + (P >> 16) << 16 | 65535 & P;
        }
        function V(A, F) {
          return A << F | A >>> 32 - F;
        }
        o.exports = function(A) {
          return p.hash(A, v, 20, !0);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(r, o, a) {
      (function(n, l, f, N, M, G, T, z, _) {
        function p(F, P) {
          var L = (65535 & F) + (65535 & P);
          return (F >> 16) + (P >> 16) + (L >> 16) << 16 | 65535 & L;
        }
        function v(F, P) {
          var L, m = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), y = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), c = new Array(64);
          F[P >> 5] |= 128 << 24 - P % 32, F[15 + (P + 64 >> 9 << 4)] = P;
          for (var d, s, S = 0; S < F.length; S += 16) {
            for (var C = y[0], R = y[1], I = y[2], B = y[3], O = y[4], K = y[5], X = y[6], Y = y[7], H = 0; H < 64; H++)
              c[H] = H < 16 ? F[H + S] : p(p(p((s = c[H - 2], V(s, 17) ^ V(s, 19) ^ A(s, 10)), c[H - 7]), (s = c[H - 15], V(s, 7) ^ V(s, 18) ^ A(s, 3))), c[H - 16]), L = p(p(p(p(Y, V(s = O, 6) ^ V(s, 11) ^ V(s, 25)), O & K ^ ~O & X), m[H]), c[H]), d = p(V(d = C, 2) ^ V(d, 13) ^ V(d, 22), C & R ^ C & I ^ R & I), Y = X, X = K, K = O, O = p(B, L), B = I, I = R, R = C, C = p(L, d);
            y[0] = p(C, y[0]), y[1] = p(R, y[1]), y[2] = p(I, y[2]), y[3] = p(B, y[3]), y[4] = p(O, y[4]), y[5] = p(K, y[5]), y[6] = p(X, y[6]), y[7] = p(Y, y[7]);
          }
          return y;
        }
        var g = r("./helpers"), V = function(F, P) {
          return F >>> P | F << 32 - P;
        }, A = function(F, P) {
          return F >>> P;
        };
        o.exports = function(F) {
          return g.hash(F, v, 32, !0);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(r, o, a) {
      (function(n, l, f, N, M, G, T, z, _) {
        a.read = function(p, v, g, V, S) {
          var F, P, L = 8 * S - V - 1, m = (1 << L) - 1, y = m >> 1, c = -7, d = g ? S - 1 : 0, s = g ? -1 : 1, S = p[v + d];
          for (d += s, F = S & (1 << -c) - 1, S >>= -c, c += L; 0 < c; F = 256 * F + p[v + d], d += s, c -= 8)
            ;
          for (P = F & (1 << -c) - 1, F >>= -c, c += V; 0 < c; P = 256 * P + p[v + d], d += s, c -= 8)
            ;
          if (F === 0)
            F = 1 - y;
          else {
            if (F === m)
              return P ? NaN : 1 / 0 * (S ? -1 : 1);
            P += Math.pow(2, V), F -= y;
          }
          return (S ? -1 : 1) * P * Math.pow(2, F - V);
        }, a.write = function(p, v, g, V, A, C) {
          var P, L, m = 8 * C - A - 1, y = (1 << m) - 1, c = y >> 1, d = A === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, s = V ? 0 : C - 1, S = V ? 1 : -1, C = v < 0 || v === 0 && 1 / v < 0 ? 1 : 0;
          for (v = Math.abs(v), isNaN(v) || v === 1 / 0 ? (L = isNaN(v) ? 1 : 0, P = y) : (P = Math.floor(Math.log(v) / Math.LN2), v * (V = Math.pow(2, -P)) < 1 && (P--, V *= 2), 2 <= (v += 1 <= P + c ? d / V : d * Math.pow(2, 1 - c)) * V && (P++, V /= 2), y <= P + c ? (L = 0, P = y) : 1 <= P + c ? (L = (v * V - 1) * Math.pow(2, A), P += c) : (L = v * Math.pow(2, c - 1) * Math.pow(2, A), P = 0)); 8 <= A; p[g + s] = 255 & L, s += S, L /= 256, A -= 8)
            ;
          for (P = P << A | L, m += A; 0 < m; p[g + s] = 255 & P, s += S, P /= 256, m -= 8)
            ;
          p[g + s - S] |= 128 * C;
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
    }, { buffer: 3, lYpoI2: 11 }], 11: [function(r, o, a) {
      (function(n, l, f, N, M, G, T, z, _) {
        var p, v, g;
        function V() {
        }
        (n = o.exports = {}).nextTick = (v = typeof window < "u" && window.setImmediate, g = typeof window < "u" && window.postMessage && window.addEventListener, v ? function(A) {
          return window.setImmediate(A);
        } : g ? (p = [], window.addEventListener("message", function(A) {
          var F = A.source;
          F !== window && F !== null || A.data !== "process-tick" || (A.stopPropagation(), 0 < p.length && p.shift()());
        }, !0), function(A) {
          p.push(A), window.postMessage("process-tick", "*");
        }) : function(A) {
          setTimeout(A, 0);
        }), n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.on = V, n.addListener = V, n.once = V, n.off = V, n.removeListener = V, n.removeAllListeners = V, n.emit = V, n.binding = function(A) {
          throw new Error("process.binding is not supported");
        }, n.cwd = function() {
          return "/";
        }, n.chdir = function(A) {
          throw new Error("process.chdir is not supported");
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
    }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
  });
})(zs);
function Is(e) {
  let t = new Uint8Array(0);
  for (let r = 0; r < e.length; r++) {
    let o = new Uint8Array(e[r]), a = new Uint8Array(t.length + o.length);
    a.set(t, 0), a.set(o, t.length), t = a;
  }
  return t.buffer;
}
function Rs(e) {
  return new Promise((t) => {
    const r = new AudioContext(), o = r.createBufferSource();
    r.decodeAudioData(e, (a) => {
      o.buffer = a, o.connect(r.destination), t(Us(a));
    });
  });
}
function Bs(e, t = {}) {
  const r = t.outputRate || 24e3, o = t.bitDepth || 16, a = t.numChannels || e.numberOfChannels, n = e.sampleRate / r >> 0, l = a === 2 ? mr(n, e.getChannelData(0), e.getChannelData(1)) : mr(n, e.getChannelData(0));
  return Ds(l, r, o, a);
}
function Us(e) {
  const t = new AudioContext(), r = e.length, o = e.getChannelData(0), a = 0.01;
  let n = 0, l = r;
  for (let N = 0; N < r; N++)
    if (Math.abs(o[N]) > a) {
      n = N;
      break;
    }
  for (let N = r - 1; N >= n; N--)
    if (Math.abs(o[N]) > a) {
      l = N;
      break;
    }
  const f = t.createBuffer(e.numberOfChannels, l - n, e.sampleRate);
  for (let N = 0; N < e.numberOfChannels; N++) {
    const M = e.getChannelData(N), G = f.getChannelData(N);
    for (let T = n; T < l; T++)
      G[T - n] = M[T];
  }
  return f;
}
function mr(e, t, r) {
  const o = r ? (t.length + r.length) / e >> 0 : t.length / e >> 0, a = new Float32Array(o);
  let n = 0, l = 0;
  for (; n < o; )
    a[n++] = t[l], r && (a[n++] = r[l]), l += e;
  return a;
}
function Ds(e, t, r, o) {
  const a = r / 8, n = o * a, l = e.length * a, f = new ArrayBuffer(44 + l), N = new DataView(f);
  return Ue(N, 0, "RIFF"), N.setUint32(
    4,
    /*32*/
    36 + l,
    !0
  ), Ue(N, 8, "WAVE"), Ue(N, 12, "fmt "), N.setUint32(16, 16, !0), N.setUint16(20, 1, !0), N.setUint16(22, o, !0), N.setUint32(24, t, !0), N.setUint32(28, t * n, !0), N.setUint16(32, n, !0), N.setUint16(34, r, !0), Ue(N, 36, "data"), N.setUint32(40, l, !0), r === 8 ? Hs(N, 44, e) : r === 16 ? js(N, 44, e) : Ks(N, 44, e), f;
}
function Ue(e, t, r) {
  for (let o = 0; o < r.length; o++)
    e.setUint8(t + o, r.charCodeAt(o));
}
function Hs(e, t, r) {
  for (let o = 0; o < r.length; o++, t++) {
    let a = Math.max(-1, Math.min(1, r[o])), n = a < 0 ? a * 32768 : a * 32767;
    n = parseInt("" + 255 / (65535 / (n + 32768))), e.setInt8(t, n, !0);
  }
}
function js(e, t, r) {
  for (let o = 0; o < r.length; o++, t += 2) {
    let a = Math.max(-1, Math.min(1, r[o]));
    e.setInt16(t, a < 0 ? a * 32768 : a * 32767, !0);
  }
}
function Ks(e, t, r) {
  for (let o = 0; o < r.length; o++, t += 4)
    e.setFloat32(t, r[o], !0);
}
var uo = /* @__PURE__ */ ((e) => (e["晓晓 - 新闻、小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoxiaoNeural)", e["晓伊 - 卡通、小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoyiNeural)", e["云健 - 运动、小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunjianNeural)", e["云希 - 小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiNeural)", e["云夏 - 卡通、小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiaNeural)", e["云扬 - 新闻"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunyangNeural)", e["辽林 - 方言小贝"] = "Microsoft Server Speech Text to Speech Voice (zh-CN-liaoning, XiaobeiNeural)", e["陕西 - 方言小倪"] = "Microsoft Server Speech Text to Speech Voice (zh-CN-shaanxi, XiaoniNeural)", e.晓晓 = "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoxiaoNeural)", e.晓伊 = "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoyiNeural)", e.云健 = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunjianNeural)", e.云希 = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiNeural)", e.云夏 = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiaNeural)", e.云扬 = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunyangNeural)", e.辽林 = "Microsoft Server Speech Text to Speech Voice (zh-CN-liaoning, XiaobeiNeural)", e.陕西 = "Microsoft Server Speech Text to Speech Voice (zh-CN-shaanxi, XiaoniNeural)", e))(uo || {});
const Ys = [
  {
    Name: "Microsoft Server Speech Text to Speech Voice (af-ZA, AdriNeural)",
    ShortName: "af-ZA-AdriNeural",
    Gender: "Female",
    Locale: "af-ZA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Adri Online (Natural) - Afrikaans (South Africa)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (af-ZA, WillemNeural)",
    ShortName: "af-ZA-WillemNeural",
    Gender: "Male",
    Locale: "af-ZA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Willem Online (Natural) - Afrikaans (South Africa)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sq-AL, AnilaNeural)",
    ShortName: "sq-AL-AnilaNeural",
    Gender: "Female",
    Locale: "sq-AL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Anila Online (Natural) - Albanian (Albania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sq-AL, IlirNeural)",
    ShortName: "sq-AL-IlirNeural",
    Gender: "Male",
    Locale: "sq-AL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ilir Online (Natural) - Albanian (Albania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (am-ET, AmehaNeural)",
    ShortName: "am-ET-AmehaNeural",
    Gender: "Male",
    Locale: "am-ET",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ameha Online (Natural) - Amharic (Ethiopia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (am-ET, MekdesNeural)",
    ShortName: "am-ET-MekdesNeural",
    Gender: "Female",
    Locale: "am-ET",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Mekdes Online (Natural) - Amharic (Ethiopia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-DZ, AminaNeural)",
    ShortName: "ar-DZ-AminaNeural",
    Gender: "Female",
    Locale: "ar-DZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Amina Online (Natural) - Arabic (Algeria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-DZ, IsmaelNeural)",
    ShortName: "ar-DZ-IsmaelNeural",
    Gender: "Male",
    Locale: "ar-DZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ismael Online (Natural) - Arabic (Algeria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-BH, AliNeural)",
    ShortName: "ar-BH-AliNeural",
    Gender: "Male",
    Locale: "ar-BH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ali Online (Natural) - Arabic (Bahrain)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-BH, LailaNeural)",
    ShortName: "ar-BH-LailaNeural",
    Gender: "Female",
    Locale: "ar-BH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Laila Online (Natural) - Arabic (Bahrain)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-EG, SalmaNeural)",
    ShortName: "ar-EG-SalmaNeural",
    Gender: "Female",
    Locale: "ar-EG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Salma Online (Natural) - Arabic (Egypt)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-EG, ShakirNeural)",
    ShortName: "ar-EG-ShakirNeural",
    Gender: "Male",
    Locale: "ar-EG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Shakir Online (Natural) - Arabic (Egypt)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-IQ, BasselNeural)",
    ShortName: "ar-IQ-BasselNeural",
    Gender: "Male",
    Locale: "ar-IQ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Bassel Online (Natural) - Arabic (Iraq)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-IQ, RanaNeural)",
    ShortName: "ar-IQ-RanaNeural",
    Gender: "Female",
    Locale: "ar-IQ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Rana Online (Natural) - Arabic (Iraq)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-JO, SanaNeural)",
    ShortName: "ar-JO-SanaNeural",
    Gender: "Female",
    Locale: "ar-JO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sana Online (Natural) - Arabic (Jordan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-JO, TaimNeural)",
    ShortName: "ar-JO-TaimNeural",
    Gender: "Male",
    Locale: "ar-JO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Taim Online (Natural) - Arabic (Jordan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-KW, FahedNeural)",
    ShortName: "ar-KW-FahedNeural",
    Gender: "Male",
    Locale: "ar-KW",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Fahed Online (Natural) - Arabic (Kuwait)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-KW, NouraNeural)",
    ShortName: "ar-KW-NouraNeural",
    Gender: "Female",
    Locale: "ar-KW",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Noura Online (Natural) - Arabic (Kuwait)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-LB, LaylaNeural)",
    ShortName: "ar-LB-LaylaNeural",
    Gender: "Female",
    Locale: "ar-LB",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Layla Online (Natural) - Arabic (Lebanon)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-LB, RamiNeural)",
    ShortName: "ar-LB-RamiNeural",
    Gender: "Male",
    Locale: "ar-LB",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Rami Online (Natural) - Arabic (Lebanon)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-LY, ImanNeural)",
    ShortName: "ar-LY-ImanNeural",
    Gender: "Female",
    Locale: "ar-LY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Iman Online (Natural) - Arabic (Libya)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-LY, OmarNeural)",
    ShortName: "ar-LY-OmarNeural",
    Gender: "Male",
    Locale: "ar-LY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Omar Online (Natural) - Arabic (Libya)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-MA, JamalNeural)",
    ShortName: "ar-MA-JamalNeural",
    Gender: "Male",
    Locale: "ar-MA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Jamal Online (Natural) - Arabic (Morocco)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-MA, MounaNeural)",
    ShortName: "ar-MA-MounaNeural",
    Gender: "Female",
    Locale: "ar-MA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Mouna Online (Natural) - Arabic (Morocco)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-OM, AbdullahNeural)",
    ShortName: "ar-OM-AbdullahNeural",
    Gender: "Male",
    Locale: "ar-OM",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Abdullah Online (Natural) - Arabic (Oman)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-OM, AyshaNeural)",
    ShortName: "ar-OM-AyshaNeural",
    Gender: "Female",
    Locale: "ar-OM",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Aysha Online (Natural) - Arabic (Oman)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-QA, AmalNeural)",
    ShortName: "ar-QA-AmalNeural",
    Gender: "Female",
    Locale: "ar-QA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Amal Online (Natural) - Arabic (Qatar)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-QA, MoazNeural)",
    ShortName: "ar-QA-MoazNeural",
    Gender: "Male",
    Locale: "ar-QA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Moaz Online (Natural) - Arabic (Qatar)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-SA, HamedNeural)",
    ShortName: "ar-SA-HamedNeural",
    Gender: "Male",
    Locale: "ar-SA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Hamed Online (Natural) - Arabic (Saudi Arabia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-SA, ZariyahNeural)",
    ShortName: "ar-SA-ZariyahNeural",
    Gender: "Female",
    Locale: "ar-SA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Zariyah Online (Natural) - Arabic (Saudi Arabia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-SY, AmanyNeural)",
    ShortName: "ar-SY-AmanyNeural",
    Gender: "Female",
    Locale: "ar-SY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Amany Online (Natural) - Arabic (Syria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-SY, LaithNeural)",
    ShortName: "ar-SY-LaithNeural",
    Gender: "Male",
    Locale: "ar-SY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Laith Online (Natural) - Arabic (Syria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-TN, HediNeural)",
    ShortName: "ar-TN-HediNeural",
    Gender: "Male",
    Locale: "ar-TN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Hedi Online (Natural) - Arabic (Tunisia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-TN, ReemNeural)",
    ShortName: "ar-TN-ReemNeural",
    Gender: "Female",
    Locale: "ar-TN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Reem Online (Natural) - Arabic (Tunisia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-AE, FatimaNeural)",
    ShortName: "ar-AE-FatimaNeural",
    Gender: "Female",
    Locale: "ar-AE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Fatima Online (Natural) - Arabic (United Arab Emirates)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-AE, HamdanNeural)",
    ShortName: "ar-AE-HamdanNeural",
    Gender: "Male",
    Locale: "ar-AE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Hamdan Online (Natural) - Arabic (United Arab Emirates)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-YE, MaryamNeural)",
    ShortName: "ar-YE-MaryamNeural",
    Gender: "Female",
    Locale: "ar-YE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Maryam Online (Natural) - Arabic (Yemen)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ar-YE, SalehNeural)",
    ShortName: "ar-YE-SalehNeural",
    Gender: "Male",
    Locale: "ar-YE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Saleh Online (Natural) - Arabic (Yemen)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (az-AZ, BabekNeural)",
    ShortName: "az-AZ-BabekNeural",
    Gender: "Male",
    Locale: "az-AZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Babek Online (Natural) - Azerbaijani (Azerbaijan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (az-AZ, BanuNeural)",
    ShortName: "az-AZ-BanuNeural",
    Gender: "Female",
    Locale: "az-AZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Banu Online (Natural) - Azerbaijani (Azerbaijan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (bn-BD, NabanitaNeural)",
    ShortName: "bn-BD-NabanitaNeural",
    Gender: "Female",
    Locale: "bn-BD",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Nabanita Online (Natural) - Bangla (Bangladesh)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (bn-BD, PradeepNeural)",
    ShortName: "bn-BD-PradeepNeural",
    Gender: "Male",
    Locale: "bn-BD",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Pradeep Online (Natural) - Bangla (Bangladesh)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (bn-IN, BashkarNeural)",
    ShortName: "bn-IN-BashkarNeural",
    Gender: "Male",
    Locale: "bn-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Bashkar Online (Natural) - Bangla (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (bn-IN, TanishaaNeural)",
    ShortName: "bn-IN-TanishaaNeural",
    Gender: "Female",
    Locale: "bn-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Tanishaa Online (Natural) - Bengali (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (bs-BA, GoranNeural)",
    ShortName: "bs-BA-GoranNeural",
    Gender: "Male",
    Locale: "bs-BA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Goran Online (Natural) - Bosnian (Bosnia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (bs-BA, VesnaNeural)",
    ShortName: "bs-BA-VesnaNeural",
    Gender: "Female",
    Locale: "bs-BA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Vesna Online (Natural) - Bosnian (Bosnia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (bg-BG, BorislavNeural)",
    ShortName: "bg-BG-BorislavNeural",
    Gender: "Male",
    Locale: "bg-BG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Borislav Online (Natural) - Bulgarian (Bulgaria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (bg-BG, KalinaNeural)",
    ShortName: "bg-BG-KalinaNeural",
    Gender: "Female",
    Locale: "bg-BG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Kalina Online (Natural) - Bulgarian (Bulgaria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (my-MM, NilarNeural)",
    ShortName: "my-MM-NilarNeural",
    Gender: "Female",
    Locale: "my-MM",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Nilar Online (Natural) - Burmese (Myanmar)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (my-MM, ThihaNeural)",
    ShortName: "my-MM-ThihaNeural",
    Gender: "Male",
    Locale: "my-MM",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Thiha Online (Natural) - Burmese (Myanmar)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ca-ES, EnricNeural)",
    ShortName: "ca-ES-EnricNeural",
    Gender: "Male",
    Locale: "ca-ES",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Enric Online (Natural) - Catalan (Spain)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ca-ES, JoanaNeural)",
    ShortName: "ca-ES-JoanaNeural",
    Gender: "Female",
    Locale: "ca-ES",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Joana Online (Natural) - Catalan (Spain)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-HK, HiuGaaiNeural)",
    ShortName: "zh-HK-HiuGaaiNeural",
    Gender: "Female",
    Locale: "zh-HK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft HiuGaai Online (Natural) - Chinese (Cantonese Traditional)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-HK, HiuMaanNeural)",
    ShortName: "zh-HK-HiuMaanNeural",
    Gender: "Female",
    Locale: "zh-HK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft HiuMaan Online (Natural) - Chinese (Hong Kong)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-HK, WanLungNeural)",
    ShortName: "zh-HK-WanLungNeural",
    Gender: "Male",
    Locale: "zh-HK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft WanLung Online (Natural) - Chinese (Hong Kong)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoxiaoNeural)",
    ShortName: "zh-CN-XiaoxiaoNeural",
    CN_Name: "晓晓 - 新闻、小说",
    Gender: "Female",
    Locale: "zh-CN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Xiaoxiao Online (Natural) - Chinese (Mainland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "News",
        "Novel"
      ],
      VoicePersonalities: [
        "Warm"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoyiNeural)",
    ShortName: "zh-CN-XiaoyiNeural",
    CN_Name: "晓伊 - 卡通、小说",
    Gender: "Female",
    Locale: "zh-CN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Xiaoyi Online (Natural) - Chinese (Mainland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "Cartoon",
        "Novel"
      ],
      VoicePersonalities: [
        "Lively"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-CN, YunjianNeural)",
    ShortName: "zh-CN-YunjianNeural",
    CN_Name: "云健 - 运动、小说",
    Gender: "Male",
    Locale: "zh-CN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Yunjian Online (Natural) - Chinese (Mainland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "Sports",
        " Novel"
      ],
      VoicePersonalities: [
        "Passion"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiNeural)",
    ShortName: "zh-CN-YunxiNeural",
    CN_Name: "云希 - 小说",
    Gender: "Male",
    Locale: "zh-CN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Yunxi Online (Natural) - Chinese (Mainland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "Novel"
      ],
      VoicePersonalities: [
        "Lively",
        "Sunshine"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiaNeural)",
    ShortName: "zh-CN-YunxiaNeural",
    CN_Name: "云夏 - 卡通、小说",
    Gender: "Male",
    Locale: "zh-CN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Yunxia Online (Natural) - Chinese (Mainland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "Cartoon",
        "Novel"
      ],
      VoicePersonalities: [
        "Cute"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-CN, YunyangNeural)",
    ShortName: "zh-CN-YunyangNeural",
    CN_Name: "云扬 - 新闻",
    Gender: "Male",
    Locale: "zh-CN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Yunyang Online (Natural) - Chinese (Mainland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "News"
      ],
      VoicePersonalities: [
        "Professional",
        "Reliable"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-CN-liaoning, XiaobeiNeural)",
    ShortName: "zh-CN-liaoning-XiaobeiNeural",
    CN_Name: "辽林 - 方言小贝",
    Gender: "Female",
    Locale: "zh-CN-liaoning",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Xiaobei Online (Natural) - Chinese (Northeastern Mandarin)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "Dialect"
      ],
      VoicePersonalities: [
        "Humorous"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-TW, HsiaoChenNeural)",
    ShortName: "zh-TW-HsiaoChenNeural",
    Gender: "Female",
    Locale: "zh-TW",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft HsiaoChen Online (Natural) - Chinese (Taiwan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-TW, YunJheNeural)",
    ShortName: "zh-TW-YunJheNeural",
    Gender: "Male",
    Locale: "zh-TW",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft YunJhe Online (Natural) - Chinese (Taiwan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-TW, HsiaoYuNeural)",
    ShortName: "zh-TW-HsiaoYuNeural",
    Gender: "Female",
    Locale: "zh-TW",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft HsiaoYu Online (Natural) - Chinese (Taiwanese Mandarin)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zh-CN-shaanxi, XiaoniNeural)",
    ShortName: "zh-CN-shaanxi-XiaoniNeural",
    CN_Name: "陕西 - 方言小倪",
    Gender: "Female",
    Locale: "zh-CN-shaanxi",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Xiaoni Online (Natural) - Chinese (Zhongyuan Mandarin Shaanxi)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "Dialect"
      ],
      VoicePersonalities: [
        "Bright"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (hr-HR, GabrijelaNeural)",
    ShortName: "hr-HR-GabrijelaNeural",
    Gender: "Female",
    Locale: "hr-HR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Gabrijela Online (Natural) - Croatian (Croatia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (hr-HR, SreckoNeural)",
    ShortName: "hr-HR-SreckoNeural",
    Gender: "Male",
    Locale: "hr-HR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Srecko Online (Natural) - Croatian (Croatia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (cs-CZ, AntoninNeural)",
    ShortName: "cs-CZ-AntoninNeural",
    Gender: "Male",
    Locale: "cs-CZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Antonin Online (Natural) - Czech (Czech)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (cs-CZ, VlastaNeural)",
    ShortName: "cs-CZ-VlastaNeural",
    Gender: "Female",
    Locale: "cs-CZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Vlasta Online (Natural) - Czech (Czech)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (da-DK, ChristelNeural)",
    ShortName: "da-DK-ChristelNeural",
    Gender: "Female",
    Locale: "da-DK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Christel Online (Natural) - Danish (Denmark)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (da-DK, JeppeNeural)",
    ShortName: "da-DK-JeppeNeural",
    Gender: "Male",
    Locale: "da-DK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Jeppe Online (Natural) - Danish (Denmark)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (nl-BE, ArnaudNeural)",
    ShortName: "nl-BE-ArnaudNeural",
    Gender: "Male",
    Locale: "nl-BE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Arnaud Online (Natural) - Dutch (Belgium)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (nl-BE, DenaNeural)",
    ShortName: "nl-BE-DenaNeural",
    Gender: "Female",
    Locale: "nl-BE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Dena Online (Natural) - Dutch (Belgium)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (nl-NL, ColetteNeural)",
    ShortName: "nl-NL-ColetteNeural",
    Gender: "Female",
    Locale: "nl-NL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Colette Online (Natural) - Dutch (Netherlands)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (nl-NL, FennaNeural)",
    ShortName: "nl-NL-FennaNeural",
    Gender: "Female",
    Locale: "nl-NL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Fenna Online (Natural) - Dutch (Netherlands)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (nl-NL, MaartenNeural)",
    ShortName: "nl-NL-MaartenNeural",
    Gender: "Male",
    Locale: "nl-NL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Maarten Online (Natural) - Dutch (Netherlands)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-AU, NatashaNeural)",
    ShortName: "en-AU-NatashaNeural",
    Gender: "Female",
    Locale: "en-AU",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Natasha Online (Natural) - English (Australia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-AU, WilliamNeural)",
    ShortName: "en-AU-WilliamNeural",
    Gender: "Male",
    Locale: "en-AU",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft William Online (Natural) - English (Australia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-CA, ClaraNeural)",
    ShortName: "en-CA-ClaraNeural",
    Gender: "Female",
    Locale: "en-CA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Clara Online (Natural) - English (Canada)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-CA, LiamNeural)",
    ShortName: "en-CA-LiamNeural",
    Gender: "Male",
    Locale: "en-CA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Liam Online (Natural) - English (Canada)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-HK, SamNeural)",
    ShortName: "en-HK-SamNeural",
    Gender: "Male",
    Locale: "en-HK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sam Online (Natural) - English (Hongkong)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-HK, YanNeural)",
    ShortName: "en-HK-YanNeural",
    Gender: "Female",
    Locale: "en-HK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Yan Online (Natural) - English (Hongkong)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-IN, NeerjaExpressiveNeural)",
    ShortName: "en-IN-NeerjaExpressiveNeural",
    Gender: "Female",
    Locale: "en-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Neerja Online (Natural) - English (India) (Preview)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-IN, NeerjaNeural)",
    ShortName: "en-IN-NeerjaNeural",
    Gender: "Female",
    Locale: "en-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Neerja Online (Natural) - English (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-IN, PrabhatNeural)",
    ShortName: "en-IN-PrabhatNeural",
    Gender: "Male",
    Locale: "en-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Prabhat Online (Natural) - English (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-IE, ConnorNeural)",
    ShortName: "en-IE-ConnorNeural",
    Gender: "Male",
    Locale: "en-IE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Connor Online (Natural) - English (Ireland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-IE, EmilyNeural)",
    ShortName: "en-IE-EmilyNeural",
    Gender: "Female",
    Locale: "en-IE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Emily Online (Natural) - English (Ireland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-KE, AsiliaNeural)",
    ShortName: "en-KE-AsiliaNeural",
    Gender: "Female",
    Locale: "en-KE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Asilia Online (Natural) - English (Kenya)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-KE, ChilembaNeural)",
    ShortName: "en-KE-ChilembaNeural",
    Gender: "Male",
    Locale: "en-KE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Chilemba Online (Natural) - English (Kenya)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-NZ, MitchellNeural)",
    ShortName: "en-NZ-MitchellNeural",
    Gender: "Male",
    Locale: "en-NZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Mitchell Online (Natural) - English (New Zealand)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-NZ, MollyNeural)",
    ShortName: "en-NZ-MollyNeural",
    Gender: "Female",
    Locale: "en-NZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Molly Online (Natural) - English (New Zealand)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-NG, AbeoNeural)",
    ShortName: "en-NG-AbeoNeural",
    Gender: "Male",
    Locale: "en-NG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Abeo Online (Natural) - English (Nigeria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-NG, EzinneNeural)",
    ShortName: "en-NG-EzinneNeural",
    Gender: "Female",
    Locale: "en-NG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ezinne Online (Natural) - English (Nigeria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-PH, JamesNeural)",
    ShortName: "en-PH-JamesNeural",
    Gender: "Male",
    Locale: "en-PH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft James Online (Natural) - English (Philippines)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-PH, RosaNeural)",
    ShortName: "en-PH-RosaNeural",
    Gender: "Female",
    Locale: "en-PH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Rosa Online (Natural) - English (Philippines)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-SG, LunaNeural)",
    ShortName: "en-SG-LunaNeural",
    Gender: "Female",
    Locale: "en-SG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Luna Online (Natural) - English (Singapore)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-SG, WayneNeural)",
    ShortName: "en-SG-WayneNeural",
    Gender: "Male",
    Locale: "en-SG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Wayne Online (Natural) - English (Singapore)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-ZA, LeahNeural)",
    ShortName: "en-ZA-LeahNeural",
    Gender: "Female",
    Locale: "en-ZA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Leah Online (Natural) - English (South Africa)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-ZA, LukeNeural)",
    ShortName: "en-ZA-LukeNeural",
    Gender: "Male",
    Locale: "en-ZA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Luke Online (Natural) - English (South Africa)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-TZ, ElimuNeural)",
    ShortName: "en-TZ-ElimuNeural",
    Gender: "Male",
    Locale: "en-TZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Elimu Online (Natural) - English (Tanzania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-TZ, ImaniNeural)",
    ShortName: "en-TZ-ImaniNeural",
    Gender: "Female",
    Locale: "en-TZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Imani Online (Natural) - English (Tanzania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-GB, LibbyNeural)",
    ShortName: "en-GB-LibbyNeural",
    Gender: "Female",
    Locale: "en-GB",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Libby Online (Natural) - English (United Kingdom)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-GB, MaisieNeural)",
    ShortName: "en-GB-MaisieNeural",
    Gender: "Female",
    Locale: "en-GB",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Maisie Online (Natural) - English (United Kingdom)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-GB, RyanNeural)",
    ShortName: "en-GB-RyanNeural",
    Gender: "Male",
    Locale: "en-GB",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ryan Online (Natural) - English (United Kingdom)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-GB, SoniaNeural)",
    ShortName: "en-GB-SoniaNeural",
    Gender: "Female",
    Locale: "en-GB",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sonia Online (Natural) - English (United Kingdom)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-GB, ThomasNeural)",
    ShortName: "en-GB-ThomasNeural",
    Gender: "Male",
    Locale: "en-GB",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Thomas Online (Natural) - English (United Kingdom)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-US, AriaNeural)",
    ShortName: "en-US-AriaNeural",
    Gender: "Female",
    Locale: "en-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Aria Online (Natural) - English (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "News",
        "Novel"
      ],
      VoicePersonalities: [
        "Positive",
        "Confident"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-US, AnaNeural)",
    ShortName: "en-US-AnaNeural",
    Gender: "Female",
    Locale: "en-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ana Online (Natural) - English (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "Cartoon",
        "Conversation"
      ],
      VoicePersonalities: [
        "Cute"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-US, ChristopherNeural)",
    ShortName: "en-US-ChristopherNeural",
    Gender: "Male",
    Locale: "en-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Christopher Online (Natural) - English (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "News",
        "Novel"
      ],
      VoicePersonalities: [
        "Reliable",
        "Authority"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-US, EricNeural)",
    ShortName: "en-US-EricNeural",
    Gender: "Male",
    Locale: "en-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Eric Online (Natural) - English (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "News",
        "Novel"
      ],
      VoicePersonalities: [
        "Rational"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-US, GuyNeural)",
    ShortName: "en-US-GuyNeural",
    Gender: "Male",
    Locale: "en-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Guy Online (Natural) - English (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "News",
        "Novel"
      ],
      VoicePersonalities: [
        "Passion"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-US, JennyNeural)",
    ShortName: "en-US-JennyNeural",
    Gender: "Female",
    Locale: "en-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Jenny Online (Natural) - English (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "Conversation",
        "News"
      ],
      VoicePersonalities: [
        "Friendly",
        "Considerate",
        "Comfort"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-US, MichelleNeural)",
    ShortName: "en-US-MichelleNeural",
    Gender: "Female",
    Locale: "en-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Michelle Online (Natural) - English (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "News",
        "Novel"
      ],
      VoicePersonalities: [
        "Friendly",
        "Pleasant"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-US, RogerNeural)",
    ShortName: "en-US-RogerNeural",
    Gender: "Male",
    Locale: "en-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Roger Online (Natural) - English (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "News",
        "Novel"
      ],
      VoicePersonalities: [
        "Lively"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (en-US, SteffanNeural)",
    ShortName: "en-US-SteffanNeural",
    Gender: "Male",
    Locale: "en-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Steffan Online (Natural) - English (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "News",
        "Novel"
      ],
      VoicePersonalities: [
        "Rational"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (et-EE, AnuNeural)",
    ShortName: "et-EE-AnuNeural",
    Gender: "Female",
    Locale: "et-EE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Anu Online (Natural) - Estonian (Estonia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (et-EE, KertNeural)",
    ShortName: "et-EE-KertNeural",
    Gender: "Male",
    Locale: "et-EE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Kert Online (Natural) - Estonian (Estonia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fil-PH, AngeloNeural)",
    ShortName: "fil-PH-AngeloNeural",
    Gender: "Male",
    Locale: "fil-PH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Angelo Online (Natural) - Filipino (Philippines)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fil-PH, BlessicaNeural)",
    ShortName: "fil-PH-BlessicaNeural",
    Gender: "Female",
    Locale: "fil-PH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Blessica Online (Natural) - Filipino (Philippines)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fi-FI, HarriNeural)",
    ShortName: "fi-FI-HarriNeural",
    Gender: "Male",
    Locale: "fi-FI",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Harri Online (Natural) - Finnish (Finland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fi-FI, NooraNeural)",
    ShortName: "fi-FI-NooraNeural",
    Gender: "Female",
    Locale: "fi-FI",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Noora Online (Natural) - Finnish (Finland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-BE, CharlineNeural)",
    ShortName: "fr-BE-CharlineNeural",
    Gender: "Female",
    Locale: "fr-BE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Charline Online (Natural) - French (Belgium)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-BE, GerardNeural)",
    ShortName: "fr-BE-GerardNeural",
    Gender: "Male",
    Locale: "fr-BE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Gerard Online (Natural) - French (Belgium)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-CA, AntoineNeural)",
    ShortName: "fr-CA-AntoineNeural",
    Gender: "Male",
    Locale: "fr-CA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Antoine Online (Natural) - French (Canada)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-CA, JeanNeural)",
    ShortName: "fr-CA-JeanNeural",
    Gender: "Male",
    Locale: "fr-CA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Jean Online (Natural) - French (Canada)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-CA, SylvieNeural)",
    ShortName: "fr-CA-SylvieNeural",
    Gender: "Female",
    Locale: "fr-CA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sylvie Online (Natural) - French (Canada)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-FR, DeniseNeural)",
    ShortName: "fr-FR-DeniseNeural",
    Gender: "Female",
    Locale: "fr-FR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Denise Online (Natural) - French (France)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-FR, EloiseNeural)",
    ShortName: "fr-FR-EloiseNeural",
    Gender: "Female",
    Locale: "fr-FR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Eloise Online (Natural) - French (France)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-FR, HenriNeural)",
    ShortName: "fr-FR-HenriNeural",
    Gender: "Male",
    Locale: "fr-FR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Henri Online (Natural) - French (France)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-CH, ArianeNeural)",
    ShortName: "fr-CH-ArianeNeural",
    Gender: "Female",
    Locale: "fr-CH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ariane Online (Natural) - French (Switzerland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fr-CH, FabriceNeural)",
    ShortName: "fr-CH-FabriceNeural",
    Gender: "Male",
    Locale: "fr-CH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Fabrice Online (Natural) - French (Switzerland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (gl-ES, RoiNeural)",
    ShortName: "gl-ES-RoiNeural",
    Gender: "Male",
    Locale: "gl-ES",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Roi Online (Natural) - Galician (Spain)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (gl-ES, SabelaNeural)",
    ShortName: "gl-ES-SabelaNeural",
    Gender: "Female",
    Locale: "gl-ES",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sabela Online (Natural) - Galician (Spain)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ka-GE, EkaNeural)",
    ShortName: "ka-GE-EkaNeural",
    Gender: "Female",
    Locale: "ka-GE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Eka Online (Natural) - Georgian (Georgia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ka-GE, GiorgiNeural)",
    ShortName: "ka-GE-GiorgiNeural",
    Gender: "Male",
    Locale: "ka-GE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Giorgi Online (Natural) - Georgian (Georgia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (de-AT, IngridNeural)",
    ShortName: "de-AT-IngridNeural",
    Gender: "Female",
    Locale: "de-AT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ingrid Online (Natural) - German (Austria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (de-AT, JonasNeural)",
    ShortName: "de-AT-JonasNeural",
    Gender: "Male",
    Locale: "de-AT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Jonas Online (Natural) - German (Austria)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (de-DE, AmalaNeural)",
    ShortName: "de-DE-AmalaNeural",
    Gender: "Female",
    Locale: "de-DE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Amala Online (Natural) - German (Germany)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (de-DE, ConradNeural)",
    ShortName: "de-DE-ConradNeural",
    Gender: "Male",
    Locale: "de-DE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Conrad Online (Natural) - German (Germany)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (de-DE, KatjaNeural)",
    ShortName: "de-DE-KatjaNeural",
    Gender: "Female",
    Locale: "de-DE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Katja Online (Natural) - German (Germany)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (de-DE, KillianNeural)",
    ShortName: "de-DE-KillianNeural",
    Gender: "Male",
    Locale: "de-DE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Killian Online (Natural) - German (Germany)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (de-CH, JanNeural)",
    ShortName: "de-CH-JanNeural",
    Gender: "Male",
    Locale: "de-CH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Jan Online (Natural) - German (Switzerland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (de-CH, LeniNeural)",
    ShortName: "de-CH-LeniNeural",
    Gender: "Female",
    Locale: "de-CH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Leni Online (Natural) - German (Switzerland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (el-GR, AthinaNeural)",
    ShortName: "el-GR-AthinaNeural",
    Gender: "Female",
    Locale: "el-GR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Athina Online (Natural) - Greek (Greece)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (el-GR, NestorasNeural)",
    ShortName: "el-GR-NestorasNeural",
    Gender: "Male",
    Locale: "el-GR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Nestoras Online (Natural) - Greek (Greece)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (gu-IN, DhwaniNeural)",
    ShortName: "gu-IN-DhwaniNeural",
    Gender: "Female",
    Locale: "gu-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Dhwani Online (Natural) - Gujarati (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (gu-IN, NiranjanNeural)",
    ShortName: "gu-IN-NiranjanNeural",
    Gender: "Male",
    Locale: "gu-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Niranjan Online (Natural) - Gujarati (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (he-IL, AvriNeural)",
    ShortName: "he-IL-AvriNeural",
    Gender: "Male",
    Locale: "he-IL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Avri Online (Natural) - Hebrew (Israel)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (he-IL, HilaNeural)",
    ShortName: "he-IL-HilaNeural",
    Gender: "Female",
    Locale: "he-IL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Hila Online (Natural) - Hebrew (Israel)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (hi-IN, MadhurNeural)",
    ShortName: "hi-IN-MadhurNeural",
    Gender: "Male",
    Locale: "hi-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Madhur Online (Natural) - Hindi (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (hi-IN, SwaraNeural)",
    ShortName: "hi-IN-SwaraNeural",
    Gender: "Female",
    Locale: "hi-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Swara Online (Natural) - Hindi (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (hu-HU, NoemiNeural)",
    ShortName: "hu-HU-NoemiNeural",
    Gender: "Female",
    Locale: "hu-HU",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Noemi Online (Natural) - Hungarian (Hungary)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (hu-HU, TamasNeural)",
    ShortName: "hu-HU-TamasNeural",
    Gender: "Male",
    Locale: "hu-HU",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Tamas Online (Natural) - Hungarian (Hungary)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (is-IS, GudrunNeural)",
    ShortName: "is-IS-GudrunNeural",
    Gender: "Female",
    Locale: "is-IS",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Gudrun Online (Natural) - Icelandic (Iceland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (is-IS, GunnarNeural)",
    ShortName: "is-IS-GunnarNeural",
    Gender: "Male",
    Locale: "is-IS",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Gunnar Online (Natural) - Icelandic (Iceland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (id-ID, ArdiNeural)",
    ShortName: "id-ID-ArdiNeural",
    Gender: "Male",
    Locale: "id-ID",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ardi Online (Natural) - Indonesian (Indonesia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (id-ID, GadisNeural)",
    ShortName: "id-ID-GadisNeural",
    Gender: "Female",
    Locale: "id-ID",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Gadis Online (Natural) - Indonesian (Indonesia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ga-IE, ColmNeural)",
    ShortName: "ga-IE-ColmNeural",
    Gender: "Male",
    Locale: "ga-IE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Colm Online (Natural) - Irish (Ireland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ga-IE, OrlaNeural)",
    ShortName: "ga-IE-OrlaNeural",
    Gender: "Female",
    Locale: "ga-IE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Orla Online (Natural) - Irish (Ireland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (it-IT, DiegoNeural)",
    ShortName: "it-IT-DiegoNeural",
    Gender: "Male",
    Locale: "it-IT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Diego Online (Natural) - Italian (Italy)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (it-IT, ElsaNeural)",
    ShortName: "it-IT-ElsaNeural",
    Gender: "Female",
    Locale: "it-IT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Elsa Online (Natural) - Italian (Italy)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (it-IT, IsabellaNeural)",
    ShortName: "it-IT-IsabellaNeural",
    Gender: "Female",
    Locale: "it-IT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Isabella Online (Natural) - Italian (Italy)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ja-JP, KeitaNeural)",
    ShortName: "ja-JP-KeitaNeural",
    Gender: "Male",
    Locale: "ja-JP",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Keita Online (Natural) - Japanese (Japan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ja-JP, NanamiNeural)",
    ShortName: "ja-JP-NanamiNeural",
    Gender: "Female",
    Locale: "ja-JP",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Nanami Online (Natural) - Japanese (Japan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (jv-ID, DimasNeural)",
    ShortName: "jv-ID-DimasNeural",
    Gender: "Male",
    Locale: "jv-ID",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Dimas Online (Natural) - Javanese (Indonesia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (jv-ID, SitiNeural)",
    ShortName: "jv-ID-SitiNeural",
    Gender: "Female",
    Locale: "jv-ID",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Siti Online (Natural) - Javanese (Indonesia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (kn-IN, GaganNeural)",
    ShortName: "kn-IN-GaganNeural",
    Gender: "Male",
    Locale: "kn-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Gagan Online (Natural) - Kannada (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (kn-IN, SapnaNeural)",
    ShortName: "kn-IN-SapnaNeural",
    Gender: "Female",
    Locale: "kn-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sapna Online (Natural) - Kannada (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (kk-KZ, AigulNeural)",
    ShortName: "kk-KZ-AigulNeural",
    Gender: "Female",
    Locale: "kk-KZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Aigul Online (Natural) - Kazakh (Kazakhstan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (kk-KZ, DauletNeural)",
    ShortName: "kk-KZ-DauletNeural",
    Gender: "Male",
    Locale: "kk-KZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Daulet Online (Natural) - Kazakh (Kazakhstan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (km-KH, PisethNeural)",
    ShortName: "km-KH-PisethNeural",
    Gender: "Male",
    Locale: "km-KH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Piseth Online (Natural) - Khmer (Cambodia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (km-KH, SreymomNeural)",
    ShortName: "km-KH-SreymomNeural",
    Gender: "Female",
    Locale: "km-KH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sreymom Online (Natural) - Khmer (Cambodia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ko-KR, InJoonNeural)",
    ShortName: "ko-KR-InJoonNeural",
    Gender: "Male",
    Locale: "ko-KR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft InJoon Online (Natural) - Korean (Korea)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ko-KR, SunHiNeural)",
    ShortName: "ko-KR-SunHiNeural",
    Gender: "Female",
    Locale: "ko-KR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft SunHi Online (Natural) - Korean (Korea)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (lo-LA, ChanthavongNeural)",
    ShortName: "lo-LA-ChanthavongNeural",
    Gender: "Male",
    Locale: "lo-LA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Chanthavong Online (Natural) - Lao (Laos)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (lo-LA, KeomanyNeural)",
    ShortName: "lo-LA-KeomanyNeural",
    Gender: "Female",
    Locale: "lo-LA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Keomany Online (Natural) - Lao (Laos)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (lv-LV, EveritaNeural)",
    ShortName: "lv-LV-EveritaNeural",
    Gender: "Female",
    Locale: "lv-LV",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Everita Online (Natural) - Latvian (Latvia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (lv-LV, NilsNeural)",
    ShortName: "lv-LV-NilsNeural",
    Gender: "Male",
    Locale: "lv-LV",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Nils Online (Natural) - Latvian (Latvia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (lt-LT, LeonasNeural)",
    ShortName: "lt-LT-LeonasNeural",
    Gender: "Male",
    Locale: "lt-LT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Leonas Online (Natural) - Lithuanian (Lithuania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (lt-LT, OnaNeural)",
    ShortName: "lt-LT-OnaNeural",
    Gender: "Female",
    Locale: "lt-LT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ona Online (Natural) - Lithuanian (Lithuania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (mk-MK, AleksandarNeural)",
    ShortName: "mk-MK-AleksandarNeural",
    Gender: "Male",
    Locale: "mk-MK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Aleksandar Online (Natural) - Macedonian (Republic of North Macedonia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (mk-MK, MarijaNeural)",
    ShortName: "mk-MK-MarijaNeural",
    Gender: "Female",
    Locale: "mk-MK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Marija Online (Natural) - Macedonian (Republic of North Macedonia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ms-MY, OsmanNeural)",
    ShortName: "ms-MY-OsmanNeural",
    Gender: "Male",
    Locale: "ms-MY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Osman Online (Natural) - Malay (Malaysia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ms-MY, YasminNeural)",
    ShortName: "ms-MY-YasminNeural",
    Gender: "Female",
    Locale: "ms-MY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Yasmin Online (Natural) - Malay (Malaysia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ml-IN, MidhunNeural)",
    ShortName: "ml-IN-MidhunNeural",
    Gender: "Male",
    Locale: "ml-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Midhun Online (Natural) - Malayalam (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ml-IN, SobhanaNeural)",
    ShortName: "ml-IN-SobhanaNeural",
    Gender: "Female",
    Locale: "ml-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sobhana Online (Natural) - Malayalam (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (mt-MT, GraceNeural)",
    ShortName: "mt-MT-GraceNeural",
    Gender: "Female",
    Locale: "mt-MT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Grace Online (Natural) - Maltese (Malta)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (mt-MT, JosephNeural)",
    ShortName: "mt-MT-JosephNeural",
    Gender: "Male",
    Locale: "mt-MT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Joseph Online (Natural) - Maltese (Malta)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (mr-IN, AarohiNeural)",
    ShortName: "mr-IN-AarohiNeural",
    Gender: "Female",
    Locale: "mr-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Aarohi Online (Natural) - Marathi (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (mr-IN, ManoharNeural)",
    ShortName: "mr-IN-ManoharNeural",
    Gender: "Male",
    Locale: "mr-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Manohar Online (Natural) - Marathi (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (mn-MN, BataaNeural)",
    ShortName: "mn-MN-BataaNeural",
    Gender: "Male",
    Locale: "mn-MN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Bataa Online (Natural) - Mongolian (Mongolia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (mn-MN, YesuiNeural)",
    ShortName: "mn-MN-YesuiNeural",
    Gender: "Female",
    Locale: "mn-MN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Yesui Online (Natural) - Mongolian (Mongolia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ne-NP, HemkalaNeural)",
    ShortName: "ne-NP-HemkalaNeural",
    Gender: "Female",
    Locale: "ne-NP",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Hemkala Online (Natural) - Nepali (Nepal)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ne-NP, SagarNeural)",
    ShortName: "ne-NP-SagarNeural",
    Gender: "Male",
    Locale: "ne-NP",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sagar Online (Natural) - Nepali (Nepal)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (nb-NO, FinnNeural)",
    ShortName: "nb-NO-FinnNeural",
    Gender: "Male",
    Locale: "nb-NO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Finn Online (Natural) - Norwegian (Bokmål Norway)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (nb-NO, PernilleNeural)",
    ShortName: "nb-NO-PernilleNeural",
    Gender: "Female",
    Locale: "nb-NO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Pernille Online (Natural) - Norwegian (Bokmål, Norway)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ps-AF, GulNawazNeural)",
    ShortName: "ps-AF-GulNawazNeural",
    Gender: "Male",
    Locale: "ps-AF",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft GulNawaz Online (Natural) - Pashto (Afghanistan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ps-AF, LatifaNeural)",
    ShortName: "ps-AF-LatifaNeural",
    Gender: "Female",
    Locale: "ps-AF",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Latifa Online (Natural) - Pashto (Afghanistan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fa-IR, DilaraNeural)",
    ShortName: "fa-IR-DilaraNeural",
    Gender: "Female",
    Locale: "fa-IR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Dilara Online (Natural) - Persian (Iran)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (fa-IR, FaridNeural)",
    ShortName: "fa-IR-FaridNeural",
    Gender: "Male",
    Locale: "fa-IR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Farid Online (Natural) - Persian (Iran)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (pl-PL, MarekNeural)",
    ShortName: "pl-PL-MarekNeural",
    Gender: "Male",
    Locale: "pl-PL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Marek Online (Natural) - Polish (Poland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (pl-PL, ZofiaNeural)",
    ShortName: "pl-PL-ZofiaNeural",
    Gender: "Female",
    Locale: "pl-PL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Zofia Online (Natural) - Polish (Poland)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (pt-BR, AntonioNeural)",
    ShortName: "pt-BR-AntonioNeural",
    Gender: "Male",
    Locale: "pt-BR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Antonio Online (Natural) - Portuguese (Brazil)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (pt-BR, FranciscaNeural)",
    ShortName: "pt-BR-FranciscaNeural",
    Gender: "Female",
    Locale: "pt-BR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Francisca Online (Natural) - Portuguese (Brazil)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (pt-PT, DuarteNeural)",
    ShortName: "pt-PT-DuarteNeural",
    Gender: "Male",
    Locale: "pt-PT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Duarte Online (Natural) - Portuguese (Portugal)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (pt-PT, RaquelNeural)",
    ShortName: "pt-PT-RaquelNeural",
    Gender: "Female",
    Locale: "pt-PT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Raquel Online (Natural) - Portuguese (Portugal)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ro-RO, AlinaNeural)",
    ShortName: "ro-RO-AlinaNeural",
    Gender: "Female",
    Locale: "ro-RO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Alina Online (Natural) - Romanian (Romania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ro-RO, EmilNeural)",
    ShortName: "ro-RO-EmilNeural",
    Gender: "Male",
    Locale: "ro-RO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Emil Online (Natural) - Romanian (Romania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ru-RU, DmitryNeural)",
    ShortName: "ru-RU-DmitryNeural",
    Gender: "Male",
    Locale: "ru-RU",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Dmitry Online (Natural) - Russian (Russia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ru-RU, SvetlanaNeural)",
    ShortName: "ru-RU-SvetlanaNeural",
    Gender: "Female",
    Locale: "ru-RU",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Svetlana Online (Natural) - Russian (Russia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sr-RS, NicholasNeural)",
    ShortName: "sr-RS-NicholasNeural",
    Gender: "Male",
    Locale: "sr-RS",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Nicholas Online (Natural) - Serbian (Serbia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sr-RS, SophieNeural)",
    ShortName: "sr-RS-SophieNeural",
    Gender: "Female",
    Locale: "sr-RS",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sophie Online (Natural) - Serbian (Serbia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (si-LK, SameeraNeural)",
    ShortName: "si-LK-SameeraNeural",
    Gender: "Male",
    Locale: "si-LK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sameera Online (Natural) - Sinhala (Sri Lanka)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (si-LK, ThiliniNeural)",
    ShortName: "si-LK-ThiliniNeural",
    Gender: "Female",
    Locale: "si-LK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Thilini Online (Natural) - Sinhala (Sri Lanka)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sk-SK, LukasNeural)",
    ShortName: "sk-SK-LukasNeural",
    Gender: "Male",
    Locale: "sk-SK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Lukas Online (Natural) - Slovak (Slovakia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sk-SK, ViktoriaNeural)",
    ShortName: "sk-SK-ViktoriaNeural",
    Gender: "Female",
    Locale: "sk-SK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Viktoria Online (Natural) - Slovak (Slovakia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sl-SI, PetraNeural)",
    ShortName: "sl-SI-PetraNeural",
    Gender: "Female",
    Locale: "sl-SI",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Petra Online (Natural) - Slovenian (Slovenia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sl-SI, RokNeural)",
    ShortName: "sl-SI-RokNeural",
    Gender: "Male",
    Locale: "sl-SI",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Rok Online (Natural) - Slovenian (Slovenia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (so-SO, MuuseNeural)",
    ShortName: "so-SO-MuuseNeural",
    Gender: "Male",
    Locale: "so-SO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Muuse Online (Natural) - Somali (Somalia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (so-SO, UbaxNeural)",
    ShortName: "so-SO-UbaxNeural",
    Gender: "Female",
    Locale: "so-SO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ubax Online (Natural) - Somali (Somalia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-AR, ElenaNeural)",
    ShortName: "es-AR-ElenaNeural",
    Gender: "Female",
    Locale: "es-AR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Elena Online (Natural) - Spanish (Argentina)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-AR, TomasNeural)",
    ShortName: "es-AR-TomasNeural",
    Gender: "Male",
    Locale: "es-AR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Tomas Online (Natural) - Spanish (Argentina)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-BO, MarceloNeural)",
    ShortName: "es-BO-MarceloNeural",
    Gender: "Male",
    Locale: "es-BO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Marcelo Online (Natural) - Spanish (Bolivia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-BO, SofiaNeural)",
    ShortName: "es-BO-SofiaNeural",
    Gender: "Female",
    Locale: "es-BO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sofia Online (Natural) - Spanish (Bolivia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-CL, CatalinaNeural)",
    ShortName: "es-CL-CatalinaNeural",
    Gender: "Female",
    Locale: "es-CL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Catalina Online (Natural) - Spanish (Chile)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-CL, LorenzoNeural)",
    ShortName: "es-CL-LorenzoNeural",
    Gender: "Male",
    Locale: "es-CL",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Lorenzo Online (Natural) - Spanish (Chile)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-CO, GonzaloNeural)",
    ShortName: "es-CO-GonzaloNeural",
    Gender: "Male",
    Locale: "es-CO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Gonzalo Online (Natural) - Spanish (Colombia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-CO, SalomeNeural)",
    ShortName: "es-CO-SalomeNeural",
    Gender: "Female",
    Locale: "es-CO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Salome Online (Natural) - Spanish (Colombia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-CR, JuanNeural)",
    ShortName: "es-CR-JuanNeural",
    Gender: "Male",
    Locale: "es-CR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Juan Online (Natural) - Spanish (Costa Rica)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-CR, MariaNeural)",
    ShortName: "es-CR-MariaNeural",
    Gender: "Female",
    Locale: "es-CR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Maria Online (Natural) - Spanish (Costa Rica)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-CU, BelkysNeural)",
    ShortName: "es-CU-BelkysNeural",
    Gender: "Female",
    Locale: "es-CU",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Belkys Online (Natural) - Spanish (Cuba)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-CU, ManuelNeural)",
    ShortName: "es-CU-ManuelNeural",
    Gender: "Male",
    Locale: "es-CU",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Manuel Online (Natural) - Spanish (Cuba)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-DO, EmilioNeural)",
    ShortName: "es-DO-EmilioNeural",
    Gender: "Male",
    Locale: "es-DO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Emilio Online (Natural) - Spanish (Dominican Republic)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-DO, RamonaNeural)",
    ShortName: "es-DO-RamonaNeural",
    Gender: "Female",
    Locale: "es-DO",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ramona Online (Natural) - Spanish (Dominican Republic)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-EC, AndreaNeural)",
    ShortName: "es-EC-AndreaNeural",
    Gender: "Female",
    Locale: "es-EC",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Andrea Online (Natural) - Spanish (Ecuador)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-EC, LuisNeural)",
    ShortName: "es-EC-LuisNeural",
    Gender: "Male",
    Locale: "es-EC",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Luis Online (Natural) - Spanish (Ecuador)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-SV, LorenaNeural)",
    ShortName: "es-SV-LorenaNeural",
    Gender: "Female",
    Locale: "es-SV",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Lorena Online (Natural) - Spanish (El Salvador)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-SV, RodrigoNeural)",
    ShortName: "es-SV-RodrigoNeural",
    Gender: "Male",
    Locale: "es-SV",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Rodrigo Online (Natural) - Spanish (El Salvador)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-GQ, JavierNeural)",
    ShortName: "es-GQ-JavierNeural",
    Gender: "Male",
    Locale: "es-GQ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Javier Online (Natural) - Spanish (Equatorial Guinea)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-GQ, TeresaNeural)",
    ShortName: "es-GQ-TeresaNeural",
    Gender: "Female",
    Locale: "es-GQ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Teresa Online (Natural) - Spanish (Equatorial Guinea)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-GT, AndresNeural)",
    ShortName: "es-GT-AndresNeural",
    Gender: "Male",
    Locale: "es-GT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Andres Online (Natural) - Spanish (Guatemala)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-GT, MartaNeural)",
    ShortName: "es-GT-MartaNeural",
    Gender: "Female",
    Locale: "es-GT",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Marta Online (Natural) - Spanish (Guatemala)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-HN, CarlosNeural)",
    ShortName: "es-HN-CarlosNeural",
    Gender: "Male",
    Locale: "es-HN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Carlos Online (Natural) - Spanish (Honduras)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-HN, KarlaNeural)",
    ShortName: "es-HN-KarlaNeural",
    Gender: "Female",
    Locale: "es-HN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Karla Online (Natural) - Spanish (Honduras)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-MX, DaliaNeural)",
    ShortName: "es-MX-DaliaNeural",
    Gender: "Female",
    Locale: "es-MX",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Dalia Online (Natural) - Spanish (Mexico)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-MX, JorgeNeural)",
    ShortName: "es-MX-JorgeNeural",
    Gender: "Male",
    Locale: "es-MX",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Jorge Online (Natural) - Spanish (Mexico)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-NI, FedericoNeural)",
    ShortName: "es-NI-FedericoNeural",
    Gender: "Male",
    Locale: "es-NI",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Federico Online (Natural) - Spanish (Nicaragua)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-NI, YolandaNeural)",
    ShortName: "es-NI-YolandaNeural",
    Gender: "Female",
    Locale: "es-NI",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Yolanda Online (Natural) - Spanish (Nicaragua)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-PA, MargaritaNeural)",
    ShortName: "es-PA-MargaritaNeural",
    Gender: "Female",
    Locale: "es-PA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Margarita Online (Natural) - Spanish (Panama)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-PA, RobertoNeural)",
    ShortName: "es-PA-RobertoNeural",
    Gender: "Male",
    Locale: "es-PA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Roberto Online (Natural) - Spanish (Panama)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-PY, MarioNeural)",
    ShortName: "es-PY-MarioNeural",
    Gender: "Male",
    Locale: "es-PY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Mario Online (Natural) - Spanish (Paraguay)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-PY, TaniaNeural)",
    ShortName: "es-PY-TaniaNeural",
    Gender: "Female",
    Locale: "es-PY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Tania Online (Natural) - Spanish (Paraguay)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-PE, AlexNeural)",
    ShortName: "es-PE-AlexNeural",
    Gender: "Male",
    Locale: "es-PE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Alex Online (Natural) - Spanish (Peru)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-PE, CamilaNeural)",
    ShortName: "es-PE-CamilaNeural",
    Gender: "Female",
    Locale: "es-PE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Camila Online (Natural) - Spanish (Peru)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-PR, KarinaNeural)",
    ShortName: "es-PR-KarinaNeural",
    Gender: "Female",
    Locale: "es-PR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Karina Online (Natural) - Spanish (Puerto Rico)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-PR, VictorNeural)",
    ShortName: "es-PR-VictorNeural",
    Gender: "Male",
    Locale: "es-PR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Victor Online (Natural) - Spanish (Puerto Rico)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-ES, AlvaroNeural)",
    ShortName: "es-ES-AlvaroNeural",
    Gender: "Male",
    Locale: "es-ES",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Alvaro Online (Natural) - Spanish (Spain)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-ES, ElviraNeural)",
    ShortName: "es-ES-ElviraNeural",
    Gender: "Female",
    Locale: "es-ES",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Elvira Online (Natural) - Spanish (Spain)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-US, AlonsoNeural)",
    ShortName: "es-US-AlonsoNeural",
    Gender: "Male",
    Locale: "es-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Alonso Online (Natural) - Spanish (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-US, PalomaNeural)",
    ShortName: "es-US-PalomaNeural",
    Gender: "Female",
    Locale: "es-US",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Paloma Online (Natural) - Spanish (United States)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-UY, MateoNeural)",
    ShortName: "es-UY-MateoNeural",
    Gender: "Male",
    Locale: "es-UY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Mateo Online (Natural) - Spanish (Uruguay)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-UY, ValentinaNeural)",
    ShortName: "es-UY-ValentinaNeural",
    Gender: "Female",
    Locale: "es-UY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Valentina Online (Natural) - Spanish (Uruguay)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-VE, PaolaNeural)",
    ShortName: "es-VE-PaolaNeural",
    Gender: "Female",
    Locale: "es-VE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Paola Online (Natural) - Spanish (Venezuela)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (es-VE, SebastianNeural)",
    ShortName: "es-VE-SebastianNeural",
    Gender: "Male",
    Locale: "es-VE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sebastian Online (Natural) - Spanish (Venezuela)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (su-ID, JajangNeural)",
    ShortName: "su-ID-JajangNeural",
    Gender: "Male",
    Locale: "su-ID",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Jajang Online (Natural) - Sundanese (Indonesia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (su-ID, TutiNeural)",
    ShortName: "su-ID-TutiNeural",
    Gender: "Female",
    Locale: "su-ID",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Tuti Online (Natural) - Sundanese (Indonesia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sw-KE, RafikiNeural)",
    ShortName: "sw-KE-RafikiNeural",
    Gender: "Male",
    Locale: "sw-KE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Rafiki Online (Natural) - Swahili (Kenya)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sw-KE, ZuriNeural)",
    ShortName: "sw-KE-ZuriNeural",
    Gender: "Female",
    Locale: "sw-KE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Zuri Online (Natural) - Swahili (Kenya)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sw-TZ, DaudiNeural)",
    ShortName: "sw-TZ-DaudiNeural",
    Gender: "Male",
    Locale: "sw-TZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Daudi Online (Natural) - Swahili (Tanzania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sw-TZ, RehemaNeural)",
    ShortName: "sw-TZ-RehemaNeural",
    Gender: "Female",
    Locale: "sw-TZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Rehema Online (Natural) - Swahili (Tanzania)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sv-SE, MattiasNeural)",
    ShortName: "sv-SE-MattiasNeural",
    Gender: "Male",
    Locale: "sv-SE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Mattias Online (Natural) - Swedish (Sweden)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (sv-SE, SofieNeural)",
    ShortName: "sv-SE-SofieNeural",
    Gender: "Female",
    Locale: "sv-SE",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sofie Online (Natural) - Swedish (Sweden)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ta-IN, PallaviNeural)",
    ShortName: "ta-IN-PallaviNeural",
    Gender: "Female",
    Locale: "ta-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Pallavi Online (Natural) - Tamil (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ta-IN, ValluvarNeural)",
    ShortName: "ta-IN-ValluvarNeural",
    Gender: "Male",
    Locale: "ta-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Valluvar Online (Natural) - Tamil (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ta-MY, KaniNeural)",
    ShortName: "ta-MY-KaniNeural",
    Gender: "Female",
    Locale: "ta-MY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Kani Online (Natural) - Tamil (Malaysia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ta-MY, SuryaNeural)",
    ShortName: "ta-MY-SuryaNeural",
    Gender: "Male",
    Locale: "ta-MY",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Surya Online (Natural) - Tamil (Malaysia)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ta-SG, AnbuNeural)",
    ShortName: "ta-SG-AnbuNeural",
    Gender: "Male",
    Locale: "ta-SG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Anbu Online (Natural) - Tamil (Singapore)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ta-SG, VenbaNeural)",
    ShortName: "ta-SG-VenbaNeural",
    Gender: "Female",
    Locale: "ta-SG",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Venba Online (Natural) - Tamil (Singapore)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ta-LK, KumarNeural)",
    ShortName: "ta-LK-KumarNeural",
    Gender: "Male",
    Locale: "ta-LK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Kumar Online (Natural) - Tamil (Sri Lanka)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ta-LK, SaranyaNeural)",
    ShortName: "ta-LK-SaranyaNeural",
    Gender: "Female",
    Locale: "ta-LK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Saranya Online (Natural) - Tamil (Sri Lanka)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (te-IN, MohanNeural)",
    ShortName: "te-IN-MohanNeural",
    Gender: "Male",
    Locale: "te-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Mohan Online (Natural) - Telugu (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (te-IN, ShrutiNeural)",
    ShortName: "te-IN-ShrutiNeural",
    Gender: "Female",
    Locale: "te-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Shruti Online (Natural) - Telugu (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (th-TH, NiwatNeural)",
    ShortName: "th-TH-NiwatNeural",
    Gender: "Male",
    Locale: "th-TH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Niwat Online (Natural) - Thai (Thailand)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (th-TH, PremwadeeNeural)",
    ShortName: "th-TH-PremwadeeNeural",
    Gender: "Female",
    Locale: "th-TH",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Premwadee Online (Natural) - Thai (Thailand)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (tr-TR, AhmetNeural)",
    ShortName: "tr-TR-AhmetNeural",
    Gender: "Male",
    Locale: "tr-TR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ahmet Online (Natural) - Turkish (Turkey)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (tr-TR, EmelNeural)",
    ShortName: "tr-TR-EmelNeural",
    Gender: "Female",
    Locale: "tr-TR",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Emel Online (Natural) - Turkish (Turkey)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (uk-UA, OstapNeural)",
    ShortName: "uk-UA-OstapNeural",
    Gender: "Male",
    Locale: "uk-UA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Ostap Online (Natural) - Ukrainian (Ukraine)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (uk-UA, PolinaNeural)",
    ShortName: "uk-UA-PolinaNeural",
    Gender: "Female",
    Locale: "uk-UA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Polina Online (Natural) - Ukrainian (Ukraine)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ur-IN, GulNeural)",
    ShortName: "ur-IN-GulNeural",
    Gender: "Female",
    Locale: "ur-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Gul Online (Natural) - Urdu (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ur-IN, SalmanNeural)",
    ShortName: "ur-IN-SalmanNeural",
    Gender: "Male",
    Locale: "ur-IN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Salman Online (Natural) - Urdu (India)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ur-PK, AsadNeural)",
    ShortName: "ur-PK-AsadNeural",
    Gender: "Male",
    Locale: "ur-PK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Asad Online (Natural) - Urdu (Pakistan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (ur-PK, UzmaNeural)",
    ShortName: "ur-PK-UzmaNeural",
    Gender: "Female",
    Locale: "ur-PK",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Uzma Online (Natural) - Urdu (Pakistan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (uz-UZ, MadinaNeural)",
    ShortName: "uz-UZ-MadinaNeural",
    Gender: "Female",
    Locale: "uz-UZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Madina Online (Natural) - Uzbek (Uzbekistan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (uz-UZ, SardorNeural)",
    ShortName: "uz-UZ-SardorNeural",
    Gender: "Male",
    Locale: "uz-UZ",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Sardor Online (Natural) - Uzbek (Uzbekistan)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (vi-VN, HoaiMyNeural)",
    ShortName: "vi-VN-HoaiMyNeural",
    Gender: "Female",
    Locale: "vi-VN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft HoaiMy Online (Natural) - Vietnamese (Vietnam)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (vi-VN, NamMinhNeural)",
    ShortName: "vi-VN-NamMinhNeural",
    Gender: "Male",
    Locale: "vi-VN",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft NamMinh Online (Natural) - Vietnamese (Vietnam)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (cy-GB, AledNeural)",
    ShortName: "cy-GB-AledNeural",
    Gender: "Male",
    Locale: "cy-GB",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Aled Online (Natural) - Welsh (United Kingdom)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (cy-GB, NiaNeural)",
    ShortName: "cy-GB-NiaNeural",
    Gender: "Female",
    Locale: "cy-GB",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Nia Online (Natural) - Welsh (United Kingdom)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zu-ZA, ThandoNeural)",
    ShortName: "zu-ZA-ThandoNeural",
    Gender: "Female",
    Locale: "zu-ZA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Thando Online (Natural) - Zulu (South Africa)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  },
  {
    Name: "Microsoft Server Speech Text to Speech Voice (zu-ZA, ThembaNeural)",
    ShortName: "zu-ZA-ThembaNeural",
    Gender: "Male",
    Locale: "zu-ZA",
    SuggestedCodec: "audio-24khz-48kbitrate-mono-mp3",
    FriendlyName: "Microsoft Themba Online (Natural) - Zulu (South Africa)",
    Status: "GA",
    VoiceTag: {
      ContentCategories: [
        "General"
      ],
      VoicePersonalities: [
        "Friendly",
        "Positive"
      ]
    }
  }
], ve = {
  name: uo.云希,
  rate: 1.3,
  volume: 100
}, Js = [
  { label: "晓晓", value: "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoxiaoNeural)" },
  { label: "晓伊", value: "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoyiNeural)" },
  { label: "云健", value: "Microsoft Server Speech Text to Speech Voice (zh-CN, YunjianNeural)" },
  { label: "云希", value: "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiNeural)" },
  { label: "云夏", value: "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiaNeural)" },
  { label: "云扬", value: "Microsoft Server Speech Text to Speech Voice (zh-CN, YunyangNeural)" },
  { label: "辽林", value: "Microsoft Server Speech Text to Speech Voice (zh-CN-liaoning, XiaobeiNeural)" },
  { label: "陕西", value: "Microsoft Server Speech Text to Speech Voice (zh-CN-shaanxi, XiaoniNeural)" }
], $s = Ys, Zs = "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='https://www.w3.org/2001/mstts' xml:lang='en-US'>{voice}</speak>", qs = "<voice name='{name}'><prosody pitch='+0Hz' rate='{rate}' volume='{volume}'>{text}</prosody></voice>";
class Ws {
  /** 获取 UUID */
  getUuid() {
    return "ce85b028cbccebfc8a84d38dda106db7".replace(/[a-z0-9]/g, (t) => {
      const r = Math.random() * 16 | 0;
      return (t == "x" ? r : r & 3 | 8).toString(16);
    });
  }
  /**
   * 替换字符串中的变量 {var}
   * @param text 字符串
   * @param data 替换变量的对象
   * @param regexp 自定义正则匹配变量 默认 `/\{([a-zA-Z0-9]+)\}/g => {var}`
   */
  textVarReplace(t, r = {}, o = /\{([a-zA-Z0-9]+)\}/g) {
    return t.replace(o, (a, n) => Li(r, n, n));
  }
  /**
   * 合并多个 arrayBuffers 对象
   * @param arrayBuffers
   * @returns 合并后的单独arrayBuffers对象
   */
  mergeArrayBuffers(t) {
    const r = t.reduce((l, f) => l + f.byteLength, 0), o = new ArrayBuffer(r), a = new Uint8Array(o);
    let n = 0;
    return t.forEach((l) => {
      const f = new Uint8Array(l);
      a.set(f, n), n += l.byteLength;
    }), o;
  }
  /**
   * 将 arrayBuffers 转换为 Blob 对象
   * @param arrayBuffers
   * @returns Blob对象
   */
  arrayBufferToBlob(t) {
    return new Blob(t, { type: "application/octet-stream" });
  }
  /**
   * 将 blob 转换为 arrayBuffers 对象
   * @param blob
   * @returns arrayBuffers 对象
   */
  blobToArrayBuffer(t) {
    return new Promise((r) => {
      const o = new FileReader();
      o.readAsArrayBuffer(t), o.onloadend = function() {
        const a = o.result;
        r(a);
      };
    });
  }
  /** 将Edge输出的时间转为 hh:mm:ss,ssss */
  convertNumberToTime(t) {
    const r = t / 1e7, o = Math.floor(r / 3600), a = Math.floor(r % 3600 / 60), n = Math.floor(r % 60), l = Math.floor((r - Math.floor(r)) * 1e3);
    return (o < 10 ? "0" + o : o) + ":" + (a < 10 ? "0" + a : a) + ":" + (n < 10 ? "0" + n : n) + "," + (l < 10 ? "00" + l : l < 100 ? "0" + l : l);
  }
}
class Xs {
  constructor() {
    se(this, "voiceMap");
    se(this, "utils", new Ws());
    this.voiceMap = this.voiceToMap($s);
  }
  /** Voice list 转换为 { [Local]: Voice } */
  voiceToMap(t) {
    return t.reduce((r, o) => (r.hasOwnProperty(o.Locale) ? r[o.Locale].push(o) : r[o.Locale] = [o], r), {});
  }
  /** 将文本转为SSML，如果是SSML直接返回 */
  textToSsml(t, r) {
    let o = t.trim();
    if (!o.startsWith("<")) {
      const a = this.utils.textVarReplace(qs, { ...r, text: o });
      o = this.utils.textVarReplace(Zs, { voice: a });
    }
    return o;
  }
  /**
   * 分割文本，按照指定段落最大数量
   * @param text 待分割文本
   * @param max_length 最大文本内容
   * @returns
   */
  textSplit(t, r = 1e3) {
    const o = t.split(/\n|。|，|\?|\,|\.|\!|？|！/).filter((l) => l.trim()).map((l) => l.trim() + "，");
    let a = "";
    return o.reduce((l, f) => ((a + f).length < r ? a += f : (l.push(a), a = f), f === o[o.length - 1] && l.push(a), l), []);
  }
  /** 获取朗读角色详细列表 */
  async getVoiceList(t = !0) {
    return t ? this.voiceMap : _s(
      "https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list?trustedclienttoken=6A5AA1D4EAFF4E9FB37E23D68491D6F4"
    ).then((r) => this.voiceToMap(r));
  }
  /** 将SSML转为音频（buffers, blob） */
  core(t, r = {}) {
    const o = ge(r, {
      timeout: 3e4,
      roleVoice: ve,
      onMessage: () => {
      }
    }), { timeout: a, roleVoice: n, onMessage: l } = o, f = this.textToSsml(t, n);
    return new Promise((N) => {
      let M;
      const G = [], T = "6A5AA1D4EAFF4E9FB37E23D68491D6F4", z = this.utils.getUuid(), p = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?${new URLSearchParams({ TrustedClientToken: T, ConnectionId: z }).toString()}`, v = new WebSocket(p);
      v.binaryType = "arraybuffer";
      const V = JSON.stringify({
        context: {
          synthesis: {
            audio: {
              metadataoptions: { sentenceBoundaryEnabled: "false", wordBoundaryEnabled: "true" },
              outputFormat: "webm-24khz-16bit-mono-opus"
            }
          }
        }
      }), A = `X-Timestamp:${/* @__PURE__ */ new Date()}\r
Content-Type:application/json; charset=utf-8\r
Path:speech.config\r
\r
${V}`, F = `X-RequestId:${this.utils.getUuid()}\r
Content-Type:application/ssml+xml\r
X-Timestamp:${/* @__PURE__ */ new Date()}\r
Path:ssml\r
\r
${f}`, P = () => {
        v && v.readyState == 1 && (v.send(new ArrayBuffer(0)), v.close(), N({ error: new Error("意外停止"), data: null }));
      }, L = () => {
        M && clearTimeout(M), M = setTimeout(() => P(), a);
      };
      v.onopen = () => {
        v.send(A), v.send(F), L();
      }, v.onerror = (y) => N({ error: y, data: null }), v.onclose = (y) => N({ error: y, data: null });
      let m = 0;
      v.onmessage = (y) => {
        if (L(), y.data instanceof ArrayBuffer) {
          const s = new DataView(y.data), S = s.getInt16(0);
          if (y.data.byteLength < S + 2)
            throw new Error("Invalid binary message format. Header content missing.");
          for (var c = "", d = 0; d < S; d++)
            c += String.fromCharCode(s.getInt8(d + 2));
          y.data.byteLength > S + 2 && G.push(y.data.slice(2 + S));
        } else if (y.data.indexOf("turn.end") !== -1)
          Rs(Is(G)).then((s) => {
            const S = Bs(s);
            N({ error: !1, data: { buffers: S, audio: new gt(S) } });
          });
        else {
          const s = JSON.parse(y.data.split(`\r
\r
`)[1]);
          if (s != null && s.Metadata && s.Metadata[0].Type === "WordBoundary") {
            const {
              Duration: S,
              Offset: C,
              text: { Text: R }
            } = s.Metadata[0].Data;
            m++, l({ index: m, text: R, offset: C, duration: S, time: C + S, ssml: f });
          }
        }
      };
    });
  }
  /** 批量操作SSML */
  async batchSsml(t) {
    const r = [], o = { text: "", start: "", end: "", index: 0 };
    let a = 0, n = { ...o };
    const l = () => {
      n.text.trim() && r.push(n);
      const N = r.map((M) => `${M.index}
${M.start} --> ${M.end}
${M.text}`).join(`

`);
      return { srt: r, srt_text: N };
    }, f = (N) => {
      const { text: M, offset: G, time: T, index: z, ssml: _ } = N;
      n.start.trim() || (n.start = this.utils.convertNumberToTime(G)), n.end = this.utils.convertNumberToTime(a), a !== 0 && G - a > 1e6 ? (n.text.trim() || (n.text = M), r.push(n), n = {
        ...o,
        text: M,
        start: this.utils.convertNumberToTime(G),
        index: n.index + 1
      }) : n.text = n.text + M, a = T;
    };
    return Promise.all(t.map((N) => this.core(N, { onMessage: f }))).then((N) => {
      const { srt: M, srt_text: G } = l(), T = this.utils.mergeArrayBuffers(N.map((_) => {
        var p;
        return (p = _.data) == null ? void 0 : p.buffers;
      }).filter((_) => _)), z = this.utils.arrayBufferToBlob([T]);
      return { buffers: T, blob: z, srt: M, srt_text: G, audio: new gt(T) };
    });
  }
  /**
   * SSML进行多次配音，要求符合SSML规则 speak.voice[10].prosody.朗读内容， voice可为多个，每个voice中只能出现一个prosody，不允许出现其他的节点
   * @param textOrSsml
   * @param _option
   */
  speak(t, r = {}) {
    var G;
    const o = ge(r, {
      roleVoice: ve
    }), { roleVoice: a } = o, n = this.textToSsml(t, a), f = new DOMParser().parseFromString(n, "text/xml"), N = [];
    return Array.from(((G = f.querySelector("speak")) == null ? void 0 : G.childNodes) || []).forEach((T) => {
      var v;
      const z = ((v = T.textContent) == null ? void 0 : v.trim()) || "";
      if (!z.trim())
        return;
      const _ = T.querySelector("prosody"), p = ge(
        { name: T.getAttribute("name"), rate: _ == null ? void 0 : _.getAttribute("rate"), content: z },
        a
      );
      N.push(p);
    }), this.speakArray(N);
  }
  speakArray(t) {
    const o = t.map((a) => a.content.length <= 1e3 ? this.textToSsml(a.content, ge(a, ve)) : this.textSplit(a.content, 1e3).map((l) => this.textToSsml(l, ge(a, ve))));
    return this.batchSsml(o.flat());
  }
  async speakLongText(t, r = {}) {
    const o = ge(r, {
      roleVoice: ve,
      onPlay: () => {
      }
    }), { roleVoice: a, onPlay: n } = o;
    let l = 0, f = 0, N = !1, M = "", G, T, z, _;
    const p = this.textSplit(t, 50), v = async () => new Promise((F) => {
      let P;
      const L = () => {
        P = setTimeout(() => {
          N ? L() : (clearTimeout(P), F(!0));
        }, 100);
      };
      L();
    }), g = () => {
      T.stop(), z && clearTimeout(z), _ && clearTimeout(_);
    }, V = async () => {
      if (N && await v(), G.byteLength === 0)
        return;
      const F = new AudioContext(), P = F.createGain(), L = F.createBufferSource();
      L.connect(P), P.gain.value = 0.5, P.connect(F.destination);
      const m = () => a.rate < 1 ? (1 + a.rate) * 0.7 : a.rate === 1 ? 0.7 : (a.rate - 1) * 0.7;
      F.decodeAudioData(G, (y) => {
        n({ audioContext: F, audioSource: L, buffer: y, text: M, start_index: l, end_index: f, onStop: g }), l = f, T = L, L.buffer = y, L.start(), z = setTimeout(() => A(), (y.duration - 5) * 1e3), _ = setTimeout(() => V(), (y.duration - m()) * 1e3);
      });
    }, A = async (F = 3) => {
      if (p.length === 0)
        return;
      N = !0, M = p.shift(), f += M.length;
      const { error: P, data: L } = await this.core(M, { roleVoice: a });
      if (N = !1, P)
        return F > 1 ? await A(F - 1) : void 0;
      G = L.buffers;
    };
    return await A(), await V(), { onStop: g, text_list: p };
  }
}
class gt {
  constructor(t) {
    se(this, "audioContext");
    se(this, "audioSource");
    this.buffers = t;
    const { audioContext: r, audioSource: o } = this.create();
    this.audioContext = r, this.audioSource = o;
  }
  create() {
    const t = new AudioContext(), r = t.createGain(), o = t.createBufferSource();
    return o.connect(r), r.gain.value = 0.5, r.connect(t.destination), t.decodeAudioData(this.buffers.slice(0), (a) => {
      o.buffer = a;
    }), { audioContext: t, audioSource: o };
  }
  play() {
    const t = this.audioContext.state;
    if (t === "suspended" && this.audioContext.resume(), t === "running" && this.audioSource.start(), t === "closed") {
      const { audioContext: r, audioSource: o } = this.create();
      this.audioContext = r, this.audioSource = o, this.audioSource.start();
    }
  }
  pause() {
    this.audioContext.state === "running" && this.audioContext.suspend();
  }
  stop() {
    try {
      this.audioSource.stop(), this.audioContext.close();
    } catch {
    }
  }
  getObjectURL() {
    const t = new Blob([this.buffers], { type: "audio/mpeg" });
    return URL.createObjectURL(t);
  }
  download(t = "合成音频.mp3") {
    const r = this.getObjectURL(), o = document.createElement("a");
    o.setAttribute("href", r), o.setAttribute("download", t), o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(r);
  }
  addEventListener(t = "ended", r) {
    this.audioSource.addEventListener(t, r);
  }
}
const { defineComponent: Qs } = __Context.vue, { toDisplayString: ye, createElementVNode: me, resolveComponent: we, withCtx: le, createVNode: ce, createTextVNode: el, renderList: fr, Fragment: Sr, openBlock: Ce, createElementBlock: Te, vShow: tl, withDirectives: rl, createCommentVNode: ol, normalizeClass: al } = __Context.vue, il = { class: "w-full m-auto h-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p2 scrollbar-y" }, nl = { class: "flex-auto min-h-[500px] md:flex-1 wh-full rounded-md" }, sl = { class: "font-mono font-bold absolute bottom-0 right-5 text-gray-400 truncate" }, ll = { class: "w-full md:w80 h-full overflow-visible md:overflow-hidden" }, cl = { class: "text-xs font-mono text-gray-500" }, ul = { class: "pb1 select-text" }, dl = { class: "w-full md:w80 h-full" }, hl = { key: 0 }, ml = /* @__PURE__ */ me("div", { class: "text-gray-500" }, "空", -1), fl = [
  ml
], Sl = ["onClick"], { ref: De, computed: Nl, shallowRef: pl, triggerRef: gl } = __Context.vue, yl = /* @__PURE__ */ Qs({
  __name: "Page",
  setup(e) {
    const t = new Xs(), r = De(""), o = Nl(() => {
      const _ = r.value;
      return _.length > 10 ? _.slice(0, 10) : _;
    }), a = De(1e5), n = De(null), l = pl([]);
    let f = null;
    const N = (_) => {
      f && f.stop(), console.log("gAudio", f), f = _, f.play();
    }, M = De({ show: !0, name: ve.name, volume: 100, rate: 1 }), G = [
      { block: !0, label: "配音", name: "name", type: "select", typeConfig: { options: Js }, value: 1 },
      { block: !0, label: "语速", name: "rate", type: "number", typeConfig: { min: 1, max: 2, step: 0.1 }, value: 1 },
      { block: !0, label: "音量", name: "volume", type: "number", typeConfig: { min: 50, max: 100, step: 10 }, value: 1 },
      { block: !0, label: "字幕显示", name: "show", type: "switch", value: !0 },
      {
        block: !1,
        label: "播放",
        name: "_btn1",
        type: "button",
        typeConfig: {
          __text: "播放",
          style: "min-width: 90px",
          type: "primary",
          onClick(_, p) {
            p.customAttrs.value.loading = !0, r.value = r.value.trim();
            const v = { ...M.value, text: r.value, textName: o.value }, g = JSON.stringify(v), V = l.value.findIndex((A) => A.key === g);
            if (V !== -1) {
              n.value = l.value[V];
              const { buffers: A } = l.value[V].output, F = new gt(A);
              return N(F), p.customAttrs.value.loading = !1, { buffers: A, audio: F };
            }
            t.speak(r.value || "你好，喜欢我的声音请选则我哦", { roleVoice: M.value }).then((A) => {
              N(A.audio), l.value.push({ key: g, output: A, input: v }), n.value = l.value[l.value.length - 1], gl(l);
            }).catch((A) => {
              throw A;
            }).finally(() => {
              p.customAttrs.value.loading = !1;
            });
          }
        },
        value: ""
      },
      {
        block: !1,
        label: "音频下载",
        name: "_btn2",
        type: "button",
        typeConfig: {
          __text: "下载",
          style: "min-width: 90px",
          type: "primary",
          onClick(_, p) {
            n.value && er(n.value.output.blob, `${n.value.input.textName}.wav`);
          }
        },
        value: ""
      }
    ], T = () => {
      n.value && er(new Blob([n.value.output.srt_text], { type: "text/plain" }), `${n.value.input.textName}.srt`);
    }, z = (_) => {
      n.value = _, ["name", "volume", "rate"].forEach((p) => sn(M.value, p, _.input[p])), r.value = _.input.text ?? "";
    };
    return (_, p) => {
      var P, L;
      const v = we("n-input"), g = we("n-button"), V = we("n-scrollbar"), A = we("n-card"), F = we("i-setting");
      return Ce(), Te("div", il, [
        me("div", nl, [
          ce(v, {
            round: "",
            class: "h-full resize-none",
            "show-count": "",
            type: "textarea",
            "default-value": "",
            value: r.value,
            "onUpdate:value": p[0] || (p[0] = (m) => r.value = m),
            maxlength: a.value,
            placeholder: "请输入需要转语言的文本..."
          }, {
            count: le(({ value: m }) => [
              me("span", sl, ye(m.length) + " / " + ye(a.value), 1)
            ]),
            _: 1
          }, 8, ["value", "maxlength"])
        ]),
        rl(me("div", ll, [
          ce(A, {
            class: "flex flex-col flex-1 wh-full overflow-hidden",
            title: "字幕",
            "content-class": "flex-1 h-full pb2 overflow-hidden"
          }, {
            "header-extra": le(() => [
              ce(g, { onClick: T }, {
                default: le(() => [
                  el("下载字幕")
                ]),
                _: 1
              })
            ]),
            default: le(() => [
              ce(V, { class: "h-full" }, {
                default: le(() => {
                  var m;
                  return [
                    (Ce(!0), Te(Sr, null, fr((m = n.value) == null ? void 0 : m.output.srt, (y) => (Ce(), Te("div", {
                      key: y.index
                    }, [
                      me("div", cl, ye(y.start) + " -> " + ye(y.end), 1),
                      me("div", ul, ye(y.text), 1)
                    ]))), 128))
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          })
        ], 512), [
          [tl, n.value && ((L = (P = n.value) == null ? void 0 : P.output) == null ? void 0 : L.srt.length) > 0 && M.value.show]
        ]),
        me("div", dl, [
          ce(V, { class: "h-full" }, {
            default: le(() => [
              ce(A, {
                class: "",
                title: "操作"
              }, {
                default: le(() => [
                  ce(F, {
                    settings: G,
                    modelValue: M.value,
                    "onUpdate:modelValue": p[1] || (p[1] = (m) => M.value = m)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              ce(A, {
                class: "flex flex-col mt-2 min-h10 overflow-hidden",
                title: "历史",
                "content-class": "flex-1 h-full pb2 overflow-hidden"
              }, {
                default: le(() => [
                  ce(V, { class: "h-full" }, {
                    default: le(() => [
                      l.value.length === 0 ? (Ce(), Te("div", hl, fl)) : ol("", !0),
                      (Ce(!0), Te(Sr, null, fr(l.value, (m) => {
                        var y;
                        return Ce(), Te("div", {
                          key: m.input
                        }, [
                          me("div", {
                            class: al(["hover:underline", [((y = n.value) == null ? void 0 : y.key) === m.key ? "text-blue-400 hover:text-blue-500" : "text-gray-500 hover:text-gray-700"]]),
                            onClick: (c) => z(m)
                          }, ye(m.input.textName), 11, Sl)
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
class Cl {
  constructor() {
    se(this, "icon", "");
    se(this, "name", "tts");
    se(this, "description", "文本转语音");
    se(this, "isUninstallReload", !1);
  }
  install(t) {
    const r = {
      path: "/tts",
      name: "tts",
      meta: {
        title: "TTS",
        content: "文本转语音",
        icon: '<svg t="1705562973022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4335" width="200" height="200"><path d="M801.792 1016.832h-283.648c-279.552 0-509.952-225.792-508.416-505.344 1.536-274.432 224.768-497.664 499.2-499.2 279.552-1.536 505.344 228.864 505.344 508.416v60.928c0 9.728-7.68 17.408-17.408 17.408s-17.408-7.68-17.408-17.408v-60.928c0-257.024-204.8-471.04-461.824-474.112C254.976 43.52 40.96 257.536 44.032 520.192c3.072 257.024 217.088 461.824 474.112 461.824h283.648c53.76 0 72.192-26.112 75.776-79.36v-135.168c0-9.728 7.68-17.408 17.408-17.408s17.408 7.68 17.408 17.408v139.776c-5.632 69.632-39.424 109.568-110.592 109.568z" p-id="4336"></path><path d="M512 799.232c-18.432 0-33.28-14.848-33.28-33.28V263.168c0-18.432 14.848-33.28 33.28-33.28s33.28 14.848 33.28 33.28v502.784c0 18.432-14.848 33.28-33.28 33.28z m-148.992-83.456c-18.432 0-33.28-14.848-33.28-33.28V346.624c0-18.432 14.848-33.28 33.28-33.28s33.28 14.848 33.28 33.28v335.872c0 18.432-14.848 33.28-33.28 33.28z m297.984 0c-18.432 0-33.28-14.848-33.28-33.28V346.624c0-18.432 14.848-33.28 33.28-33.28s33.28 14.848 33.28 33.28v335.872c0 18.432-14.848 33.28-33.28 33.28zM1006.592 771.072h-221.696c-9.216 0-16.896-7.68-16.896-16.896 0-9.216 7.68-16.896 16.896-16.896h221.696c9.216 0 16.896 7.68 16.896 16.896 0.512 9.216-7.168 16.896-16.896 16.896z" p-id="4337"></path></svg>',
        cache: !0
      },
      component: yl
    };
    t.usePage(r);
  }
  uninstall() {
    console.log("uninstall");
  }
}
const vl = new Cl();
export {
  vl as default
};
