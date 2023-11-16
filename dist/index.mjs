import Op from "react";
var f0 = { exports: {} }, Dp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function $b() {
  if (W1)
    return Dp;
  W1 = 1;
  var P = Op, Re = Symbol.for("react.element"), M = Symbol.for("react.fragment"), Ot = Object.prototype.hasOwnProperty, Ut = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(nt, se, ce) {
    var rt, te = {}, de = null, le = null;
    ce !== void 0 && (de = "" + ce), se.key !== void 0 && (de = "" + se.key), se.ref !== void 0 && (le = se.ref);
    for (rt in se)
      Ot.call(se, rt) && !$e.hasOwnProperty(rt) && (te[rt] = se[rt]);
    if (nt && nt.defaultProps)
      for (rt in se = nt.defaultProps, se)
        te[rt] === void 0 && (te[rt] = se[rt]);
    return { $$typeof: Re, type: nt, key: de, ref: le, props: te, _owner: Ut.current };
  }
  return Dp.Fragment = M, Dp.jsx = g, Dp.jsxs = g, Dp;
}
var bp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G1;
function Qb() {
  return G1 || (G1 = 1, process.env.NODE_ENV !== "production" && function() {
    var P = Op, Re = Symbol.for("react.element"), M = Symbol.for("react.portal"), Ot = Symbol.for("react.fragment"), Ut = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), nt = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), rt = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), Ue = Symbol.iterator, ot = "@@iterator";
    function ht(E) {
      if (E === null || typeof E != "object")
        return null;
      var j = Ue && E[Ue] || E[ot];
      return typeof j == "function" ? j : null;
    }
    var cn = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ke(E) {
      {
        for (var j = arguments.length, G = new Array(j > 1 ? j - 1 : 0), ge = 1; ge < j; ge++)
          G[ge - 1] = arguments[ge];
        je("error", E, G);
      }
    }
    function je(E, j, G) {
      {
        var ge = cn.ReactDebugCurrentFrame, Ne = ge.getStackAddendum();
        Ne !== "" && (j += "%s", G = G.concat([Ne]));
        var Xe = G.map(function(ze) {
          return String(ze);
        });
        Xe.unshift("Warning: " + j), Function.prototype.apply.call(console[E], console, Xe);
      }
    }
    var mt = !1, Ve = !1, Rt = !1, Ae = !1, Rn = !1, Fn;
    Fn = Symbol.for("react.module.reference");
    function Bt(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === Ot || E === $e || Rn || E === Ut || E === ce || E === rt || Ae || E === le || mt || Ve || Rt || typeof E == "object" && E !== null && (E.$$typeof === de || E.$$typeof === te || E.$$typeof === g || E.$$typeof === nt || E.$$typeof === se || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === Fn || E.getModuleId !== void 0));
    }
    function ft(E, j, G) {
      var ge = E.displayName;
      if (ge)
        return ge;
      var Ne = j.displayName || j.name || "";
      return Ne !== "" ? G + "(" + Ne + ")" : G;
    }
    function xn(E) {
      return E.displayName || "Context";
    }
    function ke(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && Ke("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case Ot:
          return "Fragment";
        case M:
          return "Portal";
        case $e:
          return "Profiler";
        case Ut:
          return "StrictMode";
        case ce:
          return "Suspense";
        case rt:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case nt:
            var j = E;
            return xn(j) + ".Consumer";
          case g:
            var G = E;
            return xn(G._context) + ".Provider";
          case se:
            return ft(E, E.render, "ForwardRef");
          case te:
            var ge = E.displayName || null;
            return ge !== null ? ge : ke(E.type) || "Memo";
          case de: {
            var Ne = E, Xe = Ne._payload, ze = Ne._init;
            try {
              return ke(ze(Xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qe = Object.assign, fn = 0, xt, Kn, $, ye, J, Je, at;
    function wn() {
    }
    wn.__reactDisabledLog = !0;
    function Jn() {
      {
        if (fn === 0) {
          xt = console.log, Kn = console.info, $ = console.warn, ye = console.error, J = console.group, Je = console.groupCollapsed, at = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: wn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        fn++;
      }
    }
    function La() {
      {
        if (fn--, fn === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, E, {
              value: xt
            }),
            info: Qe({}, E, {
              value: Kn
            }),
            warn: Qe({}, E, {
              value: $
            }),
            error: Qe({}, E, {
              value: ye
            }),
            group: Qe({}, E, {
              value: J
            }),
            groupCollapsed: Qe({}, E, {
              value: Je
            }),
            groupEnd: Qe({}, E, {
              value: at
            })
          });
        }
        fn < 0 && Ke("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tn = cn.ReactCurrentDispatcher, $r;
    function jn(E, j, G) {
      {
        if ($r === void 0)
          try {
            throw Error();
          } catch (Ne) {
            var ge = Ne.stack.trim().match(/\n( *(at )?)/);
            $r = ge && ge[1] || "";
          }
        return `
` + $r + E;
      }
    }
    var cr = !1, Ma;
    {
      var fr = typeof WeakMap == "function" ? WeakMap : Map;
      Ma = new fr();
    }
    function Qr(E, j) {
      if (!E || cr)
        return "";
      {
        var G = Ma.get(E);
        if (G !== void 0)
          return G;
      }
      var ge;
      cr = !0;
      var Ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Xe;
      Xe = tn.current, tn.current = null, Jn();
      try {
        if (j) {
          var ze = function() {
            throw Error();
          };
          if (Object.defineProperty(ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ze, []);
            } catch (Ze) {
              ge = Ze;
            }
            Reflect.construct(E, [], ze);
          } else {
            try {
              ze.call();
            } catch (Ze) {
              ge = Ze;
            }
            E.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            ge = Ze;
          }
          E();
        }
      } catch (Ze) {
        if (Ze && ge && typeof Ze.stack == "string") {
          for (var Ee = Ze.stack.split(`
`), vn = ge.stack.split(`
`), Lt = Ee.length - 1, Mt = vn.length - 1; Lt >= 1 && Mt >= 0 && Ee[Lt] !== vn[Mt]; )
            Mt--;
          for (; Lt >= 1 && Mt >= 0; Lt--, Mt--)
            if (Ee[Lt] !== vn[Mt]) {
              if (Lt !== 1 || Mt !== 1)
                do
                  if (Lt--, Mt--, Mt < 0 || Ee[Lt] !== vn[Mt]) {
                    var Zn = `
` + Ee[Lt].replace(" at new ", " at ");
                    return E.displayName && Zn.includes("<anonymous>") && (Zn = Zn.replace("<anonymous>", E.displayName)), typeof E == "function" && Ma.set(E, Zn), Zn;
                  }
                while (Lt >= 1 && Mt >= 0);
              break;
            }
        }
      } finally {
        cr = !1, tn.current = Xe, La(), Error.prepareStackTrace = Ne;
      }
      var ki = E ? E.displayName || E.name : "", ms = ki ? jn(ki) : "";
      return typeof E == "function" && Ma.set(E, ms), ms;
    }
    function dn(E, j, G) {
      return Qr(E, !1);
    }
    function Vn(E) {
      var j = E.prototype;
      return !!(j && j.isReactComponent);
    }
    function Dn(E, j, G) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Qr(E, Vn(E));
      if (typeof E == "string")
        return jn(E);
      switch (E) {
        case ce:
          return jn("Suspense");
        case rt:
          return jn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case se:
            return dn(E.render);
          case te:
            return Dn(E.type, j, G);
          case de: {
            var ge = E, Ne = ge._payload, Xe = ge._init;
            try {
              return Dn(Xe(Ne), j, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Bn = Object.prototype.hasOwnProperty, Pn = {}, Ir = cn.ReactDebugCurrentFrame;
    function ha(E) {
      if (E) {
        var j = E._owner, G = Dn(E.type, E._source, j ? j.type : null);
        Ir.setExtraStackFrame(G);
      } else
        Ir.setExtraStackFrame(null);
    }
    function qa(E, j, G, ge, Ne) {
      {
        var Xe = Function.call.bind(Bn);
        for (var ze in E)
          if (Xe(E, ze)) {
            var Ee = void 0;
            try {
              if (typeof E[ze] != "function") {
                var vn = Error((ge || "React class") + ": " + G + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw vn.name = "Invariant Violation", vn;
              }
              Ee = E[ze](j, ze, ge, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Lt) {
              Ee = Lt;
            }
            Ee && !(Ee instanceof Error) && (ha(Ne), Ke("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", G, ze, typeof Ee), ha(null)), Ee instanceof Error && !(Ee.message in Pn) && (Pn[Ee.message] = !0, ha(Ne), Ke("Failed %s type: %s", G, Ee.message), ha(null));
          }
      }
    }
    var Na = Array.isArray;
    function ma(E) {
      return Na(E);
    }
    function br(E) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, G = j && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return G;
      }
    }
    function za(E) {
      try {
        return kr(E), !1;
      } catch {
        return !0;
      }
    }
    function kr(E) {
      return "" + E;
    }
    function ya(E) {
      if (za(E))
        return Ke("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(E)), kr(E);
    }
    var Xt = cn.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wi, ga, W;
    W = {};
    function ve(E) {
      if (Bn.call(E, "ref")) {
        var j = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function He(E) {
      if (Bn.call(E, "key")) {
        var j = Object.getOwnPropertyDescriptor(E, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function st(E, j) {
      if (typeof E.ref == "string" && Xt.current && j && Xt.current.stateNode !== j) {
        var G = ke(Xt.current.type);
        W[G] || (Ke('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ke(Xt.current.type), E.ref), W[G] = !0);
      }
    }
    function At(E, j) {
      {
        var G = function() {
          wi || (wi = !0, Ke("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function pn(E, j) {
      {
        var G = function() {
          ga || (ga = !0, Ke("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var Qt = function(E, j, G, ge, Ne, Xe, ze) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Re,
        // Built-in properties that belong on the element
        type: E,
        key: j,
        ref: G,
        props: ze,
        // Record the component responsible for creating this element.
        _owner: Xe
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function dr(E, j, G, ge, Ne) {
      {
        var Xe, ze = {}, Ee = null, vn = null;
        G !== void 0 && (ya(G), Ee = "" + G), He(j) && (ya(j.key), Ee = "" + j.key), ve(j) && (vn = j.ref, st(j, Ne));
        for (Xe in j)
          Bn.call(j, Xe) && !_r.hasOwnProperty(Xe) && (ze[Xe] = j[Xe]);
        if (E && E.defaultProps) {
          var Lt = E.defaultProps;
          for (Xe in Lt)
            ze[Xe] === void 0 && (ze[Xe] = Lt[Xe]);
        }
        if (Ee || vn) {
          var Mt = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Ee && At(ze, Mt), vn && pn(ze, Mt);
        }
        return Qt(E, Ee, vn, Ne, ge, Xt.current, ze);
      }
    }
    var Ct = cn.ReactCurrentOwner, Or = cn.ReactDebugCurrentFrame;
    function yt(E) {
      if (E) {
        var j = E._owner, G = Dn(E.type, E._source, j ? j.type : null);
        Or.setExtraStackFrame(G);
      } else
        Or.setExtraStackFrame(null);
    }
    var Tt;
    Tt = !1;
    function ru(E) {
      return typeof E == "object" && E !== null && E.$$typeof === Re;
    }
    function cl() {
      {
        if (Ct.current) {
          var E = ke(Ct.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function au(E) {
      {
        if (E !== void 0) {
          var j = E.fileName.replace(/^.*[\\\/]/, ""), G = E.lineNumber;
          return `

Check your code at ` + j + ":" + G + ".";
        }
        return "";
      }
    }
    var io = {};
    function hs(E) {
      {
        var j = cl();
        if (!j) {
          var G = typeof E == "string" ? E : E.displayName || E.name;
          G && (j = `

Check the top-level render call using <` + G + ">.");
        }
        return j;
      }
    }
    function fl(E, j) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var G = hs(j);
        if (io[G])
          return;
        io[G] = !0;
        var ge = "";
        E && E._owner && E._owner !== Ct.current && (ge = " It was passed a child from " + ke(E._owner.type) + "."), yt(E), Ke('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ge), yt(null);
      }
    }
    function iu(E, j) {
      {
        if (typeof E != "object")
          return;
        if (ma(E))
          for (var G = 0; G < E.length; G++) {
            var ge = E[G];
            ru(ge) && fl(ge, j);
          }
        else if (ru(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Ne = ht(E);
          if (typeof Ne == "function" && Ne !== E.entries)
            for (var Xe = Ne.call(E), ze; !(ze = Xe.next()).done; )
              ru(ze.value) && fl(ze.value, j);
        }
      }
    }
    function dl(E) {
      {
        var j = E.type;
        if (j == null || typeof j == "string")
          return;
        var G;
        if (typeof j == "function")
          G = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === se || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === te))
          G = j.propTypes;
        else
          return;
        if (G) {
          var ge = ke(j);
          qa(G, E.props, "prop", ge, E);
        } else if (j.PropTypes !== void 0 && !Tt) {
          Tt = !0;
          var Ne = ke(j);
          Ke("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ne || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && Ke("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lu(E) {
      {
        for (var j = Object.keys(E.props), G = 0; G < j.length; G++) {
          var ge = j[G];
          if (ge !== "children" && ge !== "key") {
            yt(E), Ke("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), yt(null);
            break;
          }
        }
        E.ref !== null && (yt(E), Ke("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    function Ua(E, j, G, ge, Ne, Xe) {
      {
        var ze = Bt(E);
        if (!ze) {
          var Ee = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var vn = au(Ne);
          vn ? Ee += vn : Ee += cl();
          var Lt;
          E === null ? Lt = "null" : ma(E) ? Lt = "array" : E !== void 0 && E.$$typeof === Re ? (Lt = "<" + (ke(E.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : Lt = typeof E, Ke("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Lt, Ee);
        }
        var Mt = dr(E, j, G, Ne, Xe);
        if (Mt == null)
          return Mt;
        if (ze) {
          var Zn = j.children;
          if (Zn !== void 0)
            if (ge)
              if (ma(Zn)) {
                for (var ki = 0; ki < Zn.length; ki++)
                  iu(Zn[ki], E);
                Object.freeze && Object.freeze(Zn);
              } else
                Ke("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              iu(Zn, E);
        }
        return E === Ot ? lu(Mt) : dl(Mt), Mt;
      }
    }
    function Di(E, j, G) {
      return Ua(E, j, G, !0);
    }
    function Lr(E, j, G) {
      return Ua(E, j, G, !1);
    }
    var Sa = Lr, bi = Di;
    bp.Fragment = Ot, bp.jsx = Sa, bp.jsxs = bi;
  }()), bp;
}
process.env.NODE_ENV === "production" ? f0.exports = $b() : f0.exports = Qb();
var nu = f0.exports, _p = {}, d0 = { exports: {} }, pa = {}, Om = { exports: {} }, s0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1;
function Ib() {
  return X1 || (X1 = 1, function(P) {
    function Re($, ye) {
      var J = $.length;
      $.push(ye);
      e:
        for (; 0 < J; ) {
          var Je = J - 1 >>> 1, at = $[Je];
          if (0 < Ut(at, ye))
            $[Je] = ye, $[J] = at, J = Je;
          else
            break e;
        }
    }
    function M($) {
      return $.length === 0 ? null : $[0];
    }
    function Ot($) {
      if ($.length === 0)
        return null;
      var ye = $[0], J = $.pop();
      if (J !== ye) {
        $[0] = J;
        e:
          for (var Je = 0, at = $.length, wn = at >>> 1; Je < wn; ) {
            var Jn = 2 * (Je + 1) - 1, La = $[Jn], tn = Jn + 1, $r = $[tn];
            if (0 > Ut(La, J))
              tn < at && 0 > Ut($r, La) ? ($[Je] = $r, $[tn] = J, Je = tn) : ($[Je] = La, $[Jn] = J, Je = Jn);
            else if (tn < at && 0 > Ut($r, J))
              $[Je] = $r, $[tn] = J, Je = tn;
            else
              break e;
          }
      }
      return ye;
    }
    function Ut($, ye) {
      var J = $.sortIndex - ye.sortIndex;
      return J !== 0 ? J : $.id - ye.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var $e = performance;
      P.unstable_now = function() {
        return $e.now();
      };
    } else {
      var g = Date, nt = g.now();
      P.unstable_now = function() {
        return g.now() - nt;
      };
    }
    var se = [], ce = [], rt = 1, te = null, de = 3, le = !1, Ue = !1, ot = !1, ht = typeof setTimeout == "function" ? setTimeout : null, cn = typeof clearTimeout == "function" ? clearTimeout : null, Ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function je($) {
      for (var ye = M(ce); ye !== null; ) {
        if (ye.callback === null)
          Ot(ce);
        else if (ye.startTime <= $)
          Ot(ce), ye.sortIndex = ye.expirationTime, Re(se, ye);
        else
          break;
        ye = M(ce);
      }
    }
    function mt($) {
      if (ot = !1, je($), !Ue)
        if (M(se) !== null)
          Ue = !0, xt(Ve);
        else {
          var ye = M(ce);
          ye !== null && Kn(mt, ye.startTime - $);
        }
    }
    function Ve($, ye) {
      Ue = !1, ot && (ot = !1, cn(Rn), Rn = -1), le = !0;
      var J = de;
      try {
        for (je(ye), te = M(se); te !== null && (!(te.expirationTime > ye) || $ && !ft()); ) {
          var Je = te.callback;
          if (typeof Je == "function") {
            te.callback = null, de = te.priorityLevel;
            var at = Je(te.expirationTime <= ye);
            ye = P.unstable_now(), typeof at == "function" ? te.callback = at : te === M(se) && Ot(se), je(ye);
          } else
            Ot(se);
          te = M(se);
        }
        if (te !== null)
          var wn = !0;
        else {
          var Jn = M(ce);
          Jn !== null && Kn(mt, Jn.startTime - ye), wn = !1;
        }
        return wn;
      } finally {
        te = null, de = J, le = !1;
      }
    }
    var Rt = !1, Ae = null, Rn = -1, Fn = 5, Bt = -1;
    function ft() {
      return !(P.unstable_now() - Bt < Fn);
    }
    function xn() {
      if (Ae !== null) {
        var $ = P.unstable_now();
        Bt = $;
        var ye = !0;
        try {
          ye = Ae(!0, $);
        } finally {
          ye ? ke() : (Rt = !1, Ae = null);
        }
      } else
        Rt = !1;
    }
    var ke;
    if (typeof Ke == "function")
      ke = function() {
        Ke(xn);
      };
    else if (typeof MessageChannel < "u") {
      var Qe = new MessageChannel(), fn = Qe.port2;
      Qe.port1.onmessage = xn, ke = function() {
        fn.postMessage(null);
      };
    } else
      ke = function() {
        ht(xn, 0);
      };
    function xt($) {
      Ae = $, Rt || (Rt = !0, ke());
    }
    function Kn($, ye) {
      Rn = ht(function() {
        $(P.unstable_now());
      }, ye);
    }
    P.unstable_IdlePriority = 5, P.unstable_ImmediatePriority = 1, P.unstable_LowPriority = 4, P.unstable_NormalPriority = 3, P.unstable_Profiling = null, P.unstable_UserBlockingPriority = 2, P.unstable_cancelCallback = function($) {
      $.callback = null;
    }, P.unstable_continueExecution = function() {
      Ue || le || (Ue = !0, xt(Ve));
    }, P.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Fn = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, P.unstable_getCurrentPriorityLevel = function() {
      return de;
    }, P.unstable_getFirstCallbackNode = function() {
      return M(se);
    }, P.unstable_next = function($) {
      switch (de) {
        case 1:
        case 2:
        case 3:
          var ye = 3;
          break;
        default:
          ye = de;
      }
      var J = de;
      de = ye;
      try {
        return $();
      } finally {
        de = J;
      }
    }, P.unstable_pauseExecution = function() {
    }, P.unstable_requestPaint = function() {
    }, P.unstable_runWithPriority = function($, ye) {
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
      var J = de;
      de = $;
      try {
        return ye();
      } finally {
        de = J;
      }
    }, P.unstable_scheduleCallback = function($, ye, J) {
      var Je = P.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? Je + J : Je) : J = Je, $) {
        case 1:
          var at = -1;
          break;
        case 2:
          at = 250;
          break;
        case 5:
          at = 1073741823;
          break;
        case 4:
          at = 1e4;
          break;
        default:
          at = 5e3;
      }
      return at = J + at, $ = { id: rt++, callback: ye, priorityLevel: $, startTime: J, expirationTime: at, sortIndex: -1 }, J > Je ? ($.sortIndex = J, Re(ce, $), M(se) === null && $ === M(ce) && (ot ? (cn(Rn), Rn = -1) : ot = !0, Kn(mt, J - Je))) : ($.sortIndex = at, Re(se, $), Ue || le || (Ue = !0, xt(Ve))), $;
    }, P.unstable_shouldYield = ft, P.unstable_wrapCallback = function($) {
      var ye = de;
      return function() {
        var J = de;
        de = ye;
        try {
          return $.apply(this, arguments);
        } finally {
          de = J;
        }
      };
    };
  }(s0)), s0;
}
var c0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q1;
function Wb() {
  return q1 || (q1 = 1, function(P) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Re = !1, M = !1, Ot = 5;
      function Ut(W, ve) {
        var He = W.length;
        W.push(ve), nt(W, ve, He);
      }
      function $e(W) {
        return W.length === 0 ? null : W[0];
      }
      function g(W) {
        if (W.length === 0)
          return null;
        var ve = W[0], He = W.pop();
        return He !== ve && (W[0] = He, se(W, He, 0)), ve;
      }
      function nt(W, ve, He) {
        for (var st = He; st > 0; ) {
          var At = st - 1 >>> 1, pn = W[At];
          if (ce(pn, ve) > 0)
            W[At] = ve, W[st] = pn, st = At;
          else
            return;
        }
      }
      function se(W, ve, He) {
        for (var st = He, At = W.length, pn = At >>> 1; st < pn; ) {
          var Qt = (st + 1) * 2 - 1, dr = W[Qt], Ct = Qt + 1, Or = W[Ct];
          if (ce(dr, ve) < 0)
            Ct < At && ce(Or, dr) < 0 ? (W[st] = Or, W[Ct] = ve, st = Ct) : (W[st] = dr, W[Qt] = ve, st = Qt);
          else if (Ct < At && ce(Or, ve) < 0)
            W[st] = Or, W[Ct] = ve, st = Ct;
          else
            return;
        }
      }
      function ce(W, ve) {
        var He = W.sortIndex - ve.sortIndex;
        return He !== 0 ? He : W.id - ve.id;
      }
      var rt = 1, te = 2, de = 3, le = 4, Ue = 5;
      function ot(W, ve) {
      }
      var ht = typeof performance == "object" && typeof performance.now == "function";
      if (ht) {
        var cn = performance;
        P.unstable_now = function() {
          return cn.now();
        };
      } else {
        var Ke = Date, je = Ke.now();
        P.unstable_now = function() {
          return Ke.now() - je;
        };
      }
      var mt = 1073741823, Ve = -1, Rt = 250, Ae = 5e3, Rn = 1e4, Fn = mt, Bt = [], ft = [], xn = 1, ke = null, Qe = de, fn = !1, xt = !1, Kn = !1, $ = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Je(W) {
        for (var ve = $e(ft); ve !== null; ) {
          if (ve.callback === null)
            g(ft);
          else if (ve.startTime <= W)
            g(ft), ve.sortIndex = ve.expirationTime, Ut(Bt, ve);
          else
            return;
          ve = $e(ft);
        }
      }
      function at(W) {
        if (Kn = !1, Je(W), !xt)
          if ($e(Bt) !== null)
            xt = !0, ya(wn);
          else {
            var ve = $e(ft);
            ve !== null && Xt(at, ve.startTime - W);
          }
      }
      function wn(W, ve) {
        xt = !1, Kn && (Kn = !1, _r()), fn = !0;
        var He = Qe;
        try {
          var st;
          if (!M)
            return Jn(W, ve);
        } finally {
          ke = null, Qe = He, fn = !1;
        }
      }
      function Jn(W, ve) {
        var He = ve;
        for (Je(He), ke = $e(Bt); ke !== null && !Re && !(ke.expirationTime > He && (!W || ha())); ) {
          var st = ke.callback;
          if (typeof st == "function") {
            ke.callback = null, Qe = ke.priorityLevel;
            var At = ke.expirationTime <= He, pn = st(At);
            He = P.unstable_now(), typeof pn == "function" ? ke.callback = pn : ke === $e(Bt) && g(Bt), Je(He);
          } else
            g(Bt);
          ke = $e(Bt);
        }
        if (ke !== null)
          return !0;
        var Qt = $e(ft);
        return Qt !== null && Xt(at, Qt.startTime - He), !1;
      }
      function La(W, ve) {
        switch (W) {
          case rt:
          case te:
          case de:
          case le:
          case Ue:
            break;
          default:
            W = de;
        }
        var He = Qe;
        Qe = W;
        try {
          return ve();
        } finally {
          Qe = He;
        }
      }
      function tn(W) {
        var ve;
        switch (Qe) {
          case rt:
          case te:
          case de:
            ve = de;
            break;
          default:
            ve = Qe;
            break;
        }
        var He = Qe;
        Qe = ve;
        try {
          return W();
        } finally {
          Qe = He;
        }
      }
      function $r(W) {
        var ve = Qe;
        return function() {
          var He = Qe;
          Qe = ve;
          try {
            return W.apply(this, arguments);
          } finally {
            Qe = He;
          }
        };
      }
      function jn(W, ve, He) {
        var st = P.unstable_now(), At;
        if (typeof He == "object" && He !== null) {
          var pn = He.delay;
          typeof pn == "number" && pn > 0 ? At = st + pn : At = st;
        } else
          At = st;
        var Qt;
        switch (W) {
          case rt:
            Qt = Ve;
            break;
          case te:
            Qt = Rt;
            break;
          case Ue:
            Qt = Fn;
            break;
          case le:
            Qt = Rn;
            break;
          case de:
          default:
            Qt = Ae;
            break;
        }
        var dr = At + Qt, Ct = {
          id: xn++,
          callback: ve,
          priorityLevel: W,
          startTime: At,
          expirationTime: dr,
          sortIndex: -1
        };
        return At > st ? (Ct.sortIndex = At, Ut(ft, Ct), $e(Bt) === null && Ct === $e(ft) && (Kn ? _r() : Kn = !0, Xt(at, At - st))) : (Ct.sortIndex = dr, Ut(Bt, Ct), !xt && !fn && (xt = !0, ya(wn))), Ct;
      }
      function cr() {
      }
      function Ma() {
        !xt && !fn && (xt = !0, ya(wn));
      }
      function fr() {
        return $e(Bt);
      }
      function Qr(W) {
        W.callback = null;
      }
      function dn() {
        return Qe;
      }
      var Vn = !1, Dn = null, Bn = -1, Pn = Ot, Ir = -1;
      function ha() {
        var W = P.unstable_now() - Ir;
        return !(W < Pn);
      }
      function qa() {
      }
      function Na(W) {
        if (W < 0 || W > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        W > 0 ? Pn = Math.floor(1e3 / W) : Pn = Ot;
      }
      var ma = function() {
        if (Dn !== null) {
          var W = P.unstable_now();
          Ir = W;
          var ve = !0, He = !0;
          try {
            He = Dn(ve, W);
          } finally {
            He ? br() : (Vn = !1, Dn = null);
          }
        } else
          Vn = !1;
      }, br;
      if (typeof J == "function")
        br = function() {
          J(ma);
        };
      else if (typeof MessageChannel < "u") {
        var za = new MessageChannel(), kr = za.port2;
        za.port1.onmessage = ma, br = function() {
          kr.postMessage(null);
        };
      } else
        br = function() {
          $(ma, 0);
        };
      function ya(W) {
        Dn = W, Vn || (Vn = !0, br());
      }
      function Xt(W, ve) {
        Bn = $(function() {
          W(P.unstable_now());
        }, ve);
      }
      function _r() {
        ye(Bn), Bn = -1;
      }
      var wi = qa, ga = null;
      P.unstable_IdlePriority = Ue, P.unstable_ImmediatePriority = rt, P.unstable_LowPriority = le, P.unstable_NormalPriority = de, P.unstable_Profiling = ga, P.unstable_UserBlockingPriority = te, P.unstable_cancelCallback = Qr, P.unstable_continueExecution = Ma, P.unstable_forceFrameRate = Na, P.unstable_getCurrentPriorityLevel = dn, P.unstable_getFirstCallbackNode = fr, P.unstable_next = tn, P.unstable_pauseExecution = cr, P.unstable_requestPaint = wi, P.unstable_runWithPriority = La, P.unstable_scheduleCallback = jn, P.unstable_shouldYield = ha, P.unstable_wrapCallback = $r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(c0)), c0;
}
var K1;
function tT() {
  return K1 || (K1 = 1, process.env.NODE_ENV === "production" ? Om.exports = Ib() : Om.exports = Wb()), Om.exports;
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
var J1;
function Gb() {
  if (J1)
    return pa;
  J1 = 1;
  var P = Op, Re = tT();
  function M(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ot = /* @__PURE__ */ new Set(), Ut = {};
  function $e(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (Ut[n] = r, n = 0; n < r.length; n++)
      Ot.add(r[n]);
  }
  var nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), se = Object.prototype.hasOwnProperty, ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, rt = {}, te = {};
  function de(n) {
    return se.call(te, n) ? !0 : se.call(rt, n) ? !1 : ce.test(n) ? te[n] = !0 : (rt[n] = !0, !1);
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
  function Ue(n, r, l, o) {
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
  function ot(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var ht = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ht[n] = new ot(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ht[r] = new ot(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ht[n] = new ot(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ht[n] = new ot(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ht[n] = new ot(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ht[n] = new ot(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ht[n] = new ot(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ht[n] = new ot(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ht[n] = new ot(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var cn = /[\-:]([a-z])/g;
  function Ke(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      cn,
      Ke
    );
    ht[r] = new ot(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(cn, Ke);
    ht[r] = new ot(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(cn, Ke);
    ht[r] = new ot(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ht[n] = new ot(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ht.xlinkHref = new ot("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ht[n] = new ot(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function je(n, r, l, o) {
    var c = ht.hasOwnProperty(r) ? ht[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ue(r, l, c, o) && (l = null), o || c === null ? de(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var mt = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ve = Symbol.for("react.element"), Rt = Symbol.for("react.portal"), Ae = Symbol.for("react.fragment"), Rn = Symbol.for("react.strict_mode"), Fn = Symbol.for("react.profiler"), Bt = Symbol.for("react.provider"), ft = Symbol.for("react.context"), xn = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), fn = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), Kn = Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function ye(n) {
    return n === null || typeof n != "object" ? null : (n = $ && n[$] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var J = Object.assign, Je;
  function at(n) {
    if (Je === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        Je = r && r[1] || "";
      }
    return `
` + Je + n;
  }
  var wn = !1;
  function Jn(n, r) {
    if (!n || wn)
      return "";
    wn = !0;
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
          } catch (L) {
            var o = L;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (L) {
            o = L;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (L) {
          o = L;
        }
        n();
      }
    } catch (L) {
      if (L && o && typeof L.stack == "string") {
        for (var c = L.stack.split(`
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
      wn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? at(n) : "";
  }
  function La(n) {
    switch (n.tag) {
      case 5:
        return at(n.type);
      case 16:
        return at("Lazy");
      case 13:
        return at("Suspense");
      case 19:
        return at("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Jn(n.type, !1), n;
      case 11:
        return n = Jn(n.type.render, !1), n;
      case 1:
        return n = Jn(n.type, !0), n;
      default:
        return "";
    }
  }
  function tn(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ae:
        return "Fragment";
      case Rt:
        return "Portal";
      case Fn:
        return "Profiler";
      case Rn:
        return "StrictMode";
      case ke:
        return "Suspense";
      case Qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ft:
          return (n.displayName || "Context") + ".Consumer";
        case Bt:
          return (n._context.displayName || "Context") + ".Provider";
        case xn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case fn:
          return r = n.displayName || null, r !== null ? r : tn(n.type) || "Memo";
        case xt:
          r = n._payload, n = n._init;
          try {
            return tn(n(r));
          } catch {
          }
      }
    return null;
  }
  function $r(n) {
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
        return tn(r);
      case 8:
        return r === Rn ? "StrictMode" : "Mode";
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
  function jn(n) {
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
  function cr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ma(n) {
    var r = cr(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function fr(n) {
    n._valueTracker || (n._valueTracker = Ma(n));
  }
  function Qr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = cr(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function dn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Vn(n, r) {
    var l = r.checked;
    return J({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Dn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = jn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && je(n, "checked", r, !1);
  }
  function Pn(n, r) {
    Bn(n, r);
    var l = jn(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ha(n, r.type, l) : r.hasOwnProperty("defaultValue") && ha(n, r.type, jn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ir(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function ha(n, r, l) {
    (r !== "number" || dn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qa = Array.isArray;
  function Na(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + jn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ma(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(M(91));
    return J({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function br(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(M(92));
        if (qa(l)) {
          if (1 < l.length)
            throw Error(M(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: jn(l) };
  }
  function za(n, r) {
    var l = jn(r.value), o = jn(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function kr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ya(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Xt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ya(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var _r, wi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (_r = _r || document.createElement("div"), _r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = _r.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ga(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var W = {
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
  }, ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(W).forEach(function(n) {
    ve.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), W[r] = W[n];
    });
  });
  function He(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || W.hasOwnProperty(n) && W[n] ? ("" + r).trim() : r + "px";
  }
  function st(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = He(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var At = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pn(n, r) {
    if (r) {
      if (At[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(M(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(M(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(M(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(M(62));
    }
  }
  function Qt(n, r) {
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
  var dr = null;
  function Ct(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Or = null, yt = null, Tt = null;
  function ru(n) {
    if (n = ko(n)) {
      if (typeof Or != "function")
        throw Error(M(280));
      var r = n.stateNode;
      r && (r = he(r), Or(n.stateNode, n.type, r));
    }
  }
  function cl(n) {
    yt ? Tt ? Tt.push(n) : Tt = [n] : yt = n;
  }
  function au() {
    if (yt) {
      var n = yt, r = Tt;
      if (Tt = yt = null, ru(n), r)
        for (n = 0; n < r.length; n++)
          ru(r[n]);
    }
  }
  function io(n, r) {
    return n(r);
  }
  function hs() {
  }
  var fl = !1;
  function iu(n, r, l) {
    if (fl)
      return n(r, l);
    fl = !0;
    try {
      return io(n, r, l);
    } finally {
      fl = !1, (yt !== null || Tt !== null) && (hs(), au());
    }
  }
  function dl(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = he(l);
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
      throw Error(M(231, r, typeof l));
    return l;
  }
  var lu = !1;
  if (nt)
    try {
      var Ua = {};
      Object.defineProperty(Ua, "passive", { get: function() {
        lu = !0;
      } }), window.addEventListener("test", Ua, Ua), window.removeEventListener("test", Ua, Ua);
    } catch {
      lu = !1;
    }
  function Di(n, r, l, o, c, d, h, S, C) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, L);
    } catch (F) {
      this.onError(F);
    }
  }
  var Lr = !1, Sa = null, bi = !1, E = null, j = { onError: function(n) {
    Lr = !0, Sa = n;
  } };
  function G(n, r, l, o, c, d, h, S, C) {
    Lr = !1, Sa = null, Di.apply(j, arguments);
  }
  function ge(n, r, l, o, c, d, h, S, C) {
    if (G.apply(this, arguments), Lr) {
      if (Lr) {
        var L = Sa;
        Lr = !1, Sa = null;
      } else
        throw Error(M(198));
      bi || (bi = !0, E = L);
    }
  }
  function Ne(n) {
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
  function Xe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function ze(n) {
    if (Ne(n) !== n)
      throw Error(M(188));
  }
  function Ee(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ne(n), r === null)
        throw Error(M(188));
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
            return ze(c), n;
          if (d === o)
            return ze(c), r;
          d = d.sibling;
        }
        throw Error(M(188));
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
            throw Error(M(189));
        }
      }
      if (l.alternate !== o)
        throw Error(M(190));
    }
    if (l.tag !== 3)
      throw Error(M(188));
    return l.stateNode.current === l ? n : r;
  }
  function vn(n) {
    return n = Ee(n), n !== null ? Lt(n) : null;
  }
  function Lt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Lt(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Mt = Re.unstable_scheduleCallback, Zn = Re.unstable_cancelCallback, ki = Re.unstable_shouldYield, ms = Re.unstable_requestPaint, Ze = Re.unstable_now, Mm = Re.unstable_getCurrentPriorityLevel, Ka = Re.unstable_ImmediatePriority, Be = Re.unstable_UserBlockingPriority, _i = Re.unstable_NormalPriority, Lp = Re.unstable_LowPriority, cf = Re.unstable_IdlePriority, lo = null, Ea = null;
  function Mp(n) {
    if (Ea && typeof Ea.onCommitFiberRoot == "function")
      try {
        Ea.onCommitFiberRoot(lo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Wr = Math.clz32 ? Math.clz32 : Nm, Np = Math.log, zp = Math.LN2;
  function Nm(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Np(n) / zp | 0) | 0;
  }
  var ys = 64, uu = 4194304;
  function pl(n) {
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
  function Ca(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = pl(S) : (d &= h, d !== 0 && (o = pl(d)));
    } else
      h = l & ~c, h !== 0 ? o = pl(h) : d !== 0 && (o = pl(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Wr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function ff(n, r) {
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
  function gs(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - Wr(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = ff(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function df(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ss() {
    var n = ys;
    return ys <<= 1, !(ys & 4194240) && (ys = 64), n;
  }
  function pf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function vl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Wr(r), n[r] = l;
  }
  function zm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Wr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function uo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Wr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var ct = 0;
  function vf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Up, Es, gt, Ap, hf, Oe = !1, oo = [], qt = null, Gr = null, Xr = null, so = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map(), dt = [], Um = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ta(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        qt = null;
        break;
      case "dragenter":
      case "dragleave":
        Gr = null;
        break;
      case "mouseover":
      case "mouseout":
        Xr = null;
        break;
      case "pointerover":
      case "pointerout":
        so.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nn.delete(r.pointerId);
    }
  }
  function Yn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ko(r), r !== null && Es(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Oi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return qt = Yn(qt, n, r, l, o, c), !0;
      case "dragenter":
        return Gr = Yn(Gr, n, r, l, o, c), !0;
      case "mouseover":
        return Xr = Yn(Xr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return so.set(d, Yn(so.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, nn.set(d, Yn(nn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Hp(n) {
    var r = Kr(n.target);
    if (r !== null) {
      var l = Ne(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Xe(l), r !== null) {
            n.blockedOn = r, hf(n.priority, function() {
              gt(l);
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
  function ou(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Rs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        dr = o, l.target.dispatchEvent(o), dr = null;
      } else
        return r = ko(l), r !== null && Es(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function mf(n, r, l) {
    ou(n) && l.delete(r);
  }
  function Fp() {
    Oe = !1, qt !== null && ou(qt) && (qt = null), Gr !== null && ou(Gr) && (Gr = null), Xr !== null && ou(Xr) && (Xr = null), so.forEach(mf), nn.forEach(mf);
  }
  function co(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Oe || (Oe = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Fp)));
  }
  function fo(n) {
    function r(c) {
      return co(c, n);
    }
    if (0 < oo.length) {
      co(oo[0], n);
      for (var l = 1; l < oo.length; l++) {
        var o = oo[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (qt !== null && co(qt, n), Gr !== null && co(Gr, n), Xr !== null && co(Xr, n), so.forEach(r), nn.forEach(r), l = 0; l < dt.length; l++)
      o = dt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < dt.length && (l = dt[0], l.blockedOn === null); )
      Hp(l), l.blockedOn === null && dt.shift();
  }
  var su = mt.ReactCurrentBatchConfig, hl = !0;
  function jp(n, r, l, o) {
    var c = ct, d = su.transition;
    su.transition = null;
    try {
      ct = 1, Ts(n, r, l, o);
    } finally {
      ct = c, su.transition = d;
    }
  }
  function Cs(n, r, l, o) {
    var c = ct, d = su.transition;
    su.transition = null;
    try {
      ct = 4, Ts(n, r, l, o);
    } finally {
      ct = c, su.transition = d;
    }
  }
  function Ts(n, r, l, o) {
    if (hl) {
      var c = Rs(n, r, l, o);
      if (c === null)
        Us(n, r, o, po, l), Ta(n, o);
      else if (Oi(c, n, r, l, o))
        o.stopPropagation();
      else if (Ta(n, o), r & 4 && -1 < Um.indexOf(n)) {
        for (; c !== null; ) {
          var d = ko(c);
          if (d !== null && Up(d), d = Rs(n, r, l, o), d === null && Us(n, r, o, po, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Us(n, r, o, null, l);
    }
  }
  var po = null;
  function Rs(n, r, l, o) {
    if (po = null, n = Ct(o), n = Kr(n), n !== null)
      if (r = Ne(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Xe(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return po = n, null;
  }
  function yf(n) {
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
        switch (Mm()) {
          case Ka:
            return 1;
          case Be:
            return 4;
          case _i:
          case Lp:
            return 16;
          case cf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ja = null, vo = null, ho = null;
  function gf() {
    if (ho)
      return ho;
    var n, r = vo, l = r.length, o, c = "value" in Ja ? Ja.value : Ja.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return ho = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function cu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function mo() {
    return !0;
  }
  function Vp() {
    return !1;
  }
  function Mr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? mo : Vp, this.isPropagationStopped = Vp, this;
    }
    return J(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = mo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = mo);
    }, persist: function() {
    }, isPersistent: mo }), r;
  }
  var Li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, xs = Mr(Li), fu = J({}, Li, { view: 0, detail: 0 }), Bp = Mr(fu), ws, Sf, yo, hn = J({}, fu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Rf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yo && (yo && n.type === "mousemove" ? (ws = n.screenX - yo.screenX, Sf = n.screenY - yo.screenY) : Sf = ws = 0, yo = n), ws);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Sf;
  } }), Ds = Mr(hn), Pp = J({}, hn, { dataTransfer: 0 }), Yp = Mr(Pp), Am = J({}, fu, { relatedTarget: 0 }), Mi = Mr(Am), Ef = J({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $p = Mr(Ef), Hm = J({}, Li, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Fm = Mr(Hm), jm = J({}, Li, { data: 0 }), Cf = Mr(jm), Tf = {
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
  }, Qp = {
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
  }, Ip = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ip[n]) ? !!r[n] : !1;
  }
  function Rf() {
    return Wp;
  }
  var Za = J({}, fu, { key: function(n) {
    if (n.key) {
      var r = Tf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = cu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Qp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Rf, charCode: function(n) {
    return n.type === "keypress" ? cu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? cu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Vm = Mr(Za), xf = J({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bs = Mr(xf), wf = J({}, fu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Rf }), Bm = Mr(wf), ks = J({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gp = Mr(ks), pr = J({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ei = Mr(pr), Kt = [9, 13, 27, 32], Ra = nt && "CompositionEvent" in window, ml = null;
  nt && "documentMode" in document && (ml = document.documentMode);
  var _s = nt && "TextEvent" in window && !ml, Xp = nt && (!Ra || ml && 8 < ml && 11 >= ml), du = String.fromCharCode(32), qp = !1;
  function Kp(n, r) {
    switch (n) {
      case "keyup":
        return Kt.indexOf(r.keyCode) !== -1;
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
  function Os(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var pu = !1;
  function Pm(n, r) {
    switch (n) {
      case "compositionend":
        return Os(r);
      case "keypress":
        return r.which !== 32 ? null : (qp = !0, du);
      case "textInput":
        return n = r.data, n === du && qp ? null : n;
      default:
        return null;
    }
  }
  function Ym(n, r) {
    if (pu)
      return n === "compositionend" || !Ra && Kp(n, r) ? (n = gf(), ho = vo = Ja = null, pu = !1, n) : null;
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
        return Xp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Zp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jp[n.type] : r === "textarea";
  }
  function ev(n, r, l, o) {
    cl(o), r = wo(r, "onChange"), 0 < r.length && (l = new xs("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var go = null, vu = null;
  function hu(n) {
    zs(n, 0);
  }
  function mu(n) {
    var r = gu(n);
    if (Qr(r))
      return n;
  }
  function tv(n, r) {
    if (n === "change")
      return r;
  }
  var Df = !1;
  if (nt) {
    var bf;
    if (nt) {
      var kf = "oninput" in document;
      if (!kf) {
        var nv = document.createElement("div");
        nv.setAttribute("oninput", "return;"), kf = typeof nv.oninput == "function";
      }
      bf = kf;
    } else
      bf = !1;
    Df = bf && (!document.documentMode || 9 < document.documentMode);
  }
  function rv() {
    go && (go.detachEvent("onpropertychange", av), vu = go = null);
  }
  function av(n) {
    if (n.propertyName === "value" && mu(vu)) {
      var r = [];
      ev(r, vu, n, Ct(n)), iu(hu, r);
    }
  }
  function $m(n, r, l) {
    n === "focusin" ? (rv(), go = r, vu = l, go.attachEvent("onpropertychange", av)) : n === "focusout" && rv();
  }
  function Qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return mu(vu);
  }
  function Im(n, r) {
    if (n === "click")
      return mu(r);
  }
  function iv(n, r) {
    if (n === "input" || n === "change")
      return mu(r);
  }
  function Wm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var qr = typeof Object.is == "function" ? Object.is : Wm;
  function So(n, r) {
    if (qr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!se.call(r, c) || !qr(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function lv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function uv(n, r) {
    var l = lv(n);
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
      l = lv(l);
    }
  }
  function ov(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? ov(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ls() {
    for (var n = window, r = dn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = dn(n.document);
    }
    return r;
  }
  function ti(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ms(n) {
    var r = Ls(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && ov(l.ownerDocument.documentElement, l)) {
      if (o !== null && ti(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = uv(l, d);
          var h = uv(
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
  var sv = nt && "documentMode" in document && 11 >= document.documentMode, xa = null, _f = null, Eo = null, Of = !1;
  function cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Of || xa == null || xa !== dn(o) || (o = xa, "selectionStart" in o && ti(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Eo && So(Eo, o) || (Eo = o, o = wo(_f, "onSelect"), 0 < o.length && (r = new xs("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = xa)));
  }
  function Ns(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var yl = { animationend: Ns("Animation", "AnimationEnd"), animationiteration: Ns("Animation", "AnimationIteration"), animationstart: Ns("Animation", "AnimationStart"), transitionend: Ns("Transition", "TransitionEnd") }, Lf = {}, Mf = {};
  nt && (Mf = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);
  function mn(n) {
    if (Lf[n])
      return Lf[n];
    if (!yl[n])
      return n;
    var r = yl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Mf)
        return Lf[n] = r[l];
    return n;
  }
  var Nf = mn("animationend"), fv = mn("animationiteration"), dv = mn("animationstart"), pv = mn("transitionend"), vv = /* @__PURE__ */ new Map(), hv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ni(n, r) {
    vv.set(n, r), $e(r, [n]);
  }
  for (var Co = 0; Co < hv.length; Co++) {
    var gl = hv[Co], Gm = gl.toLowerCase(), To = gl[0].toUpperCase() + gl.slice(1);
    ni(Gm, "on" + To);
  }
  ni(Nf, "onAnimationEnd"), ni(fv, "onAnimationIteration"), ni(dv, "onAnimationStart"), ni("dblclick", "onDoubleClick"), ni("focusin", "onFocus"), ni("focusout", "onBlur"), ni(pv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), $e("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), $e("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), $e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $e("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), $e("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), $e("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));
  function mv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ge(o, r, void 0, n), n.currentTarget = null;
  }
  function zs(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var S = o[h], C = S.instance, L = S.currentTarget;
            if (S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            mv(c, S, L), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], C = S.instance, L = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            mv(c, S, L), d = C;
          }
      }
    }
    if (bi)
      throw n = E, bi = !1, E = null, n;
  }
  function St(n, r) {
    var l = r[Vf];
    l === void 0 && (l = r[Vf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (yv(r, n, 2, !1), l.add(o));
  }
  function Ni(n, r, l) {
    var o = 0;
    r && (o |= 4), yv(l, n, o, r);
  }
  var ri = "_reactListening" + Math.random().toString(36).slice(2);
  function yu(n) {
    if (!n[ri]) {
      n[ri] = !0, Ot.forEach(function(l) {
        l !== "selectionchange" && (Xm.has(l) || Ni(l, !1, n), Ni(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ri] || (r[ri] = !0, Ni("selectionchange", !1, r));
    }
  }
  function yv(n, r, l, o) {
    switch (yf(r)) {
      case 1:
        var c = jp;
        break;
      case 4:
        c = Cs;
        break;
      default:
        c = Ts;
    }
    l = c.bind(null, r, l, n), c = void 0, !lu || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Us(n, r, l, o, c) {
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
              if (h = Kr(S), h === null)
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
    iu(function() {
      var L = d, F = Ct(l), V = [];
      e: {
        var H = vv.get(n);
        if (H !== void 0) {
          var q = xs, re = n;
          switch (n) {
            case "keypress":
              if (cu(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              q = Vm;
              break;
            case "focusin":
              re = "focus", q = Mi;
              break;
            case "focusout":
              re = "blur", q = Mi;
              break;
            case "beforeblur":
            case "afterblur":
              q = Mi;
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
              q = Ds;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = Yp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = Bm;
              break;
            case Nf:
            case fv:
            case dv:
              q = $p;
              break;
            case pv:
              q = Gp;
              break;
            case "scroll":
              q = Bp;
              break;
            case "wheel":
              q = ei;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = Fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = bs;
          }
          var ue = (r & 4) !== 0, Wt = !ue && n === "scroll", w = ue ? H !== null ? H + "Capture" : null : H;
          ue = [];
          for (var R = L, k; R !== null; ) {
            k = R;
            var Y = k.stateNode;
            if (k.tag === 5 && Y !== null && (k = Y, w !== null && (Y = dl(R, w), Y != null && ue.push(xo(R, Y, k)))), Wt)
              break;
            R = R.return;
          }
          0 < ue.length && (H = new q(H, re, null, l, F), V.push({ event: H, listeners: ue }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (H = n === "mouseover" || n === "pointerover", q = n === "mouseout" || n === "pointerout", H && l !== dr && (re = l.relatedTarget || l.fromElement) && (Kr(re) || re[ai]))
            break e;
          if ((q || H) && (H = F.window === F ? F : (H = F.ownerDocument) ? H.defaultView || H.parentWindow : window, q ? (re = l.relatedTarget || l.toElement, q = L, re = re ? Kr(re) : null, re !== null && (Wt = Ne(re), re !== Wt || re.tag !== 5 && re.tag !== 6) && (re = null)) : (q = null, re = L), q !== re)) {
            if (ue = Ds, Y = "onMouseLeave", w = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (ue = bs, Y = "onPointerLeave", w = "onPointerEnter", R = "pointer"), Wt = q == null ? H : gu(q), k = re == null ? H : gu(re), H = new ue(Y, R + "leave", q, l, F), H.target = Wt, H.relatedTarget = k, Y = null, Kr(F) === L && (ue = new ue(w, R + "enter", re, l, F), ue.target = k, ue.relatedTarget = Wt, Y = ue), Wt = Y, q && re)
              t: {
                for (ue = q, w = re, R = 0, k = ue; k; k = Sl(k))
                  R++;
                for (k = 0, Y = w; Y; Y = Sl(Y))
                  k++;
                for (; 0 < R - k; )
                  ue = Sl(ue), R--;
                for (; 0 < k - R; )
                  w = Sl(w), k--;
                for (; R--; ) {
                  if (ue === w || w !== null && ue === w.alternate)
                    break t;
                  ue = Sl(ue), w = Sl(w);
                }
                ue = null;
              }
            else
              ue = null;
            q !== null && zf(V, H, q, ue, !1), re !== null && Wt !== null && zf(V, Wt, re, ue, !0);
          }
        }
        e: {
          if (H = L ? gu(L) : window, q = H.nodeName && H.nodeName.toLowerCase(), q === "select" || q === "input" && H.type === "file")
            var oe = tv;
          else if (Zp(H))
            if (Df)
              oe = iv;
            else {
              oe = Qm;
              var ae = $m;
            }
          else
            (q = H.nodeName) && q.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (oe = Im);
          if (oe && (oe = oe(n, L))) {
            ev(V, oe, l, F);
            break e;
          }
          ae && ae(n, H, L), n === "focusout" && (ae = H._wrapperState) && ae.controlled && H.type === "number" && ha(H, "number", H.value);
        }
        switch (ae = L ? gu(L) : window, n) {
          case "focusin":
            (Zp(ae) || ae.contentEditable === "true") && (xa = ae, _f = L, Eo = null);
            break;
          case "focusout":
            Eo = _f = xa = null;
            break;
          case "mousedown":
            Of = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Of = !1, cv(V, l, F);
            break;
          case "selectionchange":
            if (sv)
              break;
          case "keydown":
          case "keyup":
            cv(V, l, F);
        }
        var pe;
        if (Ra)
          e: {
            switch (n) {
              case "compositionstart":
                var De = "onCompositionStart";
                break e;
              case "compositionend":
                De = "onCompositionEnd";
                break e;
              case "compositionupdate":
                De = "onCompositionUpdate";
                break e;
            }
            De = void 0;
          }
        else
          pu ? Kp(n, l) && (De = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (De = "onCompositionStart");
        De && (Xp && l.locale !== "ko" && (pu || De !== "onCompositionStart" ? De === "onCompositionEnd" && pu && (pe = gf()) : (Ja = F, vo = "value" in Ja ? Ja.value : Ja.textContent, pu = !0)), ae = wo(L, De), 0 < ae.length && (De = new Cf(De, n, null, l, F), V.push({ event: De, listeners: ae }), pe ? De.data = pe : (pe = Os(l), pe !== null && (De.data = pe)))), (pe = _s ? Pm(n, l) : Ym(n, l)) && (L = wo(L, "onBeforeInput"), 0 < L.length && (F = new Cf("onBeforeInput", "beforeinput", null, l, F), V.push({ event: F, listeners: L }), F.data = pe));
      }
      zs(V, r);
    });
  }
  function xo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function wo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = dl(n, l), d != null && o.unshift(xo(n, d, c)), d = dl(n, r), d != null && o.push(xo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Sl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function zf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, L = S.stateNode;
      if (C !== null && C === o)
        break;
      S.tag === 5 && L !== null && (S = L, c ? (C = dl(l, d), C != null && h.unshift(xo(l, C, S))) : c || (C = dl(l, d), C != null && h.push(xo(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Uf = /\r\n?/g, qm = /\u0000|\uFFFD/g;
  function Af(n) {
    return (typeof n == "string" ? n : "" + n).replace(Uf, `
`).replace(qm, "");
  }
  function As(n, r, l) {
    if (r = Af(r), Af(n) !== r && l)
      throw Error(M(425));
  }
  function Hs() {
  }
  var Hf = null, El = null;
  function Do(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cl = typeof setTimeout == "function" ? setTimeout : void 0, gv = typeof clearTimeout == "function" ? clearTimeout : void 0, Ff = typeof Promise == "function" ? Promise : void 0, jf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ff < "u" ? function(n) {
    return Ff.resolve(null).then(n).catch(Km);
  } : Cl;
  function Km(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function zi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), fo(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    fo(r);
  }
  function wa(n) {
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
  function bo(n) {
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
  var Ui = Math.random().toString(36).slice(2), Aa = "__reactFiber$" + Ui, Tl = "__reactProps$" + Ui, ai = "__reactContainer$" + Ui, Vf = "__reactEvents$" + Ui, Jm = "__reactListeners$" + Ui, Bf = "__reactHandles$" + Ui;
  function Kr(n) {
    var r = n[Aa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ai] || l[Aa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = bo(n); n !== null; ) {
            if (l = n[Aa])
              return l;
            n = bo(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ko(n) {
    return n = n[Aa] || n[ai], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function gu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(M(33));
  }
  function he(n) {
    return n[Tl] || null;
  }
  var Ai = [], wt = -1;
  function Le(n) {
    return { current: n };
  }
  function it(n) {
    0 > wt || (n.current = Ai[wt], Ai[wt] = null, wt--);
  }
  function lt(n, r) {
    wt++, Ai[wt] = n.current, n.current = r;
  }
  var Ha = {}, we = Le(Ha), Pt = Le(!1), vr = Ha;
  function Jr(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ha;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nt(n) {
    return n = n.childContextTypes, n != null;
  }
  function Zr() {
    it(Pt), it(we);
  }
  function Hi(n, r, l) {
    if (we.current !== Ha)
      throw Error(M(168));
    lt(we, r), lt(Pt, l);
  }
  function _o(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(M(108, $r(n) || "Unknown", c));
    return J({}, l, o);
  }
  function Fs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ha, vr = we.current, lt(we, n), lt(Pt, Pt.current), !0;
  }
  function Sv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(M(169));
    l ? (n = _o(n, r, vr), o.__reactInternalMemoizedMergedChildContext = n, it(Pt), it(we), lt(we, n)) : it(Pt), lt(Pt, l);
  }
  var Nr = null, yn = !1, Oo = !1;
  function Pf(n) {
    Nr === null ? Nr = [n] : Nr.push(n);
  }
  function Yf(n) {
    yn = !0, Pf(n);
  }
  function hr() {
    if (!Oo && Nr !== null) {
      Oo = !0;
      var n = 0, r = ct;
      try {
        var l = Nr;
        for (ct = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Nr = null, yn = !1;
      } catch (c) {
        throw Nr !== null && (Nr = Nr.slice(n + 1)), Mt(Ka, hr), c;
      } finally {
        ct = r, Oo = !1;
      }
    }
    return null;
  }
  var Fi = [], mr = 0, Rl = null, Su = 0, yr = [], $n = 0, ea = null, bn = 1, ii = "";
  function zr(n, r) {
    Fi[mr++] = Su, Fi[mr++] = Rl, Rl = n, Su = r;
  }
  function $f(n, r, l) {
    yr[$n++] = bn, yr[$n++] = ii, yr[$n++] = ea, ea = n;
    var o = bn;
    n = ii;
    var c = 32 - Wr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Wr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, bn = 1 << 32 - Wr(r) + c | l << c | o, ii = d + n;
    } else
      bn = 1 << d | l << c | o, ii = n;
  }
  function js(n) {
    n.return !== null && (zr(n, 1), $f(n, 1, 0));
  }
  function Qf(n) {
    for (; n === Rl; )
      Rl = Fi[--mr], Fi[mr] = null, Su = Fi[--mr], Fi[mr] = null;
    for (; n === ea; )
      ea = yr[--$n], yr[$n] = null, ii = yr[--$n], yr[$n] = null, bn = yr[--$n], yr[$n] = null;
  }
  var Ur = null, gr = null, Dt = !1, ta = null;
  function If(n, r) {
    var l = ua(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Ev(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ur = n, gr = wa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ur = n, gr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ea !== null ? { id: bn, overflow: ii } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ua(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ur = n, gr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Vs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Bs(n) {
    if (Dt) {
      var r = gr;
      if (r) {
        var l = r;
        if (!Ev(n, r)) {
          if (Vs(n))
            throw Error(M(418));
          r = wa(l.nextSibling);
          var o = Ur;
          r && Ev(n, r) ? If(o, l) : (n.flags = n.flags & -4097 | 2, Dt = !1, Ur = n);
        }
      } else {
        if (Vs(n))
          throw Error(M(418));
        n.flags = n.flags & -4097 | 2, Dt = !1, Ur = n;
      }
    }
  }
  function Cv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ur = n;
  }
  function Ps(n) {
    if (n !== Ur)
      return !1;
    if (!Dt)
      return Cv(n), Dt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Do(n.type, n.memoizedProps)), r && (r = gr)) {
      if (Vs(n))
        throw Tv(), Error(M(418));
      for (; r; )
        If(n, r), r = wa(r.nextSibling);
    }
    if (Cv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(M(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                gr = wa(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        gr = null;
      }
    } else
      gr = Ur ? wa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Tv() {
    for (var n = gr; n; )
      n = wa(n.nextSibling);
  }
  function Ht() {
    gr = Ur = null, Dt = !1;
  }
  function Wf(n) {
    ta === null ? ta = [n] : ta.push(n);
  }
  var Ys = mt.ReactCurrentBatchConfig;
  function Ar(n, r) {
    if (n && n.defaultProps) {
      r = J({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Fa = Le(null), $s = null, ji = null, Gf = null;
  function Xf() {
    Gf = ji = $s = null;
  }
  function Vi(n) {
    var r = Fa.current;
    it(Fa), n._currentValue = r;
  }
  function gn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Q(n, r) {
    $s = n, Gf = ji = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Jt = !0), n.firstContext = null);
  }
  function It(n) {
    var r = n._currentValue;
    if (Gf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, ji === null) {
        if ($s === null)
          throw Error(M(308));
        ji = n, $s.dependencies = { lanes: 0, firstContext: n };
      } else
        ji = ji.next = n;
    return r;
  }
  var kn = null;
  function qf(n) {
    kn === null ? kn = [n] : kn.push(n);
  }
  function Rv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, qf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, li(n, o);
  }
  function li(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Bi = !1;
  function Kf(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function rn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ui(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Pi(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Pe & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, li(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, qf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, li(n, l);
  }
  function Qs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, uo(n, l);
    }
  }
  function Jf(n, r) {
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
  function Yi(n, r, l, o) {
    var c = n.updateQueue;
    Bi = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, L = C.next;
      C.next = null, h === null ? d = L : h.next = L, h = C;
      var F = n.alternate;
      F !== null && (F = F.updateQueue, S = F.lastBaseUpdate, S !== h && (S === null ? F.firstBaseUpdate = L : S.next = L, F.lastBaseUpdate = C));
    }
    if (d !== null) {
      var V = c.baseState;
      h = 0, F = L = C = null, S = d;
      do {
        var H = S.lane, q = S.eventTime;
        if ((o & H) === H) {
          F !== null && (F = F.next = {
            eventTime: q,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var re = n, ue = S;
            switch (H = r, q = l, ue.tag) {
              case 1:
                if (re = ue.payload, typeof re == "function") {
                  V = re.call(q, V, H);
                  break e;
                }
                V = re;
                break e;
              case 3:
                re.flags = re.flags & -65537 | 128;
              case 0:
                if (re = ue.payload, H = typeof re == "function" ? re.call(q, V, H) : re, H == null)
                  break e;
                V = J({}, V, H);
                break e;
              case 2:
                Bi = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, H = c.effects, H === null ? c.effects = [S] : H.push(S));
        } else
          q = { eventTime: q, lane: H, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, F === null ? (L = F = q, C = V) : F = F.next = q, h |= H;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          H = S, S = H.next, H.next = null, c.lastBaseUpdate = H, c.shared.pending = null;
        }
      } while (1);
      if (F === null && (C = V), c.baseState = C, c.firstBaseUpdate = L, c.lastBaseUpdate = F, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      fi |= h, n.lanes = h, n.memoizedState = V;
    }
  }
  function xl(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(M(191, c));
          c.call(o);
        }
      }
  }
  var xv = new P.Component().refs;
  function Zf(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : J({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Is = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ne(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = Zt(n), d = ui(o, c);
    d.payload = r, l != null && (d.callback = l), r = Pi(n, d, c), r !== null && (Xn(r, n, c, o), Qs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = Zt(n), d = ui(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Pi(n, d, c), r !== null && (Xn(r, n, c, o), Qs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Gn(), o = Zt(n), c = ui(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Pi(n, c, o), r !== null && (Xn(r, n, o, l), Qs(r, n, o));
  } };
  function wv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !So(l, o) || !So(c, d) : !0;
  }
  function Dv(n, r, l) {
    var o = !1, c = Ha, d = r.contextType;
    return typeof d == "object" && d !== null ? d = It(d) : (c = Nt(r) ? vr : we.current, o = r.contextTypes, d = (o = o != null) ? Jr(n, c) : Ha), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Is, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function bv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Is.enqueueReplaceState(r, r.state, null);
  }
  function Ws(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = xv, Kf(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = It(d) : (d = Nt(r) ? vr : we.current, c.context = Jr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Zf(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Is.enqueueReplaceState(c, c.state, null), Yi(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Eu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(M(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(M(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          S === xv && (S = c.refs = {}), h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(M(284));
      if (!l._owner)
        throw Error(M(290, n));
    }
    return n;
  }
  function Gs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(M(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function kv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function _v(n) {
    function r(w, R) {
      if (n) {
        var k = w.deletions;
        k === null ? (w.deletions = [R], w.flags |= 16) : k.push(R);
      }
    }
    function l(w, R) {
      if (!n)
        return null;
      for (; R !== null; )
        r(w, R), R = R.sibling;
      return null;
    }
    function o(w, R) {
      for (w = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? w.set(R.key, R) : w.set(R.index, R), R = R.sibling;
      return w;
    }
    function c(w, R) {
      return w = Ki(w, R), w.index = 0, w.sibling = null, w;
    }
    function d(w, R, k) {
      return w.index = k, n ? (k = w.alternate, k !== null ? (k = k.index, k < R ? (w.flags |= 2, R) : k) : (w.flags |= 2, R)) : (w.flags |= 1048576, R);
    }
    function h(w) {
      return n && w.alternate === null && (w.flags |= 2), w;
    }
    function S(w, R, k, Y) {
      return R === null || R.tag !== 6 ? (R = Xo(k, w.mode, Y), R.return = w, R) : (R = c(R, k), R.return = w, R);
    }
    function C(w, R, k, Y) {
      var oe = k.type;
      return oe === Ae ? F(w, R, k.props.children, Y, k.key) : R !== null && (R.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === xt && kv(oe) === R.type) ? (Y = c(R, k.props), Y.ref = Eu(w, R, k), Y.return = w, Y) : (Y = Dc(k.type, k.key, k.props, null, w.mode, Y), Y.ref = Eu(w, R, k), Y.return = w, Y);
    }
    function L(w, R, k, Y) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== k.containerInfo || R.stateNode.implementation !== k.implementation ? (R = Yl(k, w.mode, Y), R.return = w, R) : (R = c(R, k.children || []), R.return = w, R);
    }
    function F(w, R, k, Y, oe) {
      return R === null || R.tag !== 7 ? (R = Pl(k, w.mode, Y, oe), R.return = w, R) : (R = c(R, k), R.return = w, R);
    }
    function V(w, R, k) {
      if (typeof R == "string" && R !== "" || typeof R == "number")
        return R = Xo("" + R, w.mode, k), R.return = w, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Ve:
            return k = Dc(R.type, R.key, R.props, null, w.mode, k), k.ref = Eu(w, null, R), k.return = w, k;
          case Rt:
            return R = Yl(R, w.mode, k), R.return = w, R;
          case xt:
            var Y = R._init;
            return V(w, Y(R._payload), k);
        }
        if (qa(R) || ye(R))
          return R = Pl(R, w.mode, k, null), R.return = w, R;
        Gs(w, R);
      }
      return null;
    }
    function H(w, R, k, Y) {
      var oe = R !== null ? R.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return oe !== null ? null : S(w, R, "" + k, Y);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ve:
            return k.key === oe ? C(w, R, k, Y) : null;
          case Rt:
            return k.key === oe ? L(w, R, k, Y) : null;
          case xt:
            return oe = k._init, H(
              w,
              R,
              oe(k._payload),
              Y
            );
        }
        if (qa(k) || ye(k))
          return oe !== null ? null : F(w, R, k, Y, null);
        Gs(w, k);
      }
      return null;
    }
    function q(w, R, k, Y, oe) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number")
        return w = w.get(k) || null, S(R, w, "" + Y, oe);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case Ve:
            return w = w.get(Y.key === null ? k : Y.key) || null, C(R, w, Y, oe);
          case Rt:
            return w = w.get(Y.key === null ? k : Y.key) || null, L(R, w, Y, oe);
          case xt:
            var ae = Y._init;
            return q(w, R, k, ae(Y._payload), oe);
        }
        if (qa(Y) || ye(Y))
          return w = w.get(k) || null, F(R, w, Y, oe, null);
        Gs(R, Y);
      }
      return null;
    }
    function re(w, R, k, Y) {
      for (var oe = null, ae = null, pe = R, De = R = 0, Cn = null; pe !== null && De < k.length; De++) {
        pe.index > De ? (Cn = pe, pe = null) : Cn = pe.sibling;
        var qe = H(w, pe, k[De], Y);
        if (qe === null) {
          pe === null && (pe = Cn);
          break;
        }
        n && pe && qe.alternate === null && r(w, pe), R = d(qe, R, De), ae === null ? oe = qe : ae.sibling = qe, ae = qe, pe = Cn;
      }
      if (De === k.length)
        return l(w, pe), Dt && zr(w, De), oe;
      if (pe === null) {
        for (; De < k.length; De++)
          pe = V(w, k[De], Y), pe !== null && (R = d(pe, R, De), ae === null ? oe = pe : ae.sibling = pe, ae = pe);
        return Dt && zr(w, De), oe;
      }
      for (pe = o(w, pe); De < k.length; De++)
        Cn = q(pe, w, De, k[De], Y), Cn !== null && (n && Cn.alternate !== null && pe.delete(Cn.key === null ? De : Cn.key), R = d(Cn, R, De), ae === null ? oe = Cn : ae.sibling = Cn, ae = Cn);
      return n && pe.forEach(function(Ji) {
        return r(w, Ji);
      }), Dt && zr(w, De), oe;
    }
    function ue(w, R, k, Y) {
      var oe = ye(k);
      if (typeof oe != "function")
        throw Error(M(150));
      if (k = oe.call(k), k == null)
        throw Error(M(151));
      for (var ae = oe = null, pe = R, De = R = 0, Cn = null, qe = k.next(); pe !== null && !qe.done; De++, qe = k.next()) {
        pe.index > De ? (Cn = pe, pe = null) : Cn = pe.sibling;
        var Ji = H(w, pe, qe.value, Y);
        if (Ji === null) {
          pe === null && (pe = Cn);
          break;
        }
        n && pe && Ji.alternate === null && r(w, pe), R = d(Ji, R, De), ae === null ? oe = Ji : ae.sibling = Ji, ae = Ji, pe = Cn;
      }
      if (qe.done)
        return l(
          w,
          pe
        ), Dt && zr(w, De), oe;
      if (pe === null) {
        for (; !qe.done; De++, qe = k.next())
          qe = V(w, qe.value, Y), qe !== null && (R = d(qe, R, De), ae === null ? oe = qe : ae.sibling = qe, ae = qe);
        return Dt && zr(w, De), oe;
      }
      for (pe = o(w, pe); !qe.done; De++, qe = k.next())
        qe = q(pe, w, De, qe.value, Y), qe !== null && (n && qe.alternate !== null && pe.delete(qe.key === null ? De : qe.key), R = d(qe, R, De), ae === null ? oe = qe : ae.sibling = qe, ae = qe);
      return n && pe.forEach(function(gy) {
        return r(w, gy);
      }), Dt && zr(w, De), oe;
    }
    function Wt(w, R, k, Y) {
      if (typeof k == "object" && k !== null && k.type === Ae && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ve:
            e: {
              for (var oe = k.key, ae = R; ae !== null; ) {
                if (ae.key === oe) {
                  if (oe = k.type, oe === Ae) {
                    if (ae.tag === 7) {
                      l(w, ae.sibling), R = c(ae, k.props.children), R.return = w, w = R;
                      break e;
                    }
                  } else if (ae.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === xt && kv(oe) === ae.type) {
                    l(w, ae.sibling), R = c(ae, k.props), R.ref = Eu(w, ae, k), R.return = w, w = R;
                    break e;
                  }
                  l(w, ae);
                  break;
                } else
                  r(w, ae);
                ae = ae.sibling;
              }
              k.type === Ae ? (R = Pl(k.props.children, w.mode, Y, k.key), R.return = w, w = R) : (Y = Dc(k.type, k.key, k.props, null, w.mode, Y), Y.ref = Eu(w, R, k), Y.return = w, w = Y);
            }
            return h(w);
          case Rt:
            e: {
              for (ae = k.key; R !== null; ) {
                if (R.key === ae)
                  if (R.tag === 4 && R.stateNode.containerInfo === k.containerInfo && R.stateNode.implementation === k.implementation) {
                    l(w, R.sibling), R = c(R, k.children || []), R.return = w, w = R;
                    break e;
                  } else {
                    l(w, R);
                    break;
                  }
                else
                  r(w, R);
                R = R.sibling;
              }
              R = Yl(k, w.mode, Y), R.return = w, w = R;
            }
            return h(w);
          case xt:
            return ae = k._init, Wt(w, R, ae(k._payload), Y);
        }
        if (qa(k))
          return re(w, R, k, Y);
        if (ye(k))
          return ue(w, R, k, Y);
        Gs(w, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, R !== null && R.tag === 6 ? (l(w, R.sibling), R = c(R, k), R.return = w, w = R) : (l(w, R), R = Xo(k, w.mode, Y), R.return = w, w = R), h(w)) : l(w, R);
    }
    return Wt;
  }
  var Cu = _v(!0), Ov = _v(!1), Lo = {}, Da = Le(Lo), Mo = Le(Lo), Tu = Le(Lo);
  function wl(n) {
    if (n === Lo)
      throw Error(M(174));
    return n;
  }
  function ed(n, r) {
    switch (lt(Tu, r), lt(Mo, n), lt(Da, Lo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Xt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Xt(r, n);
    }
    it(Da), lt(Da, r);
  }
  function $i() {
    it(Da), it(Mo), it(Tu);
  }
  function Se(n) {
    wl(Tu.current);
    var r = wl(Da.current), l = Xt(r, n.type);
    r !== l && (lt(Mo, n), lt(Da, l));
  }
  function Fe(n) {
    Mo.current === n && (it(Da), it(Mo));
  }
  var Ce = Le(0);
  function Ft(n) {
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
  var na = [];
  function Xs() {
    for (var n = 0; n < na.length; n++)
      na[n]._workInProgressVersionPrimary = null;
    na.length = 0;
  }
  var qs = mt.ReactCurrentDispatcher, td = mt.ReactCurrentBatchConfig, Dl = 0, bt = null, U = null, Ie = null, Te = !1, ja = !1, Hr = 0, bl = 0;
  function kt() {
    throw Error(M(321));
  }
  function kl(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!qr(n[l], r[l]))
        return !1;
    return !0;
  }
  function Qi(n, r, l, o, c, d) {
    if (Dl = d, bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, qs.current = n === null || n.memoizedState === null ? ey : ty, n = l(o, c), ja) {
      d = 0;
      do {
        if (ja = !1, Hr = 0, 25 <= d)
          throw Error(M(301));
        d += 1, Ie = U = null, r.updateQueue = null, qs.current = rd, n = l(o, c);
      } while (ja);
    }
    if (qs.current = dc, r = U !== null && U.next !== null, Dl = 0, Ie = U = bt = null, Te = !1, r)
      throw Error(M(300));
    return n;
  }
  function _l() {
    var n = Hr !== 0;
    return Hr = 0, n;
  }
  function ra() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ie === null ? bt.memoizedState = Ie = n : Ie = Ie.next = n, Ie;
  }
  function Sr() {
    if (U === null) {
      var n = bt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = U.next;
    var r = Ie === null ? bt.memoizedState : Ie.next;
    if (r !== null)
      Ie = r, U = n;
    else {
      if (n === null)
        throw Error(M(310));
      U = n, n = { memoizedState: U.memoizedState, baseState: U.baseState, baseQueue: U.baseQueue, queue: U.queue, next: null }, Ie === null ? bt.memoizedState = Ie = n : Ie = Ie.next = n;
    }
    return Ie;
  }
  function Ol(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function No(n) {
    var r = Sr(), l = r.queue;
    if (l === null)
      throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = U, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, L = d;
      do {
        var F = L.lane;
        if ((Dl & F) === F)
          C !== null && (C = C.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), o = L.hasEagerState ? L.eagerState : n(o, L.action);
        else {
          var V = {
            lane: F,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          C === null ? (S = C = V, h = o) : C = C.next = V, bt.lanes |= F, fi |= F;
        }
        L = L.next;
      } while (L !== null && L !== d);
      C === null ? h = o : C.next = S, qr(o, r.memoizedState) || (Jt = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, bt.lanes |= d, fi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function zo(n) {
    var r = Sr(), l = r.queue;
    if (l === null)
      throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      qr(d, r.memoizedState) || (Jt = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Ks() {
  }
  function Js(n, r) {
    var l = bt, o = Sr(), c = r(), d = !qr(o.memoizedState, c);
    if (d && (o.memoizedState = c, Jt = !0), o = o.queue, Uo(tc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ie !== null && Ie.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ll(9, ec.bind(null, l, o, c, r), void 0, null), jt === null)
        throw Error(M(349));
      Dl & 30 || Zs(l, r, c);
    }
    return c;
  }
  function Zs(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, bt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function ec(n, r, l, o) {
    r.value = l, r.getSnapshot = o, nc(r) && rc(n);
  }
  function tc(n, r, l) {
    return l(function() {
      nc(r) && rc(n);
    });
  }
  function nc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !qr(n, l);
    } catch {
      return !0;
    }
  }
  function rc(n) {
    var r = li(n, 1);
    r !== null && Xn(r, n, 1, -1);
  }
  function ac(n) {
    var r = ra();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ol, lastRenderedState: n }, r.queue = n, n = n.dispatch = fc.bind(null, bt, n), [r.memoizedState, n];
  }
  function Ll(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, bt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function ic() {
    return Sr().memoizedState;
  }
  function Ml(n, r, l, o) {
    var c = ra();
    bt.flags |= n, c.memoizedState = Ll(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function oi(n, r, l, o) {
    var c = Sr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (U !== null) {
      var h = U.memoizedState;
      if (d = h.destroy, o !== null && kl(o, h.deps)) {
        c.memoizedState = Ll(r, l, d, o);
        return;
      }
    }
    bt.flags |= n, c.memoizedState = Ll(1 | r, l, d, o);
  }
  function lc(n, r) {
    return Ml(8390656, 8, n, r);
  }
  function Uo(n, r) {
    return oi(2048, 8, n, r);
  }
  function uc(n, r) {
    return oi(4, 2, n, r);
  }
  function oc(n, r) {
    return oi(4, 4, n, r);
  }
  function nd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ru(n, r, l) {
    return l = l != null ? l.concat([n]) : null, oi(4, 4, nd.bind(null, r, n), l);
  }
  function sc() {
  }
  function xu(n, r) {
    var l = Sr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && kl(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ii(n, r) {
    var l = Sr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && kl(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Er(n, r, l) {
    return Dl & 21 ? (qr(l, r) || (l = Ss(), bt.lanes |= l, fi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Jt = !0), n.memoizedState = l);
  }
  function Zm(n, r) {
    var l = ct;
    ct = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = td.transition;
    td.transition = {};
    try {
      n(!1), r();
    } finally {
      ct = l, td.transition = o;
    }
  }
  function Et() {
    return Sr().memoizedState;
  }
  function cc(n, r, l) {
    var o = Zt(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wu(n))
      Ao(r, l);
    else if (l = Rv(n, r, l, o), l !== null) {
      var c = Gn();
      Xn(l, n, o, c), Lv(l, r, o);
    }
  }
  function fc(n, r, l) {
    var o = Zt(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wu(n))
      Ao(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, qr(S, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, qf(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Rv(n, r, c, o), l !== null && (c = Gn(), Xn(l, n, o, c), Lv(l, r, o));
    }
  }
  function wu(n) {
    var r = n.alternate;
    return n === bt || r !== null && r === bt;
  }
  function Ao(n, r) {
    ja = Te = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Lv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, uo(n, l);
    }
  }
  var dc = { readContext: It, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, ey = { readContext: It, useCallback: function(n, r) {
    return ra().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: It, useEffect: lc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ml(
      4194308,
      4,
      nd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Ml(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ml(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = ra();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = ra();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = cc.bind(null, bt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ra();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ac, useDebugValue: sc, useDeferredValue: function(n) {
    return ra().memoizedState = n;
  }, useTransition: function() {
    var n = ac(!1), r = n[0];
    return n = Zm.bind(null, n[1]), ra().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = bt, c = ra();
    if (Dt) {
      if (l === void 0)
        throw Error(M(407));
      l = l();
    } else {
      if (l = r(), jt === null)
        throw Error(M(349));
      Dl & 30 || Zs(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, lc(tc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ll(9, ec.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ra(), r = jt.identifierPrefix;
    if (Dt) {
      var l = ii, o = bn;
      l = (o & ~(1 << 32 - Wr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Hr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = bl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ty = {
    readContext: It,
    useCallback: xu,
    useContext: It,
    useEffect: Uo,
    useImperativeHandle: Ru,
    useInsertionEffect: uc,
    useLayoutEffect: oc,
    useMemo: Ii,
    useReducer: No,
    useRef: ic,
    useState: function() {
      return No(Ol);
    },
    useDebugValue: sc,
    useDeferredValue: function(n) {
      var r = Sr();
      return Er(r, U.memoizedState, n);
    },
    useTransition: function() {
      var n = No(Ol)[0], r = Sr().memoizedState;
      return [n, r];
    },
    useMutableSource: Ks,
    useSyncExternalStore: Js,
    useId: Et,
    unstable_isNewReconciler: !1
  }, rd = { readContext: It, useCallback: xu, useContext: It, useEffect: Uo, useImperativeHandle: Ru, useInsertionEffect: uc, useLayoutEffect: oc, useMemo: Ii, useReducer: zo, useRef: ic, useState: function() {
    return zo(Ol);
  }, useDebugValue: sc, useDeferredValue: function(n) {
    var r = Sr();
    return U === null ? r.memoizedState = n : Er(r, U.memoizedState, n);
  }, useTransition: function() {
    var n = zo(Ol)[0], r = Sr().memoizedState;
    return [n, r];
  }, useMutableSource: Ks, useSyncExternalStore: Js, useId: Et, unstable_isNewReconciler: !1 };
  function Du(n, r) {
    try {
      var l = "", o = r;
      do
        l += La(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ho(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function pc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ny = typeof WeakMap == "function" ? WeakMap : Map;
  function Mv(n, r, l) {
    l = ui(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Ec || (Ec = !0, Hl = o), pc(n, r);
    }, l;
  }
  function Fo(n, r, l) {
    l = ui(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        pc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      pc(n, r), typeof o != "function" && (Pa === null ? Pa = /* @__PURE__ */ new Set([this]) : Pa.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function Nv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ny();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = sy.bind(null, n, r, l), r.then(n, n));
  }
  function ad(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function id(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ui(-1, 1), r.tag = 2, Pi(l, r, 1))), l.lanes |= 1), n);
  }
  var ry = mt.ReactCurrentOwner, Jt = !1;
  function an(n, r, l, o) {
    r.child = n === null ? Ov(r, null, l, o) : Cu(r, n.child, l, o);
  }
  function Wi(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Q(r, c), o = Qi(n, r, l, o, d, c), l = _l(), n !== null && !Jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, _n(n, r, c)) : (Dt && l && js(r), r.flags |= 1, an(n, r, o, c), r.child);
  }
  function vc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !xd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Cr(n, r, d, o, c)) : (n = Dc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : So, l(h, o) && n.ref === r.ref)
        return _n(n, r, c);
    }
    return r.flags |= 1, n = Ki(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Cr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (So(d, o) && n.ref === r.ref)
        if (Jt = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Jt = !0);
        else
          return r.lanes = n.lanes, _n(n, r, c);
    }
    return bu(n, r, l, o, c);
  }
  function Nl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, lt(Nu, Fr), Fr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, lt(Nu, Fr), Fr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, lt(Nu, Fr), Fr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, lt(Nu, Fr), Fr |= o;
    return an(n, r, c, l), r.child;
  }
  function Me(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function bu(n, r, l, o, c) {
    var d = Nt(l) ? vr : we.current;
    return d = Jr(r, d), Q(r, c), l = Qi(n, r, l, o, d, c), o = _l(), n !== null && !Jt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, _n(n, r, c)) : (Dt && o && js(r), r.flags |= 1, an(n, r, l, c), r.child);
  }
  function ld(n, r, l, o, c) {
    if (Nt(l)) {
      var d = !0;
      Fs(r);
    } else
      d = !1;
    if (Q(r, c), r.stateNode === null)
      Qn(n, r), Dv(r, l, o), Ws(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, L = l.contextType;
      typeof L == "object" && L !== null ? L = It(L) : (L = Nt(l) ? vr : we.current, L = Jr(r, L));
      var F = l.getDerivedStateFromProps, V = typeof F == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      V || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== L) && bv(r, h, o, L), Bi = !1;
      var H = r.memoizedState;
      h.state = H, Yi(r, o, h, c), C = r.memoizedState, S !== o || H !== C || Pt.current || Bi ? (typeof F == "function" && (Zf(r, l, F, o), C = r.memoizedState), (S = Bi || wv(r, l, S, o, H, C, L)) ? (V || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = L, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, rn(n, r), S = r.memoizedProps, L = r.type === r.elementType ? S : Ar(r.type, S), h.props = L, V = r.pendingProps, H = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = It(C) : (C = Nt(l) ? vr : we.current, C = Jr(r, C));
      var q = l.getDerivedStateFromProps;
      (F = typeof q == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== V || H !== C) && bv(r, h, o, C), Bi = !1, H = r.memoizedState, h.state = H, Yi(r, o, h, c);
      var re = r.memoizedState;
      S !== V || H !== re || Pt.current || Bi ? (typeof q == "function" && (Zf(r, l, q, o), re = r.memoizedState), (L = Bi || wv(r, l, L, o, H, re, C) || !1) ? (F || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, re, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, re, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = re), h.props = o, h.state = re, h.context = C, o = L) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return zv(n, r, l, o, d, c);
  }
  function zv(n, r, l, o, c, d) {
    Me(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && Sv(r, l, !1), _n(n, r, d);
    o = r.stateNode, ry.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = Cu(r, n.child, null, d), r.child = Cu(r, null, S, d)) : an(n, r, S, d), r.memoizedState = o.state, c && Sv(r, l, !0), r.child;
  }
  function Uv(n) {
    var r = n.stateNode;
    r.pendingContext ? Hi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hi(n, r.context, !1), ed(n, r.containerInfo);
  }
  function hc(n, r, l, o, c) {
    return Ht(), Wf(c), r.flags |= 256, an(n, r, l, o), r.child;
  }
  var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ud(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function od(n, r, l) {
    var o = r.pendingProps, c = Ce.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), lt(Ce, c & 1), n === null)
      return Bs(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Go(h, o, 0, null), n = Pl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = ud(l), r.memoizedState = zl, n) : sd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return ay(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = Ki(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Ki(S, d) : (d = Pl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? ud(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = zl, o;
    }
    return d = n.child, n = d.sibling, o = Ki(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function sd(n, r) {
    return r = Go({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ku(n, r, l, o) {
    return o !== null && Wf(o), Cu(r, n.child, null, l), n = sd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ay(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ho(Error(M(422))), ku(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Go({ mode: "visible", children: o.children }, c, 0, null), d = Pl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Cu(r, n.child, null, h), r.child.memoizedState = ud(h), r.memoizedState = zl, d);
    if (!(r.mode & 1))
      return ku(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(M(419)), o = Ho(d, o, void 0), ku(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Jt || S) {
      if (o = jt, o !== null) {
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, li(n, c), Xn(o, n, c, -1));
      }
      return Cd(), o = Ho(Error(M(421))), ku(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, gr = wa(c.nextSibling), Ur = r, Dt = !0, ta = null, n !== null && (yr[$n++] = bn, yr[$n++] = ii, yr[$n++] = ea, bn = n.id, ii = n.overflow, ea = r), r = sd(r, o.children), r.flags |= 4096, r);
  }
  function cd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), gn(n.return, r, l);
  }
  function mc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function fd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (an(n, r, o.children, l), o = Ce.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && cd(n, l, r);
            else if (n.tag === 19)
              cd(n, l, r);
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
    if (lt(Ce, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Ft(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), mc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Ft(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          mc(r, !0, l, null, d);
          break;
        case "together":
          mc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Qn(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function _n(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), fi |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(M(153));
    if (r.child !== null) {
      for (n = r.child, l = Ki(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Ki(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function si(n, r, l) {
    switch (r.tag) {
      case 3:
        Uv(r), Ht();
        break;
      case 5:
        Se(r);
        break;
      case 1:
        Nt(r.type) && Fs(r);
        break;
      case 4:
        ed(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        lt(Fa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (lt(Ce, Ce.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? od(n, r, l) : (lt(Ce, Ce.current & 1), n = _n(n, r, l), n !== null ? n.sibling : null);
        lt(Ce, Ce.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return fd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), lt(Ce, Ce.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Nl(n, r, l);
    }
    return _n(n, r, l);
  }
  var jo, Ul, aa, ln;
  jo = function(n, r) {
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
  }, Ul = function() {
  }, aa = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, wl(Da.current);
      var d = null;
      switch (l) {
        case "input":
          c = Vn(n, c), o = Vn(n, o), d = [];
          break;
        case "select":
          c = J({}, c, { value: void 0 }), o = J({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ma(n, c), o = ma(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Hs);
      }
      pn(l, o);
      var h;
      l = null;
      for (L in c)
        if (!o.hasOwnProperty(L) && c.hasOwnProperty(L) && c[L] != null)
          if (L === "style") {
            var S = c[L];
            for (h in S)
              S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (Ut.hasOwnProperty(L) ? d || (d = []) : (d = d || []).push(L, null));
      for (L in o) {
        var C = o[L];
        if (S = c != null ? c[L] : void 0, o.hasOwnProperty(L) && C !== S && (C != null || S != null))
          if (L === "style")
            if (S) {
              for (h in S)
                !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                L,
                l
              )), l = C;
          else
            L === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(L, C)) : L === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(L, "" + C) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (Ut.hasOwnProperty(L) ? (C != null && L === "onScroll" && St("scroll", n), d || S === C || (d = [])) : (d = d || []).push(L, C));
      }
      l && (d = d || []).push("style", l);
      var L = d;
      (r.updateQueue = L) && (r.flags |= 4);
    }
  }, ln = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Vo(n, r) {
    if (!Dt)
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
  function In(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function iy(n, r, l) {
    var o = r.pendingProps;
    switch (Qf(r), r.tag) {
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
        return In(r), null;
      case 1:
        return Nt(r.type) && Zr(), In(r), null;
      case 3:
        return o = r.stateNode, $i(), it(Pt), it(we), Xs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ps(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ta !== null && (Wo(ta), ta = null))), Ul(n, r), In(r), null;
      case 5:
        Fe(r);
        var c = wl(Tu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          aa(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(M(166));
            return In(r), null;
          }
          if (n = wl(Da.current), Ps(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Aa] = r, o[Tl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                St("cancel", o), St("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                St("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ro.length; c++)
                  St(Ro[c], o);
                break;
              case "source":
                St("error", o);
                break;
              case "img":
              case "image":
              case "link":
                St(
                  "error",
                  o
                ), St("load", o);
                break;
              case "details":
                St("toggle", o);
                break;
              case "input":
                Dn(o, d), St("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, St("invalid", o);
                break;
              case "textarea":
                br(o, d), St("invalid", o);
            }
            pn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && As(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && As(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : Ut.hasOwnProperty(h) && S != null && h === "onScroll" && St("scroll", o);
              }
            switch (l) {
              case "input":
                fr(o), Ir(o, d, !0);
                break;
              case "textarea":
                fr(o), kr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Hs);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ya(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Aa] = r, n[Tl] = o, jo(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Qt(l, o), l) {
                case "dialog":
                  St("cancel", n), St("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  St("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ro.length; c++)
                    St(Ro[c], n);
                  c = o;
                  break;
                case "source":
                  St("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  St(
                    "error",
                    n
                  ), St("load", n), c = o;
                  break;
                case "details":
                  St("toggle", n), c = o;
                  break;
                case "input":
                  Dn(n, o), c = Vn(n, o), St("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = J({}, o, { value: void 0 }), St("invalid", n);
                  break;
                case "textarea":
                  br(n, o), c = ma(n, o), St("invalid", n);
                  break;
                default:
                  c = o;
              }
              pn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? st(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && wi(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && ga(n, C) : typeof C == "number" && ga(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ut.hasOwnProperty(d) ? C != null && d === "onScroll" && St("scroll", n) : C != null && je(n, d, C, h));
                }
              switch (l) {
                case "input":
                  fr(n), Ir(n, o, !1);
                  break;
                case "textarea":
                  fr(n), kr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + jn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Na(n, !!o.multiple, d, !1) : o.defaultValue != null && Na(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Hs);
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
        return In(r), null;
      case 6:
        if (n && r.stateNode != null)
          ln(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(M(166));
          if (l = wl(Tu.current), wl(Da.current), Ps(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Aa] = r, (d = o.nodeValue !== l) && (n = Ur, n !== null))
              switch (n.tag) {
                case 3:
                  As(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && As(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Aa] = r, r.stateNode = o;
        }
        return In(r), null;
      case 13:
        if (it(Ce), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Dt && gr !== null && r.mode & 1 && !(r.flags & 128))
            Tv(), Ht(), r.flags |= 98560, d = !1;
          else if (d = Ps(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(M(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(M(317));
              d[Aa] = r;
            } else
              Ht(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            In(r), d = !1;
          } else
            ta !== null && (Wo(ta), ta = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ce.current & 1 ? on === 0 && (on = 3) : Cd())), r.updateQueue !== null && (r.flags |= 4), In(r), null);
      case 4:
        return $i(), Ul(n, r), n === null && yu(r.stateNode.containerInfo), In(r), null;
      case 10:
        return Vi(r.type._context), In(r), null;
      case 17:
        return Nt(r.type) && Zr(), In(r), null;
      case 19:
        if (it(Ce), d = r.memoizedState, d === null)
          return In(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            Vo(d, !1);
          else {
            if (on !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = Ft(n), h !== null) {
                  for (r.flags |= 128, Vo(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return lt(Ce, Ce.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Ze() > Uu && (r.flags |= 128, o = !0, Vo(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Ft(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Vo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !Dt)
                return In(r), null;
            } else
              2 * Ze() - d.renderingStartTime > Uu && l !== 1073741824 && (r.flags |= 128, o = !0, Vo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ze(), r.sibling = null, l = Ce.current, lt(Ce, o ? l & 1 | 2 : l & 1), r) : (In(r), null);
      case 22:
      case 23:
        return Ed(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Fr & 1073741824 && (In(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : In(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(M(156, r.tag));
  }
  function dd(n, r) {
    switch (Qf(r), r.tag) {
      case 1:
        return Nt(r.type) && Zr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return $i(), it(Pt), it(we), Xs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Fe(r), null;
      case 13:
        if (it(Ce), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(M(340));
          Ht();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return it(Ce), null;
      case 4:
        return $i(), null;
      case 10:
        return Vi(r.type._context), null;
      case 22:
      case 23:
        return Ed(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bo = !1, un = !1, Av = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
  function _u(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          $t(n, r, o);
        }
      else
        l.current = null;
  }
  function Po(n, r, l) {
    try {
      l();
    } catch (o) {
      $t(n, r, o);
    }
  }
  var Hv = !1;
  function Fv(n, r) {
    if (Hf = hl, n = Ls(), ti(n)) {
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
            var h = 0, S = -1, C = -1, L = 0, F = 0, V = n, H = null;
            t:
              for (; ; ) {
                for (var q; V !== l || c !== 0 && V.nodeType !== 3 || (S = h + c), V !== d || o !== 0 && V.nodeType !== 3 || (C = h + o), V.nodeType === 3 && (h += V.nodeValue.length), (q = V.firstChild) !== null; )
                  H = V, V = q;
                for (; ; ) {
                  if (V === n)
                    break t;
                  if (H === l && ++L === c && (S = h), H === d && ++F === o && (C = h), (q = V.nextSibling) !== null)
                    break;
                  V = H, H = V.parentNode;
                }
                V = q;
              }
            l = S === -1 || C === -1 ? null : { start: S, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (El = { focusedElem: n, selectionRange: l }, hl = !1, ne = r; ne !== null; )
      if (r = ne, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ne = n;
      else
        for (; ne !== null; ) {
          r = ne;
          try {
            var re = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (re !== null) {
                    var ue = re.memoizedProps, Wt = re.memoizedState, w = r.stateNode, R = w.getSnapshotBeforeUpdate(r.elementType === r.type ? ue : Ar(r.type, ue), Wt);
                    w.__reactInternalSnapshotBeforeUpdate = R;
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
                  throw Error(M(163));
              }
          } catch (Y) {
            $t(r, r.return, Y);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ne = n;
            break;
          }
          ne = r.return;
        }
    return re = Hv, Hv = !1, re;
  }
  function Yo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Po(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function $o(n, r) {
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
  function pd(n) {
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
  function vd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, vd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Aa], delete r[Tl], delete r[Vf], delete r[Jm], delete r[Bf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function jv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function yc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || jv(n.return))
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
  function Ou(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Hs));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ou(n, r, l), n = n.sibling; n !== null; )
        Ou(n, r, l), n = n.sibling;
  }
  function Va(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Va(n, r, l), n = n.sibling; n !== null; )
        Va(n, r, l), n = n.sibling;
  }
  var zt = null, Sn = !1;
  function ia(n, r, l) {
    for (l = l.child; l !== null; )
      Lu(n, r, l), l = l.sibling;
  }
  function Lu(n, r, l) {
    if (Ea && typeof Ea.onCommitFiberUnmount == "function")
      try {
        Ea.onCommitFiberUnmount(lo, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        un || _u(l, r);
      case 6:
        var o = zt, c = Sn;
        zt = null, ia(n, r, l), zt = o, Sn = c, zt !== null && (Sn ? (n = zt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : zt.removeChild(l.stateNode));
        break;
      case 18:
        zt !== null && (Sn ? (n = zt, l = l.stateNode, n.nodeType === 8 ? zi(n.parentNode, l) : n.nodeType === 1 && zi(n, l), fo(n)) : zi(zt, l.stateNode));
        break;
      case 4:
        o = zt, c = Sn, zt = l.stateNode.containerInfo, Sn = !0, ia(n, r, l), zt = o, Sn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!un && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && Po(l, r, h), c = c.next;
          } while (c !== o);
        }
        ia(n, r, l);
        break;
      case 1:
        if (!un && (_u(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (S) {
            $t(l, r, S);
          }
        ia(n, r, l);
        break;
      case 21:
        ia(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (un = (o = un) || l.memoizedState !== null, ia(n, r, l), un = o) : ia(n, r, l);
        break;
      default:
        ia(n, r, l);
    }
  }
  function ci(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Av()), r.forEach(function(o) {
        var c = fy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ba(n, r) {
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
                  zt = S.stateNode, Sn = !1;
                  break e;
                case 3:
                  zt = S.stateNode.containerInfo, Sn = !0;
                  break e;
                case 4:
                  zt = S.stateNode.containerInfo, Sn = !0;
                  break e;
              }
              S = S.return;
            }
          if (zt === null)
            throw Error(M(160));
          Lu(d, h, c), zt = null, Sn = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (L) {
          $t(c, r, L);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Vv(r, n), r = r.sibling;
  }
  function Vv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ba(r, n), Ba(n), o & 4) {
          try {
            Yo(3, n, n.return), $o(3, n);
          } catch (ue) {
            $t(n, n.return, ue);
          }
          try {
            Yo(5, n, n.return);
          } catch (ue) {
            $t(n, n.return, ue);
          }
        }
        break;
      case 1:
        ba(r, n), Ba(n), o & 512 && l !== null && _u(l, l.return);
        break;
      case 5:
        if (ba(r, n), Ba(n), o & 512 && l !== null && _u(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ga(c, "");
          } catch (ue) {
            $t(n, n.return, ue);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && Bn(c, d), Qt(S, h);
              var L = Qt(S, d);
              for (h = 0; h < C.length; h += 2) {
                var F = C[h], V = C[h + 1];
                F === "style" ? st(c, V) : F === "dangerouslySetInnerHTML" ? wi(c, V) : F === "children" ? ga(c, V) : je(c, F, V, L);
              }
              switch (S) {
                case "input":
                  Pn(c, d);
                  break;
                case "textarea":
                  za(c, d);
                  break;
                case "select":
                  var H = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var q = d.value;
                  q != null ? Na(c, !!d.multiple, q, !1) : H !== !!d.multiple && (d.defaultValue != null ? Na(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Na(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Tl] = d;
            } catch (ue) {
              $t(n, n.return, ue);
            }
        }
        break;
      case 6:
        if (ba(r, n), Ba(n), o & 4) {
          if (n.stateNode === null)
            throw Error(M(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ue) {
            $t(n, n.return, ue);
          }
        }
        break;
      case 3:
        if (ba(r, n), Ba(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            fo(r.containerInfo);
          } catch (ue) {
            $t(n, n.return, ue);
          }
        break;
      case 4:
        ba(r, n), Ba(n);
        break;
      case 13:
        ba(r, n), Ba(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (yd = Ze())), o & 4 && ci(n);
        break;
      case 22:
        if (F = l !== null && l.memoizedState !== null, n.mode & 1 ? (un = (L = un) || F, ba(r, n), un = L) : ba(r, n), Ba(n), o & 8192) {
          if (L = n.memoizedState !== null, (n.stateNode.isHidden = L) && !F && n.mode & 1)
            for (ne = n, F = n.child; F !== null; ) {
              for (V = ne = F; ne !== null; ) {
                switch (H = ne, q = H.child, H.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Yo(4, H, H.return);
                    break;
                  case 1:
                    _u(H, H.return);
                    var re = H.stateNode;
                    if (typeof re.componentWillUnmount == "function") {
                      o = H, l = H.return;
                      try {
                        r = o, re.props = r.memoizedProps, re.state = r.memoizedState, re.componentWillUnmount();
                      } catch (ue) {
                        $t(o, l, ue);
                      }
                    }
                    break;
                  case 5:
                    _u(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      hd(V);
                      continue;
                    }
                }
                q !== null ? (q.return = H, ne = q) : hd(V);
              }
              F = F.sibling;
            }
          e:
            for (F = null, V = n; ; ) {
              if (V.tag === 5) {
                if (F === null) {
                  F = V;
                  try {
                    c = V.stateNode, L ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = V.stateNode, C = V.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = He("display", h));
                  } catch (ue) {
                    $t(n, n.return, ue);
                  }
                }
              } else if (V.tag === 6) {
                if (F === null)
                  try {
                    V.stateNode.nodeValue = L ? "" : V.memoizedProps;
                  } catch (ue) {
                    $t(n, n.return, ue);
                  }
              } else if ((V.tag !== 22 && V.tag !== 23 || V.memoizedState === null || V === n) && V.child !== null) {
                V.child.return = V, V = V.child;
                continue;
              }
              if (V === n)
                break e;
              for (; V.sibling === null; ) {
                if (V.return === null || V.return === n)
                  break e;
                F === V && (F = null), V = V.return;
              }
              F === V && (F = null), V.sibling.return = V.return, V = V.sibling;
            }
        }
        break;
      case 19:
        ba(r, n), Ba(n), o & 4 && ci(n);
        break;
      case 21:
        break;
      default:
        ba(
          r,
          n
        ), Ba(n);
    }
  }
  function Ba(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (jv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(M(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ga(c, ""), o.flags &= -33);
            var d = yc(n);
            Va(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = yc(n);
            Ou(n, S, h);
            break;
          default:
            throw Error(M(161));
        }
      } catch (C) {
        $t(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Bv(n, r, l) {
    ne = n, Mu(n);
  }
  function Mu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ne !== null; ) {
      var c = ne, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Bo;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || un;
          S = Bo;
          var L = un;
          if (Bo = h, (un = C) && !L)
            for (ne = c; ne !== null; )
              h = ne, C = h.child, h.tag === 22 && h.memoizedState !== null ? Yv(c) : C !== null ? (C.return = h, ne = C) : Yv(c);
          for (; d !== null; )
            ne = d, Mu(d), d = d.sibling;
          ne = c, Bo = S, un = L;
        }
        Pv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, ne = d) : Pv(n);
    }
  }
  function Pv(n) {
    for (; ne !== null; ) {
      var r = ne;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                un || $o(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !un)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Ar(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && xl(r, d, o);
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
                  xl(r, h, l);
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
                  var L = r.alternate;
                  if (L !== null) {
                    var F = L.memoizedState;
                    if (F !== null) {
                      var V = F.dehydrated;
                      V !== null && fo(V);
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
                throw Error(M(163));
            }
          un || r.flags & 512 && pd(r);
        } catch (H) {
          $t(r, r.return, H);
        }
      }
      if (r === n) {
        ne = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ne = l;
        break;
      }
      ne = r.return;
    }
  }
  function hd(n) {
    for (; ne !== null; ) {
      var r = ne;
      if (r === n) {
        ne = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ne = l;
        break;
      }
      ne = r.return;
    }
  }
  function Yv(n) {
    for (; ne !== null; ) {
      var r = ne;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              $o(4, r);
            } catch (C) {
              $t(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                $t(r, c, C);
              }
            }
            var d = r.return;
            try {
              pd(r);
            } catch (C) {
              $t(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              pd(r);
            } catch (C) {
              $t(r, h, C);
            }
        }
      } catch (C) {
        $t(r, r.return, C);
      }
      if (r === n) {
        ne = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, ne = S;
        break;
      }
      ne = r.return;
    }
  }
  var gc = Math.ceil, Qo = mt.ReactCurrentDispatcher, md = mt.ReactCurrentOwner, Wn = mt.ReactCurrentBatchConfig, Pe = 0, jt = null, Yt = null, En = 0, Fr = 0, Nu = Le(0), on = 0, Io = null, fi = 0, Sc = 0, zu = 0, Al = null, er = null, yd = 0, Uu = 1 / 0, di = null, Ec = !1, Hl = null, Pa = null, Gi = !1, Xi = null, Cc = 0, Au = 0, Tc = null, Fl = -1, jl = 0;
  function Gn() {
    return Pe & 6 ? Ze() : Fl !== -1 ? Fl : Fl = Ze();
  }
  function Zt(n) {
    return n.mode & 1 ? Pe & 2 && En !== 0 ? En & -En : Ys.transition !== null ? (jl === 0 && (jl = Ss()), jl) : (n = ct, n !== 0 || (n = window.event, n = n === void 0 ? 16 : yf(n.type)), n) : 1;
  }
  function Xn(n, r, l, o) {
    if (50 < Au)
      throw Au = 0, Tc = null, Error(M(185));
    vl(n, l, o), (!(Pe & 2) || n !== jt) && (n === jt && (!(Pe & 2) && (Sc |= l), on === 4 && la(n, En)), qn(n, o), l === 1 && Pe === 0 && !(r.mode & 1) && (Uu = Ze() + 500, yn && hr()));
  }
  function qn(n, r) {
    var l = n.callbackNode;
    gs(n, r);
    var o = Ca(n, n === jt ? En : 0);
    if (o === 0)
      l !== null && Zn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Zn(l), r === 1)
        n.tag === 0 ? Yf($v.bind(null, n)) : Pf($v.bind(null, n)), jf(function() {
          !(Pe & 6) && hr();
        }), l = null;
      else {
        switch (vf(o)) {
          case 1:
            l = Ka;
            break;
          case 4:
            l = Be;
            break;
          case 16:
            l = _i;
            break;
          case 536870912:
            l = cf;
            break;
          default:
            l = _i;
        }
        l = Rd(l, Hu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Hu(n, r) {
    if (Fl = -1, jl = 0, Pe & 6)
      throw Error(M(327));
    var l = n.callbackNode;
    if (ju() && n.callbackNode !== l)
      return null;
    var o = Ca(n, n === jt ? En : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = xc(n, o);
    else {
      r = o;
      var c = Pe;
      Pe |= 2;
      var d = Rc();
      (jt !== n || En !== r) && (di = null, Uu = Ze() + 500, Vl(n, r));
      do
        try {
          uy();
          break;
        } catch (S) {
          Qv(n, S);
        }
      while (1);
      Xf(), Qo.current = d, Pe = c, Yt !== null ? r = 0 : (jt = null, En = 0, r = on);
    }
    if (r !== 0) {
      if (r === 2 && (c = df(n), c !== 0 && (o = c, r = gd(n, c))), r === 1)
        throw l = Io, Vl(n, 0), la(n, o), qn(n, Ze()), l;
      if (r === 6)
        la(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Sd(c) && (r = xc(n, o), r === 2 && (d = df(n), d !== 0 && (o = d, r = gd(n, d))), r === 1))
          throw l = Io, Vl(n, 0), la(n, o), qn(n, Ze()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(M(345));
          case 2:
            Bl(n, er, di);
            break;
          case 3:
            if (la(n, o), (o & 130023424) === o && (r = yd + 500 - Ze(), 10 < r)) {
              if (Ca(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Gn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cl(Bl.bind(null, n, er, di), r);
              break;
            }
            Bl(n, er, di);
            break;
          case 4:
            if (la(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Wr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = Ze() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * gc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cl(Bl.bind(null, n, er, di), o);
              break;
            }
            Bl(n, er, di);
            break;
          case 5:
            Bl(n, er, di);
            break;
          default:
            throw Error(M(329));
        }
      }
    }
    return qn(n, Ze()), n.callbackNode === l ? Hu.bind(null, n) : null;
  }
  function gd(n, r) {
    var l = Al;
    return n.current.memoizedState.isDehydrated && (Vl(n, r).flags |= 256), n = xc(n, r), n !== 2 && (r = er, er = l, r !== null && Wo(r)), n;
  }
  function Wo(n) {
    er === null ? er = n : er.push.apply(er, n);
  }
  function Sd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!qr(d(), c))
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
  function la(n, r) {
    for (r &= ~zu, r &= ~Sc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Wr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function $v(n) {
    if (Pe & 6)
      throw Error(M(327));
    ju();
    var r = Ca(n, 0);
    if (!(r & 1))
      return qn(n, Ze()), null;
    var l = xc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = df(n);
      o !== 0 && (r = o, l = gd(n, o));
    }
    if (l === 1)
      throw l = Io, Vl(n, 0), la(n, r), qn(n, Ze()), l;
    if (l === 6)
      throw Error(M(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Bl(n, er, di), qn(n, Ze()), null;
  }
  function Fu(n, r) {
    var l = Pe;
    Pe |= 1;
    try {
      return n(r);
    } finally {
      Pe = l, Pe === 0 && (Uu = Ze() + 500, yn && hr());
    }
  }
  function qi(n) {
    Xi !== null && Xi.tag === 0 && !(Pe & 6) && ju();
    var r = Pe;
    Pe |= 1;
    var l = Wn.transition, o = ct;
    try {
      if (Wn.transition = null, ct = 1, n)
        return n();
    } finally {
      ct = o, Wn.transition = l, Pe = r, !(Pe & 6) && hr();
    }
  }
  function Ed() {
    Fr = Nu.current, it(Nu);
  }
  function Vl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, gv(l)), Yt !== null)
      for (l = Yt.return; l !== null; ) {
        var o = l;
        switch (Qf(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Zr();
            break;
          case 3:
            $i(), it(Pt), it(we), Xs();
            break;
          case 5:
            Fe(o);
            break;
          case 4:
            $i();
            break;
          case 13:
            it(Ce);
            break;
          case 19:
            it(Ce);
            break;
          case 10:
            Vi(o.type._context);
            break;
          case 22:
          case 23:
            Ed();
        }
        l = l.return;
      }
    if (jt = n, Yt = n = Ki(n.current, null), En = Fr = r, on = 0, Io = null, zu = Sc = fi = 0, er = Al = null, kn !== null) {
      for (r = 0; r < kn.length; r++)
        if (l = kn[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      kn = null;
    }
    return n;
  }
  function Qv(n, r) {
    do {
      var l = Yt;
      try {
        if (Xf(), qs.current = dc, Te) {
          for (var o = bt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Te = !1;
        }
        if (Dl = 0, Ie = U = bt = null, ja = !1, Hr = 0, md.current = null, l === null || l.return === null) {
          on = 1, Io = r, Yt = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = En, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var L = C, F = S, V = F.tag;
            if (!(F.mode & 1) && (V === 0 || V === 11 || V === 15)) {
              var H = F.alternate;
              H ? (F.updateQueue = H.updateQueue, F.memoizedState = H.memoizedState, F.lanes = H.lanes) : (F.updateQueue = null, F.memoizedState = null);
            }
            var q = ad(h);
            if (q !== null) {
              q.flags &= -257, id(q, h, S, d, r), q.mode & 1 && Nv(d, L, r), r = q, C = L;
              var re = r.updateQueue;
              if (re === null) {
                var ue = /* @__PURE__ */ new Set();
                ue.add(C), r.updateQueue = ue;
              } else
                re.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                Nv(d, L, r), Cd();
                break e;
              }
              C = Error(M(426));
            }
          } else if (Dt && S.mode & 1) {
            var Wt = ad(h);
            if (Wt !== null) {
              !(Wt.flags & 65536) && (Wt.flags |= 256), id(Wt, h, S, d, r), Wf(Du(C, S));
              break e;
            }
          }
          d = C = Du(C, S), on !== 4 && (on = 2), Al === null ? Al = [d] : Al.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var w = Mv(d, C, r);
                Jf(d, w);
                break e;
              case 1:
                S = C;
                var R = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof R.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Pa === null || !Pa.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Y = Fo(d, S, r);
                  Jf(d, Y);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Td(l);
      } catch (oe) {
        r = oe, Yt === l && l !== null && (Yt = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Rc() {
    var n = Qo.current;
    return Qo.current = dc, n === null ? dc : n;
  }
  function Cd() {
    (on === 0 || on === 3 || on === 2) && (on = 4), jt === null || !(fi & 268435455) && !(Sc & 268435455) || la(jt, En);
  }
  function xc(n, r) {
    var l = Pe;
    Pe |= 2;
    var o = Rc();
    (jt !== n || En !== r) && (di = null, Vl(n, r));
    do
      try {
        ly();
        break;
      } catch (c) {
        Qv(n, c);
      }
    while (1);
    if (Xf(), Pe = l, Qo.current = o, Yt !== null)
      throw Error(M(261));
    return jt = null, En = 0, on;
  }
  function ly() {
    for (; Yt !== null; )
      Iv(Yt);
  }
  function uy() {
    for (; Yt !== null && !ki(); )
      Iv(Yt);
  }
  function Iv(n) {
    var r = Gv(n.alternate, n, Fr);
    n.memoizedProps = n.pendingProps, r === null ? Td(n) : Yt = r, md.current = null;
  }
  function Td(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = dd(l, r), l !== null) {
          l.flags &= 32767, Yt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          on = 6, Yt = null;
          return;
        }
      } else if (l = iy(l, r, Fr), l !== null) {
        Yt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Yt = r;
        return;
      }
      Yt = r = n;
    } while (r !== null);
    on === 0 && (on = 5);
  }
  function Bl(n, r, l) {
    var o = ct, c = Wn.transition;
    try {
      Wn.transition = null, ct = 1, oy(n, r, l, o);
    } finally {
      Wn.transition = c, ct = o;
    }
    return null;
  }
  function oy(n, r, l, o) {
    do
      ju();
    while (Xi !== null);
    if (Pe & 6)
      throw Error(M(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(M(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (zm(n, d), n === jt && (Yt = jt = null, En = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Gi || (Gi = !0, Rd(_i, function() {
      return ju(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Wn.transition, Wn.transition = null;
      var h = ct;
      ct = 1;
      var S = Pe;
      Pe |= 4, md.current = null, Fv(n, l), Vv(l, n), Ms(El), hl = !!Hf, El = Hf = null, n.current = l, Bv(l), ms(), Pe = S, ct = h, Wn.transition = d;
    } else
      n.current = l;
    if (Gi && (Gi = !1, Xi = n, Cc = c), d = n.pendingLanes, d === 0 && (Pa = null), Mp(l.stateNode), qn(n, Ze()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ec)
      throw Ec = !1, n = Hl, Hl = null, n;
    return Cc & 1 && n.tag !== 0 && ju(), d = n.pendingLanes, d & 1 ? n === Tc ? Au++ : (Au = 0, Tc = n) : Au = 0, hr(), null;
  }
  function ju() {
    if (Xi !== null) {
      var n = vf(Cc), r = Wn.transition, l = ct;
      try {
        if (Wn.transition = null, ct = 16 > n ? 16 : n, Xi === null)
          var o = !1;
        else {
          if (n = Xi, Xi = null, Cc = 0, Pe & 6)
            throw Error(M(331));
          var c = Pe;
          for (Pe |= 4, ne = n.current; ne !== null; ) {
            var d = ne, h = d.child;
            if (ne.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var L = S[C];
                  for (ne = L; ne !== null; ) {
                    var F = ne;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yo(8, F, d);
                    }
                    var V = F.child;
                    if (V !== null)
                      V.return = F, ne = V;
                    else
                      for (; ne !== null; ) {
                        F = ne;
                        var H = F.sibling, q = F.return;
                        if (vd(F), F === L) {
                          ne = null;
                          break;
                        }
                        if (H !== null) {
                          H.return = q, ne = H;
                          break;
                        }
                        ne = q;
                      }
                  }
                }
                var re = d.alternate;
                if (re !== null) {
                  var ue = re.child;
                  if (ue !== null) {
                    re.child = null;
                    do {
                      var Wt = ue.sibling;
                      ue.sibling = null, ue = Wt;
                    } while (ue !== null);
                  }
                }
                ne = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, ne = h;
            else
              e:
                for (; ne !== null; ) {
                  if (d = ne, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yo(9, d, d.return);
                    }
                  var w = d.sibling;
                  if (w !== null) {
                    w.return = d.return, ne = w;
                    break e;
                  }
                  ne = d.return;
                }
          }
          var R = n.current;
          for (ne = R; ne !== null; ) {
            h = ne;
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null)
              k.return = h, ne = k;
            else
              e:
                for (h = R; ne !== null; ) {
                  if (S = ne, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          $o(9, S);
                      }
                    } catch (oe) {
                      $t(S, S.return, oe);
                    }
                  if (S === h) {
                    ne = null;
                    break e;
                  }
                  var Y = S.sibling;
                  if (Y !== null) {
                    Y.return = S.return, ne = Y;
                    break e;
                  }
                  ne = S.return;
                }
          }
          if (Pe = c, hr(), Ea && typeof Ea.onPostCommitFiberRoot == "function")
            try {
              Ea.onPostCommitFiberRoot(lo, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        ct = l, Wn.transition = r;
      }
    }
    return !1;
  }
  function Wv(n, r, l) {
    r = Du(l, r), r = Mv(n, r, 1), n = Pi(n, r, 1), r = Gn(), n !== null && (vl(n, 1, r), qn(n, r));
  }
  function $t(n, r, l) {
    if (n.tag === 3)
      Wv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Wv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pa === null || !Pa.has(o))) {
            n = Du(l, n), n = Fo(r, n, 1), r = Pi(r, n, 1), n = Gn(), r !== null && (vl(r, 1, n), qn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function sy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Gn(), n.pingedLanes |= n.suspendedLanes & l, jt === n && (En & l) === l && (on === 4 || on === 3 && (En & 130023424) === En && 500 > Ze() - yd ? Vl(n, 0) : zu |= l), qn(n, r);
  }
  function wc(n, r) {
    r === 0 && (n.mode & 1 ? (r = uu, uu <<= 1, !(uu & 130023424) && (uu = 4194304)) : r = 1);
    var l = Gn();
    n = li(n, r), n !== null && (vl(n, r, l), qn(n, l));
  }
  function cy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), wc(n, l);
  }
  function fy(n, r) {
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
        throw Error(M(314));
    }
    o !== null && o.delete(r), wc(n, l);
  }
  var Gv;
  Gv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Pt.current)
        Jt = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Jt = !1, si(n, r, l);
        Jt = !!(n.flags & 131072);
      }
    else
      Jt = !1, Dt && r.flags & 1048576 && $f(r, Su, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Qn(n, r), n = r.pendingProps;
        var c = Jr(r, we.current);
        Q(r, l), c = Qi(null, r, o, n, c, l);
        var d = _l();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nt(o) ? (d = !0, Fs(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Kf(r), c.updater = Is, r.stateNode = c, c._reactInternals = r, Ws(r, o, n, l), r = zv(null, r, o, !0, d, l)) : (r.tag = 0, Dt && d && js(r), an(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Qn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = Ar(o, n), c) {
            case 0:
              r = bu(null, r, o, n, l);
              break e;
            case 1:
              r = ld(null, r, o, n, l);
              break e;
            case 11:
              r = Wi(null, r, o, n, l);
              break e;
            case 14:
              r = vc(null, r, o, Ar(o.type, n), l);
              break e;
          }
          throw Error(M(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Ar(o, c), bu(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Ar(o, c), ld(n, r, o, c, l);
      case 3:
        e: {
          if (Uv(r), n === null)
            throw Error(M(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, rn(n, r), Yi(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Du(Error(M(423)), r), r = hc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Du(Error(M(424)), r), r = hc(n, r, o, l, c);
              break e;
            } else
              for (gr = wa(r.stateNode.containerInfo.firstChild), Ur = r, Dt = !0, ta = null, l = Ov(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ht(), o === c) {
              r = _n(n, r, l);
              break e;
            }
            an(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Se(r), n === null && Bs(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Do(o, c) ? h = null : d !== null && Do(o, d) && (r.flags |= 32), Me(n, r), an(n, r, h, l), r.child;
      case 6:
        return n === null && Bs(r), null;
      case 13:
        return od(n, r, l);
      case 4:
        return ed(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Cu(r, null, o, l) : an(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Ar(o, c), Wi(n, r, o, c, l);
      case 7:
        return an(n, r, r.pendingProps, l), r.child;
      case 8:
        return an(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return an(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, lt(Fa, o._currentValue), o._currentValue = h, d !== null)
            if (qr(d.value, h)) {
              if (d.children === c.children && !Pt.current) {
                r = _n(n, r, l);
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
                        C = ui(-1, l & -l), C.tag = 2;
                        var L = d.updateQueue;
                        if (L !== null) {
                          L = L.shared;
                          var F = L.pending;
                          F === null ? C.next = C : (C.next = F.next, F.next = C), L.pending = C;
                        }
                      }
                      d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), gn(
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
                    throw Error(M(341));
                  h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), gn(h, l, r), h = d.sibling;
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
          an(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Q(r, l), c = It(c), o = o(c), r.flags |= 1, an(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Ar(o, r.pendingProps), c = Ar(o.type, c), vc(n, r, o, c, l);
      case 15:
        return Cr(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Ar(o, c), Qn(n, r), r.tag = 1, Nt(o) ? (n = !0, Fs(r)) : n = !1, Q(r, l), Dv(r, o, c), Ws(r, o, c, l), zv(null, r, o, !0, n, l);
      case 19:
        return fd(n, r, l);
      case 22:
        return Nl(n, r, l);
    }
    throw Error(M(156, r.tag));
  };
  function Rd(n, r) {
    return Mt(n, r);
  }
  function dy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ua(n, r, l, o) {
    return new dy(n, r, l, o);
  }
  function xd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function py(n) {
    if (typeof n == "function")
      return xd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === xn)
        return 11;
      if (n === fn)
        return 14;
    }
    return 2;
  }
  function Ki(n, r) {
    var l = n.alternate;
    return l === null ? (l = ua(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Dc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      xd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case Ae:
            return Pl(l.children, c, d, r);
          case Rn:
            h = 8, c |= 8;
            break;
          case Fn:
            return n = ua(12, l, r, c | 2), n.elementType = Fn, n.lanes = d, n;
          case ke:
            return n = ua(13, l, r, c), n.elementType = ke, n.lanes = d, n;
          case Qe:
            return n = ua(19, l, r, c), n.elementType = Qe, n.lanes = d, n;
          case Kn:
            return Go(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Bt:
                  h = 10;
                  break e;
                case ft:
                  h = 9;
                  break e;
                case xn:
                  h = 11;
                  break e;
                case fn:
                  h = 14;
                  break e;
                case xt:
                  h = 16, o = null;
                  break e;
              }
            throw Error(M(130, n == null ? n : typeof n, ""));
        }
    return r = ua(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Pl(n, r, l, o) {
    return n = ua(7, n, o, r), n.lanes = l, n;
  }
  function Go(n, r, l, o) {
    return n = ua(22, n, o, r), n.elementType = Kn, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Xo(n, r, l) {
    return n = ua(6, n, null, r), n.lanes = l, n;
  }
  function Yl(n, r, l) {
    return r = ua(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function vy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pf(0), this.expirationTimes = pf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function bc(n, r, l, o, c, d, h, S, C) {
    return n = new vy(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ua(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Kf(d), n;
  }
  function Xv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Rt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function wd(n) {
    if (!n)
      return Ha;
    n = n._reactInternals;
    e: {
      if (Ne(n) !== n || n.tag !== 1)
        throw Error(M(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(M(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nt(l))
        return _o(n, l, r);
    }
    return r;
  }
  function qv(n, r, l, o, c, d, h, S, C) {
    return n = bc(l, o, !0, n, c, d, h, S, C), n.context = wd(null), l = n.current, o = Gn(), c = Zt(l), d = ui(o, c), d.callback = r ?? null, Pi(l, d, c), n.current.lanes = c, vl(n, c, o), qn(n, o), n;
  }
  function qo(n, r, l, o) {
    var c = r.current, d = Gn(), h = Zt(c);
    return l = wd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ui(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Pi(c, r, h), n !== null && (Xn(n, c, h, d), Qs(n, c, h)), h;
  }
  function kc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Kv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Dd(n, r) {
    Kv(n, r), (n = n.alternate) && Kv(n, r);
  }
  function Jv() {
    return null;
  }
  var bd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function _c(n) {
    this._internalRoot = n;
  }
  pi.prototype.render = _c.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(M(409));
    qo(n, r, null, null);
  }, pi.prototype.unmount = _c.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      qi(function() {
        qo(null, n, null, null);
      }), r[ai] = null;
    }
  };
  function pi(n) {
    this._internalRoot = n;
  }
  pi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ap();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < dt.length && r !== 0 && r < dt[l].priority; l++)
        ;
      dt.splice(l, 0, n), l === 0 && Hp(n);
    }
  };
  function kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Oc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Zv() {
  }
  function hy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var L = kc(h);
          d.call(L);
        };
      }
      var h = qv(r, o, n, 0, null, !1, !1, "", Zv);
      return n._reactRootContainer = h, n[ai] = h.current, yu(n.nodeType === 8 ? n.parentNode : n), qi(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var L = kc(C);
        S.call(L);
      };
    }
    var C = bc(n, 0, !1, null, null, !1, !1, "", Zv);
    return n._reactRootContainer = C, n[ai] = C.current, yu(n.nodeType === 8 ? n.parentNode : n), qi(function() {
      qo(r, C, l, o);
    }), C;
  }
  function Lc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = kc(h);
          S.call(C);
        };
      }
      qo(r, h, n, c);
    } else
      h = hy(l, r, n, c, o);
    return kc(h);
  }
  Up = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = pl(r.pendingLanes);
          l !== 0 && (uo(r, l | 1), qn(r, Ze()), !(Pe & 6) && (Uu = Ze() + 500, hr()));
        }
        break;
      case 13:
        qi(function() {
          var o = li(n, 1);
          if (o !== null) {
            var c = Gn();
            Xn(o, n, 1, c);
          }
        }), Dd(n, 1);
    }
  }, Es = function(n) {
    if (n.tag === 13) {
      var r = li(n, 134217728);
      if (r !== null) {
        var l = Gn();
        Xn(r, n, 134217728, l);
      }
      Dd(n, 134217728);
    }
  }, gt = function(n) {
    if (n.tag === 13) {
      var r = Zt(n), l = li(n, r);
      if (l !== null) {
        var o = Gn();
        Xn(l, n, r, o);
      }
      Dd(n, r);
    }
  }, Ap = function() {
    return ct;
  }, hf = function(n, r) {
    var l = ct;
    try {
      return ct = n, r();
    } finally {
      ct = l;
    }
  }, Or = function(n, r, l) {
    switch (r) {
      case "input":
        if (Pn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = he(o);
              if (!c)
                throw Error(M(90));
              Qr(o), Pn(o, c);
            }
          }
        }
        break;
      case "textarea":
        za(n, l);
        break;
      case "select":
        r = l.value, r != null && Na(n, !!l.multiple, r, !1);
    }
  }, io = Fu, hs = qi;
  var my = { usingClientEntryPoint: !1, Events: [ko, gu, he, cl, au, Fu] }, Vu = { findFiberByHostInstance: Kr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, yy = { bundleType: Vu.bundleType, version: Vu.version, rendererPackageName: Vu.rendererPackageName, rendererConfig: Vu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = vn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vu.findFiberByHostInstance || Jv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mc.isDisabled && Mc.supportsFiber)
      try {
        lo = Mc.inject(yy), Ea = Mc;
      } catch {
      }
  }
  return pa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = my, pa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!kd(r))
      throw Error(M(200));
    return Xv(n, r, null, l);
  }, pa.createRoot = function(n, r) {
    if (!kd(n))
      throw Error(M(299));
    var l = !1, o = "", c = bd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = bc(n, 1, !1, null, null, l, !1, o, c), n[ai] = r.current, yu(n.nodeType === 8 ? n.parentNode : n), new _c(r);
  }, pa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(M(188)) : (n = Object.keys(n).join(","), Error(M(268, n)));
    return n = vn(r), n = n === null ? null : n.stateNode, n;
  }, pa.flushSync = function(n) {
    return qi(n);
  }, pa.hydrate = function(n, r, l) {
    if (!Oc(r))
      throw Error(M(200));
    return Lc(null, n, r, !0, l);
  }, pa.hydrateRoot = function(n, r, l) {
    if (!kd(n))
      throw Error(M(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = bd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = qv(r, null, n, 1, l ?? null, c, !1, d, h), n[ai] = r.current, yu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new pi(r);
  }, pa.render = function(n, r, l) {
    if (!Oc(r))
      throw Error(M(200));
    return Lc(null, n, r, !1, l);
  }, pa.unmountComponentAtNode = function(n) {
    if (!Oc(n))
      throw Error(M(40));
    return n._reactRootContainer ? (qi(function() {
      Lc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ai] = null;
      });
    }), !0) : !1;
  }, pa.unstable_batchedUpdates = Fu, pa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Oc(l))
      throw Error(M(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(M(38));
    return Lc(n, r, l, !1, o);
  }, pa.version = "18.2.0-next-9e3b772b8-20220608", pa;
}
var va = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z1;
function Xb() {
  return Z1 || (Z1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var P = Op, Re = tT(), M = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ot = !1;
    function Ut(e) {
      Ot = e;
    }
    function $e(e) {
      if (!Ot) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        nt("warn", e, a);
      }
    }
    function g(e) {
      if (!Ot) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        nt("error", e, a);
      }
    }
    function nt(e, t, a) {
      {
        var i = M.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var se = 0, ce = 1, rt = 2, te = 3, de = 4, le = 5, Ue = 6, ot = 7, ht = 8, cn = 9, Ke = 10, je = 11, mt = 12, Ve = 13, Rt = 14, Ae = 15, Rn = 16, Fn = 17, Bt = 18, ft = 19, xn = 21, ke = 22, Qe = 23, fn = 24, xt = 25, Kn = !0, $ = !1, ye = !1, J = !1, Je = !1, at = !0, wn = !1, Jn = !1, La = !0, tn = !0, $r = !0, jn = /* @__PURE__ */ new Set(), cr = {}, Ma = {};
    function fr(e, t) {
      Qr(e, t), Qr(e + "Capture", t);
    }
    function Qr(e, t) {
      cr[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), cr[e] = t;
      {
        var a = e.toLowerCase();
        Ma[a] = e, e === "onDoubleClick" && (Ma.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        jn.add(t[i]);
    }
    var dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vn = Object.prototype.hasOwnProperty;
    function Dn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Bn(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Ir(e, t) {
      if (Bn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function ha(e) {
      if (Bn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    function qa(e, t) {
      if (Bn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function Na(e, t) {
      if (Bn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function ma(e) {
      if (Bn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    function br(e) {
      if (Bn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    var za = 0, kr = 1, ya = 2, Xt = 3, _r = 4, wi = 5, ga = 6, W = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ve = W + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", He = new RegExp("^[" + W + "][" + ve + "]*$"), st = {}, At = {};
    function pn(e) {
      return Vn.call(At, e) ? !0 : Vn.call(st, e) ? !1 : He.test(e) ? (At[e] = !0, !0) : (st[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Qt(e, t, a) {
      return t !== null ? t.type === za : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function dr(e, t, a, i) {
      if (a !== null && a.type === za)
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
    function Ct(e, t, a, i) {
      if (t === null || typeof t > "u" || dr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Xt:
            return !t;
          case _r:
            return t === !1;
          case wi:
            return isNaN(t);
          case ga:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Or(e) {
      return Tt.hasOwnProperty(e) ? Tt[e] : null;
    }
    function yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === ya || t === Xt || t === _r, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Tt = {}, ru = [
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
    ru.forEach(function(e) {
      Tt[e] = new yt(
        e,
        za,
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
      Tt[t] = new yt(
        t,
        kr,
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
      Tt[e] = new yt(
        e,
        ya,
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
      Tt[e] = new yt(
        e,
        ya,
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
      Tt[e] = new yt(
        e,
        Xt,
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
      Tt[e] = new yt(
        e,
        Xt,
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
      Tt[e] = new yt(
        e,
        _r,
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
      Tt[e] = new yt(
        e,
        ga,
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
      Tt[e] = new yt(
        e,
        wi,
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
    var cl = /[\-\:]([a-z])/g, au = function(e) {
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
      var t = e.replace(cl, au);
      Tt[t] = new yt(
        t,
        kr,
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
      var t = e.replace(cl, au);
      Tt[t] = new yt(
        t,
        kr,
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
      var t = e.replace(cl, au);
      Tt[t] = new yt(
        t,
        kr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Tt[e] = new yt(
        e,
        kr,
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
    var io = "xlinkHref";
    Tt[io] = new yt(
      "xlinkHref",
      kr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Tt[e] = new yt(
        e,
        kr,
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
    var hs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, fl = !1;
    function iu(e) {
      !fl && hs.test(e) && (fl = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function dl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Ir(a, t), i.sanitizeURL && iu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === _r) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Ct(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Ct(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Xt)
            return a;
          f = e.getAttribute(s);
        }
        return Ct(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function lu(e, t, a, i) {
      {
        if (!pn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Ir(a, t), u === "" + a ? a : u;
      }
    }
    function Ua(e, t, a, i) {
      var u = Or(t);
      if (!Qt(t, u, i)) {
        if (Ct(t, a, u, i) && (a = null), i || u === null) {
          if (pn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Ir(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Xt ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var x = u.type, T;
          x === Xt || x === _r && a === !0 ? T = "" : (Ir(a, m), T = "" + a, u.sanitizeURL && iu(T.toString())), y ? e.setAttributeNS(y, m, T) : e.setAttribute(m, T);
        }
      }
    }
    var Di = Symbol.for("react.element"), Lr = Symbol.for("react.portal"), Sa = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), G = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), ze = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), vn = Symbol.for("react.scope"), Lt = Symbol.for("react.debug_trace_mode"), Mt = Symbol.for("react.offscreen"), Zn = Symbol.for("react.legacy_hidden"), ki = Symbol.for("react.cache"), ms = Symbol.for("react.tracing_marker"), Ze = Symbol.iterator, Mm = "@@iterator";
    function Ka(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ze && e[Ze] || e[Mm];
      return typeof t == "function" ? t : null;
    }
    var Be = Object.assign, _i = 0, Lp, cf, lo, Ea, Mp, Wr, Np;
    function zp() {
    }
    zp.__reactDisabledLog = !0;
    function Nm() {
      {
        if (_i === 0) {
          Lp = console.log, cf = console.info, lo = console.warn, Ea = console.error, Mp = console.group, Wr = console.groupCollapsed, Np = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: zp,
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
        _i++;
      }
    }
    function ys() {
      {
        if (_i--, _i === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Be({}, e, {
              value: Lp
            }),
            info: Be({}, e, {
              value: cf
            }),
            warn: Be({}, e, {
              value: lo
            }),
            error: Be({}, e, {
              value: Ea
            }),
            group: Be({}, e, {
              value: Mp
            }),
            groupCollapsed: Be({}, e, {
              value: Wr
            }),
            groupEnd: Be({}, e, {
              value: Np
            })
          });
        }
        _i < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var uu = M.ReactCurrentDispatcher, pl;
    function Ca(e, t, a) {
      {
        if (pl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            pl = i && i[1] || "";
          }
        return `
` + pl + e;
      }
    }
    var ff = !1, gs;
    {
      var df = typeof WeakMap == "function" ? WeakMap : Map;
      gs = new df();
    }
    function Ss(e, t) {
      if (!e || ff)
        return "";
      {
        var a = gs.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ff = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = uu.current, uu.current = null, Nm();
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
            } catch (O) {
              i = O;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (O) {
              i = O;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            i = O;
          }
          e();
        }
      } catch (O) {
        if (O && i && typeof O.stack == "string") {
          for (var p = O.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, y = v.length - 1; m >= 1 && y >= 0 && p[m] !== v[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (p[m] !== v[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || p[m] !== v[y]) {
                    var x = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && gs.set(e, x), x;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ff = !1, uu.current = s, ys(), Error.prepareStackTrace = u;
      }
      var T = e ? e.displayName || e.name : "", _ = T ? Ca(T) : "";
      return typeof e == "function" && gs.set(e, _), _;
    }
    function pf(e, t, a) {
      return Ss(e, !0);
    }
    function vl(e, t, a) {
      return Ss(e, !1);
    }
    function zm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function uo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ss(e, zm(e));
      if (typeof e == "string")
        return Ca(e);
      switch (e) {
        case Ne:
          return Ca("Suspense");
        case Xe:
          return Ca("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ge:
            return vl(e.render);
          case ze:
            return uo(e.type, t, a);
          case Ee: {
            var i = e, u = i._payload, s = i._init;
            try {
              return uo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ct(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return Ca(e.type);
        case Rn:
          return Ca("Lazy");
        case Ve:
          return Ca("Suspense");
        case ft:
          return Ca("SuspenseList");
        case se:
        case rt:
        case Ae:
          return vl(e.type);
        case je:
          return vl(e.type.render);
        case ce:
          return pf(e.type);
        default:
          return "";
      }
    }
    function vf(e) {
      try {
        var t = "", a = e;
        do
          t += ct(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Up(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Es(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Sa:
          return "Fragment";
        case Lr:
          return "Portal";
        case E:
          return "Profiler";
        case bi:
          return "StrictMode";
        case Ne:
          return "Suspense";
        case Xe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            var t = e;
            return Es(t) + ".Consumer";
          case j:
            var a = e;
            return Es(a._context) + ".Provider";
          case ge:
            return Up(e, e.render, "ForwardRef");
          case ze:
            var i = e.displayName || null;
            return i !== null ? i : gt(e.type) || "Memo";
          case Ee: {
            var u = e, s = u._payload, f = u._init;
            try {
              return gt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Ap(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hf(e) {
      return e.displayName || "Context";
    }
    function Oe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case fn:
          return "Cache";
        case cn:
          var i = a;
          return hf(i) + ".Consumer";
        case Ke:
          var u = a;
          return hf(u._context) + ".Provider";
        case Bt:
          return "DehydratedFragment";
        case je:
          return Ap(a, a.render, "ForwardRef");
        case ot:
          return "Fragment";
        case le:
          return a;
        case de:
          return "Portal";
        case te:
          return "Root";
        case Ue:
          return "Text";
        case Rn:
          return gt(a);
        case ht:
          return a === bi ? "StrictMode" : "Mode";
        case ke:
          return "Offscreen";
        case mt:
          return "Profiler";
        case xn:
          return "Scope";
        case Ve:
          return "Suspense";
        case ft:
          return "SuspenseList";
        case xt:
          return "TracingMarker";
        case ce:
        case se:
        case Fn:
        case rt:
        case Rt:
        case Ae:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var oo = M.ReactDebugCurrentFrame, qt = null, Gr = !1;
    function Xr() {
      {
        if (qt === null)
          return null;
        var e = qt._debugOwner;
        if (e !== null && typeof e < "u")
          return Oe(e);
      }
      return null;
    }
    function so() {
      return qt === null ? "" : vf(qt);
    }
    function nn() {
      oo.getCurrentStack = null, qt = null, Gr = !1;
    }
    function dt(e) {
      oo.getCurrentStack = e === null ? null : so, qt = e, Gr = !1;
    }
    function Um() {
      return qt;
    }
    function Ta(e) {
      Gr = e;
    }
    function Yn(e) {
      return "" + e;
    }
    function Oi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return br(e), e;
        default:
          return "";
      }
    }
    var Hp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ou(e, t) {
      Hp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function mf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Fp(e) {
      return e._valueTracker;
    }
    function co(e) {
      e._valueTracker = null;
    }
    function fo(e) {
      var t = "";
      return e && (mf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function su(e) {
      var t = mf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      br(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            br(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            br(p), i = "" + p;
          },
          stopTracking: function() {
            co(e), delete e[t];
          }
        };
        return f;
      }
    }
    function hl(e) {
      Fp(e) || (e._valueTracker = su(e));
    }
    function jp(e) {
      if (!e)
        return !1;
      var t = Fp(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = fo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Cs(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ts = !1, po = !1, Rs = !1, yf = !1;
    function Ja(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function vo(e, t) {
      var a = e, i = t.checked, u = Be({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ho(e, t) {
      ou("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !po && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Xr() || "A component", t.type), po = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ts && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Xr() || "A component", t.type), Ts = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oi(t.value != null ? t.value : i),
        controlled: Ja(t)
      };
    }
    function gf(e, t) {
      var a = e, i = t.checked;
      i != null && Ua(a, "checked", i, !1);
    }
    function cu(e, t) {
      var a = e;
      {
        var i = Ja(t);
        !a._wrapperState.controlled && i && !yf && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), yf = !0), a._wrapperState.controlled && !i && !Rs && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Rs = !0);
      }
      gf(e, t);
      var u = Oi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Yn(u)) : a.value !== Yn(u) && (a.value = Yn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Li(a, t.type, u) : t.hasOwnProperty("defaultValue") && Li(a, t.type, Oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function mo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Yn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Vp(e, t) {
      var a = e;
      cu(a, t), Mr(a, t);
    }
    function Mr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Ir(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            jp(f), cu(f, p);
          }
        }
      }
    }
    function Li(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Cs(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Yn(e._wrapperState.initialValue) : e.defaultValue !== Yn(a) && (e.defaultValue = Yn(a)));
    }
    var xs = !1, fu = !1, Bp = !1;
    function ws(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? P.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || fu || (fu = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Bp || (Bp = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !xs && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xs = !0);
    }
    function Sf(e, t) {
      t.value != null && e.setAttribute("value", Yn(Oi(t.value)));
    }
    var yo = Array.isArray;
    function hn(e) {
      return yo(e);
    }
    var Ds;
    Ds = !1;
    function Pp() {
      var e = Xr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Yp = ["value", "defaultValue"];
    function Am(e) {
      {
        ou("select", e);
        for (var t = 0; t < Yp.length; t++) {
          var a = Yp[t];
          if (e[a] != null) {
            var i = hn(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Pp()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Pp());
          }
        }
      }
    }
    function Mi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = Yn(Oi(a)), x = null, T = 0; T < u.length; T++) {
          if (u[T].value === y) {
            u[T].selected = !0, i && (u[T].defaultSelected = !0);
            return;
          }
          x === null && !u[T].disabled && (x = u[T]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function Ef(e, t) {
      return Be({}, t, {
        value: void 0
      });
    }
    function $p(e, t) {
      var a = e;
      Am(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ds && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ds = !0);
    }
    function Hm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Mi(a, !!t.multiple, i, !1) : t.defaultValue != null && Mi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Fm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Mi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Mi(a, !!t.multiple, t.defaultValue, !0) : Mi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function jm(e, t) {
      var a = e, i = t.value;
      i != null && Mi(a, !!t.multiple, i, !1);
    }
    var Cf = !1;
    function Tf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Be({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Yn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Qp(e, t) {
      var a = e;
      ou("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Cf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Xr() || "A component"), Cf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (hn(u)) {
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
        initialValue: Oi(i)
      };
    }
    function Ip(e, t) {
      var a = e, i = Oi(t.value), u = Oi(t.defaultValue);
      if (i != null) {
        var s = Yn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Yn(u));
    }
    function Wp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Rf(e, t) {
      Ip(e, t);
    }
    var Za = "http://www.w3.org/1999/xhtml", Vm = "http://www.w3.org/1998/Math/MathML", xf = "http://www.w3.org/2000/svg";
    function bs(e) {
      switch (e) {
        case "svg":
          return xf;
        case "math":
          return Vm;
        default:
          return Za;
      }
    }
    function wf(e, t) {
      return e == null || e === Za ? bs(t) : e === xf && t === "foreignObject" ? Za : e;
    }
    var Bm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ks, Gp = Bm(function(e, t) {
      if (e.namespaceURI === xf && !("innerHTML" in e)) {
        ks = ks || document.createElement("div"), ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ks.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), pr = 1, ei = 3, Kt = 8, Ra = 9, ml = 11, _s = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ei) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xp = {
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
    }, du = {
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
    function qp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Kp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(du).forEach(function(e) {
      Kp.forEach(function(t) {
        du[qp(t, e)] = du[e];
      });
    });
    function Os(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(du.hasOwnProperty(e) && du[e]) ? t + "px" : (Na(t, e), ("" + t).trim());
    }
    var pu = /([A-Z])/g, Pm = /^ms-/;
    function Ym(e) {
      return e.replace(pu, "-$1").toLowerCase().replace(Pm, "-ms-");
    }
    var Jp = function() {
    };
    {
      var Zp = /^(?:webkit|moz|o)[A-Z]/, ev = /^-ms-/, go = /-(.)/g, vu = /;\s*$/, hu = {}, mu = {}, tv = !1, Df = !1, bf = function(e) {
        return e.replace(go, function(t, a) {
          return a.toUpperCase();
        });
      }, kf = function(e) {
        hu.hasOwnProperty(e) && hu[e] || (hu[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          bf(e.replace(ev, "ms-"))
        ));
      }, nv = function(e) {
        hu.hasOwnProperty(e) && hu[e] || (hu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, rv = function(e, t) {
        mu.hasOwnProperty(t) && mu[t] || (mu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vu, "")));
      }, av = function(e, t) {
        tv || (tv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $m = function(e, t) {
        Df || (Df = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Jp = function(e, t) {
        e.indexOf("-") > -1 ? kf(e) : Zp.test(e) ? nv(e) : vu.test(t) && rv(e, t), typeof t == "number" && (isNaN(t) ? av(e, t) : isFinite(t) || $m(e, t));
      };
    }
    var Qm = Jp;
    function Im(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ym(i)) + ":", t += Os(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function iv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Qm(i, t[i]);
          var s = Os(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Wm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function qr(e) {
      var t = {};
      for (var a in e)
        for (var i = Xp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function So(e, t) {
      {
        if (!t)
          return;
        var a = qr(e), i = qr(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Wm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var lv = {
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
    }, uv = Be({
      menuitem: !0
    }, lv), ov = "__html";
    function Ls(e, t) {
      if (t) {
        if (uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(ov in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ti(e, t) {
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
    var Ms = {
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
    }, sv = {
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
    }, xa = {}, _f = new RegExp("^(aria)-[" + ve + "]*$"), Eo = new RegExp("^(aria)[A-Z][" + ve + "]*$");
    function Of(e, t) {
      {
        if (Vn.call(xa, t) && xa[t])
          return !0;
        if (Eo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), xa[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), xa[t] = !0, !0;
        }
        if (_f.test(t)) {
          var u = t.toLowerCase(), s = sv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return xa[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), xa[t] = !0, !0;
        }
      }
      return !0;
    }
    function cv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Of(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ns(e, t) {
      ti(e, t) || cv(e, t);
    }
    var yl = !1;
    function Lf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !yl && (yl = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Mf = function() {
    };
    {
      var mn = {}, Nf = /^on./, fv = /^on[^A-Z]/, dv = new RegExp("^(aria)-[" + ve + "]*$"), pv = new RegExp("^(aria)[A-Z][" + ve + "]*$");
      Mf = function(e, t, a, i) {
        if (Vn.call(mn, t) && mn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), mn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), mn[t] = !0, !0;
          if (Nf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), mn[t] = !0, !0;
        } else if (Nf.test(t))
          return fv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), mn[t] = !0, !0;
        if (dv.test(t) || pv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), mn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), mn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), mn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), mn[t] = !0, !0;
        var v = Or(t), m = v !== null && v.type === za;
        if (Ms.hasOwnProperty(u)) {
          var y = Ms[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), mn[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), mn[t] = !0, !0;
        return typeof a == "boolean" && dr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), mn[t] = !0, !0) : m ? !0 : dr(t, a, v, !1) ? (mn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Xt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), mn[t] = !0), !0);
      };
    }
    var vv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Mf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function hv(e, t, a) {
      ti(e, t) || vv(e, t, a);
    }
    var ni = 1, Co = 2, gl = 4, Gm = ni | Co | gl, To = null;
    function Ro(e) {
      To !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), To = e;
    }
    function Xm() {
      To === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), To = null;
    }
    function mv(e) {
      return e === To;
    }
    function zs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ei ? t.parentNode : t;
    }
    var St = null, Ni = null, ri = null;
    function yu(e) {
      var t = Yu(e);
      if (t) {
        if (typeof St != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = mh(a);
          St(t.stateNode, t.type, i);
        }
      }
    }
    function yv(e) {
      St = e;
    }
    function Us(e) {
      Ni ? ri ? ri.push(e) : ri = [e] : Ni = e;
    }
    function xo() {
      return Ni !== null || ri !== null;
    }
    function wo() {
      if (Ni) {
        var e = Ni, t = ri;
        if (Ni = null, ri = null, yu(e), t)
          for (var a = 0; a < t.length; a++)
            yu(t[a]);
      }
    }
    var Sl = function(e, t) {
      return e(t);
    }, zf = function() {
    }, Uf = !1;
    function qm() {
      var e = xo();
      e && (zf(), wo());
    }
    function Af(e, t, a) {
      if (Uf)
        return e(t, a);
      Uf = !0;
      try {
        return Sl(e, t, a);
      } finally {
        Uf = !1, qm();
      }
    }
    function As(e, t, a) {
      Sl = e, zf = a;
    }
    function Hs(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Hf(e, t, a) {
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
          return !!(a.disabled && Hs(t));
        default:
          return !1;
      }
    }
    function El(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Hf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Do = !1;
    if (dn)
      try {
        var Cl = {};
        Object.defineProperty(Cl, "passive", {
          get: function() {
            Do = !0;
          }
        }), window.addEventListener("test", Cl, Cl), window.removeEventListener("test", Cl, Cl);
      } catch {
        Do = !1;
      }
    function gv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Ff = gv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var jf = document.createElement("react");
      Ff = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), x = !1, T = !0, _ = window.event, O = Object.getOwnPropertyDescriptor(window, "event");
        function N() {
          jf.removeEventListener(z, me, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = _);
        }
        var Z = Array.prototype.slice.call(arguments, 3);
        function me() {
          x = !0, N(), a.apply(i, Z), T = !1;
        }
        var fe, Ge = !1, Ye = !1;
        function D(b) {
          if (fe = b.error, Ge = !0, fe === null && b.colno === 0 && b.lineno === 0 && (Ye = !0), b.defaultPrevented && fe != null && typeof fe == "object")
            try {
              fe._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), jf.addEventListener(z, me, !1), y.initEvent(z, !1, !1), jf.dispatchEvent(y), O && Object.defineProperty(window, "event", O), x && T && (Ge ? Ye && (fe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : fe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(fe)), window.removeEventListener("error", D), !x)
          return N(), gv.apply(this, arguments);
      };
    }
    var Km = Ff, zi = !1, wa = null, bo = !1, Ui = null, Aa = {
      onError: function(e) {
        zi = !0, wa = e;
      }
    };
    function Tl(e, t, a, i, u, s, f, p, v) {
      zi = !1, wa = null, Km.apply(Aa, arguments);
    }
    function ai(e, t, a, i, u, s, f, p, v) {
      if (Tl.apply(this, arguments), zi) {
        var m = Bf();
        bo || (bo = !0, Ui = m);
      }
    }
    function Vf() {
      if (bo) {
        var e = Ui;
        throw bo = !1, Ui = null, e;
      }
    }
    function Jm() {
      return zi;
    }
    function Bf() {
      if (zi) {
        var e = wa;
        return zi = !1, wa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kr(e) {
      return e._reactInternals;
    }
    function ko(e) {
      return e._reactInternals !== void 0;
    }
    function gu(e, t) {
      e._reactInternals = t;
    }
    var he = (
      /*                      */
      0
    ), Ai = (
      /*                */
      1
    ), wt = (
      /*                    */
      2
    ), Le = (
      /*                       */
      4
    ), it = (
      /*                */
      16
    ), lt = (
      /*                 */
      32
    ), Ha = (
      /*                     */
      64
    ), we = (
      /*                   */
      128
    ), Pt = (
      /*            */
      256
    ), vr = (
      /*                          */
      512
    ), Jr = (
      /*                     */
      1024
    ), Nt = (
      /*                      */
      2048
    ), Zr = (
      /*                    */
      4096
    ), Hi = (
      /*                   */
      8192
    ), _o = (
      /*             */
      16384
    ), Fs = Nt | Le | Ha | vr | Jr | _o, Sv = (
      /*               */
      32767
    ), Nr = (
      /*                   */
      32768
    ), yn = (
      /*                */
      65536
    ), Oo = (
      /* */
      131072
    ), Pf = (
      /*                       */
      1048576
    ), Yf = (
      /*                    */
      2097152
    ), hr = (
      /*                 */
      4194304
    ), Fi = (
      /*                */
      8388608
    ), mr = (
      /*               */
      16777216
    ), Rl = (
      /*              */
      33554432
    ), Su = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Le | Jr | 0
    ), yr = wt | Le | it | lt | vr | Zr | Hi, $n = Le | Ha | vr | Hi, ea = Nt | it, bn = hr | Fi | Yf, ii = M.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (wt | Zr)) !== he && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function $f(e) {
      if (e.tag === Ve) {
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
    function js(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function Qf(e) {
      return zr(e) === e;
    }
    function Ur(e) {
      {
        var t = ii.current;
        if (t !== null && t.tag === ce) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Oe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Kr(e);
      return u ? zr(u) === u : !1;
    }
    function gr(e) {
      if (zr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Dt(e) {
      var t = e.alternate;
      if (!t) {
        var a = zr(e);
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
              return gr(s), e;
            if (v === u)
              return gr(s), t;
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
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ta(e) {
      var t = Dt(e);
      return t !== null ? If(t) : null;
    }
    function If(e) {
      if (e.tag === le || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = If(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Ev(e) {
      var t = Dt(e);
      return t !== null ? Vs(t) : null;
    }
    function Vs(e) {
      if (e.tag === le || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== de) {
          var a = Vs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Bs = Re.unstable_scheduleCallback, Cv = Re.unstable_cancelCallback, Ps = Re.unstable_shouldYield, Tv = Re.unstable_requestPaint, Ht = Re.unstable_now, Wf = Re.unstable_getCurrentPriorityLevel, Ys = Re.unstable_ImmediatePriority, Ar = Re.unstable_UserBlockingPriority, Fa = Re.unstable_NormalPriority, $s = Re.unstable_LowPriority, ji = Re.unstable_IdlePriority, Gf = Re.unstable_yieldValue, Xf = Re.unstable_setDisableYieldValue, Vi = null, gn = null, Q = null, It = !1, kn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function qf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        La && (e = Be({}, e, {
          getLaneLabelMap: Pi,
          injectProfilingHooks: ui
        })), Vi = t.inject(e), gn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Rv(e, t) {
      if (gn && typeof gn.onScheduleFiberRoot == "function")
        try {
          gn.onScheduleFiberRoot(Vi, e, t);
        } catch (a) {
          It || (It = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function li(e, t) {
      if (gn && typeof gn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & we) === we;
          if (tn) {
            var i;
            switch (t) {
              case Qn:
                i = Ys;
                break;
              case _n:
                i = Ar;
                break;
              case si:
                i = Fa;
                break;
              case jo:
                i = ji;
                break;
              default:
                i = Fa;
                break;
            }
            gn.onCommitFiberRoot(Vi, e, i, a);
          }
        } catch (u) {
          It || (It = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Bi(e) {
      if (gn && typeof gn.onPostCommitFiberRoot == "function")
        try {
          gn.onPostCommitFiberRoot(Vi, e);
        } catch (t) {
          It || (It = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Kf(e) {
      if (gn && typeof gn.onCommitFiberUnmount == "function")
        try {
          gn.onCommitFiberUnmount(Vi, e);
        } catch (t) {
          It || (It = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function rn(e) {
      if (typeof Gf == "function" && (Xf(e), Ut(e)), gn && typeof gn.setStrictMode == "function")
        try {
          gn.setStrictMode(Vi, e);
        } catch (t) {
          It || (It = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ui(e) {
      Q = e;
    }
    function Pi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < bt; a++) {
          var i = Zm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Qs(e) {
      Q !== null && typeof Q.markCommitStarted == "function" && Q.markCommitStarted(e);
    }
    function Jf() {
      Q !== null && typeof Q.markCommitStopped == "function" && Q.markCommitStopped();
    }
    function Yi(e) {
      Q !== null && typeof Q.markComponentRenderStarted == "function" && Q.markComponentRenderStarted(e);
    }
    function xl() {
      Q !== null && typeof Q.markComponentRenderStopped == "function" && Q.markComponentRenderStopped();
    }
    function xv(e) {
      Q !== null && typeof Q.markComponentPassiveEffectMountStarted == "function" && Q.markComponentPassiveEffectMountStarted(e);
    }
    function Zf() {
      Q !== null && typeof Q.markComponentPassiveEffectMountStopped == "function" && Q.markComponentPassiveEffectMountStopped();
    }
    function Is(e) {
      Q !== null && typeof Q.markComponentPassiveEffectUnmountStarted == "function" && Q.markComponentPassiveEffectUnmountStarted(e);
    }
    function wv() {
      Q !== null && typeof Q.markComponentPassiveEffectUnmountStopped == "function" && Q.markComponentPassiveEffectUnmountStopped();
    }
    function Dv(e) {
      Q !== null && typeof Q.markComponentLayoutEffectMountStarted == "function" && Q.markComponentLayoutEffectMountStarted(e);
    }
    function bv() {
      Q !== null && typeof Q.markComponentLayoutEffectMountStopped == "function" && Q.markComponentLayoutEffectMountStopped();
    }
    function Ws(e) {
      Q !== null && typeof Q.markComponentLayoutEffectUnmountStarted == "function" && Q.markComponentLayoutEffectUnmountStarted(e);
    }
    function Eu() {
      Q !== null && typeof Q.markComponentLayoutEffectUnmountStopped == "function" && Q.markComponentLayoutEffectUnmountStopped();
    }
    function Gs(e, t, a) {
      Q !== null && typeof Q.markComponentErrored == "function" && Q.markComponentErrored(e, t, a);
    }
    function kv(e, t, a) {
      Q !== null && typeof Q.markComponentSuspended == "function" && Q.markComponentSuspended(e, t, a);
    }
    function _v(e) {
      Q !== null && typeof Q.markLayoutEffectsStarted == "function" && Q.markLayoutEffectsStarted(e);
    }
    function Cu() {
      Q !== null && typeof Q.markLayoutEffectsStopped == "function" && Q.markLayoutEffectsStopped();
    }
    function Ov(e) {
      Q !== null && typeof Q.markPassiveEffectsStarted == "function" && Q.markPassiveEffectsStarted(e);
    }
    function Lo() {
      Q !== null && typeof Q.markPassiveEffectsStopped == "function" && Q.markPassiveEffectsStopped();
    }
    function Da(e) {
      Q !== null && typeof Q.markRenderStarted == "function" && Q.markRenderStarted(e);
    }
    function Mo() {
      Q !== null && typeof Q.markRenderYielded == "function" && Q.markRenderYielded();
    }
    function Tu() {
      Q !== null && typeof Q.markRenderStopped == "function" && Q.markRenderStopped();
    }
    function wl(e) {
      Q !== null && typeof Q.markRenderScheduled == "function" && Q.markRenderScheduled(e);
    }
    function ed(e, t) {
      Q !== null && typeof Q.markForceUpdateScheduled == "function" && Q.markForceUpdateScheduled(e, t);
    }
    function $i(e, t) {
      Q !== null && typeof Q.markStateUpdateScheduled == "function" && Q.markStateUpdateScheduled(e, t);
    }
    var Se = (
      /*                         */
      0
    ), Fe = (
      /*                 */
      1
    ), Ce = (
      /*                    */
      2
    ), Ft = (
      /*               */
      8
    ), na = (
      /*              */
      16
    ), Xs = Math.clz32 ? Math.clz32 : Dl, qs = Math.log, td = Math.LN2;
    function Dl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (qs(t) / td | 0) | 0;
    }
    var bt = 31, U = (
      /*                        */
      0
    ), Ie = (
      /*                          */
      0
    ), Te = (
      /*                        */
      1
    ), ja = (
      /*    */
      2
    ), Hr = (
      /*             */
      4
    ), bl = (
      /*            */
      8
    ), kt = (
      /*                     */
      16
    ), kl = (
      /*                */
      32
    ), Qi = (
      /*                       */
      4194240
    ), _l = (
      /*                        */
      64
    ), ra = (
      /*                        */
      128
    ), Sr = (
      /*                        */
      256
    ), Ol = (
      /*                        */
      512
    ), No = (
      /*                        */
      1024
    ), zo = (
      /*                        */
      2048
    ), Ks = (
      /*                        */
      4096
    ), Js = (
      /*                        */
      8192
    ), Zs = (
      /*                        */
      16384
    ), ec = (
      /*                       */
      32768
    ), tc = (
      /*                       */
      65536
    ), nc = (
      /*                       */
      131072
    ), rc = (
      /*                       */
      262144
    ), ac = (
      /*                       */
      524288
    ), Ll = (
      /*                       */
      1048576
    ), ic = (
      /*                       */
      2097152
    ), Ml = (
      /*                            */
      130023424
    ), oi = (
      /*                             */
      4194304
    ), lc = (
      /*                             */
      8388608
    ), Uo = (
      /*                             */
      16777216
    ), uc = (
      /*                             */
      33554432
    ), oc = (
      /*                             */
      67108864
    ), nd = oi, Ru = (
      /*          */
      134217728
    ), sc = (
      /*                          */
      268435455
    ), xu = (
      /*               */
      268435456
    ), Ii = (
      /*                        */
      536870912
    ), Er = (
      /*                   */
      1073741824
    );
    function Zm(e) {
      {
        if (e & Te)
          return "Sync";
        if (e & ja)
          return "InputContinuousHydration";
        if (e & Hr)
          return "InputContinuous";
        if (e & bl)
          return "DefaultHydration";
        if (e & kt)
          return "Default";
        if (e & kl)
          return "TransitionHydration";
        if (e & Qi)
          return "Transition";
        if (e & Ml)
          return "Retry";
        if (e & Ru)
          return "SelectiveHydration";
        if (e & xu)
          return "IdleHydration";
        if (e & Ii)
          return "Idle";
        if (e & Er)
          return "Offscreen";
      }
    }
    var Et = -1, cc = _l, fc = oi;
    function wu(e) {
      switch (Jt(e)) {
        case Te:
          return Te;
        case ja:
          return ja;
        case Hr:
          return Hr;
        case bl:
          return bl;
        case kt:
          return kt;
        case kl:
          return kl;
        case _l:
        case ra:
        case Sr:
        case Ol:
        case No:
        case zo:
        case Ks:
        case Js:
        case Zs:
        case ec:
        case tc:
        case nc:
        case rc:
        case ac:
        case Ll:
        case ic:
          return e & Qi;
        case oi:
        case lc:
        case Uo:
        case uc:
        case oc:
          return e & Ml;
        case Ru:
          return Ru;
        case xu:
          return xu;
        case Ii:
          return Ii;
        case Er:
          return Er;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ao(e, t) {
      var a = e.pendingLanes;
      if (a === U)
        return U;
      var i = U, u = e.suspendedLanes, s = e.pingedLanes, f = a & sc;
      if (f !== U) {
        var p = f & ~u;
        if (p !== U)
          i = wu(p);
        else {
          var v = f & s;
          v !== U && (i = wu(v));
        }
      } else {
        var m = a & ~u;
        m !== U ? i = wu(m) : s !== U && (i = wu(s));
      }
      if (i === U)
        return U;
      if (t !== U && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === U) {
        var y = Jt(i), x = Jt(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === kt && (x & Qi) !== U
        )
          return t;
      }
      (i & Hr) !== U && (i |= a & kt);
      var T = e.entangledLanes;
      if (T !== U)
        for (var _ = e.entanglements, O = i & T; O > 0; ) {
          var N = Wi(O), Z = 1 << N;
          i |= _[N], O &= ~Z;
        }
      return i;
    }
    function Lv(e, t) {
      for (var a = e.eventTimes, i = Et; t > 0; ) {
        var u = Wi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function dc(e, t) {
      switch (e) {
        case Te:
        case ja:
        case Hr:
          return t + 250;
        case bl:
        case kt:
        case kl:
        case _l:
        case ra:
        case Sr:
        case Ol:
        case No:
        case zo:
        case Ks:
        case Js:
        case Zs:
        case ec:
        case tc:
        case nc:
        case rc:
        case ac:
        case Ll:
        case ic:
          return t + 5e3;
        case oi:
        case lc:
        case Uo:
        case uc:
        case oc:
          return Et;
        case Ru:
        case xu:
        case Ii:
        case Er:
          return Et;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Et;
      }
    }
    function ey(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wi(f), v = 1 << p, m = s[p];
        m === Et ? ((v & i) === U || (v & u) !== U) && (s[p] = dc(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ty(e) {
      return wu(e.pendingLanes);
    }
    function rd(e) {
      var t = e.pendingLanes & ~Er;
      return t !== U ? t : t & Er ? Er : U;
    }
    function Du(e) {
      return (e & Te) !== U;
    }
    function Ho(e) {
      return (e & sc) !== U;
    }
    function pc(e) {
      return (e & Ml) === e;
    }
    function ny(e) {
      var t = Te | Hr | kt;
      return (e & t) === U;
    }
    function Mv(e) {
      return (e & Qi) === e;
    }
    function Fo(e, t) {
      var a = ja | Hr | bl | kt;
      return (t & a) !== U;
    }
    function Nv(e, t) {
      return (t & e.expiredLanes) !== U;
    }
    function ad(e) {
      return (e & Qi) !== U;
    }
    function id() {
      var e = cc;
      return cc <<= 1, (cc & Qi) === U && (cc = _l), e;
    }
    function ry() {
      var e = fc;
      return fc <<= 1, (fc & Ml) === U && (fc = oi), e;
    }
    function Jt(e) {
      return e & -e;
    }
    function an(e) {
      return Jt(e);
    }
    function Wi(e) {
      return 31 - Xs(e);
    }
    function vc(e) {
      return Wi(e);
    }
    function Cr(e, t) {
      return (e & t) !== U;
    }
    function Nl(e, t) {
      return (e & t) === t;
    }
    function Me(e, t) {
      return e | t;
    }
    function bu(e, t) {
      return e & ~t;
    }
    function ld(e, t) {
      return e & t;
    }
    function zv(e) {
      return e;
    }
    function Uv(e, t) {
      return e !== Ie && e < t ? e : t;
    }
    function hc(e) {
      for (var t = [], a = 0; a < bt; a++)
        t.push(e);
      return t;
    }
    function zl(e, t, a) {
      e.pendingLanes |= t, t !== Ii && (e.suspendedLanes = U, e.pingedLanes = U);
      var i = e.eventTimes, u = vc(t);
      i[u] = a;
    }
    function ud(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Wi(i), s = 1 << u;
        a[u] = Et, i &= ~s;
      }
    }
    function od(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function sd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = U, e.pingedLanes = U, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wi(f), v = 1 << p;
        i[p] = U, u[p] = Et, s[p] = Et, f &= ~v;
      }
    }
    function ku(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Wi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ay(e, t) {
      var a = Jt(t), i;
      switch (a) {
        case Hr:
          i = ja;
          break;
        case kt:
          i = bl;
          break;
        case _l:
        case ra:
        case Sr:
        case Ol:
        case No:
        case zo:
        case Ks:
        case Js:
        case Zs:
        case ec:
        case tc:
        case nc:
        case rc:
        case ac:
        case Ll:
        case ic:
        case oi:
        case lc:
        case Uo:
        case uc:
        case oc:
          i = kl;
          break;
        case Ii:
          i = xu;
          break;
        default:
          i = Ie;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ie ? Ie : i;
    }
    function cd(e, t, a) {
      if (kn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = vc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function mc(e, t) {
      if (kn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = vc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function fd(e, t) {
      return null;
    }
    var Qn = Te, _n = Hr, si = kt, jo = Ii, Ul = Ie;
    function aa() {
      return Ul;
    }
    function ln(e) {
      Ul = e;
    }
    function Vo(e, t) {
      var a = Ul;
      try {
        return Ul = e, t();
      } finally {
        Ul = a;
      }
    }
    function In(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function iy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function dd(e, t) {
      return e !== 0 && e < t;
    }
    function Bo(e) {
      var t = Jt(e);
      return dd(Qn, t) ? dd(_n, t) ? Ho(t) ? si : jo : _n : Qn;
    }
    function un(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Av;
    function ne(e) {
      Av = e;
    }
    function _u(e) {
      Av(e);
    }
    var Po;
    function Hv(e) {
      Po = e;
    }
    var Fv;
    function Yo(e) {
      Fv = e;
    }
    var $o;
    function pd(e) {
      $o = e;
    }
    var vd;
    function jv(e) {
      vd = e;
    }
    var yc = !1, Ou = [], Va = null, zt = null, Sn = null, ia = /* @__PURE__ */ new Map(), Lu = /* @__PURE__ */ new Map(), ci = [], ba = [
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
    function Vv(e) {
      return ba.indexOf(e) > -1;
    }
    function Ba(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Bv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Va = null;
          break;
        case "dragenter":
        case "dragleave":
          zt = null;
          break;
        case "mouseover":
        case "mouseout":
          Sn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ia.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Lu.delete(i);
          break;
        }
      }
    }
    function Mu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ba(t, a, i, u, s);
        if (t !== null) {
          var p = Yu(t);
          p !== null && Po(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Pv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Va = Mu(Va, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return zt = Mu(zt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Sn = Mu(Sn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return ia.set(m, Mu(ia.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, x = y.pointerId;
          return Lu.set(x, Mu(Lu.get(x) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function hd(e) {
      var t = Zo(e.target);
      if (t !== null) {
        var a = zr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ve) {
            var u = $f(a);
            if (u !== null) {
              e.blockedOn = u, vd(e.priority, function() {
                Fv(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (un(s)) {
              e.blockedOn = js(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Yv(e) {
      for (var t = $o(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < ci.length && dd(t, ci[i].priority); i++)
        ;
      ci.splice(i, 0, a), i === 0 && hd(a);
    }
    function gc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Al(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ro(s), u.target.dispatchEvent(s), Xm();
        } else {
          var f = Yu(i);
          return f !== null && Po(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Qo(e, t, a) {
      gc(e) && a.delete(t);
    }
    function md() {
      yc = !1, Va !== null && gc(Va) && (Va = null), zt !== null && gc(zt) && (zt = null), Sn !== null && gc(Sn) && (Sn = null), ia.forEach(Qo), Lu.forEach(Qo);
    }
    function Wn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, yc || (yc = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, md)));
    }
    function Pe(e) {
      if (Ou.length > 0) {
        Wn(Ou[0], e);
        for (var t = 1; t < Ou.length; t++) {
          var a = Ou[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Va !== null && Wn(Va, e), zt !== null && Wn(zt, e), Sn !== null && Wn(Sn, e);
      var i = function(p) {
        return Wn(p, e);
      };
      ia.forEach(i), Lu.forEach(i);
      for (var u = 0; u < ci.length; u++) {
        var s = ci[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; ci.length > 0; ) {
        var f = ci[0];
        if (f.blockedOn !== null)
          break;
        hd(f), f.blockedOn === null && ci.shift();
      }
    }
    var jt = M.ReactCurrentBatchConfig, Yt = !0;
    function En(e) {
      Yt = !!e;
    }
    function Fr() {
      return Yt;
    }
    function Nu(e, t, a) {
      var i = er(t), u;
      switch (i) {
        case Qn:
          u = on;
          break;
        case _n:
          u = Io;
          break;
        case si:
        default:
          u = fi;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function on(e, t, a, i) {
      var u = aa(), s = jt.transition;
      jt.transition = null;
      try {
        ln(Qn), fi(e, t, a, i);
      } finally {
        ln(u), jt.transition = s;
      }
    }
    function Io(e, t, a, i) {
      var u = aa(), s = jt.transition;
      jt.transition = null;
      try {
        ln(_n), fi(e, t, a, i);
      } finally {
        ln(u), jt.transition = s;
      }
    }
    function fi(e, t, a, i) {
      Yt && Sc(e, t, a, i);
    }
    function Sc(e, t, a, i) {
      var u = Al(e, t, a, i);
      if (u === null) {
        wy(e, t, i, zu, a), Bv(e, i);
        return;
      }
      if (Pv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Bv(e, i), t & gl && Vv(e)) {
        for (; u !== null; ) {
          var s = Yu(u);
          s !== null && _u(s);
          var f = Al(e, t, a, i);
          if (f === null && wy(e, t, i, zu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var zu = null;
    function Al(e, t, a, i) {
      zu = null;
      var u = zs(i), s = Zo(u);
      if (s !== null) {
        var f = zr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ve) {
            var v = $f(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var m = f.stateNode;
            if (un(m))
              return js(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return zu = s, null;
    }
    function er(e) {
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
          return Qn;
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
          return _n;
        case "message": {
          var t = Wf();
          switch (t) {
            case Ys:
              return Qn;
            case Ar:
              return _n;
            case Fa:
            case $s:
              return si;
            case ji:
              return jo;
            default:
              return si;
          }
        }
        default:
          return si;
      }
    }
    function yd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Uu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function di(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ec(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Hl = null, Pa = null, Gi = null;
    function Xi(e) {
      return Hl = e, Pa = Tc(), !0;
    }
    function Cc() {
      Hl = null, Pa = null, Gi = null;
    }
    function Au() {
      if (Gi)
        return Gi;
      var e, t = Pa, a = t.length, i, u = Tc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Gi = u.slice(e, p), Gi;
    }
    function Tc() {
      return "value" in Hl ? Hl.value : Hl.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function jl() {
      return !0;
    }
    function Gn() {
      return !1;
    }
    function Zt(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = jl : this.isDefaultPrevented = Gn, this.isPropagationStopped = Gn, this;
      }
      return Be(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = jl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = jl);
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
        isPersistent: jl
      }), t;
    }
    var Xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, qn = Zt(Xn), Hu = Be({}, Xn, {
      view: 0,
      detail: 0
    }), gd = Zt(Hu), Wo, Sd, la;
    function $v(e) {
      e !== la && (la && e.type === "mousemove" ? (Wo = e.screenX - la.screenX, Sd = e.screenY - la.screenY) : (Wo = 0, Sd = 0), la = e);
    }
    var Fu = Be({}, Hu, {
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
      getModifierState: wc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : ($v(e), Wo);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Sd;
      }
    }), qi = Zt(Fu), Ed = Be({}, Fu, {
      dataTransfer: 0
    }), Vl = Zt(Ed), Qv = Be({}, Hu, {
      relatedTarget: 0
    }), Rc = Zt(Qv), Cd = Be({}, Xn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), xc = Zt(Cd), ly = Be({}, Xn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = Zt(ly), Iv = Be({}, Xn, {
      data: 0
    }), Td = Zt(Iv), Bl = Td, oy = {
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
    }, ju = {
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
    function Wv(e) {
      if (e.key) {
        var t = oy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ju[e.keyCode] || "Unidentified" : "";
    }
    var $t = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function sy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = $t[e];
      return i ? !!a[i] : !1;
    }
    function wc(e) {
      return sy;
    }
    var cy = Be({}, Hu, {
      key: Wv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), fy = Zt(cy), Gv = Be({}, Fu, {
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
    }), Rd = Zt(Gv), dy = Be({}, Hu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wc
    }), ua = Zt(dy), xd = Be({}, Xn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), py = Zt(xd), Ki = Be({}, Fu, {
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
    }), Dc = Zt(Ki), Pl = [9, 13, 27, 32], Go = 229, Xo = dn && "CompositionEvent" in window, Yl = null;
    dn && "documentMode" in document && (Yl = document.documentMode);
    var vy = dn && "TextEvent" in window && !Yl, bc = dn && (!Xo || Yl && Yl > 8 && Yl <= 11), Xv = 32, wd = String.fromCharCode(Xv);
    function qv() {
      fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qo = !1;
    function kc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Kv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Dd(e, t) {
      return e === "keydown" && t.keyCode === Go;
    }
    function Jv(e, t) {
      switch (e) {
        case "keyup":
          return Pl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Go;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function bd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function _c(e) {
      return e.locale === "ko";
    }
    var pi = !1;
    function kd(e, t, a, i, u) {
      var s, f;
      if (Xo ? s = Kv(t) : pi ? Jv(t, i) && (s = "onCompositionEnd") : Dd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      bc && !_c(i) && (!pi && s === "onCompositionStart" ? pi = Xi(u) : s === "onCompositionEnd" && pi && (f = Au()));
      var p = rh(a, s);
      if (p.length > 0) {
        var v = new Td(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = bd(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Oc(e, t) {
      switch (e) {
        case "compositionend":
          return bd(t);
        case "keypress":
          var a = t.which;
          return a !== Xv ? null : (qo = !0, wd);
        case "textInput":
          var i = t.data;
          return i === wd && qo ? null : i;
        default:
          return null;
      }
    }
    function Zv(e, t) {
      if (pi) {
        if (e === "compositionend" || !Xo && Jv(e, t)) {
          var a = Au();
          return Cc(), pi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!kc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bc && !_c(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hy(e, t, a, i, u) {
      var s;
      if (vy ? s = Oc(t, i) : s = Zv(t, i), !s)
        return null;
      var f = rh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Bl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Lc(e, t, a, i, u, s, f) {
      kd(e, t, a, i, u), hy(e, t, a, i, u);
    }
    var my = {
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
    function Vu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!my[e.type] : t === "textarea";
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
    function yy(e) {
      if (!dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Mc() {
      fr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Us(i);
      var u = rh(t, "onChange");
      if (u.length > 0) {
        var s = new qn("onChange", "change", null, a, i);
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
      n(t, l, e, zs(e)), Af(d, t);
    }
    function d(e) {
      w0(e, 0);
    }
    function h(e) {
      var t = Fc(e);
      if (jp(t))
        return e;
    }
    function S(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    dn && (C = yy("input") && (!document.documentMode || document.documentMode > 9));
    function L(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", V);
    }
    function F() {
      r && (r.detachEvent("onpropertychange", V), r = null, l = null);
    }
    function V(e) {
      e.propertyName === "value" && h(l) && c(e);
    }
    function H(e, t, a) {
      e === "focusin" ? (F(), L(t, a)) : e === "focusout" && F();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(l);
    }
    function re(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ue(e, t) {
      if (e === "click")
        return h(t);
    }
    function Wt(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function w(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Li(e, "number", e.value);
    }
    function R(e, t, a, i, u, s, f) {
      var p = a ? Fc(a) : window, v, m;
      if (o(p) ? v = S : Vu(p) ? C ? v = Wt : (v = q, m = H) : re(p) && (v = ue), v) {
        var y = v(t, a);
        if (y) {
          n(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && w(p);
    }
    function k() {
      Qr("onMouseEnter", ["mouseout", "mouseover"]), Qr("onMouseLeave", ["mouseout", "mouseover"]), Qr("onPointerEnter", ["pointerout", "pointerover"]), Qr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Y(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !mv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (Zo(m) || Pd(m)))
          return;
      }
      if (!(!v && !p)) {
        var y;
        if (u.window === u)
          y = u;
        else {
          var x = u.ownerDocument;
          x ? y = x.defaultView || x.parentWindow : y = window;
        }
        var T, _;
        if (v) {
          var O = i.relatedTarget || i.toElement;
          if (T = a, _ = O ? Zo(O) : null, _ !== null) {
            var N = zr(_);
            (_ !== N || _.tag !== le && _.tag !== Ue) && (_ = null);
          }
        } else
          T = null, _ = a;
        if (T !== _) {
          var Z = qi, me = "onMouseLeave", fe = "onMouseEnter", Ge = "mouse";
          (t === "pointerout" || t === "pointerover") && (Z = Rd, me = "onPointerLeave", fe = "onPointerEnter", Ge = "pointer");
          var Ye = T == null ? y : Fc(T), D = _ == null ? y : Fc(_), z = new Z(me, Ge + "leave", T, i, u);
          z.target = Ye, z.relatedTarget = D;
          var b = null, B = Zo(u);
          if (B === a) {
            var ee = new Z(fe, Ge + "enter", _, i, u);
            ee.target = D, ee.relatedTarget = Ye, b = ee;
          }
          RT(e, z, b, T, _);
        }
      }
    }
    function oe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ae = typeof Object.is == "function" ? Object.is : oe;
    function pe(e, t) {
      if (ae(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Vn.call(t, s) || !ae(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function De(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Cn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function qe(e, t) {
      for (var a = De(e), i = 0, u = 0; a; ) {
        if (a.nodeType === ei) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = De(Cn(a));
      }
    }
    function Ji(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return gy(e, u, s, f, p);
    }
    function gy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, x = null;
      e:
        for (; ; ) {
          for (var T = null; y === t && (a === 0 || y.nodeType === ei) && (f = s + a), y === i && (u === 0 || y.nodeType === ei) && (p = s + u), y.nodeType === ei && (s += y.nodeValue.length), (T = y.firstChild) !== null; )
            x = y, y = T;
          for (; ; ) {
            if (y === e)
              break e;
            if (x === t && ++v === a && (f = s), x === i && ++m === u && (p = s), (T = y.nextSibling) !== null)
              break;
            y = x, x = y.parentNode;
          }
          y = T;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function aT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = qe(e, f), y = qe(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var x = a.createRange();
          x.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(y.node, y.offset)) : (x.setEnd(y.node, y.offset), u.addRange(x));
        }
      }
    }
    function p0(e) {
      return e && e.nodeType === ei;
    }
    function v0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : p0(e) ? !1 : p0(t) ? v0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function iT(e) {
      return e && e.ownerDocument && v0(e.ownerDocument.documentElement, e);
    }
    function lT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function h0() {
      for (var e = window, t = Cs(); t instanceof e.HTMLIFrameElement; ) {
        if (lT(t))
          e = t.contentWindow;
        else
          return t;
        t = Cs(e.document);
      }
      return t;
    }
    function Sy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function uT() {
      var e = h0();
      return {
        focusedElem: e,
        selectionRange: Sy(e) ? sT(e) : null
      };
    }
    function oT(e) {
      var t = h0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && iT(a)) {
        i !== null && Sy(a) && cT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === pr && u.push({
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
    function sT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ji(e), t || {
        start: 0,
        end: 0
      };
    }
    function cT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : aT(e, t);
    }
    var fT = dn && "documentMode" in document && document.documentMode <= 11;
    function dT() {
      fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Nc = null, Ey = null, _d = null, Cy = !1;
    function pT(e) {
      if ("selectionStart" in e && Sy(e))
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
    function vT(e) {
      return e.window === e ? e.document : e.nodeType === Ra ? e : e.ownerDocument;
    }
    function m0(e, t, a) {
      var i = vT(a);
      if (!(Cy || Nc == null || Nc !== Cs(i))) {
        var u = pT(Nc);
        if (!_d || !pe(_d, u)) {
          _d = u;
          var s = rh(Ey, "onSelect");
          if (s.length > 0) {
            var f = new qn("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Nc;
          }
        }
      }
    }
    function hT(e, t, a, i, u, s, f) {
      var p = a ? Fc(a) : window;
      switch (t) {
        case "focusin":
          (Vu(p) || p.contentEditable === "true") && (Nc = p, Ey = a, _d = null);
          break;
        case "focusout":
          Nc = null, Ey = null, _d = null;
          break;
        case "mousedown":
          Cy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Cy = !1, m0(e, i, u);
          break;
        case "selectionchange":
          if (fT)
            break;
        case "keydown":
        case "keyup":
          m0(e, i, u);
      }
    }
    function eh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var zc = {
      animationend: eh("Animation", "AnimationEnd"),
      animationiteration: eh("Animation", "AnimationIteration"),
      animationstart: eh("Animation", "AnimationStart"),
      transitionend: eh("Transition", "TransitionEnd")
    }, Ty = {}, y0 = {};
    dn && (y0 = document.createElement("div").style, "AnimationEvent" in window || (delete zc.animationend.animation, delete zc.animationiteration.animation, delete zc.animationstart.animation), "TransitionEvent" in window || delete zc.transitionend.transition);
    function th(e) {
      if (Ty[e])
        return Ty[e];
      if (!zc[e])
        return e;
      var t = zc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in y0)
          return Ty[e] = t[a];
      return e;
    }
    var g0 = th("animationend"), S0 = th("animationiteration"), E0 = th("animationstart"), C0 = th("transitionend"), T0 = /* @__PURE__ */ new Map(), R0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      T0.set(e, t), fr(t, [e]);
    }
    function mT() {
      for (var e = 0; e < R0.length; e++) {
        var t = R0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + i);
      }
      Bu(g0, "onAnimationEnd"), Bu(S0, "onAnimationIteration"), Bu(E0, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(C0, "onTransitionEnd");
    }
    function yT(e, t, a, i, u, s, f) {
      var p = T0.get(t);
      if (p !== void 0) {
        var v = qn, m = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = fy;
            break;
          case "focusin":
            m = "focus", v = Rc;
            break;
          case "focusout":
            m = "blur", v = Rc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Rc;
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
            v = qi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Vl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ua;
            break;
          case g0:
          case S0:
          case E0:
            v = xc;
            break;
          case C0:
            v = py;
            break;
          case "scroll":
            v = gd;
            break;
          case "wheel":
            v = Dc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = uy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Rd;
            break;
        }
        var y = (s & gl) !== 0;
        {
          var x = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", T = CT(a, p, i.type, y, x);
          if (T.length > 0) {
            var _ = new v(p, m, null, i, u);
            e.push({
              event: _,
              listeners: T
            });
          }
        }
      }
    }
    mT(), k(), Mc(), dT(), qv();
    function gT(e, t, a, i, u, s, f) {
      yT(e, t, a, i, u, s);
      var p = (s & Gm) === 0;
      p && (Y(e, t, a, i, u), R(e, t, a, i, u), hT(e, t, a, i, u), Lc(e, t, a, i, u));
    }
    var Od = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Od));
    function x0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ai(i, t, void 0, e), e.currentTarget = null;
    }
    function ST(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          x0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], x = y.instance, T = y.currentTarget, _ = y.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          x0(e, _, T), i = x;
        }
    }
    function w0(e, t) {
      for (var a = (t & gl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        ST(s, f, a);
      }
      Vf();
    }
    function ET(e, t, a, i, u) {
      var s = zs(a), f = [];
      gT(f, e, i, a, s, t), w0(f, t);
    }
    function Vt(e, t) {
      Ry.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = qR(t), u = xT(e, a);
      i.has(u) || (D0(t, e, Co, a), i.add(u));
    }
    function xy(e, t, a) {
      Ry.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= gl), D0(a, e, i, t);
    }
    var nh = "_reactListening" + Math.random().toString(36).slice(2);
    function Ld(e) {
      if (!e[nh]) {
        e[nh] = !0, jn.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === Ra ? e : e.ownerDocument;
        t !== null && (t[nh] || (t[nh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = Nu(e, t, a), f = void 0;
      Do && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? di(e, t, s, f) : Uu(e, t, s) : f !== void 0 ? Ec(e, t, s, f) : yd(e, t, s);
    }
    function b0(e, t) {
      return e === t || e.nodeType === Kt && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if (!(t & ni) && !(t & Co)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === te || v === de) {
                var m = p.stateNode.containerInfo;
                if (b0(m, f))
                  break;
                if (v === de)
                  for (var y = p.return; y !== null; ) {
                    var x = y.tag;
                    if (x === te || x === de) {
                      var T = y.stateNode.containerInfo;
                      if (b0(T, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var _ = Zo(m);
                  if (_ === null)
                    return;
                  var O = _.tag;
                  if (O === le || O === Ue) {
                    p = s = _;
                    continue e;
                  }
                  m = m.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      Af(function() {
        return ET(e, t, a, s);
      });
    }
    function Md(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function CT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var x = m, T = x.stateNode, _ = x.tag;
        if (_ === le && T !== null && (y = T, p !== null)) {
          var O = El(m, p);
          O != null && v.push(Md(m, O, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function rh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var v = f, m = El(u, a);
          m != null && i.unshift(Md(u, m, v));
          var y = El(u, t);
          y != null && i.push(Md(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function Uc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== le);
      return e || null;
    }
    function TT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Uc(s))
        u++;
      for (var f = 0, p = i; p; p = Uc(p))
        f++;
      for (; u - f > 0; )
        a = Uc(a), u--;
      for (; f - u > 0; )
        i = Uc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Uc(a), i = Uc(i);
      }
      return null;
    }
    function k0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, x = v.tag;
        if (m !== null && m === i)
          break;
        if (x === le && y !== null) {
          var T = y;
          if (u) {
            var _ = El(p, s);
            _ != null && f.unshift(Md(p, _, T));
          } else if (!u) {
            var O = El(p, s);
            O != null && f.push(Md(p, O, T));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function RT(e, t, a, i, u) {
      var s = i && u ? TT(i, u) : null;
      i !== null && k0(e, t, i, s, !1), u !== null && a !== null && k0(e, a, u, s, !0);
    }
    function xT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var oa = !1, Nd = "dangerouslySetInnerHTML", ah = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", _0 = "autoFocus", Ko = "children", Jo = "style", ih = "__html", Dy, lh, zd, O0, uh, L0, M0;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, lh = function(e, t) {
      Ns(e, t), Lf(e, t), hv(e, t, {
        registrationNameDependencies: cr,
        possibleRegistrationNames: Ma
      });
    }, L0 = dn && !document.documentMode, zd = function(e, t, a) {
      if (!oa) {
        var i = oh(a), u = oh(t);
        u !== i && (oa = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, O0 = function(e) {
      if (!oa) {
        oa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, uh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, M0 = function(e, t) {
      var a = e.namespaceURI === Za ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var wT = /\r\n?/g, DT = /\u0000|\uFFFD/g;
    function oh(e) {
      ma(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(wT, `
`).replace(DT, "");
    }
    function sh(e, t, a, i) {
      var u = oh(t), s = oh(e);
      if (s !== u && (i && (oa || (oa = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Kn))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function N0(e) {
      return e.nodeType === Ra ? e : e.ownerDocument;
    }
    function bT() {
    }
    function ch(e) {
      e.onclick = bT;
    }
    function kT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Jo)
            f && Object.freeze(f), iv(t, f);
          else if (s === Nd) {
            var p = f ? f[ih] : void 0;
            p != null && Gp(t, p);
          } else if (s === Ko)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && _s(t, f);
            } else
              typeof f == "number" && _s(t, "" + f);
          else
            s === ah || s === Pu || s === _0 || (cr.hasOwnProperty(s) ? f != null && (typeof f != "function" && uh(s, f), s === "onScroll" && Vt("scroll", t)) : f != null && Ua(t, s, f, u));
        }
    }
    function _T(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Jo ? iv(e, f) : s === Nd ? Gp(e, f) : s === Ko ? _s(e, f) : Ua(e, s, f, i);
      }
    }
    function OT(e, t, a, i) {
      var u, s = N0(a), f, p = i;
      if (p === Za && (p = bs(e)), p === Za) {
        if (u = ti(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === Za && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Vn.call(Dy, e) && (Dy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function LT(e, t) {
      return N0(t).createTextNode(e);
    }
    function MT(e, t, a, i) {
      var u = ti(t, a);
      lh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Vt("cancel", e), Vt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Vt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Od.length; f++)
            Vt(Od[f], e);
          s = a;
          break;
        case "source":
          Vt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Vt("error", e), Vt("load", e), s = a;
          break;
        case "details":
          Vt("toggle", e), s = a;
          break;
        case "input":
          ho(e, a), s = vo(e, a), Vt("invalid", e);
          break;
        case "option":
          ws(e, a), s = a;
          break;
        case "select":
          $p(e, a), s = Ef(e, a), Vt("invalid", e);
          break;
        case "textarea":
          Qp(e, a), s = Tf(e, a), Vt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ls(t, s), kT(t, e, i, s, u), t) {
        case "input":
          hl(e), mo(e, a, !1);
          break;
        case "textarea":
          hl(e), Wp(e);
          break;
        case "option":
          Sf(e, a);
          break;
        case "select":
          Hm(e, a);
          break;
        default:
          typeof s.onClick == "function" && ch(e);
          break;
      }
    }
    function NT(e, t, a, i, u) {
      lh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = vo(e, a), p = vo(e, i), s = [];
          break;
        case "select":
          f = Ef(e, a), p = Ef(e, i), s = [];
          break;
        case "textarea":
          f = Tf(e, a), p = Tf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && ch(e);
          break;
      }
      Ls(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Jo) {
            var x = f[v];
            for (m in x)
              x.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else
            v === Nd || v === Ko || v === ah || v === Pu || v === _0 || (cr.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var T = p[v], _ = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || T === _ || T == null && _ == null))
          if (v === Jo)
            if (T && Object.freeze(T), _) {
              for (m in _)
                _.hasOwnProperty(m) && (!T || !T.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && _[m] !== T[m] && (y || (y = {}), y[m] = T[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = T;
          else if (v === Nd) {
            var O = T ? T[ih] : void 0, N = _ ? _[ih] : void 0;
            O != null && N !== O && (s = s || []).push(v, O);
          } else
            v === Ko ? (typeof T == "string" || typeof T == "number") && (s = s || []).push(v, "" + T) : v === ah || v === Pu || (cr.hasOwnProperty(v) ? (T != null && (typeof T != "function" && uh(v, T), v === "onScroll" && Vt("scroll", e)), !s && _ !== T && (s = [])) : (s = s || []).push(v, T));
      }
      return y && (So(y, p[Jo]), (s = s || []).push(Jo, y)), s;
    }
    function zT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && gf(e, u);
      var s = ti(a, i), f = ti(a, u);
      switch (_T(e, t, s, f), a) {
        case "input":
          cu(e, u);
          break;
        case "textarea":
          Ip(e, u);
          break;
        case "select":
          Fm(e, u);
          break;
      }
    }
    function UT(e) {
      {
        var t = e.toLowerCase();
        return Ms.hasOwnProperty(t) && Ms[t] || null;
      }
    }
    function AT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ti(t, a), lh(t, a), t) {
        case "dialog":
          Vt("cancel", e), Vt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Vt("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Od.length; m++)
            Vt(Od[m], e);
          break;
        case "source":
          Vt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Vt("error", e), Vt("load", e);
          break;
        case "details":
          Vt("toggle", e);
          break;
        case "input":
          ho(e, a), Vt("invalid", e);
          break;
        case "option":
          ws(e, a);
          break;
        case "select":
          $p(e, a), Vt("invalid", e);
          break;
        case "textarea":
          Qp(e, a), Vt("invalid", e);
          break;
      }
      Ls(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var y = e.attributes, x = 0; x < y.length; x++) {
          var T = y[x].name.toLowerCase();
          switch (T) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(y[x].name);
          }
        }
      }
      var _ = null;
      for (var O in a)
        if (a.hasOwnProperty(O)) {
          var N = a[O];
          if (O === Ko)
            typeof N == "string" ? e.textContent !== N && (a[Pu] !== !0 && sh(e.textContent, N, s, f), _ = [Ko, N]) : typeof N == "number" && e.textContent !== "" + N && (a[Pu] !== !0 && sh(e.textContent, N, s, f), _ = [Ko, "" + N]);
          else if (cr.hasOwnProperty(O))
            N != null && (typeof N != "function" && uh(O, N), O === "onScroll" && Vt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Z = void 0, me = p && wn ? null : Or(O);
            if (a[Pu] !== !0) {
              if (!(O === ah || O === Pu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              O === "value" || O === "checked" || O === "selected")) {
                if (O === Nd) {
                  var fe = e.innerHTML, Ge = N ? N[ih] : void 0;
                  if (Ge != null) {
                    var Ye = M0(e, Ge);
                    Ye !== fe && zd(O, fe, Ye);
                  }
                } else if (O === Jo) {
                  if (v.delete(O), L0) {
                    var D = Im(N);
                    Z = e.getAttribute("style"), D !== Z && zd(O, Z, D);
                  }
                } else if (p && !wn)
                  v.delete(O.toLowerCase()), Z = lu(e, O, N), N !== Z && zd(O, Z, N);
                else if (!Qt(O, me, p) && !Ct(O, N, me, p)) {
                  var z = !1;
                  if (me !== null)
                    v.delete(me.attributeName), Z = dl(e, O, N, me);
                  else {
                    var b = i;
                    if (b === Za && (b = bs(t)), b === Za)
                      v.delete(O.toLowerCase());
                    else {
                      var B = UT(O);
                      B !== null && B !== O && (z = !0, v.delete(B)), v.delete(O);
                    }
                    Z = lu(e, O, N);
                  }
                  var ee = wn;
                  !ee && N !== Z && !z && zd(O, Z, N);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Pu] !== !0 && O0(v), t) {
        case "input":
          hl(e), mo(e, a, !0);
          break;
        case "textarea":
          hl(e), Wp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && ch(e);
          break;
      }
      return _;
    }
    function HT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function by(e, t) {
      {
        if (oa)
          return;
        oa = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (oa)
          return;
        oa = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function _y(e, t, a) {
      {
        if (oa)
          return;
        oa = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (t === "" || oa)
          return;
        oa = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function FT(e, t, a) {
      switch (t) {
        case "input":
          Vp(e, a);
          return;
        case "textarea":
          Rf(e, a);
          return;
        case "select":
          jm(e, a);
          return;
      }
    }
    var Ud = function() {
    }, Ad = function() {
    };
    {
      var jT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], z0 = [
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
      ], VT = z0.concat(["button"]), BT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], U0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Ad = function(e, t) {
        var a = Be({}, e || U0), i = {
          tag: t
        };
        return z0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), VT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), jT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var PT = function(e, t) {
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
            return BT.indexOf(t) === -1;
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
      }, YT = function(e, t) {
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
      }, A0 = {};
      Ud = function(e, t, a) {
        a = a || U0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = PT(e, u) ? null : i, f = s ? null : YT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!A0[m]) {
            A0[m] = !0;
            var y = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? y = "Text nodes" : (y = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : y = "<" + e + ">", s) {
              var T = "";
              v === "table" && e === "tr" && (T += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", y, v, x, T);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", y, v);
          }
        }
      };
    }
    var fh = "suppressHydrationWarning", dh = "$", ph = "/$", Hd = "$?", Fd = "$!", $T = "style", Ly = null, My = null;
    function QT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ra:
        case ml: {
          t = i === Ra ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : wf(null, "");
          break;
        }
        default: {
          var s = i === Kt ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = wf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Ad(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function IT(e, t, a) {
      {
        var i = e, u = wf(i.namespace, t), s = Ad(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function ek(e) {
      return e;
    }
    function WT(e) {
      Ly = Fr(), My = uT();
      var t = null;
      return En(!1), t;
    }
    function GT(e) {
      oT(My), En(Ly), Ly = null, My = null;
    }
    function XT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Ud(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Ad(f.ancestorInfo, e);
          Ud(null, p, v);
        }
        s = f.namespace;
      }
      var m = OT(e, t, a, s);
      return Bd(u, m), Vy(m, t), m;
    }
    function qT(e, t) {
      e.appendChild(t);
    }
    function KT(e, t, a, i, u) {
      switch (MT(e, t, a, i), t) {
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
    function JT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Ad(f.ancestorInfo, t);
          Ud(null, p, v);
        }
      }
      return NT(e, t, a, i);
    }
    function Ny(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ZT(e, t, a, i) {
      {
        var u = a;
        Ud(null, e, u.ancestorInfo);
      }
      var s = LT(e, t);
      return Bd(i, s), s;
    }
    function eR() {
      var e = window.event;
      return e === void 0 ? si : er(e.type);
    }
    var zy = typeof setTimeout == "function" ? setTimeout : void 0, tR = typeof clearTimeout == "function" ? clearTimeout : void 0, Uy = -1, H0 = typeof Promise == "function" ? Promise : void 0, nR = typeof queueMicrotask == "function" ? queueMicrotask : typeof H0 < "u" ? function(e) {
      return H0.resolve(null).then(e).catch(rR);
    } : zy;
    function rR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function aR(e, t, a, i) {
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
    function iR(e, t, a, i, u, s) {
      zT(e, t, a, i, u), Vy(e, u);
    }
    function F0(e) {
      _s(e, "");
    }
    function lR(e, t, a) {
      e.nodeValue = a;
    }
    function uR(e, t) {
      e.appendChild(t);
    }
    function oR(e, t) {
      var a;
      e.nodeType === Kt ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && ch(a);
    }
    function sR(e, t, a) {
      e.insertBefore(t, a);
    }
    function cR(e, t, a) {
      e.nodeType === Kt ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function fR(e, t) {
      e.removeChild(t);
    }
    function dR(e, t) {
      e.nodeType === Kt ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ay(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Kt) {
          var s = u.data;
          if (s === ph)
            if (i === 0) {
              e.removeChild(u), Pe(t);
              return;
            } else
              i--;
          else
            (s === dh || s === Hd || s === Fd) && i++;
        }
        a = u;
      } while (a);
      Pe(t);
    }
    function pR(e, t) {
      e.nodeType === Kt ? Ay(e.parentNode, t) : e.nodeType === pr && Ay(e, t), Pe(e);
    }
    function vR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function hR(e) {
      e.nodeValue = "";
    }
    function mR(e, t) {
      e = e;
      var a = t[$T], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Os("display", i);
    }
    function yR(e, t) {
      e.nodeValue = t;
    }
    function gR(e) {
      e.nodeType === pr ? e.textContent = "" : e.nodeType === Ra && e.documentElement && e.removeChild(e.documentElement);
    }
    function SR(e, t, a) {
      return e.nodeType !== pr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ER(e, t) {
      return t === "" || e.nodeType !== ei ? null : e;
    }
    function CR(e) {
      return e.nodeType !== Kt ? null : e;
    }
    function j0(e) {
      return e.data === Hd;
    }
    function Hy(e) {
      return e.data === Fd;
    }
    function TR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function RR(e, t) {
      e._reactRetry = t;
    }
    function vh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === pr || t === ei)
          break;
        if (t === Kt) {
          var a = e.data;
          if (a === dh || a === Fd || a === Hd)
            break;
          if (a === ph)
            return null;
        }
      }
      return e;
    }
    function jd(e) {
      return vh(e.nextSibling);
    }
    function xR(e) {
      return vh(e.firstChild);
    }
    function wR(e) {
      return vh(e.firstChild);
    }
    function DR(e) {
      return vh(e.nextSibling);
    }
    function bR(e, t, a, i, u, s, f) {
      Bd(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & Fe) !== Se;
      return AT(e, t, a, p, i, m, f);
    }
    function kR(e, t, a, i) {
      return Bd(a, e), a.mode & Fe, HT(e, t);
    }
    function _R(e, t) {
      Bd(t, e);
    }
    function OR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Kt) {
          var i = t.data;
          if (i === ph) {
            if (a === 0)
              return jd(t);
            a--;
          } else
            (i === dh || i === Fd || i === Hd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function V0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Kt) {
          var i = t.data;
          if (i === dh || i === Fd || i === Hd) {
            if (a === 0)
              return t;
            a--;
          } else
            i === ph && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function LR(e) {
      Pe(e);
    }
    function MR(e) {
      Pe(e);
    }
    function NR(e) {
      return e !== "head" && e !== "body";
    }
    function zR(e, t, a, i) {
      var u = !0;
      sh(t.nodeValue, a, i, u);
    }
    function UR(e, t, a, i, u, s) {
      if (t[fh] !== !0) {
        var f = !0;
        sh(i.nodeValue, u, s, f);
      }
    }
    function AR(e, t) {
      t.nodeType === pr ? by(e, t) : t.nodeType === Kt || ky(e, t);
    }
    function HR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === pr ? by(a, t) : t.nodeType === Kt || ky(a, t));
      }
    }
    function FR(e, t, a, i, u) {
      (u || t[fh] !== !0) && (i.nodeType === pr ? by(a, i) : i.nodeType === Kt || ky(a, i));
    }
    function jR(e, t, a) {
      _y(e, t);
    }
    function VR(e, t) {
      Oy(e, t);
    }
    function BR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && _y(i, t);
      }
    }
    function PR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Oy(a, t);
      }
    }
    function YR(e, t, a, i, u, s) {
      (s || t[fh] !== !0) && _y(a, i);
    }
    function $R(e, t, a, i, u) {
      (u || t[fh] !== !0) && Oy(a, i);
    }
    function QR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function IR(e) {
      Ld(e);
    }
    var Ac = Math.random().toString(36).slice(2), Hc = "__reactFiber$" + Ac, Fy = "__reactProps$" + Ac, Vd = "__reactContainer$" + Ac, jy = "__reactEvents$" + Ac, WR = "__reactListeners$" + Ac, GR = "__reactHandles$" + Ac;
    function XR(e) {
      delete e[Hc], delete e[Fy], delete e[jy], delete e[WR], delete e[GR];
    }
    function Bd(e, t) {
      t[Hc] = e;
    }
    function hh(e, t) {
      t[Vd] = e;
    }
    function B0(e) {
      e[Vd] = null;
    }
    function Pd(e) {
      return !!e[Vd];
    }
    function Zo(e) {
      var t = e[Hc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Vd] || a[Hc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = V0(e); u !== null; ) {
              var s = u[Hc];
              if (s)
                return s;
              u = V0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Yu(e) {
      var t = e[Hc] || e[Vd];
      return t && (t.tag === le || t.tag === Ue || t.tag === Ve || t.tag === te) ? t : null;
    }
    function Fc(e) {
      if (e.tag === le || e.tag === Ue)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function mh(e) {
      return e[Fy] || null;
    }
    function Vy(e, t) {
      e[Fy] = t;
    }
    function qR(e) {
      var t = e[jy];
      return t === void 0 && (t = e[jy] = /* @__PURE__ */ new Set()), t;
    }
    var P0 = {}, Y0 = M.ReactDebugCurrentFrame;
    function yh(e) {
      if (e) {
        var t = e._owner, a = uo(e.type, e._source, t ? t.type : null);
        Y0.setExtraStackFrame(a);
      } else
        Y0.setExtraStackFrame(null);
    }
    function vi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Vn);
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
            p && !(p instanceof Error) && (yh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), yh(null)), p instanceof Error && !(p.message in P0) && (P0[p.message] = !0, yh(u), g("Failed %s type: %s", a, p.message), yh(null));
          }
      }
    }
    var By = [], gh;
    gh = [];
    var $l = -1;
    function $u(e) {
      return {
        current: e
      };
    }
    function Tr(e, t) {
      if ($l < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== gh[$l] && g("Unexpected Fiber popped."), e.current = By[$l], By[$l] = null, gh[$l] = null, $l--;
    }
    function Rr(e, t, a) {
      $l++, By[$l] = e.current, gh[$l] = a, e.current = t;
    }
    var Py;
    Py = {};
    var ka = {};
    Object.freeze(ka);
    var Ql = $u(ka), Zi = $u(!1), Yy = ka;
    function jc(e, t, a) {
      return a && el(t) ? Yy : Ql.current;
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Vc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ka;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Oe(e) || "Unknown";
          vi(i, s, "context", p);
        }
        return u && $0(e, t, s), s;
      }
    }
    function Sh() {
      return Zi.current;
    }
    function el(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Eh(e) {
      Tr(Zi, e), Tr(Ql, e);
    }
    function $y(e) {
      Tr(Zi, e), Tr(Ql, e);
    }
    function Q0(e, t, a) {
      {
        if (Ql.current !== ka)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Rr(Ql, t, e), Rr(Zi, a, e);
      }
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Oe(e) || "Unknown";
            Py[s] || (Py[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Oe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Oe(e) || "Unknown";
          vi(u, f, "child context", v);
        }
        return Be({}, a, f);
      }
    }
    function Ch(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ka;
        return Yy = Ql.current, Rr(Ql, a, e), Rr(Zi, Zi.current, e), !0;
      }
    }
    function W0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = I0(e, t, Yy);
          i.__reactInternalMemoizedMergedChildContext = u, Tr(Zi, e), Tr(Ql, e), Rr(Ql, u, e), Rr(Zi, a, e);
        } else
          Tr(Zi, e), Rr(Zi, a, e);
      }
    }
    function KR(e) {
      {
        if (!Qf(e) || e.tag !== ce)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case ce: {
              var a = t.type;
              if (el(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qu = 0, Th = 1, Il = null, Qy = !1, Iy = !1;
    function G0(e) {
      Il === null ? Il = [e] : Il.push(e);
    }
    function JR(e) {
      Qy = !0, G0(e);
    }
    function X0() {
      Qy && Iu();
    }
    function Iu() {
      if (!Iy && Il !== null) {
        Iy = !0;
        var e = 0, t = aa();
        try {
          var a = !0, i = Il;
          for (ln(Qn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Il = null, Qy = !1;
        } catch (s) {
          throw Il !== null && (Il = Il.slice(e + 1)), Bs(Ys, Iu), s;
        } finally {
          ln(t), Iy = !1;
        }
      }
      return null;
    }
    var Bc = [], Pc = 0, Rh = null, xh = 0, Ya = [], $a = 0, es = null, Wl = 1, Gl = "";
    function ZR(e) {
      return ns(), (e.flags & Pf) !== he;
    }
    function ex(e) {
      return ns(), xh;
    }
    function tx() {
      var e = Gl, t = Wl, a = t & ~nx(t);
      return a.toString(32) + e;
    }
    function ts(e, t) {
      ns(), Bc[Pc++] = xh, Bc[Pc++] = Rh, Rh = e, xh = t;
    }
    function q0(e, t, a) {
      ns(), Ya[$a++] = Wl, Ya[$a++] = Gl, Ya[$a++] = es, es = e;
      var i = Wl, u = Gl, s = wh(i) - 1, f = i & ~(1 << s), p = a + 1, v = wh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, x = (f & y).toString(32), T = f >> m, _ = s - m, O = wh(t) + _, N = p << _, Z = N | T, me = x + u;
        Wl = 1 << O | Z, Gl = me;
      } else {
        var fe = p << s, Ge = fe | f, Ye = u;
        Wl = 1 << v | Ge, Gl = Ye;
      }
    }
    function Wy(e) {
      ns();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ts(e, a), q0(e, a, i);
      }
    }
    function wh(e) {
      return 32 - Xs(e);
    }
    function nx(e) {
      return 1 << wh(e) - 1;
    }
    function Gy(e) {
      for (; e === Rh; )
        Rh = Bc[--Pc], Bc[Pc] = null, xh = Bc[--Pc], Bc[Pc] = null;
      for (; e === es; )
        es = Ya[--$a], Ya[$a] = null, Gl = Ya[--$a], Ya[$a] = null, Wl = Ya[--$a], Ya[$a] = null;
    }
    function rx() {
      return ns(), es !== null ? {
        id: Wl,
        overflow: Gl
      } : null;
    }
    function ax(e, t) {
      ns(), Ya[$a++] = Wl, Ya[$a++] = Gl, Ya[$a++] = es, Wl = t.id, Gl = t.overflow, es = e;
    }
    function ns() {
      nr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var tr = null, Qa = null, hi = !1, rs = !1, Wu = null;
    function ix() {
      hi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function K0() {
      rs = !0;
    }
    function lx() {
      return rs;
    }
    function ux(e) {
      var t = e.stateNode.containerInfo;
      return Qa = wR(t), tr = e, hi = !0, Wu = null, rs = !1, !0;
    }
    function ox(e, t, a) {
      return Qa = DR(t), tr = e, hi = !0, Wu = null, rs = !1, a !== null && ax(e, a), !0;
    }
    function J0(e, t) {
      switch (e.tag) {
        case te: {
          AR(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & Fe) !== Se;
          FR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ve: {
          var i = e.memoizedState;
          i.dehydrated !== null && HR(i.dehydrated, t);
          break;
        }
      }
    }
    function Z0(e, t) {
      J0(e, t);
      var a = fb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= it) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (rs)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, jR(a, i);
                break;
              case Ue:
                var u = t.pendingProps;
                VR(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, m = t.pendingProps, y = (e.mode & Fe) !== Se;
                YR(
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
              case Ue: {
                var x = t.pendingProps, T = (e.mode & Fe) !== Se;
                $R(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
            }
            break;
          }
          case Ve: {
            var _ = e.memoizedState, O = _.dehydrated;
            if (O !== null)
              switch (t.tag) {
                case le:
                  var N = t.type;
                  t.pendingProps, BR(O, N);
                  break;
                case Ue:
                  var Z = t.pendingProps;
                  PR(O, Z);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function eE(e, t) {
      t.flags = t.flags & ~Zr | wt, Xy(e, t);
    }
    function tE(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = SR(t, a);
          return i !== null ? (e.stateNode = i, tr = e, Qa = xR(i), !0) : !1;
        }
        case Ue: {
          var u = e.pendingProps, s = ER(t, u);
          return s !== null ? (e.stateNode = s, tr = e, Qa = null, !0) : !1;
        }
        case Ve: {
          var f = CR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: rx(),
              retryLane: Er
            };
            e.memoizedState = p;
            var v = db(f);
            return v.return = e, e.child = v, tr = e, Qa = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qy(e) {
      return (e.mode & Fe) !== Se && (e.flags & we) === he;
    }
    function Ky(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (hi) {
        var t = Qa;
        if (!t) {
          qy(e) && (Xy(tr, e), Ky()), eE(tr, e), hi = !1, tr = e;
          return;
        }
        var a = t;
        if (!tE(e, t)) {
          qy(e) && (Xy(tr, e), Ky()), t = jd(a);
          var i = tr;
          if (!t || !tE(e, t)) {
            eE(tr, e), hi = !1, tr = e;
            return;
          }
          Z0(i, a);
        }
      }
    }
    function sx(e, t, a) {
      var i = e.stateNode, u = !rs, s = bR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function cx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = kR(t, a, e);
      if (i) {
        var u = tr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & Fe) !== Se;
              zR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & Fe) !== Se;
              UR(
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
    function fx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      _R(a, e);
    }
    function dx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return OR(a);
    }
    function nE(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== te && t.tag !== Ve; )
        t = t.return;
      tr = t;
    }
    function Dh(e) {
      if (e !== tr)
        return !1;
      if (!hi)
        return nE(e), hi = !0, !1;
      if (e.tag !== te && (e.tag !== le || NR(e.type) && !Ny(e.type, e.memoizedProps))) {
        var t = Qa;
        if (t)
          if (qy(e))
            rE(e), Ky();
          else
            for (; t; )
              Z0(e, t), t = jd(t);
      }
      return nE(e), e.tag === Ve ? Qa = dx(e) : Qa = tr ? jd(e.stateNode) : null, !0;
    }
    function px() {
      return hi && Qa !== null;
    }
    function rE(e) {
      for (var t = Qa; t; )
        J0(e, t), t = jd(t);
    }
    function Yc() {
      tr = null, Qa = null, hi = !1, rs = !1;
    }
    function aE() {
      Wu !== null && (JC(Wu), Wu = null);
    }
    function nr() {
      return hi;
    }
    function Zy(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    var vx = M.ReactCurrentBatchConfig, hx = null;
    function mx() {
      return vx.transition;
    }
    var mi = {
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
      var yx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Ft && (t = a), a = a.return;
        return t;
      }, as = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Yd = [], $d = [], Qd = [], Id = [], Wd = [], Gd = [], is = /* @__PURE__ */ new Set();
      mi.recordUnsafeLifecycleWarnings = function(e, t) {
        is.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Yd.push(e), e.mode & Ft && typeof t.UNSAFE_componentWillMount == "function" && $d.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Qd.push(e), e.mode & Ft && typeof t.UNSAFE_componentWillReceiveProps == "function" && Id.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Wd.push(e), e.mode & Ft && typeof t.UNSAFE_componentWillUpdate == "function" && Gd.push(e));
      }, mi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Yd.length > 0 && (Yd.forEach(function(T) {
          e.add(Oe(T) || "Component"), is.add(T.type);
        }), Yd = []);
        var t = /* @__PURE__ */ new Set();
        $d.length > 0 && ($d.forEach(function(T) {
          t.add(Oe(T) || "Component"), is.add(T.type);
        }), $d = []);
        var a = /* @__PURE__ */ new Set();
        Qd.length > 0 && (Qd.forEach(function(T) {
          a.add(Oe(T) || "Component"), is.add(T.type);
        }), Qd = []);
        var i = /* @__PURE__ */ new Set();
        Id.length > 0 && (Id.forEach(function(T) {
          i.add(Oe(T) || "Component"), is.add(T.type);
        }), Id = []);
        var u = /* @__PURE__ */ new Set();
        Wd.length > 0 && (Wd.forEach(function(T) {
          u.add(Oe(T) || "Component"), is.add(T.type);
        }), Wd = []);
        var s = /* @__PURE__ */ new Set();
        if (Gd.length > 0 && (Gd.forEach(function(T) {
          s.add(Oe(T) || "Component"), is.add(T.type);
        }), Gd = []), t.size > 0) {
          var f = as(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = as(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = as(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = as(e);
          $e(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = as(a);
          $e(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var x = as(u);
          $e(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var bh = /* @__PURE__ */ new Map(), iE = /* @__PURE__ */ new Set();
      mi.recordLegacyContextWarning = function(e, t) {
        var a = yx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!iE.has(e.type)) {
          var i = bh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], bh.set(a, i)), i.push(e));
        }
      }, mi.flushLegacyContextWarning = function() {
        bh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Oe(s) || "Component"), iE.add(s.type);
            });
            var u = as(i);
            try {
              dt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              nn();
            }
          }
        });
      }, mi.discardPendingWarnings = function() {
        Yd = [], $d = [], Qd = [], Id = [], Wd = [], Gd = [], bh = /* @__PURE__ */ new Map();
      };
    }
    function yi(e, t) {
      if (e && e.defaultProps) {
        var a = Be({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var eg = $u(null), tg;
    tg = {};
    var kh = null, $c = null, ng = null, _h = !1;
    function Oh() {
      kh = null, $c = null, ng = null, _h = !1;
    }
    function lE() {
      _h = !0;
    }
    function uE() {
      _h = !1;
    }
    function oE(e, t, a) {
      Rr(eg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== tg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = tg;
    }
    function rg(e, t) {
      var a = eg.current;
      Tr(eg, t), e._currentValue = a;
    }
    function ag(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Nl(i.childLanes, t) ? u !== null && !Nl(u.childLanes, t) && (u.childLanes = Me(u.childLanes, t)) : (i.childLanes = Me(i.childLanes, t), u !== null && (u.childLanes = Me(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gx(e, t, a) {
      Sx(e, t, a);
    }
    function Sx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ce) {
                var p = an(a), v = Xl(Et, p);
                v.tag = Mh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, x = y.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), y.pending = v;
                }
              }
              i.lanes = Me(i.lanes, a);
              var T = i.alternate;
              T !== null && (T.lanes = Me(T.lanes, a)), ag(i.return, a, e), s.lanes = Me(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ke)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Bt) {
          var _ = i.return;
          if (_ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          _.lanes = Me(_.lanes, a);
          var O = _.alternate;
          O !== null && (O.lanes = Me(O.lanes, a)), ag(_, a, e), u = i.sibling;
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
            var N = u.sibling;
            if (N !== null) {
              N.return = u.return, u = N;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Qc(e, t) {
      kh = e, $c = null, ng = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Cr(a.lanes, t) && op(), a.firstContext = null);
      }
    }
    function Tn(e) {
      _h && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ng !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if ($c === null) {
          if (kh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          $c = a, kh.dependencies = {
            lanes: U,
            firstContext: a
          };
        } else
          $c = $c.next = a;
      }
      return t;
    }
    var ls = null;
    function ig(e) {
      ls === null ? ls = [e] : ls.push(e);
    }
    function Ex() {
      if (ls !== null) {
        for (var e = 0; e < ls.length; e++) {
          var t = ls[e], a = t.interleaved;
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
        ls = null;
      }
    }
    function sE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ig(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Lh(e, i);
    }
    function Cx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ig(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Tx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ig(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Lh(e, i);
    }
    function sa(e, t) {
      return Lh(e, t);
    }
    var Rx = Lh;
    function Lh(e, t) {
      e.lanes = Me(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Me(a.lanes, t)), a === null && (e.flags & (wt | Zr)) !== he && c1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Me(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Me(a.childLanes, t) : (u.flags & (wt | Zr)) !== he && c1(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var cE = 0, fE = 1, Mh = 2, lg = 3, Nh = !1, ug, zh;
    ug = !1, zh = null;
    function og(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: U
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function dE(e, t) {
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
    function Xl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: cE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Gu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (zh === u && !ug && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ug = !0), RD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Rx(e, a);
      } else
        return Tx(e, u, t, a);
    }
    function Uh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (ad(a)) {
          var s = u.lanes;
          s = ld(s, e.pendingLanes);
          var f = Me(s, a);
          u.lanes = f, ku(e, f);
        }
      }
    }
    function sg(e, t) {
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
    function xx(e, t, a, i, u, s) {
      switch (a.tag) {
        case fE: {
          var f = a.payload;
          if (typeof f == "function") {
            lE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Ft) {
                rn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  rn(!1);
                }
              }
              uE();
            }
            return p;
          }
          return f;
        }
        case lg:
          e.flags = e.flags & ~yn | we;
        case cE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            lE(), m = v.call(s, i, u);
            {
              if (e.mode & Ft) {
                rn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  rn(!1);
                }
              }
              uE();
            }
          } else
            m = v;
          return m == null ? i : Be({}, i, m);
        }
        case Mh:
          return Nh = !0, i;
      }
      return i;
    }
    function Ah(e, t, a, i) {
      var u = e.updateQueue;
      Nh = !1, zh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var y = e.alternate;
        if (y !== null) {
          var x = y.updateQueue, T = x.lastBaseUpdate;
          T !== f && (T === null ? x.firstBaseUpdate = m : T.next = m, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var _ = u.baseState, O = U, N = null, Z = null, me = null, fe = s;
        do {
          var Ge = fe.lane, Ye = fe.eventTime;
          if (Nl(i, Ge)) {
            if (me !== null) {
              var z = {
                eventTime: Ye,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ie,
                tag: fe.tag,
                payload: fe.payload,
                callback: fe.callback,
                next: null
              };
              me = me.next = z;
            }
            _ = xx(e, u, fe, _, t, a);
            var b = fe.callback;
            if (b !== null && // If the update was already committed, we should not queue its
            // callback again.
            fe.lane !== Ie) {
              e.flags |= Ha;
              var B = u.effects;
              B === null ? u.effects = [fe] : B.push(fe);
            }
          } else {
            var D = {
              eventTime: Ye,
              lane: Ge,
              tag: fe.tag,
              payload: fe.payload,
              callback: fe.callback,
              next: null
            };
            me === null ? (Z = me = D, N = _) : me = me.next = D, O = Me(O, Ge);
          }
          if (fe = fe.next, fe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ee = p, X = ee.next;
            ee.next = null, fe = X, u.lastBaseUpdate = ee, u.shared.pending = null;
          }
        } while (!0);
        me === null && (N = _), u.baseState = N, u.firstBaseUpdate = Z, u.lastBaseUpdate = me;
        var xe = u.shared.interleaved;
        if (xe !== null) {
          var _e = xe;
          do
            O = Me(O, _e.lane), _e = _e.next;
          while (_e !== xe);
        } else
          s === null && (u.shared.lanes = U);
        Ep(O), e.lanes = O, e.memoizedState = _;
      }
      zh = null;
    }
    function wx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function pE() {
      Nh = !1;
    }
    function Hh() {
      return Nh;
    }
    function vE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, wx(f, a));
        }
    }
    var cg = {}, hE = new P.Component().refs, fg, dg, pg, vg, hg, mE, Fh, mg, yg, gg;
    {
      fg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set();
      var yE = /* @__PURE__ */ new Set();
      Fh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          yE.has(a) || (yE.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, mE = function(e, t) {
        if (t === void 0) {
          var a = gt(e) || "Component";
          hg.has(a) || (hg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(cg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(cg);
    }
    function Sg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Ft) {
          rn(!0);
          try {
            s = a(i, u);
          } finally {
            rn(!1);
          }
        }
        mE(t, s);
      }
      var f = s == null ? u : Be({}, u, s);
      if (e.memoizedState = f, e.lanes === U) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Eg = {
      isMounted: Ur,
      enqueueSetState: function(e, t, a) {
        var i = Kr(e), u = Br(), s = no(i), f = Xl(u, s);
        f.payload = t, a != null && (Fh(a, "setState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (Hn(p, i, s, u), Uh(p, i, s)), $i(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Kr(e), u = Br(), s = no(i), f = Xl(u, s);
        f.tag = fE, f.payload = t, a != null && (Fh(a, "replaceState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (Hn(p, i, s, u), Uh(p, i, s)), $i(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Kr(e), i = Br(), u = no(a), s = Xl(i, u);
        s.tag = Mh, t != null && (Fh(t, "forceUpdate"), s.callback = t);
        var f = Gu(a, s, u);
        f !== null && (Hn(f, a, u, i), Uh(f, a, u)), ed(a, u);
      }
    };
    function gE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Ft) {
            rn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              rn(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", gt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !pe(a, i) || !pe(u, s) : !0;
    }
    function Dx(e, t, a) {
      var i = e.stateNode;
      {
        var u = gt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !yg.has(t) && (yg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !pg.has(t) && (pg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", gt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || hn(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function SE(e, t) {
      t.updater = Eg, e.stateNode = t, gu(t, e), t._reactInternalInstance = cg;
    }
    function EE(e, t, a) {
      var i = !1, u = ka, s = ka, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === G && f._context === void 0
        );
        if (!p && !gg.has(t)) {
          gg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === j ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", gt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Tn(f);
      else {
        u = jc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Vc(e, u) : ka;
      }
      var y = new t(a, s);
      if (e.mode & Ft) {
        rn(!0);
        try {
          y = new t(a, s);
        } finally {
          rn(!1);
        }
      }
      var x = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      SE(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var T = gt(t) || "Component";
          dg.has(T) || (dg.add(T), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", T, y.state === null ? "null" : "undefined", T));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var _ = null, O = null, N = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? _ = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (_ = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? O = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (O = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? N = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (N = "UNSAFE_componentWillUpdate"), _ !== null || O !== null || N !== null) {
            var Z = gt(t) || "Component", me = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            vg.has(Z) || (vg.add(Z), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Z, me, _ !== null ? `
  ` + _ : "", O !== null ? `
  ` + O : "", N !== null ? `
  ` + N : ""));
          }
        }
      }
      return i && $0(e, u, s), y;
    }
    function bx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Oe(e) || "Component"), Eg.enqueueReplaceState(t, t.state, null));
    }
    function CE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Oe(e) || "Component";
          fg.has(s) || (fg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Eg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Cg(e, t, a, i) {
      Dx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = hE, og(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Tn(s);
      else {
        var f = jc(e, t, !0);
        u.context = Vc(e, f);
      }
      {
        if (u.state === a) {
          var p = gt(t) || "Component";
          mg.has(p) || (mg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ft && mi.recordLegacyContextWarning(e, u), mi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Sg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (bx(e, u), Ah(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = Le;
        m |= hr, (e.mode & na) !== Se && (m |= mr), e.flags |= m;
      }
    }
    function kx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ka;
      if (typeof p == "object" && p !== null)
        v = Tn(p);
      else {
        var m = jc(e, t, !0);
        v = Vc(e, m);
      }
      var y = t.getDerivedStateFromProps, x = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && CE(e, u, a, v), pE();
      var T = e.memoizedState, _ = u.state = T;
      if (Ah(e, a, u, i), _ = e.memoizedState, s === a && T === _ && !Sh() && !Hh()) {
        if (typeof u.componentDidMount == "function") {
          var O = Le;
          O |= hr, (e.mode & na) !== Se && (O |= mr), e.flags |= O;
        }
        return !1;
      }
      typeof y == "function" && (Sg(e, t, y, a), _ = e.memoizedState);
      var N = Hh() || gE(e, t, s, a, T, _, v);
      if (N) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Z = Le;
          Z |= hr, (e.mode & na) !== Se && (Z |= mr), e.flags |= Z;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var me = Le;
          me |= hr, (e.mode & na) !== Se && (me |= mr), e.flags |= me;
        }
        e.memoizedProps = a, e.memoizedState = _;
      }
      return u.props = a, u.state = _, u.context = v, N;
    }
    function _x(e, t, a, i, u) {
      var s = t.stateNode;
      dE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : yi(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, x = ka;
      if (typeof y == "object" && y !== null)
        x = Tn(y);
      else {
        var T = jc(t, a, !0);
        x = Vc(t, T);
      }
      var _ = a.getDerivedStateFromProps, O = typeof _ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !O && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== x) && CE(t, s, i, x), pE();
      var N = t.memoizedState, Z = s.state = N;
      if (Ah(t, i, s, u), Z = t.memoizedState, f === v && N === Z && !Sh() && !Hh() && !ye)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Le), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Jr), !1;
      typeof _ == "function" && (Sg(t, a, _, i), Z = t.memoizedState);
      var me = Hh() || gE(t, a, p, i, N, Z, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ye;
      return me ? (!O && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Z, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Z, x)), typeof s.componentDidUpdate == "function" && (t.flags |= Le), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Jr)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Le), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || N !== e.memoizedState) && (t.flags |= Jr), t.memoizedProps = i, t.memoizedState = Z), s.props = i, s.state = Z, s.context = x, me;
    }
    var Tg, Rg, xg, wg, Dg, TE = function(e, t) {
    };
    Tg = !1, Rg = !1, xg = {}, wg = {}, Dg = {}, TE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Oe(t) || "Component";
        wg[a] || (wg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Xd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Ft || Jn) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Oe(e) || "Component";
          xg[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), xg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ce)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          qa(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(x) {
            var T = v.refs;
            T === hE && (T = v.refs = {}), x === null ? delete T[m] : T[m] = x;
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
    function jh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Vh(e) {
      {
        var t = Oe(e) || "Component";
        if (Dg[t])
          return;
        Dg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function RE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function xE(e) {
      function t(D, z) {
        if (e) {
          var b = D.deletions;
          b === null ? (D.deletions = [z], D.flags |= it) : b.push(z);
        }
      }
      function a(D, z) {
        if (!e)
          return null;
        for (var b = z; b !== null; )
          t(D, b), b = b.sibling;
        return null;
      }
      function i(D, z) {
        for (var b = /* @__PURE__ */ new Map(), B = z; B !== null; )
          B.key !== null ? b.set(B.key, B) : b.set(B.index, B), B = B.sibling;
        return b;
      }
      function u(D, z) {
        var b = vs(D, z);
        return b.index = 0, b.sibling = null, b;
      }
      function s(D, z, b) {
        if (D.index = b, !e)
          return D.flags |= Pf, z;
        var B = D.alternate;
        if (B !== null) {
          var ee = B.index;
          return ee < z ? (D.flags |= wt, z) : ee;
        } else
          return D.flags |= wt, z;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= wt), D;
      }
      function p(D, z, b, B) {
        if (z === null || z.tag !== Ue) {
          var ee = ZS(b, D.mode, B);
          return ee.return = D, ee;
        } else {
          var X = u(z, b);
          return X.return = D, X;
        }
      }
      function v(D, z, b, B) {
        var ee = b.type;
        if (ee === Sa)
          return y(D, z, b.props.children, B, b.key);
        if (z !== null && (z.elementType === ee || // Keep this check inline so it only runs on the false path:
        v1(z, b) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ee == "object" && ee !== null && ee.$$typeof === Ee && RE(ee) === z.type)) {
          var X = u(z, b.props);
          return X.ref = Xd(D, z, b), X.return = D, X._debugSource = b._source, X._debugOwner = b._owner, X;
        }
        var xe = JS(b, D.mode, B);
        return xe.ref = Xd(D, z, b), xe.return = D, xe;
      }
      function m(D, z, b, B) {
        if (z === null || z.tag !== de || z.stateNode.containerInfo !== b.containerInfo || z.stateNode.implementation !== b.implementation) {
          var ee = e0(b, D.mode, B);
          return ee.return = D, ee;
        } else {
          var X = u(z, b.children || []);
          return X.return = D, X;
        }
      }
      function y(D, z, b, B, ee) {
        if (z === null || z.tag !== ot) {
          var X = ao(b, D.mode, B, ee);
          return X.return = D, X;
        } else {
          var xe = u(z, b);
          return xe.return = D, xe;
        }
      }
      function x(D, z, b) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var B = ZS("" + z, D.mode, b);
          return B.return = D, B;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Di: {
              var ee = JS(z, D.mode, b);
              return ee.ref = Xd(D, null, z), ee.return = D, ee;
            }
            case Lr: {
              var X = e0(z, D.mode, b);
              return X.return = D, X;
            }
            case Ee: {
              var xe = z._payload, _e = z._init;
              return x(D, _e(xe), b);
            }
          }
          if (hn(z) || Ka(z)) {
            var vt = ao(z, D.mode, b, null);
            return vt.return = D, vt;
          }
          jh(D, z);
        }
        return typeof z == "function" && Vh(D), null;
      }
      function T(D, z, b, B) {
        var ee = z !== null ? z.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number")
          return ee !== null ? null : p(D, z, "" + b, B);
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case Di:
              return b.key === ee ? v(D, z, b, B) : null;
            case Lr:
              return b.key === ee ? m(D, z, b, B) : null;
            case Ee: {
              var X = b._payload, xe = b._init;
              return T(D, z, xe(X), B);
            }
          }
          if (hn(b) || Ka(b))
            return ee !== null ? null : y(D, z, b, B, null);
          jh(D, b);
        }
        return typeof b == "function" && Vh(D), null;
      }
      function _(D, z, b, B, ee) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var X = D.get(b) || null;
          return p(z, X, "" + B, ee);
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Di: {
              var xe = D.get(B.key === null ? b : B.key) || null;
              return v(z, xe, B, ee);
            }
            case Lr: {
              var _e = D.get(B.key === null ? b : B.key) || null;
              return m(z, _e, B, ee);
            }
            case Ee:
              var vt = B._payload, et = B._init;
              return _(D, z, b, et(vt), ee);
          }
          if (hn(B) || Ka(B)) {
            var sn = D.get(b) || null;
            return y(z, sn, B, ee, null);
          }
          jh(z, B);
        }
        return typeof B == "function" && Vh(z), null;
      }
      function O(D, z, b) {
        {
          if (typeof D != "object" || D === null)
            return z;
          switch (D.$$typeof) {
            case Di:
            case Lr:
              TE(D, b);
              var B = D.key;
              if (typeof B != "string")
                break;
              if (z === null) {
                z = /* @__PURE__ */ new Set(), z.add(B);
                break;
              }
              if (!z.has(B)) {
                z.add(B);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", B);
              break;
            case Ee:
              var ee = D._payload, X = D._init;
              O(X(ee), z, b);
              break;
          }
        }
        return z;
      }
      function N(D, z, b, B) {
        for (var ee = null, X = 0; X < b.length; X++) {
          var xe = b[X];
          ee = O(xe, ee, D);
        }
        for (var _e = null, vt = null, et = z, sn = 0, tt = 0, en = null; et !== null && tt < b.length; tt++) {
          et.index > tt ? (en = et, et = null) : en = et.sibling;
          var wr = T(D, et, b[tt], B);
          if (wr === null) {
            et === null && (et = en);
            break;
          }
          e && et && wr.alternate === null && t(D, et), sn = s(wr, sn, tt), vt === null ? _e = wr : vt.sibling = wr, vt = wr, et = en;
        }
        if (tt === b.length) {
          if (a(D, et), nr()) {
            var sr = tt;
            ts(D, sr);
          }
          return _e;
        }
        if (et === null) {
          for (; tt < b.length; tt++) {
            var Oa = x(D, b[tt], B);
            Oa !== null && (sn = s(Oa, sn, tt), vt === null ? _e = Oa : vt.sibling = Oa, vt = Oa);
          }
          if (nr()) {
            var Pr = tt;
            ts(D, Pr);
          }
          return _e;
        }
        for (var Yr = i(D, et); tt < b.length; tt++) {
          var Dr = _(Yr, D, tt, b[tt], B);
          Dr !== null && (e && Dr.alternate !== null && Yr.delete(Dr.key === null ? tt : Dr.key), sn = s(Dr, sn, tt), vt === null ? _e = Dr : vt.sibling = Dr, vt = Dr);
        }
        if (e && Yr.forEach(function(sf) {
          return t(D, sf);
        }), nr()) {
          var tu = tt;
          ts(D, tu);
        }
        return _e;
      }
      function Z(D, z, b, B) {
        var ee = Ka(b);
        if (typeof ee != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          b[Symbol.toStringTag] === "Generator" && (Rg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Rg = !0), b.entries === ee && (Tg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tg = !0);
          var X = ee.call(b);
          if (X)
            for (var xe = null, _e = X.next(); !_e.done; _e = X.next()) {
              var vt = _e.value;
              xe = O(vt, xe, D);
            }
        }
        var et = ee.call(b);
        if (et == null)
          throw new Error("An iterable object provided no iterator.");
        for (var sn = null, tt = null, en = z, wr = 0, sr = 0, Oa = null, Pr = et.next(); en !== null && !Pr.done; sr++, Pr = et.next()) {
          en.index > sr ? (Oa = en, en = null) : Oa = en.sibling;
          var Yr = T(D, en, Pr.value, B);
          if (Yr === null) {
            en === null && (en = Oa);
            break;
          }
          e && en && Yr.alternate === null && t(D, en), wr = s(Yr, wr, sr), tt === null ? sn = Yr : tt.sibling = Yr, tt = Yr, en = Oa;
        }
        if (Pr.done) {
          if (a(D, en), nr()) {
            var Dr = sr;
            ts(D, Dr);
          }
          return sn;
        }
        if (en === null) {
          for (; !Pr.done; sr++, Pr = et.next()) {
            var tu = x(D, Pr.value, B);
            tu !== null && (wr = s(tu, wr, sr), tt === null ? sn = tu : tt.sibling = tu, tt = tu);
          }
          if (nr()) {
            var sf = sr;
            ts(D, sf);
          }
          return sn;
        }
        for (var wp = i(D, en); !Pr.done; sr++, Pr = et.next()) {
          var ol = _(wp, D, sr, Pr.value, B);
          ol !== null && (e && ol.alternate !== null && wp.delete(ol.key === null ? sr : ol.key), wr = s(ol, wr, sr), tt === null ? sn = ol : tt.sibling = ol, tt = ol);
        }
        if (e && wp.forEach(function(Yb) {
          return t(D, Yb);
        }), nr()) {
          var Pb = sr;
          ts(D, Pb);
        }
        return sn;
      }
      function me(D, z, b, B) {
        if (z !== null && z.tag === Ue) {
          a(D, z.sibling);
          var ee = u(z, b);
          return ee.return = D, ee;
        }
        a(D, z);
        var X = ZS(b, D.mode, B);
        return X.return = D, X;
      }
      function fe(D, z, b, B) {
        for (var ee = b.key, X = z; X !== null; ) {
          if (X.key === ee) {
            var xe = b.type;
            if (xe === Sa) {
              if (X.tag === ot) {
                a(D, X.sibling);
                var _e = u(X, b.props.children);
                return _e.return = D, _e._debugSource = b._source, _e._debugOwner = b._owner, _e;
              }
            } else if (X.elementType === xe || // Keep this check inline so it only runs on the false path:
            v1(X, b) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof xe == "object" && xe !== null && xe.$$typeof === Ee && RE(xe) === X.type) {
              a(D, X.sibling);
              var vt = u(X, b.props);
              return vt.ref = Xd(D, X, b), vt.return = D, vt._debugSource = b._source, vt._debugOwner = b._owner, vt;
            }
            a(D, X);
            break;
          } else
            t(D, X);
          X = X.sibling;
        }
        if (b.type === Sa) {
          var et = ao(b.props.children, D.mode, B, b.key);
          return et.return = D, et;
        } else {
          var sn = JS(b, D.mode, B);
          return sn.ref = Xd(D, z, b), sn.return = D, sn;
        }
      }
      function Ge(D, z, b, B) {
        for (var ee = b.key, X = z; X !== null; ) {
          if (X.key === ee)
            if (X.tag === de && X.stateNode.containerInfo === b.containerInfo && X.stateNode.implementation === b.implementation) {
              a(D, X.sibling);
              var xe = u(X, b.children || []);
              return xe.return = D, xe;
            } else {
              a(D, X);
              break;
            }
          else
            t(D, X);
          X = X.sibling;
        }
        var _e = e0(b, D.mode, B);
        return _e.return = D, _e;
      }
      function Ye(D, z, b, B) {
        var ee = typeof b == "object" && b !== null && b.type === Sa && b.key === null;
        if (ee && (b = b.props.children), typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case Di:
              return f(fe(D, z, b, B));
            case Lr:
              return f(Ge(D, z, b, B));
            case Ee:
              var X = b._payload, xe = b._init;
              return Ye(D, z, xe(X), B);
          }
          if (hn(b))
            return N(D, z, b, B);
          if (Ka(b))
            return Z(D, z, b, B);
          jh(D, b);
        }
        return typeof b == "string" && b !== "" || typeof b == "number" ? f(me(D, z, "" + b, B)) : (typeof b == "function" && Vh(D), a(D, z));
      }
      return Ye;
    }
    var Ic = xE(!0), wE = xE(!1);
    function Ox(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Lx(e, t) {
      for (var a = e.child; a !== null; )
        lb(a, t), a = a.sibling;
    }
    var qd = {}, Xu = $u(qd), Kd = $u(qd), Bh = $u(qd);
    function Ph(e) {
      if (e === qd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function DE() {
      var e = Ph(Bh.current);
      return e;
    }
    function bg(e, t) {
      Rr(Bh, t, e), Rr(Kd, e, e), Rr(Xu, qd, e);
      var a = QT(t);
      Tr(Xu, e), Rr(Xu, a, e);
    }
    function Wc(e) {
      Tr(Xu, e), Tr(Kd, e), Tr(Bh, e);
    }
    function kg() {
      var e = Ph(Xu.current);
      return e;
    }
    function bE(e) {
      Ph(Bh.current);
      var t = Ph(Xu.current), a = IT(t, e.type);
      t !== a && (Rr(Kd, e, e), Rr(Xu, a, e));
    }
    function _g(e) {
      Kd.current === e && (Tr(Xu, e), Tr(Kd, e));
    }
    var Mx = 0, kE = 1, _E = 1, Jd = 2, gi = $u(Mx);
    function Og(e, t) {
      return (e & t) !== 0;
    }
    function Gc(e) {
      return e & kE;
    }
    function Lg(e, t) {
      return e & kE | t;
    }
    function Nx(e, t) {
      return e | t;
    }
    function qu(e, t) {
      Rr(gi, t, e);
    }
    function Xc(e) {
      Tr(gi, e);
    }
    function zx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Yh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ve) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || j0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === ft && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & we) !== he;
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
    var ca = (
      /*   */
      0
    ), On = (
      /* */
      1
    ), tl = (
      /*  */
      2
    ), Ln = (
      /*    */
      4
    ), rr = (
      /*   */
      8
    ), Mg = [];
    function Ng() {
      for (var e = 0; e < Mg.length; e++) {
        var t = Mg[e];
        t._workInProgressVersionPrimary = null;
      }
      Mg.length = 0;
    }
    function Ux(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var K = M.ReactCurrentDispatcher, Zd = M.ReactCurrentBatchConfig, zg, qc;
    zg = /* @__PURE__ */ new Set();
    var us = U, pt = null, Mn = null, Nn = null, $h = !1, ep = !1, tp = 0, Ax = 0, Hx = 25, A = null, Ia = null, Ku = -1, Ug = !1;
    function ut() {
      {
        var e = A;
        Ia === null ? Ia = [e] : Ia.push(e);
      }
    }
    function I() {
      {
        var e = A;
        Ia !== null && (Ku++, Ia[Ku] !== e && Fx(e));
      }
    }
    function Kc(e) {
      e != null && !hn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", A, typeof e);
    }
    function Fx(e) {
      {
        var t = Oe(pt);
        if (!zg.has(t) && (zg.add(t), Ia !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ku; u++) {
            for (var s = Ia[u], f = u === Ku ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function xr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ag(e, t) {
      if (Ug)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", A), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, A, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ae(e[a], t[a]))
          return !1;
      return !0;
    }
    function Jc(e, t, a, i, u, s) {
      us = s, pt = t, Ia = e !== null ? e._debugHookTypes : null, Ku = -1, Ug = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = U, e !== null && e.memoizedState !== null ? K.current = KE : Ia !== null ? K.current = qE : K.current = XE;
      var f = a(i, u);
      if (ep) {
        var p = 0;
        do {
          if (ep = !1, tp = 0, p >= Hx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Ug = !1, Mn = null, Nn = null, t.updateQueue = null, Ku = -1, K.current = JE, f = a(i, u);
        } while (ep);
      }
      K.current = rm, t._debugHookTypes = Ia;
      var v = Mn !== null && Mn.next !== null;
      if (us = U, pt = null, Mn = null, Nn = null, A = null, Ia = null, Ku = -1, e !== null && (e.flags & bn) !== (t.flags & bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Fe) !== Se && g("Internal React error: Expected static flag was missing. Please notify the React team."), $h = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Zc() {
      var e = tp !== 0;
      return tp = 0, e;
    }
    function OE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & na) !== Se ? t.flags &= ~(Rl | mr | Nt | Le) : t.flags &= ~(Nt | Le), e.lanes = bu(e.lanes, a);
    }
    function LE() {
      if (K.current = rm, $h) {
        for (var e = pt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        $h = !1;
      }
      us = U, pt = null, Mn = null, Nn = null, Ia = null, Ku = -1, A = null, $E = !1, ep = !1, tp = 0;
    }
    function nl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Nn === null ? pt.memoizedState = Nn = e : Nn = Nn.next = e, Nn;
    }
    function Wa() {
      var e;
      if (Mn === null) {
        var t = pt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Mn.next;
      var a;
      if (Nn === null ? a = pt.memoizedState : a = Nn.next, a !== null)
        Nn = a, a = Nn.next, Mn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Mn = e;
        var i = {
          memoizedState: Mn.memoizedState,
          baseState: Mn.baseState,
          baseQueue: Mn.baseQueue,
          queue: Mn.queue,
          next: null
        };
        Nn === null ? pt.memoizedState = Nn = i : Nn = Nn.next = i;
      }
      return Nn;
    }
    function ME() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Fg(e, t, a) {
      var i = nl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Px.bind(null, pt, s);
      return [i.memoizedState, f];
    }
    function jg(e, t, a) {
      var i = Wa(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Mn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, x = s.baseState, T = null, _ = null, O = null, N = y;
        do {
          var Z = N.lane;
          if (Nl(us, Z)) {
            if (O !== null) {
              var fe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ie,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null
              };
              O = O.next = fe;
            }
            if (N.hasEagerState)
              x = N.eagerState;
            else {
              var Ge = N.action;
              x = e(x, Ge);
            }
          } else {
            var me = {
              lane: Z,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            };
            O === null ? (_ = O = me, T = x) : O = O.next = me, pt.lanes = Me(pt.lanes, Z), Ep(Z);
          }
          N = N.next;
        } while (N !== null && N !== y);
        O === null ? T = x : O.next = _, ae(x, i.memoizedState) || op(), i.memoizedState = x, i.baseState = T, i.baseQueue = O, u.lastRenderedState = x;
      }
      var Ye = u.interleaved;
      if (Ye !== null) {
        var D = Ye;
        do {
          var z = D.lane;
          pt.lanes = Me(pt.lanes, z), Ep(z), D = D.next;
        } while (D !== Ye);
      } else
        f === null && (u.lanes = U);
      var b = u.dispatch;
      return [i.memoizedState, b];
    }
    function Vg(e, t, a) {
      var i = Wa(), u = i.queue;
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
        ae(p, i.memoizedState) || op(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function tk(e, t, a) {
    }
    function nk(e, t, a) {
    }
    function Bg(e, t, a) {
      var i = pt, u = nl(), s, f = nr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), qc || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), qc = !0);
      } else {
        if (s = t(), !qc) {
          var p = t();
          ae(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), qc = !0);
        }
        var v = Cm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fo(v, us) || NE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Xh(UE.bind(null, i, m, e), [e]), i.flags |= Nt, np(On | rr, zE.bind(null, i, m, s, t), void 0, null), s;
    }
    function Qh(e, t, a) {
      var i = pt, u = Wa(), s = t();
      if (!qc) {
        var f = t();
        ae(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), qc = !0);
      }
      var p = u.memoizedState, v = !ae(p, s);
      v && (u.memoizedState = s, op());
      var m = u.queue;
      if (ap(UE.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Nn !== null && Nn.memoizedState.tag & On) {
        i.flags |= Nt, np(On | rr, zE.bind(null, i, m, s, t), void 0, null);
        var y = Cm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fo(y, us) || NE(i, t, s);
      }
      return s;
    }
    function NE(e, t, a) {
      e.flags |= _o;
      var i = {
        getSnapshot: t,
        value: a
      }, u = pt.updateQueue;
      if (u === null)
        u = ME(), pt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function zE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, AE(t) && HE(e);
    }
    function UE(e, t, a) {
      var i = function() {
        AE(t) && HE(e);
      };
      return a(i);
    }
    function AE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ae(a, i);
      } catch {
        return !0;
      }
    }
    function HE(e) {
      var t = sa(e, Te);
      t !== null && Hn(t, e, Te, Et);
    }
    function Ih(e) {
      var t = nl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Yx.bind(null, pt, a);
      return [t.memoizedState, i];
    }
    function Pg(e) {
      return jg(Hg);
    }
    function Yg(e) {
      return Vg(Hg);
    }
    function np(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = pt.updateQueue;
      if (s === null)
        s = ME(), pt.updateQueue = s, s.lastEffect = u.next = u;
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
    function $g(e) {
      var t = nl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Wh(e) {
      var t = Wa();
      return t.memoizedState;
    }
    function rp(e, t, a, i) {
      var u = nl(), s = i === void 0 ? null : i;
      pt.flags |= e, u.memoizedState = np(On | t, a, void 0, s);
    }
    function Gh(e, t, a, i) {
      var u = Wa(), s = i === void 0 ? null : i, f = void 0;
      if (Mn !== null) {
        var p = Mn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ag(s, v)) {
            u.memoizedState = np(t, a, f, s);
            return;
          }
        }
      }
      pt.flags |= e, u.memoizedState = np(On | t, a, f, s);
    }
    function Xh(e, t) {
      return (pt.mode & na) !== Se ? rp(Rl | Nt | Fi, rr, e, t) : rp(Nt | Fi, rr, e, t);
    }
    function ap(e, t) {
      return Gh(Nt, rr, e, t);
    }
    function Qg(e, t) {
      return rp(Le, tl, e, t);
    }
    function qh(e, t) {
      return Gh(Le, tl, e, t);
    }
    function Ig(e, t) {
      var a = Le;
      return a |= hr, (pt.mode & na) !== Se && (a |= mr), rp(a, Ln, e, t);
    }
    function Kh(e, t) {
      return Gh(Le, Ln, e, t);
    }
    function FE(e, t) {
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
    function Wg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Le;
      return u |= hr, (pt.mode & na) !== Se && (u |= mr), rp(u, Ln, FE.bind(null, t, e), i);
    }
    function Jh(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Gh(Le, Ln, FE.bind(null, t, e), i);
    }
    function jx(e, t) {
    }
    var Zh = jx;
    function Gg(e, t) {
      var a = nl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function em(e, t) {
      var a = Wa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ag(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Xg(e, t) {
      var a = nl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function tm(e, t) {
      var a = Wa(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ag(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function qg(e) {
      var t = nl();
      return t.memoizedState = e, e;
    }
    function jE(e) {
      var t = Wa(), a = Mn, i = a.memoizedState;
      return BE(t, i, e);
    }
    function VE(e) {
      var t = Wa();
      if (Mn === null)
        return t.memoizedState = e, e;
      var a = Mn.memoizedState;
      return BE(t, a, e);
    }
    function BE(e, t, a) {
      var i = !ny(us);
      if (i) {
        if (!ae(a, t)) {
          var u = id();
          pt.lanes = Me(pt.lanes, u), Ep(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, op()), e.memoizedState = a, a;
    }
    function Vx(e, t, a) {
      var i = aa();
      ln(In(i, _n)), e(!0);
      var u = Zd.transition;
      Zd.transition = {};
      var s = Zd.transition;
      Zd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (ln(i), Zd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && $e("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Kg() {
      var e = Ih(!1), t = e[0], a = e[1], i = Vx.bind(null, a), u = nl();
      return u.memoizedState = i, [t, i];
    }
    function PE() {
      var e = Pg(), t = e[0], a = Wa(), i = a.memoizedState;
      return [t, i];
    }
    function YE() {
      var e = Yg(), t = e[0], a = Wa(), i = a.memoizedState;
      return [t, i];
    }
    var $E = !1;
    function Bx() {
      return $E;
    }
    function Jg() {
      var e = nl(), t = Cm(), a = t.identifierPrefix, i;
      if (nr()) {
        var u = tx();
        i = ":" + a + "R" + u;
        var s = tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Ax++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function nm() {
      var e = Wa(), t = e.memoizedState;
      return t;
    }
    function Px(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (QE(e))
        IE(t, u);
      else {
        var s = sE(e, t, u, i);
        if (s !== null) {
          var f = Br();
          Hn(s, e, i, f), WE(s, t, i);
        }
      }
      GE(e, i);
    }
    function Yx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (QE(e))
        IE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === U && (s === null || s.lanes === U)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = K.current, K.current = Si;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, ae(m, v)) {
                Cx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              K.current = p;
            }
          }
        }
        var y = sE(e, t, u, i);
        if (y !== null) {
          var x = Br();
          Hn(y, e, i, x), WE(y, t, i);
        }
      }
      GE(e, i);
    }
    function QE(e) {
      var t = e.alternate;
      return e === pt || t !== null && t === pt;
    }
    function IE(e, t) {
      ep = $h = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function WE(e, t, a) {
      if (ad(a)) {
        var i = t.lanes;
        i = ld(i, e.pendingLanes);
        var u = Me(i, a);
        t.lanes = u, ku(e, u);
      }
    }
    function GE(e, t, a) {
      $i(e, t);
    }
    var rm = {
      readContext: Tn,
      useCallback: xr,
      useContext: xr,
      useEffect: xr,
      useImperativeHandle: xr,
      useInsertionEffect: xr,
      useLayoutEffect: xr,
      useMemo: xr,
      useReducer: xr,
      useRef: xr,
      useState: xr,
      useDebugValue: xr,
      useDeferredValue: xr,
      useTransition: xr,
      useMutableSource: xr,
      useSyncExternalStore: xr,
      useId: xr,
      unstable_isNewReconciler: $
    }, XE = null, qE = null, KE = null, JE = null, rl = null, Si = null, am = null;
    {
      var Zg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, be = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      XE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", ut(), Kc(t), Gg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", ut(), Tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", ut(), Kc(t), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", ut(), Kc(a), Wg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", ut(), Kc(t), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", ut(), Kc(t), Ig(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", ut(), Kc(t);
          var a = K.current;
          K.current = rl;
          try {
            return Xg(e, t);
          } finally {
            K.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", ut();
          var i = K.current;
          K.current = rl;
          try {
            return Fg(e, t, a);
          } finally {
            K.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", ut(), $g(e);
        },
        useState: function(e) {
          A = "useState", ut();
          var t = K.current;
          K.current = rl;
          try {
            return Ih(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", ut(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", ut(), qg(e);
        },
        useTransition: function() {
          return A = "useTransition", ut(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", ut(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", ut(), Bg(e, t, a);
        },
        useId: function() {
          return A = "useId", ut(), Jg();
        },
        unstable_isNewReconciler: $
      }, qE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", I(), Gg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", I(), Tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", I(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", I(), Wg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", I(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", I(), Ig(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", I();
          var a = K.current;
          K.current = rl;
          try {
            return Xg(e, t);
          } finally {
            K.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", I();
          var i = K.current;
          K.current = rl;
          try {
            return Fg(e, t, a);
          } finally {
            K.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", I(), $g(e);
        },
        useState: function(e) {
          A = "useState", I();
          var t = K.current;
          K.current = rl;
          try {
            return Ih(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", I(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", I(), qg(e);
        },
        useTransition: function() {
          return A = "useTransition", I(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", I(), Bg(e, t, a);
        },
        useId: function() {
          return A = "useId", I(), Jg();
        },
        unstable_isNewReconciler: $
      }, KE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", I(), em(e, t);
        },
        useContext: function(e) {
          return A = "useContext", I(), Tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", I(), ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", I(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", I(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", I(), Kh(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", I();
          var a = K.current;
          K.current = Si;
          try {
            return tm(e, t);
          } finally {
            K.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", I();
          var i = K.current;
          K.current = Si;
          try {
            return jg(e, t, a);
          } finally {
            K.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", I(), Wh();
        },
        useState: function(e) {
          A = "useState", I();
          var t = K.current;
          K.current = Si;
          try {
            return Pg(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", I(), Zh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", I(), jE(e);
        },
        useTransition: function() {
          return A = "useTransition", I(), PE();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", I(), Qh(e, t);
        },
        useId: function() {
          return A = "useId", I(), nm();
        },
        unstable_isNewReconciler: $
      }, JE = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", I(), em(e, t);
        },
        useContext: function(e) {
          return A = "useContext", I(), Tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", I(), ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", I(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", I(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", I(), Kh(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", I();
          var a = K.current;
          K.current = am;
          try {
            return tm(e, t);
          } finally {
            K.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", I();
          var i = K.current;
          K.current = am;
          try {
            return Vg(e, t, a);
          } finally {
            K.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", I(), Wh();
        },
        useState: function(e) {
          A = "useState", I();
          var t = K.current;
          K.current = am;
          try {
            return Yg(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", I(), Zh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", I(), VE(e);
        },
        useTransition: function() {
          return A = "useTransition", I(), YE();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", I(), Qh(e, t);
        },
        useId: function() {
          return A = "useId", I(), nm();
        },
        unstable_isNewReconciler: $
      }, rl = {
        readContext: function(e) {
          return Zg(), Tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", be(), ut(), Gg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", be(), ut(), Tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", be(), ut(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", be(), ut(), Wg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", be(), ut(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", be(), ut(), Ig(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", be(), ut();
          var a = K.current;
          K.current = rl;
          try {
            return Xg(e, t);
          } finally {
            K.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", be(), ut();
          var i = K.current;
          K.current = rl;
          try {
            return Fg(e, t, a);
          } finally {
            K.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", be(), ut(), $g(e);
        },
        useState: function(e) {
          A = "useState", be(), ut();
          var t = K.current;
          K.current = rl;
          try {
            return Ih(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", be(), ut(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", be(), ut(), qg(e);
        },
        useTransition: function() {
          return A = "useTransition", be(), ut(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", be(), ut(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", be(), ut(), Bg(e, t, a);
        },
        useId: function() {
          return A = "useId", be(), ut(), Jg();
        },
        unstable_isNewReconciler: $
      }, Si = {
        readContext: function(e) {
          return Zg(), Tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", be(), I(), em(e, t);
        },
        useContext: function(e) {
          return A = "useContext", be(), I(), Tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", be(), I(), ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", be(), I(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", be(), I(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", be(), I(), Kh(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", be(), I();
          var a = K.current;
          K.current = Si;
          try {
            return tm(e, t);
          } finally {
            K.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", be(), I();
          var i = K.current;
          K.current = Si;
          try {
            return jg(e, t, a);
          } finally {
            K.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", be(), I(), Wh();
        },
        useState: function(e) {
          A = "useState", be(), I();
          var t = K.current;
          K.current = Si;
          try {
            return Pg(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", be(), I(), Zh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", be(), I(), jE(e);
        },
        useTransition: function() {
          return A = "useTransition", be(), I(), PE();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", be(), I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", be(), I(), Qh(e, t);
        },
        useId: function() {
          return A = "useId", be(), I(), nm();
        },
        unstable_isNewReconciler: $
      }, am = {
        readContext: function(e) {
          return Zg(), Tn(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", be(), I(), em(e, t);
        },
        useContext: function(e) {
          return A = "useContext", be(), I(), Tn(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", be(), I(), ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", be(), I(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", be(), I(), qh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", be(), I(), Kh(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", be(), I();
          var a = K.current;
          K.current = Si;
          try {
            return tm(e, t);
          } finally {
            K.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", be(), I();
          var i = K.current;
          K.current = Si;
          try {
            return Vg(e, t, a);
          } finally {
            K.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", be(), I(), Wh();
        },
        useState: function(e) {
          A = "useState", be(), I();
          var t = K.current;
          K.current = Si;
          try {
            return Yg(e);
          } finally {
            K.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", be(), I(), Zh();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", be(), I(), VE(e);
        },
        useTransition: function() {
          return A = "useTransition", be(), I(), YE();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", be(), I(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", be(), I(), Qh(e, t);
        },
        useId: function() {
          return A = "useId", be(), I(), nm();
        },
        unstable_isNewReconciler: $
      };
    }
    var Ju = Re.unstable_now, ZE = 0, im = -1, ip = -1, lm = -1, eS = !1, um = !1;
    function eC() {
      return eS;
    }
    function $x() {
      um = !0;
    }
    function Qx() {
      eS = !1, um = !1;
    }
    function Ix() {
      eS = um, um = !1;
    }
    function tC() {
      return ZE;
    }
    function nC() {
      ZE = Ju();
    }
    function tS(e) {
      ip = Ju(), e.actualStartTime < 0 && (e.actualStartTime = Ju());
    }
    function rC(e) {
      ip = -1;
    }
    function om(e, t) {
      if (ip >= 0) {
        var a = Ju() - ip;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ip = -1;
      }
    }
    function al(e) {
      if (im >= 0) {
        var t = Ju() - im;
        im = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case mt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function nS(e) {
      if (lm >= 0) {
        var t = Ju() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case mt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function il() {
      im = Ju();
    }
    function rS() {
      lm = Ju();
    }
    function aS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function os(e, t) {
      return {
        value: e,
        source: t,
        stack: vf(t),
        digest: null
      };
    }
    function iS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Wx(e, t) {
      return !0;
    }
    function lS(e, t) {
      try {
        var a = Wx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ce)
            return;
          console.error(i);
        }
        var p = u ? Oe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === te)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Oe(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + y + ".");
        }
        var x = v + `
` + f + `

` + ("" + m);
        console.error(x);
      } catch (T) {
        setTimeout(function() {
          throw T;
        });
      }
    }
    var Gx = typeof WeakMap == "function" ? WeakMap : Map;
    function aC(e, t, a) {
      var i = Xl(Et, a);
      i.tag = lg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        VD(u), lS(e, t);
      }, i;
    }
    function uS(e, t, a) {
      var i = Xl(Et, a);
      i.tag = lg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          h1(e), lS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        h1(e), lS(e, t), typeof u != "function" && FD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Cr(e.lanes, Te) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Oe(e) || "Unknown"));
      }), i;
    }
    function iC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Gx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = BD.bind(null, e, t, a);
        kn && Cp(e, a), t.then(s, s);
      }
    }
    function Xx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function qx(e, t) {
      var a = e.tag;
      if ((e.mode & Fe) === Se && (a === se || a === je || a === Ae)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lC(e) {
      var t = e;
      do {
        if (t.tag === Ve && zx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uC(e, t, a, i, u) {
      if ((e.mode & Fe) === Se) {
        if (e === t)
          e.flags |= yn;
        else {
          if (e.flags |= we, a.flags |= Oo, a.flags &= ~(Fs | Nr), a.tag === ce) {
            var s = a.alternate;
            if (s === null)
              a.tag = Fn;
            else {
              var f = Xl(Et, Te);
              f.tag = Mh, Gu(a, f, Te);
            }
          }
          a.lanes = Me(a.lanes, Te);
        }
        return e;
      }
      return e.flags |= yn, e.lanes = u, e;
    }
    function Kx(e, t, a, i, u) {
      if (a.flags |= Nr, kn && Cp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        qx(a), nr() && a.mode & Fe && K0();
        var f = lC(t);
        if (f !== null) {
          f.flags &= ~Pt, uC(f, t, a, e, u), f.mode & Fe && iC(e, s, u), Xx(f, e, s);
          return;
        } else {
          if (!Du(u)) {
            iC(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (nr() && a.mode & Fe) {
        K0();
        var v = lC(t);
        if (v !== null) {
          (v.flags & yn) === he && (v.flags |= Pt), uC(v, t, a, e, u), Zy(os(i, a));
          return;
        }
      }
      i = os(i, a), OD(i);
      var m = t;
      do {
        switch (m.tag) {
          case te: {
            var y = i;
            m.flags |= yn;
            var x = an(u);
            m.lanes = Me(m.lanes, x);
            var T = aC(m, y, x);
            sg(m, T);
            return;
          }
          case ce:
            var _ = i, O = m.type, N = m.stateNode;
            if ((m.flags & we) === he && (typeof O.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && !l1(N))) {
              m.flags |= yn;
              var Z = an(u);
              m.lanes = Me(m.lanes, Z);
              var me = uS(m, _, Z);
              sg(m, me);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function Jx() {
      return null;
    }
    var lp = M.ReactCurrentOwner, Ei = !1, oS, up, sS, cS, fS, ss, dS, sm;
    oS = {}, up = {}, sS = {}, cS = {}, fS = {}, ss = !1, dS = {}, sm = {};
    function jr(e, t, a, i) {
      e === null ? t.child = wE(t, null, a, i) : t.child = Ic(t, e.child, a, i);
    }
    function Zx(e, t, a, i) {
      t.child = Ic(t, e.child, null, i), t.child = Ic(t, null, a, i);
    }
    function oC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && vi(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Qc(t, u), Yi(t);
      {
        if (lp.current = t, Ta(!0), v = Jc(e, t, f, i, p, u), m = Zc(), t.mode & Ft) {
          rn(!0);
          try {
            v = Jc(e, t, f, i, p, u), m = Zc();
          } finally {
            rn(!1);
          }
        }
        Ta(!1);
      }
      return xl(), e !== null && !Ei ? (OE(e, t, u), ql(e, t, u)) : (nr() && m && Wy(t), t.flags |= Ai, jr(e, t, v, u), t.child);
    }
    function sC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ab(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = of(s), t.tag = Ae, t.type = f, hS(t, s), cC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && vi(
            p,
            i,
            // Resolved props
            "prop",
            gt(s)
          );
        }
        var v = KS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var m = a.type, y = m.propTypes;
        y && vi(
          y,
          i,
          // Resolved props
          "prop",
          gt(m)
        );
      }
      var x = e.child, T = CS(e, u);
      if (!T) {
        var _ = x.memoizedProps, O = a.compare;
        if (O = O !== null ? O : pe, O(_, i) && e.ref === t.ref)
          return ql(e, t, u);
      }
      t.flags |= Ai;
      var N = vs(x, i);
      return N.ref = t.ref, N.return = t, t.child = N, N;
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ee) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && vi(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            gt(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (pe(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ei = !1, t.pendingProps = i = y, CS(e, u))
            (e.flags & Oo) !== he && (Ei = !0);
          else
            return t.lanes = e.lanes, ql(e, t, u);
      }
      return pS(e, t, a, i, u);
    }
    function fC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || J)
        if ((t.mode & Fe) === Se) {
          var f = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Tm(t, a);
        } else if (Cr(a, Er)) {
          var x = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var T = s !== null ? s.baseLanes : a;
          Tm(t, T);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Me(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Er;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, Tm(t, v), null;
        }
      else {
        var _;
        s !== null ? (_ = Me(s.baseLanes, a), t.memoizedState = null) : _ = a, Tm(t, _);
      }
      return jr(e, t, u, a), t.child;
    }
    function ew(e, t, a) {
      var i = t.pendingProps;
      return jr(e, t, i, a), t.child;
    }
    function tw(e, t, a) {
      var i = t.pendingProps.children;
      return jr(e, t, i, a), t.child;
    }
    function nw(e, t, a) {
      {
        t.flags |= Le;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return jr(e, t, s, a), t.child;
    }
    function dC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= vr, t.flags |= Yf);
    }
    function pS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && vi(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f;
      {
        var p = jc(t, a, !0);
        f = Vc(t, p);
      }
      var v, m;
      Qc(t, u), Yi(t);
      {
        if (lp.current = t, Ta(!0), v = Jc(e, t, a, i, f, u), m = Zc(), t.mode & Ft) {
          rn(!0);
          try {
            v = Jc(e, t, a, i, f, u), m = Zc();
          } finally {
            rn(!1);
          }
        }
        Ta(!1);
      }
      return xl(), e !== null && !Ei ? (OE(e, t, u), ql(e, t, u)) : (nr() && m && Wy(t), t.flags |= Ai, jr(e, t, v, u), t.child);
    }
    function pC(e, t, a, i, u) {
      {
        switch (Sb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= we, t.flags |= yn;
            var m = new Error("Simulated error coming from DevTools"), y = an(u);
            t.lanes = Me(t.lanes, y);
            var x = uS(t, os(m, t), y);
            sg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var T = a.propTypes;
          T && vi(
            T,
            i,
            // Resolved props
            "prop",
            gt(a)
          );
        }
      }
      var _;
      el(a) ? (_ = !0, Ch(t)) : _ = !1, Qc(t, u);
      var O = t.stateNode, N;
      O === null ? (fm(e, t), EE(t, a, i), Cg(t, a, i, u), N = !0) : e === null ? N = kx(t, a, i, u) : N = _x(e, t, a, i, u);
      var Z = vS(e, t, a, N, _, u);
      {
        var me = t.stateNode;
        N && me.props !== i && (ss || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Oe(t) || "a component"), ss = !0);
      }
      return Z;
    }
    function vS(e, t, a, i, u, s) {
      dC(e, t);
      var f = (t.flags & we) !== he;
      if (!i && !f)
        return u && W0(t, a, !1), ql(e, t, s);
      var p = t.stateNode;
      lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, rC();
      else {
        Yi(t);
        {
          if (Ta(!0), v = p.render(), t.mode & Ft) {
            rn(!0);
            try {
              p.render();
            } finally {
              rn(!1);
            }
          }
          Ta(!1);
        }
        xl();
      }
      return t.flags |= Ai, e !== null && f ? Zx(e, t, v, s) : jr(e, t, v, s), t.memoizedState = p.state, u && W0(t, a, !0), t.child;
    }
    function vC(e) {
      var t = e.stateNode;
      t.pendingContext ? Q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Q0(e, t.context, !1), bg(e, t.containerInfo);
    }
    function rw(e, t, a) {
      if (vC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      dE(e, t), Ah(t, i, null, a);
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
        if (m.baseState = v, t.memoizedState = v, t.flags & Pt) {
          var y = os(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return hC(e, t, p, a, y);
        } else if (p !== s) {
          var x = os(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return hC(e, t, p, a, x);
        } else {
          ux(t);
          var T = wE(t, null, p, a);
          t.child = T;
          for (var _ = T; _; )
            _.flags = _.flags & ~wt | Zr, _ = _.sibling;
        }
      } else {
        if (Yc(), p === s)
          return ql(e, t, a);
        jr(e, t, p, a);
      }
      return t.child;
    }
    function hC(e, t, a, i, u) {
      return Yc(), Zy(u), t.flags |= Pt, jr(e, t, a, i), t.child;
    }
    function aw(e, t, a) {
      bE(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ny(i, u);
      return p ? f = null : s !== null && Ny(i, s) && (t.flags |= lt), dC(e, t), jr(e, t, f, a), t.child;
    }
    function iw(e, t) {
      return e === null && Jy(t), null;
    }
    function lw(e, t, a, i) {
      fm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = ib(v), y = yi(v, u), x;
      switch (m) {
        case se:
          return hS(t, v), t.type = v = of(v), x = pS(null, t, v, y, i), x;
        case ce:
          return t.type = v = QS(v), x = pC(null, t, v, y, i), x;
        case je:
          return t.type = v = IS(v), x = oC(null, t, v, y, i), x;
        case Rt: {
          if (t.type !== t.elementType) {
            var T = v.propTypes;
            T && vi(
              T,
              y,
              // Resolved for outer only
              "prop",
              gt(v)
            );
          }
          return x = sC(
            null,
            t,
            v,
            yi(v.type, y),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var _ = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ee && (_ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + _));
    }
    function uw(e, t, a, i, u) {
      fm(e, t), t.tag = ce;
      var s;
      return el(a) ? (s = !0, Ch(t)) : s = !1, Qc(t, u), EE(t, a, i), Cg(t, a, i, u), vS(null, t, a, !0, s, u);
    }
    function ow(e, t, a, i) {
      fm(e, t);
      var u = t.pendingProps, s;
      {
        var f = jc(t, a, !1);
        s = Vc(t, f);
      }
      Qc(t, i);
      var p, v;
      Yi(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = gt(a) || "Unknown";
          oS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), oS[m] = !0);
        }
        t.mode & Ft && mi.recordLegacyContextWarning(t, null), Ta(!0), lp.current = t, p = Jc(null, t, a, u, s, i), v = Zc(), Ta(!1);
      }
      if (xl(), t.flags |= Ai, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = gt(a) || "Unknown";
        up[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), up[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = gt(a) || "Unknown";
          up[x] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), up[x] = !0);
        }
        t.tag = ce, t.memoizedState = null, t.updateQueue = null;
        var T = !1;
        return el(a) ? (T = !0, Ch(t)) : T = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, og(t), SE(t, p), Cg(t, a, u, i), vS(null, t, a, !0, T, i);
      } else {
        if (t.tag = se, t.mode & Ft) {
          rn(!0);
          try {
            p = Jc(null, t, a, u, s, i), v = Zc();
          } finally {
            rn(!1);
          }
        }
        return nr() && v && Wy(t), jr(null, t, p, i), hS(t, a), t.child;
      }
    }
    function hS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Xr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), fS[u] || (fS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = gt(t) || "Unknown";
          cS[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), cS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = gt(t) || "Unknown";
          sS[p] || (g("%s: Function components do not support contextType.", p), sS[p] = !0);
        }
      }
    }
    var mS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ie
    };
    function yS(e) {
      return {
        baseLanes: e,
        cachePool: Jx(),
        transitions: null
      };
    }
    function sw(e, t) {
      var a = null;
      return {
        baseLanes: Me(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function cw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Og(e, Jd);
    }
    function fw(e, t) {
      return bu(e.childLanes, t);
    }
    function mC(e, t, a) {
      var i = t.pendingProps;
      Eb(t) && (t.flags |= we);
      var u = gi.current, s = !1, f = (t.flags & we) !== he;
      if (f || cw(u, e) ? (s = !0, t.flags &= ~we) : (e === null || e.memoizedState !== null) && (u = Nx(u, _E)), u = Gc(u), qu(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return mw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var x = dw(t, m, y, a), T = t.child;
          return T.memoizedState = yS(a), t.memoizedState = mS, x;
        } else
          return gS(t, m);
      } else {
        var _ = e.memoizedState;
        if (_ !== null) {
          var O = _.dehydrated;
          if (O !== null)
            return yw(e, t, f, i, O, _, a);
        }
        if (s) {
          var N = i.fallback, Z = i.children, me = vw(e, t, Z, N, a), fe = t.child, Ge = e.child.memoizedState;
          return fe.memoizedState = Ge === null ? yS(a) : sw(Ge, a), fe.childLanes = fw(e, a), t.memoizedState = mS, me;
        } else {
          var Ye = i.children, D = pw(e, t, Ye, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function gS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = SS(u, i);
      return s.return = e, e.child = s, s;
    }
    function dw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Fe) === Se && s !== null ? (p = s, p.childLanes = U, p.pendingProps = f, e.mode & Ce && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = ao(a, u, i, null)) : (p = SS(f, u), v = ao(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function SS(e, t, a) {
      return y1(e, t, U, null);
    }
    function yC(e, t) {
      return vs(e, t);
    }
    function pw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = yC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Fe) === Se && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= it) : p.push(s);
      }
      return t.child = f, f;
    }
    function vw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Fe) === Se && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = U, m.pendingProps = v, t.mode & Ce && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = yC(f, v), m.subtreeFlags = f.subtreeFlags & bn;
      var x;
      return p !== null ? x = vs(p, i) : (x = ao(i, s, u, null), x.flags |= wt), x.return = t, m.return = t, m.sibling = x, t.child = m, x;
    }
    function cm(e, t, a, i) {
      i !== null && Zy(i), Ic(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = gS(t, s);
      return f.flags |= wt, t.memoizedState = null, f;
    }
    function hw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = SS(f, s), v = ao(i, s, u, null);
      return v.flags |= wt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Fe) !== Se && Ic(t, e.child, null, u), v;
    }
    function mw(e, t, a) {
      return (e.mode & Fe) === Se ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Te) : Hy(t) ? e.lanes = bl : e.lanes = Er, null;
    }
    function yw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Pt) {
          t.flags &= ~Pt;
          var D = iS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return cm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= we, null;
          var z = i.children, b = i.fallback, B = hw(e, t, z, b, f), ee = t.child;
          return ee.memoizedState = yS(f), t.memoizedState = mS, B;
        }
      else {
        if (ix(), (t.mode & Fe) === Se)
          return cm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, m;
          {
            var y = TR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var T = iS(x, p, m);
          return cm(e, t, f, T);
        }
        var _ = Cr(f, e.childLanes);
        if (Ei || _) {
          var O = Cm();
          if (O !== null) {
            var N = ay(O, f);
            if (N !== Ie && N !== s.retryLane) {
              s.retryLane = N;
              var Z = Et;
              sa(e, N), Hn(O, e, N, Z);
            }
          }
          VS();
          var me = iS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return cm(e, t, f, me);
        } else if (j0(u)) {
          t.flags |= we, t.child = e.child;
          var fe = PD.bind(null, e);
          return RR(u, fe), null;
        } else {
          ox(t, u, s.treeContext);
          var Ge = i.children, Ye = gS(t, Ge);
          return Ye.flags |= Zr, Ye;
        }
      }
    }
    function gC(e, t, a) {
      e.lanes = Me(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Me(i.lanes, t)), ag(e.return, t, a);
    }
    function gw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ve) {
          var u = i.memoizedState;
          u !== null && gC(i, a, e);
        } else if (i.tag === ft)
          gC(i, a, e);
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
    function Sw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Yh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Ew(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !dS[e])
        if (dS[e] = !0, typeof e == "string")
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
    function Cw(e, t) {
      e !== void 0 && !sm[e] && (e !== "collapsed" && e !== "hidden" ? (sm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (sm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SC(e, t) {
      {
        var a = hn(e), i = !a && typeof Ka(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Tw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (hn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!SC(e[a], a))
              return;
        } else {
          var i = Ka(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!SC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function ES(e, t, a, i, u) {
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
    function EC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Ew(u), Cw(s, u), Tw(f, u), jr(e, t, f, a);
      var p = gi.current, v = Og(p, Jd);
      if (v)
        p = Lg(p, Jd), t.flags |= we;
      else {
        var m = e !== null && (e.flags & we) !== he;
        m && gw(t, t.child, a), p = Gc(p);
      }
      if (qu(t, p), (t.mode & Fe) === Se)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = Sw(t.child), x;
            y === null ? (x = t.child, t.child = null) : (x = y.sibling, y.sibling = null), ES(
              t,
              !1,
              // isBackwards
              x,
              y,
              s
            );
            break;
          }
          case "backwards": {
            var T = null, _ = t.child;
            for (t.child = null; _ !== null; ) {
              var O = _.alternate;
              if (O !== null && Yh(O) === null) {
                t.child = _;
                break;
              }
              var N = _.sibling;
              _.sibling = T, T = _, _ = N;
            }
            ES(
              t,
              !0,
              // isBackwards
              T,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            ES(
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
    function Rw(e, t, a) {
      bg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ic(t, null, i, a) : jr(e, t, i, a), t.child;
    }
    var CC = !1;
    function xw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || CC || (CC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && vi(v, s, "prop", "Context.Provider");
      }
      if (oE(t, u, p), f !== null) {
        var m = f.value;
        if (ae(m, p)) {
          if (f.children === s.children && !Sh())
            return ql(e, t, a);
        } else
          gx(t, u, a);
      }
      var y = s.children;
      return jr(e, t, y, a), t.child;
    }
    var TC = !1;
    function ww(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (TC || (TC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Qc(t, a);
      var f = Tn(i);
      Yi(t);
      var p;
      return lp.current = t, Ta(!0), p = s(f), Ta(!1), xl(), t.flags |= Ai, jr(e, t, p, a), t.child;
    }
    function op() {
      Ei = !0;
    }
    function fm(e, t) {
      (t.mode & Fe) === Se && e !== null && (e.alternate = null, t.alternate = null, t.flags |= wt);
    }
    function ql(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), rC(), Ep(t.lanes), Cr(a, t.childLanes) ? (Ox(e, t), t.child) : null;
    }
    function Dw(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= it) : s.push(e), a.flags |= wt, a;
      }
    }
    function CS(e, t) {
      var a = e.lanes;
      return !!Cr(a, t);
    }
    function bw(e, t, a) {
      switch (t.tag) {
        case te:
          vC(t), t.stateNode, Yc();
          break;
        case le:
          bE(t);
          break;
        case ce: {
          var i = t.type;
          el(i) && Ch(t);
          break;
        }
        case de:
          bg(t, t.stateNode.containerInfo);
          break;
        case Ke: {
          var u = t.memoizedProps.value, s = t.type._context;
          oE(t, s, u);
          break;
        }
        case mt:
          {
            var f = Cr(a, t.childLanes);
            f && (t.flags |= Le);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ve: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return qu(t, Gc(gi.current)), t.flags |= we, null;
            var m = t.child, y = m.childLanes;
            if (Cr(a, y))
              return mC(e, t, a);
            qu(t, Gc(gi.current));
            var x = ql(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            qu(t, Gc(gi.current));
          break;
        }
        case ft: {
          var T = (e.flags & we) !== he, _ = Cr(a, t.childLanes);
          if (T) {
            if (_)
              return EC(e, t, a);
            t.flags |= we;
          }
          var O = t.memoizedState;
          if (O !== null && (O.rendering = null, O.tail = null, O.lastEffect = null), qu(t, gi.current), _)
            break;
          return null;
        }
        case ke:
        case Qe:
          return t.lanes = U, fC(e, t, a);
      }
      return ql(e, t, a);
    }
    function RC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Dw(e, t, KS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Sh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ei = !0;
        else {
          var s = CS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & we) === he)
            return Ei = !1, bw(e, t, a);
          (e.flags & Oo) !== he ? Ei = !0 : Ei = !1;
        }
      } else if (Ei = !1, nr() && ZR(t)) {
        var f = t.index, p = ex();
        q0(t, p, f);
      }
      switch (t.lanes = U, t.tag) {
        case rt:
          return ow(e, t, t.type, a);
        case Rn: {
          var v = t.elementType;
          return lw(e, t, v, a);
        }
        case se: {
          var m = t.type, y = t.pendingProps, x = t.elementType === m ? y : yi(m, y);
          return pS(e, t, m, x, a);
        }
        case ce: {
          var T = t.type, _ = t.pendingProps, O = t.elementType === T ? _ : yi(T, _);
          return pC(e, t, T, O, a);
        }
        case te:
          return rw(e, t, a);
        case le:
          return aw(e, t, a);
        case Ue:
          return iw(e, t);
        case Ve:
          return mC(e, t, a);
        case de:
          return Rw(e, t, a);
        case je: {
          var N = t.type, Z = t.pendingProps, me = t.elementType === N ? Z : yi(N, Z);
          return oC(e, t, N, me, a);
        }
        case ot:
          return ew(e, t, a);
        case ht:
          return tw(e, t, a);
        case mt:
          return nw(e, t, a);
        case Ke:
          return xw(e, t, a);
        case cn:
          return ww(e, t, a);
        case Rt: {
          var fe = t.type, Ge = t.pendingProps, Ye = yi(fe, Ge);
          if (t.type !== t.elementType) {
            var D = fe.propTypes;
            D && vi(
              D,
              Ye,
              // Resolved for outer only
              "prop",
              gt(fe)
            );
          }
          return Ye = yi(fe.type, Ye), sC(e, t, fe, Ye, a);
        }
        case Ae:
          return cC(e, t, t.type, t.pendingProps, a);
        case Fn: {
          var z = t.type, b = t.pendingProps, B = t.elementType === z ? b : yi(z, b);
          return uw(e, t, z, B, a);
        }
        case ft:
          return EC(e, t, a);
        case xn:
          break;
        case ke:
          return fC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ef(e) {
      e.flags |= Le;
    }
    function xC(e) {
      e.flags |= vr, e.flags |= Yf;
    }
    var wC, TS, DC, bC;
    wC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === Ue)
          qT(e, u.stateNode);
        else if (u.tag !== de) {
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
    }, TS = function(e, t) {
    }, DC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = kg(), v = JT(f, a, s, i, u, p);
        t.updateQueue = v, v && ef(t);
      }
    }, bC = function(e, t, a, i) {
      a !== i && ef(t);
    };
    function sp(e, t) {
      if (!nr())
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
    function ar(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = U, i = he;
      if (t) {
        if ((e.mode & Ce) !== Se) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Me(a, Me(m.lanes, m.childLanes)), i |= m.subtreeFlags & bn, i |= m.flags & bn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Me(a, Me(y.lanes, y.childLanes)), i |= y.subtreeFlags & bn, i |= y.flags & bn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ce) !== Se) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Me(a, Me(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Me(a, Me(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function kw(e, t, a) {
      if (px() && (t.mode & Fe) !== Se && (t.flags & we) === he)
        return rE(t), Yc(), t.flags |= Pt | Nr | yn, !1;
      var i = Dh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (fx(t), ar(t), (t.mode & Ce) !== Se) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Yc(), (t.flags & we) === he && (t.memoizedState = null), t.flags |= Le, ar(t), (t.mode & Ce) !== Se) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return aE(), !0;
    }
    function kC(e, t, a) {
      var i = t.pendingProps;
      switch (Gy(t), t.tag) {
        case rt:
        case Rn:
        case Ae:
        case se:
        case je:
        case ot:
        case ht:
        case mt:
        case cn:
        case Rt:
          return ar(t), null;
        case ce: {
          var u = t.type;
          return el(u) && Eh(t), ar(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Wc(t), $y(t), Ng(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Dh(t);
            if (f)
              ef(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Pt) !== he) && (t.flags |= Jr, aE());
            }
          }
          return TS(e, t), ar(t), null;
        }
        case le: {
          _g(t);
          var v = DE(), m = t.type;
          if (e !== null && t.stateNode != null)
            DC(e, t, m, i, v), e.ref !== t.ref && xC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ar(t), null;
            }
            var y = kg(), x = Dh(t);
            if (x)
              sx(t, v, y) && ef(t);
            else {
              var T = XT(m, i, v, y, t);
              wC(T, t, !1, !1), t.stateNode = T, KT(T, m, i, v) && ef(t);
            }
            t.ref !== null && xC(t);
          }
          return ar(t), null;
        }
        case Ue: {
          var _ = i;
          if (e && t.stateNode != null) {
            var O = e.memoizedProps;
            bC(e, t, O, _);
          } else {
            if (typeof _ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var N = DE(), Z = kg(), me = Dh(t);
            me ? cx(t) && ef(t) : t.stateNode = ZT(_, N, Z, t);
          }
          return ar(t), null;
        }
        case Ve: {
          Xc(t);
          var fe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ge = kw(e, t, fe);
            if (!Ge)
              return t.flags & yn ? t : null;
          }
          if ((t.flags & we) !== he)
            return t.lanes = a, (t.mode & Ce) !== Se && aS(t), t;
          var Ye = fe !== null, D = e !== null && e.memoizedState !== null;
          if (Ye !== D && Ye) {
            var z = t.child;
            if (z.flags |= Hi, (t.mode & Fe) !== Se) {
              var b = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Je);
              b || Og(gi.current, _E) ? _D() : VS();
            }
          }
          var B = t.updateQueue;
          if (B !== null && (t.flags |= Le), ar(t), (t.mode & Ce) !== Se && Ye) {
            var ee = t.child;
            ee !== null && (t.treeBaseDuration -= ee.treeBaseDuration);
          }
          return null;
        }
        case de:
          return Wc(t), TS(e, t), e === null && IR(t.stateNode.containerInfo), ar(t), null;
        case Ke:
          var X = t.type._context;
          return rg(X, t), ar(t), null;
        case Fn: {
          var xe = t.type;
          return el(xe) && Eh(t), ar(t), null;
        }
        case ft: {
          Xc(t);
          var _e = t.memoizedState;
          if (_e === null)
            return ar(t), null;
          var vt = (t.flags & we) !== he, et = _e.rendering;
          if (et === null)
            if (vt)
              sp(_e, !1);
            else {
              var sn = LD() && (e === null || (e.flags & we) === he);
              if (!sn)
                for (var tt = t.child; tt !== null; ) {
                  var en = Yh(tt);
                  if (en !== null) {
                    vt = !0, t.flags |= we, sp(_e, !1);
                    var wr = en.updateQueue;
                    return wr !== null && (t.updateQueue = wr, t.flags |= Le), t.subtreeFlags = he, Lx(t, a), qu(t, Lg(gi.current, Jd)), t.child;
                  }
                  tt = tt.sibling;
                }
              _e.tail !== null && Ht() > XC() && (t.flags |= we, vt = !0, sp(_e, !1), t.lanes = nd);
            }
          else {
            if (!vt) {
              var sr = Yh(et);
              if (sr !== null) {
                t.flags |= we, vt = !0;
                var Oa = sr.updateQueue;
                if (Oa !== null && (t.updateQueue = Oa, t.flags |= Le), sp(_e, !0), _e.tail === null && _e.tailMode === "hidden" && !et.alternate && !nr())
                  return ar(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Ht() * 2 - _e.renderingStartTime > XC() && a !== Er && (t.flags |= we, vt = !0, sp(_e, !1), t.lanes = nd);
            }
            if (_e.isBackwards)
              et.sibling = t.child, t.child = et;
            else {
              var Pr = _e.last;
              Pr !== null ? Pr.sibling = et : t.child = et, _e.last = et;
            }
          }
          if (_e.tail !== null) {
            var Yr = _e.tail;
            _e.rendering = Yr, _e.tail = Yr.sibling, _e.renderingStartTime = Ht(), Yr.sibling = null;
            var Dr = gi.current;
            return vt ? Dr = Lg(Dr, Jd) : Dr = Gc(Dr), qu(t, Dr), Yr;
          }
          return ar(t), null;
        }
        case xn:
          break;
        case ke:
        case Qe: {
          jS(t);
          var tu = t.memoizedState, sf = tu !== null;
          if (e !== null) {
            var wp = e.memoizedState, ol = wp !== null;
            ol !== sf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !J && (t.flags |= Hi);
          }
          return !sf || (t.mode & Fe) === Se ? ar(t) : Cr(ul, Er) && (ar(t), t.subtreeFlags & (wt | Le) && (t.flags |= Hi)), null;
        }
        case fn:
          return null;
        case xt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _w(e, t, a) {
      switch (Gy(t), t.tag) {
        case ce: {
          var i = t.type;
          el(i) && Eh(t);
          var u = t.flags;
          return u & yn ? (t.flags = u & ~yn | we, (t.mode & Ce) !== Se && aS(t), t) : null;
        }
        case te: {
          t.stateNode, Wc(t), $y(t), Ng();
          var s = t.flags;
          return (s & yn) !== he && (s & we) === he ? (t.flags = s & ~yn | we, t) : null;
        }
        case le:
          return _g(t), null;
        case Ve: {
          Xc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Yc();
          }
          var p = t.flags;
          return p & yn ? (t.flags = p & ~yn | we, (t.mode & Ce) !== Se && aS(t), t) : null;
        }
        case ft:
          return Xc(t), null;
        case de:
          return Wc(t), null;
        case Ke:
          var v = t.type._context;
          return rg(v, t), null;
        case ke:
        case Qe:
          return jS(t), null;
        case fn:
          return null;
        default:
          return null;
      }
    }
    function _C(e, t, a) {
      switch (Gy(t), t.tag) {
        case ce: {
          var i = t.type.childContextTypes;
          i != null && Eh(t);
          break;
        }
        case te: {
          t.stateNode, Wc(t), $y(t), Ng();
          break;
        }
        case le: {
          _g(t);
          break;
        }
        case de:
          Wc(t);
          break;
        case Ve:
          Xc(t);
          break;
        case ft:
          Xc(t);
          break;
        case Ke:
          var u = t.type._context;
          rg(u, t);
          break;
        case ke:
        case Qe:
          jS(t);
          break;
      }
    }
    var OC = null;
    OC = /* @__PURE__ */ new Set();
    var dm = !1, ir = !1, Ow = typeof WeakSet == "function" ? WeakSet : Set, ie = null, tf = null, nf = null;
    function Lw(e) {
      Tl(null, function() {
        throw e;
      }), Bf();
    }
    var Mw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ce)
        try {
          il(), t.componentWillUnmount();
        } finally {
          al(e);
        }
      else
        t.componentWillUnmount();
    };
    function LC(e, t) {
      try {
        Zu(Ln, e);
      } catch (a) {
        _t(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        Mw(e, a);
      } catch (i) {
        _t(e, t, i);
      }
    }
    function Nw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        _t(e, t, i);
      }
    }
    function MC(e, t) {
      try {
        zC(e);
      } catch (a) {
        _t(e, t, a);
      }
    }
    function rf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (tn && $r && e.mode & Ce)
              try {
                il(), i = a(null);
              } finally {
                al(e);
              }
            else
              i = a(null);
          } catch (u) {
            _t(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Oe(e));
        } else
          a.current = null;
    }
    function pm(e, t, a) {
      try {
        a();
      } catch (i) {
        _t(e, t, i);
      }
    }
    var NC = !1;
    function zw(e, t) {
      WT(e.containerInfo), ie = t, Uw();
      var a = NC;
      return NC = !1, a;
    }
    function Uw() {
      for (; ie !== null; ) {
        var e = ie, t = e.child;
        (e.subtreeFlags & Su) !== he && t !== null ? (t.return = e, ie = t) : Aw();
      }
    }
    function Aw() {
      for (; ie !== null; ) {
        var e = ie;
        dt(e);
        try {
          Hw(e);
        } catch (a) {
          _t(e, e.return, a);
        }
        nn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ie = t;
          return;
        }
        ie = e.return;
      }
    }
    function Hw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Jr) !== he) {
        switch (dt(e), e.tag) {
          case se:
          case je:
          case Ae:
            break;
          case ce: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ss && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : yi(e.type, i), u);
              {
                var p = OC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Oe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              gR(v.containerInfo);
            }
            break;
          }
          case le:
          case Ue:
          case de:
          case Fn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        nn();
      }
    }
    function Ci(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & rr) !== ca ? Is(t) : (e & Ln) !== ca && Ws(t), (e & tl) !== ca && Tp(!0), pm(t, a, p), (e & tl) !== ca && Tp(!1), (e & rr) !== ca ? wv() : (e & Ln) !== ca && Eu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Zu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & rr) !== ca ? xv(t) : (e & Ln) !== ca && Dv(t);
            var f = s.create;
            (e & tl) !== ca && Tp(!0), s.destroy = f(), (e & tl) !== ca && Tp(!1), (e & rr) !== ca ? Zf() : (e & Ln) !== ca && bv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Ln) !== he ? v = "useLayoutEffect" : (s.tag & tl) !== he ? v = "useInsertionEffect" : v = "useEffect";
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
    function Fw(e, t) {
      if ((t.flags & Le) !== he)
        switch (t.tag) {
          case mt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = tC(), p = t.alternate === null ? "mount" : "update";
            eC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case te:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case mt:
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
    function jw(e, t, a, i) {
      if ((a.flags & $n) !== he)
        switch (a.tag) {
          case se:
          case je:
          case Ae: {
            if (!ir)
              if (a.mode & Ce)
                try {
                  il(), Zu(Ln | On, a);
                } finally {
                  al(a);
                }
              else
                Zu(Ln | On, a);
            break;
          }
          case ce: {
            var u = a.stateNode;
            if (a.flags & Le && !ir)
              if (t === null)
                if (a.type === a.elementType && !ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(a) || "instance")), a.mode & Ce)
                  try {
                    il(), u.componentDidMount();
                  } finally {
                    al(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : yi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(a) || "instance")), a.mode & Ce)
                  try {
                    il(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    al(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Oe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Oe(a) || "instance")), vE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    m = a.child.stateNode;
                    break;
                  case ce:
                    m = a.child.stateNode;
                    break;
                }
              vE(a, v, m);
            }
            break;
          }
          case le: {
            var y = a.stateNode;
            if (t === null && a.flags & Le) {
              var x = a.type, T = a.memoizedProps;
              aR(y, x, T);
            }
            break;
          }
          case Ue:
            break;
          case de:
            break;
          case mt: {
            {
              var _ = a.memoizedProps, O = _.onCommit, N = _.onRender, Z = a.stateNode.effectDuration, me = tC(), fe = t === null ? "mount" : "update";
              eC() && (fe = "nested-update"), typeof N == "function" && N(a.memoizedProps.id, fe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, me);
              {
                typeof O == "function" && O(a.memoizedProps.id, fe, Z, me), AD(a);
                var Ge = a.return;
                e:
                  for (; Ge !== null; ) {
                    switch (Ge.tag) {
                      case te:
                        var Ye = Ge.stateNode;
                        Ye.effectDuration += Z;
                        break e;
                      case mt:
                        var D = Ge.stateNode;
                        D.effectDuration += Z;
                        break e;
                    }
                    Ge = Ge.return;
                  }
              }
            }
            break;
          }
          case Ve: {
            Ww(e, a);
            break;
          }
          case ft:
          case Fn:
          case xn:
          case ke:
          case Qe:
          case xt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      ir || a.flags & vr && zC(a);
    }
    function Vw(e) {
      switch (e.tag) {
        case se:
        case je:
        case Ae: {
          if (e.mode & Ce)
            try {
              il(), LC(e, e.return);
            } finally {
              al(e);
            }
          else
            LC(e, e.return);
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Nw(e, e.return, t), MC(e, e.return);
          break;
        }
        case le: {
          MC(e, e.return);
          break;
        }
      }
    }
    function Bw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? vR(u) : mR(i.stateNode, i.memoizedProps);
            } catch (f) {
              _t(e, e.return, f);
            }
          }
        } else if (i.tag === Ue) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? hR(s) : yR(s, i.memoizedProps);
            } catch (f) {
              _t(e, e.return, f);
            }
        } else if (!((i.tag === ke || i.tag === Qe) && i.memoizedState !== null && i !== e)) {
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
    function zC(e) {
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
          if (e.mode & Ce)
            try {
              il(), u = t(i);
            } finally {
              al(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Oe(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Oe(e)), t.current = i;
      }
    }
    function Pw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && XR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Yw(e) {
      for (var t = e.return; t !== null; ) {
        if (AC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AC(e) {
      return e.tag === le || e.tag === te || e.tag === de;
    }
    function HC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || AC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== Ue && t.tag !== Bt; ) {
            if (t.flags & wt || t.child === null || t.tag === de)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & wt))
            return t.stateNode;
        }
    }
    function $w(e) {
      var t = Yw(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & lt && (F0(a), t.flags &= ~lt);
          var i = HC(e);
          wS(e, i, a);
          break;
        }
        case te:
        case de: {
          var u = t.stateNode.containerInfo, s = HC(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === le || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? cR(a, s, t) : oR(a, s);
      } else if (i !== de) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === le || i === Ue;
      if (u) {
        var s = e.stateNode;
        t ? sR(a, s, t) : uR(a, s);
      } else if (i !== de) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var lr = null, Ti = !1;
    function Qw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case le: {
                lr = i.stateNode, Ti = !1;
                break e;
              }
              case te: {
                lr = i.stateNode.containerInfo, Ti = !0;
                break e;
              }
              case de: {
                lr = i.stateNode.containerInfo, Ti = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (lr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        FC(e, t, a), lr = null, Ti = !1;
      }
      Pw(a);
    }
    function eo(e, t, a) {
      for (var i = a.child; i !== null; )
        FC(e, t, i), i = i.sibling;
    }
    function FC(e, t, a) {
      switch (Kf(a), a.tag) {
        case le:
          ir || rf(a, t);
        case Ue: {
          {
            var i = lr, u = Ti;
            lr = null, eo(e, t, a), lr = i, Ti = u, lr !== null && (Ti ? dR(lr, a.stateNode) : fR(lr, a.stateNode));
          }
          return;
        }
        case Bt: {
          lr !== null && (Ti ? pR(lr, a.stateNode) : Ay(lr, a.stateNode));
          return;
        }
        case de: {
          {
            var s = lr, f = Ti;
            lr = a.stateNode.containerInfo, Ti = !0, eo(e, t, a), lr = s, Ti = f;
          }
          return;
        }
        case se:
        case je:
        case Rt:
        case Ae: {
          if (!ir) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var x = y, T = x.destroy, _ = x.tag;
                  T !== void 0 && ((_ & tl) !== ca ? pm(a, t, T) : (_ & Ln) !== ca && (Ws(a), a.mode & Ce ? (il(), pm(a, t, T), al(a)) : pm(a, t, T), Eu())), y = y.next;
                } while (y !== m);
              }
            }
          }
          eo(e, t, a);
          return;
        }
        case ce: {
          if (!ir) {
            rf(a, t);
            var O = a.stateNode;
            typeof O.componentWillUnmount == "function" && RS(a, t, O);
          }
          eo(e, t, a);
          return;
        }
        case xn: {
          eo(e, t, a);
          return;
        }
        case ke: {
          if (
            // TODO: Remove this dead flag
            a.mode & Fe
          ) {
            var N = ir;
            ir = N || a.memoizedState !== null, eo(e, t, a), ir = N;
          } else
            eo(e, t, a);
          break;
        }
        default: {
          eo(e, t, a);
          return;
        }
      }
    }
    function Iw(e) {
      e.memoizedState;
    }
    function Ww(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && MR(s);
          }
        }
      }
    }
    function jC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ow()), t.forEach(function(i) {
          var u = YD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), kn)
              if (tf !== null && nf !== null)
                Cp(nf, tf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Gw(e, t, a) {
      tf = a, nf = e, dt(t), VC(t, e), dt(t), tf = null, nf = null;
    }
    function Ri(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Qw(e, t, s);
          } catch (v) {
            _t(s, t, v);
          }
        }
      var f = Um();
      if (t.subtreeFlags & yr)
        for (var p = t.child; p !== null; )
          dt(p), VC(p, e), p = p.sibling;
      dt(f);
    }
    function VC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case se:
        case je:
        case Rt:
        case Ae: {
          if (Ri(t, e), ll(e), u & Le) {
            try {
              Ci(tl | On, e, e.return), Zu(tl | On, e);
            } catch (xe) {
              _t(e, e.return, xe);
            }
            if (e.mode & Ce) {
              try {
                il(), Ci(Ln | On, e, e.return);
              } catch (xe) {
                _t(e, e.return, xe);
              }
              al(e);
            } else
              try {
                Ci(Ln | On, e, e.return);
              } catch (xe) {
                _t(e, e.return, xe);
              }
          }
          return;
        }
        case ce: {
          Ri(t, e), ll(e), u & vr && i !== null && rf(i, i.return);
          return;
        }
        case le: {
          Ri(t, e), ll(e), u & vr && i !== null && rf(i, i.return);
          {
            if (e.flags & lt) {
              var s = e.stateNode;
              try {
                F0(s);
              } catch (xe) {
                _t(e, e.return, xe);
              }
            }
            if (u & Le) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    iR(f, y, m, v, p, e);
                  } catch (xe) {
                    _t(e, e.return, xe);
                  }
              }
            }
          }
          return;
        }
        case Ue: {
          if (Ri(t, e), ll(e), u & Le) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, T = e.memoizedProps, _ = i !== null ? i.memoizedProps : T;
            try {
              lR(x, _, T);
            } catch (xe) {
              _t(e, e.return, xe);
            }
          }
          return;
        }
        case te: {
          if (Ri(t, e), ll(e), u & Le && i !== null) {
            var O = i.memoizedState;
            if (O.isDehydrated)
              try {
                LR(t.containerInfo);
              } catch (xe) {
                _t(e, e.return, xe);
              }
          }
          return;
        }
        case de: {
          Ri(t, e), ll(e);
          return;
        }
        case Ve: {
          Ri(t, e), ll(e);
          var N = e.child;
          if (N.flags & Hi) {
            var Z = N.stateNode, me = N.memoizedState, fe = me !== null;
            if (Z.isHidden = fe, fe) {
              var Ge = N.alternate !== null && N.alternate.memoizedState !== null;
              Ge || kD();
            }
          }
          if (u & Le) {
            try {
              Iw(e);
            } catch (xe) {
              _t(e, e.return, xe);
            }
            jC(e);
          }
          return;
        }
        case ke: {
          var Ye = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Fe
          ) {
            var D = ir;
            ir = D || Ye, Ri(t, e), ir = D;
          } else
            Ri(t, e);
          if (ll(e), u & Hi) {
            var z = e.stateNode, b = e.memoizedState, B = b !== null, ee = e;
            if (z.isHidden = B, B && !Ye && (ee.mode & Fe) !== Se) {
              ie = ee;
              for (var X = ee.child; X !== null; )
                ie = X, qw(X), X = X.sibling;
            }
            Bw(ee, B);
          }
          return;
        }
        case ft: {
          Ri(t, e), ll(e), u & Le && jC(e);
          return;
        }
        case xn:
          return;
        default: {
          Ri(t, e), ll(e);
          return;
        }
      }
    }
    function ll(e) {
      var t = e.flags;
      if (t & wt) {
        try {
          $w(e);
        } catch (a) {
          _t(e, e.return, a);
        }
        e.flags &= ~wt;
      }
      t & Zr && (e.flags &= ~Zr);
    }
    function Xw(e, t, a) {
      tf = a, nf = t, ie = e, BC(e, t, a), tf = null, nf = null;
    }
    function BC(e, t, a) {
      for (var i = (e.mode & Fe) !== Se; ie !== null; ) {
        var u = ie, s = u.child;
        if (u.tag === ke && i) {
          var f = u.memoizedState !== null, p = f || dm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || ir, x = dm, T = ir;
            dm = p, ir = y, ir && !T && (ie = u, Kw(u));
            for (var _ = s; _ !== null; )
              ie = _, BC(
                _,
                // New root; bubble back up to here and stop.
                t,
                a
              ), _ = _.sibling;
            ie = u, dm = x, ir = T, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & $n) !== he && s !== null ? (s.return = u, ie = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; ie !== null; ) {
        var i = ie;
        if ((i.flags & $n) !== he) {
          var u = i.alternate;
          dt(i);
          try {
            jw(t, u, i, a);
          } catch (f) {
            _t(i, i.return, f);
          }
          nn();
        }
        if (i === e) {
          ie = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ie = s;
          return;
        }
        ie = i.return;
      }
    }
    function qw(e) {
      for (; ie !== null; ) {
        var t = ie, a = t.child;
        switch (t.tag) {
          case se:
          case je:
          case Rt:
          case Ae: {
            if (t.mode & Ce)
              try {
                il(), Ci(Ln, t, t.return);
              } finally {
                al(t);
              }
            else
              Ci(Ln, t, t.return);
            break;
          }
          case ce: {
            rf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case le: {
            rf(t, t.return);
            break;
          }
          case ke: {
            var u = t.memoizedState !== null;
            if (u) {
              PC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ie = a) : PC(e);
      }
    }
    function PC(e) {
      for (; ie !== null; ) {
        var t = ie;
        if (t === e) {
          ie = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ie = a;
          return;
        }
        ie = t.return;
      }
    }
    function Kw(e) {
      for (; ie !== null; ) {
        var t = ie, a = t.child;
        if (t.tag === ke) {
          var i = t.memoizedState !== null;
          if (i) {
            YC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ie = a) : YC(e);
      }
    }
    function YC(e) {
      for (; ie !== null; ) {
        var t = ie;
        dt(t);
        try {
          Vw(t);
        } catch (i) {
          _t(t, t.return, i);
        }
        if (nn(), t === e) {
          ie = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ie = a;
          return;
        }
        ie = t.return;
      }
    }
    function Jw(e, t, a, i) {
      ie = t, Zw(t, e, a, i);
    }
    function Zw(e, t, a, i) {
      for (; ie !== null; ) {
        var u = ie, s = u.child;
        (u.subtreeFlags & ea) !== he && s !== null ? (s.return = u, ie = s) : eD(e, t, a, i);
      }
    }
    function eD(e, t, a, i) {
      for (; ie !== null; ) {
        var u = ie;
        if ((u.flags & Nt) !== he) {
          dt(u);
          try {
            tD(t, u, a, i);
          } catch (f) {
            _t(u, u.return, f);
          }
          nn();
        }
        if (u === e) {
          ie = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ie = s;
          return;
        }
        ie = u.return;
      }
    }
    function tD(e, t, a, i) {
      switch (t.tag) {
        case se:
        case je:
        case Ae: {
          if (t.mode & Ce) {
            rS();
            try {
              Zu(rr | On, t);
            } finally {
              nS(t);
            }
          } else
            Zu(rr | On, t);
          break;
        }
      }
    }
    function nD(e) {
      ie = e, rD();
    }
    function rD() {
      for (; ie !== null; ) {
        var e = ie, t = e.child;
        if ((ie.flags & it) !== he) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ie = u, lD(u, e);
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
            ie = e;
          }
        }
        (e.subtreeFlags & ea) !== he && t !== null ? (t.return = e, ie = t) : aD();
      }
    }
    function aD() {
      for (; ie !== null; ) {
        var e = ie;
        (e.flags & Nt) !== he && (dt(e), iD(e), nn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ie = t;
          return;
        }
        ie = e.return;
      }
    }
    function iD(e) {
      switch (e.tag) {
        case se:
        case je:
        case Ae: {
          e.mode & Ce ? (rS(), Ci(rr | On, e, e.return), nS(e)) : Ci(rr | On, e, e.return);
          break;
        }
      }
    }
    function lD(e, t) {
      for (; ie !== null; ) {
        var a = ie;
        dt(a), oD(a, t), nn();
        var i = a.child;
        i !== null ? (i.return = a, ie = i) : uD(e);
      }
    }
    function uD(e) {
      for (; ie !== null; ) {
        var t = ie, a = t.sibling, i = t.return;
        if (UC(t), t === e) {
          ie = null;
          return;
        }
        if (a !== null) {
          a.return = i, ie = a;
          return;
        }
        ie = i;
      }
    }
    function oD(e, t) {
      switch (e.tag) {
        case se:
        case je:
        case Ae: {
          e.mode & Ce ? (rS(), Ci(rr, e, t), nS(e)) : Ci(rr, e, t);
          break;
        }
      }
    }
    function sD(e) {
      switch (e.tag) {
        case se:
        case je:
        case Ae: {
          try {
            Zu(Ln | On, e);
          } catch (a) {
            _t(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            _t(e, e.return, a);
          }
          break;
        }
      }
    }
    function cD(e) {
      switch (e.tag) {
        case se:
        case je:
        case Ae: {
          try {
            Zu(rr | On, e);
          } catch (t) {
            _t(e, e.return, t);
          }
          break;
        }
      }
    }
    function fD(e) {
      switch (e.tag) {
        case se:
        case je:
        case Ae: {
          try {
            Ci(Ln | On, e, e.return);
          } catch (a) {
            _t(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function dD(e) {
      switch (e.tag) {
        case se:
        case je:
        case Ae:
          try {
            Ci(rr | On, e, e.return);
          } catch (t) {
            _t(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var cp = Symbol.for;
      cp("selector.component"), cp("selector.has_pseudo_class"), cp("selector.role"), cp("selector.test_id"), cp("selector.text");
    }
    var pD = [];
    function vD() {
      pD.forEach(function(e) {
        return e();
      });
    }
    var hD = M.ReactCurrentActQueue;
    function mD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function $C() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && hD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var yD = Math.ceil, bS = M.ReactCurrentDispatcher, kS = M.ReactCurrentOwner, ur = M.ReactCurrentBatchConfig, xi = M.ReactCurrentActQueue, zn = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), or = (
      /*                */
      2
    ), Ga = (
      /*                */
      4
    ), Kl = 0, fp = 1, cs = 2, vm = 3, dp = 4, IC = 5, _S = 6, We = zn, Vr = null, Gt = null, Un = U, ul = U, OS = $u(U), An = Kl, pp = null, hm = U, vp = U, mm = U, hp = null, fa = null, LS = 0, WC = 500, GC = 1 / 0, gD = 500, Jl = null;
    function mp() {
      GC = Ht() + gD;
    }
    function XC() {
      return GC;
    }
    var ym = !1, MS = null, af = null, fs = !1, to = null, yp = U, NS = [], zS = null, SD = 50, gp = 0, US = null, AS = !1, gm = !1, ED = 50, lf = 0, Sm = null, Sp = Et, Em = U, qC = !1;
    function Cm() {
      return Vr;
    }
    function Br() {
      return (We & (or | Ga)) !== zn ? Ht() : (Sp !== Et || (Sp = Ht()), Sp);
    }
    function no(e) {
      var t = e.mode;
      if ((t & Fe) === Se)
        return Te;
      if ((We & or) !== zn && Un !== U)
        return an(Un);
      var a = mx() !== hx;
      if (a) {
        if (ur.transition !== null) {
          var i = ur.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Em === Ie && (Em = id()), Em;
      }
      var u = aa();
      if (u !== Ie)
        return u;
      var s = eR();
      return s;
    }
    function CD(e) {
      var t = e.mode;
      return (t & Fe) === Se ? Te : ry();
    }
    function Hn(e, t, a, i) {
      QD(), qC && g("useInsertionEffect must not schedule updates."), AS && (gm = !0), zl(e, a, i), (We & or) !== U && e === Vr ? GD(t) : (kn && cd(e, t, a), XD(t), e === Vr && ((We & or) === zn && (vp = Me(vp, a)), An === dp && ro(e, Un)), da(e, i), a === Te && We === zn && (t.mode & Fe) === Se && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !xi.isBatchingLegacy && (mp(), X0()));
    }
    function TD(e, t, a) {
      var i = e.current;
      i.lanes = t, zl(e, t, a), da(e, a);
    }
    function RD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (We & or) !== zn
      );
    }
    function da(e, t) {
      var a = e.callbackNode;
      ey(e, t);
      var i = Ao(e, e === Vr ? Un : U);
      if (i === U) {
        a !== null && d1(a), e.callbackNode = null, e.callbackPriority = Ie;
        return;
      }
      var u = Jt(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(xi.current !== null && a !== YS)) {
        a == null && s !== Te && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && d1(a);
      var f;
      if (u === Te)
        e.tag === Qu ? (xi.isBatchingLegacy !== null && (xi.didScheduleLegacyUpdate = !0), JR(ZC.bind(null, e))) : G0(ZC.bind(null, e)), xi.current !== null ? xi.current.push(Iu) : nR(function() {
          (We & (or | Ga)) === zn && Iu();
        }), f = null;
      else {
        var p;
        switch (Bo(i)) {
          case Qn:
            p = Ys;
            break;
          case _n:
            p = Ar;
            break;
          case si:
            p = Fa;
            break;
          case jo:
            p = ji;
            break;
          default:
            p = Fa;
            break;
        }
        f = $S(p, KC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function KC(e, t) {
      if (Qx(), Sp = Et, Em = U, (We & (or | Ga)) !== zn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = eu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ao(e, e === Vr ? Un : U);
      if (u === U)
        return null;
      var s = !Fo(e, u) && !Nv(e, u) && !t, f = s ? ND(e, u) : Rm(e, u);
      if (f !== Kl) {
        if (f === cs) {
          var p = rd(e);
          p !== U && (u = p, f = HS(e, p));
        }
        if (f === fp) {
          var v = pp;
          throw ds(e, U), ro(e, u), da(e, Ht()), v;
        }
        if (f === _S)
          ro(e, u);
        else {
          var m = !Fo(e, u), y = e.current.alternate;
          if (m && !wD(y)) {
            if (f = Rm(e, u), f === cs) {
              var x = rd(e);
              x !== U && (u = x, f = HS(e, x));
            }
            if (f === fp) {
              var T = pp;
              throw ds(e, U), ro(e, u), da(e, Ht()), T;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, xD(e, f, u);
        }
      }
      return da(e, Ht()), e.callbackNode === a ? KC.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = hp;
      if (un(e)) {
        var i = ds(e, t);
        i.flags |= Pt, QR(e.containerInfo);
      }
      var u = Rm(e, t);
      if (u !== cs) {
        var s = fa;
        fa = a, s !== null && JC(s);
      }
      return u;
    }
    function JC(e) {
      fa === null ? fa = e : fa.push.apply(fa, e);
    }
    function xD(e, t, a) {
      switch (t) {
        case Kl:
        case fp:
          throw new Error("Root did not complete. This is a bug in React.");
        case cs: {
          ps(e, fa, Jl);
          break;
        }
        case vm: {
          if (ro(e, a), pc(a) && // do not delay if we're inside an act() scope
          !p1()) {
            var i = LS + WC - Ht();
            if (i > 10) {
              var u = Ao(e, U);
              if (u !== U)
                break;
              var s = e.suspendedLanes;
              if (!Nl(s, a)) {
                Br(), od(e, s);
                break;
              }
              e.timeoutHandle = zy(ps.bind(null, e, fa, Jl), i);
              break;
            }
          }
          ps(e, fa, Jl);
          break;
        }
        case dp: {
          if (ro(e, a), Mv(a))
            break;
          if (!p1()) {
            var f = Lv(e, a), p = f, v = Ht() - p, m = $D(v) - v;
            if (m > 10) {
              e.timeoutHandle = zy(ps.bind(null, e, fa, Jl), m);
              break;
            }
          }
          ps(e, fa, Jl);
          break;
        }
        case IC: {
          ps(e, fa, Jl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function wD(e) {
      for (var t = e; ; ) {
        if (t.flags & _o) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ae(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & _o && v !== null) {
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
    function ro(e, t) {
      t = bu(t, mm), t = bu(t, vp), ud(e, t);
    }
    function ZC(e) {
      if (Ix(), (We & (or | Ga)) !== zn)
        throw new Error("Should not already be working.");
      eu();
      var t = Ao(e, U);
      if (!Cr(t, Te))
        return da(e, Ht()), null;
      var a = Rm(e, t);
      if (e.tag !== Qu && a === cs) {
        var i = rd(e);
        i !== U && (t = i, a = HS(e, i));
      }
      if (a === fp) {
        var u = pp;
        throw ds(e, U), ro(e, t), da(e, Ht()), u;
      }
      if (a === _S)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ps(e, fa, Jl), da(e, Ht()), null;
    }
    function DD(e, t) {
      t !== U && (ku(e, Me(t, Te)), da(e, Ht()), (We & (or | Ga)) === zn && (mp(), Iu()));
    }
    function FS(e, t) {
      var a = We;
      We |= QC;
      try {
        return e(t);
      } finally {
        We = a, We === zn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !xi.isBatchingLegacy && (mp(), X0());
      }
    }
    function bD(e, t, a, i, u) {
      var s = aa(), f = ur.transition;
      try {
        return ur.transition = null, ln(Qn), e(t, a, i, u);
      } finally {
        ln(s), ur.transition = f, We === zn && mp();
      }
    }
    function Zl(e) {
      to !== null && to.tag === Qu && (We & (or | Ga)) === zn && eu();
      var t = We;
      We |= QC;
      var a = ur.transition, i = aa();
      try {
        return ur.transition = null, ln(Qn), e ? e() : void 0;
      } finally {
        ln(i), ur.transition = a, We = t, (We & (or | Ga)) === zn && Iu();
      }
    }
    function e1() {
      return (We & (or | Ga)) !== zn;
    }
    function Tm(e, t) {
      Rr(OS, ul, e), ul = Me(ul, t);
    }
    function jS(e) {
      ul = OS.current, Tr(OS, e);
    }
    function ds(e, t) {
      e.finishedWork = null, e.finishedLanes = U;
      var a = e.timeoutHandle;
      if (a !== Uy && (e.timeoutHandle = Uy, tR(a)), Gt !== null)
        for (var i = Gt.return; i !== null; ) {
          var u = i.alternate;
          _C(u, i), i = i.return;
        }
      Vr = e;
      var s = vs(e.current, null);
      return Gt = s, Un = ul = t, An = Kl, pp = null, hm = U, vp = U, mm = U, hp = null, fa = null, Ex(), mi.discardPendingWarnings(), s;
    }
    function t1(e, t) {
      do {
        var a = Gt;
        try {
          if (Oh(), LE(), nn(), kS.current = null, a === null || a.return === null) {
            An = fp, pp = t, Gt = null;
            return;
          }
          if (tn && a.mode & Ce && om(a, !0), La)
            if (xl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              kv(a, i, Un);
            } else
              Gs(a, t, Un);
          Kx(e, a.return, a, t, Un), i1(a);
        } catch (u) {
          t = u, Gt === a && a !== null ? (a = a.return, Gt = a) : a = Gt;
          continue;
        }
        return;
      } while (!0);
    }
    function n1() {
      var e = bS.current;
      return bS.current = rm, e === null ? rm : e;
    }
    function r1(e) {
      bS.current = e;
    }
    function kD() {
      LS = Ht();
    }
    function Ep(e) {
      hm = Me(e, hm);
    }
    function _D() {
      An === Kl && (An = vm);
    }
    function VS() {
      (An === Kl || An === vm || An === cs) && (An = dp), Vr !== null && (Ho(hm) || Ho(vp)) && ro(Vr, Un);
    }
    function OD(e) {
      An !== dp && (An = cs), hp === null ? hp = [e] : hp.push(e);
    }
    function LD() {
      return An === Kl;
    }
    function Rm(e, t) {
      var a = We;
      We |= or;
      var i = n1();
      if (Vr !== e || Un !== t) {
        if (kn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Cp(e, Un), u.clear()), mc(e, t);
        }
        Jl = fd(), ds(e, t);
      }
      Da(t);
      do
        try {
          MD();
          break;
        } catch (s) {
          t1(e, s);
        }
      while (!0);
      if (Oh(), We = a, r1(i), Gt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Tu(), Vr = null, Un = U, An;
    }
    function MD() {
      for (; Gt !== null; )
        a1(Gt);
    }
    function ND(e, t) {
      var a = We;
      We |= or;
      var i = n1();
      if (Vr !== e || Un !== t) {
        if (kn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Cp(e, Un), u.clear()), mc(e, t);
        }
        Jl = fd(), mp(), ds(e, t);
      }
      Da(t);
      do
        try {
          zD();
          break;
        } catch (s) {
          t1(e, s);
        }
      while (!0);
      return Oh(), r1(i), We = a, Gt !== null ? (Mo(), Kl) : (Tu(), Vr = null, Un = U, An);
    }
    function zD() {
      for (; Gt !== null && !Ps(); )
        a1(Gt);
    }
    function a1(e) {
      var t = e.alternate;
      dt(e);
      var a;
      (e.mode & Ce) !== Se ? (tS(e), a = BS(t, e, ul), om(e, !0)) : a = BS(t, e, ul), nn(), e.memoizedProps = e.pendingProps, a === null ? i1(e) : Gt = a, kS.current = null;
    }
    function i1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Nr) === he) {
          dt(t);
          var u = void 0;
          if ((t.mode & Ce) === Se ? u = kC(a, t, ul) : (tS(t), u = kC(a, t, ul), om(t, !1)), nn(), u !== null) {
            Gt = u;
            return;
          }
        } else {
          var s = _w(a, t);
          if (s !== null) {
            s.flags &= Sv, Gt = s;
            return;
          }
          if ((t.mode & Ce) !== Se) {
            om(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Nr, i.subtreeFlags = he, i.deletions = null;
          else {
            An = _S, Gt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Gt = v;
          return;
        }
        t = i, Gt = t;
      } while (t !== null);
      An === Kl && (An = IC);
    }
    function ps(e, t, a) {
      var i = aa(), u = ur.transition;
      try {
        ur.transition = null, ln(Qn), UD(e, t, a, i);
      } finally {
        ur.transition = u, ln(i);
      }
      return null;
    }
    function UD(e, t, a, i) {
      do
        eu();
      while (to !== null);
      if (ID(), (We & (or | Ga)) !== zn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Qs(s), u === null)
        return Jf(), null;
      if (s === U && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = U, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ie;
      var f = Me(u.lanes, u.childLanes);
      sd(e, f), e === Vr && (Vr = null, Gt = null, Un = U), ((u.subtreeFlags & ea) !== he || (u.flags & ea) !== he) && (fs || (fs = !0, zS = a, $S(Fa, function() {
        return eu(), null;
      })));
      var p = (u.subtreeFlags & (Su | yr | $n | ea)) !== he, v = (u.flags & (Su | yr | $n | ea)) !== he;
      if (p || v) {
        var m = ur.transition;
        ur.transition = null;
        var y = aa();
        ln(Qn);
        var x = We;
        We |= Ga, kS.current = null, zw(e, u), nC(), Gw(e, u, s), GT(e.containerInfo), e.current = u, _v(s), Xw(u, e, s), Cu(), Tv(), We = x, ln(y), ur.transition = m;
      } else
        e.current = u, nC();
      var T = fs;
      if (fs ? (fs = !1, to = e, yp = s) : (lf = 0, Sm = null), f = e.pendingLanes, f === U && (af = null), T || s1(e.current, !1), li(u.stateNode, i), kn && e.memoizedUpdaters.clear(), vD(), da(e, Ht()), t !== null)
        for (var _ = e.onRecoverableError, O = 0; O < t.length; O++) {
          var N = t[O], Z = N.stack, me = N.digest;
          _(N.value, {
            componentStack: Z,
            digest: me
          });
        }
      if (ym) {
        ym = !1;
        var fe = MS;
        throw MS = null, fe;
      }
      return Cr(yp, Te) && e.tag !== Qu && eu(), f = e.pendingLanes, Cr(f, Te) ? ($x(), e === US ? gp++ : (gp = 0, US = e)) : gp = 0, Iu(), Jf(), null;
    }
    function eu() {
      if (to !== null) {
        var e = Bo(yp), t = iy(si, e), a = ur.transition, i = aa();
        try {
          return ur.transition = null, ln(t), HD();
        } finally {
          ln(i), ur.transition = a;
        }
      }
      return !1;
    }
    function AD(e) {
      NS.push(e), fs || (fs = !0, $S(Fa, function() {
        return eu(), null;
      }));
    }
    function HD() {
      if (to === null)
        return !1;
      var e = zS;
      zS = null;
      var t = to, a = yp;
      if (to = null, yp = U, (We & (or | Ga)) !== zn)
        throw new Error("Cannot flush passive effects while already rendering.");
      AS = !0, gm = !1, Ov(a);
      var i = We;
      We |= Ga, nD(t.current), Jw(t, t.current, a, e);
      {
        var u = NS;
        NS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Fw(t, f);
        }
      }
      Lo(), s1(t.current, !0), We = i, Iu(), gm ? t === Sm ? lf++ : (lf = 0, Sm = t) : lf = 0, AS = !1, gm = !1, Bi(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function l1(e) {
      return af !== null && af.has(e);
    }
    function FD(e) {
      af === null ? af = /* @__PURE__ */ new Set([e]) : af.add(e);
    }
    function jD(e) {
      ym || (ym = !0, MS = e);
    }
    var VD = jD;
    function u1(e, t, a) {
      var i = os(a, t), u = aC(e, i, Te), s = Gu(e, u, Te), f = Br();
      s !== null && (zl(s, Te, f), da(s, f));
    }
    function _t(e, t, a) {
      if (Lw(a), Tp(!1), e.tag === te) {
        u1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          u1(i, e, a);
          return;
        } else if (i.tag === ce) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !l1(s)) {
            var f = os(a, e), p = uS(i, f, Te), v = Gu(i, p, Te), m = Br();
            v !== null && (zl(v, Te, m), da(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function BD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Br();
      od(e, a), qD(e), Vr === e && Nl(Un, a) && (An === dp || An === vm && pc(Un) && Ht() - LS < WC ? ds(e, U) : mm = Me(mm, a)), da(e, u);
    }
    function o1(e, t) {
      t === Ie && (t = CD(e));
      var a = Br(), i = sa(e, t);
      i !== null && (zl(i, t, a), da(i, a));
    }
    function PD(e) {
      var t = e.memoizedState, a = Ie;
      t !== null && (a = t.retryLane), o1(e, a);
    }
    function YD(e, t) {
      var a = Ie, i;
      switch (e.tag) {
        case Ve:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ft:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), o1(e, a);
    }
    function $D(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : yD(e / 1960) * 1960;
    }
    function QD() {
      if (gp > SD)
        throw gp = 0, US = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      lf > ED && (lf = 0, Sm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ID() {
      mi.flushLegacyContextWarning(), mi.flushPendingUnsafeLifecycleWarnings();
    }
    function s1(e, t) {
      dt(e), xm(e, mr, fD), t && xm(e, Rl, dD), xm(e, mr, sD), t && xm(e, Rl, cD), nn();
    }
    function xm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== he ? i = i.child : ((i.flags & t) !== he && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var wm = null;
    function c1(e) {
      {
        if ((We & or) !== zn || !(e.mode & Fe))
          return;
        var t = e.tag;
        if (t !== rt && t !== te && t !== ce && t !== se && t !== je && t !== Rt && t !== Ae)
          return;
        var a = Oe(e) || "ReactComponent";
        if (wm !== null) {
          if (wm.has(a))
            return;
          wm.add(a);
        } else
          wm = /* @__PURE__ */ new Set([a]);
        var i = qt;
        try {
          dt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? dt(e) : nn();
        }
      }
    }
    var BS;
    {
      var WD = null;
      BS = function(e, t, a) {
        var i = g1(WD, t);
        try {
          return RC(e, t, a);
        } catch (s) {
          if (lx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Oh(), LE(), _C(e, t), g1(t, i), t.mode & Ce && tS(t), Tl(null, RC, null, e, t, a), Jm()) {
            var u = Bf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var f1 = !1, PS;
    PS = /* @__PURE__ */ new Set();
    function GD(e) {
      if (Gr && !Bx())
        switch (e.tag) {
          case se:
          case je:
          case Ae: {
            var t = Gt && Oe(Gt) || "Unknown", a = t;
            if (!PS.has(a)) {
              PS.add(a);
              var i = Oe(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ce: {
            f1 || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), f1 = !0);
            break;
          }
        }
    }
    function Cp(e, t) {
      if (kn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          cd(e, i, t);
        });
      }
    }
    var YS = {};
    function $S(e, t) {
      {
        var a = xi.current;
        return a !== null ? (a.push(t), YS) : Bs(e, t);
      }
    }
    function d1(e) {
      if (e !== YS)
        return Cv(e);
    }
    function p1() {
      return xi.current !== null;
    }
    function XD(e) {
      {
        if (e.mode & Fe) {
          if (!$C())
            return;
        } else if (!mD() || We !== zn || e.tag !== se && e.tag !== je && e.tag !== Ae)
          return;
        if (xi.current === null) {
          var t = qt;
          try {
            dt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Oe(e));
          } finally {
            t ? dt(e) : nn();
          }
        }
      }
    }
    function qD(e) {
      e.tag !== Qu && $C() && xi.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Tp(e) {
      qC = e;
    }
    var Xa = null, uf = null, KD = function(e) {
      Xa = e;
    };
    function of(e) {
      {
        if (Xa === null)
          return e;
        var t = Xa(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return of(e);
    }
    function IS(e) {
      {
        if (Xa === null)
          return e;
        var t = Xa(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = of(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ge,
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
    function v1(e, t) {
      {
        if (Xa === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ce: {
            typeof i == "function" && (u = !0);
            break;
          }
          case se: {
            (typeof i == "function" || s === Ee) && (u = !0);
            break;
          }
          case je: {
            (s === ge || s === Ee) && (u = !0);
            break;
          }
          case Rt:
          case Ae: {
            (s === ze || s === Ee) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Xa(a);
          if (f !== void 0 && f === Xa(i))
            return !0;
        }
        return !1;
      }
    }
    function h1(e) {
      {
        if (Xa === null || typeof WeakSet != "function")
          return;
        uf === null && (uf = /* @__PURE__ */ new WeakSet()), uf.add(e);
      }
    }
    var JD = function(e, t) {
      {
        if (Xa === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        eu(), Zl(function() {
          WS(e.current, i, a);
        });
      }
    }, ZD = function(e, t) {
      {
        if (e.context !== ka)
          return;
        eu(), Zl(function() {
          Rp(t, e, null, null);
        });
      }
    };
    function WS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case se:
          case Ae:
          case ce:
            v = p;
            break;
          case je:
            v = p.render;
            break;
        }
        if (Xa === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var x = Xa(v);
          x !== void 0 && (a.has(x) ? y = !0 : t.has(x) && (f === ce ? y = !0 : m = !0));
        }
        if (uf !== null && (uf.has(e) || i !== null && uf.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var T = sa(e, Te);
          T !== null && Hn(T, e, Te, Et);
        }
        u !== null && !y && WS(u, t, a), s !== null && WS(s, t, a);
      }
    }
    var eb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return GS(e.current, i, a), a;
      }
    };
    function GS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case se:
          case Ae:
          case ce:
            p = f;
            break;
          case je:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? tb(e, a) : i !== null && GS(i, t, a), u !== null && GS(u, t, a);
      }
    }
    function tb(e, t) {
      {
        var a = nb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case de:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function nb(e, t) {
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
    var XS;
    {
      XS = !1;
      try {
        var m1 = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function rb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = he, this.subtreeFlags = he, this.deletions = null, this.lanes = U, this.childLanes = U, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var _a = function(e, t, a, i) {
      return new rb(e, t, a, i);
    };
    function qS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ab(e) {
      return typeof e == "function" && !qS(e) && e.defaultProps === void 0;
    }
    function ib(e) {
      if (typeof e == "function")
        return qS(e) ? ce : se;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ge)
          return je;
        if (t === ze)
          return Rt;
      }
      return rt;
    }
    function vs(e, t) {
      var a = e.alternate;
      a === null ? (a = _a(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = he, a.subtreeFlags = he, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case rt:
        case se:
        case Ae:
          a.type = of(e.type);
          break;
        case ce:
          a.type = QS(e.type);
          break;
        case je:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function lb(e, t) {
      e.flags &= bn | wt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = U, e.lanes = t, e.child = null, e.subtreeFlags = he, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = he, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ub(e, t, a) {
      var i;
      return e === Th ? (i = Fe, t === !0 && (i |= Ft, i |= na)) : i = Se, kn && (i |= Ce), _a(te, null, null, i);
    }
    function KS(e, t, a, i, u, s) {
      var f = rt, p = e;
      if (typeof e == "function")
        qS(e) ? (f = ce, p = QS(p)) : p = of(p);
      else if (typeof e == "string")
        f = le;
      else
        e:
          switch (e) {
            case Sa:
              return ao(a.children, u, s, t);
            case bi:
              f = ht, u |= Ft, (u & Fe) !== Se && (u |= na);
              break;
            case E:
              return ob(a, u, s, t);
            case Ne:
              return sb(a, u, s, t);
            case Xe:
              return cb(a, u, s, t);
            case Mt:
              return y1(a, u, s, t);
            case Zn:
            case vn:
            case ki:
            case ms:
            case Lt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case j:
                    f = Ke;
                    break e;
                  case G:
                    f = cn;
                    break e;
                  case ge:
                    f = je, p = IS(p);
                    break e;
                  case ze:
                    f = Rt;
                    break e;
                  case Ee:
                    f = Rn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? Oe(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = _a(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = KS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function ao(e, t, a, i) {
      var u = _a(ot, e, i, t);
      return u.lanes = a, u;
    }
    function ob(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = _a(mt, e, i, t | Ce);
      return u.elementType = E, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function sb(e, t, a, i) {
      var u = _a(Ve, e, i, t);
      return u.elementType = Ne, u.lanes = a, u;
    }
    function cb(e, t, a, i) {
      var u = _a(ft, e, i, t);
      return u.elementType = Xe, u.lanes = a, u;
    }
    function y1(e, t, a, i) {
      var u = _a(ke, e, i, t);
      u.elementType = Mt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = _a(Ue, e, null, t);
      return i.lanes = a, i;
    }
    function fb() {
      var e = _a(le, null, null, Se);
      return e.elementType = "DELETED", e;
    }
    function db(e) {
      var t = _a(Bt, null, null, Se);
      return t.stateNode = e, t;
    }
    function e0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = _a(de, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function g1(e, t) {
      return e === null && (e = _a(rt, null, null, Se)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function pb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Uy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ie, this.eventTimes = hc(U), this.expirationTimes = hc(Et), this.pendingLanes = U, this.suspendedLanes = U, this.pingedLanes = U, this.expiredLanes = U, this.mutableReadLanes = U, this.finishedLanes = U, this.entangledLanes = U, this.entanglements = hc(U), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < bt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Th:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function S1(e, t, a, i, u, s, f, p, v, m) {
      var y = new pb(e, t, a, p, v), x = ub(t, s);
      y.current = x, x.stateNode = y;
      {
        var T = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = T;
      }
      return og(x), y;
    }
    var t0 = "18.2.0";
    function vb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ha(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Lr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var n0, r0;
    n0 = !1, r0 = {};
    function E1(e) {
      if (!e)
        return ka;
      var t = Kr(e), a = KR(t);
      if (t.tag === ce) {
        var i = t.type;
        if (el(i))
          return I0(t, i, a);
      }
      return a;
    }
    function hb(e, t) {
      {
        var a = Kr(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ta(a);
        if (u === null)
          return null;
        if (u.mode & Ft) {
          var s = Oe(a) || "Component";
          if (!r0[s]) {
            r0[s] = !0;
            var f = qt;
            try {
              dt(u), a.mode & Ft ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? dt(f) : nn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function C1(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return S1(e, t, v, m, a, i, u, s, f);
    }
    function T1(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, x = S1(a, i, y, e, u, s, f, p, v);
      x.context = E1(null);
      var T = x.current, _ = Br(), O = no(T), N = Xl(_, O);
      return N.callback = t ?? null, Gu(T, N, O), TD(x, O, _), x;
    }
    function Rp(e, t, a, i) {
      Rv(t, e);
      var u = t.current, s = Br(), f = no(u);
      wl(f);
      var p = E1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && qt !== null && !n0 && (n0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Oe(qt) || "Unknown"));
      var v = Xl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Gu(u, v, f);
      return m !== null && (Hn(m, u, f, s), Uh(m, u, f)), f;
    }
    function Dm(e) {
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
    function mb(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (un(t)) {
            var a = ty(t);
            DD(t, a);
          }
          break;
        }
        case Ve: {
          Zl(function() {
            var u = sa(e, Te);
            if (u !== null) {
              var s = Br();
              Hn(u, e, Te, s);
            }
          });
          var i = Te;
          a0(e, i);
          break;
        }
      }
    }
    function R1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Uv(a.retryLane, t));
    }
    function a0(e, t) {
      R1(e, t);
      var a = e.alternate;
      a && R1(a, t);
    }
    function yb(e) {
      if (e.tag === Ve) {
        var t = Ru, a = sa(e, t);
        if (a !== null) {
          var i = Br();
          Hn(a, e, t, i);
        }
        a0(e, t);
      }
    }
    function gb(e) {
      if (e.tag === Ve) {
        var t = no(e), a = sa(e, t);
        if (a !== null) {
          var i = Br();
          Hn(a, e, t, i);
        }
        a0(e, t);
      }
    }
    function x1(e) {
      var t = Ev(e);
      return t === null ? null : t.stateNode;
    }
    var w1 = function(e) {
      return null;
    };
    function Sb(e) {
      return w1(e);
    }
    var D1 = function(e) {
      return !1;
    };
    function Eb(e) {
      return D1(e);
    }
    var b1 = null, k1 = null, _1 = null, O1 = null, L1 = null, M1 = null, N1 = null, z1 = null, U1 = null;
    {
      var A1 = function(e, t, a) {
        var i = t[a], u = hn(e) ? e.slice() : Be({}, e);
        return a + 1 === t.length ? (hn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = A1(e[i], t, a + 1), u);
      }, H1 = function(e, t) {
        return A1(e, t, 0);
      }, F1 = function(e, t, a, i) {
        var u = t[i], s = hn(e) ? e.slice() : Be({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], hn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = F1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, j1 = function(e, t, a) {
        if (t.length !== a.length) {
          $e("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              $e("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return F1(e, t, a, 0);
      }, V1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = hn(e) ? e.slice() : Be({}, e);
        return s[u] = V1(e[u], t, a + 1, i), s;
      }, B1 = function(e, t, a) {
        return V1(e, t, 0, a);
      }, i0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      b1 = function(e, t, a, i) {
        var u = i0(e, t);
        if (u !== null) {
          var s = B1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Be({}, e.memoizedProps);
          var f = sa(e, Te);
          f !== null && Hn(f, e, Te, Et);
        }
      }, k1 = function(e, t, a) {
        var i = i0(e, t);
        if (i !== null) {
          var u = H1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Be({}, e.memoizedProps);
          var s = sa(e, Te);
          s !== null && Hn(s, e, Te, Et);
        }
      }, _1 = function(e, t, a, i) {
        var u = i0(e, t);
        if (u !== null) {
          var s = j1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Be({}, e.memoizedProps);
          var f = sa(e, Te);
          f !== null && Hn(f, e, Te, Et);
        }
      }, O1 = function(e, t, a) {
        e.pendingProps = B1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = sa(e, Te);
        i !== null && Hn(i, e, Te, Et);
      }, L1 = function(e, t) {
        e.pendingProps = H1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = sa(e, Te);
        a !== null && Hn(a, e, Te, Et);
      }, M1 = function(e, t, a) {
        e.pendingProps = j1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = sa(e, Te);
        i !== null && Hn(i, e, Te, Et);
      }, N1 = function(e) {
        var t = sa(e, Te);
        t !== null && Hn(t, e, Te, Et);
      }, z1 = function(e) {
        w1 = e;
      }, U1 = function(e) {
        D1 = e;
      };
    }
    function Cb(e) {
      var t = ta(e);
      return t === null ? null : t.stateNode;
    }
    function Tb(e) {
      return null;
    }
    function Rb() {
      return qt;
    }
    function xb(e) {
      var t = e.findFiberByHostInstance, a = M.ReactCurrentDispatcher;
      return qf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: b1,
        overrideHookStateDeletePath: k1,
        overrideHookStateRenamePath: _1,
        overrideProps: O1,
        overridePropsDeletePath: L1,
        overridePropsRenamePath: M1,
        setErrorHandler: z1,
        setSuspenseHandler: U1,
        scheduleUpdate: N1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Cb,
        findFiberByHostInstance: t || Tb,
        // React Refresh
        findHostInstancesForRefresh: eb,
        scheduleRefresh: JD,
        scheduleRoot: ZD,
        setRefreshHandler: KD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Rb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: t0
      });
    }
    var P1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function l0(e) {
      this._internalRoot = e;
    }
    bm.prototype.render = l0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : km(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Kt) {
          var i = x1(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Rp(e, t, null, null);
    }, bm.prototype.unmount = l0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        e1() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Zl(function() {
          Rp(null, e, null, null);
        }), B0(t);
      }
    };
    function wb(e, t) {
      if (!km(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Y1(e);
      var a = !1, i = !1, u = "", s = P1;
      t != null && (t.hydrate ? $e("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Di && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = C1(e, Th, null, a, i, u, s);
      hh(f.current, e);
      var p = e.nodeType === Kt ? e.parentNode : e;
      return Ld(p), new l0(f);
    }
    function bm(e) {
      this._internalRoot = e;
    }
    function Db(e) {
      e && Yv(e);
    }
    bm.prototype.unstable_scheduleHydration = Db;
    function bb(e, t, a) {
      if (!km(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Y1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = P1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = T1(t, null, e, Th, i, s, f, p, v);
      if (hh(m.current, e), Ld(e), u)
        for (var y = 0; y < u.length; y++) {
          var x = u[y];
          Ux(m, x);
        }
      return new bm(m);
    }
    function km(e) {
      return !!(e && (e.nodeType === pr || e.nodeType === Ra || e.nodeType === ml || !at));
    }
    function xp(e) {
      return !!(e && (e.nodeType === pr || e.nodeType === Ra || e.nodeType === ml || e.nodeType === Kt && e.nodeValue === " react-mount-point-unstable "));
    }
    function Y1(e) {
      e.nodeType === pr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Pd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var kb = M.ReactCurrentOwner, $1;
    $1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Kt) {
        var t = x1(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = u0(e), u = !!(i && Yu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === pr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function u0(e) {
      return e ? e.nodeType === Ra ? e.documentElement : e.firstChild : null;
    }
    function Q1() {
    }
    function _b(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var T = Dm(f);
            s.call(T);
          };
        }
        var f = T1(
          t,
          i,
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Q1
        );
        e._reactRootContainer = f, hh(f.current, e);
        var p = e.nodeType === Kt ? e.parentNode : e;
        return Ld(p), Zl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var T = Dm(y);
            m.call(T);
          };
        }
        var y = C1(
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Q1
        );
        e._reactRootContainer = y, hh(y.current, e);
        var x = e.nodeType === Kt ? e.parentNode : e;
        return Ld(x), Zl(function() {
          Rp(t, y, a, i);
        }), y;
      }
    }
    function Ob(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function _m(e, t, a, i, u) {
      $1(a), Ob(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = _b(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Dm(f);
            p.call(v);
          };
        }
        Rp(t, f, e, u);
      }
      return Dm(f);
    }
    function Lb(e) {
      {
        var t = kb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === pr ? e : hb(e, "findDOMNode");
    }
    function Mb(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Pd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return _m(null, e, t, !0, a);
    }
    function Nb(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Pd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return _m(null, e, t, !1, a);
    }
    function zb(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ko(e))
        throw new Error("parentComponent must be a valid React Component");
      return _m(e, t, a, !1, i);
    }
    function Ub(e) {
      if (!xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Pd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = u0(e), i = a && !Yu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Zl(function() {
          _m(null, null, e, !1, function() {
            e._reactRootContainer = null, B0(e);
          });
        }), !0;
      } else {
        {
          var u = u0(e), s = !!(u && Yu(u)), f = e.nodeType === pr && xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ne(mb), Hv(yb), Yo(gb), pd(aa), jv(Vo), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), yv(FT), As(FS, bD, Zl);
    function Ab(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!km(t))
        throw new Error("Target container is not a DOM element.");
      return vb(e, t, null, a);
    }
    function Hb(e, t, a, i) {
      return zb(e, t, a, i);
    }
    var o0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Yu, Fc, mh, Us, wo, FS]
    };
    function Fb(e, t) {
      return o0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), wb(e, t);
    }
    function jb(e, t, a) {
      return o0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bb(e, t, a);
    }
    function Vb(e) {
      return e1() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Zl(e);
    }
    var Bb = xb({
      findFiberByHostInstance: Zo,
      bundleType: 1,
      version: t0,
      rendererPackageName: "react-dom"
    });
    if (!Bb && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var I1 = window.location.protocol;
      /^(https?|file):$/.test(I1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (I1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0, va.createPortal = Ab, va.createRoot = Fb, va.findDOMNode = Lb, va.flushSync = Vb, va.hydrate = Mb, va.hydrateRoot = jb, va.render = Nb, va.unmountComponentAtNode = Ub, va.unstable_batchedUpdates = FS, va.unstable_renderSubtreeIntoContainer = Hb, va.version = t0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), va;
}
function nT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nT);
    } catch (P) {
      console.error(P);
    }
  }
}
process.env.NODE_ENV === "production" ? (nT(), d0.exports = Gb()) : d0.exports = Xb();
var qb = d0.exports, kp = qb;
if (process.env.NODE_ENV === "production")
  _p.createRoot = kp.createRoot, _p.hydrateRoot = kp.hydrateRoot;
else {
  var Lm = kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  _p.createRoot = function(P, Re) {
    Lm.usingClientEntryPoint = !0;
    try {
      return kp.createRoot(P, Re);
    } finally {
      Lm.usingClientEntryPoint = !1;
    }
  }, _p.hydrateRoot = function(P, Re, M) {
    Lm.usingClientEntryPoint = !0;
    try {
      return kp.hydrateRoot(P, Re, M);
    } finally {
      Lm.usingClientEntryPoint = !1;
    }
  };
}
var sl = /* @__PURE__ */ ((P) => (P[P.sm = 0] = "sm", P[P.md = 1] = "md", P[P.lg = 2] = "lg", P[P.xl = 3] = "xl", P[P.xxl = 4] = "xxl", P[P.xxxl = 5] = "xxxl", P))(sl || {});
const eT = (...P) => P.filter(Boolean).join(" "), rT = ({
  size: P,
  firstName: Re,
  lastName: M,
  imageUrl: Ot,
  hasPadding: Ut
}) => {
  const $e = () => `${Re == null ? void 0 : Re.charAt(0)}${M == null ? void 0 : M.charAt(0)} `.toUpperCase();
  let g, nt;
  switch (P) {
    case sl.sm:
      g = "w-8 h-8 text-sm", nt = "text-sm";
      break;
    case sl.md:
      g = "w-10 h-10 text-lg", nt = "";
      break;
    case sl.lg:
      g = "w-12 h-12", nt = "text-lg";
      break;
    case sl.xl:
      g = "w-16 h-16 shadow-md shadow", nt = "text-xl";
      break;
    case sl.xxl:
      g = "w-24 h-24", nt = "text-4xl";
      break;
    case sl.xxxl:
      g = "w-28 h-28", nt = "text-5xl";
      break;
    default:
      g = "w-10 h-10", nt = "py-1 text-xs";
  }
  return /* @__PURE__ */ nu.jsx(nu.Fragment, { children: Ot !== void 0 ? /* @__PURE__ */ nu.jsx(
    "img",
    {
      className: eT(
        g,
        Ut ? "p-1 shadow-sm" : "",
        "max-w-none ring-2 ring-white rounded-full object-cover"
      ),
      src: Ot,
      alt: ""
    }
  ) : /* @__PURE__ */ nu.jsx(
    "div",
    {
      className: eT(
        g,
        nt,
        "items-center  justify-center flex text-center rounded-full ring-1 ring-white text-gray-25 bg-gradient-to-r from-gray-600 to-gray-900"
      ),
      children: /* @__PURE__ */ nu.jsx("span", { className: "items-center my-auto text-white", children: $e() })
    }
  ) });
};
rT.defaultProps = {
  size: sl.md,
  hasPadding: !1
};
sl.md;
function Kb() {
  return /* @__PURE__ */ nu.jsx("div", { className: "p-10", children: /* @__PURE__ */ nu.jsx(rT, { firstName: "Edem", lastName: "Ekeng", size: sl.xxl }) });
}
const Jb = (P) => {
  P && P instanceof Function && import("./web-vitals-f3c89987.mjs").then(({ getCLS: Re, getFID: M, getFCP: Ot, getLCP: Ut, getTTFB: $e }) => {
    Re(P), M(P), Ot(P), Ut(P), $e(P);
  });
}, Zb = _p.createRoot(
  document.getElementById("root")
);
Zb.render(
  /* @__PURE__ */ nu.jsx(Op.StrictMode, { children: /* @__PURE__ */ nu.jsx(Kb, {}) })
);
Jb();
