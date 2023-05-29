var Ig = Object.defineProperty,
  Pg = Object.defineProperties;
var kg = Object.getOwnPropertyDescriptors;
var Ws = Object.getOwnPropertySymbols;
var Ng = Object.prototype.hasOwnProperty,
  Og = Object.prototype.propertyIsEnumerable;
var Us = (e, r, t) =>
    r in e
      ? Ig(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  oe = (e, r) => {
    for (var t in r || (r = {})) Ng.call(r, t) && Us(e, t, r[t]);
    if (Ws) for (var t of Ws(r)) Og.call(r, t) && Us(e, t, r[t]);
    return e;
  },
  Ie = (e, r) => Pg(e, kg(r));
const Tg = function () {
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
Tg();
var Gs =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {},
  I = { exports: {} },
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
  Rg = Symbol.for("react.portal"),
  Ag = Symbol.for("react.fragment"),
  Lg = Symbol.for("react.strict_mode"),
  Bg = Symbol.for("react.profiler"),
  Mg = Symbol.for("react.provider"),
  Fg = Symbol.for("react.context"),
  zg = Symbol.for("react.forward_ref"),
  $g = Symbol.for("react.suspense"),
  _g = Symbol.for("react.memo"),
  jg = Symbol.for("react.lazy"),
  Vs = Symbol.iterator;
function Wg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vs && e[Vs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hd = Object.assign,
  Qd = {};
function Jt(e, r, t) {
  (this.props = e),
    (this.context = r),
    (this.refs = Qd),
    (this.updater = t || Vd);
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
function qd() {}
qd.prototype = Jt.prototype;
function cu(e, r, t) {
  (this.props = e),
    (this.context = r),
    (this.refs = Qd),
    (this.updater = t || Vd);
}
var du = (cu.prototype = new qd());
du.constructor = cu;
Hd(du, Jt.prototype);
du.isPureReactComponent = !0;
var Hs = Array.isArray,
  Kd = Object.prototype.hasOwnProperty,
  fu = { current: null },
  Yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xd(e, r, t) {
  var n,
    i = {},
    o = null,
    a = null;
  if (r != null)
    for (n in (r.ref !== void 0 && (a = r.ref),
    r.key !== void 0 && (o = "" + r.key),
    r))
      Kd.call(r, n) && !Yd.hasOwnProperty(n) && (i[n] = r[n]);
  var l = arguments.length - 2;
  if (l === 1) i.children = t;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
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
    _owner: fu.current,
  };
}
function Ug(e, r) {
  return {
    $$typeof: ri,
    type: e.type,
    key: r,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ri;
}
function Gg(e) {
  var r = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return r[t];
    })
  );
}
var Qs = /\/+/g;
function Ea(e, r) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gg("" + e.key)
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
          case Rg:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = n === "" ? "." + Ea(a, 0) : n),
      Hs(i)
        ? ((t = ""),
          e != null && (t = e.replace(Qs, "$&/") + "/"),
          Ui(i, r, t, "", function (s) {
            return s;
          }))
        : i != null &&
          (pu(i) &&
            (i = Ug(
              i,
              t +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Qs, "$&/") + "/") +
                e
            )),
          r.push(i)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), Hs(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = n + Ea(o, l);
      a += Ui(o, r, t, u, i);
    }
  else if (((u = Wg(e)), typeof u == "function"))
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
function Vg(e) {
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
var Oe = { current: null },
  Gi = { transition: null },
  Hg = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Gi,
    ReactCurrentOwner: fu,
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
    if (!pu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = Jt;
z.Fragment = Ag;
z.Profiler = Bg;
z.PureComponent = cu;
z.StrictMode = Lg;
z.Suspense = $g;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hg;
z.cloneElement = function (e, r, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = Hd({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (r != null) {
    if (
      (r.ref !== void 0 && ((o = r.ref), (a = fu.current)),
      r.key !== void 0 && (i = "" + r.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in r)
      Kd.call(r, u) &&
        !Yd.hasOwnProperty(u) &&
        (n[u] = r[u] === void 0 && l !== void 0 ? l[u] : r[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) n.children = t;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    n.children = l;
  }
  return { $$typeof: ri, type: e.type, key: i, ref: o, props: n, _owner: a };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mg, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Xd;
z.createFactory = function (e) {
  var r = Xd.bind(null, e);
  return (r.type = e), r;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: zg, render: e };
};
z.isValidElement = pu;
z.lazy = function (e) {
  return { $$typeof: jg, _payload: { _status: -1, _result: e }, _init: Vg };
};
z.memo = function (e, r) {
  return { $$typeof: _g, type: e, compare: r === void 0 ? null : r };
};
z.startTransition = function (e) {
  var r = Gi.transition;
  Gi.transition = {};
  try {
    e();
  } finally {
    Gi.transition = r;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, r) {
  return Oe.current.useCallback(e, r);
};
z.useContext = function (e) {
  return Oe.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
z.useEffect = function (e, r) {
  return Oe.current.useEffect(e, r);
};
z.useId = function () {
  return Oe.current.useId();
};
z.useImperativeHandle = function (e, r, t) {
  return Oe.current.useImperativeHandle(e, r, t);
};
z.useInsertionEffect = function (e, r) {
  return Oe.current.useInsertionEffect(e, r);
};
z.useLayoutEffect = function (e, r) {
  return Oe.current.useLayoutEffect(e, r);
};
z.useMemo = function (e, r) {
  return Oe.current.useMemo(e, r);
};
z.useReducer = function (e, r, t) {
  return Oe.current.useReducer(e, r, t);
};
z.useRef = function (e) {
  return Oe.current.useRef(e);
};
z.useState = function (e) {
  return Oe.current.useState(e);
};
z.useSyncExternalStore = function (e, r, t) {
  return Oe.current.useSyncExternalStore(e, r, t);
};
z.useTransition = function () {
  return Oe.current.useTransition();
};
z.version = "18.1.0";
I.exports = z;
var vr = I.exports,
  cl = {},
  Mo = { exports: {} },
  He = {},
  Jd = { exports: {} },
  Zd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function r(N, B) {
    var L = N.length;
    N.push(B);
    e: for (; 0 < L; ) {
      var W = (L - 1) >>> 1,
        j = N[W];
      if (0 < i(j, B)) (N[W] = B), (N[L] = j), (L = W);
      else break e;
    }
  }
  function t(N) {
    return N.length === 0 ? null : N[0];
  }
  function n(N) {
    if (N.length === 0) return null;
    var B = N[0],
      L = N.pop();
    if (L !== B) {
      N[0] = L;
      e: for (var W = 0, j = N.length, wr = j >>> 1; W < wr; ) {
        var Ke = 2 * (W + 1) - 1,
          Ye = N[Ke],
          Xe = Ke + 1,
          Er = N[Xe];
        if (0 > i(Ye, L))
          Xe < j && 0 > i(Er, Ye)
            ? ((N[W] = Er), (N[Xe] = L), (W = Xe))
            : ((N[W] = Ye), (N[Ke] = L), (W = Ke));
        else if (Xe < j && 0 > i(Er, L)) (N[W] = Er), (N[Xe] = L), (W = Xe);
        else break e;
      }
    }
    return B;
  }
  function i(N, B) {
    var L = N.sortIndex - B.sortIndex;
    return L !== 0 ? L : N.id - B.id;
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
    s = [],
    f = 1,
    d = null,
    c = 3,
    p = !1,
    m = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var B = t(s); B !== null; ) {
      if (B.callback === null) n(s);
      else if (B.startTime <= N)
        n(s), (B.sortIndex = B.expirationTime), r(u, B);
      else break;
      B = t(s);
    }
  }
  function w(N) {
    if (((y = !1), h(N), !m))
      if (t(u) !== null) (m = !0), xe(x);
      else {
        var B = t(s);
        B !== null && yr(w, B.startTime - N);
      }
  }
  function x(N, B) {
    (m = !1), y && ((y = !1), g(k), (k = -1)), (p = !0);
    var L = c;
    try {
      for (
        h(B), d = t(u);
        d !== null && (!(d.expirationTime > B) || (N && !F()));

      ) {
        var W = d.callback;
        if (typeof W == "function") {
          (d.callback = null), (c = d.priorityLevel);
          var j = W(d.expirationTime <= B);
          (B = e.unstable_now()),
            typeof j == "function" ? (d.callback = j) : d === t(u) && n(u),
            h(B);
        } else n(u);
        d = t(u);
      }
      if (d !== null) var wr = !0;
      else {
        var Ke = t(s);
        Ke !== null && yr(w, Ke.startTime - B), (wr = !1);
      }
      return wr;
    } finally {
      (d = null), (c = L), (p = !1);
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
  function se() {
    if (E !== null) {
      var N = e.unstable_now();
      T = N;
      var B = !0;
      try {
        B = E(!0, N);
      } finally {
        B ? ce() : ((b = !1), (E = null));
      }
    } else b = !1;
  }
  var ce;
  if (typeof v == "function")
    ce = function () {
      v(se);
    };
  else if (typeof MessageChannel != "undefined") {
    var X = new MessageChannel(),
      Re = X.port2;
    (X.port1.onmessage = se),
      (ce = function () {
        Re.postMessage(null);
      });
  } else
    ce = function () {
      S(se, 0);
    };
  function xe(N) {
    (E = N), b || ((b = !0), ce());
  }
  function yr(N, B) {
    k = S(function () {
      N(e.unstable_now());
    }, B);
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
      m || p || ((m = !0), xe(x));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(u);
    }),
    (e.unstable_next = function (N) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = c;
      }
      var L = c;
      c = B;
      try {
        return N();
      } finally {
        c = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, B) {
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
      var L = c;
      c = N;
      try {
        return B();
      } finally {
        c = L;
      }
    }),
    (e.unstable_scheduleCallback = function (N, B, L) {
      var W = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? W + L : W))
          : (L = W),
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
        (j = L + j),
        (N = {
          id: f++,
          callback: B,
          priorityLevel: N,
          startTime: L,
          expirationTime: j,
          sortIndex: -1,
        }),
        L > W
          ? ((N.sortIndex = L),
            r(s, N),
            t(u) === null &&
              N === t(s) &&
              (y ? (g(k), (k = -1)) : (y = !0), yr(w, L - W)))
          : ((N.sortIndex = j), r(u, N), m || p || ((m = !0), xe(x))),
        N
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (N) {
      var B = c;
      return function () {
        var L = c;
        c = B;
        try {
          return N.apply(this, arguments);
        } finally {
          c = L;
        }
      };
    });
})(Zd);
Jd.exports = Zd;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ef = I.exports,
  Ve = Jd.exports;
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
var rf = new Set(),
  An = {};
function St(e, r) {
  Ut(e, r), Ut(e + "Capture", r);
}
function Ut(e, r) {
  for (An[e] = r, e = 0; e < r.length; e++) rf.add(r[e]);
}
var Rr = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  dl = Object.prototype.hasOwnProperty,
  Qg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qs = {},
  Ks = {};
function qg(e) {
  return dl.call(Ks, e)
    ? !0
    : dl.call(qs, e)
    ? !1
    : Qg.test(e)
    ? (Ks[e] = !0)
    : ((qs[e] = !0), !1);
}
function Kg(e, r, t, n) {
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
function Yg(e, r, t, n) {
  if (r === null || typeof r == "undefined" || Kg(e, r, t, n)) return !0;
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
function Te(e, r, t, n, i, o, a) {
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
    Se[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var r = e[0];
  Se[r] = new Te(r, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vu = /[\-:]([a-z])/g;
function gu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var r = e.replace(vu, gu);
    Se[r] = new Te(r, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var r = e.replace(vu, gu);
    Se[r] = new Te(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var r = e.replace(vu, gu);
  Se[r] = new Te(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mu(e, r, t, n) {
  var i = Se.hasOwnProperty(r) ? Se[r] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < r.length) ||
      (r[0] !== "o" && r[0] !== "O") ||
      (r[1] !== "n" && r[1] !== "N")) &&
    (Yg(r, t, i, n) && (t = null),
    n || i === null
      ? qg(r) && (t === null ? e.removeAttribute(r) : e.setAttribute(r, "" + t))
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
var Br = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Si = Symbol.for("react.element"),
  Et = Symbol.for("react.portal"),
  It = Symbol.for("react.fragment"),
  hu = Symbol.for("react.strict_mode"),
  fl = Symbol.for("react.profiler"),
  tf = Symbol.for("react.provider"),
  nf = Symbol.for("react.context"),
  yu = Symbol.for("react.forward_ref"),
  pl = Symbol.for("react.suspense"),
  vl = Symbol.for("react.suspense_list"),
  wu = Symbol.for("react.memo"),
  Fr = Symbol.for("react.lazy"),
  of = Symbol.for("react.offscreen"),
  Ys = Symbol.iterator;
function an(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ys && e[Ys]) || e["@@iterator"]),
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
        } catch (s) {
          var n = s;
        }
        Reflect.construct(e, [], r);
      } else {
        try {
          r.call();
        } catch (s) {
          n = s;
        }
        e.call(r.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      e();
    }
  } catch (s) {
    if (s && n && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
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
function Xg(e) {
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
    case hu:
      return "StrictMode";
    case pl:
      return "Suspense";
    case vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case nf:
        return (e.displayName || "Context") + ".Consumer";
      case tf:
        return (e._context.displayName || "Context") + ".Provider";
      case yu:
        var r = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = r.displayName || r.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case wu:
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
function Jg(e) {
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
      return r === hu ? "StrictMode" : "Mode";
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
function af(e) {
  var r = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (r === "checkbox" || r === "radio")
  );
}
function Zg(e) {
  var r = af(e) ? "checked" : "value",
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
  e._valueTracker || (e._valueTracker = Zg(e));
}
function lf(e) {
  if (!e) return !1;
  var r = e._valueTracker;
  if (!r) return !0;
  var t = r.getValue(),
    n = "";
  return (
    e && (n = af(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== t ? (r.setValue(e), !0) : !1
  );
}
function ro(e) {
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
function Xs(e, r) {
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
function uf(e, r) {
  (r = r.checked), r != null && mu(e, "checked", r, !1);
}
function hl(e, r) {
  uf(e, r);
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
function Js(e, r, t) {
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
  (r !== "number" || ro(e.ownerDocument) !== e) &&
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
function Zs(e, r) {
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
function sf(e, r) {
  var t = Jr(r.value),
    n = Jr(r.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    r.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    n != null && (e.defaultValue = "" + n);
}
function ec(e) {
  var r = e.textContent;
  r === e._wrapperState.initialValue && r !== "" && r !== null && (e.value = r);
}
function cf(e) {
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
    ? cf(r)
    : e === "http://www.w3.org/2000/svg" && r === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var bi,
  df = (function (e) {
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
function Ln(e, r) {
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
  em = ["Webkit", "ms", "Moz", "O"];
Object.keys(bn).forEach(function (e) {
  em.forEach(function (r) {
    (r = r + e.charAt(0).toUpperCase() + e.substring(1)), (bn[r] = bn[e]);
  });
});
function ff(e, r, t) {
  return r == null || typeof r == "boolean" || r === ""
    ? ""
    : t || typeof r != "number" || r === 0 || (bn.hasOwnProperty(e) && bn[e])
    ? ("" + r).trim()
    : r + "px";
}
function pf(e, r) {
  e = e.style;
  for (var t in r)
    if (r.hasOwnProperty(t)) {
      var n = t.indexOf("--") === 0,
        i = ff(t, r[t], n);
      t === "float" && (t = "cssFloat"), n ? e.setProperty(t, i) : (e[t] = i);
    }
}
var rm = re(
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
    if (rm[e] && (r.children != null || r.dangerouslySetInnerHTML != null))
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
function Su(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Dl = null,
  zt = null,
  $t = null;
function rc(e) {
  if ((e = ii(e))) {
    if (typeof Dl != "function") throw Error(D(280));
    var r = e.stateNode;
    r && ((r = jo(r)), Dl(e.stateNode, e.type, r));
  }
}
function vf(e) {
  zt ? ($t ? $t.push(e) : ($t = [e])) : (zt = e);
}
function gf() {
  if (zt) {
    var e = zt,
      r = $t;
    if ((($t = zt = null), rc(e), r)) for (e = 0; e < r.length; e++) rc(r[e]);
  }
}
function mf(e, r) {
  return e(r);
}
function hf() {}
var Na = !1;
function yf(e, r, t) {
  if (Na) return e(r, t);
  Na = !0;
  try {
    return mf(e, r, t);
  } finally {
    (Na = !1), (zt !== null || $t !== null) && (hf(), gf());
  }
}
function Bn(e, r) {
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
function tm(e, r, t, n, i, o, a, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    r.apply(t, s);
  } catch (f) {
    this.onError(f);
  }
}
var Cn = !1,
  to = null,
  no = !1,
  Il = null,
  nm = {
    onError: function (e) {
      (Cn = !0), (to = e);
    },
  };
function im(e, r, t, n, i, o, a, l, u) {
  (Cn = !1), (to = null), tm.apply(nm, arguments);
}
function om(e, r, t, n, i, o, a, l, u) {
  if ((im.apply(this, arguments), Cn)) {
    if (Cn) {
      var s = to;
      (Cn = !1), (to = null);
    } else throw Error(D(198));
    no || ((no = !0), (Il = s));
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
function wf(e) {
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
function tc(e) {
  if (xt(e) !== e) throw Error(D(188));
}
function am(e) {
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
        if (o === t) return tc(i), e;
        if (o === n) return tc(i), r;
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
function Sf(e) {
  return (e = am(e)), e !== null ? xf(e) : null;
}
function xf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var r = xf(e);
    if (r !== null) return r;
    e = e.sibling;
  }
  return null;
}
var bf = Ve.unstable_scheduleCallback,
  nc = Ve.unstable_cancelCallback,
  lm = Ve.unstable_shouldYield,
  um = Ve.unstable_requestPaint,
  ne = Ve.unstable_now,
  sm = Ve.unstable_getCurrentPriorityLevel,
  xu = Ve.unstable_ImmediatePriority,
  Cf = Ve.unstable_UserBlockingPriority,
  io = Ve.unstable_NormalPriority,
  cm = Ve.unstable_LowPriority,
  Df = Ve.unstable_IdlePriority,
  Fo = null,
  Cr = null;
function dm(e) {
  if (Cr && typeof Cr.onCommitFiberRoot == "function")
    try {
      Cr.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gr = Math.clz32 ? Math.clz32 : vm,
  fm = Math.log,
  pm = Math.LN2;
function vm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((fm(e) / pm) | 0)) | 0;
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
function oo(e, r) {
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
function gm(e, r) {
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
function mm(e, r) {
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
      ? ((l & t) === 0 || (l & n) !== 0) && (i[a] = gm(l, r))
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
function Ef() {
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
function hm(e, r) {
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
function bu(e, r) {
  var t = (e.entangledLanes |= r);
  for (e = e.entanglements; t; ) {
    var n = 31 - gr(t),
      i = 1 << n;
    (i & r) | (e[n] & r) && (e[n] |= r), (t &= ~i);
  }
}
var U = 0;
function If(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Pf,
  Cu,
  kf,
  Nf,
  Of,
  kl = !1,
  Ei = [],
  Ur = null,
  Gr = null,
  Vr = null,
  Mn = new Map(),
  Fn = new Map(),
  $r = [],
  ym =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ic(e, r) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ur = null;
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
      r !== null && ((r = ii(r)), r !== null && Cu(r)),
      e)
    : ((e.eventSystemFlags |= n),
      (r = e.targetContainers),
      i !== null && r.indexOf(i) === -1 && r.push(i),
      e);
}
function wm(e, r, t, n, i) {
  switch (r) {
    case "focusin":
      return (Ur = un(Ur, e, r, t, n, i)), !0;
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
function Tf(e) {
  var r = ct(e.target);
  if (r !== null) {
    var t = xt(r);
    if (t !== null) {
      if (((r = t.tag), r === 13)) {
        if (((r = wf(t)), r !== null)) {
          (e.blockedOn = r),
            Of(e.priority, function () {
              kf(t);
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
function Vi(e) {
  if (e.blockedOn !== null) return !1;
  for (var r = e.targetContainers; 0 < r.length; ) {
    var t = Nl(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var n = new t.constructor(t.type, t);
      (Cl = n), t.target.dispatchEvent(n), (Cl = null);
    } else return (r = ii(t)), r !== null && Cu(r), (e.blockedOn = t), !1;
    r.shift();
  }
  return !0;
}
function oc(e, r, t) {
  Vi(e) && t.delete(r);
}
function Sm() {
  (kl = !1),
    Ur !== null && Vi(Ur) && (Ur = null),
    Gr !== null && Vi(Gr) && (Gr = null),
    Vr !== null && Vi(Vr) && (Vr = null),
    Mn.forEach(oc),
    Fn.forEach(oc);
}
function sn(e, r) {
  e.blockedOn === r &&
    ((e.blockedOn = null),
    kl ||
      ((kl = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Sm)));
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
    Ur !== null && sn(Ur, e),
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
    Tf(t), t.blockedOn === null && $r.shift();
}
var _t = Br.ReactCurrentBatchConfig,
  ao = !0;
function xm(e, r, t, n) {
  var i = U,
    o = _t.transition;
  _t.transition = null;
  try {
    (U = 1), Du(e, r, t, n);
  } finally {
    (U = i), (_t.transition = o);
  }
}
function bm(e, r, t, n) {
  var i = U,
    o = _t.transition;
  _t.transition = null;
  try {
    (U = 4), Du(e, r, t, n);
  } finally {
    (U = i), (_t.transition = o);
  }
}
function Du(e, r, t, n) {
  if (ao) {
    var i = Nl(e, r, t, n);
    if (i === null) _a(e, r, n, lo, t), ic(e, n);
    else if (wm(i, e, r, t, n)) n.stopPropagation();
    else if ((ic(e, n), r & 4 && -1 < ym.indexOf(e))) {
      for (; i !== null; ) {
        var o = ii(i);
        if (
          (o !== null && Pf(o),
          (o = Nl(e, r, t, n)),
          o === null && _a(e, r, n, lo, t),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else _a(e, r, n, null, t);
  }
}
var lo = null;
function Nl(e, r, t, n) {
  if (((lo = null), (e = Su(n)), (e = ct(e)), e !== null))
    if (((r = xt(e)), r === null)) e = null;
    else if (((t = r.tag), t === 13)) {
      if (((e = wf(r)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated)
        return r.tag === 3 ? r.stateNode.containerInfo : null;
      e = null;
    } else r !== e && (e = null);
  return (lo = e), null;
}
function Rf(e) {
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
      switch (sm()) {
        case xu:
          return 1;
        case Cf:
          return 4;
        case io:
        case cm:
          return 16;
        case Df:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jr = null,
  Eu = null,
  Hi = null;
function Af() {
  if (Hi) return Hi;
  var e,
    r = Eu,
    t = r.length,
    n,
    i = "value" in jr ? jr.value : jr.textContent,
    o = i.length;
  for (e = 0; e < t && r[e] === i[e]; e++);
  var a = t - e;
  for (n = 1; n <= a && r[t - n] === i[o - n]; n++);
  return (Hi = i.slice(e, 1 < n ? 1 - n : void 0));
}
function Qi(e) {
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
function ac() {
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
        : ac),
      (this.isPropagationStopped = ac),
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
  Iu = Qe(Zt),
  ni = re({}, Zt, { view: 0, detail: 0 }),
  Cm = Qe(ni),
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
    getModifierState: Pu,
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
  lc = Qe(zo),
  Dm = re({}, zo, { dataTransfer: 0 }),
  Em = Qe(Dm),
  Im = re({}, ni, { relatedTarget: 0 }),
  Aa = Qe(Im),
  Pm = re({}, Zt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  km = Qe(Pm),
  Nm = re({}, Zt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Om = Qe(Nm),
  Tm = re({}, Zt, { data: 0 }),
  uc = Qe(Tm),
  Rm = {
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
  Am = {
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
  Lm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bm(e) {
  var r = this.nativeEvent;
  return r.getModifierState ? r.getModifierState(e) : (e = Lm[e]) ? !!r[e] : !1;
}
function Pu() {
  return Bm;
}
var Mm = re({}, ni, {
    key: function (e) {
      if (e.key) {
        var r = Rm[e.key] || e.key;
        if (r !== "Unidentified") return r;
      }
      return e.type === "keypress"
        ? ((e = Qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Am[e.keyCode] || "Unidentified"
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
    getModifierState: Pu,
    charCode: function (e) {
      return e.type === "keypress" ? Qi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Fm = Qe(Mm),
  zm = re({}, zo, {
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
  sc = Qe(zm),
  $m = re({}, ni, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pu,
  }),
  _m = Qe($m),
  jm = re({}, Zt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wm = Qe(jm),
  Um = re({}, zo, {
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
  Gm = Qe(Um),
  Vm = [9, 13, 27, 32],
  ku = Rr && "CompositionEvent" in window,
  Dn = null;
Rr && "documentMode" in document && (Dn = document.documentMode);
var Hm = Rr && "TextEvent" in window && !Dn,
  Lf = Rr && (!ku || (Dn && 8 < Dn && 11 >= Dn)),
  cc = String.fromCharCode(32),
  dc = !1;
function Bf(e, r) {
  switch (e) {
    case "keyup":
      return Vm.indexOf(r.keyCode) !== -1;
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
function Mf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pt = !1;
function Qm(e, r) {
  switch (e) {
    case "compositionend":
      return Mf(r);
    case "keypress":
      return r.which !== 32 ? null : ((dc = !0), cc);
    case "textInput":
      return (e = r.data), e === cc && dc ? null : e;
    default:
      return null;
  }
}
function qm(e, r) {
  if (Pt)
    return e === "compositionend" || (!ku && Bf(e, r))
      ? ((e = Af()), (Hi = Eu = jr = null), (Pt = !1), e)
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
      return Lf && r.locale !== "ko" ? null : r.data;
    default:
      return null;
  }
}
var Km = {
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
function fc(e) {
  var r = e && e.nodeName && e.nodeName.toLowerCase();
  return r === "input" ? !!Km[e.type] : r === "textarea";
}
function Ff(e, r, t, n) {
  vf(n),
    (r = uo(r, "onChange")),
    0 < r.length &&
      ((t = new Iu("onChange", "change", null, t, n)),
      e.push({ event: t, listeners: r }));
}
var En = null,
  $n = null;
function Ym(e) {
  qf(e, 0);
}
function $o(e) {
  var r = Ot(e);
  if (lf(r)) return e;
}
function Xm(e, r) {
  if (e === "change") return r;
}
var zf = !1;
if (Rr) {
  var La;
  if (Rr) {
    var Ba = "oninput" in document;
    if (!Ba) {
      var pc = document.createElement("div");
      pc.setAttribute("oninput", "return;"),
        (Ba = typeof pc.oninput == "function");
    }
    La = Ba;
  } else La = !1;
  zf = La && (!document.documentMode || 9 < document.documentMode);
}
function vc() {
  En && (En.detachEvent("onpropertychange", $f), ($n = En = null));
}
function $f(e) {
  if (e.propertyName === "value" && $o($n)) {
    var r = [];
    Ff(r, $n, e, Su(e)), yf(Ym, r);
  }
}
function Jm(e, r, t) {
  e === "focusin"
    ? (vc(), (En = r), ($n = t), En.attachEvent("onpropertychange", $f))
    : e === "focusout" && vc();
}
function Zm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $o($n);
}
function eh(e, r) {
  if (e === "click") return $o(r);
}
function rh(e, r) {
  if (e === "input" || e === "change") return $o(r);
}
function th(e, r) {
  return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
}
var mr = typeof Object.is == "function" ? Object.is : th;
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
function gc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function mc(e, r) {
  var t = gc(e);
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
    t = gc(t);
  }
}
function _f(e, r) {
  return e && r
    ? e === r
      ? !0
      : e && e.nodeType === 3
      ? !1
      : r && r.nodeType === 3
      ? _f(e, r.parentNode)
      : "contains" in e
      ? e.contains(r)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(r) & 16)
      : !1
    : !1;
}
function jf() {
  for (var e = window, r = ro(); r instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof r.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = r.contentWindow;
    else break;
    r = ro(e.document);
  }
  return r;
}
function Nu(e) {
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
function nh(e) {
  var r = jf(),
    t = e.focusedElem,
    n = e.selectionRange;
  if (
    r !== t &&
    t &&
    t.ownerDocument &&
    _f(t.ownerDocument.documentElement, t)
  ) {
    if (n !== null && Nu(t)) {
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
          (i = mc(t, o));
        var a = mc(t, n);
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
var ih = Rr && "documentMode" in document && 11 >= document.documentMode,
  kt = null,
  Ol = null,
  In = null,
  Tl = !1;
function hc(e, r, t) {
  var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Tl ||
    kt == null ||
    kt !== ro(n) ||
    ((n = kt),
    "selectionStart" in n && Nu(n)
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
      (n = uo(Ol, "onSelect")),
      0 < n.length &&
        ((r = new Iu("onSelect", "select", null, r, t)),
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
  Wf = {};
Rr &&
  ((Wf = document.createElement("div").style),
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
  for (t in r) if (r.hasOwnProperty(t) && t in Wf) return (Ma[e] = r[t]);
  return e;
}
var Uf = _o("animationend"),
  Gf = _o("animationiteration"),
  Vf = _o("animationstart"),
  Hf = _o("transitionend"),
  Qf = new Map(),
  yc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function tt(e, r) {
  Qf.set(e, r), St(r, [e]);
}
for (var Fa = 0; Fa < yc.length; Fa++) {
  var za = yc[Fa],
    oh = za.toLowerCase(),
    ah = za[0].toUpperCase() + za.slice(1);
  tt(oh, "on" + ah);
}
tt(Uf, "onAnimationEnd");
tt(Gf, "onAnimationIteration");
tt(Vf, "onAnimationStart");
tt("dblclick", "onDoubleClick");
tt("focusin", "onFocus");
tt("focusout", "onBlur");
tt(Hf, "onTransitionEnd");
Ut("onMouseEnter", ["mouseout", "mouseover"]);
Ut("onMouseLeave", ["mouseout", "mouseover"]);
Ut("onPointerEnter", ["pointerout", "pointerover"]);
Ut("onPointerLeave", ["pointerout", "pointerover"]);
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
  lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));
function wc(e, r, t) {
  var n = e.type || "unknown-event";
  (e.currentTarget = t), om(n, r, void 0, e), (e.currentTarget = null);
}
function qf(e, r) {
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
            s = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          wc(i, l, s), (o = u);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((l = n[a]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          wc(i, l, s), (o = u);
        }
    }
  }
  if (no) throw ((e = Il), (no = !1), (Il = null), e);
}
function K(e, r) {
  var t = r[Ml];
  t === void 0 && (t = r[Ml] = new Set());
  var n = e + "__bubble";
  t.has(n) || (Kf(r, e, 2, !1), t.add(n));
}
function $a(e, r, t) {
  var n = 0;
  r && (n |= 4), Kf(t, e, n, r);
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);
function jn(e) {
  if (!e[ki]) {
    (e[ki] = !0),
      rf.forEach(function (t) {
        t !== "selectionchange" && (lh.has(t) || $a(t, !1, e), $a(t, !0, e));
      });
    var r = e.nodeType === 9 ? e : e.ownerDocument;
    r === null || r[ki] || ((r[ki] = !0), $a("selectionchange", !1, r));
  }
}
function Kf(e, r, t, n) {
  switch (Rf(r)) {
    case 1:
      var i = xm;
      break;
    case 4:
      i = bm;
      break;
    default:
      i = Du;
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
  yf(function () {
    var s = o,
      f = Su(t),
      d = [];
    e: {
      var c = Qf.get(e);
      if (c !== void 0) {
        var p = Iu,
          m = e;
        switch (e) {
          case "keypress":
            if (Qi(t) === 0) break e;
          case "keydown":
          case "keyup":
            p = Fm;
            break;
          case "focusin":
            (m = "focus"), (p = Aa);
            break;
          case "focusout":
            (m = "blur"), (p = Aa);
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
            p = lc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Em;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = _m;
            break;
          case Uf:
          case Gf:
          case Vf:
            p = km;
            break;
          case Hf:
            p = Wm;
            break;
          case "scroll":
            p = Cm;
            break;
          case "wheel":
            p = Gm;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = sc;
        }
        var y = (r & 4) !== 0,
          S = !y && e === "scroll",
          g = y ? (c !== null ? c + "Capture" : null) : c;
        y = [];
        for (var v = s, h; v !== null; ) {
          h = v;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              g !== null && ((w = Bn(v, g)), w != null && y.push(Wn(v, w, h)))),
            S)
          )
            break;
          v = v.return;
        }
        0 < y.length &&
          ((c = new p(c, m, null, t, f)), d.push({ event: c, listeners: y }));
      }
    }
    if ((r & 7) === 0) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          c &&
            t !== Cl &&
            (m = t.relatedTarget || t.fromElement) &&
            (ct(m) || m[Ar]))
        )
          break e;
        if (
          (p || c) &&
          ((c =
            f.window === f
              ? f
              : (c = f.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          p
            ? ((m = t.relatedTarget || t.toElement),
              (p = s),
              (m = m ? ct(m) : null),
              m !== null &&
                ((S = xt(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((p = null), (m = s)),
          p !== m)
        ) {
          if (
            ((y = lc),
            (w = "onMouseLeave"),
            (g = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = sc),
              (w = "onPointerLeave"),
              (g = "onPointerEnter"),
              (v = "pointer")),
            (S = p == null ? c : Ot(p)),
            (h = m == null ? c : Ot(m)),
            (c = new y(w, v + "leave", p, t, f)),
            (c.target = S),
            (c.relatedTarget = h),
            (w = null),
            ct(f) === s &&
              ((y = new y(g, v + "enter", m, t, f)),
              (y.target = h),
              (y.relatedTarget = S),
              (w = y)),
            (S = w),
            p && m)
          )
            r: {
              for (y = p, g = m, v = 0, h = y; h; h = Ct(h)) v++;
              for (h = 0, w = g; w; w = Ct(w)) h++;
              for (; 0 < v - h; ) (y = Ct(y)), v--;
              for (; 0 < h - v; ) (g = Ct(g)), h--;
              for (; v--; ) {
                if (y === g || (g !== null && y === g.alternate)) break r;
                (y = Ct(y)), (g = Ct(g));
              }
              y = null;
            }
          else y = null;
          p !== null && Sc(d, c, p, y, !1),
            m !== null && S !== null && Sc(d, S, m, y, !0);
        }
      }
      e: {
        if (
          ((c = s ? Ot(s) : window),
          (p = c.nodeName && c.nodeName.toLowerCase()),
          p === "select" || (p === "input" && c.type === "file"))
        )
          var x = Xm;
        else if (fc(c))
          if (zf) x = rh;
          else {
            x = Zm;
            var b = Jm;
          }
        else
          (p = c.nodeName) &&
            p.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (x = eh);
        if (x && (x = x(e, s))) {
          Ff(d, x, t, f);
          break e;
        }
        b && b(e, c, s),
          e === "focusout" &&
            (b = c._wrapperState) &&
            b.controlled &&
            c.type === "number" &&
            yl(c, "number", c.value);
      }
      switch (((b = s ? Ot(s) : window), e)) {
        case "focusin":
          (fc(b) || b.contentEditable === "true") &&
            ((kt = b), (Ol = s), (In = null));
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
          (Tl = !1), hc(d, t, f);
          break;
        case "selectionchange":
          if (ih) break;
        case "keydown":
        case "keyup":
          hc(d, t, f);
      }
      var E;
      if (ku)
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
          ? Bf(e, t) && (k = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Lf &&
          t.locale !== "ko" &&
          (Pt || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Pt && (E = Af())
            : ((jr = f),
              (Eu = "value" in jr ? jr.value : jr.textContent),
              (Pt = !0))),
        (b = uo(s, k)),
        0 < b.length &&
          ((k = new uc(k, e, null, t, f)),
          d.push({ event: k, listeners: b }),
          E ? (k.data = E) : ((E = Mf(t)), E !== null && (k.data = E)))),
        (E = Hm ? Qm(e, t) : qm(e, t)) &&
          ((s = uo(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new uc("onBeforeInput", "beforeinput", null, t, f)),
            d.push({ event: f, listeners: s }),
            (f.data = E)));
    }
    qf(d, r);
  });
}
function Wn(e, r, t) {
  return { instance: e, listener: r, currentTarget: t };
}
function uo(e, r) {
  for (var t = r + "Capture", n = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Bn(e, t)),
      o != null && n.unshift(Wn(e, o, i)),
      (o = Bn(e, r)),
      o != null && n.push(Wn(e, o, i))),
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
function Sc(e, r, t, n, i) {
  for (var o = r._reactName, a = []; t !== null && t !== n; ) {
    var l = t,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === n) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((u = Bn(t, o)), u != null && a.unshift(Wn(t, u, l)))
        : i || ((u = Bn(t, o)), u != null && a.push(Wn(t, u, l)))),
      (t = t.return);
  }
  a.length !== 0 && e.push({ event: r, listeners: a });
}
var uh = /\r\n?/g,
  sh = /\u0000|\uFFFD/g;
function xc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      uh,
      `
`
    )
    .replace(sh, "");
}
function Ni(e, r, t) {
  if (((r = xc(r)), xc(e) !== r && t)) throw Error(D(425));
}
function so() {}
var Rl = null,
  Al = null;
function Ll(e, r) {
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
var Bl = typeof setTimeout == "function" ? setTimeout : void 0,
  ch = typeof clearTimeout == "function" ? clearTimeout : void 0,
  bc = typeof Promise == "function" ? Promise : void 0,
  dh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof bc != "undefined"
      ? function (e) {
          return bc.resolve(null).then(e).catch(fh);
        }
      : Bl;
function fh(e) {
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
function Cc(e) {
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
  Un = "__reactProps$" + en,
  Ar = "__reactContainer$" + en,
  Ml = "__reactEvents$" + en,
  ph = "__reactListeners$" + en,
  vh = "__reactHandles$" + en;
function ct(e) {
  var r = e[br];
  if (r) return r;
  for (var t = e.parentNode; t; ) {
    if ((r = t[Ar] || t[br])) {
      if (
        ((t = r.alternate),
        r.child !== null || (t !== null && t.child !== null))
      )
        for (e = Cc(e); e !== null; ) {
          if ((t = e[br])) return t;
          e = Cc(e);
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
  return e[Un] || null;
}
var Fl = [],
  Tt = -1;
function nt(e) {
  return { current: e };
}
function Y(e) {
  0 > Tt || ((e.current = Fl[Tt]), (Fl[Tt] = null), Tt--);
}
function q(e, r) {
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
function co() {
  Y(Fe), Y(Ee);
}
function Dc(e, r, t) {
  if (Ee.current !== Zr) throw Error(D(168));
  q(Ee, r), q(Fe, t);
}
function Yf(e, r, t) {
  var n = e.stateNode;
  if (((r = r.childContextTypes), typeof n.getChildContext != "function"))
    return t;
  n = n.getChildContext();
  for (var i in n) if (!(i in r)) throw Error(D(108, Jg(e) || "Unknown", i));
  return re({}, t, n);
}
function fo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zr),
    (vt = Ee.current),
    q(Ee, e),
    q(Fe, Fe.current),
    !0
  );
}
function Ec(e, r, t) {
  var n = e.stateNode;
  if (!n) throw Error(D(169));
  t
    ? ((e = Yf(e, r, vt)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Y(Fe),
      Y(Ee),
      q(Ee, e))
    : Y(Fe),
    q(Fe, t);
}
var Pr = null,
  Wo = !1,
  Wa = !1;
function Xf(e) {
  Pr === null ? (Pr = [e]) : Pr.push(e);
}
function gh(e) {
  (Wo = !0), Xf(e);
}
function it() {
  if (!Wa && Pr !== null) {
    Wa = !0;
    var e = 0,
      r = U;
    try {
      var t = Pr;
      for (U = 1; e < t.length; e++) {
        var n = t[e];
        do n = n(!0);
        while (n !== null);
      }
      (Pr = null), (Wo = !1);
    } catch (i) {
      throw (Pr !== null && (Pr = Pr.slice(e + 1)), bf(xu, it), i);
    } finally {
      (U = r), (Wa = !1);
    }
  }
  return null;
}
var mh = Br.ReactCurrentBatchConfig;
function sr(e, r) {
  if (e && e.defaultProps) {
    (r = re({}, r)), (e = e.defaultProps);
    for (var t in e) r[t] === void 0 && (r[t] = e[t]);
    return r;
  }
  return r;
}
var po = nt(null),
  vo = null,
  Rt = null,
  Ou = null;
function Tu() {
  Ou = Rt = vo = null;
}
function Ru(e) {
  var r = po.current;
  Y(po), (e._currentValue = r);
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
  (vo = e),
    (Ou = Rt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & r) !== 0 && (Me = !0), (e.firstContext = null));
}
function ar(e) {
  var r = e._currentValue;
  if (Ou !== e)
    if (((e = { context: e, memoizedValue: r, next: null }), Rt === null)) {
      if (vo === null) throw Error(D(308));
      (Rt = e), (vo.dependencies = { lanes: 0, firstContext: e });
    } else Rt = Rt.next = e;
  return r;
}
var fr = null,
  zr = !1;
function Au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jf(e, r) {
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
    jp(e)
      ? ((e = t.interleaved),
        e === null
          ? ((r.next = r), fr === null ? (fr = [t]) : fr.push(t))
          : ((r.next = e.next), (e.next = r)),
        (t.interleaved = r))
      : ((e = t.pending),
        e === null ? (r.next = r) : ((r.next = e.next), (e.next = r)),
        (t.pending = r)));
}
function qi(e, r, t) {
  if (
    ((r = r.updateQueue), r !== null && ((r = r.shared), (t & 4194240) !== 0))
  ) {
    var n = r.lanes;
    (n &= e.pendingLanes), (t |= n), (r.lanes = t), bu(e, t);
  }
}
function Ic(e, r) {
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
function go(e, r, t, n) {
  var i = e.updateQueue;
  zr = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), a === null ? (o = s) : (a.next = s), (a = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== a &&
        (l === null ? (f.firstBaseUpdate = s) : (l.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = i.baseState;
    (a = 0), (f = s = u = null), (l = o);
    do {
      var c = l.lane,
        p = l.eventTime;
      if ((n & c) === c) {
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
          var m = e,
            y = l;
          switch (((c = r), (p = t), y.tag)) {
            case 1:
              if (((m = y.payload), typeof m == "function")) {
                d = m.call(p, d, c);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = y.payload),
                (c = typeof m == "function" ? m.call(p, d, c) : m),
                c == null)
              )
                break e;
              d = re({}, d, c);
              break e;
            case 2:
              zr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (c = i.effects),
          c === null ? (i.effects = [l]) : c.push(l));
      } else
        (p = {
          eventTime: p,
          lane: c,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((s = f = p), (u = d)) : (f = f.next = p),
          (a |= c);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (c = l),
          (l = c.next),
          (c.next = null),
          (i.lastBaseUpdate = c),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (u = d),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
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
function Pc(e, r, t) {
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
var Zf = new ef.Component().refs;
function $l(e, r, t, n) {
  (r = e.memoizedState),
    (t = t(n, r)),
    (t = t == null ? r : re({}, r, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var Uo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xt(e) === e : !1;
  },
  enqueueSetState: function (e, r, t) {
    e = e._reactInternals;
    var n = Ne(),
      i = qr(e),
      o = Tr(n, i);
    (o.payload = r),
      t != null && (o.callback = t),
      Hr(e, o),
      (r = ir(e, i, n)),
      r !== null && qi(r, e, i);
  },
  enqueueReplaceState: function (e, r, t) {
    e = e._reactInternals;
    var n = Ne(),
      i = qr(e),
      o = Tr(n, i);
    (o.tag = 1),
      (o.payload = r),
      t != null && (o.callback = t),
      Hr(e, o),
      (r = ir(e, i, n)),
      r !== null && qi(r, e, i);
  },
  enqueueForceUpdate: function (e, r) {
    e = e._reactInternals;
    var t = Ne(),
      n = qr(e),
      i = Tr(t, n);
    (i.tag = 2),
      r != null && (i.callback = r),
      Hr(e, i),
      (r = ir(e, n, t)),
      r !== null && qi(r, e, n);
  },
};
function kc(e, r, t, n, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, o, a)
      : r.prototype && r.prototype.isPureReactComponent
      ? !_n(t, n) || !_n(i, o)
      : !0
  );
}
function ep(e, r, t) {
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
    (r.updater = Uo),
    (e.stateNode = r),
    (r._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    r
  );
}
function Nc(e, r, t, n) {
  (e = r.state),
    typeof r.componentWillReceiveProps == "function" &&
      r.componentWillReceiveProps(t, n),
    typeof r.UNSAFE_componentWillReceiveProps == "function" &&
      r.UNSAFE_componentWillReceiveProps(t, n),
    r.state !== e && Uo.enqueueReplaceState(r, r.state, null);
}
function _l(e, r, t, n) {
  var i = e.stateNode;
  (i.props = t), (i.state = e.memoizedState), (i.refs = Zf), Au(e);
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
      r !== i.state && Uo.enqueueReplaceState(i, i.state, null),
      go(e, t, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
var At = [],
  Lt = 0,
  mo = null,
  ho = 0,
  Ze = [],
  er = 0,
  gt = null,
  Nr = 1,
  Or = "";
function lt(e, r) {
  (At[Lt++] = ho), (At[Lt++] = mo), (mo = e), (ho = r);
}
function rp(e, r, t) {
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
function Lu(e) {
  e.return !== null && (lt(e, 1), rp(e, 1, 0));
}
function Bu(e) {
  for (; e === mo; )
    (mo = At[--Lt]), (At[Lt] = null), (ho = At[--Lt]), (At[Lt] = null);
  for (; e === gt; )
    (gt = Ze[--er]),
      (Ze[er] = null),
      (Or = Ze[--er]),
      (Ze[er] = null),
      (Nr = Ze[--er]),
      (Ze[er] = null);
}
var We = null,
  Be = null,
  J = !1,
  dr = null;
function tp(e, r) {
  var t = rr(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = r),
    (t.return = e),
    (r = e.deletions),
    r === null ? ((e.deletions = [t]), (e.flags |= 16)) : r.push(t);
}
function Oc(e, r) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (r =
          r.nodeType !== 1 || t.toLowerCase() !== r.nodeName.toLowerCase()
            ? null
            : r),
        r !== null
          ? ((e.stateNode = r), (We = e), (Be = kr(r.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (r = e.pendingProps === "" || r.nodeType !== 3 ? null : r),
        r !== null ? ((e.stateNode = r), (We = e), (Be = null), !0) : !1
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
            (We = e),
            (Be = null),
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
function Wl(e) {
  if (J) {
    var r = Be;
    if (r) {
      var t = r;
      if (!Oc(e, r)) {
        if (jl(e)) throw Error(D(418));
        r = kr(t.nextSibling);
        var n = We;
        r && Oc(e, r)
          ? tp(n, t)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (We = e));
      }
    } else {
      if (jl(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (We = e);
    }
  }
}
function Tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function dn(e) {
  if (e !== We) return !1;
  if (!J) return Tc(e), (J = !0), !1;
  var r;
  if (
    ((r = e.tag !== 3) &&
      !(r = e.tag !== 5) &&
      ((r = e.type),
      (r = r !== "head" && r !== "body" && !Ll(e.type, e.memoizedProps))),
    r && (r = Be))
  ) {
    if (jl(e)) {
      for (e = Be; e; ) e = kr(e.nextSibling);
      throw Error(D(418));
    }
    for (; r; ) tp(e, r), (r = kr(r.nextSibling));
  }
  if ((Tc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, r = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (r === 0) {
              Be = kr(e.nextSibling);
              break e;
            }
            r--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || r++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = We ? kr(e.stateNode.nextSibling) : null;
  return !0;
}
function Vt() {
  (Be = We = null), (J = !1);
}
function Mu(e) {
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
            l === Zf && (l = i.refs = {}),
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
function Rc(e) {
  var r = e._init;
  return r(e._payload);
}
function np(e) {
  function r(g, v) {
    if (e) {
      var h = g.deletions;
      h === null ? ((g.deletions = [v]), (g.flags |= 16)) : h.push(v);
    }
  }
  function t(g, v) {
    if (!e) return null;
    for (; v !== null; ) r(g, v), (v = v.sibling);
    return null;
  }
  function n(g, v) {
    for (g = new Map(); v !== null; )
      v.key !== null ? g.set(v.key, v) : g.set(v.index, v), (v = v.sibling);
    return g;
  }
  function i(g, v) {
    return (g = et(g, v)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, v, h) {
    return (
      (g.index = h),
      e
        ? ((h = g.alternate),
          h !== null
            ? ((h = h.index), h < v ? ((g.flags |= 2), v) : h)
            : ((g.flags |= 2), v))
        : ((g.flags |= 1048576), v)
    );
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, v, h, w) {
    return v === null || v.tag !== 6
      ? ((v = qa(h, g.mode, w)), (v.return = g), v)
      : ((v = i(v, h)), (v.return = g), v);
  }
  function u(g, v, h, w) {
    var x = h.type;
    return x === It
      ? f(g, v, h.props.children, w, h.key)
      : v !== null &&
        (v.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Fr &&
            Rc(x) === v.type))
      ? ((w = i(v, h.props)), (w.ref = fn(g, v, h)), (w.return = g), w)
      : ((w = Zi(h.type, h.key, h.props, null, g.mode, w)),
        (w.ref = fn(g, v, h)),
        (w.return = g),
        w);
  }
  function s(g, v, h, w) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== h.containerInfo ||
      v.stateNode.implementation !== h.implementation
      ? ((v = Ka(h, g.mode, w)), (v.return = g), v)
      : ((v = i(v, h.children || [])), (v.return = g), v);
  }
  function f(g, v, h, w, x) {
    return v === null || v.tag !== 7
      ? ((v = pt(h, g.mode, w, x)), (v.return = g), v)
      : ((v = i(v, h)), (v.return = g), v);
  }
  function d(g, v, h) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = qa("" + v, g.mode, h)), (v.return = g), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Si:
          return (
            (h = Zi(v.type, v.key, v.props, null, g.mode, h)),
            (h.ref = fn(g, null, v)),
            (h.return = g),
            h
          );
        case Et:
          return (v = Ka(v, g.mode, h)), (v.return = g), v;
        case Fr:
          var w = v._init;
          return d(g, w(v._payload), h);
      }
      if (wn(v) || an(v))
        return (v = pt(v, g.mode, h, null)), (v.return = g), v;
      Oi(g, v);
    }
    return null;
  }
  function c(g, v, h, w) {
    var x = v !== null ? v.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return x !== null ? null : l(g, v, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Si:
          return h.key === x ? u(g, v, h, w) : null;
        case Et:
          return h.key === x ? s(g, v, h, w) : null;
        case Fr:
          return (x = h._init), c(g, v, x(h._payload), w);
      }
      if (wn(h) || an(h)) return x !== null ? null : f(g, v, h, w, null);
      Oi(g, h);
    }
    return null;
  }
  function p(g, v, h, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (g = g.get(h) || null), l(v, g, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Si:
          return (g = g.get(w.key === null ? h : w.key) || null), u(v, g, w, x);
        case Et:
          return (g = g.get(w.key === null ? h : w.key) || null), s(v, g, w, x);
        case Fr:
          var b = w._init;
          return p(g, v, h, b(w._payload), x);
      }
      if (wn(w) || an(w)) return (g = g.get(h) || null), f(v, g, w, x, null);
      Oi(v, w);
    }
    return null;
  }
  function m(g, v, h, w) {
    for (
      var x = null, b = null, E = v, k = (v = 0), R = null;
      E !== null && k < h.length;
      k++
    ) {
      E.index > k ? ((R = E), (E = null)) : (R = E.sibling);
      var T = c(g, E, h[k], w);
      if (T === null) {
        E === null && (E = R);
        break;
      }
      e && E && T.alternate === null && r(g, E),
        (v = o(T, v, k)),
        b === null ? (x = T) : (b.sibling = T),
        (b = T),
        (E = R);
    }
    if (k === h.length) return t(g, E), J && lt(g, k), x;
    if (E === null) {
      for (; k < h.length; k++)
        (E = d(g, h[k], w)),
          E !== null &&
            ((v = o(E, v, k)), b === null ? (x = E) : (b.sibling = E), (b = E));
      return J && lt(g, k), x;
    }
    for (E = n(g, E); k < h.length; k++)
      (R = p(E, g, k, h[k], w)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? k : R.key),
          (v = o(R, v, k)),
          b === null ? (x = R) : (b.sibling = R),
          (b = R));
    return (
      e &&
        E.forEach(function (F) {
          return r(g, F);
        }),
      J && lt(g, k),
      x
    );
  }
  function y(g, v, h, w) {
    var x = an(h);
    if (typeof x != "function") throw Error(D(150));
    if (((h = x.call(h)), h == null)) throw Error(D(151));
    for (
      var b = (x = null), E = v, k = (v = 0), R = null, T = h.next();
      E !== null && !T.done;
      k++, T = h.next()
    ) {
      E.index > k ? ((R = E), (E = null)) : (R = E.sibling);
      var F = c(g, E, T.value, w);
      if (F === null) {
        E === null && (E = R);
        break;
      }
      e && E && F.alternate === null && r(g, E),
        (v = o(F, v, k)),
        b === null ? (x = F) : (b.sibling = F),
        (b = F),
        (E = R);
    }
    if (T.done) return t(g, E), J && lt(g, k), x;
    if (E === null) {
      for (; !T.done; k++, T = h.next())
        (T = d(g, T.value, w)),
          T !== null &&
            ((v = o(T, v, k)), b === null ? (x = T) : (b.sibling = T), (b = T));
      return J && lt(g, k), x;
    }
    for (E = n(g, E); !T.done; k++, T = h.next())
      (T = p(E, g, k, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? k : T.key),
          (v = o(T, v, k)),
          b === null ? (x = T) : (b.sibling = T),
          (b = T));
    return (
      e &&
        E.forEach(function (se) {
          return r(g, se);
        }),
      J && lt(g, k),
      x
    );
  }
  function S(g, v, h, w) {
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
                    t(g, b.sibling),
                      (v = i(b, h.props.children)),
                      (v.return = g),
                      (g = v);
                    break e;
                  }
                } else if (
                  b.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Fr &&
                    Rc(x) === b.type)
                ) {
                  t(g, b.sibling),
                    (v = i(b, h.props)),
                    (v.ref = fn(g, b, h)),
                    (v.return = g),
                    (g = v);
                  break e;
                }
                t(g, b);
                break;
              } else r(g, b);
              b = b.sibling;
            }
            h.type === It
              ? ((v = pt(h.props.children, g.mode, w, h.key)),
                (v.return = g),
                (g = v))
              : ((w = Zi(h.type, h.key, h.props, null, g.mode, w)),
                (w.ref = fn(g, v, h)),
                (w.return = g),
                (g = w));
          }
          return a(g);
        case Et:
          e: {
            for (b = h.key; v !== null; ) {
              if (v.key === b)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === h.containerInfo &&
                  v.stateNode.implementation === h.implementation
                ) {
                  t(g, v.sibling),
                    (v = i(v, h.children || [])),
                    (v.return = g),
                    (g = v);
                  break e;
                } else {
                  t(g, v);
                  break;
                }
              else r(g, v);
              v = v.sibling;
            }
            (v = Ka(h, g.mode, w)), (v.return = g), (g = v);
          }
          return a(g);
        case Fr:
          return (b = h._init), S(g, v, b(h._payload), w);
      }
      if (wn(h)) return m(g, v, h, w);
      if (an(h)) return y(g, v, h, w);
      Oi(g, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        v !== null && v.tag === 6
          ? (t(g, v.sibling), (v = i(v, h)), (v.return = g), (g = v))
          : (t(g, v), (v = qa(h, g.mode, w)), (v.return = g), (g = v)),
        a(g))
      : t(g, v);
  }
  return S;
}
var Ht = np(!0),
  ip = np(!1),
  oi = {},
  Dr = nt(oi),
  Gn = nt(oi),
  Vn = nt(oi);
function dt(e) {
  if (e === oi) throw Error(D(174));
  return e;
}
function Fu(e, r) {
  switch ((q(Vn, r), q(Gn, e), q(Dr, oi), (e = r.nodeType), e)) {
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
  Y(Dr), q(Dr, r);
}
function Qt() {
  Y(Dr), Y(Gn), Y(Vn);
}
function op(e) {
  dt(Vn.current);
  var r = dt(Dr.current),
    t = Sl(r, e.type);
  r !== t && (q(Gn, e), q(Dr, t));
}
function zu(e) {
  Gn.current === e && (Y(Dr), Y(Gn));
}
var Z = nt(0);
function yo(e) {
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
var Ua = [];
function $u() {
  for (var e = 0; e < Ua.length; e++)
    Ua[e]._workInProgressVersionPrimary = null;
  Ua.length = 0;
}
var Ki = Br.ReactCurrentDispatcher,
  Ga = Br.ReactCurrentBatchConfig,
  mt = 0,
  ee = null,
  ae = null,
  de = null,
  wo = !1,
  Pn = !1,
  Hn = 0,
  hh = 0;
function be() {
  throw Error(D(321));
}
function _u(e, r) {
  if (r === null) return !1;
  for (var t = 0; t < r.length && t < e.length; t++)
    if (!mr(e[t], r[t])) return !1;
  return !0;
}
function ju(e, r, t, n, i, o) {
  if (
    ((mt = o),
    (ee = r),
    (r.memoizedState = null),
    (r.updateQueue = null),
    (r.lanes = 0),
    (Ki.current = e === null || e.memoizedState === null ? xh : bh),
    (e = t(n, i)),
    Pn)
  ) {
    o = 0;
    do {
      if (((Pn = !1), (Hn = 0), 25 <= o)) throw Error(D(301));
      (o += 1),
        (de = ae = null),
        (r.updateQueue = null),
        (Ki.current = Ch),
        (e = t(n, i));
    } while (Pn);
  }
  if (
    ((Ki.current = So),
    (r = ae !== null && ae.next !== null),
    (mt = 0),
    (de = ae = ee = null),
    (wo = !1),
    r)
  )
    throw Error(D(300));
  return e;
}
function Wu() {
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
  if (ae === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var r = de === null ? ee.memoizedState : de.next;
  if (r !== null) (de = r), (ae = e);
  else {
    if (e === null) throw Error(D(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
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
  var n = ae,
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
      s = o;
    do {
      var f = s.lane;
      if ((mt & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (n = s.hasEagerState ? s.eagerState : e(n, s.action));
      else {
        var d = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = d), (a = n)) : (u = u.next = d),
          (ee.lanes |= f),
          (ht |= f);
      }
      s = s.next;
    } while (s !== null && s !== o);
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
function ap() {}
function lp(e, r) {
  var t = ee,
    n = lr(),
    i = r(),
    o = !mr(n.memoizedState, i);
  if (
    (o && ((n.memoizedState = i), (Me = !0)),
    (n = n.queue),
    Uu(cp.bind(null, t, n, e), [e]),
    n.getSnapshot !== r || o || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      qn(9, sp.bind(null, t, n, i, r), void 0, null),
      ue === null)
    )
      throw Error(D(349));
    (mt & 30) !== 0 || up(t, r, i);
  }
  return i;
}
function up(e, r, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: r, value: t }),
    (r = ee.updateQueue),
    r === null
      ? ((r = { lastEffect: null, stores: null }),
        (ee.updateQueue = r),
        (r.stores = [e]))
      : ((t = r.stores), t === null ? (r.stores = [e]) : t.push(e));
}
function sp(e, r, t, n) {
  (r.value = t), (r.getSnapshot = n), dp(r) && ir(e, 1, -1);
}
function cp(e, r, t) {
  return t(function () {
    dp(r) && ir(e, 1, -1);
  });
}
function dp(e) {
  var r = e.getSnapshot;
  e = e.value;
  try {
    var t = r();
    return !mr(e, t);
  } catch {
    return !0;
  }
}
function Ac(e) {
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
    (e = e.dispatch = Sh.bind(null, ee, e)),
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
function fp() {
  return lr().memoizedState;
}
function Yi(e, r, t, n) {
  var i = xr();
  (ee.flags |= e),
    (i.memoizedState = qn(1 | r, t, void 0, n === void 0 ? null : n));
}
function Go(e, r, t, n) {
  var i = lr();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (ae !== null) {
    var a = ae.memoizedState;
    if (((o = a.destroy), n !== null && _u(n, a.deps))) {
      i.memoizedState = qn(r, t, o, n);
      return;
    }
  }
  (ee.flags |= e), (i.memoizedState = qn(1 | r, t, o, n));
}
function Lc(e, r) {
  return Yi(8390656, 8, e, r);
}
function Uu(e, r) {
  return Go(2048, 8, e, r);
}
function pp(e, r) {
  return Go(4, 2, e, r);
}
function vp(e, r) {
  return Go(4, 4, e, r);
}
function gp(e, r) {
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
function mp(e, r, t) {
  return (
    (t = t != null ? t.concat([e]) : null), Go(4, 4, gp.bind(null, r, e), t)
  );
}
function Gu() {}
function hp(e, r) {
  var t = lr();
  r = r === void 0 ? null : r;
  var n = t.memoizedState;
  return n !== null && r !== null && _u(r, n[1])
    ? n[0]
    : ((t.memoizedState = [e, r]), e);
}
function yp(e, r) {
  var t = lr();
  r = r === void 0 ? null : r;
  var n = t.memoizedState;
  return n !== null && r !== null && _u(r, n[1])
    ? n[0]
    : ((e = e()), (t.memoizedState = [e, r]), e);
}
function wp(e, r, t) {
  return (mt & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = t))
    : (mr(t, r) || ((t = Ef()), (ee.lanes |= t), (ht |= t), (e.baseState = !0)),
      r);
}
function yh(e, r) {
  var t = U;
  (U = t !== 0 && 4 > t ? t : 4), e(!0);
  var n = Ga.transition;
  Ga.transition = {};
  try {
    e(!1), r();
  } finally {
    (U = t), (Ga.transition = n);
  }
}
function Sp() {
  return lr().memoizedState;
}
function wh(e, r, t) {
  var n = qr(e);
  (t = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null }),
    xp(e)
      ? bp(r, t)
      : (Cp(e, r, t), (t = Ne()), (e = ir(e, n, t)), e !== null && Dp(e, r, n));
}
function Sh(e, r, t) {
  var n = qr(e),
    i = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (xp(e)) bp(r, i);
  else {
    Cp(e, r, i);
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
    (t = Ne()), (e = ir(e, n, t)), e !== null && Dp(e, r, n);
  }
}
function xp(e) {
  var r = e.alternate;
  return e === ee || (r !== null && r === ee);
}
function bp(e, r) {
  Pn = wo = !0;
  var t = e.pending;
  t === null ? (r.next = r) : ((r.next = t.next), (t.next = r)),
    (e.pending = r);
}
function Cp(e, r, t) {
  jp(e)
    ? ((e = r.interleaved),
      e === null
        ? ((t.next = t), fr === null ? (fr = [r]) : fr.push(r))
        : ((t.next = e.next), (e.next = t)),
      (r.interleaved = t))
    : ((e = r.pending),
      e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (r.pending = t));
}
function Dp(e, r, t) {
  if ((t & 4194240) !== 0) {
    var n = r.lanes;
    (n &= e.pendingLanes), (t |= n), (r.lanes = t), bu(e, t);
  }
}
var So = {
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
  xh = {
    readContext: ar,
    useCallback: function (e, r) {
      return (xr().memoizedState = [e, r === void 0 ? null : r]), e;
    },
    useContext: ar,
    useEffect: Lc,
    useImperativeHandle: function (e, r, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Yi(4194308, 4, gp.bind(null, r, e), t)
      );
    },
    useLayoutEffect: function (e, r) {
      return Yi(4194308, 4, e, r);
    },
    useInsertionEffect: function (e, r) {
      return Yi(4, 2, e, r);
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
        (e = e.dispatch = wh.bind(null, ee, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var r = xr();
      return (e = { current: e }), (r.memoizedState = e);
    },
    useState: Ac,
    useDebugValue: Gu,
    useDeferredValue: function (e) {
      return (xr().memoizedState = e);
    },
    useTransition: function () {
      var e = Ac(!1),
        r = e[0];
      return (e = yh.bind(null, e[1])), (xr().memoizedState = e), [r, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, r, t) {
      var n = ee,
        i = xr();
      if (J) {
        if (t === void 0) throw Error(D(407));
        t = t();
      } else {
        if (((t = r()), ue === null)) throw Error(D(349));
        (mt & 30) !== 0 || up(n, r, t);
      }
      i.memoizedState = t;
      var o = { value: t, getSnapshot: r };
      return (
        (i.queue = o),
        Lc(cp.bind(null, n, o, e), [e]),
        (n.flags |= 2048),
        qn(9, sp.bind(null, n, o, t, r), void 0, null),
        t
      );
    },
    useId: function () {
      var e = xr(),
        r = ue.identifierPrefix;
      if (J) {
        var t = Or,
          n = Nr;
        (t = (n & ~(1 << (32 - gr(n) - 1))).toString(32) + t),
          (r = ":" + r + "R" + t),
          (t = Hn++),
          0 < t && (r += "H" + t.toString(32)),
          (r += ":");
      } else (t = hh++), (r = ":" + r + "r" + t.toString(32) + ":");
      return (e.memoizedState = r);
    },
    unstable_isNewReconciler: !1,
  },
  bh = {
    readContext: ar,
    useCallback: hp,
    useContext: ar,
    useEffect: Uu,
    useImperativeHandle: mp,
    useInsertionEffect: pp,
    useLayoutEffect: vp,
    useMemo: yp,
    useReducer: Va,
    useRef: fp,
    useState: function () {
      return Va(Qn);
    },
    useDebugValue: Gu,
    useDeferredValue: function (e) {
      var r = lr();
      return wp(r, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Va(Qn)[0],
        r = lr().memoizedState;
      return [e, r];
    },
    useMutableSource: ap,
    useSyncExternalStore: lp,
    useId: Sp,
    unstable_isNewReconciler: !1,
  },
  Ch = {
    readContext: ar,
    useCallback: hp,
    useContext: ar,
    useEffect: Uu,
    useImperativeHandle: mp,
    useInsertionEffect: pp,
    useLayoutEffect: vp,
    useMemo: yp,
    useReducer: Ha,
    useRef: fp,
    useState: function () {
      return Ha(Qn);
    },
    useDebugValue: Gu,
    useDeferredValue: function (e) {
      var r = lr();
      return ae === null ? (r.memoizedState = e) : wp(r, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Ha(Qn)[0],
        r = lr().memoizedState;
      return [e, r];
    },
    useMutableSource: ap,
    useSyncExternalStore: lp,
    useId: Sp,
    unstable_isNewReconciler: !1,
  };
function Vu(e, r) {
  try {
    var t = "",
      n = r;
    do (t += Xg(n)), (n = n.return);
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
function Ul(e, r) {
  try {
    console.error(r.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Dh = typeof WeakMap == "function" ? WeakMap : Map;
function Ep(e, r, t) {
  (t = Tr(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var n = r.value;
  return (
    (t.callback = function () {
      bo || ((bo = !0), (Jl = n)), Ul(e, r);
    }),
    t
  );
}
function Ip(e, r, t) {
  (t = Tr(-1, t)), (t.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = r.value;
    (t.payload = function () {
      return n(i);
    }),
      (t.callback = function () {
        Ul(e, r);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        Ul(e, r),
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
function Bc(e, r, t) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Dh();
    var i = new Set();
    n.set(r, i);
  } else (i = n.get(r)), i === void 0 && ((i = new Set()), n.set(r, i));
  i.has(t) || (i.add(t), (e = Fh.bind(null, e, r, t)), r.then(e, e));
}
function Mc(e) {
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
function Fc(e, r, t, n, i) {
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
var Pp, Gl, kp, Np;
Pp = function (e, r) {
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
kp = function (e, r, t, n) {
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
          (e.onclick = so);
    }
    xl(t, n);
    var a;
    t = null;
    for (s in i)
      if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var l = i[s];
          for (a in l) l.hasOwnProperty(a) && (t || (t = {}), (t[a] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (An.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in n) {
      var u = n[s];
      if (
        ((l = i != null ? i[s] : void 0),
        n.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (t || (t = {}), (t[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                l[a] !== u[a] &&
                (t || (t = {}), (t[a] = u[a]));
          } else t || (o || (o = []), o.push(s, t)), (t = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (An.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && K("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(s, u));
    }
    t && (o = o || []).push("style", t);
    var s = o;
    (r.updateQueue = s) && (r.flags |= 4);
  }
};
Np = function (e, r, t, n) {
  t !== n && (r.flags |= 4);
};
function pn(e, r) {
  if (!J)
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
function Eh(e, r, t) {
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
      return ze(r.type) && co(), Ce(r), null;
    case 3:
      return (
        (n = r.stateNode),
        Qt(),
        Y(Fe),
        Y(Ee),
        $u(),
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
      zu(r);
      var i = dt(Vn.current);
      if (((t = r.type), e !== null && r.stateNode != null))
        kp(e, r, t, n, i),
          e.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
      else {
        if (!n) {
          if (r.stateNode === null) throw Error(D(166));
          return Ce(r), null;
        }
        if (((e = dt(Dr.current)), dn(r))) {
          (n = r.stateNode), (t = r.type);
          var o = r.memoizedProps;
          switch (((n[br] = r), (n[Un] = o), (e = (r.mode & 1) !== 0), t)) {
            case "dialog":
              K("cancel", n), K("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < xn.length; i++) K(xn[i], n);
              break;
            case "source":
              K("error", n);
              break;
            case "img":
            case "image":
            case "link":
              K("error", n), K("load", n);
              break;
            case "details":
              K("toggle", n);
              break;
            case "input":
              Xs(n, o), K("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                K("invalid", n);
              break;
            case "textarea":
              Zs(n, o), K("invalid", n);
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
                  K("scroll", n);
            }
          switch (t) {
            case "input":
              xi(n), Js(n, o, !0);
              break;
            case "textarea":
              xi(n), ec(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = so);
          }
          (n = i), (r.updateQueue = n), n !== null && (r.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = cf(t)),
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
            (e[Un] = n),
            Pp(e, r, !1, !1),
            (r.stateNode = e);
          e: {
            switch (((a = bl(t, n)), t)) {
              case "dialog":
                K("cancel", e), K("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < xn.length; i++) K(xn[i], e);
                i = n;
                break;
              case "source":
                K("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                K("error", e), K("load", e), (i = n);
                break;
              case "details":
                K("toggle", e), (i = n);
                break;
              case "input":
                Xs(e, n), (i = ml(e, n)), K("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = re({}, n, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                Zs(e, n), (i = wl(e, n)), K("invalid", e);
                break;
              default:
                i = n;
            }
            xl(t, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? pf(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && df(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (t !== "textarea" || u !== "") && Ln(e, u)
                    : typeof u == "number" && Ln(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (An.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && K("scroll", e)
                      : u != null && mu(e, o, u, a));
              }
            switch (t) {
              case "input":
                xi(e), Js(e, n, !1);
                break;
              case "textarea":
                xi(e), ec(e);
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
                typeof i.onClick == "function" && (e.onclick = so);
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
      if (e && r.stateNode != null) Np(e, r, e.memoizedProps, n);
      else {
        if (typeof n != "string" && r.stateNode === null) throw Error(D(166));
        if (((t = dt(Vn.current)), dt(Dr.current), dn(r))) {
          if (
            ((n = r.stateNode),
            (t = r.memoizedProps),
            (n[br] = r),
            (o = n.nodeValue !== t) && ((e = We), e !== null))
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
        (Y(Z),
        (n = r.memoizedState),
        J && Be !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
      ) {
        for (n = Be; n; ) n = kr(n.nextSibling);
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
                  ? le === 0 && (le = 3)
                  : Xu())),
            r.updateQueue !== null && (r.flags |= 4),
            Ce(r),
            null)
      );
    case 4:
      return (
        Qt(), Gl(e, r), e === null && jn(r.stateNode.containerInfo), Ce(r), null
      );
    case 10:
      return Ru(r.type._context), Ce(r), null;
    case 17:
      return ze(r.type) && co(), Ce(r), null;
    case 19:
      if ((Y(Z), (o = r.memoizedState), o === null)) return Ce(r), null;
      if (((n = (r.flags & 128) !== 0), (a = o.rendering), a === null))
        if (n) pn(o, !1);
        else {
          if (le !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = r.child; e !== null; ) {
              if (((a = yo(e)), a !== null)) {
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
                return q(Z, (Z.current & 1) | 2), r.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ne() > qt &&
            ((r.flags |= 128), (n = !0), pn(o, !1), (r.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = yo(a)), e !== null)) {
            if (
              ((r.flags |= 128),
              (n = !0),
              (t = e.updateQueue),
              t !== null && ((r.updateQueue = t), (r.flags |= 4)),
              pn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !J)
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
          q(Z, n ? (t & 1) | 2 : t & 1),
          r)
        : (Ce(r), null);
    case 22:
    case 23:
      return (
        Yu(),
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
var Ih = Br.ReactCurrentOwner,
  Me = !1;
function ke(e, r, t, n) {
  r.child = e === null ? ip(r, null, t, n) : Ht(r, e.child, t, n);
}
function zc(e, r, t, n, i) {
  t = t.render;
  var o = r.ref;
  return (
    jt(r, i),
    (n = ju(e, r, t, n, o, i)),
    (t = Wu()),
    e !== null && !Me
      ? ((r.updateQueue = e.updateQueue),
        (r.flags &= -2053),
        (e.lanes &= ~i),
        Lr(e, r, i))
      : (J && t && Lu(r), (r.flags |= 1), ke(e, r, n, i), r.child)
  );
}
function $c(e, r, t, n, i) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" &&
      !Ju(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((r.tag = 15), (r.type = o), Op(e, r, o, n, i))
      : ((e = Zi(t.type, null, n, r, r.mode, i)),
        (e.ref = r.ref),
        (e.return = r),
        (r.child = e));
  }
  if (((o = e.child), (e.lanes & i) === 0)) {
    var a = o.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : _n), t(a, n) && e.ref === r.ref)
    )
      return Lr(e, r, i);
  }
  return (
    (r.flags |= 1),
    (e = et(o, n)),
    (e.ref = r.ref),
    (e.return = r),
    (r.child = e)
  );
}
function Op(e, r, t, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (_n(o, n) && e.ref === r.ref)
      if (((Me = !1), (r.pendingProps = n = o), (e.lanes & i) !== 0))
        (e.flags & 131072) !== 0 && (Me = !0);
      else return (r.lanes = e.lanes), Lr(e, r, i);
  }
  return Vl(e, r, t, n, i);
}
function Tp(e, r, t) {
  var n = r.pendingProps,
    i = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if ((r.mode & 1) === 0)
      (r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(Mt, _e),
        (_e |= t);
    else if ((t & 1073741824) !== 0)
      (r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : t),
        q(Mt, _e),
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
        q(Mt, _e),
        (_e |= e),
        null
      );
  else
    o !== null ? ((n = o.baseLanes | t), (r.memoizedState = null)) : (n = t),
      q(Mt, _e),
      (_e |= n);
  return ke(e, r, i, t), r.child;
}
function Rp(e, r) {
  var t = r.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((r.flags |= 512), (r.flags |= 2097152));
}
function Vl(e, r, t, n, i) {
  var o = ze(t) ? vt : Ee.current;
  return (
    (o = Gt(r, o)),
    jt(r, i),
    (t = ju(e, r, t, n, o, i)),
    (n = Wu()),
    e !== null && !Me
      ? ((r.updateQueue = e.updateQueue),
        (r.flags &= -2053),
        (e.lanes &= ~i),
        Lr(e, r, i))
      : (J && n && Lu(r), (r.flags |= 1), ke(e, r, t, i), r.child)
  );
}
function _c(e, r, t, n, i) {
  if (ze(t)) {
    var o = !0;
    fo(r);
  } else o = !1;
  if ((jt(r, i), r.stateNode === null))
    e !== null && ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
      ep(r, t, n),
      _l(r, t, n, i),
      (n = !0);
  else if (e === null) {
    var a = r.stateNode,
      l = r.memoizedProps;
    a.props = l;
    var u = a.context,
      s = t.contextType;
    typeof s == "object" && s !== null
      ? (s = ar(s))
      : ((s = ze(t) ? vt : Ee.current), (s = Gt(r, s)));
    var f = t.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== n || u !== s) && Nc(r, a, n, s)),
      (zr = !1);
    var c = r.memoizedState;
    (a.state = c),
      go(r, n, a, i),
      (u = r.memoizedState),
      l !== n || c !== u || Fe.current || zr
        ? (typeof f == "function" && ($l(r, t, f, n), (u = r.memoizedState)),
          (l = zr || kc(r, t, l, n, c, u, s))
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
          (a.context = s),
          (n = l))
        : (typeof a.componentDidMount == "function" && (r.flags |= 4194308),
          (n = !1));
  } else {
    (a = r.stateNode),
      Jf(e, r),
      (l = r.memoizedProps),
      (s = r.type === r.elementType ? l : sr(r.type, l)),
      (a.props = s),
      (d = r.pendingProps),
      (c = a.context),
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
      ((l !== d || c !== u) && Nc(r, a, n, u)),
      (zr = !1),
      (c = r.memoizedState),
      (a.state = c),
      go(r, n, a, i);
    var m = r.memoizedState;
    l !== d || c !== m || Fe.current || zr
      ? (typeof p == "function" && ($l(r, t, p, n), (m = r.memoizedState)),
        (s = zr || kc(r, t, s, n, c, m, u) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, m, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, m, u)),
            typeof a.componentDidUpdate == "function" && (r.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && c === e.memoizedState) ||
              (r.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && c === e.memoizedState) ||
              (r.flags |= 1024),
            (r.memoizedProps = n),
            (r.memoizedState = m)),
        (a.props = n),
        (a.state = m),
        (a.context = u),
        (n = s))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && c === e.memoizedState) ||
          (r.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && c === e.memoizedState) ||
          (r.flags |= 1024),
        (n = !1));
  }
  return Hl(e, r, t, n, o, i);
}
function Hl(e, r, t, n, i, o) {
  Rp(e, r);
  var a = (r.flags & 128) !== 0;
  if (!n && !a) return i && Ec(r, t, !1), Lr(e, r, o);
  (n = r.stateNode), (Ih.current = r);
  var l =
    a && typeof t.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (r.flags |= 1),
    e !== null && a
      ? ((r.child = Ht(r, e.child, null, o)), (r.child = Ht(r, null, l, o)))
      : ke(e, r, l, o),
    (r.memoizedState = n.state),
    i && Ec(r, t, !0),
    r.child
  );
}
function Ap(e) {
  var r = e.stateNode;
  r.pendingContext
    ? Dc(e, r.pendingContext, r.pendingContext !== r.context)
    : r.context && Dc(e, r.context, !1),
    Fu(e, r.containerInfo);
}
function jc(e, r, t, n, i) {
  return Vt(), Mu(i), (r.flags |= 256), ke(e, r, t, n), r.child;
}
var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ri(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wc(e, r) {
  return {
    baseLanes: e.baseLanes | r,
    cachePool: null,
    transitions: e.transitions,
  };
}
function Lp(e, r, t) {
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
    q(Z, i & 1),
    e === null)
  )
    return (
      Wl(r),
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
                : (o = Eo(i, n, 0, null)),
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
            (n = Eo({ mode: "visible", children: n.children }, i, 0, null)),
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
        if (((n = ue), n !== null)) {
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
        Xu(), (r = Ai(e, r, t, Error(D(421))));
      } else
        l.data === "$?"
          ? ((r.flags |= 128),
            (r.child = e.child),
            (r = zh.bind(null, e)),
            (l._reactRetry = r),
            (r = null))
          : ((t = i.treeContext),
            (Be = kr(l.nextSibling)),
            (We = r),
            (J = !0),
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
      ? ((n = Gc(e, r, n.children, n.fallback, t)),
        (o = r.child),
        (i = e.child.memoizedState),
        (o.memoizedState = i === null ? Ri(t) : Wc(i, t)),
        (o.childLanes = e.childLanes & ~t),
        (r.memoizedState = Ti),
        n)
      : ((t = Uc(e, r, n.children, t)), (r.memoizedState = null), t);
  }
  return o
    ? ((n = Gc(e, r, n.children, n.fallback, t)),
      (o = r.child),
      (i = e.child.memoizedState),
      (o.memoizedState = i === null ? Ri(t) : Wc(i, t)),
      (o.childLanes = e.childLanes & ~t),
      (r.memoizedState = Ti),
      n)
    : ((t = Uc(e, r, n.children, t)), (r.memoizedState = null), t);
}
function Ql(e, r) {
  return (
    (r = Eo({ mode: "visible", children: r }, e.mode, 0, null)),
    (r.return = e),
    (e.child = r)
  );
}
function Uc(e, r, t, n) {
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
function Gc(e, r, t, n, i) {
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
    n !== null && Mu(n),
    Ht(r, e.child, null, t),
    (e = Ql(r, r.pendingProps.children)),
    (e.flags |= 2),
    (r.memoizedState = null),
    e
  );
}
function Vc(e, r, t) {
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
function Bp(e, r, t) {
  var n = r.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  if ((ke(e, r, n.children, t), (n = Z.current), (n & 2) !== 0))
    (n = (n & 1) | 2), (r.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = r.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vc(e, t, r);
        else if (e.tag === 19) Vc(e, t, r);
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
  if ((q(Z, n), (r.mode & 1) === 0)) r.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (t = r.child, i = null; t !== null; )
          (e = t.alternate),
            e !== null && yo(e) === null && (i = t),
            (t = t.sibling);
        (t = i),
          t === null
            ? ((i = r.child), (r.child = null))
            : ((i = t.sibling), (t.sibling = null)),
          Qa(r, !1, i, t, o);
        break;
      case "backwards":
        for (t = null, i = r.child, r.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && yo(e) === null)) {
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
function Lr(e, r, t) {
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
function Ph(e, r, t) {
  switch (r.tag) {
    case 3:
      Ap(r), Vt();
      break;
    case 5:
      op(r);
      break;
    case 1:
      ze(r.type) && fo(r);
      break;
    case 4:
      Fu(r, r.stateNode.containerInfo);
      break;
    case 10:
      var n = r.type._context,
        i = r.memoizedProps.value;
      q(po, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = r.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (q(Z, Z.current & 1), (r.flags |= 128), null)
          : (t & r.child.childLanes) !== 0
          ? Lp(e, r, t)
          : (q(Z, Z.current & 1),
            (e = Lr(e, r, t)),
            e !== null ? e.sibling : null);
      q(Z, Z.current & 1);
      break;
    case 19:
      if (((n = (t & r.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (n) return Bp(e, r, t);
        r.flags |= 128;
      }
      if (
        ((i = r.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        q(Z, Z.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (r.lanes = 0), Tp(e, r, t);
  }
  return Lr(e, r, t);
}
function kh(e, r) {
  switch ((Bu(r), r.tag)) {
    case 1:
      return (
        ze(r.type) && co(),
        (e = r.flags),
        e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
      );
    case 3:
      return (
        Qt(),
        Y(Fe),
        Y(Ee),
        $u(),
        (e = r.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((r.flags = (e & -65537) | 128), r)
          : null
      );
    case 5:
      return zu(r), null;
    case 13:
      if ((Y(Z), (e = r.memoizedState), e !== null && e.dehydrated !== null)) {
        if (r.alternate === null) throw Error(D(340));
        Vt();
      }
      return (
        (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
      );
    case 19:
      return Y(Z), null;
    case 4:
      return Qt(), null;
    case 10:
      return Ru(r.type._context), null;
    case 22:
    case 23:
      return Yu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Li = !1,
  De = !1,
  Nh = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Bt(e, r) {
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
var Hc = !1;
function Oh(e, r) {
  if (((Rl = ao), (e = jf()), Nu(e))) {
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
            s = 0,
            f = 0,
            d = e,
            c = null;
          r: for (;;) {
            for (
              var p;
              d !== t || (i !== 0 && d.nodeType !== 3) || (l = a + i),
                d !== o || (n !== 0 && d.nodeType !== 3) || (u = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (c = d), (d = p);
            for (;;) {
              if (d === e) break r;
              if (
                (c === t && ++s === i && (l = a),
                c === o && ++f === n && (u = a),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = c), (c = d.parentNode);
            }
            d = p;
          }
          t = l === -1 || u === -1 ? null : { start: l, end: u };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Al = { focusedElem: e, selectionRange: t }, ao = !1, O = r; O !== null; )
    if (((r = O), (e = r.child), (r.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = r), (O = e);
    else
      for (; O !== null; ) {
        r = O;
        try {
          var m = r.alternate;
          if ((r.flags & 1024) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps,
                    S = m.memoizedState,
                    g = r.stateNode,
                    v = g.getSnapshotBeforeUpdate(
                      r.elementType === r.type ? y : sr(r.type, y),
                      S
                    );
                  g.__reactInternalSnapshotBeforeUpdate = v;
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
  return (m = Hc), (Hc = !1), m;
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
function Mp(e) {
  var r = e.alternate;
  r !== null && ((e.alternate = null), Mp(r)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((r = e.stateNode),
      r !== null &&
        (delete r[br], delete r[Un], delete r[Ml], delete r[ph], delete r[vh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Fp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fp(e.return)) return null;
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
          t != null || r.onclick !== null || (r.onclick = so));
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
  for (t = t.child; t !== null; ) zp(e, r, t), (t = t.sibling);
}
function zp(e, r, t) {
  if (Cr && typeof Cr.onCommitFiberUnmount == "function")
    try {
      Cr.onCommitFiberUnmount(Fo, t);
    } catch {}
  switch (t.tag) {
    case 5:
      De || Bt(t, r);
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
        (Bt(t, r),
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
function qc(e) {
  var r = e.updateQueue;
  if (r !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Nh()),
      r.forEach(function (n) {
        var i = $h.bind(null, e, n);
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
        zp(o, a, i), (he = null), (cr = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        te(i, r, s);
      }
    }
  if (r.subtreeFlags & 12854)
    for (r = r.child; r !== null; ) $p(r, e), (r = r.sibling);
}
function $p(e, r) {
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
        } catch (m) {
          te(e, e.return, m);
        }
        try {
          kn(5, e, e.return);
        } catch (m) {
          te(e, e.return, m);
        }
      }
      break;
    case 1:
      ur(r, e), Sr(e), n & 512 && t !== null && Bt(t, t.return);
      break;
    case 5:
      if (
        (ur(r, e),
        Sr(e),
        n & 512 && t !== null && Bt(t, t.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ln(i, "");
        } catch (m) {
          te(e, e.return, m);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = t !== null ? t.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && uf(i, o),
              bl(l, a);
            var s = bl(l, o);
            for (a = 0; a < u.length; a += 2) {
              var f = u[a],
                d = u[a + 1];
              f === "style"
                ? pf(i, d)
                : f === "dangerouslySetInnerHTML"
                ? df(i, d)
                : f === "children"
                ? Ln(i, d)
                : mu(i, f, d, s);
            }
            switch (l) {
              case "input":
                hl(i, o);
                break;
              case "textarea":
                sf(i, o);
                break;
              case "select":
                var c = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? Ft(i, !!o.multiple, p, !1)
                  : c !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ft(i, !!o.multiple, o.defaultValue, !0)
                      : Ft(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Un] = o;
          } catch (m) {
            te(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((ur(r, e), Sr(e), n & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (s = e.stateNode), (f = e.memoizedProps);
        try {
          s.nodeValue = f;
        } catch (m) {
          te(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (ur(r, e), Sr(e), n & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          zn(r.containerInfo);
        } catch (m) {
          te(e, e.return, m);
        }
      break;
    case 4:
      ur(r, e), Sr(e);
      break;
    case 13:
      ur(r, e),
        Sr(e),
        (s = e.child),
        s.flags & 8192 &&
          s.memoizedState !== null &&
          (s.alternate === null || s.alternate.memoizedState === null) &&
          (qu = ne()),
        n & 4 && qc(e);
      break;
    case 22:
      if (
        ((s = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((De = (f = De) || s), ur(r, e), (De = f)) : ur(r, e),
        Sr(e),
        n & 8192)
      ) {
        f = e.memoizedState !== null;
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (i = c.stateNode),
                  f
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = c.stateNode),
                      (u = c.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = ff("display", a)));
              } catch (m) {
                te(e, e.return, m);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = f ? "" : c.memoizedProps;
              } catch (m) {
                te(e, e.return, m);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
        if (f && !s && (e.mode & 1) !== 0)
          for (O = e, e = e.child; e !== null; ) {
            for (s = O = e; O !== null; ) {
              switch (((f = O), (d = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kn(4, f, f.return);
                  break;
                case 1:
                  if (
                    (Bt(f, f.return),
                    (o = f.stateNode),
                    typeof o.componentWillUnmount == "function")
                  ) {
                    (c = f), (p = f.return);
                    try {
                      (i = c),
                        (o.props = i.memoizedProps),
                        (o.state = i.memoizedState),
                        o.componentWillUnmount();
                    } catch (m) {
                      te(c, p, m);
                    }
                  }
                  break;
                case 5:
                  Bt(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Yc(s);
                    continue;
                  }
              }
              d !== null ? ((d.return = f), (O = d)) : Yc(s);
            }
            e = e.sibling;
          }
      }
      break;
    case 19:
      ur(r, e), Sr(e), n & 4 && qc(e);
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
          if (Fp(t)) {
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
          n.flags & 32 && (Ln(i, ""), (n.flags &= -33));
          var o = Qc(e);
          Xl(e, o, i);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            l = Qc(e);
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
function Th(e, r, t) {
  (O = e), _p(e);
}
function _p(e, r, t) {
  for (var n = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || Li;
      if (!a) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || De;
        l = Li;
        var s = De;
        if (((Li = a), (De = u) && !s))
          for (O = i; O !== null; )
            (a = O),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Xc(i)
                : u !== null
                ? ((u.return = a), (O = u))
                : Xc(i);
        for (; o !== null; ) (O = o), _p(o), (o = o.sibling);
        (O = i), (Li = l), (De = s);
      }
      Kc(e);
    } else
      (i.subtreeFlags & 8772) !== 0 && o !== null
        ? ((o.return = i), (O = o))
        : Kc(e);
  }
}
function Kc(e) {
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
              o !== null && Pc(r, o, n);
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
                Pc(r, a, t);
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
                var s = r.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
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
      } catch (c) {
        te(r, r.return, c);
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
function Yc(e) {
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
function Xc(e) {
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
var Rh = Math.ceil,
  xo = Br.ReactCurrentDispatcher,
  Hu = Br.ReactCurrentOwner,
  nr = Br.ReactCurrentBatchConfig,
  _ = 0,
  ue = null,
  ie = null,
  we = 0,
  _e = 0,
  Mt = nt(0),
  le = 0,
  Kn = null,
  ht = 0,
  Ho = 0,
  Qu = 0,
  Nn = null,
  Le = null,
  qu = 0,
  qt = 1 / 0,
  Ir = null,
  bo = !1,
  Jl = null,
  Qr = null,
  Bi = !1,
  Wr = null,
  Co = 0,
  On = 0,
  Zl = null,
  Xi = -1,
  Ji = 0;
function Ne() {
  return (_ & 6) !== 0 ? ne() : Xi !== -1 ? Xi : (Xi = ne());
}
function qr(e) {
  return (e.mode & 1) === 0
    ? 1
    : (_ & 2) !== 0 && we !== 0
    ? we & -we
    : mh.transition !== null
    ? (Ji === 0 && (Ji = Ef()), Ji)
    : ((e = U),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rf(e.type))),
      e);
}
function ir(e, r, t) {
  if (50 < On) throw ((On = 0), (Zl = null), Error(D(185)));
  var n = Qo(e, r);
  return n === null
    ? null
    : (ti(n, r, t),
      ((_ & 2) === 0 || n !== ue) &&
        (n === ue && ((_ & 2) === 0 && (Ho |= r), le === 4 && _r(n, we)),
        $e(n, t),
        r === 1 &&
          _ === 0 &&
          (e.mode & 1) === 0 &&
          ((qt = ne() + 500), Wo && it())),
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
function jp(e) {
  return (ue !== null || fr !== null) && (e.mode & 1) !== 0 && (_ & 2) === 0;
}
function $e(e, r) {
  var t = e.callbackNode;
  mm(e, r);
  var n = oo(e, e === ue ? we : 0);
  if (n === 0)
    t !== null && nc(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((r = n & -n), e.callbackPriority !== r)) {
    if ((t != null && nc(t), r === 1))
      e.tag === 0 ? gh(Jc.bind(null, e)) : Xf(Jc.bind(null, e)),
        dh(function () {
          _ === 0 && it();
        }),
        (t = null);
    else {
      switch (If(n)) {
        case 1:
          t = xu;
          break;
        case 4:
          t = Cf;
          break;
        case 16:
          t = io;
          break;
        case 536870912:
          t = Df;
          break;
        default:
          t = io;
      }
      t = Kp(t, Wp.bind(null, e));
    }
    (e.callbackPriority = r), (e.callbackNode = t);
  }
}
function Wp(e, r) {
  if (((Xi = -1), (Ji = 0), (_ & 6) !== 0)) throw Error(D(327));
  var t = e.callbackNode;
  if (Wt() && e.callbackNode !== t) return null;
  var n = oo(e, e === ue ? we : 0);
  if (n === 0) return null;
  if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || r) r = Do(e, n);
  else {
    r = n;
    var i = _;
    _ |= 2;
    var o = Gp();
    (ue !== e || we !== r) && ((Ir = null), (qt = ne() + 500), ft(e, r));
    do
      try {
        Bh();
        break;
      } catch (l) {
        Up(e, l);
      }
    while (1);
    Tu(),
      (xo.current = o),
      (_ = i),
      ie !== null ? (r = 0) : ((ue = null), (we = 0), (r = le));
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
          !Ah(i) &&
          ((r = Do(e, n)),
          r === 2 && ((o = Pl(e)), o !== 0 && ((n = o), (r = eu(e, o)))),
          r === 1))
      )
        throw ((t = Kn), ft(e, 0), _r(e, n), $e(e, ne()), t);
      switch (((e.finishedWork = i), (e.finishedLanes = n), r)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          ut(e, Le, Ir);
          break;
        case 3:
          if (
            (_r(e, n), (n & 130023424) === n && ((r = qu + 500 - ne()), 10 < r))
          ) {
            if (oo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Bl(ut.bind(null, e, Le, Ir), r);
            break;
          }
          ut(e, Le, Ir);
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
                : 1960 * Rh(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Bl(ut.bind(null, e, Le, Ir), n);
            break;
          }
          ut(e, Le, Ir);
          break;
        case 5:
          ut(e, Le, Ir);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return $e(e, ne()), e.callbackNode === t ? Wp.bind(null, e) : null;
}
function eu(e, r) {
  var t = Nn;
  return (
    e.current.memoizedState.isDehydrated && (ft(e, r).flags |= 256),
    (e = Do(e, r)),
    e !== 2 && ((r = Le), (Le = t), r !== null && ru(r)),
    e
  );
}
function ru(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function Ah(e) {
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
    r &= ~Qu,
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
function Jc(e) {
  if ((_ & 6) !== 0) throw Error(D(327));
  Wt();
  var r = oo(e, 0);
  if ((r & 1) === 0) return $e(e, ne()), null;
  var t = Do(e, r);
  if (e.tag !== 0 && t === 2) {
    var n = Pl(e);
    n !== 0 && ((r = n), (t = eu(e, n)));
  }
  if (t === 1) throw ((t = Kn), ft(e, 0), _r(e, r), $e(e, ne()), t);
  if (t === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = r),
    ut(e, Le, Ir),
    $e(e, ne()),
    null
  );
}
function Ku(e, r) {
  var t = _;
  _ |= 1;
  try {
    return e(r);
  } finally {
    (_ = t), _ === 0 && ((qt = ne() + 500), Wo && it());
  }
}
function yt(e) {
  Wr !== null && Wr.tag === 0 && (_ & 6) === 0 && Wt();
  var r = _;
  _ |= 1;
  var t = nr.transition,
    n = U;
  try {
    if (((nr.transition = null), (U = 1), e)) return e();
  } finally {
    (U = n), (nr.transition = t), (_ = r), (_ & 6) === 0 && it();
  }
}
function Yu() {
  (_e = Mt.current), Y(Mt);
}
function ft(e, r) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), ch(t)), ie !== null))
    for (t = ie.return; t !== null; ) {
      var n = t;
      switch ((Bu(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && co();
          break;
        case 3:
          Qt(), Y(Fe), Y(Ee), $u();
          break;
        case 5:
          zu(n);
          break;
        case 4:
          Qt();
          break;
        case 13:
          Y(Z);
          break;
        case 19:
          Y(Z);
          break;
        case 10:
          Ru(n.type._context);
          break;
        case 22:
        case 23:
          Yu();
      }
      t = t.return;
    }
  if (
    ((ue = e),
    (ie = e = et(e.current, null)),
    (we = _e = r),
    (le = 0),
    (Kn = null),
    (Qu = Ho = ht = 0),
    (Le = Nn = null),
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
function Up(e, r) {
  do {
    var t = ie;
    try {
      if ((Tu(), (Ki.current = So), wo)) {
        for (var n = ee.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        wo = !1;
      }
      if (
        ((mt = 0),
        (de = ae = ee = null),
        (Pn = !1),
        (Hn = 0),
        (Hu.current = null),
        t === null || t.return === null)
      ) {
        (le = 1), (Kn = r), (ie = null);
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
          var s = u,
            f = l,
            d = f.tag;
          if ((f.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
            var c = f.alternate;
            c
              ? ((f.updateQueue = c.updateQueue),
                (f.memoizedState = c.memoizedState),
                (f.lanes = c.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var p = Mc(a);
          if (p !== null) {
            (p.flags &= -257),
              Fc(p, a, l, o, r),
              p.mode & 1 && Bc(o, s, r),
              (r = p),
              (u = s);
            var m = r.updateQueue;
            if (m === null) {
              var y = new Set();
              y.add(u), (r.updateQueue = y);
            } else m.add(u);
            break e;
          } else {
            if ((r & 1) === 0) {
              Bc(o, s, r), Xu();
              break e;
            }
            u = Error(D(426));
          }
        } else if (J && l.mode & 1) {
          var S = Mc(a);
          if (S !== null) {
            (S.flags & 65536) === 0 && (S.flags |= 256),
              Fc(S, a, l, o, r),
              Mu(u);
            break e;
          }
        }
        (o = u),
          le !== 4 && (le = 2),
          Nn === null ? (Nn = [o]) : Nn.push(o),
          (u = Vu(u, l)),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (r &= -r), (l.lanes |= r);
              var g = Ep(l, u, r);
              Ic(l, g);
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
                var w = Ip(l, o, r);
                Ic(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Hp(t);
    } catch (x) {
      (r = x), ie === t && t !== null && (ie = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Gp() {
  var e = xo.current;
  return (xo.current = So), e === null ? So : e;
}
function Xu() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ue === null ||
      ((ht & 268435455) === 0 && (Ho & 268435455) === 0) ||
      _r(ue, we);
}
function Do(e, r) {
  var t = _;
  _ |= 2;
  var n = Gp();
  (ue !== e || we !== r) && ((Ir = null), ft(e, r));
  do
    try {
      Lh();
      break;
    } catch (i) {
      Up(e, i);
    }
  while (1);
  if ((Tu(), (_ = t), (xo.current = n), ie !== null)) throw Error(D(261));
  return (ue = null), (we = 0), le;
}
function Lh() {
  for (; ie !== null; ) Vp(ie);
}
function Bh() {
  for (; ie !== null && !lm(); ) Vp(ie);
}
function Vp(e) {
  var r = qp(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    r === null ? Hp(e) : (ie = r),
    (Hu.current = null);
}
function Hp(e) {
  var r = e;
  do {
    var t = r.alternate;
    if (((e = r.return), (r.flags & 32768) === 0)) {
      if (((t = Eh(t, r, _e)), t !== null)) {
        ie = t;
        return;
      }
    } else {
      if (((t = kh(t, r)), t !== null)) {
        (t.flags &= 32767), (ie = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (ie = null);
        return;
      }
    }
    if (((r = r.sibling), r !== null)) {
      ie = r;
      return;
    }
    ie = r = e;
  } while (r !== null);
  le === 0 && (le = 5);
}
function ut(e, r, t) {
  var n = U,
    i = nr.transition;
  try {
    (nr.transition = null), (U = 1), Mh(e, r, t, n);
  } finally {
    (nr.transition = i), (U = n);
  }
  return null;
}
function Mh(e, r, t, n) {
  do Wt();
  while (Wr !== null);
  if ((_ & 6) !== 0) throw Error(D(327));
  t = e.finishedWork;
  var i = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = t.lanes | t.childLanes;
  if (
    (hm(e, o),
    e === ue && ((ie = ue = null), (we = 0)),
    ((t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0) ||
      Bi ||
      ((Bi = !0),
      Kp(io, function () {
        return Wt(), null;
      })),
    (o = (t.flags & 15990) !== 0),
    (t.subtreeFlags & 15990) !== 0 || o)
  ) {
    (o = nr.transition), (nr.transition = null);
    var a = U;
    U = 1;
    var l = _;
    (_ |= 4),
      (Hu.current = null),
      Oh(e, t),
      $p(t, e),
      nh(Al),
      (ao = !!Rl),
      (Al = Rl = null),
      (e.current = t),
      Th(t),
      um(),
      (_ = l),
      (U = a),
      (nr.transition = o);
  } else e.current = t;
  if (
    (Bi && ((Bi = !1), (Wr = e), (Co = i)),
    (o = e.pendingLanes),
    o === 0 && (Qr = null),
    dm(t.stateNode),
    $e(e, ne()),
    r !== null)
  )
    for (n = e.onRecoverableError, t = 0; t < r.length; t++) n(r[t]);
  if (bo) throw ((bo = !1), (e = Jl), (Jl = null), e);
  return (
    (Co & 1) !== 0 && e.tag !== 0 && Wt(),
    (o = e.pendingLanes),
    (o & 1) !== 0 ? (e === Zl ? On++ : ((On = 0), (Zl = e))) : (On = 0),
    it(),
    null
  );
}
function Wt() {
  if (Wr !== null) {
    var e = If(Co),
      r = nr.transition,
      t = U;
    try {
      if (((nr.transition = null), (U = 16 > e ? 16 : e), Wr === null))
        var n = !1;
      else {
        if (((e = Wr), (Wr = null), (Co = 0), (_ & 6) !== 0))
          throw Error(D(331));
        var i = _;
        for (_ |= 4, O = e.current; O !== null; ) {
          var o = O,
            a = o.child;
          if ((O.flags & 16) !== 0) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (O = s; O !== null; ) {
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
                      var c = f.sibling,
                        p = f.return;
                      if ((Mp(f), f === s)) {
                        O = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = p), (O = c);
                        break;
                      }
                      O = p;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
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
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (O = g);
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
      (U = t), (nr.transition = r);
    }
  }
  return !1;
}
function Zc(e, r, t) {
  (r = Vu(t, r)),
    (r = Ep(e, r, 1)),
    Hr(e, r),
    (r = Ne()),
    (e = Qo(e, 1)),
    e !== null && (ti(e, 1, r), $e(e, r));
}
function te(e, r, t) {
  if (e.tag === 3) Zc(e, e, t);
  else
    for (; r !== null; ) {
      if (r.tag === 3) {
        Zc(r, e, t);
        break;
      } else if (r.tag === 1) {
        var n = r.stateNode;
        if (
          typeof r.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Qr === null || !Qr.has(n)))
        ) {
          (e = Vu(t, e)),
            (e = Ip(r, e, 1)),
            Hr(r, e),
            (e = Ne()),
            (r = Qo(r, 1)),
            r !== null && (ti(r, 1, e), $e(r, e));
          break;
        }
      }
      r = r.return;
    }
}
function Fh(e, r, t) {
  var n = e.pingCache;
  n !== null && n.delete(r),
    (r = Ne()),
    (e.pingedLanes |= e.suspendedLanes & t),
    ue === e &&
      (we & t) === t &&
      (le === 4 || (le === 3 && (we & 130023424) === we && 500 > ne() - qu)
        ? ft(e, 0)
        : (Qu |= t)),
    $e(e, r);
}
function Qp(e, r) {
  r === 0 &&
    ((e.mode & 1) === 0
      ? (r = 1)
      : ((r = Di), (Di <<= 1), (Di & 130023424) === 0 && (Di = 4194304)));
  var t = Ne();
  (e = Qo(e, r)), e !== null && (ti(e, r, t), $e(e, t));
}
function zh(e) {
  var r = e.memoizedState,
    t = 0;
  r !== null && (t = r.retryLane), Qp(e, t);
}
function $h(e, r) {
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
  n !== null && n.delete(r), Qp(e, t);
}
var qp;
qp = function (e, r, t) {
  if (e !== null)
    if (e.memoizedProps !== r.pendingProps || Fe.current) Me = !0;
    else {
      if ((e.lanes & t) === 0 && (r.flags & 128) === 0)
        return (Me = !1), Ph(e, r, t);
      Me = (e.flags & 131072) !== 0;
    }
  else (Me = !1), J && (r.flags & 1048576) !== 0 && rp(r, ho, r.index);
  switch (((r.lanes = 0), r.tag)) {
    case 2:
      var n = r.type;
      e !== null &&
        ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
        (e = r.pendingProps);
      var i = Gt(r, Ee.current);
      jt(r, t), (i = ju(null, r, n, e, i, t));
      var o = Wu();
      return (
        (r.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((r.tag = 1),
            (r.memoizedState = null),
            (r.updateQueue = null),
            ze(n) ? ((o = !0), fo(r)) : (o = !1),
            (r.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Au(r),
            (i.updater = Uo),
            (r.stateNode = i),
            (i._reactInternals = r),
            _l(r, n, e, t),
            (r = Hl(null, r, n, !0, o, t)))
          : ((r.tag = 0), J && o && Lu(r), ke(null, r, i, t), (r = r.child)),
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
          (i = r.tag = jh(n)),
          (e = sr(n, e)),
          i)
        ) {
          case 0:
            r = Vl(null, r, n, e, t);
            break e;
          case 1:
            r = _c(null, r, n, e, t);
            break e;
          case 11:
            r = zc(null, r, n, e, t);
            break e;
          case 14:
            r = $c(null, r, n, sr(n.type, e), t);
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
        _c(e, r, n, i, t)
      );
    case 3:
      e: {
        if ((Ap(r), e === null)) throw Error(D(387));
        (n = r.pendingProps),
          (o = r.memoizedState),
          (i = o.element),
          Jf(e, r),
          go(r, n, null, t);
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
            (i = Error(D(423))), (r = jc(e, r, n, t, i));
            break e;
          } else if (n !== i) {
            (i = Error(D(424))), (r = jc(e, r, n, t, i));
            break e;
          } else
            for (
              Be = kr(r.stateNode.containerInfo.firstChild),
                We = r,
                J = !0,
                dr = null,
                t = ip(r, null, n, t),
                r.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((Vt(), n === i)) {
            r = Lr(e, r, t);
            break e;
          }
          ke(e, r, n, t);
        }
        r = r.child;
      }
      return r;
    case 5:
      return (
        op(r),
        e === null && Wl(r),
        (n = r.type),
        (i = r.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Ll(n, i) ? (a = null) : o !== null && Ll(n, o) && (r.flags |= 32),
        Rp(e, r),
        ke(e, r, a, t),
        r.child
      );
    case 6:
      return e === null && Wl(r), null;
    case 13:
      return Lp(e, r, t);
    case 4:
      return (
        Fu(r, r.stateNode.containerInfo),
        (n = r.pendingProps),
        e === null ? (r.child = Ht(r, null, n, t)) : ke(e, r, n, t),
        r.child
      );
    case 11:
      return (
        (n = r.type),
        (i = r.pendingProps),
        (i = r.elementType === n ? i : sr(n, i)),
        zc(e, r, n, i, t)
      );
    case 7:
      return ke(e, r, r.pendingProps, t), r.child;
    case 8:
      return ke(e, r, r.pendingProps.children, t), r.child;
    case 12:
      return ke(e, r, r.pendingProps.children, t), r.child;
    case 10:
      e: {
        if (
          ((n = r.type._context),
          (i = r.pendingProps),
          (o = r.memoizedProps),
          (a = i.value),
          q(po, n._currentValue),
          (n._currentValue = a),
          o !== null)
        )
          if (mr(o.value, a)) {
            if (o.children === i.children && !Fe.current) {
              r = Lr(e, r, t);
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
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
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
        ke(e, r, i.children, t), (r = r.child);
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
        ke(e, r, n, t),
        r.child
      );
    case 14:
      return (
        (n = r.type),
        (i = sr(n, r.pendingProps)),
        (i = sr(n.type, i)),
        $c(e, r, n, i, t)
      );
    case 15:
      return Op(e, r, r.type, r.pendingProps, t);
    case 17:
      return (
        (n = r.type),
        (i = r.pendingProps),
        (i = r.elementType === n ? i : sr(n, i)),
        e !== null &&
          ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
        (r.tag = 1),
        ze(n) ? ((e = !0), fo(r)) : (e = !1),
        jt(r, t),
        ep(r, n, i),
        _l(r, n, i, t),
        Hl(null, r, n, !0, e, t)
      );
    case 19:
      return Bp(e, r, t);
    case 22:
      return Tp(e, r, t);
  }
  throw Error(D(156, r.tag));
};
function Kp(e, r) {
  return bf(e, r);
}
function _h(e, r, t, n) {
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
  return new _h(e, r, t, n);
}
function Ju(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jh(e) {
  if (typeof e == "function") return Ju(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === yu)) return 11;
    if (e === wu) return 14;
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
function Zi(e, r, t, n, i, o) {
  var a = 2;
  if (((n = e), typeof e == "function")) Ju(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case It:
        return pt(t.children, i, o, r);
      case hu:
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
      case of:
        return Eo(t, i, o, r);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case tf:
              a = 10;
              break e;
            case nf:
              a = 9;
              break e;
            case yu:
              a = 11;
              break e;
            case wu:
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
function Eo(e, r, t, n) {
  return (
    (e = rr(22, e, n, r)),
    (e.elementType = of),
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
function Wh(e, r, t, n, i) {
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
function Zu(e, r, t, n, i, o, a, l, u) {
  return (
    (e = new Wh(e, r, t, l, u)),
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
    Au(o),
    e
  );
}
function Uh(e, r, t) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Et,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: r,
    implementation: t,
  };
}
function Yp(e) {
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
    if (ze(t)) return Yf(e, t, r);
  }
  return r;
}
function Xp(e, r, t, n, i, o, a, l, u) {
  return (
    (e = Zu(t, n, !0, e, i, o, a, l, u)),
    (e.context = Yp(null)),
    (t = e.current),
    (n = Ne()),
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
    o = Ne(),
    a = qr(i);
  return (
    (t = Yp(t)),
    r.context === null ? (r.context = t) : (r.pendingContext = t),
    (r = Tr(o, a)),
    (r.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (r.callback = n),
    Hr(i, r),
    (e = ir(i, a, o)),
    e !== null && qi(e, i, a),
    a
  );
}
function Io(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ed(e, r) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < r ? t : r;
  }
}
function es(e, r) {
  ed(e, r), (e = e.alternate) && ed(e, r);
}
function Gh() {
  return null;
}
var Jp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function rs(e) {
  this._internalRoot = e;
}
Ko.prototype.render = rs.prototype.render = function (e) {
  var r = this._internalRoot;
  if (r === null) throw Error(D(409));
  qo(e, r, null, null);
};
Ko.prototype.unmount = rs.prototype.unmount = function () {
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
    var r = Nf();
    e = { blockedOn: null, target: e, priority: r };
    for (var t = 0; t < $r.length && r !== 0 && r < $r[t].priority; t++);
    $r.splice(t, 0, e), t === 0 && Tf(e);
  }
};
function ts(e) {
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
function rd() {}
function Vh(e, r, t, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var s = Io(a);
        o.call(s);
      };
    }
    var a = Xp(r, n, e, 0, null, !1, !1, "", rd);
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
      var s = Io(u);
      l.call(s);
    };
  }
  var u = Zu(e, 0, !1, null, null, !1, !1, "", rd);
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
        var u = Io(a);
        l.call(u);
      };
    }
    qo(r, a, e, i);
  } else a = Vh(t, r, e, i, n);
  return Io(a);
}
Pf = function (e) {
  switch (e.tag) {
    case 3:
      var r = e.stateNode;
      if (r.current.memoizedState.isDehydrated) {
        var t = Sn(r.pendingLanes);
        t !== 0 &&
          (bu(r, t | 1),
          $e(r, ne()),
          (_ & 6) === 0 && ((qt = ne() + 500), it()));
      }
      break;
    case 13:
      var n = Ne();
      yt(function () {
        return ir(e, 1, n);
      }),
        es(e, 1);
  }
};
Cu = function (e) {
  if (e.tag === 13) {
    var r = Ne();
    ir(e, 134217728, r), es(e, 134217728);
  }
};
kf = function (e) {
  if (e.tag === 13) {
    var r = Ne(),
      t = qr(e);
    ir(e, t, r), es(e, t);
  }
};
Nf = function () {
  return U;
};
Of = function (e, r) {
  var t = U;
  try {
    return (U = e), r();
  } finally {
    U = t;
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
            lf(n), hl(n, i);
          }
        }
      }
      break;
    case "textarea":
      sf(e, t);
      break;
    case "select":
      (r = t.value), r != null && Ft(e, !!t.multiple, r, !1);
  }
};
mf = Ku;
hf = yt;
var Hh = { usingClientEntryPoint: !1, Events: [ii, Ot, jo, vf, gf, Ku] },
  vn = {
    findFiberByHostInstance: ct,
    bundleType: 0,
    version: "18.1.0",
    rendererPackageName: "react-dom",
  },
  Qh = {
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
    currentDispatcherRef: Br.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Sf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vn.findFiberByHostInstance || Gh,
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
      (Fo = Mi.inject(Qh)), (Cr = Mi);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hh;
He.createPortal = function (e, r) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ts(r)) throw Error(D(200));
  return Uh(e, r, null, t);
};
He.createRoot = function (e, r) {
  if (!ts(e)) throw Error(D(299));
  var t = !1,
    n = "",
    i = Jp;
  return (
    r != null &&
      (r.unstable_strictMode === !0 && (t = !0),
      r.identifierPrefix !== void 0 && (n = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    (r = Zu(e, 1, !1, null, null, t, !1, n, i)),
    (e[Ar] = r.current),
    jn(e.nodeType === 8 ? e.parentNode : e),
    new rs(r)
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
  return (e = Sf(r)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return yt(e);
};
He.hydrate = function (e, r, t) {
  if (!Yo(r)) throw Error(D(200));
  return Xo(null, e, r, !0, t);
};
He.hydrateRoot = function (e, r, t) {
  if (!ts(e)) throw Error(D(405));
  var n = (t != null && t.hydratedSources) || null,
    i = !1,
    o = "",
    a = Jp;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (i = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (r = Xp(r, null, e, 1, t != null ? t : null, i, !1, o, a)),
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
He.unstable_batchedUpdates = Ku;
He.unstable_renderSubtreeIntoContainer = function (e, r, t, n) {
  if (!Yo(t)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Xo(e, r, t, !1, n);
};
He.version = "18.1.0-next-22edb9f77-20220426";
function Zp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zp);
    } catch (e) {
      console.error(e);
    }
}
Zp(), (Mo.exports = He);
var qh = Mo.exports,
  td = Mo.exports;
(cl.createRoot = td.createRoot), (cl.hydrateRoot = td.hydrateRoot);
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
 */ var Kh = I.exports,
  Yh = Symbol.for("react.element"),
  Xh = Symbol.for("react.fragment"),
  Jh = Object.prototype.hasOwnProperty,
  Zh = Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ey = { key: !0, ref: !0, __self: !0, __source: !0 };
function ev(e, r, t) {
  var n,
    i = {},
    o = null,
    a = null;
  t !== void 0 && (o = "" + t),
    r.key !== void 0 && (o = "" + r.key),
    r.ref !== void 0 && (a = r.ref);
  for (n in r) Jh.call(r, n) && !ey.hasOwnProperty(n) && (i[n] = r[n]);
  if (e && e.defaultProps)
    for (n in ((r = e.defaultProps), r)) i[n] === void 0 && (i[n] = r[n]);
  return {
    $$typeof: Yh,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Zh.current,
  };
}
Zo.Fragment = Xh;
Zo.jsx = ev;
Zo.jsxs = ev;
Jo.exports = Zo;
const C = Jo.exports.jsx,
  V = Jo.exports.jsxs,
  rv = Jo.exports.Fragment;
function ry(e) {
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
function tv(e, r) {
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
function ty(e, r, t) {
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
function nd(e, r) {
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
function id(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? nd(Object(t), !0).forEach(function (n) {
          ty(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : nd(Object(t)).forEach(function (n) {
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
var od = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Ya = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  ad = {
    INIT: "@@redux/INIT" + Ya(),
    REPLACE: "@@redux/REPLACE" + Ya(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Ya();
    },
  };
function ny(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var r = e; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r;
}
function nv(e, r, t) {
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
    return t(nv)(e, r);
  }
  if (typeof e != "function") throw new Error(Ae(2));
  var i = e,
    o = r,
    a = [],
    l = a,
    u = !1;
  function s() {
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
      s(),
      l.push(y),
      function () {
        if (!!S) {
          if (u) throw new Error(Ae(6));
          (S = !1), s();
          var v = l.indexOf(y);
          l.splice(v, 1), (a = null);
        }
      }
    );
  }
  function c(y) {
    if (!ny(y)) throw new Error(Ae(7));
    if (typeof y.type == "undefined") throw new Error(Ae(8));
    if (u) throw new Error(Ae(9));
    try {
      (u = !0), (o = i(o, y));
    } finally {
      u = !1;
    }
    for (var S = (a = l), g = 0; g < S.length; g++) {
      var v = S[g];
      v();
    }
    return y;
  }
  function p(y) {
    if (typeof y != "function") throw new Error(Ae(10));
    (i = y), c({ type: ad.REPLACE });
  }
  function m() {
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
      (y[od] = function () {
        return this;
      }),
      y
    );
  }
  return (
    c({ type: ad.INIT }),
    (n = { dispatch: c, subscribe: d, getState: f, replaceReducer: p }),
    (n[od] = m),
    n
  );
}
function ld(e, r) {
  return function () {
    return r(e.apply(this, arguments));
  };
}
function ud(e, r) {
  if (typeof e == "function") return ld(e, r);
  if (typeof e != "object" || e === null) throw new Error(Ae(16));
  var t = {};
  for (var n in e) {
    var i = e[n];
    typeof i == "function" && (t[n] = ld(i, r));
  }
  return t;
}
function iv() {
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
function iy() {
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
        (o = iv.apply(void 0, l)(i.dispatch)),
        id(id({}, i), {}, { dispatch: o })
      );
    };
  };
}
var ov = { exports: {} },
  oy = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ay = oy,
  ly = ay;
function av() {}
function lv() {}
lv.resetWarningCache = av;
var uy = function () {
  function e(n, i, o, a, l, u) {
    if (u !== ly) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
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
    checkPropTypes: lv,
    resetWarningCache: av,
  };
  return (t.PropTypes = t), t;
};
ov.exports = uy();
var H = ov.exports,
  uv = vr.createContext(null);
function sy(e) {
  e();
}
var sv = sy,
  cy = function (r) {
    return (sv = r);
  },
  dy = function () {
    return sv;
  };
function fy() {
  var e = dy(),
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
var sd = {
  notify: function () {},
  get: function () {
    return [];
  },
};
function cv(e, r) {
  var t,
    n = sd;
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
    t || ((t = r ? r.addNestedSub(a) : e.subscribe(a)), (n = fy()));
  }
  function s() {
    t && (t(), (t = void 0), n.clear(), (n = sd));
  }
  var f = {
    addNestedSub: i,
    notifyNestedSubs: o,
    handleChangeWrapper: a,
    isSubscribed: l,
    trySubscribe: u,
    tryUnsubscribe: s,
    getListeners: function () {
      return n;
    },
  };
  return f;
}
var dv =
  typeof window != "undefined" &&
  typeof window.document != "undefined" &&
  typeof window.document.createElement != "undefined"
    ? I.exports.useLayoutEffect
    : I.exports.useEffect;
function py(e) {
  var r = e.store,
    t = e.context,
    n = e.children,
    i = I.exports.useMemo(
      function () {
        var l = cv(r);
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
  dv(
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
  var a = t || uv;
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
var fv = { exports: {} },
  G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ve = typeof Symbol == "function" && Symbol.for,
  ns = ve ? Symbol.for("react.element") : 60103,
  is = ve ? Symbol.for("react.portal") : 60106,
  ea = ve ? Symbol.for("react.fragment") : 60107,
  ra = ve ? Symbol.for("react.strict_mode") : 60108,
  ta = ve ? Symbol.for("react.profiler") : 60114,
  na = ve ? Symbol.for("react.provider") : 60109,
  ia = ve ? Symbol.for("react.context") : 60110,
  os = ve ? Symbol.for("react.async_mode") : 60111,
  oa = ve ? Symbol.for("react.concurrent_mode") : 60111,
  aa = ve ? Symbol.for("react.forward_ref") : 60112,
  la = ve ? Symbol.for("react.suspense") : 60113,
  vy = ve ? Symbol.for("react.suspense_list") : 60120,
  ua = ve ? Symbol.for("react.memo") : 60115,
  sa = ve ? Symbol.for("react.lazy") : 60116,
  gy = ve ? Symbol.for("react.block") : 60121,
  my = ve ? Symbol.for("react.fundamental") : 60117,
  hy = ve ? Symbol.for("react.responder") : 60118,
  yy = ve ? Symbol.for("react.scope") : 60119;
function qe(e) {
  if (typeof e == "object" && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case ns:
        switch (((e = e.type), e)) {
          case os:
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
      case is:
        return r;
    }
  }
}
function pv(e) {
  return qe(e) === oa;
}
G.AsyncMode = os;
G.ConcurrentMode = oa;
G.ContextConsumer = ia;
G.ContextProvider = na;
G.Element = ns;
G.ForwardRef = aa;
G.Fragment = ea;
G.Lazy = sa;
G.Memo = ua;
G.Portal = is;
G.Profiler = ta;
G.StrictMode = ra;
G.Suspense = la;
G.isAsyncMode = function (e) {
  return pv(e) || qe(e) === os;
};
G.isConcurrentMode = pv;
G.isContextConsumer = function (e) {
  return qe(e) === ia;
};
G.isContextProvider = function (e) {
  return qe(e) === na;
};
G.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ns;
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
  return qe(e) === is;
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
    e === vy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === sa ||
        e.$$typeof === ua ||
        e.$$typeof === na ||
        e.$$typeof === ia ||
        e.$$typeof === aa ||
        e.$$typeof === my ||
        e.$$typeof === hy ||
        e.$$typeof === yy ||
        e.$$typeof === gy))
  );
};
G.typeOf = qe;
fv.exports = G;
var as = fv.exports,
  wy = {
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
  Sy = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  xy = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  vv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ls = {};
ls[as.ForwardRef] = xy;
ls[as.Memo] = vv;
function cd(e) {
  return as.isMemo(e) ? vv : ls[e.$$typeof] || wy;
}
var by = Object.defineProperty,
  Cy = Object.getOwnPropertyNames,
  dd = Object.getOwnPropertySymbols,
  Dy = Object.getOwnPropertyDescriptor,
  Ey = Object.getPrototypeOf,
  fd = Object.prototype;
function gv(e, r, t) {
  if (typeof r != "string") {
    if (fd) {
      var n = Ey(r);
      n && n !== fd && gv(e, n, t);
    }
    var i = Cy(r);
    dd && (i = i.concat(dd(r)));
    for (var o = cd(e), a = cd(r), l = 0; l < i.length; ++l) {
      var u = i[l];
      if (!Sy[u] && !(t && t[u]) && !(a && a[u]) && !(o && o[u])) {
        var s = Dy(r, u);
        try {
          by(e, u, s);
        } catch {}
      }
    }
  }
  return e;
}
var pd = gv,
  mv = { exports: {} },
  Q = {};
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
  us = 60120,
  pi = 60115,
  vi = 60116,
  hv = 60121,
  yv = 60122,
  wv = 60117,
  Sv = 60129,
  xv = 60131;
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
    (us = ge("react.suspense_list")),
    (pi = ge("react.memo")),
    (vi = ge("react.lazy")),
    (hv = ge("react.block")),
    (yv = ge("react.server.block")),
    (wv = ge("react.fundamental")),
    (Sv = ge("react.debug_trace_mode")),
    (xv = ge("react.legacy_hidden"));
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
          case us:
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
var Iy = si,
  Py = ca,
  ky = di,
  Ny = ai,
  Oy = vi,
  Ty = pi,
  Ry = da,
  Ay = ui,
  Ly = li,
  By = fi;
Q.ContextConsumer = ci;
Q.ContextProvider = Iy;
Q.Element = Py;
Q.ForwardRef = ky;
Q.Fragment = Ny;
Q.Lazy = Oy;
Q.Memo = Ty;
Q.Portal = Ry;
Q.Profiler = Ay;
Q.StrictMode = Ly;
Q.Suspense = By;
Q.isAsyncMode = function () {
  return !1;
};
Q.isConcurrentMode = function () {
  return !1;
};
Q.isContextConsumer = function (e) {
  return hr(e) === ci;
};
Q.isContextProvider = function (e) {
  return hr(e) === si;
};
Q.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ca;
};
Q.isForwardRef = function (e) {
  return hr(e) === di;
};
Q.isFragment = function (e) {
  return hr(e) === ai;
};
Q.isLazy = function (e) {
  return hr(e) === vi;
};
Q.isMemo = function (e) {
  return hr(e) === pi;
};
Q.isPortal = function (e) {
  return hr(e) === da;
};
Q.isProfiler = function (e) {
  return hr(e) === ui;
};
Q.isStrictMode = function (e) {
  return hr(e) === li;
};
Q.isSuspense = function (e) {
  return hr(e) === fi;
};
Q.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ai ||
    e === ui ||
    e === Sv ||
    e === li ||
    e === fi ||
    e === us ||
    e === xv ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === vi ||
        e.$$typeof === pi ||
        e.$$typeof === si ||
        e.$$typeof === ci ||
        e.$$typeof === di ||
        e.$$typeof === wv ||
        e.$$typeof === hv ||
        e[0] === yv))
  );
};
Q.typeOf = hr;
mv.exports = Q;
var My = [
    "getDisplayName",
    "methodName",
    "renderCountProp",
    "shouldHandleStateChanges",
    "storeKey",
    "withRef",
    "forwardRef",
    "context",
  ],
  Fy = ["reactReduxForwardedRef"],
  zy = [],
  $y = [null, null];
function _y(e, r) {
  var t = e[1];
  return [r.payload, t + 1];
}
function vd(e, r, t) {
  dv(function () {
    return e.apply(void 0, r);
  }, t);
}
function jy(e, r, t, n, i, o, a) {
  (e.current = n),
    (r.current = i),
    (t.current = !1),
    o.current && ((o.current = null), a());
}
function Wy(e, r, t, n, i, o, a, l, u, s) {
  if (!!e) {
    var f = !1,
      d = null,
      c = function () {
        if (!f) {
          var y = r.getState(),
            S,
            g;
          try {
            S = n(y, i.current);
          } catch (v) {
            (g = v), (d = v);
          }
          g || (d = null),
            S === o.current
              ? a.current || u()
              : ((o.current = S),
                (l.current = S),
                (a.current = !0),
                s({ type: "STORE_UPDATED", payload: { error: g } }));
        }
      };
    (t.onStateChange = c), t.trySubscribe(), c();
    var p = function () {
      if (((f = !0), t.tryUnsubscribe(), (t.onStateChange = null), d)) throw d;
    };
    return p;
  }
}
var Uy = function () {
  return [null, 0];
};
function Gy(e, r) {
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
    s = t.shouldHandleStateChanges,
    f = s === void 0 ? !0 : s,
    d = t.storeKey,
    c = d === void 0 ? "store" : d;
  t.withRef;
  var p = t.forwardRef,
    m = p === void 0 ? !1 : p,
    y = t.context,
    S = y === void 0 ? uv : y,
    g = Po(t, My),
    v = S;
  return function (w) {
    var x = w.displayName || w.name || "Component",
      b = i(x),
      E = M({}, g, {
        getDisplayName: i,
        methodName: a,
        renderCountProp: u,
        shouldHandleStateChanges: f,
        storeKey: c,
        displayName: b,
        wrappedComponentName: x,
        WrappedComponent: w,
      }),
      k = g.pure;
    function R(X) {
      return e(X.dispatch, E);
    }
    var T = k
      ? I.exports.useMemo
      : function (X) {
          return X();
        };
    function F(X) {
      var Re = I.exports.useMemo(
          function () {
            var on = X.reactReduxForwardedRef,
              Da = Po(X, Fy);
            return [X.context, on, Da];
          },
          [X]
        ),
        xe = Re[0],
        yr = Re[1],
        N = Re[2],
        B = I.exports.useMemo(
          function () {
            return xe &&
              xe.Consumer &&
              mv.exports.isContextConsumer(vr.createElement(xe.Consumer, null))
              ? xe
              : v;
          },
          [xe, v]
        ),
        L = I.exports.useContext(B),
        W =
          Boolean(X.store) &&
          Boolean(X.store.getState) &&
          Boolean(X.store.dispatch);
      Boolean(L) && Boolean(L.store);
      var j = W ? X.store : L.store,
        wr = I.exports.useMemo(
          function () {
            return R(j);
          },
          [j]
        ),
        Ke = I.exports.useMemo(
          function () {
            if (!f) return $y;
            var on = cv(j, W ? null : L.subscription),
              Da = on.notifyNestedSubs.bind(on);
            return [on, Da];
          },
          [j, W, L]
        ),
        Ye = Ke[0],
        Xe = Ke[1],
        Er = I.exports.useMemo(
          function () {
            return W ? L : M({}, L, { subscription: Ye });
          },
          [W, L, Ye]
        ),
        hi = I.exports.useReducer(_y, zy, Uy),
        wa = hi[0],
        bt = wa[0],
        Sa = hi[1];
      if (bt && bt.error) throw bt.error;
      var _s = I.exports.useRef(),
        xa = I.exports.useRef(N),
        yi = I.exports.useRef(),
        js = I.exports.useRef(!1),
        ba = T(
          function () {
            return yi.current && N === xa.current
              ? yi.current
              : wr(j.getState(), N);
          },
          [j, bt, N]
        );
      vd(jy, [xa, _s, js, N, ba, yi, Xe]),
        vd(Wy, [f, j, Ye, wr, xa, _s, js, yi, Xe, Sa], [j, Ye, wr]);
      var Ca = I.exports.useMemo(
          function () {
            return C(w, Ie(oe({}, ba), { ref: yr }));
          },
          [yr, w, ba]
        ),
        Eg = I.exports.useMemo(
          function () {
            return f ? C(B.Provider, { value: Er, children: Ca }) : Ca;
          },
          [B, Ca, Er]
        );
      return Eg;
    }
    var se = k ? vr.memo(F) : F;
    if (((se.WrappedComponent = w), (se.displayName = F.displayName = b), m)) {
      var ce = vr.forwardRef(function (Re, xe) {
        return C(se, Ie(oe({}, Re), { reactReduxForwardedRef: xe }));
      });
      return (ce.displayName = b), (ce.WrappedComponent = w), pd(ce, w);
    }
    return pd(se, w);
  };
}
function gd(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function Xa(e, r) {
  if (gd(e, r)) return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  var t = Object.keys(e),
    n = Object.keys(r);
  if (t.length !== n.length) return !1;
  for (var i = 0; i < t.length; i++)
    if (!Object.prototype.hasOwnProperty.call(r, t[i]) || !gd(e[t[i]], r[t[i]]))
      return !1;
  return !0;
}
function Vy(e, r) {
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
function ss(e) {
  return function (t, n) {
    var i = e(t, n);
    function o() {
      return i;
    }
    return (o.dependsOnOwnProps = !1), o;
  };
}
function md(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0
    ? Boolean(e.dependsOnOwnProps)
    : e.length !== 1;
}
function bv(e, r) {
  return function (n, i) {
    i.displayName;
    var o = function (l, u) {
      return o.dependsOnOwnProps ? o.mapToProps(l, u) : o.mapToProps(l);
    };
    return (
      (o.dependsOnOwnProps = !0),
      (o.mapToProps = function (l, u) {
        (o.mapToProps = e), (o.dependsOnOwnProps = md(e));
        var s = o(l, u);
        return (
          typeof s == "function" &&
            ((o.mapToProps = s), (o.dependsOnOwnProps = md(s)), (s = o(l, u))),
          s
        );
      }),
      o
    );
  };
}
function Hy(e) {
  return typeof e == "function" ? bv(e) : void 0;
}
function Qy(e) {
  return e
    ? void 0
    : ss(function (r) {
        return { dispatch: r };
      });
}
function qy(e) {
  return e && typeof e == "object"
    ? ss(function (r) {
        return Vy(e, r);
      })
    : void 0;
}
var Ky = [Hy, Qy, qy];
function Yy(e) {
  return typeof e == "function" ? bv(e) : void 0;
}
function Xy(e) {
  return e
    ? void 0
    : ss(function () {
        return {};
      });
}
var Jy = [Yy, Xy];
function Zy(e, r, t) {
  return M({}, t, e, r);
}
function e0(e) {
  return function (t, n) {
    n.displayName;
    var i = n.pure,
      o = n.areMergedPropsEqual,
      a = !1,
      l;
    return function (s, f, d) {
      var c = e(s, f, d);
      return a ? (!i || !o(c, l)) && (l = c) : ((a = !0), (l = c)), l;
    };
  };
}
function r0(e) {
  return typeof e == "function" ? e0(e) : void 0;
}
function t0(e) {
  return e
    ? void 0
    : function () {
        return Zy;
      };
}
var n0 = [r0, t0],
  i0 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function o0(e, r, t, n) {
  return function (o, a) {
    return t(e(o, a), r(n, a), a);
  };
}
function a0(e, r, t, n, i) {
  var o = i.areStatesEqual,
    a = i.areOwnPropsEqual,
    l = i.areStatePropsEqual,
    u = !1,
    s,
    f,
    d,
    c,
    p;
  function m(h, w) {
    return (
      (s = h),
      (f = w),
      (d = e(s, f)),
      (c = r(n, f)),
      (p = t(d, c, f)),
      (u = !0),
      p
    );
  }
  function y() {
    return (
      (d = e(s, f)), r.dependsOnOwnProps && (c = r(n, f)), (p = t(d, c, f)), p
    );
  }
  function S() {
    return (
      e.dependsOnOwnProps && (d = e(s, f)),
      r.dependsOnOwnProps && (c = r(n, f)),
      (p = t(d, c, f)),
      p
    );
  }
  function g() {
    var h = e(s, f),
      w = !l(h, d);
    return (d = h), w && (p = t(d, c, f)), p;
  }
  function v(h, w) {
    var x = !a(w, f),
      b = !o(h, s);
    return (s = h), (f = w), x && b ? y() : x ? S() : b ? g() : p;
  }
  return function (w, x) {
    return u ? v(w, x) : m(w, x);
  };
}
function l0(e, r) {
  var t = r.initMapStateToProps,
    n = r.initMapDispatchToProps,
    i = r.initMergeProps,
    o = Po(r, i0),
    a = t(e, o),
    l = n(e, o),
    u = i(e, o),
    s = o.pure ? a0 : o0;
  return s(a, l, u, e, o);
}
var u0 = [
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
function s0(e, r) {
  return e === r;
}
function c0(e) {
  var r = e === void 0 ? {} : e,
    t = r.connectHOC,
    n = t === void 0 ? Gy : t,
    i = r.mapStateToPropsFactories,
    o = i === void 0 ? Jy : i,
    a = r.mapDispatchToPropsFactories,
    l = a === void 0 ? Ky : a,
    u = r.mergePropsFactories,
    s = u === void 0 ? n0 : u,
    f = r.selectorFactory,
    d = f === void 0 ? l0 : f;
  return function (p, m, y, S) {
    S === void 0 && (S = {});
    var g = S,
      v = g.pure,
      h = v === void 0 ? !0 : v,
      w = g.areStatesEqual,
      x = w === void 0 ? s0 : w,
      b = g.areOwnPropsEqual,
      E = b === void 0 ? Xa : b,
      k = g.areStatePropsEqual,
      R = k === void 0 ? Xa : k,
      T = g.areMergedPropsEqual,
      F = T === void 0 ? Xa : T,
      se = Po(g, u0),
      ce = Ja(p, o, "mapStateToProps"),
      X = Ja(m, l, "mapDispatchToProps"),
      Re = Ja(y, s, "mergeProps");
    return n(
      d,
      M(
        {
          methodName: "connect",
          getDisplayName: function (yr) {
            return "Connect(" + yr + ")";
          },
          shouldHandleStateChanges: Boolean(p),
          initMapStateToProps: ce,
          initMapDispatchToProps: X,
          initMergeProps: Re,
          pure: h,
          areStatesEqual: x,
          areOwnPropsEqual: E,
          areStatePropsEqual: R,
          areMergedPropsEqual: F,
        },
        se
      )
    );
  };
}
var Cv = c0();
cy(Mo.exports.unstable_batchedUpdates);
function d0(e, r) {
  if (e.length !== r.length) return !1;
  for (var t = 0; t < e.length; t++) if (e[t] !== r[t]) return !1;
  return !0;
}
function Dv(e, r) {
  var t = I.exports.useState(function () {
      return { inputs: r, result: e() };
    })[0],
    n = I.exports.useRef(!0),
    i = I.exports.useRef(t),
    o = n.current || Boolean(r && i.current.inputs && d0(r, i.current.inputs)),
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
function f0(e, r) {
  return Dv(function () {
    return e;
  }, r);
}
var $ = Dv,
  A = f0,
  p0 = !0,
  Za = "Invariant failed";
function v0(e, r) {
  if (!e) {
    if (p0) throw new Error(Za);
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
  cs = function (r, t) {
    return {
      top: r.top - t.top,
      left: r.left - t.left,
      bottom: r.bottom + t.bottom,
      right: r.right + t.right,
    };
  },
  hd = function (r, t) {
    return {
      top: r.top + t.top,
      left: r.left + t.left,
      bottom: r.bottom - t.bottom,
      right: r.right - t.right,
    };
  },
  g0 = function (r, t) {
    return {
      top: r.top + t.y,
      left: r.left + t.x,
      bottom: r.bottom + t.y,
      right: r.right + t.x,
    };
  },
  el = { top: 0, right: 0, bottom: 0, left: 0 },
  ds = function (r) {
    var t = r.borderBox,
      n = r.margin,
      i = n === void 0 ? el : n,
      o = r.border,
      a = o === void 0 ? el : o,
      l = r.padding,
      u = l === void 0 ? el : l,
      s = pr(cs(t, i)),
      f = pr(hd(t, a)),
      d = pr(hd(f, u));
    return {
      marginBox: s,
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
    return isNaN(i) && v0(!1), i;
  },
  m0 = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  ko = function (r, t) {
    var n = r.borderBox,
      i = r.border,
      o = r.margin,
      a = r.padding,
      l = g0(n, t);
    return ds({ borderBox: l, border: i, margin: o, padding: a });
  },
  No = function (r, t) {
    return t === void 0 && (t = m0()), ko(r, t);
  },
  Ev = function (r, t) {
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
    return ds({ borderBox: r, margin: n, padding: i, border: o });
  },
  Iv = function (r) {
    var t = r.getBoundingClientRect(),
      n = window.getComputedStyle(r);
    return Ev(t, n);
  },
  yd =
    Number.isNaN ||
    function (r) {
      return typeof r == "number" && r !== r;
    };
function h0(e, r) {
  return !!(e === r || (yd(e) && yd(r)));
}
function y0(e, r) {
  if (e.length !== r.length) return !1;
  for (var t = 0; t < e.length; t++) if (!h0(e[t], r[t])) return !1;
  return !0;
}
function fe(e, r) {
  r === void 0 && (r = y0);
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
var w0 = function (r) {
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
  Yn = w0;
function Pv(e, r) {}
Pv.bind(null, "warn");
Pv.bind(null, "error");
function Kr() {}
function S0(e, r) {
  return M({}, e, {}, r);
}
function tr(e, r, t) {
  var n = r.map(function (i) {
    var o = S0(t, i.options);
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
var x0 = "Invariant failed";
function Oo(e) {
  this.message = e;
}
Oo.prototype.toString = function () {
  return this.message;
};
function P(e, r) {
  if (!e) throw new Oo(x0);
}
var b0 = (function (e) {
    tv(r, e);
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
          var s = l.error;
          s instanceof Oo && l.preventDefault();
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
  C0 = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  To = function (r) {
    return r + 1;
  },
  D0 = function (r) {
    return (
      `
  You have lifted an item in position ` +
      To(r.source.index) +
      `
`
    );
  },
  kv = function (r, t) {
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
  Nv = function (r, t, n) {
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
  E0 = function (r) {
    var t = r.destination;
    if (t) return kv(r.source, t);
    var n = r.combine;
    return n
      ? Nv(r.draggableId, r.source, n)
      : "You are over an area that cannot be dropped on";
  },
  wd = function (r) {
    return (
      `
  The item has returned to its starting position
  of ` +
      To(r.index) +
      `
`
    );
  },
  I0 = function (r) {
    if (r.reason === "CANCEL")
      return (
        `
      Movement cancelled.
      ` +
        wd(r.source) +
        `
    `
      );
    var t = r.destination,
      n = r.combine;
    return t
      ? `
      You have dropped the item.
      ` +
          kv(r.source, t) +
          `
    `
      : n
      ? `
      You have dropped the item.
      ` +
        Nv(r.draggableId, r.source, n) +
        `
    `
      : `
    The item has been dropped while not over a drop area.
    ` +
        wd(r.source) +
        `
  `;
  },
  eo = {
    dragHandleUsageInstructions: C0,
    onDragStart: D0,
    onDragUpdate: E0,
    onDragEnd: I0,
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
  Sd = function (r, t) {
    return Math.min.apply(
      Math,
      t.map(function (n) {
        return Xn(r, n);
      })
    );
  },
  Ov = function (r) {
    return function (t) {
      return { x: r(t.x), y: r(t.y) };
    };
  },
  P0 = function (e, r) {
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
  xd = function (r) {
    return [
      { x: r.left, y: r.top },
      { x: r.right, y: r.top },
      { x: r.left, y: r.bottom },
      { x: r.right, y: r.bottom },
    ];
  },
  k0 = { top: 0, right: 0, bottom: 0, left: 0 },
  N0 = function (r, t) {
    return t ? gi(r, t.scroll.diff.displacement) : r;
  },
  O0 = function (r, t, n) {
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
  T0 = function (r, t) {
    return t && t.shouldClipSubject ? P0(t.pageMarginBox, r) : pr(r);
  },
  Kt = function (e) {
    var r = e.page,
      t = e.withPlaceholder,
      n = e.axis,
      i = e.frame,
      o = N0(r.marginBox, i),
      a = O0(o, n, t),
      l = T0(a, i);
    return { page: r, withPlaceholder: t, active: l };
  },
  fs = function (e, r) {
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
function ps(e, r) {
  if (e.findIndex) return e.findIndex(r);
  for (var t = 0; t < e.length; t++) if (r(e[t])) return t;
  return -1;
}
function ot(e, r) {
  if (e.find) return e.find(r);
  var t = ps(e, r);
  if (t !== -1) return e[t];
}
function Tv(e) {
  return Array.prototype.slice.call(e);
}
var Rv = fe(function (e) {
    return e.reduce(function (r, t) {
      return (r[t.descriptor.id] = t), r;
    }, {});
  }),
  Av = fe(function (e) {
    return e.reduce(function (r, t) {
      return (r[t.descriptor.id] = t), r;
    }, {});
  }),
  fa = fe(function (e) {
    return Ro(e);
  }),
  R0 = fe(function (e) {
    return Ro(e);
  }),
  tn = fe(function (e, r) {
    var t = R0(r)
      .filter(function (n) {
        return e === n.descriptor.droppableId;
      })
      .sort(function (n, i) {
        return n.descriptor.index - i.descriptor.index;
      });
    return t;
  });
function vs(e) {
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
  A0 = function (e) {
    var r = e.isMovingForward,
      t = e.draggable,
      n = e.destination,
      i = e.insideDestination,
      o = e.previousImpact;
    if (!n.isCombineEnabled) return null;
    var a = vs(o);
    if (!a) return null;
    function l(y) {
      var S = {
        type: "COMBINE",
        combine: { draggableId: y, droppableId: n.descriptor.id },
      };
      return M({}, o, { at: S });
    }
    var u = o.displaced.all,
      s = u.length ? u[0] : null;
    if (r) return s ? l(s) : null;
    var f = va(t, i);
    if (!s) {
      if (!f.length) return null;
      var d = f[f.length - 1];
      return l(d.descriptor.id);
    }
    var c = ps(f, function (y) {
      return y.descriptor.id === s;
    });
    c === -1 && P(!1);
    var p = c - 1;
    if (p < 0) return null;
    var m = f[p];
    return l(m.descriptor.id);
  },
  nn = function (e, r) {
    return e.descriptor.droppableId === r.descriptor.id;
  },
  Lv = { point: pe, value: 0 },
  Jn = { invisible: {}, visible: {}, all: [] },
  L0 = { displaced: Jn, displacedBy: Lv, at: null },
  or = function (e, r) {
    return function (t) {
      return e <= t && t <= r;
    };
  },
  Bv = function (e) {
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
        s = n.left < e.left && n.right > e.right,
        f = u && s;
      if (f) return !0;
      var d = (u && a) || (s && o);
      return d;
    };
  },
  B0 = function (e) {
    var r = or(e.top, e.bottom),
      t = or(e.left, e.right);
    return function (n) {
      var i = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
      return i;
    };
  },
  gs = {
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
  Mv = {
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
  M0 = function (e) {
    return function (r) {
      var t = or(r.top, r.bottom),
        n = or(r.left, r.right);
      return function (i) {
        return e === gs ? t(i.top) && t(i.bottom) : n(i.left) && n(i.right);
      };
    };
  },
  F0 = function (r, t) {
    var n = t.frame ? t.frame.scroll.diff.displacement : pe;
    return gi(r, n);
  },
  z0 = function (r, t, n) {
    return t.subject.active ? n(t.subject.active)(r) : !1;
  },
  $0 = function (r, t, n) {
    return n(t)(r);
  },
  ms = function (r) {
    var t = r.target,
      n = r.destination,
      i = r.viewport,
      o = r.withDroppableDisplacement,
      a = r.isVisibleThroughFrameFn,
      l = o ? F0(t, n) : t;
    return z0(l, n, a) && $0(l, i, a);
  },
  _0 = function (r) {
    return ms(M({}, r, { isVisibleThroughFrameFn: Bv }));
  },
  Fv = function (r) {
    return ms(M({}, r, { isVisibleThroughFrameFn: B0 }));
  },
  j0 = function (r) {
    return ms(M({}, r, { isVisibleThroughFrameFn: M0(r.destination.axis) }));
  },
  W0 = function (r, t, n) {
    if (typeof n == "boolean") return n;
    if (!t) return !0;
    var i = t.invisible,
      o = t.visible;
    if (i[r]) return !1;
    var a = o[r];
    return a ? a.shouldAnimate : !0;
  };
function U0(e, r) {
  var t = e.page.marginBox,
    n = { top: r.point.y, right: 0, bottom: 0, left: r.point.x };
  return pr(cs(t, n));
}
function Zn(e) {
  var r = e.afterDragging,
    t = e.destination,
    n = e.displacedBy,
    i = e.viewport,
    o = e.forceShouldAnimate,
    a = e.last;
  return r.reduce(
    function (u, s) {
      var f = U0(s, n),
        d = s.descriptor.id;
      u.all.push(d);
      var c = _0({
        target: f,
        destination: t,
        viewport: i,
        withDroppableDisplacement: !0,
      });
      if (!c) return (u.invisible[s.descriptor.id] = !0), u;
      var p = W0(d, a, o),
        m = { draggableId: d, shouldAnimate: p };
      return (u.visible[d] = m), u;
    },
    { all: [], visible: {}, invisible: {} }
  );
}
function G0(e, r) {
  if (!e.length) return 0;
  var t = e[e.length - 1].descriptor.index;
  return r.inHomeList ? t : t + 1;
}
function bd(e) {
  var r = e.insideDestination,
    t = e.inHomeList,
    n = e.displacedBy,
    i = e.destination,
    o = G0(r, { inHomeList: t });
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
    s = nn(r, n);
  if (l == null)
    return bd({
      insideDestination: t,
      inHomeList: s,
      displacedBy: o,
      destination: n,
    });
  var f = ot(t, function (y) {
    return y.descriptor.index === l;
  });
  if (!f)
    return bd({
      insideDestination: t,
      inHomeList: s,
      displacedBy: o,
      destination: n,
    });
  var d = va(r, t),
    c = t.indexOf(f),
    p = d.slice(c),
    m = Zn({
      afterDragging: p,
      destination: n,
      displacedBy: o,
      last: a,
      viewport: i.frame,
      forceShouldAnimate: u,
    });
  return {
    displaced: m,
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
var V0 = function (e) {
    var r = e.isMovingForward,
      t = e.destination,
      n = e.draggables,
      i = e.combine,
      o = e.afterCritical;
    if (!t.isCombineEnabled) return null;
    var a = i.draggableId,
      l = n[a],
      u = l.descriptor.index,
      s = rt(a, o);
    return s ? (r ? u : u - 1) : r ? u + 1 : u;
  },
  H0 = function (e) {
    var r = e.isMovingForward,
      t = e.isInHomeList,
      n = e.insideDestination,
      i = e.location;
    if (!n.length) return null;
    var o = i.index,
      a = r ? o + 1 : o - 1,
      l = n[0].descriptor.index,
      u = n[n.length - 1].descriptor.index,
      s = t ? u : u + 1;
    return a < l || a > s ? null : a;
  },
  Q0 = function (e) {
    var r = e.isMovingForward,
      t = e.isInHomeList,
      n = e.draggable,
      i = e.draggables,
      o = e.destination,
      a = e.insideDestination,
      l = e.previousImpact,
      u = e.viewport,
      s = e.afterCritical,
      f = l.at;
    if ((f || P(!1), f.type === "REORDER")) {
      var d = H0({
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
    var c = V0({
      isMovingForward: r,
      destination: o,
      displaced: l.displaced,
      draggables: i,
      combine: f.combine,
      afterCritical: s,
    });
    return c == null
      ? null
      : Ao({
          draggable: n,
          insideDestination: a,
          destination: o,
          viewport: u,
          last: l.displaced,
          displacedBy: l.displacedBy,
          index: c,
        });
  },
  q0 = function (e) {
    var r = e.displaced,
      t = e.afterCritical,
      n = e.combineWith,
      i = e.displacedBy,
      o = Boolean(r.visible[n] || r.invisible[n]);
    return rt(n, t) ? (o ? pe : rn(i.point)) : o ? i.point : pe;
  },
  K0 = function (e) {
    var r = e.afterCritical,
      t = e.impact,
      n = e.draggables,
      i = pa(t);
    i || P(!1);
    var o = i.draggableId,
      a = n[o].page.borderBox.center,
      l = q0({
        displaced: t.displaced,
        afterCritical: r,
        combineWith: o,
        displacedBy: t.displacedBy,
      });
    return ye(a, l);
  },
  zv = function (r, t) {
    return t.margin[r.start] + t.borderBox[r.size] / 2;
  },
  Y0 = function (r, t) {
    return t.margin[r.end] + t.borderBox[r.size] / 2;
  },
  hs = function (r, t, n) {
    return (
      t[r.crossAxisStart] +
      n.margin[r.crossAxisStart] +
      n.borderBox[r.crossAxisSize] / 2
    );
  },
  Cd = function (r) {
    var t = r.axis,
      n = r.moveRelativeTo,
      i = r.isMoving;
    return wt(t.line, n.marginBox[t.end] + zv(t, i), hs(t, n.marginBox, i));
  },
  Dd = function (r) {
    var t = r.axis,
      n = r.moveRelativeTo,
      i = r.isMoving;
    return wt(t.line, n.marginBox[t.start] - Y0(t, i), hs(t, n.marginBox, i));
  },
  X0 = function (r) {
    var t = r.axis,
      n = r.moveInto,
      i = r.isMoving;
    return wt(t.line, n.contentBox[t.start] + zv(t, i), hs(t, n.contentBox, i));
  },
  J0 = function (e) {
    var r = e.impact,
      t = e.draggable,
      n = e.draggables,
      i = e.droppable,
      o = e.afterCritical,
      a = tn(i.descriptor.id, n),
      l = t.page,
      u = i.axis;
    if (!a.length) return X0({ axis: u, moveInto: i.page, isMoving: l });
    var s = r.displaced,
      f = r.displacedBy,
      d = s.all[0];
    if (d) {
      var c = n[d];
      if (rt(d, o)) return Dd({ axis: u, moveRelativeTo: c.page, isMoving: l });
      var p = ko(c.page, f.point);
      return Dd({ axis: u, moveRelativeTo: p, isMoving: l });
    }
    var m = a[a.length - 1];
    if (m.descriptor.id === t.descriptor.id) return l.borderBox.center;
    if (rt(m.descriptor.id, o)) {
      var y = ko(m.page, rn(o.displacedBy.point));
      return Cd({ axis: u, moveRelativeTo: y, isMoving: l });
    }
    return Cd({ axis: u, moveRelativeTo: m.page, isMoving: l });
  },
  nu = function (e, r) {
    var t = e.frame;
    return t ? ye(r, t.scroll.diff.displacement) : r;
  },
  Z0 = function (r) {
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
      ? J0({
          impact: t,
          draggable: n,
          draggables: o,
          droppable: i,
          afterCritical: a,
        })
      : K0({ impact: t, draggables: o, afterCritical: a });
  },
  ga = function (e) {
    var r = Z0(e),
      t = e.droppable,
      n = t ? nu(t, r) : r;
    return n;
  },
  $v = function (e, r) {
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
function Ed(e, r) {
  return e.map(function (t) {
    return r[t];
  });
}
function e1(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t].visible[e];
    if (n) return n;
  }
  return null;
}
var r1 = function (e) {
    var r = e.impact,
      t = e.viewport,
      n = e.destination,
      i = e.draggables,
      o = e.maxScrollChange,
      a = $v(t, ye(t.scroll.current, o)),
      l = n.frame ? fs(n, ye(n.frame.scroll.current, o)) : n,
      u = r.displaced,
      s = Zn({
        afterDragging: Ed(u.all, i),
        destination: n,
        displacedBy: r.displacedBy,
        viewport: a.frame,
        last: u,
        forceShouldAnimate: !1,
      }),
      f = Zn({
        afterDragging: Ed(u.all, i),
        destination: l,
        displacedBy: r.displacedBy,
        viewport: t.frame,
        last: u,
        forceShouldAnimate: !1,
      }),
      d = {},
      c = {},
      p = [u, s, f];
    u.all.forEach(function (y) {
      var S = e1(y, p);
      if (S) {
        c[y] = S;
        return;
      }
      d[y] = !0;
    });
    var m = M({}, r, { displaced: { all: u.all, invisible: d, visible: c } });
    return m;
  },
  t1 = function (e, r) {
    return ye(e.scroll.diff.displacement, r);
  },
  ys = function (e) {
    var r = e.pageBorderBoxCenter,
      t = e.draggable,
      n = e.viewport,
      i = t1(n, r),
      o = je(i, t.page.borderBox.center);
    return ye(t.client.borderBox.center, o);
  },
  _v = function (e) {
    var r = e.draggable,
      t = e.destination,
      n = e.newPageBorderBoxCenter,
      i = e.viewport,
      o = e.withDroppableDisplacement,
      a = e.onlyOnMainAxis,
      l = a === void 0 ? !1 : a,
      u = je(n, r.page.borderBox.center),
      s = gi(r.page.borderBox, u),
      f = {
        target: s,
        destination: t,
        withDroppableDisplacement: o,
        viewport: i,
      };
    return l ? j0(f) : Fv(f);
  },
  n1 = function (e) {
    var r = e.isMovingForward,
      t = e.draggable,
      n = e.destination,
      i = e.draggables,
      o = e.previousImpact,
      a = e.viewport,
      l = e.previousPageBorderBoxCenter,
      u = e.previousClientSelection,
      s = e.afterCritical;
    if (!n.isEnabled) return null;
    var f = tn(n.descriptor.id, i),
      d = nn(t, n),
      c =
        A0({
          isMovingForward: r,
          draggable: t,
          destination: n,
          insideDestination: f,
          previousImpact: o,
        }) ||
        Q0({
          isMovingForward: r,
          isInHomeList: d,
          draggable: t,
          draggables: i,
          destination: n,
          insideDestination: f,
          previousImpact: o,
          viewport: a,
          afterCritical: s,
        });
    if (!c) return null;
    var p = ga({
        impact: c,
        draggable: t,
        droppable: n,
        draggables: i,
        afterCritical: s,
      }),
      m = _v({
        draggable: t,
        destination: n,
        newPageBorderBoxCenter: p,
        viewport: a.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      });
    if (m) {
      var y = ys({ pageBorderBoxCenter: p, draggable: t, viewport: a });
      return { clientSelection: y, impact: c, scrollJumpRequest: null };
    }
    var S = je(p, l),
      g = r1({
        impact: c,
        viewport: a,
        destination: n,
        draggables: i,
        maxScrollChange: S,
      });
    return { clientSelection: u, impact: g, scrollJumpRequest: S };
  },
  Pe = function (r) {
    var t = r.subject.active;
    return t || P(!1), t;
  },
  i1 = function (e) {
    var r = e.isMovingForward,
      t = e.pageBorderBoxCenter,
      n = e.source,
      i = e.droppables,
      o = e.viewport,
      a = n.subject.active;
    if (!a) return null;
    var l = n.axis,
      u = or(a[l.start], a[l.end]),
      s = fa(i)
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
          return Bv(o.frame)(Pe(d));
        })
        .filter(function (d) {
          var c = Pe(d);
          return r
            ? a[l.crossAxisEnd] < c[l.crossAxisEnd]
            : c[l.crossAxisStart] < a[l.crossAxisStart];
        })
        .filter(function (d) {
          var c = Pe(d),
            p = or(c[l.start], c[l.end]);
          return u(c[l.start]) || u(c[l.end]) || p(a[l.start]) || p(a[l.end]);
        })
        .sort(function (d, c) {
          var p = Pe(d)[l.crossAxisStart],
            m = Pe(c)[l.crossAxisStart];
          return r ? p - m : m - p;
        })
        .filter(function (d, c, p) {
          return Pe(d)[l.crossAxisStart] === Pe(p[0])[l.crossAxisStart];
        });
    if (!s.length) return null;
    if (s.length === 1) return s[0];
    var f = s.filter(function (d) {
      var c = or(Pe(d)[l.start], Pe(d)[l.end]);
      return c(t[l.line]);
    });
    return f.length === 1
      ? f[0]
      : f.length > 1
      ? f.sort(function (d, c) {
          return Pe(d)[l.start] - Pe(c)[l.start];
        })[0]
      : s.sort(function (d, c) {
          var p = Sd(t, xd(Pe(d))),
            m = Sd(t, xd(Pe(c)));
          return p !== m ? p - m : Pe(d)[l.start] - Pe(c)[l.start];
        })[0];
  },
  Id = function (r, t) {
    var n = r.page.borderBox.center;
    return rt(r.descriptor.id, t) ? je(n, t.displacedBy.point) : n;
  },
  o1 = function (r, t) {
    var n = r.page.borderBox;
    return rt(r.descriptor.id, t) ? gi(n, rn(t.displacedBy.point)) : n;
  },
  a1 = function (e) {
    var r = e.pageBorderBoxCenter,
      t = e.viewport,
      n = e.destination,
      i = e.insideDestination,
      o = e.afterCritical,
      a = i
        .filter(function (l) {
          return Fv({
            target: o1(l, o),
            destination: n,
            viewport: t.frame,
            withDroppableDisplacement: !0,
          });
        })
        .sort(function (l, u) {
          var s = Xn(r, nu(n, Id(l, o))),
            f = Xn(r, nu(n, Id(u, o)));
          return s < f
            ? -1
            : f < s
            ? 1
            : l.descriptor.index - u.descriptor.index;
        });
    return a[0] || null;
  },
  mi = fe(function (r, t) {
    var n = t[r.line];
    return { value: n, point: wt(r.line, n) };
  }),
  l1 = function (r, t, n) {
    var i = r.axis;
    if (r.descriptor.mode === "virtual") return wt(i.line, t[i.line]);
    var o = r.subject.page.contentBox[i.size],
      a = tn(r.descriptor.id, n),
      l = a.reduce(function (f, d) {
        return f + d.client.marginBox[i.size];
      }, 0),
      u = l + t[i.line],
      s = u - o;
    return s <= 0 ? null : wt(i.line, s);
  },
  jv = function (r, t) {
    return M({}, r, { scroll: M({}, r.scroll, { max: t }) });
  },
  Wv = function (r, t, n) {
    var i = r.frame;
    nn(t, r) && P(!1), r.subject.withPlaceholder && P(!1);
    var o = mi(r.axis, t.displaceBy).point,
      a = l1(r, o, n),
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
    var s = a ? ye(i.scroll.max, a) : i.scroll.max,
      f = jv(i, s),
      d = Kt({
        page: r.subject.page,
        withPlaceholder: l,
        axis: r.axis,
        frame: f,
      });
    return M({}, r, { subject: d, frame: f });
  },
  u1 = function (r) {
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
    var a = jv(n, o),
      l = Kt({
        page: r.subject.page,
        axis: r.axis,
        frame: a,
        withPlaceholder: null,
      });
    return M({}, r, { subject: l, frame: a });
  },
  s1 = function (e) {
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
      var s = {
          displaced: Jn,
          displacedBy: Lv,
          at: {
            type: "REORDER",
            destination: { droppableId: a.descriptor.id, index: 0 },
          },
        },
        f = ga({
          impact: s,
          draggable: i,
          droppable: a,
          draggables: o,
          afterCritical: u,
        }),
        d = nn(i, a) ? a : Wv(a, i, o),
        c = _v({
          draggable: i,
          destination: d,
          newPageBorderBoxCenter: f,
          viewport: l.frame,
          withDroppableDisplacement: !1,
          onlyOnMainAxis: !0,
        });
      return c ? s : null;
    }
    var p = Boolean(r[a.axis.line] <= t.page.borderBox.center[a.axis.line]),
      m = (function () {
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
      index: m,
    });
  },
  c1 = function (e) {
    var r = e.isMovingForward,
      t = e.previousPageBorderBoxCenter,
      n = e.draggable,
      i = e.isOver,
      o = e.draggables,
      a = e.droppables,
      l = e.viewport,
      u = e.afterCritical,
      s = i1({
        isMovingForward: r,
        pageBorderBoxCenter: t,
        source: i,
        droppables: a,
        viewport: l,
      });
    if (!s) return null;
    var f = tn(s.descriptor.id, o),
      d = a1({
        pageBorderBoxCenter: t,
        viewport: l,
        destination: s,
        insideDestination: f,
        afterCritical: u,
      }),
      c = s1({
        previousPageBorderBoxCenter: t,
        destination: s,
        draggable: n,
        draggables: o,
        moveRelativeTo: d,
        insideDestination: f,
        viewport: l,
        afterCritical: u,
      });
    if (!c) return null;
    var p = ga({
        impact: c,
        draggable: n,
        droppable: s,
        draggables: o,
        afterCritical: u,
      }),
      m = ys({ pageBorderBoxCenter: p, draggable: n, viewport: l });
    return { clientSelection: m, impact: c, scrollJumpRequest: null };
  },
  Ue = function (e) {
    var r = e.at;
    return r
      ? r.type === "REORDER"
        ? r.destination.droppableId
        : r.combine.droppableId
      : null;
  },
  d1 = function (r, t) {
    var n = Ue(r);
    return n ? t[n] : null;
  },
  f1 = function (e) {
    var r = e.state,
      t = e.type,
      n = d1(r.impact, r.dimensions.droppables),
      i = Boolean(n),
      o = r.dimensions.droppables[r.critical.droppable.id],
      a = n || o,
      l = a.axis.direction,
      u =
        (l === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN")) ||
        (l === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT"));
    if (u && !i) return null;
    var s = t === "MOVE_DOWN" || t === "MOVE_RIGHT",
      f = r.dimensions.draggables[r.critical.draggable.id],
      d = r.current.page.borderBoxCenter,
      c = r.dimensions,
      p = c.draggables,
      m = c.droppables;
    return u
      ? n1({
          isMovingForward: s,
          previousPageBorderBoxCenter: d,
          draggable: f,
          destination: a,
          draggables: p,
          viewport: r.viewport,
          previousClientSelection: r.current.client.selection,
          previousImpact: r.impact,
          afterCritical: r.afterCritical,
        })
      : c1({
          isMovingForward: s,
          previousPageBorderBoxCenter: d,
          draggable: f,
          isOver: a,
          draggables: p,
          droppables: m,
          viewport: r.viewport,
          afterCritical: r.afterCritical,
        });
  };
function st(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Uv(e) {
  var r = or(e.top, e.bottom),
    t = or(e.left, e.right);
  return function (i) {
    return r(i.y) && t(i.x);
  };
}
function p1(e, r) {
  return (
    e.left < r.right && e.right > r.left && e.top < r.bottom && e.bottom > r.top
  );
}
function v1(e) {
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
function g1(e) {
  var r = e.pageBorderBox,
    t = e.draggable,
    n = e.droppables,
    i = fa(n).filter(function (o) {
      if (!o.isEnabled) return !1;
      var a = o.subject.active;
      if (!a || !p1(r, a)) return !1;
      if (Uv(a)(r.center)) return !0;
      var l = o.axis,
        u = a.center[l.crossAxisLine],
        s = r[l.crossAxisStart],
        f = r[l.crossAxisEnd],
        d = or(a[l.crossAxisStart], a[l.crossAxisEnd]),
        c = d(s),
        p = d(f);
      return !c && !p ? !0 : c ? s < u : f > u;
    });
  return i.length
    ? i.length === 1
      ? i[0].descriptor.id
      : v1({ pageBorderBox: r, draggable: t, candidates: i })
    : null;
}
var Gv = function (r, t) {
    return pr(gi(r, t));
  },
  m1 = function (e, r) {
    var t = e.frame;
    return t ? Gv(r, t.scroll.diff.value) : r;
  };
function Vv(e) {
  var r = e.displaced,
    t = e.id;
  return Boolean(r.visible[t] || r.invisible[t]);
}
function h1(e) {
  var r = e.draggable,
    t = e.closest,
    n = e.inHomeList;
  return t
    ? n && t.descriptor.index > r.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var y1 = function (e) {
    var r = e.pageBorderBoxWithDroppableScroll,
      t = e.draggable,
      n = e.destination,
      i = e.insideDestination,
      o = e.last,
      a = e.viewport,
      l = e.afterCritical,
      u = n.axis,
      s = mi(n.axis, t.displaceBy),
      f = s.value,
      d = r[u.start],
      c = r[u.end],
      p = va(t, i),
      m = ot(p, function (S) {
        var g = S.descriptor.id,
          v = S.page.borderBox.center[u.line],
          h = rt(g, l),
          w = Vv({ displaced: o, id: g });
        return h ? (w ? c <= v : d < v - f) : w ? c <= v + f : d < v;
      }),
      y = h1({ draggable: t, closest: m, inHomeList: nn(t, n) });
    return Ao({
      draggable: t,
      insideDestination: i,
      destination: n,
      viewport: a,
      last: o,
      displacedBy: s,
      index: y,
    });
  },
  w1 = 4,
  S1 = function (e) {
    var r = e.draggable,
      t = e.pageBorderBoxWithDroppableScroll,
      n = e.previousImpact,
      i = e.destination,
      o = e.insideDestination,
      a = e.afterCritical;
    if (!i.isCombineEnabled) return null;
    var l = i.axis,
      u = mi(i.axis, r.displaceBy),
      s = u.value,
      f = t[l.start],
      d = t[l.end],
      c = va(r, o),
      p = ot(c, function (y) {
        var S = y.descriptor.id,
          g = y.page.borderBox,
          v = g[l.size],
          h = v / w1,
          w = rt(S, a),
          x = Vv({ displaced: n.displaced, id: S });
        return w
          ? x
            ? d > g[l.start] + h && d < g[l.end] - h
            : f > g[l.start] - s + h && f < g[l.end] - s - h
          : x
          ? d > g[l.start] + s + h && d < g[l.end] + s - h
          : f > g[l.start] + h && f < g[l.end] - h;
      });
    if (!p) return null;
    var m = {
      displacedBy: u,
      displaced: n.displaced,
      at: {
        type: "COMBINE",
        combine: { draggableId: p.descriptor.id, droppableId: i.descriptor.id },
      },
    };
    return m;
  },
  Hv = function (e) {
    var r = e.pageOffset,
      t = e.draggable,
      n = e.draggables,
      i = e.droppables,
      o = e.previousImpact,
      a = e.viewport,
      l = e.afterCritical,
      u = Gv(t.page.borderBox, r),
      s = g1({ pageBorderBox: u, draggable: t, droppables: i });
    if (!s) return L0;
    var f = i[s],
      d = tn(f.descriptor.id, n),
      c = m1(f, u);
    return (
      S1({
        pageBorderBoxWithDroppableScroll: c,
        draggable: t,
        previousImpact: o,
        destination: f,
        insideDestination: d,
        afterCritical: l,
      }) ||
      y1({
        pageBorderBoxWithDroppableScroll: c,
        draggable: t,
        destination: f,
        insideDestination: d,
        last: o.displaced,
        viewport: a,
        afterCritical: l,
      })
    );
  },
  ws = function (e, r) {
    var t;
    return M({}, e, ((t = {}), (t[r.descriptor.id] = r), t));
  },
  x1 = function (r) {
    var t = r.previousImpact,
      n = r.impact,
      i = r.droppables,
      o = Ue(t),
      a = Ue(n);
    if (!o || o === a) return i;
    var l = i[o];
    if (!l.subject.withPlaceholder) return i;
    var u = u1(l);
    return ws(i, u);
  },
  b1 = function (e) {
    var r = e.draggable,
      t = e.draggables,
      n = e.droppables,
      i = e.previousImpact,
      o = e.impact,
      a = x1({ previousImpact: i, impact: o, droppables: n }),
      l = Ue(o);
    if (!l) return a;
    var u = n[l];
    if (nn(r, u) || u.subject.withPlaceholder) return a;
    var s = Wv(u, r, t);
    return ws(a, s);
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
      s = t || r.current.client.selection,
      f = je(s, r.initial.client.selection),
      d = {
        offset: f,
        selection: s,
        borderBoxCenter: ye(r.initial.client.borderBoxCenter, f),
      },
      c = {
        selection: ye(d.selection, l.scroll.current),
        borderBoxCenter: ye(d.borderBoxCenter, l.scroll.current),
        offset: ye(d.offset, l.scroll.diff.value),
      },
      p = { client: d, page: c };
    if (r.phase === "COLLECTING")
      return M({ phase: "COLLECTING" }, r, {
        dimensions: u,
        viewport: l,
        current: p,
      });
    var m = u.draggables[r.critical.draggable.id],
      y =
        o ||
        Hv({
          pageOffset: c.offset,
          draggable: m,
          draggables: u.draggables,
          droppables: u.droppables,
          previousImpact: r.impact,
          viewport: l,
          afterCritical: r.afterCritical,
        }),
      S = b1({
        draggable: m,
        impact: y,
        previousImpact: r.impact,
        draggables: u.draggables,
        droppables: u.droppables,
      }),
      g = M({}, r, {
        current: p,
        dimensions: { draggables: u.draggables, droppables: S },
        impact: y,
        viewport: l,
        scrollJumpRequest: a || null,
        forceShouldAnimate: a ? !1 : null,
      });
    return g;
  };
function C1(e, r) {
  return e.map(function (t) {
    return r[t];
  });
}
var Qv = function (e) {
    var r = e.impact,
      t = e.viewport,
      n = e.draggables,
      i = e.destination,
      o = e.forceShouldAnimate,
      a = r.displaced,
      l = C1(a.all, n),
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
  qv = function (e) {
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
    return ys({ pageBorderBoxCenter: l, draggable: t, viewport: o });
  },
  Kv = function (e) {
    var r = e.state,
      t = e.dimensions,
      n = e.viewport;
    r.movementMode !== "SNAP" && P(!1);
    var i = r.impact,
      o = n || r.viewport,
      a = t || r.dimensions,
      l = a.draggables,
      u = a.droppables,
      s = l[r.critical.draggable.id],
      f = Ue(i);
    f || P(!1);
    var d = u[f],
      c = Qv({ impact: i, viewport: o, destination: d, draggables: l }),
      p = qv({
        impact: c,
        draggable: s,
        droppable: d,
        draggables: l,
        viewport: o,
        afterCritical: r.afterCritical,
      });
    return Tn({
      impact: c,
      clientSelection: p,
      state: r,
      dimensions: a,
      viewport: o,
    });
  },
  D1 = function (e) {
    return { index: e.index, droppableId: e.droppableId };
  },
  Yv = function (e) {
    var r = e.draggable,
      t = e.home,
      n = e.draggables,
      i = e.viewport,
      o = mi(t.axis, r.displaceBy),
      a = tn(t.descriptor.id, n),
      l = a.indexOf(r);
    l === -1 && P(!1);
    var u = a.slice(l + 1),
      s = u.reduce(function (p, m) {
        return (p[m.descriptor.id] = !0), p;
      }, {}),
      f = {
        inVirtualList: t.descriptor.mode === "virtual",
        displacedBy: o,
        effected: s,
      },
      d = Zn({
        afterDragging: u,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: i.frame,
        forceShouldAnimate: !1,
      }),
      c = {
        displaced: d,
        displacedBy: o,
        at: { type: "REORDER", destination: D1(r.descriptor) },
      };
    return { impact: c, afterCritical: f };
  },
  E1 = function (e, r) {
    return { draggables: e.draggables, droppables: ws(e.droppables, r) };
  },
  I1 = function (e) {
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
  P1 = function (e) {
    var r = e.frame;
    return r || P(!1), r;
  },
  k1 = function (e) {
    var r = e.additions,
      t = e.updatedDroppables,
      n = e.viewport,
      i = n.scroll.diff.value;
    return r.map(function (o) {
      var a = o.descriptor.droppableId,
        l = t[a],
        u = P1(l),
        s = u.scroll.diff.value,
        f = ye(i, s),
        d = I1({
          draggable: o,
          offset: f,
          initialWindowScroll: n.scroll.initial,
        });
      return d;
    });
  },
  N1 = function (e) {
    var r = e.state,
      t = e.published,
      n = t.modified.map(function (h) {
        var w = r.dimensions.droppables[h.droppableId],
          x = fs(w, h.scroll);
        return x;
      }),
      i = M({}, r.dimensions.droppables, {}, Rv(n)),
      o = Av(
        k1({
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
      u = Ue(r.impact),
      s = u ? l.droppables[u] : null,
      f = l.draggables[r.critical.draggable.id],
      d = l.droppables[r.critical.droppable.id],
      c = Yv({ draggable: f, home: d, draggables: a, viewport: r.viewport }),
      p = c.impact,
      m = c.afterCritical,
      y = s && s.isCombineEnabled ? r.impact : p,
      S = Hv({
        pageOffset: r.current.page.offset,
        draggable: l.draggables[r.critical.draggable.id],
        draggables: l.draggables,
        droppables: l.droppables,
        previousImpact: y,
        viewport: r.viewport,
        afterCritical: m,
      }),
      g = M({ phase: "DRAGGING" }, r, {
        phase: "DRAGGING",
        impact: S,
        onLiftImpact: p,
        dimensions: l,
        afterCritical: m,
        forceShouldAnimate: !1,
      });
    if (r.phase === "COLLECTING") return g;
    var v = M({ phase: "DROP_PENDING" }, g, {
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
    var i = E1(r.dimensions, t);
    return !iu(r) || n
      ? Tn({ state: r, dimensions: i })
      : Kv({ state: r, dimensions: i });
  };
function tl(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? M({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
    : e;
}
var Pd = { phase: "IDLE", completed: null, shouldFlush: !1 },
  O1 = function (e, r) {
    if ((e === void 0 && (e = Pd), r.type === "FLUSH"))
      return M({}, Pd, { shouldFlush: !0 });
    if (r.type === "INITIAL_PUBLISH") {
      e.phase !== "IDLE" && P(!1);
      var t = r.payload,
        n = t.critical,
        i = t.clientSelection,
        o = t.viewport,
        a = t.dimensions,
        l = t.movementMode,
        u = a.draggables[n.draggable.id],
        s = a.droppables[n.droppable.id],
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
        c = fa(a.droppables).every(function (Sa) {
          return !Sa.isFixedOnPage;
        }),
        p = Yv({
          draggable: u,
          home: s,
          draggables: a.draggables,
          viewport: o,
        }),
        m = p.impact,
        y = p.afterCritical,
        S = {
          phase: "DRAGGING",
          isDragging: !0,
          critical: n,
          movementMode: l,
          dimensions: a,
          initial: d,
          current: d,
          isWindowScrollAllowed: c,
          impact: m,
          afterCritical: y,
          onLiftImpact: m,
          viewport: o,
          scrollJumpRequest: null,
          forceShouldAnimate: null,
        };
      return S;
    }
    if (r.type === "COLLECTION_STARTING") {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && P(!1);
      var g = M({ phase: "COLLECTING" }, e, { phase: "COLLECTING" });
      return g;
    }
    if (r.type === "PUBLISH_WHILE_DRAGGING")
      return (
        e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || P(!1),
        N1({ state: e, published: r.payload })
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
      var E = fs(b, x);
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
      var se = M({}, F, { isEnabled: T });
      return rl(e, se, !0);
    }
    if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      st(e) || P(!1);
      var ce = r.payload,
        X = ce.id,
        Re = ce.isCombineEnabled,
        xe = e.dimensions.droppables[X];
      xe || P(!1), xe.isCombineEnabled === Re && P(!1);
      var yr = M({}, xe, { isCombineEnabled: Re });
      return rl(e, yr, !0);
    }
    if (r.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      st(e) || P(!1), e.isWindowScrollAllowed || P(!1);
      var N = r.payload.newScroll;
      if (Yr(e.viewport.scroll.current, N)) return tl(e);
      var B = $v(e.viewport, N);
      return iu(e)
        ? Kv({ state: e, viewport: B })
        : Tn({ state: e, viewport: B });
    }
    if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!st(e)) return e;
      var L = r.payload.maxScroll;
      if (Yr(L, e.viewport.scroll.max)) return e;
      var W = M({}, e.viewport, {
        scroll: M({}, e.viewport.scroll, { max: L }),
      });
      return M({ phase: "DRAGGING" }, e, { viewport: W });
    }
    if (
      r.type === "MOVE_UP" ||
      r.type === "MOVE_DOWN" ||
      r.type === "MOVE_LEFT" ||
      r.type === "MOVE_RIGHT"
    ) {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && P(!1);
      var j = f1({ state: e, type: r.type });
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
  T1 = function (r) {
    return { type: "BEFORE_INITIAL_CAPTURE", payload: r };
  },
  R1 = function (r) {
    return { type: "LIFT", payload: r };
  },
  A1 = function (r) {
    return { type: "INITIAL_PUBLISH", payload: r };
  },
  L1 = function (r) {
    return { type: "PUBLISH_WHILE_DRAGGING", payload: r };
  },
  B1 = function () {
    return { type: "COLLECTION_STARTING", payload: null };
  },
  M1 = function (r) {
    return { type: "UPDATE_DROPPABLE_SCROLL", payload: r };
  },
  F1 = function (r) {
    return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: r };
  },
  z1 = function (r) {
    return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: r };
  },
  Xv = function (r) {
    return { type: "MOVE", payload: r };
  },
  $1 = function (r) {
    return { type: "MOVE_BY_WINDOW_SCROLL", payload: r };
  },
  _1 = function (r) {
    return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: r };
  },
  j1 = function () {
    return { type: "MOVE_UP", payload: null };
  },
  W1 = function () {
    return { type: "MOVE_DOWN", payload: null };
  },
  U1 = function () {
    return { type: "MOVE_RIGHT", payload: null };
  },
  G1 = function () {
    return { type: "MOVE_LEFT", payload: null };
  },
  Ss = function () {
    return { type: "FLUSH", payload: null };
  },
  V1 = function (r) {
    return { type: "DROP_ANIMATE", payload: r };
  },
  xs = function (r) {
    return { type: "DROP_COMPLETE", payload: r };
  },
  Jv = function (r) {
    return { type: "DROP", payload: r };
  },
  H1 = function (r) {
    return { type: "DROP_PENDING", payload: r };
  },
  Zv = function () {
    return { type: "DROP_ANIMATION_FINISHED", payload: null };
  },
  Q1 = function (e) {
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
            s = a.movementMode,
            f = t();
          f.phase === "DROP_ANIMATING" && n(xs({ completed: f.completed })),
            t().phase !== "IDLE" && P(!1),
            n(Ss()),
            n(T1({ draggableId: l, movementMode: s }));
          var d = { shouldPublishImmediately: s === "SNAP" },
            c = { draggableId: l, scrollOptions: d },
            p = e.startPublishing(c),
            m = p.critical,
            y = p.dimensions,
            S = p.viewport;
          n(
            A1({
              critical: m,
              dimensions: y,
              clientSelection: u,
              movementMode: s,
              viewport: S,
            })
          );
        };
      };
    };
  },
  q1 = function (e) {
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
  bs = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  ei = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  Cs = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  at = Cs.outOfTheWay + "s " + bs.outOfTheWay,
  Rn = {
    fluid: "opacity " + at,
    snap: "transform " + at + ", opacity " + at,
    drop: function (r) {
      var t = r + "s " + bs.drop;
      return "transform " + t + ", opacity " + t;
    },
    outOfTheWay: "transform " + at,
    placeholder: "height " + at + ", width " + at + ", margin " + at,
  },
  kd = function (r) {
    return Yr(r, pe) ? null : "translate(" + r.x + "px, " + r.y + "px)";
  },
  ou = {
    moveTo: kd,
    drop: function (r, t) {
      var n = kd(r);
      return n ? (t ? n + " scale(" + ei.scale.drop + ")" : n) : null;
    },
  },
  au = Cs.minDropTime,
  eg = Cs.maxDropTime,
  K1 = eg - au,
  Nd = 1500,
  Y1 = 0.6,
  X1 = function (e) {
    var r = e.current,
      t = e.destination,
      n = e.reason,
      i = Xn(r, t);
    if (i <= 0) return au;
    if (i >= Nd) return eg;
    var o = i / Nd,
      a = au + K1 * o,
      l = n === "CANCEL" ? a * Y1 : a;
    return Number(l.toFixed(2));
  },
  J1 = function (e) {
    var r = e.impact,
      t = e.draggable,
      n = e.dimensions,
      i = e.viewport,
      o = e.afterCritical,
      a = n.draggables,
      l = n.droppables,
      u = Ue(r),
      s = u ? l[u] : null,
      f = l[t.descriptor.droppableId],
      d = qv({
        impact: r,
        draggable: t,
        draggables: a,
        afterCritical: o,
        droppable: s || f,
        viewport: i,
      }),
      c = je(d, t.client.borderBox.center);
    return c;
  },
  Z1 = function (e) {
    var r = e.draggables,
      t = e.reason,
      n = e.lastImpact,
      i = e.home,
      o = e.viewport,
      a = e.onLiftImpact;
    if (!n.at || t !== "DROP") {
      var l = Qv({
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
  ew = function (e) {
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
          t(H1({ reason: a }));
          return;
        }
        if (o.phase !== "IDLE") {
          var l = o.phase === "DROP_PENDING" && o.isWaiting;
          l && P(!1),
            o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || P(!1);
          var u = o.critical,
            s = o.dimensions,
            f = s.draggables[o.critical.draggable.id],
            d = Z1({
              reason: a,
              lastImpact: o.impact,
              afterCritical: o.afterCritical,
              onLiftImpact: o.onLiftImpact,
              home: o.dimensions.droppables[o.critical.droppable.id],
              viewport: o.viewport,
              draggables: o.dimensions.draggables,
            }),
            c = d.impact,
            p = d.didDropInsideDroppable,
            m = p ? vs(c) : null,
            y = p ? pa(c) : null,
            S = { index: u.draggable.index, droppableId: u.droppable.id },
            g = {
              draggableId: f.descriptor.id,
              type: f.descriptor.type,
              source: S,
              reason: a,
              mode: o.movementMode,
              destination: m,
              combine: y,
            },
            v = J1({
              impact: c,
              draggable: f,
              dimensions: s,
              viewport: o.viewport,
              afterCritical: o.afterCritical,
            }),
            h = {
              critical: o.critical,
              afterCritical: o.afterCritical,
              result: g,
              impact: c,
            },
            w = !Yr(o.current.client.offset, v) || Boolean(g.combine);
          if (!w) {
            t(xs({ completed: h }));
            return;
          }
          var x = X1({
              current: o.current.client.offset,
              destination: v,
              reason: a,
            }),
            b = { newHomeClientOffset: v, dropDuration: x, completed: h };
          t(V1(b));
        }
      };
    };
  },
  rg = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  };
function rw(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: function (t) {
      (t.target !== window && t.target !== window.document) || e();
    },
  };
}
function tw(e) {
  var r = e.onWindowScroll;
  function t() {
    r(rg());
  }
  var n = Yn(t),
    i = rw(n),
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
var nw = function (r) {
    return (
      r.type === "DROP_COMPLETE" ||
      r.type === "DROP_ANIMATE" ||
      r.type === "FLUSH"
    );
  },
  iw = function (e) {
    var r = tw({
      onWindowScroll: function (n) {
        e.dispatch($1({ newScroll: n }));
      },
    });
    return function (t) {
      return function (n) {
        !r.isActive() && n.type === "INITIAL_PUBLISH" && r.start(),
          r.isActive() && nw(n) && r.stop(),
          t(n);
      };
    };
  },
  ow = function (e) {
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
  aw = function () {
    var e = [],
      r = function (o) {
        var a = ps(e, function (s) {
          return s.timerId === o;
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
  lw = function (r, t) {
    return r == null && t == null
      ? !0
      : r == null || t == null
      ? !1
      : r.droppableId === t.droppableId && r.index === t.index;
  },
  uw = function (r, t) {
    return r == null && t == null
      ? !0
      : r == null || t == null
      ? !1
      : r.draggableId === t.draggableId && r.droppableId === t.droppableId;
  },
  sw = function (r, t) {
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
    var o = ow(n),
      a = { announce: o };
    r(t, a), o.wasCalled() || n(i(t));
  },
  cw = function (e, r) {
    var t = aw(),
      n = null,
      i = function (c, p) {
        n && P(!1),
          gn("onBeforeCapture", function () {
            var m = e().onBeforeCapture;
            if (m) {
              var y = { draggableId: c, mode: p };
              m(y);
            }
          });
      },
      o = function (c, p) {
        n && P(!1),
          gn("onBeforeDragStart", function () {
            var m = e().onBeforeDragStart;
            m && m(Fi(c, p));
          });
      },
      a = function (c, p) {
        n && P(!1);
        var m = Fi(c, p);
        (n = {
          mode: p,
          lastCritical: c,
          lastLocation: m.source,
          lastCombine: null,
        }),
          t.add(function () {
            gn("onDragStart", function () {
              return nl(e().onDragStart, m, r, eo.onDragStart);
            });
          });
      },
      l = function (c, p) {
        var m = vs(p),
          y = pa(p);
        n || P(!1);
        var S = !sw(c, n.lastCritical);
        S && (n.lastCritical = c);
        var g = !lw(n.lastLocation, m);
        g && (n.lastLocation = m);
        var v = !uw(n.lastCombine, y);
        if ((v && (n.lastCombine = y), !(!S && !g && !v))) {
          var h = M({}, Fi(c, n.mode), { combine: y, destination: m });
          t.add(function () {
            gn("onDragUpdate", function () {
              return nl(e().onDragUpdate, h, r, eo.onDragUpdate);
            });
          });
        }
      },
      u = function () {
        n || P(!1), t.flush();
      },
      s = function (c) {
        n || P(!1),
          (n = null),
          gn("onDragEnd", function () {
            return nl(e().onDragEnd, c, r, eo.onDragEnd);
          });
      },
      f = function () {
        if (!!n) {
          var c = M({}, Fi(n.lastCritical, n.mode), {
            combine: null,
            destination: null,
            reason: "CANCEL",
          });
          s(c);
        }
      };
    return {
      beforeCapture: i,
      beforeStart: o,
      start: a,
      update: l,
      flush: u,
      drop: s,
      abort: f,
    };
  },
  dw = function (e, r) {
    var t = cw(e, r);
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
  fw = function (e) {
    return function (r) {
      return function (t) {
        if (t.type !== "DROP_ANIMATION_FINISHED") {
          r(t);
          return;
        }
        var n = e.getState();
        n.phase !== "DROP_ANIMATING" && P(!1),
          e.dispatch(xs({ completed: n.completed }));
      };
    };
  },
  pw = function (e) {
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
              u.phase === "DROP_ANIMATING" && e.dispatch(Zv());
            },
          };
          t = requestAnimationFrame(function () {
            (t = null), (r = tr(window, [a]));
          });
        }
      };
    };
  },
  vw = function (e) {
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
  gw = function (e) {
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
  mw = function (r) {
    return (
      r.type === "DROP_COMPLETE" ||
      r.type === "DROP_ANIMATE" ||
      r.type === "FLUSH"
    );
  },
  hw = function (e) {
    return function (r) {
      return function (t) {
        return function (n) {
          if (mw(n)) {
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
  yw = function (e) {
    return function (r) {
      return function (t) {
        if ((r(t), t.type === "PUBLISH_WHILE_DRAGGING")) {
          var n = e.getState();
          n.phase === "DROP_PENDING" &&
            (n.isWaiting || e.dispatch(Jv({ reason: n.reason })));
        }
      };
    };
  },
  ww = iv,
  Sw = function (e) {
    var r = e.dimensionMarshal,
      t = e.focusMarshal,
      n = e.styleMarshal,
      i = e.getResponders,
      o = e.announce,
      a = e.autoScroller;
    return nv(
      O1,
      ww(iy(q1(n), vw(r), Q1(r), ew, fw, pw, yw, hw(a), iw, gw(t), dw(i, o)))
    );
  },
  il = function () {
    return { additions: {}, removals: {}, modified: {} };
  };
function xw(e) {
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
            c = f.removals,
            p = f.modified,
            m = Object.keys(d)
              .map(function (g) {
                return r.draggable.getById(g).getDimension(pe);
              })
              .sort(function (g, v) {
                return g.descriptor.index - v.descriptor.index;
              }),
            y = Object.keys(p).map(function (g) {
              var v = r.droppable.getById(g),
                h = v.callbacks.getScrollWhileDragging();
              return { droppableId: g, scroll: h };
            }),
            S = { additions: m, removals: Object.keys(c), modified: y };
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
var tg = function (e) {
    var r = e.scrollHeight,
      t = e.scrollWidth,
      n = e.height,
      i = e.width,
      o = je({ x: t, y: r }, { x: i, y: n }),
      a = { x: Math.max(0, o.x), y: Math.max(0, o.y) };
    return a;
  },
  ng = function () {
    var e = document.documentElement;
    return e || P(!1), e;
  },
  ig = function () {
    var e = ng(),
      r = tg({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight,
      });
    return r;
  },
  bw = function () {
    var e = rg(),
      r = ig(),
      t = e.y,
      n = e.x,
      i = ng(),
      o = i.clientWidth,
      a = i.clientHeight,
      l = n + o,
      u = t + a,
      s = pr({ top: t, left: n, right: l, bottom: u }),
      f = {
        frame: s,
        scroll: {
          initial: e,
          current: e,
          max: r,
          diff: { value: pe, displacement: pe },
        },
      };
    return f;
  },
  Cw = function (e) {
    var r = e.critical,
      t = e.scrollOptions,
      n = e.registry,
      i = bw(),
      o = i.scroll.current,
      a = r.droppable,
      l = n.droppable.getAllByType(a.type).map(function (d) {
        return d.callbacks.getDimensionAndWatchScroll(o, t);
      }),
      u = n.draggable.getAllByType(r.draggable.type).map(function (d) {
        return d.getDimension(o);
      }),
      s = { draggables: Av(u), droppables: Rv(l) },
      f = { dimensions: s, critical: r, viewport: i };
    return f;
  };
function Od(e, r, t) {
  if (t.descriptor.id === r.id || t.descriptor.type !== r.type) return !1;
  var n = e.droppable.getById(t.descriptor.droppableId);
  return n.descriptor.mode === "virtual";
}
var Dw = function (e, r) {
    var t = null,
      n = xw({
        callbacks: {
          publish: r.publishWhileDragging,
          collectionStarting: r.collectionStarting,
        },
        registry: e,
      }),
      i = function (p, m) {
        e.droppable.exists(p) || P(!1),
          t && r.updateDroppableIsEnabled({ id: p, isEnabled: m });
      },
      o = function (p, m) {
        !t ||
          (e.droppable.exists(p) || P(!1),
          r.updateDroppableIsCombineEnabled({ id: p, isCombineEnabled: m }));
      },
      a = function (p, m) {
        !t ||
          (e.droppable.exists(p) || P(!1),
          r.updateDroppableScroll({ id: p, newScroll: m }));
      },
      l = function (p, m) {
        !t || e.droppable.getById(p).callbacks.scroll(m);
      },
      u = function () {
        if (!!t) {
          n.stop();
          var p = t.critical.droppable;
          e.droppable.getAllByType(p.type).forEach(function (m) {
            return m.callbacks.dragStopped();
          }),
            t.unsubscribe(),
            (t = null);
        }
      },
      s = function (p) {
        t || P(!1);
        var m = t.critical.draggable;
        p.type === "ADDITION" && Od(e, m, p.value) && n.add(p.value),
          p.type === "REMOVAL" && Od(e, m, p.value) && n.remove(p.value);
      },
      f = function (p) {
        t && P(!1);
        var m = e.draggable.getById(p.draggableId),
          y = e.droppable.getById(m.descriptor.droppableId),
          S = { draggable: m.descriptor, droppable: y.descriptor },
          g = e.subscribe(s);
        return (
          (t = { critical: S, unsubscribe: g }),
          Cw({ critical: S, registry: e, scrollOptions: p.scrollOptions })
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
  og = function (e, r) {
    return e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === r
      ? !1
      : e.completed.result.reason === "DROP";
  },
  Ew = function (e) {
    window.scrollBy(e.x, e.y);
  },
  Iw = fe(function (e) {
    return fa(e).filter(function (r) {
      return !(!r.isEnabled || !r.frame);
    });
  }),
  Pw = function (r, t) {
    var n = ot(Iw(t), function (i) {
      return i.frame || P(!1), Uv(i.frame.pageMarginBox)(r);
    });
    return n;
  },
  kw = function (e) {
    var r = e.center,
      t = e.destination,
      n = e.droppables;
    if (t) {
      var i = n[t];
      return i.frame ? i : null;
    }
    var o = Pw(r, n);
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
  Nw = function (e, r) {
    var t = e[r.size] * Xr.startFromPercentage,
      n = e[r.size] * Xr.maxScrollAtPercentage,
      i = { startScrollingFrom: t, maxScrollValueAt: n };
    return i;
  },
  ag = function (e) {
    var r = e.startOfRange,
      t = e.endOfRange,
      n = e.current,
      i = t - r;
    if (i === 0) return 0;
    var o = n - r,
      a = o / i;
    return a;
  },
  Ds = 1,
  Ow = function (e, r) {
    if (e > r.startScrollingFrom) return 0;
    if (e <= r.maxScrollValueAt) return Xr.maxPixelScroll;
    if (e === r.startScrollingFrom) return Ds;
    var t = ag({
        startOfRange: r.maxScrollValueAt,
        endOfRange: r.startScrollingFrom,
        current: e,
      }),
      n = 1 - t,
      i = Xr.maxPixelScroll * Xr.ease(n);
    return Math.ceil(i);
  },
  Td = Xr.durationDampening.accelerateAt,
  Rd = Xr.durationDampening.stopDampeningAt,
  Tw = function (e, r) {
    var t = r,
      n = Rd,
      i = Date.now(),
      o = i - t;
    if (o >= Rd) return e;
    if (o < Td) return Ds;
    var a = ag({ startOfRange: Td, endOfRange: n, current: o }),
      l = e * Xr.ease(a);
    return Math.ceil(l);
  },
  Ad = function (e) {
    var r = e.distanceToEdge,
      t = e.thresholds,
      n = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      o = Ow(r, t);
    return o === 0 ? 0 : i ? Math.max(Tw(o, n), Ds) : o;
  },
  Ld = function (e) {
    var r = e.container,
      t = e.distanceToEdges,
      n = e.dragStartTime,
      i = e.axis,
      o = e.shouldUseTimeDampening,
      a = Nw(r, i),
      l = t[i.end] < t[i.start];
    return l
      ? Ad({
          distanceToEdge: t[i.end],
          thresholds: a,
          dragStartTime: n,
          shouldUseTimeDampening: o,
        })
      : -1 *
          Ad({
            distanceToEdge: t[i.start],
            thresholds: a,
            dragStartTime: n,
            shouldUseTimeDampening: o,
          });
  },
  Rw = function (e) {
    var r = e.container,
      t = e.subject,
      n = e.proposedScroll,
      i = t.height > r.height,
      o = t.width > r.width;
    return !o && !i ? n : o && i ? null : { x: o ? 0 : n.x, y: i ? 0 : n.y };
  },
  Aw = Ov(function (e) {
    return e === 0 ? 0 : e;
  }),
  lg = function (e) {
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
      l = Ld({
        container: t,
        distanceToEdges: a,
        dragStartTime: r,
        axis: gs,
        shouldUseTimeDampening: o,
      }),
      u = Ld({
        container: t,
        distanceToEdges: a,
        dragStartTime: r,
        axis: Mv,
        shouldUseTimeDampening: o,
      }),
      s = Aw({ x: u, y: l });
    if (Yr(s, pe)) return null;
    var f = Rw({ container: t, subject: n, proposedScroll: s });
    return f ? (Yr(f, pe) ? null : f) : null;
  },
  Lw = Ov(function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  }),
  Es = (function () {
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
  ug = function (r) {
    var t = r.max,
      n = r.current,
      i = r.change,
      o = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
      a = Lw(i),
      l = Es({ max: o, current: n, change: a });
    return !l || (a.x !== 0 && l.x === 0) || (a.y !== 0 && l.y === 0);
  },
  Is = function (r, t) {
    return ug({ current: r.scroll.current, max: r.scroll.max, change: t });
  },
  Bw = function (r, t) {
    if (!Is(r, t)) return null;
    var n = r.scroll.max,
      i = r.scroll.current;
    return Es({ current: i, max: n, change: t });
  },
  Ps = function (r, t) {
    var n = r.frame;
    return n
      ? ug({ current: n.scroll.current, max: n.scroll.max, change: t })
      : !1;
  },
  Mw = function (r, t) {
    var n = r.frame;
    return !n || !Ps(r, t)
      ? null
      : Es({ current: n.scroll.current, max: n.scroll.max, change: t });
  },
  Fw = function (e) {
    var r = e.viewport,
      t = e.subject,
      n = e.center,
      i = e.dragStartTime,
      o = e.shouldUseTimeDampening,
      a = lg({
        dragStartTime: i,
        container: r.frame,
        subject: t,
        center: n,
        shouldUseTimeDampening: o,
      });
    return a && Is(r, a) ? a : null;
  },
  zw = function (e) {
    var r = e.droppable,
      t = e.subject,
      n = e.center,
      i = e.dragStartTime,
      o = e.shouldUseTimeDampening,
      a = r.frame;
    if (!a) return null;
    var l = lg({
      dragStartTime: i,
      container: a.pageMarginBox,
      subject: t,
      center: n,
      shouldUseTimeDampening: o,
    });
    return l && Ps(r, l) ? l : null;
  },
  Bd = function (e) {
    var r = e.state,
      t = e.dragStartTime,
      n = e.shouldUseTimeDampening,
      i = e.scrollWindow,
      o = e.scrollDroppable,
      a = r.current.page.borderBoxCenter,
      l = r.dimensions.draggables[r.critical.draggable.id],
      u = l.page.marginBox;
    if (r.isWindowScrollAllowed) {
      var s = r.viewport,
        f = Fw({
          dragStartTime: t,
          viewport: s,
          subject: u,
          center: a,
          shouldUseTimeDampening: n,
        });
      if (f) {
        i(f);
        return;
      }
    }
    var d = kw({
      center: a,
      destination: Ue(r.impact),
      droppables: r.dimensions.droppables,
    });
    if (!!d) {
      var c = zw({
        dragStartTime: t,
        droppable: d,
        subject: u,
        center: a,
        shouldUseTimeDampening: n,
      });
      c && o(d.descriptor.id, c);
    }
  },
  $w = function (e) {
    var r = e.scrollWindow,
      t = e.scrollDroppable,
      n = Yn(r),
      i = Yn(t),
      o = null,
      a = function (f) {
        o || P(!1);
        var d = o,
          c = d.shouldUseTimeDampening,
          p = d.dragStartTime;
        Bd({
          state: f,
          scrollWindow: n,
          scrollDroppable: i,
          dragStartTime: p,
          shouldUseTimeDampening: c,
        });
      },
      l = function (f) {
        o && P(!1);
        var d = Date.now(),
          c = !1,
          p = function () {
            c = !0;
          };
        Bd({
          state: f,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: p,
          scrollDroppable: p,
        }),
          (o = { dragStartTime: d, shouldUseTimeDampening: c }),
          c && a(f);
      },
      u = function () {
        !o || (n.cancel(), i.cancel(), (o = null));
      };
    return { start: l, stop: u, scroll: a };
  },
  _w = function (e) {
    var r = e.move,
      t = e.scrollDroppable,
      n = e.scrollWindow,
      i = function (s, f) {
        var d = ye(s.current.client.selection, f);
        r({ client: d });
      },
      o = function (s, f) {
        if (!Ps(s, f)) return f;
        var d = Mw(s, f);
        if (!d) return t(s.descriptor.id, f), null;
        var c = je(f, d);
        t(s.descriptor.id, c);
        var p = je(f, c);
        return p;
      },
      a = function (s, f, d) {
        if (!s || !Is(f, d)) return d;
        var c = Bw(f, d);
        if (!c) return n(d), null;
        var p = je(d, c);
        n(p);
        var m = je(d, p);
        return m;
      },
      l = function (s) {
        var f = s.scrollJumpRequest;
        if (!!f) {
          var d = Ue(s.impact);
          d || P(!1);
          var c = o(s.dimensions.droppables[d], f);
          if (!!c) {
            var p = s.viewport,
              m = a(s.isWindowScrollAllowed, p, c);
            !m || i(s, m);
          }
        }
      };
    return l;
  },
  jw = function (e) {
    var r = e.scrollDroppable,
      t = e.scrollWindow,
      n = e.move,
      i = $w({ scrollWindow: t, scrollDroppable: r }),
      o = _w({ move: n, scrollWindow: t, scrollDroppable: r }),
      a = function (s) {
        if (s.phase === "DRAGGING") {
          if (s.movementMode === "FLUID") {
            i.scroll(s);
            return;
          }
          !s.scrollJumpRequest || o(s);
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
  Ww = (function () {
    var e = Yt + "-droppable";
    return { base: e, contextId: e + "-context-id", id: e + "-id" };
  })(),
  Md = { contextId: Yt + "-scroll-container-context-id" },
  Uw = function (r) {
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
  Gw = "pointer-events: none;",
  Vw = function (e) {
    var r = Uw(e),
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
            dragging: Gw,
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
        selector: r(Ww.contextId),
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
  Fd = function (r) {
    var t = document.createElement("style");
    return r && t.setAttribute("nonce", r), (t.type = "text/css"), t;
  };
function Hw(e, r) {
  var t = $(
      function () {
        return Vw(e);
      },
      [e]
    ),
    n = I.exports.useRef(null),
    i = I.exports.useRef(null),
    o = A(
      fe(function (d) {
        var c = i.current;
        c || P(!1), (c.textContent = d);
      }),
      []
    ),
    a = A(function (d) {
      var c = n.current;
      c || P(!1), (c.textContent = d);
    }, []);
  Ge(
    function () {
      (!n.current && !i.current) || P(!1);
      var d = Fd(r),
        c = Fd(r);
      return (
        (n.current = d),
        (i.current = c),
        d.setAttribute(Yt + "-always", e),
        c.setAttribute(Yt + "-dynamic", e),
        ol().appendChild(d),
        ol().appendChild(c),
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
    s = A(
      function () {
        !i.current || o(t.resting);
      },
      [o, t.resting]
    ),
    f = $(
      function () {
        return { dragging: l, dropping: u, resting: s };
      },
      [l, u, s]
    );
  return f;
}
var sg = function (e) {
  return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
};
function ma(e) {
  return e instanceof sg(e).HTMLElement;
}
function Qw(e, r) {
  var t = "[" + Xt.contextId + '="' + e + '"]',
    n = Tv(document.querySelectorAll(t));
  if (!n.length) return null;
  var i = ot(n, function (o) {
    return o.getAttribute(Xt.draggableId) === r;
  });
  return !i || !ma(i) ? null : i;
}
function qw(e) {
  var r = I.exports.useRef({}),
    t = I.exports.useRef(null),
    n = I.exports.useRef(null),
    i = I.exports.useRef(!1),
    o = A(function (c, p) {
      var m = { id: c, focus: p };
      return (
        (r.current[c] = m),
        function () {
          var S = r.current,
            g = S[c];
          g !== m && delete S[c];
        }
      );
    }, []),
    a = A(
      function (c) {
        var p = Qw(e, c);
        p && p !== document.activeElement && p.focus();
      },
      [e]
    ),
    l = A(function (c, p) {
      t.current === c && (t.current = p);
    }, []),
    u = A(
      function () {
        n.current ||
          !i.current ||
          (n.current = requestAnimationFrame(function () {
            n.current = null;
            var c = t.current;
            c && a(c);
          }));
      },
      [a]
    ),
    s = A(function (c) {
      t.current = null;
      var p = document.activeElement;
      !p || (p.getAttribute(Xt.draggableId) === c && (t.current = c));
    }, []);
  Ge(function () {
    return (
      (i.current = !0),
      function () {
        i.current = !1;
        var c = n.current;
        c && cancelAnimationFrame(c);
      }
    );
  }, []);
  var f = $(
    function () {
      return {
        register: o,
        tryRecordFocus: s,
        tryRestoreFocusRecorded: u,
        tryShiftRecord: l,
      };
    },
    [o, s, u, l]
  );
  return f;
}
function Kw() {
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
      r.forEach(function (c) {
        return c(d);
      });
  }
  function i(d) {
    return e.draggables[d] || null;
  }
  function o(d) {
    var c = i(d);
    return c || P(!1), c;
  }
  var a = {
    register: function (c) {
      (e.draggables[c.descriptor.id] = c), n({ type: "ADDITION", value: c });
    },
    update: function (c, p) {
      var m = e.draggables[p.descriptor.id];
      !m ||
        (m.uniqueId === c.uniqueId &&
          (delete e.draggables[p.descriptor.id],
          (e.draggables[c.descriptor.id] = c)));
    },
    unregister: function (c) {
      var p = c.descriptor.id,
        m = i(p);
      !m ||
        (c.uniqueId === m.uniqueId &&
          (delete e.draggables[p], n({ type: "REMOVAL", value: c })));
    },
    getById: o,
    findById: i,
    exists: function (c) {
      return Boolean(i(c));
    },
    getAllByType: function (c) {
      return Ro(e.draggables).filter(function (p) {
        return p.descriptor.type === c;
      });
    },
  };
  function l(d) {
    return e.droppables[d] || null;
  }
  function u(d) {
    var c = l(d);
    return c || P(!1), c;
  }
  var s = {
    register: function (c) {
      e.droppables[c.descriptor.id] = c;
    },
    unregister: function (c) {
      var p = l(c.descriptor.id);
      !p || (c.uniqueId === p.uniqueId && delete e.droppables[c.descriptor.id]);
    },
    getById: u,
    findById: l,
    exists: function (c) {
      return Boolean(l(c));
    },
    getAllByType: function (c) {
      return Ro(e.droppables).filter(function (p) {
        return p.descriptor.type === c;
      });
    },
  };
  function f() {
    (e.draggables = {}), (e.droppables = {}), (r.length = 0);
  }
  return { draggable: a, droppable: s, subscribe: t, clean: f };
}
function Yw() {
  var e = $(Kw, []);
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
var ks = vr.createContext(null),
  Lo = function () {
    var e = document.body;
    return e || P(!1), e;
  },
  Xw = {
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
  Jw = function (r) {
    return "rbd-announcement-" + r;
  };
function Zw(e) {
  var r = $(
      function () {
        return Jw(e);
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
        M(o.style, Xw),
        Lo().appendChild(o),
        function () {
          setTimeout(function () {
            var u = Lo();
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
var eS = 0,
  rS = { separator: "::" };
function Ns(e, r) {
  return (
    r === void 0 && (r = rS),
    $(
      function () {
        return "" + e + r.separator + eS++;
      },
      [r.separator, e]
    )
  );
}
function tS(e) {
  var r = e.contextId,
    t = e.uniqueId;
  return "rbd-hidden-text-" + r + "-" + t;
}
function nS(e) {
  var r = e.contextId,
    t = e.text,
    n = Ns("hidden-text", { separator: "-" }),
    i = $(
      function () {
        return tS({ contextId: r, uniqueId: n });
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
          Lo().appendChild(a),
          function () {
            var u = Lo();
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
function cg(e) {
  var r = I.exports.useRef(e);
  return (
    I.exports.useEffect(function () {
      r.current = e;
    }),
    r
  );
}
function iS() {
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
var oS = 9,
  aS = 13,
  Os = 27,
  dg = 32,
  lS = 33,
  uS = 34,
  sS = 35,
  cS = 36,
  dS = 37,
  fS = 38,
  pS = 39,
  vS = 40,
  zi,
  gS = ((zi = {}), (zi[aS] = !0), (zi[oS] = !0), zi),
  fg = function (e) {
    gS[e.keyCode] && e.preventDefault();
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
  pg = 0,
  zd = 5;
function mS(e, r) {
  return Math.abs(r.x - e.x) >= zd || Math.abs(r.y - e.y) >= zd;
}
var $d = { type: "IDLE" };
function hS(e) {
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
          s = a.clientY;
        if (l === pg) {
          var f = { x: u, y: s },
            d = n();
          if (d.type === "DRAGGING") {
            a.preventDefault(), d.actions.move(f);
            return;
          }
          d.type !== "PENDING" && P(!1);
          var c = d.point;
          if (!!mS(c, f)) {
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
        if (a.keyCode === Os) {
          a.preventDefault(), r();
          return;
        }
        fg(a);
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
function yS(e) {
  var r = I.exports.useRef($d),
    t = I.exports.useRef(Kr),
    n = $(
      function () {
        return {
          eventName: "mousedown",
          fn: function (d) {
            if (
              !d.defaultPrevented &&
              d.button === pg &&
              !(d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
            ) {
              var c = e.findClosestDraggableId(d);
              if (!!c) {
                var p = e.tryGetLock(c, a, { sourceEvent: d });
                if (!!p) {
                  d.preventDefault();
                  var m = { x: d.clientX, y: d.clientY };
                  t.current(), s(p, m);
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
              var c = e.findClosestDraggableId(d);
              if (!!c) {
                var p = e.findOptionsForDraggable(c);
                !p ||
                  p.shouldRespectForcePress ||
                  !e.canGetLock(c) ||
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
        f.type !== "IDLE" && ((r.current = $d), t.current(), o());
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
          c = hS({
            cancel: l,
            completed: a,
            getPhase: function () {
              return r.current;
            },
            setPhase: function (m) {
              r.current = m;
            },
          });
        t.current = tr(window, c, d);
      },
      [l, a]
    ),
    s = A(
      function (d, c) {
        r.current.type !== "IDLE" && P(!1),
          (r.current = { type: "PENDING", point: c, actions: d }),
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
function wS() {}
var SS =
  ((Dt = {}), (Dt[uS] = !0), (Dt[lS] = !0), (Dt[cS] = !0), (Dt[sS] = !0), Dt);
function xS(e, r) {
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
        if (o.keyCode === Os) {
          o.preventDefault(), t();
          return;
        }
        if (o.keyCode === dg) {
          o.preventDefault(), n();
          return;
        }
        if (o.keyCode === vS) {
          o.preventDefault(), e.moveDown();
          return;
        }
        if (o.keyCode === fS) {
          o.preventDefault(), e.moveUp();
          return;
        }
        if (o.keyCode === pS) {
          o.preventDefault(), e.moveRight();
          return;
        }
        if (o.keyCode === dS) {
          o.preventDefault(), e.moveLeft();
          return;
        }
        if (SS[o.keyCode]) {
          o.preventDefault();
          return;
        }
        fg(o);
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
function bS(e) {
  var r = I.exports.useRef(wS),
    t = $(
      function () {
        return {
          eventName: "keydown",
          fn: function (o) {
            if (o.defaultPrevented || o.keyCode !== dg) return;
            var a = e.findClosestDraggableId(o);
            if (!a) return;
            var l = e.tryGetLock(a, f, { sourceEvent: o });
            if (!l) return;
            o.preventDefault();
            var u = !0,
              s = l.snapLift();
            r.current();
            function f() {
              u || P(!1), (u = !1), r.current(), n();
            }
            r.current = tr(window, xS(s, f), { capture: !0, passive: !1 });
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
  CS = 120,
  DS = 0.15;
function ES(e) {
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
        i.keyCode === Os && i.preventDefault(), r();
      },
    },
    { eventName: ya, fn: r },
  ];
}
function IS(e) {
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
          s = l.clientY,
          f = { x: u, y: s };
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
          var u = l.force >= DS;
          if (!!u) {
            var s = a.actions.shouldRespectForcePress();
            if (a.type === "PENDING") {
              s && r();
              return;
            }
            if (s) {
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
function PS(e) {
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
              var m = e.findClosestDraggableId(p);
              if (!!m) {
                var y = e.tryGetLock(m, l, { sourceEvent: p });
                if (!!y) {
                  var S = p.touches[0],
                    g = S.clientX,
                    v = S.clientY,
                    h = { x: g, y: v };
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
        var c = r.current;
        c.type !== "IDLE" &&
          (c.type === "PENDING" && clearTimeout(c.longPressTimerId),
          i(al),
          t.current(),
          a());
      },
      [a, i]
    ),
    u = A(
      function () {
        var c = r.current;
        l(),
          c.type === "DRAGGING" &&
            c.actions.cancel({ shouldBlockNextClick: !0 }),
          c.type === "PENDING" && c.actions.abort();
      },
      [l]
    ),
    s = A(
      function () {
        var p = { capture: !0, passive: !1 },
          m = { cancel: u, completed: l, getPhase: n },
          y = tr(window, IS(m), p),
          S = tr(window, ES(m), p);
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
        var m = p.actions.fluidLift(p.point);
        i({ type: "DRAGGING", actions: m, hasMoved: !1 });
      },
      [n, i]
    ),
    d = A(
      function (p, m) {
        n().type !== "IDLE" && P(!1);
        var y = setTimeout(f, CS);
        i({ type: "PENDING", point: m, actions: p, longPressTimerId: y }), s();
      },
      [s, n, i, f]
    );
  Ge(
    function () {
      return (
        a(),
        function () {
          t.current();
          var m = n();
          m.type === "PENDING" && (clearTimeout(m.longPressTimerId), i(al));
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
var kS = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function vg(e, r) {
  if (r == null) return !1;
  var t = Boolean(kS[r.tagName.toLowerCase()]);
  if (t) return !0;
  var n = r.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : r === e ? !1 : vg(e, r.parentElement);
}
function NS(e, r) {
  var t = r.target;
  return ma(t) ? vg(e, t) : !1;
}
var OS = function (e) {
  return pr(e.getBoundingClientRect()).center;
};
function TS(e) {
  return e instanceof sg(e).Element;
}
var RS = (function () {
  var e = "matches";
  if (typeof document == "undefined") return e;
  var r = [e, "msMatchesSelector", "webkitMatchesSelector"],
    t = ot(r, function (n) {
      return n in Element.prototype;
    });
  return t || e;
})();
function gg(e, r) {
  return e == null ? null : e[RS](r) ? e : gg(e.parentElement, r);
}
function AS(e, r) {
  return e.closest ? e.closest(r) : gg(e, r);
}
function LS(e) {
  return "[" + Xt.contextId + '="' + e + '"]';
}
function BS(e, r) {
  var t = r.target;
  if (!TS(t)) return null;
  var n = LS(e),
    i = AS(t, n);
  return !i || !ma(i) ? null : i;
}
function MS(e, r) {
  var t = BS(e, r);
  return t ? t.getAttribute(Xt.draggableId) : null;
}
function FS(e, r) {
  var t = "[" + lu.contextId + '="' + e + '"]',
    n = Tv(document.querySelectorAll(t)),
    i = ot(n, function (o) {
      return o.getAttribute(lu.id) === r;
    });
  return !i || !ma(i) ? null : i;
}
function zS(e) {
  e.preventDefault();
}
function $i(e) {
  var r = e.expected,
    t = e.phase,
    n = e.isLockActive;
  return e.shouldWarn, !(!n() || r !== t);
}
function mg(e) {
  var r = e.lockAPI,
    t = e.store,
    n = e.registry,
    i = e.draggableId;
  if (r.isClaimed()) return !1;
  var o = n.draggable.findById(i);
  return !(!o || !o.options.isEnabled || !og(t.getState(), i));
}
function $S(e) {
  var r = e.lockAPI,
    t = e.contextId,
    n = e.store,
    i = e.registry,
    o = e.draggableId,
    a = e.forceSensorStop,
    l = e.sourceEvent,
    u = mg({ lockAPI: r, store: n, registry: i, draggableId: o });
  if (!u) return null;
  var s = i.draggable.getById(o),
    f = FS(t, s.descriptor.id);
  if (!f || (l && !s.options.canDragInteractiveElements && NS(f, l)))
    return null;
  var d = r.claim(a || Kr),
    c = "PRE_DRAG";
  function p() {
    return s.options.shouldRespectForcePress;
  }
  function m() {
    return r.isActive(d);
  }
  function y(b, E) {
    $i({ expected: b, phase: c, isLockActive: m, shouldWarn: !0 }) &&
      n.dispatch(E());
  }
  var S = y.bind(null, "DRAGGING");
  function g(b) {
    function E() {
      r.release(), (c = "COMPLETED");
    }
    c !== "PRE_DRAG" && (E(), c !== "PRE_DRAG" && P(!1)),
      n.dispatch(R1(b.liftActionArgs)),
      (c = "DRAGGING");
    function k(R, T) {
      if (
        (T === void 0 && (T = { shouldBlockNextClick: !1 }),
        b.cleanup(),
        T.shouldBlockNextClick)
      ) {
        var F = tr(window, [
          {
            eventName: "click",
            fn: zS,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(F);
      }
      E(), n.dispatch(Jv({ reason: R }));
    }
    return M(
      {
        isActive: function () {
          return $i({
            expected: "DRAGGING",
            phase: c,
            isLockActive: m,
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
          return Xv({ client: R });
        });
      }),
      k = g({
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
        return S(j1);
      },
      moveRight: function () {
        return S(U1);
      },
      moveDown: function () {
        return S(W1);
      },
      moveLeft: function () {
        return S(G1);
      },
    };
    return g({
      liftActionArgs: { id: o, clientSelection: OS(f), movementMode: "SNAP" },
      cleanup: Kr,
      actions: b,
    });
  }
  function w() {
    var b = $i({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: m,
      shouldWarn: !0,
    });
    b && r.release();
  }
  var x = {
    isActive: function () {
      return $i({
        expected: "PRE_DRAG",
        phase: c,
        isLockActive: m,
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
var _S = [yS, bS, PS];
function jS(e) {
  var r = e.contextId,
    t = e.store,
    n = e.registry,
    i = e.customSensors,
    o = e.enableDefaultSensors,
    a = [].concat(o ? _S : [], i || []),
    l = I.exports.useState(function () {
      return iS();
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
    var s = A(
        function (g) {
          return mg({ lockAPI: l, registry: n, store: t, draggableId: g });
        },
        [l, n, t]
      ),
      f = A(
        function (g, v, h) {
          return $S({
            lockAPI: l,
            registry: n,
            contextId: r,
            store: t,
            draggableId: g,
            forceSensorStop: v,
            sourceEvent: h && h.sourceEvent ? h.sourceEvent : null,
          });
        },
        [r, l, n, t]
      ),
      d = A(
        function (g) {
          return MS(r, g);
        },
        [r]
      ),
      c = A(
        function (g) {
          var v = n.draggable.findById(g);
          return v ? v.options : null;
        },
        [n.draggable]
      ),
      p = A(
        function () {
          !l.isClaimed() ||
            (l.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Ss()));
        },
        [l, t]
      ),
      m = A(l.isClaimed, [l]),
      y = $(
        function () {
          return {
            canGetLock: s,
            tryGetLock: f,
            findClosestDraggableId: d,
            findOptionsForDraggable: c,
            tryReleaseLock: p,
            isLockClaimed: m,
          };
        },
        [s, f, d, c, p, m]
      ),
      S = 0;
    S < a.length;
    S++
  )
    a[S](y);
}
var WS = function (r) {
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
function US(e) {
  var r = e.contextId,
    t = e.setCallbacks,
    n = e.sensors,
    i = e.nonce,
    o = e.dragHandleUsageInstructions,
    a = I.exports.useRef(null),
    l = cg(e),
    u = A(
      function () {
        return WS(l.current);
      },
      [l]
    ),
    s = Zw(r),
    f = nS({ contextId: r, text: o }),
    d = Hw(r, i),
    c = A(function (R) {
      hn(a).dispatch(R);
    }, []),
    p = $(
      function () {
        return ud(
          {
            publishWhileDragging: L1,
            updateDroppableScroll: M1,
            updateDroppableIsEnabled: F1,
            updateDroppableIsCombineEnabled: z1,
            collectionStarting: B1,
          },
          c
        );
      },
      [c]
    ),
    m = Yw(),
    y = $(
      function () {
        return Dw(m, p);
      },
      [m, p]
    ),
    S = $(
      function () {
        return jw(
          M(
            { scrollWindow: Ew, scrollDroppable: y.scrollDroppable },
            ud({ move: Xv }, c)
          )
        );
      },
      [y.scrollDroppable, c]
    ),
    g = qw(r),
    v = $(
      function () {
        return Sw({
          announce: s,
          autoScroller: S,
          dimensionMarshal: y,
          focusMarshal: g,
          getResponders: u,
          styleMarshal: d,
        });
      },
      [s, S, y, g, u, d]
    );
  a.current = v;
  var h = A(function () {
      var R = hn(a),
        T = R.getState();
      T.phase !== "IDLE" && R.dispatch(Ss());
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
      return og(hn(a).getState(), R);
    }, []),
    E = A(function () {
      return st(hn(a).getState());
    }, []),
    k = $(
      function () {
        return {
          marshal: y,
          focus: g,
          contextId: r,
          canLift: b,
          isMovementAllowed: E,
          dragHandleUsageInstructionsId: f,
          registry: m,
        };
      },
      [r, y, f, g, b, E, m]
    );
  return (
    jS({
      contextId: r,
      store: v,
      registry: m,
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
      children: C(py, { context: ks, store: v, children: e.children }),
    })
  );
}
var GS = 0;
function VS() {
  return $(function () {
    return "" + GS++;
  }, []);
}
function HS(e) {
  var r = VS(),
    t = e.dragHandleUsageInstructions || eo.dragHandleUsageInstructions;
  return C(b0, {
    children: function (n) {
      return C(US, {
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
var hg = function (r) {
    return function (t) {
      return r === t;
    };
  },
  QS = hg("scroll"),
  qS = hg("auto"),
  _d = function (r, t) {
    return t(r.overflowX) || t(r.overflowY);
  },
  KS = function (r) {
    var t = window.getComputedStyle(r),
      n = { overflowX: t.overflowX, overflowY: t.overflowY };
    return _d(n, QS) || _d(n, qS);
  },
  YS = function () {
    return !1;
  },
  XS = function e(r) {
    return r == null
      ? null
      : r === document.body
      ? YS()
        ? r
        : null
      : r === document.documentElement
      ? null
      : KS(r)
      ? r
      : e(r.parentElement);
  },
  uu = function (e) {
    return { x: e.scrollLeft, y: e.scrollTop };
  },
  JS = function e(r) {
    if (!r) return !1;
    var t = window.getComputedStyle(r);
    return t.position === "fixed" ? !0 : e(r.parentElement);
  },
  ZS = function (e) {
    var r = XS(e),
      t = JS(e);
    return { closestScrollable: r, isFixedOnPage: t };
  },
  ex = function (e) {
    var r = e.descriptor,
      t = e.isEnabled,
      n = e.isCombineEnabled,
      i = e.isFixedOnPage,
      o = e.direction,
      a = e.client,
      l = e.page,
      u = e.closest,
      s = (function () {
        if (!u) return null;
        var p = u.scrollSize,
          m = u.client,
          y = tg({
            scrollHeight: p.scrollHeight,
            scrollWidth: p.scrollWidth,
            height: m.paddingBox.height,
            width: m.paddingBox.width,
          });
        return {
          pageMarginBox: u.page.marginBox,
          frameClient: m,
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
      f = o === "vertical" ? gs : Mv,
      d = Kt({ page: l, withPlaceholder: null, axis: f, frame: s }),
      c = {
        descriptor: r,
        isCombineEnabled: n,
        isFixedOnPage: i,
        axis: f,
        isEnabled: t,
        client: a,
        page: l,
        frame: s,
        subject: d,
      };
    return c;
  },
  rx = function (r, t) {
    var n = Iv(r);
    if (!t || r !== t) return n;
    var i = n.paddingBox.top - t.scrollTop,
      o = n.paddingBox.left - t.scrollLeft,
      a = i + t.scrollHeight,
      l = o + t.scrollWidth,
      u = { top: i, right: l, bottom: a, left: o },
      s = cs(u, n.border),
      f = ds({
        borderBox: s,
        margin: n.margin,
        border: n.border,
        padding: n.padding,
      });
    return f;
  },
  tx = function (e) {
    var r = e.ref,
      t = e.descriptor,
      n = e.env,
      i = e.windowScroll,
      o = e.direction,
      a = e.isDropDisabled,
      l = e.isCombineEnabled,
      u = e.shouldClipSubject,
      s = n.closestScrollable,
      f = rx(r, s),
      d = No(f, i),
      c = (function () {
        if (!s) return null;
        var m = Iv(s),
          y = { scrollHeight: s.scrollHeight, scrollWidth: s.scrollWidth };
        return {
          client: m,
          page: No(m, i),
          scroll: uu(s),
          scrollSize: y,
          shouldClipSubject: u,
        };
      })(),
      p = ex({
        descriptor: t,
        isEnabled: !a,
        isCombineEnabled: l,
        isFixedOnPage: n.isFixedOnPage,
        direction: o,
        client: f,
        page: d,
        closest: c,
      });
    return p;
  },
  nx = { passive: !1 },
  ix = { passive: !0 },
  jd = function (e) {
    return e.shouldPublishImmediately ? nx : ix;
  };
function Bo(e) {
  var r = I.exports.useContext(e);
  return r || P(!1), r;
}
var _i = function (r) {
  return (r && r.env.closestScrollable) || null;
};
function ox(e) {
  var r = I.exports.useRef(null),
    t = Bo(ha),
    n = Ns("droppable"),
    i = t.registry,
    o = t.marshal,
    a = cg(e),
    l = $(
      function () {
        return { id: e.droppableId, type: e.type, mode: e.mode };
      },
      [e.droppableId, e.mode, e.type]
    ),
    u = I.exports.useRef(l),
    s = $(
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
        s(w.x, w.y);
      },
      [f, s]
    ),
    c = $(
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
        c();
      },
      [c, d]
    ),
    m = A(
      function (w, x) {
        r.current && P(!1);
        var b = a.current,
          E = b.getDroppableRef();
        E || P(!1);
        var k = ZS(E),
          R = { ref: E, descriptor: l, env: k, scrollOptions: x };
        r.current = R;
        var T = tx({
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
            (F.setAttribute(Md.contextId, t.contextId),
            F.addEventListener("scroll", p, jd(R.scrollOptions))),
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
            (c.cancel(),
            x.removeAttribute(Md.contextId),
            x.removeEventListener("scroll", p, jd(w.scrollOptions)));
      },
      [p, c]
    ),
    g = A(function (w) {
      var x = r.current;
      x || P(!1);
      var b = _i(x);
      b || P(!1), (b.scrollTop += w.y), (b.scrollLeft += w.x);
    }, []),
    v = $(
      function () {
        return {
          getDimensionAndWatchScroll: m,
          getScrollWhileDragging: y,
          dragStopped: S,
          scroll: g,
        };
      },
      [S, m, y, g]
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
var Wd = { width: 0, height: 0, margin: k0 },
  ax = function (r) {
    var t = r.isAnimatingOpenOnMount,
      n = r.placeholder,
      i = r.animate;
    return t || i === "close"
      ? Wd
      : {
          height: n.client.borderBox.height,
          width: n.client.borderBox.width,
          margin: n.client.margin,
        };
  },
  lx = function (r) {
    var t = r.isAnimatingOpenOnMount,
      n = r.placeholder,
      i = r.animate,
      o = ax({ isAnimatingOpenOnMount: t, placeholder: n, animate: i });
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
function ux(e) {
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
    s = l[1];
  I.exports.useEffect(
    function () {
      return u
        ? n !== "open"
          ? (t(), s(!1), ll)
          : r.current
          ? ll
          : ((r.current = setTimeout(function () {
              (r.current = null), s(!1);
            })),
            t)
        : ll;
    },
    [n, u, t]
  );
  var f = A(
      function (c) {
        c.propertyName === "height" && (i(), n === "close" && o());
      },
      [n, o, i]
    ),
    d = lx({
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
var sx = vr.memo(ux),
  Ts = vr.createContext(null),
  cx = (function (e) {
    tv(r, e);
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
  Ud = { dragging: 5e3, dropAnimating: 4500 },
  dx = function (r, t) {
    return t ? Rn.drop(t.duration) : r ? Rn.snap : Rn.fluid;
  },
  fx = function (r, t) {
    return r ? (t ? ei.opacity.drop : ei.opacity.combining) : null;
  },
  px = function (r) {
    return r.forceShouldAnimate != null
      ? r.forceShouldAnimate
      : r.mode === "SNAP";
  };
function vx(e) {
  var r = e.dimension,
    t = r.client,
    n = e.offset,
    i = e.combineWith,
    o = e.dropping,
    a = Boolean(i),
    l = px(e),
    u = Boolean(o),
    s = u ? ou.drop(n, a) : ou.moveTo(n),
    f = {
      position: "fixed",
      top: t.marginBox.top,
      left: t.marginBox.left,
      boxSizing: "border-box",
      width: t.borderBox.width,
      height: t.borderBox.height,
      transition: dx(l, o),
      transform: s,
      opacity: fx(a, u),
      zIndex: u ? Ud.dropAnimating : Ud.dragging,
      pointerEvents: "none",
    };
  return f;
}
function gx(e) {
  return {
    transform: ou.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? null : "none",
  };
}
function mx(e) {
  return e.type === "DRAGGING" ? vx(e) : gx(e);
}
function hx(e, r, t) {
  t === void 0 && (t = pe);
  var n = window.getComputedStyle(r),
    i = r.getBoundingClientRect(),
    o = Ev(i, n),
    a = No(o, t),
    l = { client: o, tagName: r.tagName.toLowerCase(), display: n.display },
    u = { x: o.marginBox.width, y: o.marginBox.height },
    s = { descriptor: e, placeholder: l, displaceBy: u, client: o, page: a };
  return s;
}
function yx(e) {
  var r = Ns("draggable"),
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
    s = A(
      function (p) {
        var m = i();
        return m || P(!1), hx(t, m, p);
      },
      [t, i]
    ),
    f = $(
      function () {
        return { uniqueId: r, descriptor: t, options: u, getDimension: s };
      },
      [t, s, u, r]
    ),
    d = I.exports.useRef(f),
    c = I.exports.useRef(!0);
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
        if (c.current) {
          c.current = !1;
          return;
        }
        var p = d.current;
        (d.current = f), n.draggable.update(f, p);
      },
      [f, n.draggable]
    );
}
function wx(e) {
  e.preventDefault();
}
function Sx(e) {
  var r = I.exports.useRef(null),
    t = A(function (R) {
      r.current = R;
    }, []),
    n = A(function () {
      return r.current;
    }, []),
    i = Bo(ha),
    o = i.contextId,
    a = i.dragHandleUsageInstructionsId,
    l = i.registry,
    u = Bo(Ts),
    s = u.type,
    f = u.droppableId,
    d = $(
      function () {
        return { id: e.draggableId, index: e.index, type: s, droppableId: f };
      },
      [e.draggableId, e.index, s, f]
    ),
    c = e.children,
    p = e.draggableId,
    m = e.isEnabled,
    y = e.shouldRespectForcePress,
    S = e.canDragInteractiveElements,
    g = e.isClone,
    v = e.mapped,
    h = e.dropAnimationFinished;
  if (!g) {
    var w = $(
      function () {
        return {
          descriptor: d,
          registry: l,
          getDraggableRef: n,
          canDragInteractiveElements: S,
          shouldRespectForcePress: y,
          isEnabled: m,
        };
      },
      [d, l, n, S, y, m]
    );
    yx(w);
  }
  var x = $(
      function () {
        return m
          ? {
              tabIndex: 0,
              role: "button",
              "aria-describedby": a,
              "data-rbd-drag-handle-draggable-id": p,
              "data-rbd-drag-handle-context-id": o,
              draggable: !1,
              onDragStart: wx,
            }
          : null;
      },
      [o, a, p, m]
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
        var R = mx(v),
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
  return c(E, v.snapshot, k);
}
var yg = function (e, r) {
    return e === r;
  },
  wg = function (e) {
    var r = e.combine,
      t = e.destination;
    return t ? t.droppableId : r ? r.droppableId : null;
  },
  xx = function (r) {
    return r.combine ? r.combine.draggableId : null;
  },
  bx = function (r) {
    return r.at && r.at.type === "COMBINE" ? r.at.combine.draggableId : null;
  };
function Cx() {
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
    t = fe(function (i, o, a, l, u, s, f) {
      return {
        mapped: {
          type: "DRAGGING",
          dropping: null,
          draggingOver: u,
          combineWith: s,
          mode: o,
          offset: i,
          dimension: a,
          forceShouldAnimate: f,
          snapshot: r(o, l, u, s, null),
        },
      };
    }),
    n = function (o, a) {
      if (o.isDragging) {
        if (o.critical.draggable.id !== a.draggableId) return null;
        var l = o.current.client.offset,
          u = o.dimensions.draggables[a.draggableId],
          s = Ue(o.impact),
          f = bx(o.impact),
          d = o.forceShouldAnimate;
        return t(e(l.x, l.y), o.movementMode, u, a.isClone, s, f, d);
      }
      if (o.phase === "DROP_ANIMATING") {
        var c = o.completed;
        if (c.result.draggableId !== a.draggableId) return null;
        var p = a.isClone,
          m = o.dimensions.draggables[a.draggableId],
          y = c.result,
          S = y.mode,
          g = wg(y),
          v = xx(y),
          h = o.dropDuration,
          w = {
            duration: h,
            curve: bs.drop,
            moveTo: o.newHomeClientOffset,
            opacity: v ? ei.opacity.drop : null,
            scale: v ? ei.scale.drop : null,
          };
        return {
          mapped: {
            type: "DRAGGING",
            offset: o.newHomeClientOffset,
            dimension: m,
            dropping: w,
            draggingOver: g,
            combineWith: v,
            mode: S,
            forceShouldAnimate: null,
            snapshot: r(S, p, g, v, w),
          },
        };
      }
      return null;
    };
  return n;
}
function Sg(e) {
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
var Dx = {
  mapped: {
    type: "SECONDARY",
    offset: pe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Sg(null),
  },
};
function Ex() {
  var e = fe(function (a, l) {
      return { x: a, y: l };
    }),
    r = fe(Sg),
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
    i = function (l, u, s, f) {
      var d = s.displaced.visible[l],
        c = Boolean(f.inVirtualList && f.effected[l]),
        p = pa(s),
        m = p && p.draggableId === l ? u : null;
      if (!d) {
        if (!c) return n(m);
        if (s.displaced.invisible[l]) return null;
        var y = rn(f.displacedBy.point),
          S = e(y.x, y.y);
        return t(S, m, !0);
      }
      if (c) return n(m);
      var g = s.displacedBy.point,
        v = e(g.x, g.y);
      return t(v, m, d.shouldAnimate);
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
        var s = l.completed;
        return s.result.draggableId === u.draggableId
          ? null
          : i(u.draggableId, s.result.draggableId, s.impact, s.afterCritical);
      }
      return null;
    };
  return o;
}
var Ix = function () {
    var r = Cx(),
      t = Ex(),
      n = function (o, a) {
        return r(o, a) || t(o, a) || Dx;
      };
    return n;
  },
  Px = { dropAnimationFinished: Zv },
  kx = Cv(Ix, Px, null, { context: ks, pure: !0, areStatePropsEqual: yg })(Sx);
function xg(e) {
  var r = Bo(Ts),
    t = r.isUsingCloneFor;
  return t === e.draggableId && !e.isClone ? null : C(kx, oe({}, e));
}
function Nx(e) {
  var r = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    t = Boolean(e.disableInteractiveElementBlocking),
    n = Boolean(e.shouldRespectForcePress);
  return C(
    xg,
    Ie(oe({}, e), {
      isClone: !1,
      isEnabled: r,
      canDragInteractiveElements: t,
      shouldRespectForcePress: n,
    })
  );
}
function Ox(e) {
  var r = I.exports.useContext(ha);
  r || P(!1);
  var t = r.contextId,
    n = r.isMovementAllowed,
    i = I.exports.useRef(null),
    o = I.exports.useRef(null),
    a = e.children,
    l = e.droppableId,
    u = e.type,
    s = e.mode,
    f = e.direction,
    d = e.ignoreContainerClipping,
    c = e.isDropDisabled,
    p = e.isCombineEnabled,
    m = e.snapshot,
    y = e.useClone,
    S = e.updateViewportMaxScroll,
    g = e.getContainerForClone,
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
        n() && S({ maxScroll: ig() });
      },
      [n, S]
    );
  ox({
    droppableId: l,
    type: u,
    mode: s,
    direction: f,
    isDropDisabled: c,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: v,
  });
  var b = C(cx, {
      on: e.placeholder,
      shouldAnimate: e.shouldAnimatePlaceholder,
      children: function (F) {
        var se = F.onClose,
          ce = F.data,
          X = F.animate;
        return C(sx, {
          placeholder: ce,
          onClose: se,
          innerRef: w,
          animate: X,
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
      se = y.render,
      ce = C(xg, {
        draggableId: F.draggableId,
        index: F.source.index,
        isClone: !0,
        isEnabled: !0,
        shouldRespectForcePress: !1,
        canDragInteractiveElements: !0,
        children: function (X, Re) {
          return se(X, Re, F);
        },
      });
    return qh.createPortal(ce, g());
  }
  return V(Ts.Provider, { value: R, children: [a(E, m), T()] });
}
var ul = function (r, t) {
    return r === t.droppable.type;
  },
  Gd = function (r, t) {
    return t.draggables[r.draggable.id];
  },
  Tx = function () {
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
      i = fe(function (a, l, u, s, f, d) {
        var c = f.descriptor.id,
          p = f.descriptor.droppableId === a;
        if (p) {
          var m = d ? { render: d, dragging: n(f.descriptor) } : null,
            y = {
              isDraggingOver: u,
              draggingOverWith: u ? c : null,
              draggingFromThisWith: c,
              isUsingPlaceholder: !0,
            };
          return {
            placeholder: f.placeholder,
            shouldAnimatePlaceholder: !1,
            snapshot: y,
            useClone: m,
          };
        }
        if (!l) return t;
        if (!s) return r;
        var S = {
          isDraggingOver: u,
          draggingOverWith: c,
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
        var s = u.droppableId,
          f = u.type,
          d = !u.isDropDisabled,
          c = u.renderClone;
        if (l.isDragging) {
          var p = l.critical;
          if (!ul(f, p)) return t;
          var m = Gd(p, l.dimensions),
            y = Ue(l.impact) === s;
          return i(s, d, y, y, m, c);
        }
        if (l.phase === "DROP_ANIMATING") {
          var S = l.completed;
          if (!ul(f, S.critical)) return t;
          var g = Gd(S.critical, l.dimensions);
          return i(s, d, wg(S.result) === s, Ue(S.impact) === s, g, c);
        }
        if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
          var v = l.completed;
          if (!ul(f, v.critical)) return t;
          var h = Ue(v.impact) === s,
            w = Boolean(v.impact.at && v.impact.at.type === "COMBINE"),
            x = v.critical.droppable.id === s;
          return h ? (w ? r : t) : x ? r : t;
        }
        return t;
      };
    return o;
  },
  Rx = { updateViewportMaxScroll: _1 };
function Ax() {
  return document.body || P(!1), document.body;
}
var Lx = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: Ax,
  },
  bg = Cv(Tx, Rx, null, { context: ks, pure: !0, areStatePropsEqual: yg })(Ox);
bg.defaultProps = Lx;
function Bx(e, r) {
  if (e == null) return {};
  var t = Mx(e, r),
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
function Mx(e, r) {
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
  return C(
    "svg",
    Ie(
      oe(
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
Rs.propTypes = { color: H.string, size: H.oneOfType([H.string, H.number]) };
Rs.displayName = "Check";
var Fx = Rs;
function zx(e, r) {
  if (e == null) return {};
  var t = $x(e, r),
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
function $x(e, r) {
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
    a = zx(e, ["color", "size"]);
  return V(
    "svg",
    Ie(
      oe(
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
As.propTypes = { color: H.string, size: H.oneOfType([H.string, H.number]) };
As.displayName = "CreditCard";
var _x = As;
function jx(e, r) {
  if (e == null) return {};
  var t = Wx(e, r),
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
function Wx(e, r) {
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
    a = jx(e, ["color", "size"]);
  return V(
    "svg",
    Ie(
      oe(
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
          C("circle", { cx: "12", cy: "12", r: "1" }),
          C("circle", { cx: "19", cy: "12", r: "1" }),
          C("circle", { cx: "5", cy: "12", r: "1" }),
        ],
      }
    )
  );
});
Ls.propTypes = { color: H.string, size: H.oneOfType([H.string, H.number]) };
Ls.displayName = "MoreHorizontal";
var Ux = Ls;
function Gx(e, r) {
  if (e == null) return {};
  var t = Vx(e, r),
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
function Vx(e, r) {
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
    a = Gx(e, ["color", "size"]);
  return V(
    "svg",
    Ie(
      oe(
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
Bs.propTypes = { color: H.string, size: H.oneOfType([H.string, H.number]) };
Bs.displayName = "Plus";
var Hx = Bs;
function Qx(e, r) {
  if (e == null) return {};
  var t = qx(e, r),
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
function qx(e, r) {
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
    a = Qx(e, ["color", "size"]);
  return V(
    "svg",
    Ie(
      oe(
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
Ms.propTypes = { color: H.string, size: H.oneOfType([H.string, H.number]) };
Ms.displayName = "Tag";
var Kx = Ms;
function Yx(e, r) {
  if (e == null) return {};
  var t = Xx(e, r),
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
function Xx(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
var Fs = I.exports.forwardRef(function (e, r) {
  var t = e.color,
    n = t === void 0 ? "currentColor" : t,
    i = e.size,
    o = i === void 0 ? 24 : i,
    a = Yx(e, ["color", "size"]);
  return V(
    "svg",
    Ie(
      oe(
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
Fs.propTypes = { color: H.string, size: H.oneOfType([H.string, H.number]) };
Fs.displayName = "Trash";
var Jx = Fs;
function Zx(e, r) {
  if (e == null) return {};
  var t = eb(e, r),
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
function eb(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
var zs = I.exports.forwardRef(function (e, r) {
  var t = e.color,
    n = t === void 0 ? "currentColor" : t,
    i = e.size,
    o = i === void 0 ? 24 : i,
    a = Zx(e, ["color", "size"]);
  return V(
    "svg",
    Ie(
      oe(
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
zs.propTypes = { color: H.string, size: H.oneOfType([H.string, H.number]) };
zs.displayName = "X";
var $s = zs;
const rb = (e) =>
  C("div", {
    className: "custom__modal",
    onClick: () => e.onClose(!1),
    children: C("div", {
      className: "modal__content",
      onClick: (r) => r.stopPropagation(),
      children: e.children,
    }),
  });
const tb = (e) =>
  C("sapn", {
    className: "tag",
    style: { backgroundColor: `${e == null ? void 0 : e.color}` },
    children: e == null ? void 0 : e.tagName,
  });
const nb = (e) => {
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
          children: V("div", {
            className: `editable__input ${e.class}`,
            children: [
              C("textarea", {
                placeholder: e.placeholder,
                autoFocus: !0,
                id: "edit-input",
                type: "text",
                onChange: (a) => i(a.target.value),
              }),
              V("div", {
                className: "btn__control",
                children: [
                  C("button", {
                    className: "add__btn",
                    type: "submit",
                    children: `${e.btnName}` || "Add",
                  }),
                  C($s, {
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
      : V("p", {
          onClick: () => {
            t(!0);
          },
          children: [
            e.defaultValue === void 0 ? C(Hx, {}) : C(rv, {}),
            (e == null ? void 0 : e.name) || "Add",
          ],
        }),
  });
};
var ji,
  ib = new Uint8Array(16);
function ob() {
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
  return ji(ib);
}
var ab =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function lb(e) {
  return typeof e == "string" && ab.test(e);
}
var me = [];
for (var sl = 0; sl < 256; ++sl) me.push((sl + 256).toString(16).substr(1));
function ub(e) {
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
  if (!lb(t)) throw TypeError("Stringified UUID is invalid");
  return t;
}
function Cg(e, r, t) {
  e = e || {};
  var n = e.random || (e.rng || ob)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), r)) {
    t = t || 0;
    for (var i = 0; i < 16; ++i) r[t + i] = n[i];
    return r;
  }
  return ub(n);
}
function sb(e) {
  const r = I.exports.useRef(),
    [t, n] = I.exports.useState(""),
    [i, o] = I.exports.useState(""),
    a = (l) => !!e.tags.find((s) => s.color === l);
  return C("div", {
    className: "local__bootstrap",
    children: C("div", {
      className: "popover__wrapper",
      children: V("div", {
        className: "popover__content mb-2",
        children: [
          V("div", {
            className: "label__heading d-flex justify-content-between my-2 ",
            children: [
              C("p", {
                style: { fontSize: "15px" },
                className: "text-center",
                children: C("b", { children: "Label" }),
              }),
              C($s, {
                onClick: () => e.onClose(!1),
                style: { cursor: "pointer", width: "15px", height: "15px" },
              }),
            ],
          }),
          V("div", {
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
                      children: t === l ? C(Fx, { className: "icon__sm" }) : "",
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
function cb(e) {
  const r = ["#61bd4f", "#f2d600", "#ff9f1a", "#eb5a46", "#c377e0"],
    [t, n] = I.exports.useState(oe({}, e.card)),
    [i, o] = I.exports.useState(!1),
    [a, l] = I.exports.useState(t.title),
    [u, s] = I.exports.useState(!1),
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
      n(Ie(oe({}, t), { title: y }));
    },
    c = (y) => {
      const S = t.tags.filter((g) => g.id !== y);
      n(Ie(oe({}, t), { tags: S }));
    },
    p = (y, S) => {
      t.tags.push({ id: Cg(), tagName: y, color: S }), n(oe({}, t));
    },
    m = (y) => {
      if (y.code === "Enter") o(!1), d(a === "" ? t.title : a);
      else return;
    };
  return (
    I.exports.useEffect(
      () => (
        document.addEventListener("keypress", m),
        () => {
          document.removeEventListener("keypress", m);
        }
      )
    ),
    I.exports.useEffect(() => {
      e.updateCard && e.updateCard(e.bid, t.id, t);
    }, [t]),
    C(rb, {
      onClose: e.onClose,
      children: C("div", {
        className: "local__bootstrap",
        children: V("div", {
          className: "container",
          style: { minWidth: "650px", position: "relative" },
          children: [
            C("div", {
              className: "row pb-4",
              children: C("div", {
                className: "col-12",
                children: V("div", {
                  className: "d-flex align-items-center pt-3 gap-2",
                  children: [
                    C(_x, { className: "icon__md" }),
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
            V("div", {
              className: "row",
              children: [
                V("div", {
                  className: "col-8",
                  children: [
                    C("h6", { className: "text-justify", children: "Label" }),
                    C("div", {
                      className: "d-flex label__color flex-wrap",
                      style: { width: "500px", paddingRight: "10px" },
                      children:
                        t.tags.length !== 0
                          ? t.tags.map((y) =>
                              V("span", {
                                className:
                                  "d-flex justify-content-between align-items-center gap-2",
                                style: { backgroundColor: y.color },
                                children: [
                                  y.tagName.length > 10
                                    ? y.tagName.slice(0, 6) + "..."
                                    : y.tagName,
                                  C($s, {
                                    onClick: () => c(y.id),
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
                  children: V("div", {
                    className: "d-flex card__action__btn flex-column gap-2",
                    children: [
                      V("button", {
                        onClick: () => s(!0),
                        children: [
                          C("span", {
                            className: "icon__sm",
                            children: C(Kx, {}),
                          }),
                          "Add Label",
                        ],
                      }),
                      u &&
                        C(sb, {
                          color: r,
                          addTag: p,
                          tags: t.tags,
                          onClose: s,
                        }),
                      V("button", {
                        onClick: () => e.removeCard(e.bid, t.id),
                        children: [
                          C("span", {
                            className: "icon__sm",
                            children: C(Jx, {}),
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
const db = (e) => {
  const [r, t] = I.exports.useState(!1),
    [n, i] = I.exports.useState(!1);
  return C(
    Nx,
    {
      draggableId: e.id.toString(),
      index: e.index,
      children: (o) => {
        var a;
        return V(rv, {
          children: [
            n &&
              C(cb, {
                updateCard: e.updateCard,
                onClose: i,
                card: e.card,
                bid: e.bid,
                removeCard: e.removeCard,
              }),
            V(
              "div",
              Ie(
                oe(
                  oe(
                    {
                      className: "custom__card",
                      onClick: () => {
                        i(!0);
                      },
                    },
                    o.draggableProps
                  ),
                  o.dragHandleProps
                ),
                {
                  ref: o.innerRef,
                  children: [
                    V("div", {
                      className: "card__text",
                      children: [
                        C("p", { children: e.title }),
                        C(Ux, {
                          className: "car__more",
                          onClick: () => {
                            t(!0);
                          },
                        }),
                      ],
                    }),
                    C("div", {
                      className: "card__tags",
                      children:
                        (a = e.tags) == null
                          ? void 0
                          : a.map((l, u) =>
                              C(tb, { tagName: l.tagName, color: l.color }, u)
                            ),
                    }),
                    o.placeholder,
                  ],
                }
              )
            ),
          ],
        });
      },
    },
    e.id.toString()
  );
};
function fb(e) {
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
    V("div", {
      className: "board",
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
                children: V("p", {
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
        C(bg, {
          droppableId: e.id.toString(),
          children: (i) => {
            var o;
            return V(
              "div",
              Ie(
                oe(
                  { className: "board__cards", ref: i.innerRef },
                  i.droppableProps
                ),
                {
                  children: [
                    (o = e.card) == null
                      ? void 0
                      : o.map((a, l) =>
                          C(
                            db,
                            {
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
          children: C(nb, {
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
var Dg = {},
  su =
    (Gs && Gs.__assign) ||
    function () {
      return (
        (su =
          Object.assign ||
          function (e) {
            for (var r, t = 1, n = arguments.length; t < n; t++) {
              r = arguments[t];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
          }),
        su.apply(this, arguments)
      );
    };
Object.defineProperty(Dg, "__esModule", { value: !0 });
var Wi = I.exports;
function pb(e, r, t) {
  var n = Wi.useMemo(
      function () {
        return su(
          {
            serializer: JSON.stringify,
            parser: JSON.parse,
            logger: console.log,
            syncData: !0,
          },
          t
        );
      },
      [t]
    ),
    i = n.serializer,
    o = n.parser,
    a = n.logger,
    l = n.syncData,
    u = Wi.useState(function () {
      if (typeof window == "undefined") return r;
      try {
        var d = window.localStorage.getItem(e),
          c = d ? o(d) : r;
        return c;
      } catch (p) {
        return a(p), r;
      }
    }),
    s = u[0],
    f = u[1];
  return (
    Wi.useEffect(
      function () {
        if (typeof window != "undefined") {
          var d = function () {
            s !== void 0
              ? window.localStorage.setItem(e, i(s))
              : window.localStorage.removeItem(e);
          };
          try {
            d();
          } catch (c) {
            a(c);
          }
        }
      },
      [s]
    ),
    Wi.useEffect(
      function () {
        if (!!l) {
          var d = function (c) {
            if (!(c.key !== e || c.storageArea !== window.localStorage))
              try {
                f(c.newValue ? o(c.newValue) : void 0);
              } catch (p) {
                a(p);
              }
          };
          if (typeof window != "undefined")
            return (
              window.addEventListener("storage", d),
              function () {
                return window.removeEventListener("storage", d);
              }
            );
        }
      },
      [e, l]
    ),
    [s, f]
  );
}
var vb = (Dg.default = pb);
function gb() {
  var r = "https://myproject-382821.uc.r.appspot.com/";
  const t = async () => (await (await fetch(r)).json()).result,
    [n, i] = I.exports.useState([]),
    o = window.matchMedia("(prefers-colors-scheme: dark)").matches,
    [a, l] = vb("theme", o ? "dark" : "light"),
    u = () => {
      l(a === "light" ? "dark" : "light");
    },
    s = (S, g) => {
      const v = n.findIndex((w) => w.id === g),
        h = [...n];
      (h[v].boardName = S), i(h);
    },
    f = async (S, g) => {
      let v = [...n];
      console.log(v);
      const h = v.findIndex((x) => x._id.toString() === g.droppableId),
        w = v.findIndex((x) => x._id.toString() === S.droppableId);
      return (
        v[h].card.splice(g.index, 0, v[w].card[S.index]),
        v[w].card.splice(S.index, 1),
        v
      );
    },
    d = async (S, g) => {
      await fetch(`${r}${g}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          card: { id: Cg(), title: S, tags: [], task: [] },
        }),
      });
    },
    c = async (S, g) => {
      await fetch(`${r}${S}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardId: g }),
      });
    },
    p = (S) => {
      const g = [...n],
        v = n.findIndex((h) => h.id === S);
      g.splice(v, 1), i(g);
    },
    m = (S) => {
      const { source: g, destination: v } = S;
      !v ||
        (g.droppableId !== v.droppableId &&
          f(g, v).then((h) => {
            const w = h.findIndex((b) => b._id === g.droppableId);
            fetch(`${r}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: g.droppableId, board: h[w] }),
            });
            const x = h.findIndex((b) => b._id === v.droppableId);
            fetch(`${r}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: v.droppableId, board: h[x] }),
            });
          }));
    },
    y = (S, g, v) => {
      const h = n.findIndex((E) => E.id === S);
      if (h < 0) return;
      const w = [...n],
        b = w[h].card.findIndex((E) => E.id === g);
      b < 0 || ((w[h].card[b] = v), i(w));
    };
  return (
    I.exports.useEffect(() => {
      t().then((S) => {
        i(S);
      });
    }, [n]),
    C(HS, {
      onDragEnd: m,
      children: V("div", {
        className: "App",
        "data-theme": a,
        children: [
          C(ry, { switchTheme: u }),
          C("div", {
            className: "app_outer",
            children: C("div", {
              className: "app_boards",
              children: n.map((S) =>
                C(
                  fb,
                  {
                    id: S._id,
                    name: S.boardName,
                    card: S.card,
                    setName: s,
                    addCard: d,
                    removeCard: c,
                    removeBoard: p,
                    updateCard: y,
                  },
                  S._id
                )
              ),
            }),
          }),
        ],
      }),
    })
  );
}
cl.createRoot(document.getElementById("root")).render(C(gb, {}));
