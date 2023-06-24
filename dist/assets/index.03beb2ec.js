var bg = Object.defineProperty,
  Cg = Object.defineProperties;
var Dg = Object.getOwnPropertyDescriptors;
var _s = Object.getOwnPropertySymbols;
var Eg = Object.prototype.hasOwnProperty,
  Ig = Object.prototype.propertyIsEnumerable;
var js = (e, r, t) =>
    r in e
      ? bg(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  ce = (e, r) => {
    for (var t in r || (r = {})) Eg.call(r, t) && js(e, t, r[t]);
    if (_s) for (var t of _s(r)) Ig.call(r, t) && js(e, t, r[t]);
    return e;
  },
  Re = (e, r) => Cg(e, Dg(r));
const Pg = function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = t(i);
    fetch(i.href, o);
  }
};
Pg();
var I = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ri = Symbol.for("react.element"),
  kg = Symbol.for("react.portal"),
  Ng = Symbol.for("react.fragment"),
  Og = Symbol.for("react.strict_mode"),
  Tg = Symbol.for("react.profiler"),
  Rg = Symbol.for("react.provider"),
  Ag = Symbol.for("react.context"),
  Bg = Symbol.for("react.forward_ref"),
  Lg = Symbol.for("react.suspense"),
  Mg = Symbol.for("react.memo"),
  Fg = Symbol.for("react.lazy"),
  Us = Symbol.iterator;
function zg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Us && e[Us]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gd = Object.assign,
  Vd = {};
function Jt(e, r, t) {
  (this.props = e),
    (this.context = r),
    (this.refs = Vd),
    (this.updater = t || Wd);
}
Jt.prototype.isReactComponent = {};
Jt.prototype.setState = function (e, r) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, r, "setState");
};
Jt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hd() {}
Hd.prototype = Jt.prototype;
function su(e, r, t) {
  (this.props = e),
    (this.context = r),
    (this.refs = Vd),
    (this.updater = t || Wd);
}
var cu = (su.prototype = new Hd());
cu.constructor = su;
Gd(cu, Jt.prototype);
cu.isPureReactComponent = !0;
var Ws = Array.isArray,
  Qd = Object.prototype.hasOwnProperty,
  du = { current: null },
  qd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kd(e, r, t) {
  var n,
    i = {},
    o = null,
    a = null;
  if (r != null)
    for (n in (r.ref !== void 0 && (a = r.ref),
    r.key !== void 0 && (o = "" + r.key),
    r))
      Qd.call(r, n) && !qd.hasOwnProperty(n) && (i[n] = r[n]);
  var l = arguments.length - 2;
  if (l === 1) i.children = t;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (n in ((l = e.defaultProps), l)) i[n] === void 0 && (i[n] = l[n]);
  return {
    $$typeof: ri,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: du.current,
  };
}
function $g(e, r) {
  return {
    $$typeof: ri,
    type: e.type,
    key: r,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function fu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ri;
}
function _g(e) {
  var r = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return r[t];
    })
  );
}
var Gs = /\/+/g;
function Ea(e, r) {
  return typeof e == "object" && e !== null && e.key != null
    ? _g("" + e.key)
    : r.toString(36);
}
function Ui(e, r, t, n, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ri:
          case kg:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = n === "" ? "." + Ea(a, 0) : n),
      Ws(i)
        ? ((t = ""),
          e != null && (t = e.replace(Gs, "$&/") + "/"),
          Ui(i, r, t, "", function (c) {
            return c;
          }))
        : i != null &&
          (fu(i) &&
            (i = $g(
              i,
              t +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Gs, "$&/") + "/") +
                e
            )),
          r.push(i)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), Ws(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = n + Ea(o, l);
      a += Ui(o, r, t, u, i);
    }
  else if (((u = zg(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = n + Ea(o, l++)), (a += Ui(o, r, t, u, i));
  else if (o === "object")
    throw (
      ((r = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (r === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : r) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function wi(e, r, t) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    Ui(e, n, "", "", function (o) {
      return r.call(t, o, i++);
    }),
    n
  );
}
function jg(e) {
  if (e._status === -1) {
    var r = e._result;
    (r = r()),
      r.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = r));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null },
  Wi = { transition: null },
  Ug = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: Wi,
    ReactCurrentOwner: du,
  };
z.Children = {
  map: wi,
  forEach: function (e, r, t) {
    wi(
      e,
      function () {
        r.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var r = 0;
    return (
      wi(e, function () {
        r++;
      }),
      r
    );
  },
  toArray: function (e) {
    return (
      wi(e, function (r) {
        return r;
      }) || []
    );
  },
  only: function (e) {
    if (!fu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = Jt;
z.Fragment = Ng;
z.Profiler = Tg;
z.PureComponent = su;
z.StrictMode = Og;
z.Suspense = Lg;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ug;
z.cloneElement = function (e, r, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = Gd({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (r != null) {
    if (
      (r.ref !== void 0 && ((o = r.ref), (a = du.current)),
      r.key !== void 0 && (i = "" + r.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in r)
      Qd.call(r, u) &&
        !qd.hasOwnProperty(u) &&
        (n[u] = r[u] === void 0 && l !== void 0 ? l[u] : r[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) n.children = t;
  else if (1 < u) {
    l = Array(u);
    for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
    n.children = l;
  }
  return { $$typeof: ri, type: e.type, key: i, ref: o, props: n, _owner: a };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ag,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rg, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Kd;
z.createFactory = function (e) {
  var r = Kd.bind(null, e);
  return (r.type = e), r;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Bg, render: e };
};
z.isValidElement = fu;
z.lazy = function (e) {
  return { $$typeof: Fg, _payload: { _status: -1, _result: e }, _init: jg };
};
z.memo = function (e, r) {
  return { $$typeof: Mg, type: e, compare: r === void 0 ? null : r };
};
z.startTransition = function (e) {
  var r = Wi.transition;
  Wi.transition = {};
  try {
    e();
  } finally {
    Wi.transition = r;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, r) {
  return Ne.current.useCallback(e, r);
};
z.useContext = function (e) {
  return Ne.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
z.useEffect = function (e, r) {
  return Ne.current.useEffect(e, r);
};
z.useId = function () {
  return Ne.current.useId();
};
z.useImperativeHandle = function (e, r, t) {
  return Ne.current.useImperativeHandle(e, r, t);
};
z.useInsertionEffect = function (e, r) {
  return Ne.current.useInsertionEffect(e, r);
};
z.useLayoutEffect = function (e, r) {
  return Ne.current.useLayoutEffect(e, r);
};
z.useMemo = function (e, r) {
  return Ne.current.useMemo(e, r);
};
z.useReducer = function (e, r, t) {
  return Ne.current.useReducer(e, r, t);
};
z.useRef = function (e) {
  return Ne.current.useRef(e);
};
z.useState = function (e) {
  return Ne.current.useState(e);
};
z.useSyncExternalStore = function (e, r, t) {
  return Ne.current.useSyncExternalStore(e, r, t);
};
z.useTransition = function () {
  return Ne.current.useTransition();
};
z.version = "18.1.0";
I.exports = z;
var vr = I.exports,
  cl = {},
  Mo = { exports: {} },
  He = {},
  Yd = { exports: {} },
  Xd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function r(N, L) {
    var B = N.length;
    N.push(L);
    e: for (; 0 < B; ) {
      var U = (B - 1) >>> 1,
        j = N[U];
      if (0 < i(j, L)) (N[U] = L), (N[B] = j), (B = U);
      else break e;
    }
  }
  function t(N) {
    return N.length === 0 ? null : N[0];
  }
  function n(N) {
    if (N.length === 0) return null;
    var L = N[0],
      B = N.pop();
    if (B !== L) {
      N[0] = B;
      e: for (var U = 0, j = N.length, wr = j >>> 1; U < wr; ) {
        var Ke = 2 * (U + 1) - 1,
          Ye = N[Ke],
          Xe = Ke + 1,
          Er = N[Xe];
        if (0 > i(Ye, B))
          Xe < j && 0 > i(Er, Ye)
            ? ((N[U] = Er), (N[Xe] = B), (U = Xe))
            : ((N[U] = Ye), (N[Ke] = B), (U = Ke));
        else if (Xe < j && 0 > i(Er, B)) (N[U] = Er), (N[Xe] = B), (U = Xe);
        else break e;
      }
    }
    return L;
  }
  function i(N, L) {
    var B = N.sortIndex - L.sortIndex;
    return B !== 0 ? B : N.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var u = [],
    c = [],
    f = 1,
    d = null,
    s = 3,
    p = !1,
    g = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var L = t(c); L !== null; ) {
      if (L.callback === null) n(c);
      else if (L.startTime <= N)
        n(c), (L.sortIndex = L.expirationTime), r(u, L);
      else break;
      L = t(c);
    }
  }
  function w(N) {
    if (((y = !1), h(N), !g))
      if (t(u) !== null) (g = !0), xe(x);
      else {
        var L = t(c);
        L !== null && yr(w, L.startTime - N);
      }
  }
  function x(N, L) {
    (g = !1), y && ((y = !1), m(k), (k = -1)), (p = !0);
    var B = s;
    try {
      for (
        h(L), d = t(u);
        d !== null && (!(d.expirationTime > L) || (N && !F()));

      ) {
        var U = d.callback;
        if (typeof U == "function") {
          (d.callback = null), (s = d.priorityLevel);
          var j = U(d.expirationTime <= L);
          (L = e.unstable_now()),
            typeof j == "function" ? (d.callback = j) : d === t(u) && n(u),
            h(L);
        } else n(u);
        d = t(u);
      }
      if (d !== null) var wr = !0;
      else {
        var Ke = t(c);
        Ke !== null && yr(w, Ke.startTime - L), (wr = !1);
      }
      return wr;
    } finally {
      (d = null), (s = B), (p = !1);
    }
  }
  var b = !1,
    E = null,
    k = -1,
    R = 5,
    T = -1;
  function F() {
    return !(e.unstable_now() - T < R);
  }
  function ue() {
    if (E !== null) {
      var N = e.unstable_now();
      T = N;
      var L = !0;
      try {
        L = E(!0, N);
      } finally {
        L ? se() : ((b = !1), (E = null));
      }
    } else b = !1;
  }
  var se;
  if (typeof v == "function")
    se = function () {
      v(ue);
    };
  else if (typeof MessageChannel != "undefined") {
    var Y = new MessageChannel(),
      Te = Y.port2;
    (Y.port1.onmessage = ue),
      (se = function () {
        Te.postMessage(null);
      });
  } else
    se = function () {
      S(ue, 0);
    };
  function xe(N) {
    (E = N), b || ((b = !0), se());
  }
  function yr(N, L) {
    k = S(function () {
      N(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), xe(x));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return s;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(u);
    }),
    (e.unstable_next = function (N) {
      switch (s) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = s;
      }
      var B = s;
      s = L;
      try {
        return N();
      } finally {
        s = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, L) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var B = s;
      s = N;
      try {
        return L();
      } finally {
        s = B;
      }
    }),
    (e.unstable_scheduleCallback = function (N, L, B) {
      var U = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? U + B : U))
          : (B = U),
        N)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = B + j),
        (N = {
          id: f++,
          callback: L,
          priorityLevel: N,
          startTime: B,
          expirationTime: j,
          sortIndex: -1,
        }),
        B > U
          ? ((N.sortIndex = B),
            r(c, N),
            t(u) === null &&
              N === t(c) &&
              (y ? (m(k), (k = -1)) : (y = !0), yr(w, B - U)))
          : ((N.sortIndex = j), r(u, N), g || p || ((g = !0), xe(x))),
        N
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (N) {
      var L = s;
      return function () {
        var B = s;
        s = L;
        try {
          return N.apply(this, arguments);
        } finally {
          s = B;
        }
      };
    });
})(Xd);
Yd.exports = Xd;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jd = I.exports,
  Ve = Yd.exports;
function D(e) {
  for (
    var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    r +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zd = new Set(),
  An = {};
function St(e, r) {
  Wt(e, r), Wt(e + "Capture", r);
}
function Wt(e, r) {
  for (An[e] = r, e = 0; e < r.length; e++) Zd.add(r[e]);
}
var Rr = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  dl = Object.prototype.hasOwnProperty,
  Wg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vs = {},
  Hs = {};
function Gg(e) {
  return dl.call(Hs, e)
    ? !0
    : dl.call(Vs, e)
    ? !1
    : Wg.test(e)
    ? (Hs[e] = !0)
    : ((Vs[e] = !0), !1);
}
function Vg(e, r, t, n) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof r) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hg(e, r, t, n) {
  if (r === null || typeof r == "undefined" || Vg(e, r, t, n)) return !0;
  if (n) return !1;
  if (t !== null)
    switch (t.type) {
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
function Oe(e, r, t, n, i, o, a) {
  (this.acceptsBooleans = r === 2 || r === 3 || r === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = r),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var r = e[0];
  Se[r] = new Oe(r, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pu = /[\-:]([a-z])/g;
function vu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var r = e.replace(pu, vu);
    Se[r] = new Oe(r, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var r = e.replace(pu, vu);
    Se[r] = new Oe(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var r = e.replace(pu, vu);
  Se[r] = new Oe(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gu(e, r, t, n) {
  var i = Se.hasOwnProperty(r) ? Se[r] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < r.length) ||
      (r[0] !== "o" && r[0] !== "O") ||
      (r[1] !== "n" && r[1] !== "N")) &&
    (Hg(r, t, i, n) && (t = null),
    n || i === null
      ? Gg(r) && (t === null ? e.removeAttribute(r) : e.setAttribute(r, "" + t))
      : i.mustUseProperty
      ? (e[i.propertyName] = t === null ? (i.type === 3 ? !1 : "") : t)
      : ((r = i.attributeName),
        (n = i.attributeNamespace),
        t === null
          ? e.removeAttribute(r)
          : ((i = i.type),
            (t = i === 3 || (i === 4 && t === !0) ? "" : "" + t),
            n ? e.setAttributeNS(n, r, t) : e.setAttribute(r, t))));
}
var Lr = Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Si = Symbol.for("react.element"),
  Et = Symbol.for("react.portal"),
  It = Symbol.for("react.fragment"),
  mu = Symbol.for("react.strict_mode"),
  fl = Symbol.for("react.profiler"),
  ef = Symbol.for("react.provider"),
  rf = Symbol.for("react.context"),
  hu = Symbol.for("react.forward_ref"),
  pl = Symbol.for("react.suspense"),
  vl = Symbol.for("react.suspense_list"),
  yu = Symbol.for("react.memo"),
  Fr = Symbol.for("react.lazy"),
  tf = Symbol.for("react.offscreen"),
  Qs = Symbol.iterator;
function an(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qs && e[Qs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Ia;
function yn(e) {
  if (Ia === void 0)
    try {
      throw Error();
    } catch (t) {
      var r = t.stack.trim().match(/\n( *(at )?)/);
      Ia = (r && r[1]) || "";
    }
  return (
    `
` +
    Ia +
    e
  );
}
var Pa = !1;
function ka(e, r) {
  if (!e || Pa) return "";
  Pa = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (r)
      if (
        ((r = function () {
          throw Error();
        }),
        Object.defineProperty(r.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(r, []);
        } catch (c) {
          var n = c;
        }
        Reflect.construct(e, [], r);
      } else {
        try {
          r.call();
        } catch (c) {
          n = c;
        }
        e.call(r.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        n = c;
      }
      e();
    }
  } catch (c) {
    if (c && n && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = n.stack.split(`
`),
          a = i.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && i[a] !== o[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== o[l])) {
                var u =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Pa = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? yn(e) : "";
}
function Qg(e) {
  switch (e.tag) {
    case 5:
      return yn(e.type);
    case 16:
      return yn("Lazy");
    case 13:
      return yn("Suspense");
    case 19:
      return yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ka(e.type, !1)), e;
    case 11:
      return (e = ka(e.type.render, !1)), e;
    case 1:
      return (e = ka(e.type, !0)), e;
    default:
      return "";
  }
}
function gl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case It:
      return "Fragment";
    case Et:
      return "Portal";
    case fl:
      return "Profiler";
    case mu:
      return "StrictMode";
    case pl:
      return "Suspense";
    case vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rf:
        return (e.displayName || "Context") + ".Consumer";
      case ef:
        return (e._context.displayName || "Context") + ".Provider";
      case hu:
        var r = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = r.displayName || r.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yu:
        return (
          (r = e.displayName || null), r !== null ? r : gl(e.type) || "Memo"
        );
      case Fr:
        (r = e._payload), (e = e._init);
        try {
          return gl(e(r));
        } catch {}
    }
  return null;
}
function qg(e) {
  var r = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (r.displayName || "Context") + ".Consumer";
    case 10:
      return (r._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = r.render),
        (e = e.displayName || e.name || ""),
        r.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return gl(r);
    case 8:
      return r === mu ? "StrictMode" : "Mode";
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
      if (typeof r == "function") return r.displayName || r.name || null;
      if (typeof r == "string") return r;
  }
  return null;
}
function Jr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function nf(e) {
  var r = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (r === "checkbox" || r === "radio")
  );
}
function Kg(e) {
  var r = nf(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, r),
    n = "" + e[r];
  if (
    !e.hasOwnProperty(r) &&
    typeof t != "undefined" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var i = t.get,
      o = t.set;
    return (
      Object.defineProperty(e, r, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (n = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, r, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[r];
        },
      }
    );
  }
}
function xi(e) {
  e._valueTracker || (e._valueTracker = Kg(e));
}
function of(e) {
  if (!e) return !1;
  var r = e._valueTracker;
  if (!r) return !0;
  var t = r.getValue(),
    n = "";
  return (
    e && (n = nf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== t ? (r.setValue(e), !0) : !1
  );
}
function eo(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ml(e, r) {
  var t = r.checked;
  return re({}, r, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t != null ? t : e._wrapperState.initialChecked,
  });
}
function qs(e, r) {
  var t = r.defaultValue == null ? "" : r.defaultValue,
    n = r.checked != null ? r.checked : r.defaultChecked;
  (t = Jr(r.value != null ? r.value : t)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: t,
      controlled:
        r.type === "checkbox" || r.type === "radio"
          ? r.checked != null
          : r.value != null,
    });
}
function af(e, r) {
  (r = r.checked), r != null && gu(e, "checked", r, !1);
}
function hl(e, r) {
  af(e, r);
  var t = Jr(r.value),
    n = r.type;
  if (t != null)
    n === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  r.hasOwnProperty("value")
    ? yl(e, r.type, t)
    : r.hasOwnProperty("defaultValue") && yl(e, r.type, Jr(r.defaultValue)),
    r.checked == null &&
      r.defaultChecked != null &&
      (e.defaultChecked = !!r.defaultChecked);
}
function Ks(e, r, t) {
  if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
    var n = r.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (r.value !== void 0 && r.value !== null)
      )
    )
      return;
    (r = "" + e._wrapperState.initialValue),
      t || r === e.value || (e.value = r),
      (e.defaultValue = r);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function yl(e, r, t) {
  (r !== "number" || eo(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var wn = Array.isArray;
function Ft(e, r, t, n) {
  if (((e = e.options), r)) {
    r = {};
    for (var i = 0; i < t.length; i++) r["$" + t[i]] = !0;
    for (t = 0; t < e.length; t++)
      (i = r.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== i && (e[t].selected = i),
        i && n && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + Jr(t), r = null, i = 0; i < e.length; i++) {
      if (e[i].value === t) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      r !== null || e[i].disabled || (r = e[i]);
    }
    r !== null && (r.selected = !0);
  }
}
function wl(e, r) {
  if (r.dangerouslySetInnerHTML != null) throw Error(D(91));
  return re({}, r, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ys(e, r) {
  var t = r.value;
  if (t == null) {
    if (((t = r.children), (r = r.defaultValue), t != null)) {
      if (r != null) throw Error(D(92));
      if (wn(t)) {
        if (1 < t.length) throw Error(D(93));
        t = t[0];
      }
      r = t;
    }
    r == null && (r = ""), (t = r);
  }
  e._wrapperState = { initialValue: Jr(t) };
}
function lf(e, r) {
  var t = Jr(r.value),
    n = Jr(r.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    r.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    n != null && (e.defaultValue = "" + n);
}
function Xs(e) {
  var r = e.textContent;
  r === e._wrapperState.initialValue && r !== "" && r !== null && (e.value = r);
}
function uf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Sl(e, r) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? uf(r)
    : e === "http://www.w3.org/2000/svg" && r === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var bi,
  sf = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (r, t, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(r, t, n, i);
          });
        }
      : e;
  })(function (e, r) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = r;
    else {
      for (
        bi = bi || document.createElement("div"),
          bi.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
          r = bi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; r.firstChild; ) e.appendChild(r.firstChild);
    }
  });
function Bn(e, r) {
  if (r) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = r;
      return;
    }
  }
  e.textContent = r;
}
var bn = {
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
    strokeWidth: !0,
  },
  Yg = ["Webkit", "ms", "Moz", "O"];
Object.keys(bn).forEach(function (e) {
  Yg.forEach(function (r) {
    (r = r + e.charAt(0).toUpperCase() + e.substring(1)), (bn[r] = bn[e]);
  });
});
function cf(e, r, t) {
  return r == null || typeof r == "boolean" || r === ""
    ? ""
    : t || typeof r != "number" || r === 0 || (bn.hasOwnProperty(e) && bn[e])
    ? ("" + r).trim()
    : r + "px";
}
function df(e, r) {
  e = e.style;
  for (var t in r)
    if (r.hasOwnProperty(t)) {
      var n = t.indexOf("--") === 0,
        i = cf(t, r[t], n);
      t === "float" && (t = "cssFloat"), n ? e.setProperty(t, i) : (e[t] = i);
    }
}
var Xg = re(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function xl(e, r) {
  if (r) {
    if (Xg[e] && (r.children != null || r.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (r.dangerouslySetInnerHTML != null) {
      if (r.children != null) throw Error(D(60));
      if (
        typeof r.dangerouslySetInnerHTML != "object" ||
        !("__html" in r.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (r.style != null && typeof r.style != "object") throw Error(D(62));
  }
}
function bl(e, r) {
  if (e.indexOf("-") === -1) return typeof r.is == "string";
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
var Cl = null;
function wu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Dl = null,
  zt = null,
  $t = null;
function Js(e) {
  if ((e = ii(e))) {
    if (typeof Dl != "function") throw Error(D(280));
    var r = e.stateNode;
    r && ((r = jo(r)), Dl(e.stateNode, e.type, r));
  }
}
function ff(e) {
  zt ? ($t ? $t.push(e) : ($t = [e])) : (zt = e);
}
function pf() {
  if (zt) {
    var e = zt,
      r = $t;
    if ((($t = zt = null), Js(e), r)) for (e = 0; e < r.length; e++) Js(r[e]);
  }
}
function vf(e, r) {
  return e(r);
}
function gf() {}
var Na = !1;
function mf(e, r, t) {
  if (Na) return e(r, t);
  Na = !0;
  try {
    return vf(e, r, t);
  } finally {
    (Na = !1), (zt !== null || $t !== null) && (gf(), pf());
  }
}
function Ln(e, r) {
  var t = e.stateNode;
  if (t === null) return null;
  var n = jo(t);
  if (n === null) return null;
  t = n[r];
  e: switch (r) {
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
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(D(231, r, typeof t));
  return t;
}
var El = !1;
if (Rr)
  try {
    var ln = {};
    Object.defineProperty(ln, "passive", {
      get: function () {
        El = !0;
      },
    }),
      window.addEventListener("test", ln, ln),
      window.removeEventListener("test", ln, ln);
  } catch {
    El = !1;
  }
function Jg(e, r, t, n, i, o, a, l, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    r.apply(t, c);
  } catch (f) {
    this.onError(f);
  }
}
var Cn = !1,
  ro = null,
  to = !1,
  Il = null,
  Zg = {
    onError: function (e) {
      (Cn = !0), (ro = e);
    },
  };
function em(e, r, t, n, i, o, a, l, u) {
  (Cn = !1), (ro = null), Jg.apply(Zg, arguments);
}
function rm(e, r, t, n, i, o, a, l, u) {
  if ((em.apply(this, arguments), Cn)) {
    if (Cn) {
      var c = ro;
      (Cn = !1), (ro = null);
    } else throw Error(D(198));
    to || ((to = !0), (Il = c));
  }
}
function xt(e) {
  var r = e,
    t = e;
  if (e.alternate) for (; r.return; ) r = r.return;
  else {
    e = r;
    do (r = e), (r.flags & 4098) !== 0 && (t = r.return), (e = r.return);
    while (e);
  }
  return r.tag === 3 ? t : null;
}
function hf(e) {
  if (e.tag === 13) {
    var r = e.memoizedState;
    if (
      (r === null && ((e = e.alternate), e !== null && (r = e.memoizedState)),
      r !== null)
    )
      return r.dehydrated;
  }
  return null;
}
function Zs(e) {
  if (xt(e) !== e) throw Error(D(188));
}
function tm(e) {
  var r = e.alternate;
  if (!r) {
    if (((r = xt(e)), r === null)) throw Error(D(188));
    return r !== e ? null : e;
  }
  for (var t = e, n = r; ; ) {
    var i = t.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((n = i.return), n !== null)) {
        t = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === t) return Zs(i), e;
        if (o === n) return Zs(i), r;
        o = o.sibling;
      }
      throw Error(D(188));
    }
    if (t.return !== n.return) (t = i), (n = o);
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === t) {
          (a = !0), (t = i), (n = o);
          break;
        }
        if (l === n) {
          (a = !0), (n = i), (t = o);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === t) {
            (a = !0), (t = o), (n = i);
            break;
          }
          if (l === n) {
            (a = !0), (n = o), (t = i);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(D(189));
      }
    }
    if (t.alternate !== n) throw Error(D(190));
  }
  if (t.tag !== 3) throw Error(D(188));
  return t.stateNode.current === t ? e : r;
}
function yf(e) {
  return (e = tm(e)), e !== null ? wf(e) : null;
}
function wf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var r = wf(e);
    if (r !== null) return r;
    e = e.sibling;
  }
  return null;
}
var Sf = Ve.unstable_scheduleCallback,
  ec = Ve.unstable_cancelCallback,
  nm = Ve.unstable_shouldYield,
  im = Ve.unstable_requestPaint,
  ne = Ve.unstable_now,
  om = Ve.unstable_getCurrentPriorityLevel,
  Su = Ve.unstable_ImmediatePriority,
  xf = Ve.unstable_UserBlockingPriority,
  no = Ve.unstable_NormalPriority,
  am = Ve.unstable_LowPriority,
  bf = Ve.unstable_IdlePriority,
  Fo = null,
  Cr = null;
function lm(e) {
  if (Cr && typeof Cr.onCommitFiberRoot == "function")
    try {
      Cr.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gr = Math.clz32 ? Math.clz32 : cm,
  um = Math.log,
  sm = Math.LN2;
function cm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((um(e) / sm) | 0)) | 0;
}
var Ci = 64,
  Di = 4194304;
function Sn(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function io(e, r) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = t & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? (n = Sn(l)) : ((o &= a), o !== 0 && (n = Sn(o)));
  } else (a = t & ~i), a !== 0 ? (n = Sn(a)) : o !== 0 && (n = Sn(o));
  if (n === 0) return 0;
  if (
    r !== 0 &&
    r !== n &&
    (r & i) === 0 &&
    ((i = n & -n), (o = r & -r), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return r;
  if (((n & 4) !== 0 && (n |= t & 16), (r = e.entangledLanes), r !== 0))
    for (e = e.entanglements, r &= n; 0 < r; )
      (t = 31 - gr(r)), (i = 1 << t), (n |= e[t]), (r &= ~i);
  return n;
}
function dm(e, r) {
  switch (e) {
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
function fm(e, r) {
  for (
    var t = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - gr(o),
      l = 1 << a,
      u = i[a];
    u === -1
      ? ((l & t) === 0 || (l & n) !== 0) && (i[a] = dm(l, r))
      : u <= r && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Pl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Cf() {
  var e = Ci;
  return (Ci <<= 1), (Ci & 4194240) === 0 && (Ci = 64), e;
}
function Oa(e) {
  for (var r = [], t = 0; 31 > t; t++) r.push(e);
  return r;
}
function ti(e, r, t) {
  (e.pendingLanes |= r),
    r !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (r = 31 - gr(r)),
    (e[r] = t);
}
function pm(e, r) {
  var t = e.pendingLanes & ~r;
  (e.pendingLanes = r),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= r),
    (e.mutableReadLanes &= r),
    (e.entangledLanes &= r),
    (r = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var i = 31 - gr(t),
      o = 1 << i;
    (r[i] = 0), (n[i] = -1), (e[i] = -1), (t &= ~o);
  }
}
function xu(e, r) {
  var t = (e.entangledLanes |= r);
  for (e = e.entanglements; t; ) {
    var n = 31 - gr(t),
      i = 1 << n;
    (i & r) | (e[n] & r) && (e[n] |= r), (t &= ~i);
  }
}
var W = 0;
function Df(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Ef,
  bu,
  If,
  Pf,
  kf,
  kl = !1,
  Ei = [],
  Wr = null,
  Gr = null,
  Vr = null,
  Mn = new Map(),
  Fn = new Map(),
  $r = [],
  vm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function rc(e, r) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wr = null;
      break;
    case "dragenter":
    case "dragleave":
      Gr = null;
      break;
    case "mouseover":
    case "mouseout":
      Vr = null;
      break;
    case "pointerover":
    case "pointerout":
      Mn.delete(r.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(r.pointerId);
  }
}
function un(e, r, t, n, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: r,
        domEventName: t,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [i],
      }),
      r !== null && ((r = ii(r)), r !== null && bu(r)),
      e)
    : ((e.eventSystemFlags |= n),
      (r = e.targetContainers),
      i !== null && r.indexOf(i) === -1 && r.push(i),
      e);
}
function gm(e, r, t, n, i) {
  switch (r) {
    case "focusin":
      return (Wr = un(Wr, e, r, t, n, i)), !0;
    case "dragenter":
      return (Gr = un(Gr, e, r, t, n, i)), !0;
    case "mouseover":
      return (Vr = un(Vr, e, r, t, n, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Mn.set(o, un(Mn.get(o) || null, e, r, t, n, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Fn.set(o, un(Fn.get(o) || null, e, r, t, n, i)), !0
      );
  }
  return !1;
}
function Nf(e) {
  var r = ct(e.target);
  if (r !== null) {
    var t = xt(r);
    if (t !== null) {
      if (((r = t.tag), r === 13)) {
        if (((r = hf(t)), r !== null)) {
          (e.blockedOn = r),
            kf(e.priority, function () {
              If(t);
            });
          return;
        }
      } else if (r === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gi(e) {
  if (e.blockedOn !== null) return !1;
  for (var r = e.targetContainers; 0 < r.length; ) {
    var t = Nl(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var n = new t.constructor(t.type, t);
      (Cl = n), t.target.dispatchEvent(n), (Cl = null);
    } else return (r = ii(t)), r !== null && bu(r), (e.blockedOn = t), !1;
    r.shift();
  }
  return !0;
}
function tc(e, r, t) {
  Gi(e) && t.delete(r);
}
function mm() {
  (kl = !1),
    Wr !== null && Gi(Wr) && (Wr = null),
    Gr !== null && Gi(Gr) && (Gr = null),
    Vr !== null && Gi(Vr) && (Vr = null),
    Mn.forEach(tc),
    Fn.forEach(tc);
}
function sn(e, r) {
  e.blockedOn === r &&
    ((e.blockedOn = null),
    kl ||
      ((kl = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, mm)));
}
function zn(e) {
  function r(i) {
    return sn(i, e);
  }
  if (0 < Ei.length) {
    sn(Ei[0], e);
    for (var t = 1; t < Ei.length; t++) {
      var n = Ei[t];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Wr !== null && sn(Wr, e),
      Gr !== null && sn(Gr, e),
      Vr !== null && sn(Vr, e),
      Mn.forEach(r),
      Fn.forEach(r),
      t = 0;
    t < $r.length;
    t++
  )
    (n = $r[t]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < $r.length && ((t = $r[0]), t.blockedOn === null); )
    Nf(t), t.blockedOn === null && $r.shift();
}
var _t = Lr.ReactCurrentBatchConfig,
  oo = !0;
function hm(e, r, t, n) {
  var i = W,
    o = _t.transition;
  _t.transition = null;
  try {
    (W = 1), Cu(e, r, t, n);
  } finally {
    (W = i), (_t.transition = o);
  }
}
function ym(e, r, t, n) {
  var i = W,
    o = _t.transition;
  _t.transition = null;
  try {
    (W = 4), Cu(e, r, t, n);
  } finally {
    (W = i), (_t.transition = o);
  }
}
function Cu(e, r, t, n) {
  if (oo) {
    var i = Nl(e, r, t, n);
    if (i === null) _a(e, r, n, ao, t), rc(e, n);
    else if (gm(i, e, r, t, n)) n.stopPropagation();
    else if ((rc(e, n), r & 4 && -1 < vm.indexOf(e))) {
      for (; i !== null; ) {
        var o = ii(i);
        if (
          (o !== null && Ef(o),
          (o = Nl(e, r, t, n)),
          o === null && _a(e, r, n, ao, t),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else _a(e, r, n, null, t);
  }
}
var ao = null;
function Nl(e, r, t, n) {
  if (((ao = null), (e = wu(n)), (e = ct(e)), e !== null))
    if (((r = xt(e)), r === null)) e = null;
    else if (((t = r.tag), t === 13)) {
      if (((e = hf(r)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated)
        return r.tag === 3 ? r.stateNode.containerInfo : null;
      e = null;
    } else r !== e && (e = null);
  return (ao = e), null;
}
function Of(e) {
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
      switch (om()) {
        case Su:
          return 1;
        case xf:
          return 4;
        case no:
        case am:
          return 16;
        case bf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jr = null,
  Du = null,
  Vi = null;
function Tf() {
  if (Vi) return Vi;
  var e,
    r = Du,
    t = r.length,
    n,
    i = "value" in jr ? jr.value : jr.textContent,
    o = i.length;
  for (e = 0; e < t && r[e] === i[e]; e++);
  var a = t - e;
  for (n = 1; n <= a && r[t - n] === i[o - n]; n++);
  return (Vi = i.slice(e, 1 < n ? 1 - n : void 0));
}
function Hi(e) {
  var r = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && r === 13 && (e = 13))
      : (e = r),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ii() {
  return !0;
}
function nc() {
  return !1;
}
function Qe(e) {
  function r(t, n, i, o, a) {
    (this._reactName = t),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ii
        : nc),
      (this.isPropagationStopped = nc),
      this
    );
  }
  return (
    re(r.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = Ii));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = Ii));
      },
      persist: function () {},
      isPersistent: Ii,
    }),
    r
  );
}
var Zt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Eu = Qe(Zt),
  ni = re({}, Zt, { view: 0, detail: 0 }),
  wm = Qe(ni),
  Ta,
  Ra,
  cn,
  zo = re({}, ni, {
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
    getModifierState: Iu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== cn &&
            (cn && e.type === "mousemove"
              ? ((Ta = e.screenX - cn.screenX), (Ra = e.screenY - cn.screenY))
              : (Ra = Ta = 0),
            (cn = e)),
          Ta);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ra;
    },
  }),
  ic = Qe(zo),
  Sm = re({}, zo, { dataTransfer: 0 }),
  xm = Qe(Sm),
  bm = re({}, ni, { relatedTarget: 0 }),
  Aa = Qe(bm),
  Cm = re({}, Zt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dm = Qe(Cm),
  Em = re({}, Zt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Im = Qe(Em),
  Pm = re({}, Zt, { data: 0 }),
  oc = Qe(Pm),
  km = {
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
    MozPrintableKey: "Unidentified",
  },
  Nm = {
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
    224: "Meta",
  },
  Om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Tm(e) {
  var r = this.nativeEvent;
  return r.getModifierState ? r.getModifierState(e) : (e = Om[e]) ? !!r[e] : !1;
}
function Iu() {
  return Tm;
}
var Rm = re({}, ni, {
    key: function (e) {
      if (e.key) {
        var r = km[e.key] || e.key;
        if (r !== "Unidentified") return r;
      }
      return e.type === "keypress"
        ? ((e = Hi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Iu,
    charCode: function (e) {
      return e.type === "keypress" ? Hi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Hi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Am = Qe(Rm),
  Bm = re({}, zo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ac = Qe(Bm),
  Lm = re({}, ni, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Iu,
  }),
  Mm = Qe(Lm),
  Fm = re({}, Zt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zm = Qe(Fm),
  $m = re({}, zo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _m = Qe($m),
  jm = [9, 13, 27, 32],
  Pu = Rr && "CompositionEvent" in window,
  Dn = null;
Rr && "documentMode" in document && (Dn = document.documentMode);
var Um = Rr && "TextEvent" in window && !Dn,
  Rf = Rr && (!Pu || (Dn && 8 < Dn && 11 >= Dn)),
  lc = String.fromCharCode(32),
  uc = !1;
function Af(e, r) {
  switch (e) {
    case "keyup":
      return jm.indexOf(r.keyCode) !== -1;
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
function Bf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pt = !1;
function Wm(e, r) {
  switch (e) {
    case "compositionend":
      return Bf(r);
    case "keypress":
      return r.which !== 32 ? null : ((uc = !0), lc);
    case "textInput":
      return (e = r.data), e === lc && uc ? null : e;
    default:
      return null;
  }
}
function Gm(e, r) {
  if (Pt)
    return e === "compositionend" || (!Pu && Af(e, r))
      ? ((e = Tf()), (Vi = Du = jr = null), (Pt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
        if (r.char && 1 < r.char.length) return r.char;
        if (r.which) return String.fromCharCode(r.which);
      }
      return null;
    case "compositionend":
      return Rf && r.locale !== "ko" ? null : r.data;
    default:
      return null;
  }
}
var Vm = {
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
  week: !0,
};
function sc(e) {
  var r = e && e.nodeName && e.nodeName.toLowerCase();
  return r === "input" ? !!Vm[e.type] : r === "textarea";
}
function Lf(e, r, t, n) {
  ff(n),
    (r = lo(r, "onChange")),
    0 < r.length &&
      ((t = new Eu("onChange", "change", null, t, n)),
      e.push({ event: t, listeners: r }));
}
var En = null,
  $n = null;
function Hm(e) {
  Hf(e, 0);
}
function $o(e) {
  var r = Ot(e);
  if (of(r)) return e;
}
function Qm(e, r) {
  if (e === "change") return r;
}
var Mf = !1;
if (Rr) {
  var Ba;
  if (Rr) {
    var La = "oninput" in document;
    if (!La) {
      var cc = document.createElement("div");
      cc.setAttribute("oninput", "return;"),
        (La = typeof cc.oninput == "function");
    }
    Ba = La;
  } else Ba = !1;
  Mf = Ba && (!document.documentMode || 9 < document.documentMode);
}
function dc() {
  En && (En.detachEvent("onpropertychange", Ff), ($n = En = null));
}
function Ff(e) {
  if (e.propertyName === "value" && $o($n)) {
    var r = [];
    Lf(r, $n, e, wu(e)), mf(Hm, r);
  }
}
function qm(e, r, t) {
  e === "focusin"
    ? (dc(), (En = r), ($n = t), En.attachEvent("onpropertychange", Ff))
    : e === "focusout" && dc();
}
function Km(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $o($n);
}
function Ym(e, r) {
  if (e === "click") return $o(r);
}
function Xm(e, r) {
  if (e === "input" || e === "change") return $o(r);
}
function Jm(e, r) {
  return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
}
var mr = typeof Object.is == "function" ? Object.is : Jm;
function _n(e, r) {
  if (mr(e, r)) return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  var t = Object.keys(e),
    n = Object.keys(r);
  if (t.length !== n.length) return !1;
  for (n = 0; n < t.length; n++) {
    var i = t[n];
    if (!dl.call(r, i) || !mr(e[i], r[i])) return !1;
  }
  return !0;
}
function fc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pc(e, r) {
  var t = fc(e);
  e = 0;
  for (var n; t; ) {
    if (t.nodeType === 3) {
      if (((n = e + t.textContent.length), e <= r && n >= r))
        return { node: t, offset: r - e };
      e = n;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = fc(t);
  }
}
function zf(e, r) {
  return e && r
    ? e === r
      ? !0
      : e && e.nodeType === 3
      ? !1
      : r && r.nodeType === 3
      ? zf(e, r.parentNode)
      : "contains" in e
      ? e.contains(r)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(r) & 16)
      : !1
    : !1;
}
function $f() {
  for (var e = window, r = eo(); r instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof r.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = r.contentWindow;
    else break;
    r = eo(e.document);
  }
  return r;
}
function ku(e) {
  var r = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    r &&
    ((r === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      r === "textarea" ||
      e.contentEditable === "true")
  );
}
function Zm(e) {
  var r = $f(),
    t = e.focusedElem,
    n = e.selectionRange;
  if (
    r !== t &&
    t &&
    t.ownerDocument &&
    zf(t.ownerDocument.documentElement, t)
  ) {
    if (n !== null && ku(t)) {
      if (
        ((r = n.start),
        (e = n.end),
        e === void 0 && (e = r),
        "selectionStart" in t)
      )
        (t.selectionStart = r), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((r = t.ownerDocument || document) && r.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = t.textContent.length,
          o = Math.min(n.start, i);
        (n = n.end === void 0 ? o : Math.min(n.end, i)),
          !e.extend && o > n && ((i = n), (n = o), (o = i)),
          (i = pc(t, o));
        var a = pc(t, n);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((r = r.createRange()),
          r.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > n
            ? (e.addRange(r), e.extend(a.node, a.offset))
            : (r.setEnd(a.node, a.offset), e.addRange(r)));
      }
    }
    for (r = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        r.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < r.length; t++)
      (e = r[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var eh = Rr && "documentMode" in document && 11 >= document.documentMode,
  kt = null,
  Ol = null,
  In = null,
  Tl = !1;
function vc(e, r, t) {
  var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Tl ||
    kt == null ||
    kt !== eo(n) ||
    ((n = kt),
    "selectionStart" in n && ku(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (In && _n(In, n)) ||
      ((In = n),
      (n = lo(Ol, "onSelect")),
      0 < n.length &&
        ((r = new Eu("onSelect", "select", null, r, t)),
        e.push({ event: r, listeners: n }),
        (r.target = kt))));
}
function Pi(e, r) {
  var t = {};
  return (
    (t[e.toLowerCase()] = r.toLowerCase()),
    (t["Webkit" + e] = "webkit" + r),
    (t["Moz" + e] = "moz" + r),
    t
  );
}
var Nt = {
    animationend: Pi("Animation", "AnimationEnd"),
    animationiteration: Pi("Animation", "AnimationIteration"),
    animationstart: Pi("Animation", "AnimationStart"),
    transitionend: Pi("Transition", "TransitionEnd"),
  },
  Ma = {},
  _f = {};
Rr &&
  ((_f = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Nt.animationend.animation,
    delete Nt.animationiteration.animation,
    delete Nt.animationstart.animation),
  "TransitionEvent" in window || delete Nt.transitionend.transition);
function _o(e) {
  if (Ma[e]) return Ma[e];
  if (!Nt[e]) return e;
  var r = Nt[e],
    t;
  for (t in r) if (r.hasOwnProperty(t) && t in _f) return (Ma[e] = r[t]);
  return e;
}
var jf = _o("animationend"),
  Uf = _o("animationiteration"),
  Wf = _o("animationstart"),
  Gf = _o("transitionend"),
  Vf = new Map(),
  gc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function tt(e, r) {
  Vf.set(e, r), St(r, [e]);
}
for (var Fa = 0; Fa < gc.length; Fa++) {
  var za = gc[Fa],
    rh = za.toLowerCase(),
    th = za[0].toUpperCase() + za.slice(1);
  tt(rh, "on" + th);
}
tt(jf, "onAnimationEnd");
tt(Uf, "onAnimationIteration");
tt(Wf, "onAnimationStart");
tt("dblclick", "onDoubleClick");
tt("focusin", "onFocus");
tt("focusout", "onBlur");
tt(Gf, "onTransitionEnd");
Wt("onMouseEnter", ["mouseout", "mouseover"]);
Wt("onMouseLeave", ["mouseout", "mouseover"]);
Wt("onPointerEnter", ["pointerout", "pointerover"]);
Wt("onPointerLeave", ["pointerout", "pointerover"]);
St(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
St(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
St("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
St(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
St(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
St(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  nh = new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));
function mc(e, r, t) {
  var n = e.type || "unknown-event";
  (e.currentTarget = t), rm(n, r, void 0, e), (e.currentTarget = null);
}
function Hf(e, r) {
  r = (r & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var n = e[t],
      i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (r)
        for (var a = n.length - 1; 0 <= a; a--) {
          var l = n[a],
            u = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          mc(i, l, c), (o = u);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((l = n[a]),
            (u = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          mc(i, l, c), (o = u);
        }
    }
  }
  if (to) throw ((e = Il), (to = !1), (Il = null), e);
}
function q(e, r) {
  var t = r[Ml];
  t === void 0 && (t = r[Ml] = new Set());
  var n = e + "__bubble";
  t.has(n) || (Qf(r, e, 2, !1), t.add(n));
}
function $a(e, r, t) {
  var n = 0;
  r && (n |= 4), Qf(t, e, n, r);
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);
function jn(e) {
  if (!e[ki]) {
    (e[ki] = !0),
      Zd.forEach(function (t) {
        t !== "selectionchange" && (nh.has(t) || $a(t, !1, e), $a(t, !0, e));
      });
    var r = e.nodeType === 9 ? e : e.ownerDocument;
    r === null || r[ki] || ((r[ki] = !0), $a("selectionchange", !1, r));
  }
}
function Qf(e, r, t, n) {
  switch (Of(r)) {
    case 1:
      var i = hm;
      break;
    case 4:
      i = ym;
      break;
    default:
      i = Cu;
  }
  (t = i.bind(null, r, t, e)),
    (i = void 0),
    !El ||
      (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(r, t, { capture: !0, passive: i })
        : e.addEventListener(r, t, !0)
      : i !== void 0
      ? e.addEventListener(r, t, { passive: i })
      : e.addEventListener(r, t, !1);
}
function _a(e, r, t, n, i) {
  var o = n;
  if ((r & 1) === 0 && (r & 2) === 0 && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var l = n.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = ct(l)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            n = o = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  mf(function () {
    var c = o,
      f = wu(t),
      d = [];
    e: {
      var s = Vf.get(e);
      if (s !== void 0) {
        var p = Eu,
          g = e;
        switch (e) {
          case "keypress":
            if (Hi(t) === 0) break e;
          case "keydown":
          case "keyup":
            p = Am;
            break;
          case "focusin":
            (g = "focus"), (p = Aa);
            break;
          case "focusout":
            (g = "blur"), (p = Aa);
            break;
          case "beforeblur":
          case "afterblur":
            p = Aa;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = ic;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = xm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Mm;
            break;
          case jf:
          case Uf:
          case Wf:
            p = Dm;
            break;
          case Gf:
            p = zm;
            break;
          case "scroll":
            p = wm;
            break;
          case "wheel":
            p = _m;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Im;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = ac;
        }
        var y = (r & 4) !== 0,
          S = !y && e === "scroll",
          m = y ? (s !== null ? s + "Capture" : null) : s;
        y = [];
        for (var v = c, h; v !== null; ) {
          h = v;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              m !== null && ((w = Ln(v, m)), w != null && y.push(Un(v, w, h)))),
            S)
          )
            break;
          v = v.return;
        }
        0 < y.length &&
          ((s = new p(s, g, null, t, f)), d.push({ event: s, listeners: y }));
      }
    }
    if ((r & 7) === 0) {
      e: {
        if (
          ((s = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          s &&
            t !== Cl &&
            (g = t.relatedTarget || t.fromElement) &&
            (ct(g) || g[Ar]))
        )
          break e;
        if (
          (p || s) &&
          ((s =
            f.window === f
              ? f
              : (s = f.ownerDocument)
              ? s.defaultView || s.parentWindow
              : window),
          p
            ? ((g = t.relatedTarget || t.toElement),
              (p = c),
              (g = g ? ct(g) : null),
              g !== null &&
                ((S = xt(g)), g !== S || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = c)),
          p !== g)
        ) {
          if (
            ((y = ic),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ac),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (v = "pointer")),
            (S = p == null ? s : Ot(p)),
            (h = g == null ? s : Ot(g)),
            (s = new y(w, v + "leave", p, t, f)),
            (s.target = S),
            (s.relatedTarget = h),
            (w = null),
            ct(f) === c &&
              ((y = new y(m, v + "enter", g, t, f)),
              (y.target = h),
              (y.relatedTarget = S),
              (w = y)),
            (S = w),
            p && g)
          )
            r: {
              for (y = p, m = g, v = 0, h = y; h; h = Ct(h)) v++;
              for (h = 0, w = m; w; w = Ct(w)) h++;
              for (; 0 < v - h; ) (y = Ct(y)), v--;
              for (; 0 < h - v; ) (m = Ct(m)), h--;
              for (; v--; ) {
                if (y === m || (m !== null && y === m.alternate)) break r;
                (y = Ct(y)), (m = Ct(m));
              }
              y = null;
            }
          else y = null;
          p !== null && hc(d, s, p, y, !1),
            g !== null && S !== null && hc(d, S, g, y, !0);
        }
      }
      e: {
        if (
          ((s = c ? Ot(c) : window),
          (p = s.nodeName && s.nodeName.toLowerCase()),
          p === "select" || (p === "input" && s.type === "file"))
        )
          var x = Qm;
        else if (sc(s))
          if (Mf) x = Xm;
          else {
            x = Km;
            var b = qm;
          }
        else
          (p = s.nodeName) &&
            p.toLowerCase() === "input" &&
            (s.type === "checkbox" || s.type === "radio") &&
            (x = Ym);
        if (x && (x = x(e, c))) {
          Lf(d, x, t, f);
          break e;
        }
        b && b(e, s, c),
          e === "focusout" &&
            (b = s._wrapperState) &&
            b.controlled &&
            s.type === "number" &&
            yl(s, "number", s.value);
      }
      switch (((b = c ? Ot(c) : window), e)) {
        case "focusin":
          (sc(b) || b.contentEditable === "true") &&
            ((kt = b), (Ol = c), (In = null));
          break;
        case "focusout":
          In = Ol = kt = null;
          break;
        case "mousedown":
          Tl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Tl = !1), vc(d, t, f);
          break;
        case "selectionchange":
          if (eh) break;
        case "keydown":
        case "keyup":
          vc(d, t, f);
      }
      var E;
      if (Pu)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Pt
          ? Af(e, t) && (k = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Rf &&
          t.locale !== "ko" &&
          (Pt || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Pt && (E = Tf())
            : ((jr = f),
              (Du = "value" in jr ? jr.value : jr.textContent),
              (Pt = !0))),
        (b = lo(c, k)),
        0 < b.length &&
          ((k = new oc(k, e, null, t, f)),
          d.push({ event: k, listeners: b }),
          E ? (k.data = E) : ((E = Bf(t)), E !== null && (k.data = E)))),
        (E = Um ? Wm(e, t) : Gm(e, t)) &&
          ((c = lo(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new oc("onBeforeInput", "beforeinput", null, t, f)),
            d.push({ event: f, listeners: c }),
            (f.data = E)));
    }
    Hf(d, r);
  });
}
function Un(e, r, t) {
  return { instance: e, listener: r, currentTarget: t };
}
function lo(e, r) {
  for (var t = r + "Capture", n = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ln(e, t)),
      o != null && n.unshift(Un(e, o, i)),
      (o = Ln(e, r)),
      o != null && n.push(Un(e, o, i))),
      (e = e.return);
  }
  return n;
}
function Ct(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hc(e, r, t, n, i) {
  for (var o = r._reactName, a = []; t !== null && t !== n; ) {
    var l = t,
      u = l.alternate,
      c = l.stateNode;
    if (u !== null && u === n) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      i
        ? ((u = Ln(t, o)), u != null && a.unshift(Un(t, u, l)))
        : i || ((u = Ln(t, o)), u != null && a.push(Un(t, u, l)))),
      (t = t.return);
  }
  a.length !== 0 && e.push({ event: r, listeners: a });
}
var ih = /\r\n?/g,
  oh = /\u0000|\uFFFD/g;
function yc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ih,
      `
`
    )
    .replace(oh, "");
}
function Ni(e, r, t) {
  if (((r = yc(r)), yc(e) !== r && t)) throw Error(D(425));
}
function uo() {}
var Rl = null,
  Al = null;
function Bl(e, r) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof r.children == "string" ||
    typeof r.children == "number" ||
    (typeof r.dangerouslySetInnerHTML == "object" &&
      r.dangerouslySetInnerHTML !== null &&
      r.dangerouslySetInnerHTML.__html != null)
  );
}
var Ll = typeof setTimeout == "function" ? setTimeout : void 0,
  ah = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wc = typeof Promise == "function" ? Promise : void 0,
  lh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wc != "undefined"
      ? function (e) {
          return wc.resolve(null).then(e).catch(uh);
        }
      : Ll;
function uh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ja(e, r) {
  var t = r,
    n = 0;
  do {
    var i = t.nextSibling;
    if ((e.removeChild(t), i && i.nodeType === 8))
      if (((t = i.data), t === "/$")) {
        if (n === 0) {
          e.removeChild(i), zn(r);
          return;
        }
        n--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || n++;
    t = i;
  } while (t);
  zn(r);
}
function kr(e) {
  for (; e != null; e = e.nextSibling) {
    var r = e.nodeType;
    if (r === 1 || r === 3) break;
    if (r === 8) {
      if (((r = e.data), r === "$" || r === "$!" || r === "$?")) break;
      if (r === "/$") return null;
    }
  }
  return e;
}
function Sc(e) {
  e = e.previousSibling;
  for (var r = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (r === 0) return e;
        r--;
      } else t === "/$" && r++;
    }
    e = e.previousSibling;
  }
  return null;
}
var en = Math.random().toString(36).slice(2),
  br = "__reactFiber$" + en,
  Wn = "__reactProps$" + en,
  Ar = "__reactContainer$" + en,
  Ml = "__reactEvents$" + en,
  sh = "__reactListeners$" + en,
  ch = "__reactHandles$" + en;
function ct(e) {
  var r = e[br];
  if (r) return r;
  for (var t = e.parentNode; t; ) {
    if ((r = t[Ar] || t[br])) {
      if (
        ((t = r.alternate),
        r.child !== null || (t !== null && t.child !== null))
      )
        for (e = Sc(e); e !== null; ) {
          if ((t = e[br])) return t;
          e = Sc(e);
        }
      return r;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function ii(e) {
  return (
    (e = e[br] || e[Ar]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ot(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function jo(e) {
  return e[Wn] || null;
}
var Fl = [],
  Tt = -1;
function nt(e) {
  return { current: e };
}
function K(e) {
  0 > Tt || ((e.current = Fl[Tt]), (Fl[Tt] = null), Tt--);
}
function Q(e, r) {
  Tt++, (Fl[Tt] = e.current), (e.current = r);
}
var Zr = {},
  Ee = nt(Zr),
  Fe = nt(!1),
  vt = Zr;
function Gt(e, r) {
  var t = e.type.contextTypes;
  if (!t) return Zr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === r)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in t) i[o] = r[o];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function so() {
  K(Fe), K(Ee);
}
function xc(e, r, t) {
  if (Ee.current !== Zr) throw Error(D(168));
  Q(Ee, r), Q(Fe, t);
}
function qf(e, r, t) {
  var n = e.stateNode;
  if (((r = r.childContextTypes), typeof n.getChildContext != "function"))
    return t;
  n = n.getChildContext();
  for (var i in n) if (!(i in r)) throw Error(D(108, qg(e) || "Unknown", i));
  return re({}, t, n);
}
function co(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zr),
    (vt = Ee.current),
    Q(Ee, e),
    Q(Fe, Fe.current),
    !0
  );
}
function bc(e, r, t) {
  var n = e.stateNode;
  if (!n) throw Error(D(169));
  t
    ? ((e = qf(e, r, vt)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      K(Fe),
      K(Ee),
      Q(Ee, e))
    : K(Fe),
    Q(Fe, t);
}
var Pr = null,
  Uo = !1,
  Ua = !1;
function Kf(e) {
  Pr === null ? (Pr = [e]) : Pr.push(e);
}
function dh(e) {
  (Uo = !0), Kf(e);
}
function it() {
  if (!Ua && Pr !== null) {
    Ua = !0;
    var e = 0,
      r = W;
    try {
      var t = Pr;
      for (W = 1; e < t.length; e++) {
        var n = t[e];
        do n = n(!0);
        while (n !== null);
      }
      (Pr = null), (Uo = !1);
    } catch (i) {
      throw (Pr !== null && (Pr = Pr.slice(e + 1)), Sf(Su, it), i);
    } finally {
      (W = r), (Ua = !1);
    }
  }
  return null;
}
var fh = Lr.ReactCurrentBatchConfig;
function sr(e, r) {
  if (e && e.defaultProps) {
    (r = re({}, r)), (e = e.defaultProps);
    for (var t in e) r[t] === void 0 && (r[t] = e[t]);
    return r;
  }
  return r;
}
var fo = nt(null),
  po = null,
  Rt = null,
  Nu = null;
function Ou() {
  Nu = Rt = po = null;
}
function Tu(e) {
  var r = fo.current;
  K(fo), (e._currentValue = r);
}
function zl(e, r, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & r) !== r
        ? ((e.childLanes |= r), n !== null && (n.childLanes |= r))
        : n !== null && (n.childLanes & r) !== r && (n.childLanes |= r),
      e === t)
    )
      break;
    e = e.return;
  }
}
function jt(e, r) {
  (po = e),
    (Nu = Rt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & r) !== 0 && (Me = !0), (e.firstContext = null));
}
function ar(e) {
  var r = e._currentValue;
  if (Nu !== e)
    if (((e = { context: e, memoizedValue: r, next: null }), Rt === null)) {
      if (po === null) throw Error(D(308));
      (Rt = e), (po.dependencies = { lanes: 0, firstContext: e });
    } else Rt = Rt.next = e;
  return r;
}
var fr = null,
  zr = !1;
function Ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Yf(e, r) {
  (e = e.updateQueue),
    r.updateQueue === e &&
      (r.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tr(e, r) {
  return {
    eventTime: e,
    lane: r,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Hr(e, r) {
  var t = e.updateQueue;
  t !== null &&
    ((t = t.shared),
    $p(e)
      ? ((e = t.interleaved),
        e === null
          ? ((r.next = r), fr === null ? (fr = [t]) : fr.push(t))
          : ((r.next = e.next), (e.next = r)),
        (t.interleaved = r))
      : ((e = t.pending),
        e === null ? (r.next = r) : ((r.next = e.next), (e.next = r)),
        (t.pending = r)));
}
function Qi(e, r, t) {
  if (
    ((r = r.updateQueue), r !== null && ((r = r.shared), (t & 4194240) !== 0))
  ) {
    var n = r.lanes;
    (n &= e.pendingLanes), (t |= n), (r.lanes = t), xu(e, t);
  }
}
function Cc(e, r) {
  var t = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), t === n)) {
    var i = null,
      o = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var a = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (t = t.next);
      } while (t !== null);
      o === null ? (i = o = r) : (o = o.next = r);
    } else i = o = r;
    (t = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = r) : (e.next = r),
    (t.lastBaseUpdate = r);
}
function vo(e, r, t, n) {
  var i = e.updateQueue;
  zr = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      c = u.next;
    (u.next = null), a === null ? (o = c) : (a.next = c), (a = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== a &&
        (l === null ? (f.firstBaseUpdate = c) : (l.next = c),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = i.baseState;
    (a = 0), (f = c = u = null), (l = o);
    do {
      var s = l.lane,
        p = l.eventTime;
      if ((n & s) === s) {
        f !== null &&
          (f = f.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            y = l;
          switch (((s = r), (p = t), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                d = g.call(p, d, s);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (s = typeof g == "function" ? g.call(p, d, s) : g),
                s == null)
              )
                break e;
              d = re({}, d, s);
              break e;
            case 2:
              zr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (s = i.effects),
          s === null ? (i.effects = [l]) : s.push(l));
      } else
        (p = {
          eventTime: p,
          lane: s,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((c = f = p), (u = d)) : (f = f.next = p),
          (a |= s);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (s = l),
          (l = s.next),
          (s.next = null),
          (i.lastBaseUpdate = s),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (u = d),
      (i.baseState = u),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = f),
      (r = i.shared.interleaved),
      r !== null)
    ) {
      i = r;
      do (a |= i.lane), (i = i.next);
      while (i !== r);
    } else o === null && (i.shared.lanes = 0);
    (ht |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Dc(e, r, t) {
  if (((e = r.effects), (r.effects = null), e !== null))
    for (r = 0; r < e.length; r++) {
      var n = e[r],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = t), typeof i != "function"))
          throw Error(D(191, i));
        i.call(n);
      }
    }
}
var Xf = new Jd.Component().refs;
function $l(e, r, t, n) {
  (r = e.memoizedState),
    (t = t(n, r)),
    (t = t == null ? r : re({}, r, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var Wo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xt(e) === e : !1;
  },
  enqueueSetState: function (e, r, t) {
    e = e._reactInternals;
    var n = ke(),
      i = qr(e),
      o = Tr(n, i);
    (o.payload = r),
      t != null && (o.callback = t),
      Hr(e, o),
      (r = ir(e, i, n)),
      r !== null && Qi(r, e, i);
  },
  enqueueReplaceState: function (e, r, t) {
    e = e._reactInternals;
    var n = ke(),
      i = qr(e),
      o = Tr(n, i);
    (o.tag = 1),
      (o.payload = r),
      t != null && (o.callback = t),
      Hr(e, o),
      (r = ir(e, i, n)),
      r !== null && Qi(r, e, i);
  },
  enqueueForceUpdate: function (e, r) {
    e = e._reactInternals;
    var t = ke(),
      n = qr(e),
      i = Tr(t, n);
    (i.tag = 2),
      r != null && (i.callback = r),
      Hr(e, i),
      (r = ir(e, n, t)),
      r !== null && Qi(r, e, n);
  },
};
function Ec(e, r, t, n, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, o, a)
      : r.prototype && r.prototype.isPureReactComponent
      ? !_n(t, n) || !_n(i, o)
      : !0
  );
}
function Jf(e, r, t) {
  var n = !1,
    i = Zr,
    o = r.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ar(o))
      : ((i = ze(r) ? vt : Ee.current),
        (n = r.contextTypes),
        (o = (n = n != null) ? Gt(e, i) : Zr)),
    (r = new r(t, o)),
    (e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
    (r.updater = Wo),
    (e.stateNode = r),
    (r._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    r
  );
}
function Ic(e, r, t, n) {
  (e = r.state),
    typeof r.componentWillReceiveProps == "function" &&
      r.componentWillReceiveProps(t, n),
    typeof r.UNSAFE_componentWillReceiveProps == "function" &&
      r.UNSAFE_componentWillReceiveProps(t, n),
    r.state !== e && Wo.enqueueReplaceState(r, r.state, null);
}
function _l(e, r, t, n) {
  var i = e.stateNode;
  (i.props = t), (i.state = e.memoizedState), (i.refs = Xf), Ru(e);
  var o = r.contextType;
  typeof o == "object" && o !== null
    ? (i.context = ar(o))
    : ((o = ze(r) ? vt : Ee.current), (i.context = Gt(e, o))),
    (i.state = e.memoizedState),
    (o = r.getDerivedStateFromProps),
    typeof o == "function" && ($l(e, r, o, t), (i.state = e.memoizedState)),
    typeof r.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((r = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      r !== i.state && Wo.enqueueReplaceState(i, i.state, null),
      vo(e, t, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
var At = [],
  Bt = 0,
  go = null,
  mo = 0,
  Ze = [],
  er = 0,
  gt = null,
  Nr = 1,
  Or = "";
function lt(e, r) {
  (At[Bt++] = mo), (At[Bt++] = go), (go = e), (mo = r);
}
function Zf(e, r, t) {
  (Ze[er++] = Nr), (Ze[er++] = Or), (Ze[er++] = gt), (gt = e);
  var n = Nr;
  e = Or;
  var i = 32 - gr(n) - 1;
  (n &= ~(1 << i)), (t += 1);
  var o = 32 - gr(r) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (i -= a),
      (Nr = (1 << (32 - gr(r) + i)) | (t << i) | n),
      (Or = o + e);
  } else (Nr = (1 << o) | (t << i) | n), (Or = e);
}
function Au(e) {
  e.return !== null && (lt(e, 1), Zf(e, 1, 0));
}
function Bu(e) {
  for (; e === go; )
    (go = At[--Bt]), (At[Bt] = null), (mo = At[--Bt]), (At[Bt] = null);
  for (; e === gt; )
    (gt = Ze[--er]),
      (Ze[er] = null),
      (Or = Ze[--er]),
      (Ze[er] = null),
      (Nr = Ze[--er]),
      (Ze[er] = null);
}
var Ue = null,
  Le = null,
  X = !1,
  dr = null;
function ep(e, r) {
  var t = rr(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = r),
    (t.return = e),
    (r = e.deletions),
    r === null ? ((e.deletions = [t]), (e.flags |= 16)) : r.push(t);
}
function Pc(e, r) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (r =
          r.nodeType !== 1 || t.toLowerCase() !== r.nodeName.toLowerCase()
            ? null
            : r),
        r !== null
          ? ((e.stateNode = r), (Ue = e), (Le = kr(r.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (r = e.pendingProps === "" || r.nodeType !== 3 ? null : r),
        r !== null ? ((e.stateNode = r), (Ue = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (r = r.nodeType !== 8 ? null : r),
        r !== null
          ? ((t = gt !== null ? { id: Nr, overflow: Or } : null),
            (e.memoizedState = {
              dehydrated: r,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = rr(18, null, null, 0)),
            (t.stateNode = r),
            (t.return = e),
            (e.child = t),
            (Ue = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function jl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ul(e) {
  if (X) {
    var r = Le;
    if (r) {
      var t = r;
      if (!Pc(e, r)) {
        if (jl(e)) throw Error(D(418));
        r = kr(t.nextSibling);
        var n = Ue;
        r && Pc(e, r)
          ? ep(n, t)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Ue = e));
      }
    } else {
      if (jl(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (Ue = e);
    }
  }
}
function kc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function dn(e) {
  if (e !== Ue) return !1;
  if (!X) return kc(e), (X = !0), !1;
  var r;
  if (
    ((r = e.tag !== 3) &&
      !(r = e.tag !== 5) &&
      ((r = e.type),
      (r = r !== "head" && r !== "body" && !Bl(e.type, e.memoizedProps))),
    r && (r = Le))
  ) {
    if (jl(e)) {
      for (e = Le; e; ) e = kr(e.nextSibling);
      throw Error(D(418));
    }
    for (; r; ) ep(e, r), (r = kr(r.nextSibling));
  }
  if ((kc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, r = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (r === 0) {
              Le = kr(e.nextSibling);
              break e;
            }
            r--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || r++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = Ue ? kr(e.stateNode.nextSibling) : null;
  return !0;
}
function Vt() {
  (Le = Ue = null), (X = !1);
}
function Lu(e) {
  dr === null ? (dr = [e]) : dr.push(e);
}
function fn(e, r, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(D(309));
        var n = t.stateNode;
      }
      if (!n) throw Error(D(147, e));
      var i = n,
        o = "" + e;
      return r !== null &&
        r.ref !== null &&
        typeof r.ref == "function" &&
        r.ref._stringRef === o
        ? r.ref
        : ((r = function (a) {
            var l = i.refs;
            l === Xf && (l = i.refs = {}),
              a === null ? delete l[o] : (l[o] = a);
          }),
          (r._stringRef = o),
          r);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!t._owner) throw Error(D(290, e));
  }
  return e;
}
function Oi(e, r) {
  throw (
    ((e = Object.prototype.toString.call(r)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(r).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nc(e) {
  var r = e._init;
  return r(e._payload);
}
function rp(e) {
  function r(m, v) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [v]), (m.flags |= 16)) : h.push(v);
    }
  }
  function t(m, v) {
    if (!e) return null;
    for (; v !== null; ) r(m, v), (v = v.sibling);
    return null;
  }
  function n(m, v) {
    for (m = new Map(); v !== null; )
      v.key !== null ? m.set(v.key, v) : m.set(v.index, v), (v = v.sibling);
    return m;
  }
  function i(m, v) {
    return (m = et(m, v)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, v, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < v ? ((m.flags |= 2), v) : h)
            : ((m.flags |= 2), v))
        : ((m.flags |= 1048576), v)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, v, h, w) {
    return v === null || v.tag !== 6
      ? ((v = qa(h, m.mode, w)), (v.return = m), v)
      : ((v = i(v, h)), (v.return = m), v);
  }
  function u(m, v, h, w) {
    var x = h.type;
    return x === It
      ? f(m, v, h.props.children, w, h.key)
      : v !== null &&
        (v.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Fr &&
            Nc(x) === v.type))
      ? ((w = i(v, h.props)), (w.ref = fn(m, v, h)), (w.return = m), w)
      : ((w = Ji(h.type, h.key, h.props, null, m.mode, w)),
        (w.ref = fn(m, v, h)),
        (w.return = m),
        w);
  }
  function c(m, v, h, w) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== h.containerInfo ||
      v.stateNode.implementation !== h.implementation
      ? ((v = Ka(h, m.mode, w)), (v.return = m), v)
      : ((v = i(v, h.children || [])), (v.return = m), v);
  }
  function f(m, v, h, w, x) {
    return v === null || v.tag !== 7
      ? ((v = pt(h, m.mode, w, x)), (v.return = m), v)
      : ((v = i(v, h)), (v.return = m), v);
  }
  function d(m, v, h) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = qa("" + v, m.mode, h)), (v.return = m), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Si:
          return (
            (h = Ji(v.type, v.key, v.props, null, m.mode, h)),
            (h.ref = fn(m, null, v)),
            (h.return = m),
            h
          );
        case Et:
          return (v = Ka(v, m.mode, h)), (v.return = m), v;
        case Fr:
          var w = v._init;
          return d(m, w(v._payload), h);
      }
      if (wn(v) || an(v))
        return (v = pt(v, m.mode, h, null)), (v.return = m), v;
      Oi(m, v);
    }
    return null;
  }
  function s(m, v, h, w) {
    var x = v !== null ? v.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return x !== null ? null : l(m, v, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Si:
          return h.key === x ? u(m, v, h, w) : null;
        case Et:
          return h.key === x ? c(m, v, h, w) : null;
        case Fr:
          return (x = h._init), s(m, v, x(h._payload), w);
      }
      if (wn(h) || an(h)) return x !== null ? null : f(m, v, h, w, null);
      Oi(m, h);
    }
    return null;
  }
  function p(m, v, h, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(h) || null), l(v, m, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Si:
          return (m = m.get(w.key === null ? h : w.key) || null), u(v, m, w, x);
        case Et:
          return (m = m.get(w.key === null ? h : w.key) || null), c(v, m, w, x);
        case Fr:
          var b = w._init;
          return p(m, v, h, b(w._payload), x);
      }
      if (wn(w) || an(w)) return (m = m.get(h) || null), f(v, m, w, x, null);
      Oi(v, w);
    }
    return null;
  }
  function g(m, v, h, w) {
    for (
      var x = null, b = null, E = v, k = (v = 0), R = null;
      E !== null && k < h.length;
      k++
    ) {
      E.index > k ? ((R = E), (E = null)) : (R = E.sibling);
      var T = s(m, E, h[k], w);
      if (T === null) {
        E === null && (E = R);
        break;
      }
      e && E && T.alternate === null && r(m, E),
        (v = o(T, v, k)),
        b === null ? (x = T) : (b.sibling = T),
        (b = T),
        (E = R);
    }
    if (k === h.length) return t(m, E), X && lt(m, k), x;
    if (E === null) {
      for (; k < h.length; k++)
        (E = d(m, h[k], w)),
          E !== null &&
            ((v = o(E, v, k)), b === null ? (x = E) : (b.sibling = E), (b = E));
      return X && lt(m, k), x;
    }
    for (E = n(m, E); k < h.length; k++)
      (R = p(E, m, k, h[k], w)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? k : R.key),
          (v = o(R, v, k)),
          b === null ? (x = R) : (b.sibling = R),
          (b = R));
    return (
      e &&
        E.forEach(function (F) {
          return r(m, F);
        }),
      X && lt(m, k),
      x
    );
  }
  function y(m, v, h, w) {
    var x = an(h);
    if (typeof x != "function") throw Error(D(150));
    if (((h = x.call(h)), h == null)) throw Error(D(151));
    for (
      var b = (x = null), E = v, k = (v = 0), R = null, T = h.next();
      E !== null && !T.done;
      k++, T = h.next()
    ) {
      E.index > k ? ((R = E), (E = null)) : (R = E.sibling);
      var F = s(m, E, T.value, w);
      if (F === null) {
        E === null && (E = R);
        break;
      }
      e && E && F.alternate === null && r(m, E),
        (v = o(F, v, k)),
        b === null ? (x = F) : (b.sibling = F),
        (b = F),
        (E = R);
    }
    if (T.done) return t(m, E), X && lt(m, k), x;
    if (E === null) {
      for (; !T.done; k++, T = h.next())
        (T = d(m, T.value, w)),
          T !== null &&
            ((v = o(T, v, k)), b === null ? (x = T) : (b.sibling = T), (b = T));
      return X && lt(m, k), x;
    }
    for (E = n(m, E); !T.done; k++, T = h.next())
      (T = p(E, m, k, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? k : T.key),
          (v = o(T, v, k)),
          b === null ? (x = T) : (b.sibling = T),
          (b = T));
    return (
      e &&
        E.forEach(function (ue) {
          return r(m, ue);
        }),
      X && lt(m, k),
      x
    );
  }
  function S(m, v, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === It &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Si:
          e: {
            for (var x = h.key, b = v; b !== null; ) {
              if (b.key === x) {
                if (((x = h.type), x === It)) {
                  if (b.tag === 7) {
                    t(m, b.sibling),
                      (v = i(b, h.props.children)),
                      (v.return = m),
                      (m = v);
                    break e;
                  }
                } else if (
                  b.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Fr &&
                    Nc(x) === b.type)
                ) {
                  t(m, b.sibling),
                    (v = i(b, h.props)),
                    (v.ref = fn(m, b, h)),
                    (v.return = m),
                    (m = v);
                  break e;
                }
                t(m, b);
                break;
              } else r(m, b);
              b = b.sibling;
            }
            h.type === It
              ? ((v = pt(h.props.children, m.mode, w, h.key)),
                (v.return = m),
                (m = v))
              : ((w = Ji(h.type, h.key, h.props, null, m.mode, w)),
                (w.ref = fn(m, v, h)),
                (w.return = m),
                (m = w));
          }
          return a(m);
        case Et:
          e: {
            for (b = h.key; v !== null; ) {
              if (v.key === b)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === h.containerInfo &&
                  v.stateNode.implementation === h.implementation
                ) {
                  t(m, v.sibling),
                    (v = i(v, h.children || [])),
                    (v.return = m),
                    (m = v);
                  break e;
                } else {
                  t(m, v);
                  break;
                }
              else r(m, v);
              v = v.sibling;
            }
            (v = Ka(h, m.mode, w)), (v.return = m), (m = v);
          }
          return a(m);
        case Fr:
          return (b = h._init), S(m, v, b(h._payload), w);
      }
      if (wn(h)) return g(m, v, h, w);
      if (an(h)) return y(m, v, h, w);
      Oi(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        v !== null && v.tag === 6
          ? (t(m, v.sibling), (v = i(v, h)), (v.return = m), (m = v))
          : (t(m, v), (v = qa(h, m.mode, w)), (v.return = m), (m = v)),
        a(m))
      : t(m, v);
  }
  return S;
}
var Ht = rp(!0),
  tp = rp(!1),
  oi = {},
  Dr = nt(oi),
  Gn = nt(oi),
  Vn = nt(oi);
function dt(e) {
  if (e === oi) throw Error(D(174));
  return e;
}
function Mu(e, r) {
  switch ((Q(Vn, r), Q(Gn, e), Q(Dr, oi), (e = r.nodeType), e)) {
    case 9:
    case 11:
      r = (r = r.documentElement) ? r.namespaceURI : Sl(null, "");
      break;
    default:
      (e = e === 8 ? r.parentNode : r),
        (r = e.namespaceURI || null),
        (e = e.tagName),
        (r = Sl(r, e));
  }
  K(Dr), Q(Dr, r);
}
function Qt() {
  K(Dr), K(Gn), K(Vn);
}
function np(e) {
  dt(Vn.current);
  var r = dt(Dr.current),
    t = Sl(r, e.type);
  r !== t && (Q(Gn, e), Q(Dr, t));
}
function Fu(e) {
  Gn.current === e && (K(Dr), K(Gn));
}
var Z = nt(0);
function ho(e) {
  for (var r = e; r !== null; ) {
    if (r.tag === 13) {
      var t = r.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return r;
    } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
      if ((r.flags & 128) !== 0) return r;
    } else if (r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === e) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === e) return null;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
  return null;
}
var Wa = [];
function zu() {
  for (var e = 0; e < Wa.length; e++)
    Wa[e]._workInProgressVersionPrimary = null;
  Wa.length = 0;
}
var qi = Lr.ReactCurrentDispatcher,
  Ga = Lr.ReactCurrentBatchConfig,
  mt = 0,
  ee = null,
  oe = null,
  de = null,
  yo = !1,
  Pn = !1,
  Hn = 0,
  ph = 0;
function be() {
  throw Error(D(321));
}
function $u(e, r) {
  if (r === null) return !1;
  for (var t = 0; t < r.length && t < e.length; t++)
    if (!mr(e[t], r[t])) return !1;
  return !0;
}
function _u(e, r, t, n, i, o) {
  if (
    ((mt = o),
    (ee = r),
    (r.memoizedState = null),
    (r.updateQueue = null),
    (r.lanes = 0),
    (qi.current = e === null || e.memoizedState === null ? hh : yh),
    (e = t(n, i)),
    Pn)
  ) {
    o = 0;
    do {
      if (((Pn = !1), (Hn = 0), 25 <= o)) throw Error(D(301));
      (o += 1),
        (de = oe = null),
        (r.updateQueue = null),
        (qi.current = wh),
        (e = t(n, i));
    } while (Pn);
  }
  if (
    ((qi.current = wo),
    (r = oe !== null && oe.next !== null),
    (mt = 0),
    (de = oe = ee = null),
    (yo = !1),
    r)
  )
    throw Error(D(300));
  return e;
}
function ju() {
  var e = Hn !== 0;
  return (Hn = 0), e;
}
function xr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (ee.memoizedState = de = e) : (de = de.next = e), de;
}
function lr() {
  if (oe === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var r = de === null ? ee.memoizedState : de.next;
  if (r !== null) (de = r), (oe = e);
  else {
    if (e === null) throw Error(D(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      de === null ? (ee.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function Qn(e, r) {
  return typeof r == "function" ? r(e) : r;
}
function Va(e) {
  var r = lr(),
    t = r.queue;
  if (t === null) throw Error(D(311));
  t.lastRenderedReducer = e;
  var n = oe,
    i = n.baseQueue,
    o = t.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (n.baseQueue = i = o), (t.pending = null);
  }
  if (i !== null) {
    (o = i.next), (n = n.baseState);
    var l = (a = null),
      u = null,
      c = o;
    do {
      var f = c.lane;
      if ((mt & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (n = c.hasEagerState ? c.eagerState : e(n, c.action));
      else {
        var d = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((l = u = d), (a = n)) : (u = u.next = d),
          (ee.lanes |= f),
          (ht |= f);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (a = n) : (u.next = l),
      mr(n, r.memoizedState) || (Me = !0),
      (r.memoizedState = n),
      (r.baseState = a),
      (r.baseQueue = u),
      (t.lastRenderedState = n);
  }
  if (((e = t.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ee.lanes |= o), (ht |= o), (i = i.next);
    while (i !== e);
  } else i === null && (t.lanes = 0);
  return [r.memoizedState, t.dispatch];
}
function Ha(e) {
  var r = lr(),
    t = r.queue;
  if (t === null) throw Error(D(311));
  t.lastRenderedReducer = e;
  var n = t.dispatch,
    i = t.pending,
    o = r.memoizedState;
  if (i !== null) {
    t.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    mr(o, r.memoizedState) || (Me = !0),
      (r.memoizedState = o),
      r.baseQueue === null && (r.baseState = o),
      (t.lastRenderedState = o);
  }
  return [o, n];
}
function ip() {}
function op(e, r) {
  var t = ee,
    n = lr(),
    i = r(),
    o = !mr(n.memoizedState, i);
  if (
    (o && ((n.memoizedState = i), (Me = !0)),
    (n = n.queue),
    Uu(up.bind(null, t, n, e), [e]),
    n.getSnapshot !== r || o || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      qn(9, lp.bind(null, t, n, i, r), void 0, null),
      le === null)
    )
      throw Error(D(349));
    (mt & 30) !== 0 || ap(t, r, i);
  }
  return i;
}
function ap(e, r, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: r, value: t }),
    (r = ee.updateQueue),
    r === null
      ? ((r = { lastEffect: null, stores: null }),
        (ee.updateQueue = r),
        (r.stores = [e]))
      : ((t = r.stores), t === null ? (r.stores = [e]) : t.push(e));
}
function lp(e, r, t, n) {
  (r.value = t), (r.getSnapshot = n), sp(r) && ir(e, 1, -1);
}
function up(e, r, t) {
  return t(function () {
    sp(r) && ir(e, 1, -1);
  });
}
function sp(e) {
  var r = e.getSnapshot;
  e = e.value;
  try {
    var t = r();
    return !mr(e, t);
  } catch {
    return !0;
  }
}
function Oc(e) {
  var r = xr();
  return (
    typeof e == "function" && (e = e()),
    (r.memoizedState = r.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: e,
    }),
    (r.queue = e),
    (e = e.dispatch = mh.bind(null, ee, e)),
    [r.memoizedState, e]
  );
}
function qn(e, r, t, n) {
  return (
    (e = { tag: e, create: r, destroy: t, deps: n, next: null }),
    (r = ee.updateQueue),
    r === null
      ? ((r = { lastEffect: null, stores: null }),
        (ee.updateQueue = r),
        (r.lastEffect = e.next = e))
      : ((t = r.lastEffect),
        t === null
          ? (r.lastEffect = e.next = e)
          : ((n = t.next), (t.next = e), (e.next = n), (r.lastEffect = e))),
    e
  );
}
function cp() {
  return lr().memoizedState;
}
function Ki(e, r, t, n) {
  var i = xr();
  (ee.flags |= e),
    (i.memoizedState = qn(1 | r, t, void 0, n === void 0 ? null : n));
}
function Go(e, r, t, n) {
  var i = lr();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (oe !== null) {
    var a = oe.memoizedState;
    if (((o = a.destroy), n !== null && $u(n, a.deps))) {
      i.memoizedState = qn(r, t, o, n);
      return;
    }
  }
  (ee.flags |= e), (i.memoizedState = qn(1 | r, t, o, n));
}
function Tc(e, r) {
  return Ki(8390656, 8, e, r);
}
function Uu(e, r) {
  return Go(2048, 8, e, r);
}
function dp(e, r) {
  return Go(4, 2, e, r);
}
function fp(e, r) {
  return Go(4, 4, e, r);
}
function pp(e, r) {
  if (typeof r == "function")
    return (
      (e = e()),
      r(e),
      function () {
        r(null);
      }
    );
  if (r != null)
    return (
      (e = e()),
      (r.current = e),
      function () {
        r.current = null;
      }
    );
}
function vp(e, r, t) {
  return (
    (t = t != null ? t.concat([e]) : null), Go(4, 4, pp.bind(null, r, e), t)
  );
}
function Wu() {}
function gp(e, r) {
  var t = lr();
  r = r === void 0 ? null : r;
  var n = t.memoizedState;
  return n !== null && r !== null && $u(r, n[1])
    ? n[0]
    : ((t.memoizedState = [e, r]), e);
}
function mp(e, r) {
  var t = lr();
  r = r === void 0 ? null : r;
  var n = t.memoizedState;
  return n !== null && r !== null && $u(r, n[1])
    ? n[0]
    : ((e = e()), (t.memoizedState = [e, r]), e);
}
function hp(e, r, t) {
  return (mt & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = t))
    : (mr(t, r) || ((t = Cf()), (ee.lanes |= t), (ht |= t), (e.baseState = !0)),
      r);
}
function vh(e, r) {
  var t = W;
  (W = t !== 0 && 4 > t ? t : 4), e(!0);
  var n = Ga.transition;
  Ga.transition = {};
  try {
    e(!1), r();
  } finally {
    (W = t), (Ga.transition = n);
  }
}
function yp() {
  return lr().memoizedState;
}
function gh(e, r, t) {
  var n = qr(e);
  (t = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null }),
    wp(e)
      ? Sp(r, t)
      : (xp(e, r, t), (t = ke()), (e = ir(e, n, t)), e !== null && bp(e, r, n));
}
function mh(e, r, t) {
  var n = qr(e),
    i = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (wp(e)) Sp(r, i);
  else {
    xp(e, r, i);
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = r.lastRenderedReducer), o !== null)
    )
      try {
        var a = r.lastRenderedState,
          l = o(a, t);
        if (((i.hasEagerState = !0), (i.eagerState = l), mr(l, a))) return;
      } catch {
      } finally {
      }
    (t = ke()), (e = ir(e, n, t)), e !== null && bp(e, r, n);
  }
}
function wp(e) {
  var r = e.alternate;
  return e === ee || (r !== null && r === ee);
}
function Sp(e, r) {
  Pn = yo = !0;
  var t = e.pending;
  t === null ? (r.next = r) : ((r.next = t.next), (t.next = r)),
    (e.pending = r);
}
function xp(e, r, t) {
  $p(e)
    ? ((e = r.interleaved),
      e === null
        ? ((t.next = t), fr === null ? (fr = [r]) : fr.push(r))
        : ((t.next = e.next), (e.next = t)),
      (r.interleaved = t))
    : ((e = r.pending),
      e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (r.pending = t));
}
function bp(e, r, t) {
  if ((t & 4194240) !== 0) {
    var n = r.lanes;
    (n &= e.pendingLanes), (t |= n), (r.lanes = t), xu(e, t);
  }
}
var wo = {
    readContext: ar,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  hh = {
    readContext: ar,
    useCallback: function (e, r) {
      return (xr().memoizedState = [e, r === void 0 ? null : r]), e;
    },
    useContext: ar,
    useEffect: Tc,
    useImperativeHandle: function (e, r, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Ki(4194308, 4, pp.bind(null, r, e), t)
      );
    },
    useLayoutEffect: function (e, r) {
      return Ki(4194308, 4, e, r);
    },
    useInsertionEffect: function (e, r) {
      return Ki(4, 2, e, r);
    },
    useMemo: function (e, r) {
      var t = xr();
      return (
        (r = r === void 0 ? null : r), (e = e()), (t.memoizedState = [e, r]), e
      );
    },
    useReducer: function (e, r, t) {
      var n = xr();
      return (
        (r = t !== void 0 ? t(r) : r),
        (n.memoizedState = n.baseState = r),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: r,
        }),
        (n.queue = e),
        (e = e.dispatch = gh.bind(null, ee, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var r = xr();
      return (e = { current: e }), (r.memoizedState = e);
    },
    useState: Oc,
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      return (xr().memoizedState = e);
    },
    useTransition: function () {
      var e = Oc(!1),
        r = e[0];
      return (e = vh.bind(null, e[1])), (xr().memoizedState = e), [r, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, r, t) {
      var n = ee,
        i = xr();
      if (X) {
        if (t === void 0) throw Error(D(407));
        t = t();
      } else {
        if (((t = r()), le === null)) throw Error(D(349));
        (mt & 30) !== 0 || ap(n, r, t);
      }
      i.memoizedState = t;
      var o = { value: t, getSnapshot: r };
      return (
        (i.queue = o),
        Tc(up.bind(null, n, o, e), [e]),
        (n.flags |= 2048),
        qn(9, lp.bind(null, n, o, t, r), void 0, null),
        t
      );
    },
    useId: function () {
      var e = xr(),
        r = le.identifierPrefix;
      if (X) {
        var t = Or,
          n = Nr;
        (t = (n & ~(1 << (32 - gr(n) - 1))).toString(32) + t),
          (r = ":" + r + "R" + t),
          (t = Hn++),
          0 < t && (r += "H" + t.toString(32)),
          (r += ":");
      } else (t = ph++), (r = ":" + r + "r" + t.toString(32) + ":");
      return (e.memoizedState = r);
    },
    unstable_isNewReconciler: !1,
  },
  yh = {
    readContext: ar,
    useCallback: gp,
    useContext: ar,
    useEffect: Uu,
    useImperativeHandle: vp,
    useInsertionEffect: dp,
    useLayoutEffect: fp,
    useMemo: mp,
    useReducer: Va,
    useRef: cp,
    useState: function () {
      return Va(Qn);
    },
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      var r = lr();
      return hp(r, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Va(Qn)[0],
        r = lr().memoizedState;
      return [e, r];
    },
    useMutableSource: ip,
    useSyncExternalStore: op,
    useId: yp,
    unstable_isNewReconciler: !1,
  },
  wh = {
    readContext: ar,
    useCallback: gp,
    useContext: ar,
    useEffect: Uu,
    useImperativeHandle: vp,
    useInsertionEffect: dp,
    useLayoutEffect: fp,
    useMemo: mp,
    useReducer: Ha,
    useRef: cp,
    useState: function () {
      return Ha(Qn);
    },
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      var r = lr();
      return oe === null ? (r.memoizedState = e) : hp(r, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ha(Qn)[0],
        r = lr().memoizedState;
      return [e, r];
    },
    useMutableSource: ip,
    useSyncExternalStore: op,
    useId: yp,
    unstable_isNewReconciler: !1,
  };
function Gu(e, r) {
  try {
    var t = "",
      n = r;
    do (t += Qg(n)), (n = n.return);
    while (n);
    var i = t;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: r, stack: i };
}
function Wl(e, r) {
  try {
    console.error(r.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Sh = typeof WeakMap == "function" ? WeakMap : Map;
function Cp(e, r, t) {
  (t = Tr(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var n = r.value;
  return (
    (t.callback = function () {
      xo || ((xo = !0), (Jl = n)), Wl(e, r);
    }),
    t
  );
}
function Dp(e, r, t) {
  (t = Tr(-1, t)), (t.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = r.value;
    (t.payload = function () {
      return n(i);
    }),
      (t.callback = function () {
        Wl(e, r);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        Wl(e, r),
          typeof n != "function" &&
            (Qr === null ? (Qr = new Set([this])) : Qr.add(this));
        var a = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    t
  );
}
function Rc(e, r, t) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Sh();
    var i = new Set();
    n.set(r, i);
  } else (i = n.get(r)), i === void 0 && ((i = new Set()), n.set(r, i));
  i.has(t) || (i.add(t), (e = Ah.bind(null, e, r, t)), r.then(e, e));
}
function Ac(e) {
  do {
    var r;
    if (
      ((r = e.tag === 13) &&
        ((r = e.memoizedState), (r = r !== null ? r.dehydrated !== null : !0)),
      r)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bc(e, r, t, n, i) {
  return (e.mode & 1) === 0
    ? (e === r
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((r = Tr(-1, 1)), (r.tag = 2), Hr(t, r))),
          (t.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = i), e);
}
var Ep, Gl, Ip, Pp;
Ep = function (e, r) {
  for (var t = r.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === r) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === r) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Gl = function () {};
Ip = function (e, r, t, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = r.stateNode), dt(Dr.current);
    var o = null;
    switch (t) {
      case "input":
        (i = ml(e, i)), (n = ml(e, n)), (o = []);
        break;
      case "select":
        (i = re({}, i, { value: void 0 })),
          (n = re({}, n, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = wl(e, i)), (n = wl(e, n)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = uo);
    }
    xl(t, n);
    var a;
    t = null;
    for (c in i)
      if (!n.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (a in l) l.hasOwnProperty(a) && (t || (t = {}), (t[a] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (An.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in n) {
      var u = n[c];
      if (
        ((l = i != null ? i[c] : void 0),
        n.hasOwnProperty(c) && u !== l && (u != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (t || (t = {}), (t[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                l[a] !== u[a] &&
                (t || (t = {}), (t[a] = u[a]));
          } else t || (o || (o = []), o.push(c, t)), (t = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (An.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && q("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(c, u));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (r.updateQueue = c) && (r.flags |= 4);
  }
};
Pp = function (e, r, t, n) {
  t !== n && (r.flags |= 4);
};
function pn(e, r) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        r = e.tail;
        for (var t = null; r !== null; )
          r.alternate !== null && (t = r), (r = r.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null
          ? r || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ce(e) {
  var r = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    n = 0;
  if (r)
    for (var i = e.child; i !== null; )
      (t |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (t |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = t), r;
}
function xh(e, r, t) {
  var n = r.pendingProps;
  switch ((Bu(r), r.tag)) {
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
      return Ce(r), null;
    case 1:
      return ze(r.type) && so(), Ce(r), null;
    case 3:
      return (
        (n = r.stateNode),
        Qt(),
        K(Fe),
        K(Ee),
        zu(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (dn(r)
            ? (r.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
              ((r.flags |= 1024), dr !== null && (ru(dr), (dr = null)))),
        Gl(e, r),
        Ce(r),
        null
      );
    case 5:
      Fu(r);
      var i = dt(Vn.current);
      if (((t = r.type), e !== null && r.stateNode != null))
        Ip(e, r, t, n, i),
          e.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
      else {
        if (!n) {
          if (r.stateNode === null) throw Error(D(166));
          return Ce(r), null;
        }
        if (((e = dt(Dr.current)), dn(r))) {
          (n = r.stateNode), (t = r.type);
          var o = r.memoizedProps;
          switch (((n[br] = r), (n[Wn] = o), (e = (r.mode & 1) !== 0), t)) {
            case "dialog":
              q("cancel", n), q("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < xn.length; i++) q(xn[i], n);
              break;
            case "source":
              q("error", n);
              break;
            case "img":
            case "image":
            case "link":
              q("error", n), q("load", n);
              break;
            case "details":
              q("toggle", n);
              break;
            case "input":
              qs(n, o), q("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                q("invalid", n);
              break;
            case "textarea":
              Ys(n, o), q("invalid", n);
          }
          xl(t, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === "children"
                ? typeof l == "string"
                  ? n.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ni(n.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    n.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ni(n.textContent, l, e),
                    (i = ["children", "" + l]))
                : An.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  q("scroll", n);
            }
          switch (t) {
            case "input":
              xi(n), Ks(n, o, !0);
              break;
            case "textarea":
              xi(n), Xs(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = uo);
          }
          (n = i), (r.updateQueue = n), n !== null && (r.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = uf(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = a.createElement(t, { is: n.is }))
                : ((e = a.createElement(t)),
                  t === "select" &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, t)),
            (e[br] = r),
            (e[Wn] = n),
            Ep(e, r, !1, !1),
            (r.stateNode = e);
          e: {
            switch (((a = bl(t, n)), t)) {
              case "dialog":
                q("cancel", e), q("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < xn.length; i++) q(xn[i], e);
                i = n;
                break;
              case "source":
                q("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (i = n);
                break;
              case "details":
                q("toggle", e), (i = n);
                break;
              case "input":
                qs(e, n), (i = ml(e, n)), q("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = re({}, n, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                Ys(e, n), (i = wl(e, n)), q("invalid", e);
                break;
              default:
                i = n;
            }
            xl(t, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? df(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && sf(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (t !== "textarea" || u !== "") && Bn(e, u)
                    : typeof u == "number" && Bn(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (An.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && q("scroll", e)
                      : u != null && gu(e, o, u, a));
              }
            switch (t) {
              case "input":
                xi(e), Ks(e, n, !1);
                break;
              case "textarea":
                xi(e), Xs(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Jr(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (o = n.value),
                  o != null
                    ? Ft(e, !!n.multiple, o, !1)
                    : n.defaultValue != null &&
                      Ft(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = uo);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (r.flags |= 4);
        }
        r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
      }
      return Ce(r), null;
    case 6:
      if (e && r.stateNode != null) Pp(e, r, e.memoizedProps, n);
      else {
        if (typeof n != "string" && r.stateNode === null) throw Error(D(166));
        if (((t = dt(Vn.current)), dt(Dr.current), dn(r))) {
          if (
            ((n = r.stateNode),
            (t = r.memoizedProps),
            (n[br] = r),
            (o = n.nodeValue !== t) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ni(n.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ni(n.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (r.flags |= 4);
        } else
          (n = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(n)),
            (n[br] = r),
            (r.stateNode = n);
      }
      return Ce(r), null;
    case 13:
      if (
        (K(Z),
        (n = r.memoizedState),
        X && Le !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
      ) {
        for (n = Le; n; ) n = kr(n.nextSibling);
        return Vt(), (r.flags |= 98560), r;
      }
      if (n !== null && n.dehydrated !== null) {
        if (((n = dn(r)), e === null)) {
          if (!n) throw Error(D(318));
          if (
            ((n = r.memoizedState), (n = n !== null ? n.dehydrated : null), !n)
          )
            throw Error(D(317));
          n[br] = r;
        } else
          Vt(),
            (r.flags & 128) === 0 && (r.memoizedState = null),
            (r.flags |= 4);
        return Ce(r), null;
      }
      return (
        dr !== null && (ru(dr), (dr = null)),
        (r.flags & 128) !== 0
          ? ((r.lanes = t), r)
          : ((n = n !== null),
            (t = !1),
            e === null ? dn(r) : (t = e.memoizedState !== null),
            n !== t &&
              n &&
              ((r.child.flags |= 8192),
              (r.mode & 1) !== 0 &&
                (e === null || (Z.current & 1) !== 0
                  ? ae === 0 && (ae = 3)
                  : Yu())),
            r.updateQueue !== null && (r.flags |= 4),
            Ce(r),
            null)
      );
    case 4:
      return (
        Qt(), Gl(e, r), e === null && jn(r.stateNode.containerInfo), Ce(r), null
      );
    case 10:
      return Tu(r.type._context), Ce(r), null;
    case 17:
      return ze(r.type) && so(), Ce(r), null;
    case 19:
      if ((K(Z), (o = r.memoizedState), o === null)) return Ce(r), null;
      if (((n = (r.flags & 128) !== 0), (a = o.rendering), a === null))
        if (n) pn(o, !1);
        else {
          if (ae !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = r.child; e !== null; ) {
              if (((a = ho(e)), a !== null)) {
                for (
                  r.flags |= 128,
                    pn(o, !1),
                    n = a.updateQueue,
                    n !== null && ((r.updateQueue = n), (r.flags |= 4)),
                    r.subtreeFlags = 0,
                    n = t,
                    t = r.child;
                  t !== null;

                )
                  (o = t),
                    (e = n),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return Q(Z, (Z.current & 1) | 2), r.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ne() > qt &&
            ((r.flags |= 128), (n = !0), pn(o, !1), (r.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = ho(a)), e !== null)) {
            if (
              ((r.flags |= 128),
              (n = !0),
              (t = e.updateQueue),
              t !== null && ((r.updateQueue = t), (r.flags |= 4)),
              pn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !X)
            )
              return Ce(r), null;
          } else
            2 * ne() - o.renderingStartTime > qt &&
              t !== 1073741824 &&
              ((r.flags |= 128), (n = !0), pn(o, !1), (r.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = r.child), (r.child = a))
          : ((t = o.last),
            t !== null ? (t.sibling = a) : (r.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((r = o.tail),
          (o.rendering = r),
          (o.tail = r.sibling),
          (o.renderingStartTime = ne()),
          (r.sibling = null),
          (t = Z.current),
          Q(Z, n ? (t & 1) | 2 : t & 1),
          r)
        : (Ce(r), null);
    case 22:
    case 23:
      return (
        Ku(),
        (n = r.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (r.flags |= 8192),
        n && (r.mode & 1) !== 0
          ? (_e & 1073741824) !== 0 &&
            (Ce(r), r.subtreeFlags & 6 && (r.flags |= 8192))
          : Ce(r),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, r.tag));
}
var bh = Lr.ReactCurrentOwner,
  Me = !1;
function Pe(e, r, t, n) {
  r.child = e === null ? tp(r, null, t, n) : Ht(r, e.child, t, n);
}
function Lc(e, r, t, n, i) {
  t = t.render;
  var o = r.ref;
  return (
    jt(r, i),
    (n = _u(e, r, t, n, o, i)),
    (t = ju()),
    e !== null && !Me
      ? ((r.updateQueue = e.updateQueue),
        (r.flags &= -2053),
        (e.lanes &= ~i),
        Br(e, r, i))
      : (X && t && Au(r), (r.flags |= 1), Pe(e, r, n, i), r.child)
  );
}
function Mc(e, r, t, n, i) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" &&
      !Xu(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((r.tag = 15), (r.type = o), kp(e, r, o, n, i))
      : ((e = Ji(t.type, null, n, r, r.mode, i)),
        (e.ref = r.ref),
        (e.return = r),
        (r.child = e));
  }
  if (((o = e.child), (e.lanes & i) === 0)) {
    var a = o.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : _n), t(a, n) && e.ref === r.ref)
    )
      return Br(e, r, i);
  }
  return (
    (r.flags |= 1),
    (e = et(o, n)),
    (e.ref = r.ref),
    (e.return = r),
    (r.child = e)
  );
}
function kp(e, r, t, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (_n(o, n) && e.ref === r.ref)
      if (((Me = !1), (r.pendingProps = n = o), (e.lanes & i) !== 0))
        (e.flags & 131072) !== 0 && (Me = !0);
      else return (r.lanes = e.lanes), Br(e, r, i);
  }
  return Vl(e, r, t, n, i);
}
function Np(e, r, t) {
  var n = r.pendingProps,
    i = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if ((r.mode & 1) === 0)
      (r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(Mt, _e),
        (_e |= t);
    else if ((t & 1073741824) !== 0)
      (r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : t),
        Q(Mt, _e),
        (_e |= n);
    else
      return (
        (e = o !== null ? o.baseLanes | t : t),
        (r.lanes = r.childLanes = 1073741824),
        (r.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null,
        }),
        (r.updateQueue = null),
        Q(Mt, _e),
        (_e |= e),
        null
      );
  else
    o !== null ? ((n = o.baseLanes | t), (r.memoizedState = null)) : (n = t),
      Q(Mt, _e),
      (_e |= n);
  return Pe(e, r, i, t), r.child;
}
function Op(e, r) {
  var t = r.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((r.flags |= 512), (r.flags |= 2097152));
}
function Vl(e, r, t, n, i) {
  var o = ze(t) ? vt : Ee.current;
  return (
    (o = Gt(r, o)),
    jt(r, i),
    (t = _u(e, r, t, n, o, i)),
    (n = ju()),
    e !== null && !Me
      ? ((r.updateQueue = e.updateQueue),
        (r.flags &= -2053),
        (e.lanes &= ~i),
        Br(e, r, i))
      : (X && n && Au(r), (r.flags |= 1), Pe(e, r, t, i), r.child)
  );
}
function Fc(e, r, t, n, i) {
  if (ze(t)) {
    var o = !0;
    co(r);
  } else o = !1;
  if ((jt(r, i), r.stateNode === null))
    e !== null && ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
      Jf(r, t, n),
      _l(r, t, n, i),
      (n = !0);
  else if (e === null) {
    var a = r.stateNode,
      l = r.memoizedProps;
    a.props = l;
    var u = a.context,
      c = t.contextType;
    typeof c == "object" && c !== null
      ? (c = ar(c))
      : ((c = ze(t) ? vt : Ee.current), (c = Gt(r, c)));
    var f = t.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== n || u !== c) && Ic(r, a, n, c)),
      (zr = !1);
    var s = r.memoizedState;
    (a.state = s),
      vo(r, n, a, i),
      (u = r.memoizedState),
      l !== n || s !== u || Fe.current || zr
        ? (typeof f == "function" && ($l(r, t, f, n), (u = r.memoizedState)),
          (l = zr || Ec(r, t, l, n, s, u, c))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (r.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (r.flags |= 4194308),
              (r.memoizedProps = n),
              (r.memoizedState = u)),
          (a.props = n),
          (a.state = u),
          (a.context = c),
          (n = l))
        : (typeof a.componentDidMount == "function" && (r.flags |= 4194308),
          (n = !1));
  } else {
    (a = r.stateNode),
      Yf(e, r),
      (l = r.memoizedProps),
      (c = r.type === r.elementType ? l : sr(r.type, l)),
      (a.props = c),
      (d = r.pendingProps),
      (s = a.context),
      (u = t.contextType),
      typeof u == "object" && u !== null
        ? (u = ar(u))
        : ((u = ze(t) ? vt : Ee.current), (u = Gt(r, u)));
    var p = t.getDerivedStateFromProps;
    (f =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || s !== u) && Ic(r, a, n, u)),
      (zr = !1),
      (s = r.memoizedState),
      (a.state = s),
      vo(r, n, a, i);
    var g = r.memoizedState;
    l !== d || s !== g || Fe.current || zr
      ? (typeof p == "function" && ($l(r, t, p, n), (g = r.memoizedState)),
        (c = zr || Ec(r, t, c, n, s, g, u) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, g, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, g, u)),
            typeof a.componentDidUpdate == "function" && (r.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && s === e.memoizedState) ||
              (r.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && s === e.memoizedState) ||
              (r.flags |= 1024),
            (r.memoizedProps = n),
            (r.memoizedState = g)),
        (a.props = n),
        (a.state = g),
        (a.context = u),
        (n = c))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && s === e.memoizedState) ||
          (r.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && s === e.memoizedState) ||
          (r.flags |= 1024),
        (n = !1));
  }
  return Hl(e, r, t, n, o, i);
}
function Hl(e, r, t, n, i, o) {
  Op(e, r);
  var a = (r.flags & 128) !== 0;
  if (!n && !a) return i && bc(r, t, !1), Br(e, r, o);
  (n = r.stateNode), (bh.current = r);
  var l =
    a && typeof t.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (r.flags |= 1),
    e !== null && a
      ? ((r.child = Ht(r, e.child, null, o)), (r.child = Ht(r, null, l, o)))
      : Pe(e, r, l, o),
    (r.memoizedState = n.state),
    i && bc(r, t, !0),
    r.child
  );
}
function Tp(e) {
  var r = e.stateNode;
  r.pendingContext
    ? xc(e, r.pendingContext, r.pendingContext !== r.context)
    : r.context && xc(e, r.context, !1),
    Mu(e, r.containerInfo);
}
function zc(e, r, t, n, i) {
  return Vt(), Lu(i), (r.flags |= 256), Pe(e, r, t, n), r.child;
}
var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ri(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $c(e, r) {
  return {
    baseLanes: e.baseLanes | r,
    cachePool: null,
    transitions: e.transitions,
  };
}
function Rp(e, r, t) {
  var n = r.pendingProps,
    i = Z.current,
    o = !1,
    a = (r.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (r.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Q(Z, i & 1),
    e === null)
  )
    return (
      Ul(r),
      (e = r.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((r.mode & 1) === 0
            ? (r.lanes = 1)
            : e.data === "$!"
            ? (r.lanes = 8)
            : (r.lanes = 1073741824),
          null)
        : ((i = n.children),
          (e = n.fallback),
          o
            ? ((n = r.mode),
              (o = r.child),
              (i = { mode: "hidden", children: i }),
              (n & 1) === 0 && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Do(i, n, 0, null)),
              (e = pt(e, n, t, null)),
              (o.return = r),
              (e.return = r),
              (o.sibling = e),
              (r.child = o),
              (r.child.memoizedState = Ri(t)),
              (r.memoizedState = Ti),
              e)
            : Ql(r, i))
    );
  if (((i = e.memoizedState), i !== null)) {
    if (((l = i.dehydrated), l !== null)) {
      if (a)
        return r.flags & 256
          ? ((r.flags &= -257), Ai(e, r, t, Error(D(422))))
          : r.memoizedState !== null
          ? ((r.child = e.child), (r.flags |= 128), null)
          : ((o = n.fallback),
            (i = r.mode),
            (n = Do({ mode: "visible", children: n.children }, i, 0, null)),
            (o = pt(o, i, t, null)),
            (o.flags |= 2),
            (n.return = r),
            (o.return = r),
            (n.sibling = o),
            (r.child = n),
            (r.mode & 1) !== 0 && Ht(r, e.child, null, t),
            (r.child.memoizedState = Ri(t)),
            (r.memoizedState = Ti),
            o);
      if ((r.mode & 1) === 0) r = Ai(e, r, t, null);
      else if (l.data === "$!") r = Ai(e, r, t, Error(D(419)));
      else if (((n = (t & e.childLanes) !== 0), Me || n)) {
        if (((n = le), n !== null)) {
          switch (t & -t) {
            case 4:
              o = 2;
              break;
            case 16:
              o = 8;
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
              o = 32;
              break;
            case 536870912:
              o = 268435456;
              break;
            default:
              o = 0;
          }
          (n = (o & (n.suspendedLanes | t)) !== 0 ? 0 : o),
            n !== 0 && n !== i.retryLane && ((i.retryLane = n), ir(e, n, -1));
        }
        Yu(), (r = Ai(e, r, t, Error(D(421))));
      } else
        l.data === "$?"
          ? ((r.flags |= 128),
            (r.child = e.child),
            (r = Bh.bind(null, e)),
            (l._reactRetry = r),
            (r = null))
          : ((t = i.treeContext),
            (Le = kr(l.nextSibling)),
            (Ue = r),
            (X = !0),
            (dr = null),
            t !== null &&
              ((Ze[er++] = Nr),
              (Ze[er++] = Or),
              (Ze[er++] = gt),
              (Nr = t.id),
              (Or = t.overflow),
              (gt = r)),
            (r = Ql(r, r.pendingProps.children)),
            (r.flags |= 4096));
      return r;
    }
    return o
      ? ((n = jc(e, r, n.children, n.fallback, t)),
        (o = r.child),
        (i = e.child.memoizedState),
        (o.memoizedState = i === null ? Ri(t) : $c(i, t)),
        (o.childLanes = e.childLanes & ~t),
        (r.memoizedState = Ti),
        n)
      : ((t = _c(e, r, n.children, t)), (r.memoizedState = null), t);
  }
  return o
    ? ((n = jc(e, r, n.children, n.fallback, t)),
      (o = r.child),
      (i = e.child.memoizedState),
      (o.memoizedState = i === null ? Ri(t) : $c(i, t)),
      (o.childLanes = e.childLanes & ~t),
      (r.memoizedState = Ti),
      n)
    : ((t = _c(e, r, n.children, t)), (r.memoizedState = null), t);
}
function Ql(e, r) {
  return (
    (r = Do({ mode: "visible", children: r }, e.mode, 0, null)),
    (r.return = e),
    (e.child = r)
  );
}
function _c(e, r, t, n) {
  var i = e.child;
  return (
    (e = i.sibling),
    (t = et(i, { mode: "visible", children: t })),
    (r.mode & 1) === 0 && (t.lanes = n),
    (t.return = r),
    (t.sibling = null),
    e !== null &&
      ((n = r.deletions),
      n === null ? ((r.deletions = [e]), (r.flags |= 16)) : n.push(e)),
    (r.child = t)
  );
}
function jc(e, r, t, n, i) {
  var o = r.mode;
  e = e.child;
  var a = e.sibling,
    l = { mode: "hidden", children: t };
  return (
    (o & 1) === 0 && r.child !== e
      ? ((t = r.child),
        (t.childLanes = 0),
        (t.pendingProps = l),
        (r.deletions = null))
      : ((t = et(e, l)), (t.subtreeFlags = e.subtreeFlags & 14680064)),
    a !== null ? (n = et(a, n)) : ((n = pt(n, o, i, null)), (n.flags |= 2)),
    (n.return = r),
    (t.return = r),
    (t.sibling = n),
    (r.child = t),
    n
  );
}
function Ai(e, r, t, n) {
  return (
    n !== null && Lu(n),
    Ht(r, e.child, null, t),
    (e = Ql(r, r.pendingProps.children)),
    (e.flags |= 2),
    (r.memoizedState = null),
    e
  );
}
function Uc(e, r, t) {
  e.lanes |= r;
  var n = e.alternate;
  n !== null && (n.lanes |= r), zl(e.return, r, t);
}
function Qa(e, r, t, n, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: r,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: t,
        tailMode: i,
      })
    : ((o.isBackwards = r),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = n),
      (o.tail = t),
      (o.tailMode = i));
}
function Ap(e, r, t) {
  var n = r.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  if ((Pe(e, r, n.children, t), (n = Z.current), (n & 2) !== 0))
    (n = (n & 1) | 2), (r.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = r.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uc(e, t, r);
        else if (e.tag === 19) Uc(e, t, r);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === r) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === r) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Q(Z, n), (r.mode & 1) === 0)) r.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (t = r.child, i = null; t !== null; )
          (e = t.alternate),
            e !== null && ho(e) === null && (i = t),
            (t = t.sibling);
        (t = i),
          t === null
            ? ((i = r.child), (r.child = null))
            : ((i = t.sibling), (t.sibling = null)),
          Qa(r, !1, i, t, o);
        break;
      case "backwards":
        for (t = null, i = r.child, r.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ho(e) === null)) {
            r.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = t), (t = i), (i = e);
        }
        Qa(r, !0, t, null, o);
        break;
      case "together":
        Qa(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
  return r.child;
}
function Br(e, r, t) {
  if (
    (e !== null && (r.dependencies = e.dependencies),
    (ht |= r.lanes),
    (t & r.childLanes) === 0)
  )
    return null;
  if (e !== null && r.child !== e.child) throw Error(D(153));
  if (r.child !== null) {
    for (
      e = r.child, t = et(e, e.pendingProps), r.child = t, t.return = r;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = et(e, e.pendingProps)), (t.return = r);
    t.sibling = null;
  }
  return r.child;
}
function Ch(e, r, t) {
  switch (r.tag) {
    case 3:
      Tp(r), Vt();
      break;
    case 5:
      np(r);
      break;
    case 1:
      ze(r.type) && co(r);
      break;
    case 4:
      Mu(r, r.stateNode.containerInfo);
      break;
    case 10:
      var n = r.type._context,
        i = r.memoizedProps.value;
      Q(fo, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = r.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Q(Z, Z.current & 1), (r.flags |= 128), null)
          : (t & r.child.childLanes) !== 0
          ? Rp(e, r, t)
          : (Q(Z, Z.current & 1),
            (e = Br(e, r, t)),
            e !== null ? e.sibling : null);
      Q(Z, Z.current & 1);
      break;
    case 19:
      if (((n = (t & r.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (n) return Ap(e, r, t);
        r.flags |= 128;
      }
      if (
        ((i = r.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Q(Z, Z.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (r.lanes = 0), Np(e, r, t);
  }
  return Br(e, r, t);
}
function Dh(e, r) {
  switch ((Bu(r), r.tag)) {
    case 1:
      return (
        ze(r.type) && so(),
        (e = r.flags),
        e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
      );
    case 3:
      return (
        Qt(),
        K(Fe),
        K(Ee),
        zu(),
        (e = r.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((r.flags = (e & -65537) | 128), r)
          : null
      );
    case 5:
      return Fu(r), null;
    case 13:
      if ((K(Z), (e = r.memoizedState), e !== null && e.dehydrated !== null)) {
        if (r.alternate === null) throw Error(D(340));
        Vt();
      }
      return (
        (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
      );
    case 19:
      return K(Z), null;
    case 4:
      return Qt(), null;
    case 10:
      return Tu(r.type._context), null;
    case 22:
    case 23:
      return Ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bi = !1,
  De = !1,
  Eh = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Lt(e, r) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        te(e, r, n);
      }
    else t.current = null;
}
function ql(e, r, t) {
  try {
    t();
  } catch (n) {
    te(e, r, n);
  }
}
var Wc = !1;
function Ih(e, r) {
  if (((Rl = oo), (e = $f()), ku(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var n = t.getSelection && t.getSelection();
        if (n && n.rangeCount !== 0) {
          t = n.anchorNode;
          var i = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var a = 0,
            l = -1,
            u = -1,
            c = 0,
            f = 0,
            d = e,
            s = null;
          r: for (;;) {
            for (
              var p;
              d !== t || (i !== 0 && d.nodeType !== 3) || (l = a + i),
                d !== o || (n !== 0 && d.nodeType !== 3) || (u = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (s = d), (d = p);
            for (;;) {
              if (d === e) break r;
              if (
                (s === t && ++c === i && (l = a),
                s === o && ++f === n && (u = a),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = s), (s = d.parentNode);
            }
            d = p;
          }
          t = l === -1 || u === -1 ? null : { start: l, end: u };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Al = { focusedElem: e, selectionRange: t }, oo = !1, O = r; O !== null; )
    if (((r = O), (e = r.child), (r.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = r), (O = e);
    else
      for (; O !== null; ) {
        r = O;
        try {
          var g = r.alternate;
          if ((r.flags & 1024) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    S = g.memoizedState,
                    m = r.stateNode,
                    v = m.getSnapshotBeforeUpdate(
                      r.elementType === r.type ? y : sr(r.type, y),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var h = r.stateNode.containerInfo;
                if (h.nodeType === 1) h.textContent = "";
                else if (h.nodeType === 9) {
                  var w = h.body;
                  w != null && (w.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (x) {
          te(r, r.return, x);
        }
        if (((e = r.sibling), e !== null)) {
          (e.return = r.return), (O = e);
          break;
        }
        O = r.return;
      }
  return (g = Wc), (Wc = !1), g;
}
function kn(e, r, t) {
  var n = r.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ql(r, t, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Vo(e, r) {
  if (
    ((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
  ) {
    var t = (r = r.next);
    do {
      if ((t.tag & e) === e) {
        var n = t.create;
        t.destroy = n();
      }
      t = t.next;
    } while (t !== r);
  }
}
function Kl(e) {
  var r = e.ref;
  if (r !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof r == "function" ? r(e) : (r.current = e);
  }
}
function Bp(e) {
  var r = e.alternate;
  r !== null && ((e.alternate = null), Bp(r)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((r = e.stateNode),
      r !== null &&
        (delete r[br], delete r[Wn], delete r[Ml], delete r[sh], delete r[ch])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Lp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yl(e, r, t) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      r
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, r)
          : t.insertBefore(e, r)
        : (t.nodeType === 8
            ? ((r = t.parentNode), r.insertBefore(e, t))
            : ((r = t), r.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || r.onclick !== null || (r.onclick = uo));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Yl(e, r, t), e = e.sibling; e !== null; ) Yl(e, r, t), (e = e.sibling);
}
function Xl(e, r, t) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), r ? t.insertBefore(e, r) : t.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Xl(e, r, t), e = e.sibling; e !== null; ) Xl(e, r, t), (e = e.sibling);
}
var he = null,
  cr = !1;
function Mr(e, r, t) {
  for (t = t.child; t !== null; ) Mp(e, r, t), (t = t.sibling);
}
function Mp(e, r, t) {
  if (Cr && typeof Cr.onCommitFiberUnmount == "function")
    try {
      Cr.onCommitFiberUnmount(Fo, t);
    } catch {}
  switch (t.tag) {
    case 5:
      De || Lt(t, r);
    case 6:
      var n = he,
        i = cr;
      (he = null),
        Mr(e, r, t),
        (he = n),
        (cr = i),
        he !== null &&
          (cr
            ? ((e = he),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : he.removeChild(t.stateNode));
      break;
    case 18:
      he !== null &&
        (cr
          ? ((e = he),
            (t = t.stateNode),
            e.nodeType === 8
              ? ja(e.parentNode, t)
              : e.nodeType === 1 && ja(e, t),
            zn(e))
          : ja(he, t.stateNode));
      break;
    case 4:
      (n = he),
        (i = cr),
        (he = t.stateNode.containerInfo),
        (cr = !0),
        Mr(e, r, t),
        (he = n),
        (cr = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((n = t.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ql(t, r, a),
            (i = i.next);
        } while (i !== n);
      }
      Mr(e, r, t);
      break;
    case 1:
      if (
        !De &&
        (Lt(t, r),
        (n = t.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = t.memoizedProps),
            (n.state = t.memoizedState),
            n.componentWillUnmount();
        } catch (l) {
          te(t, r, l);
        }
      Mr(e, r, t);
      break;
    case 21:
      Mr(e, r, t);
      break;
    case 22:
      t.mode & 1
        ? ((De = (n = De) || t.memoizedState !== null), Mr(e, r, t), (De = n))
        : Mr(e, r, t);
      break;
    default:
      Mr(e, r, t);
  }
}
function Vc(e) {
  var r = e.updateQueue;
  if (r !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Eh()),
      r.forEach(function (n) {
        var i = Lh.bind(null, e, n);
        t.has(n) || (t.add(n), n.then(i, i));
      });
  }
}
function ur(e, r) {
  var t = r.deletions;
  if (t !== null)
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      try {
        var o = e,
          a = r,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (he = l.stateNode), (cr = !1);
              break e;
            case 3:
              (he = l.stateNode.containerInfo), (cr = !0);
              break e;
            case 4:
              (he = l.stateNode.containerInfo), (cr = !0);
              break e;
          }
          l = l.return;
        }
        if (he === null) throw Error(D(160));
        Mp(o, a, i), (he = null), (cr = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        te(i, r, c);
      }
    }
  if (r.subtreeFlags & 12854)
    for (r = r.child; r !== null; ) Fp(r, e), (r = r.sibling);
}
function Fp(e, r) {
  var t = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ur(r, e), Sr(e), n & 4)) {
        try {
          kn(3, e, e.return), Vo(3, e);
        } catch (g) {
          te(e, e.return, g);
        }
        try {
          kn(5, e, e.return);
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 1:
      ur(r, e), Sr(e), n & 512 && t !== null && Lt(t, t.return);
      break;
    case 5:
      if (
        (ur(r, e),
        Sr(e),
        n & 512 && t !== null && Lt(t, t.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Bn(i, "");
        } catch (g) {
          te(e, e.return, g);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = t !== null ? t.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && af(i, o),
              bl(l, a);
            var c = bl(l, o);
            for (a = 0; a < u.length; a += 2) {
              var f = u[a],
                d = u[a + 1];
              f === "style"
                ? df(i, d)
                : f === "dangerouslySetInnerHTML"
                ? sf(i, d)
                : f === "children"
                ? Bn(i, d)
                : gu(i, f, d, c);
            }
            switch (l) {
              case "input":
                hl(i, o);
                break;
              case "textarea":
                lf(i, o);
                break;
              case "select":
                var s = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? Ft(i, !!o.multiple, p, !1)
                  : s !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ft(i, !!o.multiple, o.defaultValue, !0)
                      : Ft(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Wn] = o;
          } catch (g) {
            te(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ur(r, e), Sr(e), n & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (c = e.stateNode), (f = e.memoizedProps);
        try {
          c.nodeValue = f;
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ur(r, e), Sr(e), n & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          zn(r.containerInfo);
        } catch (g) {
          te(e, e.return, g);
        }
      break;
    case 4:
      ur(r, e), Sr(e);
      break;
    case 13:
      ur(r, e),
        Sr(e),
        (c = e.child),
        c.flags & 8192 &&
          c.memoizedState !== null &&
          (c.alternate === null || c.alternate.memoizedState === null) &&
          (Qu = ne()),
        n & 4 && Vc(e);
      break;
    case 22:
      if (
        ((c = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((De = (f = De) || c), ur(r, e), (De = f)) : ur(r, e),
        Sr(e),
        n & 8192)
      ) {
        f = e.memoizedState !== null;
        e: for (d = null, s = e; ; ) {
          if (s.tag === 5) {
            if (d === null) {
              d = s;
              try {
                (i = s.stateNode),
                  f
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = s.stateNode),
                      (u = s.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = cf("display", a)));
              } catch (g) {
                te(e, e.return, g);
              }
            }
          } else if (s.tag === 6) {
            if (d === null)
              try {
                s.stateNode.nodeValue = f ? "" : s.memoizedProps;
              } catch (g) {
                te(e, e.return, g);
              }
          } else if (
            ((s.tag !== 22 && s.tag !== 23) ||
              s.memoizedState === null ||
              s === e) &&
            s.child !== null
          ) {
            (s.child.return = s), (s = s.child);
            continue;
          }
          if (s === e) break e;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === e) break e;
            d === s && (d = null), (s = s.return);
          }
          d === s && (d = null), (s.sibling.return = s.return), (s = s.sibling);
        }
        if (f && !c && (e.mode & 1) !== 0)
          for (O = e, e = e.child; e !== null; ) {
            for (c = O = e; O !== null; ) {
              switch (((f = O), (d = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kn(4, f, f.return);
                  break;
                case 1:
                  if (
                    (Lt(f, f.return),
                    (o = f.stateNode),
                    typeof o.componentWillUnmount == "function")
                  ) {
                    (s = f), (p = f.return);
                    try {
                      (i = s),
                        (o.props = i.memoizedProps),
                        (o.state = i.memoizedState),
                        o.componentWillUnmount();
                    } catch (g) {
                      te(s, p, g);
                    }
                  }
                  break;
                case 5:
                  Lt(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Qc(c);
                    continue;
                  }
              }
              d !== null ? ((d.return = f), (O = d)) : Qc(c);
            }
            e = e.sibling;
          }
      }
      break;
    case 19:
      ur(r, e), Sr(e), n & 4 && Vc(e);
      break;
    case 21:
      break;
    default:
      ur(r, e), Sr(e);
  }
}
function Sr(e) {
  var r = e.flags;
  if (r & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Lp(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        throw Error(D(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Bn(i, ""), (n.flags &= -33));
          var o = Gc(e);
          Xl(e, o, i);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            l = Gc(e);
          Yl(e, l, a);
          break;
        default:
          throw Error(D(161));
      }
    } catch (u) {
      te(e, e.return, u);
    }
    e.flags &= -3;
  }
  r & 4096 && (e.flags &= -4097);
}
function Ph(e, r, t) {
  (O = e), zp(e);
}
function zp(e, r, t) {
  for (var n = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || Bi;
      if (!a) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || De;
        l = Bi;
        var c = De;
        if (((Bi = a), (De = u) && !c))
          for (O = i; O !== null; )
            (a = O),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? qc(i)
                : u !== null
                ? ((u.return = a), (O = u))
                : qc(i);
        for (; o !== null; ) (O = o), zp(o), (o = o.sibling);
        (O = i), (Bi = l), (De = c);
      }
      Hc(e);
    } else
      (i.subtreeFlags & 8772) !== 0 && o !== null
        ? ((o.return = i), (O = o))
        : Hc(e);
  }
}
function Hc(e) {
  for (; O !== null; ) {
    var r = O;
    if ((r.flags & 8772) !== 0) {
      var t = r.alternate;
      try {
        if ((r.flags & 8772) !== 0)
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
              De || Vo(5, r);
              break;
            case 1:
              var n = r.stateNode;
              if (r.flags & 4 && !De)
                if (t === null) n.componentDidMount();
                else {
                  var i =
                    r.elementType === r.type
                      ? t.memoizedProps
                      : sr(r.type, t.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    t.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = r.updateQueue;
              o !== null && Dc(r, o, n);
              break;
            case 3:
              var a = r.updateQueue;
              if (a !== null) {
                if (((t = null), r.child !== null))
                  switch (r.child.tag) {
                    case 5:
                      t = r.child.stateNode;
                      break;
                    case 1:
                      t = r.child.stateNode;
                  }
                Dc(r, a, t);
              }
              break;
            case 5:
              var l = r.stateNode;
              if (t === null && r.flags & 4) {
                t = l;
                var u = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && t.focus();
                    break;
                  case "img":
                    u.src && (t.src = u.src);
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
                var c = r.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && zn(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(D(163));
          }
        De || (r.flags & 512 && Kl(r));
      } catch (s) {
        te(r, r.return, s);
      }
    }
    if (r === e) {
      O = null;
      break;
    }
    if (((t = r.sibling), t !== null)) {
      (t.return = r.return), (O = t);
      break;
    }
    O = r.return;
  }
}
function Qc(e) {
  for (; O !== null; ) {
    var r = O;
    if (r === e) {
      O = null;
      break;
    }
    var t = r.sibling;
    if (t !== null) {
      (t.return = r.return), (O = t);
      break;
    }
    O = r.return;
  }
}
function qc(e) {
  for (; O !== null; ) {
    var r = O;
    try {
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          var t = r.return;
          try {
            Vo(4, r);
          } catch (u) {
            te(r, t, u);
          }
          break;
        case 1:
          var n = r.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = r.return;
            try {
              n.componentDidMount();
            } catch (u) {
              te(r, i, u);
            }
          }
          var o = r.return;
          try {
            Kl(r);
          } catch (u) {
            te(r, o, u);
          }
          break;
        case 5:
          var a = r.return;
          try {
            Kl(r);
          } catch (u) {
            te(r, a, u);
          }
      }
    } catch (u) {
      te(r, r.return, u);
    }
    if (r === e) {
      O = null;
      break;
    }
    var l = r.sibling;
    if (l !== null) {
      (l.return = r.return), (O = l);
      break;
    }
    O = r.return;
  }
}
var kh = Math.ceil,
  So = Lr.ReactCurrentDispatcher,
  Vu = Lr.ReactCurrentOwner,
  nr = Lr.ReactCurrentBatchConfig,
  _ = 0,
  le = null,
  ie = null,
  we = 0,
  _e = 0,
  Mt = nt(0),
  ae = 0,
  Kn = null,
  ht = 0,
  Ho = 0,
  Hu = 0,
  Nn = null,
  Be = null,
  Qu = 0,
  qt = 1 / 0,
  Ir = null,
  xo = !1,
  Jl = null,
  Qr = null,
  Li = !1,
  Ur = null,
  bo = 0,
  On = 0,
  Zl = null,
  Yi = -1,
  Xi = 0;
function ke() {
  return (_ & 6) !== 0 ? ne() : Yi !== -1 ? Yi : (Yi = ne());
}
function qr(e) {
  return (e.mode & 1) === 0
    ? 1
    : (_ & 2) !== 0 && we !== 0
    ? we & -we
    : fh.transition !== null
    ? (Xi === 0 && (Xi = Cf()), Xi)
    : ((e = W),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Of(e.type))),
      e);
}
function ir(e, r, t) {
  if (50 < On) throw ((On = 0), (Zl = null), Error(D(185)));
  var n = Qo(e, r);
  return n === null
    ? null
    : (ti(n, r, t),
      ((_ & 2) === 0 || n !== le) &&
        (n === le && ((_ & 2) === 0 && (Ho |= r), ae === 4 && _r(n, we)),
        $e(n, t),
        r === 1 &&
          _ === 0 &&
          (e.mode & 1) === 0 &&
          ((qt = ne() + 500), Uo && it())),
      n);
}
function Qo(e, r) {
  e.lanes |= r;
  var t = e.alternate;
  for (t !== null && (t.lanes |= r), t = e, e = e.return; e !== null; )
    (e.childLanes |= r),
      (t = e.alternate),
      t !== null && (t.childLanes |= r),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
function $p(e) {
  return (le !== null || fr !== null) && (e.mode & 1) !== 0 && (_ & 2) === 0;
}
function $e(e, r) {
  var t = e.callbackNode;
  fm(e, r);
  var n = io(e, e === le ? we : 0);
  if (n === 0)
    t !== null && ec(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((r = n & -n), e.callbackPriority !== r)) {
    if ((t != null && ec(t), r === 1))
      e.tag === 0 ? dh(Kc.bind(null, e)) : Kf(Kc.bind(null, e)),
        lh(function () {
          _ === 0 && it();
        }),
        (t = null);
    else {
      switch (Df(n)) {
        case 1:
          t = Su;
          break;
        case 4:
          t = xf;
          break;
        case 16:
          t = no;
          break;
        case 536870912:
          t = bf;
          break;
        default:
          t = no;
      }
      t = Qp(t, _p.bind(null, e));
    }
    (e.callbackPriority = r), (e.callbackNode = t);
  }
}
function _p(e, r) {
  if (((Yi = -1), (Xi = 0), (_ & 6) !== 0)) throw Error(D(327));
  var t = e.callbackNode;
  if (Ut() && e.callbackNode !== t) return null;
  var n = io(e, e === le ? we : 0);
  if (n === 0) return null;
  if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || r) r = Co(e, n);
  else {
    r = n;
    var i = _;
    _ |= 2;
    var o = Up();
    (le !== e || we !== r) && ((Ir = null), (qt = ne() + 500), ft(e, r));
    do
      try {
        Th();
        break;
      } catch (l) {
        jp(e, l);
      }
    while (1);
    Ou(),
      (So.current = o),
      (_ = i),
      ie !== null ? (r = 0) : ((le = null), (we = 0), (r = ae));
  }
  if (r !== 0) {
    if (
      (r === 2 && ((i = Pl(e)), i !== 0 && ((n = i), (r = eu(e, i)))), r === 1)
    )
      throw ((t = Kn), ft(e, 0), _r(e, n), $e(e, ne()), t);
    if (r === 6) _r(e, n);
    else {
      if (
        ((i = e.current.alternate),
        (n & 30) === 0 &&
          !Nh(i) &&
          ((r = Co(e, n)),
          r === 2 && ((o = Pl(e)), o !== 0 && ((n = o), (r = eu(e, o)))),
          r === 1))
      )
        throw ((t = Kn), ft(e, 0), _r(e, n), $e(e, ne()), t);
      switch (((e.finishedWork = i), (e.finishedLanes = n), r)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          ut(e, Be, Ir);
          break;
        case 3:
          if (
            (_r(e, n), (n & 130023424) === n && ((r = Qu + 500 - ne()), 10 < r))
          ) {
            if (io(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ll(ut.bind(null, e, Be, Ir), r);
            break;
          }
          ut(e, Be, Ir);
          break;
        case 4:
          if ((_r(e, n), (n & 4194240) === n)) break;
          for (r = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - gr(n);
            (o = 1 << a), (a = r[a]), a > i && (i = a), (n &= ~o);
          }
          if (
            ((n = i),
            (n = ne() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * kh(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Ll(ut.bind(null, e, Be, Ir), n);
            break;
          }
          ut(e, Be, Ir);
          break;
        case 5:
          ut(e, Be, Ir);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return $e(e, ne()), e.callbackNode === t ? _p.bind(null, e) : null;
}
function eu(e, r) {
  var t = Nn;
  return (
    e.current.memoizedState.isDehydrated && (ft(e, r).flags |= 256),
    (e = Co(e, r)),
    e !== 2 && ((r = Be), (Be = t), r !== null && ru(r)),
    e
  );
}
function ru(e) {
  Be === null ? (Be = e) : Be.push.apply(Be, e);
}
function Nh(e) {
  for (var r = e; ; ) {
    if (r.flags & 16384) {
      var t = r.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var n = 0; n < t.length; n++) {
          var i = t[n],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!mr(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = r.child), r.subtreeFlags & 16384 && t !== null))
      (t.return = r), (r = t);
    else {
      if (r === e) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return !0;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }
  return !0;
}
function _r(e, r) {
  for (
    r &= ~Hu,
      r &= ~Ho,
      e.suspendedLanes |= r,
      e.pingedLanes &= ~r,
      e = e.expirationTimes;
    0 < r;

  ) {
    var t = 31 - gr(r),
      n = 1 << t;
    (e[t] = -1), (r &= ~n);
  }
}
function Kc(e) {
  if ((_ & 6) !== 0) throw Error(D(327));
  Ut();
  var r = io(e, 0);
  if ((r & 1) === 0) return $e(e, ne()), null;
  var t = Co(e, r);
  if (e.tag !== 0 && t === 2) {
    var n = Pl(e);
    n !== 0 && ((r = n), (t = eu(e, n)));
  }
  if (t === 1) throw ((t = Kn), ft(e, 0), _r(e, r), $e(e, ne()), t);
  if (t === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = r),
    ut(e, Be, Ir),
    $e(e, ne()),
    null
  );
}
function qu(e, r) {
  var t = _;
  _ |= 1;
  try {
    return e(r);
  } finally {
    (_ = t), _ === 0 && ((qt = ne() + 500), Uo && it());
  }
}
function yt(e) {
  Ur !== null && Ur.tag === 0 && (_ & 6) === 0 && Ut();
  var r = _;
  _ |= 1;
  var t = nr.transition,
    n = W;
  try {
    if (((nr.transition = null), (W = 1), e)) return e();
  } finally {
    (W = n), (nr.transition = t), (_ = r), (_ & 6) === 0 && it();
  }
}
function Ku() {
  (_e = Mt.current), K(Mt);
}
function ft(e, r) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), ah(t)), ie !== null))
    for (t = ie.return; t !== null; ) {
      var n = t;
      switch ((Bu(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && so();
          break;
        case 3:
          Qt(), K(Fe), K(Ee), zu();
          break;
        case 5:
          Fu(n);
          break;
        case 4:
          Qt();
          break;
        case 13:
          K(Z);
          break;
        case 19:
          K(Z);
          break;
        case 10:
          Tu(n.type._context);
          break;
        case 22:
        case 23:
          Ku();
      }
      t = t.return;
    }
  if (
    ((le = e),
    (ie = e = et(e.current, null)),
    (we = _e = r),
    (ae = 0),
    (Kn = null),
    (Hu = Ho = ht = 0),
    (Be = Nn = null),
    fr !== null)
  ) {
    for (r = 0; r < fr.length; r++)
      if (((t = fr[r]), (n = t.interleaved), n !== null)) {
        t.interleaved = null;
        var i = n.next,
          o = t.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (n.next = a);
        }
        t.pending = n;
      }
    fr = null;
  }
  return e;
}
function jp(e, r) {
  do {
    var t = ie;
    try {
      if ((Ou(), (qi.current = wo), yo)) {
        for (var n = ee.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        yo = !1;
      }
      if (
        ((mt = 0),
        (de = oe = ee = null),
        (Pn = !1),
        (Hn = 0),
        (Vu.current = null),
        t === null || t.return === null)
      ) {
        (ae = 1), (Kn = r), (ie = null);
        break;
      }
      e: {
        var o = e,
          a = t.return,
          l = t,
          u = r;
        if (
          ((r = we),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            f = l,
            d = f.tag;
          if ((f.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
            var s = f.alternate;
            s
              ? ((f.updateQueue = s.updateQueue),
                (f.memoizedState = s.memoizedState),
                (f.lanes = s.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var p = Ac(a);
          if (p !== null) {
            (p.flags &= -257),
              Bc(p, a, l, o, r),
              p.mode & 1 && Rc(o, c, r),
              (r = p),
              (u = c);
            var g = r.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(u), (r.updateQueue = y);
            } else g.add(u);
            break e;
          } else {
            if ((r & 1) === 0) {
              Rc(o, c, r), Yu();
              break e;
            }
            u = Error(D(426));
          }
        } else if (X && l.mode & 1) {
          var S = Ac(a);
          if (S !== null) {
            (S.flags & 65536) === 0 && (S.flags |= 256),
              Bc(S, a, l, o, r),
              Lu(u);
            break e;
          }
        }
        (o = u),
          ae !== 4 && (ae = 2),
          Nn === null ? (Nn = [o]) : Nn.push(o),
          (u = Gu(u, l)),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (r &= -r), (l.lanes |= r);
              var m = Cp(l, u, r);
              Cc(l, m);
              break e;
            case 1:
              o = u;
              var v = l.type,
                h = l.stateNode;
              if (
                (l.flags & 128) === 0 &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Qr === null || !Qr.has(h))))
              ) {
                (l.flags |= 65536), (r &= -r), (l.lanes |= r);
                var w = Dp(l, o, r);
                Cc(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Gp(t);
    } catch (x) {
      (r = x), ie === t && t !== null && (ie = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Up() {
  var e = So.current;
  return (So.current = wo), e === null ? wo : e;
}
function Yu() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    le === null ||
      ((ht & 268435455) === 0 && (Ho & 268435455) === 0) ||
      _r(le, we);
}
function Co(e, r) {
  var t = _;
  _ |= 2;
  var n = Up();
  (le !== e || we !== r) && ((Ir = null), ft(e, r));
  do
    try {
      Oh();
      break;
    } catch (i) {
      jp(e, i);
    }
  while (1);
  if ((Ou(), (_ = t), (So.current = n), ie !== null)) throw Error(D(261));
  return (le = null), (we = 0), ae;
}
function Oh() {
  for (; ie !== null; ) Wp(ie);
}
function Th() {
  for (; ie !== null && !nm(); ) Wp(ie);
}
function Wp(e) {
  var r = Hp(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    r === null ? Gp(e) : (ie = r),
    (Vu.current = null);
}
function Gp(e) {
  var r = e;
  do {
    var t = r.alternate;
    if (((e = r.return), (r.flags & 32768) === 0)) {
      if (((t = xh(t, r, _e)), t !== null)) {
        ie = t;
        return;
      }
    } else {
      if (((t = Dh(t, r)), t !== null)) {
        (t.flags &= 32767), (ie = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (ie = null);
        return;
      }
    }
    if (((r = r.sibling), r !== null)) {
      ie = r;
      return;
    }
    ie = r = e;
  } while (r !== null);
  ae === 0 && (ae = 5);
}
function ut(e, r, t) {
  var n = W,
    i = nr.transition;
  try {
    (nr.transition = null), (W = 1), Rh(e, r, t, n);
  } finally {
    (nr.transition = i), (W = n);
  }
  return null;
}
function Rh(e, r, t, n) {
  do Ut();
  while (Ur !== null);
  if ((_ & 6) !== 0) throw Error(D(327));
  t = e.finishedWork;
  var i = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = t.lanes | t.childLanes;
  if (
    (pm(e, o),
    e === le && ((ie = le = null), (we = 0)),
    ((t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0) ||
      Li ||
      ((Li = !0),
      Qp(no, function () {
        return Ut(), null;
      })),
    (o = (t.flags & 15990) !== 0),
    (t.subtreeFlags & 15990) !== 0 || o)
  ) {
    (o = nr.transition), (nr.transition = null);
    var a = W;
    W = 1;
    var l = _;
    (_ |= 4),
      (Vu.current = null),
      Ih(e, t),
      Fp(t, e),
      Zm(Al),
      (oo = !!Rl),
      (Al = Rl = null),
      (e.current = t),
      Ph(t),
      im(),
      (_ = l),
      (W = a),
      (nr.transition = o);
  } else e.current = t;
  if (
    (Li && ((Li = !1), (Ur = e), (bo = i)),
    (o = e.pendingLanes),
    o === 0 && (Qr = null),
    lm(t.stateNode),
    $e(e, ne()),
    r !== null)
  )
    for (n = e.onRecoverableError, t = 0; t < r.length; t++) n(r[t]);
  if (xo) throw ((xo = !1), (e = Jl), (Jl = null), e);
  return (
    (bo & 1) !== 0 && e.tag !== 0 && Ut(),
    (o = e.pendingLanes),
    (o & 1) !== 0 ? (e === Zl ? On++ : ((On = 0), (Zl = e))) : (On = 0),
    it(),
    null
  );
}
function Ut() {
  if (Ur !== null) {
    var e = Df(bo),
      r = nr.transition,
      t = W;
    try {
      if (((nr.transition = null), (W = 16 > e ? 16 : e), Ur === null))
        var n = !1;
      else {
        if (((e = Ur), (Ur = null), (bo = 0), (_ & 6) !== 0))
          throw Error(D(331));
        var i = _;
        for (_ |= 4, O = e.current; O !== null; ) {
          var o = O,
            a = o.child;
          if ((O.flags & 16) !== 0) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                for (O = c; O !== null; ) {
                  var f = O;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kn(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (O = d);
                  else
                    for (; O !== null; ) {
                      f = O;
                      var s = f.sibling,
                        p = f.return;
                      if ((Bp(f), f === c)) {
                        O = null;
                        break;
                      }
                      if (s !== null) {
                        (s.return = p), (O = s);
                        break;
                      }
                      O = p;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              O = o;
            }
          }
          if ((o.subtreeFlags & 2064) !== 0 && a !== null)
            (a.return = o), (O = a);
          else
            e: for (; O !== null; ) {
              if (((o = O), (o.flags & 2048) !== 0))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kn(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (O = m);
                break e;
              }
              O = o.return;
            }
        }
        var v = e.current;
        for (O = v; O !== null; ) {
          a = O;
          var h = a.child;
          if ((a.subtreeFlags & 2064) !== 0 && h !== null)
            (h.return = a), (O = h);
          else
            e: for (a = v; O !== null; ) {
              if (((l = O), (l.flags & 2048) !== 0))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vo(9, l);
                  }
                } catch (x) {
                  te(l, l.return, x);
                }
              if (l === a) {
                O = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (O = w);
                break e;
              }
              O = l.return;
            }
        }
        if (
          ((_ = i), it(), Cr && typeof Cr.onPostCommitFiberRoot == "function")
        )
          try {
            Cr.onPostCommitFiberRoot(Fo, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (W = t), (nr.transition = r);
    }
  }
  return !1;
}
function Yc(e, r, t) {
  (r = Gu(t, r)),
    (r = Cp(e, r, 1)),
    Hr(e, r),
    (r = ke()),
    (e = Qo(e, 1)),
    e !== null && (ti(e, 1, r), $e(e, r));
}
function te(e, r, t) {
  if (e.tag === 3) Yc(e, e, t);
  else
    for (; r !== null; ) {
      if (r.tag === 3) {
        Yc(r, e, t);
        break;
      } else if (r.tag === 1) {
        var n = r.stateNode;
        if (
          typeof r.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Qr === null || !Qr.has(n)))
        ) {
          (e = Gu(t, e)),
            (e = Dp(r, e, 1)),
            Hr(r, e),
            (e = ke()),
            (r = Qo(r, 1)),
            r !== null && (ti(r, 1, e), $e(r, e));
          break;
        }
      }
      r = r.return;
    }
}
function Ah(e, r, t) {
  var n = e.pingCache;
  n !== null && n.delete(r),
    (r = ke()),
    (e.pingedLanes |= e.suspendedLanes & t),
    le === e &&
      (we & t) === t &&
      (ae === 4 || (ae === 3 && (we & 130023424) === we && 500 > ne() - Qu)
        ? ft(e, 0)
        : (Hu |= t)),
    $e(e, r);
}
function Vp(e, r) {
  r === 0 &&
    ((e.mode & 1) === 0
      ? (r = 1)
      : ((r = Di), (Di <<= 1), (Di & 130023424) === 0 && (Di = 4194304)));
  var t = ke();
  (e = Qo(e, r)), e !== null && (ti(e, r, t), $e(e, t));
}
function Bh(e) {
  var r = e.memoizedState,
    t = 0;
  r !== null && (t = r.retryLane), Vp(e, t);
}
function Lh(e, r) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (t = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  n !== null && n.delete(r), Vp(e, t);
}
var Hp;
Hp = function (e, r, t) {
  if (e !== null)
    if (e.memoizedProps !== r.pendingProps || Fe.current) Me = !0;
    else {
      if ((e.lanes & t) === 0 && (r.flags & 128) === 0)
        return (Me = !1), Ch(e, r, t);
      Me = (e.flags & 131072) !== 0;
    }
  else (Me = !1), X && (r.flags & 1048576) !== 0 && Zf(r, mo, r.index);
  switch (((r.lanes = 0), r.tag)) {
    case 2:
      var n = r.type;
      e !== null &&
        ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
        (e = r.pendingProps);
      var i = Gt(r, Ee.current);
      jt(r, t), (i = _u(null, r, n, e, i, t));
      var o = ju();
      return (
        (r.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((r.tag = 1),
            (r.memoizedState = null),
            (r.updateQueue = null),
            ze(n) ? ((o = !0), co(r)) : (o = !1),
            (r.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ru(r),
            (i.updater = Wo),
            (r.stateNode = i),
            (i._reactInternals = r),
            _l(r, n, e, t),
            (r = Hl(null, r, n, !0, o, t)))
          : ((r.tag = 0), X && o && Au(r), Pe(null, r, i, t), (r = r.child)),
        r
      );
    case 16:
      n = r.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
          (e = r.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (r.type = n),
          (i = r.tag = Fh(n)),
          (e = sr(n, e)),
          i)
        ) {
          case 0:
            r = Vl(null, r, n, e, t);
            break e;
          case 1:
            r = Fc(null, r, n, e, t);
            break e;
          case 11:
            r = Lc(null, r, n, e, t);
            break e;
          case 14:
            r = Mc(null, r, n, sr(n.type, e), t);
            break e;
        }
        throw Error(D(306, n, ""));
      }
      return r;
    case 0:
      return (
        (n = r.type),
        (i = r.pendingProps),
        (i = r.elementType === n ? i : sr(n, i)),
        Vl(e, r, n, i, t)
      );
    case 1:
      return (
        (n = r.type),
        (i = r.pendingProps),
        (i = r.elementType === n ? i : sr(n, i)),
        Fc(e, r, n, i, t)
      );
    case 3:
      e: {
        if ((Tp(r), e === null)) throw Error(D(387));
        (n = r.pendingProps),
          (o = r.memoizedState),
          (i = o.element),
          Yf(e, r),
          vo(r, n, null, t);
        var a = r.memoizedState;
        if (((n = a.element), o.isDehydrated))
          if (
            ((o = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (r.updateQueue.baseState = o),
            (r.memoizedState = o),
            r.flags & 256)
          ) {
            (i = Error(D(423))), (r = zc(e, r, n, t, i));
            break e;
          } else if (n !== i) {
            (i = Error(D(424))), (r = zc(e, r, n, t, i));
            break e;
          } else
            for (
              Le = kr(r.stateNode.containerInfo.firstChild),
                Ue = r,
                X = !0,
                dr = null,
                t = tp(r, null, n, t),
                r.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((Vt(), n === i)) {
            r = Br(e, r, t);
            break e;
          }
          Pe(e, r, n, t);
        }
        r = r.child;
      }
      return r;
    case 5:
      return (
        np(r),
        e === null && Ul(r),
        (n = r.type),
        (i = r.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Bl(n, i) ? (a = null) : o !== null && Bl(n, o) && (r.flags |= 32),
        Op(e, r),
        Pe(e, r, a, t),
        r.child
      );
    case 6:
      return e === null && Ul(r), null;
    case 13:
      return Rp(e, r, t);
    case 4:
      return (
        Mu(r, r.stateNode.containerInfo),
        (n = r.pendingProps),
        e === null ? (r.child = Ht(r, null, n, t)) : Pe(e, r, n, t),
        r.child
      );
    case 11:
      return (
        (n = r.type),
        (i = r.pendingProps),
        (i = r.elementType === n ? i : sr(n, i)),
        Lc(e, r, n, i, t)
      );
    case 7:
      return Pe(e, r, r.pendingProps, t), r.child;
    case 8:
      return Pe(e, r, r.pendingProps.children, t), r.child;
    case 12:
      return Pe(e, r, r.pendingProps.children, t), r.child;
    case 10:
      e: {
        if (
          ((n = r.type._context),
          (i = r.pendingProps),
          (o = r.memoizedProps),
          (a = i.value),
          Q(fo, n._currentValue),
          (n._currentValue = a),
          o !== null)
        )
          if (mr(o.value, a)) {
            if (o.children === i.children && !Fe.current) {
              r = Br(e, r, t);
              break e;
            }
          } else
            for (o = r.child, o !== null && (o.return = r); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === n) {
                    if (o.tag === 1) {
                      (u = Tr(-1, t & -t)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= t),
                      (u = o.alternate),
                      u !== null && (u.lanes |= t),
                      zl(o.return, t, r),
                      (l.lanes |= t);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) a = o.type === r.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(D(341));
                (a.lanes |= t),
                  (l = a.alternate),
                  l !== null && (l.lanes |= t),
                  zl(a, t, r),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === r) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        Pe(e, r, i.children, t), (r = r.child);
      }
      return r;
    case 9:
      return (
        (i = r.type),
        (n = r.pendingProps.children),
        jt(r, t),
        (i = ar(i)),
        (n = n(i)),
        (r.flags |= 1),
        Pe(e, r, n, t),
        r.child
      );
    case 14:
      return (
        (n = r.type),
        (i = sr(n, r.pendingProps)),
        (i = sr(n.type, i)),
        Mc(e, r, n, i, t)
      );
    case 15:
      return kp(e, r, r.type, r.pendingProps, t);
    case 17:
      return (
        (n = r.type),
        (i = r.pendingProps),
        (i = r.elementType === n ? i : sr(n, i)),
        e !== null &&
          ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
        (r.tag = 1),
        ze(n) ? ((e = !0), co(r)) : (e = !1),
        jt(r, t),
        Jf(r, n, i),
        _l(r, n, i, t),
        Hl(null, r, n, !0, e, t)
      );
    case 19:
      return Ap(e, r, t);
    case 22:
      return Np(e, r, t);
  }
  throw Error(D(156, r.tag));
};
function Qp(e, r) {
  return Sf(e, r);
}
function Mh(e, r, t, n) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = r),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rr(e, r, t, n) {
  return new Mh(e, r, t, n);
}
function Xu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Fh(e) {
  if (typeof e == "function") return Xu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hu)) return 11;
    if (e === yu) return 14;
  }
  return 2;
}
function et(e, r) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = rr(e.tag, r, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = r),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (r = e.dependencies),
    (t.dependencies =
      r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Ji(e, r, t, n, i, o) {
  var a = 2;
  if (((n = e), typeof e == "function")) Xu(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case It:
        return pt(t.children, i, o, r);
      case mu:
        (a = 8), (i |= 8);
        break;
      case fl:
        return (
          (e = rr(12, t, r, i | 2)), (e.elementType = fl), (e.lanes = o), e
        );
      case pl:
        return (e = rr(13, t, r, i)), (e.elementType = pl), (e.lanes = o), e;
      case vl:
        return (e = rr(19, t, r, i)), (e.elementType = vl), (e.lanes = o), e;
      case tf:
        return Do(t, i, o, r);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ef:
              a = 10;
              break e;
            case rf:
              a = 9;
              break e;
            case hu:
              a = 11;
              break e;
            case yu:
              a = 14;
              break e;
            case Fr:
              (a = 16), (n = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (r = rr(a, t, r, i)), (r.elementType = e), (r.type = n), (r.lanes = o), r
  );
}
function pt(e, r, t, n) {
  return (e = rr(7, e, n, r)), (e.lanes = t), e;
}
function Do(e, r, t, n) {
  return (
    (e = rr(22, e, n, r)),
    (e.elementType = tf),
    (e.lanes = t),
    (e.stateNode = {}),
    e
  );
}
function qa(e, r, t) {
  return (e = rr(6, e, null, r)), (e.lanes = t), e;
}
function Ka(e, r, t) {
  return (
    (r = rr(4, e.children !== null ? e.children : [], e.key, r)),
    (r.lanes = t),
    (r.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    r
  );
}
function zh(e, r, t, n, i) {
  (this.tag = r),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Oa(0)),
    (this.expirationTimes = Oa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Oa(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ju(e, r, t, n, i, o, a, l, u) {
  return (
    (e = new zh(e, r, t, l, u)),
    r === 1 ? ((r = 1), o === !0 && (r |= 8)) : (r = 0),
    (o = rr(3, null, null, r)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: n,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ru(o),
    e
  );
}
function $h(e, r, t) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Et,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: r,
    implementation: t,
  };
}
function qp(e) {
  if (!e) return Zr;
  e = e._reactInternals;
  e: {
    if (xt(e) !== e || e.tag !== 1) throw Error(D(170));
    var r = e;
    do {
      switch (r.tag) {
        case 3:
          r = r.stateNode.context;
          break e;
        case 1:
          if (ze(r.type)) {
            r = r.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      r = r.return;
    } while (r !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (ze(t)) return qf(e, t, r);
  }
  return r;
}
function Kp(e, r, t, n, i, o, a, l, u) {
  return (
    (e = Ju(t, n, !0, e, i, o, a, l, u)),
    (e.context = qp(null)),
    (t = e.current),
    (n = ke()),
    (i = qr(t)),
    (o = Tr(n, i)),
    (o.callback = r != null ? r : null),
    Hr(t, o),
    (e.current.lanes = i),
    ti(e, i, n),
    $e(e, n),
    e
  );
}
function qo(e, r, t, n) {
  var i = r.current,
    o = ke(),
    a = qr(i);
  return (
    (t = qp(t)),
    r.context === null ? (r.context = t) : (r.pendingContext = t),
    (r = Tr(o, a)),
    (r.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (r.callback = n),
    Hr(i, r),
    (e = ir(i, a, o)),
    e !== null && Qi(e, i, a),
    a
  );
}
function Eo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xc(e, r) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < r ? t : r;
  }
}
function Zu(e, r) {
  Xc(e, r), (e = e.alternate) && Xc(e, r);
}
function _h() {
  return null;
}
var Yp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function es(e) {
  this._internalRoot = e;
}
Ko.prototype.render = es.prototype.render = function (e) {
  var r = this._internalRoot;
  if (r === null) throw Error(D(409));
  qo(e, r, null, null);
};
Ko.prototype.unmount = es.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var r = e.containerInfo;
    yt(function () {
      qo(null, e, null, null);
    }),
      (r[Ar] = null);
  }
};
function Ko(e) {
  this._internalRoot = e;
}
Ko.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var r = Pf();
    e = { blockedOn: null, target: e, priority: r };
    for (var t = 0; t < $r.length && r !== 0 && r < $r[t].priority; t++);
    $r.splice(t, 0, e), t === 0 && Nf(e);
  }
};
function rs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Jc() {}
function jh(e, r, t, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var c = Eo(a);
        o.call(c);
      };
    }
    var a = Kp(r, n, e, 0, null, !1, !1, "", Jc);
    return (
      (e._reactRootContainer = a),
      (e[Ar] = a.current),
      jn(e.nodeType === 8 ? e.parentNode : e),
      yt(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var l = n;
    n = function () {
      var c = Eo(u);
      l.call(c);
    };
  }
  var u = Ju(e, 0, !1, null, null, !1, !1, "", Jc);
  return (
    (e._reactRootContainer = u),
    (e[Ar] = u.current),
    jn(e.nodeType === 8 ? e.parentNode : e),
    yt(function () {
      qo(r, u, t, n);
    }),
    u
  );
}
function Xo(e, r, t, n, i) {
  var o = t._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = Eo(a);
        l.call(u);
      };
    }
    qo(r, a, e, i);
  } else a = jh(t, r, e, i, n);
  return Eo(a);
}
Ef = function (e) {
  switch (e.tag) {
    case 3:
      var r = e.stateNode;
      if (r.current.memoizedState.isDehydrated) {
        var t = Sn(r.pendingLanes);
        t !== 0 &&
          (xu(r, t | 1),
          $e(r, ne()),
          (_ & 6) === 0 && ((qt = ne() + 500), it()));
      }
      break;
    case 13:
      var n = ke();
      yt(function () {
        return ir(e, 1, n);
      }),
        Zu(e, 1);
  }
};
bu = function (e) {
  if (e.tag === 13) {
    var r = ke();
    ir(e, 134217728, r), Zu(e, 134217728);
  }
};
If = function (e) {
  if (e.tag === 13) {
    var r = ke(),
      t = qr(e);
    ir(e, t, r), Zu(e, t);
  }
};
Pf = function () {
  return W;
};
kf = function (e, r) {
  var t = W;
  try {
    return (W = e), r();
  } finally {
    W = t;
  }
};
Dl = function (e, r, t) {
  switch (r) {
    case "input":
      if ((hl(e, t), (r = t.name), t.type === "radio" && r != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + r) + '][type="radio"]'
          ),
            r = 0;
          r < t.length;
          r++
        ) {
          var n = t[r];
          if (n !== e && n.form === e.form) {
            var i = jo(n);
            if (!i) throw Error(D(90));
            of(n), hl(n, i);
          }
        }
      }
      break;
    case "textarea":
      lf(e, t);
      break;
    case "select":
      (r = t.value), r != null && Ft(e, !!t.multiple, r, !1);
  }
};
vf = qu;
gf = yt;
var Uh = { usingClientEntryPoint: !1, Events: [ii, Ot, jo, ff, pf, qu] },
  vn = {
    findFiberByHostInstance: ct,
    bundleType: 0,
    version: "18.1.0",
    rendererPackageName: "react-dom",
  },
  Wh = {
    bundleType: vn.bundleType,
    version: vn.version,
    rendererPackageName: vn.rendererPackageName,
    rendererConfig: vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vn.findFiberByHostInstance || _h,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mi.isDisabled && Mi.supportsFiber)
    try {
      (Fo = Mi.inject(Wh)), (Cr = Mi);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uh;
He.createPortal = function (e, r) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rs(r)) throw Error(D(200));
  return $h(e, r, null, t);
};
He.createRoot = function (e, r) {
  if (!rs(e)) throw Error(D(299));
  var t = !1,
    n = "",
    i = Yp;
  return (
    r != null &&
      (r.unstable_strictMode === !0 && (t = !0),
      r.identifierPrefix !== void 0 && (n = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    (r = Ju(e, 1, !1, null, null, t, !1, n, i)),
    (e[Ar] = r.current),
    jn(e.nodeType === 8 ? e.parentNode : e),
    new es(r)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var r = e._reactInternals;
  if (r === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return (e = yf(r)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return yt(e);
};
He.hydrate = function (e, r, t) {
  if (!Yo(r)) throw Error(D(200));
  return Xo(null, e, r, !0, t);
};
He.hydrateRoot = function (e, r, t) {
  if (!rs(e)) throw Error(D(405));
  var n = (t != null && t.hydratedSources) || null,
    i = !1,
    o = "",
    a = Yp;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (i = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (r = Kp(r, null, e, 1, t != null ? t : null, i, !1, o, a)),
    (e[Ar] = r.current),
    jn(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (t = n[e]),
        (i = t._getVersion),
        (i = i(t._source)),
        r.mutableSourceEagerHydrationData == null
          ? (r.mutableSourceEagerHydrationData = [t, i])
          : r.mutableSourceEagerHydrationData.push(t, i);
  return new Ko(r);
};
He.render = function (e, r, t) {
  if (!Yo(r)) throw Error(D(200));
  return Xo(null, e, r, !1, t);
};
He.unmountComponentAtNode = function (e) {
  if (!Yo(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (yt(function () {
        Xo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ar] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = qu;
He.unstable_renderSubtreeIntoContainer = function (e, r, t, n) {
  if (!Yo(t)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Xo(e, r, t, !1, n);
};
He.version = "18.1.0-next-22edb9f77-20220426";
function Xp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xp);
    } catch (e) {
      console.error(e);
    }
}
Xp(), (Mo.exports = He);
var Gh = Mo.exports,
  Zc = Mo.exports;
(cl.createRoot = Zc.createRoot), (cl.hydrateRoot = Zc.hydrateRoot);
var Jo = { exports: {} },
  Zo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vh = I.exports,
  Hh = Symbol.for("react.element"),
  Qh = Symbol.for("react.fragment"),
  qh = Object.prototype.hasOwnProperty,
  Kh = Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jp(e, r, t) {
  var n,
    i = {},
    o = null,
    a = null;
  t !== void 0 && (o = "" + t),
    r.key !== void 0 && (o = "" + r.key),
    r.ref !== void 0 && (a = r.ref);
  for (n in r) qh.call(r, n) && !Yh.hasOwnProperty(n) && (i[n] = r[n]);
  if (e && e.defaultProps)
    for (n in ((r = e.defaultProps), r)) i[n] === void 0 && (i[n] = r[n]);
  return {
    $$typeof: Hh,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Kh.current,
  };
}
Zo.Fragment = Qh;
Zo.jsx = Jp;
Zo.jsxs = Jp;
Jo.exports = Zo;
const C = Jo.exports.jsx,
  H = Jo.exports.jsxs,
  Io = Jo.exports.Fragment;
function Xh(e) {
  return C("div", {
    className: "navbar",
    children: C("h2", { className: "title", children: "Hannah's Books" }),
  });
}
function tu(e, r) {
  return (
    (tu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    tu(e, r)
  );
}
function Zp(e, r) {
  (e.prototype = Object.create(r.prototype)),
    (e.prototype.constructor = e),
    tu(e, r);
}
function M() {
  return (
    (M = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
    M.apply(this, arguments)
  );
}
function Jh(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function ed(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function rd(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ed(Object(t), !0).forEach(function (n) {
          Jh(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ed(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function Ae(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var td = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Ya = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  nd = {
    INIT: "@@redux/INIT" + Ya(),
    REPLACE: "@@redux/REPLACE" + Ya(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Ya();
    },
  };
function Zh(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var r = e; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r;
}
function ev(e, r, t) {
  var n;
  if (
    (typeof r == "function" && typeof t == "function") ||
    (typeof t == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ae(0));
  if (
    (typeof r == "function" &&
      typeof t == "undefined" &&
      ((t = r), (r = void 0)),
    typeof t != "undefined")
  ) {
    if (typeof t != "function") throw new Error(Ae(1));
    return t(ev)(e, r);
  }
  if (typeof e != "function") throw new Error(Ae(2));
  var i = e,
    o = r,
    a = [],
    l = a,
    u = !1;
  function c() {
    l === a && (l = a.slice());
  }
  function f() {
    if (u) throw new Error(Ae(3));
    return o;
  }
  function d(y) {
    if (typeof y != "function") throw new Error(Ae(4));
    if (u) throw new Error(Ae(5));
    var S = !0;
    return (
      c(),
      l.push(y),
      function () {
        if (!!S) {
          if (u) throw new Error(Ae(6));
          (S = !1), c();
          var v = l.indexOf(y);
          l.splice(v, 1), (a = null);
        }
      }
    );
  }
  function s(y) {
    if (!Zh(y)) throw new Error(Ae(7));
    if (typeof y.type == "undefined") throw new Error(Ae(8));
    if (u) throw new Error(Ae(9));
    try {
      (u = !0), (o = i(o, y));
    } finally {
      u = !1;
    }
    for (var S = (a = l), m = 0; m < S.length; m++) {
      var v = S[m];
      v();
    }
    return y;
  }
  function p(y) {
    if (typeof y != "function") throw new Error(Ae(10));
    (i = y), s({ type: nd.REPLACE });
  }
  function g() {
    var y,
      S = d;
    return (
      (y = {
        subscribe: function (v) {
          if (typeof v != "object" || v === null) throw new Error(Ae(11));
          function h() {
            v.next && v.next(f());
          }
          h();
          var w = S(h);
          return { unsubscribe: w };
        },
      }),
      (y[td] = function () {
        return this;
      }),
      y
    );
  }
  return (
    s({ type: nd.INIT }),
    (n = { dispatch: s, subscribe: d, getState: f, replaceReducer: p }),
    (n[td] = g),
    n
  );
}
function id(e, r) {
  return function () {
    return r(e.apply(this, arguments));
  };
}
function od(e, r) {
  if (typeof e == "function") return id(e, r);
  if (typeof e != "object" || e === null) throw new Error(Ae(16));
  var t = {};
  for (var n in e) {
    var i = e[n];
    typeof i == "function" && (t[n] = id(i, r));
  }
  return t;
}
function rv() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return r.length === 0
    ? function (n) {
        return n;
      }
    : r.length === 1
    ? r[0]
    : r.reduce(function (n, i) {
        return function () {
          return n(i.apply(void 0, arguments));
        };
      });
}
function ey() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function (n) {
    return function () {
      var i = n.apply(void 0, arguments),
        o = function () {
          throw new Error(Ae(15));
        },
        a = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        l = r.map(function (u) {
          return u(a);
        });
      return (
        (o = rv.apply(void 0, l)(i.dispatch)),
        rd(rd({}, i), {}, { dispatch: o })
      );
    };
  };
}
var tv = { exports: {} },
  ry = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ty = ry,
  ny = ty;
function nv() {}
function iv() {}
iv.resetWarningCache = nv;
var iy = function () {
  function e(n, i, o, a, l, u) {
    if (u !== ny) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function r() {
    return e;
  }
  var t = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: r,
    element: e,
    elementType: e,
    instanceOf: r,
    node: e,
    objectOf: r,
    oneOf: r,
    oneOfType: r,
    shape: r,
    exact: r,
    checkPropTypes: iv,
    resetWarningCache: nv,
  };
  return (t.PropTypes = t), t;
};
tv.exports = iy();
var J = tv.exports,
  ov = vr.createContext(null);
function oy(e) {
  e();
}
var av = oy,
  ay = function (r) {
    return (av = r);
  },
  ly = function () {
    return av;
  };
function uy() {
  var e = ly(),
    r = null,
    t = null;
  return {
    clear: function () {
      (r = null), (t = null);
    },
    notify: function () {
      e(function () {
        for (var i = r; i; ) i.callback(), (i = i.next);
      });
    },
    get: function () {
      for (var i = [], o = r; o; ) i.push(o), (o = o.next);
      return i;
    },
    subscribe: function (i) {
      var o = !0,
        a = (t = { callback: i, next: null, prev: t });
      return (
        a.prev ? (a.prev.next = a) : (r = a),
        function () {
          !o ||
            r === null ||
            ((o = !1),
            a.next ? (a.next.prev = a.prev) : (t = a.prev),
            a.prev ? (a.prev.next = a.next) : (r = a.next));
        }
      );
    },
  };
}
var ad = {
  notify: function () {},
  get: function () {
    return [];
  },
};
function lv(e, r) {
  var t,
    n = ad;
  function i(d) {
    return u(), n.subscribe(d);
  }
  function o() {
    n.notify();
  }
  function a() {
    f.onStateChange && f.onStateChange();
  }
  function l() {
    return Boolean(t);
  }
  function u() {
    t || ((t = r ? r.addNestedSub(a) : e.subscribe(a)), (n = uy()));
  }
  function c() {
    t && (t(), (t = void 0), n.clear(), (n = ad));
  }
  var f = {
    addNestedSub: i,
    notifyNestedSubs: o,
    handleChangeWrapper: a,
    isSubscribed: l,
    trySubscribe: u,
    tryUnsubscribe: c,
    getListeners: function () {
      return n;
    },
  };
  return f;
}
var uv =
  typeof window != "undefined" &&
  typeof window.document != "undefined" &&
  typeof window.document.createElement != "undefined"
    ? I.exports.useLayoutEffect
    : I.exports.useEffect;
function sy(e) {
  var r = e.store,
    t = e.context,
    n = e.children,
    i = I.exports.useMemo(
      function () {
        var l = lv(r);
        return { store: r, subscription: l };
      },
      [r]
    ),
    o = I.exports.useMemo(
      function () {
        return r.getState();
      },
      [r]
    );
  uv(
    function () {
      var l = i.subscription;
      return (
        (l.onStateChange = l.notifyNestedSubs),
        l.trySubscribe(),
        o !== r.getState() && l.notifyNestedSubs(),
        function () {
          l.tryUnsubscribe(), (l.onStateChange = null);
        }
      );
    },
    [i, o]
  );
  var a = t || ov;
  return C(a.Provider, { value: i, children: n });
}
function Po(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
var sv = { exports: {} },
  G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ve = typeof Symbol == "function" && Symbol.for,
  ts = ve ? Symbol.for("react.element") : 60103,
  ns = ve ? Symbol.for("react.portal") : 60106,
  ea = ve ? Symbol.for("react.fragment") : 60107,
  ra = ve ? Symbol.for("react.strict_mode") : 60108,
  ta = ve ? Symbol.for("react.profiler") : 60114,
  na = ve ? Symbol.for("react.provider") : 60109,
  ia = ve ? Symbol.for("react.context") : 60110,
  is = ve ? Symbol.for("react.async_mode") : 60111,
  oa = ve ? Symbol.for("react.concurrent_mode") : 60111,
  aa = ve ? Symbol.for("react.forward_ref") : 60112,
  la = ve ? Symbol.for("react.suspense") : 60113,
  cy = ve ? Symbol.for("react.suspense_list") : 60120,
  ua = ve ? Symbol.for("react.memo") : 60115,
  sa = ve ? Symbol.for("react.lazy") : 60116,
  dy = ve ? Symbol.for("react.block") : 60121,
  fy = ve ? Symbol.for("react.fundamental") : 60117,
  py = ve ? Symbol.for("react.responder") : 60118,
  vy = ve ? Symbol.for("react.scope") : 60119;
function qe(e) {
  if (typeof e == "object" && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case ts:
        switch (((e = e.type), e)) {
          case is:
          case oa:
          case ea:
          case ta:
          case ra:
          case la:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ia:
              case aa:
              case sa:
              case ua:
              case na:
                return e;
              default:
                return r;
            }
        }
      case ns:
        return r;
    }
  }
}
function cv(e) {
  return qe(e) === oa;
}
G.AsyncMode = is;
G.ConcurrentMode = oa;
G.ContextConsumer = ia;
G.ContextProvider = na;
G.Element = ts;
G.ForwardRef = aa;
G.Fragment = ea;
G.Lazy = sa;
G.Memo = ua;
G.Portal = ns;
G.Profiler = ta;
G.StrictMode = ra;
G.Suspense = la;
G.isAsyncMode = function (e) {
  return cv(e) || qe(e) === is;
};
G.isConcurrentMode = cv;
G.isContextConsumer = function (e) {
  return qe(e) === ia;
};
G.isContextProvider = function (e) {
  return qe(e) === na;
};
G.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ts;
};
G.isForwardRef = function (e) {
  return qe(e) === aa;
};
G.isFragment = function (e) {
  return qe(e) === ea;
};
G.isLazy = function (e) {
  return qe(e) === sa;
};
G.isMemo = function (e) {
  return qe(e) === ua;
};
G.isPortal = function (e) {
  return qe(e) === ns;
};
G.isProfiler = function (e) {
  return qe(e) === ta;
};
G.isStrictMode = function (e) {
  return qe(e) === ra;
};
G.isSuspense = function (e) {
  return qe(e) === la;
};
G.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ea ||
    e === oa ||
    e === ta ||
    e === ra ||
    e === la ||
    e === cy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === sa ||
        e.$$typeof === ua ||
        e.$$typeof === na ||
        e.$$typeof === ia ||
        e.$$typeof === aa ||
        e.$$typeof === fy ||
        e.$$typeof === py ||
        e.$$typeof === vy ||
        e.$$typeof === dy))
  );
};
G.typeOf = qe;
sv.exports = G;
var os = sv.exports,
  gy = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  my = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  hy = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  dv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  as = {};
as[os.ForwardRef] = hy;
as[os.Memo] = dv;
function ld(e) {
  return os.isMemo(e) ? dv : as[e.$$typeof] || gy;
}
var yy = Object.defineProperty,
  wy = Object.getOwnPropertyNames,
  ud = Object.getOwnPropertySymbols,
  Sy = Object.getOwnPropertyDescriptor,
  xy = Object.getPrototypeOf,
  sd = Object.prototype;
function fv(e, r, t) {
  if (typeof r != "string") {
    if (sd) {
      var n = xy(r);
      n && n !== sd && fv(e, n, t);
    }
    var i = wy(r);
    ud && (i = i.concat(ud(r)));
    for (var o = ld(e), a = ld(r), l = 0; l < i.length; ++l) {
      var u = i[l];
      if (!my[u] && !(t && t[u]) && !(a && a[u]) && !(o && o[u])) {
        var c = Sy(r, u);
        try {
          yy(e, u, c);
        } catch {}
      }
    }
  }
  return e;
}
var cd = fv,
  pv = { exports: {} },
  V = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ca = 60103,
  da = 60106,
  ai = 60107,
  li = 60108,
  ui = 60114,
  si = 60109,
  ci = 60110,
  di = 60112,
  fi = 60113,
  ls = 60120,
  pi = 60115,
  vi = 60116,
  vv = 60121,
  gv = 60122,
  mv = 60117,
  hv = 60129,
  yv = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var ge = Symbol.for;
  (ca = ge("react.element")),
    (da = ge("react.portal")),
    (ai = ge("react.fragment")),
    (li = ge("react.strict_mode")),
    (ui = ge("react.profiler")),
    (si = ge("react.provider")),
    (ci = ge("react.context")),
    (di = ge("react.forward_ref")),
    (fi = ge("react.suspense")),
    (ls = ge("react.suspense_list")),
    (pi = ge("react.memo")),
    (vi = ge("react.lazy")),
    (vv = ge("react.block")),
    (gv = ge("react.server.block")),
    (mv = ge("react.fundamental")),
    (hv = ge("react.debug_trace_mode")),
    (yv = ge("react.legacy_hidden"));
}
function hr(e) {
  if (typeof e == "object" && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case ca:
        switch (((e = e.type), e)) {
          case ai:
          case ui:
          case li:
          case fi:
          case ls:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ci:
              case di:
              case vi:
              case pi:
              case si:
                return e;
              default:
                return r;
            }
        }
      case da:
        return r;
    }
  }
}
var by = si,
  Cy = ca,
  Dy = di,
  Ey = ai,
  Iy = vi,
  Py = pi,
  ky = da,
  Ny = ui,
  Oy = li,
  Ty = fi;
V.ContextConsumer = ci;
V.ContextProvider = by;
V.Element = Cy;
V.ForwardRef = Dy;
V.Fragment = Ey;
V.Lazy = Iy;
V.Memo = Py;
V.Portal = ky;
V.Profiler = Ny;
V.StrictMode = Oy;
V.Suspense = Ty;
V.isAsyncMode = function () {
  return !1;
};
V.isConcurrentMode = function () {
  return !1;
};
V.isContextConsumer = function (e) {
  return hr(e) === ci;
};
V.isContextProvider = function (e) {
  return hr(e) === si;
};
V.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ca;
};
V.isForwardRef = function (e) {
  return hr(e) === di;
};
V.isFragment = function (e) {
  return hr(e) === ai;
};
V.isLazy = function (e) {
  return hr(e) === vi;
};
V.isMemo = function (e) {
  return hr(e) === pi;
};
V.isPortal = function (e) {
  return hr(e) === da;
};
V.isProfiler = function (e) {
  return hr(e) === ui;
};
V.isStrictMode = function (e) {
  return hr(e) === li;
};
V.isSuspense = function (e) {
  return hr(e) === fi;
};
V.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ai ||
    e === ui ||
    e === hv ||
    e === li ||
    e === fi ||
    e === ls ||
    e === yv ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === vi ||
        e.$$typeof === pi ||
        e.$$typeof === si ||
        e.$$typeof === ci ||
        e.$$typeof === di ||
        e.$$typeof === mv ||
        e.$$typeof === vv ||
        e[0] === gv))
  );
};
V.typeOf = hr;
pv.exports = V;
var Ry = [
    "getDisplayName",
    "methodName",
    "renderCountProp",
    "shouldHandleStateChanges",
    "storeKey",
    "withRef",
    "forwardRef",
    "context",
  ],
  Ay = ["reactReduxForwardedRef"],
  By = [],
  Ly = [null, null];
function My(e, r) {
  var t = e[1];
  return [r.payload, t + 1];
}
function dd(e, r, t) {
  uv(function () {
    return e.apply(void 0, r);
  }, t);
}
function Fy(e, r, t, n, i, o, a) {
  (e.current = n),
    (r.current = i),
    (t.current = !1),
    o.current && ((o.current = null), a());
}
function zy(e, r, t, n, i, o, a, l, u, c) {
  if (!!e) {
    var f = !1,
      d = null,
      s = function () {
        if (!f) {
          var y = r.getState(),
            S,
            m;
          try {
            S = n(y, i.current);
          } catch (v) {
            (m = v), (d = v);
          }
          m || (d = null),
            S === o.current
              ? a.current || u()
              : ((o.current = S),
                (l.current = S),
                (a.current = !0),
                c({ type: "STORE_UPDATED", payload: { error: m } }));
        }
      };
    (t.onStateChange = s), t.trySubscribe(), s();
    var p = function () {
      if (((f = !0), t.tryUnsubscribe(), (t.onStateChange = null), d)) throw d;
    };
    return p;
  }
}
var $y = function () {
  return [null, 0];
};
function _y(e, r) {
  r === void 0 && (r = {});
  var t = r,
    n = t.getDisplayName,
    i =
      n === void 0
        ? function (h) {
            return "ConnectAdvanced(" + h + ")";
          }
        : n,
    o = t.methodName,
    a = o === void 0 ? "connectAdvanced" : o,
    l = t.renderCountProp,
    u = l === void 0 ? void 0 : l,
    c = t.shouldHandleStateChanges,
    f = c === void 0 ? !0 : c,
    d = t.storeKey,
    s = d === void 0 ? "store" : d;
  t.withRef;
  var p = t.forwardRef,
    g = p === void 0 ? !1 : p,
    y = t.context,
    S = y === void 0 ? ov : y,
    m = Po(t, Ry),
    v = S;
  return function (w) {
    var x = w.displayName || w.name || "Component",
      b = i(x),
      E = M({}, m, {
        getDisplayName: i,
        methodName: a,
        renderCountProp: u,
        shouldHandleStateChanges: f,
        storeKey: s,
        displayName: b,
        wrappedComponentName: x,
        WrappedComponent: w,
      }),
      k = m.pure;
    function R(Y) {
      return e(Y.dispatch, E);
    }
    var T = k
      ? I.exports.useMemo
      : function (Y) {
          return Y();
        };
    function F(Y) {
      var Te = I.exports.useMemo(
          function () {
            var on = Y.reactReduxForwardedRef,
              Da = Po(Y, Ay);
            return [Y.context, on, Da];
          },
          [Y]
        ),
        xe = Te[0],
        yr = Te[1],
        N = Te[2],
        L = I.exports.useMemo(
          function () {
            return xe &&
              xe.Consumer &&
              pv.exports.isContextConsumer(vr.createElement(xe.Consumer, null))
              ? xe
              : v;
          },
          [xe, v]
        ),
        B = I.exports.useContext(L),
        U =
          Boolean(Y.store) &&
          Boolean(Y.store.getState) &&
          Boolean(Y.store.dispatch);
      Boolean(B) && Boolean(B.store);
      var j = U ? Y.store : B.store,
        wr = I.exports.useMemo(
          function () {
            return R(j);
          },
          [j]
        ),
        Ke = I.exports.useMemo(
          function () {
            if (!f) return Ly;
            var on = lv(j, U ? null : B.subscription),
              Da = on.notifyNestedSubs.bind(on);
            return [on, Da];
          },
          [j, U, B]
        ),
        Ye = Ke[0],
        Xe = Ke[1],
        Er = I.exports.useMemo(
          function () {
            return U ? B : M({}, B, { subscription: Ye });
          },
          [U, B, Ye]
        ),
        hi = I.exports.useReducer(My, By, $y),
        wa = hi[0],
        bt = wa[0],
        Sa = hi[1];
      if (bt && bt.error) throw bt.error;
      var zs = I.exports.useRef(),
        xa = I.exports.useRef(N),
        yi = I.exports.useRef(),
        $s = I.exports.useRef(!1),
        ba = T(
          function () {
            return yi.current && N === xa.current
              ? yi.current
              : wr(j.getState(), N);
          },
          [j, bt, N]
        );
      dd(Fy, [xa, zs, $s, N, ba, yi, Xe]),
        dd(zy, [f, j, Ye, wr, xa, zs, $s, yi, Xe, Sa], [j, Ye, wr]);
      var Ca = I.exports.useMemo(
          function () {
            return C(w, Re(ce({}, ba), { ref: yr }));
          },
          [yr, w, ba]
        ),
        xg = I.exports.useMemo(
          function () {
            return f ? C(L.Provider, { value: Er, children: Ca }) : Ca;
          },
          [L, Ca, Er]
        );
      return xg;
    }
    var ue = k ? vr.memo(F) : F;
    if (((ue.WrappedComponent = w), (ue.displayName = F.displayName = b), g)) {
      var se = vr.forwardRef(function (Te, xe) {
        return C(ue, Re(ce({}, Te), { reactReduxForwardedRef: xe }));
      });
      return (se.displayName = b), (se.WrappedComponent = w), cd(se, w);
    }
    return cd(ue, w);
  };
}
function fd(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function Xa(e, r) {
  if (fd(e, r)) return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  var t = Object.keys(e),
    n = Object.keys(r);
  if (t.length !== n.length) return !1;
  for (var i = 0; i < t.length; i++)
    if (!Object.prototype.hasOwnProperty.call(r, t[i]) || !fd(e[t[i]], r[t[i]]))
      return !1;
  return !0;
}
function jy(e, r) {
  var t = {},
    n = function (a) {
      var l = e[a];
      typeof l == "function" &&
        (t[a] = function () {
          return r(l.apply(void 0, arguments));
        });
    };
  for (var i in e) n(i);
  return t;
}
function us(e) {
  return function (t, n) {
    var i = e(t, n);
    function o() {
      return i;
    }
    return (o.dependsOnOwnProps = !1), o;
  };
}
function pd(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0
    ? Boolean(e.dependsOnOwnProps)
    : e.length !== 1;
}
function wv(e, r) {
  return function (n, i) {
    i.displayName;
    var o = function (l, u) {
      return o.dependsOnOwnProps ? o.mapToProps(l, u) : o.mapToProps(l);
    };
    return (
      (o.dependsOnOwnProps = !0),
      (o.mapToProps = function (l, u) {
        (o.mapToProps = e), (o.dependsOnOwnProps = pd(e));
        var c = o(l, u);
        return (
          typeof c == "function" &&
            ((o.mapToProps = c), (o.dependsOnOwnProps = pd(c)), (c = o(l, u))),
          c
        );
      }),
      o
    );
  };
}
function Uy(e) {
  return typeof e == "function" ? wv(e) : void 0;
}
function Wy(e) {
  return e
    ? void 0
    : us(function (r) {
        return { dispatch: r };
      });
}
function Gy(e) {
  return e && typeof e == "object"
    ? us(function (r) {
        return jy(e, r);
      })
    : void 0;
}
var Vy = [Uy, Wy, Gy];
function Hy(e) {
  return typeof e == "function" ? wv(e) : void 0;
}
function Qy(e) {
  return e
    ? void 0
    : us(function () {
        return {};
      });
}
var qy = [Hy, Qy];
function Ky(e, r, t) {
  return M({}, t, e, r);
}
function Yy(e) {
  return function (t, n) {
    n.displayName;
    var i = n.pure,
      o = n.areMergedPropsEqual,
      a = !1,
      l;
    return function (c, f, d) {
      var s = e(c, f, d);
      return a ? (!i || !o(s, l)) && (l = s) : ((a = !0), (l = s)), l;
    };
  };
}
function Xy(e) {
  return typeof e == "function" ? Yy(e) : void 0;
}
function Jy(e) {
  return e
    ? void 0
    : function () {
        return Ky;
      };
}
var Zy = [Xy, Jy],
  e0 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function r0(e, r, t, n) {
  return function (o, a) {
    return t(e(o, a), r(n, a), a);
  };
}
function t0(e, r, t, n, i) {
  var o = i.areStatesEqual,
    a = i.areOwnPropsEqual,
    l = i.areStatePropsEqual,
    u = !1,
    c,
    f,
    d,
    s,
    p;
  function g(h, w) {
    return (
      (c = h),
      (f = w),
      (d = e(c, f)),
      (s = r(n, f)),
      (p = t(d, s, f)),
      (u = !0),
      p
    );
  }
  function y() {
    return (
      (d = e(c, f)), r.dependsOnOwnProps && (s = r(n, f)), (p = t(d, s, f)), p
    );
  }
  function S() {
    return (
      e.dependsOnOwnProps && (d = e(c, f)),
      r.dependsOnOwnProps && (s = r(n, f)),
      (p = t(d, s, f)),
      p
    );
  }
  function m() {
    var h = e(c, f),
      w = !l(h, d);
    return (d = h), w && (p = t(d, s, f)), p;
  }
  function v(h, w) {
    var x = !a(w, f),
      b = !o(h, c);
    return (c = h), (f = w), x && b ? y() : x ? S() : b ? m() : p;
  }
  return function (w, x) {
    return u ? v(w, x) : g(w, x);
  };
}
function n0(e, r) {
  var t = r.initMapStateToProps,
    n = r.initMapDispatchToProps,
    i = r.initMergeProps,
    o = Po(r, e0),
    a = t(e, o),
    l = n(e, o),
    u = i(e, o),
    c = o.pure ? t0 : r0;
  return c(a, l, u, e, o);
}
var i0 = [
  "pure",
  "areStatesEqual",
  "areOwnPropsEqual",
  "areStatePropsEqual",
  "areMergedPropsEqual",
];
function Ja(e, r, t) {
  for (var n = r.length - 1; n >= 0; n--) {
    var i = r[n](e);
    if (i) return i;
  }
  return function (o, a) {
    throw new Error(
      "Invalid value of type " +
        typeof e +
        " for " +
        t +
        " argument when connecting component " +
        a.wrappedComponentName +
        "."
    );
  };
}
function o0(e, r) {
  return e === r;
}
function a0(e) {
  var r = e === void 0 ? {} : e,
    t = r.connectHOC,
    n = t === void 0 ? _y : t,
    i = r.mapStateToPropsFactories,
    o = i === void 0 ? qy : i,
    a = r.mapDispatchToPropsFactories,
    l = a === void 0 ? Vy : a,
    u = r.mergePropsFactories,
    c = u === void 0 ? Zy : u,
    f = r.selectorFactory,
    d = f === void 0 ? n0 : f;
  return function (p, g, y, S) {
    S === void 0 && (S = {});
    var m = S,
      v = m.pure,
      h = v === void 0 ? !0 : v,
      w = m.areStatesEqual,
      x = w === void 0 ? o0 : w,
      b = m.areOwnPropsEqual,
      E = b === void 0 ? Xa : b,
      k = m.areStatePropsEqual,
      R = k === void 0 ? Xa : k,
      T = m.areMergedPropsEqual,
      F = T === void 0 ? Xa : T,
      ue = Po(m, i0),
      se = Ja(p, o, "mapStateToProps"),
      Y = Ja(g, l, "mapDispatchToProps"),
      Te = Ja(y, c, "mergeProps");
    return n(
      d,
      M(
        {
          methodName: "connect",
          getDisplayName: function (yr) {
            return "Connect(" + yr + ")";
          },
          shouldHandleStateChanges: Boolean(p),
          initMapStateToProps: se,
          initMapDispatchToProps: Y,
          initMergeProps: Te,
          pure: h,
          areStatesEqual: x,
          areOwnPropsEqual: E,
          areStatePropsEqual: R,
          areMergedPropsEqual: F,
        },
        ue
      )
    );
  };
}
var Sv = a0();
ay(Mo.exports.unstable_batchedUpdates);
function l0(e, r) {
  if (e.length !== r.length) return !1;
  for (var t = 0; t < e.length; t++) if (e[t] !== r[t]) return !1;
  return !0;
}
function xv(e, r) {
  var t = I.exports.useState(function () {
      return { inputs: r, result: e() };
    })[0],
    n = I.exports.useRef(!0),
    i = I.exports.useRef(t),
    o = n.current || Boolean(r && i.current.inputs && l0(r, i.current.inputs)),
    a = o ? i.current : { inputs: r, result: e() };
  return (
    I.exports.useEffect(
      function () {
        (n.current = !1), (i.current = a);
      },
      [a]
    ),
    a.result
  );
}
function u0(e, r) {
  return xv(function () {
    return e;
  }, r);
}
var $ = xv,
  A = u0,
  s0 = !0,
  Za = "Invariant failed";
function c0(e, r) {
  if (!e) {
    if (s0) throw new Error(Za);
    var t = typeof r == "function" ? r() : r,
      n = t ? Za + ": " + t : Za;
    throw new Error(n);
  }
}
var pr = function (r) {
    var t = r.top,
      n = r.right,
      i = r.bottom,
      o = r.left,
      a = n - o,
      l = i - t,
      u = {
        top: t,
        right: n,
        bottom: i,
        left: o,
        width: a,
        height: l,
        x: o,
        y: t,
        center: { x: (n + o) / 2, y: (i + t) / 2 },
      };
    return u;
  },
  ss = function (r, t) {
    return {
      top: r.top - t.top,
      left: r.left - t.left,
      bottom: r.bottom + t.bottom,
      right: r.right + t.right,
    };
  },
  vd = function (r, t) {
    return {
      top: r.top + t.top,
      left: r.left + t.left,
      bottom: r.bottom - t.bottom,
      right: r.right - t.right,
    };
  },
  d0 = function (r, t) {
    return {
      top: r.top + t.y,
      left: r.left + t.x,
      bottom: r.bottom + t.y,
      right: r.right + t.x,
    };
  },
  el = { top: 0, right: 0, bottom: 0, left: 0 },
  cs = function (r) {
    var t = r.borderBox,
      n = r.margin,
      i = n === void 0 ? el : n,
      o = r.border,
      a = o === void 0 ? el : o,
      l = r.padding,
      u = l === void 0 ? el : l,
      c = pr(ss(t, i)),
      f = pr(vd(t, a)),
      d = pr(vd(f, u));
    return {
      marginBox: c,
      borderBox: pr(t),
      paddingBox: f,
      contentBox: d,
      margin: i,
      border: a,
      padding: u,
    };
  },
  Je = function (r) {
    var t = r.slice(0, -2),
      n = r.slice(-2);
    if (n !== "px") return 0;
    var i = Number(t);
    return isNaN(i) && c0(!1), i;
  },
  f0 = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  ko = function (r, t) {
    var n = r.borderBox,
      i = r.border,
      o = r.margin,
      a = r.padding,
      l = d0(n, t);
    return cs({ borderBox: l, border: i, margin: o, padding: a });
  },
  No = function (r, t) {
    return t === void 0 && (t = f0()), ko(r, t);
  },
  bv = function (r, t) {
    var n = {
        top: Je(t.marginTop),
        right: Je(t.marginRight),
        bottom: Je(t.marginBottom),
        left: Je(t.marginLeft),
      },
      i = {
        top: Je(t.paddingTop),
        right: Je(t.paddingRight),
        bottom: Je(t.paddingBottom),
        left: Je(t.paddingLeft),
      },
      o = {
        top: Je(t.borderTopWidth),
        right: Je(t.borderRightWidth),
        bottom: Je(t.borderBottomWidth),
        left: Je(t.borderLeftWidth),
      };
    return cs({ borderBox: r, margin: n, padding: i, border: o });
  },
  Cv = function (r) {
    var t = r.getBoundingClientRect(),
      n = window.getComputedStyle(r);
    return bv(t, n);
  },
  gd =
    Number.isNaN ||
    function (r) {
      return typeof r == "number" && r !== r;
    };
function p0(e, r) {
  return !!(e === r || (gd(e) && gd(r)));
}
function v0(e, r) {
  if (e.length !== r.length) return !1;
  for (var t = 0; t < e.length; t++) if (!p0(e[t], r[t])) return !1;
  return !0;
}
function fe(e, r) {
  r === void 0 && (r = v0);
  var t,
    n = [],
    i,
    o = !1;
  function a() {
    for (var l = [], u = 0; u < arguments.length; u++) l[u] = arguments[u];
    return (
      (o && t === this && r(l, n)) ||
        ((i = e.apply(this, l)), (o = !0), (t = this), (n = l)),
      i
    );
  }
  return a;
}
var g0 = function (r) {
    var t = [],
      n = null,
      i = function () {
        for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
          l[u] = arguments[u];
        (t = l),
          !n &&
            (n = requestAnimationFrame(function () {
              (n = null), r.apply(void 0, t);
            }));
      };
    return (
      (i.cancel = function () {
        !n || (cancelAnimationFrame(n), (n = null));
      }),
      i
    );
  },
  Yn = g0;
function Dv(e, r) {}
Dv.bind(null, "warn");
Dv.bind(null, "error");
function Kr() {}
function m0(e, r) {
  return M({}, e, {}, r);
}
function tr(e, r, t) {
  var n = r.map(function (i) {
    var o = m0(t, i.options);
    return (
      e.addEventListener(i.eventName, i.fn, o),
      function () {
        e.removeEventListener(i.eventName, i.fn, o);
      }
    );
  });
  return function () {
    n.forEach(function (o) {
      o();
    });
  };
}
var h0 = "Invariant failed";
function Oo(e) {
  this.message = e;
}
Oo.prototype.toString = function () {
  return this.message;
};
function P(e, r) {
  if (!e) throw new Oo(h0);
}
var y0 = (function (e) {
    Zp(r, e);
    function r() {
      for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
        o[a] = arguments[a];
      return (
        (n = e.call.apply(e, [this].concat(o)) || this),
        (n.callbacks = null),
        (n.unbind = Kr),
        (n.onWindowError = function (l) {
          var u = n.getCallbacks();
          u.isDragging() && u.tryAbort();
          var c = l.error;
          c instanceof Oo && l.preventDefault();
        }),
        (n.getCallbacks = function () {
          if (!n.callbacks)
            throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
          return n.callbacks;
        }),
        (n.setCallbacks = function (l) {
          n.callbacks = l;
        }),
        n
      );
    }
    var t = r.prototype;
    return (
      (t.componentDidMount = function () {
        this.unbind = tr(window, [
          { eventName: "error", fn: this.onWindowError },
        ]);
      }),
      (t.componentDidCatch = function (i) {
        if (i instanceof Oo) {
          this.setState({});
          return;
        }
        throw i;
      }),
      (t.componentWillUnmount = function () {
        this.unbind();
      }),
      (t.render = function () {
        return this.props.children(this.setCallbacks);
      }),
      r
    );
  })(vr.Component),
  w0 = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  To = function (r) {
    return r + 1;
  },
  S0 = function (r) {
    return (
      `
  You have lifted an item in position ` +
      To(r.source.index) +
      `
`
    );
  },
  Ev = function (r, t) {
    var n = r.droppableId === t.droppableId,
      i = To(r.index),
      o = To(t.index);
    return n
      ? `
      You have moved the item from position ` +
          i +
          `
      to position ` +
          o +
          `
    `
      : `
    You have moved the item from position ` +
          i +
          `
    in list ` +
          r.droppableId +
          `
    to list ` +
          t.droppableId +
          `
    in position ` +
          o +
          `
  `;
  },
  Iv = function (r, t, n) {
    var i = t.droppableId === n.droppableId;
    return i
      ? `
      The item ` +
          r +
          `
      has been combined with ` +
          n.draggableId
      : `
      The item ` +
          r +
          `
      in list ` +
          t.droppableId +
          `
      has been combined with ` +
          n.draggableId +
          `
      in list ` +
          n.droppableId +
          `
    `;
  },
  x0 = function (r) {
    var t = r.destination;
    if (t) return Ev(r.source, t);
    var n = r.combine;
    return n
      ? Iv(r.draggableId, r.source, n)
      : "You are over an area that cannot be dropped on";
  },
  md = function (r) {
    return (
      `
  The item has returned to its starting position
  of ` +
      To(r.index) +
      `
`
    );
  },
  b0 = function (r) {
    if (r.reason === "CANCEL")
      return (
        `
      Movement cancelled.
      ` +
        md(r.source) +
        `
    `
      );
    var t = r.destination,
      n = r.combine;
    return t
      ? `
      You have dropped the item.
      ` +
          Ev(r.source, t) +
          `
    `
      : n
      ? `
      You have dropped the item.
      ` +
        Iv(r.draggableId, r.source, n) +
        `
    `
      : `
    The item has been dropped while not over a drop area.
    ` +
        md(r.source) +
        `
  `;
  },
  Zi = {
    dragHandleUsageInstructions: w0,
    onDragStart: S0,
    onDragUpdate: x0,
    onDragEnd: b0,
  },
  pe = { x: 0, y: 0 },
  ye = function (r, t) {
    return { x: r.x + t.x, y: r.y + t.y };
  },
  je = function (r, t) {
    return { x: r.x - t.x, y: r.y - t.y };
  },
  Yr = function (r, t) {
    return r.x === t.x && r.y === t.y;
  },
  rn = function (r) {
    return { x: r.x !== 0 ? -r.x : 0, y: r.y !== 0 ? -r.y : 0 };
  },
  wt = function (r, t, n) {
    var i;
    return (
      n === void 0 && (n = 0),
      (i = {}),
      (i[r] = t),
      (i[r === "x" ? "y" : "x"] = n),
      i
    );
  },
  Xn = function (r, t) {
    return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2));
  },
  hd = function (r, t) {
    return Math.min.apply(
      Math,
      t.map(function (n) {
        return Xn(r, n);
      })
    );
  },
  Pv = function (r) {
    return function (t) {
      return { x: r(t.x), y: r(t.y) };
    };
  },
  C0 = function (e, r) {
    var t = pr({
      top: Math.max(r.top, e.top),
      right: Math.min(r.right, e.right),
      bottom: Math.min(r.bottom, e.bottom),
      left: Math.max(r.left, e.left),
    });
    return t.width <= 0 || t.height <= 0 ? null : t;
  },
  gi = function (r, t) {
    return {
      top: r.top + t.y,
      left: r.left + t.x,
      bottom: r.bottom + t.y,
      right: r.right + t.x,
    };
  },
  yd = function (r) {
    return [
      { x: r.left, y: r.top },
      { x: r.right, y: r.top },
      { x: r.left, y: r.bottom },
      { x: r.right, y: r.bottom },
    ];
  },
  D0 = { top: 0, right: 0, bottom: 0, left: 0 },
  E0 = function (r, t) {
    return t ? gi(r, t.scroll.diff.displacement) : r;
  },
  I0 = function (r, t, n) {
    if (n && n.increasedBy) {
      var i;
      return M(
        {},
        r,
        ((i = {}), (i[t.end] = r[t.end] + n.increasedBy[t.line]), i)
      );
    }
    return r;
  },
  P0 = function (r, t) {
    return t && t.shouldClipSubject ? C0(t.pageMarginBox, r) : pr(r);
  },
  Kt = function (e) {
    var r = e.page,
      t = e.withPlaceholder,
      n = e.axis,
      i = e.frame,
      o = E0(r.marginBox, i),
      a = I0(o, n, t),
      l = P0(a, i);
    return { page: r, withPlaceholder: t, active: l };
  },
  ds = function (e, r) {
    e.frame || P(!1);
    var t = e.frame,
      n = je(r, t.scroll.initial),
      i = rn(n),
      o = M({}, t, {
        scroll: {
          initial: t.scroll.initial,
          current: r,
          diff: { value: n, displacement: i },
          max: t.scroll.max,
        },
      }),
      a = Kt({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: o,
      }),
      l = M({}, e, { frame: o, subject: a });
    return l;
  };
function Ro(e) {
  return Object.values
    ? Object.values(e)
    : Object.keys(e).map(function (r) {
        return e[r];
      });
}
function fs(e, r) {
  if (e.findIndex) return e.findIndex(r);
  for (var t = 0; t < e.length; t++) if (r(e[t])) return t;
  return -1;
}
function ot(e, r) {
  if (e.find) return e.find(r);
  var t = fs(e, r);
  if (t !== -1) return e[t];
}
function kv(e) {
  return Array.prototype.slice.call(e);
}
var Nv = fe(function (e) {
    return e.reduce(function (r, t) {
      return (r[t.descriptor.id] = t), r;
    }, {});
  }),
  Ov = fe(function (e) {
    return e.reduce(function (r, t) {
      return (r[t.descriptor.id] = t), r;
    }, {});
  }),
  fa = fe(function (e) {
    return Ro(e);
  }),
  k0 = fe(function (e) {
    return Ro(e);
  }),
  tn = fe(function (e, r) {
    var t = k0(r)
      .filter(function (n) {
        return e === n.descriptor.droppableId;
      })
      .sort(function (n, i) {
        return n.descriptor.index - i.descriptor.index;
      });
    return t;
  });
function ps(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function pa(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var va = fe(function (e, r) {
    return r.filter(function (t) {
      return t.descriptor.id !== e.descriptor.id;
    });
  }),
  N0 = function (e) {
    var r = e.isMovingForward,
      t = e.draggable,
      n = e.destination,
      i = e.insideDestination,
      o = e.previousImpact;
    if (!n.isCombineEnabled) return null;
    var a = ps(o);
    if (!a) return null;
    function l(y) {
      var S = {
        type: "COMBINE",
        combine: { draggableId: y, droppableId: n.descriptor.id },
      };
      return M({}, o, { at: S });
    }
    var u = o.displaced.all,
      c = u.length ? u[0] : null;
    if (r) return c ? l(c) : null;
    var f = va(t, i);
    if (!c) {
      if (!f.length) return null;
      var d = f[f.length - 1];
      return l(d.descriptor.id);
    }
    var s = fs(f, function (y) {
      return y.descriptor.id === c;
    });
    s === -1 && P(!1);
    var p = s - 1;
    if (p < 0) return null;
    var g = f[p];
    return l(g.descriptor.id);
  },
  nn = function (e, r) {
    return e.descriptor.droppableId === r.descriptor.id;
  },
  Tv = { point: pe, value: 0 },
  Jn = { invisible: {}, visible: {}, all: [] },
  O0 = { displaced: Jn, displacedBy: Tv, at: null },
  or = function (e, r) {
    return function (t) {
      return e <= t && t <= r;
    };
  },
  Rv = function (e) {
    var r = or(e.top, e.bottom),
      t = or(e.left, e.right);
    return function (n) {
      var i = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
      if (i) return !0;
      var o = r(n.top) || r(n.bottom),
        a = t(n.left) || t(n.right),
        l = o && a;
      if (l) return !0;
      var u = n.top < e.top && n.bottom > e.bottom,
        c = n.left < e.left && n.right > e.right,
        f = u && c;
      if (f) return !0;
      var d = (u && a) || (c && o);
      return d;
    };
  },
  T0 = function (e) {
    var r = or(e.top, e.bottom),
      t = or(e.left, e.right);
    return function (n) {
      var i = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
      return i;
    };
  },
  vs = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width",
  },
  Av = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height",
  },
  R0 = function (e) {
    return function (r) {
      var t = or(r.top, r.bottom),
        n = or(r.left, r.right);
      return function (i) {
        return e === vs ? t(i.top) && t(i.bottom) : n(i.left) && n(i.right);
      };
    };
  },
  A0 = function (r, t) {
    var n = t.frame ? t.frame.scroll.diff.displacement : pe;
    return gi(r, n);
  },
  B0 = function (r, t, n) {
    return t.subject.active ? n(t.subject.active)(r) : !1;
  },
  L0 = function (r, t, n) {
    return n(t)(r);
  },
  gs = function (r) {
    var t = r.target,
      n = r.destination,
      i = r.viewport,
      o = r.withDroppableDisplacement,
      a = r.isVisibleThroughFrameFn,
      l = o ? A0(t, n) : t;
    return B0(l, n, a) && L0(l, i, a);
  },
  M0 = function (r) {
    return gs(M({}, r, { isVisibleThroughFrameFn: Rv }));
  },
  Bv = function (r) {
    return gs(M({}, r, { isVisibleThroughFrameFn: T0 }));
  },
  F0 = function (r) {
    return gs(M({}, r, { isVisibleThroughFrameFn: R0(r.destination.axis) }));
  },
  z0 = function (r, t, n) {
    if (typeof n == "boolean") return n;
    if (!t) return !0;
    var i = t.invisible,
      o = t.visible;
    if (i[r]) return !1;
    var a = o[r];
    return a ? a.shouldAnimate : !0;
  };
function $0(e, r) {
  var t = e.page.marginBox,
    n = { top: r.point.y, right: 0, bottom: 0, left: r.point.x };
  return pr(ss(t, n));
}
function Zn(e) {
  var r = e.afterDragging,
    t = e.destination,
    n = e.displacedBy,
    i = e.viewport,
    o = e.forceShouldAnimate,
    a = e.last;
  return r.reduce(
    function (u, c) {
      var f = $0(c, n),
        d = c.descriptor.id;
      u.all.push(d);
      var s = M0({
        target: f,
        destination: t,
        viewport: i,
        withDroppableDisplacement: !0,
      });
      if (!s) return (u.invisible[c.descriptor.id] = !0), u;
      var p = z0(d, a, o),
        g = { draggableId: d, shouldAnimate: p };
      return (u.visible[d] = g), u;
    },
    { all: [], visible: {}, invisible: {} }
  );
}
function _0(e, r) {
  if (!e.length) return 0;
  var t = e[e.length - 1].descriptor.index;
  return r.inHomeList ? t : t + 1;
}
function wd(e) {
  var r = e.insideDestination,
    t = e.inHomeList,
    n = e.displacedBy,
    i = e.destination,
    o = _0(r, { inHomeList: t });
  return {
    displaced: Jn,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: { droppableId: i.descriptor.id, index: o },
    },
  };
}
function Ao(e) {
  var r = e.draggable,
    t = e.insideDestination,
    n = e.destination,
    i = e.viewport,
    o = e.displacedBy,
    a = e.last,
    l = e.index,
    u = e.forceShouldAnimate,
    c = nn(r, n);
  if (l == null)
    return wd({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n,
    });
  var f = ot(t, function (y) {
    return y.descriptor.index === l;
  });
  if (!f)
    return wd({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n,
    });
  var d = va(r, t),
    s = t.indexOf(f),
    p = d.slice(s),
    g = Zn({
      afterDragging: p,
      destination: n,
      displacedBy: o,
      last: a,
      viewport: i.frame,
      forceShouldAnimate: u,
    });
  return {
    displaced: g,
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: { droppableId: n.descriptor.id, index: l },
    },
  };
}
function rt(e, r) {
  return Boolean(r.effected[e]);
}
var j0 = function (e) {
    var r = e.isMovingForward,
      t = e.destination,
      n = e.draggables,
      i = e.combine,
      o = e.afterCritical;
    if (!t.isCombineEnabled) return null;
    var a = i.draggableId,
      l = n[a],
      u = l.descriptor.index,
      c = rt(a, o);
    return c ? (r ? u : u - 1) : r ? u + 1 : u;
  },
  U0 = function (e) {
    var r = e.isMovingForward,
      t = e.isInHomeList,
      n = e.insideDestination,
      i = e.location;
    if (!n.length) return null;
    var o = i.index,
      a = r ? o + 1 : o - 1,
      l = n[0].descriptor.index,
      u = n[n.length - 1].descriptor.index,
      c = t ? u : u + 1;
    return a < l || a > c ? null : a;
  },
  W0 = function (e) {
    var r = e.isMovingForward,
      t = e.isInHomeList,
      n = e.draggable,
      i = e.draggables,
      o = e.destination,
      a = e.insideDestination,
      l = e.previousImpact,
      u = e.viewport,
      c = e.afterCritical,
      f = l.at;
    if ((f || P(!1), f.type === "REORDER")) {
      var d = U0({
        isMovingForward: r,
        isInHomeList: t,
        location: f.destination,
        insideDestination: a,
      });
      return d == null
        ? null
        : Ao({
            draggable: n,
            insideDestination: a,
            destination: o,
            viewport: u,
            last: l.displaced,
            displacedBy: l.displacedBy,
            index: d,
          });
    }
    var s = j0({
      isMovingForward: r,
      destination: o,
      displaced: l.displaced,
      draggables: i,
      combine: f.combine,
      afterCritical: c,
    });
    return s == null
      ? null
      : Ao({
          draggable: n,
          insideDestination: a,
          destination: o,
          viewport: u,
          last: l.displaced,
          displacedBy: l.displacedBy,
          index: s,
        });
  },
  G0 = function (e) {
    var r = e.displaced,
      t = e.afterCritical,
      n = e.combineWith,
      i = e.displacedBy,
      o = Boolean(r.visible[n] || r.invisible[n]);
    return rt(n, t) ? (o ? pe : rn(i.point)) : o ? i.point : pe;
  },
  V0 = function (e) {
    var r = e.afterCritical,
      t = e.impact,
      n = e.draggables,
      i = pa(t);
    i || P(!1);
    var o = i.draggableId,
      a = n[o].page.borderBox.center,
      l = G0({
        displaced: t.displaced,
        afterCritical: r,
        combineWith: o,
        displacedBy: t.displacedBy,
      });
    return ye(a, l);
  },
  Lv = function (r, t) {
    return t.margin[r.start] + t.borderBox[r.size] / 2;
  },
  H0 = function (r, t) {
    return t.margin[r.end] + t.borderBox[r.size] / 2;
  },
  ms = function (r, t, n) {
    return (
      t[r.crossAxisStart] +
      n.margin[r.crossAxisStart] +
      n.borderBox[r.crossAxisSize] / 2
    );
  },
  Sd = function (r) {
    var t = r.axis,
      n = r.moveRelativeTo,
      i = r.isMoving;
    return wt(t.line, n.marginBox[t.end] + Lv(t, i), ms(t, n.marginBox, i));
  },
  xd = function (r) {
    var t = r.axis,
      n = r.moveRelativeTo,
      i = r.isMoving;
    return wt(t.line, n.marginBox[t.start] - H0(t, i), ms(t, n.marginBox, i));
  },
  Q0 = function (r) {
    var t = r.axis,
      n = r.moveInto,
      i = r.isMoving;
    return wt(t.line, n.contentBox[t.start] + Lv(t, i), ms(t, n.contentBox, i));
  },
  q0 = function (e) {
    var r = e.impact,
      t = e.draggable,
      n = e.draggables,
      i = e.droppable,
      o = e.afterCritical,
      a = tn(i.descriptor.id, n),
      l = t.page,
      u = i.axis;
    if (!a.length) return Q0({ axis: u, moveInto: i.page, isMoving: l });
    var c = r.displaced,
      f = r.displacedBy,
      d = c.all[0];
    if (d) {
      var s = n[d];
      if (rt(d, o)) return xd({ axis: u, moveRelativeTo: s.page, isMoving: l });
      var p = ko(s.page, f.point);
      return xd({ axis: u, moveRelativeTo: p, isMoving: l });
    }
    var g = a[a.length - 1];
    if (g.descriptor.id === t.descriptor.id) return l.borderBox.center;
    if (rt(g.descriptor.id, o)) {
      var y = ko(g.page, rn(o.displacedBy.point));
      return Sd({ axis: u, moveRelativeTo: y, isMoving: l });
    }
    return Sd({ axis: u, moveRelativeTo: g.page, isMoving: l });
  },
  nu = function (e, r) {
    var t = e.frame;
    return t ? ye(r, t.scroll.diff.displacement) : r;
  },
  K0 = function (r) {
    var t = r.impact,
      n = r.draggable,
      i = r.droppable,
      o = r.draggables,
      a = r.afterCritical,
      l = n.page.borderBox.center,
      u = t.at;
    return !i || !u
      ? l
      : u.type === "REORDER"
      ? q0({
          impact: t,
          draggable: n,
          draggables: o,
          droppable: i,
          afterCritical: a,
        })
      : V0({ impact: t, draggables: o, afterCritical: a });
  },
  ga = function (e) {
    var r = K0(e),
      t = e.droppable,
      n = t ? nu(t, r) : r;
    return n;
  },
  Mv = function (e, r) {
    var t = je(r, e.scroll.initial),
      n = rn(t),
      i = pr({
        top: r.y,
        bottom: r.y + e.frame.height,
        left: r.x,
        right: r.x + e.frame.width,
      }),
      o = {
        frame: i,
        scroll: {
          initial: e.scroll.initial,
          max: e.scroll.max,
          current: r,
          diff: { value: t, displacement: n },
        },
      };
    return o;
  };
function bd(e, r) {
  return e.map(function (t) {
    return r[t];
  });
}
function Y0(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t].visible[e];
    if (n) return n;
  }
  return null;
}
var X0 = function (e) {
    var r = e.impact,
      t = e.viewport,
      n = e.destination,
      i = e.draggables,
      o = e.maxScrollChange,
      a = Mv(t, ye(t.scroll.current, o)),
      l = n.frame ? ds(n, ye(n.frame.scroll.current, o)) : n,
      u = r.displaced,
      c = Zn({
        afterDragging: bd(u.all, i),
        destination: n,
        displacedBy: r.displacedBy,
        viewport: a.frame,
        last: u,
        forceShouldAnimate: !1,
      }),
      f = Zn({
        afterDragging: bd(u.all, i),
        destination: l,
        displacedBy: r.displacedBy,
        viewport: t.frame,
        last: u,
        forceShouldAnimate: !1,
      }),
      d = {},
      s = {},
      p = [u, c, f];
    u.all.forEach(function (y) {
      var S = Y0(y, p);
      if (S) {
        s[y] = S;
        return;
      }
      d[y] = !0;
    });
    var g = M({}, r, { displaced: { all: u.all, invisible: d, visible: s } });
    return g;
  },
  J0 = function (e, r) {
    return ye(e.scroll.diff.displacement, r);
  },
  hs = function (e) {
    var r = e.pageBorderBoxCenter,
      t = e.draggable,
      n = e.viewport,
      i = J0(n, r),
      o = je(i, t.page.borderBox.center);
    return ye(t.client.borderBox.center, o);
  },
  Fv = function (e) {
    var r = e.draggable,
      t = e.destination,
      n = e.newPageBorderBoxCenter,
      i = e.viewport,
      o = e.withDroppableDisplacement,
      a = e.onlyOnMainAxis,
      l = a === void 0 ? !1 : a,
      u = je(n, r.page.borderBox.center),
      c = gi(r.page.borderBox, u),
      f = {
        target: c,
        destination: t,
        withDroppableDisplacement: o,
        viewport: i,
      };
    return l ? F0(f) : Bv(f);
  },
  Z0 = function (e) {
    var r = e.isMovingForward,
      t = e.draggable,
      n = e.destination,
      i = e.draggables,
      o = e.previousImpact,
      a = e.viewport,
      l = e.previousPageBorderBoxCenter,
      u = e.previousClientSelection,
      c = e.afterCritical;
    if (!n.isEnabled) return null;
    var f = tn(n.descriptor.id, i),
      d = nn(t, n),
      s =
        N0({
          isMovingForward: r,
          draggable: t,
          destination: n,
          insideDestination: f,
          previousImpact: o,
        }) ||
        W0({
          isMovingForward: r,
          isInHomeList: d,
          draggable: t,
          draggables: i,
          destination: n,
          insideDestination: f,
          previousImpact: o,
          viewport: a,
          afterCritical: c,
        });
    if (!s) return null;
    var p = ga({
        impact: s,
        draggable: t,
        droppable: n,
        draggables: i,
        afterCritical: c,
      }),
      g = Fv({
        draggable: t,
        destination: n,
        newPageBorderBoxCenter: p,
        viewport: a.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      });
    if (g) {
      var y = hs({ pageBorderBoxCenter: p, draggable: t, viewport: a });
      return { clientSelection: y, impact: s, scrollJumpRequest: null };
    }
    var S = je(p, l),
      m = X0({
        impact: s,
        viewport: a,
        destination: n,
        draggables: i,
        maxScrollChange: S,
      });
    return { clientSelection: u, impact: m, scrollJumpRequest: S };
  },
  Ie = function (r) {
    var t = r.subject.active;
    return t || P(!1), t;
  },
  e1 = function (e) {
    var r = e.isMovingForward,
      t = e.pageBorderBoxCenter,
      n = e.source,
      i = e.droppables,
      o = e.viewport,
      a = n.subject.active;
    if (!a) return null;
    var l = n.axis,
      u = or(a[l.start], a[l.end]),
      c = fa(i)
        .filter(function (d) {
          return d !== n;
        })
        .filter(function (d) {
          return d.isEnabled;
        })
        .filter(function (d) {
          return Boolean(d.subject.active);
        })
        .filter(function (d) {
          return Rv(o.frame)(Ie(d));
        })
        .filter(function (d) {
          var s = Ie(d);
          return r
            ? a[l.crossAxisEnd] < s[l.crossAxisEnd]
            : s[l.crossAxisStart] < a[l.crossAxisStart];
        })
        .filter(function (d) {
          var s = Ie(d),
            p = or(s[l.start], s[l.end]);
          return u(s[l.start]) || u(s[l.end]) || p(a[l.start]) || p(a[l.end]);
        })
        .sort(function (d, s) {
          var p = Ie(d)[l.crossAxisStart],
            g = Ie(s)[l.crossAxisStart];
          return r ? p - g : g - p;
        })
        .filter(function (d, s, p) {
          return Ie(d)[l.crossAxisStart] === Ie(p[0])[l.crossAxisStart];
        });
    if (!c.length) return null;
    if (c.length === 1) return c[0];
    var f = c.filter(function (d) {
      var s = or(Ie(d)[l.start], Ie(d)[l.end]);
      return s(t[l.line]);
    });
    return f.length === 1
      ? f[0]
      : f.length > 1
      ? f.sort(function (d, s) {
          return Ie(d)[l.start] - Ie(s)[l.start];
        })[0]
      : c.sort(function (d, s) {
          var p = hd(t, yd(Ie(d))),
            g = hd(t, yd(Ie(s)));
          return p !== g ? p - g : Ie(d)[l.start] - Ie(s)[l.start];
        })[0];
  },
  Cd = function (r, t) {
    var n = r.page.borderBox.center;
    return rt(r.descriptor.id, t) ? je(n, t.displacedBy.point) : n;
  },
  r1 = function (r, t) {
    var n = r.page.borderBox;
    return rt(r.descriptor.id, t) ? gi(n, rn(t.displacedBy.point)) : n;
  },
  t1 = function (e) {
    var r = e.pageBorderBoxCenter,
      t = e.viewport,
      n = e.destination,
      i = e.insideDestination,
      o = e.afterCritical,
      a = i
        .filter(function (l) {
          return Bv({
            target: r1(l, o),
            destination: n,
            viewport: t.frame,
            withDroppableDisplacement: !0,
          });
        })
        .sort(function (l, u) {
          var c = Xn(r, nu(n, Cd(l, o))),
            f = Xn(r, nu(n, Cd(u, o)));
          return c < f
            ? -1
            : f < c
            ? 1
            : l.descriptor.index - u.descriptor.index;
        });
    return a[0] || null;
  },
  mi = fe(function (r, t) {
    var n = t[r.line];
    return { value: n, point: wt(r.line, n) };
  }),
  n1 = function (r, t, n) {
    var i = r.axis;
    if (r.descriptor.mode === "virtual") return wt(i.line, t[i.line]);
    var o = r.subject.page.contentBox[i.size],
      a = tn(r.descriptor.id, n),
      l = a.reduce(function (f, d) {
        return f + d.client.marginBox[i.size];
      }, 0),
      u = l + t[i.line],
      c = u - o;
    return c <= 0 ? null : wt(i.line, c);
  },
  zv = function (r, t) {
    return M({}, r, { scroll: M({}, r.scroll, { max: t }) });
  },
  $v = function (r, t, n) {
    var i = r.frame;
    nn(t, r) && P(!1), r.subject.withPlaceholder && P(!1);
    var o = mi(r.axis, t.displaceBy).point,
      a = n1(r, o, n),
      l = {
        placeholderSize: o,
        increasedBy: a,
        oldFrameMaxScroll: r.frame ? r.frame.scroll.max : null,
      };
    if (!i) {
      var u = Kt({
        page: r.subject.page,
        withPlaceholder: l,
        axis: r.axis,
        frame: r.frame,
      });
      return M({}, r, { subject: u });
    }
    var c = a ? ye(i.scroll.max, a) : i.scroll.max,
      f = zv(i, c),
      d = Kt({
        page: r.subject.page,
        withPlaceholder: l,
        axis: r.axis,
        frame: f,
      });
    return M({}, r, { subject: d, frame: f });
  },
  i1 = function (r) {
    var t = r.subject.withPlaceholder;
    t || P(!1);
    var n = r.frame;
    if (!n) {
      var i = Kt({
        page: r.subject.page,
        axis: r.axis,
        frame: null,
        withPlaceholder: null,
      });
      return M({}, r, { subject: i });
    }
    var o = t.oldFrameMaxScroll;
    o || P(!1);
    var a = zv(n, o),
      l = Kt({
        page: r.subject.page,
        axis: r.axis,
        frame: a,
        withPlaceholder: null,
      });
    return M({}, r, { subject: l, frame: a });
  },
  o1 = function (e) {
    var r = e.previousPageBorderBoxCenter,
      t = e.moveRelativeTo,
      n = e.insideDestination,
      i = e.draggable,
      o = e.draggables,
      a = e.destination,
      l = e.viewport,
      u = e.afterCritical;
    if (!t) {
      if (n.length) return null;
      var c = {
          displaced: Jn,
          displacedBy: Tv,
          at: {
            type: "REORDER",
            destination: { droppableId: a.descriptor.id, index: 0 },
          },
        },
        f = ga({
          impact: c,
          draggable: i,
          droppable: a,
          draggables: o,
          afterCritical: u,
        }),
        d = nn(i, a) ? a : $v(a, i, o),
        s = Fv({
          draggable: i,
          destination: d,
          newPageBorderBoxCenter: f,
          viewport: l.frame,
          withDroppableDisplacement: !1,
          onlyOnMainAxis: !0,
        });
      return s ? c : null;
    }
    var p = Boolean(r[a.axis.line] <= t.page.borderBox.center[a.axis.line]),
      g = (function () {
        var S = t.descriptor.index;
        return t.descriptor.id === i.descriptor.id || p ? S : S + 1;
      })(),
      y = mi(a.axis, i.displaceBy);
    return Ao({
      draggable: i,
      insideDestination: n,
      destination: a,
      viewport: l,
      displacedBy: y,
      last: Jn,
      index: g,
    });
  },
  a1 = function (e) {
    var r = e.isMovingForward,
      t = e.previousPageBorderBoxCenter,
      n = e.draggable,
      i = e.isOver,
      o = e.draggables,
      a = e.droppables,
      l = e.viewport,
      u = e.afterCritical,
      c = e1({
        isMovingForward: r,
        pageBorderBoxCenter: t,
        source: i,
        droppables: a,
        viewport: l,
      });
    if (!c) return null;
    var f = tn(c.descriptor.id, o),
      d = t1({
        pageBorderBoxCenter: t,
        viewport: l,
        destination: c,
        insideDestination: f,
        afterCritical: u,
      }),
      s = o1({
        previousPageBorderBoxCenter: t,
        destination: c,
        draggable: n,
        draggables: o,
        moveRelativeTo: d,
        insideDestination: f,
        viewport: l,
        afterCritical: u,
      });
    if (!s) return null;
    var p = ga({
        impact: s,
        draggable: n,
        droppable: c,
        draggables: o,
        afterCritical: u,
      }),
      g = hs({ pageBorderBoxCenter: p, draggable: n, viewport: l });
    return { clientSelection: g, impact: s, scrollJumpRequest: null };
  },
  We = function (e) {
    var r = e.at;
    return r
      ? r.type === "REORDER"
        ? r.destination.droppableId
        : r.combine.droppableId
      : null;
  },
  l1 = function (r, t) {
    var n = We(r);
    return n ? t[n] : null;
  },
  u1 = function (e) {
    var r = e.state,
      t = e.type,
      n = l1(r.impact, r.dimensions.droppables),
      i = Boolean(n),
      o = r.dimensions.droppables[r.critical.droppable.id],
      a = n || o,
      l = a.axis.direction,
      u =
        (l === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN")) ||
        (l === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT"));
    if (u && !i) return null;
    var c = t === "MOVE_DOWN" || t === "MOVE_RIGHT",
      f = r.dimensions.draggables[r.critical.draggable.id],
      d = r.current.page.borderBoxCenter,
      s = r.dimensions,
      p = s.draggables,
      g = s.droppables;
    return u
      ? Z0({
          isMovingForward: c,
          previousPageBorderBoxCenter: d,
          draggable: f,
          destination: a,
          draggables: p,
          viewport: r.viewport,
          previousClientSelection: r.current.client.selection,
          previousImpact: r.impact,
          afterCritical: r.afterCritical,
        })
      : a1({
          isMovingForward: c,
          previousPageBorderBoxCenter: d,
          draggable: f,
          isOver: a,
          draggables: p,
          droppables: g,
          viewport: r.viewport,
          afterCritical: r.afterCritical,
        });
  };
function st(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function _v(e) {
  var r = or(e.top, e.bottom),
    t = or(e.left, e.right);
  return function (i) {
    return r(i.y) && t(i.x);
  };
}
function s1(e, r) {
  return (
    e.left < r.right && e.right > r.left && e.top < r.bottom && e.bottom > r.top
  );
}
function c1(e) {
  var r = e.pageBorderBox,
    t = e.draggable,
    n = e.candidates,
    i = t.page.borderBox.center,
    o = n
      .map(function (a) {
        var l = a.axis,
          u = wt(
            a.axis.line,
            r.center[l.line],
            a.page.borderBox.center[l.crossAxisLine]
          );
        return { id: a.descriptor.id, distance: Xn(i, u) };
      })
      .sort(function (a, l) {
        return l.distance - a.distance;
      });
  return o[0] ? o[0].id : null;
}
function d1(e) {
  var r = e.pageBorderBox,
    t = e.draggable,
    n = e.droppables,
    i = fa(n).filter(function (o) {
      if (!o.isEnabled) return !1;
      var a = o.subject.active;
      if (!a || !s1(r, a)) return !1;
      if (_v(a)(r.center)) return !0;
      var l = o.axis,
        u = a.center[l.crossAxisLine],
        c = r[l.crossAxisStart],
        f = r[l.crossAxisEnd],
        d = or(a[l.crossAxisStart], a[l.crossAxisEnd]),
        s = d(c),
        p = d(f);
      return !s && !p ? !0 : s ? c < u : f > u;
    });
  return i.length
    ? i.length === 1
      ? i[0].descriptor.id
      : c1({ pageBorderBox: r, draggable: t, candidates: i })
    : null;
}
var jv = function (r, t) {
    return pr(gi(r, t));
  },
  f1 = function (e, r) {
    var t = e.frame;
    return t ? jv(r, t.scroll.diff.value) : r;
  };
function Uv(e) {
  var r = e.displaced,
    t = e.id;
  return Boolean(r.visible[t] || r.invisible[t]);
}
function p1(e) {
  var r = e.draggable,
    t = e.closest,
    n = e.inHomeList;
  return t
    ? n && t.descriptor.index > r.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var v1 = function (e) {
    var r = e.pageBorderBoxWithDroppableScroll,
      t = e.draggable,
      n = e.destination,
      i = e.insideDestination,
      o = e.last,
      a = e.viewport,
      l = e.afterCritical,
      u = n.axis,
      c = mi(n.axis, t.displaceBy),
      f = c.value,
      d = r[u.start],
      s = r[u.end],
      p = va(t, i),
      g = ot(p, function (S) {
        var m = S.descriptor.id,
          v = S.page.borderBox.center[u.line],
          h = rt(m, l),
          w = Uv({ displaced: o, id: m });
        return h ? (w ? s <= v : d < v - f) : w ? s <= v + f : d < v;
      }),
      y = p1({ draggable: t, closest: g, inHomeList: nn(t, n) });
    return Ao({
      draggable: t,
      insideDestination: i,
      destination: n,
      viewport: a,
      last: o,
      displacedBy: c,
      index: y,
    });
  },
  g1 = 4,
  m1 = function (e) {
    var r = e.draggable,
      t = e.pageBorderBoxWithDroppableScroll,
      n = e.previousImpact,
      i = e.destination,
      o = e.insideDestination,
      a = e.afterCritical;
    if (!i.isCombineEnabled) return null;
    var l = i.axis,
      u = mi(i.axis, r.displaceBy),
      c = u.value,
      f = t[l.start],
      d = t[l.end],
      s = va(r, o),
      p = ot(s, function (y) {
        var S = y.descriptor.id,
          m = y.page.borderBox,
          v = m[l.size],
          h = v / g1,
          w = rt(S, a),
          x = Uv({ displaced: n.displaced, id: S });
        return w
          ? x
            ? d > m[l.start] + h && d < m[l.end] - h
            : f > m[l.start] - c + h && f < m[l.end] - c - h
          : x
          ? d > m[l.start] + c + h && d < m[l.end] + c - h
          : f > m[l.start] + h && f < m[l.end] - h;
      });
    if (!p) return null;
    var g = {
      displacedBy: u,
      displaced: n.displaced,
      at: {
        type: "COMBINE",
        combine: { draggableId: p.descriptor.id, droppableId: i.descriptor.id },
      },
    };
    return g;
  },
  Wv = function (e) {
    var r = e.pageOffset,
      t = e.draggable,
      n = e.draggables,
      i = e.droppables,
      o = e.previousImpact,
      a = e.viewport,
      l = e.afterCritical,
      u = jv(t.page.borderBox, r),
      c = d1({ pageBorderBox: u, draggable: t, droppables: i });
    if (!c) return O0;
    var f = i[c],
      d = tn(f.descriptor.id, n),
      s = f1(f, u);
    return (
      m1({
        pageBorderBoxWithDroppableScroll: s,
        draggable: t,
        previousImpact: o,
        destination: f,
        insideDestination: d,
        afterCritical: l,
      }) ||
      v1({
        pageBorderBoxWithDroppableScroll: s,
        draggable: t,
        destination: f,
        insideDestination: d,
        last: o.displaced,
        viewport: a,
        afterCritical: l,
      })
    );
  },
  ys = function (e, r) {
    var t;
    return M({}, e, ((t = {}), (t[r.descriptor.id] = r), t));
  },
  h1 = function (r) {
    var t = r.previousImpact,
      n = r.impact,
      i = r.droppables,
      o = We(t),
      a = We(n);
    if (!o || o === a) return i;
    var l = i[o];
    if (!l.subject.withPlaceholder) return i;
    var u = i1(l);
    return ys(i, u);
  },
  y1 = function (e) {
    var r = e.draggable,
      t = e.draggables,
      n = e.droppables,
      i = e.previousImpact,
      o = e.impact,
      a = h1({ previousImpact: i, impact: o, droppables: n }),
      l = We(o);
    if (!l) return a;
    var u = n[l];
    if (nn(r, u) || u.subject.withPlaceholder) return a;
    var c = $v(u, r, t);
    return ys(a, c);
  },
  Tn = function (e) {
    var r = e.state,
      t = e.clientSelection,
      n = e.dimensions,
      i = e.viewport,
      o = e.impact,
      a = e.scrollJumpRequest,
      l = i || r.viewport,
      u = n || r.dimensions,
      c = t || r.current.client.selection,
      f = je(c, r.initial.client.selection),
      d = {
        offset: f,
        selection: c,
        borderBoxCenter: ye(r.initial.client.borderBoxCenter, f),
      },
      s = {
        selection: ye(d.selection, l.scroll.current),
        borderBoxCenter: ye(d.borderBoxCenter, l.scroll.current),
        offset: ye(d.offset, l.scroll.diff.value),
      },
      p = { client: d, page: s };
    if (r.phase === "COLLECTING")
      return M({ phase: "COLLECTING" }, r, {
        dimensions: u,
        viewport: l,
        current: p,
      });
    var g = u.draggables[r.critical.draggable.id],
      y =
        o ||
        Wv({
          pageOffset: s.offset,
          draggable: g,
          draggables: u.draggables,
          droppables: u.droppables,
          previousImpact: r.impact,
          viewport: l,
          afterCritical: r.afterCritical,
        }),
      S = y1({
        draggable: g,
        impact: y,
        previousImpact: r.impact,
        draggables: u.draggables,
        droppables: u.droppables,
      }),
      m = M({}, r, {
        current: p,
        dimensions: { draggables: u.draggables, droppables: S },
        impact: y,
        viewport: l,
        scrollJumpRequest: a || null,
        forceShouldAnimate: a ? !1 : null,
      });
    return m;
  };
function w1(e, r) {
  return e.map(function (t) {
    return r[t];
  });
}
var Gv = function (e) {
    var r = e.impact,
      t = e.viewport,
      n = e.draggables,
      i = e.destination,
      o = e.forceShouldAnimate,
      a = r.displaced,
      l = w1(a.all, n),
      u = Zn({
        afterDragging: l,
        destination: i,
        displacedBy: r.displacedBy,
        viewport: t.frame,
        forceShouldAnimate: o,
        last: a,
      });
    return M({}, r, { displaced: u });
  },
  Vv = function (e) {
    var r = e.impact,
      t = e.draggable,
      n = e.droppable,
      i = e.draggables,
      o = e.viewport,
      a = e.afterCritical,
      l = ga({
        impact: r,
        draggable: t,
        draggables: i,
        droppable: n,
        afterCritical: a,
      });
    return hs({ pageBorderBoxCenter: l, draggable: t, viewport: o });
  },
  Hv = function (e) {
    var r = e.state,
      t = e.dimensions,
      n = e.viewport;
    r.movementMode !== "SNAP" && P(!1);
    var i = r.impact,
      o = n || r.viewport,
      a = t || r.dimensions,
      l = a.draggables,
      u = a.droppables,
      c = l[r.critical.draggable.id],
      f = We(i);
    f || P(!1);
    var d = u[f],
      s = Gv({ impact: i, viewport: o, destination: d, draggables: l }),
      p = Vv({
        impact: s,
        draggable: c,
        droppable: d,
        draggables: l,
        viewport: o,
        afterCritical: r.afterCritical,
      });
    return Tn({
      impact: s,
      clientSelection: p,
      state: r,
      dimensions: a,
      viewport: o,
    });
  },
  S1 = function (e) {
    return { index: e.index, droppableId: e.droppableId };
  },
  Qv = function (e) {
    var r = e.draggable,
      t = e.home,
      n = e.draggables,
      i = e.viewport,
      o = mi(t.axis, r.displaceBy),
      a = tn(t.descriptor.id, n),
      l = a.indexOf(r);
    l === -1 && P(!1);
    var u = a.slice(l + 1),
      c = u.reduce(function (p, g) {
        return (p[g.descriptor.id] = !0), p;
      }, {}),
      f = {
        inVirtualList: t.descriptor.mode === "virtual",
        displacedBy: o,
        effected: c,
      },
      d = Zn({
        afterDragging: u,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: i.frame,
        forceShouldAnimate: !1,
      }),
      s = {
        displaced: d,
        displacedBy: o,
        at: { type: "REORDER", destination: S1(r.descriptor) },
      };
    return { impact: s, afterCritical: f };
  },
  x1 = function (e, r) {
    return { draggables: e.draggables, droppables: ys(e.droppables, r) };
  },
  b1 = function (e) {
    var r = e.draggable,
      t = e.offset,
      n = e.initialWindowScroll,
      i = ko(r.client, t),
      o = No(i, n),
      a = M({}, r, {
        placeholder: M({}, r.placeholder, { client: i }),
        client: i,
        page: o,
      });
    return a;
  },
  C1 = function (e) {
    var r = e.frame;
    return r || P(!1), r;
  },
  D1 = function (e) {
    var r = e.additions,
      t = e.updatedDroppables,
      n = e.viewport,
      i = n.scroll.diff.value;
    return r.map(function (o) {
      var a = o.descriptor.droppableId,
        l = t[a],
        u = C1(l),
        c = u.scroll.diff.value,
        f = ye(i, c),
        d = b1({
          draggable: o,
          offset: f,
          initialWindowScroll: n.scroll.initial,
        });
      return d;
    });
  },
  E1 = function (e) {
    var r = e.state,
      t = e.published,
      n = t.modified.map(function (h) {
        var w = r.dimensions.droppables[h.droppableId],
          x = ds(w, h.scroll);
        return x;
      }),
      i = M({}, r.dimensions.droppables, {}, Nv(n)),
      o = Ov(
        D1({
          additions: t.additions,
          updatedDroppables: i,
          viewport: r.viewport,
        })
      ),
      a = M({}, r.dimensions.draggables, {}, o);
    t.removals.forEach(function (h) {
      delete a[h];
    });
    var l = { droppables: i, draggables: a },
      u = We(r.impact),
      c = u ? l.droppables[u] : null,
      f = l.draggables[r.critical.draggable.id],
      d = l.droppables[r.critical.droppable.id],
      s = Qv({ draggable: f, home: d, draggables: a, viewport: r.viewport }),
      p = s.impact,
      g = s.afterCritical,
      y = c && c.isCombineEnabled ? r.impact : p,
      S = Wv({
        pageOffset: r.current.page.offset,
        draggable: l.draggables[r.critical.draggable.id],
        draggables: l.draggables,
        droppables: l.droppables,
        previousImpact: y,
        viewport: r.viewport,
        afterCritical: g,
      }),
      m = M({ phase: "DRAGGING" }, r, {
        phase: "DRAGGING",
        impact: S,
        onLiftImpact: p,
        dimensions: l,
        afterCritical: g,
        forceShouldAnimate: !1,
      });
    if (r.phase === "COLLECTING") return m;
    var v = M({ phase: "DROP_PENDING" }, m, {
      phase: "DROP_PENDING",
      reason: r.reason,
      isWaiting: !1,
    });
    return v;
  },
  iu = function (r) {
    return r.movementMode === "SNAP";
  },
  rl = function (r, t, n) {
    var i = x1(r.dimensions, t);
    return !iu(r) || n
      ? Tn({ state: r, dimensions: i })
      : Hv({ state: r, dimensions: i });
  };
function tl(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? M({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
    : e;
}
var Dd = { phase: "IDLE", completed: null, shouldFlush: !1 },
  I1 = function (e, r) {
    if ((e === void 0 && (e = Dd), r.type === "FLUSH"))
      return M({}, Dd, { shouldFlush: !0 });
    if (r.type === "INITIAL_PUBLISH") {
      e.phase !== "IDLE" && P(!1);
      var t = r.payload,
        n = t.critical,
        i = t.clientSelection,
        o = t.viewport,
        a = t.dimensions,
        l = t.movementMode,
        u = a.draggables[n.draggable.id],
        c = a.droppables[n.droppable.id],
        f = {
          selection: i,
          borderBoxCenter: u.client.borderBox.center,
          offset: pe,
        },
        d = {
          client: f,
          page: {
            selection: ye(f.selection, o.scroll.initial),
            borderBoxCenter: ye(f.selection, o.scroll.initial),
            offset: ye(f.selection, o.scroll.diff.value),
          },
        },
        s = fa(a.droppables).every(function (Sa) {
          return !Sa.isFixedOnPage;
        }),
        p = Qv({
          draggable: u,
          home: c,
          draggables: a.draggables,
          viewport: o,
        }),
        g = p.impact,
        y = p.afterCritical,
        S = {
          phase: "DRAGGING",
          isDragging: !0,
          critical: n,
          movementMode: l,
          dimensions: a,
          initial: d,
          current: d,
          isWindowScrollAllowed: s,
          impact: g,
          afterCritical: y,
          onLiftImpact: g,
          viewport: o,
          scrollJumpRequest: null,
          forceShouldAnimate: null,
        };
      return S;
    }
    if (r.type === "COLLECTION_STARTING") {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && P(!1);
      var m = M({ phase: "COLLECTING" }, e, { phase: "COLLECTING" });
      return m;
    }
    if (r.type === "PUBLISH_WHILE_DRAGGING")
      return (
        e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || P(!1),
        E1({ state: e, published: r.payload })
      );
    if (r.type === "MOVE") {
      if (e.phase === "DROP_PENDING") return e;
      st(e) || P(!1);
      var v = r.payload.client;
      return Yr(v, e.current.client.selection)
        ? e
        : Tn({ state: e, clientSelection: v, impact: iu(e) ? e.impact : null });
    }
    if (r.type === "UPDATE_DROPPABLE_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return tl(e);
      st(e) || P(!1);
      var h = r.payload,
        w = h.id,
        x = h.newScroll,
        b = e.dimensions.droppables[w];
      if (!b) return e;
      var E = ds(b, x);
      return rl(e, E, !1);
    }
    if (r.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      st(e) || P(!1);
      var k = r.payload,
        R = k.id,
        T = k.isEnabled,
        F = e.dimensions.droppables[R];
      F || P(!1), F.isEnabled === T && P(!1);
      var ue = M({}, F, { isEnabled: T });
      return rl(e, ue, !0);
    }
    if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      st(e) || P(!1);
      var se = r.payload,
        Y = se.id,
        Te = se.isCombineEnabled,
        xe = e.dimensions.droppables[Y];
      xe || P(!1), xe.isCombineEnabled === Te && P(!1);
      var yr = M({}, xe, { isCombineEnabled: Te });
      return rl(e, yr, !0);
    }
    if (r.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      st(e) || P(!1), e.isWindowScrollAllowed || P(!1);
      var N = r.payload.newScroll;
      if (Yr(e.viewport.scroll.current, N)) return tl(e);
      var L = Mv(e.viewport, N);
      return iu(e)
        ? Hv({ state: e, viewport: L })
        : Tn({ state: e, viewport: L });
    }
    if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!st(e)) return e;
      var B = r.payload.maxScroll;
      if (Yr(B, e.viewport.scroll.max)) return e;
      var U = M({}, e.viewport, {
        scroll: M({}, e.viewport.scroll, { max: B }),
      });
      return M({ phase: "DRAGGING" }, e, { viewport: U });
    }
    if (
      r.type === "MOVE_UP" ||
      r.type === "MOVE_DOWN" ||
      r.type === "MOVE_LEFT" ||
      r.type === "MOVE_RIGHT"
    ) {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && P(!1);
      var j = u1({ state: e, type: r.type });
      return j
        ? Tn({
            state: e,
            impact: j.impact,
            clientSelection: j.clientSelection,
            scrollJumpRequest: j.scrollJumpRequest,
          })
        : e;
    }
    if (r.type === "DROP_PENDING") {
      var wr = r.payload.reason;
      e.phase !== "COLLECTING" && P(!1);
      var Ke = M({ phase: "DROP_PENDING" }, e, {
        phase: "DROP_PENDING",
        isWaiting: !0,
        reason: wr,
      });
      return Ke;
    }
    if (r.type === "DROP_ANIMATE") {
      var Ye = r.payload,
        Xe = Ye.completed,
        Er = Ye.dropDuration,
        hi = Ye.newHomeClientOffset;
      e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || P(!1);
      var wa = {
        phase: "DROP_ANIMATING",
        completed: Xe,
        dropDuration: Er,
        newHomeClientOffset: hi,
        dimensions: e.dimensions,
      };
      return wa;
    }
    if (r.type === "DROP_COMPLETE") {
      var bt = r.payload.completed;
      return { phase: "IDLE", completed: bt, shouldFlush: !1 };
    }
    return e;
  },
  P1 = function (r) {
    return { type: "BEFORE_INITIAL_CAPTURE", payload: r };
  },
  k1 = function (r) {
    return { type: "LIFT", payload: r };
  },
  N1 = function (r) {
    return { type: "INITIAL_PUBLISH", payload: r };
  },
  O1 = function (r) {
    return { type: "PUBLISH_WHILE_DRAGGING", payload: r };
  },
  T1 = function () {
    return { type: "COLLECTION_STARTING", payload: null };
  },
  R1 = function (r) {
    return { type: "UPDATE_DROPPABLE_SCROLL", payload: r };
  },
  A1 = function (r) {
    return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: r };
  },
  B1 = function (r) {
    return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: r };
  },
  qv = function (r) {
    return { type: "MOVE", payload: r };
  },
  L1 = function (r) {
    return { type: "MOVE_BY_WINDOW_SCROLL", payload: r };
  },
  M1 = function (r) {
    return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: r };
  },
  F1 = function () {
    return { type: "MOVE_UP", payload: null };
  },
  z1 = function () {
    return { type: "MOVE_DOWN", payload: null };
  },
  $1 = function () {
    return { type: "MOVE_RIGHT", payload: null };
  },
  _1 = function () {
    return { type: "MOVE_LEFT", payload: null };
  },
  ws = function () {
    return { type: "FLUSH", payload: null };
  },
  j1 = function (r) {
    return { type: "DROP_ANIMATE", payload: r };
  },
  Ss = function (r) {
    return { type: "DROP_COMPLETE", payload: r };
  },
  Kv = function (r) {
    return { type: "DROP", payload: r };
  },
  U1 = function (r) {
    return { type: "DROP_PENDING", payload: r };
  },
  Yv = function () {
    return { type: "DROP_ANIMATION_FINISHED", payload: null };
  },
  W1 = function (e) {
    return function (r) {
      var t = r.getState,
        n = r.dispatch;
      return function (i) {
        return function (o) {
          if (o.type !== "LIFT") {
            i(o);
            return;
          }
          var a = o.payload,
            l = a.id,
            u = a.clientSelection,
            c = a.movementMode,
            f = t();
          f.phase === "DROP_ANIMATING" && n(Ss({ completed: f.completed })),
            t().phase !== "IDLE" && P(!1),
            n(ws()),
            n(P1({ draggableId: l, movementMode: c }));
          var d = { shouldPublishImmediately: c === "SNAP" },
            s = { draggableId: l, scrollOptions: d },
            p = e.startPublishing(s),
            g = p.critical,
            y = p.dimensions,
            S = p.viewport;
          n(
            N1({
              critical: g,
              dimensions: y,
              clientSelection: u,
              movementMode: c,
              viewport: S,
            })
          );
        };
      };
    };
  },
  G1 = function (e) {
    return function () {
      return function (r) {
        return function (t) {
          t.type === "INITIAL_PUBLISH" && e.dragging(),
            t.type === "DROP_ANIMATE" &&
              e.dropping(t.payload.completed.result.reason),
            (t.type === "FLUSH" || t.type === "DROP_COMPLETE") && e.resting(),
            r(t);
        };
      };
    };
  },
  xs = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  ei = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  bs = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  at = bs.outOfTheWay + "s " + xs.outOfTheWay,
  Rn = {
    fluid: "opacity " + at,
    snap: "transform " + at + ", opacity " + at,
    drop: function (r) {
      var t = r + "s " + xs.drop;
      return "transform " + t + ", opacity " + t;
    },
    outOfTheWay: "transform " + at,
    placeholder: "height " + at + ", width " + at + ", margin " + at,
  },
  Ed = function (r) {
    return Yr(r, pe) ? null : "translate(" + r.x + "px, " + r.y + "px)";
  },
  ou = {
    moveTo: Ed,
    drop: function (r, t) {
      var n = Ed(r);
      return n ? (t ? n + " scale(" + ei.scale.drop + ")" : n) : null;
    },
  },
  au = bs.minDropTime,
  Xv = bs.maxDropTime,
  V1 = Xv - au,
  Id = 1500,
  H1 = 0.6,
  Q1 = function (e) {
    var r = e.current,
      t = e.destination,
      n = e.reason,
      i = Xn(r, t);
    if (i <= 0) return au;
    if (i >= Id) return Xv;
    var o = i / Id,
      a = au + V1 * o,
      l = n === "CANCEL" ? a * H1 : a;
    return Number(l.toFixed(2));
  },
  q1 = function (e) {
    var r = e.impact,
      t = e.draggable,
      n = e.dimensions,
      i = e.viewport,
      o = e.afterCritical,
      a = n.draggables,
      l = n.droppables,
      u = We(r),
      c = u ? l[u] : null,
      f = l[t.descriptor.droppableId],
      d = Vv({
        impact: r,
        draggable: t,
        draggables: a,
        afterCritical: o,
        droppable: c || f,
        viewport: i,
      }),
      s = je(d, t.client.borderBox.center);
    return s;
  },
  K1 = function (e) {
    var r = e.draggables,
      t = e.reason,
      n = e.lastImpact,
      i = e.home,
      o = e.viewport,
      a = e.onLiftImpact;
    if (!n.at || t !== "DROP") {
      var l = Gv({
        draggables: r,
        impact: a,
        destination: i,
        viewport: o,
        forceShouldAnimate: !0,
      });
      return { impact: l, didDropInsideDroppable: !1 };
    }
    if (n.at.type === "REORDER")
      return { impact: n, didDropInsideDroppable: !0 };
    var u = M({}, n, { displaced: Jn });
    return { impact: u, didDropInsideDroppable: !0 };
  },
  Y1 = function (e) {
    var r = e.getState,
      t = e.dispatch;
    return function (n) {
      return function (i) {
        if (i.type !== "DROP") {
          n(i);
          return;
        }
        var o = r(),
          a = i.payload.reason;
        if (o.phase === "COLLECTING") {
          t(U1({ reason: a }));
          return;
        }
        if (o.phase !== "IDLE") {
          var l = o.phase === "DROP_PENDING" && o.isWaiting;
          l && P(!1),
            o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || P(!1);
          var u = o.critical,
            c = o.dimensions,
            f = c.draggables[o.critical.draggable.id],
            d = K1({
              reason: a,
              lastImpact: o.impact,
              afterCritical: o.afterCritical,
              onLiftImpact: o.onLiftImpact,
              home: o.dimensions.droppables[o.critical.droppable.id],
              viewport: o.viewport,
              draggables: o.dimensions.draggables,
            }),
            s = d.impact,
            p = d.didDropInsideDroppable,
            g = p ? ps(s) : null,
            y = p ? pa(s) : null,
            S = { index: u.draggable.index, droppableId: u.droppable.id },
            m = {
              draggableId: f.descriptor.id,
              type: f.descriptor.type,
              source: S,
              reason: a,
              mode: o.movementMode,
              destination: g,
              combine: y,
            },
            v = q1({
              impact: s,
              draggable: f,
              dimensions: c,
              viewport: o.viewport,
              afterCritical: o.afterCritical,
            }),
            h = {
              critical: o.critical,
              afterCritical: o.afterCritical,
              result: m,
              impact: s,
            },
            w = !Yr(o.current.client.offset, v) || Boolean(m.combine);
          if (!w) {
            t(Ss({ completed: h }));
            return;
          }
          var x = Q1({
              current: o.current.client.offset,
              destination: v,
              reason: a,
            }),
            b = { newHomeClientOffset: v, dropDuration: x, completed: h };
          t(j1(b));
        }
      };
    };
  },
  Jv = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  };
function X1(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: function (t) {
      (t.target !== window && t.target !== window.document) || e();
    },
  };
}
function J1(e) {
  var r = e.onWindowScroll;
  function t() {
    r(Jv());
  }
  var n = Yn(t),
    i = X1(n),
    o = Kr;
  function a() {
    return o !== Kr;
  }
  function l() {
    a() && P(!1), (o = tr(window, [i]));
  }
  function u() {
    a() || P(!1), n.cancel(), o(), (o = Kr);
  }
  return { start: l, stop: u, isActive: a };
}
var Z1 = function (r) {
    return (
      r.type === "DROP_COMPLETE" ||
      r.type === "DROP_ANIMATE" ||
      r.type === "FLUSH"
    );
  },
  ew = function (e) {
    var r = J1({
      onWindowScroll: function (n) {
        e.dispatch(L1({ newScroll: n }));
      },
    });
    return function (t) {
      return function (n) {
        !r.isActive() && n.type === "INITIAL_PUBLISH" && r.start(),
          r.isActive() && Z1(n) && r.stop(),
          t(n);
      };
    };
  },
  rw = function (e) {
    var r = !1,
      t = !1,
      n = setTimeout(function () {
        t = !0;
      }),
      i = function (a) {
        r || t || ((r = !0), e(a), clearTimeout(n));
      };
    return (
      (i.wasCalled = function () {
        return r;
      }),
      i
    );
  },
  tw = function () {
    var e = [],
      r = function (o) {
        var a = fs(e, function (c) {
          return c.timerId === o;
        });
        a === -1 && P(!1);
        var l = e.splice(a, 1),
          u = l[0];
        u.callback();
      },
      t = function (o) {
        var a = setTimeout(function () {
            return r(a);
          }),
          l = { timerId: a, callback: o };
        e.push(l);
      },
      n = function () {
        if (!!e.length) {
          var o = [].concat(e);
          (e.length = 0),
            o.forEach(function (a) {
              clearTimeout(a.timerId), a.callback();
            });
        }
      };
    return { add: t, flush: n };
  },
  nw = function (r, t) {
    return r == null && t == null
      ? !0
      : r == null || t == null
      ? !1
      : r.droppableId === t.droppableId && r.index === t.index;
  },
  iw = function (r, t) {
    return r == null && t == null
      ? !0
      : r == null || t == null
      ? !1
      : r.draggableId === t.draggableId && r.droppableId === t.droppableId;
  },
  ow = function (r, t) {
    if (r === t) return !0;
    var n =
        r.draggable.id === t.draggable.id &&
        r.draggable.droppableId === t.draggable.droppableId &&
        r.draggable.type === t.draggable.type &&
        r.draggable.index === t.draggable.index,
      i =
        r.droppable.id === t.droppable.id &&
        r.droppable.type === t.droppable.type;
    return n && i;
  },
  gn = function (r, t) {
    t();
  },
  Fi = function (r, t) {
    return {
      draggableId: r.draggable.id,
      type: r.droppable.type,
      source: { droppableId: r.droppable.id, index: r.draggable.index },
      mode: t,
    };
  },
  nl = function (r, t, n, i) {
    if (!r) {
      n(i(t));
      return;
    }
    var o = rw(n),
      a = { announce: o };
    r(t, a), o.wasCalled() || n(i(t));
  },
  aw = function (e, r) {
    var t = tw(),
      n = null,
      i = function (s, p) {
        n && P(!1),
          gn("onBeforeCapture", function () {
            var g = e().onBeforeCapture;
            if (g) {
              var y = { draggableId: s, mode: p };
              g(y);
            }
          });
      },
      o = function (s, p) {
        n && P(!1),
          gn("onBeforeDragStart", function () {
            var g = e().onBeforeDragStart;
            g && g(Fi(s, p));
          });
      },
      a = function (s, p) {
        n && P(!1);
        var g = Fi(s, p);
        (n = {
          mode: p,
          lastCritical: s,
          lastLocation: g.source,
          lastCombine: null,
        }),
          t.add(function () {
            gn("onDragStart", function () {
              return nl(e().onDragStart, g, r, Zi.onDragStart);
            });
          });
      },
      l = function (s, p) {
        var g = ps(p),
          y = pa(p);
        n || P(!1);
        var S = !ow(s, n.lastCritical);
        S && (n.lastCritical = s);
        var m = !nw(n.lastLocation, g);
        m && (n.lastLocation = g);
        var v = !iw(n.lastCombine, y);
        if ((v && (n.lastCombine = y), !(!S && !m && !v))) {
          var h = M({}, Fi(s, n.mode), { combine: y, destination: g });
          t.add(function () {
            gn("onDragUpdate", function () {
              return nl(e().onDragUpdate, h, r, Zi.onDragUpdate);
            });
          });
        }
      },
      u = function () {
        n || P(!1), t.flush();
      },
      c = function (s) {
        n || P(!1),
          (n = null),
          gn("onDragEnd", function () {
            return nl(e().onDragEnd, s, r, Zi.onDragEnd);
          });
      },
      f = function () {
        if (!!n) {
          var s = M({}, Fi(n.lastCritical, n.mode), {
            combine: null,
            destination: null,
            reason: "CANCEL",
          });
          c(s);
        }
      };
    return {
      beforeCapture: i,
      beforeStart: o,
      start: a,
      update: l,
      flush: u,
      drop: c,
      abort: f,
    };
  },
  lw = function (e, r) {
    var t = aw(e, r);
    return function (n) {
      return function (i) {
        return function (o) {
          if (o.type === "BEFORE_INITIAL_CAPTURE") {
            t.beforeCapture(o.payload.draggableId, o.payload.movementMode);
            return;
          }
          if (o.type === "INITIAL_PUBLISH") {
            var a = o.payload.critical;
            t.beforeStart(a, o.payload.movementMode),
              i(o),
              t.start(a, o.payload.movementMode);
            return;
          }
          if (o.type === "DROP_COMPLETE") {
            var l = o.payload.completed.result;
            t.flush(), i(o), t.drop(l);
            return;
          }
          if ((i(o), o.type === "FLUSH")) {
            t.abort();
            return;
          }
          var u = n.getState();
          u.phase === "DRAGGING" && t.update(u.critical, u.impact);
        };
      };
    };
  },
  uw = function (e) {
    return function (r) {
      return function (t) {
        if (t.type !== "DROP_ANIMATION_FINISHED") {
          r(t);
          return;
        }
        var n = e.getState();
        n.phase !== "DROP_ANIMATING" && P(!1),
          e.dispatch(Ss({ completed: n.completed }));
      };
    };
  },
  sw = function (e) {
    var r = null,
      t = null;
    function n() {
      t && (cancelAnimationFrame(t), (t = null)), r && (r(), (r = null));
    }
    return function (i) {
      return function (o) {
        if (
          ((o.type === "FLUSH" ||
            o.type === "DROP_COMPLETE" ||
            o.type === "DROP_ANIMATION_FINISHED") &&
            n(),
          i(o),
          o.type === "DROP_ANIMATE")
        ) {
          var a = {
            eventName: "scroll",
            options: { capture: !0, passive: !1, once: !0 },
            fn: function () {
              var u = e.getState();
              u.phase === "DROP_ANIMATING" && e.dispatch(Yv());
            },
          };
          t = requestAnimationFrame(function () {
            (t = null), (r = tr(window, [a]));
          });
        }
      };
    };
  },
  cw = function (e) {
    return function () {
      return function (r) {
        return function (t) {
          (t.type === "DROP_COMPLETE" ||
            t.type === "FLUSH" ||
            t.type === "DROP_ANIMATE") &&
            e.stopPublishing(),
            r(t);
        };
      };
    };
  },
  dw = function (e) {
    var r = !1;
    return function () {
      return function (t) {
        return function (n) {
          if (n.type === "INITIAL_PUBLISH") {
            (r = !0),
              e.tryRecordFocus(n.payload.critical.draggable.id),
              t(n),
              e.tryRestoreFocusRecorded();
            return;
          }
          if ((t(n), !!r)) {
            if (n.type === "FLUSH") {
              (r = !1), e.tryRestoreFocusRecorded();
              return;
            }
            if (n.type === "DROP_COMPLETE") {
              r = !1;
              var i = n.payload.completed.result;
              i.combine &&
                e.tryShiftRecord(i.draggableId, i.combine.draggableId),
                e.tryRestoreFocusRecorded();
            }
          }
        };
      };
    };
  },
  fw = function (r) {
    return (
      r.type === "DROP_COMPLETE" ||
      r.type === "DROP_ANIMATE" ||
      r.type === "FLUSH"
    );
  },
  pw = function (e) {
    return function (r) {
      return function (t) {
        return function (n) {
          if (fw(n)) {
            e.stop(), t(n);
            return;
          }
          if (n.type === "INITIAL_PUBLISH") {
            t(n);
            var i = r.getState();
            i.phase !== "DRAGGING" && P(!1), e.start(i);
            return;
          }
          t(n), e.scroll(r.getState());
        };
      };
    };
  },
  vw = function (e) {
    return function (r) {
      return function (t) {
        if ((r(t), t.type === "PUBLISH_WHILE_DRAGGING")) {
          var n = e.getState();
          n.phase === "DROP_PENDING" &&
            (n.isWaiting || e.dispatch(Kv({ reason: n.reason })));
        }
      };
    };
  },
  gw = rv,
  mw = function (e) {
    var r = e.dimensionMarshal,
      t = e.focusMarshal,
      n = e.styleMarshal,
      i = e.getResponders,
      o = e.announce,
      a = e.autoScroller;
    return ev(
      I1,
      gw(ey(G1(n), cw(r), W1(r), Y1, uw, sw, vw, pw(a), ew, dw(t), lw(i, o)))
    );
  },
  il = function () {
    return { additions: {}, removals: {}, modified: {} };
  };
function hw(e) {
  var r = e.registry,
    t = e.callbacks,
    n = il(),
    i = null,
    o = function () {
      i ||
        (t.collectionStarting(),
        (i = requestAnimationFrame(function () {
          i = null;
          var f = n,
            d = f.additions,
            s = f.removals,
            p = f.modified,
            g = Object.keys(d)
              .map(function (m) {
                return r.draggable.getById(m).getDimension(pe);
              })
              .sort(function (m, v) {
                return m.descriptor.index - v.descriptor.index;
              }),
            y = Object.keys(p).map(function (m) {
              var v = r.droppable.getById(m),
                h = v.callbacks.getScrollWhileDragging();
              return { droppableId: m, scroll: h };
            }),
            S = { additions: g, removals: Object.keys(s), modified: y };
          (n = il()), t.publish(S);
        })));
    },
    a = function (f) {
      var d = f.descriptor.id;
      (n.additions[d] = f),
        (n.modified[f.descriptor.droppableId] = !0),
        n.removals[d] && delete n.removals[d],
        o();
    },
    l = function (f) {
      var d = f.descriptor;
      (n.removals[d.id] = !0),
        (n.modified[d.droppableId] = !0),
        n.additions[d.id] && delete n.additions[d.id],
        o();
    },
    u = function () {
      !i || (cancelAnimationFrame(i), (i = null), (n = il()));
    };
  return { add: a, remove: l, stop: u };
}
var Zv = function (e) {
    var r = e.scrollHeight,
      t = e.scrollWidth,
      n = e.height,
      i = e.width,
      o = je({ x: t, y: r }, { x: i, y: n }),
      a = { x: Math.max(0, o.x), y: Math.max(0, o.y) };
    return a;
  },
  eg = function () {
    var e = document.documentElement;
    return e || P(!1), e;
  },
  rg = function () {
    var e = eg(),
      r = Zv({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight,
      });
    return r;
  },
  yw = function () {
    var e = Jv(),
      r = rg(),
      t = e.y,
      n = e.x,
      i = eg(),
      o = i.clientWidth,
      a = i.clientHeight,
      l = n + o,
      u = t + a,
      c = pr({ top: t, left: n, right: l, bottom: u }),
      f = {
        frame: c,
        scroll: {
          initial: e,
          current: e,
          max: r,
          diff: { value: pe, displacement: pe },
        },
      };
    return f;
  },
  ww = function (e) {
    var r = e.critical,
      t = e.scrollOptions,
      n = e.registry,
      i = yw(),
      o = i.scroll.current,
      a = r.droppable,
      l = n.droppable.getAllByType(a.type).map(function (d) {
        return d.callbacks.getDimensionAndWatchScroll(o, t);
      }),
      u = n.draggable.getAllByType(r.draggable.type).map(function (d) {
        return d.getDimension(o);
      }),
      c = { draggables: Ov(u), droppables: Nv(l) },
      f = { dimensions: c, critical: r, viewport: i };
    return f;
  };
function Pd(e, r, t) {
  if (t.descriptor.id === r.id || t.descriptor.type !== r.type) return !1;
  var n = e.droppable.getById(t.descriptor.droppableId);
  return n.descriptor.mode === "virtual";
}
var Sw = function (e, r) {
    var t = null,
      n = hw({
        callbacks: {
          publish: r.publishWhileDragging,
          collectionStarting: r.collectionStarting,
        },
        registry: e,
      }),
      i = function (p, g) {
        e.droppable.exists(p) || P(!1),
          t && r.updateDroppableIsEnabled({ id: p, isEnabled: g });
      },
      o = function (p, g) {
        !t ||
          (e.droppable.exists(p) || P(!1),
          r.updateDroppableIsCombineEnabled({ id: p, isCombineEnabled: g }));
      },
      a = function (p, g) {
        !t ||
          (e.droppable.exists(p) || P(!1),
          r.updateDroppableScroll({ id: p, newScroll: g }));
      },
      l = function (p, g) {
        !t || e.droppable.getById(p).callbacks.scroll(g);
      },
      u = function () {
        if (!!t) {
          n.stop();
          var p = t.critical.droppable;
          e.droppable.getAllByType(p.type).forEach(function (g) {
            return g.callbacks.dragStopped();
          }),
            t.unsubscribe(),
            (t = null);
        }
      },
      c = function (p) {
        t || P(!1);
        var g = t.critical.draggable;
        p.type === "ADDITION" && Pd(e, g, p.value) && n.add(p.value),
          p.type === "REMOVAL" && Pd(e, g, p.value) && n.remove(p.value);
      },
      f = function (p) {
        t && P(!1);
        var g = e.draggable.getById(p.draggableId),
          y = e.droppable.getById(g.descriptor.droppableId),
          S = { draggable: g.descriptor, droppable: y.descriptor },
          m = e.subscribe(c);
        return (
          (t = { critical: S, unsubscribe: m }),
          ww({ critical: S, registry: e, scrollOptions: p.scrollOptions })
        );
      },
      d = {
        updateDroppableIsEnabled: i,
        updateDroppableIsCombineEnabled: o,
        scrollDroppable: l,
        updateDroppableScroll: a,
        startPublishing: f,
        stopPublishing: u,
      };
    return d;
  },
  tg = function (e, r) {
    return e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === r
      ? !1
      : e.completed.result.reason === "DROP";
  },
  xw = function (e) {
    window.scrollBy(e.x, e.y);
  },
  bw = fe(function (e) {
    return fa(e).filter(function (r) {
      return !(!r.isEnabled || !r.frame);
    });
  }),
  Cw = function (r, t) {
    var n = ot(bw(t), function (i) {
      return i.frame || P(!1), _v(i.frame.pageMarginBox)(r);
    });
    return n;
  },
  Dw = function (e) {
    var r = e.center,
      t = e.destination,
      n = e.droppables;
    if (t) {
      var i = n[t];
      return i.frame ? i : null;
    }
    var o = Cw(r, n);
    return o;
  },
  Xr = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: function (r) {
      return Math.pow(r, 2);
    },
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  },
  Ew = function (e, r) {
    var t = e[r.size] * Xr.startFromPercentage,
      n = e[r.size] * Xr.maxScrollAtPercentage,
      i = { startScrollingFrom: t, maxScrollValueAt: n };
    return i;
  },
  ng = function (e) {
    var r = e.startOfRange,
      t = e.endOfRange,
      n = e.current,
      i = t - r;
    if (i === 0) return 0;
    var o = n - r,
      a = o / i;
    return a;
  },
  Cs = 1,
  Iw = function (e, r) {
    if (e > r.startScrollingFrom) return 0;
    if (e <= r.maxScrollValueAt) return Xr.maxPixelScroll;
    if (e === r.startScrollingFrom) return Cs;
    var t = ng({
        startOfRange: r.maxScrollValueAt,
        endOfRange: r.startScrollingFrom,
        current: e,
      }),
      n = 1 - t,
      i = Xr.maxPixelScroll * Xr.ease(n);
    return Math.ceil(i);
  },
  kd = Xr.durationDampening.accelerateAt,
  Nd = Xr.durationDampening.stopDampeningAt,
  Pw = function (e, r) {
    var t = r,
      n = Nd,
      i = Date.now(),
      o = i - t;
    if (o >= Nd) return e;
    if (o < kd) return Cs;
    var a = ng({ startOfRange: kd, endOfRange: n, current: o }),
      l = e * Xr.ease(a);
    return Math.ceil(l);
  },
  Od = function (e) {
    var r = e.distanceToEdge,
      t = e.thresholds,
      n = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      o = Iw(r, t);
    return o === 0 ? 0 : i ? Math.max(Pw(o, n), Cs) : o;
  },
  Td = function (e) {
    var r = e.container,
      t = e.distanceToEdges,
      n = e.dragStartTime,
      i = e.axis,
      o = e.shouldUseTimeDampening,
      a = Ew(r, i),
      l = t[i.end] < t[i.start];
    return l
      ? Od({
          distanceToEdge: t[i.end],
          thresholds: a,
          dragStartTime: n,
          shouldUseTimeDampening: o,
        })
      : -1 *
          Od({
            distanceToEdge: t[i.start],
            thresholds: a,
            dragStartTime: n,
            shouldUseTimeDampening: o,
          });
  },
  kw = function (e) {
    var r = e.container,
      t = e.subject,
      n = e.proposedScroll,
      i = t.height > r.height,
      o = t.width > r.width;
    return !o && !i ? n : o && i ? null : { x: o ? 0 : n.x, y: i ? 0 : n.y };
  },
  Nw = Pv(function (e) {
    return e === 0 ? 0 : e;
  }),
  ig = function (e) {
    var r = e.dragStartTime,
      t = e.container,
      n = e.subject,
      i = e.center,
      o = e.shouldUseTimeDampening,
      a = {
        top: i.y - t.top,
        right: t.right - i.x,
        bottom: t.bottom - i.y,
        left: i.x - t.left,
      },
      l = Td({
        container: t,
        distanceToEdges: a,
        dragStartTime: r,
        axis: vs,
        shouldUseTimeDampening: o,
      }),
      u = Td({
        container: t,
        distanceToEdges: a,
        dragStartTime: r,
        axis: Av,
        shouldUseTimeDampening: o,
      }),
      c = Nw({ x: u, y: l });
    if (Yr(c, pe)) return null;
    var f = kw({ container: t, subject: n, proposedScroll: c });
    return f ? (Yr(f, pe) ? null : f) : null;
  },
  Ow = Pv(function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  }),
  Ds = (function () {
    var e = function (t, n) {
      return t < 0 ? t : t > n ? t - n : 0;
    };
    return function (r) {
      var t = r.current,
        n = r.max,
        i = r.change,
        o = ye(t, i),
        a = { x: e(o.x, n.x), y: e(o.y, n.y) };
      return Yr(a, pe) ? null : a;
    };
  })(),
  og = function (r) {
    var t = r.max,
      n = r.current,
      i = r.change,
      o = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
      a = Ow(i),
      l = Ds({ max: o, current: n, change: a });
    return !l || (a.x !== 0 && l.x === 0) || (a.y !== 0 && l.y === 0);
  },
  Es = function (r, t) {
    return og({ current: r.scroll.current, max: r.scroll.max, change: t });
  },
  Tw = function (r, t) {
    if (!Es(r, t)) return null;
    var n = r.scroll.max,
      i = r.scroll.current;
    return Ds({ current: i, max: n, change: t });
  },
  Is = function (r, t) {
    var n = r.frame;
    return n
      ? og({ current: n.scroll.current, max: n.scroll.max, change: t })
      : !1;
  },
  Rw = function (r, t) {
    var n = r.frame;
    return !n || !Is(r, t)
      ? null
      : Ds({ current: n.scroll.current, max: n.scroll.max, change: t });
  },
  Aw = function (e) {
    var r = e.viewport,
      t = e.subject,
      n = e.center,
      i = e.dragStartTime,
      o = e.shouldUseTimeDampening,
      a = ig({
        dragStartTime: i,
        container: r.frame,
        subject: t,
        center: n,
        shouldUseTimeDampening: o,
      });
    return a && Es(r, a) ? a : null;
  },
  Bw = function (e) {
    var r = e.droppable,
      t = e.subject,
      n = e.center,
      i = e.dragStartTime,
      o = e.shouldUseTimeDampening,
      a = r.frame;
    if (!a) return null;
    var l = ig({
      dragStartTime: i,
      container: a.pageMarginBox,
      subject: t,
      center: n,
      shouldUseTimeDampening: o,
    });
    return l && Is(r, l) ? l : null;
  },
  Rd = function (e) {
    var r = e.state,
      t = e.dragStartTime,
      n = e.shouldUseTimeDampening,
      i = e.scrollWindow,
      o = e.scrollDroppable,
      a = r.current.page.borderBoxCenter,
      l = r.dimensions.draggables[r.critical.draggable.id],
      u = l.page.marginBox;
    if (r.isWindowScrollAllowed) {
      var c = r.viewport,
        f = Aw({
          dragStartTime: t,
          viewport: c,
          subject: u,
          center: a,
          shouldUseTimeDampening: n,
        });
      if (f) {
        i(f);
        return;
      }
    }
    var d = Dw({
      center: a,
      destination: We(r.impact),
      droppables: r.dimensions.droppables,
    });
    if (!!d) {
      var s = Bw({
        dragStartTime: t,
        droppable: d,
        subject: u,
        center: a,
        shouldUseTimeDampening: n,
      });
      s && o(d.descriptor.id, s);
    }
  },
  Lw = function (e) {
    var r = e.scrollWindow,
      t = e.scrollDroppable,
      n = Yn(r),
      i = Yn(t),
      o = null,
      a = function (f) {
        o || P(!1);
        var d = o,
          s = d.shouldUseTimeDampening,
          p = d.dragStartTime;
        Rd({
          state: f,
          scrollWindow: n,
          scrollDroppable: i,
          dragStartTime: p,
          shouldUseTimeDampening: s,
        });
      },
      l = function (f) {
        o && P(!1);
        var d = Date.now(),
          s = !1,
          p = function () {
            s = !0;
          };
        Rd({
          state: f,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: p,
          scrollDroppable: p,
        }),
          (o = { dragStartTime: d, shouldUseTimeDampening: s }),
          s && a(f);
      },
      u = function () {
        !o || (n.cancel(), i.cancel(), (o = null));
      };
    return { start: l, stop: u, scroll: a };
  },
  Mw = function (e) {
    var r = e.move,
      t = e.scrollDroppable,
      n = e.scrollWindow,
      i = function (c, f) {
        var d = ye(c.current.client.selection, f);
        r({ client: d });
      },
      o = function (c, f) {
        if (!Is(c, f)) return f;
        var d = Rw(c, f);
        if (!d) return t(c.descriptor.id, f), null;
        var s = je(f, d);
        t(c.descriptor.id, s);
        var p = je(f, s);
        return p;
      },
      a = function (c, f, d) {
        if (!c || !Es(f, d)) return d;
        var s = Tw(f, d);
        if (!s) return n(d), null;
        var p = je(d, s);
        n(p);
        var g = je(d, p);
        return g;
      },
      l = function (c) {
        var f = c.scrollJumpRequest;
        if (!!f) {
          var d = We(c.impact);
          d || P(!1);
          var s = o(c.dimensions.droppables[d], f);
          if (!!s) {
            var p = c.viewport,
              g = a(c.isWindowScrollAllowed, p, s);
            !g || i(c, g);
          }
        }
      };
    return l;
  },
  Fw = function (e) {
    var r = e.scrollDroppable,
      t = e.scrollWindow,
      n = e.move,
      i = Lw({ scrollWindow: t, scrollDroppable: r }),
      o = Mw({ move: n, scrollWindow: t, scrollDroppable: r }),
      a = function (c) {
        if (c.phase === "DRAGGING") {
          if (c.movementMode === "FLUID") {
            i.scroll(c);
            return;
          }
          !c.scrollJumpRequest || o(c);
        }
      },
      l = { scroll: a, start: i.start, stop: i.stop };
    return l;
  },
  Yt = "data-rbd",
  Xt = (function () {
    var e = Yt + "-drag-handle";
    return {
      base: e,
      draggableId: e + "-draggable-id",
      contextId: e + "-context-id",
    };
  })(),
  lu = (function () {
    var e = Yt + "-draggable";
    return { base: e, contextId: e + "-context-id", id: e + "-id" };
  })(),
  zw = (function () {
    var e = Yt + "-droppable";
    return { base: e, contextId: e + "-context-id", id: e + "-id" };
  })(),
  Ad = { contextId: Yt + "-scroll-container-context-id" },
  $w = function (r) {
    return function (t) {
      return "[" + t + '="' + r + '"]';
    };
  },
  mn = function (r, t) {
    return r
      .map(function (n) {
        var i = n.styles[t];
        return i ? n.selector + " { " + i + " }" : "";
      })
      .join(" ");
  },
  _w = "pointer-events: none;",
  jw = function (e) {
    var r = $w(e),
      t = (function () {
        var l = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: r(Xt.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: l,
            dragging: _w,
            dropAnimating: l,
          },
        };
      })(),
      n = (function () {
        var l =
          `
      transition: ` +
          Rn.outOfTheWay +
          `;
    `;
        return {
          selector: r(lu.contextId),
          styles: { dragging: l, dropAnimating: l, userCancel: l },
        };
      })(),
      i = {
        selector: r(zw.contextId),
        styles: { always: "overflow-anchor: none;" },
      },
      o = {
        selector: "body",
        styles: {
          dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
        },
      },
      a = [n, t, i, o];
    return {
      always: mn(a, "always"),
      resting: mn(a, "resting"),
      dragging: mn(a, "dragging"),
      dropAnimating: mn(a, "dropAnimating"),
      userCancel: mn(a, "userCancel"),
    };
  },
  Ge =
    typeof window != "undefined" &&
    typeof window.document != "undefined" &&
    typeof window.document.createElement != "undefined"
      ? I.exports.useLayoutEffect
      : I.exports.useEffect,
  ol = function () {
    var r = document.querySelector("head");
    return r || P(!1), r;
  },
  Bd = function (r) {
    var t = document.createElement("style");
    return r && t.setAttribute("nonce", r), (t.type = "text/css"), t;
  };
function Uw(e, r) {
  var t = $(
      function () {
        return jw(e);
      },
      [e]
    ),
    n = I.exports.useRef(null),
    i = I.exports.useRef(null),
    o = A(
      fe(function (d) {
        var s = i.current;
        s || P(!1), (s.textContent = d);
      }),
      []
    ),
    a = A(function (d) {
      var s = n.current;
      s || P(!1), (s.textContent = d);
    }, []);
  Ge(
    function () {
      (!n.current && !i.current) || P(!1);
      var d = Bd(r),
        s = Bd(r);
      return (
        (n.current = d),
        (i.current = s),
        d.setAttribute(Yt + "-always", e),
        s.setAttribute(Yt + "-dynamic", e),
        ol().appendChild(d),
        ol().appendChild(s),
        a(t.always),
        o(t.resting),
        function () {
          var p = function (y) {
            var S = y.current;
            S || P(!1), ol().removeChild(S), (y.current = null);
          };
          p(n), p(i);
        }
      );
    },
    [r, a, o, t.always, t.resting, e]
  );
  var l = A(
      function () {
        return o(t.dragging);
      },
      [o, t.dragging]
    ),
    u = A(
      function (d) {
        if (d === "DROP") {
          o(t.dropAnimating);
          return;
        }
        o(t.userCancel);
      },
      [o, t.dropAnimating, t.userCancel]
    ),
    c = A(
      function () {
        !i.current || o(t.resting);
      },
      [o, t.resting]
    ),
    f = $(
      function () {
        return { dragging: l, dropping: u, resting: c };
      },
      [l, u, c]
    );
  return f;
}
var ag = function (e) {
  return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
};
function ma(e) {
  return e instanceof ag(e).HTMLElement;
}
function Ww(e, r) {
  var t = "[" + Xt.contextId + '="' + e + '"]',
    n = kv(document.querySelectorAll(t));
  if (!n.length) return null;
  var i = ot(n, function (o) {
    return o.getAttribute(Xt.draggableId) === r;
  });
  return !i || !ma(i) ? null : i;
}
function Gw(e) {
  var r = I.exports.useRef({}),
    t = I.exports.useRef(null),
    n = I.exports.useRef(null),
    i = I.exports.useRef(!1),
    o = A(function (s, p) {
      var g = { id: s, focus: p };
      return (
        (r.current[s] = g),
        function () {
          var S = r.current,
            m = S[s];
          m !== g && delete S[s];
        }
      );
    }, []),
    a = A(
      function (s) {
        var p = Ww(e, s);
        p && p !== document.activeElement && p.focus();
      },
      [e]
    ),
    l = A(function (s, p) {
      t.current === s && (t.current = p);
    }, []),
    u = A(
      function () {
        n.current ||
          !i.current ||
          (n.current = requestAnimationFrame(function () {
            n.current = null;
            var s = t.current;
            s && a(s);
          }));
      },
      [a]
    ),
    c = A(function (s) {
      t.current = null;
      var p = document.activeElement;
      !p || (p.getAttribute(Xt.draggableId) === s && (t.current = s));
    }, []);
  Ge(function () {
    return (
      (i.current = !0),
      function () {
        i.current = !1;
        var s = n.current;
        s && cancelAnimationFrame(s);
      }
    );
  }, []);
  var f = $(
    function () {
      return {
        register: o,
        tryRecordFocus: c,
        tryRestoreFocusRecorded: u,
        tryShiftRecord: l,
      };
    },
    [o, c, u, l]
  );
  return f;
}
function Vw() {
  var e = { draggables: {}, droppables: {} },
    r = [];
  function t(d) {
    return (
      r.push(d),
      function () {
        var p = r.indexOf(d);
        p !== -1 && r.splice(p, 1);
      }
    );
  }
  function n(d) {
    r.length &&
      r.forEach(function (s) {
        return s(d);
      });
  }
  function i(d) {
    return e.draggables[d] || null;
  }
  function o(d) {
    var s = i(d);
    return s || P(!1), s;
  }
  var a = {
    register: function (s) {
      (e.draggables[s.descriptor.id] = s), n({ type: "ADDITION", value: s });
    },
    update: function (s, p) {
      var g = e.draggables[p.descriptor.id];
      !g ||
        (g.uniqueId === s.uniqueId &&
          (delete e.draggables[p.descriptor.id],
          (e.draggables[s.descriptor.id] = s)));
    },
    unregister: function (s) {
      var p = s.descriptor.id,
        g = i(p);
      !g ||
        (s.uniqueId === g.uniqueId &&
          (delete e.draggables[p], n({ type: "REMOVAL", value: s })));
    },
    getById: o,
    findById: i,
    exists: function (s) {
      return Boolean(i(s));
    },
    getAllByType: function (s) {
      return Ro(e.draggables).filter(function (p) {
        return p.descriptor.type === s;
      });
    },
  };
  function l(d) {
    return e.droppables[d] || null;
  }
  function u(d) {
    var s = l(d);
    return s || P(!1), s;
  }
  var c = {
    register: function (s) {
      e.droppables[s.descriptor.id] = s;
    },
    unregister: function (s) {
      var p = l(s.descriptor.id);
      !p || (s.uniqueId === p.uniqueId && delete e.droppables[s.descriptor.id]);
    },
    getById: u,
    findById: l,
    exists: function (s) {
      return Boolean(l(s));
    },
    getAllByType: function (s) {
      return Ro(e.droppables).filter(function (p) {
        return p.descriptor.type === s;
      });
    },
  };
  function f() {
    (e.draggables = {}), (e.droppables = {}), (r.length = 0);
  }
  return { draggable: a, droppable: c, subscribe: t, clean: f };
}
function Hw() {
  var e = $(Vw, []);
  return (
    I.exports.useEffect(
      function () {
        return function () {
          requestAnimationFrame(e.clean);
        };
      },
      [e]
    ),
    e
  );
}
var Ps = vr.createContext(null),
  Bo = function () {
    var e = document.body;
    return e || P(!1), e;
  },
  Qw = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)",
  },
  qw = function (r) {
    return "rbd-announcement-" + r;
  };
function Kw(e) {
  var r = $(
      function () {
        return qw(e);
      },
      [e]
    ),
    t = I.exports.useRef(null);
  I.exports.useEffect(
    function () {
      var o = document.createElement("div");
      return (
        (t.current = o),
        (o.id = r),
        o.setAttribute("aria-live", "assertive"),
        o.setAttribute("aria-atomic", "true"),
        M(o.style, Qw),
        Bo().appendChild(o),
        function () {
          setTimeout(function () {
            var u = Bo();
            u.contains(o) && u.removeChild(o),
              o === t.current && (t.current = null);
          });
        }
      );
    },
    [r]
  );
  var n = A(function (i) {
    var o = t.current;
    if (o) {
      o.textContent = i;
      return;
    }
  }, []);
  return n;
}
var Yw = 0,
  Xw = { separator: "::" };
function ks(e, r) {
  return (
    r === void 0 && (r = Xw),
    $(
      function () {
        return "" + e + r.separator + Yw++;
      },
      [r.separator, e]
    )
  );
}
function Jw(e) {
  var r = e.contextId,
    t = e.uniqueId;
  return "rbd-hidden-text-" + r + "-" + t;
}
function Zw(e) {
  var r = e.contextId,
    t = e.text,
    n = ks("hidden-text", { separator: "-" }),
    i = $(
      function () {
        return Jw({ contextId: r, uniqueId: n });
      },
      [n, r]
    );
  return (
    I.exports.useEffect(
      function () {
        var a = document.createElement("div");
        return (
          (a.id = i),
          (a.textContent = t),
          (a.style.display = "none"),
          Bo().appendChild(a),
          function () {
            var u = Bo();
            u.contains(a) && u.removeChild(a);
          }
        );
      },
      [i, t]
    ),
    i
  );
}
var ha = vr.createContext(null);
function lg(e) {
  var r = I.exports.useRef(e);
  return (
    I.exports.useEffect(function () {
      r.current = e;
    }),
    r
  );
}
function eS() {
  var e = null;
  function r() {
    return Boolean(e);
  }
  function t(a) {
    return a === e;
  }
  function n(a) {
    e && P(!1);
    var l = { abandon: a };
    return (e = l), l;
  }
  function i() {
    e || P(!1), (e = null);
  }
  function o() {
    e && (e.abandon(), i());
  }
  return { isClaimed: r, isActive: t, claim: n, release: i, tryAbandon: o };
}
var rS = 9,
  tS = 13,
  Ns = 27,
  ug = 32,
  nS = 33,
  iS = 34,
  oS = 35,
  aS = 36,
  lS = 37,
  uS = 38,
  sS = 39,
  cS = 40,
  zi,
  dS = ((zi = {}), (zi[tS] = !0), (zi[rS] = !0), zi),
  sg = function (e) {
    dS[e.keyCode] && e.preventDefault();
  },
  ya = (function () {
    var e = "visibilitychange";
    if (typeof document == "undefined") return e;
    var r = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e],
      t = ot(r, function (n) {
        return "on" + n in document;
      });
    return t || e;
  })(),
  cg = 0,
  Ld = 5;
function fS(e, r) {
  return Math.abs(r.x - e.x) >= Ld || Math.abs(r.y - e.y) >= Ld;
}
var Md = { type: "IDLE" };
function pS(e) {
  var r = e.cancel,
    t = e.completed,
    n = e.getPhase,
    i = e.setPhase;
  return [
    {
      eventName: "mousemove",
      fn: function (a) {
        var l = a.button,
          u = a.clientX,
          c = a.clientY;
        if (l === cg) {
          var f = { x: u, y: c },
            d = n();
          if (d.type === "DRAGGING") {
            a.preventDefault(), d.actions.move(f);
            return;
          }
          d.type !== "PENDING" && P(!1);
          var s = d.point;
          if (!!fS(s, f)) {
            a.preventDefault();
            var p = d.actions.fluidLift(f);
            i({ type: "DRAGGING", actions: p });
          }
        }
      },
    },
    {
      eventName: "mouseup",
      fn: function (a) {
        var l = n();
        if (l.type !== "DRAGGING") {
          r();
          return;
        }
        a.preventDefault(), l.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "mousedown",
      fn: function (a) {
        n().type === "DRAGGING" && a.preventDefault(), r();
      },
    },
    {
      eventName: "keydown",
      fn: function (a) {
        var l = n();
        if (l.type === "PENDING") {
          r();
          return;
        }
        if (a.keyCode === Ns) {
          a.preventDefault(), r();
          return;
        }
        sg(a);
      },
    },
    { eventName: "resize", fn: r },
    {
      eventName: "scroll",
      options: { passive: !0, capture: !1 },
      fn: function () {
        n().type === "PENDING" && r();
      },
    },
    {
      eventName: "webkitmouseforcedown",
      fn: function (a) {
        var l = n();
        if ((l.type === "IDLE" && P(!1), l.actions.shouldRespectForcePress())) {
          r();
          return;
        }
        a.preventDefault();
      },
    },
    { eventName: ya, fn: r },
  ];
}
function vS(e) {
  var r = I.exports.useRef(Md),
    t = I.exports.useRef(Kr),
    n = $(
      function () {
        return {
          eventName: "mousedown",
          fn: function (d) {
            if (
              !d.defaultPrevented &&
              d.button === cg &&
              !(d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
            ) {
              var s = e.findClosestDraggableId(d);
              if (!!s) {
                var p = e.tryGetLock(s, a, { sourceEvent: d });
                if (!!p) {
                  d.preventDefault();
                  var g = { x: d.clientX, y: d.clientY };
                  t.current(), c(p, g);
                }
              }
            }
          },
        };
      },
      [e]
    ),
    i = $(
      function () {
        return {
          eventName: "webkitmouseforcewillbegin",
          fn: function (d) {
            if (!d.defaultPrevented) {
              var s = e.findClosestDraggableId(d);
              if (!!s) {
                var p = e.findOptionsForDraggable(s);
                !p ||
                  p.shouldRespectForcePress ||
                  !e.canGetLock(s) ||
                  d.preventDefault();
              }
            }
          },
        };
      },
      [e]
    ),
    o = A(
      function () {
        var d = { passive: !1, capture: !0 };
        t.current = tr(window, [i, n], d);
      },
      [i, n]
    ),
    a = A(
      function () {
        var f = r.current;
        f.type !== "IDLE" && ((r.current = Md), t.current(), o());
      },
      [o]
    ),
    l = A(
      function () {
        var f = r.current;
        a(),
          f.type === "DRAGGING" &&
            f.actions.cancel({ shouldBlockNextClick: !0 }),
          f.type === "PENDING" && f.actions.abort();
      },
      [a]
    ),
    u = A(
      function () {
        var d = { capture: !0, passive: !1 },
          s = pS({
            cancel: l,
            completed: a,
            getPhase: function () {
              return r.current;
            },
            setPhase: function (g) {
              r.current = g;
            },
          });
        t.current = tr(window, s, d);
      },
      [l, a]
    ),
    c = A(
      function (d, s) {
        r.current.type !== "IDLE" && P(!1),
          (r.current = { type: "PENDING", point: s, actions: d }),
          u();
      },
      [u]
    );
  Ge(
    function () {
      return (
        o(),
        function () {
          t.current();
        }
      );
    },
    [o]
  );
}
var Dt;
function gS() {}
var mS =
  ((Dt = {}), (Dt[iS] = !0), (Dt[nS] = !0), (Dt[aS] = !0), (Dt[oS] = !0), Dt);
function hS(e, r) {
  function t() {
    r(), e.cancel();
  }
  function n() {
    r(), e.drop();
  }
  return [
    {
      eventName: "keydown",
      fn: function (o) {
        if (o.keyCode === Ns) {
          o.preventDefault(), t();
          return;
        }
        if (o.keyCode === ug) {
          o.preventDefault(), n();
          return;
        }
        if (o.keyCode === cS) {
          o.preventDefault(), e.moveDown();
          return;
        }
        if (o.keyCode === uS) {
          o.preventDefault(), e.moveUp();
          return;
        }
        if (o.keyCode === sS) {
          o.preventDefault(), e.moveRight();
          return;
        }
        if (o.keyCode === lS) {
          o.preventDefault(), e.moveLeft();
          return;
        }
        if (mS[o.keyCode]) {
          o.preventDefault();
          return;
        }
        sg(o);
      },
    },
    { eventName: "mousedown", fn: t },
    { eventName: "mouseup", fn: t },
    { eventName: "click", fn: t },
    { eventName: "touchstart", fn: t },
    { eventName: "resize", fn: t },
    { eventName: "wheel", fn: t, options: { passive: !0 } },
    { eventName: ya, fn: t },
  ];
}
function yS(e) {
  var r = I.exports.useRef(gS),
    t = $(
      function () {
        return {
          eventName: "keydown",
          fn: function (o) {
            if (o.defaultPrevented || o.keyCode !== ug) return;
            var a = e.findClosestDraggableId(o);
            if (!a) return;
            var l = e.tryGetLock(a, f, { sourceEvent: o });
            if (!l) return;
            o.preventDefault();
            var u = !0,
              c = l.snapLift();
            r.current();
            function f() {
              u || P(!1), (u = !1), r.current(), n();
            }
            r.current = tr(window, hS(c, f), { capture: !0, passive: !1 });
          },
        };
      },
      [e]
    ),
    n = A(
      function () {
        var o = { passive: !1, capture: !0 };
        r.current = tr(window, [t], o);
      },
      [t]
    );
  Ge(
    function () {
      return (
        n(),
        function () {
          r.current();
        }
      );
    },
    [n]
  );
}
var al = { type: "IDLE" },
  wS = 120,
  SS = 0.15;
function xS(e) {
  var r = e.cancel,
    t = e.getPhase;
  return [
    { eventName: "orientationchange", fn: r },
    { eventName: "resize", fn: r },
    {
      eventName: "contextmenu",
      fn: function (i) {
        i.preventDefault();
      },
    },
    {
      eventName: "keydown",
      fn: function (i) {
        if (t().type !== "DRAGGING") {
          r();
          return;
        }
        i.keyCode === Ns && i.preventDefault(), r();
      },
    },
    { eventName: ya, fn: r },
  ];
}
function bS(e) {
  var r = e.cancel,
    t = e.completed,
    n = e.getPhase;
  return [
    {
      eventName: "touchmove",
      options: { capture: !1 },
      fn: function (o) {
        var a = n();
        if (a.type !== "DRAGGING") {
          r();
          return;
        }
        a.hasMoved = !0;
        var l = o.touches[0],
          u = l.clientX,
          c = l.clientY,
          f = { x: u, y: c };
        o.preventDefault(), a.actions.move(f);
      },
    },
    {
      eventName: "touchend",
      fn: function (o) {
        var a = n();
        if (a.type !== "DRAGGING") {
          r();
          return;
        }
        o.preventDefault(), a.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "touchcancel",
      fn: function (o) {
        if (n().type !== "DRAGGING") {
          r();
          return;
        }
        o.preventDefault(), r();
      },
    },
    {
      eventName: "touchforcechange",
      fn: function (o) {
        var a = n();
        a.type === "IDLE" && P(!1);
        var l = o.touches[0];
        if (!!l) {
          var u = l.force >= SS;
          if (!!u) {
            var c = a.actions.shouldRespectForcePress();
            if (a.type === "PENDING") {
              c && r();
              return;
            }
            if (c) {
              if (a.hasMoved) {
                o.preventDefault();
                return;
              }
              r();
              return;
            }
            o.preventDefault();
          }
        }
      },
    },
    { eventName: ya, fn: r },
  ];
}
function CS(e) {
  var r = I.exports.useRef(al),
    t = I.exports.useRef(Kr),
    n = A(function () {
      return r.current;
    }, []),
    i = A(function (p) {
      r.current = p;
    }, []),
    o = $(
      function () {
        return {
          eventName: "touchstart",
          fn: function (p) {
            if (!p.defaultPrevented) {
              var g = e.findClosestDraggableId(p);
              if (!!g) {
                var y = e.tryGetLock(g, l, { sourceEvent: p });
                if (!!y) {
                  var S = p.touches[0],
                    m = S.clientX,
                    v = S.clientY,
                    h = { x: m, y: v };
                  t.current(), d(y, h);
                }
              }
            }
          },
        };
      },
      [e]
    ),
    a = A(
      function () {
        var p = { capture: !0, passive: !1 };
        t.current = tr(window, [o], p);
      },
      [o]
    ),
    l = A(
      function () {
        var s = r.current;
        s.type !== "IDLE" &&
          (s.type === "PENDING" && clearTimeout(s.longPressTimerId),
          i(al),
          t.current(),
          a());
      },
      [a, i]
    ),
    u = A(
      function () {
        var s = r.current;
        l(),
          s.type === "DRAGGING" &&
            s.actions.cancel({ shouldBlockNextClick: !0 }),
          s.type === "PENDING" && s.actions.abort();
      },
      [l]
    ),
    c = A(
      function () {
        var p = { capture: !0, passive: !1 },
          g = { cancel: u, completed: l, getPhase: n },
          y = tr(window, bS(g), p),
          S = tr(window, xS(g), p);
        t.current = function () {
          y(), S();
        };
      },
      [u, n, l]
    ),
    f = A(
      function () {
        var p = n();
        p.type !== "PENDING" && P(!1);
        var g = p.actions.fluidLift(p.point);
        i({ type: "DRAGGING", actions: g, hasMoved: !1 });
      },
      [n, i]
    ),
    d = A(
      function (p, g) {
        n().type !== "IDLE" && P(!1);
        var y = setTimeout(f, wS);
        i({ type: "PENDING", point: g, actions: p, longPressTimerId: y }), c();
      },
      [c, n, i, f]
    );
  Ge(
    function () {
      return (
        a(),
        function () {
          t.current();
          var g = n();
          g.type === "PENDING" && (clearTimeout(g.longPressTimerId), i(al));
        }
      );
    },
    [n, a, i]
  ),
    Ge(function () {
      var p = tr(window, [
        {
          eventName: "touchmove",
          fn: function () {},
          options: { capture: !1, passive: !1 },
        },
      ]);
      return p;
    }, []);
}
var DS = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function dg(e, r) {
  if (r == null) return !1;
  var t = Boolean(DS[r.tagName.toLowerCase()]);
  if (t) return !0;
  var n = r.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : r === e ? !1 : dg(e, r.parentElement);
}
function ES(e, r) {
  var t = r.target;
  return ma(t) ? dg(e, t) : !1;
}
var IS = function (e) {
  return pr(e.getBoundingClientRect()).center;
};
function PS(e) {
  return e instanceof ag(e).Element;
}
var kS = (function () {
  var e = "matches";
  if (typeof document == "undefined") return e;
  var r = [e, "msMatchesSelector", "webkitMatchesSelector"],
    t = ot(r, function (n) {
      return n in Element.prototype;
    });
  return t || e;
})();
function fg(e, r) {
  return e == null ? null : e[kS](r) ? e : fg(e.parentElement, r);
}
function NS(e, r) {
  return e.closest ? e.closest(r) : fg(e, r);
}
function OS(e) {
  return "[" + Xt.contextId + '="' + e + '"]';
}
function TS(e, r) {
  var t = r.target;
  if (!PS(t)) return null;
  var n = OS(e),
    i = NS(t, n);
  return !i || !ma(i) ? null : i;
}
function RS(e, r) {
  var t = TS(e, r);
  return t ? t.getAttribute(Xt.draggableId) : null;
}
function AS(e, r) {
  var t = "[" + lu.contextId + '="' + e + '"]',
    n = kv(document.querySelectorAll(t)),
    i = ot(n, function (o) {
      return o.getAttribute(lu.id) === r;
    });
  return !i || !ma(i) ? null : i;
}
function BS(e) {
  e.preventDefault();
}
function $i(e) {
  var r = e.expected,
    t = e.phase,
    n = e.isLockActive;
  return e.shouldWarn, !(!n() || r !== t);
}
function pg(e) {
  var r = e.lockAPI,
    t = e.store,
    n = e.registry,
    i = e.draggableId;
  if (r.isClaimed()) return !1;
  var o = n.draggable.findById(i);
  return !(!o || !o.options.isEnabled || !tg(t.getState(), i));
}
function LS(e) {
  var r = e.lockAPI,
    t = e.contextId,
    n = e.store,
    i = e.registry,
    o = e.draggableId,
    a = e.forceSensorStop,
    l = e.sourceEvent,
    u = pg({ lockAPI: r, store: n, registry: i, draggableId: o });
  if (!u) return null;
  var c = i.draggable.getById(o),
    f = AS(t, c.descriptor.id);
  if (!f || (l && !c.options.canDragInteractiveElements && ES(f, l)))
    return null;
  var d = r.claim(a || Kr),
    s = "PRE_DRAG";
  function p() {
    return c.options.shouldRespectForcePress;
  }
  function g() {
    return r.isActive(d);
  }
  function y(b, E) {
    $i({ expected: b, phase: s, isLockActive: g, shouldWarn: !0 }) &&
      n.dispatch(E());
  }
  var S = y.bind(null, "DRAGGING");
  function m(b) {
    function E() {
      r.release(), (s = "COMPLETED");
    }
    s !== "PRE_DRAG" && (E(), s !== "PRE_DRAG" && P(!1)),
      n.dispatch(k1(b.liftActionArgs)),
      (s = "DRAGGING");
    function k(R, T) {
      if (
        (T === void 0 && (T = { shouldBlockNextClick: !1 }),
        b.cleanup(),
        T.shouldBlockNextClick)
      ) {
        var F = tr(window, [
          {
            eventName: "click",
            fn: BS,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(F);
      }
      E(), n.dispatch(Kv({ reason: R }));
    }
    return M(
      {
        isActive: function () {
          return $i({
            expected: "DRAGGING",
            phase: s,
            isLockActive: g,
            shouldWarn: !1,
          });
        },
        shouldRespectForcePress: p,
        drop: function (T) {
          return k("DROP", T);
        },
        cancel: function (T) {
          return k("CANCEL", T);
        },
      },
      b.actions
    );
  }
  function v(b) {
    var E = Yn(function (R) {
        S(function () {
          return qv({ client: R });
        });
      }),
      k = m({
        liftActionArgs: { id: o, clientSelection: b, movementMode: "FLUID" },
        cleanup: function () {
          return E.cancel();
        },
        actions: { move: E },
      });
    return M({}, k, { move: E });
  }
  function h() {
    var b = {
      moveUp: function () {
        return S(F1);
      },
      moveRight: function () {
        return S($1);
      },
      moveDown: function () {
        return S(z1);
      },
      moveLeft: function () {
        return S(_1);
      },
    };
    return m({
      liftActionArgs: { id: o, clientSelection: IS(f), movementMode: "SNAP" },
      cleanup: Kr,
      actions: b,
    });
  }
  function w() {
    var b = $i({
      expected: "PRE_DRAG",
      phase: s,
      isLockActive: g,
      shouldWarn: !0,
    });
    b && r.release();
  }
  var x = {
    isActive: function () {
      return $i({
        expected: "PRE_DRAG",
        phase: s,
        isLockActive: g,
        shouldWarn: !1,
      });
    },
    shouldRespectForcePress: p,
    fluidLift: v,
    snapLift: h,
    abort: w,
  };
  return x;
}
var MS = [vS, yS, CS];
function FS(e) {
  var r = e.contextId,
    t = e.store,
    n = e.registry,
    i = e.customSensors,
    o = e.enableDefaultSensors,
    a = [].concat(o ? MS : [], i || []),
    l = I.exports.useState(function () {
      return eS();
    })[0],
    u = A(
      function (v, h) {
        v.isDragging && !h.isDragging && l.tryAbandon();
      },
      [l]
    );
  Ge(
    function () {
      var v = t.getState(),
        h = t.subscribe(function () {
          var w = t.getState();
          u(v, w), (v = w);
        });
      return h;
    },
    [l, t, u]
  ),
    Ge(
      function () {
        return l.tryAbandon;
      },
      [l.tryAbandon]
    );
  for (
    var c = A(
        function (m) {
          return pg({ lockAPI: l, registry: n, store: t, draggableId: m });
        },
        [l, n, t]
      ),
      f = A(
        function (m, v, h) {
          return LS({
            lockAPI: l,
            registry: n,
            contextId: r,
            store: t,
            draggableId: m,
            forceSensorStop: v,
            sourceEvent: h && h.sourceEvent ? h.sourceEvent : null,
          });
        },
        [r, l, n, t]
      ),
      d = A(
        function (m) {
          return RS(r, m);
        },
        [r]
      ),
      s = A(
        function (m) {
          var v = n.draggable.findById(m);
          return v ? v.options : null;
        },
        [n.draggable]
      ),
      p = A(
        function () {
          !l.isClaimed() ||
            (l.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(ws()));
        },
        [l, t]
      ),
      g = A(l.isClaimed, [l]),
      y = $(
        function () {
          return {
            canGetLock: c,
            tryGetLock: f,
            findClosestDraggableId: d,
            findOptionsForDraggable: s,
            tryReleaseLock: p,
            isLockClaimed: g,
          };
        },
        [c, f, d, s, p, g]
      ),
      S = 0;
    S < a.length;
    S++
  )
    a[S](y);
}
var zS = function (r) {
  return {
    onBeforeCapture: r.onBeforeCapture,
    onBeforeDragStart: r.onBeforeDragStart,
    onDragStart: r.onDragStart,
    onDragEnd: r.onDragEnd,
    onDragUpdate: r.onDragUpdate,
  };
};
function hn(e) {
  return e.current || P(!1), e.current;
}
function $S(e) {
  var r = e.contextId,
    t = e.setCallbacks,
    n = e.sensors,
    i = e.nonce,
    o = e.dragHandleUsageInstructions,
    a = I.exports.useRef(null),
    l = lg(e),
    u = A(
      function () {
        return zS(l.current);
      },
      [l]
    ),
    c = Kw(r),
    f = Zw({ contextId: r, text: o }),
    d = Uw(r, i),
    s = A(function (R) {
      hn(a).dispatch(R);
    }, []),
    p = $(
      function () {
        return od(
          {
            publishWhileDragging: O1,
            updateDroppableScroll: R1,
            updateDroppableIsEnabled: A1,
            updateDroppableIsCombineEnabled: B1,
            collectionStarting: T1,
          },
          s
        );
      },
      [s]
    ),
    g = Hw(),
    y = $(
      function () {
        return Sw(g, p);
      },
      [g, p]
    ),
    S = $(
      function () {
        return Fw(
          M(
            { scrollWindow: xw, scrollDroppable: y.scrollDroppable },
            od({ move: qv }, s)
          )
        );
      },
      [y.scrollDroppable, s]
    ),
    m = Gw(r),
    v = $(
      function () {
        return mw({
          announce: c,
          autoScroller: S,
          dimensionMarshal: y,
          focusMarshal: m,
          getResponders: u,
          styleMarshal: d,
        });
      },
      [c, S, y, m, u, d]
    );
  a.current = v;
  var h = A(function () {
      var R = hn(a),
        T = R.getState();
      T.phase !== "IDLE" && R.dispatch(ws());
    }, []),
    w = A(function () {
      var R = hn(a).getState();
      return R.isDragging || R.phase === "DROP_ANIMATING";
    }, []),
    x = $(
      function () {
        return { isDragging: w, tryAbort: h };
      },
      [w, h]
    );
  t(x);
  var b = A(function (R) {
      return tg(hn(a).getState(), R);
    }, []),
    E = A(function () {
      return st(hn(a).getState());
    }, []),
    k = $(
      function () {
        return {
          marshal: y,
          focus: m,
          contextId: r,
          canLift: b,
          isMovementAllowed: E,
          dragHandleUsageInstructionsId: f,
          registry: g,
        };
      },
      [r, y, f, m, b, E, g]
    );
  return (
    FS({
      contextId: r,
      store: v,
      registry: g,
      customSensors: n,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    I.exports.useEffect(
      function () {
        return h;
      },
      [h]
    ),
    C(ha.Provider, {
      value: k,
      children: C(sy, { context: Ps, store: v, children: e.children }),
    })
  );
}
var _S = 0;
function jS() {
  return $(function () {
    return "" + _S++;
  }, []);
}
function US(e) {
  var r = jS(),
    t = e.dragHandleUsageInstructions || Zi.dragHandleUsageInstructions;
  return C(y0, {
    children: function (n) {
      return C($S, {
        nonce: e.nonce,
        contextId: r,
        setCallbacks: n,
        dragHandleUsageInstructions: t,
        enableDefaultSensors: e.enableDefaultSensors,
        sensors: e.sensors,
        onBeforeCapture: e.onBeforeCapture,
        onBeforeDragStart: e.onBeforeDragStart,
        onDragStart: e.onDragStart,
        onDragUpdate: e.onDragUpdate,
        onDragEnd: e.onDragEnd,
        children: e.children,
      });
    },
  });
}
var vg = function (r) {
    return function (t) {
      return r === t;
    };
  },
  WS = vg("scroll"),
  GS = vg("auto"),
  Fd = function (r, t) {
    return t(r.overflowX) || t(r.overflowY);
  },
  VS = function (r) {
    var t = window.getComputedStyle(r),
      n = { overflowX: t.overflowX, overflowY: t.overflowY };
    return Fd(n, WS) || Fd(n, GS);
  },
  HS = function () {
    return !1;
  },
  QS = function e(r) {
    return r == null
      ? null
      : r === document.body
      ? HS()
        ? r
        : null
      : r === document.documentElement
      ? null
      : VS(r)
      ? r
      : e(r.parentElement);
  },
  uu = function (e) {
    return { x: e.scrollLeft, y: e.scrollTop };
  },
  qS = function e(r) {
    if (!r) return !1;
    var t = window.getComputedStyle(r);
    return t.position === "fixed" ? !0 : e(r.parentElement);
  },
  KS = function (e) {
    var r = QS(e),
      t = qS(e);
    return { closestScrollable: r, isFixedOnPage: t };
  },
  YS = function (e) {
    var r = e.descriptor,
      t = e.isEnabled,
      n = e.isCombineEnabled,
      i = e.isFixedOnPage,
      o = e.direction,
      a = e.client,
      l = e.page,
      u = e.closest,
      c = (function () {
        if (!u) return null;
        var p = u.scrollSize,
          g = u.client,
          y = Zv({
            scrollHeight: p.scrollHeight,
            scrollWidth: p.scrollWidth,
            height: g.paddingBox.height,
            width: g.paddingBox.width,
          });
        return {
          pageMarginBox: u.page.marginBox,
          frameClient: g,
          scrollSize: p,
          shouldClipSubject: u.shouldClipSubject,
          scroll: {
            initial: u.scroll,
            current: u.scroll,
            max: y,
            diff: { value: pe, displacement: pe },
          },
        };
      })(),
      f = o === "vertical" ? vs : Av,
      d = Kt({ page: l, withPlaceholder: null, axis: f, frame: c }),
      s = {
        descriptor: r,
        isCombineEnabled: n,
        isFixedOnPage: i,
        axis: f,
        isEnabled: t,
        client: a,
        page: l,
        frame: c,
        subject: d,
      };
    return s;
  },
  XS = function (r, t) {
    var n = Cv(r);
    if (!t || r !== t) return n;
    var i = n.paddingBox.top - t.scrollTop,
      o = n.paddingBox.left - t.scrollLeft,
      a = i + t.scrollHeight,
      l = o + t.scrollWidth,
      u = { top: i, right: l, bottom: a, left: o },
      c = ss(u, n.border),
      f = cs({
        borderBox: c,
        margin: n.margin,
        border: n.border,
        padding: n.padding,
      });
    return f;
  },
  JS = function (e) {
    var r = e.ref,
      t = e.descriptor,
      n = e.env,
      i = e.windowScroll,
      o = e.direction,
      a = e.isDropDisabled,
      l = e.isCombineEnabled,
      u = e.shouldClipSubject,
      c = n.closestScrollable,
      f = XS(r, c),
      d = No(f, i),
      s = (function () {
        if (!c) return null;
        var g = Cv(c),
          y = { scrollHeight: c.scrollHeight, scrollWidth: c.scrollWidth };
        return {
          client: g,
          page: No(g, i),
          scroll: uu(c),
          scrollSize: y,
          shouldClipSubject: u,
        };
      })(),
      p = YS({
        descriptor: t,
        isEnabled: !a,
        isCombineEnabled: l,
        isFixedOnPage: n.isFixedOnPage,
        direction: o,
        client: f,
        page: d,
        closest: s,
      });
    return p;
  },
  ZS = { passive: !1 },
  ex = { passive: !0 },
  zd = function (e) {
    return e.shouldPublishImmediately ? ZS : ex;
  };
function Lo(e) {
  var r = I.exports.useContext(e);
  return r || P(!1), r;
}
var _i = function (r) {
  return (r && r.env.closestScrollable) || null;
};
function rx(e) {
  var r = I.exports.useRef(null),
    t = Lo(ha),
    n = ks("droppable"),
    i = t.registry,
    o = t.marshal,
    a = lg(e),
    l = $(
      function () {
        return { id: e.droppableId, type: e.type, mode: e.mode };
      },
      [e.droppableId, e.mode, e.type]
    ),
    u = I.exports.useRef(l),
    c = $(
      function () {
        return fe(function (w, x) {
          r.current || P(!1);
          var b = { x: w, y: x };
          o.updateDroppableScroll(l.id, b);
        });
      },
      [l.id, o]
    ),
    f = A(function () {
      var w = r.current;
      return !w || !w.env.closestScrollable ? pe : uu(w.env.closestScrollable);
    }, []),
    d = A(
      function () {
        var w = f();
        c(w.x, w.y);
      },
      [f, c]
    ),
    s = $(
      function () {
        return Yn(d);
      },
      [d]
    ),
    p = A(
      function () {
        var w = r.current,
          x = _i(w);
        (w && x) || P(!1);
        var b = w.scrollOptions;
        if (b.shouldPublishImmediately) {
          d();
          return;
        }
        s();
      },
      [s, d]
    ),
    g = A(
      function (w, x) {
        r.current && P(!1);
        var b = a.current,
          E = b.getDroppableRef();
        E || P(!1);
        var k = KS(E),
          R = { ref: E, descriptor: l, env: k, scrollOptions: x };
        r.current = R;
        var T = JS({
            ref: E,
            descriptor: l,
            env: k,
            windowScroll: w,
            direction: b.direction,
            isDropDisabled: b.isDropDisabled,
            isCombineEnabled: b.isCombineEnabled,
            shouldClipSubject: !b.ignoreContainerClipping,
          }),
          F = k.closestScrollable;
        return (
          F &&
            (F.setAttribute(Ad.contextId, t.contextId),
            F.addEventListener("scroll", p, zd(R.scrollOptions))),
          T
        );
      },
      [t.contextId, l, p, a]
    ),
    y = A(function () {
      var w = r.current,
        x = _i(w);
      return (w && x) || P(!1), uu(x);
    }, []),
    S = A(
      function () {
        var w = r.current;
        w || P(!1);
        var x = _i(w);
        (r.current = null),
          x &&
            (s.cancel(),
            x.removeAttribute(Ad.contextId),
            x.removeEventListener("scroll", p, zd(w.scrollOptions)));
      },
      [p, s]
    ),
    m = A(function (w) {
      var x = r.current;
      x || P(!1);
      var b = _i(x);
      b || P(!1), (b.scrollTop += w.y), (b.scrollLeft += w.x);
    }, []),
    v = $(
      function () {
        return {
          getDimensionAndWatchScroll: g,
          getScrollWhileDragging: y,
          dragStopped: S,
          scroll: m,
        };
      },
      [S, g, y, m]
    ),
    h = $(
      function () {
        return { uniqueId: n, descriptor: l, callbacks: v };
      },
      [v, l, n]
    );
  Ge(
    function () {
      return (
        (u.current = h.descriptor),
        i.droppable.register(h),
        function () {
          r.current && S(), i.droppable.unregister(h);
        }
      );
    },
    [v, l, S, h, o, i.droppable]
  ),
    Ge(
      function () {
        !r.current ||
          o.updateDroppableIsEnabled(u.current.id, !e.isDropDisabled);
      },
      [e.isDropDisabled, o]
    ),
    Ge(
      function () {
        !r.current ||
          o.updateDroppableIsCombineEnabled(u.current.id, e.isCombineEnabled);
      },
      [e.isCombineEnabled, o]
    );
}
function ll() {}
var $d = { width: 0, height: 0, margin: D0 },
  tx = function (r) {
    var t = r.isAnimatingOpenOnMount,
      n = r.placeholder,
      i = r.animate;
    return t || i === "close"
      ? $d
      : {
          height: n.client.borderBox.height,
          width: n.client.borderBox.width,
          margin: n.client.margin,
        };
  },
  nx = function (r) {
    var t = r.isAnimatingOpenOnMount,
      n = r.placeholder,
      i = r.animate,
      o = tx({ isAnimatingOpenOnMount: t, placeholder: n, animate: i });
    return {
      display: n.display,
      boxSizing: "border-box",
      width: o.width,
      height: o.height,
      marginTop: o.margin.top,
      marginRight: o.margin.right,
      marginBottom: o.margin.bottom,
      marginLeft: o.margin.left,
      flexShrink: "0",
      flexGrow: "0",
      pointerEvents: "none",
      transition: i !== "none" ? Rn.placeholder : null,
    };
  };
function ix(e) {
  var r = I.exports.useRef(null),
    t = A(function () {
      !r.current || (clearTimeout(r.current), (r.current = null));
    }, []),
    n = e.animate,
    i = e.onTransitionEnd,
    o = e.onClose,
    a = e.contextId,
    l = I.exports.useState(e.animate === "open"),
    u = l[0],
    c = l[1];
  I.exports.useEffect(
    function () {
      return u
        ? n !== "open"
          ? (t(), c(!1), ll)
          : r.current
          ? ll
          : ((r.current = setTimeout(function () {
              (r.current = null), c(!1);
            })),
            t)
        : ll;
    },
    [n, u, t]
  );
  var f = A(
      function (s) {
        s.propertyName === "height" && (i(), n === "close" && o());
      },
      [n, o, i]
    ),
    d = nx({
      isAnimatingOpenOnMount: u,
      animate: e.animate,
      placeholder: e.placeholder,
    });
  return vr.createElement(e.placeholder.tagName, {
    style: d,
    "data-rbd-placeholder-context-id": a,
    onTransitionEnd: f,
    ref: e.innerRef,
  });
}
var ox = vr.memo(ix),
  Os = vr.createContext(null),
  ax = (function (e) {
    Zp(r, e);
    function r() {
      for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
        o[a] = arguments[a];
      return (
        (n = e.call.apply(e, [this].concat(o)) || this),
        (n.state = {
          isVisible: Boolean(n.props.on),
          data: n.props.on,
          animate: n.props.shouldAnimate && n.props.on ? "open" : "none",
        }),
        (n.onClose = function () {
          n.state.animate === "close" && n.setState({ isVisible: !1 });
        }),
        n
      );
    }
    r.getDerivedStateFromProps = function (i, o) {
      return i.shouldAnimate
        ? i.on
          ? { isVisible: !0, data: i.on, animate: "open" }
          : o.isVisible
          ? { isVisible: !0, data: o.data, animate: "close" }
          : { isVisible: !1, animate: "close", data: null }
        : { isVisible: Boolean(i.on), data: i.on, animate: "none" };
    };
    var t = r.prototype;
    return (
      (t.render = function () {
        if (!this.state.isVisible) return null;
        var i = {
          onClose: this.onClose,
          data: this.state.data,
          animate: this.state.animate,
        };
        return this.props.children(i);
      }),
      r
    );
  })(vr.PureComponent),
  _d = { dragging: 5e3, dropAnimating: 4500 },
  lx = function (r, t) {
    return t ? Rn.drop(t.duration) : r ? Rn.snap : Rn.fluid;
  },
  ux = function (r, t) {
    return r ? (t ? ei.opacity.drop : ei.opacity.combining) : null;
  },
  sx = function (r) {
    return r.forceShouldAnimate != null
      ? r.forceShouldAnimate
      : r.mode === "SNAP";
  };
function cx(e) {
  var r = e.dimension,
    t = r.client,
    n = e.offset,
    i = e.combineWith,
    o = e.dropping,
    a = Boolean(i),
    l = sx(e),
    u = Boolean(o),
    c = u ? ou.drop(n, a) : ou.moveTo(n),
    f = {
      position: "fixed",
      top: t.marginBox.top,
      left: t.marginBox.left,
      boxSizing: "border-box",
      width: t.borderBox.width,
      height: t.borderBox.height,
      transition: lx(l, o),
      transform: c,
      opacity: ux(a, u),
      zIndex: u ? _d.dropAnimating : _d.dragging,
      pointerEvents: "none",
    };
  return f;
}
function dx(e) {
  return {
    transform: ou.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? null : "none",
  };
}
function fx(e) {
  return e.type === "DRAGGING" ? cx(e) : dx(e);
}
function px(e, r, t) {
  t === void 0 && (t = pe);
  var n = window.getComputedStyle(r),
    i = r.getBoundingClientRect(),
    o = bv(i, n),
    a = No(o, t),
    l = { client: o, tagName: r.tagName.toLowerCase(), display: n.display },
    u = { x: o.marginBox.width, y: o.marginBox.height },
    c = { descriptor: e, placeholder: l, displaceBy: u, client: o, page: a };
  return c;
}
function vx(e) {
  var r = ks("draggable"),
    t = e.descriptor,
    n = e.registry,
    i = e.getDraggableRef,
    o = e.canDragInteractiveElements,
    a = e.shouldRespectForcePress,
    l = e.isEnabled,
    u = $(
      function () {
        return {
          canDragInteractiveElements: o,
          shouldRespectForcePress: a,
          isEnabled: l,
        };
      },
      [o, l, a]
    ),
    c = A(
      function (p) {
        var g = i();
        return g || P(!1), px(t, g, p);
      },
      [t, i]
    ),
    f = $(
      function () {
        return { uniqueId: r, descriptor: t, options: u, getDimension: c };
      },
      [t, c, u, r]
    ),
    d = I.exports.useRef(f),
    s = I.exports.useRef(!0);
  Ge(
    function () {
      return (
        n.draggable.register(d.current),
        function () {
          return n.draggable.unregister(d.current);
        }
      );
    },
    [n.draggable]
  ),
    Ge(
      function () {
        if (s.current) {
          s.current = !1;
          return;
        }
        var p = d.current;
        (d.current = f), n.draggable.update(f, p);
      },
      [f, n.draggable]
    );
}
function gx(e) {
  e.preventDefault();
}
function mx(e) {
  var r = I.exports.useRef(null),
    t = A(function (R) {
      r.current = R;
    }, []),
    n = A(function () {
      return r.current;
    }, []),
    i = Lo(ha),
    o = i.contextId,
    a = i.dragHandleUsageInstructionsId,
    l = i.registry,
    u = Lo(Os),
    c = u.type,
    f = u.droppableId,
    d = $(
      function () {
        return { id: e.draggableId, index: e.index, type: c, droppableId: f };
      },
      [e.draggableId, e.index, c, f]
    ),
    s = e.children,
    p = e.draggableId,
    g = e.isEnabled,
    y = e.shouldRespectForcePress,
    S = e.canDragInteractiveElements,
    m = e.isClone,
    v = e.mapped,
    h = e.dropAnimationFinished;
  if (!m) {
    var w = $(
      function () {
        return {
          descriptor: d,
          registry: l,
          getDraggableRef: n,
          canDragInteractiveElements: S,
          shouldRespectForcePress: y,
          isEnabled: g,
        };
      },
      [d, l, n, S, y, g]
    );
    vx(w);
  }
  var x = $(
      function () {
        return g
          ? {
              tabIndex: 0,
              role: "button",
              "aria-describedby": a,
              "data-rbd-drag-handle-draggable-id": p,
              "data-rbd-drag-handle-context-id": o,
              draggable: !1,
              onDragStart: gx,
            }
          : null;
      },
      [o, a, p, g]
    ),
    b = A(
      function (R) {
        v.type === "DRAGGING" &&
          (!v.dropping || (R.propertyName === "transform" && h()));
      },
      [h, v]
    ),
    E = $(
      function () {
        var R = fx(v),
          T = v.type === "DRAGGING" && v.dropping ? b : null,
          F = {
            innerRef: t,
            draggableProps: {
              "data-rbd-draggable-context-id": o,
              "data-rbd-draggable-id": p,
              style: R,
              onTransitionEnd: T,
            },
            dragHandleProps: x,
          };
        return F;
      },
      [o, x, p, v, b, t]
    ),
    k = $(
      function () {
        return {
          draggableId: d.id,
          type: d.type,
          source: { index: d.index, droppableId: d.droppableId },
        };
      },
      [d.droppableId, d.id, d.index, d.type]
    );
  return s(E, v.snapshot, k);
}
var gg = function (e, r) {
    return e === r;
  },
  mg = function (e) {
    var r = e.combine,
      t = e.destination;
    return t ? t.droppableId : r ? r.droppableId : null;
  },
  hx = function (r) {
    return r.combine ? r.combine.draggableId : null;
  },
  yx = function (r) {
    return r.at && r.at.type === "COMBINE" ? r.at.combine.draggableId : null;
  };
function wx() {
  var e = fe(function (i, o) {
      return { x: i, y: o };
    }),
    r = fe(function (i, o, a, l, u) {
      return {
        isDragging: !0,
        isClone: o,
        isDropAnimating: Boolean(u),
        dropAnimation: u,
        mode: i,
        draggingOver: a,
        combineWith: l,
        combineTargetFor: null,
      };
    }),
    t = fe(function (i, o, a, l, u, c, f) {
      return {
        mapped: {
          type: "DRAGGING",
          dropping: null,
          draggingOver: u,
          combineWith: c,
          mode: o,
          offset: i,
          dimension: a,
          forceShouldAnimate: f,
          snapshot: r(o, l, u, c, null),
        },
      };
    }),
    n = function (o, a) {
      if (o.isDragging) {
        if (o.critical.draggable.id !== a.draggableId) return null;
        var l = o.current.client.offset,
          u = o.dimensions.draggables[a.draggableId],
          c = We(o.impact),
          f = yx(o.impact),
          d = o.forceShouldAnimate;
        return t(e(l.x, l.y), o.movementMode, u, a.isClone, c, f, d);
      }
      if (o.phase === "DROP_ANIMATING") {
        var s = o.completed;
        if (s.result.draggableId !== a.draggableId) return null;
        var p = a.isClone,
          g = o.dimensions.draggables[a.draggableId],
          y = s.result,
          S = y.mode,
          m = mg(y),
          v = hx(y),
          h = o.dropDuration,
          w = {
            duration: h,
            curve: xs.drop,
            moveTo: o.newHomeClientOffset,
            opacity: v ? ei.opacity.drop : null,
            scale: v ? ei.scale.drop : null,
          };
        return {
          mapped: {
            type: "DRAGGING",
            offset: o.newHomeClientOffset,
            dimension: g,
            dropping: w,
            draggingOver: m,
            combineWith: v,
            mode: S,
            forceShouldAnimate: null,
            snapshot: r(S, p, m, v, w),
          },
        };
      }
      return null;
    };
  return n;
}
function hg(e) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null,
  };
}
var Sx = {
  mapped: {
    type: "SECONDARY",
    offset: pe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: hg(null),
  },
};
function xx() {
  var e = fe(function (a, l) {
      return { x: a, y: l };
    }),
    r = fe(hg),
    t = fe(function (a, l, u) {
      return (
        l === void 0 && (l = null),
        {
          mapped: {
            type: "SECONDARY",
            offset: a,
            combineTargetFor: l,
            shouldAnimateDisplacement: u,
            snapshot: r(l),
          },
        }
      );
    }),
    n = function (l) {
      return l ? t(pe, l, !0) : null;
    },
    i = function (l, u, c, f) {
      var d = c.displaced.visible[l],
        s = Boolean(f.inVirtualList && f.effected[l]),
        p = pa(c),
        g = p && p.draggableId === l ? u : null;
      if (!d) {
        if (!s) return n(g);
        if (c.displaced.invisible[l]) return null;
        var y = rn(f.displacedBy.point),
          S = e(y.x, y.y);
        return t(S, g, !0);
      }
      if (s) return n(g);
      var m = c.displacedBy.point,
        v = e(m.x, m.y);
      return t(v, g, d.shouldAnimate);
    },
    o = function (l, u) {
      if (l.isDragging)
        return l.critical.draggable.id === u.draggableId
          ? null
          : i(
              u.draggableId,
              l.critical.draggable.id,
              l.impact,
              l.afterCritical
            );
      if (l.phase === "DROP_ANIMATING") {
        var c = l.completed;
        return c.result.draggableId === u.draggableId
          ? null
          : i(u.draggableId, c.result.draggableId, c.impact, c.afterCritical);
      }
      return null;
    };
  return o;
}
var bx = function () {
    var r = wx(),
      t = xx(),
      n = function (o, a) {
        return r(o, a) || t(o, a) || Sx;
      };
    return n;
  },
  Cx = { dropAnimationFinished: Yv },
  Dx = Sv(bx, Cx, null, { context: Ps, pure: !0, areStatePropsEqual: gg })(mx);
function yg(e) {
  var r = Lo(Os),
    t = r.isUsingCloneFor;
  return t === e.draggableId && !e.isClone ? null : C(Dx, ce({}, e));
}
function Ex(e) {
  var r = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    t = Boolean(e.disableInteractiveElementBlocking),
    n = Boolean(e.shouldRespectForcePress);
  return C(
    yg,
    Re(ce({}, e), {
      isClone: !1,
      isEnabled: r,
      canDragInteractiveElements: t,
      shouldRespectForcePress: n,
    })
  );
}
function Ix(e) {
  var r = I.exports.useContext(ha);
  r || P(!1);
  var t = r.contextId,
    n = r.isMovementAllowed,
    i = I.exports.useRef(null),
    o = I.exports.useRef(null),
    a = e.children,
    l = e.droppableId,
    u = e.type,
    c = e.mode,
    f = e.direction,
    d = e.ignoreContainerClipping,
    s = e.isDropDisabled,
    p = e.isCombineEnabled,
    g = e.snapshot,
    y = e.useClone,
    S = e.updateViewportMaxScroll,
    m = e.getContainerForClone,
    v = A(function () {
      return i.current;
    }, []),
    h = A(function (F) {
      i.current = F;
    }, []);
  A(function () {
    return o.current;
  }, []);
  var w = A(function (F) {
      o.current = F;
    }, []),
    x = A(
      function () {
        n() && S({ maxScroll: rg() });
      },
      [n, S]
    );
  rx({
    droppableId: l,
    type: u,
    mode: c,
    direction: f,
    isDropDisabled: s,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: v,
  });
  var b = C(ax, {
      on: e.placeholder,
      shouldAnimate: e.shouldAnimatePlaceholder,
      children: function (F) {
        var ue = F.onClose,
          se = F.data,
          Y = F.animate;
        return C(ox, {
          placeholder: se,
          onClose: ue,
          innerRef: w,
          animate: Y,
          contextId: t,
          onTransitionEnd: x,
        });
      },
    }),
    E = $(
      function () {
        return {
          innerRef: h,
          placeholder: b,
          droppableProps: {
            "data-rbd-droppable-id": l,
            "data-rbd-droppable-context-id": t,
          },
        };
      },
      [t, l, b, h]
    ),
    k = y ? y.dragging.draggableId : null,
    R = $(
      function () {
        return { droppableId: l, type: u, isUsingCloneFor: k };
      },
      [l, k, u]
    );
  function T() {
    if (!y) return null;
    var F = y.dragging,
      ue = y.render,
      se = C(yg, {
        draggableId: F.draggableId,
        index: F.source.index,
        isClone: !0,
        isEnabled: !0,
        shouldRespectForcePress: !1,
        canDragInteractiveElements: !0,
        children: function (Y, Te) {
          return ue(Y, Te, F);
        },
      });
    return Gh.createPortal(se, m());
  }
  return H(Os.Provider, { value: R, children: [a(E, g), T()] });
}
var ul = function (r, t) {
    return r === t.droppable.type;
  },
  jd = function (r, t) {
    return t.draggables[r.draggable.id];
  },
  Px = function () {
    var r = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {
          isDraggingOver: !1,
          draggingOverWith: null,
          draggingFromThisWith: null,
          isUsingPlaceholder: !1,
        },
        useClone: null,
      },
      t = M({}, r, { shouldAnimatePlaceholder: !1 }),
      n = fe(function (a) {
        return {
          draggableId: a.id,
          type: a.type,
          source: { index: a.index, droppableId: a.droppableId },
        };
      }),
      i = fe(function (a, l, u, c, f, d) {
        var s = f.descriptor.id,
          p = f.descriptor.droppableId === a;
        if (p) {
          var g = d ? { render: d, dragging: n(f.descriptor) } : null,
            y = {
              isDraggingOver: u,
              draggingOverWith: u ? s : null,
              draggingFromThisWith: s,
              isUsingPlaceholder: !0,
            };
          return {
            placeholder: f.placeholder,
            shouldAnimatePlaceholder: !1,
            snapshot: y,
            useClone: g,
          };
        }
        if (!l) return t;
        if (!c) return r;
        var S = {
          isDraggingOver: u,
          draggingOverWith: s,
          draggingFromThisWith: null,
          isUsingPlaceholder: !0,
        };
        return {
          placeholder: f.placeholder,
          shouldAnimatePlaceholder: !0,
          snapshot: S,
          useClone: null,
        };
      }),
      o = function (l, u) {
        var c = u.droppableId,
          f = u.type,
          d = !u.isDropDisabled,
          s = u.renderClone;
        if (l.isDragging) {
          var p = l.critical;
          if (!ul(f, p)) return t;
          var g = jd(p, l.dimensions),
            y = We(l.impact) === c;
          return i(c, d, y, y, g, s);
        }
        if (l.phase === "DROP_ANIMATING") {
          var S = l.completed;
          if (!ul(f, S.critical)) return t;
          var m = jd(S.critical, l.dimensions);
          return i(c, d, mg(S.result) === c, We(S.impact) === c, m, s);
        }
        if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
          var v = l.completed;
          if (!ul(f, v.critical)) return t;
          var h = We(v.impact) === c,
            w = Boolean(v.impact.at && v.impact.at.type === "COMBINE"),
            x = v.critical.droppable.id === c;
          return h ? (w ? r : t) : x ? r : t;
        }
        return t;
      };
    return o;
  },
  kx = { updateViewportMaxScroll: M1 };
function Nx() {
  return document.body || P(!1), document.body;
}
var Ox = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: Nx,
  },
  wg = Sv(Px, kx, null, { context: Ps, pure: !0, areStatePropsEqual: gg })(Ix);
wg.defaultProps = Ox;
function Tx(e, r) {
  if (e == null) return {};
  var t = Rx(e, r),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function Rx(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
var Ts = I.exports.forwardRef(function (e, r) {
  var t = e.color,
    n = t === void 0 ? "currentColor" : t,
    i = e.size,
    o = i === void 0 ? 24 : i,
    a = Tx(e, ["color", "size"]);
  return C(
    "svg",
    Re(
      ce(
        {
          ref: r,
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: o,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: n,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        a
      ),
      { children: C("polyline", { points: "20 6 9 17 4 12" }) }
    )
  );
});
Ts.propTypes = { color: J.string, size: J.oneOfType([J.string, J.number]) };
Ts.displayName = "Check";
var Ax = Ts;
function Bx(e, r) {
  if (e == null) return {};
  var t = Lx(e, r),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function Lx(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
var Rs = I.exports.forwardRef(function (e, r) {
  var t = e.color,
    n = t === void 0 ? "currentColor" : t,
    i = e.size,
    o = i === void 0 ? 24 : i,
    a = Bx(e, ["color", "size"]);
  return H(
    "svg",
    Re(
      ce(
        {
          ref: r,
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: o,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: n,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        a
      ),
      {
        children: [
          C("rect", {
            x: "1",
            y: "4",
            width: "22",
            height: "16",
            rx: "2",
            ry: "2",
          }),
          C("line", { x1: "1", y1: "10", x2: "23", y2: "10" }),
        ],
      }
    )
  );
});
Rs.propTypes = { color: J.string, size: J.oneOfType([J.string, J.number]) };
Rs.displayName = "CreditCard";
var Mx = Rs;
function Fx(e, r) {
  if (e == null) return {};
  var t = zx(e, r),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function zx(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
var As = I.exports.forwardRef(function (e, r) {
  var t = e.color,
    n = t === void 0 ? "currentColor" : t,
    i = e.size,
    o = i === void 0 ? 24 : i,
    a = Fx(e, ["color", "size"]);
  return H(
    "svg",
    Re(
      ce(
        {
          ref: r,
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: o,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: n,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        a
      ),
      {
        children: [
          C("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
          C("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
        ],
      }
    )
  );
});
As.propTypes = { color: J.string, size: J.oneOfType([J.string, J.number]) };
As.displayName = "Plus";
var $x = As;
function _x(e, r) {
  if (e == null) return {};
  var t = jx(e, r),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function jx(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
var Bs = I.exports.forwardRef(function (e, r) {
  var t = e.color,
    n = t === void 0 ? "currentColor" : t,
    i = e.size,
    o = i === void 0 ? 24 : i,
    a = _x(e, ["color", "size"]);
  return H(
    "svg",
    Re(
      ce(
        {
          ref: r,
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: o,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: n,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        a
      ),
      {
        children: [
          C("path", {
            d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",
          }),
          C("line", { x1: "7", y1: "7", x2: "7.01", y2: "7" }),
        ],
      }
    )
  );
});
Bs.propTypes = { color: J.string, size: J.oneOfType([J.string, J.number]) };
Bs.displayName = "Tag";
var Ux = Bs;
function Wx(e, r) {
  if (e == null) return {};
  var t = Gx(e, r),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function Gx(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
var Ls = I.exports.forwardRef(function (e, r) {
  var t = e.color,
    n = t === void 0 ? "currentColor" : t,
    i = e.size,
    o = i === void 0 ? 24 : i,
    a = Wx(e, ["color", "size"]);
  return H(
    "svg",
    Re(
      ce(
        {
          ref: r,
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: o,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: n,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        a
      ),
      {
        children: [
          C("polyline", { points: "3 6 5 6 21 6" }),
          C("path", {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
          }),
        ],
      }
    )
  );
});
Ls.propTypes = { color: J.string, size: J.oneOfType([J.string, J.number]) };
Ls.displayName = "Trash";
var Vx = Ls;
function Hx(e, r) {
  if (e == null) return {};
  var t = Qx(e, r),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function Qx(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
var Ms = I.exports.forwardRef(function (e, r) {
  var t = e.color,
    n = t === void 0 ? "currentColor" : t,
    i = e.size,
    o = i === void 0 ? 24 : i,
    a = Hx(e, ["color", "size"]);
  return H(
    "svg",
    Re(
      ce(
        {
          ref: r,
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: o,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: n,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        a
      ),
      {
        children: [
          C("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          C("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
        ],
      }
    )
  );
});
Ms.propTypes = { color: J.string, size: J.oneOfType([J.string, J.number]) };
Ms.displayName = "X";
var Fs = Ms;
const qx = (e) =>
  C("div", {
    className: "custom__modal",
    onClick: () => e.onClose(!1),
    children: C("div", {
      className: "modal__content",
      onClick: (r) => r.stopPropagation(),
      children: e.children,
    }),
  });
const Kx = (e) => {
  const [r, t] = I.exports.useState((e == null ? void 0 : e.handler) || !1),
    [n, i] = I.exports.useState(e.defaultValue || ""),
    o = (a) => {
      a.preventDefault(), n && e.onSubmit && (i(""), e.onSubmit(n)), t(!1);
    };
  return C("div", {
    className: `editable ${e.parentClass}`,
    children: r
      ? C("form", {
          onSubmit: o,
          children: H("div", {
            className: `editable__input ${e.class}`,
            children: [
              C("textarea", {
                placeholder: e.placeholder,
                autoFocus: !0,
                id: "edit-input",
                type: "text",
                onChange: (a) => i(a.target.value),
              }),
              H("div", {
                className: "btn__control",
                children: [
                  C("button", {
                    className: "add__btn",
                    type: "submit",
                    children: `${e.btnName}` || "Add",
                  }),
                  C(Fs, {
                    className: "close",
                    onClick: () => {
                      t(!1), e == null || e.setHandler(!1);
                    },
                  }),
                ],
              }),
            ],
          }),
        })
      : H("p", {
          onClick: () => {
            t(!0);
          },
          children: [
            e.defaultValue === void 0 ? C($x, {}) : C(Io, {}),
            (e == null ? void 0 : e.name) || "Add",
          ],
        }),
  });
};
var ji,
  Yx = new Uint8Array(16);
function Xx() {
  if (
    !ji &&
    ((ji =
      (typeof crypto != "undefined" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto != "undefined" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !ji)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return ji(Yx);
}
var Jx =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Zx(e) {
  return typeof e == "string" && Jx.test(e);
}
var me = [];
for (var sl = 0; sl < 256; ++sl) me.push((sl + 256).toString(16).substr(1));
function eb(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    t = (
      me[e[r + 0]] +
      me[e[r + 1]] +
      me[e[r + 2]] +
      me[e[r + 3]] +
      "-" +
      me[e[r + 4]] +
      me[e[r + 5]] +
      "-" +
      me[e[r + 6]] +
      me[e[r + 7]] +
      "-" +
      me[e[r + 8]] +
      me[e[r + 9]] +
      "-" +
      me[e[r + 10]] +
      me[e[r + 11]] +
      me[e[r + 12]] +
      me[e[r + 13]] +
      me[e[r + 14]] +
      me[e[r + 15]]
    ).toLowerCase();
  if (!Zx(t)) throw TypeError("Stringified UUID is invalid");
  return t;
}
function Sg(e, r, t) {
  e = e || {};
  var n = e.random || (e.rng || Xx)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), r)) {
    t = t || 0;
    for (var i = 0; i < 16; ++i) r[t + i] = n[i];
    return r;
  }
  return eb(n);
}
function rb(e) {
  const r = I.exports.useRef(),
    [t, n] = I.exports.useState(""),
    [i, o] = I.exports.useState(""),
    a = (l) => !!e.tags.find((c) => c.color === l);
  return C("div", {
    className: "local__bootstrap",
    children: C("div", {
      className: "popover__wrapper",
      children: H("div", {
        className: "popover__content mb-2",
        children: [
          H("div", {
            className: "label__heading d-flex justify-content-between my-2 ",
            children: [
              C("p", {
                style: { fontSize: "15px" },
                className: "text-center",
                children: C("b", { children: "Label" }),
              }),
              C(Fs, {
                onClick: () => e.onClose(!1),
                style: { cursor: "pointer", width: "15px", height: "15px" },
              }),
            ],
          }),
          H("div", {
            className: "row",
            children: [
              C("p", {
                style: {
                  color: "#5e6c84",
                  display: "block",
                  fontSize: "12px",
                  fontWeight: "700",
                  lineHeight: "16px",
                },
                className: "my-1",
                children: "Name",
              }),
              C("div", {
                className: "col-12 label__input",
                children: C("input", {
                  type: "text",
                  ref: r,
                  defaultValue: i,
                  placeholder: "Name of label",
                  onChange: (l) => {
                    o(l.target.value);
                  },
                }),
              }),
              C("p", {
                style: {
                  color: "#5e6c84",
                  display: "block",
                  fontSize: "12px",
                  fontWeight: "700",
                  lineHeight: "16px",
                },
                className: "my-2",
                children: "Select color",
              }),
              C("div", {
                className:
                  "d-flex justify-content-between color__palette flex-wrap mb-2",
                children: e.color.map((l, u) =>
                  C(
                    "span",
                    {
                      onClick: () => n(l),
                      className: a(l) ? "disabled__color" : "",
                      style: { backgroundColor: l, cursor: "pointer" },
                      children: t === l ? C(Ax, { className: "icon__sm" }) : "",
                    },
                    u
                  )
                ),
              }),
              C("div", {
                children: C("button", {
                  className: "create__btn my-2",
                  onClick: () => {
                    if (i !== "")
                      t === "" && alert("Please select color for label."),
                        e.addTag(i, t),
                        n(""),
                        o(""),
                        (r.current.value = "");
                    else return;
                  },
                  children: "Create",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function tb(e) {
  const r = ["#61bd4f", "#f2d600", "#ff9f1a", "#eb5a46", "#c377e0"],
    [t, n] = I.exports.useState(ce({}, e.card)),
    [i, o] = I.exports.useState(!1),
    [a, l] = I.exports.useState(t.title),
    [u, c] = I.exports.useState(!1),
    f = (y) =>
      C("div", {
        className: "",
        children: C("input", {
          autoFocus: !0,
          defaultValue: a,
          type: "text",
          onChange: (S) => {
            l(S.target.value);
          },
        }),
      }),
    d = (y) => {
      n(Re(ce({}, t), { title: y }));
    },
    s = (y) => {
      const S = t.tags.filter((m) => m.id !== y);
      n(Re(ce({}, t), { tags: S }));
    },
    p = (y, S) => {
      t.tags.push({ id: Sg(), tagName: y, color: S }), n(ce({}, t));
    },
    g = (y) => {
      if (y.code === "Enter") o(!1), d(a === "" ? t.title : a);
      else return;
    };
  return (
    I.exports.useEffect(
      () => (
        document.addEventListener("keypress", g),
        () => {
          document.removeEventListener("keypress", g);
        }
      )
    ),
    I.exports.useEffect(() => {
      e.updateCard && e.updateCard(e.bid, t.id, t);
    }, [t]),
    C(qx, {
      onClose: e.onClose,
      children: C("div", {
        className: "local__bootstrap",
        children: H("div", {
          className: "container",
          style: { minWidth: "650px", position: "relative" },
          children: [
            C("div", {
              className: "row pb-4",
              children: C("div", {
                className: "col-12",
                children: H("div", {
                  className: "d-flex align-items-center pt-3 gap-2",
                  children: [
                    C(Mx, { className: "icon__md" }),
                    i
                      ? C(f, { title: t.title })
                      : C("h5", {
                          style: { cursor: "pointer" },
                          onClick: () => o(!0),
                          children: t.title,
                        }),
                  ],
                }),
              }),
            }),
            H("div", {
              className: "row",
              children: [
                H("div", {
                  className: "col-8",
                  children: [
                    C("h6", { className: "text-justify", children: "Label" }),
                    C("div", {
                      className: "d-flex label__color flex-wrap",
                      style: { width: "500px", paddingRight: "10px" },
                      children:
                        t.tags.length !== 0
                          ? t.tags.map((y) =>
                              H("span", {
                                className:
                                  "d-flex justify-content-between align-items-center gap-2",
                                style: { backgroundColor: y.color },
                                children: [
                                  y.tagName.length > 10
                                    ? y.tagName.slice(0, 6) + "..."
                                    : y.tagName,
                                  C(Fs, {
                                    onClick: () => s(y.id),
                                    style: { width: "15px", height: "15px" },
                                  }),
                                ],
                              })
                            )
                          : C("span", {
                              style: { color: "#ccc" },
                              className:
                                "d-flex justify-content-between align-items-center gap-2",
                              children: C("i", { children: " No Labels" }),
                            }),
                    }),
                  ],
                }),
                C("div", {
                  className: "col-4",
                  children: H("div", {
                    className: "d-flex card__action__btn flex-column gap-2",
                    children: [
                      H("button", {
                        onClick: () => c(!0),
                        children: [
                          C("span", {
                            className: "icon__sm",
                            children: C(Ux, {}),
                          }),
                          "Add Label",
                        ],
                      }),
                      u &&
                        C(rb, {
                          color: r,
                          addTag: p,
                          tags: t.tags,
                          onClose: c,
                        }),
                      H("button", {
                        onClick: () => e.removeCard(e.bid, t.id),
                        children: [
                          C("span", {
                            className: "icon__sm",
                            children: C(Vx, {}),
                          }),
                          "Delete Book",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
const nb = (e) => {
  I.exports.useState(!1);
  const [r, t] = I.exports.useState(!1);
  return C(
    Ex,
    {
      draggableId: e.id.toString(),
      index: e.index,
      children: (n) =>
        H(Io, {
          children: [
            r &&
              C(tb, {
                updateCard: e.updateCard,
                onClose: t,
                card: e.card,
                bid: e.bid,
                removeCard: e.removeCard,
              }),
            C(
              "div",
              Re(
                ce(
                  ce(
                    {
                      className: e.cn,
                      style: { marginLeft: "100vw" },
                      onClick: () => {
                        t(!0);
                      },
                    },
                    n.draggableProps
                  ),
                  n.dragHandleProps
                ),
                { ref: n.innerRef, children: e.title }
              )
            ),
          ],
        }),
    },
    e.id.toString()
  );
};
function Ud(e) {
  var n;
  const [r, t] = I.exports.useState(!1);
  return (
    I.exports.useEffect(
      () => (
        document.addEventListener("keypress", (i) => {
          i.code === "Enter" && t(!1);
        }),
        () => {
          document.removeEventListener("keypress", (i) => {
            i.code === "Enter" && t(!1);
          });
        }
      )
    ),
    H("div", {
      className: "board",
      id: `board${e.index}`,
      children: [
        C("div", {
          className: "board__top",
          children: r
            ? C("div", {
                children: C("input", {
                  className: "title__input",
                  type: "text",
                  defaultValue: e.name,
                  onChange: (i) => {
                    e.setName(i.target.value, e.id);
                  },
                }),
              })
            : C("div", {
                children: H("p", {
                  onClick: () => {
                    t(!0);
                  },
                  className: "board__title",
                  children: [
                    (e == null ? void 0 : e.name) || "Name of Board",
                    C("span", {
                      className: "total__cards",
                      children: (n = e.card) == null ? void 0 : n.length,
                    }),
                  ],
                }),
              }),
        }),
        C(wg, {
          droppableId: e.id.toString(),
          children: (i) => {
            var o;
            return H(
              "div",
              Re(
                ce(
                  { className: "board__cards", ref: i.innerRef },
                  i.droppableProps
                ),
                {
                  children: [
                    (o = e.card) == null
                      ? void 0
                      : o.map((a, l) =>
                          C(
                            nb,
                            {
                              color: "black",
                              cn: e.cn,
                              bid: e.id,
                              id: a.id,
                              index: l,
                              title: a.title,
                              tags: a.tags,
                              updateCard: e.updateCard,
                              removeCard: e.removeCard,
                              card: a,
                            },
                            a.id
                          )
                        ),
                    i.placeholder,
                  ],
                }
              )
            );
          },
        }),
        C("div", {
          className: "board__footer",
          children: C(Kx, {
            name: "Add Book",
            btnName: "Add Book",
            placeholder: "Enter Book Title",
            onSubmit: (i) => e.addCard(i, e.id),
          }),
        }),
      ],
    })
  );
}
const ib = () => {
  const [e, r] = I.exports.useState("");
  var n = "https://myproject-382821.uc.r.appspot.com/";
  const i = async () => {
      const c = await (await fetch(n)).json();
      return c.result[0].card.concat(c.result[1].card, c.result[2].card);
    },
    [o, a] = I.exports.useState([]),
    l = (u) => {
      u.preventDefault(), r(u.target.value);
    };
  return (
    I.exports.useEffect(() => {
      i().then((u) => {
        a(u.filter((c) => c.title.match(new RegExp(e, "i")) && e != ""));
      });
    }, [o]),
    H("div", {
      className: "searchBar",
      children: [
        C("input", {
          className: "input",
          type: "search",
          placeholder: "Search for book:",
          onChange: l,
          value: e,
        }),
        C("div", {
          className: "table",
          children: o.map((u) =>
            C("div", { className: "item", children: u.title })
          ),
        }),
      ],
    })
  );
};
function ob() {
  var r = "https://myproject-382821.uc.r.appspot.com/";
  const t = async () => (await (await fetch(r)).json()).result,
    [n, i] = I.exports.useState([]),
    o = (s, p) => {
      const g = n.findIndex((S) => S.id === p),
        y = [...n];
      (y[g].boardName = s), i(y);
    },
    a = async (s, p) => {
      let g = [...n];
      console.log(g);
      const y = g.findIndex((m) => m._id.toString() === p.droppableId),
        S = g.findIndex((m) => m._id.toString() === s.droppableId);
      return (
        g[y].card.splice(p.index, 0, g[S].card[s.index]),
        g[S].card.splice(s.index, 1),
        g
      );
    },
    l = async (s, p) => {
      await fetch(`${r}${p}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          card: { id: Sg(), title: s, tags: [], task: [] },
        }),
      });
    },
    u = async (s, p) => {
      await fetch(`${r}${s}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardId: p }),
      });
    },
    c = (s) => {
      const p = [...n],
        g = n.findIndex((y) => y.id === s);
      p.splice(g, 1), i(p);
    },
    f = (s) => {
      const { source: p, destination: g } = s;
      !g ||
        (p.droppableId !== g.droppableId &&
          a(p, g).then((y) => {
            const S = y.findIndex((v) => v._id === p.droppableId);
            fetch(`${r}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: p.droppableId, board: y[S] }),
            });
            const m = y.findIndex((v) => v._id === g.droppableId);
            fetch(`${r}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: g.droppableId, board: y[m] }),
            });
          }));
    },
    d = (s, p, g) => {
      const y = n.findIndex((h) => h.id === s);
      if (y < 0) return;
      const S = [...n],
        v = S[y].card.findIndex((h) => h.id === p);
      v < 0 || ((S[y].card[v] = g), i(S));
    };
  return (
    I.exports.useEffect(() => {
      t().then((s) => {
        i(s);
      });
    }, [n]),
    C(US, {
      onDragEnd: f,
      children: H("div", {
        className: "App",
        children: [
          C(Xh, {}),
          C("div", { className: "searchbar", children: C(ib, {}) }),
          C("div", {
            className: "app_boards",
            children: n.map((s, p) =>
              C(Io, {
                children:
                  p < 3 &&
                  C(
                    Ud,
                    {
                      cn: "custom__card",
                      id: s._id,
                      index: p,
                      className: `board${p}`,
                      name: s.boardName,
                      card: s.card,
                      setName: o,
                      addCard: l,
                      removeCard: u,
                      removeBoard: c,
                      updateCard: d,
                    },
                    s._id
                  ),
              })
            ),
          }),
          C("div", {
            className: "leader_boards",
            children: n.map((s, p) =>
              C(Io, {
                children:
                  p > 2 &&
                  C(
                    Ud,
                    {
                      cn: "lb",
                      id: s._id,
                      index: p,
                      className: `board${p}`,
                      name: s.boardName,
                      card: s.card,
                      setName: o,
                      addCard: l,
                      removeCard: u,
                      removeBoard: c,
                      updateCard: d,
                    },
                    s._id
                  ),
              })
            ),
          }),
        ],
      }),
    })
  );
}
cl.createRoot(document.getElementById("root")).render(C(ob, {}));
