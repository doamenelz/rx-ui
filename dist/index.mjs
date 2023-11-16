import ka from "react";
var Sp = {}, o0 = { exports: {} }, $r = {}, wm = { exports: {} }, l0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YE;
function Fk() {
  return YE || (YE = 1, function(B) {
    function Te($, me) {
      var K = $.length;
      $.push(me);
      e:
        for (; 0 < K; ) {
          var Ie = K - 1 >>> 1, qe = $[Ie];
          if (0 < It(qe, me))
            $[Ie] = me, $[K] = qe, K = Ie;
          else
            break e;
        }
    }
    function L($) {
      return $.length === 0 ? null : $[0];
    }
    function nn($) {
      if ($.length === 0)
        return null;
      var me = $[0], K = $.pop();
      if (K !== me) {
        $[0] = K;
        e:
          for (var Ie = 0, qe = $.length, Bn = qe >>> 1; Ie < Bn; ) {
            var ir = 2 * (Ie + 1) - 1, ii = $[ir], bn = ir + 1, li = $[bn];
            if (0 > It(ii, K))
              bn < qe && 0 > It(li, ii) ? ($[Ie] = li, $[bn] = K, Ie = bn) : ($[Ie] = ii, $[ir] = K, Ie = ir);
            else if (bn < qe && 0 > It(li, K))
              $[Ie] = li, $[bn] = K, Ie = bn;
            else
              break e;
          }
      }
      return me;
    }
    function It($, me) {
      var K = $.sortIndex - me.sortIndex;
      return K !== 0 ? K : $.id - me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ye = performance;
      B.unstable_now = function() {
        return Ye.now();
      };
    } else {
      var g = Date, ht = g.now();
      B.unstable_now = function() {
        return g.now() - ht;
      };
    }
    var xe = [], de = [], rn = 1, ie = null, he = 3, le = !1, _e = !1, et = !1, lt = typeof setTimeout == "function" ? setTimeout : null, Gr = typeof clearTimeout == "function" ? clearTimeout : null, mn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ze($) {
      for (var me = L(de); me !== null; ) {
        if (me.callback === null)
          nn(de);
        else if (me.startTime <= $)
          nn(de), me.sortIndex = me.expirationTime, Te(xe, me);
        else
          break;
        me = L(de);
      }
    }
    function ut($) {
      if (et = !1, ze($), !_e)
        if (L(xe) !== null)
          _e = !0, Et(Ue);
        else {
          var me = L(de);
          me !== null && Cr(ut, me.startTime - $);
        }
    }
    function Ue($, me) {
      _e = !1, et && (et = !1, Gr(kn), kn = -1), le = !0;
      var K = he;
      try {
        for (ze(me), ie = L(xe); ie !== null && (!(ie.expirationTime > me) || $ && !it()); ) {
          var Ie = ie.callback;
          if (typeof Ie == "function") {
            ie.callback = null, he = ie.priorityLevel;
            var qe = Ie(ie.expirationTime <= me);
            me = B.unstable_now(), typeof qe == "function" ? ie.callback = qe : ie === L(xe) && nn(xe), ze(me);
          } else
            nn(xe);
          ie = L(xe);
        }
        if (ie !== null)
          var Bn = !0;
        else {
          var ir = L(de);
          ir !== null && Cr(ut, ir.startTime - me), Bn = !1;
        }
        return Bn;
      } finally {
        ie = null, he = K, le = !1;
      }
    }
    var mt = !1, be = null, kn = -1, ar = 5, Ot = -1;
    function it() {
      return !(B.unstable_now() - Ot < ar);
    }
    function Vn() {
      if (be !== null) {
        var $ = B.unstable_now();
        Ot = $;
        var me = !0;
        try {
          me = be(!0, $);
        } finally {
          me ? Ae() : (mt = !1, be = null);
        }
      } else
        mt = !1;
    }
    var Ae;
    if (typeof mn == "function")
      Ae = function() {
        mn(Vn);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), Sr = Xe.port2;
      Xe.port1.onmessage = Vn, Ae = function() {
        Sr.postMessage(null);
      };
    } else
      Ae = function() {
        lt(Vn, 0);
      };
    function Et($) {
      be = $, mt || (mt = !0, Ae());
    }
    function Cr($, me) {
      kn = lt(function() {
        $(B.unstable_now());
      }, me);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function($) {
      $.callback = null;
    }, B.unstable_continueExecution = function() {
      _e || le || (_e = !0, Et(Ue));
    }, B.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ar = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return he;
    }, B.unstable_getFirstCallbackNode = function() {
      return L(xe);
    }, B.unstable_next = function($) {
      switch (he) {
        case 1:
        case 2:
        case 3:
          var me = 3;
          break;
        default:
          me = he;
      }
      var K = he;
      he = me;
      try {
        return $();
      } finally {
        he = K;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function($, me) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var K = he;
      he = $;
      try {
        return me();
      } finally {
        he = K;
      }
    }, B.unstable_scheduleCallback = function($, me, K) {
      var Ie = B.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? Ie + K : Ie) : K = Ie, $) {
        case 1:
          var qe = -1;
          break;
        case 2:
          qe = 250;
          break;
        case 5:
          qe = 1073741823;
          break;
        case 4:
          qe = 1e4;
          break;
        default:
          qe = 5e3;
      }
      return qe = K + qe, $ = { id: rn++, callback: me, priorityLevel: $, startTime: K, expirationTime: qe, sortIndex: -1 }, K > Ie ? ($.sortIndex = K, Te(de, $), L(xe) === null && $ === L(de) && (et ? (Gr(kn), kn = -1) : et = !0, Cr(ut, K - Ie))) : ($.sortIndex = qe, Te(xe, $), _e || le || (_e = !0, Et(Ue))), $;
    }, B.unstable_shouldYield = it, B.unstable_wrapCallback = function($) {
      var me = he;
      return function() {
        var K = he;
        he = me;
        try {
          return $.apply(this, arguments);
        } finally {
          he = K;
        }
      };
    };
  }(l0)), l0;
}
var u0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $E;
function jk() {
  return $E || ($E = 1, function(B) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Te = !1, L = !1, nn = 5;
      function It(Q, ce) {
        var Me = Q.length;
        Q.push(ce), ht(Q, ce, Me);
      }
      function Ye(Q) {
        return Q.length === 0 ? null : Q[0];
      }
      function g(Q) {
        if (Q.length === 0)
          return null;
        var ce = Q[0], Me = Q.pop();
        return Me !== ce && (Q[0] = Me, xe(Q, Me, 0)), ce;
      }
      function ht(Q, ce, Me) {
        for (var tt = Me; tt > 0; ) {
          var bt = tt - 1 >>> 1, gn = Q[bt];
          if (de(gn, ce) > 0)
            Q[bt] = ce, Q[tt] = gn, tt = bt;
          else
            return;
        }
      }
      function xe(Q, ce, Me) {
        for (var tt = Me, bt = Q.length, gn = bt >>> 1; tt < gn; ) {
          var jt = (tt + 1) * 2 - 1, Rr = Q[jt], Tt = jt + 1, fa = Q[Tt];
          if (de(Rr, ce) < 0)
            Tt < bt && de(fa, Rr) < 0 ? (Q[tt] = fa, Q[Tt] = ce, tt = Tt) : (Q[tt] = Rr, Q[jt] = ce, tt = jt);
          else if (Tt < bt && de(fa, ce) < 0)
            Q[tt] = fa, Q[Tt] = ce, tt = Tt;
          else
            return;
        }
      }
      function de(Q, ce) {
        var Me = Q.sortIndex - ce.sortIndex;
        return Me !== 0 ? Me : Q.id - ce.id;
      }
      var rn = 1, ie = 2, he = 3, le = 4, _e = 5;
      function et(Q, ce) {
      }
      var lt = typeof performance == "object" && typeof performance.now == "function";
      if (lt) {
        var Gr = performance;
        B.unstable_now = function() {
          return Gr.now();
        };
      } else {
        var mn = Date, ze = mn.now();
        B.unstable_now = function() {
          return mn.now() - ze;
        };
      }
      var ut = 1073741823, Ue = -1, mt = 250, be = 5e3, kn = 1e4, ar = ut, Ot = [], it = [], Vn = 1, Ae = null, Xe = he, Sr = !1, Et = !1, Cr = !1, $ = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ie(Q) {
        for (var ce = Ye(it); ce !== null; ) {
          if (ce.callback === null)
            g(it);
          else if (ce.startTime <= Q)
            g(it), ce.sortIndex = ce.expirationTime, It(Ot, ce);
          else
            return;
          ce = Ye(it);
        }
      }
      function qe(Q) {
        if (Cr = !1, Ie(Q), !Et)
          if (Ye(Ot) !== null)
            Et = !0, si(Bn);
          else {
            var ce = Ye(it);
            ce !== null && Yn(qe, ce.startTime - Q);
          }
      }
      function Bn(Q, ce) {
        Et = !1, Cr && (Cr = !1, qr()), Sr = !0;
        var Me = Xe;
        try {
          var tt;
          if (!L)
            return ir(Q, ce);
        } finally {
          Ae = null, Xe = Me, Sr = !1;
        }
      }
      function ir(Q, ce) {
        var Me = ce;
        for (Ie(Me), Ae = Ye(Ot); Ae !== null && !Te && !(Ae.expirationTime > Me && (!Q || Fl())); ) {
          var tt = Ae.callback;
          if (typeof tt == "function") {
            Ae.callback = null, Xe = Ae.priorityLevel;
            var bt = Ae.expirationTime <= Me, gn = tt(bt);
            Me = B.unstable_now(), typeof gn == "function" ? Ae.callback = gn : Ae === Ye(Ot) && g(Ot), Ie(Me);
          } else
            g(Ot);
          Ae = Ye(Ot);
        }
        if (Ae !== null)
          return !0;
        var jt = Ye(it);
        return jt !== null && Yn(qe, jt.startTime - Me), !1;
      }
      function ii(Q, ce) {
        switch (Q) {
          case rn:
          case ie:
          case he:
          case le:
          case _e:
            break;
          default:
            Q = he;
        }
        var Me = Xe;
        Xe = Q;
        try {
          return ce();
        } finally {
          Xe = Me;
        }
      }
      function bn(Q) {
        var ce;
        switch (Xe) {
          case rn:
          case ie:
          case he:
            ce = he;
            break;
          default:
            ce = Xe;
            break;
        }
        var Me = Xe;
        Xe = ce;
        try {
          return Q();
        } finally {
          Xe = Me;
        }
      }
      function li(Q) {
        var ce = Xe;
        return function() {
          var Me = Xe;
          Xe = ce;
          try {
            return Q.apply(this, arguments);
          } finally {
            Xe = Me;
          }
        };
      }
      function Ir(Q, ce, Me) {
        var tt = B.unstable_now(), bt;
        if (typeof Me == "object" && Me !== null) {
          var gn = Me.delay;
          typeof gn == "number" && gn > 0 ? bt = tt + gn : bt = tt;
        } else
          bt = tt;
        var jt;
        switch (Q) {
          case rn:
            jt = Ue;
            break;
          case ie:
            jt = mt;
            break;
          case _e:
            jt = ar;
            break;
          case le:
            jt = kn;
            break;
          case he:
          default:
            jt = be;
            break;
        }
        var Rr = bt + jt, Tt = {
          id: Vn++,
          callback: ce,
          priorityLevel: Q,
          startTime: bt,
          expirationTime: Rr,
          sortIndex: -1
        };
        return bt > tt ? (Tt.sortIndex = bt, It(it, Tt), Ye(Ot) === null && Tt === Ye(it) && (Cr ? qr() : Cr = !0, Yn(qe, bt - tt))) : (Tt.sortIndex = Rr, It(Ot, Tt), !Et && !Sr && (Et = !0, si(Bn))), Tt;
      }
      function sa() {
      }
      function Bu() {
        !Et && !Sr && (Et = !0, si(Bn));
      }
      function Er() {
        return Ye(Ot);
      }
      function ba(Q) {
        Q.callback = null;
      }
      function yn() {
        return Xe;
      }
      var Pn = !1, Tr = null, Wr = -1, lr = nn, _a = -1;
      function Fl() {
        var Q = B.unstable_now() - _a;
        return !(Q < lr);
      }
      function Gi() {
      }
      function ui(Q) {
        if (Q < 0 || Q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Q > 0 ? lr = Math.floor(1e3 / Q) : lr = nn;
      }
      var Ii = function() {
        if (Tr !== null) {
          var Q = B.unstable_now();
          _a = Q;
          var ce = !0, Me = !0;
          try {
            Me = Tr(ce, Q);
          } finally {
            Me ? Xr() : (Pn = !1, Tr = null);
          }
        } else
          Pn = !1;
      }, Xr;
      if (typeof K == "function")
        Xr = function() {
          K(Ii);
        };
      else if (typeof MessageChannel < "u") {
        var oi = new MessageChannel(), ca = oi.port2;
        oi.port1.onmessage = Ii, Xr = function() {
          ca.postMessage(null);
        };
      } else
        Xr = function() {
          $(Ii, 0);
        };
      function si(Q) {
        Tr = Q, Pn || (Pn = !0, Xr());
      }
      function Yn(Q, ce) {
        Wr = $(function() {
          Q(B.unstable_now());
        }, ce);
      }
      function qr() {
        me(Wr), Wr = -1;
      }
      var Pu = Gi, ci = null;
      B.unstable_IdlePriority = _e, B.unstable_ImmediatePriority = rn, B.unstable_LowPriority = le, B.unstable_NormalPriority = he, B.unstable_Profiling = ci, B.unstable_UserBlockingPriority = ie, B.unstable_cancelCallback = ba, B.unstable_continueExecution = Bu, B.unstable_forceFrameRate = ui, B.unstable_getCurrentPriorityLevel = yn, B.unstable_getFirstCallbackNode = Er, B.unstable_next = bn, B.unstable_pauseExecution = sa, B.unstable_requestPaint = Pu, B.unstable_runWithPriority = ii, B.unstable_scheduleCallback = Ir, B.unstable_shouldYield = Fl, B.unstable_wrapCallback = li, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(u0)), u0;
}
var QE;
function XE() {
  return QE || (QE = 1, process.env.NODE_ENV === "production" ? wm.exports = Fk() : wm.exports = jk()), wm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GE;
function Vk() {
  if (GE)
    return $r;
  GE = 1;
  var B = ka, Te = XE();
  function L(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var nn = /* @__PURE__ */ new Set(), It = {};
  function Ye(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (It[n] = r, n = 0; n < r.length; n++)
      nn.add(r[n]);
  }
  var ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xe = Object.prototype.hasOwnProperty, de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, rn = {}, ie = {};
  function he(n) {
    return xe.call(ie, n) ? !0 : xe.call(rn, n) ? !1 : de.test(n) ? ie[n] = !0 : (rn[n] = !0, !1);
  }
  function le(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function _e(n, r, l, o) {
    if (r === null || typeof r > "u" || le(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function et(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var lt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    lt[n] = new et(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    lt[r] = new et(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    lt[n] = new et(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    lt[n] = new et(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    lt[n] = new et(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    lt[n] = new et(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    lt[n] = new et(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    lt[n] = new et(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    lt[n] = new et(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Gr = /[\-:]([a-z])/g;
  function mn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Gr,
      mn
    );
    lt[r] = new et(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Gr, mn);
    lt[r] = new et(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Gr, mn);
    lt[r] = new et(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    lt[n] = new et(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), lt.xlinkHref = new et("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    lt[n] = new et(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ze(n, r, l, o) {
    var c = lt.hasOwnProperty(r) ? lt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (_e(r, l, c, o) && (l = null), o || c === null ? he(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ut = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ue = Symbol.for("react.element"), mt = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), kn = Symbol.for("react.strict_mode"), ar = Symbol.for("react.profiler"), Ot = Symbol.for("react.provider"), it = Symbol.for("react.context"), Vn = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), Sr = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), Cr = Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function me(n) {
    return n === null || typeof n != "object" ? null : (n = $ && n[$] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = Object.assign, Ie;
  function qe(n) {
    if (Ie === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        Ie = r && r[1] || "";
      }
    return `
` + Ie + n;
  }
  var Bn = !1;
  function ir(n, r) {
    if (!n || Bn)
      return "";
    Bn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (M) {
            var o = M;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (M) {
            o = M;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (M) {
          o = M;
        }
        n();
      }
    } catch (M) {
      if (M && o && typeof M.stack == "string") {
        for (var c = M.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, S = d.length - 1; 1 <= h && 0 <= S && c[h] !== d[S]; )
          S--;
        for (; 1 <= h && 0 <= S; h--, S--)
          if (c[h] !== d[S]) {
            if (h !== 1 || S !== 1)
              do
                if (h--, S--, 0 > S || c[h] !== d[S]) {
                  var C = `
` + c[h].replace(" at new ", " at ");
                  return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C;
                }
              while (1 <= h && 0 <= S);
            break;
          }
      }
    } finally {
      Bn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? qe(n) : "";
  }
  function ii(n) {
    switch (n.tag) {
      case 5:
        return qe(n.type);
      case 16:
        return qe("Lazy");
      case 13:
        return qe("Suspense");
      case 19:
        return qe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ir(n.type, !1), n;
      case 11:
        return n = ir(n.type.render, !1), n;
      case 1:
        return n = ir(n.type, !0), n;
      default:
        return "";
    }
  }
  function bn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case be:
        return "Fragment";
      case mt:
        return "Portal";
      case ar:
        return "Profiler";
      case kn:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case Xe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case it:
          return (n.displayName || "Context") + ".Consumer";
        case Ot:
          return (n._context.displayName || "Context") + ".Provider";
        case Vn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Sr:
          return r = n.displayName || null, r !== null ? r : bn(n.type) || "Memo";
        case Et:
          r = n._payload, n = n._init;
          try {
            return bn(n(r));
          } catch {
          }
      }
    return null;
  }
  function li(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return bn(r);
      case 8:
        return r === kn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Ir(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function sa(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bu(n) {
    var r = sa(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Er(n) {
    n._valueTracker || (n._valueTracker = Bu(n));
  }
  function ba(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = sa(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function yn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Pn(n, r) {
    var l = r.checked;
    return K({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Tr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Ir(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wr(n, r) {
    r = r.checked, r != null && ze(n, "checked", r, !1);
  }
  function lr(n, r) {
    Wr(n, r);
    var l = Ir(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Fl(n, r.type, l) : r.hasOwnProperty("defaultValue") && Fl(n, r.type, Ir(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _a(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Fl(n, r, l) {
    (r !== "number" || yn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Gi = Array.isArray;
  function ui(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Ir(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ii(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(L(91));
    return K({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(L(92));
        if (Gi(l)) {
          if (1 < l.length)
            throw Error(L(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Ir(l) };
  }
  function oi(n, r) {
    var l = Ir(r.value), o = Ir(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function ca(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function si(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Yn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? si(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var qr, Pu = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (qr = qr || document.createElement("div"), qr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = qr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ci(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Q = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Q).forEach(function(n) {
    ce.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Q[r] = Q[n];
    });
  });
  function Me(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Q.hasOwnProperty(n) && Q[n] ? ("" + r).trim() : r + "px";
  }
  function tt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Me(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var bt = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function gn(n, r) {
    if (r) {
      if (bt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(L(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(L(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(L(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(L(62));
    }
  }
  function jt(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Rr = null;
  function Tt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var fa = null, Nt = null, Rt = null;
  function Cp(n) {
    if (n = vo(n)) {
      if (typeof fa != "function")
        throw Error(L(280));
      var r = n.stateNode;
      r && (r = oe(r), fa(n.stateNode, n.type, r));
    }
  }
  function ts(n) {
    Nt ? Rt ? Rt.push(n) : Rt = [n] : Nt = n;
  }
  function ns() {
    if (Nt) {
      var n = Nt, r = Rt;
      if (Rt = Nt = null, Cp(n), r)
        for (n = 0; n < r.length; n++)
          Cp(r[n]);
    }
  }
  function Ep(n, r) {
    return n(r);
  }
  function Tp() {
  }
  var rs = !1;
  function Kc(n, r, l) {
    if (rs)
      return n(r, l);
    rs = !0;
    try {
      return Ep(n, r, l);
    } finally {
      rs = !1, (Nt !== null || Rt !== null) && (Tp(), ns());
    }
  }
  function Yu(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = oe(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(L(231, r, typeof l));
    return l;
  }
  var as = !1;
  if (ht)
    try {
      var Wi = {};
      Object.defineProperty(Wi, "passive", { get: function() {
        as = !0;
      } }), window.addEventListener("test", Wi, Wi), window.removeEventListener("test", Wi, Wi);
    } catch {
      as = !1;
    }
  function jl(n, r, l, o, c, d, h, S, C) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, M);
    } catch (H) {
      this.onError(H);
    }
  }
  var Kr = !1, Ma = null, Vl = !1, $u = null, Zc = { onError: function(n) {
    Kr = !0, Ma = n;
  } };
  function Jc(n, r, l, o, c, d, h, S, C) {
    Kr = !1, Ma = null, jl.apply(Zc, arguments);
  }
  function Bl(n, r, l, o, c, d, h, S, C) {
    if (Jc.apply(this, arguments), Kr) {
      if (Kr) {
        var M = Ma;
        Kr = !1, Ma = null;
      } else
        throw Error(L(198));
      Vl || (Vl = !0, $u = M);
    }
  }
  function da(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Qu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Pl(n) {
    if (da(n) !== n)
      throw Error(L(188));
  }
  function _n(n) {
    var r = n.alternate;
    if (!r) {
      if (r = da(n), r === null)
        throw Error(L(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Pl(c), n;
          if (d === o)
            return Pl(c), r;
          d = d.sibling;
        }
        throw Error(L(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var h = !1, S = c.child; S; ) {
          if (S === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            h = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = d.child; S; ) {
            if (S === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              h = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!h)
            throw Error(L(189));
        }
      }
      if (l.alternate !== o)
        throw Error(L(190));
    }
    if (l.tag !== 3)
      throw Error(L(188));
    return l.stateNode.current === l ? n : r;
  }
  function Rp(n) {
    return n = _n(n), n !== null ? xp(n) : null;
  }
  function xp(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = xp(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var ef = Te.unstable_scheduleCallback, wp = Te.unstable_cancelCallback, km = Te.unstable_shouldYield, bm = Te.unstable_requestPaint, xt = Te.unstable_now, _m = Te.unstable_getCurrentPriorityLevel, La = Te.unstable_ImmediatePriority, Le = Te.unstable_UserBlockingPriority, fi = Te.unstable_NormalPriority, Dp = Te.unstable_LowPriority, tf = Te.unstable_IdlePriority, Gu = null, Zr = null;
  function kp(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function")
      try {
        Zr.onCommitFiberRoot(Gu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var xr = Math.clz32 ? Math.clz32 : Mm, bp = Math.log, _p = Math.LN2;
  function Mm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (bp(n) / _p | 0) | 0;
  }
  var is = 64, Yl = 4194304;
  function Xi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Jr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = Xi(S) : (d &= h, d !== 0 && (o = Xi(d)));
    } else
      h = l & ~c, h !== 0 ? o = Xi(h) : d !== 0 && (o = Xi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - xr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function nf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ls(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - xr(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = nf(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function rf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function us() {
    var n = is;
    return is <<= 1, !(is & 4194240) && (is = 64), n;
  }
  function af(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function qi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - xr(r), n[r] = l;
  }
  function Lm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - xr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Iu(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - xr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var We = 0;
  function lf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Mp, os, nt, Lp, uf, Re = !1, Wu = [], zt = null, wr = null, Dr = null, Xu = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), Ke = [], Om = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ea(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        wr = null;
        break;
      case "mouseover":
      case "mouseout":
        Dr = null;
        break;
      case "pointerover":
      case "pointerout":
        Xu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vt.delete(r.pointerId);
    }
  }
  function Sn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = vo(r), r !== null && os(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function di(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return zt = Sn(zt, n, r, l, o, c), !0;
      case "dragenter":
        return wr = Sn(wr, n, r, l, o, c), !0;
      case "mouseover":
        return Dr = Sn(Dr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Xu.set(d, Sn(Xu.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Vt.set(d, Sn(Vt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Op(n) {
    var r = br(n.target);
    if (r !== null) {
      var l = da(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Qu(l), r !== null) {
            n.blockedOn = r, uf(n.priority, function() {
              nt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function $l(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = fs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Rr = o, l.target.dispatchEvent(o), Rr = null;
      } else
        return r = vo(l), r !== null && os(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function of(n, r, l) {
    $l(n) && l.delete(r);
  }
  function Np() {
    Re = !1, zt !== null && $l(zt) && (zt = null), wr !== null && $l(wr) && (wr = null), Dr !== null && $l(Dr) && (Dr = null), Xu.forEach(of), Vt.forEach(of);
  }
  function qu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Re || (Re = !0, Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Np)));
  }
  function Ku(n) {
    function r(c) {
      return qu(c, n);
    }
    if (0 < Wu.length) {
      qu(Wu[0], n);
      for (var l = 1; l < Wu.length; l++) {
        var o = Wu[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (zt !== null && qu(zt, n), wr !== null && qu(wr, n), Dr !== null && qu(Dr, n), Xu.forEach(r), Vt.forEach(r), l = 0; l < Ke.length; l++)
      o = Ke[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ke.length && (l = Ke[0], l.blockedOn === null); )
      Op(l), l.blockedOn === null && Ke.shift();
  }
  var Ql = ut.ReactCurrentBatchConfig, Ki = !0;
  function zp(n, r, l, o) {
    var c = We, d = Ql.transition;
    Ql.transition = null;
    try {
      We = 1, cs(n, r, l, o);
    } finally {
      We = c, Ql.transition = d;
    }
  }
  function ss(n, r, l, o) {
    var c = We, d = Ql.transition;
    Ql.transition = null;
    try {
      We = 4, cs(n, r, l, o);
    } finally {
      We = c, Ql.transition = d;
    }
  }
  function cs(n, r, l, o) {
    if (Ki) {
      var c = fs(n, r, l, o);
      if (c === null)
        Rs(n, r, o, Zu, l), ea(n, o);
      else if (di(c, n, r, l, o))
        o.stopPropagation();
      else if (ea(n, o), r & 4 && -1 < Om.indexOf(n)) {
        for (; c !== null; ) {
          var d = vo(c);
          if (d !== null && Mp(d), d = fs(n, r, l, o), d === null && Rs(n, r, o, Zu, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Rs(n, r, o, null, l);
    }
  }
  var Zu = null;
  function fs(n, r, l, o) {
    if (Zu = null, n = Tt(o), n = br(n), n !== null)
      if (r = da(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Qu(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Zu = n, null;
  }
  function sf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (_m()) {
          case La:
            return 1;
          case Le:
            return 4;
          case fi:
          case Dp:
            return 16;
          case tf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Oa = null, Ju = null, eo = null;
  function cf() {
    if (eo)
      return eo;
    var n, r = Ju, l = r.length, o, c = "value" in Oa ? Oa.value : Oa.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return eo = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Gl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function to() {
    return !0;
  }
  function Up() {
    return !1;
  }
  function ur(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? to : Up, this.isPropagationStopped = Up, this;
    }
    return K(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = to);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = to);
    }, persist: function() {
    }, isPersistent: to }), r;
  }
  var pi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ds = ur(pi), Il = K({}, pi, { view: 0, detail: 0 }), Ap = ur(Il), ps, ff, no, Wt = K({}, Il, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== no && (no && n.type === "mousemove" ? (ps = n.screenX - no.screenX, ff = n.screenY - no.screenY) : ff = ps = 0, no = n), ps);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ff;
  } }), vs = ur(Wt), Hp = K({}, Wt, { dataTransfer: 0 }), Fp = ur(Hp), Nm = K({}, Il, { relatedTarget: 0 }), vi = ur(Nm), df = K({}, pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jp = ur(df), zm = K({}, pi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Um = ur(zm), Am = K({}, pi, { data: 0 }), pf = ur(Am), vf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Vp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Bp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Bp[n]) ? !!r[n] : !1;
  }
  function hf() {
    return Pp;
  }
  var Na = K({}, Il, { key: function(n) {
    if (n.key) {
      var r = vf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Gl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Vp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hf, charCode: function(n) {
    return n.type === "keypress" ? Gl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Gl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hm = ur(Na), mf = K({}, Wt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hs = ur(mf), yf = K({}, Il, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hf }), Fm = ur(yf), ms = K({}, pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yp = ur(ms), $n = K({}, Wt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), za = ur($n), Ut = [9, 13, 27, 32], ta = ht && "CompositionEvent" in window, Zi = null;
  ht && "documentMode" in document && (Zi = document.documentMode);
  var ys = ht && "TextEvent" in window && !Zi, $p = ht && (!ta || Zi && 8 < Zi && 11 >= Zi), Wl = String.fromCharCode(32), Qp = !1;
  function Gp(n, r) {
    switch (n) {
      case "keyup":
        return Ut.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function gs(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Xl = !1;
  function jm(n, r) {
    switch (n) {
      case "compositionend":
        return gs(r);
      case "keypress":
        return r.which !== 32 ? null : (Qp = !0, Wl);
      case "textInput":
        return n = r.data, n === Wl && Qp ? null : n;
      default:
        return null;
    }
  }
  function Vm(n, r) {
    if (Xl)
      return n === "compositionend" || !ta && Gp(n, r) ? (n = cf(), eo = Ju = Oa = null, Xl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return $p && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Ip = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Wp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Ip[n.type] : r === "textarea";
  }
  function Xp(n, r, l, o) {
    ts(o), r = co(r, "onChange"), 0 < r.length && (l = new ds("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ro = null, ql = null;
  function Kl(n) {
    Ts(n, 0);
  }
  function Zl(n) {
    var r = eu(n);
    if (ba(r))
      return n;
  }
  function qp(n, r) {
    if (n === "change")
      return r;
  }
  var gf = !1;
  if (ht) {
    var Sf;
    if (ht) {
      var Cf = "oninput" in document;
      if (!Cf) {
        var Kp = document.createElement("div");
        Kp.setAttribute("oninput", "return;"), Cf = typeof Kp.oninput == "function";
      }
      Sf = Cf;
    } else
      Sf = !1;
    gf = Sf && (!document.documentMode || 9 < document.documentMode);
  }
  function Zp() {
    ro && (ro.detachEvent("onpropertychange", Jp), ql = ro = null);
  }
  function Jp(n) {
    if (n.propertyName === "value" && Zl(ql)) {
      var r = [];
      Xp(r, ql, n, Tt(n)), Kc(Kl, r);
    }
  }
  function Bm(n, r, l) {
    n === "focusin" ? (Zp(), ro = r, ql = l, ro.attachEvent("onpropertychange", Jp)) : n === "focusout" && Zp();
  }
  function Pm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Zl(ql);
  }
  function Ym(n, r) {
    if (n === "click")
      return Zl(r);
  }
  function ev(n, r) {
    if (n === "input" || n === "change")
      return Zl(r);
  }
  function $m(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var kr = typeof Object.is == "function" ? Object.is : $m;
  function ao(n, r) {
    if (kr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!xe.call(r, c) || !kr(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function tv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function nv(n, r) {
    var l = tv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = tv(l);
    }
  }
  function rv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? rv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ss() {
    for (var n = window, r = yn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = yn(n.document);
    }
    return r;
  }
  function Ua(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cs(n) {
    var r = Ss(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && rv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ua(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = nv(l, d);
          var h = nv(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var av = ht && "documentMode" in document && 11 >= document.documentMode, na = null, Ef = null, io = null, Tf = !1;
  function iv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Tf || na == null || na !== yn(o) || (o = na, "selectionStart" in o && Ua(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), io && ao(io, o) || (io = o, o = co(Ef, "onSelect"), 0 < o.length && (r = new ds("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = na)));
  }
  function Es(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ji = { animationend: Es("Animation", "AnimationEnd"), animationiteration: Es("Animation", "AnimationIteration"), animationstart: Es("Animation", "AnimationStart"), transitionend: Es("Transition", "TransitionEnd") }, Rf = {}, xf = {};
  ht && (xf = document.createElement("div").style, "AnimationEvent" in window || (delete Ji.animationend.animation, delete Ji.animationiteration.animation, delete Ji.animationstart.animation), "TransitionEvent" in window || delete Ji.transitionend.transition);
  function Xt(n) {
    if (Rf[n])
      return Rf[n];
    if (!Ji[n])
      return n;
    var r = Ji[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in xf)
        return Rf[n] = r[l];
    return n;
  }
  var wf = Xt("animationend"), lv = Xt("animationiteration"), uv = Xt("animationstart"), ov = Xt("transitionend"), sv = /* @__PURE__ */ new Map(), cv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    sv.set(n, r), Ye(r, [n]);
  }
  for (var lo = 0; lo < cv.length; lo++) {
    var el = cv[lo], Qm = el.toLowerCase(), uo = el[0].toUpperCase() + el.slice(1);
    Aa(Qm, "on" + uo);
  }
  Aa(wf, "onAnimationEnd"), Aa(lv, "onAnimationIteration"), Aa(uv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(ov, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Ye("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ye("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ye("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ye("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ye("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ye("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var oo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gm = new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));
  function fv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Bl(o, r, void 0, n), n.currentTarget = null;
  }
  function Ts(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var S = o[h], C = S.instance, M = S.currentTarget;
            if (S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            fv(c, S, M), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], C = S.instance, M = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            fv(c, S, M), d = C;
          }
      }
    }
    if (Vl)
      throw n = $u, Vl = !1, $u = null, n;
  }
  function rt(n, r) {
    var l = r[Of];
    l === void 0 && (l = r[Of] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (dv(r, n, 2, !1), l.add(o));
  }
  function hi(n, r, l) {
    var o = 0;
    r && (o |= 4), dv(l, n, o, r);
  }
  var Ha = "_reactListening" + Math.random().toString(36).slice(2);
  function Jl(n) {
    if (!n[Ha]) {
      n[Ha] = !0, nn.forEach(function(l) {
        l !== "selectionchange" && (Gm.has(l) || hi(l, !1, n), hi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ha] || (r[Ha] = !0, hi("selectionchange", !1, r));
    }
  }
  function dv(n, r, l, o) {
    switch (sf(r)) {
      case 1:
        var c = zp;
        break;
      case 4:
        c = ss;
        break;
      default:
        c = cs;
    }
    l = c.bind(null, r, l, n), c = void 0, !as || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Rs(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var h = o.tag;
          if (h === 3 || h === 4) {
            var S = o.stateNode.containerInfo;
            if (S === c || S.nodeType === 8 && S.parentNode === c)
              break;
            if (h === 4)
              for (h = o.return; h !== null; ) {
                var C = h.tag;
                if ((C === 3 || C === 4) && (C = h.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c))
                  return;
                h = h.return;
              }
            for (; S !== null; ) {
              if (h = br(S), h === null)
                return;
              if (C = h.tag, C === 5 || C === 6) {
                o = d = h;
                continue e;
              }
              S = S.parentNode;
            }
          }
          o = o.return;
        }
    Kc(function() {
      var M = d, H = Tt(l), F = [];
      e: {
        var A = sv.get(n);
        if (A !== void 0) {
          var I = ds, J = n;
          switch (n) {
            case "keypress":
              if (Gl(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              I = Hm;
              break;
            case "focusin":
              J = "focus", I = vi;
              break;
            case "focusout":
              J = "blur", I = vi;
              break;
            case "beforeblur":
            case "afterblur":
              I = vi;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              I = vs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = Fp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = Fm;
              break;
            case wf:
            case lv:
            case uv:
              I = jp;
              break;
            case ov:
              I = Yp;
              break;
            case "scroll":
              I = Ap;
              break;
            case "wheel":
              I = za;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = Um;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = hs;
          }
          var ne = (r & 4) !== 0, Mt = !ne && n === "scroll", x = ne ? A !== null ? A + "Capture" : null : A;
          ne = [];
          for (var T = M, k; T !== null; ) {
            k = T;
            var V = k.stateNode;
            if (k.tag === 5 && V !== null && (k = V, x !== null && (V = Yu(T, x), V != null && ne.push(so(T, V, k)))), Mt)
              break;
            T = T.return;
          }
          0 < ne.length && (A = new I(A, J, null, l, H), F.push({ event: A, listeners: ne }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (A = n === "mouseover" || n === "pointerover", I = n === "mouseout" || n === "pointerout", A && l !== Rr && (J = l.relatedTarget || l.fromElement) && (br(J) || J[Fa]))
            break e;
          if ((I || A) && (A = H.window === H ? H : (A = H.ownerDocument) ? A.defaultView || A.parentWindow : window, I ? (J = l.relatedTarget || l.toElement, I = M, J = J ? br(J) : null, J !== null && (Mt = da(J), J !== Mt || J.tag !== 5 && J.tag !== 6) && (J = null)) : (I = null, J = M), I !== J)) {
            if (ne = vs, V = "onMouseLeave", x = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (ne = hs, V = "onPointerLeave", x = "onPointerEnter", T = "pointer"), Mt = I == null ? A : eu(I), k = J == null ? A : eu(J), A = new ne(V, T + "leave", I, l, H), A.target = Mt, A.relatedTarget = k, V = null, br(H) === M && (ne = new ne(x, T + "enter", J, l, H), ne.target = k, ne.relatedTarget = Mt, V = ne), Mt = V, I && J)
              t: {
                for (ne = I, x = J, T = 0, k = ne; k; k = tl(k))
                  T++;
                for (k = 0, V = x; V; V = tl(V))
                  k++;
                for (; 0 < T - k; )
                  ne = tl(ne), T--;
                for (; 0 < k - T; )
                  x = tl(x), k--;
                for (; T--; ) {
                  if (ne === x || x !== null && ne === x.alternate)
                    break t;
                  ne = tl(ne), x = tl(x);
                }
                ne = null;
              }
            else
              ne = null;
            I !== null && Df(F, A, I, ne, !1), J !== null && Mt !== null && Df(F, Mt, J, ne, !0);
          }
        }
        e: {
          if (A = M ? eu(M) : window, I = A.nodeName && A.nodeName.toLowerCase(), I === "select" || I === "input" && A.type === "file")
            var re = qp;
          else if (Wp(A))
            if (gf)
              re = ev;
            else {
              re = Pm;
              var ee = Bm;
            }
          else
            (I = A.nodeName) && I.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (re = Ym);
          if (re && (re = re(n, M))) {
            Xp(F, re, l, H);
            break e;
          }
          ee && ee(n, A, M), n === "focusout" && (ee = A._wrapperState) && ee.controlled && A.type === "number" && Fl(A, "number", A.value);
        }
        switch (ee = M ? eu(M) : window, n) {
          case "focusin":
            (Wp(ee) || ee.contentEditable === "true") && (na = ee, Ef = M, io = null);
            break;
          case "focusout":
            io = Ef = na = null;
            break;
          case "mousedown":
            Tf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Tf = !1, iv(F, l, H);
            break;
          case "selectionchange":
            if (av)
              break;
          case "keydown":
          case "keyup":
            iv(F, l, H);
        }
        var ue;
        if (ta)
          e: {
            switch (n) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          Xl ? Gp(n, l) && (Se = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Se = "onCompositionStart");
        Se && ($p && l.locale !== "ko" && (Xl || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && Xl && (ue = cf()) : (Oa = H, Ju = "value" in Oa ? Oa.value : Oa.textContent, Xl = !0)), ee = co(M, Se), 0 < ee.length && (Se = new pf(Se, n, null, l, H), F.push({ event: Se, listeners: ee }), ue ? Se.data = ue : (ue = gs(l), ue !== null && (Se.data = ue)))), (ue = ys ? jm(n, l) : Vm(n, l)) && (M = co(M, "onBeforeInput"), 0 < M.length && (H = new pf("onBeforeInput", "beforeinput", null, l, H), F.push({ event: H, listeners: M }), H.data = ue));
      }
      Ts(F, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function co(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Yu(n, l), d != null && o.unshift(so(n, d, c)), d = Yu(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function tl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Df(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, M = S.stateNode;
      if (C !== null && C === o)
        break;
      S.tag === 5 && M !== null && (S = M, c ? (C = Yu(l, d), C != null && h.unshift(so(l, C, S))) : c || (C = Yu(l, d), C != null && h.push(so(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var kf = /\r\n?/g, Im = /\u0000|\uFFFD/g;
  function bf(n) {
    return (typeof n == "string" ? n : "" + n).replace(kf, `
`).replace(Im, "");
  }
  function xs(n, r, l) {
    if (r = bf(r), bf(n) !== r && l)
      throw Error(L(425));
  }
  function ws() {
  }
  var _f = null, nl = null;
  function fo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var rl = typeof setTimeout == "function" ? setTimeout : void 0, pv = typeof clearTimeout == "function" ? clearTimeout : void 0, Mf = typeof Promise == "function" ? Promise : void 0, Lf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mf < "u" ? function(n) {
    return Mf.resolve(null).then(n).catch(Wm);
  } : rl;
  function Wm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function mi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), Ku(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ku(r);
  }
  function ra(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function po(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var yi = Math.random().toString(36).slice(2), pa = "__reactFiber$" + yi, al = "__reactProps$" + yi, Fa = "__reactContainer$" + yi, Of = "__reactEvents$" + yi, Xm = "__reactListeners$" + yi, Nf = "__reactHandles$" + yi;
  function br(n) {
    var r = n[pa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fa] || l[pa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = po(n); n !== null; ) {
            if (l = n[pa])
              return l;
            n = po(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function vo(n) {
    return n = n[pa] || n[Fa], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function eu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(L(33));
  }
  function oe(n) {
    return n[al] || null;
  }
  var gi = [], ot = -1;
  function we(n) {
    return { current: n };
  }
  function $e(n) {
    0 > ot || (n.current = gi[ot], gi[ot] = null, ot--);
  }
  function Qe(n, r) {
    ot++, gi[ot] = n.current, n.current = r;
  }
  var va = {}, ge = we(va), wt = we(!1), Qn = va;
  function _r(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return va;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function pt(n) {
    return n = n.childContextTypes, n != null;
  }
  function Mr() {
    $e(wt), $e(ge);
  }
  function Si(n, r, l) {
    if (ge.current !== va)
      throw Error(L(168));
    Qe(ge, r), Qe(wt, l);
  }
  function ho(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(L(108, li(n) || "Unknown", c));
    return K({}, l, o);
  }
  function Ds(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || va, Qn = ge.current, Qe(ge, n), Qe(wt, wt.current), !0;
  }
  function vv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(L(169));
    l ? (n = ho(n, r, Qn), o.__reactInternalMemoizedMergedChildContext = n, $e(wt), $e(ge), Qe(ge, n)) : $e(wt), Qe(wt, l);
  }
  var or = null, qt = !1, mo = !1;
  function zf(n) {
    or === null ? or = [n] : or.push(n);
  }
  function Uf(n) {
    qt = !0, zf(n);
  }
  function Gn() {
    if (!mo && or !== null) {
      mo = !0;
      var n = 0, r = We;
      try {
        var l = or;
        for (We = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        or = null, qt = !1;
      } catch (c) {
        throw or !== null && (or = or.slice(n + 1)), ef(La, Gn), c;
      } finally {
        We = r, mo = !1;
      }
    }
    return null;
  }
  var Ci = [], In = 0, il = null, tu = 0, Wn = [], Cn = 0, Lr = null, an = 1, ja = "";
  function sr(n, r) {
    Ci[In++] = tu, Ci[In++] = il, il = n, tu = r;
  }
  function Af(n, r, l) {
    Wn[Cn++] = an, Wn[Cn++] = ja, Wn[Cn++] = Lr, Lr = n;
    var o = an;
    n = ja;
    var c = 32 - xr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - xr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, an = 1 << 32 - xr(r) + c | l << c | o, ja = d + n;
    } else
      an = 1 << d | l << c | o, ja = n;
  }
  function ks(n) {
    n.return !== null && (sr(n, 1), Af(n, 1, 0));
  }
  function Hf(n) {
    for (; n === il; )
      il = Ci[--In], Ci[In] = null, tu = Ci[--In], Ci[In] = null;
    for (; n === Lr; )
      Lr = Wn[--Cn], Wn[Cn] = null, ja = Wn[--Cn], Wn[Cn] = null, an = Wn[--Cn], Wn[Cn] = null;
  }
  var cr = null, Xn = null, st = !1, Or = null;
  function Ff(n, r) {
    var l = Fr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function hv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, cr = n, Xn = ra(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, cr = n, Xn = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Lr !== null ? { id: an, overflow: ja } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Fr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, cr = n, Xn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function bs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function _s(n) {
    if (st) {
      var r = Xn;
      if (r) {
        var l = r;
        if (!hv(n, r)) {
          if (bs(n))
            throw Error(L(418));
          r = ra(l.nextSibling);
          var o = cr;
          r && hv(n, r) ? Ff(o, l) : (n.flags = n.flags & -4097 | 2, st = !1, cr = n);
        }
      } else {
        if (bs(n))
          throw Error(L(418));
        n.flags = n.flags & -4097 | 2, st = !1, cr = n;
      }
    }
  }
  function mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    cr = n;
  }
  function Ms(n) {
    if (n !== cr)
      return !1;
    if (!st)
      return mv(n), st = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !fo(n.type, n.memoizedProps)), r && (r = Xn)) {
      if (bs(n))
        throw yv(), Error(L(418));
      for (; r; )
        Ff(n, r), r = ra(r.nextSibling);
    }
    if (mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(L(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Xn = ra(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Xn = null;
      }
    } else
      Xn = cr ? ra(n.stateNode.nextSibling) : null;
    return !0;
  }
  function yv() {
    for (var n = Xn; n; )
      n = ra(n.nextSibling);
  }
  function yt() {
    Xn = cr = null, st = !1;
  }
  function jf(n) {
    Or === null ? Or = [n] : Or.push(n);
  }
  var Ls = ut.ReactCurrentBatchConfig;
  function fr(n, r) {
    if (n && n.defaultProps) {
      r = K({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ha = we(null), Os = null, Ei = null, Vf = null;
  function Bf() {
    Vf = Ei = Os = null;
  }
  function Ti(n) {
    var r = ha.current;
    $e(ha), n._currentValue = r;
  }
  function Kt(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function P(n, r) {
    Os = n, Vf = Ei = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (At = !0), n.firstContext = null);
  }
  function _t(n) {
    var r = n._currentValue;
    if (Vf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ei === null) {
        if (Os === null)
          throw Error(L(308));
        Ei = n, Os.dependencies = { lanes: 0, firstContext: n };
      } else
        Ei = Ei.next = n;
    return r;
  }
  var ln = null;
  function Pf(n) {
    ln === null ? ln = [n] : ln.push(n);
  }
  function gv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Pf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Va(n, o);
  }
  function Va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ri = !1;
  function Yf(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Bt(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ba(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function xi(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Oe & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Pf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Va(n, l);
  }
  function Ns(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Iu(n, l);
    }
  }
  function $f(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function wi(n, r, l, o) {
    var c = n.updateQueue;
    Ri = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, M = C.next;
      C.next = null, h === null ? d = M : h.next = M, h = C;
      var H = n.alternate;
      H !== null && (H = H.updateQueue, S = H.lastBaseUpdate, S !== h && (S === null ? H.firstBaseUpdate = M : S.next = M, H.lastBaseUpdate = C));
    }
    if (d !== null) {
      var F = c.baseState;
      h = 0, H = M = C = null, S = d;
      do {
        var A = S.lane, I = S.eventTime;
        if ((o & A) === A) {
          H !== null && (H = H.next = {
            eventTime: I,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var J = n, ne = S;
            switch (A = r, I = l, ne.tag) {
              case 1:
                if (J = ne.payload, typeof J == "function") {
                  F = J.call(I, F, A);
                  break e;
                }
                F = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ne.payload, A = typeof J == "function" ? J.call(I, F, A) : J, A == null)
                  break e;
                F = K({}, F, A);
                break e;
              case 2:
                Ri = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, A = c.effects, A === null ? c.effects = [S] : A.push(S));
        } else
          I = { eventTime: I, lane: A, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, H === null ? (M = H = I, C = F) : H = H.next = I, h |= A;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          A = S, S = A.next, A.next = null, c.lastBaseUpdate = A, c.shared.pending = null;
        }
      } while (1);
      if (H === null && (C = F), c.baseState = C, c.firstBaseUpdate = M, c.lastBaseUpdate = H, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Qa |= h, n.lanes = h, n.memoizedState = F;
    }
  }
  function ll(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(L(191, c));
          c.call(o);
        }
      }
  }
  var Sv = new B.Component().refs;
  function Qf(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : K({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var zs = { isMounted: function(n) {
    return (n = n._reactInternals) ? da(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = xn(), c = Ht(n), d = Ba(o, c);
    d.payload = r, l != null && (d.callback = l), r = xi(n, d, c), r !== null && (wn(r, n, c, o), Ns(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = xn(), c = Ht(n), d = Ba(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = xi(n, d, c), r !== null && (wn(r, n, c, o), Ns(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = xn(), o = Ht(n), c = Ba(l, o);
    c.tag = 2, r != null && (c.callback = r), r = xi(n, c, o), r !== null && (wn(r, n, o, l), Ns(r, n, o));
  } };
  function Cv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !ao(l, o) || !ao(c, d) : !0;
  }
  function Ev(n, r, l) {
    var o = !1, c = va, d = r.contextType;
    return typeof d == "object" && d !== null ? d = _t(d) : (c = pt(r) ? Qn : ge.current, o = r.contextTypes, d = (o = o != null) ? _r(n, c) : va), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = zs, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Tv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && zs.enqueueReplaceState(r, r.state, null);
  }
  function Us(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Sv, Yf(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = _t(d) : (d = pt(r) ? Qn : ge.current, c.context = _r(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Qf(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && zs.enqueueReplaceState(c, c.state, null), wi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function nu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(L(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(L(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          S === Sv && (S = c.refs = {}), h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(L(284));
      if (!l._owner)
        throw Error(L(290, n));
    }
    return n;
  }
  function As(n, r) {
    throw n = Object.prototype.toString.call(r), Error(L(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Rv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function xv(n) {
    function r(x, T) {
      if (n) {
        var k = x.deletions;
        k === null ? (x.deletions = [T], x.flags |= 16) : k.push(T);
      }
    }
    function l(x, T) {
      if (!n)
        return null;
      for (; T !== null; )
        r(x, T), T = T.sibling;
      return null;
    }
    function o(x, T) {
      for (x = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? x.set(T.key, T) : x.set(T.index, T), T = T.sibling;
      return x;
    }
    function c(x, T) {
      return x = Ni(x, T), x.index = 0, x.sibling = null, x;
    }
    function d(x, T, k) {
      return x.index = k, n ? (k = x.alternate, k !== null ? (k = k.index, k < T ? (x.flags |= 2, T) : k) : (x.flags |= 2, T)) : (x.flags |= 1048576, T);
    }
    function h(x) {
      return n && x.alternate === null && (x.flags |= 2), x;
    }
    function S(x, T, k, V) {
      return T === null || T.tag !== 6 ? (T = Uo(k, x.mode, V), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function C(x, T, k, V) {
      var re = k.type;
      return re === be ? H(x, T, k.props.children, V, k.key) : T !== null && (T.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Et && Rv(re) === T.type) ? (V = c(T, k.props), V.ref = nu(x, T, k), V.return = x, V) : (V = vc(k.type, k.key, k.props, null, x.mode, V), V.ref = nu(x, T, k), V.return = x, V);
    }
    function M(x, T, k, V) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== k.containerInfo || T.stateNode.implementation !== k.implementation ? (T = wl(k, x.mode, V), T.return = x, T) : (T = c(T, k.children || []), T.return = x, T);
    }
    function H(x, T, k, V, re) {
      return T === null || T.tag !== 7 ? (T = xl(k, x.mode, V, re), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function F(x, T, k) {
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return T = Uo("" + T, x.mode, k), T.return = x, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Ue:
            return k = vc(T.type, T.key, T.props, null, x.mode, k), k.ref = nu(x, null, T), k.return = x, k;
          case mt:
            return T = wl(T, x.mode, k), T.return = x, T;
          case Et:
            var V = T._init;
            return F(x, V(T._payload), k);
        }
        if (Gi(T) || me(T))
          return T = xl(T, x.mode, k, null), T.return = x, T;
        As(x, T);
      }
      return null;
    }
    function A(x, T, k, V) {
      var re = T !== null ? T.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return re !== null ? null : S(x, T, "" + k, V);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ue:
            return k.key === re ? C(x, T, k, V) : null;
          case mt:
            return k.key === re ? M(x, T, k, V) : null;
          case Et:
            return re = k._init, A(
              x,
              T,
              re(k._payload),
              V
            );
        }
        if (Gi(k) || me(k))
          return re !== null ? null : H(x, T, k, V, null);
        As(x, k);
      }
      return null;
    }
    function I(x, T, k, V, re) {
      if (typeof V == "string" && V !== "" || typeof V == "number")
        return x = x.get(k) || null, S(T, x, "" + V, re);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Ue:
            return x = x.get(V.key === null ? k : V.key) || null, C(T, x, V, re);
          case mt:
            return x = x.get(V.key === null ? k : V.key) || null, M(T, x, V, re);
          case Et:
            var ee = V._init;
            return I(x, T, k, ee(V._payload), re);
        }
        if (Gi(V) || me(V))
          return x = x.get(k) || null, H(T, x, V, re, null);
        As(T, V);
      }
      return null;
    }
    function J(x, T, k, V) {
      for (var re = null, ee = null, ue = T, Se = T = 0, en = null; ue !== null && Se < k.length; Se++) {
        ue.index > Se ? (en = ue, ue = null) : en = ue.sibling;
        var Ve = A(x, ue, k[Se], V);
        if (Ve === null) {
          ue === null && (ue = en);
          break;
        }
        n && ue && Ve.alternate === null && r(x, ue), T = d(Ve, T, Se), ee === null ? re = Ve : ee.sibling = Ve, ee = Ve, ue = en;
      }
      if (Se === k.length)
        return l(x, ue), st && sr(x, Se), re;
      if (ue === null) {
        for (; Se < k.length; Se++)
          ue = F(x, k[Se], V), ue !== null && (T = d(ue, T, Se), ee === null ? re = ue : ee.sibling = ue, ee = ue);
        return st && sr(x, Se), re;
      }
      for (ue = o(x, ue); Se < k.length; Se++)
        en = I(ue, x, Se, k[Se], V), en !== null && (n && en.alternate !== null && ue.delete(en.key === null ? Se : en.key), T = d(en, T, Se), ee === null ? re = en : ee.sibling = en, ee = en);
      return n && ue.forEach(function(zi) {
        return r(x, zi);
      }), st && sr(x, Se), re;
    }
    function ne(x, T, k, V) {
      var re = me(k);
      if (typeof re != "function")
        throw Error(L(150));
      if (k = re.call(k), k == null)
        throw Error(L(151));
      for (var ee = re = null, ue = T, Se = T = 0, en = null, Ve = k.next(); ue !== null && !Ve.done; Se++, Ve = k.next()) {
        ue.index > Se ? (en = ue, ue = null) : en = ue.sibling;
        var zi = A(x, ue, Ve.value, V);
        if (zi === null) {
          ue === null && (ue = en);
          break;
        }
        n && ue && zi.alternate === null && r(x, ue), T = d(zi, T, Se), ee === null ? re = zi : ee.sibling = zi, ee = zi, ue = en;
      }
      if (Ve.done)
        return l(
          x,
          ue
        ), st && sr(x, Se), re;
      if (ue === null) {
        for (; !Ve.done; Se++, Ve = k.next())
          Ve = F(x, Ve.value, V), Ve !== null && (T = d(Ve, T, Se), ee === null ? re = Ve : ee.sibling = Ve, ee = Ve);
        return st && sr(x, Se), re;
      }
      for (ue = o(x, ue); !Ve.done; Se++, Ve = k.next())
        Ve = I(ue, x, Se, Ve.value, V), Ve !== null && (n && Ve.alternate !== null && ue.delete(Ve.key === null ? Se : Ve.key), T = d(Ve, T, Se), ee === null ? re = Ve : ee.sibling = Ve, ee = Ve);
      return n && ue.forEach(function(hy) {
        return r(x, hy);
      }), st && sr(x, Se), re;
    }
    function Mt(x, T, k, V) {
      if (typeof k == "object" && k !== null && k.type === be && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ue:
            e: {
              for (var re = k.key, ee = T; ee !== null; ) {
                if (ee.key === re) {
                  if (re = k.type, re === be) {
                    if (ee.tag === 7) {
                      l(x, ee.sibling), T = c(ee, k.props.children), T.return = x, x = T;
                      break e;
                    }
                  } else if (ee.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Et && Rv(re) === ee.type) {
                    l(x, ee.sibling), T = c(ee, k.props), T.ref = nu(x, ee, k), T.return = x, x = T;
                    break e;
                  }
                  l(x, ee);
                  break;
                } else
                  r(x, ee);
                ee = ee.sibling;
              }
              k.type === be ? (T = xl(k.props.children, x.mode, V, k.key), T.return = x, x = T) : (V = vc(k.type, k.key, k.props, null, x.mode, V), V.ref = nu(x, T, k), V.return = x, x = V);
            }
            return h(x);
          case mt:
            e: {
              for (ee = k.key; T !== null; ) {
                if (T.key === ee)
                  if (T.tag === 4 && T.stateNode.containerInfo === k.containerInfo && T.stateNode.implementation === k.implementation) {
                    l(x, T.sibling), T = c(T, k.children || []), T.return = x, x = T;
                    break e;
                  } else {
                    l(x, T);
                    break;
                  }
                else
                  r(x, T);
                T = T.sibling;
              }
              T = wl(k, x.mode, V), T.return = x, x = T;
            }
            return h(x);
          case Et:
            return ee = k._init, Mt(x, T, ee(k._payload), V);
        }
        if (Gi(k))
          return J(x, T, k, V);
        if (me(k))
          return ne(x, T, k, V);
        As(x, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, T !== null && T.tag === 6 ? (l(x, T.sibling), T = c(T, k), T.return = x, x = T) : (l(x, T), T = Uo(k, x.mode, V), T.return = x, x = T), h(x)) : l(x, T);
    }
    return Mt;
  }
  var ru = xv(!0), wv = xv(!1), yo = {}, aa = we(yo), go = we(yo), au = we(yo);
  function ul(n) {
    if (n === yo)
      throw Error(L(174));
    return n;
  }
  function Gf(n, r) {
    switch (Qe(au, r), Qe(go, n), Qe(aa, yo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Yn(r, n);
    }
    $e(aa), Qe(aa, r);
  }
  function Di() {
    $e(aa), $e(go), $e(au);
  }
  function fe(n) {
    ul(au.current);
    var r = ul(aa.current), l = Yn(r, n.type);
    r !== l && (Qe(go, n), Qe(aa, l));
  }
  function ke(n) {
    go.current === n && ($e(aa), $e(go));
  }
  var pe = we(0);
  function gt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Nr = [];
  function Hs() {
    for (var n = 0; n < Nr.length; n++)
      Nr[n]._workInProgressVersionPrimary = null;
    Nr.length = 0;
  }
  var Fs = ut.ReactCurrentDispatcher, If = ut.ReactCurrentBatchConfig, ol = 0, ct = null, z = null, He = null, ve = !1, ma = !1, dr = 0, sl = 0;
  function ft() {
    throw Error(L(321));
  }
  function cl(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!kr(n[l], r[l]))
        return !1;
    return !0;
  }
  function ki(n, r, l, o, c, d) {
    if (ol = d, ct = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fs.current = n === null || n.memoizedState === null ? Km : Zm, n = l(o, c), ma) {
      d = 0;
      do {
        if (ma = !1, dr = 0, 25 <= d)
          throw Error(L(301));
        d += 1, He = z = null, r.updateQueue = null, Fs.current = Xf, n = l(o, c);
      } while (ma);
    }
    if (Fs.current = ec, r = z !== null && z.next !== null, ol = 0, He = z = ct = null, ve = !1, r)
      throw Error(L(300));
    return n;
  }
  function fl() {
    var n = dr !== 0;
    return dr = 0, n;
  }
  function zr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return He === null ? ct.memoizedState = He = n : He = He.next = n, He;
  }
  function qn() {
    if (z === null) {
      var n = ct.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = z.next;
    var r = He === null ? ct.memoizedState : He.next;
    if (r !== null)
      He = r, z = n;
    else {
      if (n === null)
        throw Error(L(310));
      z = n, n = { memoizedState: z.memoizedState, baseState: z.baseState, baseQueue: z.baseQueue, queue: z.queue, next: null }, He === null ? ct.memoizedState = He = n : He = He.next = n;
    }
    return He;
  }
  function dl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function So(n) {
    var r = qn(), l = r.queue;
    if (l === null)
      throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = z, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, M = d;
      do {
        var H = M.lane;
        if ((ol & H) === H)
          C !== null && (C = C.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), o = M.hasEagerState ? M.eagerState : n(o, M.action);
        else {
          var F = {
            lane: H,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          C === null ? (S = C = F, h = o) : C = C.next = F, ct.lanes |= H, Qa |= H;
        }
        M = M.next;
      } while (M !== null && M !== d);
      C === null ? h = o : C.next = S, kr(o, r.memoizedState) || (At = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ct.lanes |= d, Qa |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Co(n) {
    var r = qn(), l = r.queue;
    if (l === null)
      throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      kr(d, r.memoizedState) || (At = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function js() {
  }
  function Vs(n, r) {
    var l = ct, o = qn(), c = r(), d = !kr(o.memoizedState, c);
    if (d && (o.memoizedState = c, At = !0), o = o.queue, Eo(Ys.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || He !== null && He.memoizedState.tag & 1) {
      if (l.flags |= 2048, pl(9, Ps.bind(null, l, o, c, r), void 0, null), St === null)
        throw Error(L(349));
      ol & 30 || Bs(l, r, c);
    }
    return c;
  }
  function Bs(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ct.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ct.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Ps(n, r, l, o) {
    r.value = l, r.getSnapshot = o, $s(r) && Qs(n);
  }
  function Ys(n, r, l) {
    return l(function() {
      $s(r) && Qs(n);
    });
  }
  function $s(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !kr(n, l);
    } catch {
      return !0;
    }
  }
  function Qs(n) {
    var r = Va(n, 1);
    r !== null && wn(r, n, 1, -1);
  }
  function Gs(n) {
    var r = zr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: dl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Js.bind(null, ct, n), [r.memoizedState, n];
  }
  function pl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ct.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ct.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Is() {
    return qn().memoizedState;
  }
  function vl(n, r, l, o) {
    var c = zr();
    ct.flags |= n, c.memoizedState = pl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Pa(n, r, l, o) {
    var c = qn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (z !== null) {
      var h = z.memoizedState;
      if (d = h.destroy, o !== null && cl(o, h.deps)) {
        c.memoizedState = pl(r, l, d, o);
        return;
      }
    }
    ct.flags |= n, c.memoizedState = pl(1 | r, l, d, o);
  }
  function Ws(n, r) {
    return vl(8390656, 8, n, r);
  }
  function Eo(n, r) {
    return Pa(2048, 8, n, r);
  }
  function Xs(n, r) {
    return Pa(4, 2, n, r);
  }
  function qs(n, r) {
    return Pa(4, 4, n, r);
  }
  function Wf(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function iu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Pa(4, 4, Wf.bind(null, r, n), l);
  }
  function Ks() {
  }
  function lu(n, r) {
    var l = qn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && cl(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function bi(n, r) {
    var l = qn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && cl(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Kn(n, r, l) {
    return ol & 21 ? (kr(l, r) || (l = us(), ct.lanes |= l, Qa |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, At = !0), n.memoizedState = l);
  }
  function qm(n, r) {
    var l = We;
    We = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = If.transition;
    If.transition = {};
    try {
      n(!1), r();
    } finally {
      We = l, If.transition = o;
    }
  }
  function at() {
    return qn().memoizedState;
  }
  function Zs(n, r, l) {
    var o = Ht(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, uu(n))
      To(r, l);
    else if (l = gv(n, r, l, o), l !== null) {
      var c = xn();
      wn(l, n, o, c), Dv(l, r, o);
    }
  }
  function Js(n, r, l) {
    var o = Ht(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (uu(n))
      To(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, kr(S, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, Pf(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = gv(n, r, c, o), l !== null && (c = xn(), wn(l, n, o, c), Dv(l, r, o));
    }
  }
  function uu(n) {
    var r = n.alternate;
    return n === ct || r !== null && r === ct;
  }
  function To(n, r) {
    ma = ve = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Dv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Iu(n, l);
    }
  }
  var ec = { readContext: _t, useCallback: ft, useContext: ft, useEffect: ft, useImperativeHandle: ft, useInsertionEffect: ft, useLayoutEffect: ft, useMemo: ft, useReducer: ft, useRef: ft, useState: ft, useDebugValue: ft, useDeferredValue: ft, useTransition: ft, useMutableSource: ft, useSyncExternalStore: ft, useId: ft, unstable_isNewReconciler: !1 }, Km = { readContext: _t, useCallback: function(n, r) {
    return zr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: _t, useEffect: Ws, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, vl(
      4194308,
      4,
      Wf.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return vl(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return vl(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = zr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = zr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Zs.bind(null, ct, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = zr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Gs, useDebugValue: Ks, useDeferredValue: function(n) {
    return zr().memoizedState = n;
  }, useTransition: function() {
    var n = Gs(!1), r = n[0];
    return n = qm.bind(null, n[1]), zr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ct, c = zr();
    if (st) {
      if (l === void 0)
        throw Error(L(407));
      l = l();
    } else {
      if (l = r(), St === null)
        throw Error(L(349));
      ol & 30 || Bs(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ws(Ys.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, pl(9, Ps.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = zr(), r = St.identifierPrefix;
    if (st) {
      var l = ja, o = an;
      l = (o & ~(1 << 32 - xr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = dr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = sl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Zm = {
    readContext: _t,
    useCallback: lu,
    useContext: _t,
    useEffect: Eo,
    useImperativeHandle: iu,
    useInsertionEffect: Xs,
    useLayoutEffect: qs,
    useMemo: bi,
    useReducer: So,
    useRef: Is,
    useState: function() {
      return So(dl);
    },
    useDebugValue: Ks,
    useDeferredValue: function(n) {
      var r = qn();
      return Kn(r, z.memoizedState, n);
    },
    useTransition: function() {
      var n = So(dl)[0], r = qn().memoizedState;
      return [n, r];
    },
    useMutableSource: js,
    useSyncExternalStore: Vs,
    useId: at,
    unstable_isNewReconciler: !1
  }, Xf = { readContext: _t, useCallback: lu, useContext: _t, useEffect: Eo, useImperativeHandle: iu, useInsertionEffect: Xs, useLayoutEffect: qs, useMemo: bi, useReducer: Co, useRef: Is, useState: function() {
    return Co(dl);
  }, useDebugValue: Ks, useDeferredValue: function(n) {
    var r = qn();
    return z === null ? r.memoizedState = n : Kn(r, z.memoizedState, n);
  }, useTransition: function() {
    var n = Co(dl)[0], r = qn().memoizedState;
    return [n, r];
  }, useMutableSource: js, useSyncExternalStore: Vs, useId: at, unstable_isNewReconciler: !1 };
  function ou(n, r) {
    try {
      var l = "", o = r;
      do
        l += ii(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ro(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function tc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jm = typeof WeakMap == "function" ? WeakMap : Map;
  function kv(n, r, l) {
    l = Ba(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      oc || (oc = !0, Sl = o), tc(n, r);
    }, l;
  }
  function xo(n, r, l) {
    l = Ba(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        tc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      tc(n, r), typeof o != "function" && (Sa === null ? Sa = /* @__PURE__ */ new Set([this]) : Sa.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function bv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jm();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = ly.bind(null, n, r, l), r.then(n, n));
  }
  function qf(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Kf(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ba(-1, 1), r.tag = 2, xi(l, r, 1))), l.lanes |= 1), n);
  }
  var ey = ut.ReactCurrentOwner, At = !1;
  function Pt(n, r, l, o) {
    r.child = n === null ? wv(r, null, l, o) : ru(r, n.child, l, o);
  }
  function _i(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return P(r, c), o = ki(n, r, l, o, d, c), l = fl(), n !== null && !At ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, un(n, r, c)) : (st && l && ks(r), r.flags |= 1, Pt(n, r, o, c), r.child);
  }
  function nc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !md(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Zn(n, r, d, o, c)) : (n = vc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ao, l(h, o) && n.ref === r.ref)
        return un(n, r, c);
    }
    return r.flags |= 1, n = Ni(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Zn(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ao(d, o) && n.ref === r.ref)
        if (At = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (At = !0);
        else
          return r.lanes = n.lanes, un(n, r, c);
    }
    return su(n, r, l, o, c);
  }
  function hl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qe(hu, pr), pr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Qe(hu, pr), pr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Qe(hu, pr), pr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Qe(hu, pr), pr |= o;
    return Pt(n, r, c, l), r.child;
  }
  function De(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function su(n, r, l, o, c) {
    var d = pt(l) ? Qn : ge.current;
    return d = _r(r, d), P(r, c), l = ki(n, r, l, o, d, c), o = fl(), n !== null && !At ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, un(n, r, c)) : (st && o && ks(r), r.flags |= 1, Pt(n, r, l, c), r.child);
  }
  function Zf(n, r, l, o, c) {
    if (pt(l)) {
      var d = !0;
      Ds(r);
    } else
      d = !1;
    if (P(r, c), r.stateNode === null)
      En(n, r), Ev(r, l, o), Us(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, M = l.contextType;
      typeof M == "object" && M !== null ? M = _t(M) : (M = pt(l) ? Qn : ge.current, M = _r(r, M));
      var H = l.getDerivedStateFromProps, F = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      F || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== M) && Tv(r, h, o, M), Ri = !1;
      var A = r.memoizedState;
      h.state = A, wi(r, o, h, c), C = r.memoizedState, S !== o || A !== C || wt.current || Ri ? (typeof H == "function" && (Qf(r, l, H, o), C = r.memoizedState), (S = Ri || Cv(r, l, S, o, A, C, M)) ? (F || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = M, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, Bt(n, r), S = r.memoizedProps, M = r.type === r.elementType ? S : fr(r.type, S), h.props = M, F = r.pendingProps, A = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = _t(C) : (C = pt(l) ? Qn : ge.current, C = _r(r, C));
      var I = l.getDerivedStateFromProps;
      (H = typeof I == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== F || A !== C) && Tv(r, h, o, C), Ri = !1, A = r.memoizedState, h.state = A, wi(r, o, h, c);
      var J = r.memoizedState;
      S !== F || A !== J || wt.current || Ri ? (typeof I == "function" && (Qf(r, l, I, o), J = r.memoizedState), (M = Ri || Cv(r, l, M, o, A, J, C) || !1) ? (H || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, J, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, J, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = J), h.props = o, h.state = J, h.context = C, o = M) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return _v(n, r, l, o, d, c);
  }
  function _v(n, r, l, o, c, d) {
    De(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && vv(r, l, !1), un(n, r, d);
    o = r.stateNode, ey.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = ru(r, n.child, null, d), r.child = ru(r, null, S, d)) : Pt(n, r, S, d), r.memoizedState = o.state, c && vv(r, l, !0), r.child;
  }
  function Mv(n) {
    var r = n.stateNode;
    r.pendingContext ? Si(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Si(n, r.context, !1), Gf(n, r.containerInfo);
  }
  function rc(n, r, l, o, c) {
    return yt(), jf(c), r.flags |= 256, Pt(n, r, l, o), r.child;
  }
  var ml = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ed(n, r, l) {
    var o = r.pendingProps, c = pe.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Qe(pe, c & 1), n === null)
      return _s(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = zo(h, o, 0, null), n = xl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Jf(l), r.memoizedState = ml, n) : td(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return ty(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Ni(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Ni(S, d) : (d = xl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Jf(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = ml, o;
    }
    return d = n.child, n = d.sibling, o = Ni(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function td(n, r) {
    return r = zo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function cu(n, r, l, o) {
    return o !== null && jf(o), ru(r, n.child, null, l), n = td(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ty(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ro(Error(L(422))), cu(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = zo({ mode: "visible", children: o.children }, c, 0, null), d = xl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ru(r, n.child, null, h), r.child.memoizedState = Jf(h), r.memoizedState = ml, d);
    if (!(r.mode & 1))
      return cu(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(L(419)), o = Ro(d, o, void 0), cu(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, At || S) {
      if (o = St, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Va(n, c), wn(o, n, c, -1));
      }
      return pd(), o = Ro(Error(L(421))), cu(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = uy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Xn = ra(c.nextSibling), cr = r, st = !0, Or = null, n !== null && (Wn[Cn++] = an, Wn[Cn++] = ja, Wn[Cn++] = Lr, an = n.id, ja = n.overflow, Lr = r), r = td(r, o.children), r.flags |= 4096, r);
  }
  function nd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Kt(n.return, r, l);
  }
  function ac(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function rd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Pt(n, r, o.children, l), o = pe.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && nd(n, l, r);
            else if (n.tag === 19)
              nd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Qe(pe, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && gt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ac(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && gt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          ac(r, !0, l, null, d);
          break;
        case "together":
          ac(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function En(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function un(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Qa |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(L(153));
    if (r.child !== null) {
      for (n = r.child, l = Ni(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Ni(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ya(n, r, l) {
    switch (r.tag) {
      case 3:
        Mv(r), yt();
        break;
      case 5:
        fe(r);
        break;
      case 1:
        pt(r.type) && Ds(r);
        break;
      case 4:
        Gf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Qe(ha, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Qe(pe, pe.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ed(n, r, l) : (Qe(pe, pe.current & 1), n = un(n, r, l), n !== null ? n.sibling : null);
        Qe(pe, pe.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return rd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Qe(pe, pe.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, hl(n, r, l);
    }
    return un(n, r, l);
  }
  var wo, yl, Ur, Yt;
  wo = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, yl = function() {
  }, Ur = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ul(aa.current);
      var d = null;
      switch (l) {
        case "input":
          c = Pn(n, c), o = Pn(n, o), d = [];
          break;
        case "select":
          c = K({}, c, { value: void 0 }), o = K({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ii(n, c), o = Ii(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = ws);
      }
      gn(l, o);
      var h;
      l = null;
      for (M in c)
        if (!o.hasOwnProperty(M) && c.hasOwnProperty(M) && c[M] != null)
          if (M === "style") {
            var S = c[M];
            for (h in S)
              S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (It.hasOwnProperty(M) ? d || (d = []) : (d = d || []).push(M, null));
      for (M in o) {
        var C = o[M];
        if (S = c != null ? c[M] : void 0, o.hasOwnProperty(M) && C !== S && (C != null || S != null))
          if (M === "style")
            if (S) {
              for (h in S)
                !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                M,
                l
              )), l = C;
          else
            M === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(M, C)) : M === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(M, "" + C) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (It.hasOwnProperty(M) ? (C != null && M === "onScroll" && rt("scroll", n), d || S === C || (d = [])) : (d = d || []).push(M, C));
      }
      l && (d = d || []).push("style", l);
      var M = d;
      (r.updateQueue = M) && (r.flags |= 4);
    }
  }, Yt = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Do(n, r) {
    if (!st)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Tn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ny(n, r, l) {
    var o = r.pendingProps;
    switch (Hf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tn(r), null;
      case 1:
        return pt(r.type) && Mr(), Tn(r), null;
      case 3:
        return o = r.stateNode, Di(), $e(wt), $e(ge), Hs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ms(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Or !== null && (No(Or), Or = null))), yl(n, r), Tn(r), null;
      case 5:
        ke(r);
        var c = ul(au.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ur(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(L(166));
            return Tn(r), null;
          }
          if (n = ul(aa.current), Ms(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[pa] = r, o[al] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                rt("cancel", o), rt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                rt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < oo.length; c++)
                  rt(oo[c], o);
                break;
              case "source":
                rt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                rt(
                  "error",
                  o
                ), rt("load", o);
                break;
              case "details":
                rt("toggle", o);
                break;
              case "input":
                Tr(o, d), rt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, rt("invalid", o);
                break;
              case "textarea":
                Xr(o, d), rt("invalid", o);
            }
            gn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && xs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && xs(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : It.hasOwnProperty(h) && S != null && h === "onScroll" && rt("scroll", o);
              }
            switch (l) {
              case "input":
                Er(o), _a(o, d, !0);
                break;
              case "textarea":
                Er(o), ca(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = ws);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = si(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[pa] = r, n[al] = o, wo(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = jt(l, o), l) {
                case "dialog":
                  rt("cancel", n), rt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  rt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < oo.length; c++)
                    rt(oo[c], n);
                  c = o;
                  break;
                case "source":
                  rt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  rt(
                    "error",
                    n
                  ), rt("load", n), c = o;
                  break;
                case "details":
                  rt("toggle", n), c = o;
                  break;
                case "input":
                  Tr(n, o), c = Pn(n, o), rt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = K({}, o, { value: void 0 }), rt("invalid", n);
                  break;
                case "textarea":
                  Xr(n, o), c = Ii(n, o), rt("invalid", n);
                  break;
                default:
                  c = o;
              }
              gn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? tt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Pu(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && ci(n, C) : typeof C == "number" && ci(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (It.hasOwnProperty(d) ? C != null && d === "onScroll" && rt("scroll", n) : C != null && ze(n, d, C, h));
                }
              switch (l) {
                case "input":
                  Er(n), _a(n, o, !1);
                  break;
                case "textarea":
                  Er(n), ca(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Ir(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? ui(n, !!o.multiple, d, !1) : o.defaultValue != null && ui(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = ws);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Tn(r), null;
      case 6:
        if (n && r.stateNode != null)
          Yt(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(L(166));
          if (l = ul(au.current), ul(aa.current), Ms(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[pa] = r, (d = o.nodeValue !== l) && (n = cr, n !== null))
              switch (n.tag) {
                case 3:
                  xs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && xs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[pa] = r, r.stateNode = o;
        }
        return Tn(r), null;
      case 13:
        if ($e(pe), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (st && Xn !== null && r.mode & 1 && !(r.flags & 128))
            yv(), yt(), r.flags |= 98560, d = !1;
          else if (d = Ms(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(L(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(L(317));
              d[pa] = r;
            } else
              yt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Tn(r), d = !1;
          } else
            Or !== null && (No(Or), Or = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pe.current & 1 ? Qt === 0 && (Qt = 3) : pd())), r.updateQueue !== null && (r.flags |= 4), Tn(r), null);
      case 4:
        return Di(), yl(n, r), n === null && Jl(r.stateNode.containerInfo), Tn(r), null;
      case 10:
        return Ti(r.type._context), Tn(r), null;
      case 17:
        return pt(r.type) && Mr(), Tn(r), null;
      case 19:
        if ($e(pe), d = r.memoizedState, d === null)
          return Tn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            Do(d, !1);
          else {
            if (Qt !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = gt(n), h !== null) {
                  for (r.flags |= 128, Do(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Qe(pe, pe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && xt() > yu && (r.flags |= 128, o = !0, Do(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = gt(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Do(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !st)
                return Tn(r), null;
            } else
              2 * xt() - d.renderingStartTime > yu && l !== 1073741824 && (r.flags |= 128, o = !0, Do(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = xt(), r.sibling = null, l = pe.current, Qe(pe, o ? l & 1 | 2 : l & 1), r) : (Tn(r), null);
      case 22:
      case 23:
        return dd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? pr & 1073741824 && (Tn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Tn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(L(156, r.tag));
  }
  function ad(n, r) {
    switch (Hf(r), r.tag) {
      case 1:
        return pt(r.type) && Mr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Di(), $e(wt), $e(ge), Hs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ke(r), null;
      case 13:
        if ($e(pe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(L(340));
          yt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return $e(pe), null;
      case 4:
        return Di(), null;
      case 10:
        return Ti(r.type._context), null;
      case 22:
      case 23:
        return dd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ko = !1, $t = !1, Lv = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
  function fu(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          kt(n, r, o);
        }
      else
        l.current = null;
  }
  function bo(n, r, l) {
    try {
      l();
    } catch (o) {
      kt(n, r, o);
    }
  }
  var Ov = !1;
  function Nv(n, r) {
    if (_f = Ki, n = Ss(), Ua(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var h = 0, S = -1, C = -1, M = 0, H = 0, F = n, A = null;
            t:
              for (; ; ) {
                for (var I; F !== l || c !== 0 && F.nodeType !== 3 || (S = h + c), F !== d || o !== 0 && F.nodeType !== 3 || (C = h + o), F.nodeType === 3 && (h += F.nodeValue.length), (I = F.firstChild) !== null; )
                  A = F, F = I;
                for (; ; ) {
                  if (F === n)
                    break t;
                  if (A === l && ++M === c && (S = h), A === d && ++H === o && (C = h), (I = F.nextSibling) !== null)
                    break;
                  F = A, A = F.parentNode;
                }
                F = I;
              }
            l = S === -1 || C === -1 ? null : { start: S, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (nl = { focusedElem: n, selectionRange: l }, Ki = !1, Z = r; Z !== null; )
      if (r = Z, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Z = n;
      else
        for (; Z !== null; ) {
          r = Z;
          try {
            var J = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (J !== null) {
                    var ne = J.memoizedProps, Mt = J.memoizedState, x = r.stateNode, T = x.getSnapshotBeforeUpdate(r.elementType === r.type ? ne : fr(r.type, ne), Mt);
                    x.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var k = r.stateNode.containerInfo;
                  k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(L(163));
              }
          } catch (V) {
            kt(r, r.return, V);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Z = n;
            break;
          }
          Z = r.return;
        }
    return J = Ov, Ov = !1, J;
  }
  function _o(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && bo(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Mo(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function id(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function ld(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ld(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[pa], delete r[al], delete r[Of], delete r[Xm], delete r[Nf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function zv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ic(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || zv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function du(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = ws));
    else if (o !== 4 && (n = n.child, n !== null))
      for (du(n, r, l), n = n.sibling; n !== null; )
        du(n, r, l), n = n.sibling;
  }
  function ya(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (ya(n, r, l), n = n.sibling; n !== null; )
        ya(n, r, l), n = n.sibling;
  }
  var vt = null, Zt = !1;
  function Ar(n, r, l) {
    for (l = l.child; l !== null; )
      pu(n, r, l), l = l.sibling;
  }
  function pu(n, r, l) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function")
      try {
        Zr.onCommitFiberUnmount(Gu, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        $t || fu(l, r);
      case 6:
        var o = vt, c = Zt;
        vt = null, Ar(n, r, l), vt = o, Zt = c, vt !== null && (Zt ? (n = vt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : vt.removeChild(l.stateNode));
        break;
      case 18:
        vt !== null && (Zt ? (n = vt, l = l.stateNode, n.nodeType === 8 ? mi(n.parentNode, l) : n.nodeType === 1 && mi(n, l), Ku(n)) : mi(vt, l.stateNode));
        break;
      case 4:
        o = vt, c = Zt, vt = l.stateNode.containerInfo, Zt = !0, Ar(n, r, l), vt = o, Zt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$t && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && bo(l, r, h), c = c.next;
          } while (c !== o);
        }
        Ar(n, r, l);
        break;
      case 1:
        if (!$t && (fu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (S) {
            kt(l, r, S);
          }
        Ar(n, r, l);
        break;
      case 21:
        Ar(n, r, l);
        break;
      case 22:
        l.mode & 1 ? ($t = (o = $t) || l.memoizedState !== null, Ar(n, r, l), $t = o) : Ar(n, r, l);
        break;
      default:
        Ar(n, r, l);
    }
  }
  function $a(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Lv()), r.forEach(function(o) {
        var c = oy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ia(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, h = r, S = h;
          e:
            for (; S !== null; ) {
              switch (S.tag) {
                case 5:
                  vt = S.stateNode, Zt = !1;
                  break e;
                case 3:
                  vt = S.stateNode.containerInfo, Zt = !0;
                  break e;
                case 4:
                  vt = S.stateNode.containerInfo, Zt = !0;
                  break e;
              }
              S = S.return;
            }
          if (vt === null)
            throw Error(L(160));
          pu(d, h, c), vt = null, Zt = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (M) {
          kt(c, r, M);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Uv(r, n), r = r.sibling;
  }
  function Uv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ia(r, n), ga(n), o & 4) {
          try {
            _o(3, n, n.return), Mo(3, n);
          } catch (ne) {
            kt(n, n.return, ne);
          }
          try {
            _o(5, n, n.return);
          } catch (ne) {
            kt(n, n.return, ne);
          }
        }
        break;
      case 1:
        ia(r, n), ga(n), o & 512 && l !== null && fu(l, l.return);
        break;
      case 5:
        if (ia(r, n), ga(n), o & 512 && l !== null && fu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ci(c, "");
          } catch (ne) {
            kt(n, n.return, ne);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && Wr(c, d), jt(S, h);
              var M = jt(S, d);
              for (h = 0; h < C.length; h += 2) {
                var H = C[h], F = C[h + 1];
                H === "style" ? tt(c, F) : H === "dangerouslySetInnerHTML" ? Pu(c, F) : H === "children" ? ci(c, F) : ze(c, H, F, M);
              }
              switch (S) {
                case "input":
                  lr(c, d);
                  break;
                case "textarea":
                  oi(c, d);
                  break;
                case "select":
                  var A = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var I = d.value;
                  I != null ? ui(c, !!d.multiple, I, !1) : A !== !!d.multiple && (d.defaultValue != null ? ui(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : ui(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[al] = d;
            } catch (ne) {
              kt(n, n.return, ne);
            }
        }
        break;
      case 6:
        if (ia(r, n), ga(n), o & 4) {
          if (n.stateNode === null)
            throw Error(L(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ne) {
            kt(n, n.return, ne);
          }
        }
        break;
      case 3:
        if (ia(r, n), ga(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ku(r.containerInfo);
          } catch (ne) {
            kt(n, n.return, ne);
          }
        break;
      case 4:
        ia(r, n), ga(n);
        break;
      case 13:
        ia(r, n), ga(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (sd = xt())), o & 4 && $a(n);
        break;
      case 22:
        if (H = l !== null && l.memoizedState !== null, n.mode & 1 ? ($t = (M = $t) || H, ia(r, n), $t = M) : ia(r, n), ga(n), o & 8192) {
          if (M = n.memoizedState !== null, (n.stateNode.isHidden = M) && !H && n.mode & 1)
            for (Z = n, H = n.child; H !== null; ) {
              for (F = Z = H; Z !== null; ) {
                switch (A = Z, I = A.child, A.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _o(4, A, A.return);
                    break;
                  case 1:
                    fu(A, A.return);
                    var J = A.stateNode;
                    if (typeof J.componentWillUnmount == "function") {
                      o = A, l = A.return;
                      try {
                        r = o, J.props = r.memoizedProps, J.state = r.memoizedState, J.componentWillUnmount();
                      } catch (ne) {
                        kt(o, l, ne);
                      }
                    }
                    break;
                  case 5:
                    fu(A, A.return);
                    break;
                  case 22:
                    if (A.memoizedState !== null) {
                      ud(F);
                      continue;
                    }
                }
                I !== null ? (I.return = A, Z = I) : ud(F);
              }
              H = H.sibling;
            }
          e:
            for (H = null, F = n; ; ) {
              if (F.tag === 5) {
                if (H === null) {
                  H = F;
                  try {
                    c = F.stateNode, M ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = F.stateNode, C = F.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Me("display", h));
                  } catch (ne) {
                    kt(n, n.return, ne);
                  }
                }
              } else if (F.tag === 6) {
                if (H === null)
                  try {
                    F.stateNode.nodeValue = M ? "" : F.memoizedProps;
                  } catch (ne) {
                    kt(n, n.return, ne);
                  }
              } else if ((F.tag !== 22 && F.tag !== 23 || F.memoizedState === null || F === n) && F.child !== null) {
                F.child.return = F, F = F.child;
                continue;
              }
              if (F === n)
                break e;
              for (; F.sibling === null; ) {
                if (F.return === null || F.return === n)
                  break e;
                H === F && (H = null), F = F.return;
              }
              H === F && (H = null), F.sibling.return = F.return, F = F.sibling;
            }
        }
        break;
      case 19:
        ia(r, n), ga(n), o & 4 && $a(n);
        break;
      case 21:
        break;
      default:
        ia(
          r,
          n
        ), ga(n);
    }
  }
  function ga(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (zv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(L(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ci(c, ""), o.flags &= -33);
            var d = ic(n);
            ya(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = ic(n);
            du(n, S, h);
            break;
          default:
            throw Error(L(161));
        }
      } catch (C) {
        kt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Av(n, r, l) {
    Z = n, vu(n);
  }
  function vu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Z !== null; ) {
      var c = Z, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || ko;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || $t;
          S = ko;
          var M = $t;
          if (ko = h, ($t = C) && !M)
            for (Z = c; Z !== null; )
              h = Z, C = h.child, h.tag === 22 && h.memoizedState !== null ? Fv(c) : C !== null ? (C.return = h, Z = C) : Fv(c);
          for (; d !== null; )
            Z = d, vu(d), d = d.sibling;
          Z = c, ko = S, $t = M;
        }
        Hv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Z = d) : Hv(n);
    }
  }
  function Hv(n) {
    for (; Z !== null; ) {
      var r = Z;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                $t || Mo(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !$t)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : fr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && ll(r, d, o);
                break;
              case 3:
                var h = r.updateQueue;
                if (h !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  ll(r, h, l);
                }
                break;
              case 5:
                var S = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = S;
                  var C = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && l.focus();
                      break;
                    case "img":
                      C.src && (l.src = C.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var M = r.alternate;
                  if (M !== null) {
                    var H = M.memoizedState;
                    if (H !== null) {
                      var F = H.dehydrated;
                      F !== null && Ku(F);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(L(163));
            }
          $t || r.flags & 512 && id(r);
        } catch (A) {
          kt(r, r.return, A);
        }
      }
      if (r === n) {
        Z = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Z = l;
        break;
      }
      Z = r.return;
    }
  }
  function ud(n) {
    for (; Z !== null; ) {
      var r = Z;
      if (r === n) {
        Z = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Z = l;
        break;
      }
      Z = r.return;
    }
  }
  function Fv(n) {
    for (; Z !== null; ) {
      var r = Z;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Mo(4, r);
            } catch (C) {
              kt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                kt(r, c, C);
              }
            }
            var d = r.return;
            try {
              id(r);
            } catch (C) {
              kt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              id(r);
            } catch (C) {
              kt(r, h, C);
            }
        }
      } catch (C) {
        kt(r, r.return, C);
      }
      if (r === n) {
        Z = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, Z = S;
        break;
      }
      Z = r.return;
    }
  }
  var lc = Math.ceil, Lo = ut.ReactCurrentDispatcher, od = ut.ReactCurrentOwner, Rn = ut.ReactCurrentBatchConfig, Oe = 0, St = null, Dt = null, Jt = 0, pr = 0, hu = we(0), Qt = 0, Oo = null, Qa = 0, uc = 0, mu = 0, gl = null, Mn = null, sd = 0, yu = 1 / 0, Ga = null, oc = !1, Sl = null, Sa = null, Mi = !1, Li = null, sc = 0, gu = 0, cc = null, Cl = -1, El = 0;
  function xn() {
    return Oe & 6 ? xt() : Cl !== -1 ? Cl : Cl = xt();
  }
  function Ht(n) {
    return n.mode & 1 ? Oe & 2 && Jt !== 0 ? Jt & -Jt : Ls.transition !== null ? (El === 0 && (El = us()), El) : (n = We, n !== 0 || (n = window.event, n = n === void 0 ? 16 : sf(n.type)), n) : 1;
  }
  function wn(n, r, l, o) {
    if (50 < gu)
      throw gu = 0, cc = null, Error(L(185));
    qi(n, l, o), (!(Oe & 2) || n !== St) && (n === St && (!(Oe & 2) && (uc |= l), Qt === 4 && Hr(n, Jt)), Dn(n, o), l === 1 && Oe === 0 && !(r.mode & 1) && (yu = xt() + 500, qt && Gn()));
  }
  function Dn(n, r) {
    var l = n.callbackNode;
    ls(n, r);
    var o = Jr(n, n === St ? Jt : 0);
    if (o === 0)
      l !== null && wp(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && wp(l), r === 1)
        n.tag === 0 ? Uf(jv.bind(null, n)) : zf(jv.bind(null, n)), Lf(function() {
          !(Oe & 6) && Gn();
        }), l = null;
      else {
        switch (lf(o)) {
          case 1:
            l = La;
            break;
          case 4:
            l = Le;
            break;
          case 16:
            l = fi;
            break;
          case 536870912:
            l = tf;
            break;
          default:
            l = fi;
        }
        l = hd(l, Su.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Su(n, r) {
    if (Cl = -1, El = 0, Oe & 6)
      throw Error(L(327));
    var l = n.callbackNode;
    if (Eu() && n.callbackNode !== l)
      return null;
    var o = Jr(n, n === St ? Jt : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = dc(n, o);
    else {
      r = o;
      var c = Oe;
      Oe |= 2;
      var d = fc();
      (St !== n || Jt !== r) && (Ga = null, yu = xt() + 500, Tl(n, r));
      do
        try {
          ay();
          break;
        } catch (S) {
          Vv(n, S);
        }
      while (1);
      Bf(), Lo.current = d, Oe = c, Dt !== null ? r = 0 : (St = null, Jt = 0, r = Qt);
    }
    if (r !== 0) {
      if (r === 2 && (c = rf(n), c !== 0 && (o = c, r = cd(n, c))), r === 1)
        throw l = Oo, Tl(n, 0), Hr(n, o), Dn(n, xt()), l;
      if (r === 6)
        Hr(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !fd(c) && (r = dc(n, o), r === 2 && (d = rf(n), d !== 0 && (o = d, r = cd(n, d))), r === 1))
          throw l = Oo, Tl(n, 0), Hr(n, o), Dn(n, xt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(L(345));
          case 2:
            Rl(n, Mn, Ga);
            break;
          case 3:
            if (Hr(n, o), (o & 130023424) === o && (r = sd + 500 - xt(), 10 < r)) {
              if (Jr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                xn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = rl(Rl.bind(null, n, Mn, Ga), r);
              break;
            }
            Rl(n, Mn, Ga);
            break;
          case 4:
            if (Hr(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - xr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = xt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * lc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = rl(Rl.bind(null, n, Mn, Ga), o);
              break;
            }
            Rl(n, Mn, Ga);
            break;
          case 5:
            Rl(n, Mn, Ga);
            break;
          default:
            throw Error(L(329));
        }
      }
    }
    return Dn(n, xt()), n.callbackNode === l ? Su.bind(null, n) : null;
  }
  function cd(n, r) {
    var l = gl;
    return n.current.memoizedState.isDehydrated && (Tl(n, r).flags |= 256), n = dc(n, r), n !== 2 && (r = Mn, Mn = l, r !== null && No(r)), n;
  }
  function No(n) {
    Mn === null ? Mn = n : Mn.push.apply(Mn, n);
  }
  function fd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!kr(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Hr(n, r) {
    for (r &= ~mu, r &= ~uc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - xr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function jv(n) {
    if (Oe & 6)
      throw Error(L(327));
    Eu();
    var r = Jr(n, 0);
    if (!(r & 1))
      return Dn(n, xt()), null;
    var l = dc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = rf(n);
      o !== 0 && (r = o, l = cd(n, o));
    }
    if (l === 1)
      throw l = Oo, Tl(n, 0), Hr(n, r), Dn(n, xt()), l;
    if (l === 6)
      throw Error(L(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Rl(n, Mn, Ga), Dn(n, xt()), null;
  }
  function Cu(n, r) {
    var l = Oe;
    Oe |= 1;
    try {
      return n(r);
    } finally {
      Oe = l, Oe === 0 && (yu = xt() + 500, qt && Gn());
    }
  }
  function Oi(n) {
    Li !== null && Li.tag === 0 && !(Oe & 6) && Eu();
    var r = Oe;
    Oe |= 1;
    var l = Rn.transition, o = We;
    try {
      if (Rn.transition = null, We = 1, n)
        return n();
    } finally {
      We = o, Rn.transition = l, Oe = r, !(Oe & 6) && Gn();
    }
  }
  function dd() {
    pr = hu.current, $e(hu);
  }
  function Tl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pv(l)), Dt !== null)
      for (l = Dt.return; l !== null; ) {
        var o = l;
        switch (Hf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Mr();
            break;
          case 3:
            Di(), $e(wt), $e(ge), Hs();
            break;
          case 5:
            ke(o);
            break;
          case 4:
            Di();
            break;
          case 13:
            $e(pe);
            break;
          case 19:
            $e(pe);
            break;
          case 10:
            Ti(o.type._context);
            break;
          case 22:
          case 23:
            dd();
        }
        l = l.return;
      }
    if (St = n, Dt = n = Ni(n.current, null), Jt = pr = r, Qt = 0, Oo = null, mu = uc = Qa = 0, Mn = gl = null, ln !== null) {
      for (r = 0; r < ln.length; r++)
        if (l = ln[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      ln = null;
    }
    return n;
  }
  function Vv(n, r) {
    do {
      var l = Dt;
      try {
        if (Bf(), Fs.current = ec, ve) {
          for (var o = ct.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          ve = !1;
        }
        if (ol = 0, He = z = ct = null, ma = !1, dr = 0, od.current = null, l === null || l.return === null) {
          Qt = 1, Oo = r, Dt = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = Jt, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var M = C, H = S, F = H.tag;
            if (!(H.mode & 1) && (F === 0 || F === 11 || F === 15)) {
              var A = H.alternate;
              A ? (H.updateQueue = A.updateQueue, H.memoizedState = A.memoizedState, H.lanes = A.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var I = qf(h);
            if (I !== null) {
              I.flags &= -257, Kf(I, h, S, d, r), I.mode & 1 && bv(d, M, r), r = I, C = M;
              var J = r.updateQueue;
              if (J === null) {
                var ne = /* @__PURE__ */ new Set();
                ne.add(C), r.updateQueue = ne;
              } else
                J.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                bv(d, M, r), pd();
                break e;
              }
              C = Error(L(426));
            }
          } else if (st && S.mode & 1) {
            var Mt = qf(h);
            if (Mt !== null) {
              !(Mt.flags & 65536) && (Mt.flags |= 256), Kf(Mt, h, S, d, r), jf(ou(C, S));
              break e;
            }
          }
          d = C = ou(C, S), Qt !== 4 && (Qt = 2), gl === null ? gl = [d] : gl.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var x = kv(d, C, r);
                $f(d, x);
                break e;
              case 1:
                S = C;
                var T = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Sa === null || !Sa.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var V = xo(d, S, r);
                  $f(d, V);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        vd(l);
      } catch (re) {
        r = re, Dt === l && l !== null && (Dt = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function fc() {
    var n = Lo.current;
    return Lo.current = ec, n === null ? ec : n;
  }
  function pd() {
    (Qt === 0 || Qt === 3 || Qt === 2) && (Qt = 4), St === null || !(Qa & 268435455) && !(uc & 268435455) || Hr(St, Jt);
  }
  function dc(n, r) {
    var l = Oe;
    Oe |= 2;
    var o = fc();
    (St !== n || Jt !== r) && (Ga = null, Tl(n, r));
    do
      try {
        ry();
        break;
      } catch (c) {
        Vv(n, c);
      }
    while (1);
    if (Bf(), Oe = l, Lo.current = o, Dt !== null)
      throw Error(L(261));
    return St = null, Jt = 0, Qt;
  }
  function ry() {
    for (; Dt !== null; )
      Bv(Dt);
  }
  function ay() {
    for (; Dt !== null && !km(); )
      Bv(Dt);
  }
  function Bv(n) {
    var r = Yv(n.alternate, n, pr);
    n.memoizedProps = n.pendingProps, r === null ? vd(n) : Dt = r, od.current = null;
  }
  function vd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ad(l, r), l !== null) {
          l.flags &= 32767, Dt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Qt = 6, Dt = null;
          return;
        }
      } else if (l = ny(l, r, pr), l !== null) {
        Dt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Dt = r;
        return;
      }
      Dt = r = n;
    } while (r !== null);
    Qt === 0 && (Qt = 5);
  }
  function Rl(n, r, l) {
    var o = We, c = Rn.transition;
    try {
      Rn.transition = null, We = 1, iy(n, r, l, o);
    } finally {
      Rn.transition = c, We = o;
    }
    return null;
  }
  function iy(n, r, l, o) {
    do
      Eu();
    while (Li !== null);
    if (Oe & 6)
      throw Error(L(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(L(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Lm(n, d), n === St && (Dt = St = null, Jt = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Mi || (Mi = !0, hd(fi, function() {
      return Eu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Rn.transition, Rn.transition = null;
      var h = We;
      We = 1;
      var S = Oe;
      Oe |= 4, od.current = null, Nv(n, l), Uv(l, n), Cs(nl), Ki = !!_f, nl = _f = null, n.current = l, Av(l), bm(), Oe = S, We = h, Rn.transition = d;
    } else
      n.current = l;
    if (Mi && (Mi = !1, Li = n, sc = c), d = n.pendingLanes, d === 0 && (Sa = null), kp(l.stateNode), Dn(n, xt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (oc)
      throw oc = !1, n = Sl, Sl = null, n;
    return sc & 1 && n.tag !== 0 && Eu(), d = n.pendingLanes, d & 1 ? n === cc ? gu++ : (gu = 0, cc = n) : gu = 0, Gn(), null;
  }
  function Eu() {
    if (Li !== null) {
      var n = lf(sc), r = Rn.transition, l = We;
      try {
        if (Rn.transition = null, We = 16 > n ? 16 : n, Li === null)
          var o = !1;
        else {
          if (n = Li, Li = null, sc = 0, Oe & 6)
            throw Error(L(331));
          var c = Oe;
          for (Oe |= 4, Z = n.current; Z !== null; ) {
            var d = Z, h = d.child;
            if (Z.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var M = S[C];
                  for (Z = M; Z !== null; ) {
                    var H = Z;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(8, H, d);
                    }
                    var F = H.child;
                    if (F !== null)
                      F.return = H, Z = F;
                    else
                      for (; Z !== null; ) {
                        H = Z;
                        var A = H.sibling, I = H.return;
                        if (ld(H), H === M) {
                          Z = null;
                          break;
                        }
                        if (A !== null) {
                          A.return = I, Z = A;
                          break;
                        }
                        Z = I;
                      }
                  }
                }
                var J = d.alternate;
                if (J !== null) {
                  var ne = J.child;
                  if (ne !== null) {
                    J.child = null;
                    do {
                      var Mt = ne.sibling;
                      ne.sibling = null, ne = Mt;
                    } while (ne !== null);
                  }
                }
                Z = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, Z = h;
            else
              e:
                for (; Z !== null; ) {
                  if (d = Z, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(9, d, d.return);
                    }
                  var x = d.sibling;
                  if (x !== null) {
                    x.return = d.return, Z = x;
                    break e;
                  }
                  Z = d.return;
                }
          }
          var T = n.current;
          for (Z = T; Z !== null; ) {
            h = Z;
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null)
              k.return = h, Z = k;
            else
              e:
                for (h = T; Z !== null; ) {
                  if (S = Z, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Mo(9, S);
                      }
                    } catch (re) {
                      kt(S, S.return, re);
                    }
                  if (S === h) {
                    Z = null;
                    break e;
                  }
                  var V = S.sibling;
                  if (V !== null) {
                    V.return = S.return, Z = V;
                    break e;
                  }
                  Z = S.return;
                }
          }
          if (Oe = c, Gn(), Zr && typeof Zr.onPostCommitFiberRoot == "function")
            try {
              Zr.onPostCommitFiberRoot(Gu, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        We = l, Rn.transition = r;
      }
    }
    return !1;
  }
  function Pv(n, r, l) {
    r = ou(l, r), r = kv(n, r, 1), n = xi(n, r, 1), r = xn(), n !== null && (qi(n, 1, r), Dn(n, r));
  }
  function kt(n, r, l) {
    if (n.tag === 3)
      Pv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Pv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Sa === null || !Sa.has(o))) {
            n = ou(l, n), n = xo(r, n, 1), r = xi(r, n, 1), n = xn(), r !== null && (qi(r, 1, n), Dn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function ly(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = xn(), n.pingedLanes |= n.suspendedLanes & l, St === n && (Jt & l) === l && (Qt === 4 || Qt === 3 && (Jt & 130023424) === Jt && 500 > xt() - sd ? Tl(n, 0) : mu |= l), Dn(n, r);
  }
  function pc(n, r) {
    r === 0 && (n.mode & 1 ? (r = Yl, Yl <<= 1, !(Yl & 130023424) && (Yl = 4194304)) : r = 1);
    var l = xn();
    n = Va(n, r), n !== null && (qi(n, r, l), Dn(n, l));
  }
  function uy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), pc(n, l);
  }
  function oy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(L(314));
    }
    o !== null && o.delete(r), pc(n, l);
  }
  var Yv;
  Yv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || wt.current)
        At = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return At = !1, Ya(n, r, l);
        At = !!(n.flags & 131072);
      }
    else
      At = !1, st && r.flags & 1048576 && Af(r, tu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        En(n, r), n = r.pendingProps;
        var c = _r(r, ge.current);
        P(r, l), c = ki(null, r, o, n, c, l);
        var d = fl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, pt(o) ? (d = !0, Ds(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Yf(r), c.updater = zs, r.stateNode = c, c._reactInternals = r, Us(r, o, n, l), r = _v(null, r, o, !0, d, l)) : (r.tag = 0, st && d && ks(r), Pt(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (En(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = cy(o), n = fr(o, n), c) {
            case 0:
              r = su(null, r, o, n, l);
              break e;
            case 1:
              r = Zf(null, r, o, n, l);
              break e;
            case 11:
              r = _i(null, r, o, n, l);
              break e;
            case 14:
              r = nc(null, r, o, fr(o.type, n), l);
              break e;
          }
          throw Error(L(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : fr(o, c), su(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : fr(o, c), Zf(n, r, o, c, l);
      case 3:
        e: {
          if (Mv(r), n === null)
            throw Error(L(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Bt(n, r), wi(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = ou(Error(L(423)), r), r = rc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = ou(Error(L(424)), r), r = rc(n, r, o, l, c);
              break e;
            } else
              for (Xn = ra(r.stateNode.containerInfo.firstChild), cr = r, st = !0, Or = null, l = wv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (yt(), o === c) {
              r = un(n, r, l);
              break e;
            }
            Pt(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return fe(r), n === null && _s(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, fo(o, c) ? h = null : d !== null && fo(o, d) && (r.flags |= 32), De(n, r), Pt(n, r, h, l), r.child;
      case 6:
        return n === null && _s(r), null;
      case 13:
        return ed(n, r, l);
      case 4:
        return Gf(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ru(r, null, o, l) : Pt(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : fr(o, c), _i(n, r, o, c, l);
      case 7:
        return Pt(n, r, r.pendingProps, l), r.child;
      case 8:
        return Pt(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Pt(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, Qe(ha, o._currentValue), o._currentValue = h, d !== null)
            if (kr(d.value, h)) {
              if (d.children === c.children && !wt.current) {
                r = un(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var S = d.dependencies;
                if (S !== null) {
                  h = d.child;
                  for (var C = S.firstContext; C !== null; ) {
                    if (C.context === o) {
                      if (d.tag === 1) {
                        C = Ba(-1, l & -l), C.tag = 2;
                        var M = d.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var H = M.pending;
                          H === null ? C.next = C : (C.next = H.next, H.next = C), M.pending = C;
                        }
                      }
                      d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), Kt(
                        d.return,
                        l,
                        r
                      ), S.lanes |= l;
                      break;
                    }
                    C = C.next;
                  }
                } else if (d.tag === 10)
                  h = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (h = d.return, h === null)
                    throw Error(L(341));
                  h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), Kt(h, l, r), h = d.sibling;
                } else
                  h = d.child;
                if (h !== null)
                  h.return = d;
                else
                  for (h = d; h !== null; ) {
                    if (h === r) {
                      h = null;
                      break;
                    }
                    if (d = h.sibling, d !== null) {
                      d.return = h.return, h = d;
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          Pt(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, P(r, l), c = _t(c), o = o(c), r.flags |= 1, Pt(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = fr(o, r.pendingProps), c = fr(o.type, c), nc(n, r, o, c, l);
      case 15:
        return Zn(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : fr(o, c), En(n, r), r.tag = 1, pt(o) ? (n = !0, Ds(r)) : n = !1, P(r, l), Ev(r, o, c), Us(r, o, c, l), _v(null, r, o, !0, n, l);
      case 19:
        return rd(n, r, l);
      case 22:
        return hl(n, r, l);
    }
    throw Error(L(156, r.tag));
  };
  function hd(n, r) {
    return ef(n, r);
  }
  function sy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Fr(n, r, l, o) {
    return new sy(n, r, l, o);
  }
  function md(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function cy(n) {
    if (typeof n == "function")
      return md(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Vn)
        return 11;
      if (n === Sr)
        return 14;
    }
    return 2;
  }
  function Ni(n, r) {
    var l = n.alternate;
    return l === null ? (l = Fr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function vc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      md(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case be:
            return xl(l.children, c, d, r);
          case kn:
            h = 8, c |= 8;
            break;
          case ar:
            return n = Fr(12, l, r, c | 2), n.elementType = ar, n.lanes = d, n;
          case Ae:
            return n = Fr(13, l, r, c), n.elementType = Ae, n.lanes = d, n;
          case Xe:
            return n = Fr(19, l, r, c), n.elementType = Xe, n.lanes = d, n;
          case Cr:
            return zo(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ot:
                  h = 10;
                  break e;
                case it:
                  h = 9;
                  break e;
                case Vn:
                  h = 11;
                  break e;
                case Sr:
                  h = 14;
                  break e;
                case Et:
                  h = 16, o = null;
                  break e;
              }
            throw Error(L(130, n == null ? n : typeof n, ""));
        }
    return r = Fr(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function xl(n, r, l, o) {
    return n = Fr(7, n, o, r), n.lanes = l, n;
  }
  function zo(n, r, l, o) {
    return n = Fr(22, n, o, r), n.elementType = Cr, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Uo(n, r, l) {
    return n = Fr(6, n, null, r), n.lanes = l, n;
  }
  function wl(n, r, l) {
    return r = Fr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function fy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = af(0), this.expirationTimes = af(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = af(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hc(n, r, l, o, c, d, h, S, C) {
    return n = new fy(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Fr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yf(d), n;
  }
  function $v(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: mt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function yd(n) {
    if (!n)
      return va;
    n = n._reactInternals;
    e: {
      if (da(n) !== n || n.tag !== 1)
        throw Error(L(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (pt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(L(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (pt(l))
        return ho(n, l, r);
    }
    return r;
  }
  function Qv(n, r, l, o, c, d, h, S, C) {
    return n = hc(l, o, !0, n, c, d, h, S, C), n.context = yd(null), l = n.current, o = xn(), c = Ht(l), d = Ba(o, c), d.callback = r ?? null, xi(l, d, c), n.current.lanes = c, qi(n, c, o), Dn(n, o), n;
  }
  function Ao(n, r, l, o) {
    var c = r.current, d = xn(), h = Ht(c);
    return l = yd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ba(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = xi(c, r, h), n !== null && (wn(n, c, h, d), Ns(n, c, h)), h;
  }
  function mc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Gv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function gd(n, r) {
    Gv(n, r), (n = n.alternate) && Gv(n, r);
  }
  function Iv() {
    return null;
  }
  var Sd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function yc(n) {
    this._internalRoot = n;
  }
  Ia.prototype.render = yc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(L(409));
    Ao(n, r, null, null);
  }, Ia.prototype.unmount = yc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Oi(function() {
        Ao(null, n, null, null);
      }), r[Fa] = null;
    }
  };
  function Ia(n) {
    this._internalRoot = n;
  }
  Ia.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Lp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ke.length && r !== 0 && r < Ke[l].priority; l++)
        ;
      Ke.splice(l, 0, n), l === 0 && Op(n);
    }
  };
  function Cd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function gc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Wv() {
  }
  function dy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var M = mc(h);
          d.call(M);
        };
      }
      var h = Qv(r, o, n, 0, null, !1, !1, "", Wv);
      return n._reactRootContainer = h, n[Fa] = h.current, Jl(n.nodeType === 8 ? n.parentNode : n), Oi(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var M = mc(C);
        S.call(M);
      };
    }
    var C = hc(n, 0, !1, null, null, !1, !1, "", Wv);
    return n._reactRootContainer = C, n[Fa] = C.current, Jl(n.nodeType === 8 ? n.parentNode : n), Oi(function() {
      Ao(r, C, l, o);
    }), C;
  }
  function Sc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = mc(h);
          S.call(C);
        };
      }
      Ao(r, h, n, c);
    } else
      h = dy(l, r, n, c, o);
    return mc(h);
  }
  Mp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xi(r.pendingLanes);
          l !== 0 && (Iu(r, l | 1), Dn(r, xt()), !(Oe & 6) && (yu = xt() + 500, Gn()));
        }
        break;
      case 13:
        Oi(function() {
          var o = Va(n, 1);
          if (o !== null) {
            var c = xn();
            wn(o, n, 1, c);
          }
        }), gd(n, 1);
    }
  }, os = function(n) {
    if (n.tag === 13) {
      var r = Va(n, 134217728);
      if (r !== null) {
        var l = xn();
        wn(r, n, 134217728, l);
      }
      gd(n, 134217728);
    }
  }, nt = function(n) {
    if (n.tag === 13) {
      var r = Ht(n), l = Va(n, r);
      if (l !== null) {
        var o = xn();
        wn(l, n, r, o);
      }
      gd(n, r);
    }
  }, Lp = function() {
    return We;
  }, uf = function(n, r) {
    var l = We;
    try {
      return We = n, r();
    } finally {
      We = l;
    }
  }, fa = function(n, r, l) {
    switch (r) {
      case "input":
        if (lr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = oe(o);
              if (!c)
                throw Error(L(90));
              ba(o), lr(o, c);
            }
          }
        }
        break;
      case "textarea":
        oi(n, l);
        break;
      case "select":
        r = l.value, r != null && ui(n, !!l.multiple, r, !1);
    }
  }, Ep = Cu, Tp = Oi;
  var py = { usingClientEntryPoint: !1, Events: [vo, eu, oe, ts, ns, Cu] }, Tu = { findFiberByHostInstance: br, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, vy = { bundleType: Tu.bundleType, version: Tu.version, rendererPackageName: Tu.rendererPackageName, rendererConfig: Tu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Rp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Tu.findFiberByHostInstance || Iv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cc.isDisabled && Cc.supportsFiber)
      try {
        Gu = Cc.inject(vy), Zr = Cc;
      } catch {
      }
  }
  return $r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = py, $r.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Cd(r))
      throw Error(L(200));
    return $v(n, r, null, l);
  }, $r.createRoot = function(n, r) {
    if (!Cd(n))
      throw Error(L(299));
    var l = !1, o = "", c = Sd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hc(n, 1, !1, null, null, l, !1, o, c), n[Fa] = r.current, Jl(n.nodeType === 8 ? n.parentNode : n), new yc(r);
  }, $r.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(L(188)) : (n = Object.keys(n).join(","), Error(L(268, n)));
    return n = Rp(r), n = n === null ? null : n.stateNode, n;
  }, $r.flushSync = function(n) {
    return Oi(n);
  }, $r.hydrate = function(n, r, l) {
    if (!gc(r))
      throw Error(L(200));
    return Sc(null, n, r, !0, l);
  }, $r.hydrateRoot = function(n, r, l) {
    if (!Cd(n))
      throw Error(L(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Sd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = Qv(r, null, n, 1, l ?? null, c, !1, d, h), n[Fa] = r.current, Jl(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ia(r);
  }, $r.render = function(n, r, l) {
    if (!gc(r))
      throw Error(L(200));
    return Sc(null, n, r, !1, l);
  }, $r.unmountComponentAtNode = function(n) {
    if (!gc(n))
      throw Error(L(40));
    return n._reactRootContainer ? (Oi(function() {
      Sc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fa] = null;
      });
    }), !0) : !1;
  }, $r.unstable_batchedUpdates = Cu, $r.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!gc(l))
      throw Error(L(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(L(38));
    return Sc(n, r, l, !1, o);
  }, $r.version = "18.2.0-next-9e3b772b8-20220608", $r;
}
var Qr = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IE;
function Bk() {
  return IE || (IE = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var B = ka, Te = XE(), L = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, nn = !1;
    function It(e) {
      nn = e;
    }
    function Ye(e) {
      if (!nn) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ht("warn", e, a);
      }
    }
    function g(e) {
      if (!nn) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ht("error", e, a);
      }
    }
    function ht(e, t, a) {
      {
        var i = L.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var xe = 0, de = 1, rn = 2, ie = 3, he = 4, le = 5, _e = 6, et = 7, lt = 8, Gr = 9, mn = 10, ze = 11, ut = 12, Ue = 13, mt = 14, be = 15, kn = 16, ar = 17, Ot = 18, it = 19, Vn = 21, Ae = 22, Xe = 23, Sr = 24, Et = 25, Cr = !0, $ = !1, me = !1, K = !1, Ie = !1, qe = !0, Bn = !1, ir = !1, ii = !0, bn = !0, li = !0, Ir = /* @__PURE__ */ new Set(), sa = {}, Bu = {};
    function Er(e, t) {
      ba(e, t), ba(e + "Capture", t);
    }
    function ba(e, t) {
      sa[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), sa[e] = t;
      {
        var a = e.toLowerCase();
        Bu[a] = e, e === "onDoubleClick" && (Bu.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ir.add(t[i]);
    }
    var yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Pn = Object.prototype.hasOwnProperty;
    function Tr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Wr(e) {
      try {
        return lr(e), !1;
      } catch {
        return !0;
      }
    }
    function lr(e) {
      return "" + e;
    }
    function _a(e, t) {
      if (Wr(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), lr(e);
    }
    function Fl(e) {
      if (Wr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), lr(e);
    }
    function Gi(e, t) {
      if (Wr(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), lr(e);
    }
    function ui(e, t) {
      if (Wr(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tr(e)), lr(e);
    }
    function Ii(e) {
      if (Wr(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), lr(e);
    }
    function Xr(e) {
      if (Wr(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Tr(e)), lr(e);
    }
    var oi = 0, ca = 1, si = 2, Yn = 3, qr = 4, Pu = 5, ci = 6, Q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ce = Q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + Q + "][" + ce + "]*$"), tt = {}, bt = {};
    function gn(e) {
      return Pn.call(bt, e) ? !0 : Pn.call(tt, e) ? !1 : Me.test(e) ? (bt[e] = !0, !0) : (tt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function jt(e, t, a) {
      return t !== null ? t.type === oi : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Rr(e, t, a, i) {
      if (a !== null && a.type === oi)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Tt(e, t, a, i) {
      if (t === null || typeof t > "u" || Rr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Yn:
            return !t;
          case qr:
            return t === !1;
          case Pu:
            return isNaN(t);
          case ci:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function fa(e) {
      return Rt.hasOwnProperty(e) ? Rt[e] : null;
    }
    function Nt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === si || t === Yn || t === qr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Rt = {}, Cp = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Cp.forEach(function(e) {
      Rt[e] = new Nt(
        e,
        oi,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Rt[t] = new Nt(
        t,
        ca,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Rt[e] = new Nt(
        e,
        si,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Rt[e] = new Nt(
        e,
        si,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Rt[e] = new Nt(
        e,
        Yn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Rt[e] = new Nt(
        e,
        Yn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Rt[e] = new Nt(
        e,
        qr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Rt[e] = new Nt(
        e,
        ci,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Rt[e] = new Nt(
        e,
        Pu,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ts = /[\-\:]([a-z])/g, ns = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ts, ns);
      Rt[t] = new Nt(
        t,
        ca,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ts, ns);
      Rt[t] = new Nt(
        t,
        ca,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ts, ns);
      Rt[t] = new Nt(
        t,
        ca,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Rt[e] = new Nt(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ep = "xlinkHref";
    Rt[Ep] = new Nt(
      "xlinkHref",
      ca,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Rt[e] = new Nt(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Tp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, rs = !1;
    function Kc(e) {
      !rs && Tp.test(e) && (rs = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Yu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        _a(a, t), i.sanitizeURL && Kc("" + a);
        var s = i.attributeName, f = null;
        if (i.type === qr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Tt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Tt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Yn)
            return a;
          f = e.getAttribute(s);
        }
        return Tt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function as(e, t, a, i) {
      {
        if (!gn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return _a(a, t), u === "" + a ? a : u;
      }
    }
    function Wi(e, t, a, i) {
      var u = fa(t);
      if (!jt(t, u, i)) {
        if (Tt(t, a, u, i) && (a = null), i || u === null) {
          if (gn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (_a(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Yn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, E;
          R === Yn || R === qr && a === !0 ? E = "" : (_a(a, m), E = "" + a, u.sanitizeURL && Kc(E.toString())), y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
        }
      }
    }
    var jl = Symbol.for("react.element"), Kr = Symbol.for("react.portal"), Ma = Symbol.for("react.fragment"), Vl = Symbol.for("react.strict_mode"), $u = Symbol.for("react.profiler"), Zc = Symbol.for("react.provider"), Jc = Symbol.for("react.context"), Bl = Symbol.for("react.forward_ref"), da = Symbol.for("react.suspense"), Qu = Symbol.for("react.suspense_list"), Pl = Symbol.for("react.memo"), _n = Symbol.for("react.lazy"), Rp = Symbol.for("react.scope"), xp = Symbol.for("react.debug_trace_mode"), ef = Symbol.for("react.offscreen"), wp = Symbol.for("react.legacy_hidden"), km = Symbol.for("react.cache"), bm = Symbol.for("react.tracing_marker"), xt = Symbol.iterator, _m = "@@iterator";
    function La(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = xt && e[xt] || e[_m];
      return typeof t == "function" ? t : null;
    }
    var Le = Object.assign, fi = 0, Dp, tf, Gu, Zr, kp, xr, bp;
    function _p() {
    }
    _p.__reactDisabledLog = !0;
    function Mm() {
      {
        if (fi === 0) {
          Dp = console.log, tf = console.info, Gu = console.warn, Zr = console.error, kp = console.group, xr = console.groupCollapsed, bp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _p,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        fi++;
      }
    }
    function is() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Le({}, e, {
              value: Dp
            }),
            info: Le({}, e, {
              value: tf
            }),
            warn: Le({}, e, {
              value: Gu
            }),
            error: Le({}, e, {
              value: Zr
            }),
            group: Le({}, e, {
              value: kp
            }),
            groupCollapsed: Le({}, e, {
              value: xr
            }),
            groupEnd: Le({}, e, {
              value: bp
            })
          });
        }
        fi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Yl = L.ReactCurrentDispatcher, Xi;
    function Jr(e, t, a) {
      {
        if (Xi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Xi = i && i[1] || "";
          }
        return `
` + Xi + e;
      }
    }
    var nf = !1, ls;
    {
      var rf = typeof WeakMap == "function" ? WeakMap : Map;
      ls = new rf();
    }
    function us(e, t) {
      if (!e || nf)
        return "";
      {
        var a = ls.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      nf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Yl.current, Yl.current = null, Mm();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (_) {
              i = _;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (_) {
              i = _;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            i = _;
          }
          e();
        }
      } catch (_) {
        if (_ && i && typeof _.stack == "string") {
          for (var p = _.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, y = v.length - 1; m >= 1 && y >= 0 && p[m] !== v[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (p[m] !== v[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || p[m] !== v[y]) {
                    var R = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && ls.set(e, R), R;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        nf = !1, Yl.current = s, is(), Error.prepareStackTrace = u;
      }
      var E = e ? e.displayName || e.name : "", b = E ? Jr(E) : "";
      return typeof e == "function" && ls.set(e, b), b;
    }
    function af(e, t, a) {
      return us(e, !0);
    }
    function qi(e, t, a) {
      return us(e, !1);
    }
    function Lm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Iu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return us(e, Lm(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case da:
          return Jr("Suspense");
        case Qu:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Bl:
            return qi(e.render);
          case Pl:
            return Iu(e.type, t, a);
          case _n: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Iu(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function We(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return Jr(e.type);
        case kn:
          return Jr("Lazy");
        case Ue:
          return Jr("Suspense");
        case it:
          return Jr("SuspenseList");
        case xe:
        case rn:
        case be:
          return qi(e.type);
        case ze:
          return qi(e.type.render);
        case de:
          return af(e.type);
        default:
          return "";
      }
    }
    function lf(e) {
      try {
        var t = "", a = e;
        do
          t += We(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Mp(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function os(e) {
      return e.displayName || "Context";
    }
    function nt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ma:
          return "Fragment";
        case Kr:
          return "Portal";
        case $u:
          return "Profiler";
        case Vl:
          return "StrictMode";
        case da:
          return "Suspense";
        case Qu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Jc:
            var t = e;
            return os(t) + ".Consumer";
          case Zc:
            var a = e;
            return os(a._context) + ".Provider";
          case Bl:
            return Mp(e, e.render, "ForwardRef");
          case Pl:
            var i = e.displayName || null;
            return i !== null ? i : nt(e.type) || "Memo";
          case _n: {
            var u = e, s = u._payload, f = u._init;
            try {
              return nt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Lp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function uf(e) {
      return e.displayName || "Context";
    }
    function Re(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Sr:
          return "Cache";
        case Gr:
          var i = a;
          return uf(i) + ".Consumer";
        case mn:
          var u = a;
          return uf(u._context) + ".Provider";
        case Ot:
          return "DehydratedFragment";
        case ze:
          return Lp(a, a.render, "ForwardRef");
        case et:
          return "Fragment";
        case le:
          return a;
        case he:
          return "Portal";
        case ie:
          return "Root";
        case _e:
          return "Text";
        case kn:
          return nt(a);
        case lt:
          return a === Vl ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case ut:
          return "Profiler";
        case Vn:
          return "Scope";
        case Ue:
          return "Suspense";
        case it:
          return "SuspenseList";
        case Et:
          return "TracingMarker";
        case de:
        case xe:
        case ar:
        case rn:
        case mt:
        case be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Wu = L.ReactDebugCurrentFrame, zt = null, wr = !1;
    function Dr() {
      {
        if (zt === null)
          return null;
        var e = zt._debugOwner;
        if (e !== null && typeof e < "u")
          return Re(e);
      }
      return null;
    }
    function Xu() {
      return zt === null ? "" : lf(zt);
    }
    function Vt() {
      Wu.getCurrentStack = null, zt = null, wr = !1;
    }
    function Ke(e) {
      Wu.getCurrentStack = e === null ? null : Xu, zt = e, wr = !1;
    }
    function Om() {
      return zt;
    }
    function ea(e) {
      wr = e;
    }
    function Sn(e) {
      return "" + e;
    }
    function di(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Xr(e), e;
        default:
          return "";
      }
    }
    var Op = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function $l(e, t) {
      Op[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function of(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Np(e) {
      return e._valueTracker;
    }
    function qu(e) {
      e._valueTracker = null;
    }
    function Ku(e) {
      var t = "";
      return e && (of(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ql(e) {
      var t = of(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Xr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Xr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Xr(p), i = "" + p;
          },
          stopTracking: function() {
            qu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ki(e) {
      Np(e) || (e._valueTracker = Ql(e));
    }
    function zp(e) {
      if (!e)
        return !1;
      var t = Np(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ku(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ss(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var cs = !1, Zu = !1, fs = !1, sf = !1;
    function Oa(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ju(e, t) {
      var a = e, i = t.checked, u = Le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function eo(e, t) {
      $l("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zu && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), Zu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !cs && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), cs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: di(t.value != null ? t.value : i),
        controlled: Oa(t)
      };
    }
    function cf(e, t) {
      var a = e, i = t.checked;
      i != null && Wi(a, "checked", i, !1);
    }
    function Gl(e, t) {
      var a = e;
      {
        var i = Oa(t);
        !a._wrapperState.controlled && i && !sf && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), sf = !0), a._wrapperState.controlled && !i && !fs && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fs = !0);
      }
      cf(e, t);
      var u = di(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Sn(u)) : a.value !== Sn(u) && (a.value = Sn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? pi(a, t.type, u) : t.hasOwnProperty("defaultValue") && pi(a, t.type, di(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function to(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Sn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Up(e, t) {
      var a = e;
      Gl(a, t), ur(a, t);
    }
    function ur(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        _a(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = fh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            zp(f), Gl(f, p);
          }
        }
      }
    }
    function pi(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ss(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Sn(e._wrapperState.initialValue) : e.defaultValue !== Sn(a) && (e.defaultValue = Sn(a)));
    }
    var ds = !1, Il = !1, Ap = !1;
    function ps(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? B.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Il || (Il = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ap || (Ap = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ds && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ds = !0);
    }
    function ff(e, t) {
      t.value != null && e.setAttribute("value", Sn(di(t.value)));
    }
    var no = Array.isArray;
    function Wt(e) {
      return no(e);
    }
    var vs;
    vs = !1;
    function Hp() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Fp = ["value", "defaultValue"];
    function Nm(e) {
      {
        $l("select", e);
        for (var t = 0; t < Fp.length; t++) {
          var a = Fp[t];
          if (e[a] != null) {
            var i = Wt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Hp()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Hp());
          }
        }
      }
    }
    function vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = Sn(di(a)), R = null, E = 0; E < u.length; E++) {
          if (u[E].value === y) {
            u[E].selected = !0, i && (u[E].defaultSelected = !0);
            return;
          }
          R === null && !u[E].disabled && (R = u[E]);
        }
        R !== null && (R.selected = !0);
      }
    }
    function df(e, t) {
      return Le({}, t, {
        value: void 0
      });
    }
    function jp(e, t) {
      var a = e;
      Nm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !vs && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), vs = !0);
    }
    function zm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? vi(a, !!t.multiple, i, !1) : t.defaultValue != null && vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Um(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? vi(a, !!t.multiple, t.defaultValue, !0) : vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Am(e, t) {
      var a = e, i = t.value;
      i != null && vi(a, !!t.multiple, i, !1);
    }
    var pf = !1;
    function vf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Le({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Sn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Vp(e, t) {
      var a = e;
      $l("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !pf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), pf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Wt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: di(i)
      };
    }
    function Bp(e, t) {
      var a = e, i = di(t.value), u = di(t.defaultValue);
      if (i != null) {
        var s = Sn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Sn(u));
    }
    function Pp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function hf(e, t) {
      Bp(e, t);
    }
    var Na = "http://www.w3.org/1999/xhtml", Hm = "http://www.w3.org/1998/Math/MathML", mf = "http://www.w3.org/2000/svg";
    function hs(e) {
      switch (e) {
        case "svg":
          return mf;
        case "math":
          return Hm;
        default:
          return Na;
      }
    }
    function yf(e, t) {
      return e == null || e === Na ? hs(t) : e === mf && t === "foreignObject" ? Na : e;
    }
    var Fm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ms, Yp = Fm(function(e, t) {
      if (e.namespaceURI === mf && !("innerHTML" in e)) {
        ms = ms || document.createElement("div"), ms.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ms.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), $n = 1, za = 3, Ut = 8, ta = 9, Zi = 11, ys = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === za) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, $p = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Wl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Qp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Gp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Wl).forEach(function(e) {
      Gp.forEach(function(t) {
        Wl[Qp(t, e)] = Wl[e];
      });
    });
    function gs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Wl.hasOwnProperty(e) && Wl[e]) ? t + "px" : (ui(t, e), ("" + t).trim());
    }
    var Xl = /([A-Z])/g, jm = /^ms-/;
    function Vm(e) {
      return e.replace(Xl, "-$1").toLowerCase().replace(jm, "-ms-");
    }
    var Ip = function() {
    };
    {
      var Wp = /^(?:webkit|moz|o)[A-Z]/, Xp = /^-ms-/, ro = /-(.)/g, ql = /;\s*$/, Kl = {}, Zl = {}, qp = !1, gf = !1, Sf = function(e) {
        return e.replace(ro, function(t, a) {
          return a.toUpperCase();
        });
      }, Cf = function(e) {
        Kl.hasOwnProperty(e) && Kl[e] || (Kl[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Sf(e.replace(Xp, "ms-"))
        ));
      }, Kp = function(e) {
        Kl.hasOwnProperty(e) && Kl[e] || (Kl[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Zp = function(e, t) {
        Zl.hasOwnProperty(t) && Zl[t] || (Zl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ql, "")));
      }, Jp = function(e, t) {
        qp || (qp = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Bm = function(e, t) {
        gf || (gf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Ip = function(e, t) {
        e.indexOf("-") > -1 ? Cf(e) : Wp.test(e) ? Kp(e) : ql.test(t) && Zp(e, t), typeof t == "number" && (isNaN(t) ? Jp(e, t) : isFinite(t) || Bm(e, t));
      };
    }
    var Pm = Ip;
    function Ym(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Vm(i)) + ":", t += gs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ev(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Pm(i, t[i]);
          var s = gs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function $m(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function kr(e) {
      var t = {};
      for (var a in e)
        for (var i = $p[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ao(e, t) {
      {
        if (!t)
          return;
        var a = kr(e), i = kr(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", $m(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var tv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, nv = Le({
      menuitem: !0
    }, tv), rv = "__html";
    function Ss(e, t) {
      if (t) {
        if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(rv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ua(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Cs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, av = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, na = {}, Ef = new RegExp("^(aria)-[" + ce + "]*$"), io = new RegExp("^(aria)[A-Z][" + ce + "]*$");
    function Tf(e, t) {
      {
        if (Pn.call(na, t) && na[t])
          return !0;
        if (io.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = av.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), na[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), na[t] = !0, !0;
        }
        if (Ef.test(t)) {
          var u = t.toLowerCase(), s = av.hasOwnProperty(u) ? u : null;
          if (s == null)
            return na[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), na[t] = !0, !0;
        }
      }
      return !0;
    }
    function iv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Tf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Es(e, t) {
      Ua(e, t) || iv(e, t);
    }
    var Ji = !1;
    function Rf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ji && (Ji = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var xf = function() {
    };
    {
      var Xt = {}, wf = /^on./, lv = /^on[^A-Z]/, uv = new RegExp("^(aria)-[" + ce + "]*$"), ov = new RegExp("^(aria)[A-Z][" + ce + "]*$");
      xf = function(e, t, a, i) {
        if (Pn.call(Xt, t) && Xt[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xt[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Xt[t] = !0, !0;
          if (wf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Xt[t] = !0, !0;
        } else if (wf.test(t))
          return lv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xt[t] = !0, !0;
        if (uv.test(t) || ov.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xt[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xt[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Xt[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xt[t] = !0, !0;
        var v = fa(t), m = v !== null && v.type === oi;
        if (Cs.hasOwnProperty(u)) {
          var y = Cs[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Xt[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Xt[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Xt[t] = !0, !0) : m ? !0 : Rr(t, a, v, !1) ? (Xt[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Yn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Xt[t] = !0), !0);
      };
    }
    var sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = xf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function cv(e, t, a) {
      Ua(e, t) || sv(e, t, a);
    }
    var Aa = 1, lo = 2, el = 4, Qm = Aa | lo | el, uo = null;
    function oo(e) {
      uo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), uo = e;
    }
    function Gm() {
      uo === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), uo = null;
    }
    function fv(e) {
      return e === uo;
    }
    function Ts(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === za ? t.parentNode : t;
    }
    var rt = null, hi = null, Ha = null;
    function Jl(e) {
      var t = wu(e);
      if (t) {
        if (typeof rt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = fh(a);
          rt(t.stateNode, t.type, i);
        }
      }
    }
    function dv(e) {
      rt = e;
    }
    function Rs(e) {
      hi ? Ha ? Ha.push(e) : Ha = [e] : hi = e;
    }
    function so() {
      return hi !== null || Ha !== null;
    }
    function co() {
      if (hi) {
        var e = hi, t = Ha;
        if (hi = null, Ha = null, Jl(e), t)
          for (var a = 0; a < t.length; a++)
            Jl(t[a]);
      }
    }
    var tl = function(e, t) {
      return e(t);
    }, Df = function() {
    }, kf = !1;
    function Im() {
      var e = so();
      e && (Df(), co());
    }
    function bf(e, t, a) {
      if (kf)
        return e(t, a);
      kf = !0;
      try {
        return tl(e, t, a);
      } finally {
        kf = !1, Im();
      }
    }
    function xs(e, t, a) {
      tl = e, Df = a;
    }
    function ws(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function _f(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && ws(t));
        default:
          return !1;
      }
    }
    function nl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = fh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (_f(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var fo = !1;
    if (yn)
      try {
        var rl = {};
        Object.defineProperty(rl, "passive", {
          get: function() {
            fo = !0;
          }
        }), window.addEventListener("test", rl, rl), window.removeEventListener("test", rl, rl);
      } catch {
        fo = !1;
      }
    function pv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Mf = pv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Lf = document.createElement("react");
      Mf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, E = !0, b = window.event, _ = Object.getOwnPropertyDescriptor(window, "event");
        function O() {
          Lf.removeEventListener(N, se, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = b);
        }
        var X = Array.prototype.slice.call(arguments, 3);
        function se() {
          R = !0, O(), a.apply(i, X), E = !1;
        }
        var ae, je = !1, Ne = !1;
        function w(D) {
          if (ae = D.error, je = !0, ae === null && D.colno === 0 && D.lineno === 0 && (Ne = !0), D.defaultPrevented && ae != null && typeof ae == "object")
            try {
              ae._suppressLogging = !0;
            } catch {
            }
        }
        var N = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", w), Lf.addEventListener(N, se, !1), y.initEvent(N, !1, !1), Lf.dispatchEvent(y), _ && Object.defineProperty(window, "event", _), R && E && (je ? Ne && (ae = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ae = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ae)), window.removeEventListener("error", w), !R)
          return O(), pv.apply(this, arguments);
      };
    }
    var Wm = Mf, mi = !1, ra = null, po = !1, yi = null, pa = {
      onError: function(e) {
        mi = !0, ra = e;
      }
    };
    function al(e, t, a, i, u, s, f, p, v) {
      mi = !1, ra = null, Wm.apply(pa, arguments);
    }
    function Fa(e, t, a, i, u, s, f, p, v) {
      if (al.apply(this, arguments), mi) {
        var m = Nf();
        po || (po = !0, yi = m);
      }
    }
    function Of() {
      if (po) {
        var e = yi;
        throw po = !1, yi = null, e;
      }
    }
    function Xm() {
      return mi;
    }
    function Nf() {
      if (mi) {
        var e = ra;
        return mi = !1, ra = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function br(e) {
      return e._reactInternals;
    }
    function vo(e) {
      return e._reactInternals !== void 0;
    }
    function eu(e, t) {
      e._reactInternals = t;
    }
    var oe = (
      /*                      */
      0
    ), gi = (
      /*                */
      1
    ), ot = (
      /*                    */
      2
    ), we = (
      /*                       */
      4
    ), $e = (
      /*                */
      16
    ), Qe = (
      /*                 */
      32
    ), va = (
      /*                     */
      64
    ), ge = (
      /*                   */
      128
    ), wt = (
      /*            */
      256
    ), Qn = (
      /*                          */
      512
    ), _r = (
      /*                     */
      1024
    ), pt = (
      /*                      */
      2048
    ), Mr = (
      /*                    */
      4096
    ), Si = (
      /*                   */
      8192
    ), ho = (
      /*             */
      16384
    ), Ds = pt | we | va | Qn | _r | ho, vv = (
      /*               */
      32767
    ), or = (
      /*                   */
      32768
    ), qt = (
      /*                */
      65536
    ), mo = (
      /* */
      131072
    ), zf = (
      /*                       */
      1048576
    ), Uf = (
      /*                    */
      2097152
    ), Gn = (
      /*                 */
      4194304
    ), Ci = (
      /*                */
      8388608
    ), In = (
      /*               */
      16777216
    ), il = (
      /*              */
      33554432
    ), tu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      we | _r | 0
    ), Wn = ot | we | $e | Qe | Qn | Mr | Si, Cn = we | va | Qn | Si, Lr = pt | $e, an = Gn | Ci | Uf, ja = L.ReactCurrentOwner;
    function sr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ot | Mr)) !== oe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ie ? a : null;
    }
    function Af(e) {
      if (e.tag === Ue) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function ks(e) {
      return e.tag === ie ? e.stateNode.containerInfo : null;
    }
    function Hf(e) {
      return sr(e) === e;
    }
    function cr(e) {
      {
        var t = ja.current;
        if (t !== null && t.tag === de) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Re(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = br(e);
      return u ? sr(u) === u : !1;
    }
    function Xn(e) {
      if (sr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function st(e) {
      var t = e.alternate;
      if (!t) {
        var a = sr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Xn(s), e;
            if (v === u)
              return Xn(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, y = s.child; y; ) {
            if (y === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (y === u) {
              m = !0, u = s, i = f;
              break;
            }
            y = y.sibling;
          }
          if (!m) {
            for (y = f.child; y; ) {
              if (y === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (y === u) {
                m = !0, u = f, i = s;
                break;
              }
              y = y.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ie)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Or(e) {
      var t = st(e);
      return t !== null ? Ff(t) : null;
    }
    function Ff(e) {
      if (e.tag === le || e.tag === _e)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Ff(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hv(e) {
      var t = st(e);
      return t !== null ? bs(t) : null;
    }
    function bs(e) {
      if (e.tag === le || e.tag === _e)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== he) {
          var a = bs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var _s = Te.unstable_scheduleCallback, mv = Te.unstable_cancelCallback, Ms = Te.unstable_shouldYield, yv = Te.unstable_requestPaint, yt = Te.unstable_now, jf = Te.unstable_getCurrentPriorityLevel, Ls = Te.unstable_ImmediatePriority, fr = Te.unstable_UserBlockingPriority, ha = Te.unstable_NormalPriority, Os = Te.unstable_LowPriority, Ei = Te.unstable_IdlePriority, Vf = Te.unstable_yieldValue, Bf = Te.unstable_setDisableYieldValue, Ti = null, Kt = null, P = null, _t = !1, ln = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Pf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ii && (e = Le({}, e, {
          getLaneLabelMap: xi,
          injectProfilingHooks: Ba
        })), Ti = t.inject(e), Kt = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gv(e, t) {
      if (Kt && typeof Kt.onScheduleFiberRoot == "function")
        try {
          Kt.onScheduleFiberRoot(Ti, e, t);
        } catch (a) {
          _t || (_t = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Va(e, t) {
      if (Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ge) === ge;
          if (bn) {
            var i;
            switch (t) {
              case En:
                i = Ls;
                break;
              case un:
                i = fr;
                break;
              case Ya:
                i = ha;
                break;
              case wo:
                i = Ei;
                break;
              default:
                i = ha;
                break;
            }
            Kt.onCommitFiberRoot(Ti, e, i, a);
          }
        } catch (u) {
          _t || (_t = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Ri(e) {
      if (Kt && typeof Kt.onPostCommitFiberRoot == "function")
        try {
          Kt.onPostCommitFiberRoot(Ti, e);
        } catch (t) {
          _t || (_t = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Yf(e) {
      if (Kt && typeof Kt.onCommitFiberUnmount == "function")
        try {
          Kt.onCommitFiberUnmount(Ti, e);
        } catch (t) {
          _t || (_t = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Bt(e) {
      if (typeof Vf == "function" && (Bf(e), It(e)), Kt && typeof Kt.setStrictMode == "function")
        try {
          Kt.setStrictMode(Ti, e);
        } catch (t) {
          _t || (_t = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ba(e) {
      P = e;
    }
    function xi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < ct; a++) {
          var i = qm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ns(e) {
      P !== null && typeof P.markCommitStarted == "function" && P.markCommitStarted(e);
    }
    function $f() {
      P !== null && typeof P.markCommitStopped == "function" && P.markCommitStopped();
    }
    function wi(e) {
      P !== null && typeof P.markComponentRenderStarted == "function" && P.markComponentRenderStarted(e);
    }
    function ll() {
      P !== null && typeof P.markComponentRenderStopped == "function" && P.markComponentRenderStopped();
    }
    function Sv(e) {
      P !== null && typeof P.markComponentPassiveEffectMountStarted == "function" && P.markComponentPassiveEffectMountStarted(e);
    }
    function Qf() {
      P !== null && typeof P.markComponentPassiveEffectMountStopped == "function" && P.markComponentPassiveEffectMountStopped();
    }
    function zs(e) {
      P !== null && typeof P.markComponentPassiveEffectUnmountStarted == "function" && P.markComponentPassiveEffectUnmountStarted(e);
    }
    function Cv() {
      P !== null && typeof P.markComponentPassiveEffectUnmountStopped == "function" && P.markComponentPassiveEffectUnmountStopped();
    }
    function Ev(e) {
      P !== null && typeof P.markComponentLayoutEffectMountStarted == "function" && P.markComponentLayoutEffectMountStarted(e);
    }
    function Tv() {
      P !== null && typeof P.markComponentLayoutEffectMountStopped == "function" && P.markComponentLayoutEffectMountStopped();
    }
    function Us(e) {
      P !== null && typeof P.markComponentLayoutEffectUnmountStarted == "function" && P.markComponentLayoutEffectUnmountStarted(e);
    }
    function nu() {
      P !== null && typeof P.markComponentLayoutEffectUnmountStopped == "function" && P.markComponentLayoutEffectUnmountStopped();
    }
    function As(e, t, a) {
      P !== null && typeof P.markComponentErrored == "function" && P.markComponentErrored(e, t, a);
    }
    function Rv(e, t, a) {
      P !== null && typeof P.markComponentSuspended == "function" && P.markComponentSuspended(e, t, a);
    }
    function xv(e) {
      P !== null && typeof P.markLayoutEffectsStarted == "function" && P.markLayoutEffectsStarted(e);
    }
    function ru() {
      P !== null && typeof P.markLayoutEffectsStopped == "function" && P.markLayoutEffectsStopped();
    }
    function wv(e) {
      P !== null && typeof P.markPassiveEffectsStarted == "function" && P.markPassiveEffectsStarted(e);
    }
    function yo() {
      P !== null && typeof P.markPassiveEffectsStopped == "function" && P.markPassiveEffectsStopped();
    }
    function aa(e) {
      P !== null && typeof P.markRenderStarted == "function" && P.markRenderStarted(e);
    }
    function go() {
      P !== null && typeof P.markRenderYielded == "function" && P.markRenderYielded();
    }
    function au() {
      P !== null && typeof P.markRenderStopped == "function" && P.markRenderStopped();
    }
    function ul(e) {
      P !== null && typeof P.markRenderScheduled == "function" && P.markRenderScheduled(e);
    }
    function Gf(e, t) {
      P !== null && typeof P.markForceUpdateScheduled == "function" && P.markForceUpdateScheduled(e, t);
    }
    function Di(e, t) {
      P !== null && typeof P.markStateUpdateScheduled == "function" && P.markStateUpdateScheduled(e, t);
    }
    var fe = (
      /*                         */
      0
    ), ke = (
      /*                 */
      1
    ), pe = (
      /*                    */
      2
    ), gt = (
      /*               */
      8
    ), Nr = (
      /*              */
      16
    ), Hs = Math.clz32 ? Math.clz32 : ol, Fs = Math.log, If = Math.LN2;
    function ol(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fs(t) / If | 0) | 0;
    }
    var ct = 31, z = (
      /*                        */
      0
    ), He = (
      /*                          */
      0
    ), ve = (
      /*                        */
      1
    ), ma = (
      /*    */
      2
    ), dr = (
      /*             */
      4
    ), sl = (
      /*            */
      8
    ), ft = (
      /*                     */
      16
    ), cl = (
      /*                */
      32
    ), ki = (
      /*                       */
      4194240
    ), fl = (
      /*                        */
      64
    ), zr = (
      /*                        */
      128
    ), qn = (
      /*                        */
      256
    ), dl = (
      /*                        */
      512
    ), So = (
      /*                        */
      1024
    ), Co = (
      /*                        */
      2048
    ), js = (
      /*                        */
      4096
    ), Vs = (
      /*                        */
      8192
    ), Bs = (
      /*                        */
      16384
    ), Ps = (
      /*                       */
      32768
    ), Ys = (
      /*                       */
      65536
    ), $s = (
      /*                       */
      131072
    ), Qs = (
      /*                       */
      262144
    ), Gs = (
      /*                       */
      524288
    ), pl = (
      /*                       */
      1048576
    ), Is = (
      /*                       */
      2097152
    ), vl = (
      /*                            */
      130023424
    ), Pa = (
      /*                             */
      4194304
    ), Ws = (
      /*                             */
      8388608
    ), Eo = (
      /*                             */
      16777216
    ), Xs = (
      /*                             */
      33554432
    ), qs = (
      /*                             */
      67108864
    ), Wf = Pa, iu = (
      /*          */
      134217728
    ), Ks = (
      /*                          */
      268435455
    ), lu = (
      /*               */
      268435456
    ), bi = (
      /*                        */
      536870912
    ), Kn = (
      /*                   */
      1073741824
    );
    function qm(e) {
      {
        if (e & ve)
          return "Sync";
        if (e & ma)
          return "InputContinuousHydration";
        if (e & dr)
          return "InputContinuous";
        if (e & sl)
          return "DefaultHydration";
        if (e & ft)
          return "Default";
        if (e & cl)
          return "TransitionHydration";
        if (e & ki)
          return "Transition";
        if (e & vl)
          return "Retry";
        if (e & iu)
          return "SelectiveHydration";
        if (e & lu)
          return "IdleHydration";
        if (e & bi)
          return "Idle";
        if (e & Kn)
          return "Offscreen";
      }
    }
    var at = -1, Zs = fl, Js = Pa;
    function uu(e) {
      switch (At(e)) {
        case ve:
          return ve;
        case ma:
          return ma;
        case dr:
          return dr;
        case sl:
          return sl;
        case ft:
          return ft;
        case cl:
          return cl;
        case fl:
        case zr:
        case qn:
        case dl:
        case So:
        case Co:
        case js:
        case Vs:
        case Bs:
        case Ps:
        case Ys:
        case $s:
        case Qs:
        case Gs:
        case pl:
        case Is:
          return e & ki;
        case Pa:
        case Ws:
        case Eo:
        case Xs:
        case qs:
          return e & vl;
        case iu:
          return iu;
        case lu:
          return lu;
        case bi:
          return bi;
        case Kn:
          return Kn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function To(e, t) {
      var a = e.pendingLanes;
      if (a === z)
        return z;
      var i = z, u = e.suspendedLanes, s = e.pingedLanes, f = a & Ks;
      if (f !== z) {
        var p = f & ~u;
        if (p !== z)
          i = uu(p);
        else {
          var v = f & s;
          v !== z && (i = uu(v));
        }
      } else {
        var m = a & ~u;
        m !== z ? i = uu(m) : s !== z && (i = uu(s));
      }
      if (i === z)
        return z;
      if (t !== z && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === z) {
        var y = At(i), R = At(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === ft && (R & ki) !== z
        )
          return t;
      }
      (i & dr) !== z && (i |= a & ft);
      var E = e.entangledLanes;
      if (E !== z)
        for (var b = e.entanglements, _ = i & E; _ > 0; ) {
          var O = _i(_), X = 1 << O;
          i |= b[O], _ &= ~X;
        }
      return i;
    }
    function Dv(e, t) {
      for (var a = e.eventTimes, i = at; t > 0; ) {
        var u = _i(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function ec(e, t) {
      switch (e) {
        case ve:
        case ma:
        case dr:
          return t + 250;
        case sl:
        case ft:
        case cl:
        case fl:
        case zr:
        case qn:
        case dl:
        case So:
        case Co:
        case js:
        case Vs:
        case Bs:
        case Ps:
        case Ys:
        case $s:
        case Qs:
        case Gs:
        case pl:
        case Is:
          return t + 5e3;
        case Pa:
        case Ws:
        case Eo:
        case Xs:
        case qs:
          return at;
        case iu:
        case lu:
        case bi:
        case Kn:
          return at;
        default:
          return g("Should have found matching lanes. This is a bug in React."), at;
      }
    }
    function Km(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _i(f), v = 1 << p, m = s[p];
        m === at ? ((v & i) === z || (v & u) !== z) && (s[p] = ec(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Zm(e) {
      return uu(e.pendingLanes);
    }
    function Xf(e) {
      var t = e.pendingLanes & ~Kn;
      return t !== z ? t : t & Kn ? Kn : z;
    }
    function ou(e) {
      return (e & ve) !== z;
    }
    function Ro(e) {
      return (e & Ks) !== z;
    }
    function tc(e) {
      return (e & vl) === e;
    }
    function Jm(e) {
      var t = ve | dr | ft;
      return (e & t) === z;
    }
    function kv(e) {
      return (e & ki) === e;
    }
    function xo(e, t) {
      var a = ma | dr | sl | ft;
      return (t & a) !== z;
    }
    function bv(e, t) {
      return (t & e.expiredLanes) !== z;
    }
    function qf(e) {
      return (e & ki) !== z;
    }
    function Kf() {
      var e = Zs;
      return Zs <<= 1, (Zs & ki) === z && (Zs = fl), e;
    }
    function ey() {
      var e = Js;
      return Js <<= 1, (Js & vl) === z && (Js = Pa), e;
    }
    function At(e) {
      return e & -e;
    }
    function Pt(e) {
      return At(e);
    }
    function _i(e) {
      return 31 - Hs(e);
    }
    function nc(e) {
      return _i(e);
    }
    function Zn(e, t) {
      return (e & t) !== z;
    }
    function hl(e, t) {
      return (e & t) === t;
    }
    function De(e, t) {
      return e | t;
    }
    function su(e, t) {
      return e & ~t;
    }
    function Zf(e, t) {
      return e & t;
    }
    function _v(e) {
      return e;
    }
    function Mv(e, t) {
      return e !== He && e < t ? e : t;
    }
    function rc(e) {
      for (var t = [], a = 0; a < ct; a++)
        t.push(e);
      return t;
    }
    function ml(e, t, a) {
      e.pendingLanes |= t, t !== bi && (e.suspendedLanes = z, e.pingedLanes = z);
      var i = e.eventTimes, u = nc(t);
      i[u] = a;
    }
    function Jf(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = _i(i), s = 1 << u;
        a[u] = at, i &= ~s;
      }
    }
    function ed(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function td(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = z, e.pingedLanes = z, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _i(f), v = 1 << p;
        i[p] = z, u[p] = at, s[p] = at, f &= ~v;
      }
    }
    function cu(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = _i(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ty(e, t) {
      var a = At(t), i;
      switch (a) {
        case dr:
          i = ma;
          break;
        case ft:
          i = sl;
          break;
        case fl:
        case zr:
        case qn:
        case dl:
        case So:
        case Co:
        case js:
        case Vs:
        case Bs:
        case Ps:
        case Ys:
        case $s:
        case Qs:
        case Gs:
        case pl:
        case Is:
        case Pa:
        case Ws:
        case Eo:
        case Xs:
        case qs:
          i = cl;
          break;
        case bi:
          i = lu;
          break;
        default:
          i = He;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== He ? He : i;
    }
    function nd(e, t, a) {
      if (ln)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = nc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function ac(e, t) {
      if (ln)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = nc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function rd(e, t) {
      return null;
    }
    var En = ve, un = dr, Ya = ft, wo = bi, yl = He;
    function Ur() {
      return yl;
    }
    function Yt(e) {
      yl = e;
    }
    function Do(e, t) {
      var a = yl;
      try {
        return yl = e, t();
      } finally {
        yl = a;
      }
    }
    function Tn(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ny(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ad(e, t) {
      return e !== 0 && e < t;
    }
    function ko(e) {
      var t = At(e);
      return ad(En, t) ? ad(un, t) ? Ro(t) ? Ya : wo : un : En;
    }
    function $t(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Lv;
    function Z(e) {
      Lv = e;
    }
    function fu(e) {
      Lv(e);
    }
    var bo;
    function Ov(e) {
      bo = e;
    }
    var Nv;
    function _o(e) {
      Nv = e;
    }
    var Mo;
    function id(e) {
      Mo = e;
    }
    var ld;
    function zv(e) {
      ld = e;
    }
    var ic = !1, du = [], ya = null, vt = null, Zt = null, Ar = /* @__PURE__ */ new Map(), pu = /* @__PURE__ */ new Map(), $a = [], ia = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Uv(e) {
      return ia.indexOf(e) > -1;
    }
    function ga(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Av(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ya = null;
          break;
        case "dragenter":
        case "dragleave":
          vt = null;
          break;
        case "mouseover":
        case "mouseout":
          Zt = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ar.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          pu.delete(i);
          break;
        }
      }
    }
    function vu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ga(t, a, i, u, s);
        if (t !== null) {
          var p = wu(t);
          p !== null && bo(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Hv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ya = vu(ya, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return vt = vu(vt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Zt = vu(Zt, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return Ar.set(m, vu(Ar.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return pu.set(R, vu(pu.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function ud(e) {
      var t = jo(e.target);
      if (t !== null) {
        var a = sr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ue) {
            var u = Af(a);
            if (u !== null) {
              e.blockedOn = u, ld(e.priority, function() {
                Nv(a);
              });
              return;
            }
          } else if (i === ie) {
            var s = a.stateNode;
            if ($t(s)) {
              e.blockedOn = ks(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Fv(e) {
      for (var t = Mo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < $a.length && ad(t, $a[i].priority); i++)
        ;
      $a.splice(i, 0, a), i === 0 && ud(a);
    }
    function lc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = gl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          oo(s), u.target.dispatchEvent(s), Gm();
        } else {
          var f = wu(i);
          return f !== null && bo(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Lo(e, t, a) {
      lc(e) && a.delete(t);
    }
    function od() {
      ic = !1, ya !== null && lc(ya) && (ya = null), vt !== null && lc(vt) && (vt = null), Zt !== null && lc(Zt) && (Zt = null), Ar.forEach(Lo), pu.forEach(Lo);
    }
    function Rn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ic || (ic = !0, Te.unstable_scheduleCallback(Te.unstable_NormalPriority, od)));
    }
    function Oe(e) {
      if (du.length > 0) {
        Rn(du[0], e);
        for (var t = 1; t < du.length; t++) {
          var a = du[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ya !== null && Rn(ya, e), vt !== null && Rn(vt, e), Zt !== null && Rn(Zt, e);
      var i = function(p) {
        return Rn(p, e);
      };
      Ar.forEach(i), pu.forEach(i);
      for (var u = 0; u < $a.length; u++) {
        var s = $a[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; $a.length > 0; ) {
        var f = $a[0];
        if (f.blockedOn !== null)
          break;
        ud(f), f.blockedOn === null && $a.shift();
      }
    }
    var St = L.ReactCurrentBatchConfig, Dt = !0;
    function Jt(e) {
      Dt = !!e;
    }
    function pr() {
      return Dt;
    }
    function hu(e, t, a) {
      var i = Mn(t), u;
      switch (i) {
        case En:
          u = Qt;
          break;
        case un:
          u = Oo;
          break;
        case Ya:
        default:
          u = Qa;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Qt(e, t, a, i) {
      var u = Ur(), s = St.transition;
      St.transition = null;
      try {
        Yt(En), Qa(e, t, a, i);
      } finally {
        Yt(u), St.transition = s;
      }
    }
    function Oo(e, t, a, i) {
      var u = Ur(), s = St.transition;
      St.transition = null;
      try {
        Yt(un), Qa(e, t, a, i);
      } finally {
        Yt(u), St.transition = s;
      }
    }
    function Qa(e, t, a, i) {
      Dt && uc(e, t, a, i);
    }
    function uc(e, t, a, i) {
      var u = gl(e, t, a, i);
      if (u === null) {
        Ty(e, t, i, mu, a), Av(e, i);
        return;
      }
      if (Hv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Av(e, i), t & el && Uv(e)) {
        for (; u !== null; ) {
          var s = wu(u);
          s !== null && fu(s);
          var f = gl(e, t, a, i);
          if (f === null && Ty(e, t, i, mu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ty(e, t, i, null, a);
    }
    var mu = null;
    function gl(e, t, a, i) {
      mu = null;
      var u = Ts(i), s = jo(u);
      if (s !== null) {
        var f = sr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ue) {
            var v = Af(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ie) {
            var m = f.stateNode;
            if ($t(m))
              return ks(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return mu = s, null;
    }
    function Mn(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return En;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return un;
        case "message": {
          var t = jf();
          switch (t) {
            case Ls:
              return En;
            case fr:
              return un;
            case ha:
            case Os:
              return Ya;
            case Ei:
              return wo;
            default:
              return Ya;
          }
        }
        default:
          return Ya;
      }
    }
    function sd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function yu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ga(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function oc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Sl = null, Sa = null, Mi = null;
    function Li(e) {
      return Sl = e, Sa = cc(), !0;
    }
    function sc() {
      Sl = null, Sa = null, Mi = null;
    }
    function gu() {
      if (Mi)
        return Mi;
      var e, t = Sa, a = t.length, i, u = cc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Mi = u.slice(e, p), Mi;
    }
    function cc() {
      return "value" in Sl ? Sl.value : Sl.textContent;
    }
    function Cl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function El() {
      return !0;
    }
    function xn() {
      return !1;
    }
    function Ht(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = El : this.isDefaultPrevented = xn, this.isPropagationStopped = xn, this;
      }
      return Le(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = El);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = El);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: El
      }), t;
    }
    var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Dn = Ht(wn), Su = Le({}, wn, {
      view: 0,
      detail: 0
    }), cd = Ht(Su), No, fd, Hr;
    function jv(e) {
      e !== Hr && (Hr && e.type === "mousemove" ? (No = e.screenX - Hr.screenX, fd = e.screenY - Hr.screenY) : (No = 0, fd = 0), Hr = e);
    }
    var Cu = Le({}, Su, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (jv(e), No);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : fd;
      }
    }), Oi = Ht(Cu), dd = Le({}, Cu, {
      dataTransfer: 0
    }), Tl = Ht(dd), Vv = Le({}, Su, {
      relatedTarget: 0
    }), fc = Ht(Vv), pd = Le({}, wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dc = Ht(pd), ry = Le({}, wn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ay = Ht(ry), Bv = Le({}, wn, {
      data: 0
    }), vd = Ht(Bv), Rl = vd, iy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Eu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Pv(e) {
      if (e.key) {
        var t = iy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Cl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Eu[e.keyCode] || "Unidentified" : "";
    }
    var kt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ly(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = kt[e];
      return i ? !!a[i] : !1;
    }
    function pc(e) {
      return ly;
    }
    var uy = Le({}, Su, {
      key: Pv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Cl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Cl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), oy = Ht(uy), Yv = Le({}, Cu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), hd = Ht(Yv), sy = Le({}, Su, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pc
    }), Fr = Ht(sy), md = Le({}, wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cy = Ht(md), Ni = Le({}, Cu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), vc = Ht(Ni), xl = [9, 13, 27, 32], zo = 229, Uo = yn && "CompositionEvent" in window, wl = null;
    yn && "documentMode" in document && (wl = document.documentMode);
    var fy = yn && "TextEvent" in window && !wl, hc = yn && (!Uo || wl && wl > 8 && wl <= 11), $v = 32, yd = String.fromCharCode($v);
    function Qv() {
      Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Er("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ao = !1;
    function mc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Gv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function gd(e, t) {
      return e === "keydown" && t.keyCode === zo;
    }
    function Iv(e, t) {
      switch (e) {
        case "keyup":
          return xl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== zo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Sd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function yc(e) {
      return e.locale === "ko";
    }
    var Ia = !1;
    function Cd(e, t, a, i, u) {
      var s, f;
      if (Uo ? s = Gv(t) : Ia ? Iv(t, i) && (s = "onCompositionEnd") : gd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      hc && !yc(i) && (!Ia && s === "onCompositionStart" ? Ia = Li(u) : s === "onCompositionEnd" && Ia && (f = gu()));
      var p = Zv(a, s);
      if (p.length > 0) {
        var v = new vd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Sd(i);
          m !== null && (v.data = m);
        }
      }
    }
    function gc(e, t) {
      switch (e) {
        case "compositionend":
          return Sd(t);
        case "keypress":
          var a = t.which;
          return a !== $v ? null : (Ao = !0, yd);
        case "textInput":
          var i = t.data;
          return i === yd && Ao ? null : i;
        default:
          return null;
      }
    }
    function Wv(e, t) {
      if (Ia) {
        if (e === "compositionend" || !Uo && Iv(e, t)) {
          var a = gu();
          return sc(), Ia = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!mc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return hc && !yc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function dy(e, t, a, i, u) {
      var s;
      if (fy ? s = gc(t, i) : s = Wv(t, i), !s)
        return null;
      var f = Zv(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Rl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Sc(e, t, a, i, u, s, f) {
      Cd(e, t, a, i, u), dy(e, t, a, i, u);
    }
    var py = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Tu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!py[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function vy(e) {
      if (!yn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Cc() {
      Er("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Rs(i);
      var u = Zv(t, "onChange");
      if (u.length > 0) {
        var s = new Dn("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, Ts(e)), bf(d, t);
    }
    function d(e) {
      E0(e, 0);
    }
    function h(e) {
      var t = Dc(e);
      if (zp(t))
        return e;
    }
    function S(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    yn && (C = vy("input") && (!document.documentMode || document.documentMode > 9));
    function M(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", F);
    }
    function H() {
      r && (r.detachEvent("onpropertychange", F), r = null, l = null);
    }
    function F(e) {
      e.propertyName === "value" && h(l) && c(e);
    }
    function A(e, t, a) {
      e === "focusin" ? (H(), M(t, a)) : e === "focusout" && H();
    }
    function I(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(l);
    }
    function J(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ne(e, t) {
      if (e === "click")
        return h(t);
    }
    function Mt(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || pi(e, "number", e.value);
    }
    function T(e, t, a, i, u, s, f) {
      var p = a ? Dc(a) : window, v, m;
      if (o(p) ? v = S : Tu(p) ? C ? v = Mt : (v = I, m = A) : J(p) && (v = ne), v) {
        var y = v(t, a);
        if (y) {
          n(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && x(p);
    }
    function k() {
      ba("onMouseEnter", ["mouseout", "mouseover"]), ba("onMouseLeave", ["mouseout", "mouseover"]), ba("onPointerEnter", ["pointerout", "pointerover"]), ba("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function V(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !fv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (jo(m) || zd(m)))
          return;
      }
      if (!(!v && !p)) {
        var y;
        if (u.window === u)
          y = u;
        else {
          var R = u.ownerDocument;
          R ? y = R.defaultView || R.parentWindow : y = window;
        }
        var E, b;
        if (v) {
          var _ = i.relatedTarget || i.toElement;
          if (E = a, b = _ ? jo(_) : null, b !== null) {
            var O = sr(b);
            (b !== O || b.tag !== le && b.tag !== _e) && (b = null);
          }
        } else
          E = null, b = a;
        if (E !== b) {
          var X = Oi, se = "onMouseLeave", ae = "onMouseEnter", je = "mouse";
          (t === "pointerout" || t === "pointerover") && (X = hd, se = "onPointerLeave", ae = "onPointerEnter", je = "pointer");
          var Ne = E == null ? y : Dc(E), w = b == null ? y : Dc(b), N = new X(se, je + "leave", E, i, u);
          N.target = Ne, N.relatedTarget = w;
          var D = null, j = jo(u);
          if (j === a) {
            var q = new X(ae, je + "enter", b, i, u);
            q.target = w, q.relatedTarget = Ne, D = q;
          }
          yT(e, N, D, E, b);
        }
      }
    }
    function re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ee = typeof Object.is == "function" ? Object.is : re;
    function ue(e, t) {
      if (ee(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Pn.call(t, s) || !ee(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Se(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function en(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ve(e, t) {
      for (var a = Se(e), i = 0, u = 0; a; ) {
        if (a.nodeType === za) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Se(en(a));
      }
    }
    function zi(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return hy(e, u, s, f, p);
    }
    function hy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, R = null;
      e:
        for (; ; ) {
          for (var E = null; y === t && (a === 0 || y.nodeType === za) && (f = s + a), y === i && (u === 0 || y.nodeType === za) && (p = s + u), y.nodeType === za && (s += y.nodeValue.length), (E = y.firstChild) !== null; )
            R = y, y = E;
          for (; ; ) {
            if (y === e)
              break e;
            if (R === t && ++v === a && (f = s), R === i && ++m === u && (p = s), (E = y.nextSibling) !== null)
              break;
            y = R, R = y.parentNode;
          }
          y = E;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function ZE(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = Ve(e, f), y = Ve(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function s0(e) {
      return e && e.nodeType === za;
    }
    function c0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : s0(e) ? !1 : s0(t) ? c0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function JE(e) {
      return e && e.ownerDocument && c0(e.ownerDocument.documentElement, e);
    }
    function eT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function f0() {
      for (var e = window, t = ss(); t instanceof e.HTMLIFrameElement; ) {
        if (eT(t))
          e = t.contentWindow;
        else
          return t;
        t = ss(e.document);
      }
      return t;
    }
    function my(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function tT() {
      var e = f0();
      return {
        focusedElem: e,
        selectionRange: my(e) ? rT(e) : null
      };
    }
    function nT(e) {
      var t = f0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && JE(a)) {
        i !== null && my(a) && aT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === $n && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function rT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zi(e), t || {
        start: 0,
        end: 0
      };
    }
    function aT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : ZE(e, t);
    }
    var iT = yn && "documentMode" in document && document.documentMode <= 11;
    function lT() {
      Er("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ec = null, yy = null, Ed = null, gy = !1;
    function uT(e) {
      if ("selectionStart" in e && my(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function oT(e) {
      return e.window === e ? e.document : e.nodeType === ta ? e : e.ownerDocument;
    }
    function d0(e, t, a) {
      var i = oT(a);
      if (!(gy || Ec == null || Ec !== ss(i))) {
        var u = uT(Ec);
        if (!Ed || !ue(Ed, u)) {
          Ed = u;
          var s = Zv(yy, "onSelect");
          if (s.length > 0) {
            var f = new Dn("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ec;
          }
        }
      }
    }
    function sT(e, t, a, i, u, s, f) {
      var p = a ? Dc(a) : window;
      switch (t) {
        case "focusin":
          (Tu(p) || p.contentEditable === "true") && (Ec = p, yy = a, Ed = null);
          break;
        case "focusout":
          Ec = null, yy = null, Ed = null;
          break;
        case "mousedown":
          gy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gy = !1, d0(e, i, u);
          break;
        case "selectionchange":
          if (iT)
            break;
        case "keydown":
        case "keyup":
          d0(e, i, u);
      }
    }
    function Xv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Tc = {
      animationend: Xv("Animation", "AnimationEnd"),
      animationiteration: Xv("Animation", "AnimationIteration"),
      animationstart: Xv("Animation", "AnimationStart"),
      transitionend: Xv("Transition", "TransitionEnd")
    }, Sy = {}, p0 = {};
    yn && (p0 = document.createElement("div").style, "AnimationEvent" in window || (delete Tc.animationend.animation, delete Tc.animationiteration.animation, delete Tc.animationstart.animation), "TransitionEvent" in window || delete Tc.transitionend.transition);
    function qv(e) {
      if (Sy[e])
        return Sy[e];
      if (!Tc[e])
        return e;
      var t = Tc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in p0)
          return Sy[e] = t[a];
      return e;
    }
    var v0 = qv("animationend"), h0 = qv("animationiteration"), m0 = qv("animationstart"), y0 = qv("transitionend"), g0 = /* @__PURE__ */ new Map(), S0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ru(e, t) {
      g0.set(e, t), Er(t, [e]);
    }
    function cT() {
      for (var e = 0; e < S0.length; e++) {
        var t = S0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Ru(a, "on" + i);
      }
      Ru(v0, "onAnimationEnd"), Ru(h0, "onAnimationIteration"), Ru(m0, "onAnimationStart"), Ru("dblclick", "onDoubleClick"), Ru("focusin", "onFocus"), Ru("focusout", "onBlur"), Ru(y0, "onTransitionEnd");
    }
    function fT(e, t, a, i, u, s, f) {
      var p = g0.get(t);
      if (p !== void 0) {
        var v = Dn, m = t;
        switch (t) {
          case "keypress":
            if (Cl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = oy;
            break;
          case "focusin":
            m = "focus", v = fc;
            break;
          case "focusout":
            m = "blur", v = fc;
            break;
          case "beforeblur":
          case "afterblur":
            v = fc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Oi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Tl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Fr;
            break;
          case v0:
          case h0:
          case m0:
            v = dc;
            break;
          case y0:
            v = cy;
            break;
          case "scroll":
            v = cd;
            break;
          case "wheel":
            v = vc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ay;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = hd;
            break;
        }
        var y = (s & el) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", E = hT(a, p, i.type, y, R);
          if (E.length > 0) {
            var b = new v(p, m, null, i, u);
            e.push({
              event: b,
              listeners: E
            });
          }
        }
      }
    }
    cT(), k(), Cc(), lT(), Qv();
    function dT(e, t, a, i, u, s, f) {
      fT(e, t, a, i, u, s);
      var p = (s & Qm) === 0;
      p && (V(e, t, a, i, u), T(e, t, a, i, u), sT(e, t, a, i, u), Sc(e, t, a, i, u));
    }
    var Td = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Td));
    function C0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Fa(i, t, void 0, e), e.currentTarget = null;
    }
    function pT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          C0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, E = y.currentTarget, b = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          C0(e, b, E), i = R;
        }
    }
    function E0(e, t) {
      for (var a = (t & el) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        pT(s, f, a);
      }
      Of();
    }
    function vT(e, t, a, i, u) {
      var s = Ts(a), f = [];
      dT(f, e, i, a, s, t), E0(f, t);
    }
    function Ct(e, t) {
      Cy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = $R(t), u = gT(e, a);
      i.has(u) || (T0(t, e, lo, a), i.add(u));
    }
    function Ey(e, t, a) {
      Cy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= el), T0(a, e, i, t);
    }
    var Kv = "_reactListening" + Math.random().toString(36).slice(2);
    function Rd(e) {
      if (!e[Kv]) {
        e[Kv] = !0, Ir.forEach(function(a) {
          a !== "selectionchange" && (Cy.has(a) || Ey(a, !1, e), Ey(a, !0, e));
        });
        var t = e.nodeType === ta ? e : e.ownerDocument;
        t !== null && (t[Kv] || (t[Kv] = !0, Ey("selectionchange", !1, t)));
      }
    }
    function T0(e, t, a, i, u) {
      var s = hu(e, t, a), f = void 0;
      fo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ga(e, t, s, f) : yu(e, t, s) : f !== void 0 ? oc(e, t, s, f) : sd(e, t, s);
    }
    function R0(e, t) {
      return e === t || e.nodeType === Ut && e.parentNode === t;
    }
    function Ty(e, t, a, i, u) {
      var s = i;
      if (!(t & Aa) && !(t & lo)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === ie || v === he) {
                var m = p.stateNode.containerInfo;
                if (R0(m, f))
                  break;
                if (v === he)
                  for (var y = p.return; y !== null; ) {
                    var R = y.tag;
                    if (R === ie || R === he) {
                      var E = y.stateNode.containerInfo;
                      if (R0(E, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var b = jo(m);
                  if (b === null)
                    return;
                  var _ = b.tag;
                  if (_ === le || _ === _e) {
                    p = s = b;
                    continue e;
                  }
                  m = m.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      bf(function() {
        return vT(e, t, a, s);
      });
    }
    function xd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function hT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, E = R.stateNode, b = R.tag;
        if (b === le && E !== null && (y = E, p !== null)) {
          var _ = nl(m, p);
          _ != null && v.push(xd(m, _, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function Zv(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var v = f, m = nl(u, a);
          m != null && i.unshift(xd(u, m, v));
          var y = nl(u, t);
          y != null && i.push(xd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function Rc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== le);
      return e || null;
    }
    function mT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Rc(s))
        u++;
      for (var f = 0, p = i; p; p = Rc(p))
        f++;
      for (; u - f > 0; )
        a = Rc(a), u--;
      for (; f - u > 0; )
        i = Rc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Rc(a), i = Rc(i);
      }
      return null;
    }
    function x0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === le && y !== null) {
          var E = y;
          if (u) {
            var b = nl(p, s);
            b != null && f.unshift(xd(p, b, E));
          } else if (!u) {
            var _ = nl(p, s);
            _ != null && f.push(xd(p, _, E));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function yT(e, t, a, i, u) {
      var s = i && u ? mT(i, u) : null;
      i !== null && x0(e, t, i, s, !1), u !== null && a !== null && x0(e, a, u, s, !0);
    }
    function gT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var jr = !1, wd = "dangerouslySetInnerHTML", Jv = "suppressContentEditableWarning", xu = "suppressHydrationWarning", w0 = "autoFocus", Ho = "children", Fo = "style", eh = "__html", Ry, th, Dd, D0, nh, k0, b0;
    Ry = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, th = function(e, t) {
      Es(e, t), Rf(e, t), cv(e, t, {
        registrationNameDependencies: sa,
        possibleRegistrationNames: Bu
      });
    }, k0 = yn && !document.documentMode, Dd = function(e, t, a) {
      if (!jr) {
        var i = rh(a), u = rh(t);
        u !== i && (jr = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, D0 = function(e) {
      if (!jr) {
        jr = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, nh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, b0 = function(e, t) {
      var a = e.namespaceURI === Na ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var ST = /\r\n?/g, CT = /\u0000|\uFFFD/g;
    function rh(e) {
      Ii(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(ST, `
`).replace(CT, "");
    }
    function ah(e, t, a, i) {
      var u = rh(t), s = rh(e);
      if (s !== u && (i && (jr || (jr = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Cr))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function _0(e) {
      return e.nodeType === ta ? e : e.ownerDocument;
    }
    function ET() {
    }
    function ih(e) {
      e.onclick = ET;
    }
    function TT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Fo)
            f && Object.freeze(f), ev(t, f);
          else if (s === wd) {
            var p = f ? f[eh] : void 0;
            p != null && Yp(t, p);
          } else if (s === Ho)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ys(t, f);
            } else
              typeof f == "number" && ys(t, "" + f);
          else
            s === Jv || s === xu || s === w0 || (sa.hasOwnProperty(s) ? f != null && (typeof f != "function" && nh(s, f), s === "onScroll" && Ct("scroll", t)) : f != null && Wi(t, s, f, u));
        }
    }
    function RT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Fo ? ev(e, f) : s === wd ? Yp(e, f) : s === Ho ? ys(e, f) : Wi(e, s, f, i);
      }
    }
    function xT(e, t, a, i) {
      var u, s = _0(a), f, p = i;
      if (p === Na && (p = hs(e)), p === Na) {
        if (u = Ua(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var y = f;
          t.multiple ? y.multiple = !0 : t.size && (y.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Na && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Pn.call(Ry, e) && (Ry[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function wT(e, t) {
      return _0(t).createTextNode(e);
    }
    function DT(e, t, a, i) {
      var u = Ua(t, a);
      th(t, a);
      var s;
      switch (t) {
        case "dialog":
          Ct("cancel", e), Ct("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Ct("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Td.length; f++)
            Ct(Td[f], e);
          s = a;
          break;
        case "source":
          Ct("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Ct("error", e), Ct("load", e), s = a;
          break;
        case "details":
          Ct("toggle", e), s = a;
          break;
        case "input":
          eo(e, a), s = Ju(e, a), Ct("invalid", e);
          break;
        case "option":
          ps(e, a), s = a;
          break;
        case "select":
          jp(e, a), s = df(e, a), Ct("invalid", e);
          break;
        case "textarea":
          Vp(e, a), s = vf(e, a), Ct("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ss(t, s), TT(t, e, i, s, u), t) {
        case "input":
          Ki(e), to(e, a, !1);
          break;
        case "textarea":
          Ki(e), Pp(e);
          break;
        case "option":
          ff(e, a);
          break;
        case "select":
          zm(e, a);
          break;
        default:
          typeof s.onClick == "function" && ih(e);
          break;
      }
    }
    function kT(e, t, a, i, u) {
      th(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ju(e, a), p = Ju(e, i), s = [];
          break;
        case "select":
          f = df(e, a), p = df(e, i), s = [];
          break;
        case "textarea":
          f = vf(e, a), p = vf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && ih(e);
          break;
      }
      Ss(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Fo) {
            var R = f[v];
            for (m in R)
              R.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else
            v === wd || v === Ho || v === Jv || v === xu || v === w0 || (sa.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var E = p[v], b = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || E === b || E == null && b == null))
          if (v === Fo)
            if (E && Object.freeze(E), b) {
              for (m in b)
                b.hasOwnProperty(m) && (!E || !E.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in E)
                E.hasOwnProperty(m) && b[m] !== E[m] && (y || (y = {}), y[m] = E[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = E;
          else if (v === wd) {
            var _ = E ? E[eh] : void 0, O = b ? b[eh] : void 0;
            _ != null && O !== _ && (s = s || []).push(v, _);
          } else
            v === Ho ? (typeof E == "string" || typeof E == "number") && (s = s || []).push(v, "" + E) : v === Jv || v === xu || (sa.hasOwnProperty(v) ? (E != null && (typeof E != "function" && nh(v, E), v === "onScroll" && Ct("scroll", e)), !s && b !== E && (s = [])) : (s = s || []).push(v, E));
      }
      return y && (ao(y, p[Fo]), (s = s || []).push(Fo, y)), s;
    }
    function bT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && cf(e, u);
      var s = Ua(a, i), f = Ua(a, u);
      switch (RT(e, t, s, f), a) {
        case "input":
          Gl(e, u);
          break;
        case "textarea":
          Bp(e, u);
          break;
        case "select":
          Um(e, u);
          break;
      }
    }
    function _T(e) {
      {
        var t = e.toLowerCase();
        return Cs.hasOwnProperty(t) && Cs[t] || null;
      }
    }
    function MT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ua(t, a), th(t, a), t) {
        case "dialog":
          Ct("cancel", e), Ct("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ct("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Td.length; m++)
            Ct(Td[m], e);
          break;
        case "source":
          Ct("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Ct("error", e), Ct("load", e);
          break;
        case "details":
          Ct("toggle", e);
          break;
        case "input":
          eo(e, a), Ct("invalid", e);
          break;
        case "option":
          ps(e, a);
          break;
        case "select":
          jp(e, a), Ct("invalid", e);
          break;
        case "textarea":
          Vp(e, a), Ct("invalid", e);
          break;
      }
      Ss(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var y = e.attributes, R = 0; R < y.length; R++) {
          var E = y[R].name.toLowerCase();
          switch (E) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(y[R].name);
          }
        }
      }
      var b = null;
      for (var _ in a)
        if (a.hasOwnProperty(_)) {
          var O = a[_];
          if (_ === Ho)
            typeof O == "string" ? e.textContent !== O && (a[xu] !== !0 && ah(e.textContent, O, s, f), b = [Ho, O]) : typeof O == "number" && e.textContent !== "" + O && (a[xu] !== !0 && ah(e.textContent, O, s, f), b = [Ho, "" + O]);
          else if (sa.hasOwnProperty(_))
            O != null && (typeof O != "function" && nh(_, O), _ === "onScroll" && Ct("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var X = void 0, se = p && Bn ? null : fa(_);
            if (a[xu] !== !0) {
              if (!(_ === Jv || _ === xu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              _ === "value" || _ === "checked" || _ === "selected")) {
                if (_ === wd) {
                  var ae = e.innerHTML, je = O ? O[eh] : void 0;
                  if (je != null) {
                    var Ne = b0(e, je);
                    Ne !== ae && Dd(_, ae, Ne);
                  }
                } else if (_ === Fo) {
                  if (v.delete(_), k0) {
                    var w = Ym(O);
                    X = e.getAttribute("style"), w !== X && Dd(_, X, w);
                  }
                } else if (p && !Bn)
                  v.delete(_.toLowerCase()), X = as(e, _, O), O !== X && Dd(_, X, O);
                else if (!jt(_, se, p) && !Tt(_, O, se, p)) {
                  var N = !1;
                  if (se !== null)
                    v.delete(se.attributeName), X = Yu(e, _, O, se);
                  else {
                    var D = i;
                    if (D === Na && (D = hs(t)), D === Na)
                      v.delete(_.toLowerCase());
                    else {
                      var j = _T(_);
                      j !== null && j !== _ && (N = !0, v.delete(j)), v.delete(_);
                    }
                    X = as(e, _, O);
                  }
                  var q = Bn;
                  !q && O !== X && !N && Dd(_, X, O);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[xu] !== !0 && D0(v), t) {
        case "input":
          Ki(e), to(e, a, !0);
          break;
        case "textarea":
          Ki(e), Pp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && ih(e);
          break;
      }
      return b;
    }
    function LT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xy(e, t) {
      {
        if (jr)
          return;
        jr = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function wy(e, t) {
      {
        if (jr)
          return;
        jr = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t, a) {
      {
        if (jr)
          return;
        jr = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (t === "" || jr)
          return;
        jr = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function OT(e, t, a) {
      switch (t) {
        case "input":
          Up(e, a);
          return;
        case "textarea":
          hf(e, a);
          return;
        case "select":
          Am(e, a);
          return;
      }
    }
    var kd = function() {
    }, bd = function() {
    };
    {
      var NT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], M0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], zT = M0.concat(["button"]), UT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], L0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      bd = function(e, t) {
        var a = Le({}, e || L0), i = {
          tag: t
        };
        return M0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), zT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), NT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var AT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return UT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, HT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, O0 = {};
      kd = function(e, t, a) {
        a = a || L0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = AT(e, u) ? null : i, f = s ? null : HT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!O0[m]) {
            O0[m] = !0;
            var y = e, R = "";
            if (e === "#text" ? /\S/.test(t) ? y = "Text nodes" : (y = "Whitespace text nodes", R = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : y = "<" + e + ">", s) {
              var E = "";
              v === "table" && e === "tr" && (E += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", y, v, R, E);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", y, v);
          }
        }
      };
    }
    var lh = "suppressHydrationWarning", uh = "$", oh = "/$", _d = "$?", Md = "$!", FT = "style", by = null, _y = null;
    function jT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ta:
        case Zi: {
          t = i === ta ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : yf(null, "");
          break;
        }
        default: {
          var s = i === Ut ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = yf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = bd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function VT(e, t, a) {
      {
        var i = e, u = yf(i.namespace, t), s = bd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Gk(e) {
      return e;
    }
    function BT(e) {
      by = pr(), _y = tT();
      var t = null;
      return Jt(!1), t;
    }
    function PT(e) {
      nT(_y), Jt(by), by = null, _y = null;
    }
    function YT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (kd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = bd(f.ancestorInfo, e);
          kd(null, p, v);
        }
        s = f.namespace;
      }
      var m = xT(e, t, a, s);
      return Nd(u, m), Hy(m, t), m;
    }
    function $T(e, t) {
      e.appendChild(t);
    }
    function QT(e, t, a, i, u) {
      switch (DT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function GT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = bd(f.ancestorInfo, t);
          kd(null, p, v);
        }
      }
      return kT(e, t, a, i);
    }
    function My(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function IT(e, t, a, i) {
      {
        var u = a;
        kd(null, e, u.ancestorInfo);
      }
      var s = wT(e, t);
      return Nd(i, s), s;
    }
    function WT() {
      var e = window.event;
      return e === void 0 ? Ya : Mn(e.type);
    }
    var Ly = typeof setTimeout == "function" ? setTimeout : void 0, XT = typeof clearTimeout == "function" ? clearTimeout : void 0, Oy = -1, N0 = typeof Promise == "function" ? Promise : void 0, qT = typeof queueMicrotask == "function" ? queueMicrotask : typeof N0 < "u" ? function(e) {
      return N0.resolve(null).then(e).catch(KT);
    } : Ly;
    function KT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ZT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function JT(e, t, a, i, u, s) {
      bT(e, t, a, i, u), Hy(e, u);
    }
    function z0(e) {
      ys(e, "");
    }
    function eR(e, t, a) {
      e.nodeValue = a;
    }
    function tR(e, t) {
      e.appendChild(t);
    }
    function nR(e, t) {
      var a;
      e.nodeType === Ut ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && ih(a);
    }
    function rR(e, t, a) {
      e.insertBefore(t, a);
    }
    function aR(e, t, a) {
      e.nodeType === Ut ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function iR(e, t) {
      e.removeChild(t);
    }
    function lR(e, t) {
      e.nodeType === Ut ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ny(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ut) {
          var s = u.data;
          if (s === oh)
            if (i === 0) {
              e.removeChild(u), Oe(t);
              return;
            } else
              i--;
          else
            (s === uh || s === _d || s === Md) && i++;
        }
        a = u;
      } while (a);
      Oe(t);
    }
    function uR(e, t) {
      e.nodeType === Ut ? Ny(e.parentNode, t) : e.nodeType === $n && Ny(e, t), Oe(e);
    }
    function oR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function sR(e) {
      e.nodeValue = "";
    }
    function cR(e, t) {
      e = e;
      var a = t[FT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = gs("display", i);
    }
    function fR(e, t) {
      e.nodeValue = t;
    }
    function dR(e) {
      e.nodeType === $n ? e.textContent = "" : e.nodeType === ta && e.documentElement && e.removeChild(e.documentElement);
    }
    function pR(e, t, a) {
      return e.nodeType !== $n || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function vR(e, t) {
      return t === "" || e.nodeType !== za ? null : e;
    }
    function hR(e) {
      return e.nodeType !== Ut ? null : e;
    }
    function U0(e) {
      return e.data === _d;
    }
    function zy(e) {
      return e.data === Md;
    }
    function mR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function yR(e, t) {
      e._reactRetry = t;
    }
    function sh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === $n || t === za)
          break;
        if (t === Ut) {
          var a = e.data;
          if (a === uh || a === Md || a === _d)
            break;
          if (a === oh)
            return null;
        }
      }
      return e;
    }
    function Ld(e) {
      return sh(e.nextSibling);
    }
    function gR(e) {
      return sh(e.firstChild);
    }
    function SR(e) {
      return sh(e.firstChild);
    }
    function CR(e) {
      return sh(e.nextSibling);
    }
    function ER(e, t, a, i, u, s, f) {
      Nd(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & ke) !== fe;
      return MT(e, t, a, p, i, m, f);
    }
    function TR(e, t, a, i) {
      return Nd(a, e), a.mode & ke, LT(e, t);
    }
    function RR(e, t) {
      Nd(t, e);
    }
    function xR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ut) {
          var i = t.data;
          if (i === oh) {
            if (a === 0)
              return Ld(t);
            a--;
          } else
            (i === uh || i === Md || i === _d) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function A0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ut) {
          var i = t.data;
          if (i === uh || i === Md || i === _d) {
            if (a === 0)
              return t;
            a--;
          } else
            i === oh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function wR(e) {
      Oe(e);
    }
    function DR(e) {
      Oe(e);
    }
    function kR(e) {
      return e !== "head" && e !== "body";
    }
    function bR(e, t, a, i) {
      var u = !0;
      ah(t.nodeValue, a, i, u);
    }
    function _R(e, t, a, i, u, s) {
      if (t[lh] !== !0) {
        var f = !0;
        ah(i.nodeValue, u, s, f);
      }
    }
    function MR(e, t) {
      t.nodeType === $n ? xy(e, t) : t.nodeType === Ut || wy(e, t);
    }
    function LR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === $n ? xy(a, t) : t.nodeType === Ut || wy(a, t));
      }
    }
    function OR(e, t, a, i, u) {
      (u || t[lh] !== !0) && (i.nodeType === $n ? xy(a, i) : i.nodeType === Ut || wy(a, i));
    }
    function NR(e, t, a) {
      Dy(e, t);
    }
    function zR(e, t) {
      ky(e, t);
    }
    function UR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function AR(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function HR(e, t, a, i, u, s) {
      (s || t[lh] !== !0) && Dy(a, i);
    }
    function FR(e, t, a, i, u) {
      (u || t[lh] !== !0) && ky(a, i);
    }
    function jR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function VR(e) {
      Rd(e);
    }
    var xc = Math.random().toString(36).slice(2), wc = "__reactFiber$" + xc, Uy = "__reactProps$" + xc, Od = "__reactContainer$" + xc, Ay = "__reactEvents$" + xc, BR = "__reactListeners$" + xc, PR = "__reactHandles$" + xc;
    function YR(e) {
      delete e[wc], delete e[Uy], delete e[Ay], delete e[BR], delete e[PR];
    }
    function Nd(e, t) {
      t[wc] = e;
    }
    function ch(e, t) {
      t[Od] = e;
    }
    function H0(e) {
      e[Od] = null;
    }
    function zd(e) {
      return !!e[Od];
    }
    function jo(e) {
      var t = e[wc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Od] || a[wc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = A0(e); u !== null; ) {
              var s = u[wc];
              if (s)
                return s;
              u = A0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function wu(e) {
      var t = e[wc] || e[Od];
      return t && (t.tag === le || t.tag === _e || t.tag === Ue || t.tag === ie) ? t : null;
    }
    function Dc(e) {
      if (e.tag === le || e.tag === _e)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function fh(e) {
      return e[Uy] || null;
    }
    function Hy(e, t) {
      e[Uy] = t;
    }
    function $R(e) {
      var t = e[Ay];
      return t === void 0 && (t = e[Ay] = /* @__PURE__ */ new Set()), t;
    }
    var F0 = {}, j0 = L.ReactDebugCurrentFrame;
    function dh(e) {
      if (e) {
        var t = e._owner, a = Iu(e.type, e._source, t ? t.type : null);
        j0.setExtraStackFrame(a);
      } else
        j0.setExtraStackFrame(null);
    }
    function Wa(e, t, a, i, u) {
      {
        var s = Function.call.bind(Pn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (dh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), dh(null)), p instanceof Error && !(p.message in F0) && (F0[p.message] = !0, dh(u), g("Failed %s type: %s", a, p.message), dh(null));
          }
      }
    }
    var Fy = [], ph;
    ph = [];
    var Dl = -1;
    function Du(e) {
      return {
        current: e
      };
    }
    function Jn(e, t) {
      if (Dl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== ph[Dl] && g("Unexpected Fiber popped."), e.current = Fy[Dl], Fy[Dl] = null, ph[Dl] = null, Dl--;
    }
    function er(e, t, a) {
      Dl++, Fy[Dl] = e.current, ph[Dl] = a, e.current = t;
    }
    var jy;
    jy = {};
    var la = {};
    Object.freeze(la);
    var kl = Du(la), Ui = Du(!1), Vy = la;
    function kc(e, t, a) {
      return a && Ai(t) ? Vy : kl.current;
    }
    function V0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function bc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return la;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Re(e) || "Unknown";
          Wa(i, s, "context", p);
        }
        return u && V0(e, t, s), s;
      }
    }
    function vh() {
      return Ui.current;
    }
    function Ai(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function hh(e) {
      Jn(Ui, e), Jn(kl, e);
    }
    function By(e) {
      Jn(Ui, e), Jn(kl, e);
    }
    function B0(e, t, a) {
      {
        if (kl.current !== la)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        er(kl, t, e), er(Ui, a, e);
      }
    }
    function P0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Re(e) || "Unknown";
            jy[s] || (jy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Re(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Re(e) || "Unknown";
          Wa(u, f, "child context", v);
        }
        return Le({}, a, f);
      }
    }
    function mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || la;
        return Vy = kl.current, er(kl, a, e), er(Ui, Ui.current, e), !0;
      }
    }
    function Y0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = P0(e, t, Vy);
          i.__reactInternalMemoizedMergedChildContext = u, Jn(Ui, e), Jn(kl, e), er(kl, u, e), er(Ui, a, e);
        } else
          Jn(Ui, e), er(Ui, a, e);
      }
    }
    function QR(e) {
      {
        if (!Hf(e) || e.tag !== de)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ie:
              return t.stateNode.context;
            case de: {
              var a = t.type;
              if (Ai(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ku = 0, yh = 1, bl = null, Py = !1, Yy = !1;
    function $0(e) {
      bl === null ? bl = [e] : bl.push(e);
    }
    function GR(e) {
      Py = !0, $0(e);
    }
    function Q0() {
      Py && bu();
    }
    function bu() {
      if (!Yy && bl !== null) {
        Yy = !0;
        var e = 0, t = Ur();
        try {
          var a = !0, i = bl;
          for (Yt(En); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          bl = null, Py = !1;
        } catch (s) {
          throw bl !== null && (bl = bl.slice(e + 1)), _s(Ls, bu), s;
        } finally {
          Yt(t), Yy = !1;
        }
      }
      return null;
    }
    var _c = [], Mc = 0, gh = null, Sh = 0, Ca = [], Ea = 0, Vo = null, _l = 1, Ml = "";
    function IR(e) {
      return Po(), (e.flags & zf) !== oe;
    }
    function WR(e) {
      return Po(), Sh;
    }
    function XR() {
      var e = Ml, t = _l, a = t & ~qR(t);
      return a.toString(32) + e;
    }
    function Bo(e, t) {
      Po(), _c[Mc++] = Sh, _c[Mc++] = gh, gh = e, Sh = t;
    }
    function G0(e, t, a) {
      Po(), Ca[Ea++] = _l, Ca[Ea++] = Ml, Ca[Ea++] = Vo, Vo = e;
      var i = _l, u = Ml, s = Ch(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ch(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), E = f >> m, b = s - m, _ = Ch(t) + b, O = p << b, X = O | E, se = R + u;
        _l = 1 << _ | X, Ml = se;
      } else {
        var ae = p << s, je = ae | f, Ne = u;
        _l = 1 << v | je, Ml = Ne;
      }
    }
    function $y(e) {
      Po();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Bo(e, a), G0(e, a, i);
      }
    }
    function Ch(e) {
      return 32 - Hs(e);
    }
    function qR(e) {
      return 1 << Ch(e) - 1;
    }
    function Qy(e) {
      for (; e === gh; )
        gh = _c[--Mc], _c[Mc] = null, Sh = _c[--Mc], _c[Mc] = null;
      for (; e === Vo; )
        Vo = Ca[--Ea], Ca[Ea] = null, Ml = Ca[--Ea], Ca[Ea] = null, _l = Ca[--Ea], Ca[Ea] = null;
    }
    function KR() {
      return Po(), Vo !== null ? {
        id: _l,
        overflow: Ml
      } : null;
    }
    function ZR(e, t) {
      Po(), Ca[Ea++] = _l, Ca[Ea++] = Ml, Ca[Ea++] = Vo, _l = t.id, Ml = t.overflow, Vo = e;
    }
    function Po() {
      On() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ln = null, Ta = null, Xa = !1, Yo = !1, _u = null;
    function JR() {
      Xa && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function I0() {
      Yo = !0;
    }
    function ex() {
      return Yo;
    }
    function tx(e) {
      var t = e.stateNode.containerInfo;
      return Ta = SR(t), Ln = e, Xa = !0, _u = null, Yo = !1, !0;
    }
    function nx(e, t, a) {
      return Ta = CR(t), Ln = e, Xa = !0, _u = null, Yo = !1, a !== null && ZR(e, a), !0;
    }
    function W0(e, t) {
      switch (e.tag) {
        case ie: {
          MR(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & ke) !== fe;
          OR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ue: {
          var i = e.memoizedState;
          i.dehydrated !== null && LR(i.dehydrated, t);
          break;
        }
      }
    }
    function X0(e, t) {
      W0(e, t);
      var a = ik();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= $e) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (Yo)
          return;
        switch (e.tag) {
          case ie: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, NR(a, i);
                break;
              case _e:
                var u = t.pendingProps;
                zR(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, m = t.pendingProps, y = (e.mode & ke) !== fe;
                HR(
                  s,
                  f,
                  p,
                  v,
                  m,
                  // TODO: Delete this argument when we remove the legacy root API.
                  y
                );
                break;
              }
              case _e: {
                var R = t.pendingProps, E = (e.mode & ke) !== fe;
                FR(
                  s,
                  f,
                  p,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
            }
            break;
          }
          case Ue: {
            var b = e.memoizedState, _ = b.dehydrated;
            if (_ !== null)
              switch (t.tag) {
                case le:
                  var O = t.type;
                  t.pendingProps, UR(_, O);
                  break;
                case _e:
                  var X = t.pendingProps;
                  AR(_, X);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function q0(e, t) {
      t.flags = t.flags & ~Mr | ot, Gy(e, t);
    }
    function K0(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = pR(t, a);
          return i !== null ? (e.stateNode = i, Ln = e, Ta = gR(i), !0) : !1;
        }
        case _e: {
          var u = e.pendingProps, s = vR(t, u);
          return s !== null ? (e.stateNode = s, Ln = e, Ta = null, !0) : !1;
        }
        case Ue: {
          var f = hR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: KR(),
              retryLane: Kn
            };
            e.memoizedState = p;
            var v = lk(f);
            return v.return = e, e.child = v, Ln = e, Ta = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Iy(e) {
      return (e.mode & ke) !== fe && (e.flags & ge) === oe;
    }
    function Wy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xy(e) {
      if (Xa) {
        var t = Ta;
        if (!t) {
          Iy(e) && (Gy(Ln, e), Wy()), q0(Ln, e), Xa = !1, Ln = e;
          return;
        }
        var a = t;
        if (!K0(e, t)) {
          Iy(e) && (Gy(Ln, e), Wy()), t = Ld(a);
          var i = Ln;
          if (!t || !K0(e, t)) {
            q0(Ln, e), Xa = !1, Ln = e;
            return;
          }
          X0(i, a);
        }
      }
    }
    function rx(e, t, a) {
      var i = e.stateNode, u = !Yo, s = ER(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function ax(e) {
      var t = e.stateNode, a = e.memoizedProps, i = TR(t, a, e);
      if (i) {
        var u = Ln;
        if (u !== null)
          switch (u.tag) {
            case ie: {
              var s = u.stateNode.containerInfo, f = (u.mode & ke) !== fe;
              bR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & ke) !== fe;
              _R(
                p,
                v,
                m,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
          }
      }
      return i;
    }
    function ix(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      RR(a, e);
    }
    function lx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return xR(a);
    }
    function Z0(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== ie && t.tag !== Ue; )
        t = t.return;
      Ln = t;
    }
    function Eh(e) {
      if (e !== Ln)
        return !1;
      if (!Xa)
        return Z0(e), Xa = !0, !1;
      if (e.tag !== ie && (e.tag !== le || kR(e.type) && !My(e.type, e.memoizedProps))) {
        var t = Ta;
        if (t)
          if (Iy(e))
            J0(e), Wy();
          else
            for (; t; )
              X0(e, t), t = Ld(t);
      }
      return Z0(e), e.tag === Ue ? Ta = lx(e) : Ta = Ln ? Ld(e.stateNode) : null, !0;
    }
    function ux() {
      return Xa && Ta !== null;
    }
    function J0(e) {
      for (var t = Ta; t; )
        W0(e, t), t = Ld(t);
    }
    function Lc() {
      Ln = null, Ta = null, Xa = !1, Yo = !1;
    }
    function e1() {
      _u !== null && (WC(_u), _u = null);
    }
    function On() {
      return Xa;
    }
    function qy(e) {
      _u === null ? _u = [e] : _u.push(e);
    }
    var ox = L.ReactCurrentBatchConfig, sx = null;
    function cx() {
      return ox.transition;
    }
    var qa = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var fx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & gt && (t = a), a = a.return;
        return t;
      }, $o = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ud = [], Ad = [], Hd = [], Fd = [], jd = [], Vd = [], Qo = /* @__PURE__ */ new Set();
      qa.recordUnsafeLifecycleWarnings = function(e, t) {
        Qo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ud.push(e), e.mode & gt && typeof t.UNSAFE_componentWillMount == "function" && Ad.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Hd.push(e), e.mode & gt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Fd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && jd.push(e), e.mode & gt && typeof t.UNSAFE_componentWillUpdate == "function" && Vd.push(e));
      }, qa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ud.length > 0 && (Ud.forEach(function(E) {
          e.add(Re(E) || "Component"), Qo.add(E.type);
        }), Ud = []);
        var t = /* @__PURE__ */ new Set();
        Ad.length > 0 && (Ad.forEach(function(E) {
          t.add(Re(E) || "Component"), Qo.add(E.type);
        }), Ad = []);
        var a = /* @__PURE__ */ new Set();
        Hd.length > 0 && (Hd.forEach(function(E) {
          a.add(Re(E) || "Component"), Qo.add(E.type);
        }), Hd = []);
        var i = /* @__PURE__ */ new Set();
        Fd.length > 0 && (Fd.forEach(function(E) {
          i.add(Re(E) || "Component"), Qo.add(E.type);
        }), Fd = []);
        var u = /* @__PURE__ */ new Set();
        jd.length > 0 && (jd.forEach(function(E) {
          u.add(Re(E) || "Component"), Qo.add(E.type);
        }), jd = []);
        var s = /* @__PURE__ */ new Set();
        if (Vd.length > 0 && (Vd.forEach(function(E) {
          s.add(Re(E) || "Component"), Qo.add(E.type);
        }), Vd = []), t.size > 0) {
          var f = $o(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = $o(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = $o(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = $o(e);
          Ye(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = $o(a);
          Ye(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = $o(u);
          Ye(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var Th = /* @__PURE__ */ new Map(), t1 = /* @__PURE__ */ new Set();
      qa.recordLegacyContextWarning = function(e, t) {
        var a = fx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!t1.has(e.type)) {
          var i = Th.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Th.set(a, i)), i.push(e));
        }
      }, qa.flushLegacyContextWarning = function() {
        Th.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Re(s) || "Component"), t1.add(s.type);
            });
            var u = $o(i);
            try {
              Ke(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Vt();
            }
          }
        });
      }, qa.discardPendingWarnings = function() {
        Ud = [], Ad = [], Hd = [], Fd = [], jd = [], Vd = [], Th = /* @__PURE__ */ new Map();
      };
    }
    function Ka(e, t) {
      if (e && e.defaultProps) {
        var a = Le({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Ky = Du(null), Zy;
    Zy = {};
    var Rh = null, Oc = null, Jy = null, xh = !1;
    function wh() {
      Rh = null, Oc = null, Jy = null, xh = !1;
    }
    function n1() {
      xh = !0;
    }
    function r1() {
      xh = !1;
    }
    function a1(e, t, a) {
      er(Ky, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Zy && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Zy;
    }
    function eg(e, t) {
      var a = Ky.current;
      Jn(Ky, t), e._currentValue = a;
    }
    function tg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hl(i.childLanes, t) ? u !== null && !hl(u.childLanes, t) && (u.childLanes = De(u.childLanes, t)) : (i.childLanes = De(i.childLanes, t), u !== null && (u.childLanes = De(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function dx(e, t, a) {
      px(e, t, a);
    }
    function px(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === de) {
                var p = Pt(a), v = Ll(at, p);
                v.tag = kh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = De(i.lanes, a);
              var E = i.alternate;
              E !== null && (E.lanes = De(E.lanes, a)), tg(i.return, a, e), s.lanes = De(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === mn)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ot) {
          var b = i.return;
          if (b === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          b.lanes = De(b.lanes, a);
          var _ = b.alternate;
          _ !== null && (_.lanes = De(_.lanes, a)), tg(b, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var O = u.sibling;
            if (O !== null) {
              O.return = u.return, u = O;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Nc(e, t) {
      Rh = e, Oc = null, Jy = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zn(a.lanes, t) && ep(), a.firstContext = null);
      }
    }
    function tn(e) {
      xh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Jy !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Oc === null) {
          if (Rh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Oc = a, Rh.dependencies = {
            lanes: z,
            firstContext: a
          };
        } else
          Oc = Oc.next = a;
      }
      return t;
    }
    var Go = null;
    function ng(e) {
      Go === null ? Go = [e] : Go.push(e);
    }
    function vx() {
      if (Go !== null) {
        for (var e = 0; e < Go.length; e++) {
          var t = Go[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Go = null;
      }
    }
    function i1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Dh(e, i);
    }
    function hx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function mx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Dh(e, i);
    }
    function Vr(e, t) {
      return Dh(e, t);
    }
    var yx = Dh;
    function Dh(e, t) {
      e.lanes = De(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = De(a.lanes, t)), a === null && (e.flags & (ot | Mr)) !== oe && lE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = De(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = De(a.childLanes, t) : (u.flags & (ot | Mr)) !== oe && lE(e), i = u, u = u.return;
      if (i.tag === ie) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var l1 = 0, u1 = 1, kh = 2, rg = 3, bh = !1, ag, _h;
    ag = !1, _h = null;
    function ig(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: z
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function o1(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Ll(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: l1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Mu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (_h === u && !ag && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ag = !0), yD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, yx(e, a);
      } else
        return mx(e, u, t, a);
    }
    function Mh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (qf(a)) {
          var s = u.lanes;
          s = Zf(s, e.pendingLanes);
          var f = De(s, a);
          u.lanes = f, cu(e, f);
        }
      }
    }
    function lg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var y = a.lastBaseUpdate;
      y === null ? a.firstBaseUpdate = t : y.next = t, a.lastBaseUpdate = t;
    }
    function gx(e, t, a, i, u, s) {
      switch (a.tag) {
        case u1: {
          var f = a.payload;
          if (typeof f == "function") {
            n1();
            var p = f.call(s, i, u);
            {
              if (e.mode & gt) {
                Bt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Bt(!1);
                }
              }
              r1();
            }
            return p;
          }
          return f;
        }
        case rg:
          e.flags = e.flags & ~qt | ge;
        case l1: {
          var v = a.payload, m;
          if (typeof v == "function") {
            n1(), m = v.call(s, i, u);
            {
              if (e.mode & gt) {
                Bt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Bt(!1);
                }
              }
              r1();
            }
          } else
            m = v;
          return m == null ? i : Le({}, i, m);
        }
        case kh:
          return bh = !0, i;
      }
      return i;
    }
    function Lh(e, t, a, i) {
      var u = e.updateQueue;
      bh = !1, _h = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var y = e.alternate;
        if (y !== null) {
          var R = y.updateQueue, E = R.lastBaseUpdate;
          E !== f && (E === null ? R.firstBaseUpdate = m : E.next = m, R.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var b = u.baseState, _ = z, O = null, X = null, se = null, ae = s;
        do {
          var je = ae.lane, Ne = ae.eventTime;
          if (hl(i, je)) {
            if (se !== null) {
              var N = {
                eventTime: Ne,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: He,
                tag: ae.tag,
                payload: ae.payload,
                callback: ae.callback,
                next: null
              };
              se = se.next = N;
            }
            b = gx(e, u, ae, b, t, a);
            var D = ae.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            ae.lane !== He) {
              e.flags |= va;
              var j = u.effects;
              j === null ? u.effects = [ae] : j.push(ae);
            }
          } else {
            var w = {
              eventTime: Ne,
              lane: je,
              tag: ae.tag,
              payload: ae.payload,
              callback: ae.callback,
              next: null
            };
            se === null ? (X = se = w, O = b) : se = se.next = w, _ = De(_, je);
          }
          if (ae = ae.next, ae === null) {
            if (p = u.shared.pending, p === null)
              break;
            var q = p, G = q.next;
            q.next = null, ae = G, u.lastBaseUpdate = q, u.shared.pending = null;
          }
        } while (!0);
        se === null && (O = b), u.baseState = O, u.firstBaseUpdate = X, u.lastBaseUpdate = se;
        var ye = u.shared.interleaved;
        if (ye !== null) {
          var Ee = ye;
          do
            _ = De(_, Ee.lane), Ee = Ee.next;
          while (Ee !== ye);
        } else
          s === null && (u.shared.lanes = z);
        dp(_), e.lanes = _, e.memoizedState = b;
      }
      _h = null;
    }
    function Sx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function s1() {
      bh = !1;
    }
    function Oh() {
      return bh;
    }
    function c1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Sx(f, a));
        }
    }
    var ug = {}, f1 = new B.Component().refs, og, sg, cg, fg, dg, d1, Nh, pg, vg, hg;
    {
      og = /* @__PURE__ */ new Set(), sg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set();
      var p1 = /* @__PURE__ */ new Set();
      Nh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          p1.has(a) || (p1.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, d1 = function(e, t) {
        if (t === void 0) {
          var a = nt(e) || "Component";
          dg.has(a) || (dg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(ug, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(ug);
    }
    function mg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & gt) {
          Bt(!0);
          try {
            s = a(i, u);
          } finally {
            Bt(!1);
          }
        }
        d1(t, s);
      }
      var f = s == null ? u : Le({}, u, s);
      if (e.memoizedState = f, e.lanes === z) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yg = {
      isMounted: cr,
      enqueueSetState: function(e, t, a) {
        var i = br(e), u = mr(), s = Fu(i), f = Ll(u, s);
        f.payload = t, a != null && (Nh(a, "setState"), f.callback = a);
        var p = Mu(i, f, s);
        p !== null && (hn(p, i, s, u), Mh(p, i, s)), Di(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = br(e), u = mr(), s = Fu(i), f = Ll(u, s);
        f.tag = u1, f.payload = t, a != null && (Nh(a, "replaceState"), f.callback = a);
        var p = Mu(i, f, s);
        p !== null && (hn(p, i, s, u), Mh(p, i, s)), Di(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = br(e), i = mr(), u = Fu(a), s = Ll(i, u);
        s.tag = kh, t != null && (Nh(t, "forceUpdate"), s.callback = t);
        var f = Mu(a, s, u);
        f !== null && (hn(f, a, u, i), Mh(f, a, u)), Gf(a, u);
      }
    };
    function v1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & gt) {
            Bt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Bt(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", nt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ue(a, i) || !ue(u, s) : !0;
    }
    function Cx(e, t, a) {
      var i = e.stateNode;
      {
        var u = nt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vg.has(t) && (vg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", nt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cg.has(t) && (cg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", nt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Wt(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function h1(e, t) {
      t.updater = yg, e.stateNode = t, eu(t, e), t._reactInternalInstance = ug;
    }
    function m1(e, t, a) {
      var i = !1, u = la, s = la, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Jc && f._context === void 0
        );
        if (!p && !hg.has(t)) {
          hg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Zc ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", nt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tn(f);
      else {
        u = kc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? bc(e, u) : la;
      }
      var y = new t(a, s);
      if (e.mode & gt) {
        Bt(!0);
        try {
          y = new t(a, s);
        } finally {
          Bt(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      h1(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var E = nt(t) || "Component";
          sg.has(E) || (sg.add(E), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var b = null, _ = null, O = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? b = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (b = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? _ = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (_ = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? O = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (O = "UNSAFE_componentWillUpdate"), b !== null || _ !== null || O !== null) {
            var X = nt(t) || "Component", se = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fg.has(X) || (fg.add(X), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, X, se, b !== null ? `
  ` + b : "", _ !== null ? `
  ` + _ : "", O !== null ? `
  ` + O : ""));
          }
        }
      }
      return i && V0(e, u, s), y;
    }
    function Ex(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Re(e) || "Component"), yg.enqueueReplaceState(t, t.state, null));
    }
    function y1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Re(e) || "Component";
          og.has(s) || (og.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        yg.enqueueReplaceState(t, t.state, null);
      }
    }
    function gg(e, t, a, i) {
      Cx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = f1, ig(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tn(s);
      else {
        var f = kc(e, t, !0);
        u.context = bc(e, f);
      }
      {
        if (u.state === a) {
          var p = nt(t) || "Component";
          pg.has(p) || (pg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & gt && qa.recordLegacyContextWarning(e, u), qa.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Ex(e, u), Lh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = we;
        m |= Gn, (e.mode & Nr) !== fe && (m |= In), e.flags |= m;
      }
    }
    function Tx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = la;
      if (typeof p == "object" && p !== null)
        v = tn(p);
      else {
        var m = kc(e, t, !0);
        v = bc(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && y1(e, u, a, v), s1();
      var E = e.memoizedState, b = u.state = E;
      if (Lh(e, a, u, i), b = e.memoizedState, s === a && E === b && !vh() && !Oh()) {
        if (typeof u.componentDidMount == "function") {
          var _ = we;
          _ |= Gn, (e.mode & Nr) !== fe && (_ |= In), e.flags |= _;
        }
        return !1;
      }
      typeof y == "function" && (mg(e, t, y, a), b = e.memoizedState);
      var O = Oh() || v1(e, t, s, a, E, b, v);
      if (O) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var X = we;
          X |= Gn, (e.mode & Nr) !== fe && (X |= In), e.flags |= X;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var se = we;
          se |= Gn, (e.mode & Nr) !== fe && (se |= In), e.flags |= se;
        }
        e.memoizedProps = a, e.memoizedState = b;
      }
      return u.props = a, u.state = b, u.context = v, O;
    }
    function Rx(e, t, a, i, u) {
      var s = t.stateNode;
      o1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ka(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = la;
      if (typeof y == "object" && y !== null)
        R = tn(y);
      else {
        var E = kc(t, a, !0);
        R = bc(t, E);
      }
      var b = a.getDerivedStateFromProps, _ = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !_ && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && y1(t, s, i, R), s1();
      var O = t.memoizedState, X = s.state = O;
      if (Lh(t, i, s, u), X = t.memoizedState, f === v && O === X && !vh() && !Oh() && !me)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || O !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || O !== e.memoizedState) && (t.flags |= _r), !1;
      typeof b == "function" && (mg(t, a, b, i), X = t.memoizedState);
      var se = Oh() || v1(t, a, p, i, O, X, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      me;
      return se ? (!_ && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, X, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, X, R)), typeof s.componentDidUpdate == "function" && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= _r)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || O !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || O !== e.memoizedState) && (t.flags |= _r), t.memoizedProps = i, t.memoizedState = X), s.props = i, s.state = X, s.context = R, se;
    }
    var Sg, Cg, Eg, Tg, Rg, g1 = function(e, t) {
    };
    Sg = !1, Cg = !1, Eg = {}, Tg = {}, Rg = {}, g1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Re(t) || "Component";
        Tg[a] || (Tg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Bd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & gt || ir) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Re(e) || "Component";
          Eg[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Eg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== de)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Gi(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(R) {
            var E = v.refs;
            E === f1 && (E = v.refs = {}), R === null ? delete E[m] : E[m] = R;
          };
          return y._stringRef = m, y;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function zh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Uh(e) {
      {
        var t = Re(e) || "Component";
        if (Rg[t])
          return;
        Rg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function S1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function C1(e) {
      function t(w, N) {
        if (e) {
          var D = w.deletions;
          D === null ? (w.deletions = [N], w.flags |= $e) : D.push(N);
        }
      }
      function a(w, N) {
        if (!e)
          return null;
        for (var D = N; D !== null; )
          t(w, D), D = D.sibling;
        return null;
      }
      function i(w, N) {
        for (var D = /* @__PURE__ */ new Map(), j = N; j !== null; )
          j.key !== null ? D.set(j.key, j) : D.set(j.index, j), j = j.sibling;
        return D;
      }
      function u(w, N) {
        var D = es(w, N);
        return D.index = 0, D.sibling = null, D;
      }
      function s(w, N, D) {
        if (w.index = D, !e)
          return w.flags |= zf, N;
        var j = w.alternate;
        if (j !== null) {
          var q = j.index;
          return q < N ? (w.flags |= ot, N) : q;
        } else
          return w.flags |= ot, N;
      }
      function f(w) {
        return e && w.alternate === null && (w.flags |= ot), w;
      }
      function p(w, N, D, j) {
        if (N === null || N.tag !== _e) {
          var q = qS(D, w.mode, j);
          return q.return = w, q;
        } else {
          var G = u(N, D);
          return G.return = w, G;
        }
      }
      function v(w, N, D, j) {
        var q = D.type;
        if (q === Ma)
          return y(w, N, D.props.children, j, D.key);
        if (N !== null && (N.elementType === q || // Keep this check inline so it only runs on the false path:
        cE(N, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof q == "object" && q !== null && q.$$typeof === _n && S1(q) === N.type)) {
          var G = u(N, D.props);
          return G.ref = Bd(w, N, D), G.return = w, G._debugSource = D._source, G._debugOwner = D._owner, G;
        }
        var ye = XS(D, w.mode, j);
        return ye.ref = Bd(w, N, D), ye.return = w, ye;
      }
      function m(w, N, D, j) {
        if (N === null || N.tag !== he || N.stateNode.containerInfo !== D.containerInfo || N.stateNode.implementation !== D.implementation) {
          var q = KS(D, w.mode, j);
          return q.return = w, q;
        } else {
          var G = u(N, D.children || []);
          return G.return = w, G;
        }
      }
      function y(w, N, D, j, q) {
        if (N === null || N.tag !== et) {
          var G = Vu(D, w.mode, j, q);
          return G.return = w, G;
        } else {
          var ye = u(N, D);
          return ye.return = w, ye;
        }
      }
      function R(w, N, D) {
        if (typeof N == "string" && N !== "" || typeof N == "number") {
          var j = qS("" + N, w.mode, D);
          return j.return = w, j;
        }
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case jl: {
              var q = XS(N, w.mode, D);
              return q.ref = Bd(w, null, N), q.return = w, q;
            }
            case Kr: {
              var G = KS(N, w.mode, D);
              return G.return = w, G;
            }
            case _n: {
              var ye = N._payload, Ee = N._init;
              return R(w, Ee(ye), D);
            }
          }
          if (Wt(N) || La(N)) {
            var Je = Vu(N, w.mode, D, null);
            return Je.return = w, Je;
          }
          zh(w, N);
        }
        return typeof N == "function" && Uh(w), null;
      }
      function E(w, N, D, j) {
        var q = N !== null ? N.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return q !== null ? null : p(w, N, "" + D, j);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case jl:
              return D.key === q ? v(w, N, D, j) : null;
            case Kr:
              return D.key === q ? m(w, N, D, j) : null;
            case _n: {
              var G = D._payload, ye = D._init;
              return E(w, N, ye(G), j);
            }
          }
          if (Wt(D) || La(D))
            return q !== null ? null : y(w, N, D, j, null);
          zh(w, D);
        }
        return typeof D == "function" && Uh(w), null;
      }
      function b(w, N, D, j, q) {
        if (typeof j == "string" && j !== "" || typeof j == "number") {
          var G = w.get(D) || null;
          return p(N, G, "" + j, q);
        }
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case jl: {
              var ye = w.get(j.key === null ? D : j.key) || null;
              return v(N, ye, j, q);
            }
            case Kr: {
              var Ee = w.get(j.key === null ? D : j.key) || null;
              return m(N, Ee, j, q);
            }
            case _n:
              var Je = j._payload, Be = j._init;
              return b(w, N, D, Be(Je), q);
          }
          if (Wt(j) || La(j)) {
            var Gt = w.get(D) || null;
            return y(N, Gt, j, q, null);
          }
          zh(N, j);
        }
        return typeof j == "function" && Uh(N), null;
      }
      function _(w, N, D) {
        {
          if (typeof w != "object" || w === null)
            return N;
          switch (w.$$typeof) {
            case jl:
            case Kr:
              g1(w, D);
              var j = w.key;
              if (typeof j != "string")
                break;
              if (N === null) {
                N = /* @__PURE__ */ new Set(), N.add(j);
                break;
              }
              if (!N.has(j)) {
                N.add(j);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", j);
              break;
            case _n:
              var q = w._payload, G = w._init;
              _(G(q), N, D);
              break;
          }
        }
        return N;
      }
      function O(w, N, D, j) {
        for (var q = null, G = 0; G < D.length; G++) {
          var ye = D[G];
          q = _(ye, q, w);
        }
        for (var Ee = null, Je = null, Be = N, Gt = 0, Pe = 0, Ft = null; Be !== null && Pe < D.length; Pe++) {
          Be.index > Pe ? (Ft = Be, Be = null) : Ft = Be.sibling;
          var nr = E(w, Be, D[Pe], j);
          if (nr === null) {
            Be === null && (Be = Ft);
            break;
          }
          e && Be && nr.alternate === null && t(w, Be), Gt = s(nr, Gt, Pe), Je === null ? Ee = nr : Je.sibling = nr, Je = nr, Be = Ft;
        }
        if (Pe === D.length) {
          if (a(w, Be), On()) {
            var jn = Pe;
            Bo(w, jn);
          }
          return Ee;
        }
        if (Be === null) {
          for (; Pe < D.length; Pe++) {
            var oa = R(w, D[Pe], j);
            oa !== null && (Gt = s(oa, Gt, Pe), Je === null ? Ee = oa : Je.sibling = oa, Je = oa);
          }
          if (On()) {
            var yr = Pe;
            Bo(w, yr);
          }
          return Ee;
        }
        for (var gr = i(w, Be); Pe < D.length; Pe++) {
          var rr = b(gr, w, Pe, D[Pe], j);
          rr !== null && (e && rr.alternate !== null && gr.delete(rr.key === null ? Pe : rr.key), Gt = s(rr, Gt, Pe), Je === null ? Ee = rr : Je.sibling = rr, Je = rr);
        }
        if (e && gr.forEach(function(qc) {
          return t(w, qc);
        }), On()) {
          var Hl = Pe;
          Bo(w, Hl);
        }
        return Ee;
      }
      function X(w, N, D, j) {
        var q = La(D);
        if (typeof q != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (Cg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Cg = !0), D.entries === q && (Sg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Sg = !0);
          var G = q.call(D);
          if (G)
            for (var ye = null, Ee = G.next(); !Ee.done; Ee = G.next()) {
              var Je = Ee.value;
              ye = _(Je, ye, w);
            }
        }
        var Be = q.call(D);
        if (Be == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gt = null, Pe = null, Ft = N, nr = 0, jn = 0, oa = null, yr = Be.next(); Ft !== null && !yr.done; jn++, yr = Be.next()) {
          Ft.index > jn ? (oa = Ft, Ft = null) : oa = Ft.sibling;
          var gr = E(w, Ft, yr.value, j);
          if (gr === null) {
            Ft === null && (Ft = oa);
            break;
          }
          e && Ft && gr.alternate === null && t(w, Ft), nr = s(gr, nr, jn), Pe === null ? Gt = gr : Pe.sibling = gr, Pe = gr, Ft = oa;
        }
        if (yr.done) {
          if (a(w, Ft), On()) {
            var rr = jn;
            Bo(w, rr);
          }
          return Gt;
        }
        if (Ft === null) {
          for (; !yr.done; jn++, yr = Be.next()) {
            var Hl = R(w, yr.value, j);
            Hl !== null && (nr = s(Hl, nr, jn), Pe === null ? Gt = Hl : Pe.sibling = Hl, Pe = Hl);
          }
          if (On()) {
            var qc = jn;
            Bo(w, qc);
          }
          return Gt;
        }
        for (var yp = i(w, Ft); !yr.done; jn++, yr = Be.next()) {
          var $i = b(yp, w, jn, yr.value, j);
          $i !== null && (e && $i.alternate !== null && yp.delete($i.key === null ? jn : $i.key), nr = s($i, nr, jn), Pe === null ? Gt = $i : Pe.sibling = $i, Pe = $i);
        }
        if (e && yp.forEach(function(Hk) {
          return t(w, Hk);
        }), On()) {
          var Ak = jn;
          Bo(w, Ak);
        }
        return Gt;
      }
      function se(w, N, D, j) {
        if (N !== null && N.tag === _e) {
          a(w, N.sibling);
          var q = u(N, D);
          return q.return = w, q;
        }
        a(w, N);
        var G = qS(D, w.mode, j);
        return G.return = w, G;
      }
      function ae(w, N, D, j) {
        for (var q = D.key, G = N; G !== null; ) {
          if (G.key === q) {
            var ye = D.type;
            if (ye === Ma) {
              if (G.tag === et) {
                a(w, G.sibling);
                var Ee = u(G, D.props.children);
                return Ee.return = w, Ee._debugSource = D._source, Ee._debugOwner = D._owner, Ee;
              }
            } else if (G.elementType === ye || // Keep this check inline so it only runs on the false path:
            cE(G, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ye == "object" && ye !== null && ye.$$typeof === _n && S1(ye) === G.type) {
              a(w, G.sibling);
              var Je = u(G, D.props);
              return Je.ref = Bd(w, G, D), Je.return = w, Je._debugSource = D._source, Je._debugOwner = D._owner, Je;
            }
            a(w, G);
            break;
          } else
            t(w, G);
          G = G.sibling;
        }
        if (D.type === Ma) {
          var Be = Vu(D.props.children, w.mode, j, D.key);
          return Be.return = w, Be;
        } else {
          var Gt = XS(D, w.mode, j);
          return Gt.ref = Bd(w, N, D), Gt.return = w, Gt;
        }
      }
      function je(w, N, D, j) {
        for (var q = D.key, G = N; G !== null; ) {
          if (G.key === q)
            if (G.tag === he && G.stateNode.containerInfo === D.containerInfo && G.stateNode.implementation === D.implementation) {
              a(w, G.sibling);
              var ye = u(G, D.children || []);
              return ye.return = w, ye;
            } else {
              a(w, G);
              break;
            }
          else
            t(w, G);
          G = G.sibling;
        }
        var Ee = KS(D, w.mode, j);
        return Ee.return = w, Ee;
      }
      function Ne(w, N, D, j) {
        var q = typeof D == "object" && D !== null && D.type === Ma && D.key === null;
        if (q && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case jl:
              return f(ae(w, N, D, j));
            case Kr:
              return f(je(w, N, D, j));
            case _n:
              var G = D._payload, ye = D._init;
              return Ne(w, N, ye(G), j);
          }
          if (Wt(D))
            return O(w, N, D, j);
          if (La(D))
            return X(w, N, D, j);
          zh(w, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(se(w, N, "" + D, j)) : (typeof D == "function" && Uh(w), a(w, N));
      }
      return Ne;
    }
    var zc = C1(!0), E1 = C1(!1);
    function xx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = es(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = es(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function wx(e, t) {
      for (var a = e.child; a !== null; )
        ek(a, t), a = a.sibling;
    }
    var Pd = {}, Lu = Du(Pd), Yd = Du(Pd), Ah = Du(Pd);
    function Hh(e) {
      if (e === Pd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function T1() {
      var e = Hh(Ah.current);
      return e;
    }
    function xg(e, t) {
      er(Ah, t, e), er(Yd, e, e), er(Lu, Pd, e);
      var a = jT(t);
      Jn(Lu, e), er(Lu, a, e);
    }
    function Uc(e) {
      Jn(Lu, e), Jn(Yd, e), Jn(Ah, e);
    }
    function wg() {
      var e = Hh(Lu.current);
      return e;
    }
    function R1(e) {
      Hh(Ah.current);
      var t = Hh(Lu.current), a = VT(t, e.type);
      t !== a && (er(Yd, e, e), er(Lu, a, e));
    }
    function Dg(e) {
      Yd.current === e && (Jn(Lu, e), Jn(Yd, e));
    }
    var Dx = 0, x1 = 1, w1 = 1, $d = 2, Za = Du(Dx);
    function kg(e, t) {
      return (e & t) !== 0;
    }
    function Ac(e) {
      return e & x1;
    }
    function bg(e, t) {
      return e & x1 | t;
    }
    function kx(e, t) {
      return e | t;
    }
    function Ou(e, t) {
      er(Za, t, e);
    }
    function Hc(e) {
      Jn(Za, e);
    }
    function bx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Fh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ue) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || U0(i) || zy(i))
              return t;
          }
        } else if (t.tag === it && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ge) !== oe;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Br = (
      /*   */
      0
    ), on = (
      /* */
      1
    ), Hi = (
      /*  */
      2
    ), sn = (
      /*    */
      4
    ), Nn = (
      /*   */
      8
    ), _g = [];
    function Mg() {
      for (var e = 0; e < _g.length; e++) {
        var t = _g[e];
        t._workInProgressVersionPrimary = null;
      }
      _g.length = 0;
    }
    function _x(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var W = L.ReactCurrentDispatcher, Qd = L.ReactCurrentBatchConfig, Lg, Fc;
    Lg = /* @__PURE__ */ new Set();
    var Io = z, Ze = null, cn = null, fn = null, jh = !1, Gd = !1, Id = 0, Mx = 0, Lx = 25, U = null, Ra = null, Nu = -1, Og = !1;
    function Ge() {
      {
        var e = U;
        Ra === null ? Ra = [e] : Ra.push(e);
      }
    }
    function Y() {
      {
        var e = U;
        Ra !== null && (Nu++, Ra[Nu] !== e && Ox(e));
      }
    }
    function jc(e) {
      e != null && !Wt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function Ox(e) {
      {
        var t = Re(Ze);
        if (!Lg.has(t) && (Lg.add(t), Ra !== null)) {
          for (var a = "", i = 30, u = 0; u <= Nu; u++) {
            for (var s = Ra[u], f = u === Nu ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function tr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ng(e, t) {
      if (Og)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", U), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, U, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ee(e[a], t[a]))
          return !1;
      return !0;
    }
    function Vc(e, t, a, i, u, s) {
      Io = s, Ze = t, Ra = e !== null ? e._debugHookTypes : null, Nu = -1, Og = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = z, e !== null && e.memoizedState !== null ? W.current = I1 : Ra !== null ? W.current = G1 : W.current = Q1;
      var f = a(i, u);
      if (Gd) {
        var p = 0;
        do {
          if (Gd = !1, Id = 0, p >= Lx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Og = !1, cn = null, fn = null, t.updateQueue = null, Nu = -1, W.current = W1, f = a(i, u);
        } while (Gd);
      }
      W.current = Zh, t._debugHookTypes = Ra;
      var v = cn !== null && cn.next !== null;
      if (Io = z, Ze = null, cn = null, fn = null, U = null, Ra = null, Nu = -1, e !== null && (e.flags & an) !== (t.flags & an) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ke) !== fe && g("Internal React error: Expected static flag was missing. Please notify the React team."), jh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Bc() {
      var e = Id !== 0;
      return Id = 0, e;
    }
    function D1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Nr) !== fe ? t.flags &= ~(il | In | pt | we) : t.flags &= ~(pt | we), e.lanes = su(e.lanes, a);
    }
    function k1() {
      if (W.current = Zh, jh) {
        for (var e = Ze.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        jh = !1;
      }
      Io = z, Ze = null, cn = null, fn = null, Ra = null, Nu = -1, U = null, V1 = !1, Gd = !1, Id = 0;
    }
    function Fi() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return fn === null ? Ze.memoizedState = fn = e : fn = fn.next = e, fn;
    }
    function xa() {
      var e;
      if (cn === null) {
        var t = Ze.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = cn.next;
      var a;
      if (fn === null ? a = Ze.memoizedState : a = fn.next, a !== null)
        fn = a, a = fn.next, cn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        cn = e;
        var i = {
          memoizedState: cn.memoizedState,
          baseState: cn.baseState,
          baseQueue: cn.baseQueue,
          queue: cn.queue,
          next: null
        };
        fn === null ? Ze.memoizedState = fn = i : fn = fn.next = i;
      }
      return fn;
    }
    function b1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ug(e, t, a) {
      var i = Fi(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: z,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Ax.bind(null, Ze, s);
      return [i.memoizedState, f];
    }
    function Ag(e, t, a) {
      var i = xa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = cn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, R = s.baseState, E = null, b = null, _ = null, O = y;
        do {
          var X = O.lane;
          if (hl(Io, X)) {
            if (_ !== null) {
              var ae = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: He,
                action: O.action,
                hasEagerState: O.hasEagerState,
                eagerState: O.eagerState,
                next: null
              };
              _ = _.next = ae;
            }
            if (O.hasEagerState)
              R = O.eagerState;
            else {
              var je = O.action;
              R = e(R, je);
            }
          } else {
            var se = {
              lane: X,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            };
            _ === null ? (b = _ = se, E = R) : _ = _.next = se, Ze.lanes = De(Ze.lanes, X), dp(X);
          }
          O = O.next;
        } while (O !== null && O !== y);
        _ === null ? E = R : _.next = b, ee(R, i.memoizedState) || ep(), i.memoizedState = R, i.baseState = E, i.baseQueue = _, u.lastRenderedState = R;
      }
      var Ne = u.interleaved;
      if (Ne !== null) {
        var w = Ne;
        do {
          var N = w.lane;
          Ze.lanes = De(Ze.lanes, N), dp(N), w = w.next;
        } while (w !== Ne);
      } else
        f === null && (u.lanes = z);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Hg(e, t, a) {
      var i = xa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var y = m.action;
          p = e(p, y), m = m.next;
        } while (m !== v);
        ee(p, i.memoizedState) || ep(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Ik(e, t, a) {
    }
    function Wk(e, t, a) {
    }
    function Fg(e, t, a) {
      var i = Ze, u = Fi(), s, f = On();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Fc || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Fc = !0);
      } else {
        if (s = t(), !Fc) {
          var p = t();
          ee(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Fc = !0);
        }
        var v = mm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xo(v, Io) || _1(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, $h(L1.bind(null, i, m, e), [e]), i.flags |= pt, Wd(on | Nn, M1.bind(null, i, m, s, t), void 0, null), s;
    }
    function Vh(e, t, a) {
      var i = Ze, u = xa(), s = t();
      if (!Fc) {
        var f = t();
        ee(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Fc = !0);
      }
      var p = u.memoizedState, v = !ee(p, s);
      v && (u.memoizedState = s, ep());
      var m = u.queue;
      if (qd(L1.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      fn !== null && fn.memoizedState.tag & on) {
        i.flags |= pt, Wd(on | Nn, M1.bind(null, i, m, s, t), void 0, null);
        var y = mm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xo(y, Io) || _1(i, t, s);
      }
      return s;
    }
    function _1(e, t, a) {
      e.flags |= ho;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Ze.updateQueue;
      if (u === null)
        u = b1(), Ze.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function M1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, O1(t) && N1(e);
    }
    function L1(e, t, a) {
      var i = function() {
        O1(t) && N1(e);
      };
      return a(i);
    }
    function O1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ee(a, i);
      } catch {
        return !0;
      }
    }
    function N1(e) {
      var t = Vr(e, ve);
      t !== null && hn(t, e, ve, at);
    }
    function Bh(e) {
      var t = Fi();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: z,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Hx.bind(null, Ze, a);
      return [t.memoizedState, i];
    }
    function jg(e) {
      return Ag(zg);
    }
    function Vg(e) {
      return Hg(zg);
    }
    function Wd(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Ze.updateQueue;
      if (s === null)
        s = b1(), Ze.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Bg(e) {
      var t = Fi();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Ph(e) {
      var t = xa();
      return t.memoizedState;
    }
    function Xd(e, t, a, i) {
      var u = Fi(), s = i === void 0 ? null : i;
      Ze.flags |= e, u.memoizedState = Wd(on | t, a, void 0, s);
    }
    function Yh(e, t, a, i) {
      var u = xa(), s = i === void 0 ? null : i, f = void 0;
      if (cn !== null) {
        var p = cn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = Wd(t, a, f, s);
            return;
          }
        }
      }
      Ze.flags |= e, u.memoizedState = Wd(on | t, a, f, s);
    }
    function $h(e, t) {
      return (Ze.mode & Nr) !== fe ? Xd(il | pt | Ci, Nn, e, t) : Xd(pt | Ci, Nn, e, t);
    }
    function qd(e, t) {
      return Yh(pt, Nn, e, t);
    }
    function Pg(e, t) {
      return Xd(we, Hi, e, t);
    }
    function Qh(e, t) {
      return Yh(we, Hi, e, t);
    }
    function Yg(e, t) {
      var a = we;
      return a |= Gn, (Ze.mode & Nr) !== fe && (a |= In), Xd(a, sn, e, t);
    }
    function Gh(e, t) {
      return Yh(we, sn, e, t);
    }
    function z1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function $g(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = we;
      return u |= Gn, (Ze.mode & Nr) !== fe && (u |= In), Xd(u, sn, z1.bind(null, t, e), i);
    }
    function Ih(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Yh(we, sn, z1.bind(null, t, e), i);
    }
    function Nx(e, t) {
    }
    var Wh = Nx;
    function Qg(e, t) {
      var a = Fi(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Xh(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Gg(e, t) {
      var a = Fi(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function qh(e, t) {
      var a = xa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Ig(e) {
      var t = Fi();
      return t.memoizedState = e, e;
    }
    function U1(e) {
      var t = xa(), a = cn, i = a.memoizedState;
      return H1(t, i, e);
    }
    function A1(e) {
      var t = xa();
      if (cn === null)
        return t.memoizedState = e, e;
      var a = cn.memoizedState;
      return H1(t, a, e);
    }
    function H1(e, t, a) {
      var i = !Jm(Io);
      if (i) {
        if (!ee(a, t)) {
          var u = Kf();
          Ze.lanes = De(Ze.lanes, u), dp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, ep()), e.memoizedState = a, a;
    }
    function zx(e, t, a) {
      var i = Ur();
      Yt(Tn(i, un)), e(!0);
      var u = Qd.transition;
      Qd.transition = {};
      var s = Qd.transition;
      Qd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yt(i), Qd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ye("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Wg() {
      var e = Bh(!1), t = e[0], a = e[1], i = zx.bind(null, a), u = Fi();
      return u.memoizedState = i, [t, i];
    }
    function F1() {
      var e = jg(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    function j1() {
      var e = Vg(), t = e[0], a = xa(), i = a.memoizedState;
      return [t, i];
    }
    var V1 = !1;
    function Ux() {
      return V1;
    }
    function Xg() {
      var e = Fi(), t = mm(), a = t.identifierPrefix, i;
      if (On()) {
        var u = XR();
        i = ":" + a + "R" + u;
        var s = Id++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Mx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Kh() {
      var e = xa(), t = e.memoizedState;
      return t;
    }
    function Ax(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Fu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (B1(e))
        P1(t, u);
      else {
        var s = i1(e, t, u, i);
        if (s !== null) {
          var f = mr();
          hn(s, e, i, f), Y1(s, t, i);
        }
      }
      $1(e, i);
    }
    function Hx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Fu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (B1(e))
        P1(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === z && (s === null || s.lanes === z)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = W.current, W.current = Ja;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, ee(m, v)) {
                hx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              W.current = p;
            }
          }
        }
        var y = i1(e, t, u, i);
        if (y !== null) {
          var R = mr();
          hn(y, e, i, R), Y1(y, t, i);
        }
      }
      $1(e, i);
    }
    function B1(e) {
      var t = e.alternate;
      return e === Ze || t !== null && t === Ze;
    }
    function P1(e, t) {
      Gd = jh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Y1(e, t, a) {
      if (qf(a)) {
        var i = t.lanes;
        i = Zf(i, e.pendingLanes);
        var u = De(i, a);
        t.lanes = u, cu(e, u);
      }
    }
    function $1(e, t, a) {
      Di(e, t);
    }
    var Zh = {
      readContext: tn,
      useCallback: tr,
      useContext: tr,
      useEffect: tr,
      useImperativeHandle: tr,
      useInsertionEffect: tr,
      useLayoutEffect: tr,
      useMemo: tr,
      useReducer: tr,
      useRef: tr,
      useState: tr,
      useDebugValue: tr,
      useDeferredValue: tr,
      useTransition: tr,
      useMutableSource: tr,
      useSyncExternalStore: tr,
      useId: tr,
      unstable_isNewReconciler: $
    }, Q1 = null, G1 = null, I1 = null, W1 = null, ji = null, Ja = null, Jh = null;
    {
      var qg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ce = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Q1 = {
        readContext: function(e) {
          return tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ge(), jc(t), Qg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ge(), tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ge(), jc(t), $h(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ge(), jc(a), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ge(), jc(t), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ge(), jc(t), Yg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ge(), jc(t);
          var a = W.current;
          W.current = ji;
          try {
            return Gg(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ge();
          var i = W.current;
          W.current = ji;
          try {
            return Ug(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ge(), Bg(e);
        },
        useState: function(e) {
          U = "useState", Ge();
          var t = W.current;
          W.current = ji;
          try {
            return Bh(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ge(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ge(), Ig(e);
        },
        useTransition: function() {
          return U = "useTransition", Ge(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ge(), Fg(e, t, a);
        },
        useId: function() {
          return U = "useId", Ge(), Xg();
        },
        unstable_isNewReconciler: $
      }, G1 = {
        readContext: function(e) {
          return tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Y(), Qg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Y(), tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Y(), $h(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Y(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Y(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Y(), Yg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Y();
          var a = W.current;
          W.current = ji;
          try {
            return Gg(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Y();
          var i = W.current;
          W.current = ji;
          try {
            return Ug(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Y(), Bg(e);
        },
        useState: function(e) {
          U = "useState", Y();
          var t = W.current;
          W.current = ji;
          try {
            return Bh(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Y(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Y(), Ig(e);
        },
        useTransition: function() {
          return U = "useTransition", Y(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Y(), Fg(e, t, a);
        },
        useId: function() {
          return U = "useId", Y(), Xg();
        },
        unstable_isNewReconciler: $
      }, I1 = {
        readContext: function(e) {
          return tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Y(), Xh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Y(), tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Y(), qd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Y(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Y(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Y(), Gh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Y();
          var a = W.current;
          W.current = Ja;
          try {
            return qh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Y();
          var i = W.current;
          W.current = Ja;
          try {
            return Ag(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Y(), Ph();
        },
        useState: function(e) {
          U = "useState", Y();
          var t = W.current;
          W.current = Ja;
          try {
            return jg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Y(), Wh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Y(), U1(e);
        },
        useTransition: function() {
          return U = "useTransition", Y(), F1();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Y(), Vh(e, t);
        },
        useId: function() {
          return U = "useId", Y(), Kh();
        },
        unstable_isNewReconciler: $
      }, W1 = {
        readContext: function(e) {
          return tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Y(), Xh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Y(), tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Y(), qd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Y(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Y(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Y(), Gh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Y();
          var a = W.current;
          W.current = Jh;
          try {
            return qh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Y();
          var i = W.current;
          W.current = Jh;
          try {
            return Hg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Y(), Ph();
        },
        useState: function(e) {
          U = "useState", Y();
          var t = W.current;
          W.current = Jh;
          try {
            return Vg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Y(), Wh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Y(), A1(e);
        },
        useTransition: function() {
          return U = "useTransition", Y(), j1();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Y(), Vh(e, t);
        },
        useId: function() {
          return U = "useId", Y(), Kh();
        },
        unstable_isNewReconciler: $
      }, ji = {
        readContext: function(e) {
          return qg(), tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ce(), Ge(), Qg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ce(), Ge(), tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ce(), Ge(), $h(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ce(), Ge(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ce(), Ge(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ce(), Ge(), Yg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ce(), Ge();
          var a = W.current;
          W.current = ji;
          try {
            return Gg(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ce(), Ge();
          var i = W.current;
          W.current = ji;
          try {
            return Ug(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ce(), Ge(), Bg(e);
        },
        useState: function(e) {
          U = "useState", Ce(), Ge();
          var t = W.current;
          W.current = ji;
          try {
            return Bh(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ce(), Ge(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ce(), Ge(), Ig(e);
        },
        useTransition: function() {
          return U = "useTransition", Ce(), Ge(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ce(), Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ce(), Ge(), Fg(e, t, a);
        },
        useId: function() {
          return U = "useId", Ce(), Ge(), Xg();
        },
        unstable_isNewReconciler: $
      }, Ja = {
        readContext: function(e) {
          return qg(), tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ce(), Y(), Xh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ce(), Y(), tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ce(), Y(), qd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ce(), Y(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ce(), Y(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ce(), Y(), Gh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ce(), Y();
          var a = W.current;
          W.current = Ja;
          try {
            return qh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ce(), Y();
          var i = W.current;
          W.current = Ja;
          try {
            return Ag(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ce(), Y(), Ph();
        },
        useState: function(e) {
          U = "useState", Ce(), Y();
          var t = W.current;
          W.current = Ja;
          try {
            return jg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ce(), Y(), Wh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ce(), Y(), U1(e);
        },
        useTransition: function() {
          return U = "useTransition", Ce(), Y(), F1();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ce(), Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ce(), Y(), Vh(e, t);
        },
        useId: function() {
          return U = "useId", Ce(), Y(), Kh();
        },
        unstable_isNewReconciler: $
      }, Jh = {
        readContext: function(e) {
          return qg(), tn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ce(), Y(), Xh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ce(), Y(), tn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ce(), Y(), qd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ce(), Y(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ce(), Y(), Qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ce(), Y(), Gh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ce(), Y();
          var a = W.current;
          W.current = Ja;
          try {
            return qh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ce(), Y();
          var i = W.current;
          W.current = Ja;
          try {
            return Hg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ce(), Y(), Ph();
        },
        useState: function(e) {
          U = "useState", Ce(), Y();
          var t = W.current;
          W.current = Ja;
          try {
            return Vg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ce(), Y(), Wh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ce(), Y(), A1(e);
        },
        useTransition: function() {
          return U = "useTransition", Ce(), Y(), j1();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ce(), Y(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ce(), Y(), Vh(e, t);
        },
        useId: function() {
          return U = "useId", Ce(), Y(), Kh();
        },
        unstable_isNewReconciler: $
      };
    }
    var zu = Te.unstable_now, X1 = 0, em = -1, Kd = -1, tm = -1, Kg = !1, nm = !1;
    function q1() {
      return Kg;
    }
    function Fx() {
      nm = !0;
    }
    function jx() {
      Kg = !1, nm = !1;
    }
    function Vx() {
      Kg = nm, nm = !1;
    }
    function K1() {
      return X1;
    }
    function Z1() {
      X1 = zu();
    }
    function Zg(e) {
      Kd = zu(), e.actualStartTime < 0 && (e.actualStartTime = zu());
    }
    function J1(e) {
      Kd = -1;
    }
    function rm(e, t) {
      if (Kd >= 0) {
        var a = zu() - Kd;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Kd = -1;
      }
    }
    function Vi(e) {
      if (em >= 0) {
        var t = zu() - em;
        em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ut:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Jg(e) {
      if (tm >= 0) {
        var t = zu() - tm;
        tm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ut:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Bi() {
      em = zu();
    }
    function eS() {
      tm = zu();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Wo(e, t) {
      return {
        value: e,
        source: t,
        stack: lf(t),
        digest: null
      };
    }
    function nS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Bx(e, t) {
      return !0;
    }
    function rS(e, t) {
      try {
        var a = Bx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === de)
            return;
          console.error(i);
        }
        var p = u ? Re(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === ie)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Re(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + y + ".");
        }
        var R = v + `
` + f + `

` + ("" + m);
        console.error(R);
      } catch (E) {
        setTimeout(function() {
          throw E;
        });
      }
    }
    var Px = typeof WeakMap == "function" ? WeakMap : Map;
    function eC(e, t, a) {
      var i = Ll(at, a);
      i.tag = rg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        zD(u), rS(e, t);
      }, i;
    }
    function aS(e, t, a) {
      var i = Ll(at, a);
      i.tag = rg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          fE(e), rS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        fE(e), rS(e, t), typeof u != "function" && OD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Zn(e.lanes, ve) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Re(e) || "Unknown"));
      }), i;
    }
    function tC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Px(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = UD.bind(null, e, t, a);
        ln && pp(e, a), t.then(s, s);
      }
    }
    function Yx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function $x(e, t) {
      var a = e.tag;
      if ((e.mode & ke) === fe && (a === xe || a === ze || a === be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function nC(e) {
      var t = e;
      do {
        if (t.tag === Ue && bx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function rC(e, t, a, i, u) {
      if ((e.mode & ke) === fe) {
        if (e === t)
          e.flags |= qt;
        else {
          if (e.flags |= ge, a.flags |= mo, a.flags &= ~(Ds | or), a.tag === de) {
            var s = a.alternate;
            if (s === null)
              a.tag = ar;
            else {
              var f = Ll(at, ve);
              f.tag = kh, Mu(a, f, ve);
            }
          }
          a.lanes = De(a.lanes, ve);
        }
        return e;
      }
      return e.flags |= qt, e.lanes = u, e;
    }
    function Qx(e, t, a, i, u) {
      if (a.flags |= or, ln && pp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        $x(a), On() && a.mode & ke && I0();
        var f = nC(t);
        if (f !== null) {
          f.flags &= ~wt, rC(f, t, a, e, u), f.mode & ke && tC(e, s, u), Yx(f, e, s);
          return;
        } else {
          if (!ou(u)) {
            tC(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (On() && a.mode & ke) {
        I0();
        var v = nC(t);
        if (v !== null) {
          (v.flags & qt) === oe && (v.flags |= wt), rC(v, t, a, e, u), qy(Wo(i, a));
          return;
        }
      }
      i = Wo(i, a), xD(i);
      var m = t;
      do {
        switch (m.tag) {
          case ie: {
            var y = i;
            m.flags |= qt;
            var R = Pt(u);
            m.lanes = De(m.lanes, R);
            var E = eC(m, y, R);
            lg(m, E);
            return;
          }
          case de:
            var b = i, _ = m.type, O = m.stateNode;
            if ((m.flags & ge) === oe && (typeof _.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && !nE(O))) {
              m.flags |= qt;
              var X = Pt(u);
              m.lanes = De(m.lanes, X);
              var se = aS(m, b, X);
              lg(m, se);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function Gx() {
      return null;
    }
    var Zd = L.ReactCurrentOwner, ei = !1, iS, Jd, lS, uS, oS, Xo, sS, am;
    iS = {}, Jd = {}, lS = {}, uS = {}, oS = {}, Xo = !1, sS = {}, am = {};
    function vr(e, t, a, i) {
      e === null ? t.child = E1(t, null, a, i) : t.child = zc(t, e.child, a, i);
    }
    function Ix(e, t, a, i) {
      t.child = zc(t, e.child, null, i), t.child = zc(t, null, a, i);
    }
    function aC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wa(
          s,
          i,
          // Resolved props
          "prop",
          nt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Nc(t, u), wi(t);
      {
        if (Zd.current = t, ea(!0), v = Vc(e, t, f, i, p, u), m = Bc(), t.mode & gt) {
          Bt(!0);
          try {
            v = Vc(e, t, f, i, p, u), m = Bc();
          } finally {
            Bt(!1);
          }
        }
        ea(!1);
      }
      return ll(), e !== null && !ei ? (D1(e, t, u), Ol(e, t, u)) : (On() && m && $y(t), t.flags |= gi, vr(e, t, v, u), t.child);
    }
    function iC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ZD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Xc(s), t.tag = be, t.type = f, dS(t, s), lC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Wa(
            p,
            i,
            // Resolved props
            "prop",
            nt(s)
          );
        }
        var v = WS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var m = a.type, y = m.propTypes;
        y && Wa(
          y,
          i,
          // Resolved props
          "prop",
          nt(m)
        );
      }
      var R = e.child, E = gS(e, u);
      if (!E) {
        var b = R.memoizedProps, _ = a.compare;
        if (_ = _ !== null ? _ : ue, _(b, i) && e.ref === t.ref)
          return Ol(e, t, u);
      }
      t.flags |= gi;
      var O = es(R, i);
      return O.ref = t.ref, O.return = t, t.child = O, O;
    }
    function lC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === _n) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Wa(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            nt(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (ue(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ei = !1, t.pendingProps = i = y, gS(e, u))
            (e.flags & mo) !== oe && (ei = !0);
          else
            return t.lanes = e.lanes, Ol(e, t, u);
      }
      return cS(e, t, a, i, u);
    }
    function uC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || K)
        if ((t.mode & ke) === fe) {
          var f = {
            baseLanes: z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ym(t, a);
        } else if (Zn(a, Kn)) {
          var R = {
            baseLanes: z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var E = s !== null ? s.baseLanes : a;
          ym(t, E);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = De(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Kn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, ym(t, v), null;
        }
      else {
        var b;
        s !== null ? (b = De(s.baseLanes, a), t.memoizedState = null) : b = a, ym(t, b);
      }
      return vr(e, t, u, a), t.child;
    }
    function Wx(e, t, a) {
      var i = t.pendingProps;
      return vr(e, t, i, a), t.child;
    }
    function Xx(e, t, a) {
      var i = t.pendingProps.children;
      return vr(e, t, i, a), t.child;
    }
    function qx(e, t, a) {
      {
        t.flags |= we;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return vr(e, t, s, a), t.child;
    }
    function oC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Qn, t.flags |= Uf);
    }
    function cS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Wa(
          s,
          i,
          // Resolved props
          "prop",
          nt(a)
        );
      }
      var f;
      {
        var p = kc(t, a, !0);
        f = bc(t, p);
      }
      var v, m;
      Nc(t, u), wi(t);
      {
        if (Zd.current = t, ea(!0), v = Vc(e, t, a, i, f, u), m = Bc(), t.mode & gt) {
          Bt(!0);
          try {
            v = Vc(e, t, a, i, f, u), m = Bc();
          } finally {
            Bt(!1);
          }
        }
        ea(!1);
      }
      return ll(), e !== null && !ei ? (D1(e, t, u), Ol(e, t, u)) : (On() && m && $y(t), t.flags |= gi, vr(e, t, v, u), t.child);
    }
    function sC(e, t, a, i, u) {
      {
        switch (pk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= ge, t.flags |= qt;
            var m = new Error("Simulated error coming from DevTools"), y = Pt(u);
            t.lanes = De(t.lanes, y);
            var R = aS(t, Wo(m, t), y);
            lg(t, R);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var E = a.propTypes;
          E && Wa(
            E,
            i,
            // Resolved props
            "prop",
            nt(a)
          );
        }
      }
      var b;
      Ai(a) ? (b = !0, mh(t)) : b = !1, Nc(t, u);
      var _ = t.stateNode, O;
      _ === null ? (lm(e, t), m1(t, a, i), gg(t, a, i, u), O = !0) : e === null ? O = Tx(t, a, i, u) : O = Rx(e, t, a, i, u);
      var X = fS(e, t, a, O, b, u);
      {
        var se = t.stateNode;
        O && se.props !== i && (Xo || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Re(t) || "a component"), Xo = !0);
      }
      return X;
    }
    function fS(e, t, a, i, u, s) {
      oC(e, t);
      var f = (t.flags & ge) !== oe;
      if (!i && !f)
        return u && Y0(t, a, !1), Ol(e, t, s);
      var p = t.stateNode;
      Zd.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, J1();
      else {
        wi(t);
        {
          if (ea(!0), v = p.render(), t.mode & gt) {
            Bt(!0);
            try {
              p.render();
            } finally {
              Bt(!1);
            }
          }
          ea(!1);
        }
        ll();
      }
      return t.flags |= gi, e !== null && f ? Ix(e, t, v, s) : vr(e, t, v, s), t.memoizedState = p.state, u && Y0(t, a, !0), t.child;
    }
    function cC(e) {
      var t = e.stateNode;
      t.pendingContext ? B0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && B0(e, t.context, !1), xg(e, t.containerInfo);
    }
    function Kx(e, t, a) {
      if (cC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      o1(e, t), Lh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & wt) {
          var y = Wo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return fC(e, t, p, a, y);
        } else if (p !== s) {
          var R = Wo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return fC(e, t, p, a, R);
        } else {
          tx(t);
          var E = E1(t, null, p, a);
          t.child = E;
          for (var b = E; b; )
            b.flags = b.flags & ~ot | Mr, b = b.sibling;
        }
      } else {
        if (Lc(), p === s)
          return Ol(e, t, a);
        vr(e, t, p, a);
      }
      return t.child;
    }
    function fC(e, t, a, i, u) {
      return Lc(), qy(u), t.flags |= wt, vr(e, t, a, i), t.child;
    }
    function Zx(e, t, a) {
      R1(t), e === null && Xy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = My(i, u);
      return p ? f = null : s !== null && My(i, s) && (t.flags |= Qe), oC(e, t), vr(e, t, f, a), t.child;
    }
    function Jx(e, t) {
      return e === null && Xy(t), null;
    }
    function ew(e, t, a, i) {
      lm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = JD(v), y = Ka(v, u), R;
      switch (m) {
        case xe:
          return dS(t, v), t.type = v = Xc(v), R = cS(null, t, v, y, i), R;
        case de:
          return t.type = v = PS(v), R = sC(null, t, v, y, i), R;
        case ze:
          return t.type = v = YS(v), R = aC(null, t, v, y, i), R;
        case mt: {
          if (t.type !== t.elementType) {
            var E = v.propTypes;
            E && Wa(
              E,
              y,
              // Resolved for outer only
              "prop",
              nt(v)
            );
          }
          return R = iC(
            null,
            t,
            v,
            Ka(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var b = "";
      throw v !== null && typeof v == "object" && v.$$typeof === _n && (b = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + b));
    }
    function tw(e, t, a, i, u) {
      lm(e, t), t.tag = de;
      var s;
      return Ai(a) ? (s = !0, mh(t)) : s = !1, Nc(t, u), m1(t, a, i), gg(t, a, i, u), fS(null, t, a, !0, s, u);
    }
    function nw(e, t, a, i) {
      lm(e, t);
      var u = t.pendingProps, s;
      {
        var f = kc(t, a, !1);
        s = bc(t, f);
      }
      Nc(t, i);
      var p, v;
      wi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = nt(a) || "Unknown";
          iS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), iS[m] = !0);
        }
        t.mode & gt && qa.recordLegacyContextWarning(t, null), ea(!0), Zd.current = t, p = Vc(null, t, a, u, s, i), v = Bc(), ea(!1);
      }
      if (ll(), t.flags |= gi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = nt(a) || "Unknown";
        Jd[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), Jd[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = nt(a) || "Unknown";
          Jd[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Jd[R] = !0);
        }
        t.tag = de, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        return Ai(a) ? (E = !0, mh(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ig(t), h1(t, p), gg(t, a, u, i), fS(null, t, a, !0, E, i);
      } else {
        if (t.tag = xe, t.mode & gt) {
          Bt(!0);
          try {
            p = Vc(null, t, a, u, s, i), v = Bc();
          } finally {
            Bt(!1);
          }
        }
        return On() && v && $y(t), vr(null, t, p, i), dS(t, a), t.child;
      }
    }
    function dS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), oS[u] || (oS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = nt(t) || "Unknown";
          uS[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), uS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = nt(t) || "Unknown";
          lS[p] || (g("%s: Function components do not support contextType.", p), lS[p] = !0);
        }
      }
    }
    var pS = {
      dehydrated: null,
      treeContext: null,
      retryLane: He
    };
    function vS(e) {
      return {
        baseLanes: e,
        cachePool: Gx(),
        transitions: null
      };
    }
    function rw(e, t) {
      var a = null;
      return {
        baseLanes: De(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function aw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return kg(e, $d);
    }
    function iw(e, t) {
      return su(e.childLanes, t);
    }
    function dC(e, t, a) {
      var i = t.pendingProps;
      vk(t) && (t.flags |= ge);
      var u = Za.current, s = !1, f = (t.flags & ge) !== oe;
      if (f || aw(u, e) ? (s = !0, t.flags &= ~ge) : (e === null || e.memoizedState !== null) && (u = kx(u, w1)), u = Ac(u), Ou(t, u), e === null) {
        Xy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return cw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = lw(t, m, y, a), E = t.child;
          return E.memoizedState = vS(a), t.memoizedState = pS, R;
        } else
          return hS(t, m);
      } else {
        var b = e.memoizedState;
        if (b !== null) {
          var _ = b.dehydrated;
          if (_ !== null)
            return fw(e, t, f, i, _, b, a);
        }
        if (s) {
          var O = i.fallback, X = i.children, se = ow(e, t, X, O, a), ae = t.child, je = e.child.memoizedState;
          return ae.memoizedState = je === null ? vS(a) : rw(je, a), ae.childLanes = iw(e, a), t.memoizedState = pS, se;
        } else {
          var Ne = i.children, w = uw(e, t, Ne, a);
          return t.memoizedState = null, w;
        }
      }
    }
    function hS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = mS(u, i);
      return s.return = e, e.child = s, s;
    }
    function lw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ke) === fe && s !== null ? (p = s, p.childLanes = z, p.pendingProps = f, e.mode & pe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Vu(a, u, i, null)) : (p = mS(f, u), v = Vu(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function mS(e, t, a) {
      return pE(e, t, z, null);
    }
    function pC(e, t) {
      return es(e, t);
    }
    function uw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = pC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ke) === fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= $e) : p.push(s);
      }
      return t.child = f, f;
    }
    function ow(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ke) === fe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = z, m.pendingProps = v, t.mode & pe && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = pC(f, v), m.subtreeFlags = f.subtreeFlags & an;
      var R;
      return p !== null ? R = es(p, i) : (R = Vu(i, s, u, null), R.flags |= ot), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function im(e, t, a, i) {
      i !== null && qy(i), zc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = hS(t, s);
      return f.flags |= ot, t.memoizedState = null, f;
    }
    function sw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = mS(f, s), v = Vu(i, s, u, null);
      return v.flags |= ot, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ke) !== fe && zc(t, e.child, null, u), v;
    }
    function cw(e, t, a) {
      return (e.mode & ke) === fe ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ve) : zy(t) ? e.lanes = sl : e.lanes = Kn, null;
    }
    function fw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & wt) {
          t.flags &= ~wt;
          var w = nS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return im(e, t, f, w);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ge, null;
          var N = i.children, D = i.fallback, j = sw(e, t, N, D, f), q = t.child;
          return q.memoizedState = vS(f), t.memoizedState = pS, j;
        }
      else {
        if (JR(), (t.mode & ke) === fe)
          return im(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (zy(u)) {
          var p, v, m;
          {
            var y = mR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var E = nS(R, p, m);
          return im(e, t, f, E);
        }
        var b = Zn(f, e.childLanes);
        if (ei || b) {
          var _ = mm();
          if (_ !== null) {
            var O = ty(_, f);
            if (O !== He && O !== s.retryLane) {
              s.retryLane = O;
              var X = at;
              Vr(e, O), hn(_, e, O, X);
            }
          }
          HS();
          var se = nS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return im(e, t, f, se);
        } else if (U0(u)) {
          t.flags |= ge, t.child = e.child;
          var ae = AD.bind(null, e);
          return yR(u, ae), null;
        } else {
          nx(t, u, s.treeContext);
          var je = i.children, Ne = hS(t, je);
          return Ne.flags |= Mr, Ne;
        }
      }
    }
    function vC(e, t, a) {
      e.lanes = De(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = De(i.lanes, t)), tg(e.return, t, a);
    }
    function dw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ue) {
          var u = i.memoizedState;
          u !== null && vC(i, a, e);
        } else if (i.tag === it)
          vC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function pw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Fh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function vw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !sS[e])
        if (sS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function hw(e, t) {
      e !== void 0 && !am[e] && (e !== "collapsed" && e !== "hidden" ? (am[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (am[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function hC(e, t) {
      {
        var a = Wt(e), i = !a && typeof La(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function mw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Wt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!hC(e[a], a))
              return;
        } else {
          var i = La(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!hC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function yS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function mC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      vw(u), hw(s, u), mw(f, u), vr(e, t, f, a);
      var p = Za.current, v = kg(p, $d);
      if (v)
        p = bg(p, $d), t.flags |= ge;
      else {
        var m = e !== null && (e.flags & ge) !== oe;
        m && dw(t, t.child, a), p = Ac(p);
      }
      if (Ou(t, p), (t.mode & ke) === fe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = pw(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), yS(
              t,
              !1,
              // isBackwards
              R,
              y,
              s
            );
            break;
          }
          case "backwards": {
            var E = null, b = t.child;
            for (t.child = null; b !== null; ) {
              var _ = b.alternate;
              if (_ !== null && Fh(_) === null) {
                t.child = b;
                break;
              }
              var O = b.sibling;
              b.sibling = E, E = b, b = O;
            }
            yS(
              t,
              !0,
              // isBackwards
              E,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            yS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function yw(e, t, a) {
      xg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = zc(t, null, i, a) : vr(e, t, i, a), t.child;
    }
    var yC = !1;
    function gw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || yC || (yC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Wa(v, s, "prop", "Context.Provider");
      }
      if (a1(t, u, p), f !== null) {
        var m = f.value;
        if (ee(m, p)) {
          if (f.children === s.children && !vh())
            return Ol(e, t, a);
        } else
          dx(t, u, a);
      }
      var y = s.children;
      return vr(e, t, y, a), t.child;
    }
    var gC = !1;
    function Sw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (gC || (gC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nc(t, a);
      var f = tn(i);
      wi(t);
      var p;
      return Zd.current = t, ea(!0), p = s(f), ea(!1), ll(), t.flags |= gi, vr(e, t, p, a), t.child;
    }
    function ep() {
      ei = !0;
    }
    function lm(e, t) {
      (t.mode & ke) === fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ot);
    }
    function Ol(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), J1(), dp(t.lanes), Zn(a, t.childLanes) ? (xx(e, t), t.child) : null;
    }
    function Cw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= $e) : s.push(e), a.flags |= ot, a;
      }
    }
    function gS(e, t) {
      var a = e.lanes;
      return !!Zn(a, t);
    }
    function Ew(e, t, a) {
      switch (t.tag) {
        case ie:
          cC(t), t.stateNode, Lc();
          break;
        case le:
          R1(t);
          break;
        case de: {
          var i = t.type;
          Ai(i) && mh(t);
          break;
        }
        case he:
          xg(t, t.stateNode.containerInfo);
          break;
        case mn: {
          var u = t.memoizedProps.value, s = t.type._context;
          a1(t, s, u);
          break;
        }
        case ut:
          {
            var f = Zn(a, t.childLanes);
            f && (t.flags |= we);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ue: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ou(t, Ac(Za.current)), t.flags |= ge, null;
            var m = t.child, y = m.childLanes;
            if (Zn(a, y))
              return dC(e, t, a);
            Ou(t, Ac(Za.current));
            var R = Ol(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Ou(t, Ac(Za.current));
          break;
        }
        case it: {
          var E = (e.flags & ge) !== oe, b = Zn(a, t.childLanes);
          if (E) {
            if (b)
              return mC(e, t, a);
            t.flags |= ge;
          }
          var _ = t.memoizedState;
          if (_ !== null && (_.rendering = null, _.tail = null, _.lastEffect = null), Ou(t, Za.current), b)
            break;
          return null;
        }
        case Ae:
        case Xe:
          return t.lanes = z, uC(e, t, a);
      }
      return Ol(e, t, a);
    }
    function SC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Cw(e, t, WS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || vh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ei = !0;
        else {
          var s = gS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ge) === oe)
            return ei = !1, Ew(e, t, a);
          (e.flags & mo) !== oe ? ei = !0 : ei = !1;
        }
      } else if (ei = !1, On() && IR(t)) {
        var f = t.index, p = WR();
        G0(t, p, f);
      }
      switch (t.lanes = z, t.tag) {
        case rn:
          return nw(e, t, t.type, a);
        case kn: {
          var v = t.elementType;
          return ew(e, t, v, a);
        }
        case xe: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : Ka(m, y);
          return cS(e, t, m, R, a);
        }
        case de: {
          var E = t.type, b = t.pendingProps, _ = t.elementType === E ? b : Ka(E, b);
          return sC(e, t, E, _, a);
        }
        case ie:
          return Kx(e, t, a);
        case le:
          return Zx(e, t, a);
        case _e:
          return Jx(e, t);
        case Ue:
          return dC(e, t, a);
        case he:
          return yw(e, t, a);
        case ze: {
          var O = t.type, X = t.pendingProps, se = t.elementType === O ? X : Ka(O, X);
          return aC(e, t, O, se, a);
        }
        case et:
          return Wx(e, t, a);
        case lt:
          return Xx(e, t, a);
        case ut:
          return qx(e, t, a);
        case mn:
          return gw(e, t, a);
        case Gr:
          return Sw(e, t, a);
        case mt: {
          var ae = t.type, je = t.pendingProps, Ne = Ka(ae, je);
          if (t.type !== t.elementType) {
            var w = ae.propTypes;
            w && Wa(
              w,
              Ne,
              // Resolved for outer only
              "prop",
              nt(ae)
            );
          }
          return Ne = Ka(ae.type, Ne), iC(e, t, ae, Ne, a);
        }
        case be:
          return lC(e, t, t.type, t.pendingProps, a);
        case ar: {
          var N = t.type, D = t.pendingProps, j = t.elementType === N ? D : Ka(N, D);
          return tw(e, t, N, j, a);
        }
        case it:
          return mC(e, t, a);
        case Vn:
          break;
        case Ae:
          return uC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pc(e) {
      e.flags |= we;
    }
    function CC(e) {
      e.flags |= Qn, e.flags |= Uf;
    }
    var EC, SS, TC, RC;
    EC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === _e)
          $T(e, u.stateNode);
        else if (u.tag !== he) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, SS = function(e, t) {
    }, TC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = wg(), v = GT(f, a, s, i, u, p);
        t.updateQueue = v, v && Pc(t);
      }
    }, RC = function(e, t, a, i) {
      a !== i && Pc(t);
    };
    function tp(e, t) {
      if (!On())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function zn(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = z, i = oe;
      if (t) {
        if ((e.mode & pe) !== fe) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = De(a, De(m.lanes, m.childLanes)), i |= m.subtreeFlags & an, i |= m.flags & an, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = De(a, De(y.lanes, y.childLanes)), i |= y.subtreeFlags & an, i |= y.flags & an, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & pe) !== fe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = De(a, De(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = De(a, De(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Tw(e, t, a) {
      if (ux() && (t.mode & ke) !== fe && (t.flags & ge) === oe)
        return J0(t), Lc(), t.flags |= wt | or | qt, !1;
      var i = Eh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ix(t), zn(t), (t.mode & pe) !== fe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Lc(), (t.flags & ge) === oe && (t.memoizedState = null), t.flags |= we, zn(t), (t.mode & pe) !== fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return e1(), !0;
    }
    function xC(e, t, a) {
      var i = t.pendingProps;
      switch (Qy(t), t.tag) {
        case rn:
        case kn:
        case be:
        case xe:
        case ze:
        case et:
        case lt:
        case ut:
        case Gr:
        case mt:
          return zn(t), null;
        case de: {
          var u = t.type;
          return Ai(u) && hh(t), zn(t), null;
        }
        case ie: {
          var s = t.stateNode;
          if (Uc(t), By(t), Mg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Eh(t);
            if (f)
              Pc(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & wt) !== oe) && (t.flags |= _r, e1());
            }
          }
          return SS(e, t), zn(t), null;
        }
        case le: {
          Dg(t);
          var v = T1(), m = t.type;
          if (e !== null && t.stateNode != null)
            TC(e, t, m, i, v), e.ref !== t.ref && CC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zn(t), null;
            }
            var y = wg(), R = Eh(t);
            if (R)
              rx(t, v, y) && Pc(t);
            else {
              var E = YT(m, i, v, y, t);
              EC(E, t, !1, !1), t.stateNode = E, QT(E, m, i, v) && Pc(t);
            }
            t.ref !== null && CC(t);
          }
          return zn(t), null;
        }
        case _e: {
          var b = i;
          if (e && t.stateNode != null) {
            var _ = e.memoizedProps;
            RC(e, t, _, b);
          } else {
            if (typeof b != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var O = T1(), X = wg(), se = Eh(t);
            se ? ax(t) && Pc(t) : t.stateNode = IT(b, O, X, t);
          }
          return zn(t), null;
        }
        case Ue: {
          Hc(t);
          var ae = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var je = Tw(e, t, ae);
            if (!je)
              return t.flags & qt ? t : null;
          }
          if ((t.flags & ge) !== oe)
            return t.lanes = a, (t.mode & pe) !== fe && tS(t), t;
          var Ne = ae !== null, w = e !== null && e.memoizedState !== null;
          if (Ne !== w && Ne) {
            var N = t.child;
            if (N.flags |= Si, (t.mode & ke) !== fe) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Ie);
              D || kg(Za.current, w1) ? RD() : HS();
            }
          }
          var j = t.updateQueue;
          if (j !== null && (t.flags |= we), zn(t), (t.mode & pe) !== fe && Ne) {
            var q = t.child;
            q !== null && (t.treeBaseDuration -= q.treeBaseDuration);
          }
          return null;
        }
        case he:
          return Uc(t), SS(e, t), e === null && VR(t.stateNode.containerInfo), zn(t), null;
        case mn:
          var G = t.type._context;
          return eg(G, t), zn(t), null;
        case ar: {
          var ye = t.type;
          return Ai(ye) && hh(t), zn(t), null;
        }
        case it: {
          Hc(t);
          var Ee = t.memoizedState;
          if (Ee === null)
            return zn(t), null;
          var Je = (t.flags & ge) !== oe, Be = Ee.rendering;
          if (Be === null)
            if (Je)
              tp(Ee, !1);
            else {
              var Gt = wD() && (e === null || (e.flags & ge) === oe);
              if (!Gt)
                for (var Pe = t.child; Pe !== null; ) {
                  var Ft = Fh(Pe);
                  if (Ft !== null) {
                    Je = !0, t.flags |= ge, tp(Ee, !1);
                    var nr = Ft.updateQueue;
                    return nr !== null && (t.updateQueue = nr, t.flags |= we), t.subtreeFlags = oe, wx(t, a), Ou(t, bg(Za.current, $d)), t.child;
                  }
                  Pe = Pe.sibling;
                }
              Ee.tail !== null && yt() > QC() && (t.flags |= ge, Je = !0, tp(Ee, !1), t.lanes = Wf);
            }
          else {
            if (!Je) {
              var jn = Fh(Be);
              if (jn !== null) {
                t.flags |= ge, Je = !0;
                var oa = jn.updateQueue;
                if (oa !== null && (t.updateQueue = oa, t.flags |= we), tp(Ee, !0), Ee.tail === null && Ee.tailMode === "hidden" && !Be.alternate && !On())
                  return zn(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                yt() * 2 - Ee.renderingStartTime > QC() && a !== Kn && (t.flags |= ge, Je = !0, tp(Ee, !1), t.lanes = Wf);
            }
            if (Ee.isBackwards)
              Be.sibling = t.child, t.child = Be;
            else {
              var yr = Ee.last;
              yr !== null ? yr.sibling = Be : t.child = Be, Ee.last = Be;
            }
          }
          if (Ee.tail !== null) {
            var gr = Ee.tail;
            Ee.rendering = gr, Ee.tail = gr.sibling, Ee.renderingStartTime = yt(), gr.sibling = null;
            var rr = Za.current;
            return Je ? rr = bg(rr, $d) : rr = Ac(rr), Ou(t, rr), gr;
          }
          return zn(t), null;
        }
        case Vn:
          break;
        case Ae:
        case Xe: {
          AS(t);
          var Hl = t.memoizedState, qc = Hl !== null;
          if (e !== null) {
            var yp = e.memoizedState, $i = yp !== null;
            $i !== qc && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !K && (t.flags |= Si);
          }
          return !qc || (t.mode & ke) === fe ? zn(t) : Zn(Yi, Kn) && (zn(t), t.subtreeFlags & (ot | we) && (t.flags |= Si)), null;
        }
        case Sr:
          return null;
        case Et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Rw(e, t, a) {
      switch (Qy(t), t.tag) {
        case de: {
          var i = t.type;
          Ai(i) && hh(t);
          var u = t.flags;
          return u & qt ? (t.flags = u & ~qt | ge, (t.mode & pe) !== fe && tS(t), t) : null;
        }
        case ie: {
          t.stateNode, Uc(t), By(t), Mg();
          var s = t.flags;
          return (s & qt) !== oe && (s & ge) === oe ? (t.flags = s & ~qt | ge, t) : null;
        }
        case le:
          return Dg(t), null;
        case Ue: {
          Hc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Lc();
          }
          var p = t.flags;
          return p & qt ? (t.flags = p & ~qt | ge, (t.mode & pe) !== fe && tS(t), t) : null;
        }
        case it:
          return Hc(t), null;
        case he:
          return Uc(t), null;
        case mn:
          var v = t.type._context;
          return eg(v, t), null;
        case Ae:
        case Xe:
          return AS(t), null;
        case Sr:
          return null;
        default:
          return null;
      }
    }
    function wC(e, t, a) {
      switch (Qy(t), t.tag) {
        case de: {
          var i = t.type.childContextTypes;
          i != null && hh(t);
          break;
        }
        case ie: {
          t.stateNode, Uc(t), By(t), Mg();
          break;
        }
        case le: {
          Dg(t);
          break;
        }
        case he:
          Uc(t);
          break;
        case Ue:
          Hc(t);
          break;
        case it:
          Hc(t);
          break;
        case mn:
          var u = t.type._context;
          eg(u, t);
          break;
        case Ae:
        case Xe:
          AS(t);
          break;
      }
    }
    var DC = null;
    DC = /* @__PURE__ */ new Set();
    var um = !1, Un = !1, xw = typeof WeakSet == "function" ? WeakSet : Set, te = null, Yc = null, $c = null;
    function ww(e) {
      al(null, function() {
        throw e;
      }), Nf();
    }
    var Dw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & pe)
        try {
          Bi(), t.componentWillUnmount();
        } finally {
          Vi(e);
        }
      else
        t.componentWillUnmount();
    };
    function kC(e, t) {
      try {
        Uu(sn, e);
      } catch (a) {
        dt(e, t, a);
      }
    }
    function CS(e, t, a) {
      try {
        Dw(e, a);
      } catch (i) {
        dt(e, t, i);
      }
    }
    function kw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dt(e, t, i);
      }
    }
    function bC(e, t) {
      try {
        MC(e);
      } catch (a) {
        dt(e, t, a);
      }
    }
    function Qc(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (bn && li && e.mode & pe)
              try {
                Bi(), i = a(null);
              } finally {
                Vi(e);
              }
            else
              i = a(null);
          } catch (u) {
            dt(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Re(e));
        } else
          a.current = null;
    }
    function om(e, t, a) {
      try {
        a();
      } catch (i) {
        dt(e, t, i);
      }
    }
    var _C = !1;
    function bw(e, t) {
      BT(e.containerInfo), te = t, _w();
      var a = _C;
      return _C = !1, a;
    }
    function _w() {
      for (; te !== null; ) {
        var e = te, t = e.child;
        (e.subtreeFlags & tu) !== oe && t !== null ? (t.return = e, te = t) : Mw();
      }
    }
    function Mw() {
      for (; te !== null; ) {
        var e = te;
        Ke(e);
        try {
          Lw(e);
        } catch (a) {
          dt(e, e.return, a);
        }
        Vt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, te = t;
          return;
        }
        te = e.return;
      }
    }
    function Lw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & _r) !== oe) {
        switch (Ke(e), e.tag) {
          case xe:
          case ze:
          case be:
            break;
          case de: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Xo && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ka(e.type, i), u);
              {
                var p = DC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Re(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ie: {
            {
              var v = e.stateNode;
              dR(v.containerInfo);
            }
            break;
          }
          case le:
          case _e:
          case he:
          case ar:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Vt();
      }
    }
    function ti(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Nn) !== Br ? zs(t) : (e & sn) !== Br && Us(t), (e & Hi) !== Br && vp(!0), om(t, a, p), (e & Hi) !== Br && vp(!1), (e & Nn) !== Br ? Cv() : (e & sn) !== Br && nu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Uu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Nn) !== Br ? Sv(t) : (e & sn) !== Br && Ev(t);
            var f = s.create;
            (e & Hi) !== Br && vp(!0), s.destroy = f(), (e & Hi) !== Br && vp(!1), (e & Nn) !== Br ? Qf() : (e & sn) !== Br && Tv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & sn) !== oe ? v = "useLayoutEffect" : (s.tag & Hi) !== oe ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Ow(e, t) {
      if ((t.flags & we) !== oe)
        switch (t.tag) {
          case ut: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = K1(), p = t.alternate === null ? "mount" : "update";
            q1() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case ie:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case ut:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Nw(e, t, a, i) {
      if ((a.flags & Cn) !== oe)
        switch (a.tag) {
          case xe:
          case ze:
          case be: {
            if (!Un)
              if (a.mode & pe)
                try {
                  Bi(), Uu(sn | on, a);
                } finally {
                  Vi(a);
                }
              else
                Uu(sn | on, a);
            break;
          }
          case de: {
            var u = a.stateNode;
            if (a.flags & we && !Un)
              if (t === null)
                if (a.type === a.elementType && !Xo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a) || "instance")), a.mode & pe)
                  try {
                    Bi(), u.componentDidMount();
                  } finally {
                    Vi(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ka(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Xo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a) || "instance")), a.mode & pe)
                  try {
                    Bi(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vi(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Xo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a) || "instance")), c1(a, p, u));
            break;
          }
          case ie: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    m = a.child.stateNode;
                    break;
                  case de:
                    m = a.child.stateNode;
                    break;
                }
              c1(a, v, m);
            }
            break;
          }
          case le: {
            var y = a.stateNode;
            if (t === null && a.flags & we) {
              var R = a.type, E = a.memoizedProps;
              ZT(y, R, E);
            }
            break;
          }
          case _e:
            break;
          case he:
            break;
          case ut: {
            {
              var b = a.memoizedProps, _ = b.onCommit, O = b.onRender, X = a.stateNode.effectDuration, se = K1(), ae = t === null ? "mount" : "update";
              q1() && (ae = "nested-update"), typeof O == "function" && O(a.memoizedProps.id, ae, a.actualDuration, a.treeBaseDuration, a.actualStartTime, se);
              {
                typeof _ == "function" && _(a.memoizedProps.id, ae, X, se), MD(a);
                var je = a.return;
                e:
                  for (; je !== null; ) {
                    switch (je.tag) {
                      case ie:
                        var Ne = je.stateNode;
                        Ne.effectDuration += X;
                        break e;
                      case ut:
                        var w = je.stateNode;
                        w.effectDuration += X;
                        break e;
                    }
                    je = je.return;
                  }
              }
            }
            break;
          }
          case Ue: {
            Bw(e, a);
            break;
          }
          case it:
          case ar:
          case Vn:
          case Ae:
          case Xe:
          case Et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Un || a.flags & Qn && MC(a);
    }
    function zw(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          if (e.mode & pe)
            try {
              Bi(), kC(e, e.return);
            } finally {
              Vi(e);
            }
          else
            kC(e, e.return);
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && kw(e, e.return, t), bC(e, e.return);
          break;
        }
        case le: {
          bC(e, e.return);
          break;
        }
      }
    }
    function Uw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? oR(u) : cR(i.stateNode, i.memoizedProps);
            } catch (f) {
              dt(e, e.return, f);
            }
          }
        } else if (i.tag === _e) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? sR(s) : fR(s, i.memoizedProps);
            } catch (f) {
              dt(e, e.return, f);
            }
        } else if (!((i.tag === Ae || i.tag === Xe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function MC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & pe)
            try {
              Bi(), u = t(i);
            } finally {
              Vi(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Re(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Re(e)), t.current = i;
      }
    }
    function Aw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function LC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, LC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && YR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Hw(e) {
      for (var t = e.return; t !== null; ) {
        if (OC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function OC(e) {
      return e.tag === le || e.tag === ie || e.tag === he;
    }
    function NC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || OC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== _e && t.tag !== Ot; ) {
            if (t.flags & ot || t.child === null || t.tag === he)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ot))
            return t.stateNode;
        }
    }
    function Fw(e) {
      var t = Hw(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & Qe && (z0(a), t.flags &= ~Qe);
          var i = NC(e);
          TS(e, i, a);
          break;
        }
        case ie:
        case he: {
          var u = t.stateNode.containerInfo, s = NC(e);
          ES(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function ES(e, t, a) {
      var i = e.tag, u = i === le || i === _e;
      if (u) {
        var s = e.stateNode;
        t ? aR(a, s, t) : nR(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          ES(f, t, a);
          for (var p = f.sibling; p !== null; )
            ES(p, t, a), p = p.sibling;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === le || i === _e;
      if (u) {
        var s = e.stateNode;
        t ? rR(a, s, t) : tR(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    var An = null, ni = !1;
    function jw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case le: {
                An = i.stateNode, ni = !1;
                break e;
              }
              case ie: {
                An = i.stateNode.containerInfo, ni = !0;
                break e;
              }
              case he: {
                An = i.stateNode.containerInfo, ni = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (An === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        zC(e, t, a), An = null, ni = !1;
      }
      Aw(a);
    }
    function Au(e, t, a) {
      for (var i = a.child; i !== null; )
        zC(e, t, i), i = i.sibling;
    }
    function zC(e, t, a) {
      switch (Yf(a), a.tag) {
        case le:
          Un || Qc(a, t);
        case _e: {
          {
            var i = An, u = ni;
            An = null, Au(e, t, a), An = i, ni = u, An !== null && (ni ? lR(An, a.stateNode) : iR(An, a.stateNode));
          }
          return;
        }
        case Ot: {
          An !== null && (ni ? uR(An, a.stateNode) : Ny(An, a.stateNode));
          return;
        }
        case he: {
          {
            var s = An, f = ni;
            An = a.stateNode.containerInfo, ni = !0, Au(e, t, a), An = s, ni = f;
          }
          return;
        }
        case xe:
        case ze:
        case mt:
        case be: {
          if (!Un) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, E = R.destroy, b = R.tag;
                  E !== void 0 && ((b & Hi) !== Br ? om(a, t, E) : (b & sn) !== Br && (Us(a), a.mode & pe ? (Bi(), om(a, t, E), Vi(a)) : om(a, t, E), nu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          Au(e, t, a);
          return;
        }
        case de: {
          if (!Un) {
            Qc(a, t);
            var _ = a.stateNode;
            typeof _.componentWillUnmount == "function" && CS(a, t, _);
          }
          Au(e, t, a);
          return;
        }
        case Vn: {
          Au(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & ke
          ) {
            var O = Un;
            Un = O || a.memoizedState !== null, Au(e, t, a), Un = O;
          } else
            Au(e, t, a);
          break;
        }
        default: {
          Au(e, t, a);
          return;
        }
      }
    }
    function Vw(e) {
      e.memoizedState;
    }
    function Bw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && DR(s);
          }
        }
      }
    }
    function UC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new xw()), t.forEach(function(i) {
          var u = HD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ln)
              if (Yc !== null && $c !== null)
                pp($c, Yc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Pw(e, t, a) {
      Yc = a, $c = e, Ke(t), AC(t, e), Ke(t), Yc = null, $c = null;
    }
    function ri(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            jw(e, t, s);
          } catch (v) {
            dt(s, t, v);
          }
        }
      var f = Om();
      if (t.subtreeFlags & Wn)
        for (var p = t.child; p !== null; )
          Ke(p), AC(p, e), p = p.sibling;
      Ke(f);
    }
    function AC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case xe:
        case ze:
        case mt:
        case be: {
          if (ri(t, e), Pi(e), u & we) {
            try {
              ti(Hi | on, e, e.return), Uu(Hi | on, e);
            } catch (ye) {
              dt(e, e.return, ye);
            }
            if (e.mode & pe) {
              try {
                Bi(), ti(sn | on, e, e.return);
              } catch (ye) {
                dt(e, e.return, ye);
              }
              Vi(e);
            } else
              try {
                ti(sn | on, e, e.return);
              } catch (ye) {
                dt(e, e.return, ye);
              }
          }
          return;
        }
        case de: {
          ri(t, e), Pi(e), u & Qn && i !== null && Qc(i, i.return);
          return;
        }
        case le: {
          ri(t, e), Pi(e), u & Qn && i !== null && Qc(i, i.return);
          {
            if (e.flags & Qe) {
              var s = e.stateNode;
              try {
                z0(s);
              } catch (ye) {
                dt(e, e.return, ye);
              }
            }
            if (u & we) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    JT(f, y, m, v, p, e);
                  } catch (ye) {
                    dt(e, e.return, ye);
                  }
              }
            }
          }
          return;
        }
        case _e: {
          if (ri(t, e), Pi(e), u & we) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, E = e.memoizedProps, b = i !== null ? i.memoizedProps : E;
            try {
              eR(R, b, E);
            } catch (ye) {
              dt(e, e.return, ye);
            }
          }
          return;
        }
        case ie: {
          if (ri(t, e), Pi(e), u & we && i !== null) {
            var _ = i.memoizedState;
            if (_.isDehydrated)
              try {
                wR(t.containerInfo);
              } catch (ye) {
                dt(e, e.return, ye);
              }
          }
          return;
        }
        case he: {
          ri(t, e), Pi(e);
          return;
        }
        case Ue: {
          ri(t, e), Pi(e);
          var O = e.child;
          if (O.flags & Si) {
            var X = O.stateNode, se = O.memoizedState, ae = se !== null;
            if (X.isHidden = ae, ae) {
              var je = O.alternate !== null && O.alternate.memoizedState !== null;
              je || TD();
            }
          }
          if (u & we) {
            try {
              Vw(e);
            } catch (ye) {
              dt(e, e.return, ye);
            }
            UC(e);
          }
          return;
        }
        case Ae: {
          var Ne = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ke
          ) {
            var w = Un;
            Un = w || Ne, ri(t, e), Un = w;
          } else
            ri(t, e);
          if (Pi(e), u & Si) {
            var N = e.stateNode, D = e.memoizedState, j = D !== null, q = e;
            if (N.isHidden = j, j && !Ne && (q.mode & ke) !== fe) {
              te = q;
              for (var G = q.child; G !== null; )
                te = G, $w(G), G = G.sibling;
            }
            Uw(q, j);
          }
          return;
        }
        case it: {
          ri(t, e), Pi(e), u & we && UC(e);
          return;
        }
        case Vn:
          return;
        default: {
          ri(t, e), Pi(e);
          return;
        }
      }
    }
    function Pi(e) {
      var t = e.flags;
      if (t & ot) {
        try {
          Fw(e);
        } catch (a) {
          dt(e, e.return, a);
        }
        e.flags &= ~ot;
      }
      t & Mr && (e.flags &= ~Mr);
    }
    function Yw(e, t, a) {
      Yc = a, $c = t, te = e, HC(e, t, a), Yc = null, $c = null;
    }
    function HC(e, t, a) {
      for (var i = (e.mode & ke) !== fe; te !== null; ) {
        var u = te, s = u.child;
        if (u.tag === Ae && i) {
          var f = u.memoizedState !== null, p = f || um;
          if (p) {
            RS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || Un, R = um, E = Un;
            um = p, Un = y, Un && !E && (te = u, Qw(u));
            for (var b = s; b !== null; )
              te = b, HC(
                b,
                // New root; bubble back up to here and stop.
                t,
                a
              ), b = b.sibling;
            te = u, um = R, Un = E, RS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Cn) !== oe && s !== null ? (s.return = u, te = s) : RS(e, t, a);
      }
    }
    function RS(e, t, a) {
      for (; te !== null; ) {
        var i = te;
        if ((i.flags & Cn) !== oe) {
          var u = i.alternate;
          Ke(i);
          try {
            Nw(t, u, i, a);
          } catch (f) {
            dt(i, i.return, f);
          }
          Vt();
        }
        if (i === e) {
          te = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, te = s;
          return;
        }
        te = i.return;
      }
    }
    function $w(e) {
      for (; te !== null; ) {
        var t = te, a = t.child;
        switch (t.tag) {
          case xe:
          case ze:
          case mt:
          case be: {
            if (t.mode & pe)
              try {
                Bi(), ti(sn, t, t.return);
              } finally {
                Vi(t);
              }
            else
              ti(sn, t, t.return);
            break;
          }
          case de: {
            Qc(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CS(t, t.return, i);
            break;
          }
          case le: {
            Qc(t, t.return);
            break;
          }
          case Ae: {
            var u = t.memoizedState !== null;
            if (u) {
              FC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, te = a) : FC(e);
      }
    }
    function FC(e) {
      for (; te !== null; ) {
        var t = te;
        if (t === e) {
          te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, te = a;
          return;
        }
        te = t.return;
      }
    }
    function Qw(e) {
      for (; te !== null; ) {
        var t = te, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            jC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, te = a) : jC(e);
      }
    }
    function jC(e) {
      for (; te !== null; ) {
        var t = te;
        Ke(t);
        try {
          zw(t);
        } catch (i) {
          dt(t, t.return, i);
        }
        if (Vt(), t === e) {
          te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, te = a;
          return;
        }
        te = t.return;
      }
    }
    function Gw(e, t, a, i) {
      te = t, Iw(t, e, a, i);
    }
    function Iw(e, t, a, i) {
      for (; te !== null; ) {
        var u = te, s = u.child;
        (u.subtreeFlags & Lr) !== oe && s !== null ? (s.return = u, te = s) : Ww(e, t, a, i);
      }
    }
    function Ww(e, t, a, i) {
      for (; te !== null; ) {
        var u = te;
        if ((u.flags & pt) !== oe) {
          Ke(u);
          try {
            Xw(t, u, a, i);
          } catch (f) {
            dt(u, u.return, f);
          }
          Vt();
        }
        if (u === e) {
          te = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, te = s;
          return;
        }
        te = u.return;
      }
    }
    function Xw(e, t, a, i) {
      switch (t.tag) {
        case xe:
        case ze:
        case be: {
          if (t.mode & pe) {
            eS();
            try {
              Uu(Nn | on, t);
            } finally {
              Jg(t);
            }
          } else
            Uu(Nn | on, t);
          break;
        }
      }
    }
    function qw(e) {
      te = e, Kw();
    }
    function Kw() {
      for (; te !== null; ) {
        var e = te, t = e.child;
        if ((te.flags & $e) !== oe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              te = u, eD(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            te = e;
          }
        }
        (e.subtreeFlags & Lr) !== oe && t !== null ? (t.return = e, te = t) : Zw();
      }
    }
    function Zw() {
      for (; te !== null; ) {
        var e = te;
        (e.flags & pt) !== oe && (Ke(e), Jw(e), Vt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, te = t;
          return;
        }
        te = e.return;
      }
    }
    function Jw(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          e.mode & pe ? (eS(), ti(Nn | on, e, e.return), Jg(e)) : ti(Nn | on, e, e.return);
          break;
        }
      }
    }
    function eD(e, t) {
      for (; te !== null; ) {
        var a = te;
        Ke(a), nD(a, t), Vt();
        var i = a.child;
        i !== null ? (i.return = a, te = i) : tD(e);
      }
    }
    function tD(e) {
      for (; te !== null; ) {
        var t = te, a = t.sibling, i = t.return;
        if (LC(t), t === e) {
          te = null;
          return;
        }
        if (a !== null) {
          a.return = i, te = a;
          return;
        }
        te = i;
      }
    }
    function nD(e, t) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          e.mode & pe ? (eS(), ti(Nn, e, t), Jg(e)) : ti(Nn, e, t);
          break;
        }
      }
    }
    function rD(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          try {
            Uu(sn | on, e);
          } catch (a) {
            dt(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dt(e, e.return, a);
          }
          break;
        }
      }
    }
    function aD(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          try {
            Uu(Nn | on, e);
          } catch (t) {
            dt(e, e.return, t);
          }
          break;
        }
      }
    }
    function iD(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be: {
          try {
            ti(sn | on, e, e.return);
          } catch (a) {
            dt(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && CS(e, e.return, t);
          break;
        }
      }
    }
    function lD(e) {
      switch (e.tag) {
        case xe:
        case ze:
        case be:
          try {
            ti(Nn | on, e, e.return);
          } catch (t) {
            dt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var np = Symbol.for;
      np("selector.component"), np("selector.has_pseudo_class"), np("selector.role"), np("selector.test_id"), np("selector.text");
    }
    var uD = [];
    function oD() {
      uD.forEach(function(e) {
        return e();
      });
    }
    var sD = L.ReactCurrentActQueue;
    function cD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function VC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && sD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var fD = Math.ceil, xS = L.ReactCurrentDispatcher, wS = L.ReactCurrentOwner, Hn = L.ReactCurrentBatchConfig, ai = L.ReactCurrentActQueue, dn = (
      /*             */
      0
    ), BC = (
      /*               */
      1
    ), Fn = (
      /*                */
      2
    ), wa = (
      /*                */
      4
    ), Nl = 0, rp = 1, qo = 2, sm = 3, ap = 4, PC = 5, DS = 6, Fe = dn, hr = null, Lt = null, pn = z, Yi = z, kS = Du(z), vn = Nl, ip = null, cm = z, lp = z, fm = z, up = null, Pr = null, bS = 0, YC = 500, $C = 1 / 0, dD = 500, zl = null;
    function op() {
      $C = yt() + dD;
    }
    function QC() {
      return $C;
    }
    var dm = !1, _S = null, Gc = null, Ko = !1, Hu = null, sp = z, MS = [], LS = null, pD = 50, cp = 0, OS = null, NS = !1, pm = !1, vD = 50, Ic = 0, vm = null, fp = at, hm = z, GC = !1;
    function mm() {
      return hr;
    }
    function mr() {
      return (Fe & (Fn | wa)) !== dn ? yt() : (fp !== at || (fp = yt()), fp);
    }
    function Fu(e) {
      var t = e.mode;
      if ((t & ke) === fe)
        return ve;
      if ((Fe & Fn) !== dn && pn !== z)
        return Pt(pn);
      var a = cx() !== sx;
      if (a) {
        if (Hn.transition !== null) {
          var i = Hn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return hm === He && (hm = Kf()), hm;
      }
      var u = Ur();
      if (u !== He)
        return u;
      var s = WT();
      return s;
    }
    function hD(e) {
      var t = e.mode;
      return (t & ke) === fe ? ve : ey();
    }
    function hn(e, t, a, i) {
      jD(), GC && g("useInsertionEffect must not schedule updates."), NS && (pm = !0), ml(e, a, i), (Fe & Fn) !== z && e === hr ? PD(t) : (ln && nd(e, t, a), YD(t), e === hr && ((Fe & Fn) === dn && (lp = De(lp, a)), vn === ap && ju(e, pn)), Yr(e, i), a === ve && Fe === dn && (t.mode & ke) === fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ai.isBatchingLegacy && (op(), Q0()));
    }
    function mD(e, t, a) {
      var i = e.current;
      i.lanes = t, ml(e, t, a), Yr(e, a);
    }
    function yD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Fe & Fn) !== dn
      );
    }
    function Yr(e, t) {
      var a = e.callbackNode;
      Km(e, t);
      var i = To(e, e === hr ? pn : z);
      if (i === z) {
        a !== null && oE(a), e.callbackNode = null, e.callbackPriority = He;
        return;
      }
      var u = At(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ai.current !== null && a !== VS)) {
        a == null && s !== ve && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && oE(a);
      var f;
      if (u === ve)
        e.tag === ku ? (ai.isBatchingLegacy !== null && (ai.didScheduleLegacyUpdate = !0), GR(XC.bind(null, e))) : $0(XC.bind(null, e)), ai.current !== null ? ai.current.push(bu) : qT(function() {
          (Fe & (Fn | wa)) === dn && bu();
        }), f = null;
      else {
        var p;
        switch (ko(i)) {
          case En:
            p = Ls;
            break;
          case un:
            p = fr;
            break;
          case Ya:
            p = ha;
            break;
          case wo:
            p = Ei;
            break;
          default:
            p = ha;
            break;
        }
        f = BS(p, IC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function IC(e, t) {
      if (jx(), fp = at, hm = z, (Fe & (Fn | wa)) !== dn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Al();
      if (i && e.callbackNode !== a)
        return null;
      var u = To(e, e === hr ? pn : z);
      if (u === z)
        return null;
      var s = !xo(e, u) && !bv(e, u) && !t, f = s ? kD(e, u) : gm(e, u);
      if (f !== Nl) {
        if (f === qo) {
          var p = Xf(e);
          p !== z && (u = p, f = zS(e, p));
        }
        if (f === rp) {
          var v = ip;
          throw Zo(e, z), ju(e, u), Yr(e, yt()), v;
        }
        if (f === DS)
          ju(e, u);
        else {
          var m = !xo(e, u), y = e.current.alternate;
          if (m && !SD(y)) {
            if (f = gm(e, u), f === qo) {
              var R = Xf(e);
              R !== z && (u = R, f = zS(e, R));
            }
            if (f === rp) {
              var E = ip;
              throw Zo(e, z), ju(e, u), Yr(e, yt()), E;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, gD(e, f, u);
        }
      }
      return Yr(e, yt()), e.callbackNode === a ? IC.bind(null, e) : null;
    }
    function zS(e, t) {
      var a = up;
      if ($t(e)) {
        var i = Zo(e, t);
        i.flags |= wt, jR(e.containerInfo);
      }
      var u = gm(e, t);
      if (u !== qo) {
        var s = Pr;
        Pr = a, s !== null && WC(s);
      }
      return u;
    }
    function WC(e) {
      Pr === null ? Pr = e : Pr.push.apply(Pr, e);
    }
    function gD(e, t, a) {
      switch (t) {
        case Nl:
        case rp:
          throw new Error("Root did not complete. This is a bug in React.");
        case qo: {
          Jo(e, Pr, zl);
          break;
        }
        case sm: {
          if (ju(e, a), tc(a) && // do not delay if we're inside an act() scope
          !sE()) {
            var i = bS + YC - yt();
            if (i > 10) {
              var u = To(e, z);
              if (u !== z)
                break;
              var s = e.suspendedLanes;
              if (!hl(s, a)) {
                mr(), ed(e, s);
                break;
              }
              e.timeoutHandle = Ly(Jo.bind(null, e, Pr, zl), i);
              break;
            }
          }
          Jo(e, Pr, zl);
          break;
        }
        case ap: {
          if (ju(e, a), kv(a))
            break;
          if (!sE()) {
            var f = Dv(e, a), p = f, v = yt() - p, m = FD(v) - v;
            if (m > 10) {
              e.timeoutHandle = Ly(Jo.bind(null, e, Pr, zl), m);
              break;
            }
          }
          Jo(e, Pr, zl);
          break;
        }
        case PC: {
          Jo(e, Pr, zl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function SD(e) {
      for (var t = e; ; ) {
        if (t.flags & ho) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ee(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ho && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ju(e, t) {
      t = su(t, fm), t = su(t, lp), Jf(e, t);
    }
    function XC(e) {
      if (Vx(), (Fe & (Fn | wa)) !== dn)
        throw new Error("Should not already be working.");
      Al();
      var t = To(e, z);
      if (!Zn(t, ve))
        return Yr(e, yt()), null;
      var a = gm(e, t);
      if (e.tag !== ku && a === qo) {
        var i = Xf(e);
        i !== z && (t = i, a = zS(e, i));
      }
      if (a === rp) {
        var u = ip;
        throw Zo(e, z), ju(e, t), Yr(e, yt()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Jo(e, Pr, zl), Yr(e, yt()), null;
    }
    function CD(e, t) {
      t !== z && (cu(e, De(t, ve)), Yr(e, yt()), (Fe & (Fn | wa)) === dn && (op(), bu()));
    }
    function US(e, t) {
      var a = Fe;
      Fe |= BC;
      try {
        return e(t);
      } finally {
        Fe = a, Fe === dn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ai.isBatchingLegacy && (op(), Q0());
      }
    }
    function ED(e, t, a, i, u) {
      var s = Ur(), f = Hn.transition;
      try {
        return Hn.transition = null, Yt(En), e(t, a, i, u);
      } finally {
        Yt(s), Hn.transition = f, Fe === dn && op();
      }
    }
    function Ul(e) {
      Hu !== null && Hu.tag === ku && (Fe & (Fn | wa)) === dn && Al();
      var t = Fe;
      Fe |= BC;
      var a = Hn.transition, i = Ur();
      try {
        return Hn.transition = null, Yt(En), e ? e() : void 0;
      } finally {
        Yt(i), Hn.transition = a, Fe = t, (Fe & (Fn | wa)) === dn && bu();
      }
    }
    function qC() {
      return (Fe & (Fn | wa)) !== dn;
    }
    function ym(e, t) {
      er(kS, Yi, e), Yi = De(Yi, t);
    }
    function AS(e) {
      Yi = kS.current, Jn(kS, e);
    }
    function Zo(e, t) {
      e.finishedWork = null, e.finishedLanes = z;
      var a = e.timeoutHandle;
      if (a !== Oy && (e.timeoutHandle = Oy, XT(a)), Lt !== null)
        for (var i = Lt.return; i !== null; ) {
          var u = i.alternate;
          wC(u, i), i = i.return;
        }
      hr = e;
      var s = es(e.current, null);
      return Lt = s, pn = Yi = t, vn = Nl, ip = null, cm = z, lp = z, fm = z, up = null, Pr = null, vx(), qa.discardPendingWarnings(), s;
    }
    function KC(e, t) {
      do {
        var a = Lt;
        try {
          if (wh(), k1(), Vt(), wS.current = null, a === null || a.return === null) {
            vn = rp, ip = t, Lt = null;
            return;
          }
          if (bn && a.mode & pe && rm(a, !0), ii)
            if (ll(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Rv(a, i, pn);
            } else
              As(a, t, pn);
          Qx(e, a.return, a, t, pn), tE(a);
        } catch (u) {
          t = u, Lt === a && a !== null ? (a = a.return, Lt = a) : a = Lt;
          continue;
        }
        return;
      } while (!0);
    }
    function ZC() {
      var e = xS.current;
      return xS.current = Zh, e === null ? Zh : e;
    }
    function JC(e) {
      xS.current = e;
    }
    function TD() {
      bS = yt();
    }
    function dp(e) {
      cm = De(e, cm);
    }
    function RD() {
      vn === Nl && (vn = sm);
    }
    function HS() {
      (vn === Nl || vn === sm || vn === qo) && (vn = ap), hr !== null && (Ro(cm) || Ro(lp)) && ju(hr, pn);
    }
    function xD(e) {
      vn !== ap && (vn = qo), up === null ? up = [e] : up.push(e);
    }
    function wD() {
      return vn === Nl;
    }
    function gm(e, t) {
      var a = Fe;
      Fe |= Fn;
      var i = ZC();
      if (hr !== e || pn !== t) {
        if (ln) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (pp(e, pn), u.clear()), ac(e, t);
        }
        zl = rd(), Zo(e, t);
      }
      aa(t);
      do
        try {
          DD();
          break;
        } catch (s) {
          KC(e, s);
        }
      while (!0);
      if (wh(), Fe = a, JC(i), Lt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return au(), hr = null, pn = z, vn;
    }
    function DD() {
      for (; Lt !== null; )
        eE(Lt);
    }
    function kD(e, t) {
      var a = Fe;
      Fe |= Fn;
      var i = ZC();
      if (hr !== e || pn !== t) {
        if (ln) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (pp(e, pn), u.clear()), ac(e, t);
        }
        zl = rd(), op(), Zo(e, t);
      }
      aa(t);
      do
        try {
          bD();
          break;
        } catch (s) {
          KC(e, s);
        }
      while (!0);
      return wh(), JC(i), Fe = a, Lt !== null ? (go(), Nl) : (au(), hr = null, pn = z, vn);
    }
    function bD() {
      for (; Lt !== null && !Ms(); )
        eE(Lt);
    }
    function eE(e) {
      var t = e.alternate;
      Ke(e);
      var a;
      (e.mode & pe) !== fe ? (Zg(e), a = FS(t, e, Yi), rm(e, !0)) : a = FS(t, e, Yi), Vt(), e.memoizedProps = e.pendingProps, a === null ? tE(e) : Lt = a, wS.current = null;
    }
    function tE(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & or) === oe) {
          Ke(t);
          var u = void 0;
          if ((t.mode & pe) === fe ? u = xC(a, t, Yi) : (Zg(t), u = xC(a, t, Yi), rm(t, !1)), Vt(), u !== null) {
            Lt = u;
            return;
          }
        } else {
          var s = Rw(a, t);
          if (s !== null) {
            s.flags &= vv, Lt = s;
            return;
          }
          if ((t.mode & pe) !== fe) {
            rm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= or, i.subtreeFlags = oe, i.deletions = null;
          else {
            vn = DS, Lt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Lt = v;
          return;
        }
        t = i, Lt = t;
      } while (t !== null);
      vn === Nl && (vn = PC);
    }
    function Jo(e, t, a) {
      var i = Ur(), u = Hn.transition;
      try {
        Hn.transition = null, Yt(En), _D(e, t, a, i);
      } finally {
        Hn.transition = u, Yt(i);
      }
      return null;
    }
    function _D(e, t, a, i) {
      do
        Al();
      while (Hu !== null);
      if (VD(), (Fe & (Fn | wa)) !== dn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ns(s), u === null)
        return $f(), null;
      if (s === z && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = z, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = He;
      var f = De(u.lanes, u.childLanes);
      td(e, f), e === hr && (hr = null, Lt = null, pn = z), ((u.subtreeFlags & Lr) !== oe || (u.flags & Lr) !== oe) && (Ko || (Ko = !0, LS = a, BS(ha, function() {
        return Al(), null;
      })));
      var p = (u.subtreeFlags & (tu | Wn | Cn | Lr)) !== oe, v = (u.flags & (tu | Wn | Cn | Lr)) !== oe;
      if (p || v) {
        var m = Hn.transition;
        Hn.transition = null;
        var y = Ur();
        Yt(En);
        var R = Fe;
        Fe |= wa, wS.current = null, bw(e, u), Z1(), Pw(e, u, s), PT(e.containerInfo), e.current = u, xv(s), Yw(u, e, s), ru(), yv(), Fe = R, Yt(y), Hn.transition = m;
      } else
        e.current = u, Z1();
      var E = Ko;
      if (Ko ? (Ko = !1, Hu = e, sp = s) : (Ic = 0, vm = null), f = e.pendingLanes, f === z && (Gc = null), E || iE(e.current, !1), Va(u.stateNode, i), ln && e.memoizedUpdaters.clear(), oD(), Yr(e, yt()), t !== null)
        for (var b = e.onRecoverableError, _ = 0; _ < t.length; _++) {
          var O = t[_], X = O.stack, se = O.digest;
          b(O.value, {
            componentStack: X,
            digest: se
          });
        }
      if (dm) {
        dm = !1;
        var ae = _S;
        throw _S = null, ae;
      }
      return Zn(sp, ve) && e.tag !== ku && Al(), f = e.pendingLanes, Zn(f, ve) ? (Fx(), e === OS ? cp++ : (cp = 0, OS = e)) : cp = 0, bu(), $f(), null;
    }
    function Al() {
      if (Hu !== null) {
        var e = ko(sp), t = ny(Ya, e), a = Hn.transition, i = Ur();
        try {
          return Hn.transition = null, Yt(t), LD();
        } finally {
          Yt(i), Hn.transition = a;
        }
      }
      return !1;
    }
    function MD(e) {
      MS.push(e), Ko || (Ko = !0, BS(ha, function() {
        return Al(), null;
      }));
    }
    function LD() {
      if (Hu === null)
        return !1;
      var e = LS;
      LS = null;
      var t = Hu, a = sp;
      if (Hu = null, sp = z, (Fe & (Fn | wa)) !== dn)
        throw new Error("Cannot flush passive effects while already rendering.");
      NS = !0, pm = !1, wv(a);
      var i = Fe;
      Fe |= wa, qw(t.current), Gw(t, t.current, a, e);
      {
        var u = MS;
        MS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Ow(t, f);
        }
      }
      yo(), iE(t.current, !0), Fe = i, bu(), pm ? t === vm ? Ic++ : (Ic = 0, vm = t) : Ic = 0, NS = !1, pm = !1, Ri(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function nE(e) {
      return Gc !== null && Gc.has(e);
    }
    function OD(e) {
      Gc === null ? Gc = /* @__PURE__ */ new Set([e]) : Gc.add(e);
    }
    function ND(e) {
      dm || (dm = !0, _S = e);
    }
    var zD = ND;
    function rE(e, t, a) {
      var i = Wo(a, t), u = eC(e, i, ve), s = Mu(e, u, ve), f = mr();
      s !== null && (ml(s, ve, f), Yr(s, f));
    }
    function dt(e, t, a) {
      if (ww(a), vp(!1), e.tag === ie) {
        rE(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ie) {
          rE(i, e, a);
          return;
        } else if (i.tag === de) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !nE(s)) {
            var f = Wo(a, e), p = aS(i, f, ve), v = Mu(i, p, ve), m = mr();
            v !== null && (ml(v, ve, m), Yr(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function UD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = mr();
      ed(e, a), $D(e), hr === e && hl(pn, a) && (vn === ap || vn === sm && tc(pn) && yt() - bS < YC ? Zo(e, z) : fm = De(fm, a)), Yr(e, u);
    }
    function aE(e, t) {
      t === He && (t = hD(e));
      var a = mr(), i = Vr(e, t);
      i !== null && (ml(i, t, a), Yr(i, a));
    }
    function AD(e) {
      var t = e.memoizedState, a = He;
      t !== null && (a = t.retryLane), aE(e, a);
    }
    function HD(e, t) {
      var a = He, i;
      switch (e.tag) {
        case Ue:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case it:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), aE(e, a);
    }
    function FD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : fD(e / 1960) * 1960;
    }
    function jD() {
      if (cp > pD)
        throw cp = 0, OS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ic > vD && (Ic = 0, vm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function VD() {
      qa.flushLegacyContextWarning(), qa.flushPendingUnsafeLifecycleWarnings();
    }
    function iE(e, t) {
      Ke(e), Sm(e, In, iD), t && Sm(e, il, lD), Sm(e, In, rD), t && Sm(e, il, aD), Vt();
    }
    function Sm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== oe ? i = i.child : ((i.flags & t) !== oe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Cm = null;
    function lE(e) {
      {
        if ((Fe & Fn) !== dn || !(e.mode & ke))
          return;
        var t = e.tag;
        if (t !== rn && t !== ie && t !== de && t !== xe && t !== ze && t !== mt && t !== be)
          return;
        var a = Re(e) || "ReactComponent";
        if (Cm !== null) {
          if (Cm.has(a))
            return;
          Cm.add(a);
        } else
          Cm = /* @__PURE__ */ new Set([a]);
        var i = zt;
        try {
          Ke(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ke(e) : Vt();
        }
      }
    }
    var FS;
    {
      var BD = null;
      FS = function(e, t, a) {
        var i = vE(BD, t);
        try {
          return SC(e, t, a);
        } catch (s) {
          if (ex() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (wh(), k1(), wC(e, t), vE(t, i), t.mode & pe && Zg(t), al(null, SC, null, e, t, a), Xm()) {
            var u = Nf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var uE = !1, jS;
    jS = /* @__PURE__ */ new Set();
    function PD(e) {
      if (wr && !Ux())
        switch (e.tag) {
          case xe:
          case ze:
          case be: {
            var t = Lt && Re(Lt) || "Unknown", a = t;
            if (!jS.has(a)) {
              jS.add(a);
              var i = Re(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case de: {
            uE || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), uE = !0);
            break;
          }
        }
    }
    function pp(e, t) {
      if (ln) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          nd(e, i, t);
        });
      }
    }
    var VS = {};
    function BS(e, t) {
      {
        var a = ai.current;
        return a !== null ? (a.push(t), VS) : _s(e, t);
      }
    }
    function oE(e) {
      if (e !== VS)
        return mv(e);
    }
    function sE() {
      return ai.current !== null;
    }
    function YD(e) {
      {
        if (e.mode & ke) {
          if (!VC())
            return;
        } else if (!cD() || Fe !== dn || e.tag !== xe && e.tag !== ze && e.tag !== be)
          return;
        if (ai.current === null) {
          var t = zt;
          try {
            Ke(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Re(e));
          } finally {
            t ? Ke(e) : Vt();
          }
        }
      }
    }
    function $D(e) {
      e.tag !== ku && VC() && ai.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function vp(e) {
      GC = e;
    }
    var Da = null, Wc = null, QD = function(e) {
      Da = e;
    };
    function Xc(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        return t === void 0 ? e : t.current;
      }
    }
    function PS(e) {
      return Xc(e);
    }
    function YS(e) {
      {
        if (Da === null)
          return e;
        var t = Da(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Xc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Bl,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function cE(e, t) {
      {
        if (Da === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case de: {
            typeof i == "function" && (u = !0);
            break;
          }
          case xe: {
            (typeof i == "function" || s === _n) && (u = !0);
            break;
          }
          case ze: {
            (s === Bl || s === _n) && (u = !0);
            break;
          }
          case mt:
          case be: {
            (s === Pl || s === _n) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Da(a);
          if (f !== void 0 && f === Da(i))
            return !0;
        }
        return !1;
      }
    }
    function fE(e) {
      {
        if (Da === null || typeof WeakSet != "function")
          return;
        Wc === null && (Wc = /* @__PURE__ */ new WeakSet()), Wc.add(e);
      }
    }
    var GD = function(e, t) {
      {
        if (Da === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Al(), Ul(function() {
          $S(e.current, i, a);
        });
      }
    }, ID = function(e, t) {
      {
        if (e.context !== la)
          return;
        Al(), Ul(function() {
          hp(t, e, null, null);
        });
      }
    };
    function $S(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case xe:
          case be:
          case de:
            v = p;
            break;
          case ze:
            v = p.render;
            break;
        }
        if (Da === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = Da(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === de ? y = !0 : m = !0));
        }
        if (Wc !== null && (Wc.has(e) || i !== null && Wc.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var E = Vr(e, ve);
          E !== null && hn(E, e, ve, at);
        }
        u !== null && !y && $S(u, t, a), s !== null && $S(s, t, a);
      }
    }
    var WD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return QS(e.current, i, a), a;
      }
    };
    function QS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case xe:
          case be:
          case de:
            p = f;
            break;
          case ze:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? XD(e, a) : i !== null && QS(i, t, a), u !== null && QS(u, t, a);
      }
    }
    function XD(e, t) {
      {
        var a = qD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case he:
              t.add(i.stateNode.containerInfo);
              return;
            case ie:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function qD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var GS;
    {
      GS = !1;
      try {
        var dE = Object.preventExtensions({});
      } catch {
        GS = !0;
      }
    }
    function KD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = oe, this.subtreeFlags = oe, this.deletions = null, this.lanes = z, this.childLanes = z, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ua = function(e, t, a, i) {
      return new KD(e, t, a, i);
    };
    function IS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ZD(e) {
      return typeof e == "function" && !IS(e) && e.defaultProps === void 0;
    }
    function JD(e) {
      if (typeof e == "function")
        return IS(e) ? de : xe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Bl)
          return ze;
        if (t === Pl)
          return mt;
      }
      return rn;
    }
    function es(e, t) {
      var a = e.alternate;
      a === null ? (a = ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = oe, a.subtreeFlags = oe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & an, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case rn:
        case xe:
        case be:
          a.type = Xc(e.type);
          break;
        case de:
          a.type = PS(e.type);
          break;
        case ze:
          a.type = YS(e.type);
          break;
      }
      return a;
    }
    function ek(e, t) {
      e.flags &= an | ot;
      var a = e.alternate;
      if (a === null)
        e.childLanes = z, e.lanes = t, e.child = null, e.subtreeFlags = oe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = oe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function tk(e, t, a) {
      var i;
      return e === yh ? (i = ke, t === !0 && (i |= gt, i |= Nr)) : i = fe, ln && (i |= pe), ua(ie, null, null, i);
    }
    function WS(e, t, a, i, u, s) {
      var f = rn, p = e;
      if (typeof e == "function")
        IS(e) ? (f = de, p = PS(p)) : p = Xc(p);
      else if (typeof e == "string")
        f = le;
      else
        e:
          switch (e) {
            case Ma:
              return Vu(a.children, u, s, t);
            case Vl:
              f = lt, u |= gt, (u & ke) !== fe && (u |= Nr);
              break;
            case $u:
              return nk(a, u, s, t);
            case da:
              return rk(a, u, s, t);
            case Qu:
              return ak(a, u, s, t);
            case ef:
              return pE(a, u, s, t);
            case wp:
            case Rp:
            case km:
            case bm:
            case xp:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Zc:
                    f = mn;
                    break e;
                  case Jc:
                    f = Gr;
                    break e;
                  case Bl:
                    f = ze, p = YS(p);
                    break e;
                  case Pl:
                    f = mt;
                    break e;
                  case _n:
                    f = kn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Re(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = ua(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function XS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = WS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Vu(e, t, a, i) {
      var u = ua(et, e, i, t);
      return u.lanes = a, u;
    }
    function nk(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ua(ut, e, i, t | pe);
      return u.elementType = $u, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function rk(e, t, a, i) {
      var u = ua(Ue, e, i, t);
      return u.elementType = da, u.lanes = a, u;
    }
    function ak(e, t, a, i) {
      var u = ua(it, e, i, t);
      return u.elementType = Qu, u.lanes = a, u;
    }
    function pE(e, t, a, i) {
      var u = ua(Ae, e, i, t);
      u.elementType = ef, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function qS(e, t, a) {
      var i = ua(_e, e, null, t);
      return i.lanes = a, i;
    }
    function ik() {
      var e = ua(le, null, null, fe);
      return e.elementType = "DELETED", e;
    }
    function lk(e) {
      var t = ua(Ot, null, null, fe);
      return t.stateNode = e, t;
    }
    function KS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ua(he, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function vE(e, t) {
      return e === null && (e = ua(rn, null, null, fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function uk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Oy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = He, this.eventTimes = rc(z), this.expirationTimes = rc(at), this.pendingLanes = z, this.suspendedLanes = z, this.pingedLanes = z, this.expiredLanes = z, this.mutableReadLanes = z, this.finishedLanes = z, this.entangledLanes = z, this.entanglements = rc(z), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < ct; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case yh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ku:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function hE(e, t, a, i, u, s, f, p, v, m) {
      var y = new uk(e, t, a, p, v), R = tk(t, s);
      y.current = R, R.stateNode = y;
      {
        var E = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        R.memoizedState = E;
      }
      return ig(R), y;
    }
    var ZS = "18.2.0";
    function ok(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Fl(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Kr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var JS, e0;
    JS = !1, e0 = {};
    function mE(e) {
      if (!e)
        return la;
      var t = br(e), a = QR(t);
      if (t.tag === de) {
        var i = t.type;
        if (Ai(i))
          return P0(t, i, a);
      }
      return a;
    }
    function sk(e, t) {
      {
        var a = br(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Or(a);
        if (u === null)
          return null;
        if (u.mode & gt) {
          var s = Re(a) || "Component";
          if (!e0[s]) {
            e0[s] = !0;
            var f = zt;
            try {
              Ke(u), a.mode & gt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ke(f) : Vt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function yE(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return hE(e, t, v, m, a, i, u, s, f);
    }
    function gE(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, R = hE(a, i, y, e, u, s, f, p, v);
      R.context = mE(null);
      var E = R.current, b = mr(), _ = Fu(E), O = Ll(b, _);
      return O.callback = t ?? null, Mu(E, O, _), mD(R, _, b), R;
    }
    function hp(e, t, a, i) {
      gv(t, e);
      var u = t.current, s = mr(), f = Fu(u);
      ul(f);
      var p = mE(a);
      t.context === null ? t.context = p : t.pendingContext = p, wr && zt !== null && !JS && (JS = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Re(zt) || "Unknown"));
      var v = Ll(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Mu(u, v, f);
      return m !== null && (hn(m, u, f, s), Mh(m, u, f)), f;
    }
    function Em(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function ck(e) {
      switch (e.tag) {
        case ie: {
          var t = e.stateNode;
          if ($t(t)) {
            var a = Zm(t);
            CD(t, a);
          }
          break;
        }
        case Ue: {
          Ul(function() {
            var u = Vr(e, ve);
            if (u !== null) {
              var s = mr();
              hn(u, e, ve, s);
            }
          });
          var i = ve;
          t0(e, i);
          break;
        }
      }
    }
    function SE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Mv(a.retryLane, t));
    }
    function t0(e, t) {
      SE(e, t);
      var a = e.alternate;
      a && SE(a, t);
    }
    function fk(e) {
      if (e.tag === Ue) {
        var t = iu, a = Vr(e, t);
        if (a !== null) {
          var i = mr();
          hn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function dk(e) {
      if (e.tag === Ue) {
        var t = Fu(e), a = Vr(e, t);
        if (a !== null) {
          var i = mr();
          hn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function CE(e) {
      var t = hv(e);
      return t === null ? null : t.stateNode;
    }
    var EE = function(e) {
      return null;
    };
    function pk(e) {
      return EE(e);
    }
    var TE = function(e) {
      return !1;
    };
    function vk(e) {
      return TE(e);
    }
    var RE = null, xE = null, wE = null, DE = null, kE = null, bE = null, _E = null, ME = null, LE = null;
    {
      var OE = function(e, t, a) {
        var i = t[a], u = Wt(e) ? e.slice() : Le({}, e);
        return a + 1 === t.length ? (Wt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = OE(e[i], t, a + 1), u);
      }, NE = function(e, t) {
        return OE(e, t, 0);
      }, zE = function(e, t, a, i) {
        var u = t[i], s = Wt(e) ? e.slice() : Le({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Wt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = zE(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, UE = function(e, t, a) {
        if (t.length !== a.length) {
          Ye("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ye("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return zE(e, t, a, 0);
      }, AE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Wt(e) ? e.slice() : Le({}, e);
        return s[u] = AE(e[u], t, a + 1, i), s;
      }, HE = function(e, t, a) {
        return AE(e, t, 0, a);
      }, n0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      RE = function(e, t, a, i) {
        var u = n0(e, t);
        if (u !== null) {
          var s = HE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Le({}, e.memoizedProps);
          var f = Vr(e, ve);
          f !== null && hn(f, e, ve, at);
        }
      }, xE = function(e, t, a) {
        var i = n0(e, t);
        if (i !== null) {
          var u = NE(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Le({}, e.memoizedProps);
          var s = Vr(e, ve);
          s !== null && hn(s, e, ve, at);
        }
      }, wE = function(e, t, a, i) {
        var u = n0(e, t);
        if (u !== null) {
          var s = UE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Le({}, e.memoizedProps);
          var f = Vr(e, ve);
          f !== null && hn(f, e, ve, at);
        }
      }, DE = function(e, t, a) {
        e.pendingProps = HE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Vr(e, ve);
        i !== null && hn(i, e, ve, at);
      }, kE = function(e, t) {
        e.pendingProps = NE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Vr(e, ve);
        a !== null && hn(a, e, ve, at);
      }, bE = function(e, t, a) {
        e.pendingProps = UE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Vr(e, ve);
        i !== null && hn(i, e, ve, at);
      }, _E = function(e) {
        var t = Vr(e, ve);
        t !== null && hn(t, e, ve, at);
      }, ME = function(e) {
        EE = e;
      }, LE = function(e) {
        TE = e;
      };
    }
    function hk(e) {
      var t = Or(e);
      return t === null ? null : t.stateNode;
    }
    function mk(e) {
      return null;
    }
    function yk() {
      return zt;
    }
    function gk(e) {
      var t = e.findFiberByHostInstance, a = L.ReactCurrentDispatcher;
      return Pf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: RE,
        overrideHookStateDeletePath: xE,
        overrideHookStateRenamePath: wE,
        overrideProps: DE,
        overridePropsDeletePath: kE,
        overridePropsRenamePath: bE,
        setErrorHandler: ME,
        setSuspenseHandler: LE,
        scheduleUpdate: _E,
        currentDispatcherRef: a,
        findHostInstanceByFiber: hk,
        findFiberByHostInstance: t || mk,
        // React Refresh
        findHostInstancesForRefresh: WD,
        scheduleRefresh: GD,
        scheduleRoot: ID,
        setRefreshHandler: QD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: yk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ZS
      });
    }
    var FE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function r0(e) {
      this._internalRoot = e;
    }
    Tm.prototype.render = r0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Rm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ut) {
          var i = CE(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      hp(e, t, null, null);
    }, Tm.prototype.unmount = r0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        qC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ul(function() {
          hp(null, e, null, null);
        }), H0(t);
      }
    };
    function Sk(e, t) {
      if (!Rm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      jE(e);
      var a = !1, i = !1, u = "", s = FE;
      t != null && (t.hydrate ? Ye("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === jl && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = yE(e, yh, null, a, i, u, s);
      ch(f.current, e);
      var p = e.nodeType === Ut ? e.parentNode : e;
      return Rd(p), new r0(f);
    }
    function Tm(e) {
      this._internalRoot = e;
    }
    function Ck(e) {
      e && Fv(e);
    }
    Tm.prototype.unstable_scheduleHydration = Ck;
    function Ek(e, t, a) {
      if (!Rm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      jE(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = FE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = gE(t, null, e, yh, i, s, f, p, v);
      if (ch(m.current, e), Rd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          _x(m, R);
        }
      return new Tm(m);
    }
    function Rm(e) {
      return !!(e && (e.nodeType === $n || e.nodeType === ta || e.nodeType === Zi || !qe));
    }
    function mp(e) {
      return !!(e && (e.nodeType === $n || e.nodeType === ta || e.nodeType === Zi || e.nodeType === Ut && e.nodeValue === " react-mount-point-unstable "));
    }
    function jE(e) {
      e.nodeType === $n && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), zd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Tk = L.ReactCurrentOwner, VE;
    VE = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ut) {
        var t = CE(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = a0(e), u = !!(i && wu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === $n && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function a0(e) {
      return e ? e.nodeType === ta ? e.documentElement : e.firstChild : null;
    }
    function BE() {
    }
    function Rk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var E = Em(f);
            s.call(E);
          };
        }
        var f = gE(
          t,
          i,
          e,
          ku,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          BE
        );
        e._reactRootContainer = f, ch(f.current, e);
        var p = e.nodeType === Ut ? e.parentNode : e;
        return Rd(p), Ul(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var E = Em(y);
            m.call(E);
          };
        }
        var y = yE(
          e,
          ku,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          BE
        );
        e._reactRootContainer = y, ch(y.current, e);
        var R = e.nodeType === Ut ? e.parentNode : e;
        return Rd(R), Ul(function() {
          hp(t, y, a, i);
        }), y;
      }
    }
    function xk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function xm(e, t, a, i, u) {
      VE(a), xk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Rk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Em(f);
            p.call(v);
          };
        }
        hp(t, f, e, u);
      }
      return Em(f);
    }
    function wk(e) {
      {
        var t = Tk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === $n ? e : sk(e, "findDOMNode");
    }
    function Dk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !mp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = zd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return xm(null, e, t, !0, a);
    }
    function kk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !mp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = zd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return xm(null, e, t, !1, a);
    }
    function bk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !mp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !vo(e))
        throw new Error("parentComponent must be a valid React Component");
      return xm(e, t, a, !1, i);
    }
    function _k(e) {
      if (!mp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = zd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = a0(e), i = a && !wu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ul(function() {
          xm(null, null, e, !1, function() {
            e._reactRootContainer = null, H0(e);
          });
        }), !0;
      } else {
        {
          var u = a0(e), s = !!(u && wu(u)), f = e.nodeType === $n && mp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Z(ck), Ov(fk), _o(dk), id(Ur), zv(Do), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), dv(OT), xs(US, ED, Ul);
    function Mk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Rm(t))
        throw new Error("Target container is not a DOM element.");
      return ok(e, t, null, a);
    }
    function Lk(e, t, a, i) {
      return bk(e, t, a, i);
    }
    var i0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [wu, Dc, fh, Rs, co, US]
    };
    function Ok(e, t) {
      return i0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Sk(e, t);
    }
    function Nk(e, t, a) {
      return i0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ek(e, t, a);
    }
    function zk(e) {
      return qC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ul(e);
    }
    var Uk = gk({
      findFiberByHostInstance: jo,
      bundleType: 1,
      version: ZS,
      rendererPackageName: "react-dom"
    });
    if (!Uk && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var PE = window.location.protocol;
      /^(https?|file):$/.test(PE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (PE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i0, Qr.createPortal = Mk, Qr.createRoot = Ok, Qr.findDOMNode = wk, Qr.flushSync = zk, Qr.hydrate = Dk, Qr.hydrateRoot = Nk, Qr.render = kk, Qr.unmountComponentAtNode = _k, Qr.unstable_batchedUpdates = US, Qr.unstable_renderSubtreeIntoContainer = Lk, Qr.version = ZS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qr;
}
function qE() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qE);
    } catch (B) {
      console.error(B);
    }
  }
}
process.env.NODE_ENV === "production" ? (qE(), o0.exports = Vk()) : o0.exports = Bk();
var Pk = o0.exports, gp = Pk;
if (process.env.NODE_ENV === "production")
  Sp.createRoot = gp.createRoot, Sp.hydrateRoot = gp.hydrateRoot;
else {
  var Dm = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Sp.createRoot = function(B, Te) {
    Dm.usingClientEntryPoint = !0;
    try {
      return gp.createRoot(B, Te);
    } finally {
      Dm.usingClientEntryPoint = !1;
    }
  }, Sp.hydrateRoot = function(B, Te, L) {
    Dm.usingClientEntryPoint = !0;
    try {
      return gp.hydrateRoot(B, Te, L);
    } finally {
      Dm.usingClientEntryPoint = !1;
    }
  };
}
var Qi = /* @__PURE__ */ ((B) => (B[B.sm = 0] = "sm", B[B.md = 1] = "md", B[B.lg = 2] = "lg", B[B.xl = 3] = "xl", B[B.xxl = 4] = "xxl", B[B.xxxl = 5] = "xxxl", B))(Qi || {});
const WE = (...B) => B.filter(Boolean).join(" "), KE = ({
  size: B,
  firstName: Te,
  lastName: L,
  imageUrl: nn,
  hasPadding: It
}) => {
  const Ye = () => `${Te == null ? void 0 : Te.charAt(0)}${L == null ? void 0 : L.charAt(0)} `.toUpperCase();
  let g, ht;
  switch (B) {
    case Qi.sm:
      g = "w-8 h-8 text-sm", ht = "text-sm";
      break;
    case Qi.md:
      g = "w-10 h-10 text-lg", ht = "";
      break;
    case Qi.lg:
      g = "w-12 h-12", ht = "text-lg";
      break;
    case Qi.xl:
      g = "w-16 h-16 shadow-md shadow", ht = "text-xl";
      break;
    case Qi.xxl:
      g = "w-24 h-24", ht = "text-4xl";
      break;
    case Qi.xxxl:
      g = "w-28 h-28", ht = "text-5xl";
      break;
    default:
      g = "w-10 h-10", ht = "py-1 text-xs";
  }
  return /* @__PURE__ */ ka.createElement(ka.Fragment, null, nn !== void 0 ? /* @__PURE__ */ ka.createElement(
    "img",
    {
      className: WE(
        g,
        It ? "p-1 shadow-sm" : "",
        "max-w-none ring-2 ring-white rounded-full object-cover"
      ),
      src: nn,
      alt: ""
    }
  ) : /* @__PURE__ */ ka.createElement(
    "div",
    {
      className: WE(
        g,
        ht,
        "items-center  justify-center flex text-center rounded-full ring-1 ring-white text-gray-25 bg-gradient-to-r from-gray-600 to-gray-900"
      )
    },
    /* @__PURE__ */ ka.createElement("span", { className: "items-center my-auto text-white" }, Ye())
  ));
};
KE.defaultProps = {
  size: Qi.md,
  hasPadding: !1
};
Qi.md;
function Yk() {
  return /* @__PURE__ */ ka.createElement("div", { className: "p-10" }, /* @__PURE__ */ ka.createElement(KE, { firstName: "Edem", lastName: "Ekeng", size: Qi.xxl }));
}
const $k = (B) => {
  B && B instanceof Function && import("./web-vitals-f3c89987.mjs").then(({ getCLS: Te, getFID: L, getFCP: nn, getLCP: It, getTTFB: Ye }) => {
    Te(B), L(B), nn(B), It(B), Ye(B);
  });
}, Qk = Sp.createRoot(
  document.getElementById("root")
);
Qk.render(
  /* @__PURE__ */ ka.createElement(ka.StrictMode, null, /* @__PURE__ */ ka.createElement(Yk, null))
);
$k();
