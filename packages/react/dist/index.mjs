import Q, { useRef as K, useEffect as ee } from "react";
var S = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function re() {
  if ($) return E;
  $ = 1;
  var u = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function c(l, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var m in o)
        m !== "key" && (s[m] = o[m]);
    } else s = o;
    return o = s.ref, {
      $$typeof: u,
      type: l,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return E.Fragment = f, E.jsx = c, E.jsxs = c, E;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function te() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === B ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case W:
          return "Profiler";
        case M:
          return "StrictMode";
        case q:
          return "Suspense";
        case G:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case J:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case p:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function c(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), f(e);
      }
    }
    function l(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === p)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        x || (x = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function F() {
      var e = u(this.type);
      return h[e] || (h[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function D(e, r, t, n, R, O) {
      var a = t.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: F
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, t, n, R, O) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (H(a)) {
            for (n = 0; n < a.length; n++)
              w(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(a);
      if (g.call(r, "key")) {
        a = u(e);
        var d = Object.keys(r).filter(function(Z) {
          return Z !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", Y[a + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          d,
          a
        ), Y[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), i(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), D(
        e,
        a,
        t,
        o(),
        R,
        O
      );
    }
    function w(e) {
      y(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === p && (e._payload.status === "fulfilled" ? y(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function y(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var v = Q, j = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), V = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), T = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, H = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var x, h = {}, N = v.react_stack_bottom_frame.bind(
      v,
      s
    )(), C = k(l(s)), Y = {};
    _.Fragment = b, _.jsx = function(e, r, t) {
      var n = 1e4 > T.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : N,
        n ? k(l(e)) : C
      );
    }, _.jsxs = function(e, r, t) {
      var n = 1e4 > T.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : N,
        n ? k(l(e)) : C
      );
    };
  }()), _;
}
process.env.NODE_ENV === "production" ? S.exports = re() : S.exports = te();
var ne = S.exports;
const oe = ({
  onUiClick: u,
  children: f,
  ...c
}) => {
  const l = K(null);
  return ee(() => {
    const o = l.current;
    if (!o || !u) return;
    const s = (i) => {
      u(i);
    };
    return o.addEventListener("ui-click", s), () => {
      o.removeEventListener("ui-click", s);
    };
  }, [u]), /* @__PURE__ */ ne.jsx("ui-button", { ref: l, ...c, children: f });
};
export {
  oe as UirButton
};
