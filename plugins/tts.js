export const css = ".wh-full{width:100%;height:100%}.m-auto{margin:auto}.bottom-0{bottom:0}.right-5{right:5px}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}@media (min-width: 768px){.md\\:overflow-hidden{overflow:hidden}}.absolute{position:absolute}.mt-2{margin-top:.5rem}.block{display:block}.h-full{height:100%}.min-h-\\[500px\\]{min-height:500px}.min-h10{min-height:2.5rem}.w-full{width:100%}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-col{flex-direction:column}.select-text{-webkit-user-select:text;user-select:text}.resize-none{resize:none}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.5rem * var(--un-space-y-reverse))}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded-md{border-radius:.375rem}.p2{padding:.5rem}.pb1{padding-bottom:.25rem}.pb2{padding-bottom:.5rem}.text-xs{font-size:.75rem;line-height:1rem}.text-blue-400{--un-text-opacity:1;color:rgb(96 165 250 / var(--un-text-opacity))}.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity))}.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity))}.hover\\:text-blue-500:hover{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity))}.hover\\:text-gray-700:hover{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity))}.font-bold{font-weight:700}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.hover\\:underline:hover{text-decoration-line:underline}@media (min-width: 768px){.md\\:w80{width:20rem}.md\\:flex-1{flex:1 1 0%}.md\\:flex-row{flex-direction:row}.md\\:space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(.5rem * var(--un-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0px * var(--un-space-y-reverse))}}\n\n";
var po = Object.defineProperty;
var No = (e, t, r) => t in e ? po(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ce = (e, t, r) => (No(e, typeof t != "symbol" ? t + "" : t, r), r);
var Cr = typeof global == "object" && global && global.Object === Object && global, go = typeof self == "object" && self && self.Object === Object && self, Ve = Cr || go || Function("return this")(), be = Ve.Symbol, Tr = Object.prototype, yo = Tr.hasOwnProperty, Co = Tr.toString, ke = be ? be.toStringTag : void 0;
function To(e) {
  var t = yo.call(e, ke), r = e[ke];
  try {
    e[ke] = void 0;
    var o = !0;
  } catch {
  }
  var a = Co.call(e);
  return o && (t ? e[ke] = r : delete e[ke]), a;
}
var vo = Object.prototype, bo = vo.toString;
function Mo(e) {
  return bo.call(e);
}
var Go = "[object Null]", Vo = "[object Undefined]", Ut = be ? be.toStringTag : void 0;
function _e(e) {
  return e == null ? e === void 0 ? Vo : Go : Ut && Ut in Object(e) ? To(e) : Mo(e);
}
function Ae(e) {
  return e != null && typeof e == "object";
}
var Ao = "[object Symbol]";
function Tt(e) {
  return typeof e == "symbol" || Ae(e) && _e(e) == Ao;
}
function Fo(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, a = Array(o); ++r < o; )
    a[r] = t(e[r], r, e);
  return a;
}
var Me = Array.isArray, Po = 1 / 0, Dt = be ? be.prototype : void 0, Ht = Dt ? Dt.toString : void 0;
function vr(e) {
  if (typeof e == "string")
    return e;
  if (Me(e))
    return Fo(e, vr) + "";
  if (Tt(e))
    return Ht ? Ht.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Po ? "-0" : t;
}
function oe(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function br(e) {
  return e;
}
var ko = "[object AsyncFunction]", xo = "[object Function]", wo = "[object GeneratorFunction]", Eo = "[object Proxy]";
function vt(e) {
  if (!oe(e))
    return !1;
  var t = _e(e);
  return t == xo || t == wo || t == ko || t == Eo;
}
var at = Ve["__core-js_shared__"], jt = function() {
  var e = /[^.]+$/.exec(at && at.keys && at.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Lo(e) {
  return !!jt && jt in e;
}
var Oo = Function.prototype, _o = Oo.toString;
function zo(e) {
  if (e != null) {
    try {
      return _o.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Io = /[\\^$.*+?()[\]{}|]/g, Ro = /^\[object .+?Constructor\]$/, Bo = Function.prototype, Uo = Object.prototype, Do = Bo.toString, Ho = Uo.hasOwnProperty, jo = RegExp(
  "^" + Do.call(Ho).replace(Io, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ko(e) {
  if (!oe(e) || Lo(e))
    return !1;
  var t = vt(e) ? jo : Ro;
  return t.test(zo(e));
}
function Yo(e, t) {
  return e == null ? void 0 : e[t];
}
function bt(e, t) {
  var r = Yo(e, t);
  return Ko(r) ? r : void 0;
}
var Kt = Object.create, Jo = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!oe(t))
      return {};
    if (Kt)
      return Kt(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Mr(e, t, r) {
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
function $o(e, t) {
  var r = -1, o = e.length;
  for (t || (t = Array(o)); ++r < o; )
    t[r] = e[r];
  return t;
}
var Zo = 800, qo = 16, Wo = Date.now;
function Xo(e) {
  var t = 0, r = 0;
  return function() {
    var o = Wo(), a = qo - (o - r);
    if (r = o, a > 0) {
      if (++t >= Zo)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Qo(e) {
  return function() {
    return e;
  };
}
var Ye = function() {
  try {
    var e = bt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ea = Ye ? function(e, t) {
  return Ye(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Qo(t),
    writable: !0
  });
} : br;
const ta = ea;
var ra = Xo(ta), oa = 9007199254740991, aa = /^(?:0|[1-9]\d*)$/;
function Mt(e, t) {
  var r = typeof e;
  return t = t ?? oa, !!t && (r == "number" || r != "symbol" && aa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Gt(e, t, r) {
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
var ia = Object.prototype, na = ia.hasOwnProperty;
function Gr(e, t, r) {
  var o = e[t];
  (!(na.call(e, t) && $e(o, r)) || r === void 0 && !(t in e)) && Gt(e, t, r);
}
function sa(e, t, r, o) {
  var a = !r;
  r || (r = {});
  for (var n = -1, l = t.length; ++n < l; ) {
    var h = t[n], N = o ? o(r[h], e[h], h, r, e) : void 0;
    N === void 0 && (N = e[h]), a ? Gt(r, h, N) : Gr(r, h, N);
  }
  return r;
}
var Yt = Math.max;
function la(e, t, r) {
  return t = Yt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, a = -1, n = Yt(o.length - t, 0), l = Array(n); ++a < n; )
      l[a] = o[t + a];
    a = -1;
    for (var h = Array(t + 1); ++a < t; )
      h[a] = o[a];
    return h[t] = r(l), Mr(e, this, h);
  };
}
function Vr(e, t) {
  return ra(la(e, t, br), e + "");
}
var ca = 9007199254740991;
function Ar(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ca;
}
function Vt(e) {
  return e != null && Ar(e.length) && !vt(e);
}
function ua(e, t, r) {
  if (!oe(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? Vt(r) && Mt(t, r.length) : o == "string" && t in r) ? $e(r[t], e) : !1;
}
function da(e) {
  return Vr(function(t, r) {
    var o = -1, a = r.length, n = a > 1 ? r[a - 1] : void 0, l = a > 2 ? r[2] : void 0;
    for (n = e.length > 3 && typeof n == "function" ? (a--, n) : void 0, l && ua(r[0], r[1], l) && (n = a < 3 ? void 0 : n, a = 1), t = Object(t); ++o < a; ) {
      var h = r[o];
      h && e(t, h, o, n);
    }
    return t;
  });
}
var ha = Object.prototype;
function Fr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ha;
  return e === r;
}
function ma(e, t) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = t(r);
  return o;
}
var fa = "[object Arguments]";
function Jt(e) {
  return Ae(e) && _e(e) == fa;
}
var Pr = Object.prototype, Sa = Pr.hasOwnProperty, pa = Pr.propertyIsEnumerable, Na = Jt(/* @__PURE__ */ function() {
  return arguments;
}()) ? Jt : function(e) {
  return Ae(e) && Sa.call(e, "callee") && !pa.call(e, "callee");
};
const mt = Na;
function ga() {
  return !1;
}
var kr = typeof exports == "object" && exports && !exports.nodeType && exports, $t = kr && typeof module == "object" && module && !module.nodeType && module, ya = $t && $t.exports === kr, Zt = ya ? Ve.Buffer : void 0, Ca = Zt ? Zt.isBuffer : void 0, xr = Ca || ga, Ta = "[object Arguments]", va = "[object Array]", ba = "[object Boolean]", Ma = "[object Date]", Ga = "[object Error]", Va = "[object Function]", Aa = "[object Map]", Fa = "[object Number]", Pa = "[object Object]", ka = "[object RegExp]", xa = "[object Set]", wa = "[object String]", Ea = "[object WeakMap]", La = "[object ArrayBuffer]", Oa = "[object DataView]", _a = "[object Float32Array]", za = "[object Float64Array]", Ia = "[object Int8Array]", Ra = "[object Int16Array]", Ba = "[object Int32Array]", Ua = "[object Uint8Array]", Da = "[object Uint8ClampedArray]", Ha = "[object Uint16Array]", ja = "[object Uint32Array]", j = {};
j[_a] = j[za] = j[Ia] = j[Ra] = j[Ba] = j[Ua] = j[Da] = j[Ha] = j[ja] = !0;
j[Ta] = j[va] = j[La] = j[ba] = j[Oa] = j[Ma] = j[Ga] = j[Va] = j[Aa] = j[Fa] = j[Pa] = j[ka] = j[xa] = j[wa] = j[Ea] = !1;
function Ka(e) {
  return Ae(e) && Ar(e.length) && !!j[_e(e)];
}
function Ya(e) {
  return function(t) {
    return e(t);
  };
}
var wr = typeof exports == "object" && exports && !exports.nodeType && exports, Ee = wr && typeof module == "object" && module && !module.nodeType && module, Ja = Ee && Ee.exports === wr, it = Ja && Cr.process, qt = function() {
  try {
    var e = Ee && Ee.require && Ee.require("util").types;
    return e || it && it.binding && it.binding("util");
  } catch {
  }
}(), Wt = qt && qt.isTypedArray, Er = Wt ? Ya(Wt) : Ka, $a = Object.prototype, Za = $a.hasOwnProperty;
function qa(e, t) {
  var r = Me(e), o = !r && mt(e), a = !r && !o && xr(e), n = !r && !o && !a && Er(e), l = r || o || a || n, h = l ? ma(e.length, String) : [], N = h.length;
  for (var G in e)
    (t || Za.call(e, G)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (G == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (G == "offset" || G == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (G == "buffer" || G == "byteLength" || G == "byteOffset") || // Skip index properties.
    Mt(G, N))) && h.push(G);
  return h;
}
function Wa(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function Xa(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Qa = Object.prototype, ei = Qa.hasOwnProperty;
function ti(e) {
  if (!oe(e))
    return Xa(e);
  var t = Fr(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !ei.call(e, o)) || r.push(o);
  return r;
}
function Lr(e) {
  return Vt(e) ? qa(e, !0) : ti(e);
}
var ri = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, oi = /^\w*$/;
function ai(e, t) {
  if (Me(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Tt(e) ? !0 : oi.test(e) || !ri.test(e) || t != null && e in Object(t);
}
var Le = bt(Object, "create");
function ii() {
  this.__data__ = Le ? Le(null) : {}, this.size = 0;
}
function ni(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var si = "__lodash_hash_undefined__", li = Object.prototype, ci = li.hasOwnProperty;
function ui(e) {
  var t = this.__data__;
  if (Le) {
    var r = t[e];
    return r === si ? void 0 : r;
  }
  return ci.call(t, e) ? t[e] : void 0;
}
var di = Object.prototype, hi = di.hasOwnProperty;
function mi(e) {
  var t = this.__data__;
  return Le ? t[e] !== void 0 : hi.call(t, e);
}
var fi = "__lodash_hash_undefined__";
function Si(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Le && t === void 0 ? fi : t, this;
}
function Se(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Se.prototype.clear = ii;
Se.prototype.delete = ni;
Se.prototype.get = ui;
Se.prototype.has = mi;
Se.prototype.set = Si;
function pi() {
  this.__data__ = [], this.size = 0;
}
function Ze(e, t) {
  for (var r = e.length; r--; )
    if ($e(e[r][0], t))
      return r;
  return -1;
}
var Ni = Array.prototype, gi = Ni.splice;
function yi(e) {
  var t = this.__data__, r = Ze(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : gi.call(t, r, 1), --this.size, !0;
}
function Ci(e) {
  var t = this.__data__, r = Ze(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Ti(e) {
  return Ze(this.__data__, e) > -1;
}
function vi(e, t) {
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
de.prototype.clear = pi;
de.prototype.delete = yi;
de.prototype.get = Ci;
de.prototype.has = Ti;
de.prototype.set = vi;
var Or = bt(Ve, "Map");
function bi() {
  this.size = 0, this.__data__ = {
    hash: new Se(),
    map: new (Or || de)(),
    string: new Se()
  };
}
function Mi(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qe(e, t) {
  var r = e.__data__;
  return Mi(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Gi(e) {
  var t = qe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Vi(e) {
  return qe(this, e).get(e);
}
function Ai(e) {
  return qe(this, e).has(e);
}
function Fi(e, t) {
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
fe.prototype.clear = bi;
fe.prototype.delete = Gi;
fe.prototype.get = Vi;
fe.prototype.has = Ai;
fe.prototype.set = Fi;
var Pi = "Expected a function";
function At(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Pi);
  var r = function() {
    var o = arguments, a = t ? t.apply(this, o) : o[0], n = r.cache;
    if (n.has(a))
      return n.get(a);
    var l = e.apply(this, o);
    return r.cache = n.set(a, l) || n, l;
  };
  return r.cache = new (At.Cache || fe)(), r;
}
At.Cache = fe;
var ki = 500;
function xi(e) {
  var t = At(e, function(o) {
    return r.size === ki && r.clear(), o;
  }), r = t.cache;
  return t;
}
var wi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ei = /\\(\\)?/g, Li = xi(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(wi, function(r, o, a, n) {
    t.push(a ? n.replace(Ei, "$1") : o || r);
  }), t;
});
function Oi(e) {
  return e == null ? "" : vr(e);
}
function _r(e, t) {
  return Me(e) ? e : ai(e, t) ? [e] : Li(Oi(e));
}
var _i = 1 / 0;
function zr(e) {
  if (typeof e == "string" || Tt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -_i ? "-0" : t;
}
function zi(e, t) {
  t = _r(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[zr(t[r++])];
  return r && r == o ? e : void 0;
}
function Ii(e, t, r) {
  var o = e == null ? void 0 : zi(e, t);
  return o === void 0 ? r : o;
}
var Ir = Wa(Object.getPrototypeOf, Object), Ri = "[object Object]", Bi = Function.prototype, Ui = Object.prototype, Rr = Bi.toString, Di = Ui.hasOwnProperty, Hi = Rr.call(Object);
function ji(e) {
  if (!Ae(e) || _e(e) != Ri)
    return !1;
  var t = Ir(e);
  if (t === null)
    return !0;
  var r = Di.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Rr.call(r) == Hi;
}
function Ki() {
  this.__data__ = new de(), this.size = 0;
}
function Yi(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Ji(e) {
  return this.__data__.get(e);
}
function $i(e) {
  return this.__data__.has(e);
}
var Zi = 200;
function qi(e, t) {
  var r = this.__data__;
  if (r instanceof de) {
    var o = r.__data__;
    if (!Or || o.length < Zi - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new fe(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Fe(e) {
  var t = this.__data__ = new de(e);
  this.size = t.size;
}
Fe.prototype.clear = Ki;
Fe.prototype.delete = Yi;
Fe.prototype.get = Ji;
Fe.prototype.has = $i;
Fe.prototype.set = qi;
var Br = typeof exports == "object" && exports && !exports.nodeType && exports, Xt = Br && typeof module == "object" && module && !module.nodeType && module, Wi = Xt && Xt.exports === Br, Qt = Wi ? Ve.Buffer : void 0, er = Qt ? Qt.allocUnsafe : void 0;
function Xi(e, t) {
  if (t)
    return e.slice();
  var r = e.length, o = er ? er(r) : new e.constructor(r);
  return e.copy(o), o;
}
var tr = Ve.Uint8Array;
function Qi(e) {
  var t = new e.constructor(e.byteLength);
  return new tr(t).set(new tr(e)), t;
}
function en(e, t) {
  var r = t ? Qi(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function tn(e) {
  return typeof e.constructor == "function" && !Fr(e) ? Jo(Ir(e)) : {};
}
function rn(e) {
  return function(t, r, o) {
    for (var a = -1, n = Object(t), l = o(t), h = l.length; h--; ) {
      var N = l[e ? h : ++a];
      if (r(n[N], N, n) === !1)
        break;
    }
    return t;
  };
}
var on = rn();
function ft(e, t, r) {
  (r !== void 0 && !$e(e[t], r) || r === void 0 && !(t in e)) && Gt(e, t, r);
}
function an(e) {
  return Ae(e) && Vt(e);
}
function St(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function nn(e) {
  return sa(e, Lr(e));
}
function sn(e, t, r, o, a, n, l) {
  var h = St(e, r), N = St(t, r), G = l.get(N);
  if (G) {
    ft(e, r, G);
    return;
  }
  var b = n ? n(h, N, r + "", e, t, l) : void 0, v = b === void 0;
  if (v) {
    var z = Me(N), O = !z && xr(N), y = !z && !O && Er(N);
    b = N, z || O || y ? Me(h) ? b = h : an(h) ? b = $o(h) : O ? (v = !1, b = Xi(N, !0)) : y ? (v = !1, b = en(N, !0)) : b = [] : ji(N) || mt(N) ? (b = h, mt(h) ? b = nn(h) : (!oe(h) || vt(h)) && (b = tn(N))) : v = !1;
  }
  v && (l.set(N, b), a(b, N, o, n, l), l.delete(N)), ft(e, r, b);
}
function Ft(e, t, r, o, a) {
  e !== t && on(t, function(n, l) {
    if (a || (a = new Fe()), oe(n))
      sn(e, t, l, r, Ft, o, a);
    else {
      var h = o ? o(St(e, l), n, l + "", e, t, a) : void 0;
      h === void 0 && (h = n), ft(e, l, h);
    }
  }, Lr);
}
function Ur(e, t, r, o, a, n) {
  return oe(e) && oe(t) && (n.set(t, e), Ft(e, t, void 0, Ur, n), n.delete(t)), e;
}
var ln = da(function(e, t, r, o) {
  Ft(e, t, r, o);
});
const cn = ln;
var ge = Vr(function(e) {
  return e.push(void 0, Ur), Mr(cn, void 0, e);
});
function un(e, t, r, o) {
  if (!oe(e))
    return e;
  t = _r(t, e);
  for (var a = -1, n = t.length, l = n - 1, h = e; h != null && ++a < n; ) {
    var N = zr(t[a]), G = r;
    if (N === "__proto__" || N === "constructor" || N === "prototype")
      return e;
    if (a != l) {
      var b = h[N];
      G = o ? o(b, N, h) : void 0, G === void 0 && (G = oe(b) ? b : Mt(t[a + 1]) ? [] : {});
    }
    Gr(h, N, G), h = h[N];
  }
  return e;
}
function dn(e, t, r) {
  return e == null ? e : un(e, t, r);
}
function rr(e, t) {
  var r = document.createElement("a");
  r.href = window.URL.createObjectURL(e), r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
function Dr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: hn } = Object.prototype, { getPrototypeOf: Pt } = Object, We = /* @__PURE__ */ ((e) => (t) => {
  const r = hn.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), se = (e) => (e = e.toLowerCase(), (t) => We(t) === e), Xe = (e) => (t) => typeof t === e, { isArray: Pe } = Array, Oe = Xe("undefined");
function mn(e) {
  return e !== null && !Oe(e) && e.constructor !== null && !Oe(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Hr = se("ArrayBuffer");
function fn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Hr(e.buffer), t;
}
const Sn = Xe("string"), te = Xe("function"), jr = Xe("number"), Qe = (e) => e !== null && typeof e == "object", pn = (e) => e === !0 || e === !1, He = (e) => {
  if (We(e) !== "object")
    return !1;
  const t = Pt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Nn = se("Date"), gn = se("File"), yn = se("Blob"), Cn = se("FileList"), Tn = (e) => Qe(e) && te(e.pipe), vn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || te(e.append) && ((t = We(e)) === "formdata" || // detect form-data instance
  t === "object" && te(e.toString) && e.toString() === "[object FormData]"));
}, bn = se("URLSearchParams"), Mn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ze(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, a;
  if (typeof e != "object" && (e = [e]), Pe(e))
    for (o = 0, a = e.length; o < a; o++)
      t.call(null, e[o], o, e);
  else {
    const n = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = n.length;
    let h;
    for (o = 0; o < l; o++)
      h = n[o], t.call(null, e[h], h, e);
  }
}
function Kr(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, a;
  for (; o-- > 0; )
    if (a = r[o], t === a.toLowerCase())
      return a;
  return null;
}
const Yr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jr = (e) => !Oe(e) && e !== Yr;
function pt() {
  const { caseless: e } = Jr(this) && this || {}, t = {}, r = (o, a) => {
    const n = e && Kr(t, a) || a;
    He(t[n]) && He(o) ? t[n] = pt(t[n], o) : He(o) ? t[n] = pt({}, o) : Pe(o) ? t[n] = o.slice() : t[n] = o;
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && ze(arguments[o], r);
  return t;
}
const Gn = (e, t, r, { allOwnKeys: o } = {}) => (ze(t, (a, n) => {
  r && te(a) ? e[n] = Dr(a, r) : e[n] = a;
}, { allOwnKeys: o }), e), Vn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), An = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Fn = (e, t, r, o) => {
  let a, n, l;
  const h = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), n = a.length; n-- > 0; )
      l = a[n], (!o || o(l, e, t)) && !h[l] && (t[l] = e[l], h[l] = !0);
    e = r !== !1 && Pt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Pn = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, kn = (e) => {
  if (!e)
    return null;
  if (Pe(e))
    return e;
  let t = e.length;
  if (!jr(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, xn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pt(Uint8Array)), wn = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = o.next()) && !a.done; ) {
    const n = a.value;
    t.call(e, n[0], n[1]);
  }
}, En = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, Ln = se("HTMLFormElement"), On = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, a) {
    return o.toUpperCase() + a;
  }
), or = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), _n = se("RegExp"), $r = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  ze(r, (a, n) => {
    let l;
    (l = t(a, n, e)) !== !1 && (o[n] = l || a);
  }), Object.defineProperties(e, o);
}, zn = (e) => {
  $r(e, (t, r) => {
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
}, In = (e, t) => {
  const r = {}, o = (a) => {
    a.forEach((n) => {
      r[n] = !0;
    });
  };
  return Pe(e) ? o(e) : o(String(e).split(t)), r;
}, Rn = () => {
}, Bn = (e, t) => (e = +e, Number.isFinite(e) ? e : t), nt = "abcdefghijklmnopqrstuvwxyz", ar = "0123456789", Zr = {
  DIGIT: ar,
  ALPHA: nt,
  ALPHA_DIGIT: nt + nt.toUpperCase() + ar
}, Un = (e = 16, t = Zr.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = t;
  for (; e--; )
    r += t[Math.random() * o | 0];
  return r;
};
function Dn(e) {
  return !!(e && te(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Hn = (e) => {
  const t = new Array(10), r = (o, a) => {
    if (Qe(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[a] = o;
        const n = Pe(o) ? [] : {};
        return ze(o, (l, h) => {
          const N = r(l, a + 1);
          !Oe(N) && (n[h] = N);
        }), t[a] = void 0, n;
      }
    }
    return o;
  };
  return r(e, 0);
}, jn = se("AsyncFunction"), Kn = (e) => e && (Qe(e) || te(e)) && te(e.then) && te(e.catch), M = {
  isArray: Pe,
  isArrayBuffer: Hr,
  isBuffer: mn,
  isFormData: vn,
  isArrayBufferView: fn,
  isString: Sn,
  isNumber: jr,
  isBoolean: pn,
  isObject: Qe,
  isPlainObject: He,
  isUndefined: Oe,
  isDate: Nn,
  isFile: gn,
  isBlob: yn,
  isRegExp: _n,
  isFunction: te,
  isStream: Tn,
  isURLSearchParams: bn,
  isTypedArray: xn,
  isFileList: Cn,
  forEach: ze,
  merge: pt,
  extend: Gn,
  trim: Mn,
  stripBOM: Vn,
  inherits: An,
  toFlatObject: Fn,
  kindOf: We,
  kindOfTest: se,
  endsWith: Pn,
  toArray: kn,
  forEachEntry: wn,
  matchAll: En,
  isHTMLForm: Ln,
  hasOwnProperty: or,
  hasOwnProp: or,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $r,
  freezeMethods: zn,
  toObjectSet: In,
  toCamelCase: On,
  noop: Rn,
  toFiniteNumber: Bn,
  findKey: Kr,
  global: Yr,
  isContextDefined: Jr,
  ALPHABET: Zr,
  generateString: Un,
  isSpecCompliantForm: Dn,
  toJSONObject: Hn,
  isAsyncFn: jn,
  isThenable: Kn
};
function D(e, t, r, o, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), a && (this.response = a);
}
M.inherits(D, Error, {
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
      config: M.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const qr = D.prototype, Wr = {};
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
  Wr[e] = { value: e };
});
Object.defineProperties(D, Wr);
Object.defineProperty(qr, "isAxiosError", { value: !0 });
D.from = (e, t, r, o, a, n) => {
  const l = Object.create(qr);
  return M.toFlatObject(e, l, function(N) {
    return N !== Error.prototype;
  }, (h) => h !== "isAxiosError"), D.call(l, e.message, t, r, o, a), l.cause = e, l.name = e.name, n && Object.assign(l, n), l;
};
const Yn = null;
function Nt(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function Xr(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ir(e, t, r) {
  return e ? e.concat(t).map(function(a, n) {
    return a = Xr(a), !r && n ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function Jn(e) {
  return M.isArray(e) && !e.some(Nt);
}
const $n = M.toFlatObject(M, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function et(e, t, r) {
  if (!M.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = M.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(C, S) {
    return !M.isUndefined(S[C]);
  });
  const o = r.metaTokens, a = r.visitor || b, n = r.dots, l = r.indexes, N = (r.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(t);
  if (!M.isFunction(a))
    throw new TypeError("visitor must be a function");
  function G(y) {
    if (y === null)
      return "";
    if (M.isDate(y))
      return y.toISOString();
    if (!N && M.isBlob(y))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(y) || M.isTypedArray(y) ? N && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function b(y, C, S) {
    let V = y;
    if (y && !S && typeof y == "object") {
      if (M.endsWith(C, "{}"))
        C = o ? C : C.slice(0, -2), y = JSON.stringify(y);
      else if (M.isArray(y) && Jn(y) || (M.isFileList(y) || M.endsWith(C, "[]")) && (V = M.toArray(y)))
        return C = Xr(C), V.forEach(function(F, A) {
          !(M.isUndefined(F) || F === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ir([C], A, n) : l === null ? C : C + "[]",
            G(F)
          );
        }), !1;
    }
    return Nt(y) ? !0 : (t.append(ir(S, C, n), G(y)), !1);
  }
  const v = [], z = Object.assign($n, {
    defaultVisitor: b,
    convertValue: G,
    isVisitable: Nt
  });
  function O(y, C) {
    if (!M.isUndefined(y)) {
      if (v.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      v.push(y), M.forEach(y, function(V, P) {
        (!(M.isUndefined(V) || V === null) && a.call(
          t,
          V,
          M.isString(P) ? P.trim() : P,
          C,
          z
        )) === !0 && O(V, C ? C.concat(P) : [P]);
      }), v.pop();
    }
  }
  if (!M.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
}
function nr(e) {
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
function kt(e, t) {
  this._pairs = [], e && et(e, this, t);
}
const Qr = kt.prototype;
Qr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Qr.toString = function(t) {
  const r = t ? function(o) {
    return t.call(this, o, nr);
  } : nr;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function Zn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function eo(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || Zn, a = r && r.serialize;
  let n;
  if (a ? n = a(t, r) : n = M.isURLSearchParams(t) ? t.toString() : new kt(t, r).toString(o), n) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return e;
}
class sr {
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
    M.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const to = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qn = typeof URLSearchParams < "u" ? URLSearchParams : kt, Wn = typeof FormData < "u" ? FormData : null, Xn = typeof Blob < "u" ? Blob : null, Qn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qn,
    FormData: Wn,
    Blob: Xn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ro = typeof window < "u" && typeof document < "u", es = ((e) => ro && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ts = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ro,
  hasStandardBrowserEnv: es,
  hasStandardBrowserWebWorkerEnv: ts
}, Symbol.toStringTag, { value: "Module" })), ne = {
  ...rs,
  ...Qn
};
function os(e, t) {
  return et(e, new ne.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, a, n) {
      return ne.isNode && M.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function as(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function is(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const a = r.length;
  let n;
  for (o = 0; o < a; o++)
    n = r[o], t[n] = e[n];
  return t;
}
function oo(e) {
  function t(r, o, a, n) {
    let l = r[n++];
    if (l === "__proto__")
      return !0;
    const h = Number.isFinite(+l), N = n >= r.length;
    return l = !l && M.isArray(a) ? a.length : l, N ? (M.hasOwnProp(a, l) ? a[l] = [a[l], o] : a[l] = o, !h) : ((!a[l] || !M.isObject(a[l])) && (a[l] = []), t(r, o, a[l], n) && M.isArray(a[l]) && (a[l] = is(a[l])), !h);
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const r = {};
    return M.forEachEntry(e, (o, a) => {
      t(as(o), a, r, 0);
    }), r;
  }
  return null;
}
function ns(e, t, r) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const xt = {
  transitional: to,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const o = r.getContentType() || "", a = o.indexOf("application/json") > -1, n = M.isObject(t);
    if (n && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t))
      return a && a ? JSON.stringify(oo(t)) : t;
    if (M.isArrayBuffer(t) || M.isBuffer(t) || M.isStream(t) || M.isFile(t) || M.isBlob(t))
      return t;
    if (M.isArrayBufferView(t))
      return t.buffer;
    if (M.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let h;
    if (n) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return os(t, this.formSerializer).toString();
      if ((h = M.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const N = this.env && this.env.FormData;
        return et(
          h ? { "files[]": t } : t,
          N && new N(),
          this.formSerializer
        );
      }
    }
    return n || a ? (r.setContentType("application/json", !1), ns(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || xt.transitional, o = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (t && M.isString(t) && (o && !this.responseType || a)) {
      const l = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (h) {
        if (l)
          throw h.name === "SyntaxError" ? D.from(h, D.ERR_BAD_RESPONSE, this, null, this.response) : h;
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
    FormData: ne.classes.FormData,
    Blob: ne.classes.Blob
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
M.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  xt.headers[e] = {};
});
const wt = xt, ss = M.toObjectSet([
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
]), ls = (e) => {
  const t = {};
  let r, o, a;
  return e && e.split(`
`).forEach(function(l) {
    a = l.indexOf(":"), r = l.substring(0, a).trim().toLowerCase(), o = l.substring(a + 1).trim(), !(!r || t[r] && ss[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o);
  }), t;
}, lr = Symbol("internals");
function xe(e) {
  return e && String(e).trim().toLowerCase();
}
function je(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(je) : String(e);
}
function cs(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const us = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function st(e, t, r, o, a) {
  if (M.isFunction(o))
    return o.call(this, t, r);
  if (a && (t = r), !!M.isString(t)) {
    if (M.isString(o))
      return t.indexOf(o) !== -1;
    if (M.isRegExp(o))
      return o.test(t);
  }
}
function ds(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function hs(e, t) {
  const r = M.toCamelCase(" " + t);
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
    function n(h, N, G) {
      const b = xe(N);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const v = M.findKey(a, b);
      (!v || a[v] === void 0 || G === !0 || G === void 0 && a[v] !== !1) && (a[v || N] = je(h));
    }
    const l = (h, N) => M.forEach(h, (G, b) => n(G, b, N));
    return M.isPlainObject(t) || t instanceof this.constructor ? l(t, r) : M.isString(t) && (t = t.trim()) && !us(t) ? l(ls(t), r) : t != null && n(r, t, o), this;
  }
  get(t, r) {
    if (t = xe(t), t) {
      const o = M.findKey(this, t);
      if (o) {
        const a = this[o];
        if (!r)
          return a;
        if (r === !0)
          return cs(a);
        if (M.isFunction(r))
          return r.call(this, a, o);
        if (M.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = xe(t), t) {
      const o = M.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || st(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let a = !1;
    function n(l) {
      if (l = xe(l), l) {
        const h = M.findKey(o, l);
        h && (!r || st(o, o[h], h, r)) && (delete o[h], a = !0);
      }
    }
    return M.isArray(t) ? t.forEach(n) : n(t), a;
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
    return M.forEach(this, (a, n) => {
      const l = M.findKey(o, n);
      if (l) {
        r[l] = je(a), delete r[n];
        return;
      }
      const h = t ? ds(n) : String(n).trim();
      h !== n && delete r[n], r[h] = je(a), o[h] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return M.forEach(this, (o, a) => {
      o != null && o !== !1 && (r[a] = t && M.isArray(o) ? o.join(", ") : o);
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
    const o = (this[lr] = this[lr] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function n(l) {
      const h = xe(l);
      o[h] || (hs(a, l), o[h] = !0);
    }
    return M.isArray(t) ? t.forEach(n) : n(t), this;
  }
}
tt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.reduceDescriptors(tt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[r] = o;
    }
  };
});
M.freezeMethods(tt);
const ue = tt;
function lt(e, t) {
  const r = this || wt, o = t || r, a = ue.from(o.headers);
  let n = o.data;
  return M.forEach(e, function(h) {
    n = h.call(r, n, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), n;
}
function ao(e) {
  return !!(e && e.__CANCEL__);
}
function Ie(e, t, r) {
  D.call(this, e ?? "canceled", D.ERR_CANCELED, t, r), this.name = "CanceledError";
}
M.inherits(Ie, D, {
  __CANCEL__: !0
});
function ms(e, t, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : t(new D(
    "Request failed with status code " + r.status,
    [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const fs = ne.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, o, a, n) {
      const l = [e + "=" + encodeURIComponent(t)];
      M.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), M.isString(o) && l.push("path=" + o), M.isString(a) && l.push("domain=" + a), n === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function Ss(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ps(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function io(e, t) {
  return e && !Ss(t) ? ps(e, t) : t;
}
const Ns = ne.hasStandardBrowserEnv ? (
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
      const h = M.isString(l) ? a(l) : l;
      return h.protocol === o.protocol && h.host === o.host;
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
function gs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ys(e, t) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let a = 0, n = 0, l;
  return t = t !== void 0 ? t : 1e3, function(N) {
    const G = Date.now(), b = o[n];
    l || (l = G), r[a] = N, o[a] = G;
    let v = n, z = 0;
    for (; v !== a; )
      z += r[v++], v = v % e;
    if (a = (a + 1) % e, a === n && (n = (n + 1) % e), G - l < t)
      return;
    const O = b && G - b;
    return O ? Math.round(z * 1e3 / O) : void 0;
  };
}
function cr(e, t) {
  let r = 0;
  const o = ys(50, 250);
  return (a) => {
    const n = a.loaded, l = a.lengthComputable ? a.total : void 0, h = n - r, N = o(h), G = n <= l;
    r = n;
    const b = {
      loaded: n,
      total: l,
      progress: l ? n / l : void 0,
      bytes: h,
      rate: N || void 0,
      estimated: N && l && G ? (l - n) / N : void 0,
      event: a
    };
    b[t ? "download" : "upload"] = !0, e(b);
  };
}
const Cs = typeof XMLHttpRequest < "u", Ts = Cs && function(e) {
  return new Promise(function(r, o) {
    let a = e.data;
    const n = ue.from(e.headers).normalize();
    let { responseType: l, withXSRFToken: h } = e, N;
    function G() {
      e.cancelToken && e.cancelToken.unsubscribe(N), e.signal && e.signal.removeEventListener("abort", N);
    }
    let b;
    if (M.isFormData(a)) {
      if (ne.hasStandardBrowserEnv || ne.hasStandardBrowserWebWorkerEnv)
        n.setContentType(!1);
      else if ((b = n.getContentType()) !== !1) {
        const [C, ...S] = b ? b.split(";").map((V) => V.trim()).filter(Boolean) : [];
        n.setContentType([C || "multipart/form-data", ...S].join("; "));
      }
    }
    let v = new XMLHttpRequest();
    if (e.auth) {
      const C = e.auth.username || "", S = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      n.set("Authorization", "Basic " + btoa(C + ":" + S));
    }
    const z = io(e.baseURL, e.url);
    v.open(e.method.toUpperCase(), eo(z, e.params, e.paramsSerializer), !0), v.timeout = e.timeout;
    function O() {
      if (!v)
        return;
      const C = ue.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), V = {
        data: !l || l === "text" || l === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: C,
        config: e,
        request: v
      };
      ms(function(F) {
        r(F), G();
      }, function(F) {
        o(F), G();
      }, V), v = null;
    }
    if ("onloadend" in v ? v.onloadend = O : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(O);
    }, v.onabort = function() {
      v && (o(new D("Request aborted", D.ECONNABORTED, e, v)), v = null);
    }, v.onerror = function() {
      o(new D("Network Error", D.ERR_NETWORK, e, v)), v = null;
    }, v.ontimeout = function() {
      let S = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const V = e.transitional || to;
      e.timeoutErrorMessage && (S = e.timeoutErrorMessage), o(new D(
        S,
        V.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
        e,
        v
      )), v = null;
    }, ne.hasStandardBrowserEnv && (h && M.isFunction(h) && (h = h(e)), h || h !== !1 && Ns(z))) {
      const C = e.xsrfHeaderName && e.xsrfCookieName && fs.read(e.xsrfCookieName);
      C && n.set(e.xsrfHeaderName, C);
    }
    a === void 0 && n.setContentType(null), "setRequestHeader" in v && M.forEach(n.toJSON(), function(S, V) {
      v.setRequestHeader(V, S);
    }), M.isUndefined(e.withCredentials) || (v.withCredentials = !!e.withCredentials), l && l !== "json" && (v.responseType = e.responseType), typeof e.onDownloadProgress == "function" && v.addEventListener("progress", cr(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", cr(e.onUploadProgress)), (e.cancelToken || e.signal) && (N = (C) => {
      v && (o(!C || C.type ? new Ie(null, e, v) : C), v.abort(), v = null);
    }, e.cancelToken && e.cancelToken.subscribe(N), e.signal && (e.signal.aborted ? N() : e.signal.addEventListener("abort", N)));
    const y = gs(z);
    if (y && ne.protocols.indexOf(y) === -1) {
      o(new D("Unsupported protocol " + y + ":", D.ERR_BAD_REQUEST, e));
      return;
    }
    v.send(a || null);
  });
}, gt = {
  http: Yn,
  xhr: Ts
};
M.forEach(gt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ur = (e) => `- ${e}`, vs = (e) => M.isFunction(e) || e === null || e === !1, no = {
  getAdapter: (e) => {
    e = M.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, o;
    const a = {};
    for (let n = 0; n < t; n++) {
      r = e[n];
      let l;
      if (o = r, !vs(r) && (o = gt[(l = String(r)).toLowerCase()], o === void 0))
        throw new D(`Unknown adapter '${l}'`);
      if (o)
        break;
      a[l || "#" + n] = o;
    }
    if (!o) {
      const n = Object.entries(a).map(
        ([h, N]) => `adapter ${h} ` + (N === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? n.length > 1 ? `since :
` + n.map(ur).join(`
`) : " " + ur(n[0]) : "as no adapter specified";
      throw new D(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: gt
};
function ct(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ie(null, e);
}
function dr(e) {
  return ct(e), e.headers = ue.from(e.headers), e.data = lt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), no.getAdapter(e.adapter || wt.adapter)(e).then(function(o) {
    return ct(e), o.data = lt.call(
      e,
      e.transformResponse,
      o
    ), o.headers = ue.from(o.headers), o;
  }, function(o) {
    return ao(o) || (ct(e), o && o.response && (o.response.data = lt.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = ue.from(o.response.headers))), Promise.reject(o);
  });
}
const hr = (e) => e instanceof ue ? e.toJSON() : e;
function Ge(e, t) {
  t = t || {};
  const r = {};
  function o(G, b, v) {
    return M.isPlainObject(G) && M.isPlainObject(b) ? M.merge.call({ caseless: v }, G, b) : M.isPlainObject(b) ? M.merge({}, b) : M.isArray(b) ? b.slice() : b;
  }
  function a(G, b, v) {
    if (M.isUndefined(b)) {
      if (!M.isUndefined(G))
        return o(void 0, G, v);
    } else
      return o(G, b, v);
  }
  function n(G, b) {
    if (!M.isUndefined(b))
      return o(void 0, b);
  }
  function l(G, b) {
    if (M.isUndefined(b)) {
      if (!M.isUndefined(G))
        return o(void 0, G);
    } else
      return o(void 0, b);
  }
  function h(G, b, v) {
    if (v in t)
      return o(G, b);
    if (v in e)
      return o(void 0, G);
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
    validateStatus: h,
    headers: (G, b) => a(hr(G), hr(b), !0)
  };
  return M.forEach(Object.keys(Object.assign({}, e, t)), function(b) {
    const v = N[b] || a, z = v(e[b], t[b], b);
    M.isUndefined(z) && v !== h || (r[b] = z);
  }), r;
}
const so = "1.6.5", Et = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Et[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const mr = {};
Et.transitional = function(t, r, o) {
  function a(n, l) {
    return "[Axios v" + so + "] Transitional option '" + n + "'" + l + (o ? ". " + o : "");
  }
  return (n, l, h) => {
    if (t === !1)
      throw new D(
        a(l, " has been removed" + (r ? " in " + r : "")),
        D.ERR_DEPRECATED
      );
    return r && !mr[l] && (mr[l] = !0, console.warn(
      a(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(n, l, h) : !0;
  };
};
function bs(e, t, r) {
  if (typeof e != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let a = o.length;
  for (; a-- > 0; ) {
    const n = o[a], l = t[n];
    if (l) {
      const h = e[n], N = h === void 0 || l(h, n, e);
      if (N !== !0)
        throw new D("option " + n + " must be " + N, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new D("Unknown option " + n, D.ERR_BAD_OPTION);
  }
}
const yt = {
  assertOptions: bs,
  validators: Et
}, he = yt.validators;
class Je {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new sr(),
      response: new sr()
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
    o !== void 0 && yt.assertOptions(o, {
      silentJSONParsing: he.transitional(he.boolean),
      forcedJSONParsing: he.transitional(he.boolean),
      clarifyTimeoutError: he.transitional(he.boolean)
    }, !1), a != null && (M.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : yt.assertOptions(a, {
      encode: he.function,
      serialize: he.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let l = n && M.merge(
      n.common,
      n[r.method]
    );
    n && M.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete n[y];
      }
    ), r.headers = ue.concat(l, n);
    const h = [];
    let N = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(r) === !1 || (N = N && C.synchronous, h.unshift(C.fulfilled, C.rejected));
    });
    const G = [];
    this.interceptors.response.forEach(function(C) {
      G.push(C.fulfilled, C.rejected);
    });
    let b, v = 0, z;
    if (!N) {
      const y = [dr.bind(this), void 0];
      for (y.unshift.apply(y, h), y.push.apply(y, G), z = y.length, b = Promise.resolve(r); v < z; )
        b = b.then(y[v++], y[v++]);
      return b;
    }
    z = h.length;
    let O = r;
    for (v = 0; v < z; ) {
      const y = h[v++], C = h[v++];
      try {
        O = y(O);
      } catch (S) {
        C.call(this, S);
        break;
      }
    }
    try {
      b = dr.call(this, O);
    } catch (y) {
      return Promise.reject(y);
    }
    for (v = 0, z = G.length; v < z; )
      b = b.then(G[v++], G[v++]);
    return b;
  }
  getUri(t) {
    t = Ge(this.defaults, t);
    const r = io(t.baseURL, t.url);
    return eo(r, t.params, t.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function(t) {
  Je.prototype[t] = function(r, o) {
    return this.request(Ge(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function(t) {
  function r(o) {
    return function(n, l, h) {
      return this.request(Ge(h || {}, {
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
class Lt {
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
      const l = new Promise((h) => {
        o.subscribe(h), n = h;
      }).then(a);
      return l.cancel = function() {
        o.unsubscribe(n);
      }, l;
    }, t(function(n, l, h) {
      o.reason || (o.reason = new Ie(n, l, h), r(o.reason));
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
      token: new Lt(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const Ms = Lt;
function Gs(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Vs(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const Ct = {
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
Object.entries(Ct).forEach(([e, t]) => {
  Ct[t] = e;
});
const As = Ct;
function lo(e) {
  const t = new Ke(e), r = Dr(Ke.prototype.request, t);
  return M.extend(r, Ke.prototype, t, { allOwnKeys: !0 }), M.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return lo(Ge(e, a));
  }, r;
}
const Z = lo(wt);
Z.Axios = Ke;
Z.CanceledError = Ie;
Z.CancelToken = Ms;
Z.isCancel = ao;
Z.VERSION = so;
Z.toFormData = et;
Z.AxiosError = D;
Z.Cancel = Z.CanceledError;
Z.all = function(t) {
  return Promise.all(t);
};
Z.spread = Gs;
Z.isAxiosError = Vs;
Z.mergeConfig = Ge;
Z.AxiosHeaders = ue;
Z.formToJSON = (e) => oo(M.isHTMLForm(e) ? new FormData(e) : e);
Z.getAdapter = no.getAdapter;
Z.HttpStatusCode = As;
Z.default = Z;
function Fs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Ps = /* @__PURE__ */ new Set([
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
var ks = (e) => !Ps.has(e && e.code);
const xs = /* @__PURE__ */ Fs(ks), co = "axios-retry";
function uo(e) {
  const t = ["ERR_CANCELED", "ECONNABORTED"];
  return e.response || !e.code || t.includes(e.code) ? !1 : xs(e);
}
const ho = ["get", "head", "options"], ws = ho.concat(["put", "delete"]);
function Ot(e) {
  return e.code !== "ECONNABORTED" && (!e.response || e.response.status >= 500 && e.response.status <= 599);
}
function Es(e) {
  var t;
  return (t = e.config) != null && t.method ? Ot(e) && ho.indexOf(e.config.method) !== -1 : !1;
}
function mo(e) {
  var t;
  return (t = e.config) != null && t.method ? Ot(e) && ws.indexOf(e.config.method) !== -1 : !1;
}
function fo(e) {
  return uo(e) || mo(e);
}
function Ls() {
  return 0;
}
function Os(e = 0, t = void 0, r = 100) {
  const o = 2 ** e * r, a = o * 0.2 * Math.random();
  return o + a;
}
const _s = {
  retries: 3,
  retryCondition: fo,
  retryDelay: Ls,
  shouldResetTimeout: !1,
  onRetry: () => {
  }
};
function zs(e, t) {
  return { ..._s, ...t, ...e[co] };
}
function fr(e, t) {
  const r = zs(e, t || {});
  return r.retryCount = r.retryCount || 0, r.lastRequestTime = r.lastRequestTime || Date.now(), e[co] = r, r;
}
function Is(e, t) {
  e.defaults.agent === t.agent && delete t.agent, e.defaults.httpAgent === t.httpAgent && delete t.httpAgent, e.defaults.httpsAgent === t.httpsAgent && delete t.httpsAgent;
}
async function Rs(e, t) {
  const { retries: r, retryCondition: o } = e, a = (e.retryCount || 0) < r && o(t);
  if (typeof a == "object")
    try {
      return await a !== !1;
    } catch {
      return !1;
    }
  return a;
}
const pe = (e, t) => {
  const r = e.interceptors.request.use((a) => (fr(a, t), a)), o = e.interceptors.response.use(null, async (a) => {
    const { config: n } = a;
    if (!n)
      return Promise.reject(a);
    const l = fr(n, t);
    if (await Rs(l, a)) {
      l.retryCount += 1;
      const { retryDelay: h, shouldResetTimeout: N, onRetry: G } = l, b = h(l.retryCount, a);
      if (Is(e, n), !N && n.timeout && l.lastRequestTime) {
        const v = Date.now() - l.lastRequestTime, z = n.timeout - v - b;
        if (z <= 0)
          return Promise.reject(a);
        n.timeout = z;
      }
      return n.transformRequest = [(v) => v], await G(l.retryCount, a, n), new Promise((v) => {
        setTimeout(() => v(e(n)), b);
      });
    }
    return Promise.reject(a);
  });
  return { requestInterceptorId: r, responseInterceptorId: o };
};
pe.isNetworkError = uo;
pe.isSafeRequestError = Es;
pe.isIdempotentRequestError = mo;
pe.isNetworkOrIdempotentRequestError = fo;
pe.exponentialDelay = Os;
pe.isRetryableError = Ot;
const _t = Z.create({
  timeout: 1e3 * 300
});
pe(_t, { retries: 3 });
_t.interceptors.response.use(
  function(e) {
    return e.data.status && e.data.status === 200 ? e.data.data : e.data;
  },
  function(e) {
    var t, r;
    if ((r = (t = e == null ? void 0 : e.response) == null ? void 0 : t.data) != null && r.error) {
      const { error: o, details: a } = e.response.data;
      return Promise.reject(Error(a));
    }
    return Promise.reject(e);
  }
);
async function Bs(e, t = {}) {
  return _t({ url: e, method: "get", ...t });
}
function Be(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Us = { exports: {} };
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(o, a, n) {
      function l(G, b) {
        if (!a[G]) {
          if (!o[G]) {
            var v = typeof Be == "function" && Be;
            if (!b && v)
              return v(G, !0);
            if (h)
              return h(G, !0);
            throw new Error("Cannot find module '" + G + "'");
          }
          b = a[G] = { exports: {} }, o[G][0].call(b.exports, function(z) {
            var O = o[G][1][z];
            return l(O || z);
          }, b, b.exports, r, o, a, n);
        }
        return a[G].exports;
      }
      for (var h = typeof Be == "function" && Be, N = 0; N < n.length; N++)
        l(n[N]);
      return l;
    }({ 1: [function(r, o, a) {
      (function(n, l, h, N, G, b, v, z, O) {
        var y = r("crypto");
        function C(f, g) {
          g = P(f, g);
          var c;
          return (c = g.algorithm !== "passthrough" ? y.createHash(g.algorithm) : new L()).write === void 0 && (c.write = c.update, c.end = c.update), A(g, c).dispatch(f), c.update || c.end(""), c.digest ? c.digest(g.encoding === "buffer" ? void 0 : g.encoding) : (f = c.read(), g.encoding !== "buffer" ? f.toString(g.encoding) : f);
        }
        (a = o.exports = C).sha1 = function(f) {
          return C(f);
        }, a.keys = function(f) {
          return C(f, { excludeValues: !0, algorithm: "sha1", encoding: "hex" });
        }, a.MD5 = function(f) {
          return C(f, { algorithm: "md5", encoding: "hex" });
        }, a.keysMD5 = function(f) {
          return C(f, { algorithm: "md5", encoding: "hex", excludeValues: !0 });
        };
        var S = y.getHashes ? y.getHashes().slice() : ["sha1", "md5"], V = (S.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
        function P(f, g) {
          var c = {};
          if (c.algorithm = (g = g || {}).algorithm || "sha1", c.encoding = g.encoding || "hex", c.excludeValues = !!g.excludeValues, c.algorithm = c.algorithm.toLowerCase(), c.encoding = c.encoding.toLowerCase(), c.ignoreUnknown = g.ignoreUnknown === !0, c.respectType = g.respectType !== !1, c.respectFunctionNames = g.respectFunctionNames !== !1, c.respectFunctionProperties = g.respectFunctionProperties !== !1, c.unorderedArrays = g.unorderedArrays === !0, c.unorderedSets = g.unorderedSets !== !1, c.unorderedObjects = g.unorderedObjects !== !1, c.replacer = g.replacer || void 0, c.excludeKeys = g.excludeKeys || void 0, f === void 0)
            throw new Error("Object argument required.");
          for (var d = 0; d < S.length; ++d)
            S[d].toLowerCase() === c.algorithm.toLowerCase() && (c.algorithm = S[d]);
          if (S.indexOf(c.algorithm) === -1)
            throw new Error('Algorithm "' + c.algorithm + '"  not supported. supported values: ' + S.join(", "));
          if (V.indexOf(c.encoding) === -1 && c.algorithm !== "passthrough")
            throw new Error('Encoding "' + c.encoding + '"  not supported. supported values: ' + V.join(", "));
          return c;
        }
        function F(f) {
          if (typeof f == "function")
            return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(f)) != null;
        }
        function A(f, g, c) {
          c = c || [];
          function d(s) {
            return g.update ? g.update(s, "utf8") : g.write(s, "utf8");
          }
          return { dispatch: function(s) {
            return this["_" + ((s = f.replacer ? f.replacer(s) : s) === null ? "null" : typeof s)](s);
          }, _object: function(s) {
            var p, T = Object.prototype.toString.call(s), R = /\[object (.*)\]/i.exec(T);
            if (R = (R = R ? R[1] : "unknown:[" + T + "]").toLowerCase(), 0 <= (T = c.indexOf(s)))
              return this.dispatch("[CIRCULAR:" + T + "]");
            if (c.push(s), h !== void 0 && h.isBuffer && h.isBuffer(s))
              return d("buffer:"), d(s);
            if (R === "object" || R === "function" || R === "asyncfunction")
              return T = Object.keys(s), f.unorderedObjects && (T = T.sort()), f.respectType === !1 || F(s) || T.splice(0, 0, "prototype", "__proto__", "constructor"), f.excludeKeys && (T = T.filter(function(I) {
                return !f.excludeKeys(I);
              })), d("object:" + T.length + ":"), p = this, T.forEach(function(I) {
                p.dispatch(I), d(":"), f.excludeValues || p.dispatch(s[I]), d(",");
              });
            if (!this["_" + R]) {
              if (f.ignoreUnknown)
                return d("[" + R + "]");
              throw new Error('Unknown object type "' + R + '"');
            }
            this["_" + R](s);
          }, _array: function(s, I) {
            I = I !== void 0 ? I : f.unorderedArrays !== !1;
            var T = this;
            if (d("array:" + s.length + ":"), !I || s.length <= 1)
              return s.forEach(function(B) {
                return T.dispatch(B);
              });
            var R = [], I = s.map(function(B) {
              var _ = new L(), K = c.slice();
              return A(f, _, K).dispatch(B), R = R.concat(K.slice(c.length)), _.read().toString();
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
            d("fn:"), F(s) ? this.dispatch("[native]") : this.dispatch(s.toString()), f.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(s.name)), f.respectFunctionProperties && this._object(s);
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
            return d("map:"), s = Array.from(s), this._array(s, f.unorderedSets !== !1);
          }, _set: function(s) {
            return d("set:"), s = Array.from(s), this._array(s, f.unorderedSets !== !1);
          }, _file: function(s) {
            return d("file:"), this.dispatch([s.name, s.size, s.type, s.lastModfied]);
          }, _blob: function() {
            if (f.ignoreUnknown)
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
          return { buf: "", write: function(f) {
            this.buf += f;
          }, end: function(f) {
            this.buf += f;
          }, read: function() {
            return this.buf;
          } };
        }
        a.writeToStream = function(f, g, c) {
          return c === void 0 && (c = g, g = {}), A(g = P(f, g), c).dispatch(f);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
    }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(r, o, a) {
      (function(n, l, h, N, G, b, v, z, O) {
        (function(y) {
          var C = typeof Uint8Array < "u" ? Uint8Array : Array, S = 43, V = 47, P = 48, F = 97, A = 65, L = 45, f = 95;
          function g(c) {
            return c = c.charCodeAt(0), c === S || c === L ? 62 : c === V || c === f ? 63 : c < P ? -1 : c < P + 10 ? c - P + 26 + 26 : c < A + 26 ? c - A : c < F + 26 ? c - F + 26 : void 0;
          }
          y.toByteArray = function(c) {
            var d, s;
            if (0 < c.length % 4)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var p = c.length, p = c.charAt(p - 2) === "=" ? 2 : c.charAt(p - 1) === "=" ? 1 : 0, T = new C(3 * c.length / 4 - p), R = 0 < p ? c.length - 4 : c.length, I = 0;
            function B(_) {
              T[I++] = _;
            }
            for (d = 0; d < R; d += 4, 0)
              B((16711680 & (s = g(c.charAt(d)) << 18 | g(c.charAt(d + 1)) << 12 | g(c.charAt(d + 2)) << 6 | g(c.charAt(d + 3)))) >> 16), B((65280 & s) >> 8), B(255 & s);
            return p == 2 ? B(255 & (s = g(c.charAt(d)) << 2 | g(c.charAt(d + 1)) >> 4)) : p == 1 && (B((s = g(c.charAt(d)) << 10 | g(c.charAt(d + 1)) << 4 | g(c.charAt(d + 2)) >> 2) >> 8 & 255), B(255 & s)), T;
          }, y.fromByteArray = function(c) {
            var d, s, p, T, R = c.length % 3, I = "";
            function B(_) {
              return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(_);
            }
            for (d = 0, p = c.length - R; d < p; d += 3)
              s = (c[d] << 16) + (c[d + 1] << 8) + c[d + 2], I += B((T = s) >> 18 & 63) + B(T >> 12 & 63) + B(T >> 6 & 63) + B(63 & T);
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
      (function(n, l, S, N, G, b, v, z, O) {
        var y = r("base64-js"), C = r("ieee754");
        function S(i, u, m) {
          if (!(this instanceof S))
            return new S(i, u, m);
          var x, k, E, U, J = typeof i;
          if (u === "base64" && J == "string")
            for (i = (U = i).trim ? U.trim() : U.replace(/^\s+|\s+$/g, ""); i.length % 4 != 0; )
              i += "=";
          if (J == "number")
            x = X(i);
          else if (J == "string")
            x = S.byteLength(i, u);
          else {
            if (J != "object")
              throw new Error("First argument needs to be a number, array or string.");
            x = X(i.length);
          }
          if (S._useTypedArrays ? k = S._augment(new Uint8Array(x)) : ((k = this).length = x, k._isBuffer = !0), S._useTypedArrays && typeof i.byteLength == "number")
            k._set(i);
          else if (Y(U = i) || S.isBuffer(U) || U && typeof U == "object" && typeof U.length == "number")
            for (E = 0; E < x; E++)
              S.isBuffer(i) ? k[E] = i.readUInt8(E) : k[E] = i[E];
          else if (J == "string")
            k.write(i, 0, u);
          else if (J == "number" && !S._useTypedArrays && !m)
            for (E = 0; E < x; E++)
              k[E] = 0;
          return k;
        }
        function V(i, u, m, x) {
          return S._charsWritten = Re(function(k) {
            for (var E = [], U = 0; U < k.length; U++)
              E.push(255 & k.charCodeAt(U));
            return E;
          }(u), i, m, x);
        }
        function P(i, u, m, x) {
          return S._charsWritten = Re(function(k) {
            for (var E, U, J = [], q = 0; q < k.length; q++)
              U = k.charCodeAt(q), E = U >> 8, U = U % 256, J.push(U), J.push(E);
            return J;
          }(u), i, m, x);
        }
        function F(i, u, m) {
          var x = "";
          m = Math.min(i.length, m);
          for (var k = u; k < m; k++)
            x += String.fromCharCode(i[k]);
          return x;
        }
        function A(i, u, m, E) {
          E || (w(typeof m == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 1 < i.length, "Trying to read beyond buffer length"));
          var k, E = i.length;
          if (!(E <= u))
            return m ? (k = i[u], u + 1 < E && (k |= i[u + 1] << 8)) : (k = i[u] << 8, u + 1 < E && (k |= i[u + 1])), k;
        }
        function L(i, u, m, E) {
          E || (w(typeof m == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 3 < i.length, "Trying to read beyond buffer length"));
          var k, E = i.length;
          if (!(E <= u))
            return m ? (u + 2 < E && (k = i[u + 2] << 16), u + 1 < E && (k |= i[u + 1] << 8), k |= i[u], u + 3 < E && (k += i[u + 3] << 24 >>> 0)) : (u + 1 < E && (k = i[u + 1] << 16), u + 2 < E && (k |= i[u + 2] << 8), u + 3 < E && (k |= i[u + 3]), k += i[u] << 24 >>> 0), k;
        }
        function f(i, u, m, x) {
          if (x || (w(typeof m == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 1 < i.length, "Trying to read beyond buffer length")), !(i.length <= u))
            return x = A(i, u, m, !0), 32768 & x ? -1 * (65535 - x + 1) : x;
        }
        function g(i, u, m, x) {
          if (x || (w(typeof m == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 3 < i.length, "Trying to read beyond buffer length")), !(i.length <= u))
            return x = L(i, u, m, !0), 2147483648 & x ? -1 * (4294967295 - x + 1) : x;
        }
        function c(i, u, m, x) {
          return x || (w(typeof m == "boolean", "missing or invalid endian"), w(u + 3 < i.length, "Trying to read beyond buffer length")), C.read(i, u, m, 23, 4);
        }
        function d(i, u, m, x) {
          return x || (w(typeof m == "boolean", "missing or invalid endian"), w(u + 7 < i.length, "Trying to read beyond buffer length")), C.read(i, u, m, 52, 8);
        }
        function s(i, u, m, x, k) {
          if (k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 1 < i.length, "trying to write beyond buffer length"), rt(u, 65535)), k = i.length, !(k <= m))
            for (var E = 0, U = Math.min(k - m, 2); E < U; E++)
              i[m + E] = (u & 255 << 8 * (x ? E : 1 - E)) >>> 8 * (x ? E : 1 - E);
        }
        function p(i, u, m, x, k) {
          if (k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 3 < i.length, "trying to write beyond buffer length"), rt(u, 4294967295)), k = i.length, !(k <= m))
            for (var E = 0, U = Math.min(k - m, 4); E < U; E++)
              i[m + E] = u >>> 8 * (x ? E : 3 - E) & 255;
        }
        function T(i, u, m, x, k) {
          k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 1 < i.length, "Trying to write beyond buffer length"), ot(u, 32767, -32768)), i.length <= m || s(i, 0 <= u ? u : 65535 + u + 1, m, x, k);
        }
        function R(i, u, m, x, k) {
          k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 3 < i.length, "Trying to write beyond buffer length"), ot(u, 2147483647, -2147483648)), i.length <= m || p(i, 0 <= u ? u : 4294967295 + u + 1, m, x, k);
        }
        function I(i, u, m, x, k) {
          k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 3 < i.length, "Trying to write beyond buffer length"), Rt(u, 34028234663852886e22, -34028234663852886e22)), i.length <= m || C.write(i, u, m, x, 23, 4);
        }
        function B(i, u, m, x, k) {
          k || (w(u != null, "missing value"), w(typeof x == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 7 < i.length, "Trying to write beyond buffer length"), Rt(u, 17976931348623157e292, -17976931348623157e292)), i.length <= m || C.write(i, u, m, x, 52, 8);
        }
        a.Buffer = S, a.SlowBuffer = S, a.INSPECT_MAX_BYTES = 50, S.poolSize = 8192, S._useTypedArrays = function() {
          try {
            var i = new ArrayBuffer(0), u = new Uint8Array(i);
            return u.foo = function() {
              return 42;
            }, u.foo() === 42 && typeof u.subarray == "function";
          } catch {
            return !1;
          }
        }(), S.isEncoding = function(i) {
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
        }, S.isBuffer = function(i) {
          return !(i == null || !i._isBuffer);
        }, S.byteLength = function(i, u) {
          var m;
          switch (i += "", u || "utf8") {
            case "hex":
              m = i.length / 2;
              break;
            case "utf8":
            case "utf-8":
              m = le(i).length;
              break;
            case "ascii":
            case "binary":
            case "raw":
              m = i.length;
              break;
            case "base64":
              m = zt(i).length;
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              m = 2 * i.length;
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return m;
        }, S.concat = function(i, u) {
          if (w(Y(i), `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`), i.length === 0)
            return new S(0);
          if (i.length === 1)
            return i[0];
          if (typeof u != "number")
            for (k = u = 0; k < i.length; k++)
              u += i[k].length;
          for (var m = new S(u), x = 0, k = 0; k < i.length; k++) {
            var E = i[k];
            E.copy(m, x), x += E.length;
          }
          return m;
        }, S.prototype.write = function(i, u, m, x) {
          isFinite(u) ? isFinite(m) || (x = m, m = void 0) : (q = x, x = u, u = m, m = q), u = Number(u) || 0;
          var k, E, U, J, q = this.length - u;
          switch ((!m || q < (m = Number(m))) && (m = q), x = String(x || "utf8").toLowerCase()) {
            case "hex":
              k = function(re, Q, ee, W) {
                ee = Number(ee) || 0;
                var $ = re.length - ee;
                (!W || $ < (W = Number(W))) && (W = $), w(($ = Q.length) % 2 == 0, "Invalid hex string"), $ / 2 < W && (W = $ / 2);
                for (var Ne = 0; Ne < W; Ne++) {
                  var Bt = parseInt(Q.substr(2 * Ne, 2), 16);
                  w(!isNaN(Bt), "Invalid hex string"), re[ee + Ne] = Bt;
                }
                return S._charsWritten = 2 * Ne, Ne;
              }(this, i, u, m);
              break;
            case "utf8":
            case "utf-8":
              E = this, U = u, J = m, k = S._charsWritten = Re(le(i), E, U, J);
              break;
            case "ascii":
            case "binary":
              k = V(this, i, u, m);
              break;
            case "base64":
              E = this, U = u, J = m, k = S._charsWritten = Re(zt(i), E, U, J);
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              k = P(this, i, u, m);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return k;
        }, S.prototype.toString = function(i, u, m) {
          var x, k, E, U, J = this;
          if (i = String(i || "utf8").toLowerCase(), u = Number(u) || 0, (m = m !== void 0 ? Number(m) : J.length) === u)
            return "";
          switch (i) {
            case "hex":
              x = function(q, re, Q) {
                var ee = q.length;
                (!re || re < 0) && (re = 0), (!Q || Q < 0 || ee < Q) && (Q = ee);
                for (var W = "", $ = re; $ < Q; $++)
                  W += H(q[$]);
                return W;
              }(J, u, m);
              break;
            case "utf8":
            case "utf-8":
              x = function(q, re, Q) {
                var ee = "", W = "";
                Q = Math.min(q.length, Q);
                for (var $ = re; $ < Q; $++)
                  q[$] <= 127 ? (ee += It(W) + String.fromCharCode(q[$]), W = "") : W += "%" + q[$].toString(16);
                return ee + It(W);
              }(J, u, m);
              break;
            case "ascii":
            case "binary":
              x = F(J, u, m);
              break;
            case "base64":
              k = J, U = m, x = (E = u) === 0 && U === k.length ? y.fromByteArray(k) : y.fromByteArray(k.slice(E, U));
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              x = function(q, re, Q) {
                for (var ee = q.slice(re, Q), W = "", $ = 0; $ < ee.length; $ += 2)
                  W += String.fromCharCode(ee[$] + 256 * ee[$ + 1]);
                return W;
              }(J, u, m);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return x;
        }, S.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        }, S.prototype.copy = function(i, u, m, x) {
          if (u = u || 0, (x = x || x === 0 ? x : this.length) !== (m = m || 0) && i.length !== 0 && this.length !== 0) {
            w(m <= x, "sourceEnd < sourceStart"), w(0 <= u && u < i.length, "targetStart out of bounds"), w(0 <= m && m < this.length, "sourceStart out of bounds"), w(0 <= x && x <= this.length, "sourceEnd out of bounds"), x > this.length && (x = this.length);
            var k = (x = i.length - u < x - m ? i.length - u + m : x) - m;
            if (k < 100 || !S._useTypedArrays)
              for (var E = 0; E < k; E++)
                i[E + u] = this[E + m];
            else
              i._set(this.subarray(m, m + k), u);
          }
        }, S.prototype.slice = function(i, u) {
          var m = this.length;
          if (i = K(i, m, 0), u = K(u, m, m), S._useTypedArrays)
            return S._augment(this.subarray(i, u));
          for (var x = u - i, k = new S(x, void 0, !0), E = 0; E < x; E++)
            k[E] = this[E + i];
          return k;
        }, S.prototype.get = function(i) {
          return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(i);
        }, S.prototype.set = function(i, u) {
          return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(i, u);
        }, S.prototype.readUInt8 = function(i, u) {
          if (u || (w(i != null, "missing offset"), w(i < this.length, "Trying to read beyond buffer length")), !(i >= this.length))
            return this[i];
        }, S.prototype.readUInt16LE = function(i, u) {
          return A(this, i, !0, u);
        }, S.prototype.readUInt16BE = function(i, u) {
          return A(this, i, !1, u);
        }, S.prototype.readUInt32LE = function(i, u) {
          return L(this, i, !0, u);
        }, S.prototype.readUInt32BE = function(i, u) {
          return L(this, i, !1, u);
        }, S.prototype.readInt8 = function(i, u) {
          if (u || (w(i != null, "missing offset"), w(i < this.length, "Trying to read beyond buffer length")), !(i >= this.length))
            return 128 & this[i] ? -1 * (255 - this[i] + 1) : this[i];
        }, S.prototype.readInt16LE = function(i, u) {
          return f(this, i, !0, u);
        }, S.prototype.readInt16BE = function(i, u) {
          return f(this, i, !1, u);
        }, S.prototype.readInt32LE = function(i, u) {
          return g(this, i, !0, u);
        }, S.prototype.readInt32BE = function(i, u) {
          return g(this, i, !1, u);
        }, S.prototype.readFloatLE = function(i, u) {
          return c(this, i, !0, u);
        }, S.prototype.readFloatBE = function(i, u) {
          return c(this, i, !1, u);
        }, S.prototype.readDoubleLE = function(i, u) {
          return d(this, i, !0, u);
        }, S.prototype.readDoubleBE = function(i, u) {
          return d(this, i, !1, u);
        }, S.prototype.writeUInt8 = function(i, u, m) {
          m || (w(i != null, "missing value"), w(u != null, "missing offset"), w(u < this.length, "trying to write beyond buffer length"), rt(i, 255)), u >= this.length || (this[u] = i);
        }, S.prototype.writeUInt16LE = function(i, u, m) {
          s(this, i, u, !0, m);
        }, S.prototype.writeUInt16BE = function(i, u, m) {
          s(this, i, u, !1, m);
        }, S.prototype.writeUInt32LE = function(i, u, m) {
          p(this, i, u, !0, m);
        }, S.prototype.writeUInt32BE = function(i, u, m) {
          p(this, i, u, !1, m);
        }, S.prototype.writeInt8 = function(i, u, m) {
          m || (w(i != null, "missing value"), w(u != null, "missing offset"), w(u < this.length, "Trying to write beyond buffer length"), ot(i, 127, -128)), u >= this.length || (0 <= i ? this.writeUInt8(i, u, m) : this.writeUInt8(255 + i + 1, u, m));
        }, S.prototype.writeInt16LE = function(i, u, m) {
          T(this, i, u, !0, m);
        }, S.prototype.writeInt16BE = function(i, u, m) {
          T(this, i, u, !1, m);
        }, S.prototype.writeInt32LE = function(i, u, m) {
          R(this, i, u, !0, m);
        }, S.prototype.writeInt32BE = function(i, u, m) {
          R(this, i, u, !1, m);
        }, S.prototype.writeFloatLE = function(i, u, m) {
          I(this, i, u, !0, m);
        }, S.prototype.writeFloatBE = function(i, u, m) {
          I(this, i, u, !1, m);
        }, S.prototype.writeDoubleLE = function(i, u, m) {
          B(this, i, u, !0, m);
        }, S.prototype.writeDoubleBE = function(i, u, m) {
          B(this, i, u, !1, m);
        }, S.prototype.fill = function(i, u, m) {
          if (u = u || 0, m = m || this.length, w(typeof (i = typeof (i = i || 0) == "string" ? i.charCodeAt(0) : i) == "number" && !isNaN(i), "value is not a number"), w(u <= m, "end < start"), m !== u && this.length !== 0) {
            w(0 <= u && u < this.length, "start out of bounds"), w(0 <= m && m <= this.length, "end out of bounds");
            for (var x = u; x < m; x++)
              this[x] = i;
          }
        }, S.prototype.inspect = function() {
          for (var i = [], u = this.length, m = 0; m < u; m++)
            if (i[m] = H(this[m]), m === a.INSPECT_MAX_BYTES) {
              i[m + 1] = "...";
              break;
            }
          return "<Buffer " + i.join(" ") + ">";
        }, S.prototype.toArrayBuffer = function() {
          if (typeof Uint8Array > "u")
            throw new Error("Buffer.toArrayBuffer not supported in this browser");
          if (S._useTypedArrays)
            return new S(this).buffer;
          for (var i = new Uint8Array(this.length), u = 0, m = i.length; u < m; u += 1)
            i[u] = this[u];
          return i.buffer;
        };
        var _ = S.prototype;
        function K(i, u, m) {
          return typeof i != "number" ? m : u <= (i = ~~i) ? u : 0 <= i || 0 <= (i += u) ? i : 0;
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
        function le(i) {
          for (var u = [], m = 0; m < i.length; m++) {
            var x = i.charCodeAt(m);
            if (x <= 127)
              u.push(i.charCodeAt(m));
            else
              for (var k = m, E = (55296 <= x && x <= 57343 && m++, encodeURIComponent(i.slice(k, m + 1)).substr(1).split("%")), U = 0; U < E.length; U++)
                u.push(parseInt(E[U], 16));
          }
          return u;
        }
        function zt(i) {
          return y.toByteArray(i);
        }
        function Re(i, u, m, x) {
          for (var k = 0; k < x && !(k + m >= u.length || k >= i.length); k++)
            u[k + m] = i[k];
          return k;
        }
        function It(i) {
          try {
            return decodeURIComponent(i);
          } catch {
            return "�";
          }
        }
        function rt(i, u) {
          w(typeof i == "number", "cannot write a non-number as a number"), w(0 <= i, "specified a negative value for writing an unsigned value"), w(i <= u, "value is larger than maximum value for type"), w(Math.floor(i) === i, "value has a fractional component");
        }
        function ot(i, u, m) {
          w(typeof i == "number", "cannot write a non-number as a number"), w(i <= u, "value larger than maximum allowed value"), w(m <= i, "value smaller than minimum allowed value"), w(Math.floor(i) === i, "value has a fractional component");
        }
        function Rt(i, u, m) {
          w(typeof i == "number", "cannot write a non-number as a number"), w(i <= u, "value larger than maximum allowed value"), w(m <= i, "value smaller than minimum allowed value");
        }
        function w(i, u) {
          if (!i)
            throw new Error(u || "Failed assertion");
        }
        S._augment = function(i) {
          return i._isBuffer = !0, i._get = i.get, i._set = i.set, i.get = _.get, i.set = _.set, i.write = _.write, i.toString = _.toString, i.toLocaleString = _.toString, i.toJSON = _.toJSON, i.copy = _.copy, i.slice = _.slice, i.readUInt8 = _.readUInt8, i.readUInt16LE = _.readUInt16LE, i.readUInt16BE = _.readUInt16BE, i.readUInt32LE = _.readUInt32LE, i.readUInt32BE = _.readUInt32BE, i.readInt8 = _.readInt8, i.readInt16LE = _.readInt16LE, i.readInt16BE = _.readInt16BE, i.readInt32LE = _.readInt32LE, i.readInt32BE = _.readInt32BE, i.readFloatLE = _.readFloatLE, i.readFloatBE = _.readFloatBE, i.readDoubleLE = _.readDoubleLE, i.readDoubleBE = _.readDoubleBE, i.writeUInt8 = _.writeUInt8, i.writeUInt16LE = _.writeUInt16LE, i.writeUInt16BE = _.writeUInt16BE, i.writeUInt32LE = _.writeUInt32LE, i.writeUInt32BE = _.writeUInt32BE, i.writeInt8 = _.writeInt8, i.writeInt16LE = _.writeInt16LE, i.writeInt16BE = _.writeInt16BE, i.writeInt32LE = _.writeInt32LE, i.writeInt32BE = _.writeInt32BE, i.writeFloatLE = _.writeFloatLE, i.writeFloatBE = _.writeFloatBE, i.writeDoubleLE = _.writeDoubleLE, i.writeDoubleBE = _.writeDoubleBE, i.fill = _.fill, i.inspect = _.inspect, i.toArrayBuffer = _.toArrayBuffer, i;
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
    }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(r, o, a) {
      (function(n, l, y, N, G, b, v, z, O) {
        var y = r("buffer").Buffer, C = 4, S = new y(C);
        S.fill(0), o.exports = { hash: function(V, P, F, A) {
          for (var L = P(function(s, p) {
            s.length % C != 0 && (T = s.length + (C - s.length % C), s = y.concat([s, S], T));
            for (var T, R = [], I = p ? s.readInt32BE : s.readInt32LE, B = 0; B < s.length; B += C)
              R.push(I.call(s, B));
            return R;
          }(V = y.isBuffer(V) ? V : new y(V), A), 8 * V.length), P = A, f = new y(F), g = P ? f.writeInt32BE : f.writeInt32LE, c = 0; c < L.length; c++)
            g.call(f, L[c], 4 * c, !0);
          return f;
        } };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 5: [function(r, o, a) {
      (function(n, l, y, N, G, b, v, z, O) {
        var y = r("buffer").Buffer, C = r("./sha"), S = r("./sha256"), V = r("./rng"), P = { sha1: C, sha256: S, md5: r("./md5") }, F = 64, A = new y(F);
        function L(s, p) {
          var T = P[s = s || "sha1"], R = [];
          return T || f("algorithm:", s, "is not yet supported"), { update: function(I) {
            return y.isBuffer(I) || (I = new y(I)), R.push(I), I.length, this;
          }, digest: function(I) {
            var B = y.concat(R), B = p ? function(_, K, X) {
              y.isBuffer(K) || (K = new y(K)), y.isBuffer(X) || (X = new y(X)), K.length > F ? K = _(K) : K.length < F && (K = y.concat([K, A], F));
              for (var Y = new y(F), H = new y(F), le = 0; le < F; le++)
                Y[le] = 54 ^ K[le], H[le] = 92 ^ K[le];
              return X = _(y.concat([Y, X])), _(y.concat([H, X]));
            }(T, p, B) : T(B);
            return R = null, I ? B.toString(I) : B;
          } };
        }
        function f() {
          var s = [].slice.call(arguments).join(" ");
          throw new Error([s, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join(`
`));
        }
        A.fill(0), a.createHash = function(s) {
          return L(s);
        }, a.createHmac = L, a.randomBytes = function(s, p) {
          if (!p || !p.call)
            return new y(V(s));
          try {
            p.call(this, void 0, new y(V(s)));
          } catch (T) {
            p(T);
          }
        };
        var g, c = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], d = function(s) {
          a[s] = function() {
            f("sorry,", s, "is not implemented yet");
          };
        };
        for (g in c)
          d(c[g]);
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(r, o, a) {
      (function(n, l, h, N, G, b, v, z, O) {
        var y = r("./helpers");
        function C(f, g) {
          f[g >> 5] |= 128 << g % 32, f[14 + (g + 64 >>> 9 << 4)] = g;
          for (var c = 1732584193, d = -271733879, s = -1732584194, p = 271733878, T = 0; T < f.length; T += 16) {
            var R = c, I = d, B = s, _ = p, c = V(c, d, s, p, f[T + 0], 7, -680876936), p = V(p, c, d, s, f[T + 1], 12, -389564586), s = V(s, p, c, d, f[T + 2], 17, 606105819), d = V(d, s, p, c, f[T + 3], 22, -1044525330);
            c = V(c, d, s, p, f[T + 4], 7, -176418897), p = V(p, c, d, s, f[T + 5], 12, 1200080426), s = V(s, p, c, d, f[T + 6], 17, -1473231341), d = V(d, s, p, c, f[T + 7], 22, -45705983), c = V(c, d, s, p, f[T + 8], 7, 1770035416), p = V(p, c, d, s, f[T + 9], 12, -1958414417), s = V(s, p, c, d, f[T + 10], 17, -42063), d = V(d, s, p, c, f[T + 11], 22, -1990404162), c = V(c, d, s, p, f[T + 12], 7, 1804603682), p = V(p, c, d, s, f[T + 13], 12, -40341101), s = V(s, p, c, d, f[T + 14], 17, -1502002290), c = P(c, d = V(d, s, p, c, f[T + 15], 22, 1236535329), s, p, f[T + 1], 5, -165796510), p = P(p, c, d, s, f[T + 6], 9, -1069501632), s = P(s, p, c, d, f[T + 11], 14, 643717713), d = P(d, s, p, c, f[T + 0], 20, -373897302), c = P(c, d, s, p, f[T + 5], 5, -701558691), p = P(p, c, d, s, f[T + 10], 9, 38016083), s = P(s, p, c, d, f[T + 15], 14, -660478335), d = P(d, s, p, c, f[T + 4], 20, -405537848), c = P(c, d, s, p, f[T + 9], 5, 568446438), p = P(p, c, d, s, f[T + 14], 9, -1019803690), s = P(s, p, c, d, f[T + 3], 14, -187363961), d = P(d, s, p, c, f[T + 8], 20, 1163531501), c = P(c, d, s, p, f[T + 13], 5, -1444681467), p = P(p, c, d, s, f[T + 2], 9, -51403784), s = P(s, p, c, d, f[T + 7], 14, 1735328473), c = F(c, d = P(d, s, p, c, f[T + 12], 20, -1926607734), s, p, f[T + 5], 4, -378558), p = F(p, c, d, s, f[T + 8], 11, -2022574463), s = F(s, p, c, d, f[T + 11], 16, 1839030562), d = F(d, s, p, c, f[T + 14], 23, -35309556), c = F(c, d, s, p, f[T + 1], 4, -1530992060), p = F(p, c, d, s, f[T + 4], 11, 1272893353), s = F(s, p, c, d, f[T + 7], 16, -155497632), d = F(d, s, p, c, f[T + 10], 23, -1094730640), c = F(c, d, s, p, f[T + 13], 4, 681279174), p = F(p, c, d, s, f[T + 0], 11, -358537222), s = F(s, p, c, d, f[T + 3], 16, -722521979), d = F(d, s, p, c, f[T + 6], 23, 76029189), c = F(c, d, s, p, f[T + 9], 4, -640364487), p = F(p, c, d, s, f[T + 12], 11, -421815835), s = F(s, p, c, d, f[T + 15], 16, 530742520), c = A(c, d = F(d, s, p, c, f[T + 2], 23, -995338651), s, p, f[T + 0], 6, -198630844), p = A(p, c, d, s, f[T + 7], 10, 1126891415), s = A(s, p, c, d, f[T + 14], 15, -1416354905), d = A(d, s, p, c, f[T + 5], 21, -57434055), c = A(c, d, s, p, f[T + 12], 6, 1700485571), p = A(p, c, d, s, f[T + 3], 10, -1894986606), s = A(s, p, c, d, f[T + 10], 15, -1051523), d = A(d, s, p, c, f[T + 1], 21, -2054922799), c = A(c, d, s, p, f[T + 8], 6, 1873313359), p = A(p, c, d, s, f[T + 15], 10, -30611744), s = A(s, p, c, d, f[T + 6], 15, -1560198380), d = A(d, s, p, c, f[T + 13], 21, 1309151649), c = A(c, d, s, p, f[T + 4], 6, -145523070), p = A(p, c, d, s, f[T + 11], 10, -1120210379), s = A(s, p, c, d, f[T + 2], 15, 718787259), d = A(d, s, p, c, f[T + 9], 21, -343485551), c = L(c, R), d = L(d, I), s = L(s, B), p = L(p, _);
          }
          return Array(c, d, s, p);
        }
        function S(f, g, c, d, s, p) {
          return L((g = L(L(g, f), L(d, p))) << s | g >>> 32 - s, c);
        }
        function V(f, g, c, d, s, p, T) {
          return S(g & c | ~g & d, f, g, s, p, T);
        }
        function P(f, g, c, d, s, p, T) {
          return S(g & d | c & ~d, f, g, s, p, T);
        }
        function F(f, g, c, d, s, p, T) {
          return S(g ^ c ^ d, f, g, s, p, T);
        }
        function A(f, g, c, d, s, p, T) {
          return S(c ^ (g | ~d), f, g, s, p, T);
        }
        function L(f, g) {
          var c = (65535 & f) + (65535 & g);
          return (f >> 16) + (g >> 16) + (c >> 16) << 16 | 65535 & c;
        }
        o.exports = function(f) {
          return y.hash(f, C, 16);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(r, o, a) {
      (function(n, l, h, N, G, b, v, z, O) {
        o.exports = function(y) {
          for (var C, S = new Array(y), V = 0; V < y; V++)
            !(3 & V) && (C = 4294967296 * Math.random()), S[V] = C >>> ((3 & V) << 3) & 255;
          return S;
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 8: [function(r, o, a) {
      (function(n, l, h, N, G, b, v, z, O) {
        var y = r("./helpers");
        function C(P, F) {
          P[F >> 5] |= 128 << 24 - F % 32, P[15 + (F + 64 >> 9 << 4)] = F;
          for (var A, L, f, g = Array(80), c = 1732584193, d = -271733879, s = -1732584194, p = 271733878, T = -1009589776, R = 0; R < P.length; R += 16) {
            for (var I = c, B = d, _ = s, K = p, X = T, Y = 0; Y < 80; Y++) {
              g[Y] = Y < 16 ? P[R + Y] : V(g[Y - 3] ^ g[Y - 8] ^ g[Y - 14] ^ g[Y - 16], 1);
              var H = S(S(V(c, 5), (H = d, L = s, f = p, (A = Y) < 20 ? H & L | ~H & f : !(A < 40) && A < 60 ? H & L | H & f | L & f : H ^ L ^ f)), S(S(T, g[Y]), (A = Y) < 20 ? 1518500249 : A < 40 ? 1859775393 : A < 60 ? -1894007588 : -899497514)), T = p, p = s, s = V(d, 30), d = c, c = H;
            }
            c = S(c, I), d = S(d, B), s = S(s, _), p = S(p, K), T = S(T, X);
          }
          return Array(c, d, s, p, T);
        }
        function S(P, F) {
          var A = (65535 & P) + (65535 & F);
          return (P >> 16) + (F >> 16) + (A >> 16) << 16 | 65535 & A;
        }
        function V(P, F) {
          return P << F | P >>> 32 - F;
        }
        o.exports = function(P) {
          return y.hash(P, C, 20, !0);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(r, o, a) {
      (function(n, l, h, N, G, b, v, z, O) {
        function y(F, A) {
          var L = (65535 & F) + (65535 & A);
          return (F >> 16) + (A >> 16) + (L >> 16) << 16 | 65535 & L;
        }
        function C(F, A) {
          var L, f = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), g = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), c = new Array(64);
          F[A >> 5] |= 128 << 24 - A % 32, F[15 + (A + 64 >> 9 << 4)] = A;
          for (var d, s, p = 0; p < F.length; p += 16) {
            for (var T = g[0], R = g[1], I = g[2], B = g[3], _ = g[4], K = g[5], X = g[6], Y = g[7], H = 0; H < 64; H++)
              c[H] = H < 16 ? F[H + p] : y(y(y((s = c[H - 2], V(s, 17) ^ V(s, 19) ^ P(s, 10)), c[H - 7]), (s = c[H - 15], V(s, 7) ^ V(s, 18) ^ P(s, 3))), c[H - 16]), L = y(y(y(y(Y, V(s = _, 6) ^ V(s, 11) ^ V(s, 25)), _ & K ^ ~_ & X), f[H]), c[H]), d = y(V(d = T, 2) ^ V(d, 13) ^ V(d, 22), T & R ^ T & I ^ R & I), Y = X, X = K, K = _, _ = y(B, L), B = I, I = R, R = T, T = y(L, d);
            g[0] = y(T, g[0]), g[1] = y(R, g[1]), g[2] = y(I, g[2]), g[3] = y(B, g[3]), g[4] = y(_, g[4]), g[5] = y(K, g[5]), g[6] = y(X, g[6]), g[7] = y(Y, g[7]);
          }
          return g;
        }
        var S = r("./helpers"), V = function(F, A) {
          return F >>> A | F << 32 - A;
        }, P = function(F, A) {
          return F >>> A;
        };
        o.exports = function(F) {
          return S.hash(F, C, 32, !0);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(r, o, a) {
      (function(n, l, h, N, G, b, v, z, O) {
        a.read = function(y, C, S, V, p) {
          var F, A, L = 8 * p - V - 1, f = (1 << L) - 1, g = f >> 1, c = -7, d = S ? p - 1 : 0, s = S ? -1 : 1, p = y[C + d];
          for (d += s, F = p & (1 << -c) - 1, p >>= -c, c += L; 0 < c; F = 256 * F + y[C + d], d += s, c -= 8)
            ;
          for (A = F & (1 << -c) - 1, F >>= -c, c += V; 0 < c; A = 256 * A + y[C + d], d += s, c -= 8)
            ;
          if (F === 0)
            F = 1 - g;
          else {
            if (F === f)
              return A ? NaN : 1 / 0 * (p ? -1 : 1);
            A += Math.pow(2, V), F -= g;
          }
          return (p ? -1 : 1) * A * Math.pow(2, F - V);
        }, a.write = function(y, C, S, V, P, T) {
          var A, L, f = 8 * T - P - 1, g = (1 << f) - 1, c = g >> 1, d = P === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, s = V ? 0 : T - 1, p = V ? 1 : -1, T = C < 0 || C === 0 && 1 / C < 0 ? 1 : 0;
          for (C = Math.abs(C), isNaN(C) || C === 1 / 0 ? (L = isNaN(C) ? 1 : 0, A = g) : (A = Math.floor(Math.log(C) / Math.LN2), C * (V = Math.pow(2, -A)) < 1 && (A--, V *= 2), 2 <= (C += 1 <= A + c ? d / V : d * Math.pow(2, 1 - c)) * V && (A++, V /= 2), g <= A + c ? (L = 0, A = g) : 1 <= A + c ? (L = (C * V - 1) * Math.pow(2, P), A += c) : (L = C * Math.pow(2, c - 1) * Math.pow(2, P), A = 0)); 8 <= P; y[S + s] = 255 & L, s += p, L /= 256, P -= 8)
            ;
          for (A = A << P | L, f += P; 0 < f; y[S + s] = 255 & A, s += p, A /= 256, f -= 8)
            ;
          y[S + s - p] |= 128 * T;
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
    }, { buffer: 3, lYpoI2: 11 }], 11: [function(r, o, a) {
      (function(n, l, h, N, G, b, v, z, O) {
        var y, C, S;
        function V() {
        }
        (n = o.exports = {}).nextTick = (C = typeof window < "u" && window.setImmediate, S = typeof window < "u" && window.postMessage && window.addEventListener, C ? function(P) {
          return window.setImmediate(P);
        } : S ? (y = [], window.addEventListener("message", function(P) {
          var F = P.source;
          F !== window && F !== null || P.data !== "process-tick" || (P.stopPropagation(), 0 < y.length && y.shift()());
        }, !0), function(P) {
          y.push(P), window.postMessage("process-tick", "*");
        }) : function(P) {
          setTimeout(P, 0);
        }), n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.on = V, n.addListener = V, n.once = V, n.off = V, n.removeListener = V, n.removeAllListeners = V, n.emit = V, n.binding = function(P) {
          throw new Error("process.binding is not supported");
        }, n.cwd = function() {
          return "/";
        }, n.chdir = function(P) {
          throw new Error("process.chdir is not supported");
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
    }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
  });
})(Us);
function ut(e) {
  let t = new Uint8Array(0);
  for (let r = 0; r < e.length; r++) {
    let o = new Uint8Array(e[r]), a = new Uint8Array(t.length + o.length);
    a.set(t, 0), a.set(o, t.length), t = a;
  }
  return t.buffer;
}
function dt(e) {
  return new Promise((t) => {
    const r = new AudioContext(), o = r.createBufferSource();
    r.decodeAudioData(e, (a) => {
      o.buffer = a, o.connect(r.destination), t(a);
    });
  });
}
function ht(e, t = {}) {
  const r = t.outputRate || 24e3, o = t.bitDepth || 16, a = t.numChannels || e.numberOfChannels, n = e.sampleRate / r >> 0, l = a === 2 ? Sr(n, e.getChannelData(0), e.getChannelData(1)) : Sr(n, e.getChannelData(0));
  return Ds(l, r, o, a);
}
function Sr(e, t, r) {
  const o = r ? (t.length + r.length) / e >> 0 : t.length / e >> 0, a = new Float32Array(o);
  let n = 0, l = 0;
  for (; n < o; )
    a[n++] = t[l], r && (a[n++] = r[l]), l += e;
  return a;
}
function Ds(e, t, r, o) {
  const a = r / 8, n = o * a, l = e.length * a, h = new ArrayBuffer(44 + l), N = new DataView(h);
  return Ue(N, 0, "RIFF"), N.setUint32(
    4,
    /*32*/
    36 + l,
    !0
  ), Ue(N, 8, "WAVE"), Ue(N, 12, "fmt "), N.setUint32(16, 16, !0), N.setUint16(20, 1, !0), N.setUint16(22, o, !0), N.setUint32(24, t, !0), N.setUint32(28, t * n, !0), N.setUint16(32, n, !0), N.setUint16(34, r, !0), Ue(N, 36, "data"), N.setUint32(40, l, !0), r === 8 ? Hs(N, 44, e) : r === 16 ? js(N, 44, e) : Ks(N, 44, e), h;
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
var So = /* @__PURE__ */ ((e) => (e["晓晓 - 新闻、小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoxiaoNeural)", e["晓伊 - 卡通、小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoyiNeural)", e["云健 - 运动、小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunjianNeural)", e["云希 - 小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiNeural)", e["云夏 - 卡通、小说"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiaNeural)", e["云扬 - 新闻"] = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunyangNeural)", e["辽林 - 方言小贝"] = "Microsoft Server Speech Text to Speech Voice (zh-CN-liaoning, XiaobeiNeural)", e["陕西 - 方言小倪"] = "Microsoft Server Speech Text to Speech Voice (zh-CN-shaanxi, XiaoniNeural)", e.晓晓 = "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoxiaoNeural)", e.晓伊 = "Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoyiNeural)", e.云健 = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunjianNeural)", e.云希 = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiNeural)", e.云夏 = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiaNeural)", e.云扬 = "Microsoft Server Speech Text to Speech Voice (zh-CN, YunyangNeural)", e.辽林 = "Microsoft Server Speech Text to Speech Voice (zh-CN-liaoning, XiaobeiNeural)", e.陕西 = "Microsoft Server Speech Text to Speech Voice (zh-CN-shaanxi, XiaoniNeural)", e))(So || {});
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
  name: So.云希,
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
  getBufferDuration(t) {
    return new Promise((r) => {
      new AudioContext().decodeAudioData(t, (a) => {
        r(a.duration);
      });
    });
  }
  /**
   * 替换字符串中的变量 {var}
   * @param text 字符串
   * @param data 替换变量的对象
   * @param regexp 自定义正则匹配变量 默认 `/\{([a-zA-Z0-9]+)\}/g => {var}`
   */
  textVarReplace(t, r = {}, o = /\{([a-zA-Z0-9]+)\}/g) {
    return t.replace(o, (a, n) => Ii(r, n, n));
  }
  /**
   * 合并多个 arrayBuffers 对象
   * @param arrayBuffers
   * @returns 合并后的单独arrayBuffers对象
   */
  mergeArrayBuffers(t) {
    const r = t.reduce((l, h) => l + h.byteLength, 0), o = new ArrayBuffer(r), a = new Uint8Array(o);
    let n = 0;
    return t.forEach((l) => {
      const h = new Uint8Array(l);
      a.set(h, n), n += l.byteLength;
    }), o;
  }
  mergeAudioBuffers(t) {
    let r = t.map((o) => new AudioContext().decodeAudioData(o));
    return Promise.all(r).then((o) => {
      let a = new AudioContext(), n = o.reduce((G, b) => G + b.length, 0), l = a.createBuffer(1, n, o[0].sampleRate), h = l.getChannelData(0), N = 0;
      return o.forEach((G) => {
        h.set(G.getChannelData(0), N), N += G.length;
      }), l;
    });
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
  timeStringToMilliseconds(t) {
    const r = /^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/, o = t.match(r);
    if (!o)
      throw new Error('时间字符串格式错误，正确格式应为 "hh:mm:ss,sss"');
    const a = parseInt(o[1], 10), n = parseInt(o[2], 10), l = parseInt(o[3], 10), h = parseInt(o[4], 10);
    return (a * 3600 + n * 60 + l) * 1e3 + h;
  }
  /** 将Edge输出的时间转为 hh:mm:ss,sss */
  convertNumberToTime(t) {
    const r = t / 1e7, o = Math.floor(r / 3600), a = Math.floor(r % 3600 / 60), n = Math.floor(r % 60), l = Math.floor((r - Math.floor(r)) * 1e3);
    return (o < 10 ? "0" + o : o) + ":" + (a < 10 ? "0" + a : a) + ":" + (n < 10 ? "0" + n : n) + "," + (l < 10 ? "00" + l : l < 100 ? "0" + l : l);
  }
}
class Xs {
  constructor() {
    ce(this, "voiceMap");
    ce(this, "utils", new Ws());
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
    return o.reduce((l, h) => ((a + h).length < r ? a += h : (l.push(a), a = h), h === o[o.length - 1] && l.push(a), l), []);
  }
  /** 获取朗读角色详细列表 */
  async getVoiceList(t = !0) {
    return t ? this.voiceMap : Bs(
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
    }), { timeout: a, roleVoice: n, onMessage: l } = o, h = this.textToSsml(t, n);
    return new Promise((N) => {
      let G;
      const b = [], v = "6A5AA1D4EAFF4E9FB37E23D68491D6F4", z = this.utils.getUuid(), y = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?${new URLSearchParams({ TrustedClientToken: v, ConnectionId: z }).toString()}`, C = new WebSocket(y);
      C.binaryType = "arraybuffer";
      const V = JSON.stringify({
        context: {
          synthesis: {
            audio: {
              metadataoptions: { sentenceBoundaryEnabled: "false", wordBoundaryEnabled: "true" },
              outputFormat: "webm-24khz-16bit-mono-opus"
            }
          }
        }
      }), P = `X-Timestamp:${/* @__PURE__ */ new Date()}\r
Content-Type:application/json; charset=utf-8\r
Path:speech.config\r
\r
${V}`, F = `X-RequestId:${this.utils.getUuid()}\r
Content-Type:application/ssml+xml\r
X-Timestamp:${/* @__PURE__ */ new Date()}\r
Path:ssml\r
\r
${h}`, A = () => {
        C && C.readyState == 1 && (C.send(new ArrayBuffer(0)), C.close(), N({ error: new Error("意外停止"), data: null }));
      }, L = () => {
        G && clearTimeout(G), G = setTimeout(() => A(), a);
      };
      C.onopen = () => {
        C.send(P), C.send(F), L();
      }, C.onerror = (g) => N({ error: g, data: null }), C.onclose = (g) => N({ error: g, data: null });
      let f = 0;
      C.onmessage = (g) => {
        if (L(), g.data instanceof ArrayBuffer) {
          const s = new DataView(g.data), p = s.getInt16(0);
          if (g.data.byteLength < p + 2)
            throw new Error("Invalid binary message format. Header content missing.");
          for (var c = "", d = 0; d < p; d++)
            c += String.fromCharCode(s.getInt8(d + 2));
          g.data.byteLength > p + 2 && b.push(g.data.slice(2 + p));
        } else if (g.data.indexOf("turn.end") !== -1)
          dt(ut(b)).then((s) => {
            const p = ht(s);
            N({ error: !1, data: { buffers: p, array_buffers: b, audio: new pr(p) } });
          }), l(null);
        else {
          const s = JSON.parse(g.data.split(`\r
\r
`)[1]);
          if (s != null && s.Metadata && s.Metadata[0].Type === "WordBoundary") {
            const {
              Duration: p,
              Offset: T,
              text: { Text: R }
            } = s.Metadata[0].Data;
            f++, l({ index: f, text: R, offset: T, duration: p, time: T + p, ssml: h });
          }
        }
      };
    });
  }
  /** 批量操作SSML */
  async batchSsml(t) {
    const r = { text: "", start: -1, end: -1, index: 0 }, o = Array.from({ length: t.length }, () => []), a = (l) => {
      let h = 0, N = { ...r };
      return (G) => {
        if (!G) {
          o[l].push(N);
          return;
        }
        const { text: b, offset: v, time: z, index: O, ssml: y } = G;
        N.start === -1 && (N.start = v), N.end = h, h !== 0 && v - h > 1e6 ? (N.text.trim() || (N.text = b), o[l].push(N), N = {
          ...r,
          text: b,
          start: v,
          index: N.index + 1
        }) : N.text = N.text + b, h = z;
      };
    }, n = async (l) => {
      if (console.log("srt_list", o), o.length === 0)
        return { srt: [], srt_text: "" };
      const h = [];
      let N = null, G = 0, b = -1;
      for (let O = 0; O < o.length; O++) {
        const y = o[O];
        for (let C = 0; C < y.length; C++) {
          const S = y[C];
          if (b++, O === 0) {
            h.push({ ...S, start: S.start, end: S.end, index: b });
            continue;
          }
          if (O > 0 && C === 0) {
            N = h[h.length - 1];
            const A = ut(l[O - 1]), L = await dt(A).then((s) => ht(s)), f = await this.utils.getBufferDuration(L), g = Math.ceil(f * 10 * 1e3 * 1e3), c = o[O - 1][o[O - 1].length - 1], d = g - c.end;
            G = N.end + Math.max(d, 0);
          }
          const V = S.end - S.start, P = G + S.start, F = G + S.start + V;
          h.push({ ...S, start: P, end: F, index: b });
        }
      }
      const v = h.map((O, y) => {
        const C = this.utils.convertNumberToTime(O.start);
        let S = O.end + 0.6 * 1e3 * 1e3 * 10;
        y < h.length - 1 && (S = Math.min(S, h[y + 1].start));
        const V = this.utils.convertNumberToTime(S);
        return { ...O, start: C, end: V };
      }), z = v.map((O) => `${O.index}
${O.start} --> ${O.end}
${O.text}`).join(`

`);
      return { srt: v, srt_text: z };
    };
    return Promise.all(t.map((l, h) => this.core(l, { onMessage: a(h) }))).then(async (l) => {
      const h = l.map((z) => {
        var O;
        return (O = z.data) == null ? void 0 : O.array_buffers;
      }), { srt: N, srt_text: G } = await n(h), b = await dt(ut(h.flat(1))).then((z) => ht(z)), v = this.utils.arrayBufferToBlob([b]);
      return { buffers: b, blob: v, srt: N, srt_text: G, array_buffers: h, audio: new pr(b) };
    });
  }
  /**
   * SSML进行多次配音，要求符合SSML规则 speak.voice[10].prosody.朗读内容， voice可为多个，每个voice中只能出现一个prosody，不允许出现其他的节点
   * @param textOrSsml
   * @param _option
   */
  speak(t, r = {}) {
    var b;
    const o = ge(r, {
      roleVoice: ve
    }), { roleVoice: a } = o, n = this.textToSsml(t, a), h = new DOMParser().parseFromString(n, "text/xml"), N = [];
    return Array.from(((b = h.querySelector("speak")) == null ? void 0 : b.childNodes) || []).forEach((v) => {
      var C;
      const z = ((C = v.textContent) == null ? void 0 : C.trim()) || "";
      if (!z.trim())
        return;
      const O = v.querySelector("prosody"), y = ge(
        { name: v.getAttribute("name"), rate: O == null ? void 0 : O.getAttribute("rate"), content: z },
        a
      );
      N.push(y);
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
    let l = 0, h = 0, N = !1, G = "", b, v, z, O;
    const y = this.textSplit(t, 50), C = [...y], S = async () => new Promise((A) => {
      let L;
      const f = () => {
        L = setTimeout(() => {
          N ? f() : (clearTimeout(L), A(!0));
        }, 100);
      };
      f();
    }), V = () => {
      v.stop(), z && clearTimeout(z), O && clearTimeout(O);
    }, P = async () => {
      if (N && await S(), b.byteLength === 0)
        return;
      const A = new AudioContext(), L = A.createGain(), f = A.createBufferSource();
      f.connect(L), L.gain.value = 0.5, L.connect(A.destination);
      const g = () => a.rate < 1 ? (1 + a.rate) * -0.5 : a.rate === 1 ? -0.5 : (a.rate - 1) * -0.5;
      A.decodeAudioData(b, (c) => {
        n({ audioContext: A, audioSource: f, buffer: c, text: G, start_index: l, end_index: h, onStop: V }), l = h, v = f, f.buffer = c, f.start(), z = setTimeout(() => F(), (c.duration - 5) * 1e3), O = setTimeout(() => P(), (c.duration + g()) * 1e3);
      });
    }, F = async (A = 3) => {
      if (y.length === 0)
        return;
      N = !0, G = y.shift(), h += G.length;
      const { error: L, data: f } = await this.core(G, { roleVoice: a });
      if (N = !1, L)
        return A > 1 ? await F(A - 1) : void 0;
      b = f.buffers;
    };
    return F().then((A) => {
      P();
    }), { onStop: V, text_list: C };
  }
}
class pr {
  constructor(t) {
    ce(this, "audioContext");
    ce(this, "audioSource");
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
const { defineComponent: Qs } = __Context.vue, { toDisplayString: ye, createElementVNode: me, resolveComponent: we, withCtx: ae, createVNode: ie, createTextVNode: Nr, renderList: gr, Fragment: yr, openBlock: Ce, createElementBlock: Te, vShow: el, withDirectives: tl, createCommentVNode: rl, normalizeClass: ol } = __Context.vue, al = { class: "w-full m-auto h-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p2 scrollbar-y" }, il = { class: "flex-auto min-h-[500px] md:flex-1 wh-full rounded-md" }, nl = { class: "font-mono font-bold absolute bottom-0 right-5 text-gray-400 truncate" }, sl = { class: "w-full md:w80 h-full overflow-visible md:overflow-hidden" }, ll = { class: "text-xs font-mono text-gray-500" }, cl = { class: "pb1 select-text" }, ul = { class: "w-full md:w80 h-full" }, dl = { key: 0 }, hl = /* @__PURE__ */ me("div", { class: "text-gray-500" }, "空", -1), ml = [
  hl
], fl = ["onClick"], { ref: De, computed: Sl, shallowRef: pl, triggerRef: Nl } = __Context.vue, gl = /* @__PURE__ */ Qs({
  __name: "Page",
  setup(e) {
    const t = new Xs(), r = De(""), o = Sl(() => {
      const C = r.value;
      return C.length > 10 ? C.slice(0, 10) : C;
    }), a = De(1e5), n = De(null), l = pl([]), h = [];
    let N = null;
    const G = () => {
      try {
        h.forEach((C) => C()), h.splice(0, h.length);
      } catch {
      }
    }, b = (C) => {
      G(), console.log("gAudio", N), N = C, N.play(), h.push(() => N && !N.closed && N.stop());
    }, v = De({ show: !0, name: ve.name, volume: 100, rate: 1 }), z = [
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
          onClick(C, S) {
            S.customAttrs.value.loading = !0, r.value = r.value.trim();
            const P = { ...v.value, text: r.value, textName: o.value }, F = JSON.stringify(P), A = l.value.findIndex((g) => g.key === F), L = r.value || "请输入需要转语言的文本...", f = t.textSplit(L, 2e3).map((g) => ({ ...v.value, content: g }));
            t.speakArray(f).then((g) => {
              console.log("res", g), b(g.audio), l.value.push({ key: F, output: g, input: P }), n.value = l.value[l.value.length - 1], Nl(l);
            }).catch((g) => {
              throw g;
            }).finally(() => {
              S.customAttrs.value.loading = !1;
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
          onClick(C, S) {
            n.value && rr(n.value.output.blob, `${n.value.input.textName}.wav`);
          }
        },
        value: ""
      },
      {
        block: !1,
        label: "长音频",
        name: "_btn2",
        type: "button",
        typeConfig: {
          __text: "朗读",
          style: "min-width: 90px",
          type: "primary",
          onClick(C, S) {
            G(), S.customAttrs.value.loading = !0, r.value = r.value.trim();
            const V = r.value || "请输入需要转语言的文本...";
            t.speakLongText(V, { roleVoice: v.value }).then((P) => {
              console.log(P.text_list), h.push(P.onStop), S.customAttrs.value.loading = !1;
            });
          }
        },
        value: ""
      },
      {
        block: !1,
        label: "",
        name: "_btn2",
        type: "button",
        typeConfig: {
          __text: "终止播放",
          style: "min-width: 90px",
          type: "error",
          onClick(C, S) {
            G();
          }
        },
        value: ""
      }
    ], O = () => {
      n.value && rr(new Blob([n.value.output.srt_text], { type: "text/plain" }), `${n.value.input.textName}.srt`);
    }, y = (C) => {
      n.value = C, ["name", "volume", "rate"].forEach((S) => dn(v.value, S, C.input[S])), r.value = C.input.text ?? "";
    };
    return (C, S) => {
      var f, g;
      const V = we("n-input"), P = we("n-button"), F = we("n-scrollbar"), A = we("n-card"), L = we("i-setting");
      return Ce(), Te("div", al, [
        me("div", il, [
          ie(V, {
            round: "",
            class: "h-full resize-none",
            "show-count": "",
            type: "textarea",
            "default-value": "",
            value: r.value,
            "onUpdate:value": S[0] || (S[0] = (c) => r.value = c),
            maxlength: a.value,
            placeholder: "请输入需要转语言的文本..."
          }, {
            count: ae(({ value: c }) => [
              me("span", nl, ye(c.length) + " / " + ye(a.value), 1)
            ]),
            _: 1
          }, 8, ["value", "maxlength"])
        ]),
        tl(me("div", sl, [
          ie(A, {
            class: "flex flex-col flex-1 wh-full overflow-hidden",
            title: "字幕",
            "content-class": "flex-1 h-full pb2 overflow-hidden"
          }, {
            "header-extra": ae(() => [
              ie(P, { onClick: O }, {
                default: ae(() => [
                  Nr("下载字幕")
                ]),
                _: 1
              })
            ]),
            default: ae(() => [
              ie(F, { class: "h-full" }, {
                default: ae(() => {
                  var c;
                  return [
                    (Ce(!0), Te(yr, null, gr((c = n.value) == null ? void 0 : c.output.srt, (d) => (Ce(), Te("div", {
                      key: d.index
                    }, [
                      me("div", ll, ye(d.start) + " -> " + ye(d.end), 1),
                      me("div", cl, ye(d.text), 1)
                    ]))), 128))
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          })
        ], 512), [
          [el, n.value && ((g = (f = n.value) == null ? void 0 : f.output) == null ? void 0 : g.srt.length) > 0 && v.value.show]
        ]),
        me("div", ul, [
          ie(F, { class: "h-full" }, {
            default: ae(() => [
              ie(A, {
                class: "",
                title: "版本"
              }, {
                "header-extra": ae(() => [
                  Nr(" 1.0.1 ")
                ]),
                _: 1
              }),
              ie(A, {
                class: "",
                title: "操作"
              }, {
                default: ae(() => [
                  ie(L, {
                    settings: z,
                    modelValue: v.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (c) => v.value = c)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              ie(A, {
                class: "flex flex-col mt-2 min-h10 overflow-hidden",
                title: "历史",
                "content-class": "flex-1 h-full pb2 overflow-hidden"
              }, {
                default: ae(() => [
                  ie(F, { class: "h-full" }, {
                    default: ae(() => [
                      l.value.length === 0 ? (Ce(), Te("div", dl, ml)) : rl("", !0),
                      (Ce(!0), Te(yr, null, gr(l.value, (c) => {
                        var d;
                        return Ce(), Te("div", {
                          key: c.input
                        }, [
                          me("div", {
                            class: ol(["hover:underline", [((d = n.value) == null ? void 0 : d.key) === c.key ? "text-blue-400 hover:text-blue-500" : "text-gray-500 hover:text-gray-700"]]),
                            onClick: (s) => y(c)
                          }, ye(c.input.textName), 11, fl)
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
class yl {
  constructor() {
    ce(this, "icon", "");
    ce(this, "name", "tts");
    ce(this, "description", "文本转语音");
    ce(this, "isUninstallReload", !1);
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
      component: gl
    };
    t.usePage(r);
  }
  uninstall() {
    console.log("uninstall");
  }
}
const Tl = new yl();
export {
  Tl as default
};
