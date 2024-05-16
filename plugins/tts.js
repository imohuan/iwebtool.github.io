export const css = ".wh-full{width:100%;height:100%}.m-auto{margin:auto}.bottom-0{bottom:0}.right-5{right:5px}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}@media (min-width: 768px){.md\\:overflow-hidden{overflow:hidden}}.absolute{position:absolute}.mt-2{margin-top:.5rem}.block{display:block}.h-full{height:100%}.min-h-\\[500px\\]{min-height:500px}.min-h10{min-height:2.5rem}.w-full{width:100%}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-col{flex-direction:column}.select-text{-webkit-user-select:text;user-select:text}.resize-none{resize:none}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(.5rem * var(--un-space-y-reverse))}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded-md{border-radius:.375rem}.p2{padding:.5rem}.pb1{padding-bottom:.25rem}.pb2{padding-bottom:.5rem}.text-xs{font-size:.75rem;line-height:1rem}.text-blue-400{--un-text-opacity:1;color:rgb(96 165 250 / var(--un-text-opacity))}.text-gray-300{--un-text-opacity:1;color:rgb(209 213 219 / var(--un-text-opacity))}.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity))}.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity))}.hover\\:text-blue-500:hover{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity))}.hover\\:text-gray-700:hover{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity))}.font-bold{font-weight:700}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.hover\\:underline:hover{text-decoration-line:underline}@media (min-width: 768px){.md\\:w80{width:20rem}.md\\:flex-1{flex:1 1 0%}.md\\:flex-row\\!{flex-direction:row!important}.md\\:space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(.5rem * var(--un-space-x-reverse))}.md\\:space-y-0\\!>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--un-space-y-reverse)))!important;margin-bottom:calc(0px * var(--un-space-y-reverse))!important}}\n\n";
var po = Object.defineProperty;
var No = (e, t, r) => t in e ? po(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var le = (e, t, r) => (No(e, typeof t != "symbol" ? t + "" : t, r), r);
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
var Go = "[object Null]", Vo = "[object Undefined]", Dt = be ? be.toStringTag : void 0;
function _e(e) {
  return e == null ? e === void 0 ? Vo : Go : Dt && Dt in Object(e) ? To(e) : Mo(e);
}
function Ae(e) {
  return e != null && typeof e == "object";
}
var Ao = "[object Symbol]";
function vt(e) {
  return typeof e == "symbol" || Ae(e) && _e(e) == Ao;
}
function Fo(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, a = Array(o); ++r < o; )
    a[r] = t(e[r], r, e);
  return a;
}
var Me = Array.isArray, Po = 1 / 0, Ht = be ? be.prototype : void 0, jt = Ht ? Ht.toString : void 0;
function vr(e) {
  if (typeof e == "string")
    return e;
  if (Me(e))
    return Fo(e, vr) + "";
  if (vt(e))
    return jt ? jt.call(e) : "";
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
function bt(e) {
  if (!oe(e))
    return !1;
  var t = _e(e);
  return t == xo || t == wo || t == ko || t == Eo;
}
var lt = Ve["__core-js_shared__"], Kt = function() {
  var e = /[^.]+$/.exec(lt && lt.keys && lt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Lo(e) {
  return !!Kt && Kt in e;
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
  var t = bt(e) ? jo : Ro;
  return t.test(zo(e));
}
function Yo(e, t) {
  return e == null ? void 0 : e[t];
}
function Mt(e, t) {
  var r = Yo(e, t);
  return Ko(r) ? r : void 0;
}
var Yt = Object.create, Jo = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!oe(t))
      return {};
    if (Yt)
      return Yt(t);
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
var qe = function() {
  try {
    var e = Mt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ea = qe ? function(e, t) {
  return qe(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Qo(t),
    writable: !0
  });
} : br;
const ta = ea;
var ra = Xo(ta), oa = 9007199254740991, aa = /^(?:0|[1-9]\d*)$/;
function Gt(e, t) {
  var r = typeof e;
  return t = t ?? oa, !!t && (r == "number" || r != "symbol" && aa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Vt(e, t, r) {
  t == "__proto__" && qe ? qe(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Xe(e, t) {
  return e === t || e !== e && t !== t;
}
var na = Object.prototype, ia = na.hasOwnProperty;
function Gr(e, t, r) {
  var o = e[t];
  (!(ia.call(e, t) && Xe(o, r)) || r === void 0 && !(t in e)) && Vt(e, t, r);
}
function sa(e, t, r, o) {
  var a = !r;
  r || (r = {});
  for (var i = -1, l = t.length; ++i < l; ) {
    var h = t[i], N = o ? o(r[h], e[h], h, r, e) : void 0;
    N === void 0 && (N = e[h]), a ? Vt(r, h, N) : Gr(r, h, N);
  }
  return r;
}
var Jt = Math.max;
function la(e, t, r) {
  return t = Jt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, a = -1, i = Jt(o.length - t, 0), l = Array(i); ++a < i; )
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
function At(e) {
  return e != null && Ar(e.length) && !bt(e);
}
function ua(e, t, r) {
  if (!oe(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? At(r) && Gt(t, r.length) : o == "string" && t in r) ? Xe(r[t], e) : !1;
}
function da(e) {
  return Vr(function(t, r) {
    var o = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, l = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, l && ua(r[0], r[1], l) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++o < a; ) {
      var h = r[o];
      h && e(t, h, o, i);
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
function $t(e) {
  return Ae(e) && _e(e) == fa;
}
var Pr = Object.prototype, Sa = Pr.hasOwnProperty, pa = Pr.propertyIsEnumerable, Na = $t(/* @__PURE__ */ function() {
  return arguments;
}()) ? $t : function(e) {
  return Ae(e) && Sa.call(e, "callee") && !pa.call(e, "callee");
};
const ft = Na;
function ga() {
  return !1;
}
var kr = typeof exports == "object" && exports && !exports.nodeType && exports, Zt = kr && typeof module == "object" && module && !module.nodeType && module, ya = Zt && Zt.exports === kr, qt = ya ? Ve.Buffer : void 0, Ca = qt ? qt.isBuffer : void 0, xr = Ca || ga, Ta = "[object Arguments]", va = "[object Array]", ba = "[object Boolean]", Ma = "[object Date]", Ga = "[object Error]", Va = "[object Function]", Aa = "[object Map]", Fa = "[object Number]", Pa = "[object Object]", ka = "[object RegExp]", xa = "[object Set]", wa = "[object String]", Ea = "[object WeakMap]", La = "[object ArrayBuffer]", Oa = "[object DataView]", _a = "[object Float32Array]", za = "[object Float64Array]", Ia = "[object Int8Array]", Ra = "[object Int16Array]", Ba = "[object Int32Array]", Ua = "[object Uint8Array]", Da = "[object Uint8ClampedArray]", Ha = "[object Uint16Array]", ja = "[object Uint32Array]", j = {};
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
var wr = typeof exports == "object" && exports && !exports.nodeType && exports, Ee = wr && typeof module == "object" && module && !module.nodeType && module, Ja = Ee && Ee.exports === wr, ct = Ja && Cr.process, Wt = function() {
  try {
    var e = Ee && Ee.require && Ee.require("util").types;
    return e || ct && ct.binding && ct.binding("util");
  } catch {
  }
}(), Xt = Wt && Wt.isTypedArray, Er = Xt ? Ya(Xt) : Ka, $a = Object.prototype, Za = $a.hasOwnProperty;
function qa(e, t) {
  var r = Me(e), o = !r && ft(e), a = !r && !o && xr(e), i = !r && !o && !a && Er(e), l = r || o || a || i, h = l ? ma(e.length, String) : [], N = h.length;
  for (var G in e)
    (t || Za.call(e, G)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (G == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (G == "offset" || G == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (G == "buffer" || G == "byteLength" || G == "byteOffset") || // Skip index properties.
    Gt(G, N))) && h.push(G);
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
var Qa = Object.prototype, en = Qa.hasOwnProperty;
function tn(e) {
  if (!oe(e))
    return Xa(e);
  var t = Fr(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !en.call(e, o)) || r.push(o);
  return r;
}
function Lr(e) {
  return At(e) ? qa(e, !0) : tn(e);
}
var rn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, on = /^\w*$/;
function an(e, t) {
  if (Me(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || vt(e) ? !0 : on.test(e) || !rn.test(e) || t != null && e in Object(t);
}
var Le = Mt(Object, "create");
function nn() {
  this.__data__ = Le ? Le(null) : {}, this.size = 0;
}
function sn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ln = "__lodash_hash_undefined__", cn = Object.prototype, un = cn.hasOwnProperty;
function dn(e) {
  var t = this.__data__;
  if (Le) {
    var r = t[e];
    return r === ln ? void 0 : r;
  }
  return un.call(t, e) ? t[e] : void 0;
}
var hn = Object.prototype, mn = hn.hasOwnProperty;
function fn(e) {
  var t = this.__data__;
  return Le ? t[e] !== void 0 : mn.call(t, e);
}
var Sn = "__lodash_hash_undefined__";
function pn(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Le && t === void 0 ? Sn : t, this;
}
function pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
pe.prototype.clear = nn;
pe.prototype.delete = sn;
pe.prototype.get = dn;
pe.prototype.has = fn;
pe.prototype.set = pn;
function Nn() {
  this.__data__ = [], this.size = 0;
}
function Qe(e, t) {
  for (var r = e.length; r--; )
    if (Xe(e[r][0], t))
      return r;
  return -1;
}
var gn = Array.prototype, yn = gn.splice;
function Cn(e) {
  var t = this.__data__, r = Qe(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : yn.call(t, r, 1), --this.size, !0;
}
function Tn(e) {
  var t = this.__data__, r = Qe(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function vn(e) {
  return Qe(this.__data__, e) > -1;
}
function bn(e, t) {
  var r = this.__data__, o = Qe(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function he(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
he.prototype.clear = Nn;
he.prototype.delete = Cn;
he.prototype.get = Tn;
he.prototype.has = vn;
he.prototype.set = bn;
var Or = Mt(Ve, "Map");
function Mn() {
  this.size = 0, this.__data__ = {
    hash: new pe(),
    map: new (Or || he)(),
    string: new pe()
  };
}
function Gn(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function et(e, t) {
  var r = e.__data__;
  return Gn(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Vn(e) {
  var t = et(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function An(e) {
  return et(this, e).get(e);
}
function Fn(e) {
  return et(this, e).has(e);
}
function Pn(e, t) {
  var r = et(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
fe.prototype.clear = Mn;
fe.prototype.delete = Vn;
fe.prototype.get = An;
fe.prototype.has = Fn;
fe.prototype.set = Pn;
var kn = "Expected a function";
function Ft(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(kn);
  var r = function() {
    var o = arguments, a = t ? t.apply(this, o) : o[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var l = e.apply(this, o);
    return r.cache = i.set(a, l) || i, l;
  };
  return r.cache = new (Ft.Cache || fe)(), r;
}
Ft.Cache = fe;
var xn = 500;
function wn(e) {
  var t = Ft(e, function(o) {
    return r.size === xn && r.clear(), o;
  }), r = t.cache;
  return t;
}
var En = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ln = /\\(\\)?/g, On = wn(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(En, function(r, o, a, i) {
    t.push(a ? i.replace(Ln, "$1") : o || r);
  }), t;
});
function _n(e) {
  return e == null ? "" : vr(e);
}
function _r(e, t) {
  return Me(e) ? e : an(e, t) ? [e] : On(_n(e));
}
var zn = 1 / 0;
function zr(e) {
  if (typeof e == "string" || vt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -zn ? "-0" : t;
}
function In(e, t) {
  t = _r(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[zr(t[r++])];
  return r && r == o ? e : void 0;
}
function Rn(e, t, r) {
  var o = e == null ? void 0 : In(e, t);
  return o === void 0 ? r : o;
}
var Ir = Wa(Object.getPrototypeOf, Object), Bn = "[object Object]", Un = Function.prototype, Dn = Object.prototype, Rr = Un.toString, Hn = Dn.hasOwnProperty, jn = Rr.call(Object);
function Kn(e) {
  if (!Ae(e) || _e(e) != Bn)
    return !1;
  var t = Ir(e);
  if (t === null)
    return !0;
  var r = Hn.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Rr.call(r) == jn;
}
function Yn() {
  this.__data__ = new he(), this.size = 0;
}
function Jn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function $n(e) {
  return this.__data__.get(e);
}
function Zn(e) {
  return this.__data__.has(e);
}
var qn = 200;
function Wn(e, t) {
  var r = this.__data__;
  if (r instanceof he) {
    var o = r.__data__;
    if (!Or || o.length < qn - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new fe(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Fe(e) {
  var t = this.__data__ = new he(e);
  this.size = t.size;
}
Fe.prototype.clear = Yn;
Fe.prototype.delete = Jn;
Fe.prototype.get = $n;
Fe.prototype.has = Zn;
Fe.prototype.set = Wn;
var Br = typeof exports == "object" && exports && !exports.nodeType && exports, Qt = Br && typeof module == "object" && module && !module.nodeType && module, Xn = Qt && Qt.exports === Br, er = Xn ? Ve.Buffer : void 0, tr = er ? er.allocUnsafe : void 0;
function Qn(e, t) {
  if (t)
    return e.slice();
  var r = e.length, o = tr ? tr(r) : new e.constructor(r);
  return e.copy(o), o;
}
var rr = Ve.Uint8Array;
function ei(e) {
  var t = new e.constructor(e.byteLength);
  return new rr(t).set(new rr(e)), t;
}
function ti(e, t) {
  var r = t ? ei(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function ri(e) {
  return typeof e.constructor == "function" && !Fr(e) ? Jo(Ir(e)) : {};
}
function oi(e) {
  return function(t, r, o) {
    for (var a = -1, i = Object(t), l = o(t), h = l.length; h--; ) {
      var N = l[e ? h : ++a];
      if (r(i[N], N, i) === !1)
        break;
    }
    return t;
  };
}
var ai = oi();
function St(e, t, r) {
  (r !== void 0 && !Xe(e[t], r) || r === void 0 && !(t in e)) && Vt(e, t, r);
}
function ni(e) {
  return Ae(e) && At(e);
}
function pt(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function ii(e) {
  return sa(e, Lr(e));
}
function si(e, t, r, o, a, i, l) {
  var h = pt(e, r), N = pt(t, r), G = l.get(N);
  if (G) {
    St(e, r, G);
    return;
  }
  var b = i ? i(h, N, r + "", e, t, l) : void 0, T = b === void 0;
  if (T) {
    var O = Me(N), _ = !O && xr(N), g = !O && !_ && Er(N);
    b = N, O || _ || g ? Me(h) ? b = h : ni(h) ? b = $o(h) : _ ? (T = !1, b = Qn(N, !0)) : g ? (T = !1, b = ti(N, !0)) : b = [] : Kn(N) || ft(N) ? (b = h, ft(h) ? b = ii(h) : (!oe(h) || bt(h)) && (b = ri(N))) : T = !1;
  }
  T && (l.set(N, b), a(b, N, o, i, l), l.delete(N)), St(e, r, b);
}
function Pt(e, t, r, o, a) {
  e !== t && ai(t, function(i, l) {
    if (a || (a = new Fe()), oe(i))
      si(e, t, l, r, Pt, o, a);
    else {
      var h = o ? o(pt(e, l), i, l + "", e, t, a) : void 0;
      h === void 0 && (h = i), St(e, l, h);
    }
  }, Lr);
}
function Ur(e, t, r, o, a, i) {
  return oe(e) && oe(t) && (i.set(t, e), Pt(e, t, void 0, Ur, i), i.delete(t)), e;
}
var li = da(function(e, t, r, o) {
  Pt(e, t, r, o);
});
const ci = li;
var ye = Vr(function(e) {
  return e.push(void 0, Ur), Mr(ci, void 0, e);
});
function ui(e, t, r, o) {
  if (!oe(e))
    return e;
  t = _r(t, e);
  for (var a = -1, i = t.length, l = i - 1, h = e; h != null && ++a < i; ) {
    var N = zr(t[a]), G = r;
    if (N === "__proto__" || N === "constructor" || N === "prototype")
      return e;
    if (a != l) {
      var b = h[N];
      G = o ? o(b, N, h) : void 0, G === void 0 && (G = oe(b) ? b : Gt(t[a + 1]) ? [] : {});
    }
    Gr(h, N, G), h = h[N];
  }
  return e;
}
function di(e, t, r) {
  return e == null ? e : ui(e, t, r);
}
function or(e, t) {
  var r = document.createElement("a");
  r.href = window.URL.createObjectURL(e), r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
function Dr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: hi } = Object.prototype, { getPrototypeOf: kt } = Object, tt = /* @__PURE__ */ ((e) => (t) => {
  const r = hi.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ie = (e) => (e = e.toLowerCase(), (t) => tt(t) === e), rt = (e) => (t) => typeof t === e, { isArray: Pe } = Array, Oe = rt("undefined");
function mi(e) {
  return e !== null && !Oe(e) && e.constructor !== null && !Oe(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Hr = ie("ArrayBuffer");
function fi(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Hr(e.buffer), t;
}
const Si = rt("string"), te = rt("function"), jr = rt("number"), ot = (e) => e !== null && typeof e == "object", pi = (e) => e === !0 || e === !1, Ye = (e) => {
  if (tt(e) !== "object")
    return !1;
  const t = kt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ni = ie("Date"), gi = ie("File"), yi = ie("Blob"), Ci = ie("FileList"), Ti = (e) => ot(e) && te(e.pipe), vi = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || te(e.append) && ((t = tt(e)) === "formdata" || // detect form-data instance
  t === "object" && te(e.toString) && e.toString() === "[object FormData]"));
}, bi = ie("URLSearchParams"), Mi = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ze(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, a;
  if (typeof e != "object" && (e = [e]), Pe(e))
    for (o = 0, a = e.length; o < a; o++)
      t.call(null, e[o], o, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = i.length;
    let h;
    for (o = 0; o < l; o++)
      h = i[o], t.call(null, e[h], h, e);
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
function Nt() {
  const { caseless: e } = Jr(this) && this || {}, t = {}, r = (o, a) => {
    const i = e && Kr(t, a) || a;
    Ye(t[i]) && Ye(o) ? t[i] = Nt(t[i], o) : Ye(o) ? t[i] = Nt({}, o) : Pe(o) ? t[i] = o.slice() : t[i] = o;
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && ze(arguments[o], r);
  return t;
}
const Gi = (e, t, r, { allOwnKeys: o } = {}) => (ze(t, (a, i) => {
  r && te(a) ? e[i] = Dr(a, r) : e[i] = a;
}, { allOwnKeys: o }), e), Vi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ai = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Fi = (e, t, r, o) => {
  let a, i, l;
  const h = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
      l = a[i], (!o || o(l, e, t)) && !h[l] && (t[l] = e[l], h[l] = !0);
    e = r !== !1 && kt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Pi = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, ki = (e) => {
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
}, xi = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && kt(Uint8Array)), wi = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = o.next()) && !a.done; ) {
    const i = a.value;
    t.call(e, i[0], i[1]);
  }
}, Ei = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, Li = ie("HTMLFormElement"), Oi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, a) {
    return o.toUpperCase() + a;
  }
), ar = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), _i = ie("RegExp"), $r = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  ze(r, (a, i) => {
    let l;
    (l = t(a, i, e)) !== !1 && (o[i] = l || a);
  }), Object.defineProperties(e, o);
}, zi = (e) => {
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
}, Ii = (e, t) => {
  const r = {}, o = (a) => {
    a.forEach((i) => {
      r[i] = !0;
    });
  };
  return Pe(e) ? o(e) : o(String(e).split(t)), r;
}, Ri = () => {
}, Bi = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ut = "abcdefghijklmnopqrstuvwxyz", nr = "0123456789", Zr = {
  DIGIT: nr,
  ALPHA: ut,
  ALPHA_DIGIT: ut + ut.toUpperCase() + nr
}, Ui = (e = 16, t = Zr.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = t;
  for (; e--; )
    r += t[Math.random() * o | 0];
  return r;
};
function Di(e) {
  return !!(e && te(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Hi = (e) => {
  const t = new Array(10), r = (o, a) => {
    if (ot(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[a] = o;
        const i = Pe(o) ? [] : {};
        return ze(o, (l, h) => {
          const N = r(l, a + 1);
          !Oe(N) && (i[h] = N);
        }), t[a] = void 0, i;
      }
    }
    return o;
  };
  return r(e, 0);
}, ji = ie("AsyncFunction"), Ki = (e) => e && (ot(e) || te(e)) && te(e.then) && te(e.catch), V = {
  isArray: Pe,
  isArrayBuffer: Hr,
  isBuffer: mi,
  isFormData: vi,
  isArrayBufferView: fi,
  isString: Si,
  isNumber: jr,
  isBoolean: pi,
  isObject: ot,
  isPlainObject: Ye,
  isUndefined: Oe,
  isDate: Ni,
  isFile: gi,
  isBlob: yi,
  isRegExp: _i,
  isFunction: te,
  isStream: Ti,
  isURLSearchParams: bi,
  isTypedArray: xi,
  isFileList: Ci,
  forEach: ze,
  merge: Nt,
  extend: Gi,
  trim: Mi,
  stripBOM: Vi,
  inherits: Ai,
  toFlatObject: Fi,
  kindOf: tt,
  kindOfTest: ie,
  endsWith: Pi,
  toArray: ki,
  forEachEntry: wi,
  matchAll: Ei,
  isHTMLForm: Li,
  hasOwnProperty: ar,
  hasOwnProp: ar,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $r,
  freezeMethods: zi,
  toObjectSet: Ii,
  toCamelCase: Oi,
  noop: Ri,
  toFiniteNumber: Bi,
  findKey: Kr,
  global: Yr,
  isContextDefined: Jr,
  ALPHABET: Zr,
  generateString: Ui,
  isSpecCompliantForm: Di,
  toJSONObject: Hi,
  isAsyncFn: ji,
  isThenable: Ki
};
function D(e, t, r, o, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), a && (this.response = a);
}
V.inherits(D, Error, {
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
      config: V.toJSONObject(this.config),
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
D.from = (e, t, r, o, a, i) => {
  const l = Object.create(qr);
  return V.toFlatObject(e, l, function(N) {
    return N !== Error.prototype;
  }, (h) => h !== "isAxiosError"), D.call(l, e.message, t, r, o, a), l.cause = e, l.name = e.name, i && Object.assign(l, i), l;
};
const Yi = null;
function gt(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function Xr(e) {
  return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ir(e, t, r) {
  return e ? e.concat(t).map(function(a, i) {
    return a = Xr(a), !r && i ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function Ji(e) {
  return V.isArray(e) && !e.some(gt);
}
const $i = V.toFlatObject(V, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function at(e, t, r) {
  if (!V.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = V.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, S) {
    return !V.isUndefined(S[v]);
  });
  const o = r.metaTokens, a = r.visitor || b, i = r.dots, l = r.indexes, N = (r.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(t);
  if (!V.isFunction(a))
    throw new TypeError("visitor must be a function");
  function G(g) {
    if (g === null)
      return "";
    if (V.isDate(g))
      return g.toISOString();
    if (!N && V.isBlob(g))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(g) || V.isTypedArray(g) ? N && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function b(g, v, S) {
    let M = g;
    if (g && !S && typeof g == "object") {
      if (V.endsWith(v, "{}"))
        v = o ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (V.isArray(g) && Ji(g) || (V.isFileList(g) || V.endsWith(v, "[]")) && (M = V.toArray(g)))
        return v = Xr(v), M.forEach(function(F, A) {
          !(V.isUndefined(F) || F === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ir([v], A, i) : l === null ? v : v + "[]",
            G(F)
          );
        }), !1;
    }
    return gt(g) ? !0 : (t.append(ir(S, v, i), G(g)), !1);
  }
  const T = [], O = Object.assign($i, {
    defaultVisitor: b,
    convertValue: G,
    isVisitable: gt
  });
  function _(g, v) {
    if (!V.isUndefined(g)) {
      if (T.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      T.push(g), V.forEach(g, function(M, x) {
        (!(V.isUndefined(M) || M === null) && a.call(
          t,
          M,
          V.isString(x) ? x.trim() : x,
          v,
          O
        )) === !0 && _(M, v ? v.concat(x) : [x]);
      }), T.pop();
    }
  }
  if (!V.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function sr(e) {
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
function xt(e, t) {
  this._pairs = [], e && at(e, this, t);
}
const Qr = xt.prototype;
Qr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Qr.toString = function(t) {
  const r = t ? function(o) {
    return t.call(this, o, sr);
  } : sr;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function Zi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function eo(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || Zi, a = r && r.serialize;
  let i;
  if (a ? i = a(t, r) : i = V.isURLSearchParams(t) ? t.toString() : new xt(t, r).toString(o), i) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class lr {
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
    V.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const to = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qi = typeof URLSearchParams < "u" ? URLSearchParams : xt, Wi = typeof FormData < "u" ? FormData : null, Xi = typeof Blob < "u" ? Blob : null, Qi = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qi,
    FormData: Wi,
    Blob: Xi
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
  ...Qi
};
function os(e, t) {
  return at(e, new ne.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, a, i) {
      return ne.isNode && V.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function as(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ns(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const a = r.length;
  let i;
  for (o = 0; o < a; o++)
    i = r[o], t[i] = e[i];
  return t;
}
function oo(e) {
  function t(r, o, a, i) {
    let l = r[i++];
    if (l === "__proto__")
      return !0;
    const h = Number.isFinite(+l), N = i >= r.length;
    return l = !l && V.isArray(a) ? a.length : l, N ? (V.hasOwnProp(a, l) ? a[l] = [a[l], o] : a[l] = o, !h) : ((!a[l] || !V.isObject(a[l])) && (a[l] = []), t(r, o, a[l], i) && V.isArray(a[l]) && (a[l] = ns(a[l])), !h);
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const r = {};
    return V.forEachEntry(e, (o, a) => {
      t(as(o), a, r, 0);
    }), r;
  }
  return null;
}
function is(e, t, r) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const wt = {
  transitional: to,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const o = r.getContentType() || "", a = o.indexOf("application/json") > -1, i = V.isObject(t);
    if (i && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t))
      return a && a ? JSON.stringify(oo(t)) : t;
    if (V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t))
      return t;
    if (V.isArrayBufferView(t))
      return t.buffer;
    if (V.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let h;
    if (i) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return os(t, this.formSerializer).toString();
      if ((h = V.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const N = this.env && this.env.FormData;
        return at(
          h ? { "files[]": t } : t,
          N && new N(),
          this.formSerializer
        );
      }
    }
    return i || a ? (r.setContentType("application/json", !1), is(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || wt.transitional, o = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (t && V.isString(t) && (o && !this.responseType || a)) {
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
V.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  wt.headers[e] = {};
});
const Et = wt, ss = V.toObjectSet([
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
}, cr = Symbol("internals");
function xe(e) {
  return e && String(e).trim().toLowerCase();
}
function Je(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(Je) : String(e);
}
function cs(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const us = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function dt(e, t, r, o, a) {
  if (V.isFunction(o))
    return o.call(this, t, r);
  if (a && (t = r), !!V.isString(t)) {
    if (V.isString(o))
      return t.indexOf(o) !== -1;
    if (V.isRegExp(o))
      return o.test(t);
  }
}
function ds(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function hs(e, t) {
  const r = V.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(a, i, l) {
        return this[o].call(this, t, a, i, l);
      },
      configurable: !0
    });
  });
}
class nt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, o) {
    const a = this;
    function i(h, N, G) {
      const b = xe(N);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const T = V.findKey(a, b);
      (!T || a[T] === void 0 || G === !0 || G === void 0 && a[T] !== !1) && (a[T || N] = Je(h));
    }
    const l = (h, N) => V.forEach(h, (G, b) => i(G, b, N));
    return V.isPlainObject(t) || t instanceof this.constructor ? l(t, r) : V.isString(t) && (t = t.trim()) && !us(t) ? l(ls(t), r) : t != null && i(r, t, o), this;
  }
  get(t, r) {
    if (t = xe(t), t) {
      const o = V.findKey(this, t);
      if (o) {
        const a = this[o];
        if (!r)
          return a;
        if (r === !0)
          return cs(a);
        if (V.isFunction(r))
          return r.call(this, a, o);
        if (V.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = xe(t), t) {
      const o = V.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || dt(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let a = !1;
    function i(l) {
      if (l = xe(l), l) {
        const h = V.findKey(o, l);
        h && (!r || dt(o, o[h], h, r)) && (delete o[h], a = !0);
      }
    }
    return V.isArray(t) ? t.forEach(i) : i(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let o = r.length, a = !1;
    for (; o--; ) {
      const i = r[o];
      (!t || dt(this, this[i], i, t, !0)) && (delete this[i], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, o = {};
    return V.forEach(this, (a, i) => {
      const l = V.findKey(o, i);
      if (l) {
        r[l] = Je(a), delete r[i];
        return;
      }
      const h = t ? ds(i) : String(i).trim();
      h !== i && delete r[i], r[h] = Je(a), o[h] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return V.forEach(this, (o, a) => {
      o != null && o !== !1 && (r[a] = t && V.isArray(o) ? o.join(", ") : o);
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
    const o = (this[cr] = this[cr] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function i(l) {
      const h = xe(l);
      o[h] || (hs(a, l), o[h] = !0);
    }
    return V.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(nt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[r] = o;
    }
  };
});
V.freezeMethods(nt);
const de = nt;
function ht(e, t) {
  const r = this || Et, o = t || r, a = de.from(o.headers);
  let i = o.data;
  return V.forEach(e, function(h) {
    i = h.call(r, i, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), i;
}
function ao(e) {
  return !!(e && e.__CANCEL__);
}
function Ie(e, t, r) {
  D.call(this, e ?? "canceled", D.ERR_CANCELED, t, r), this.name = "CanceledError";
}
V.inherits(Ie, D, {
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
    write(e, t, r, o, a, i) {
      const l = [e + "=" + encodeURIComponent(t)];
      V.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), V.isString(o) && l.push("path=" + o), V.isString(a) && l.push("domain=" + a), i === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function no(e, t) {
  return e && !Ss(t) ? ps(e, t) : t;
}
const Ns = ne.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let o;
    function a(i) {
      let l = i;
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
      const h = V.isString(l) ? a(l) : l;
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
  let a = 0, i = 0, l;
  return t = t !== void 0 ? t : 1e3, function(N) {
    const G = Date.now(), b = o[i];
    l || (l = G), r[a] = N, o[a] = G;
    let T = i, O = 0;
    for (; T !== a; )
      O += r[T++], T = T % e;
    if (a = (a + 1) % e, a === i && (i = (i + 1) % e), G - l < t)
      return;
    const _ = b && G - b;
    return _ ? Math.round(O * 1e3 / _) : void 0;
  };
}
function ur(e, t) {
  let r = 0;
  const o = ys(50, 250);
  return (a) => {
    const i = a.loaded, l = a.lengthComputable ? a.total : void 0, h = i - r, N = o(h), G = i <= l;
    r = i;
    const b = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: h,
      rate: N || void 0,
      estimated: N && l && G ? (l - i) / N : void 0,
      event: a
    };
    b[t ? "download" : "upload"] = !0, e(b);
  };
}
const Cs = typeof XMLHttpRequest < "u", Ts = Cs && function(e) {
  return new Promise(function(r, o) {
    let a = e.data;
    const i = de.from(e.headers).normalize();
    let { responseType: l, withXSRFToken: h } = e, N;
    function G() {
      e.cancelToken && e.cancelToken.unsubscribe(N), e.signal && e.signal.removeEventListener("abort", N);
    }
    let b;
    if (V.isFormData(a)) {
      if (ne.hasStandardBrowserEnv || ne.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((b = i.getContentType()) !== !1) {
        const [v, ...S] = b ? b.split(";").map((M) => M.trim()).filter(Boolean) : [];
        i.setContentType([v || "multipart/form-data", ...S].join("; "));
      }
    }
    let T = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", S = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(v + ":" + S));
    }
    const O = no(e.baseURL, e.url);
    T.open(e.method.toUpperCase(), eo(O, e.params, e.paramsSerializer), !0), T.timeout = e.timeout;
    function _() {
      if (!T)
        return;
      const v = de.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), M = {
        data: !l || l === "text" || l === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: v,
        config: e,
        request: T
      };
      ms(function(F) {
        r(F), G();
      }, function(F) {
        o(F), G();
      }, M), T = null;
    }
    if ("onloadend" in T ? T.onloadend = _ : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, T.onabort = function() {
      T && (o(new D("Request aborted", D.ECONNABORTED, e, T)), T = null);
    }, T.onerror = function() {
      o(new D("Network Error", D.ERR_NETWORK, e, T)), T = null;
    }, T.ontimeout = function() {
      let S = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const M = e.transitional || to;
      e.timeoutErrorMessage && (S = e.timeoutErrorMessage), o(new D(
        S,
        M.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
        e,
        T
      )), T = null;
    }, ne.hasStandardBrowserEnv && (h && V.isFunction(h) && (h = h(e)), h || h !== !1 && Ns(O))) {
      const v = e.xsrfHeaderName && e.xsrfCookieName && fs.read(e.xsrfCookieName);
      v && i.set(e.xsrfHeaderName, v);
    }
    a === void 0 && i.setContentType(null), "setRequestHeader" in T && V.forEach(i.toJSON(), function(S, M) {
      T.setRequestHeader(M, S);
    }), V.isUndefined(e.withCredentials) || (T.withCredentials = !!e.withCredentials), l && l !== "json" && (T.responseType = e.responseType), typeof e.onDownloadProgress == "function" && T.addEventListener("progress", ur(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && T.upload && T.upload.addEventListener("progress", ur(e.onUploadProgress)), (e.cancelToken || e.signal) && (N = (v) => {
      T && (o(!v || v.type ? new Ie(null, e, T) : v), T.abort(), T = null);
    }, e.cancelToken && e.cancelToken.subscribe(N), e.signal && (e.signal.aborted ? N() : e.signal.addEventListener("abort", N)));
    const g = gs(O);
    if (g && ne.protocols.indexOf(g) === -1) {
      o(new D("Unsupported protocol " + g + ":", D.ERR_BAD_REQUEST, e));
      return;
    }
    T.send(a || null);
  });
}, yt = {
  http: Yi,
  xhr: Ts
};
V.forEach(yt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const dr = (e) => `- ${e}`, vs = (e) => V.isFunction(e) || e === null || e === !1, io = {
  getAdapter: (e) => {
    e = V.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, o;
    const a = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let l;
      if (o = r, !vs(r) && (o = yt[(l = String(r)).toLowerCase()], o === void 0))
        throw new D(`Unknown adapter '${l}'`);
      if (o)
        break;
      a[l || "#" + i] = o;
    }
    if (!o) {
      const i = Object.entries(a).map(
        ([h, N]) => `adapter ${h} ` + (N === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? i.length > 1 ? `since :
` + i.map(dr).join(`
`) : " " + dr(i[0]) : "as no adapter specified";
      throw new D(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: yt
};
function mt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ie(null, e);
}
function hr(e) {
  return mt(e), e.headers = de.from(e.headers), e.data = ht.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), io.getAdapter(e.adapter || Et.adapter)(e).then(function(o) {
    return mt(e), o.data = ht.call(
      e,
      e.transformResponse,
      o
    ), o.headers = de.from(o.headers), o;
  }, function(o) {
    return ao(o) || (mt(e), o && o.response && (o.response.data = ht.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = de.from(o.response.headers))), Promise.reject(o);
  });
}
const mr = (e) => e instanceof de ? e.toJSON() : e;
function Ge(e, t) {
  t = t || {};
  const r = {};
  function o(G, b, T) {
    return V.isPlainObject(G) && V.isPlainObject(b) ? V.merge.call({ caseless: T }, G, b) : V.isPlainObject(b) ? V.merge({}, b) : V.isArray(b) ? b.slice() : b;
  }
  function a(G, b, T) {
    if (V.isUndefined(b)) {
      if (!V.isUndefined(G))
        return o(void 0, G, T);
    } else
      return o(G, b, T);
  }
  function i(G, b) {
    if (!V.isUndefined(b))
      return o(void 0, b);
  }
  function l(G, b) {
    if (V.isUndefined(b)) {
      if (!V.isUndefined(G))
        return o(void 0, G);
    } else
      return o(void 0, b);
  }
  function h(G, b, T) {
    if (T in t)
      return o(G, b);
    if (T in e)
      return o(void 0, G);
  }
  const N = {
    url: i,
    method: i,
    data: i,
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
    headers: (G, b) => a(mr(G), mr(b), !0)
  };
  return V.forEach(Object.keys(Object.assign({}, e, t)), function(b) {
    const T = N[b] || a, O = T(e[b], t[b], b);
    V.isUndefined(O) && T !== h || (r[b] = O);
  }), r;
}
const so = "1.6.5", Lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Lt[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const fr = {};
Lt.transitional = function(t, r, o) {
  function a(i, l) {
    return "[Axios v" + so + "] Transitional option '" + i + "'" + l + (o ? ". " + o : "");
  }
  return (i, l, h) => {
    if (t === !1)
      throw new D(
        a(l, " has been removed" + (r ? " in " + r : "")),
        D.ERR_DEPRECATED
      );
    return r && !fr[l] && (fr[l] = !0, console.warn(
      a(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, l, h) : !0;
  };
};
function bs(e, t, r) {
  if (typeof e != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let a = o.length;
  for (; a-- > 0; ) {
    const i = o[a], l = t[i];
    if (l) {
      const h = e[i], N = h === void 0 || l(h, i, e);
      if (N !== !0)
        throw new D("option " + i + " must be " + N, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new D("Unknown option " + i, D.ERR_BAD_OPTION);
  }
}
const Ct = {
  assertOptions: bs,
  validators: Lt
}, me = Ct.validators;
class We {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new lr(),
      response: new lr()
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
    const { transitional: o, paramsSerializer: a, headers: i } = r;
    o !== void 0 && Ct.assertOptions(o, {
      silentJSONParsing: me.transitional(me.boolean),
      forcedJSONParsing: me.transitional(me.boolean),
      clarifyTimeoutError: me.transitional(me.boolean)
    }, !1), a != null && (V.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : Ct.assertOptions(a, {
      encode: me.function,
      serialize: me.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let l = i && V.merge(
      i.common,
      i[r.method]
    );
    i && V.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), r.headers = de.concat(l, i);
    const h = [];
    let N = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (N = N && v.synchronous, h.unshift(v.fulfilled, v.rejected));
    });
    const G = [];
    this.interceptors.response.forEach(function(v) {
      G.push(v.fulfilled, v.rejected);
    });
    let b, T = 0, O;
    if (!N) {
      const g = [hr.bind(this), void 0];
      for (g.unshift.apply(g, h), g.push.apply(g, G), O = g.length, b = Promise.resolve(r); T < O; )
        b = b.then(g[T++], g[T++]);
      return b;
    }
    O = h.length;
    let _ = r;
    for (T = 0; T < O; ) {
      const g = h[T++], v = h[T++];
      try {
        _ = g(_);
      } catch (S) {
        v.call(this, S);
        break;
      }
    }
    try {
      b = hr.call(this, _);
    } catch (g) {
      return Promise.reject(g);
    }
    for (T = 0, O = G.length; T < O; )
      b = b.then(G[T++], G[T++]);
    return b;
  }
  getUri(t) {
    t = Ge(this.defaults, t);
    const r = no(t.baseURL, t.url);
    return eo(r, t.params, t.paramsSerializer);
  }
}
V.forEach(["delete", "get", "head", "options"], function(t) {
  We.prototype[t] = function(r, o) {
    return this.request(Ge(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }));
  };
});
V.forEach(["post", "put", "patch"], function(t) {
  function r(o) {
    return function(i, l, h) {
      return this.request(Ge(h || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: l
      }));
    };
  }
  We.prototype[t] = r(), We.prototype[t + "Form"] = r(!0);
});
const $e = We;
class Ot {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const o = this;
    this.promise.then((a) => {
      if (!o._listeners)
        return;
      let i = o._listeners.length;
      for (; i-- > 0; )
        o._listeners[i](a);
      o._listeners = null;
    }), this.promise.then = (a) => {
      let i;
      const l = new Promise((h) => {
        o.subscribe(h), i = h;
      }).then(a);
      return l.cancel = function() {
        o.unsubscribe(i);
      }, l;
    }, t(function(i, l, h) {
      o.reason || (o.reason = new Ie(i, l, h), r(o.reason));
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
      token: new Ot(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const Ms = Ot;
function Gs(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Vs(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const Tt = {
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
Object.entries(Tt).forEach(([e, t]) => {
  Tt[t] = e;
});
const As = Tt;
function lo(e) {
  const t = new $e(e), r = Dr($e.prototype.request, t);
  return V.extend(r, $e.prototype, t, { allOwnKeys: !0 }), V.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return lo(Ge(e, a));
  }, r;
}
const Z = lo(Et);
Z.Axios = $e;
Z.CanceledError = Ie;
Z.CancelToken = Ms;
Z.isCancel = ao;
Z.VERSION = so;
Z.toFormData = at;
Z.AxiosError = D;
Z.Cancel = Z.CanceledError;
Z.all = function(t) {
  return Promise.all(t);
};
Z.spread = Gs;
Z.isAxiosError = Vs;
Z.mergeConfig = Ge;
Z.AxiosHeaders = de;
Z.formToJSON = (e) => oo(V.isHTMLForm(e) ? new FormData(e) : e);
Z.getAdapter = io.getAdapter;
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
function _t(e) {
  return e.code !== "ECONNABORTED" && (!e.response || e.response.status >= 500 && e.response.status <= 599);
}
function Es(e) {
  var t;
  return (t = e.config) != null && t.method ? _t(e) && ho.indexOf(e.config.method) !== -1 : !1;
}
function mo(e) {
  var t;
  return (t = e.config) != null && t.method ? _t(e) && ws.indexOf(e.config.method) !== -1 : !1;
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
function Sr(e, t) {
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
const Ne = (e, t) => {
  const r = e.interceptors.request.use((a) => (Sr(a, t), a)), o = e.interceptors.response.use(null, async (a) => {
    const { config: i } = a;
    if (!i)
      return Promise.reject(a);
    const l = Sr(i, t);
    if (await Rs(l, a)) {
      l.retryCount += 1;
      const { retryDelay: h, shouldResetTimeout: N, onRetry: G } = l, b = h(l.retryCount, a);
      if (Is(e, i), !N && i.timeout && l.lastRequestTime) {
        const T = Date.now() - l.lastRequestTime, O = i.timeout - T - b;
        if (O <= 0)
          return Promise.reject(a);
        i.timeout = O;
      }
      return i.transformRequest = [(T) => T], await G(l.retryCount, a, i), new Promise((T) => {
        setTimeout(() => T(e(i)), b);
      });
    }
    return Promise.reject(a);
  });
  return { requestInterceptorId: r, responseInterceptorId: o };
};
Ne.isNetworkError = uo;
Ne.isSafeRequestError = Es;
Ne.isIdempotentRequestError = mo;
Ne.isNetworkOrIdempotentRequestError = fo;
Ne.exponentialDelay = Os;
Ne.isRetryableError = _t;
const zt = Z.create({
  timeout: 1e3 * 300
});
Ne(zt, { retries: 3 });
zt.interceptors.response.use(
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
  return zt({ url: e, method: "get", ...t });
}
function Be(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Us = { exports: {} };
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(o, a, i) {
      function l(G, b) {
        if (!a[G]) {
          if (!o[G]) {
            var T = typeof Be == "function" && Be;
            if (!b && T)
              return T(G, !0);
            if (h)
              return h(G, !0);
            throw new Error("Cannot find module '" + G + "'");
          }
          b = a[G] = { exports: {} }, o[G][0].call(b.exports, function(O) {
            var _ = o[G][1][O];
            return l(_ || O);
          }, b, b.exports, r, o, a, i);
        }
        return a[G].exports;
      }
      for (var h = typeof Be == "function" && Be, N = 0; N < i.length; N++)
        l(i[N]);
      return l;
    }({ 1: [function(r, o, a) {
      (function(i, l, h, N, G, b, T, O, _) {
        var g = r("crypto");
        function v(f, y) {
          y = x(f, y);
          var c;
          return (c = y.algorithm !== "passthrough" ? g.createHash(y.algorithm) : new L()).write === void 0 && (c.write = c.update, c.end = c.update), A(y, c).dispatch(f), c.update || c.end(""), c.digest ? c.digest(y.encoding === "buffer" ? void 0 : y.encoding) : (f = c.read(), y.encoding !== "buffer" ? f.toString(y.encoding) : f);
        }
        (a = o.exports = v).sha1 = function(f) {
          return v(f);
        }, a.keys = function(f) {
          return v(f, { excludeValues: !0, algorithm: "sha1", encoding: "hex" });
        }, a.MD5 = function(f) {
          return v(f, { algorithm: "md5", encoding: "hex" });
        }, a.keysMD5 = function(f) {
          return v(f, { algorithm: "md5", encoding: "hex", excludeValues: !0 });
        };
        var S = g.getHashes ? g.getHashes().slice() : ["sha1", "md5"], M = (S.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
        function x(f, y) {
          var c = {};
          if (c.algorithm = (y = y || {}).algorithm || "sha1", c.encoding = y.encoding || "hex", c.excludeValues = !!y.excludeValues, c.algorithm = c.algorithm.toLowerCase(), c.encoding = c.encoding.toLowerCase(), c.ignoreUnknown = y.ignoreUnknown === !0, c.respectType = y.respectType !== !1, c.respectFunctionNames = y.respectFunctionNames !== !1, c.respectFunctionProperties = y.respectFunctionProperties !== !1, c.unorderedArrays = y.unorderedArrays === !0, c.unorderedSets = y.unorderedSets !== !1, c.unorderedObjects = y.unorderedObjects !== !1, c.replacer = y.replacer || void 0, c.excludeKeys = y.excludeKeys || void 0, f === void 0)
            throw new Error("Object argument required.");
          for (var d = 0; d < S.length; ++d)
            S[d].toLowerCase() === c.algorithm.toLowerCase() && (c.algorithm = S[d]);
          if (S.indexOf(c.algorithm) === -1)
            throw new Error('Algorithm "' + c.algorithm + '"  not supported. supported values: ' + S.join(", "));
          if (M.indexOf(c.encoding) === -1 && c.algorithm !== "passthrough")
            throw new Error('Encoding "' + c.encoding + '"  not supported. supported values: ' + M.join(", "));
          return c;
        }
        function F(f) {
          if (typeof f == "function")
            return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(f)) != null;
        }
        function A(f, y, c) {
          c = c || [];
          function d(s) {
            return y.update ? y.update(s, "utf8") : y.write(s, "utf8");
          }
          return { dispatch: function(s) {
            return this["_" + ((s = f.replacer ? f.replacer(s) : s) === null ? "null" : typeof s)](s);
          }, _object: function(s) {
            var p, C = Object.prototype.toString.call(s), R = /\[object (.*)\]/i.exec(C);
            if (R = (R = R ? R[1] : "unknown:[" + C + "]").toLowerCase(), 0 <= (C = c.indexOf(s)))
              return this.dispatch("[CIRCULAR:" + C + "]");
            if (c.push(s), h !== void 0 && h.isBuffer && h.isBuffer(s))
              return d("buffer:"), d(s);
            if (R === "object" || R === "function" || R === "asyncfunction")
              return C = Object.keys(s), f.unorderedObjects && (C = C.sort()), f.respectType === !1 || F(s) || C.splice(0, 0, "prototype", "__proto__", "constructor"), f.excludeKeys && (C = C.filter(function(I) {
                return !f.excludeKeys(I);
              })), d("object:" + C.length + ":"), p = this, C.forEach(function(I) {
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
            var C = this;
            if (d("array:" + s.length + ":"), !I || s.length <= 1)
              return s.forEach(function(B) {
                return C.dispatch(B);
              });
            var R = [], I = s.map(function(B) {
              var z = new L(), K = c.slice();
              return A(f, z, K).dispatch(B), R = R.concat(K.slice(c.length)), z.read().toString();
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
        a.writeToStream = function(f, y, c) {
          return c === void 0 && (c = y, y = {}), A(y = x(f, y), c).dispatch(f);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
    }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(r, o, a) {
      (function(i, l, h, N, G, b, T, O, _) {
        (function(g) {
          var v = typeof Uint8Array < "u" ? Uint8Array : Array, S = 43, M = 47, x = 48, F = 97, A = 65, L = 45, f = 95;
          function y(c) {
            return c = c.charCodeAt(0), c === S || c === L ? 62 : c === M || c === f ? 63 : c < x ? -1 : c < x + 10 ? c - x + 26 + 26 : c < A + 26 ? c - A : c < F + 26 ? c - F + 26 : void 0;
          }
          g.toByteArray = function(c) {
            var d, s;
            if (0 < c.length % 4)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var p = c.length, p = c.charAt(p - 2) === "=" ? 2 : c.charAt(p - 1) === "=" ? 1 : 0, C = new v(3 * c.length / 4 - p), R = 0 < p ? c.length - 4 : c.length, I = 0;
            function B(z) {
              C[I++] = z;
            }
            for (d = 0; d < R; d += 4, 0)
              B((16711680 & (s = y(c.charAt(d)) << 18 | y(c.charAt(d + 1)) << 12 | y(c.charAt(d + 2)) << 6 | y(c.charAt(d + 3)))) >> 16), B((65280 & s) >> 8), B(255 & s);
            return p == 2 ? B(255 & (s = y(c.charAt(d)) << 2 | y(c.charAt(d + 1)) >> 4)) : p == 1 && (B((s = y(c.charAt(d)) << 10 | y(c.charAt(d + 1)) << 4 | y(c.charAt(d + 2)) >> 2) >> 8 & 255), B(255 & s)), C;
          }, g.fromByteArray = function(c) {
            var d, s, p, C, R = c.length % 3, I = "";
            function B(z) {
              return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(z);
            }
            for (d = 0, p = c.length - R; d < p; d += 3)
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
      (function(i, l, S, N, G, b, T, O, _) {
        var g = r("base64-js"), v = r("ieee754");
        function S(n, u, m) {
          if (!(this instanceof S))
            return new S(n, u, m);
          var k, P, E, U, J = typeof n;
          if (u === "base64" && J == "string")
            for (n = (U = n).trim ? U.trim() : U.replace(/^\s+|\s+$/g, ""); n.length % 4 != 0; )
              n += "=";
          if (J == "number")
            k = X(n);
          else if (J == "string")
            k = S.byteLength(n, u);
          else {
            if (J != "object")
              throw new Error("First argument needs to be a number, array or string.");
            k = X(n.length);
          }
          if (S._useTypedArrays ? P = S._augment(new Uint8Array(k)) : ((P = this).length = k, P._isBuffer = !0), S._useTypedArrays && typeof n.byteLength == "number")
            P._set(n);
          else if (Y(U = n) || S.isBuffer(U) || U && typeof U == "object" && typeof U.length == "number")
            for (E = 0; E < k; E++)
              S.isBuffer(n) ? P[E] = n.readUInt8(E) : P[E] = n[E];
          else if (J == "string")
            P.write(n, 0, u);
          else if (J == "number" && !S._useTypedArrays && !m)
            for (E = 0; E < k; E++)
              P[E] = 0;
          return P;
        }
        function M(n, u, m, k) {
          return S._charsWritten = Re(function(P) {
            for (var E = [], U = 0; U < P.length; U++)
              E.push(255 & P.charCodeAt(U));
            return E;
          }(u), n, m, k);
        }
        function x(n, u, m, k) {
          return S._charsWritten = Re(function(P) {
            for (var E, U, J = [], q = 0; q < P.length; q++)
              U = P.charCodeAt(q), E = U >> 8, U = U % 256, J.push(U), J.push(E);
            return J;
          }(u), n, m, k);
        }
        function F(n, u, m) {
          var k = "";
          m = Math.min(n.length, m);
          for (var P = u; P < m; P++)
            k += String.fromCharCode(n[P]);
          return k;
        }
        function A(n, u, m, E) {
          E || (w(typeof m == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 1 < n.length, "Trying to read beyond buffer length"));
          var P, E = n.length;
          if (!(E <= u))
            return m ? (P = n[u], u + 1 < E && (P |= n[u + 1] << 8)) : (P = n[u] << 8, u + 1 < E && (P |= n[u + 1])), P;
        }
        function L(n, u, m, E) {
          E || (w(typeof m == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 3 < n.length, "Trying to read beyond buffer length"));
          var P, E = n.length;
          if (!(E <= u))
            return m ? (u + 2 < E && (P = n[u + 2] << 16), u + 1 < E && (P |= n[u + 1] << 8), P |= n[u], u + 3 < E && (P += n[u + 3] << 24 >>> 0)) : (u + 1 < E && (P = n[u + 1] << 16), u + 2 < E && (P |= n[u + 2] << 8), u + 3 < E && (P |= n[u + 3]), P += n[u] << 24 >>> 0), P;
        }
        function f(n, u, m, k) {
          if (k || (w(typeof m == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 1 < n.length, "Trying to read beyond buffer length")), !(n.length <= u))
            return k = A(n, u, m, !0), 32768 & k ? -1 * (65535 - k + 1) : k;
        }
        function y(n, u, m, k) {
          if (k || (w(typeof m == "boolean", "missing or invalid endian"), w(u != null, "missing offset"), w(u + 3 < n.length, "Trying to read beyond buffer length")), !(n.length <= u))
            return k = L(n, u, m, !0), 2147483648 & k ? -1 * (4294967295 - k + 1) : k;
        }
        function c(n, u, m, k) {
          return k || (w(typeof m == "boolean", "missing or invalid endian"), w(u + 3 < n.length, "Trying to read beyond buffer length")), v.read(n, u, m, 23, 4);
        }
        function d(n, u, m, k) {
          return k || (w(typeof m == "boolean", "missing or invalid endian"), w(u + 7 < n.length, "Trying to read beyond buffer length")), v.read(n, u, m, 52, 8);
        }
        function s(n, u, m, k, P) {
          if (P || (w(u != null, "missing value"), w(typeof k == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 1 < n.length, "trying to write beyond buffer length"), it(u, 65535)), P = n.length, !(P <= m))
            for (var E = 0, U = Math.min(P - m, 2); E < U; E++)
              n[m + E] = (u & 255 << 8 * (k ? E : 1 - E)) >>> 8 * (k ? E : 1 - E);
        }
        function p(n, u, m, k, P) {
          if (P || (w(u != null, "missing value"), w(typeof k == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 3 < n.length, "trying to write beyond buffer length"), it(u, 4294967295)), P = n.length, !(P <= m))
            for (var E = 0, U = Math.min(P - m, 4); E < U; E++)
              n[m + E] = u >>> 8 * (k ? E : 3 - E) & 255;
        }
        function C(n, u, m, k, P) {
          P || (w(u != null, "missing value"), w(typeof k == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 1 < n.length, "Trying to write beyond buffer length"), st(u, 32767, -32768)), n.length <= m || s(n, 0 <= u ? u : 65535 + u + 1, m, k, P);
        }
        function R(n, u, m, k, P) {
          P || (w(u != null, "missing value"), w(typeof k == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 3 < n.length, "Trying to write beyond buffer length"), st(u, 2147483647, -2147483648)), n.length <= m || p(n, 0 <= u ? u : 4294967295 + u + 1, m, k, P);
        }
        function I(n, u, m, k, P) {
          P || (w(u != null, "missing value"), w(typeof k == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 3 < n.length, "Trying to write beyond buffer length"), Bt(u, 34028234663852886e22, -34028234663852886e22)), n.length <= m || v.write(n, u, m, k, 23, 4);
        }
        function B(n, u, m, k, P) {
          P || (w(u != null, "missing value"), w(typeof k == "boolean", "missing or invalid endian"), w(m != null, "missing offset"), w(m + 7 < n.length, "Trying to write beyond buffer length"), Bt(u, 17976931348623157e292, -17976931348623157e292)), n.length <= m || v.write(n, u, m, k, 52, 8);
        }
        a.Buffer = S, a.SlowBuffer = S, a.INSPECT_MAX_BYTES = 50, S.poolSize = 8192, S._useTypedArrays = function() {
          try {
            var n = new ArrayBuffer(0), u = new Uint8Array(n);
            return u.foo = function() {
              return 42;
            }, u.foo() === 42 && typeof u.subarray == "function";
          } catch {
            return !1;
          }
        }(), S.isEncoding = function(n) {
          switch (String(n).toLowerCase()) {
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
        }, S.isBuffer = function(n) {
          return !(n == null || !n._isBuffer);
        }, S.byteLength = function(n, u) {
          var m;
          switch (n += "", u || "utf8") {
            case "hex":
              m = n.length / 2;
              break;
            case "utf8":
            case "utf-8":
              m = se(n).length;
              break;
            case "ascii":
            case "binary":
            case "raw":
              m = n.length;
              break;
            case "base64":
              m = It(n).length;
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              m = 2 * n.length;
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return m;
        }, S.concat = function(n, u) {
          if (w(Y(n), `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`), n.length === 0)
            return new S(0);
          if (n.length === 1)
            return n[0];
          if (typeof u != "number")
            for (P = u = 0; P < n.length; P++)
              u += n[P].length;
          for (var m = new S(u), k = 0, P = 0; P < n.length; P++) {
            var E = n[P];
            E.copy(m, k), k += E.length;
          }
          return m;
        }, S.prototype.write = function(n, u, m, k) {
          isFinite(u) ? isFinite(m) || (k = m, m = void 0) : (q = k, k = u, u = m, m = q), u = Number(u) || 0;
          var P, E, U, J, q = this.length - u;
          switch ((!m || q < (m = Number(m))) && (m = q), k = String(k || "utf8").toLowerCase()) {
            case "hex":
              P = function(re, Q, ee, W) {
                ee = Number(ee) || 0;
                var $ = re.length - ee;
                (!W || $ < (W = Number(W))) && (W = $), w(($ = Q.length) % 2 == 0, "Invalid hex string"), $ / 2 < W && (W = $ / 2);
                for (var ge = 0; ge < W; ge++) {
                  var Ut = parseInt(Q.substr(2 * ge, 2), 16);
                  w(!isNaN(Ut), "Invalid hex string"), re[ee + ge] = Ut;
                }
                return S._charsWritten = 2 * ge, ge;
              }(this, n, u, m);
              break;
            case "utf8":
            case "utf-8":
              E = this, U = u, J = m, P = S._charsWritten = Re(se(n), E, U, J);
              break;
            case "ascii":
            case "binary":
              P = M(this, n, u, m);
              break;
            case "base64":
              E = this, U = u, J = m, P = S._charsWritten = Re(It(n), E, U, J);
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              P = x(this, n, u, m);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return P;
        }, S.prototype.toString = function(n, u, m) {
          var k, P, E, U, J = this;
          if (n = String(n || "utf8").toLowerCase(), u = Number(u) || 0, (m = m !== void 0 ? Number(m) : J.length) === u)
            return "";
          switch (n) {
            case "hex":
              k = function(q, re, Q) {
                var ee = q.length;
                (!re || re < 0) && (re = 0), (!Q || Q < 0 || ee < Q) && (Q = ee);
                for (var W = "", $ = re; $ < Q; $++)
                  W += H(q[$]);
                return W;
              }(J, u, m);
              break;
            case "utf8":
            case "utf-8":
              k = function(q, re, Q) {
                var ee = "", W = "";
                Q = Math.min(q.length, Q);
                for (var $ = re; $ < Q; $++)
                  q[$] <= 127 ? (ee += Rt(W) + String.fromCharCode(q[$]), W = "") : W += "%" + q[$].toString(16);
                return ee + Rt(W);
              }(J, u, m);
              break;
            case "ascii":
            case "binary":
              k = F(J, u, m);
              break;
            case "base64":
              P = J, U = m, k = (E = u) === 0 && U === P.length ? g.fromByteArray(P) : g.fromByteArray(P.slice(E, U));
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              k = function(q, re, Q) {
                for (var ee = q.slice(re, Q), W = "", $ = 0; $ < ee.length; $ += 2)
                  W += String.fromCharCode(ee[$] + 256 * ee[$ + 1]);
                return W;
              }(J, u, m);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return k;
        }, S.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        }, S.prototype.copy = function(n, u, m, k) {
          if (u = u || 0, (k = k || k === 0 ? k : this.length) !== (m = m || 0) && n.length !== 0 && this.length !== 0) {
            w(m <= k, "sourceEnd < sourceStart"), w(0 <= u && u < n.length, "targetStart out of bounds"), w(0 <= m && m < this.length, "sourceStart out of bounds"), w(0 <= k && k <= this.length, "sourceEnd out of bounds"), k > this.length && (k = this.length);
            var P = (k = n.length - u < k - m ? n.length - u + m : k) - m;
            if (P < 100 || !S._useTypedArrays)
              for (var E = 0; E < P; E++)
                n[E + u] = this[E + m];
            else
              n._set(this.subarray(m, m + P), u);
          }
        }, S.prototype.slice = function(n, u) {
          var m = this.length;
          if (n = K(n, m, 0), u = K(u, m, m), S._useTypedArrays)
            return S._augment(this.subarray(n, u));
          for (var k = u - n, P = new S(k, void 0, !0), E = 0; E < k; E++)
            P[E] = this[E + n];
          return P;
        }, S.prototype.get = function(n) {
          return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(n);
        }, S.prototype.set = function(n, u) {
          return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(n, u);
        }, S.prototype.readUInt8 = function(n, u) {
          if (u || (w(n != null, "missing offset"), w(n < this.length, "Trying to read beyond buffer length")), !(n >= this.length))
            return this[n];
        }, S.prototype.readUInt16LE = function(n, u) {
          return A(this, n, !0, u);
        }, S.prototype.readUInt16BE = function(n, u) {
          return A(this, n, !1, u);
        }, S.prototype.readUInt32LE = function(n, u) {
          return L(this, n, !0, u);
        }, S.prototype.readUInt32BE = function(n, u) {
          return L(this, n, !1, u);
        }, S.prototype.readInt8 = function(n, u) {
          if (u || (w(n != null, "missing offset"), w(n < this.length, "Trying to read beyond buffer length")), !(n >= this.length))
            return 128 & this[n] ? -1 * (255 - this[n] + 1) : this[n];
        }, S.prototype.readInt16LE = function(n, u) {
          return f(this, n, !0, u);
        }, S.prototype.readInt16BE = function(n, u) {
          return f(this, n, !1, u);
        }, S.prototype.readInt32LE = function(n, u) {
          return y(this, n, !0, u);
        }, S.prototype.readInt32BE = function(n, u) {
          return y(this, n, !1, u);
        }, S.prototype.readFloatLE = function(n, u) {
          return c(this, n, !0, u);
        }, S.prototype.readFloatBE = function(n, u) {
          return c(this, n, !1, u);
        }, S.prototype.readDoubleLE = function(n, u) {
          return d(this, n, !0, u);
        }, S.prototype.readDoubleBE = function(n, u) {
          return d(this, n, !1, u);
        }, S.prototype.writeUInt8 = function(n, u, m) {
          m || (w(n != null, "missing value"), w(u != null, "missing offset"), w(u < this.length, "trying to write beyond buffer length"), it(n, 255)), u >= this.length || (this[u] = n);
        }, S.prototype.writeUInt16LE = function(n, u, m) {
          s(this, n, u, !0, m);
        }, S.prototype.writeUInt16BE = function(n, u, m) {
          s(this, n, u, !1, m);
        }, S.prototype.writeUInt32LE = function(n, u, m) {
          p(this, n, u, !0, m);
        }, S.prototype.writeUInt32BE = function(n, u, m) {
          p(this, n, u, !1, m);
        }, S.prototype.writeInt8 = function(n, u, m) {
          m || (w(n != null, "missing value"), w(u != null, "missing offset"), w(u < this.length, "Trying to write beyond buffer length"), st(n, 127, -128)), u >= this.length || (0 <= n ? this.writeUInt8(n, u, m) : this.writeUInt8(255 + n + 1, u, m));
        }, S.prototype.writeInt16LE = function(n, u, m) {
          C(this, n, u, !0, m);
        }, S.prototype.writeInt16BE = function(n, u, m) {
          C(this, n, u, !1, m);
        }, S.prototype.writeInt32LE = function(n, u, m) {
          R(this, n, u, !0, m);
        }, S.prototype.writeInt32BE = function(n, u, m) {
          R(this, n, u, !1, m);
        }, S.prototype.writeFloatLE = function(n, u, m) {
          I(this, n, u, !0, m);
        }, S.prototype.writeFloatBE = function(n, u, m) {
          I(this, n, u, !1, m);
        }, S.prototype.writeDoubleLE = function(n, u, m) {
          B(this, n, u, !0, m);
        }, S.prototype.writeDoubleBE = function(n, u, m) {
          B(this, n, u, !1, m);
        }, S.prototype.fill = function(n, u, m) {
          if (u = u || 0, m = m || this.length, w(typeof (n = typeof (n = n || 0) == "string" ? n.charCodeAt(0) : n) == "number" && !isNaN(n), "value is not a number"), w(u <= m, "end < start"), m !== u && this.length !== 0) {
            w(0 <= u && u < this.length, "start out of bounds"), w(0 <= m && m <= this.length, "end out of bounds");
            for (var k = u; k < m; k++)
              this[k] = n;
          }
        }, S.prototype.inspect = function() {
          for (var n = [], u = this.length, m = 0; m < u; m++)
            if (n[m] = H(this[m]), m === a.INSPECT_MAX_BYTES) {
              n[m + 1] = "...";
              break;
            }
          return "<Buffer " + n.join(" ") + ">";
        }, S.prototype.toArrayBuffer = function() {
          if (typeof Uint8Array > "u")
            throw new Error("Buffer.toArrayBuffer not supported in this browser");
          if (S._useTypedArrays)
            return new S(this).buffer;
          for (var n = new Uint8Array(this.length), u = 0, m = n.length; u < m; u += 1)
            n[u] = this[u];
          return n.buffer;
        };
        var z = S.prototype;
        function K(n, u, m) {
          return typeof n != "number" ? m : u <= (n = ~~n) ? u : 0 <= n || 0 <= (n += u) ? n : 0;
        }
        function X(n) {
          return (n = ~~Math.ceil(+n)) < 0 ? 0 : n;
        }
        function Y(n) {
          return (Array.isArray || function(u) {
            return Object.prototype.toString.call(u) === "[object Array]";
          })(n);
        }
        function H(n) {
          return n < 16 ? "0" + n.toString(16) : n.toString(16);
        }
        function se(n) {
          for (var u = [], m = 0; m < n.length; m++) {
            var k = n.charCodeAt(m);
            if (k <= 127)
              u.push(n.charCodeAt(m));
            else
              for (var P = m, E = (55296 <= k && k <= 57343 && m++, encodeURIComponent(n.slice(P, m + 1)).substr(1).split("%")), U = 0; U < E.length; U++)
                u.push(parseInt(E[U], 16));
          }
          return u;
        }
        function It(n) {
          return g.toByteArray(n);
        }
        function Re(n, u, m, k) {
          for (var P = 0; P < k && !(P + m >= u.length || P >= n.length); P++)
            u[P + m] = n[P];
          return P;
        }
        function Rt(n) {
          try {
            return decodeURIComponent(n);
          } catch {
            return "�";
          }
        }
        function it(n, u) {
          w(typeof n == "number", "cannot write a non-number as a number"), w(0 <= n, "specified a negative value for writing an unsigned value"), w(n <= u, "value is larger than maximum value for type"), w(Math.floor(n) === n, "value has a fractional component");
        }
        function st(n, u, m) {
          w(typeof n == "number", "cannot write a non-number as a number"), w(n <= u, "value larger than maximum allowed value"), w(m <= n, "value smaller than minimum allowed value"), w(Math.floor(n) === n, "value has a fractional component");
        }
        function Bt(n, u, m) {
          w(typeof n == "number", "cannot write a non-number as a number"), w(n <= u, "value larger than maximum allowed value"), w(m <= n, "value smaller than minimum allowed value");
        }
        function w(n, u) {
          if (!n)
            throw new Error(u || "Failed assertion");
        }
        S._augment = function(n) {
          return n._isBuffer = !0, n._get = n.get, n._set = n.set, n.get = z.get, n.set = z.set, n.write = z.write, n.toString = z.toString, n.toLocaleString = z.toString, n.toJSON = z.toJSON, n.copy = z.copy, n.slice = z.slice, n.readUInt8 = z.readUInt8, n.readUInt16LE = z.readUInt16LE, n.readUInt16BE = z.readUInt16BE, n.readUInt32LE = z.readUInt32LE, n.readUInt32BE = z.readUInt32BE, n.readInt8 = z.readInt8, n.readInt16LE = z.readInt16LE, n.readInt16BE = z.readInt16BE, n.readInt32LE = z.readInt32LE, n.readInt32BE = z.readInt32BE, n.readFloatLE = z.readFloatLE, n.readFloatBE = z.readFloatBE, n.readDoubleLE = z.readDoubleLE, n.readDoubleBE = z.readDoubleBE, n.writeUInt8 = z.writeUInt8, n.writeUInt16LE = z.writeUInt16LE, n.writeUInt16BE = z.writeUInt16BE, n.writeUInt32LE = z.writeUInt32LE, n.writeUInt32BE = z.writeUInt32BE, n.writeInt8 = z.writeInt8, n.writeInt16LE = z.writeInt16LE, n.writeInt16BE = z.writeInt16BE, n.writeInt32LE = z.writeInt32LE, n.writeInt32BE = z.writeInt32BE, n.writeFloatLE = z.writeFloatLE, n.writeFloatBE = z.writeFloatBE, n.writeDoubleLE = z.writeDoubleLE, n.writeDoubleBE = z.writeDoubleBE, n.fill = z.fill, n.inspect = z.inspect, n.toArrayBuffer = z.toArrayBuffer, n;
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
    }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(r, o, a) {
      (function(i, l, g, N, G, b, T, O, _) {
        var g = r("buffer").Buffer, v = 4, S = new g(v);
        S.fill(0), o.exports = { hash: function(M, x, F, A) {
          for (var L = x(function(s, p) {
            s.length % v != 0 && (C = s.length + (v - s.length % v), s = g.concat([s, S], C));
            for (var C, R = [], I = p ? s.readInt32BE : s.readInt32LE, B = 0; B < s.length; B += v)
              R.push(I.call(s, B));
            return R;
          }(M = g.isBuffer(M) ? M : new g(M), A), 8 * M.length), x = A, f = new g(F), y = x ? f.writeInt32BE : f.writeInt32LE, c = 0; c < L.length; c++)
            y.call(f, L[c], 4 * c, !0);
          return f;
        } };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 5: [function(r, o, a) {
      (function(i, l, g, N, G, b, T, O, _) {
        var g = r("buffer").Buffer, v = r("./sha"), S = r("./sha256"), M = r("./rng"), x = { sha1: v, sha256: S, md5: r("./md5") }, F = 64, A = new g(F);
        function L(s, p) {
          var C = x[s = s || "sha1"], R = [];
          return C || f("algorithm:", s, "is not yet supported"), { update: function(I) {
            return g.isBuffer(I) || (I = new g(I)), R.push(I), I.length, this;
          }, digest: function(I) {
            var B = g.concat(R), B = p ? function(z, K, X) {
              g.isBuffer(K) || (K = new g(K)), g.isBuffer(X) || (X = new g(X)), K.length > F ? K = z(K) : K.length < F && (K = g.concat([K, A], F));
              for (var Y = new g(F), H = new g(F), se = 0; se < F; se++)
                Y[se] = 54 ^ K[se], H[se] = 92 ^ K[se];
              return X = z(g.concat([Y, X])), z(g.concat([H, X]));
            }(C, p, B) : C(B);
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
            return new g(M(s));
          try {
            p.call(this, void 0, new g(M(s)));
          } catch (C) {
            p(C);
          }
        };
        var y, c = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], d = function(s) {
          a[s] = function() {
            f("sorry,", s, "is not implemented yet");
          };
        };
        for (y in c)
          d(c[y]);
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(r, o, a) {
      (function(i, l, h, N, G, b, T, O, _) {
        var g = r("./helpers");
        function v(f, y) {
          f[y >> 5] |= 128 << y % 32, f[14 + (y + 64 >>> 9 << 4)] = y;
          for (var c = 1732584193, d = -271733879, s = -1732584194, p = 271733878, C = 0; C < f.length; C += 16) {
            var R = c, I = d, B = s, z = p, c = M(c, d, s, p, f[C + 0], 7, -680876936), p = M(p, c, d, s, f[C + 1], 12, -389564586), s = M(s, p, c, d, f[C + 2], 17, 606105819), d = M(d, s, p, c, f[C + 3], 22, -1044525330);
            c = M(c, d, s, p, f[C + 4], 7, -176418897), p = M(p, c, d, s, f[C + 5], 12, 1200080426), s = M(s, p, c, d, f[C + 6], 17, -1473231341), d = M(d, s, p, c, f[C + 7], 22, -45705983), c = M(c, d, s, p, f[C + 8], 7, 1770035416), p = M(p, c, d, s, f[C + 9], 12, -1958414417), s = M(s, p, c, d, f[C + 10], 17, -42063), d = M(d, s, p, c, f[C + 11], 22, -1990404162), c = M(c, d, s, p, f[C + 12], 7, 1804603682), p = M(p, c, d, s, f[C + 13], 12, -40341101), s = M(s, p, c, d, f[C + 14], 17, -1502002290), c = x(c, d = M(d, s, p, c, f[C + 15], 22, 1236535329), s, p, f[C + 1], 5, -165796510), p = x(p, c, d, s, f[C + 6], 9, -1069501632), s = x(s, p, c, d, f[C + 11], 14, 643717713), d = x(d, s, p, c, f[C + 0], 20, -373897302), c = x(c, d, s, p, f[C + 5], 5, -701558691), p = x(p, c, d, s, f[C + 10], 9, 38016083), s = x(s, p, c, d, f[C + 15], 14, -660478335), d = x(d, s, p, c, f[C + 4], 20, -405537848), c = x(c, d, s, p, f[C + 9], 5, 568446438), p = x(p, c, d, s, f[C + 14], 9, -1019803690), s = x(s, p, c, d, f[C + 3], 14, -187363961), d = x(d, s, p, c, f[C + 8], 20, 1163531501), c = x(c, d, s, p, f[C + 13], 5, -1444681467), p = x(p, c, d, s, f[C + 2], 9, -51403784), s = x(s, p, c, d, f[C + 7], 14, 1735328473), c = F(c, d = x(d, s, p, c, f[C + 12], 20, -1926607734), s, p, f[C + 5], 4, -378558), p = F(p, c, d, s, f[C + 8], 11, -2022574463), s = F(s, p, c, d, f[C + 11], 16, 1839030562), d = F(d, s, p, c, f[C + 14], 23, -35309556), c = F(c, d, s, p, f[C + 1], 4, -1530992060), p = F(p, c, d, s, f[C + 4], 11, 1272893353), s = F(s, p, c, d, f[C + 7], 16, -155497632), d = F(d, s, p, c, f[C + 10], 23, -1094730640), c = F(c, d, s, p, f[C + 13], 4, 681279174), p = F(p, c, d, s, f[C + 0], 11, -358537222), s = F(s, p, c, d, f[C + 3], 16, -722521979), d = F(d, s, p, c, f[C + 6], 23, 76029189), c = F(c, d, s, p, f[C + 9], 4, -640364487), p = F(p, c, d, s, f[C + 12], 11, -421815835), s = F(s, p, c, d, f[C + 15], 16, 530742520), c = A(c, d = F(d, s, p, c, f[C + 2], 23, -995338651), s, p, f[C + 0], 6, -198630844), p = A(p, c, d, s, f[C + 7], 10, 1126891415), s = A(s, p, c, d, f[C + 14], 15, -1416354905), d = A(d, s, p, c, f[C + 5], 21, -57434055), c = A(c, d, s, p, f[C + 12], 6, 1700485571), p = A(p, c, d, s, f[C + 3], 10, -1894986606), s = A(s, p, c, d, f[C + 10], 15, -1051523), d = A(d, s, p, c, f[C + 1], 21, -2054922799), c = A(c, d, s, p, f[C + 8], 6, 1873313359), p = A(p, c, d, s, f[C + 15], 10, -30611744), s = A(s, p, c, d, f[C + 6], 15, -1560198380), d = A(d, s, p, c, f[C + 13], 21, 1309151649), c = A(c, d, s, p, f[C + 4], 6, -145523070), p = A(p, c, d, s, f[C + 11], 10, -1120210379), s = A(s, p, c, d, f[C + 2], 15, 718787259), d = A(d, s, p, c, f[C + 9], 21, -343485551), c = L(c, R), d = L(d, I), s = L(s, B), p = L(p, z);
          }
          return Array(c, d, s, p);
        }
        function S(f, y, c, d, s, p) {
          return L((y = L(L(y, f), L(d, p))) << s | y >>> 32 - s, c);
        }
        function M(f, y, c, d, s, p, C) {
          return S(y & c | ~y & d, f, y, s, p, C);
        }
        function x(f, y, c, d, s, p, C) {
          return S(y & d | c & ~d, f, y, s, p, C);
        }
        function F(f, y, c, d, s, p, C) {
          return S(y ^ c ^ d, f, y, s, p, C);
        }
        function A(f, y, c, d, s, p, C) {
          return S(c ^ (y | ~d), f, y, s, p, C);
        }
        function L(f, y) {
          var c = (65535 & f) + (65535 & y);
          return (f >> 16) + (y >> 16) + (c >> 16) << 16 | 65535 & c;
        }
        o.exports = function(f) {
          return g.hash(f, v, 16);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(r, o, a) {
      (function(i, l, h, N, G, b, T, O, _) {
        o.exports = function(g) {
          for (var v, S = new Array(g), M = 0; M < g; M++)
            !(3 & M) && (v = 4294967296 * Math.random()), S[M] = v >>> ((3 & M) << 3) & 255;
          return S;
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 8: [function(r, o, a) {
      (function(i, l, h, N, G, b, T, O, _) {
        var g = r("./helpers");
        function v(x, F) {
          x[F >> 5] |= 128 << 24 - F % 32, x[15 + (F + 64 >> 9 << 4)] = F;
          for (var A, L, f, y = Array(80), c = 1732584193, d = -271733879, s = -1732584194, p = 271733878, C = -1009589776, R = 0; R < x.length; R += 16) {
            for (var I = c, B = d, z = s, K = p, X = C, Y = 0; Y < 80; Y++) {
              y[Y] = Y < 16 ? x[R + Y] : M(y[Y - 3] ^ y[Y - 8] ^ y[Y - 14] ^ y[Y - 16], 1);
              var H = S(S(M(c, 5), (H = d, L = s, f = p, (A = Y) < 20 ? H & L | ~H & f : !(A < 40) && A < 60 ? H & L | H & f | L & f : H ^ L ^ f)), S(S(C, y[Y]), (A = Y) < 20 ? 1518500249 : A < 40 ? 1859775393 : A < 60 ? -1894007588 : -899497514)), C = p, p = s, s = M(d, 30), d = c, c = H;
            }
            c = S(c, I), d = S(d, B), s = S(s, z), p = S(p, K), C = S(C, X);
          }
          return Array(c, d, s, p, C);
        }
        function S(x, F) {
          var A = (65535 & x) + (65535 & F);
          return (x >> 16) + (F >> 16) + (A >> 16) << 16 | 65535 & A;
        }
        function M(x, F) {
          return x << F | x >>> 32 - F;
        }
        o.exports = function(x) {
          return g.hash(x, v, 20, !0);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(r, o, a) {
      (function(i, l, h, N, G, b, T, O, _) {
        function g(F, A) {
          var L = (65535 & F) + (65535 & A);
          return (F >> 16) + (A >> 16) + (L >> 16) << 16 | 65535 & L;
        }
        function v(F, A) {
          var L, f = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), y = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), c = new Array(64);
          F[A >> 5] |= 128 << 24 - A % 32, F[15 + (A + 64 >> 9 << 4)] = A;
          for (var d, s, p = 0; p < F.length; p += 16) {
            for (var C = y[0], R = y[1], I = y[2], B = y[3], z = y[4], K = y[5], X = y[6], Y = y[7], H = 0; H < 64; H++)
              c[H] = H < 16 ? F[H + p] : g(g(g((s = c[H - 2], M(s, 17) ^ M(s, 19) ^ x(s, 10)), c[H - 7]), (s = c[H - 15], M(s, 7) ^ M(s, 18) ^ x(s, 3))), c[H - 16]), L = g(g(g(g(Y, M(s = z, 6) ^ M(s, 11) ^ M(s, 25)), z & K ^ ~z & X), f[H]), c[H]), d = g(M(d = C, 2) ^ M(d, 13) ^ M(d, 22), C & R ^ C & I ^ R & I), Y = X, X = K, K = z, z = g(B, L), B = I, I = R, R = C, C = g(L, d);
            y[0] = g(C, y[0]), y[1] = g(R, y[1]), y[2] = g(I, y[2]), y[3] = g(B, y[3]), y[4] = g(z, y[4]), y[5] = g(K, y[5]), y[6] = g(X, y[6]), y[7] = g(Y, y[7]);
          }
          return y;
        }
        var S = r("./helpers"), M = function(F, A) {
          return F >>> A | F << 32 - A;
        }, x = function(F, A) {
          return F >>> A;
        };
        o.exports = function(F) {
          return S.hash(F, v, 32, !0);
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(r, o, a) {
      (function(i, l, h, N, G, b, T, O, _) {
        a.read = function(g, v, S, M, p) {
          var F, A, L = 8 * p - M - 1, f = (1 << L) - 1, y = f >> 1, c = -7, d = S ? p - 1 : 0, s = S ? -1 : 1, p = g[v + d];
          for (d += s, F = p & (1 << -c) - 1, p >>= -c, c += L; 0 < c; F = 256 * F + g[v + d], d += s, c -= 8)
            ;
          for (A = F & (1 << -c) - 1, F >>= -c, c += M; 0 < c; A = 256 * A + g[v + d], d += s, c -= 8)
            ;
          if (F === 0)
            F = 1 - y;
          else {
            if (F === f)
              return A ? NaN : 1 / 0 * (p ? -1 : 1);
            A += Math.pow(2, M), F -= y;
          }
          return (p ? -1 : 1) * A * Math.pow(2, F - M);
        }, a.write = function(g, v, S, M, x, C) {
          var A, L, f = 8 * C - x - 1, y = (1 << f) - 1, c = y >> 1, d = x === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, s = M ? 0 : C - 1, p = M ? 1 : -1, C = v < 0 || v === 0 && 1 / v < 0 ? 1 : 0;
          for (v = Math.abs(v), isNaN(v) || v === 1 / 0 ? (L = isNaN(v) ? 1 : 0, A = y) : (A = Math.floor(Math.log(v) / Math.LN2), v * (M = Math.pow(2, -A)) < 1 && (A--, M *= 2), 2 <= (v += 1 <= A + c ? d / M : d * Math.pow(2, 1 - c)) * M && (A++, M /= 2), y <= A + c ? (L = 0, A = y) : 1 <= A + c ? (L = (v * M - 1) * Math.pow(2, x), A += c) : (L = v * Math.pow(2, c - 1) * Math.pow(2, x), A = 0)); 8 <= x; g[S + s] = 255 & L, s += p, L /= 256, x -= 8)
            ;
          for (A = A << x | L, f += x; 0 < f; g[S + s] = 255 & A, s += p, A /= 256, f -= 8)
            ;
          g[S + s - p] |= 128 * C;
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
    }, { buffer: 3, lYpoI2: 11 }], 11: [function(r, o, a) {
      (function(i, l, h, N, G, b, T, O, _) {
        var g, v, S;
        function M() {
        }
        (i = o.exports = {}).nextTick = (v = typeof window < "u" && window.setImmediate, S = typeof window < "u" && window.postMessage && window.addEventListener, v ? function(x) {
          return window.setImmediate(x);
        } : S ? (g = [], window.addEventListener("message", function(x) {
          var F = x.source;
          F !== window && F !== null || x.data !== "process-tick" || (x.stopPropagation(), 0 < g.length && g.shift()());
        }, !0), function(x) {
          g.push(x), window.postMessage("process-tick", "*");
        }) : function(x) {
          setTimeout(x, 0);
        }), i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.on = M, i.addListener = M, i.once = M, i.off = M, i.removeListener = M, i.removeAllListeners = M, i.emit = M, i.binding = function(x) {
          throw new Error("process.binding is not supported");
        }, i.cwd = function() {
          return "/";
        }, i.chdir = function(x) {
          throw new Error("process.chdir is not supported");
        };
      }).call(this, r("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, r("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
    }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
  });
})(Us);
function Ue(e) {
  let t = new Uint8Array(0);
  for (let r = 0; r < e.length; r++) {
    let o = new Uint8Array(e[r]), a = new Uint8Array(t.length + o.length);
    a.set(t, 0), a.set(o, t.length), t = a;
  }
  return t.buffer;
}
function De(e) {
  return new Promise((t) => {
    const r = new AudioContext(), o = r.createBufferSource();
    r.decodeAudioData(e, (a) => {
      o.buffer = a, o.connect(r.destination), t(a);
    });
  });
}
function He(e, t = {}) {
  const r = t.outputRate || 24e3, o = t.bitDepth || 16, a = t.numChannels || e.numberOfChannels, i = e.sampleRate / r >> 0, l = a === 2 ? pr(i, e.getChannelData(0), e.getChannelData(1)) : pr(i, e.getChannelData(0));
  return Ds(l, r, o, a);
}
function pr(e, t, r) {
  const o = r ? (t.length + r.length) / e >> 0 : t.length / e >> 0, a = new Float32Array(o);
  let i = 0, l = 0;
  for (; i < o; )
    a[i++] = t[l], r && (a[i++] = r[l]), l += e;
  return a;
}
function Ds(e, t, r, o) {
  const a = r / 8, i = o * a, l = e.length * a, h = new ArrayBuffer(44 + l), N = new DataView(h);
  return je(N, 0, "RIFF"), N.setUint32(
    4,
    /*32*/
    36 + l,
    !0
  ), je(N, 8, "WAVE"), je(N, 12, "fmt "), N.setUint32(16, 16, !0), N.setUint16(20, 1, !0), N.setUint16(22, o, !0), N.setUint32(24, t, !0), N.setUint32(28, t * i, !0), N.setUint16(32, i, !0), N.setUint16(34, r, !0), je(N, 36, "data"), N.setUint32(40, l, !0), r === 8 ? Hs(N, 44, e) : r === 16 ? js(N, 44, e) : Ks(N, 44, e), h;
}
function je(e, t, r) {
  for (let o = 0; o < r.length; o++)
    e.setUint8(t + o, r.charCodeAt(o));
}
function Hs(e, t, r) {
  for (let o = 0; o < r.length; o++, t++) {
    let a = Math.max(-1, Math.min(1, r[o])), i = a < 0 ? a * 32768 : a * 32767;
    i = parseInt("" + 255 / (65535 / (i + 32768))), e.setInt8(t, i, !0);
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
    return t.replace(o, (a, i) => Rn(r, i, i));
  }
  /**
   * 合并多个 arrayBuffers 对象
   * @param arrayBuffers
   * @returns 合并后的单独arrayBuffers对象
   */
  mergeArrayBuffers(t) {
    const r = t.reduce((l, h) => l + h.byteLength, 0), o = new ArrayBuffer(r), a = new Uint8Array(o);
    let i = 0;
    return t.forEach((l) => {
      const h = new Uint8Array(l);
      a.set(h, i), i += l.byteLength;
    }), o;
  }
  mergeAudioBuffers(t) {
    let r = t.map((o) => new AudioContext().decodeAudioData(o));
    return Promise.all(r).then((o) => {
      let a = new AudioContext(), i = o.reduce((G, b) => G + b.length, 0), l = a.createBuffer(1, i, o[0].sampleRate), h = l.getChannelData(0), N = 0;
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
    const a = parseInt(o[1], 10), i = parseInt(o[2], 10), l = parseInt(o[3], 10), h = parseInt(o[4], 10);
    return (a * 3600 + i * 60 + l) * 1e3 + h;
  }
  /** 将Edge输出的时间转为 hh:mm:ss,sss */
  convertNumberToTime(t) {
    const r = t / 1e7, o = Math.floor(r / 3600), a = Math.floor(r % 3600 / 60), i = Math.floor(r % 60), l = Math.floor((r - Math.floor(r)) * 1e3);
    return (o < 10 ? "0" + o : o) + ":" + (a < 10 ? "0" + a : a) + ":" + (i < 10 ? "0" + i : i) + "," + (l < 10 ? "00" + l : l < 100 ? "0" + l : l);
  }
}
class Xs {
  constructor() {
    le(this, "voiceMap");
    le(this, "utils", new Ws());
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
    const o = ye(r, {
      timeout: 3e4,
      roleVoice: ve,
      onMessage: () => {
      }
    }), { timeout: a, roleVoice: i, onMessage: l } = o, h = this.textToSsml(t, i);
    return new Promise((N) => {
      let G;
      const b = [], T = "6A5AA1D4EAFF4E9FB37E23D68491D6F4", O = this.utils.getUuid(), g = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?${new URLSearchParams({ TrustedClientToken: T, ConnectionId: O }).toString()}`, v = new WebSocket(g);
      v.binaryType = "arraybuffer";
      const M = JSON.stringify({
        context: {
          synthesis: {
            audio: {
              metadataoptions: { sentenceBoundaryEnabled: "false", wordBoundaryEnabled: "true" },
              outputFormat: "webm-24khz-16bit-mono-opus"
            }
          }
        }
      }), x = `X-Timestamp:${/* @__PURE__ */ new Date()}\r
Content-Type:application/json; charset=utf-8\r
Path:speech.config\r
\r
${M}`, F = `X-RequestId:${this.utils.getUuid()}\r
Content-Type:application/ssml+xml\r
X-Timestamp:${/* @__PURE__ */ new Date()}\r
Path:ssml\r
\r
${h}`, A = () => {
        v && v.readyState == 1 && (v.send(new ArrayBuffer(0)), v.close(), N({ error: new Error("意外停止"), data: null }));
      }, L = () => {
        G && clearTimeout(G), G = setTimeout(() => A(), a);
      };
      v.onopen = () => {
        v.send(x), v.send(F), L();
      }, v.onerror = (y) => N({ error: y, data: null }), v.onclose = (y) => N({ error: y, data: null });
      let f = 0;
      v.onmessage = (y) => {
        if (L(), y.data instanceof ArrayBuffer) {
          const s = new DataView(y.data), p = s.getInt16(0);
          if (y.data.byteLength < p + 2)
            throw new Error("Invalid binary message format. Header content missing.");
          for (var c = "", d = 0; d < p; d++)
            c += String.fromCharCode(s.getInt8(d + 2));
          y.data.byteLength > p + 2 && b.push(y.data.slice(2 + p));
        } else if (y.data.indexOf("turn.end") !== -1)
          De(Ue(b)).then((s) => {
            const p = He(s);
            N({ error: !1, data: { buffers: p, array_buffers: b, audio: new Ze(p) } });
          }), l(null);
        else {
          const s = JSON.parse(y.data.split(`\r
\r
`)[1]);
          if (s != null && s.Metadata && s.Metadata[0].Type === "WordBoundary") {
            const {
              Duration: p,
              Offset: C,
              text: { Text: R }
            } = s.Metadata[0].Data;
            f++, l({ index: f, text: R, offset: C, duration: p, time: C + p, ssml: h });
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
        const { text: b, offset: T, time: O, index: _, ssml: g } = G;
        N.start === -1 && (N.start = T), N.end = h, h !== 0 && T - h > 1e6 ? (N.text.trim() || (N.text = b), o[l].push(N), N = {
          ...r,
          text: b,
          start: T,
          index: N.index + 1
        }) : N.text = N.text + b, h = O;
      };
    }, i = async (l) => {
      if (console.log("srt_list", o), o.length === 0)
        return { srt: [], srt_text: "" };
      const h = [];
      let N = null, G = 0, b = -1;
      for (let _ = 0; _ < o.length; _++) {
        const g = o[_];
        for (let v = 0; v < g.length; v++) {
          const S = g[v];
          if (b++, _ === 0) {
            h.push({ ...S, start: S.start, end: S.end, index: b });
            continue;
          }
          if (_ > 0 && v === 0) {
            N = h[h.length - 1];
            const A = Ue(l[_ - 1]), L = await De(A).then((s) => He(s)), f = await this.utils.getBufferDuration(L), y = Math.ceil(f * 10 * 1e3 * 1e3), c = o[_ - 1][o[_ - 1].length - 1], d = y - c.end;
            G = N.end + Math.max(d, 0);
          }
          const M = S.end - S.start, x = G + S.start, F = G + S.start + M;
          h.push({ ...S, start: x, end: F, index: b });
        }
      }
      const T = h.map((_, g) => {
        const v = this.utils.convertNumberToTime(_.start);
        let S = _.end + 0.6 * 1e3 * 1e3 * 10;
        g < h.length - 1 && (S = Math.min(S, h[g + 1].start));
        const M = this.utils.convertNumberToTime(S);
        return { ..._, start: v, end: M };
      }), O = T.map((_) => `${_.index}
${_.start} --> ${_.end}
${_.text}`).join(`

`);
      return { srt: T, srt_text: O };
    };
    return Promise.all(t.map((l, h) => this.core(l, { onMessage: a(h) }))).then(async (l) => {
      const h = l.map((O) => {
        var _;
        return (_ = O.data) == null ? void 0 : _.array_buffers;
      }), { srt: N, srt_text: G } = await i(h), b = await De(Ue(h.flat(1))).then((O) => He(O)), T = this.utils.arrayBufferToBlob([b]);
      return { buffers: b, blob: T, srt: N, srt_text: G, array_buffers: h, audio: new Ze(b) };
    });
  }
  /** 合并 ArrayBuffer 音频 到 AudioBuffer, blob */
  async mergeArrayBuffers(t) {
    const r = await De(Ue(t.flat(1))).then((a) => He(a)), o = this.utils.arrayBufferToBlob([r]);
    return { buffers: r, blob: o, audio: new Ze(r) };
  }
  /**
   * SSML进行多次配音，要求符合SSML规则 speak.voice[10].prosody.朗读内容， voice可为多个，每个voice中只能出现一个prosody，不允许出现其他的节点
   * @param textOrSsml
   * @param _option
   */
  speak(t, r = {}) {
    var b;
    const o = ye(r, {
      roleVoice: ve
    }), { roleVoice: a } = o, i = this.textToSsml(t, a), h = new DOMParser().parseFromString(i, "text/xml"), N = [];
    return Array.from(((b = h.querySelector("speak")) == null ? void 0 : b.childNodes) || []).forEach((T) => {
      var v;
      const O = ((v = T.textContent) == null ? void 0 : v.trim()) || "";
      if (!O.trim())
        return;
      const _ = T.querySelector("prosody"), g = ye(
        { name: T.getAttribute("name"), rate: _ == null ? void 0 : _.getAttribute("rate"), content: O },
        a
      );
      N.push(g);
    }), this.speakArray(N);
  }
  mergeRole(t) {
    if (t.length === 0)
      return [];
    const r = [];
    let o = t[0];
    for (let a = 1; a < t.length; a++) {
      const i = t[a];
      o.name === i.name && o.rate === i.rate && o.volume === i.volume ? o.content = `${o.content} ${i.content}` : (r.push(o), o = i);
    }
    return r.push(o), r;
  }
  speakArray(t) {
    const a = this.mergeRole(t).map((i) => i.content.length <= 1e3 ? this.textToSsml(i.content, ye(i, ve)) : this.textSplit(i.content, 1e3).map((h) => this.textToSsml(h, ye(i, ve))));
    return this.batchSsml(a.flat());
  }
  async speakLongText(t, r = {}) {
    const o = ye(r, {
      roleVoice: ve,
      onPlay: () => {
      }
    }), { roleVoice: a, onPlay: i } = o;
    let l = 0, h = 0, N = !1, G = "", b, T, O, _;
    const g = this.textSplit(t, 50), v = [...g], S = async () => new Promise((A) => {
      let L;
      const f = () => {
        L = setTimeout(() => {
          N ? f() : (clearTimeout(L), A(!0));
        }, 100);
      };
      f();
    }), M = () => {
      T.stop(), O && clearTimeout(O), _ && clearTimeout(_);
    }, x = async () => {
      if (N && await S(), b.byteLength === 0)
        return;
      const A = new AudioContext(), L = A.createGain(), f = A.createBufferSource();
      f.connect(L), L.gain.value = 0.5, L.connect(A.destination);
      const y = () => a.rate < 1 ? (1 + a.rate) * -0.5 : a.rate === 1 ? -0.5 : (a.rate - 1) * -0.5;
      A.decodeAudioData(b, (c) => {
        i({ audioContext: A, audioSource: f, buffer: c, text: G, start_index: l, end_index: h, onStop: M }), l = h, T = f, f.buffer = c, f.start(), O = setTimeout(() => F(), (c.duration - 5) * 1e3), _ = setTimeout(() => x(), (c.duration + y()) * 1e3);
      });
    }, F = async (A = 3) => {
      if (g.length === 0)
        return;
      N = !0, G = g.shift(), h += G.length;
      const { error: L, data: f } = await this.core(G, { roleVoice: a });
      if (N = !1, L)
        return A > 1 ? await F(A - 1) : void 0;
      b = f.buffers;
    };
    return F().then((A) => {
      x();
    }), { onStop: M, text_list: v };
  }
}
class Ze {
  constructor(t) {
    le(this, "audioContext");
    le(this, "audioSource");
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
var Qs = { icon: "", name: "TTS", description: "文本转音频，生成字幕，不限字数", version: "1.0.3" };
const { defineComponent: el } = __Context.vue, { toDisplayString: Se, createElementVNode: ue, resolveComponent: we, withCtx: ae, createVNode: ce, createTextVNode: tl, renderList: Nr, Fragment: gr, openBlock: Ce, createElementBlock: Te, vShow: rl, withDirectives: ol, unref: al, createCommentVNode: nl, normalizeClass: il } = __Context.vue, sl = { class: "w-full m-auto h-full flex flex-col md:flex-row! space-y-2 md:space-y-0! md:space-x-2 p2 scrollbar-y" }, ll = { class: "flex-auto min-h-[500px] md:flex-1 wh-full rounded-md" }, cl = { class: "font-mono font-bold absolute bottom-0 right-5 text-gray-400 truncate" }, ul = { class: "w-full md:w80 h-full overflow-visible md:overflow-hidden" }, dl = { class: "text-xs font-mono text-gray-500" }, hl = { class: "pb1 select-text" }, ml = { class: "w-full md:w80 h-full" }, fl = { class: "font-mono text-gray-300" }, Sl = { key: 0 }, pl = /* @__PURE__ */ ue("div", { class: "text-gray-500" }, "空", -1), Nl = [
  pl
], gl = ["onClick"], { ref: Ke, computed: yl, shallowRef: Cl, triggerRef: Tl } = __Context.vue, vl = /* @__PURE__ */ el({
  __name: "Page",
  setup(e) {
    const t = Qs, r = new Xs(), o = Ke(""), a = yl(() => {
      const S = o.value;
      return S.length > 10 ? S.slice(0, 10) : S;
    }), i = Ke(1e5), l = Ke(null), h = Cl([]), N = [];
    let G = null;
    const b = () => {
      try {
        N.forEach((S) => S()), N.splice(0, N.length);
      } catch {
      }
    }, T = (S) => {
      b(), console.log("gAudio", G), G = S, G.play(), N.push(() => G && !G.closed && G.stop());
    }, O = Ke({ show: !0, name: ve.name, volume: 100, rate: 1 }), _ = [
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
          onClick(S, M) {
            M.customAttrs.value.loading = !0, o.value = o.value.trim();
            const F = { ...O.value, text: o.value, textName: a.value }, A = JSON.stringify(F), L = h.value.findIndex((c) => c.key === A);
            if (console.log("key", A, L, h.value), L !== -1) {
              l.value = h.value[L];
              const { buffers: c } = h.value[L].output, d = new Ze(c);
              return T(d), M.customAttrs.value.loading = !1, { buffers: c, audio: d };
            }
            const f = o.value || "请输入需要转语言的文本...", y = r.textSplit(f, 2e3).map((c) => ({ ...O.value, content: c }));
            r.speakArray(y).then((c) => {
              console.log("res", c), T(c.audio), h.value.push({ key: A, output: c, input: F }), l.value = h.value[h.value.length - 1], Tl(h);
            }).catch((c) => {
              throw c;
            }).finally(() => {
              M.customAttrs.value.loading = !1;
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
          onClick(S, M) {
            l.value && or(l.value.output.blob, `${l.value.input.textName}.wav`);
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
          onClick(S, M) {
            b(), M.customAttrs.value.loading = !0, o.value = o.value.trim();
            const x = o.value || "请输入需要转语言的文本...";
            r.speakLongText(x, { roleVoice: O.value }).then((F) => {
              console.log(F.text_list), N.push(F.onStop), M.customAttrs.value.loading = !1;
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
          onClick(S, M) {
            b();
          }
        },
        value: ""
      }
    ], g = () => {
      l.value && or(new Blob([l.value.output.srt_text], { type: "text/plain" }), `${l.value.input.textName}.srt`);
    }, v = (S) => {
      l.value = S, ["name", "volume", "rate"].forEach((M) => di(O.value, M, S.input[M])), o.value = S.input.text ?? "";
    };
    return (S, M) => {
      var y, c;
      const x = we("n-input"), F = we("n-button"), A = we("n-scrollbar"), L = we("n-card"), f = we("i-setting");
      return Ce(), Te("div", sl, [
        ue("div", ll, [
          ce(x, {
            round: "",
            class: "h-full resize-none",
            "show-count": "",
            type: "textarea",
            "default-value": "",
            value: o.value,
            "onUpdate:value": M[0] || (M[0] = (d) => o.value = d),
            maxlength: i.value,
            placeholder: "请输入需要转语言的文本..."
          }, {
            count: ae(({ value: d }) => [
              ue("span", cl, Se(d.length) + " / " + Se(i.value), 1)
            ]),
            _: 1
          }, 8, ["value", "maxlength"])
        ]),
        ol(ue("div", ul, [
          ce(L, {
            class: "flex flex-col flex-1 wh-full overflow-hidden",
            title: "字幕",
            "content-class": "flex-1 h-full pb2 overflow-hidden"
          }, {
            "header-extra": ae(() => [
              ce(F, { onClick: g }, {
                default: ae(() => [
                  tl("下载字幕")
                ]),
                _: 1
              })
            ]),
            default: ae(() => [
              ce(A, { class: "h-full" }, {
                default: ae(() => {
                  var d;
                  return [
                    (Ce(!0), Te(gr, null, Nr((d = l.value) == null ? void 0 : d.output.srt, (s) => (Ce(), Te("div", {
                      key: s.index
                    }, [
                      ue("div", dl, Se(s.start) + " -> " + Se(s.end), 1),
                      ue("div", hl, Se(s.text), 1)
                    ]))), 128))
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          })
        ], 512), [
          [rl, l.value && ((c = (y = l.value) == null ? void 0 : y.output) == null ? void 0 : c.srt.length) > 0 && O.value.show]
        ]),
        ue("div", ml, [
          ce(A, { class: "h-full" }, {
            default: ae(() => [
              ce(L, {
                class: "",
                title: "操作"
              }, {
                "header-extra": ae(() => [
                  ue("span", fl, Se(al(t).version), 1)
                ]),
                default: ae(() => [
                  ce(f, {
                    settings: _,
                    modelValue: O.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (d) => O.value = d)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              ce(L, {
                class: "flex flex-col mt-2 min-h10 overflow-hidden",
                title: "历史",
                "content-class": "flex-1 h-full pb2 overflow-hidden"
              }, {
                default: ae(() => [
                  ce(A, { class: "h-full" }, {
                    default: ae(() => [
                      h.value.length === 0 ? (Ce(), Te("div", Sl, Nl)) : nl("", !0),
                      (Ce(!0), Te(gr, null, Nr(h.value, (d) => {
                        var s;
                        return Ce(), Te("div", {
                          key: d.input
                        }, [
                          ue("div", {
                            class: il(["hover:underline", [((s = l.value) == null ? void 0 : s.key) === d.key ? "text-blue-400 hover:text-blue-500" : "text-gray-500 hover:text-gray-700"]]),
                            onClick: (p) => v(d)
                          }, Se(d.input.textName), 11, gl)
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
var yr = { icon: "", name: "TTS", description: "文本转音频，生成字幕，不限字数", version: "1.0.3" };
class bl {
  constructor() {
    le(this, "icon", "");
    le(this, "name", yr.name);
    le(this, "description", yr.description);
    le(this, "isUninstallReload", !1);
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
      component: vl
    };
    t.usePage(r);
  }
  uninstall() {
    console.log("uninstall");
  }
}
const Gl = new bl();
export {
  Gl as default
};
