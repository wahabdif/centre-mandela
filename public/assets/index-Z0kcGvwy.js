function Zp(l, o) {
  for (var i = 0; i < o.length; i++) {
    const u = o[i];
    if (typeof u != 'string' && !Array.isArray(u)) {
      for (const c in u)
        if (c !== 'default' && !(c in l)) {
          const f = Object.getOwnPropertyDescriptor(u, c);
          f && Object.defineProperty(l, c, f.get ? f : { enumerable: !0, get: () => u[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver(c => {
    for (const f of c)
      if (f.type === 'childList')
        for (const p of f.addedNodes) p.tagName === 'LINK' && p.rel === 'modulepreload' && u(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : c.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = i(c);
    fetch(c.href, f);
  }
})();
function uf(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, 'default') ? l.default : l;
}
var ll = { exports: {} },
  jr = {},
  al = { exports: {} },
  pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rc;
function eh() {
  if (Rc) return pe;
  Rc = 1;
  var l = Symbol.for('react.element'),
    o = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    p = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    v = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    S = Symbol.for('react.lazy'),
    E = Symbol.iterator;
  function T(w) {
    return w === null || typeof w != 'object'
      ? null
      : ((w = (E && w[E]) || w['@@iterator']), typeof w == 'function' ? w : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    L = {};
  function N(w, O, ee) {
    (this.props = w), (this.context = O), (this.refs = L), (this.updater = ee || I);
  }
  (N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (w, O) {
      if (typeof w != 'object' && typeof w != 'function' && w != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, w, O, 'setState');
    }),
    (N.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, 'forceUpdate');
    });
  function b() {}
  b.prototype = N.prototype;
  function F(w, O, ee) {
    (this.props = w), (this.context = O), (this.refs = L), (this.updater = ee || I);
  }
  var G = (F.prototype = new b());
  (G.constructor = F), _(G, N.prototype), (G.isPureReactComponent = !0);
  var V = Array.isArray,
    te = Object.prototype.hasOwnProperty,
    ne = { current: null },
    J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ie(w, O, ee) {
    var ue,
      he = {},
      ve = null,
      ke = null;
    if (O != null)
      for (ue in (O.ref !== void 0 && (ke = O.ref), O.key !== void 0 && (ve = '' + O.key), O))
        te.call(O, ue) && !J.hasOwnProperty(ue) && (he[ue] = O[ue]);
    var Se = arguments.length - 2;
    if (Se === 1) he.children = ee;
    else if (1 < Se) {
      for (var Re = Array(Se), nt = 0; nt < Se; nt++) Re[nt] = arguments[nt + 2];
      he.children = Re;
    }
    if (w && w.defaultProps)
      for (ue in ((Se = w.defaultProps), Se)) he[ue] === void 0 && (he[ue] = Se[ue]);
    return { $$typeof: l, type: w, key: ve, ref: ke, props: he, _owner: ne.current };
  }
  function se(w, O) {
    return { $$typeof: l, type: w.type, key: O, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function re(w) {
    return typeof w == 'object' && w !== null && w.$$typeof === l;
  }
  function we(w) {
    var O = { '=': '=0', ':': '=2' };
    return (
      '$' +
      w.replace(/[=:]/g, function (ee) {
        return O[ee];
      })
    );
  }
  var ae = /\/+/g;
  function ge(w, O) {
    return typeof w == 'object' && w !== null && w.key != null ? we('' + w.key) : O.toString(36);
  }
  function H(w, O, ee, ue, he) {
    var ve = typeof w;
    (ve === 'undefined' || ve === 'boolean') && (w = null);
    var ke = !1;
    if (w === null) ke = !0;
    else
      switch (ve) {
        case 'string':
        case 'number':
          ke = !0;
          break;
        case 'object':
          switch (w.$$typeof) {
            case l:
            case o:
              ke = !0;
          }
      }
    if (ke)
      return (
        (ke = w),
        (he = he(ke)),
        (w = ue === '' ? '.' + ge(ke, 0) : ue),
        V(he)
          ? ((ee = ''),
            w != null && (ee = w.replace(ae, '$&/') + '/'),
            H(he, O, ee, '', function (nt) {
              return nt;
            }))
          : he != null &&
            (re(he) &&
              (he = se(
                he,
                ee +
                  (!he.key || (ke && ke.key === he.key)
                    ? ''
                    : ('' + he.key).replace(ae, '$&/') + '/') +
                  w,
              )),
            O.push(he)),
        1
      );
    if (((ke = 0), (ue = ue === '' ? '.' : ue + ':'), V(w)))
      for (var Se = 0; Se < w.length; Se++) {
        ve = w[Se];
        var Re = ue + ge(ve, Se);
        ke += H(ve, O, ee, Re, he);
      }
    else if (((Re = T(w)), typeof Re == 'function'))
      for (w = Re.call(w), Se = 0; !(ve = w.next()).done; )
        (ve = ve.value), (Re = ue + ge(ve, Se++)), (ke += H(ve, O, ee, Re, he));
    else if (ve === 'object')
      throw (
        ((O = String(w)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (O === '[object Object]' ? 'object with keys {' + Object.keys(w).join(', ') + '}' : O) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return ke;
  }
  function xe(w, O, ee) {
    if (w == null) return w;
    var ue = [],
      he = 0;
    return (
      H(w, ue, '', '', function (ve) {
        return O.call(ee, ve, he++);
      }),
      ue
    );
  }
  function de(w) {
    if (w._status === -1) {
      var O = w._result;
      (O = O()),
        O.then(
          function (ee) {
            (w._status === 0 || w._status === -1) && ((w._status = 1), (w._result = ee));
          },
          function (ee) {
            (w._status === 0 || w._status === -1) && ((w._status = 2), (w._result = ee));
          },
        ),
        w._status === -1 && ((w._status = 0), (w._result = O));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ce = { current: null },
    A = { transition: null },
    W = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: A, ReactCurrentOwner: ne };
  function $() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (pe.Children = {
      map: xe,
      forEach: function (w, O, ee) {
        xe(
          w,
          function () {
            O.apply(this, arguments);
          },
          ee,
        );
      },
      count: function (w) {
        var O = 0;
        return (
          xe(w, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (w) {
        return (
          xe(w, function (O) {
            return O;
          }) || []
        );
      },
      only: function (w) {
        if (!re(w))
          throw Error('React.Children.only expected to receive a single React element child.');
        return w;
      },
    }),
    (pe.Component = N),
    (pe.Fragment = i),
    (pe.Profiler = c),
    (pe.PureComponent = F),
    (pe.StrictMode = u),
    (pe.Suspense = v),
    (pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W),
    (pe.act = $),
    (pe.cloneElement = function (w, O, ee) {
      if (w == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            w +
            '.',
        );
      var ue = _({}, w.props),
        he = w.key,
        ve = w.ref,
        ke = w._owner;
      if (O != null) {
        if (
          (O.ref !== void 0 && ((ve = O.ref), (ke = ne.current)),
          O.key !== void 0 && (he = '' + O.key),
          w.type && w.type.defaultProps)
        )
          var Se = w.type.defaultProps;
        for (Re in O)
          te.call(O, Re) &&
            !J.hasOwnProperty(Re) &&
            (ue[Re] = O[Re] === void 0 && Se !== void 0 ? Se[Re] : O[Re]);
      }
      var Re = arguments.length - 2;
      if (Re === 1) ue.children = ee;
      else if (1 < Re) {
        Se = Array(Re);
        for (var nt = 0; nt < Re; nt++) Se[nt] = arguments[nt + 2];
        ue.children = Se;
      }
      return { $$typeof: l, type: w.type, key: he, ref: ve, props: ue, _owner: ke };
    }),
    (pe.createContext = function (w) {
      return (
        (w = {
          $$typeof: p,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (w.Provider = { $$typeof: f, _context: w }),
        (w.Consumer = w)
      );
    }),
    (pe.createElement = ie),
    (pe.createFactory = function (w) {
      var O = ie.bind(null, w);
      return (O.type = w), O;
    }),
    (pe.createRef = function () {
      return { current: null };
    }),
    (pe.forwardRef = function (w) {
      return { $$typeof: h, render: w };
    }),
    (pe.isValidElement = re),
    (pe.lazy = function (w) {
      return { $$typeof: S, _payload: { _status: -1, _result: w }, _init: de };
    }),
    (pe.memo = function (w, O) {
      return { $$typeof: m, type: w, compare: O === void 0 ? null : O };
    }),
    (pe.startTransition = function (w) {
      var O = A.transition;
      A.transition = {};
      try {
        w();
      } finally {
        A.transition = O;
      }
    }),
    (pe.unstable_act = $),
    (pe.useCallback = function (w, O) {
      return ce.current.useCallback(w, O);
    }),
    (pe.useContext = function (w) {
      return ce.current.useContext(w);
    }),
    (pe.useDebugValue = function () {}),
    (pe.useDeferredValue = function (w) {
      return ce.current.useDeferredValue(w);
    }),
    (pe.useEffect = function (w, O) {
      return ce.current.useEffect(w, O);
    }),
    (pe.useId = function () {
      return ce.current.useId();
    }),
    (pe.useImperativeHandle = function (w, O, ee) {
      return ce.current.useImperativeHandle(w, O, ee);
    }),
    (pe.useInsertionEffect = function (w, O) {
      return ce.current.useInsertionEffect(w, O);
    }),
    (pe.useLayoutEffect = function (w, O) {
      return ce.current.useLayoutEffect(w, O);
    }),
    (pe.useMemo = function (w, O) {
      return ce.current.useMemo(w, O);
    }),
    (pe.useReducer = function (w, O, ee) {
      return ce.current.useReducer(w, O, ee);
    }),
    (pe.useRef = function (w) {
      return ce.current.useRef(w);
    }),
    (pe.useState = function (w) {
      return ce.current.useState(w);
    }),
    (pe.useSyncExternalStore = function (w, O, ee) {
      return ce.current.useSyncExternalStore(w, O, ee);
    }),
    (pe.useTransition = function () {
      return ce.current.useTransition();
    }),
    (pe.version = '18.3.1'),
    pe
  );
}
var Lc;
function Nl() {
  return Lc || ((Lc = 1), (al.exports = eh())), al.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oc;
function th() {
  if (Oc) return jr;
  Oc = 1;
  var l = Nl(),
    o = Symbol.for('react.element'),
    i = Symbol.for('react.fragment'),
    u = Object.prototype.hasOwnProperty,
    c = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, v, m) {
    var S,
      E = {},
      T = null,
      I = null;
    m !== void 0 && (T = '' + m),
      v.key !== void 0 && (T = '' + v.key),
      v.ref !== void 0 && (I = v.ref);
    for (S in v) u.call(v, S) && !f.hasOwnProperty(S) && (E[S] = v[S]);
    if (h && h.defaultProps) for (S in ((v = h.defaultProps), v)) E[S] === void 0 && (E[S] = v[S]);
    return { $$typeof: o, type: h, key: T, ref: I, props: E, _owner: c.current };
  }
  return (jr.Fragment = i), (jr.jsx = p), (jr.jsxs = p), jr;
}
var _c;
function nh() {
  return _c || ((_c = 1), (ll.exports = th())), ll.exports;
}
var Q = nh(),
  R = Nl();
const At = uf(R),
  rh = Zp({ __proto__: null, default: At }, [R]);
var ri = {},
  ul = { exports: {} },
  tt = {},
  cl = { exports: {} },
  fl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic;
function oh() {
  return (
    Ic ||
      ((Ic = 1),
      (function (l) {
        function o(A, W) {
          var $ = A.length;
          A.push(W);
          e: for (; 0 < $; ) {
            var w = ($ - 1) >>> 1,
              O = A[w];
            if (0 < c(O, W)) (A[w] = W), (A[$] = O), ($ = w);
            else break e;
          }
        }
        function i(A) {
          return A.length === 0 ? null : A[0];
        }
        function u(A) {
          if (A.length === 0) return null;
          var W = A[0],
            $ = A.pop();
          if ($ !== W) {
            A[0] = $;
            e: for (var w = 0, O = A.length, ee = O >>> 1; w < ee; ) {
              var ue = 2 * (w + 1) - 1,
                he = A[ue],
                ve = ue + 1,
                ke = A[ve];
              if (0 > c(he, $))
                ve < O && 0 > c(ke, he)
                  ? ((A[w] = ke), (A[ve] = $), (w = ve))
                  : ((A[w] = he), (A[ue] = $), (w = ue));
              else if (ve < O && 0 > c(ke, $)) (A[w] = ke), (A[ve] = $), (w = ve);
              else break e;
            }
          }
          return W;
        }
        function c(A, W) {
          var $ = A.sortIndex - W.sortIndex;
          return $ !== 0 ? $ : A.id - W.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var f = performance;
          l.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            h = p.now();
          l.unstable_now = function () {
            return p.now() - h;
          };
        }
        var v = [],
          m = [],
          S = 1,
          E = null,
          T = 3,
          I = !1,
          _ = !1,
          L = !1,
          N = typeof setTimeout == 'function' ? setTimeout : null,
          b = typeof clearTimeout == 'function' ? clearTimeout : null,
          F = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function G(A) {
          for (var W = i(m); W !== null; ) {
            if (W.callback === null) u(m);
            else if (W.startTime <= A) u(m), (W.sortIndex = W.expirationTime), o(v, W);
            else break;
            W = i(m);
          }
        }
        function V(A) {
          if (((L = !1), G(A), !_))
            if (i(v) !== null) (_ = !0), de(te);
            else {
              var W = i(m);
              W !== null && ce(V, W.startTime - A);
            }
        }
        function te(A, W) {
          (_ = !1), L && ((L = !1), b(ie), (ie = -1)), (I = !0);
          var $ = T;
          try {
            for (G(W), E = i(v); E !== null && (!(E.expirationTime > W) || (A && !we())); ) {
              var w = E.callback;
              if (typeof w == 'function') {
                (E.callback = null), (T = E.priorityLevel);
                var O = w(E.expirationTime <= W);
                (W = l.unstable_now()),
                  typeof O == 'function' ? (E.callback = O) : E === i(v) && u(v),
                  G(W);
              } else u(v);
              E = i(v);
            }
            if (E !== null) var ee = !0;
            else {
              var ue = i(m);
              ue !== null && ce(V, ue.startTime - W), (ee = !1);
            }
            return ee;
          } finally {
            (E = null), (T = $), (I = !1);
          }
        }
        var ne = !1,
          J = null,
          ie = -1,
          se = 5,
          re = -1;
        function we() {
          return !(l.unstable_now() - re < se);
        }
        function ae() {
          if (J !== null) {
            var A = l.unstable_now();
            re = A;
            var W = !0;
            try {
              W = J(!0, A);
            } finally {
              W ? ge() : ((ne = !1), (J = null));
            }
          } else ne = !1;
        }
        var ge;
        if (typeof F == 'function')
          ge = function () {
            F(ae);
          };
        else if (typeof MessageChannel < 'u') {
          var H = new MessageChannel(),
            xe = H.port2;
          (H.port1.onmessage = ae),
            (ge = function () {
              xe.postMessage(null);
            });
        } else
          ge = function () {
            N(ae, 0);
          };
        function de(A) {
          (J = A), ne || ((ne = !0), ge());
        }
        function ce(A, W) {
          ie = N(function () {
            A(l.unstable_now());
          }, W);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (l.unstable_continueExecution = function () {
            _ || I || ((_ = !0), de(te));
          }),
          (l.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (se = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return i(v);
          }),
          (l.unstable_next = function (A) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var W = 3;
                break;
              default:
                W = T;
            }
            var $ = T;
            T = W;
            try {
              return A();
            } finally {
              T = $;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (A, W) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var $ = T;
            T = A;
            try {
              return W();
            } finally {
              T = $;
            }
          }),
          (l.unstable_scheduleCallback = function (A, W, $) {
            var w = l.unstable_now();
            switch (
              (typeof $ == 'object' && $ !== null
                ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? w + $ : w))
                : ($ = w),
              A)
            ) {
              case 1:
                var O = -1;
                break;
              case 2:
                O = 250;
                break;
              case 5:
                O = 1073741823;
                break;
              case 4:
                O = 1e4;
                break;
              default:
                O = 5e3;
            }
            return (
              (O = $ + O),
              (A = {
                id: S++,
                callback: W,
                priorityLevel: A,
                startTime: $,
                expirationTime: O,
                sortIndex: -1,
              }),
              $ > w
                ? ((A.sortIndex = $),
                  o(m, A),
                  i(v) === null && A === i(m) && (L ? (b(ie), (ie = -1)) : (L = !0), ce(V, $ - w)))
                : ((A.sortIndex = O), o(v, A), _ || I || ((_ = !0), de(te))),
              A
            );
          }),
          (l.unstable_shouldYield = we),
          (l.unstable_wrapCallback = function (A) {
            var W = T;
            return function () {
              var $ = T;
              T = W;
              try {
                return A.apply(this, arguments);
              } finally {
                T = $;
              }
            };
          });
      })(fl)),
    fl
  );
}
var zc;
function ih() {
  return zc || ((zc = 1), (cl.exports = oh())), cl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mc;
function sh() {
  if (Mc) return tt;
  Mc = 1;
  var l = Nl(),
    o = ih();
  function i(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var u = new Set(),
    c = {};
  function f(e, t) {
    p(e, t), p(e + 'Capture', t);
  }
  function p(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var h = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    v = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    S = {},
    E = {};
  function T(e) {
    return v.call(E, e) ? !0 : v.call(S, e) ? !1 : m.test(e) ? (E[e] = !0) : ((S[e] = !0), !1);
  }
  function I(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function _(e, t, n, r) {
    if (t === null || typeof t > 'u' || I(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function L(e, t, n, r, s, a, d) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = s),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = d);
  }
  var N = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      N[e] = new L(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      N[t] = new L(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      N[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        N[e] = new L(e, 2, !1, e, null, !1, !1);
      },
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        N[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      N[e] = new L(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      N[e] = new L(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      N[e] = new L(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      N[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var b = /[\-:]([a-z])/g;
  function F(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(b, F);
      N[t] = new L(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(b, F);
        N[t] = new L(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(b, F);
      N[t] = new L(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      N[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (N.xlinkHref = new L('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      N[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function G(e, t, n, r) {
    var s = N.hasOwnProperty(t) ? N[t] : null;
    (s !== null
      ? s.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (_(t, n, s, r) && (n = null),
      r || s === null
        ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : s.mustUseProperty
          ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : '') : n)
          : ((t = s.attributeName),
            (r = s.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((s = s.type),
                (n = s === 3 || (s === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var V = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    te = Symbol.for('react.element'),
    ne = Symbol.for('react.portal'),
    J = Symbol.for('react.fragment'),
    ie = Symbol.for('react.strict_mode'),
    se = Symbol.for('react.profiler'),
    re = Symbol.for('react.provider'),
    we = Symbol.for('react.context'),
    ae = Symbol.for('react.forward_ref'),
    ge = Symbol.for('react.suspense'),
    H = Symbol.for('react.suspense_list'),
    xe = Symbol.for('react.memo'),
    de = Symbol.for('react.lazy'),
    ce = Symbol.for('react.offscreen'),
    A = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (A && e[A]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var $ = Object.assign,
    w;
  function O(e) {
    if (w === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        w = (t && t[1]) || '';
      }
    return (
      `
` +
      w +
      e
    );
  }
  var ee = !1;
  function ue(e, t) {
    if (!e || ee) return '';
    ee = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (P) {
            var r = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            r = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          r = P;
        }
        e();
      }
    } catch (P) {
      if (P && r && typeof P.stack == 'string') {
        for (
          var s = P.stack.split(`
`),
            a = r.stack.split(`
`),
            d = s.length - 1,
            g = a.length - 1;
          1 <= d && 0 <= g && s[d] !== a[g];

        )
          g--;
        for (; 1 <= d && 0 <= g; d--, g--)
          if (s[d] !== a[g]) {
            if (d !== 1 || g !== 1)
              do
                if ((d--, g--, 0 > g || s[d] !== a[g])) {
                  var y =
                    `
` + s[d].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      y.includes('<anonymous>') &&
                      (y = y.replace('<anonymous>', e.displayName)),
                    y
                  );
                }
              while (1 <= d && 0 <= g);
            break;
          }
      }
    } finally {
      (ee = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? O(e) : '';
  }
  function he(e) {
    switch (e.tag) {
      case 5:
        return O(e.type);
      case 16:
        return O('Lazy');
      case 13:
        return O('Suspense');
      case 19:
        return O('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = ue(e.type, !1)), e;
      case 11:
        return (e = ue(e.type.render, !1)), e;
      case 1:
        return (e = ue(e.type, !0)), e;
      default:
        return '';
    }
  }
  function ve(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case J:
        return 'Fragment';
      case ne:
        return 'Portal';
      case se:
        return 'Profiler';
      case ie:
        return 'StrictMode';
      case ge:
        return 'Suspense';
      case H:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case we:
          return (e.displayName || 'Context') + '.Consumer';
        case re:
          return (e._context.displayName || 'Context') + '.Provider';
        case ae:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case xe:
          return (t = e.displayName || null), t !== null ? t : ve(e.type) || 'Memo';
        case de:
          (t = e._payload), (e = e._init);
          try {
            return ve(e(t));
          } catch {}
      }
    return null;
  }
  function ke(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return ve(t);
      case 8:
        return t === ie ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function Se(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Re(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function nt(e) {
    var t = Re(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var s = n.get,
        a = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (d) {
            (r = '' + d), a.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (d) {
            r = '' + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Kr(e) {
    e._valueTracker || (e._valueTracker = nt(e));
  }
  function Ml(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = Re(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Qr(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function hi(e, t) {
    var n = t.checked;
    return $({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Dl(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Se(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function jl(e, t) {
    (t = t.checked), t != null && G(e, 'checked', t, !1);
  }
  function mi(e, t) {
    jl(e, t);
    var n = Se(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? gi(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && gi(e, t.type, Se(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Al(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      (t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n);
  }
  function gi(e, t, n) {
    (t !== 'number' || Qr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Jn = Array.isArray;
  function En(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t['$' + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        (s = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + Se(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          (e[s].selected = !0), r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function vi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return $({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Fl(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(i(92));
        if (Jn(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: Se(n) };
  }
  function $l(e, t) {
    var n = Se(t.value),
      r = Se(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function Ul(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function Vl(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function yi(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Vl(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Gr,
    bl = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, s);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          Gr = Gr || document.createElement('div'),
            Gr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Gr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function qn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zn = {
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
    rd = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Zn).forEach(function (e) {
    rd.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e]);
    });
  });
  function Bl(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Zn.hasOwnProperty(e) && Zn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Wl(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          s = Bl(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, s) : (e[n] = s);
      }
  }
  var od = $(
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
    },
  );
  function wi(e, t) {
    if (t) {
      if (od[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(i(62));
    }
  }
  function xi(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Si = null;
  function Ei(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ki = null,
    kn = null,
    Cn = null;
  function Hl(e) {
    if ((e = Sr(e))) {
      if (typeof ki != 'function') throw Error(i(280));
      var t = e.stateNode;
      t && ((t = yo(t)), ki(e.stateNode, e.type, t));
    }
  }
  function Kl(e) {
    kn ? (Cn ? Cn.push(e) : (Cn = [e])) : (kn = e);
  }
  function Ql() {
    if (kn) {
      var e = kn,
        t = Cn;
      if (((Cn = kn = null), Hl(e), t)) for (e = 0; e < t.length; e++) Hl(t[e]);
    }
  }
  function Gl(e, t) {
    return e(t);
  }
  function Yl() {}
  var Ci = !1;
  function Xl(e, t, n) {
    if (Ci) return e(t, n);
    Ci = !0;
    try {
      return Gl(e, t, n);
    } finally {
      (Ci = !1), (kn !== null || Cn !== null) && (Yl(), Ql());
    }
  }
  function er(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = yo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(i(231, t, typeof n));
    return n;
  }
  var Pi = !1;
  if (h)
    try {
      var tr = {};
      Object.defineProperty(tr, 'passive', {
        get: function () {
          Pi = !0;
        },
      }),
        window.addEventListener('test', tr, tr),
        window.removeEventListener('test', tr, tr);
    } catch {
      Pi = !1;
    }
  function id(e, t, n, r, s, a, d, g, y) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (M) {
      this.onError(M);
    }
  }
  var nr = !1,
    Yr = null,
    Xr = !1,
    Ti = null,
    sd = {
      onError: function (e) {
        (nr = !0), (Yr = e);
      },
    };
  function ld(e, t, n, r, s, a, d, g, y) {
    (nr = !1), (Yr = null), id.apply(sd, arguments);
  }
  function ad(e, t, n, r, s, a, d, g, y) {
    if ((ld.apply(this, arguments), nr)) {
      if (nr) {
        var P = Yr;
        (nr = !1), (Yr = null);
      } else throw Error(i(198));
      Xr || ((Xr = !0), (Ti = P));
    }
  }
  function sn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Jl(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function ql(e) {
    if (sn(e) !== e) throw Error(i(188));
  }
  function ud(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = sn(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var a = s.alternate;
      if (a === null) {
        if (((r = s.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === a.child) {
        for (a = s.child; a; ) {
          if (a === n) return ql(s), e;
          if (a === r) return ql(s), t;
          a = a.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) (n = s), (r = a);
      else {
        for (var d = !1, g = s.child; g; ) {
          if (g === n) {
            (d = !0), (n = s), (r = a);
            break;
          }
          if (g === r) {
            (d = !0), (r = s), (n = a);
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = a.child; g; ) {
            if (g === n) {
              (d = !0), (n = a), (r = s);
              break;
            }
            if (g === r) {
              (d = !0), (r = a), (n = s);
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function Zl(e) {
    return (e = ud(e)), e !== null ? ea(e) : null;
  }
  function ea(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ea(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ta = o.unstable_scheduleCallback,
    na = o.unstable_cancelCallback,
    cd = o.unstable_shouldYield,
    fd = o.unstable_requestPaint,
    ze = o.unstable_now,
    dd = o.unstable_getCurrentPriorityLevel,
    Ni = o.unstable_ImmediatePriority,
    ra = o.unstable_UserBlockingPriority,
    Jr = o.unstable_NormalPriority,
    pd = o.unstable_LowPriority,
    oa = o.unstable_IdlePriority,
    qr = null,
    St = null;
  function hd(e) {
    if (St && typeof St.onCommitFiberRoot == 'function')
      try {
        St.onCommitFiberRoot(qr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : vd,
    md = Math.log,
    gd = Math.LN2;
  function vd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((md(e) / gd) | 0)) | 0;
  }
  var Zr = 64,
    eo = 4194304;
  function rr(e) {
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
  function to(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      s = e.suspendedLanes,
      a = e.pingedLanes,
      d = n & 268435455;
    if (d !== 0) {
      var g = d & ~s;
      g !== 0 ? (r = rr(g)) : ((a &= d), a !== 0 && (r = rr(a)));
    } else (d = n & ~s), d !== 0 ? (r = rr(d)) : a !== 0 && (r = rr(a));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & s) === 0 &&
      ((s = r & -r), (a = t & -t), s >= a || (s === 16 && (a & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ht(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
    return r;
  }
  function yd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function wd(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes;
      0 < a;

    ) {
      var d = 31 - ht(a),
        g = 1 << d,
        y = s[d];
      y === -1
        ? ((g & n) === 0 || (g & r) !== 0) && (s[d] = yd(g, t))
        : y <= t && (e.expiredLanes |= g),
        (a &= ~g);
    }
  }
  function Ri(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ia() {
    var e = Zr;
    return (Zr <<= 1), (Zr & 4194240) === 0 && (Zr = 64), e;
  }
  function Li(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function or(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ht(t)),
      (e[t] = n);
  }
  function xd(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - ht(n),
        a = 1 << s;
      (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~a);
    }
  }
  function Oi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ht(n),
        s = 1 << r;
      (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
    }
  }
  var Ee = 0;
  function sa(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var la,
    _i,
    aa,
    ua,
    ca,
    Ii = !1,
    no = [],
    Ft = null,
    $t = null,
    Ut = null,
    ir = new Map(),
    sr = new Map(),
    Vt = [],
    Sd =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function fa(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Ft = null;
        break;
      case 'dragenter':
      case 'dragleave':
        $t = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ut = null;
        break;
      case 'pointerover':
      case 'pointerout':
        ir.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        sr.delete(t.pointerId);
    }
  }
  function lr(e, t, n, r, s, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [s],
        }),
        t !== null && ((t = Sr(t)), t !== null && _i(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function Ed(e, t, n, r, s) {
    switch (t) {
      case 'focusin':
        return (Ft = lr(Ft, e, t, n, r, s)), !0;
      case 'dragenter':
        return ($t = lr($t, e, t, n, r, s)), !0;
      case 'mouseover':
        return (Ut = lr(Ut, e, t, n, r, s)), !0;
      case 'pointerover':
        var a = s.pointerId;
        return ir.set(a, lr(ir.get(a) || null, e, t, n, r, s)), !0;
      case 'gotpointercapture':
        return (a = s.pointerId), sr.set(a, lr(sr.get(a) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function da(e) {
    var t = ln(e.target);
    if (t !== null) {
      var n = sn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Jl(n)), t !== null)) {
            (e.blockedOn = t),
              ca(e.priority, function () {
                aa(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ro(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Si = r), n.target.dispatchEvent(r), (Si = null);
      } else return (t = Sr(n)), t !== null && _i(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function pa(e, t, n) {
    ro(e) && n.delete(t);
  }
  function kd() {
    (Ii = !1),
      Ft !== null && ro(Ft) && (Ft = null),
      $t !== null && ro($t) && ($t = null),
      Ut !== null && ro(Ut) && (Ut = null),
      ir.forEach(pa),
      sr.forEach(pa);
  }
  function ar(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ii || ((Ii = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, kd)));
  }
  function ur(e) {
    function t(s) {
      return ar(s, e);
    }
    if (0 < no.length) {
      ar(no[0], e);
      for (var n = 1; n < no.length; n++) {
        var r = no[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ft !== null && ar(Ft, e),
        $t !== null && ar($t, e),
        Ut !== null && ar(Ut, e),
        ir.forEach(t),
        sr.forEach(t),
        n = 0;
      n < Vt.length;
      n++
    )
      (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
      da(n), n.blockedOn === null && Vt.shift();
  }
  var Pn = V.ReactCurrentBatchConfig,
    oo = !0;
  function Cd(e, t, n, r) {
    var s = Ee,
      a = Pn.transition;
    Pn.transition = null;
    try {
      (Ee = 1), zi(e, t, n, r);
    } finally {
      (Ee = s), (Pn.transition = a);
    }
  }
  function Pd(e, t, n, r) {
    var s = Ee,
      a = Pn.transition;
    Pn.transition = null;
    try {
      (Ee = 4), zi(e, t, n, r);
    } finally {
      (Ee = s), (Pn.transition = a);
    }
  }
  function zi(e, t, n, r) {
    if (oo) {
      var s = Mi(e, t, n, r);
      if (s === null) Ji(e, t, r, io, n), fa(e, r);
      else if (Ed(s, e, t, n, r)) r.stopPropagation();
      else if ((fa(e, r), t & 4 && -1 < Sd.indexOf(e))) {
        for (; s !== null; ) {
          var a = Sr(s);
          if (
            (a !== null && la(a), (a = Mi(e, t, n, r)), a === null && Ji(e, t, r, io, n), a === s)
          )
            break;
          s = a;
        }
        s !== null && r.stopPropagation();
      } else Ji(e, t, r, null, n);
    }
  }
  var io = null;
  function Mi(e, t, n, r) {
    if (((io = null), (e = Ei(r)), (e = ln(e)), e !== null))
      if (((t = sn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Jl(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (io = e), null;
  }
  function ha(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (dd()) {
          case Ni:
            return 1;
          case ra:
            return 4;
          case Jr:
          case pd:
            return 16;
          case oa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var bt = null,
    Di = null,
    so = null;
  function ma() {
    if (so) return so;
    var e,
      t = Di,
      n = t.length,
      r,
      s = 'value' in bt ? bt.value : bt.textContent,
      a = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === s[a - r]; r++);
    return (so = s.slice(e, 1 < r ? 1 - r : void 0));
  }
  function lo(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ao() {
    return !0;
  }
  function ga() {
    return !1;
  }
  function rt(e) {
    function t(n, r, s, a, d) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = r),
        (this.nativeEvent = a),
        (this.target = d),
        (this.currentTarget = null);
      for (var g in e) e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(a) : a[g]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? ao
          : ga),
        (this.isPropagationStopped = ga),
        this
      );
    }
    return (
      $(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = ao));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = ao));
        },
        persist: function () {},
        isPersistent: ao,
      }),
      t
    );
  }
  var Tn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ji = rt(Tn),
    cr = $({}, Tn, { view: 0, detail: 0 }),
    Td = rt(cr),
    Ai,
    Fi,
    fr,
    uo = $({}, cr, {
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
      getModifierState: Ui,
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
        return 'movementX' in e
          ? e.movementX
          : (e !== fr &&
              (fr && e.type === 'mousemove'
                ? ((Ai = e.screenX - fr.screenX), (Fi = e.screenY - fr.screenY))
                : (Fi = Ai = 0),
              (fr = e)),
            Ai);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Fi;
      },
    }),
    va = rt(uo),
    Nd = $({}, uo, { dataTransfer: 0 }),
    Rd = rt(Nd),
    Ld = $({}, cr, { relatedTarget: 0 }),
    $i = rt(Ld),
    Od = $({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _d = rt(Od),
    Id = $({}, Tn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    zd = rt(Id),
    Md = $({}, Tn, { data: 0 }),
    ya = rt(Md),
    Dd = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    jd = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Ad = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Fd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ad[e]) ? !!t[e] : !1;
  }
  function Ui() {
    return Fd;
  }
  var $d = $({}, cr, {
      key: function (e) {
        if (e.key) {
          var t = Dd[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = lo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? jd[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ui,
      charCode: function (e) {
        return e.type === 'keypress' ? lo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? lo(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Ud = rt($d),
    Vd = $({}, uo, {
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
    wa = rt(Vd),
    bd = $({}, cr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ui,
    }),
    Bd = rt(bd),
    Wd = $({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hd = rt(Wd),
    Kd = $({}, uo, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Qd = rt(Kd),
    Gd = [9, 13, 27, 32],
    Vi = h && 'CompositionEvent' in window,
    dr = null;
  h && 'documentMode' in document && (dr = document.documentMode);
  var Yd = h && 'TextEvent' in window && !dr,
    xa = h && (!Vi || (dr && 8 < dr && 11 >= dr)),
    Sa = ' ',
    Ea = !1;
  function ka(e, t) {
    switch (e) {
      case 'keyup':
        return Gd.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ca(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Nn = !1;
  function Xd(e, t) {
    switch (e) {
      case 'compositionend':
        return Ca(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Ea = !0), Sa);
      case 'textInput':
        return (e = t.data), e === Sa && Ea ? null : e;
      default:
        return null;
    }
  }
  function Jd(e, t) {
    if (Nn)
      return e === 'compositionend' || (!Vi && ka(e, t))
        ? ((e = ma()), (so = Di = bt = null), (Nn = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return xa && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var qd = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  function Pa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!qd[e.type] : t === 'textarea';
  }
  function Ta(e, t, n, r) {
    Kl(r),
      (t = mo(t, 'onChange')),
      0 < t.length &&
        ((n = new ji('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
  }
  var pr = null,
    hr = null;
  function Zd(e) {
    Wa(e, 0);
  }
  function co(e) {
    var t = In(e);
    if (Ml(t)) return e;
  }
  function ep(e, t) {
    if (e === 'change') return t;
  }
  var Na = !1;
  if (h) {
    var bi;
    if (h) {
      var Bi = 'oninput' in document;
      if (!Bi) {
        var Ra = document.createElement('div');
        Ra.setAttribute('oninput', 'return;'), (Bi = typeof Ra.oninput == 'function');
      }
      bi = Bi;
    } else bi = !1;
    Na = bi && (!document.documentMode || 9 < document.documentMode);
  }
  function La() {
    pr && (pr.detachEvent('onpropertychange', Oa), (hr = pr = null));
  }
  function Oa(e) {
    if (e.propertyName === 'value' && co(hr)) {
      var t = [];
      Ta(t, hr, e, Ei(e)), Xl(Zd, t);
    }
  }
  function tp(e, t, n) {
    e === 'focusin'
      ? (La(), (pr = t), (hr = n), pr.attachEvent('onpropertychange', Oa))
      : e === 'focusout' && La();
  }
  function np(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return co(hr);
  }
  function rp(e, t) {
    if (e === 'click') return co(t);
  }
  function op(e, t) {
    if (e === 'input' || e === 'change') return co(t);
  }
  function ip(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var mt = typeof Object.is == 'function' ? Object.is : ip;
  function mr(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!v.call(t, s) || !mt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function _a(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ia(e, t) {
    var n = _a(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = _a(n);
    }
  }
  function za(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? za(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ma() {
    for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Qr(e.document);
    }
    return t;
  }
  function Wi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function sp(e) {
    var t = Ma(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && za(n.ownerDocument.documentElement, n)) {
      if (r !== null && Wi(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
          (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var s = n.textContent.length,
            a = Math.min(r.start, s);
          (r = r.end === void 0 ? a : Math.min(r.end, s)),
            !e.extend && a > r && ((s = r), (r = a), (a = s)),
            (s = Ia(n, a));
          var d = Ia(n, r);
          s &&
            d &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== d.node ||
              e.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            e.removeAllRanges(),
            a > r
              ? (e.addRange(t), e.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var lp = h && 'documentMode' in document && 11 >= document.documentMode,
    Rn = null,
    Hi = null,
    gr = null,
    Ki = !1;
  function Da(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ki ||
      Rn == null ||
      Rn !== Qr(r) ||
      ((r = Rn),
      'selectionStart' in r && Wi(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (gr && mr(gr, r)) ||
        ((gr = r),
        (r = mo(Hi, 'onSelect')),
        0 < r.length &&
          ((t = new ji('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Rn))));
  }
  function fo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Ln = {
      animationend: fo('Animation', 'AnimationEnd'),
      animationiteration: fo('Animation', 'AnimationIteration'),
      animationstart: fo('Animation', 'AnimationStart'),
      transitionend: fo('Transition', 'TransitionEnd'),
    },
    Qi = {},
    ja = {};
  h &&
    ((ja = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ln.animationend.animation,
      delete Ln.animationiteration.animation,
      delete Ln.animationstart.animation),
    'TransitionEvent' in window || delete Ln.transitionend.transition);
  function po(e) {
    if (Qi[e]) return Qi[e];
    if (!Ln[e]) return e;
    var t = Ln[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ja) return (Qi[e] = t[n]);
    return e;
  }
  var Aa = po('animationend'),
    Fa = po('animationiteration'),
    $a = po('animationstart'),
    Ua = po('transitionend'),
    Va = new Map(),
    ba =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Bt(e, t) {
    Va.set(e, t), f(t, [e]);
  }
  for (var Gi = 0; Gi < ba.length; Gi++) {
    var Yi = ba[Gi],
      ap = Yi.toLowerCase(),
      up = Yi[0].toUpperCase() + Yi.slice(1);
    Bt(ap, 'on' + up);
  }
  Bt(Aa, 'onAnimationEnd'),
    Bt(Fa, 'onAnimationIteration'),
    Bt($a, 'onAnimationStart'),
    Bt('dblclick', 'onDoubleClick'),
    Bt('focusin', 'onFocus'),
    Bt('focusout', 'onBlur'),
    Bt(Ua, 'onTransitionEnd'),
    p('onMouseEnter', ['mouseout', 'mouseover']),
    p('onMouseLeave', ['mouseout', 'mouseover']),
    p('onPointerEnter', ['pointerout', 'pointerover']),
    p('onPointerLeave', ['pointerout', 'pointerover']),
    f('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    f(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    f('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    f('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    f(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    f(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var vr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    cp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(vr));
  function Ba(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), ad(r, t, void 0, e), (e.currentTarget = null);
  }
  function Wa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        s = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var d = r.length - 1; 0 <= d; d--) {
            var g = r[d],
              y = g.instance,
              P = g.currentTarget;
            if (((g = g.listener), y !== a && s.isPropagationStopped())) break e;
            Ba(s, g, P), (a = y);
          }
        else
          for (d = 0; d < r.length; d++) {
            if (
              ((g = r[d]),
              (y = g.instance),
              (P = g.currentTarget),
              (g = g.listener),
              y !== a && s.isPropagationStopped())
            )
              break e;
            Ba(s, g, P), (a = y);
          }
      }
    }
    if (Xr) throw ((e = Ti), (Xr = !1), (Ti = null), e);
  }
  function Pe(e, t) {
    var n = t[rs];
    n === void 0 && (n = t[rs] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ha(t, e, 2, !1), n.add(r));
  }
  function Xi(e, t, n) {
    var r = 0;
    t && (r |= 4), Ha(n, e, r, t);
  }
  var ho = '_reactListening' + Math.random().toString(36).slice(2);
  function yr(e) {
    if (!e[ho]) {
      (e[ho] = !0),
        u.forEach(function (n) {
          n !== 'selectionchange' && (cp.has(n) || Xi(n, !1, e), Xi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ho] || ((t[ho] = !0), Xi('selectionchange', !1, t));
    }
  }
  function Ha(e, t, n, r) {
    switch (ha(t)) {
      case 1:
        var s = Cd;
        break;
      case 4:
        s = Pd;
        break;
      default:
        s = zi;
    }
    (n = s.bind(null, t, n, e)),
      (s = void 0),
      !Pi || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (s = !0),
      r
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, { passive: s })
          : e.addEventListener(t, n, !1);
  }
  function Ji(e, t, n, r, s) {
    var a = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var d = r.tag;
        if (d === 3 || d === 4) {
          var g = r.stateNode.containerInfo;
          if (g === s || (g.nodeType === 8 && g.parentNode === s)) break;
          if (d === 4)
            for (d = r.return; d !== null; ) {
              var y = d.tag;
              if (
                (y === 3 || y === 4) &&
                ((y = d.stateNode.containerInfo),
                y === s || (y.nodeType === 8 && y.parentNode === s))
              )
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = ln(g)), d === null)) return;
            if (((y = d.tag), y === 5 || y === 6)) {
              r = a = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        r = r.return;
      }
    Xl(function () {
      var P = a,
        M = Ei(n),
        D = [];
      e: {
        var z = Va.get(e);
        if (z !== void 0) {
          var U = ji,
            K = e;
          switch (e) {
            case 'keypress':
              if (lo(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              U = Ud;
              break;
            case 'focusin':
              (K = 'focus'), (U = $i);
              break;
            case 'focusout':
              (K = 'blur'), (U = $i);
              break;
            case 'beforeblur':
            case 'afterblur':
              U = $i;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              U = va;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = Rd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = Bd;
              break;
            case Aa:
            case Fa:
            case $a:
              U = _d;
              break;
            case Ua:
              U = Hd;
              break;
            case 'scroll':
              U = Td;
              break;
            case 'wheel':
              U = Qd;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = zd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = wa;
          }
          var Y = (t & 4) !== 0,
            Me = !Y && e === 'scroll',
            k = Y ? (z !== null ? z + 'Capture' : null) : z;
          Y = [];
          for (var x = P, C; x !== null; ) {
            C = x;
            var j = C.stateNode;
            if (
              (C.tag === 5 &&
                j !== null &&
                ((C = j), k !== null && ((j = er(x, k)), j != null && Y.push(wr(x, j, C)))),
              Me)
            )
              break;
            x = x.return;
          }
          0 < Y.length && ((z = new U(z, K, null, n, M)), D.push({ event: z, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === 'mouseover' || e === 'pointerover'),
            (U = e === 'mouseout' || e === 'pointerout'),
            z && n !== Si && (K = n.relatedTarget || n.fromElement) && (ln(K) || K[Rt]))
          )
            break e;
          if (
            (U || z) &&
            ((z =
              M.window === M
                ? M
                : (z = M.ownerDocument)
                  ? z.defaultView || z.parentWindow
                  : window),
            U
              ? ((K = n.relatedTarget || n.toElement),
                (U = P),
                (K = K ? ln(K) : null),
                K !== null &&
                  ((Me = sn(K)), K !== Me || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((U = null), (K = P)),
            U !== K)
          ) {
            if (
              ((Y = va),
              (j = 'onMouseLeave'),
              (k = 'onMouseEnter'),
              (x = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Y = wa), (j = 'onPointerLeave'), (k = 'onPointerEnter'), (x = 'pointer')),
              (Me = U == null ? z : In(U)),
              (C = K == null ? z : In(K)),
              (z = new Y(j, x + 'leave', U, n, M)),
              (z.target = Me),
              (z.relatedTarget = C),
              (j = null),
              ln(M) === P &&
                ((Y = new Y(k, x + 'enter', K, n, M)),
                (Y.target = C),
                (Y.relatedTarget = Me),
                (j = Y)),
              (Me = j),
              U && K)
            )
              t: {
                for (Y = U, k = K, x = 0, C = Y; C; C = On(C)) x++;
                for (C = 0, j = k; j; j = On(j)) C++;
                for (; 0 < x - C; ) (Y = On(Y)), x--;
                for (; 0 < C - x; ) (k = On(k)), C--;
                for (; x--; ) {
                  if (Y === k || (k !== null && Y === k.alternate)) break t;
                  (Y = On(Y)), (k = On(k));
                }
                Y = null;
              }
            else Y = null;
            U !== null && Ka(D, z, U, Y, !1), K !== null && Me !== null && Ka(D, Me, K, Y, !0);
          }
        }
        e: {
          if (
            ((z = P ? In(P) : window),
            (U = z.nodeName && z.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && z.type === 'file'))
          )
            var X = ep;
          else if (Pa(z))
            if (Na) X = op;
            else {
              X = np;
              var q = tp;
            }
          else
            (U = z.nodeName) &&
              U.toLowerCase() === 'input' &&
              (z.type === 'checkbox' || z.type === 'radio') &&
              (X = rp);
          if (X && (X = X(e, P))) {
            Ta(D, X, n, M);
            break e;
          }
          q && q(e, z, P),
            e === 'focusout' &&
              (q = z._wrapperState) &&
              q.controlled &&
              z.type === 'number' &&
              gi(z, 'number', z.value);
        }
        switch (((q = P ? In(P) : window), e)) {
          case 'focusin':
            (Pa(q) || q.contentEditable === 'true') && ((Rn = q), (Hi = P), (gr = null));
            break;
          case 'focusout':
            gr = Hi = Rn = null;
            break;
          case 'mousedown':
            Ki = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Ki = !1), Da(D, n, M);
            break;
          case 'selectionchange':
            if (lp) break;
          case 'keydown':
          case 'keyup':
            Da(D, n, M);
        }
        var Z;
        if (Vi)
          e: {
            switch (e) {
              case 'compositionstart':
                var oe = 'onCompositionStart';
                break e;
              case 'compositionend':
                oe = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                oe = 'onCompositionUpdate';
                break e;
            }
            oe = void 0;
          }
        else
          Nn
            ? ka(e, n) && (oe = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (oe = 'onCompositionStart');
        oe &&
          (xa &&
            n.locale !== 'ko' &&
            (Nn || oe !== 'onCompositionStart'
              ? oe === 'onCompositionEnd' && Nn && (Z = ma())
              : ((bt = M), (Di = 'value' in bt ? bt.value : bt.textContent), (Nn = !0))),
          (q = mo(P, oe)),
          0 < q.length &&
            ((oe = new ya(oe, e, null, n, M)),
            D.push({ event: oe, listeners: q }),
            Z ? (oe.data = Z) : ((Z = Ca(n)), Z !== null && (oe.data = Z)))),
          (Z = Yd ? Xd(e, n) : Jd(e, n)) &&
            ((P = mo(P, 'onBeforeInput')),
            0 < P.length &&
              ((M = new ya('onBeforeInput', 'beforeinput', null, n, M)),
              D.push({ event: M, listeners: P }),
              (M.data = Z)));
      }
      Wa(D, t);
    });
  }
  function wr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function mo(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var s = e,
        a = s.stateNode;
      s.tag === 5 &&
        a !== null &&
        ((s = a),
        (a = er(e, n)),
        a != null && r.unshift(wr(e, a, s)),
        (a = er(e, t)),
        a != null && r.push(wr(e, a, s))),
        (e = e.return);
    }
    return r;
  }
  function On(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ka(e, t, n, r, s) {
    for (var a = t._reactName, d = []; n !== null && n !== r; ) {
      var g = n,
        y = g.alternate,
        P = g.stateNode;
      if (y !== null && y === r) break;
      g.tag === 5 &&
        P !== null &&
        ((g = P),
        s
          ? ((y = er(n, a)), y != null && d.unshift(wr(n, y, g)))
          : s || ((y = er(n, a)), y != null && d.push(wr(n, y, g)))),
        (n = n.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var fp = /\r\n?/g,
    dp = /\u0000|\uFFFD/g;
  function Qa(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        fp,
        `
`,
      )
      .replace(dp, '');
  }
  function go(e, t, n) {
    if (((t = Qa(t)), Qa(e) !== t && n)) throw Error(i(425));
  }
  function vo() {}
  var qi = null,
    Zi = null;
  function es(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ts = typeof setTimeout == 'function' ? setTimeout : void 0,
    pp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Ga = typeof Promise == 'function' ? Promise : void 0,
    hp =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Ga < 'u'
          ? function (e) {
              return Ga.resolve(null).then(e).catch(mp);
            }
          : ts;
  function mp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ns(e, t) {
    var n = t,
      r = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(s), ur(t);
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = s;
    } while (n);
    ur(t);
  }
  function Wt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Ya(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var _n = Math.random().toString(36).slice(2),
    Et = '__reactFiber$' + _n,
    xr = '__reactProps$' + _n,
    Rt = '__reactContainer$' + _n,
    rs = '__reactEvents$' + _n,
    gp = '__reactListeners$' + _n,
    vp = '__reactHandles$' + _n;
  function ln(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Rt] || n[Et])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ya(e); e !== null; ) {
            if ((n = e[Et])) return n;
            e = Ya(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Sr(e) {
    return (
      (e = e[Et] || e[Rt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function In(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function yo(e) {
    return e[xr] || null;
  }
  var os = [],
    zn = -1;
  function Ht(e) {
    return { current: e };
  }
  function Te(e) {
    0 > zn || ((e.current = os[zn]), (os[zn] = null), zn--);
  }
  function Ce(e, t) {
    zn++, (os[zn] = e.current), (e.current = t);
  }
  var Kt = {},
    Be = Ht(Kt),
    Xe = Ht(!1),
    an = Kt;
  function Mn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Kt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      a;
    for (a in n) s[a] = t[a];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function Je(e) {
    return (e = e.childContextTypes), e != null;
  }
  function wo() {
    Te(Xe), Te(Be);
  }
  function Xa(e, t, n) {
    if (Be.current !== Kt) throw Error(i(168));
    Ce(Be, t), Ce(Xe, n);
  }
  function Ja(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(i(108, ke(e) || 'Unknown', s));
    return $({}, n, r);
  }
  function xo(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
      (an = Be.current),
      Ce(Be, e),
      Ce(Xe, Xe.current),
      !0
    );
  }
  function qa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(i(169));
    n
      ? ((e = Ja(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Te(Xe),
        Te(Be),
        Ce(Be, e))
      : Te(Xe),
      Ce(Xe, n);
  }
  var Lt = null,
    So = !1,
    is = !1;
  function Za(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
  }
  function yp(e) {
    (So = !0), Za(e);
  }
  function Qt() {
    if (!is && Lt !== null) {
      is = !0;
      var e = 0,
        t = Ee;
      try {
        var n = Lt;
        for (Ee = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Lt = null), (So = !1);
      } catch (s) {
        throw (Lt !== null && (Lt = Lt.slice(e + 1)), ta(Ni, Qt), s);
      } finally {
        (Ee = t), (is = !1);
      }
    }
    return null;
  }
  var Dn = [],
    jn = 0,
    Eo = null,
    ko = 0,
    at = [],
    ut = 0,
    un = null,
    Ot = 1,
    _t = '';
  function cn(e, t) {
    (Dn[jn++] = ko), (Dn[jn++] = Eo), (Eo = e), (ko = t);
  }
  function eu(e, t, n) {
    (at[ut++] = Ot), (at[ut++] = _t), (at[ut++] = un), (un = e);
    var r = Ot;
    e = _t;
    var s = 32 - ht(r) - 1;
    (r &= ~(1 << s)), (n += 1);
    var a = 32 - ht(t) + s;
    if (30 < a) {
      var d = s - (s % 5);
      (a = (r & ((1 << d) - 1)).toString(32)),
        (r >>= d),
        (s -= d),
        (Ot = (1 << (32 - ht(t) + s)) | (n << s) | r),
        (_t = a + e);
    } else (Ot = (1 << a) | (n << s) | r), (_t = e);
  }
  function ss(e) {
    e.return !== null && (cn(e, 1), eu(e, 1, 0));
  }
  function ls(e) {
    for (; e === Eo; ) (Eo = Dn[--jn]), (Dn[jn] = null), (ko = Dn[--jn]), (Dn[jn] = null);
    for (; e === un; )
      (un = at[--ut]),
        (at[ut] = null),
        (_t = at[--ut]),
        (at[ut] = null),
        (Ot = at[--ut]),
        (at[ut] = null);
  }
  var ot = null,
    it = null,
    Le = !1,
    gt = null;
  function tu(e, t) {
    var n = pt(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function nu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ot = e), (it = Wt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ot = e), (it = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = un !== null ? { id: Ot, overflow: _t } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = pt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ot = e),
              (it = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function as(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function us(e) {
    if (Le) {
      var t = it;
      if (t) {
        var n = t;
        if (!nu(e, t)) {
          if (as(e)) throw Error(i(418));
          t = Wt(n.nextSibling);
          var r = ot;
          t && nu(e, t) ? tu(r, n) : ((e.flags = (e.flags & -4097) | 2), (Le = !1), (ot = e));
        }
      } else {
        if (as(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (Le = !1), (ot = e);
      }
    }
  }
  function ru(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ot = e;
  }
  function Co(e) {
    if (e !== ot) return !1;
    if (!Le) return ru(e), (Le = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !es(e.type, e.memoizedProps))),
      t && (t = it))
    ) {
      if (as(e)) throw (ou(), Error(i(418)));
      for (; t; ) tu(e, t), (t = Wt(t.nextSibling));
    }
    if ((ru(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                it = Wt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        it = null;
      }
    } else it = ot ? Wt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ou() {
    for (var e = it; e; ) e = Wt(e.nextSibling);
  }
  function An() {
    (it = ot = null), (Le = !1);
  }
  function cs(e) {
    gt === null ? (gt = [e]) : gt.push(e);
  }
  var wp = V.ReactCurrentBatchConfig;
  function Er(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(i(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(i(147, e));
        var s = r,
          a = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === a
          ? t.ref
          : ((t = function (d) {
              var g = s.refs;
              d === null ? delete g[a] : (g[a] = d);
            }),
            (t._stringRef = a),
            t);
      }
      if (typeof e != 'string') throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Po(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        i(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
      ))
    );
  }
  function iu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function su(e) {
    function t(k, x) {
      if (e) {
        var C = k.deletions;
        C === null ? ((k.deletions = [x]), (k.flags |= 16)) : C.push(x);
      }
    }
    function n(k, x) {
      if (!e) return null;
      for (; x !== null; ) t(k, x), (x = x.sibling);
      return null;
    }
    function r(k, x) {
      for (k = new Map(); x !== null; )
        x.key !== null ? k.set(x.key, x) : k.set(x.index, x), (x = x.sibling);
      return k;
    }
    function s(k, x) {
      return (k = tn(k, x)), (k.index = 0), (k.sibling = null), k;
    }
    function a(k, x, C) {
      return (
        (k.index = C),
        e
          ? ((C = k.alternate),
            C !== null ? ((C = C.index), C < x ? ((k.flags |= 2), x) : C) : ((k.flags |= 2), x))
          : ((k.flags |= 1048576), x)
      );
    }
    function d(k) {
      return e && k.alternate === null && (k.flags |= 2), k;
    }
    function g(k, x, C, j) {
      return x === null || x.tag !== 6
        ? ((x = tl(C, k.mode, j)), (x.return = k), x)
        : ((x = s(x, C)), (x.return = k), x);
    }
    function y(k, x, C, j) {
      var X = C.type;
      return X === J
        ? M(k, x, C.props.children, j, C.key)
        : x !== null &&
            (x.elementType === X ||
              (typeof X == 'object' && X !== null && X.$$typeof === de && iu(X) === x.type))
          ? ((j = s(x, C.props)), (j.ref = Er(k, x, C)), (j.return = k), j)
          : ((j = Yo(C.type, C.key, C.props, null, k.mode, j)),
            (j.ref = Er(k, x, C)),
            (j.return = k),
            j);
    }
    function P(k, x, C, j) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== C.containerInfo ||
        x.stateNode.implementation !== C.implementation
        ? ((x = nl(C, k.mode, j)), (x.return = k), x)
        : ((x = s(x, C.children || [])), (x.return = k), x);
    }
    function M(k, x, C, j, X) {
      return x === null || x.tag !== 7
        ? ((x = yn(C, k.mode, j, X)), (x.return = k), x)
        : ((x = s(x, C)), (x.return = k), x);
    }
    function D(k, x, C) {
      if ((typeof x == 'string' && x !== '') || typeof x == 'number')
        return (x = tl('' + x, k.mode, C)), (x.return = k), x;
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case te:
            return (
              (C = Yo(x.type, x.key, x.props, null, k.mode, C)),
              (C.ref = Er(k, null, x)),
              (C.return = k),
              C
            );
          case ne:
            return (x = nl(x, k.mode, C)), (x.return = k), x;
          case de:
            var j = x._init;
            return D(k, j(x._payload), C);
        }
        if (Jn(x) || W(x)) return (x = yn(x, k.mode, C, null)), (x.return = k), x;
        Po(k, x);
      }
      return null;
    }
    function z(k, x, C, j) {
      var X = x !== null ? x.key : null;
      if ((typeof C == 'string' && C !== '') || typeof C == 'number')
        return X !== null ? null : g(k, x, '' + C, j);
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case te:
            return C.key === X ? y(k, x, C, j) : null;
          case ne:
            return C.key === X ? P(k, x, C, j) : null;
          case de:
            return (X = C._init), z(k, x, X(C._payload), j);
        }
        if (Jn(C) || W(C)) return X !== null ? null : M(k, x, C, j, null);
        Po(k, C);
      }
      return null;
    }
    function U(k, x, C, j, X) {
      if ((typeof j == 'string' && j !== '') || typeof j == 'number')
        return (k = k.get(C) || null), g(x, k, '' + j, X);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case te:
            return (k = k.get(j.key === null ? C : j.key) || null), y(x, k, j, X);
          case ne:
            return (k = k.get(j.key === null ? C : j.key) || null), P(x, k, j, X);
          case de:
            var q = j._init;
            return U(k, x, C, q(j._payload), X);
        }
        if (Jn(j) || W(j)) return (k = k.get(C) || null), M(x, k, j, X, null);
        Po(x, j);
      }
      return null;
    }
    function K(k, x, C, j) {
      for (
        var X = null, q = null, Z = x, oe = (x = 0), Ue = null;
        Z !== null && oe < C.length;
        oe++
      ) {
        Z.index > oe ? ((Ue = Z), (Z = null)) : (Ue = Z.sibling);
        var ye = z(k, Z, C[oe], j);
        if (ye === null) {
          Z === null && (Z = Ue);
          break;
        }
        e && Z && ye.alternate === null && t(k, Z),
          (x = a(ye, x, oe)),
          q === null ? (X = ye) : (q.sibling = ye),
          (q = ye),
          (Z = Ue);
      }
      if (oe === C.length) return n(k, Z), Le && cn(k, oe), X;
      if (Z === null) {
        for (; oe < C.length; oe++)
          (Z = D(k, C[oe], j)),
            Z !== null && ((x = a(Z, x, oe)), q === null ? (X = Z) : (q.sibling = Z), (q = Z));
        return Le && cn(k, oe), X;
      }
      for (Z = r(k, Z); oe < C.length; oe++)
        (Ue = U(Z, k, oe, C[oe], j)),
          Ue !== null &&
            (e && Ue.alternate !== null && Z.delete(Ue.key === null ? oe : Ue.key),
            (x = a(Ue, x, oe)),
            q === null ? (X = Ue) : (q.sibling = Ue),
            (q = Ue));
      return (
        e &&
          Z.forEach(function (nn) {
            return t(k, nn);
          }),
        Le && cn(k, oe),
        X
      );
    }
    function Y(k, x, C, j) {
      var X = W(C);
      if (typeof X != 'function') throw Error(i(150));
      if (((C = X.call(C)), C == null)) throw Error(i(151));
      for (
        var q = (X = null), Z = x, oe = (x = 0), Ue = null, ye = C.next();
        Z !== null && !ye.done;
        oe++, ye = C.next()
      ) {
        Z.index > oe ? ((Ue = Z), (Z = null)) : (Ue = Z.sibling);
        var nn = z(k, Z, ye.value, j);
        if (nn === null) {
          Z === null && (Z = Ue);
          break;
        }
        e && Z && nn.alternate === null && t(k, Z),
          (x = a(nn, x, oe)),
          q === null ? (X = nn) : (q.sibling = nn),
          (q = nn),
          (Z = Ue);
      }
      if (ye.done) return n(k, Z), Le && cn(k, oe), X;
      if (Z === null) {
        for (; !ye.done; oe++, ye = C.next())
          (ye = D(k, ye.value, j)),
            ye !== null && ((x = a(ye, x, oe)), q === null ? (X = ye) : (q.sibling = ye), (q = ye));
        return Le && cn(k, oe), X;
      }
      for (Z = r(k, Z); !ye.done; oe++, ye = C.next())
        (ye = U(Z, k, oe, ye.value, j)),
          ye !== null &&
            (e && ye.alternate !== null && Z.delete(ye.key === null ? oe : ye.key),
            (x = a(ye, x, oe)),
            q === null ? (X = ye) : (q.sibling = ye),
            (q = ye));
      return (
        e &&
          Z.forEach(function (qp) {
            return t(k, qp);
          }),
        Le && cn(k, oe),
        X
      );
    }
    function Me(k, x, C, j) {
      if (
        (typeof C == 'object' &&
          C !== null &&
          C.type === J &&
          C.key === null &&
          (C = C.props.children),
        typeof C == 'object' && C !== null)
      ) {
        switch (C.$$typeof) {
          case te:
            e: {
              for (var X = C.key, q = x; q !== null; ) {
                if (q.key === X) {
                  if (((X = C.type), X === J)) {
                    if (q.tag === 7) {
                      n(k, q.sibling), (x = s(q, C.props.children)), (x.return = k), (k = x);
                      break e;
                    }
                  } else if (
                    q.elementType === X ||
                    (typeof X == 'object' && X !== null && X.$$typeof === de && iu(X) === q.type)
                  ) {
                    n(k, q.sibling),
                      (x = s(q, C.props)),
                      (x.ref = Er(k, q, C)),
                      (x.return = k),
                      (k = x);
                    break e;
                  }
                  n(k, q);
                  break;
                } else t(k, q);
                q = q.sibling;
              }
              C.type === J
                ? ((x = yn(C.props.children, k.mode, j, C.key)), (x.return = k), (k = x))
                : ((j = Yo(C.type, C.key, C.props, null, k.mode, j)),
                  (j.ref = Er(k, x, C)),
                  (j.return = k),
                  (k = j));
            }
            return d(k);
          case ne:
            e: {
              for (q = C.key; x !== null; ) {
                if (x.key === q)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === C.containerInfo &&
                    x.stateNode.implementation === C.implementation
                  ) {
                    n(k, x.sibling), (x = s(x, C.children || [])), (x.return = k), (k = x);
                    break e;
                  } else {
                    n(k, x);
                    break;
                  }
                else t(k, x);
                x = x.sibling;
              }
              (x = nl(C, k.mode, j)), (x.return = k), (k = x);
            }
            return d(k);
          case de:
            return (q = C._init), Me(k, x, q(C._payload), j);
        }
        if (Jn(C)) return K(k, x, C, j);
        if (W(C)) return Y(k, x, C, j);
        Po(k, C);
      }
      return (typeof C == 'string' && C !== '') || typeof C == 'number'
        ? ((C = '' + C),
          x !== null && x.tag === 6
            ? (n(k, x.sibling), (x = s(x, C)), (x.return = k), (k = x))
            : (n(k, x), (x = tl(C, k.mode, j)), (x.return = k), (k = x)),
          d(k))
        : n(k, x);
    }
    return Me;
  }
  var Fn = su(!0),
    lu = su(!1),
    To = Ht(null),
    No = null,
    $n = null,
    fs = null;
  function ds() {
    fs = $n = No = null;
  }
  function ps(e) {
    var t = To.current;
    Te(To), (e._currentValue = t);
  }
  function hs(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Un(e, t) {
    (No = e),
      (fs = $n = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (qe = !0), (e.firstContext = null));
  }
  function ct(e) {
    var t = e._currentValue;
    if (fs !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
        if (No === null) throw Error(i(308));
        ($n = e), (No.dependencies = { lanes: 0, firstContext: e });
      } else $n = $n.next = e;
    return t;
  }
  var fn = null;
  function ms(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  function au(e, t, n, r) {
    var s = t.interleaved;
    return (
      s === null ? ((n.next = n), ms(t)) : ((n.next = s.next), (s.next = n)),
      (t.interleaved = n),
      It(e, r)
    );
  }
  function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Gt = !1;
  function gs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function uu(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function zt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (me & 2) !== 0)) {
      var s = r.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)), (r.pending = t), It(e, n)
      );
    }
    return (
      (s = r.interleaved),
      s === null ? ((t.next = t), ms(r)) : ((t.next = s.next), (s.next = t)),
      (r.interleaved = t),
      It(e, n)
    );
  }
  function Ro(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oi(e, n);
    }
  }
  function cu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var s = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          a === null ? (s = a = d) : (a = a.next = d), (n = n.next);
        } while (n !== null);
        a === null ? (s = a = t) : (a = a.next = t);
      } else s = a = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Lo(e, t, n, r) {
    var s = e.updateQueue;
    Gt = !1;
    var a = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var y = g,
        P = y.next;
      (y.next = null), d === null ? (a = P) : (d.next = P), (d = y);
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (g = M.lastBaseUpdate),
        g !== d && (g === null ? (M.firstBaseUpdate = P) : (g.next = P), (M.lastBaseUpdate = y)));
    }
    if (a !== null) {
      var D = s.baseState;
      (d = 0), (M = P = y = null), (g = a);
      do {
        var z = g.lane,
          U = g.eventTime;
        if ((r & z) === z) {
          M !== null &&
            (M = M.next =
              {
                eventTime: U,
                lane: 0,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null,
              });
          e: {
            var K = e,
              Y = g;
            switch (((z = t), (U = n), Y.tag)) {
              case 1:
                if (((K = Y.payload), typeof K == 'function')) {
                  D = K.call(U, D, z);
                  break e;
                }
                D = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = Y.payload), (z = typeof K == 'function' ? K.call(U, D, z) : K), z == null)
                )
                  break e;
                D = $({}, D, z);
                break e;
              case 2:
                Gt = !0;
            }
          }
          g.callback !== null &&
            g.lane !== 0 &&
            ((e.flags |= 64), (z = s.effects), z === null ? (s.effects = [g]) : z.push(g));
        } else
          (U = {
            eventTime: U,
            lane: z,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            M === null ? ((P = M = U), (y = D)) : (M = M.next = U),
            (d |= z);
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          (z = g), (g = z.next), (z.next = null), (s.lastBaseUpdate = z), (s.shared.pending = null);
        }
      } while (!0);
      if (
        (M === null && (y = D),
        (s.baseState = y),
        (s.firstBaseUpdate = P),
        (s.lastBaseUpdate = M),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do (d |= s.lane), (s = s.next);
        while (s !== t);
      } else a === null && (s.shared.lanes = 0);
      (hn |= d), (e.lanes = d), (e.memoizedState = D);
    }
  }
  function fu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          s = r.callback;
        if (s !== null) {
          if (((r.callback = null), (r = n), typeof s != 'function')) throw Error(i(191, s));
          s.call(r);
        }
      }
  }
  var kr = {},
    kt = Ht(kr),
    Cr = Ht(kr),
    Pr = Ht(kr);
  function dn(e) {
    if (e === kr) throw Error(i(174));
    return e;
  }
  function vs(e, t) {
    switch ((Ce(Pr, t), Ce(Cr, e), Ce(kt, kr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : yi(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = yi(t, e));
    }
    Te(kt), Ce(kt, t);
  }
  function Vn() {
    Te(kt), Te(Cr), Te(Pr);
  }
  function du(e) {
    dn(Pr.current);
    var t = dn(kt.current),
      n = yi(t, e.type);
    t !== n && (Ce(Cr, e), Ce(kt, n));
  }
  function ys(e) {
    Cr.current === e && (Te(kt), Te(Cr));
  }
  var Oe = Ht(0);
  function Oo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ws = [];
  function xs() {
    for (var e = 0; e < ws.length; e++) ws[e]._workInProgressVersionPrimary = null;
    ws.length = 0;
  }
  var _o = V.ReactCurrentDispatcher,
    Ss = V.ReactCurrentBatchConfig,
    pn = 0,
    _e = null,
    je = null,
    Fe = null,
    Io = !1,
    Tr = !1,
    Nr = 0,
    xp = 0;
  function We() {
    throw Error(i(321));
  }
  function Es(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!mt(e[n], t[n])) return !1;
    return !0;
  }
  function ks(e, t, n, r, s, a) {
    if (
      ((pn = a),
      (_e = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (_o.current = e === null || e.memoizedState === null ? Cp : Pp),
      (e = n(r, s)),
      Tr)
    ) {
      a = 0;
      do {
        if (((Tr = !1), (Nr = 0), 25 <= a)) throw Error(i(301));
        (a += 1), (Fe = je = null), (t.updateQueue = null), (_o.current = Tp), (e = n(r, s));
      } while (Tr);
    }
    if (
      ((_o.current = Do),
      (t = je !== null && je.next !== null),
      (pn = 0),
      (Fe = je = _e = null),
      (Io = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function Cs() {
    var e = Nr !== 0;
    return (Nr = 0), e;
  }
  function Ct() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fe === null ? (_e.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
  }
  function ft() {
    if (je === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Fe === null ? _e.memoizedState : Fe.next;
    if (t !== null) (Fe = t), (je = e);
    else {
      if (e === null) throw Error(i(310));
      (je = e),
        (e = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null,
        }),
        Fe === null ? (_e.memoizedState = Fe = e) : (Fe = Fe.next = e);
    }
    return Fe;
  }
  function Rr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ps(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = je,
      s = r.baseQueue,
      a = n.pending;
    if (a !== null) {
      if (s !== null) {
        var d = s.next;
        (s.next = a.next), (a.next = d);
      }
      (r.baseQueue = s = a), (n.pending = null);
    }
    if (s !== null) {
      (a = s.next), (r = r.baseState);
      var g = (d = null),
        y = null,
        P = a;
      do {
        var M = P.lane;
        if ((pn & M) === M)
          y !== null &&
            (y = y.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (r = P.hasEagerState ? P.eagerState : e(r, P.action));
        else {
          var D = {
            lane: M,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          y === null ? ((g = y = D), (d = r)) : (y = y.next = D), (_e.lanes |= M), (hn |= M);
        }
        P = P.next;
      } while (P !== null && P !== a);
      y === null ? (d = r) : (y.next = g),
        mt(r, t.memoizedState) || (qe = !0),
        (t.memoizedState = r),
        (t.baseState = d),
        (t.baseQueue = y),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      s = e;
      do (a = s.lane), (_e.lanes |= a), (hn |= a), (s = s.next);
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ts(e) {
    var t = ft(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      s = n.pending,
      a = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = (s = s.next);
      do (a = e(a, d.action)), (d = d.next);
      while (d !== s);
      mt(a, t.memoizedState) || (qe = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a);
    }
    return [a, r];
  }
  function pu() {}
  function hu(e, t) {
    var n = _e,
      r = ft(),
      s = t(),
      a = !mt(r.memoizedState, s);
    if (
      (a && ((r.memoizedState = s), (qe = !0)),
      (r = r.queue),
      Ns(vu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || a || (Fe !== null && Fe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Lr(9, gu.bind(null, n, r, s, t), void 0, null), $e === null))
        throw Error(i(349));
      (pn & 30) !== 0 || mu(n, t, s);
    }
    return s;
  }
  function mu(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (_e.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function gu(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), yu(t) && wu(e);
  }
  function vu(e, t, n) {
    return n(function () {
      yu(t) && wu(e);
    });
  }
  function yu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function wu(e) {
    var t = It(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function xu(e) {
    var t = Ct();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = kp.bind(null, _e, e)),
      [t.memoizedState, e]
    );
  }
  function Lr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (_e.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Su() {
    return ft().memoizedState;
  }
  function zo(e, t, n, r) {
    var s = Ct();
    (_e.flags |= e), (s.memoizedState = Lr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Mo(e, t, n, r) {
    var s = ft();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (je !== null) {
      var d = je.memoizedState;
      if (((a = d.destroy), r !== null && Es(r, d.deps))) {
        s.memoizedState = Lr(t, n, a, r);
        return;
      }
    }
    (_e.flags |= e), (s.memoizedState = Lr(1 | t, n, a, r));
  }
  function Eu(e, t) {
    return zo(8390656, 8, e, t);
  }
  function Ns(e, t) {
    return Mo(2048, 8, e, t);
  }
  function ku(e, t) {
    return Mo(4, 2, e, t);
  }
  function Cu(e, t) {
    return Mo(4, 4, e, t);
  }
  function Pu(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Tu(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), Mo(4, 4, Pu.bind(null, t, e), n);
  }
  function Rs() {}
  function Nu(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Es(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ru(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Es(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Lu(e, t, n) {
    return (pn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n))
      : (mt(n, t) || ((n = ia()), (_e.lanes |= n), (hn |= n), (e.baseState = !0)), t);
  }
  function Sp(e, t) {
    var n = Ee;
    (Ee = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ss.transition;
    Ss.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ee = n), (Ss.transition = r);
    }
  }
  function Ou() {
    return ft().memoizedState;
  }
  function Ep(e, t, n) {
    var r = Zt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), _u(e)))
      Iu(t, n);
    else if (((n = au(e, t, n, r)), n !== null)) {
      var s = Ye();
      xt(n, e, r, s), zu(n, t, r);
    }
  }
  function kp(e, t, n) {
    var r = Zt(e),
      s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (_u(e)) Iu(t, s);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var d = t.lastRenderedState,
            g = a(d, n);
          if (((s.hasEagerState = !0), (s.eagerState = g), mt(g, d))) {
            var y = t.interleaved;
            y === null ? ((s.next = s), ms(t)) : ((s.next = y.next), (y.next = s)),
              (t.interleaved = s);
            return;
          }
        } catch {
        } finally {
        }
      (n = au(e, t, s, r)), n !== null && ((s = Ye()), xt(n, e, r, s), zu(n, t, r));
    }
  }
  function _u(e) {
    var t = e.alternate;
    return e === _e || (t !== null && t === _e);
  }
  function Iu(e, t) {
    Tr = Io = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function zu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oi(e, n);
    }
  }
  var Do = {
      readContext: ct,
      useCallback: We,
      useContext: We,
      useEffect: We,
      useImperativeHandle: We,
      useInsertionEffect: We,
      useLayoutEffect: We,
      useMemo: We,
      useReducer: We,
      useRef: We,
      useState: We,
      useDebugValue: We,
      useDeferredValue: We,
      useTransition: We,
      useMutableSource: We,
      useSyncExternalStore: We,
      useId: We,
      unstable_isNewReconciler: !1,
    },
    Cp = {
      readContext: ct,
      useCallback: function (e, t) {
        return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ct,
      useEffect: Eu,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), zo(4194308, 4, Pu.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return zo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return zo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ct();
        return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
        var r = Ct();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Ep.bind(null, _e, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ct();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: xu,
      useDebugValue: Rs,
      useDeferredValue: function (e) {
        return (Ct().memoizedState = e);
      },
      useTransition: function () {
        var e = xu(!1),
          t = e[0];
        return (e = Sp.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = _e,
          s = Ct();
        if (Le) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), $e === null)) throw Error(i(349));
          (pn & 30) !== 0 || mu(r, t, n);
        }
        s.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (s.queue = a),
          Eu(vu.bind(null, r, a, e), [e]),
          (r.flags |= 2048),
          Lr(9, gu.bind(null, r, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ct(),
          t = $e.identifierPrefix;
        if (Le) {
          var n = _t,
            r = Ot;
          (n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Nr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = xp++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Pp = {
      readContext: ct,
      useCallback: Nu,
      useContext: ct,
      useEffect: Ns,
      useImperativeHandle: Tu,
      useInsertionEffect: ku,
      useLayoutEffect: Cu,
      useMemo: Ru,
      useReducer: Ps,
      useRef: Su,
      useState: function () {
        return Ps(Rr);
      },
      useDebugValue: Rs,
      useDeferredValue: function (e) {
        var t = ft();
        return Lu(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = Ps(Rr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: pu,
      useSyncExternalStore: hu,
      useId: Ou,
      unstable_isNewReconciler: !1,
    },
    Tp = {
      readContext: ct,
      useCallback: Nu,
      useContext: ct,
      useEffect: Ns,
      useImperativeHandle: Tu,
      useInsertionEffect: ku,
      useLayoutEffect: Cu,
      useMemo: Ru,
      useReducer: Ts,
      useRef: Su,
      useState: function () {
        return Ts(Rr);
      },
      useDebugValue: Rs,
      useDeferredValue: function (e) {
        var t = ft();
        return je === null ? (t.memoizedState = e) : Lu(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = Ts(Rr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: pu,
      useSyncExternalStore: hu,
      useId: Ou,
      unstable_isNewReconciler: !1,
    };
  function vt(e, t) {
    if (e && e.defaultProps) {
      (t = $({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ls(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : $({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var jo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? sn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        s = Zt(e),
        a = zt(r, s);
      (a.payload = t),
        n != null && (a.callback = n),
        (t = Yt(e, a, s)),
        t !== null && (xt(t, e, s, r), Ro(t, e, s));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        s = Zt(e),
        a = zt(r, s);
      (a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = Yt(e, a, s)),
        t !== null && (xt(t, e, s, r), Ro(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = Zt(e),
        s = zt(n, r);
      (s.tag = 2),
        t != null && (s.callback = t),
        (t = Yt(e, s, r)),
        t !== null && (xt(t, e, r, n), Ro(t, e, r));
    },
  };
  function Mu(e, t, n, r, s, a, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, a, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !mr(n, r) || !mr(s, a)
          : !0
    );
  }
  function Du(e, t, n) {
    var r = !1,
      s = Kt,
      a = t.contextType;
    return (
      typeof a == 'object' && a !== null
        ? (a = ct(a))
        : ((s = Je(t) ? an : Be.current),
          (r = t.contextTypes),
          (a = (r = r != null) ? Mn(e, s) : Kt)),
      (t = new t(n, a)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = jo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function ju(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && jo.enqueueReplaceState(t, t.state, null);
  }
  function Os(e, t, n, r) {
    var s = e.stateNode;
    (s.props = n), (s.state = e.memoizedState), (s.refs = {}), gs(e);
    var a = t.contextType;
    typeof a == 'object' && a !== null
      ? (s.context = ct(a))
      : ((a = Je(t) ? an : Be.current), (s.context = Mn(e, a))),
      (s.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == 'function' && (Ls(e, t, a, n), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function' ||
        (typeof s.UNSAFE_componentWillMount != 'function' &&
          typeof s.componentWillMount != 'function') ||
        ((t = s.state),
        typeof s.componentWillMount == 'function' && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount(),
        t !== s.state && jo.enqueueReplaceState(s, s.state, null),
        Lo(e, n, s, r),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function bn(e, t) {
    try {
      var n = '',
        r = t;
      do (n += he(r)), (r = r.return);
      while (r);
      var s = n;
    } catch (a) {
      s =
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function _s(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Is(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Np = typeof WeakMap == 'function' ? WeakMap : Map;
  function Au(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Bo || ((Bo = !0), (Qs = r)), Is(e, t);
      }),
      n
    );
  }
  function Fu(e, t, n) {
    (n = zt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var s = t.value;
      (n.payload = function () {
        return r(s);
      }),
        (n.callback = function () {
          Is(e, t);
        });
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == 'function' &&
        (n.callback = function () {
          Is(e, t), typeof r != 'function' && (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
          var d = t.stack;
          this.componentDidCatch(t.value, { componentStack: d !== null ? d : '' });
        }),
      n
    );
  }
  function $u(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Np();
      var s = new Set();
      r.set(t, s);
    } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
    s.has(n) || (s.add(n), (e = Vp.bind(null, e, t, n)), t.then(e, e));
  }
  function Uu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Vu(e, t, n, r, s) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = zt(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = s), e);
  }
  var Rp = V.ReactCurrentOwner,
    qe = !1;
  function Ge(e, t, n, r) {
    t.child = e === null ? lu(t, null, n, r) : Fn(t, e.child, n, r);
  }
  function bu(e, t, n, r, s) {
    n = n.render;
    var a = t.ref;
    return (
      Un(t, s),
      (r = ks(e, t, n, r, a, s)),
      (n = Cs()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Mt(e, t, s))
        : (Le && n && ss(t), (t.flags |= 1), Ge(e, t, r, s), t.child)
    );
  }
  function Bu(e, t, n, r, s) {
    if (e === null) {
      var a = n.type;
      return typeof a == 'function' &&
        !el(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Wu(e, t, a, r, s))
        : ((e = Yo(n.type, null, r, t, t.mode, s)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((a = e.child), (e.lanes & s) === 0)) {
      var d = a.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : mr), n(d, r) && e.ref === t.ref))
        return Mt(e, t, s);
    }
    return (t.flags |= 1), (e = tn(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Wu(e, t, n, r, s) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (mr(a, r) && e.ref === t.ref)
        if (((qe = !1), (t.pendingProps = r = a), (e.lanes & s) !== 0))
          (e.flags & 131072) !== 0 && (qe = !0);
        else return (t.lanes = e.lanes), Mt(e, t, s);
    }
    return zs(e, t, n, r, s);
  }
  function Hu(e, t, n) {
    var r = t.pendingProps,
      s = r.children,
      a = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Ce(Wn, st),
          (st |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ce(Wn, st),
            (st |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = a !== null ? a.baseLanes : n),
          Ce(Wn, st),
          (st |= r);
      }
    else
      a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Ce(Wn, st),
        (st |= r);
    return Ge(e, t, s, n), t.child;
  }
  function Ku(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function zs(e, t, n, r, s) {
    var a = Je(n) ? an : Be.current;
    return (
      (a = Mn(t, a)),
      Un(t, s),
      (n = ks(e, t, n, r, a, s)),
      (r = Cs()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Mt(e, t, s))
        : (Le && r && ss(t), (t.flags |= 1), Ge(e, t, n, s), t.child)
    );
  }
  function Qu(e, t, n, r, s) {
    if (Je(n)) {
      var a = !0;
      xo(t);
    } else a = !1;
    if ((Un(t, s), t.stateNode === null)) Fo(e, t), Du(t, n, r), Os(t, n, r, s), (r = !0);
    else if (e === null) {
      var d = t.stateNode,
        g = t.memoizedProps;
      d.props = g;
      var y = d.context,
        P = n.contextType;
      typeof P == 'object' && P !== null
        ? (P = ct(P))
        : ((P = Je(n) ? an : Be.current), (P = Mn(t, P)));
      var M = n.getDerivedStateFromProps,
        D = typeof M == 'function' || typeof d.getSnapshotBeforeUpdate == 'function';
      D ||
        (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof d.componentWillReceiveProps != 'function') ||
        ((g !== r || y !== P) && ju(t, d, r, P)),
        (Gt = !1);
      var z = t.memoizedState;
      (d.state = z),
        Lo(t, r, d, s),
        (y = t.memoizedState),
        g !== r || z !== y || Xe.current || Gt
          ? (typeof M == 'function' && (Ls(t, n, M, r), (y = t.memoizedState)),
            (g = Gt || Mu(t, n, g, r, z, y, P))
              ? (D ||
                  (typeof d.UNSAFE_componentWillMount != 'function' &&
                    typeof d.componentWillMount != 'function') ||
                  (typeof d.componentWillMount == 'function' && d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == 'function' &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof d.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = y)),
            (d.props = r),
            (d.state = y),
            (d.context = P),
            (r = g))
          : (typeof d.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
    } else {
      (d = t.stateNode),
        uu(e, t),
        (g = t.memoizedProps),
        (P = t.type === t.elementType ? g : vt(t.type, g)),
        (d.props = P),
        (D = t.pendingProps),
        (z = d.context),
        (y = n.contextType),
        typeof y == 'object' && y !== null
          ? (y = ct(y))
          : ((y = Je(n) ? an : Be.current), (y = Mn(t, y)));
      var U = n.getDerivedStateFromProps;
      (M = typeof U == 'function' || typeof d.getSnapshotBeforeUpdate == 'function') ||
        (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof d.componentWillReceiveProps != 'function') ||
        ((g !== D || z !== y) && ju(t, d, r, y)),
        (Gt = !1),
        (z = t.memoizedState),
        (d.state = z),
        Lo(t, r, d, s);
      var K = t.memoizedState;
      g !== D || z !== K || Xe.current || Gt
        ? (typeof U == 'function' && (Ls(t, n, U, r), (K = t.memoizedState)),
          (P = Gt || Mu(t, n, P, r, z, K, y) || !1)
            ? (M ||
                (typeof d.UNSAFE_componentWillUpdate != 'function' &&
                  typeof d.componentWillUpdate != 'function') ||
                (typeof d.componentWillUpdate == 'function' && d.componentWillUpdate(r, K, y),
                typeof d.UNSAFE_componentWillUpdate == 'function' &&
                  d.UNSAFE_componentWillUpdate(r, K, y)),
              typeof d.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof d.componentDidUpdate != 'function' ||
                (g === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != 'function' ||
                (g === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = K)),
          (d.props = r),
          (d.state = K),
          (d.context = y),
          (r = P))
        : (typeof d.componentDidUpdate != 'function' ||
            (g === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != 'function' ||
            (g === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ms(e, t, n, r, a, s);
  }
  function Ms(e, t, n, r, s, a) {
    Ku(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return s && qa(t, n, !1), Mt(e, t, a);
    (r = t.stateNode), (Rp.current = t);
    var g = d && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = Fn(t, e.child, null, a)), (t.child = Fn(t, null, g, a)))
        : Ge(e, t, g, a),
      (t.memoizedState = r.state),
      s && qa(t, n, !0),
      t.child
    );
  }
  function Gu(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Xa(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Xa(e, t.context, !1),
      vs(e, t.containerInfo);
  }
  function Yu(e, t, n, r, s) {
    return An(), cs(s), (t.flags |= 256), Ge(e, t, n, r), t.child;
  }
  var Ds = { dehydrated: null, treeContext: null, retryLane: 0 };
  function js(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xu(e, t, n) {
    var r = t.pendingProps,
      s = Oe.current,
      a = !1,
      d = (t.flags & 128) !== 0,
      g;
    if (
      ((g = d) || (g = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      g ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (s |= 1),
      Ce(Oe, s & 1),
      e === null)
    )
      return (
        us(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((d = r.children),
            (e = r.fallback),
            a
              ? ((r = t.mode),
                (a = t.child),
                (d = { mode: 'hidden', children: d }),
                (r & 1) === 0 && a !== null
                  ? ((a.childLanes = 0), (a.pendingProps = d))
                  : (a = Xo(d, r, 0, null)),
                (e = yn(e, r, n, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = js(n)),
                (t.memoizedState = Ds),
                e)
              : As(t, d))
      );
    if (((s = e.memoizedState), s !== null && ((g = s.dehydrated), g !== null)))
      return Lp(e, t, d, r, g, s, n);
    if (a) {
      (a = r.fallback), (d = t.mode), (s = e.child), (g = s.sibling);
      var y = { mode: 'hidden', children: r.children };
      return (
        (d & 1) === 0 && t.child !== s
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = y), (t.deletions = null))
          : ((r = tn(s, y)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
        g !== null ? (a = tn(g, a)) : ((a = yn(a, d, n, null)), (a.flags |= 2)),
        (a.return = t),
        (r.return = t),
        (r.sibling = a),
        (t.child = r),
        (r = a),
        (a = t.child),
        (d = e.child.memoizedState),
        (d =
          d === null
            ? js(n)
            : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }),
        (a.memoizedState = d),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ds),
        r
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (r = tn(a, { mode: 'visible', children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function As(e, t) {
    return (
      (t = Xo({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    );
  }
  function Ao(e, t, n, r) {
    return (
      r !== null && cs(r),
      Fn(t, e.child, null, n),
      (e = As(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Lp(e, t, n, r, s, a, d) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = _s(Error(i(422)))), Ao(e, t, d, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((a = r.fallback),
            (s = t.mode),
            (r = Xo({ mode: 'visible', children: r.children }, s, 0, null)),
            (a = yn(a, s, d, null)),
            (a.flags |= 2),
            (r.return = t),
            (a.return = t),
            (r.sibling = a),
            (t.child = r),
            (t.mode & 1) !== 0 && Fn(t, e.child, null, d),
            (t.child.memoizedState = js(d)),
            (t.memoizedState = Ds),
            a);
    if ((t.mode & 1) === 0) return Ao(e, t, d, null);
    if (s.data === '$!') {
      if (((r = s.nextSibling && s.nextSibling.dataset), r)) var g = r.dgst;
      return (r = g), (a = Error(i(419))), (r = _s(a, r, void 0)), Ao(e, t, d, r);
    }
    if (((g = (d & e.childLanes) !== 0), qe || g)) {
      if (((r = $e), r !== null)) {
        switch (d & -d) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
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
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        (s = (s & (r.suspendedLanes | d)) !== 0 ? 0 : s),
          s !== 0 && s !== a.retryLane && ((a.retryLane = s), It(e, s), xt(r, e, s, -1));
      }
      return Zs(), (r = _s(Error(i(421)))), Ao(e, t, d, r);
    }
    return s.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = bp.bind(null, e)), (s._reactRetry = t), null)
      : ((e = a.treeContext),
        (it = Wt(s.nextSibling)),
        (ot = t),
        (Le = !0),
        (gt = null),
        e !== null &&
          ((at[ut++] = Ot),
          (at[ut++] = _t),
          (at[ut++] = un),
          (Ot = e.id),
          (_t = e.overflow),
          (un = t)),
        (t = As(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ju(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), hs(e.return, t, n);
  }
  function Fs(e, t, n, r, s) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: s,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = r),
        (a.tail = n),
        (a.tailMode = s));
  }
  function qu(e, t, n) {
    var r = t.pendingProps,
      s = r.revealOrder,
      a = r.tail;
    if ((Ge(e, t, r.children, n), (r = Oe.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
          else if (e.tag === 19) Ju(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Ce(Oe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (s) {
        case 'forwards':
          for (n = t.child, s = null; n !== null; )
            (e = n.alternate), e !== null && Oo(e) === null && (s = n), (n = n.sibling);
          (n = s),
            n === null ? ((s = t.child), (t.child = null)) : ((s = n.sibling), (n.sibling = null)),
            Fs(t, !1, s, n, a);
          break;
        case 'backwards':
          for (n = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && Oo(e) === null)) {
              t.child = s;
              break;
            }
            (e = s.sibling), (s.sibling = n), (n = s), (s = e);
          }
          Fs(t, !0, n, null, a);
          break;
        case 'together':
          Fs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Fo(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Mt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (hn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Op(e, t, n) {
    switch (t.tag) {
      case 3:
        Gu(t), An();
        break;
      case 5:
        du(t);
        break;
      case 1:
        Je(t.type) && xo(t);
        break;
      case 4:
        vs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          s = t.memoizedProps.value;
        Ce(To, r._currentValue), (r._currentValue = s);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Ce(Oe, Oe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Xu(e, t, n)
              : (Ce(Oe, Oe.current & 1), (e = Mt(e, t, n)), e !== null ? e.sibling : null);
        Ce(Oe, Oe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return qu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Ce(Oe, Oe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Hu(e, t, n);
    }
    return Mt(e, t, n);
  }
  var Zu, $s, ec, tc;
  (Zu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    ($s = function () {}),
    (ec = function (e, t, n, r) {
      var s = e.memoizedProps;
      if (s !== r) {
        (e = t.stateNode), dn(kt.current);
        var a = null;
        switch (n) {
          case 'input':
            (s = hi(e, s)), (r = hi(e, r)), (a = []);
            break;
          case 'select':
            (s = $({}, s, { value: void 0 })), (r = $({}, r, { value: void 0 })), (a = []);
            break;
          case 'textarea':
            (s = vi(e, s)), (r = vi(e, r)), (a = []);
            break;
          default:
            typeof s.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = vo);
        }
        wi(n, r);
        var d;
        n = null;
        for (P in s)
          if (!r.hasOwnProperty(P) && s.hasOwnProperty(P) && s[P] != null)
            if (P === 'style') {
              var g = s[P];
              for (d in g) g.hasOwnProperty(d) && (n || (n = {}), (n[d] = ''));
            } else
              P !== 'dangerouslySetInnerHTML' &&
                P !== 'children' &&
                P !== 'suppressContentEditableWarning' &&
                P !== 'suppressHydrationWarning' &&
                P !== 'autoFocus' &&
                (c.hasOwnProperty(P) ? a || (a = []) : (a = a || []).push(P, null));
        for (P in r) {
          var y = r[P];
          if (
            ((g = s != null ? s[P] : void 0),
            r.hasOwnProperty(P) && y !== g && (y != null || g != null))
          )
            if (P === 'style')
              if (g) {
                for (d in g)
                  !g.hasOwnProperty(d) ||
                    (y && y.hasOwnProperty(d)) ||
                    (n || (n = {}), (n[d] = ''));
                for (d in y) y.hasOwnProperty(d) && g[d] !== y[d] && (n || (n = {}), (n[d] = y[d]));
              } else n || (a || (a = []), a.push(P, n)), (n = y);
            else
              P === 'dangerouslySetInnerHTML'
                ? ((y = y ? y.__html : void 0),
                  (g = g ? g.__html : void 0),
                  y != null && g !== y && (a = a || []).push(P, y))
                : P === 'children'
                  ? (typeof y != 'string' && typeof y != 'number') || (a = a || []).push(P, '' + y)
                  : P !== 'suppressContentEditableWarning' &&
                    P !== 'suppressHydrationWarning' &&
                    (c.hasOwnProperty(P)
                      ? (y != null && P === 'onScroll' && Pe('scroll', e), a || g === y || (a = []))
                      : (a = a || []).push(P, y));
        }
        n && (a = a || []).push('style', n);
        var P = a;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (tc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Or(e, t) {
    if (!Le)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (r |= s.subtreeFlags & 14680064),
          (r |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling);
    else
      for (s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (r |= s.subtreeFlags),
          (r |= s.flags),
          (s.return = e),
          (s = s.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function _p(e, t, n) {
    var r = t.pendingProps;
    switch ((ls(t), t.tag)) {
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
        return He(t), null;
      case 1:
        return Je(t.type) && wo(), He(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Vn(),
          Te(Xe),
          Te(Be),
          xs(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Co(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), gt !== null && (Xs(gt), (gt = null)))),
          $s(e, t),
          He(t),
          null
        );
      case 5:
        ys(t);
        var s = dn(Pr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ec(e, t, n, r, s), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return He(t), null;
          }
          if (((e = dn(kt.current)), Co(t))) {
            (r = t.stateNode), (n = t.type);
            var a = t.memoizedProps;
            switch (((r[Et] = t), (r[xr] = a), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                Pe('cancel', r), Pe('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Pe('load', r);
                break;
              case 'video':
              case 'audio':
                for (s = 0; s < vr.length; s++) Pe(vr[s], r);
                break;
              case 'source':
                Pe('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Pe('error', r), Pe('load', r);
                break;
              case 'details':
                Pe('toggle', r);
                break;
              case 'input':
                Dl(r, a), Pe('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!a.multiple }), Pe('invalid', r);
                break;
              case 'textarea':
                Fl(r, a), Pe('invalid', r);
            }
            wi(n, a), (s = null);
            for (var d in a)
              if (a.hasOwnProperty(d)) {
                var g = a[d];
                d === 'children'
                  ? typeof g == 'string'
                    ? r.textContent !== g &&
                      (a.suppressHydrationWarning !== !0 && go(r.textContent, g, e),
                      (s = ['children', g]))
                    : typeof g == 'number' &&
                      r.textContent !== '' + g &&
                      (a.suppressHydrationWarning !== !0 && go(r.textContent, g, e),
                      (s = ['children', '' + g]))
                  : c.hasOwnProperty(d) && g != null && d === 'onScroll' && Pe('scroll', r);
              }
            switch (n) {
              case 'input':
                Kr(r), Al(r, a, !0);
                break;
              case 'textarea':
                Kr(r), Ul(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof a.onClick == 'function' && (r.onclick = vo);
            }
            (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (d = s.nodeType === 9 ? s : s.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Vl(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = d.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = d.createElement(n, { is: r.is }))
                    : ((e = d.createElement(n)),
                      n === 'select' &&
                        ((d = e), r.multiple ? (d.multiple = !0) : r.size && (d.size = r.size)))
                : (e = d.createElementNS(e, n)),
              (e[Et] = t),
              (e[xr] = r),
              Zu(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((d = xi(n, r)), n)) {
                case 'dialog':
                  Pe('cancel', e), Pe('close', e), (s = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  Pe('load', e), (s = r);
                  break;
                case 'video':
                case 'audio':
                  for (s = 0; s < vr.length; s++) Pe(vr[s], e);
                  s = r;
                  break;
                case 'source':
                  Pe('error', e), (s = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  Pe('error', e), Pe('load', e), (s = r);
                  break;
                case 'details':
                  Pe('toggle', e), (s = r);
                  break;
                case 'input':
                  Dl(e, r), (s = hi(e, r)), Pe('invalid', e);
                  break;
                case 'option':
                  s = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (s = $({}, r, { value: void 0 })),
                    Pe('invalid', e);
                  break;
                case 'textarea':
                  Fl(e, r), (s = vi(e, r)), Pe('invalid', e);
                  break;
                default:
                  s = r;
              }
              wi(n, s), (g = s);
              for (a in g)
                if (g.hasOwnProperty(a)) {
                  var y = g[a];
                  a === 'style'
                    ? Wl(e, y)
                    : a === 'dangerouslySetInnerHTML'
                      ? ((y = y ? y.__html : void 0), y != null && bl(e, y))
                      : a === 'children'
                        ? typeof y == 'string'
                          ? (n !== 'textarea' || y !== '') && qn(e, y)
                          : typeof y == 'number' && qn(e, '' + y)
                        : a !== 'suppressContentEditableWarning' &&
                          a !== 'suppressHydrationWarning' &&
                          a !== 'autoFocus' &&
                          (c.hasOwnProperty(a)
                            ? y != null && a === 'onScroll' && Pe('scroll', e)
                            : y != null && G(e, a, y, d));
                }
              switch (n) {
                case 'input':
                  Kr(e), Al(e, r, !1);
                  break;
                case 'textarea':
                  Kr(e), Ul(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + Se(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (a = r.value),
                    a != null
                      ? En(e, !!r.multiple, a, !1)
                      : r.defaultValue != null && En(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof s.onClick == 'function' && (e.onclick = vo);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return He(t), null;
      case 6:
        if (e && t.stateNode != null) tc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(i(166));
          if (((n = dn(Pr.current)), dn(kt.current), Co(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Et] = t),
              (a = r.nodeValue !== n) && ((e = ot), e !== null))
            )
              switch (e.tag) {
                case 3:
                  go(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    go(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Et] = t),
              (t.stateNode = r);
        }
        return He(t), null;
      case 13:
        if (
          (Te(Oe),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Le && it !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            ou(), An(), (t.flags |= 98560), (a = !1);
          else if (((a = Co(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(i(318));
              if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                throw Error(i(317));
              a[Et] = t;
            } else An(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            He(t), (a = !1);
          } else gt !== null && (Xs(gt), (gt = null)), (a = !0);
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Oe.current & 1) !== 0 ? Ae === 0 && (Ae = 3) : Zs())),
            t.updateQueue !== null && (t.flags |= 4),
            He(t),
            null);
      case 4:
        return Vn(), $s(e, t), e === null && yr(t.stateNode.containerInfo), He(t), null;
      case 10:
        return ps(t.type._context), He(t), null;
      case 17:
        return Je(t.type) && wo(), He(t), null;
      case 19:
        if ((Te(Oe), (a = t.memoizedState), a === null)) return He(t), null;
        if (((r = (t.flags & 128) !== 0), (d = a.rendering), d === null))
          if (r) Or(a, !1);
          else {
            if (Ae !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = Oo(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      Or(a, !1),
                      r = d.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (a = n),
                      (e = r),
                      (a.flags &= 14680066),
                      (d = a.alternate),
                      d === null
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = d.childLanes),
                          (a.lanes = d.lanes),
                          (a.child = d.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = d.memoizedProps),
                          (a.memoizedState = d.memoizedState),
                          (a.updateQueue = d.updateQueue),
                          (a.type = d.type),
                          (e = d.dependencies),
                          (a.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling);
                  return Ce(Oe, (Oe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ze() > Hn &&
              ((t.flags |= 128), (r = !0), Or(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Oo(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Or(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !d.alternate && !Le)
              )
                return He(t), null;
            } else
              2 * ze() - a.renderingStartTime > Hn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Or(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((n = a.last), n !== null ? (n.sibling = d) : (t.child = d), (a.last = d));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ze()),
            (t.sibling = null),
            (n = Oe.current),
            Ce(Oe, r ? (n & 1) | 2 : n & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          qs(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (st & 1073741824) !== 0 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Ip(e, t) {
    switch ((ls(t), t.tag)) {
      case 1:
        return (
          Je(t.type) && wo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Vn(),
          Te(Xe),
          Te(Be),
          xs(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ys(t), null;
      case 13:
        if ((Te(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          An();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return Te(Oe), null;
      case 4:
        return Vn(), null;
      case 10:
        return ps(t.type._context), null;
      case 22:
      case 23:
        return qs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var $o = !1,
    Ke = !1,
    zp = typeof WeakSet == 'function' ? WeakSet : Set,
    B = null;
  function Bn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Ie(e, t, r);
        }
      else n.current = null;
  }
  function Us(e, t, n) {
    try {
      n();
    } catch (r) {
      Ie(e, t, r);
    }
  }
  var nc = !1;
  function Mp(e, t) {
    if (((qi = oo), (e = Ma()), Wi(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var s = r.anchorOffset,
              a = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, a.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              g = -1,
              y = -1,
              P = 0,
              M = 0,
              D = e,
              z = null;
            t: for (;;) {
              for (
                var U;
                D !== n || (s !== 0 && D.nodeType !== 3) || (g = d + s),
                  D !== a || (r !== 0 && D.nodeType !== 3) || (y = d + r),
                  D.nodeType === 3 && (d += D.nodeValue.length),
                  (U = D.firstChild) !== null;

              )
                (z = D), (D = U);
              for (;;) {
                if (D === e) break t;
                if (
                  (z === n && ++P === s && (g = d),
                  z === a && ++M === r && (y = d),
                  (U = D.nextSibling) !== null)
                )
                  break;
                (D = z), (z = D.parentNode);
              }
              D = U;
            }
            n = g === -1 || y === -1 ? null : { start: g, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Zi = { focusedElem: e, selectionRange: n }, oo = !1, B = t; B !== null; )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (B = e);
      else
        for (; B !== null; ) {
          t = B;
          try {
            var K = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var Y = K.memoizedProps,
                      Me = K.memoizedState,
                      k = t.stateNode,
                      x = k.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Y : vt(t.type, Y),
                        Me,
                      );
                    k.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1
                    ? (C.textContent = '')
                    : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (j) {
            Ie(t, t.return, j);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (B = e);
            break;
          }
          B = t.return;
        }
    return (K = nc), (nc = !1), K;
  }
  function _r(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var s = (r = r.next);
      do {
        if ((s.tag & e) === e) {
          var a = s.destroy;
          (s.destroy = void 0), a !== void 0 && Us(t, n, a);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function Uo(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Vs(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function rc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), rc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Et], delete t[xr], delete t[rs], delete t[gp], delete t[vp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function oc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ic(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || oc(e.return)) return null;
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
  function bs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = vo));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (bs(e, t, n), e = e.sibling; e !== null; ) bs(e, t, n), (e = e.sibling);
  }
  function Bs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Bs(e, t, n), e = e.sibling; e !== null; ) Bs(e, t, n), (e = e.sibling);
  }
  var Ve = null,
    yt = !1;
  function Xt(e, t, n) {
    for (n = n.child; n !== null; ) sc(e, t, n), (n = n.sibling);
  }
  function sc(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == 'function')
      try {
        St.onCommitFiberUnmount(qr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ke || Bn(n, t);
      case 6:
        var r = Ve,
          s = yt;
        (Ve = null),
          Xt(e, t, n),
          (Ve = r),
          (yt = s),
          Ve !== null &&
            (yt
              ? ((e = Ve),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ve.removeChild(n.stateNode));
        break;
      case 18:
        Ve !== null &&
          (yt
            ? ((e = Ve),
              (n = n.stateNode),
              e.nodeType === 8 ? ns(e.parentNode, n) : e.nodeType === 1 && ns(e, n),
              ur(e))
            : ns(Ve, n.stateNode));
        break;
      case 4:
        (r = Ve),
          (s = yt),
          (Ve = n.stateNode.containerInfo),
          (yt = !0),
          Xt(e, t, n),
          (Ve = r),
          (yt = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ke && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          s = r = r.next;
          do {
            var a = s,
              d = a.destroy;
            (a = a.tag),
              d !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Us(n, t, d),
              (s = s.next);
          } while (s !== r);
        }
        Xt(e, t, n);
        break;
      case 1:
        if (!Ke && (Bn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
          } catch (g) {
            Ie(n, t, g);
          }
        Xt(e, t, n);
        break;
      case 21:
        Xt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ke = (r = Ke) || n.memoizedState !== null), Xt(e, t, n), (Ke = r))
          : Xt(e, t, n);
        break;
      default:
        Xt(e, t, n);
    }
  }
  function lc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new zp()),
        t.forEach(function (r) {
          var s = Bp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(s, s));
        });
    }
  }
  function wt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var s = n[r];
        try {
          var a = e,
            d = t,
            g = d;
          e: for (; g !== null; ) {
            switch (g.tag) {
              case 5:
                (Ve = g.stateNode), (yt = !1);
                break e;
              case 3:
                (Ve = g.stateNode.containerInfo), (yt = !0);
                break e;
              case 4:
                (Ve = g.stateNode.containerInfo), (yt = !0);
                break e;
            }
            g = g.return;
          }
          if (Ve === null) throw Error(i(160));
          sc(a, d, s), (Ve = null), (yt = !1);
          var y = s.alternate;
          y !== null && (y.return = null), (s.return = null);
        } catch (P) {
          Ie(s, t, P);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ac(t, e), (t = t.sibling);
  }
  function ac(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wt(t, e), Pt(e), r & 4)) {
          try {
            _r(3, e, e.return), Uo(3, e);
          } catch (Y) {
            Ie(e, e.return, Y);
          }
          try {
            _r(5, e, e.return);
          } catch (Y) {
            Ie(e, e.return, Y);
          }
        }
        break;
      case 1:
        wt(t, e), Pt(e), r & 512 && n !== null && Bn(n, n.return);
        break;
      case 5:
        if ((wt(t, e), Pt(e), r & 512 && n !== null && Bn(n, n.return), e.flags & 32)) {
          var s = e.stateNode;
          try {
            qn(s, '');
          } catch (Y) {
            Ie(e, e.return, Y);
          }
        }
        if (r & 4 && ((s = e.stateNode), s != null)) {
          var a = e.memoizedProps,
            d = n !== null ? n.memoizedProps : a,
            g = e.type,
            y = e.updateQueue;
          if (((e.updateQueue = null), y !== null))
            try {
              g === 'input' && a.type === 'radio' && a.name != null && jl(s, a), xi(g, d);
              var P = xi(g, a);
              for (d = 0; d < y.length; d += 2) {
                var M = y[d],
                  D = y[d + 1];
                M === 'style'
                  ? Wl(s, D)
                  : M === 'dangerouslySetInnerHTML'
                    ? bl(s, D)
                    : M === 'children'
                      ? qn(s, D)
                      : G(s, M, D, P);
              }
              switch (g) {
                case 'input':
                  mi(s, a);
                  break;
                case 'textarea':
                  $l(s, a);
                  break;
                case 'select':
                  var z = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!a.multiple;
                  var U = a.value;
                  U != null
                    ? En(s, !!a.multiple, U, !1)
                    : z !== !!a.multiple &&
                      (a.defaultValue != null
                        ? En(s, !!a.multiple, a.defaultValue, !0)
                        : En(s, !!a.multiple, a.multiple ? [] : '', !1));
              }
              s[xr] = a;
            } catch (Y) {
              Ie(e, e.return, Y);
            }
        }
        break;
      case 6:
        if ((wt(t, e), Pt(e), r & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (s = e.stateNode), (a = e.memoizedProps);
          try {
            s.nodeValue = a;
          } catch (Y) {
            Ie(e, e.return, Y);
          }
        }
        break;
      case 3:
        if ((wt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            ur(t.containerInfo);
          } catch (Y) {
            Ie(e, e.return, Y);
          }
        break;
      case 4:
        wt(t, e), Pt(e);
        break;
      case 13:
        wt(t, e),
          Pt(e),
          (s = e.child),
          s.flags & 8192 &&
            ((a = s.memoizedState !== null),
            (s.stateNode.isHidden = a),
            !a || (s.alternate !== null && s.alternate.memoizedState !== null) || (Ks = ze())),
          r & 4 && lc(e);
        break;
      case 22:
        if (
          ((M = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ke = (P = Ke) || M), wt(t, e), (Ke = P)) : wt(t, e),
          Pt(e),
          r & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null), (e.stateNode.isHidden = P) && !M && (e.mode & 1) !== 0)
          )
            for (B = e, M = e.child; M !== null; ) {
              for (D = B = M; B !== null; ) {
                switch (((z = B), (U = z.child), z.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _r(4, z, z.return);
                    break;
                  case 1:
                    Bn(z, z.return);
                    var K = z.stateNode;
                    if (typeof K.componentWillUnmount == 'function') {
                      (r = z), (n = z.return);
                      try {
                        (t = r),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount();
                      } catch (Y) {
                        Ie(r, n, Y);
                      }
                    }
                    break;
                  case 5:
                    Bn(z, z.return);
                    break;
                  case 22:
                    if (z.memoizedState !== null) {
                      fc(D);
                      continue;
                    }
                }
                U !== null ? ((U.return = z), (B = U)) : fc(D);
              }
              M = M.sibling;
            }
          e: for (M = null, D = e; ; ) {
            if (D.tag === 5) {
              if (M === null) {
                M = D;
                try {
                  (s = D.stateNode),
                    P
                      ? ((a = s.style),
                        typeof a.setProperty == 'function'
                          ? a.setProperty('display', 'none', 'important')
                          : (a.display = 'none'))
                      : ((g = D.stateNode),
                        (y = D.memoizedProps.style),
                        (d = y != null && y.hasOwnProperty('display') ? y.display : null),
                        (g.style.display = Bl('display', d)));
                } catch (Y) {
                  Ie(e, e.return, Y);
                }
              }
            } else if (D.tag === 6) {
              if (M === null)
                try {
                  D.stateNode.nodeValue = P ? '' : D.memoizedProps;
                } catch (Y) {
                  Ie(e, e.return, Y);
                }
            } else if (
              ((D.tag !== 22 && D.tag !== 23) || D.memoizedState === null || D === e) &&
              D.child !== null
            ) {
              (D.child.return = D), (D = D.child);
              continue;
            }
            if (D === e) break e;
            for (; D.sibling === null; ) {
              if (D.return === null || D.return === e) break e;
              M === D && (M = null), (D = D.return);
            }
            M === D && (M = null), (D.sibling.return = D.return), (D = D.sibling);
          }
        }
        break;
      case 19:
        wt(t, e), Pt(e), r & 4 && lc(e);
        break;
      case 21:
        break;
      default:
        wt(t, e), Pt(e);
    }
  }
  function Pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (oc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (r.tag) {
          case 5:
            var s = r.stateNode;
            r.flags & 32 && (qn(s, ''), (r.flags &= -33));
            var a = ic(e);
            Bs(e, a, s);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo,
              g = ic(e);
            bs(e, g, d);
            break;
          default:
            throw Error(i(161));
        }
      } catch (y) {
        Ie(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Dp(e, t, n) {
    (B = e), uc(e);
  }
  function uc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var s = B,
        a = s.child;
      if (s.tag === 22 && r) {
        var d = s.memoizedState !== null || $o;
        if (!d) {
          var g = s.alternate,
            y = (g !== null && g.memoizedState !== null) || Ke;
          g = $o;
          var P = Ke;
          if ((($o = d), (Ke = y) && !P))
            for (B = s; B !== null; )
              (d = B),
                (y = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? dc(s)
                  : y !== null
                    ? ((y.return = d), (B = y))
                    : dc(s);
          for (; a !== null; ) (B = a), uc(a), (a = a.sibling);
          (B = s), ($o = g), (Ke = P);
        }
        cc(e);
      } else (s.subtreeFlags & 8772) !== 0 && a !== null ? ((a.return = s), (B = a)) : cc(e);
    }
  }
  function cc(e) {
    for (; B !== null; ) {
      var t = B;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ke || Uo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ke)
                  if (n === null) r.componentDidMount();
                  else {
                    var s =
                      t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
                    r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var a = t.updateQueue;
                a !== null && fu(t, a, r);
                break;
              case 3:
                var d = t.updateQueue;
                if (d !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  fu(t, d, n);
                }
                break;
              case 5:
                var g = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = g;
                  var y = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      y.autoFocus && n.focus();
                      break;
                    case 'img':
                      y.src && (n.src = y.src);
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
                if (t.memoizedState === null) {
                  var P = t.alternate;
                  if (P !== null) {
                    var M = P.memoizedState;
                    if (M !== null) {
                      var D = M.dehydrated;
                      D !== null && ur(D);
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
                throw Error(i(163));
            }
          Ke || (t.flags & 512 && Vs(t));
        } catch (z) {
          Ie(t, t.return, z);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function fc(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function dc(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Uo(4, t);
            } catch (y) {
              Ie(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                Ie(t, s, y);
              }
            }
            var a = t.return;
            try {
              Vs(t);
            } catch (y) {
              Ie(t, a, y);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Vs(t);
            } catch (y) {
              Ie(t, d, y);
            }
        }
      } catch (y) {
        Ie(t, t.return, y);
      }
      if (t === e) {
        B = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        (g.return = t.return), (B = g);
        break;
      }
      B = t.return;
    }
  }
  var jp = Math.ceil,
    Vo = V.ReactCurrentDispatcher,
    Ws = V.ReactCurrentOwner,
    dt = V.ReactCurrentBatchConfig,
    me = 0,
    $e = null,
    De = null,
    be = 0,
    st = 0,
    Wn = Ht(0),
    Ae = 0,
    Ir = null,
    hn = 0,
    bo = 0,
    Hs = 0,
    zr = null,
    Ze = null,
    Ks = 0,
    Hn = 1 / 0,
    Dt = null,
    Bo = !1,
    Qs = null,
    Jt = null,
    Wo = !1,
    qt = null,
    Ho = 0,
    Mr = 0,
    Gs = null,
    Ko = -1,
    Qo = 0;
  function Ye() {
    return (me & 6) !== 0 ? ze() : Ko !== -1 ? Ko : (Ko = ze());
  }
  function Zt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (me & 2) !== 0 && be !== 0
        ? be & -be
        : wp.transition !== null
          ? (Qo === 0 && (Qo = ia()), Qo)
          : ((e = Ee), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ha(e.type))), e);
  }
  function xt(e, t, n, r) {
    if (50 < Mr) throw ((Mr = 0), (Gs = null), Error(i(185)));
    or(e, n, r),
      ((me & 2) === 0 || e !== $e) &&
        (e === $e && ((me & 2) === 0 && (bo |= n), Ae === 4 && en(e, be)),
        et(e, r),
        n === 1 && me === 0 && (t.mode & 1) === 0 && ((Hn = ze() + 500), So && Qt()));
  }
  function et(e, t) {
    var n = e.callbackNode;
    wd(e, t);
    var r = to(e, e === $e ? be : 0);
    if (r === 0) n !== null && na(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && na(n), t === 1))
        e.tag === 0 ? yp(hc.bind(null, e)) : Za(hc.bind(null, e)),
          hp(function () {
            (me & 6) === 0 && Qt();
          }),
          (n = null);
      else {
        switch (sa(r)) {
          case 1:
            n = Ni;
            break;
          case 4:
            n = ra;
            break;
          case 16:
            n = Jr;
            break;
          case 536870912:
            n = oa;
            break;
          default:
            n = Jr;
        }
        n = Ec(n, pc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function pc(e, t) {
    if (((Ko = -1), (Qo = 0), (me & 6) !== 0)) throw Error(i(327));
    var n = e.callbackNode;
    if (Kn() && e.callbackNode !== n) return null;
    var r = to(e, e === $e ? be : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Go(e, r);
    else {
      t = r;
      var s = me;
      me |= 2;
      var a = gc();
      ($e !== e || be !== t) && ((Dt = null), (Hn = ze() + 500), gn(e, t));
      do
        try {
          $p();
          break;
        } catch (g) {
          mc(e, g);
        }
      while (!0);
      ds(), (Vo.current = a), (me = s), De !== null ? (t = 0) : (($e = null), (be = 0), (t = Ae));
    }
    if (t !== 0) {
      if ((t === 2 && ((s = Ri(e)), s !== 0 && ((r = s), (t = Ys(e, s)))), t === 1))
        throw ((n = Ir), gn(e, 0), en(e, r), et(e, ze()), n);
      if (t === 6) en(e, r);
      else {
        if (
          ((s = e.current.alternate),
          (r & 30) === 0 &&
            !Ap(s) &&
            ((t = Go(e, r)),
            t === 2 && ((a = Ri(e)), a !== 0 && ((r = a), (t = Ys(e, a)))),
            t === 1))
        )
          throw ((n = Ir), gn(e, 0), en(e, r), et(e, ze()), n);
        switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            vn(e, Ze, Dt);
            break;
          case 3:
            if ((en(e, r), (r & 130023424) === r && ((t = Ks + 500 - ze()), 10 < t))) {
              if (to(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & r) !== r)) {
                Ye(), (e.pingedLanes |= e.suspendedLanes & s);
                break;
              }
              e.timeoutHandle = ts(vn.bind(null, e, Ze, Dt), t);
              break;
            }
            vn(e, Ze, Dt);
            break;
          case 4:
            if ((en(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var d = 31 - ht(r);
              (a = 1 << d), (d = t[d]), d > s && (s = d), (r &= ~a);
            }
            if (
              ((r = s),
              (r = ze() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * jp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ts(vn.bind(null, e, Ze, Dt), r);
              break;
            }
            vn(e, Ze, Dt);
            break;
          case 5:
            vn(e, Ze, Dt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return et(e, ze()), e.callbackNode === n ? pc.bind(null, e) : null;
  }
  function Ys(e, t) {
    var n = zr;
    return (
      e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
      (e = Go(e, t)),
      e !== 2 && ((t = Ze), (Ze = n), t !== null && Xs(t)),
      e
    );
  }
  function Xs(e) {
    Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
  }
  function Ap(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var s = n[r],
              a = s.getSnapshot;
            s = s.value;
            try {
              if (!mt(a(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function en(e, t) {
    for (
      t &= ~Hs, t &= ~bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ht(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function hc(e) {
    if ((me & 6) !== 0) throw Error(i(327));
    Kn();
    var t = to(e, 0);
    if ((t & 1) === 0) return et(e, ze()), null;
    var n = Go(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ri(e);
      r !== 0 && ((t = r), (n = Ys(e, r)));
    }
    if (n === 1) throw ((n = Ir), gn(e, 0), en(e, t), et(e, ze()), n);
    if (n === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      vn(e, Ze, Dt),
      et(e, ze()),
      null
    );
  }
  function Js(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      (me = n), me === 0 && ((Hn = ze() + 500), So && Qt());
    }
  }
  function mn(e) {
    qt !== null && qt.tag === 0 && (me & 6) === 0 && Kn();
    var t = me;
    me |= 1;
    var n = dt.transition,
      r = Ee;
    try {
      if (((dt.transition = null), (Ee = 1), e)) return e();
    } finally {
      (Ee = r), (dt.transition = n), (me = t), (me & 6) === 0 && Qt();
    }
  }
  function qs() {
    (st = Wn.current), Te(Wn);
  }
  function gn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), pp(n)), De !== null))
      for (n = De.return; n !== null; ) {
        var r = n;
        switch ((ls(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && wo();
            break;
          case 3:
            Vn(), Te(Xe), Te(Be), xs();
            break;
          case 5:
            ys(r);
            break;
          case 4:
            Vn();
            break;
          case 13:
            Te(Oe);
            break;
          case 19:
            Te(Oe);
            break;
          case 10:
            ps(r.type._context);
            break;
          case 22:
          case 23:
            qs();
        }
        n = n.return;
      }
    if (
      (($e = e),
      (De = e = tn(e.current, null)),
      (be = st = t),
      (Ae = 0),
      (Ir = null),
      (Hs = bo = hn = 0),
      (Ze = zr = null),
      fn !== null)
    ) {
      for (t = 0; t < fn.length; t++)
        if (((n = fn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var s = r.next,
            a = n.pending;
          if (a !== null) {
            var d = a.next;
            (a.next = s), (r.next = d);
          }
          n.pending = r;
        }
      fn = null;
    }
    return e;
  }
  function mc(e, t) {
    do {
      var n = De;
      try {
        if ((ds(), (_o.current = Do), Io)) {
          for (var r = _e.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), (r = r.next);
          }
          Io = !1;
        }
        if (
          ((pn = 0),
          (Fe = je = _e = null),
          (Tr = !1),
          (Nr = 0),
          (Ws.current = null),
          n === null || n.return === null)
        ) {
          (Ae = 1), (Ir = t), (De = null);
          break;
        }
        e: {
          var a = e,
            d = n.return,
            g = n,
            y = t;
          if (
            ((t = be),
            (g.flags |= 32768),
            y !== null && typeof y == 'object' && typeof y.then == 'function')
          ) {
            var P = y,
              M = g,
              D = M.tag;
            if ((M.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
              var z = M.alternate;
              z
                ? ((M.updateQueue = z.updateQueue),
                  (M.memoizedState = z.memoizedState),
                  (M.lanes = z.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null));
            }
            var U = Uu(d);
            if (U !== null) {
              (U.flags &= -257), Vu(U, d, g, a, t), U.mode & 1 && $u(a, P, t), (t = U), (y = P);
              var K = t.updateQueue;
              if (K === null) {
                var Y = new Set();
                Y.add(y), (t.updateQueue = Y);
              } else K.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                $u(a, P, t), Zs();
                break e;
              }
              y = Error(i(426));
            }
          } else if (Le && g.mode & 1) {
            var Me = Uu(d);
            if (Me !== null) {
              (Me.flags & 65536) === 0 && (Me.flags |= 256), Vu(Me, d, g, a, t), cs(bn(y, g));
              break e;
            }
          }
          (a = y = bn(y, g)), Ae !== 4 && (Ae = 2), zr === null ? (zr = [a]) : zr.push(a), (a = d);
          do {
            switch (a.tag) {
              case 3:
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var k = Au(a, y, t);
                cu(a, k);
                break e;
              case 1:
                g = y;
                var x = a.type,
                  C = a.stateNode;
                if (
                  (a.flags & 128) === 0 &&
                  (typeof x.getDerivedStateFromError == 'function' ||
                    (C !== null &&
                      typeof C.componentDidCatch == 'function' &&
                      (Jt === null || !Jt.has(C))))
                ) {
                  (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                  var j = Fu(a, g, t);
                  cu(a, j);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        yc(n);
      } catch (X) {
        (t = X), De === n && n !== null && (De = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function gc() {
    var e = Vo.current;
    return (Vo.current = Do), e === null ? Do : e;
  }
  function Zs() {
    (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
      $e === null || ((hn & 268435455) === 0 && (bo & 268435455) === 0) || en($e, be);
  }
  function Go(e, t) {
    var n = me;
    me |= 2;
    var r = gc();
    ($e !== e || be !== t) && ((Dt = null), gn(e, t));
    do
      try {
        Fp();
        break;
      } catch (s) {
        mc(e, s);
      }
    while (!0);
    if ((ds(), (me = n), (Vo.current = r), De !== null)) throw Error(i(261));
    return ($e = null), (be = 0), Ae;
  }
  function Fp() {
    for (; De !== null; ) vc(De);
  }
  function $p() {
    for (; De !== null && !cd(); ) vc(De);
  }
  function vc(e) {
    var t = Sc(e.alternate, e, st);
    (e.memoizedProps = e.pendingProps), t === null ? yc(e) : (De = t), (Ws.current = null);
  }
  function yc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = _p(n, t, st)), n !== null)) {
          De = n;
          return;
        }
      } else {
        if (((n = Ip(n, t)), n !== null)) {
          (n.flags &= 32767), (De = n);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ae = 6), (De = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    Ae === 0 && (Ae = 5);
  }
  function vn(e, t, n) {
    var r = Ee,
      s = dt.transition;
    try {
      (dt.transition = null), (Ee = 1), Up(e, t, n, r);
    } finally {
      (dt.transition = s), (Ee = r);
    }
    return null;
  }
  function Up(e, t, n, r) {
    do Kn();
    while (qt !== null);
    if ((me & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var a = n.lanes | n.childLanes;
    if (
      (xd(e, a),
      e === $e && ((De = $e = null), (be = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Wo ||
        ((Wo = !0),
        Ec(Jr, function () {
          return Kn(), null;
        })),
      (a = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || a)
    ) {
      (a = dt.transition), (dt.transition = null);
      var d = Ee;
      Ee = 1;
      var g = me;
      (me |= 4),
        (Ws.current = null),
        Mp(e, n),
        ac(n, e),
        sp(Zi),
        (oo = !!qi),
        (Zi = qi = null),
        (e.current = n),
        Dp(n),
        fd(),
        (me = g),
        (Ee = d),
        (dt.transition = a);
    } else e.current = n;
    if (
      (Wo && ((Wo = !1), (qt = e), (Ho = s)),
      (a = e.pendingLanes),
      a === 0 && (Jt = null),
      hd(n.stateNode),
      et(e, ze()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
    if (Bo) throw ((Bo = !1), (e = Qs), (Qs = null), e);
    return (
      (Ho & 1) !== 0 && e.tag !== 0 && Kn(),
      (a = e.pendingLanes),
      (a & 1) !== 0 ? (e === Gs ? Mr++ : ((Mr = 0), (Gs = e))) : (Mr = 0),
      Qt(),
      null
    );
  }
  function Kn() {
    if (qt !== null) {
      var e = sa(Ho),
        t = dt.transition,
        n = Ee;
      try {
        if (((dt.transition = null), (Ee = 16 > e ? 16 : e), qt === null)) var r = !1;
        else {
          if (((e = qt), (qt = null), (Ho = 0), (me & 6) !== 0)) throw Error(i(331));
          var s = me;
          for (me |= 4, B = e.current; B !== null; ) {
            var a = B,
              d = a.child;
            if ((B.flags & 16) !== 0) {
              var g = a.deletions;
              if (g !== null) {
                for (var y = 0; y < g.length; y++) {
                  var P = g[y];
                  for (B = P; B !== null; ) {
                    var M = B;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _r(8, M, a);
                    }
                    var D = M.child;
                    if (D !== null) (D.return = M), (B = D);
                    else
                      for (; B !== null; ) {
                        M = B;
                        var z = M.sibling,
                          U = M.return;
                        if ((rc(M), M === P)) {
                          B = null;
                          break;
                        }
                        if (z !== null) {
                          (z.return = U), (B = z);
                          break;
                        }
                        B = U;
                      }
                  }
                }
                var K = a.alternate;
                if (K !== null) {
                  var Y = K.child;
                  if (Y !== null) {
                    K.child = null;
                    do {
                      var Me = Y.sibling;
                      (Y.sibling = null), (Y = Me);
                    } while (Y !== null);
                  }
                }
                B = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && d !== null) (d.return = a), (B = d);
            else
              e: for (; B !== null; ) {
                if (((a = B), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(9, a, a.return);
                  }
                var k = a.sibling;
                if (k !== null) {
                  (k.return = a.return), (B = k);
                  break e;
                }
                B = a.return;
              }
          }
          var x = e.current;
          for (B = x; B !== null; ) {
            d = B;
            var C = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && C !== null) (C.return = d), (B = C);
            else
              e: for (d = x; B !== null; ) {
                if (((g = B), (g.flags & 2048) !== 0))
                  try {
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Uo(9, g);
                    }
                  } catch (X) {
                    Ie(g, g.return, X);
                  }
                if (g === d) {
                  B = null;
                  break e;
                }
                var j = g.sibling;
                if (j !== null) {
                  (j.return = g.return), (B = j);
                  break e;
                }
                B = g.return;
              }
          }
          if (((me = s), Qt(), St && typeof St.onPostCommitFiberRoot == 'function'))
            try {
              St.onPostCommitFiberRoot(qr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Ee = n), (dt.transition = t);
      }
    }
    return !1;
  }
  function wc(e, t, n) {
    (t = bn(n, t)),
      (t = Au(e, t, 1)),
      (e = Yt(e, t, 1)),
      (t = Ye()),
      e !== null && (or(e, 1, t), et(e, t));
  }
  function Ie(e, t, n) {
    if (e.tag === 3) wc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (Jt === null || !Jt.has(r)))
          ) {
            (e = bn(n, e)),
              (e = Fu(t, e, 1)),
              (t = Yt(t, e, 1)),
              (e = Ye()),
              t !== null && (or(t, 1, e), et(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      $e === e &&
        (be & n) === n &&
        (Ae === 4 || (Ae === 3 && (be & 130023424) === be && 500 > ze() - Ks)
          ? gn(e, 0)
          : (Hs |= n)),
      et(e, t);
  }
  function xc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = eo), (eo <<= 1), (eo & 130023424) === 0 && (eo = 4194304)));
    var n = Ye();
    (e = It(e, t)), e !== null && (or(e, t, n), et(e, n));
  }
  function bp(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), xc(e, n);
  }
  function Bp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    r !== null && r.delete(t), xc(e, n);
  }
  var Sc;
  Sc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) qe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (qe = !1), Op(e, t, n);
        qe = (e.flags & 131072) !== 0;
      }
    else (qe = !1), Le && (t.flags & 1048576) !== 0 && eu(t, ko, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Fo(e, t), (e = t.pendingProps);
        var s = Mn(t, Be.current);
        Un(t, n), (s = ks(null, t, r, e, s, n));
        var a = Cs();
        return (
          (t.flags |= 1),
          typeof s == 'object' &&
          s !== null &&
          typeof s.render == 'function' &&
          s.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Je(r) ? ((a = !0), xo(t)) : (a = !1),
              (t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
              gs(t),
              (s.updater = jo),
              (t.stateNode = s),
              (s._reactInternals = t),
              Os(t, r, e, n),
              (t = Ms(null, t, r, !0, a, n)))
            : ((t.tag = 0), Le && a && ss(t), Ge(null, t, s, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Fo(e, t),
            (e = t.pendingProps),
            (s = r._init),
            (r = s(r._payload)),
            (t.type = r),
            (s = t.tag = Hp(r)),
            (e = vt(r, e)),
            s)
          ) {
            case 0:
              t = zs(null, t, r, e, n);
              break e;
            case 1:
              t = Qu(null, t, r, e, n);
              break e;
            case 11:
              t = bu(null, t, r, e, n);
              break e;
            case 14:
              t = Bu(null, t, r, vt(r.type, e), n);
              break e;
          }
          throw Error(i(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : vt(r, s)),
          zs(e, t, r, s, n)
        );
      case 1:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : vt(r, s)),
          Qu(e, t, r, s, n)
        );
      case 3:
        e: {
          if ((Gu(t), e === null)) throw Error(i(387));
          (r = t.pendingProps), (a = t.memoizedState), (s = a.element), uu(e, t), Lo(t, r, null, n);
          var d = t.memoizedState;
          if (((r = d.element), a.isDehydrated))
            if (
              ((a = {
                element: r,
                isDehydrated: !1,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              (s = bn(Error(i(423)), t)), (t = Yu(e, t, r, n, s));
              break e;
            } else if (r !== s) {
              (s = bn(Error(i(424)), t)), (t = Yu(e, t, r, n, s));
              break e;
            } else
              for (
                it = Wt(t.stateNode.containerInfo.firstChild),
                  ot = t,
                  Le = !0,
                  gt = null,
                  n = lu(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((An(), r === s)) {
              t = Mt(e, t, n);
              break e;
            }
            Ge(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          du(t),
          e === null && us(t),
          (r = t.type),
          (s = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (d = s.children),
          es(r, s) ? (d = null) : a !== null && es(r, a) && (t.flags |= 32),
          Ku(e, t),
          Ge(e, t, d, n),
          t.child
        );
      case 6:
        return e === null && us(t), null;
      case 13:
        return Xu(e, t, n);
      case 4:
        return (
          vs(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Fn(t, null, r, n)) : Ge(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : vt(r, s)),
          bu(e, t, r, s, n)
        );
      case 7:
        return Ge(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (s = t.pendingProps),
            (a = t.memoizedProps),
            (d = s.value),
            Ce(To, r._currentValue),
            (r._currentValue = d),
            a !== null)
          )
            if (mt(a.value, d)) {
              if (a.children === s.children && !Xe.current) {
                t = Mt(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var g = a.dependencies;
                if (g !== null) {
                  d = a.child;
                  for (var y = g.firstContext; y !== null; ) {
                    if (y.context === r) {
                      if (a.tag === 1) {
                        (y = zt(-1, n & -n)), (y.tag = 2);
                        var P = a.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var M = P.pending;
                          M === null ? (y.next = y) : ((y.next = M.next), (M.next = y)),
                            (P.pending = y);
                        }
                      }
                      (a.lanes |= n),
                        (y = a.alternate),
                        y !== null && (y.lanes |= n),
                        hs(a.return, n, t),
                        (g.lanes |= n);
                      break;
                    }
                    y = y.next;
                  }
                } else if (a.tag === 10) d = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (((d = a.return), d === null)) throw Error(i(341));
                  (d.lanes |= n),
                    (g = d.alternate),
                    g !== null && (g.lanes |= n),
                    hs(d, n, t),
                    (d = a.sibling);
                } else d = a.child;
                if (d !== null) d.return = a;
                else
                  for (d = a; d !== null; ) {
                    if (d === t) {
                      d = null;
                      break;
                    }
                    if (((a = d.sibling), a !== null)) {
                      (a.return = d.return), (d = a);
                      break;
                    }
                    d = d.return;
                  }
                a = d;
              }
          Ge(e, t, s.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (s = t.type),
          (r = t.pendingProps.children),
          Un(t, n),
          (s = ct(s)),
          (r = r(s)),
          (t.flags |= 1),
          Ge(e, t, r, n),
          t.child
        );
      case 14:
        return (r = t.type), (s = vt(r, t.pendingProps)), (s = vt(r.type, s)), Bu(e, t, r, s, n);
      case 15:
        return Wu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : vt(r, s)),
          Fo(e, t),
          (t.tag = 1),
          Je(r) ? ((e = !0), xo(t)) : (e = !1),
          Un(t, n),
          Du(t, r, s),
          Os(t, r, s, n),
          Ms(null, t, r, !0, e, n)
        );
      case 19:
        return qu(e, t, n);
      case 22:
        return Hu(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Ec(e, t) {
    return ta(e, t);
  }
  function Wp(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function pt(e, t, n, r) {
    return new Wp(e, t, n, r);
  }
  function el(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Hp(e) {
    if (typeof e == 'function') return el(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ae)) return 11;
      if (e === xe) return 14;
    }
    return 2;
  }
  function tn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = pt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Yo(e, t, n, r, s, a) {
    var d = 2;
    if (((r = e), typeof e == 'function')) el(e) && (d = 1);
    else if (typeof e == 'string') d = 5;
    else
      e: switch (e) {
        case J:
          return yn(n.children, s, a, t);
        case ie:
          (d = 8), (s |= 8);
          break;
        case se:
          return (e = pt(12, n, t, s | 2)), (e.elementType = se), (e.lanes = a), e;
        case ge:
          return (e = pt(13, n, t, s)), (e.elementType = ge), (e.lanes = a), e;
        case H:
          return (e = pt(19, n, t, s)), (e.elementType = H), (e.lanes = a), e;
        case ce:
          return Xo(n, s, a, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case re:
                d = 10;
                break e;
              case we:
                d = 9;
                break e;
              case ae:
                d = 11;
                break e;
              case xe:
                d = 14;
                break e;
              case de:
                (d = 16), (r = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ''));
      }
    return (t = pt(d, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = a), t;
  }
  function yn(e, t, n, r) {
    return (e = pt(7, e, r, t)), (e.lanes = n), e;
  }
  function Xo(e, t, n, r) {
    return (
      (e = pt(22, e, r, t)),
      (e.elementType = ce),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function tl(e, t, n) {
    return (e = pt(6, e, null, t)), (e.lanes = n), e;
  }
  function nl(e, t, n) {
    return (
      (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Kp(e, t, n, r, s) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Li(0)),
      (this.expirationTimes = Li(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Li(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null);
  }
  function rl(e, t, n, r, s, a, d, g, y) {
    return (
      (e = new Kp(e, t, n, g, y)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = pt(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      gs(a),
      e
    );
  }
  function Qp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ne,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function kc(e) {
    if (!e) return Kt;
    e = e._reactInternals;
    e: {
      if (sn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Je(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Je(n)) return Ja(e, n, t);
    }
    return t;
  }
  function Cc(e, t, n, r, s, a, d, g, y) {
    return (
      (e = rl(n, r, !0, e, s, a, d, g, y)),
      (e.context = kc(null)),
      (n = e.current),
      (r = Ye()),
      (s = Zt(n)),
      (a = zt(r, s)),
      (a.callback = t ?? null),
      Yt(n, a, s),
      (e.current.lanes = s),
      or(e, s, r),
      et(e, r),
      e
    );
  }
  function Jo(e, t, n, r) {
    var s = t.current,
      a = Ye(),
      d = Zt(s);
    return (
      (n = kc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = zt(a, d)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Yt(s, t, d)),
      e !== null && (xt(e, s, d, a), Ro(e, s, d)),
      d
    );
  }
  function qo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Pc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ol(e, t) {
    Pc(e, t), (e = e.alternate) && Pc(e, t);
  }
  function Gp() {
    return null;
  }
  var Tc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function il(e) {
    this._internalRoot = e;
  }
  (Zo.prototype.render = il.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Jo(e, t, null, null);
    }),
    (Zo.prototype.unmount = il.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          mn(function () {
            Jo(null, e, null, null);
          }),
            (t[Rt] = null);
        }
      });
  function Zo(e) {
    this._internalRoot = e;
  }
  Zo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ua();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
      Vt.splice(n, 0, e), n === 0 && da(e);
    }
  };
  function sl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ei(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Nc() {}
  function Yp(e, t, n, r, s) {
    if (s) {
      if (typeof r == 'function') {
        var a = r;
        r = function () {
          var P = qo(d);
          a.call(P);
        };
      }
      var d = Cc(t, r, e, 0, null, !1, !1, '', Nc);
      return (
        (e._reactRootContainer = d),
        (e[Rt] = d.current),
        yr(e.nodeType === 8 ? e.parentNode : e),
        mn(),
        d
      );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof r == 'function') {
      var g = r;
      r = function () {
        var P = qo(y);
        g.call(P);
      };
    }
    var y = rl(e, 0, !1, null, null, !1, !1, '', Nc);
    return (
      (e._reactRootContainer = y),
      (e[Rt] = y.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      mn(function () {
        Jo(t, y, n, r);
      }),
      y
    );
  }
  function ti(e, t, n, r, s) {
    var a = n._reactRootContainer;
    if (a) {
      var d = a;
      if (typeof s == 'function') {
        var g = s;
        s = function () {
          var y = qo(d);
          g.call(y);
        };
      }
      Jo(t, d, e, s);
    } else d = Yp(n, t, e, s, r);
    return qo(d);
  }
  (la = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = rr(t.pendingLanes);
          n !== 0 && (Oi(t, n | 1), et(t, ze()), (me & 6) === 0 && ((Hn = ze() + 500), Qt()));
        }
        break;
      case 13:
        mn(function () {
          var r = It(e, 1);
          if (r !== null) {
            var s = Ye();
            xt(r, e, 1, s);
          }
        }),
          ol(e, 1);
    }
  }),
    (_i = function (e) {
      if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
          var n = Ye();
          xt(t, e, 134217728, n);
        }
        ol(e, 134217728);
      }
    }),
    (aa = function (e) {
      if (e.tag === 13) {
        var t = Zt(e),
          n = It(e, t);
        if (n !== null) {
          var r = Ye();
          xt(n, e, t, r);
        }
        ol(e, t);
      }
    }),
    (ua = function () {
      return Ee;
    }),
    (ca = function (e, t) {
      var n = Ee;
      try {
        return (Ee = e), t();
      } finally {
        Ee = n;
      }
    }),
    (ki = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((mi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var s = yo(r);
                if (!s) throw Error(i(90));
                Ml(r), mi(r, s);
              }
            }
          }
          break;
        case 'textarea':
          $l(e, n);
          break;
        case 'select':
          (t = n.value), t != null && En(e, !!n.multiple, t, !1);
      }
    }),
    (Gl = Js),
    (Yl = mn);
  var Xp = { usingClientEntryPoint: !1, Events: [Sr, In, yo, Kl, Ql, Js] },
    Dr = {
      findFiberByHostInstance: ln,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Jp = {
      bundleType: Dr.bundleType,
      version: Dr.version,
      rendererPackageName: Dr.rendererPackageName,
      rendererConfig: Dr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: V.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Zl(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Dr.findFiberByHostInstance || Gp,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ni.isDisabled && ni.supportsFiber)
      try {
        (qr = ni.inject(Jp)), (St = ni);
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp),
    (tt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!sl(t)) throw Error(i(200));
      return Qp(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!sl(e)) throw Error(i(299));
      var n = !1,
        r = '',
        s = Tc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = rl(e, 1, !1, null, null, n, !1, r, s)),
        (e[Rt] = t.current),
        yr(e.nodeType === 8 ? e.parentNode : e),
        new il(t)
      );
    }),
    (tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(i(188))
          : ((e = Object.keys(e).join(',')), Error(i(268, e)));
      return (e = Zl(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (tt.flushSync = function (e) {
      return mn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!ei(t)) throw Error(i(200));
      return ti(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!sl(e)) throw Error(i(405));
      var r = (n != null && n.hydratedSources) || null,
        s = !1,
        a = '',
        d = Tc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (t = Cc(t, null, e, 1, n ?? null, s, !1, a, d)),
        (e[Rt] = t.current),
        yr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (s = n._getVersion),
            (s = s(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, s])
              : t.mutableSourceEagerHydrationData.push(n, s);
      return new Zo(t);
    }),
    (tt.render = function (e, t, n) {
      if (!ei(t)) throw Error(i(200));
      return ti(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!ei(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (mn(function () {
            ti(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Rt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = Js),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ei(n)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return ti(e, t, n, !1, r);
    }),
    (tt.version = '18.3.1-next-f1338f8080-20240426'),
    tt
  );
}
var Dc;
function cf() {
  if (Dc) return ul.exports;
  Dc = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), (ul.exports = sh()), ul.exports;
}
var jc;
function lh() {
  if (jc) return ri;
  jc = 1;
  var l = cf();
  return (ri.createRoot = l.createRoot), (ri.hydrateRoot = l.hydrateRoot), ri;
}
var ah = lh();
const uh = [
    {
      title: 'IRM',
      description: 'Imagerie par Résonance Magnétique pour le diagnostic précis des tissus mous.',
      icon: 'brain',
    },
    {
      title: 'Scanner (CT)',
      description: 'Tomodensitométrie pour une visualisation en coupe des structures internes.',
      icon: 'cpu',
    },
    {
      title: 'Radiologie Numérique',
      description: 'Radiographies numériques de haute qualité avec faible dose de rayons.',
      icon: 'camera',
    },
    {
      title: 'Échographie',
      description: "Imagerie par ultrasons pour l'examen des tissus mous et organes internes.",
      icon: 'waveform',
    },
    {
      title: 'Mammographie',
      description: 'Dépistage et diagnostic des affections mammaires.',
      icon: 'scan-face',
    },
    {
      title: 'Ostéodensitométrie',
      description: 'Mesure de la densité osseuse pour diagnostiquer l’ostéoporose.',
      icon: 'bone',
    },
  ],
  ch = (l, o, i, u) => {
    var f, p, h, v;
    const c = [i, { code: o, ...(u || {}) }];
    if (
      (p = (f = l == null ? void 0 : l.services) == null ? void 0 : f.logger) != null &&
      p.forward
    )
      return l.services.logger.forward(c, 'warn', 'react-i18next::', !0);
    wn(c[0]) && (c[0] = `react-i18next:: ${c[0]}`),
      (v = (h = l == null ? void 0 : l.services) == null ? void 0 : h.logger) != null && v.warn
        ? l.services.logger.warn(...c)
        : console != null && console.warn && console.warn(...c);
  },
  Ac = {},
  vl = (l, o, i, u) => {
    (wn(i) && Ac[i]) || (wn(i) && (Ac[i] = new Date()), ch(l, o, i, u));
  },
  ff = (l, o) => () => {
    if (l.isInitialized) o();
    else {
      const i = () => {
        setTimeout(() => {
          l.off('initialized', i);
        }, 0),
          o();
      };
      l.on('initialized', i);
    }
  },
  yl = (l, o, i) => {
    l.loadNamespaces(o, ff(l, i));
  },
  Fc = (l, o, i, u) => {
    if ((wn(i) && (i = [i]), l.options.preload && l.options.preload.indexOf(o) > -1))
      return yl(l, i, u);
    i.forEach(c => {
      l.options.ns.indexOf(c) < 0 && l.options.ns.push(c);
    }),
      l.loadLanguages(o, ff(l, u));
  },
  fh = (l, o, i = {}) =>
    !o.languages || !o.languages.length
      ? (vl(o, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
          languages: o.languages,
        }),
        !0)
      : o.hasLoadedNamespace(l, {
          lng: i.lng,
          precheck: (u, c) => {
            var f;
            if (
              ((f = i.bindI18n) == null ? void 0 : f.indexOf('languageChanging')) > -1 &&
              u.services.backendConnector.backend &&
              u.isLanguageChangingTo &&
              !c(u.isLanguageChangingTo, l)
            )
              return !1;
          },
        }),
  wn = l => typeof l == 'string',
  dh = l => typeof l == 'object' && l !== null,
  ph =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  hh = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  mh = l => hh[l],
  gh = l => l.replace(ph, mh);
let wl = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: gh,
};
const vh = (l = {}) => {
    wl = { ...wl, ...l };
  },
  yh = () => wl;
let df;
const wh = l => {
    df = l;
  },
  xh = () => df,
  Sh = {
    type: '3rdParty',
    init(l) {
      vh(l.options.react), wh(l);
    },
  },
  Eh = R.createContext();
class kh {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(o) {
    o.forEach(i => {
      this.usedNamespaces[i] || (this.usedNamespaces[i] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Ch = (l, o) => {
    const i = R.useRef();
    return (
      R.useEffect(() => {
        i.current = l;
      }, [l, o]),
      i.current
    );
  },
  pf = (l, o, i, u) => l.getFixedT(o, i, u),
  Ph = (l, o, i, u) => R.useCallback(pf(l, o, i, u), [l, o, i, u]),
  Th = (l, o = {}) => {
    var V, te, ne, J;
    const { i18n: i } = o,
      { i18n: u, defaultNS: c } = R.useContext(Eh) || {},
      f = i || u || xh();
    if ((f && !f.reportNamespaces && (f.reportNamespaces = new kh()), !f)) {
      vl(
        f,
        'NO_I18NEXT_INSTANCE',
        'useTranslation: You will need to pass in an i18next instance by using initReactI18next',
      );
      const ie = (re, we) =>
          wn(we)
            ? we
            : dh(we) && wn(we.defaultValue)
              ? we.defaultValue
              : Array.isArray(re)
                ? re[re.length - 1]
                : re,
        se = [ie, {}, !1];
      return (se.t = ie), (se.i18n = {}), (se.ready = !1), se;
    }
    (V = f.options.react) != null &&
      V.wait &&
      vl(
        f,
        'DEPRECATED_OPTION',
        'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
      );
    const p = { ...yh(), ...f.options.react, ...o },
      { useSuspense: h, keyPrefix: v } = p;
    let m = c || ((te = f.options) == null ? void 0 : te.defaultNS);
    (m = wn(m) ? [m] : m || ['translation']),
      (J = (ne = f.reportNamespaces).addUsedNamespaces) == null || J.call(ne, m);
    const S = (f.isInitialized || f.initializedStoreOnce) && m.every(ie => fh(ie, f, p)),
      E = Ph(f, o.lng || null, p.nsMode === 'fallback' ? m : m[0], v),
      T = () => E,
      I = () => pf(f, o.lng || null, p.nsMode === 'fallback' ? m : m[0], v),
      [_, L] = R.useState(T);
    let N = m.join();
    o.lng && (N = `${o.lng}${N}`);
    const b = Ch(N),
      F = R.useRef(!0);
    R.useEffect(() => {
      const { bindI18n: ie, bindI18nStore: se } = p;
      (F.current = !0),
        !S &&
          !h &&
          (o.lng
            ? Fc(f, o.lng, m, () => {
                F.current && L(I);
              })
            : yl(f, m, () => {
                F.current && L(I);
              })),
        S && b && b !== N && F.current && L(I);
      const re = () => {
        F.current && L(I);
      };
      return (
        ie && (f == null || f.on(ie, re)),
        se && (f == null || f.store.on(se, re)),
        () => {
          (F.current = !1),
            f && (ie == null || ie.split(' ').forEach(we => f.off(we, re))),
            se && f && se.split(' ').forEach(we => f.store.off(we, re));
        }
      );
    }, [f, N]),
      R.useEffect(() => {
        F.current && S && L(T);
      }, [f, v, S]);
    const G = [_, f, S];
    if (((G.t = _), (G.i18n = f), (G.ready = S), S || (!S && !h))) return G;
    throw new Promise(ie => {
      o.lng ? Fc(f, o.lng, m, () => ie()) : yl(f, m, () => ie());
    });
  },
  Nh = () => {
    const { t: l, i18n: o } = Th();
    return Q.jsxs('section', {
      className: 'py-12 px-4 max-w-7xl mx-auto',
      children: [
        Q.jsx('h1', {
          className: 'text-3xl font-bold text-center mb-10',
          children: l('services.title', 'Nos Services'),
        }),
        Q.jsx('div', {
          className: 'grid gap-8 sm:grid-cols-2 lg:grid-cols-3',
          children: uh.map(i =>
            Q.jsxs(
              'div',
              {
                className:
                  'border rounded-lg shadow hover:shadow-lg transition bg-white overflow-hidden',
                children: [
                  Q.jsx('img', {
                    src: i.image,
                    alt: i.title,
                    className: 'w-full h-48 object-cover',
                  }),
                  Q.jsxs('div', {
                    className: 'p-4',
                    children: [
                      Q.jsx('h2', {
                        className: 'text-xl font-semibold mb-2',
                        children: l(`services.items.${i.id}.title`, i.title),
                      }),
                      Q.jsx('p', {
                        className: 'text-gray-600 text-sm',
                        children: l(`services.items.${i.id}.description`, ''),
                      }),
                    ],
                  }),
                ],
              },
              i.id,
            ),
          ),
        }),
      ],
    });
  },
  Rh = 1,
  Lh = 1e6;
let dl = 0;
function Oh() {
  return (dl = (dl + 1) % Number.MAX_SAFE_INTEGER), dl.toString();
}
const pl = new Map(),
  $c = l => {
    if (pl.has(l)) return;
    const o = setTimeout(() => {
      pl.delete(l), Ur({ type: 'REMOVE_TOAST', toastId: l });
    }, Lh);
    pl.set(l, o);
  },
  _h = (l, o) => {
    switch (o.type) {
      case 'ADD_TOAST':
        return { ...l, toasts: [o.toast, ...l.toasts].slice(0, Rh) };
      case 'UPDATE_TOAST':
        return {
          ...l,
          toasts: l.toasts.map(i => (i.id === o.toast.id ? { ...i, ...o.toast } : i)),
        };
      case 'DISMISS_TOAST': {
        const { toastId: i } = o;
        return (
          i
            ? $c(i)
            : l.toasts.forEach(u => {
                $c(u.id);
              }),
          { ...l, toasts: l.toasts.map(u => (u.id === i || i === void 0 ? { ...u, open: !1 } : u)) }
        );
      }
      case 'REMOVE_TOAST':
        return o.toastId === void 0
          ? { ...l, toasts: [] }
          : { ...l, toasts: l.toasts.filter(i => i.id !== o.toastId) };
    }
  },
  li = [];
let ai = { toasts: [] };
function Ur(l) {
  (ai = _h(ai, l)),
    li.forEach(o => {
      o(ai);
    });
}
function Ih({ ...l }) {
  const o = Oh(),
    i = c => Ur({ type: 'UPDATE_TOAST', toast: { ...c, id: o } }),
    u = () => Ur({ type: 'DISMISS_TOAST', toastId: o });
  return (
    Ur({
      type: 'ADD_TOAST',
      toast: {
        ...l,
        id: o,
        open: !0,
        onOpenChange: c => {
          c || u();
        },
      },
    }),
    { id: o, dismiss: u, update: i }
  );
}
function zh() {
  const [l, o] = R.useState(ai);
  return (
    R.useEffect(
      () => (
        li.push(o),
        () => {
          const i = li.indexOf(o);
          i > -1 && li.splice(i, 1);
        }
      ),
      [l],
    ),
    { ...l, toast: Ih, dismiss: i => Ur({ type: 'DISMISS_TOAST', toastId: i }) }
  );
}
var Rl = cf();
const Mh = uf(Rl);
function lt(l, o, { checkForDefaultPrevented: i = !0 } = {}) {
  return function (c) {
    if ((l == null || l(c), i === !1 || !c.defaultPrevented)) return o == null ? void 0 : o(c);
  };
}
function Uc(l, o) {
  if (typeof l == 'function') return l(o);
  l != null && (l.current = o);
}
function hf(...l) {
  return o => {
    let i = !1;
    const u = l.map(c => {
      const f = Uc(c, o);
      return !i && typeof f == 'function' && (i = !0), f;
    });
    if (i)
      return () => {
        for (let c = 0; c < u.length; c++) {
          const f = u[c];
          typeof f == 'function' ? f() : Uc(l[c], null);
        }
      };
  };
}
function xn(...l) {
  return R.useCallback(hf(...l), l);
}
function mf(l, o = []) {
  let i = [];
  function u(f, p) {
    const h = R.createContext(p),
      v = i.length;
    i = [...i, p];
    const m = E => {
      var b;
      const { scope: T, children: I, ..._ } = E,
        L = ((b = T == null ? void 0 : T[l]) == null ? void 0 : b[v]) || h,
        N = R.useMemo(() => _, Object.values(_));
      return Q.jsx(L.Provider, { value: N, children: I });
    };
    m.displayName = f + 'Provider';
    function S(E, T) {
      var L;
      const I = ((L = T == null ? void 0 : T[l]) == null ? void 0 : L[v]) || h,
        _ = R.useContext(I);
      if (_) return _;
      if (p !== void 0) return p;
      throw new Error(`\`${E}\` must be used within \`${f}\``);
    }
    return [m, S];
  }
  const c = () => {
    const f = i.map(p => R.createContext(p));
    return function (h) {
      const v = (h == null ? void 0 : h[l]) || f;
      return R.useMemo(() => ({ [`__scope${l}`]: { ...h, [l]: v } }), [h, v]);
    };
  };
  return (c.scopeName = l), [u, Dh(c, ...o)];
}
function Dh(...l) {
  const o = l[0];
  if (l.length === 1) return o;
  const i = () => {
    const u = l.map(c => ({ useScope: c(), scopeName: c.scopeName }));
    return function (f) {
      const p = u.reduce((h, { useScope: v, scopeName: m }) => {
        const E = v(f)[`__scope${m}`];
        return { ...h, ...E };
      }, {});
      return R.useMemo(() => ({ [`__scope${o.scopeName}`]: p }), [p]);
    };
  };
  return (i.scopeName = o.scopeName), i;
}
function xl(l) {
  const o = jh(l),
    i = R.forwardRef((u, c) => {
      const { children: f, ...p } = u,
        h = R.Children.toArray(f),
        v = h.find(Fh);
      if (v) {
        const m = v.props.children,
          S = h.map(E =>
            E === v
              ? R.Children.count(m) > 1
                ? R.Children.only(null)
                : R.isValidElement(m)
                  ? m.props.children
                  : null
              : E,
          );
        return Q.jsx(o, {
          ...p,
          ref: c,
          children: R.isValidElement(m) ? R.cloneElement(m, void 0, S) : null,
        });
      }
      return Q.jsx(o, { ...p, ref: c, children: f });
    });
  return (i.displayName = `${l}.Slot`), i;
}
function jh(l) {
  const o = R.forwardRef((i, u) => {
    const { children: c, ...f } = i;
    if (R.isValidElement(c)) {
      const p = Uh(c),
        h = $h(f, c.props);
      return c.type !== R.Fragment && (h.ref = u ? hf(u, p) : p), R.cloneElement(c, h);
    }
    return R.Children.count(c) > 1 ? R.Children.only(null) : null;
  });
  return (o.displayName = `${l}.SlotClone`), o;
}
var Ah = Symbol('radix.slottable');
function Fh(l) {
  return (
    R.isValidElement(l) &&
    typeof l.type == 'function' &&
    '__radixId' in l.type &&
    l.type.__radixId === Ah
  );
}
function $h(l, o) {
  const i = { ...o };
  for (const u in o) {
    const c = l[u],
      f = o[u];
    /^on[A-Z]/.test(u)
      ? c && f
        ? (i[u] = (...h) => {
            const v = f(...h);
            return c(...h), v;
          })
        : c && (i[u] = c)
      : u === 'style'
        ? (i[u] = { ...c, ...f })
        : u === 'className' && (i[u] = [c, f].filter(Boolean).join(' '));
  }
  return { ...l, ...i };
}
function Uh(l) {
  var u, c;
  let o = (u = Object.getOwnPropertyDescriptor(l.props, 'ref')) == null ? void 0 : u.get,
    i = o && 'isReactWarning' in o && o.isReactWarning;
  return i
    ? l.ref
    : ((o = (c = Object.getOwnPropertyDescriptor(l, 'ref')) == null ? void 0 : c.get),
      (i = o && 'isReactWarning' in o && o.isReactWarning),
      i ? l.props.ref : l.props.ref || l.ref);
}
function Vh(l) {
  const o = l + 'CollectionProvider',
    [i, u] = mf(o),
    [c, f] = i(o, { collectionRef: { current: null }, itemMap: new Map() }),
    p = L => {
      const { scope: N, children: b } = L,
        F = At.useRef(null),
        G = At.useRef(new Map()).current;
      return Q.jsx(c, { scope: N, itemMap: G, collectionRef: F, children: b });
    };
  p.displayName = o;
  const h = l + 'CollectionSlot',
    v = xl(h),
    m = At.forwardRef((L, N) => {
      const { scope: b, children: F } = L,
        G = f(h, b),
        V = xn(N, G.collectionRef);
      return Q.jsx(v, { ref: V, children: F });
    });
  m.displayName = h;
  const S = l + 'CollectionItemSlot',
    E = 'data-radix-collection-item',
    T = xl(S),
    I = At.forwardRef((L, N) => {
      const { scope: b, children: F, ...G } = L,
        V = At.useRef(null),
        te = xn(N, V),
        ne = f(S, b);
      return (
        At.useEffect(() => (ne.itemMap.set(V, { ref: V, ...G }), () => void ne.itemMap.delete(V))),
        Q.jsx(T, { [E]: '', ref: te, children: F })
      );
    });
  I.displayName = S;
  function _(L) {
    const N = f(l + 'CollectionConsumer', L);
    return At.useCallback(() => {
      const F = N.collectionRef.current;
      if (!F) return [];
      const G = Array.from(F.querySelectorAll(`[${E}]`));
      return Array.from(N.itemMap.values()).sort(
        (ne, J) => G.indexOf(ne.ref.current) - G.indexOf(J.ref.current),
      );
    }, [N.collectionRef, N.itemMap]);
  }
  return [{ Provider: p, Slot: m, ItemSlot: I }, _, u];
}
var bh = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  Nt = bh.reduce((l, o) => {
    const i = xl(`Primitive.${o}`),
      u = R.forwardRef((c, f) => {
        const { asChild: p, ...h } = c,
          v = p ? i : o;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), Q.jsx(v, { ...h, ref: f })
        );
      });
    return (u.displayName = `Primitive.${o}`), { ...l, [o]: u };
  }, {});
function gf(l, o) {
  l && Rl.flushSync(() => l.dispatchEvent(o));
}
function Sn(l) {
  const o = R.useRef(l);
  return (
    R.useEffect(() => {
      o.current = l;
    }),
    R.useMemo(
      () =>
        (...i) => {
          var u;
          return (u = o.current) == null ? void 0 : u.call(o, ...i);
        },
      [],
    )
  );
}
function Bh(l, o = globalThis == null ? void 0 : globalThis.document) {
  const i = Sn(l);
  R.useEffect(() => {
    const u = c => {
      c.key === 'Escape' && i(c);
    };
    return (
      o.addEventListener('keydown', u, { capture: !0 }),
      () => o.removeEventListener('keydown', u, { capture: !0 })
    );
  }, [i, o]);
}
var Wh = 'DismissableLayer',
  Sl = 'dismissableLayer.update',
  Hh = 'dismissableLayer.pointerDownOutside',
  Kh = 'dismissableLayer.focusOutside',
  Vc,
  vf = R.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  yf = R.forwardRef((l, o) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: f,
        onInteractOutside: p,
        onDismiss: h,
        ...v
      } = l,
      m = R.useContext(vf),
      [S, E] = R.useState(null),
      T =
        (S == null ? void 0 : S.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, I] = R.useState({}),
      _ = xn(o, J => E(J)),
      L = Array.from(m.layers),
      [N] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = L.indexOf(N),
      F = S ? L.indexOf(S) : -1,
      G = m.layersWithOutsidePointerEventsDisabled.size > 0,
      V = F >= b,
      te = Gh(J => {
        const ie = J.target,
          se = [...m.branches].some(re => re.contains(ie));
        !V || se || (c == null || c(J), p == null || p(J), J.defaultPrevented || h == null || h());
      }, T),
      ne = Yh(J => {
        const ie = J.target;
        [...m.branches].some(re => re.contains(ie)) ||
          (f == null || f(J), p == null || p(J), J.defaultPrevented || h == null || h());
      }, T);
    return (
      Bh(J => {
        F === m.layers.size - 1 &&
          (u == null || u(J), !J.defaultPrevented && h && (J.preventDefault(), h()));
      }, T),
      R.useEffect(() => {
        if (S)
          return (
            i &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Vc = T.body.style.pointerEvents), (T.body.style.pointerEvents = 'none')),
              m.layersWithOutsidePointerEventsDisabled.add(S)),
            m.layers.add(S),
            bc(),
            () => {
              i &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (T.body.style.pointerEvents = Vc);
            }
          );
      }, [S, T, i, m]),
      R.useEffect(
        () => () => {
          S && (m.layers.delete(S), m.layersWithOutsidePointerEventsDisabled.delete(S), bc());
        },
        [S, m],
      ),
      R.useEffect(() => {
        const J = () => I({});
        return document.addEventListener(Sl, J), () => document.removeEventListener(Sl, J);
      }, []),
      Q.jsx(Nt.div, {
        ...v,
        ref: _,
        style: { pointerEvents: G ? (V ? 'auto' : 'none') : void 0, ...l.style },
        onFocusCapture: lt(l.onFocusCapture, ne.onFocusCapture),
        onBlurCapture: lt(l.onBlurCapture, ne.onBlurCapture),
        onPointerDownCapture: lt(l.onPointerDownCapture, te.onPointerDownCapture),
      })
    );
  });
yf.displayName = Wh;
var Qh = 'DismissableLayerBranch',
  wf = R.forwardRef((l, o) => {
    const i = R.useContext(vf),
      u = R.useRef(null),
      c = xn(o, u);
    return (
      R.useEffect(() => {
        const f = u.current;
        if (f)
          return (
            i.branches.add(f),
            () => {
              i.branches.delete(f);
            }
          );
      }, [i.branches]),
      Q.jsx(Nt.div, { ...l, ref: c })
    );
  });
wf.displayName = Qh;
function Gh(l, o = globalThis == null ? void 0 : globalThis.document) {
  const i = Sn(l),
    u = R.useRef(!1),
    c = R.useRef(() => {});
  return (
    R.useEffect(() => {
      const f = h => {
          if (h.target && !u.current) {
            let v = function () {
              xf(Hh, i, m, { discrete: !0 });
            };
            const m = { originalEvent: h };
            h.pointerType === 'touch'
              ? (o.removeEventListener('click', c.current),
                (c.current = v),
                o.addEventListener('click', c.current, { once: !0 }))
              : v();
          } else o.removeEventListener('click', c.current);
          u.current = !1;
        },
        p = window.setTimeout(() => {
          o.addEventListener('pointerdown', f);
        }, 0);
      return () => {
        window.clearTimeout(p),
          o.removeEventListener('pointerdown', f),
          o.removeEventListener('click', c.current);
      };
    }, [o, i]),
    { onPointerDownCapture: () => (u.current = !0) }
  );
}
function Yh(l, o = globalThis == null ? void 0 : globalThis.document) {
  const i = Sn(l),
    u = R.useRef(!1);
  return (
    R.useEffect(() => {
      const c = f => {
        f.target && !u.current && xf(Kh, i, { originalEvent: f }, { discrete: !1 });
      };
      return o.addEventListener('focusin', c), () => o.removeEventListener('focusin', c);
    }, [o, i]),
    { onFocusCapture: () => (u.current = !0), onBlurCapture: () => (u.current = !1) }
  );
}
function bc() {
  const l = new CustomEvent(Sl);
  document.dispatchEvent(l);
}
function xf(l, o, i, { discrete: u }) {
  const c = i.originalEvent.target,
    f = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: i });
  o && c.addEventListener(l, o, { once: !0 }), u ? gf(c, f) : c.dispatchEvent(f);
}
var Xh = yf,
  Jh = wf,
  br = globalThis != null && globalThis.document ? R.useLayoutEffect : () => {},
  qh = 'Portal',
  Sf = R.forwardRef((l, o) => {
    var h;
    const { container: i, ...u } = l,
      [c, f] = R.useState(!1);
    br(() => f(!0), []);
    const p =
      i ||
      (c && ((h = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : h.body));
    return p ? Mh.createPortal(Q.jsx(Nt.div, { ...u, ref: o }), p) : null;
  });
Sf.displayName = qh;
function Zh(l, o) {
  return R.useReducer((i, u) => o[i][u] ?? i, l);
}
var Ef = l => {
  const { present: o, children: i } = l,
    u = em(o),
    c = typeof i == 'function' ? i({ present: u.isPresent }) : R.Children.only(i),
    f = xn(u.ref, tm(c));
  return typeof i == 'function' || u.isPresent ? R.cloneElement(c, { ref: f }) : null;
};
Ef.displayName = 'Presence';
function em(l) {
  const [o, i] = R.useState(),
    u = R.useRef(null),
    c = R.useRef(l),
    f = R.useRef('none'),
    p = l ? 'mounted' : 'unmounted',
    [h, v] = Zh(p, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    R.useEffect(() => {
      const m = oi(u.current);
      f.current = h === 'mounted' ? m : 'none';
    }, [h]),
    br(() => {
      const m = u.current,
        S = c.current;
      if (S !== l) {
        const T = f.current,
          I = oi(m);
        l
          ? v('MOUNT')
          : I === 'none' || (m == null ? void 0 : m.display) === 'none'
            ? v('UNMOUNT')
            : v(S && T !== I ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (c.current = l);
      }
    }, [l, v]),
    br(() => {
      if (o) {
        let m;
        const S = o.ownerDocument.defaultView ?? window,
          E = I => {
            const L = oi(u.current).includes(I.animationName);
            if (I.target === o && L && (v('ANIMATION_END'), !c.current)) {
              const N = o.style.animationFillMode;
              (o.style.animationFillMode = 'forwards'),
                (m = S.setTimeout(() => {
                  o.style.animationFillMode === 'forwards' && (o.style.animationFillMode = N);
                }));
            }
          },
          T = I => {
            I.target === o && (f.current = oi(u.current));
          };
        return (
          o.addEventListener('animationstart', T),
          o.addEventListener('animationcancel', E),
          o.addEventListener('animationend', E),
          () => {
            S.clearTimeout(m),
              o.removeEventListener('animationstart', T),
              o.removeEventListener('animationcancel', E),
              o.removeEventListener('animationend', E);
          }
        );
      } else v('ANIMATION_END');
    }, [o, v]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(h),
      ref: R.useCallback(m => {
        (u.current = m ? getComputedStyle(m) : null), i(m);
      }, []),
    }
  );
}
function oi(l) {
  return (l == null ? void 0 : l.animationName) || 'none';
}
function tm(l) {
  var u, c;
  let o = (u = Object.getOwnPropertyDescriptor(l.props, 'ref')) == null ? void 0 : u.get,
    i = o && 'isReactWarning' in o && o.isReactWarning;
  return i
    ? l.ref
    : ((o = (c = Object.getOwnPropertyDescriptor(l, 'ref')) == null ? void 0 : c.get),
      (i = o && 'isReactWarning' in o && o.isReactWarning),
      i ? l.props.ref : l.props.ref || l.ref);
}
var nm = rh[' useInsertionEffect '.trim().toString()] || br;
function rm({ prop: l, defaultProp: o, onChange: i = () => {}, caller: u }) {
  const [c, f, p] = om({ defaultProp: o, onChange: i }),
    h = l !== void 0,
    v = h ? l : c;
  {
    const S = R.useRef(l !== void 0);
    R.useEffect(() => {
      const E = S.current;
      E !== h &&
        console.warn(
          `${u} is changing from ${E ? 'controlled' : 'uncontrolled'} to ${h ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (S.current = h);
    }, [h, u]);
  }
  const m = R.useCallback(
    S => {
      var E;
      if (h) {
        const T = im(S) ? S(l) : S;
        T !== l && ((E = p.current) == null || E.call(p, T));
      } else f(S);
    },
    [h, l, f, p],
  );
  return [v, m];
}
function om({ defaultProp: l, onChange: o }) {
  const [i, u] = R.useState(l),
    c = R.useRef(i),
    f = R.useRef(o);
  return (
    nm(() => {
      f.current = o;
    }, [o]),
    R.useEffect(() => {
      var p;
      c.current !== i && ((p = f.current) == null || p.call(f, i), (c.current = i));
    }, [i, c]),
    [i, u, f]
  );
}
function im(l) {
  return typeof l == 'function';
}
var sm = Object.freeze({
    position: 'absolute',
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  }),
  lm = 'VisuallyHidden',
  Ll = R.forwardRef((l, o) => Q.jsx(Nt.span, { ...l, ref: o, style: { ...sm, ...l.style } }));
Ll.displayName = lm;
var Ol = 'ToastProvider',
  [_l, am, um] = Vh('Toast'),
  [kf, $g] = mf('Toast', [um]),
  [cm, di] = kf(Ol),
  Cf = l => {
    const {
        __scopeToast: o,
        label: i = 'Notification',
        duration: u = 5e3,
        swipeDirection: c = 'right',
        swipeThreshold: f = 50,
        children: p,
      } = l,
      [h, v] = R.useState(null),
      [m, S] = R.useState(0),
      E = R.useRef(!1),
      T = R.useRef(!1);
    return (
      i.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Ol}\`. Expected non-empty \`string\`.`,
        ),
      Q.jsx(_l.Provider, {
        scope: o,
        children: Q.jsx(cm, {
          scope: o,
          label: i,
          duration: u,
          swipeDirection: c,
          swipeThreshold: f,
          toastCount: m,
          viewport: h,
          onViewportChange: v,
          onToastAdd: R.useCallback(() => S(I => I + 1), []),
          onToastRemove: R.useCallback(() => S(I => I - 1), []),
          isFocusedToastEscapeKeyDownRef: E,
          isClosePausedRef: T,
          children: p,
        }),
      })
    );
  };
Cf.displayName = Ol;
var Pf = 'ToastViewport',
  fm = ['F8'],
  El = 'toast.viewportPause',
  kl = 'toast.viewportResume',
  Tf = R.forwardRef((l, o) => {
    const { __scopeToast: i, hotkey: u = fm, label: c = 'Notifications ({hotkey})', ...f } = l,
      p = di(Pf, i),
      h = am(i),
      v = R.useRef(null),
      m = R.useRef(null),
      S = R.useRef(null),
      E = R.useRef(null),
      T = xn(o, E, p.onViewportChange),
      I = u.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
      _ = p.toastCount > 0;
    R.useEffect(() => {
      const N = b => {
        var G;
        u.length !== 0 &&
          u.every(V => b[V] || b.code === V) &&
          ((G = E.current) == null || G.focus());
      };
      return (
        document.addEventListener('keydown', N), () => document.removeEventListener('keydown', N)
      );
    }, [u]),
      R.useEffect(() => {
        const N = v.current,
          b = E.current;
        if (_ && N && b) {
          const F = () => {
              if (!p.isClosePausedRef.current) {
                const ne = new CustomEvent(El);
                b.dispatchEvent(ne), (p.isClosePausedRef.current = !0);
              }
            },
            G = () => {
              if (p.isClosePausedRef.current) {
                const ne = new CustomEvent(kl);
                b.dispatchEvent(ne), (p.isClosePausedRef.current = !1);
              }
            },
            V = ne => {
              !N.contains(ne.relatedTarget) && G();
            },
            te = () => {
              N.contains(document.activeElement) || G();
            };
          return (
            N.addEventListener('focusin', F),
            N.addEventListener('focusout', V),
            N.addEventListener('pointermove', F),
            N.addEventListener('pointerleave', te),
            window.addEventListener('blur', F),
            window.addEventListener('focus', G),
            () => {
              N.removeEventListener('focusin', F),
                N.removeEventListener('focusout', V),
                N.removeEventListener('pointermove', F),
                N.removeEventListener('pointerleave', te),
                window.removeEventListener('blur', F),
                window.removeEventListener('focus', G);
            }
          );
        }
      }, [_, p.isClosePausedRef]);
    const L = R.useCallback(
      ({ tabbingDirection: N }) => {
        const F = h().map(G => {
          const V = G.ref.current,
            te = [V, ...Cm(V)];
          return N === 'forwards' ? te : te.reverse();
        });
        return (N === 'forwards' ? F.reverse() : F).flat();
      },
      [h],
    );
    return (
      R.useEffect(() => {
        const N = E.current;
        if (N) {
          const b = F => {
            var te, ne, J;
            const G = F.altKey || F.ctrlKey || F.metaKey;
            if (F.key === 'Tab' && !G) {
              const ie = document.activeElement,
                se = F.shiftKey;
              if (F.target === N && se) {
                (te = m.current) == null || te.focus();
                return;
              }
              const ae = L({ tabbingDirection: se ? 'backwards' : 'forwards' }),
                ge = ae.findIndex(H => H === ie);
              hl(ae.slice(ge + 1))
                ? F.preventDefault()
                : se
                  ? (ne = m.current) == null || ne.focus()
                  : (J = S.current) == null || J.focus();
            }
          };
          return N.addEventListener('keydown', b), () => N.removeEventListener('keydown', b);
        }
      }, [h, L]),
      Q.jsxs(Jh, {
        ref: v,
        role: 'region',
        'aria-label': c.replace('{hotkey}', I),
        tabIndex: -1,
        style: { pointerEvents: _ ? void 0 : 'none' },
        children: [
          _ &&
            Q.jsx(Cl, {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const N = L({ tabbingDirection: 'forwards' });
                hl(N);
              },
            }),
          Q.jsx(_l.Slot, { scope: i, children: Q.jsx(Nt.ol, { tabIndex: -1, ...f, ref: T }) }),
          _ &&
            Q.jsx(Cl, {
              ref: S,
              onFocusFromOutsideViewport: () => {
                const N = L({ tabbingDirection: 'backwards' });
                hl(N);
              },
            }),
        ],
      })
    );
  });
Tf.displayName = Pf;
var Nf = 'ToastFocusProxy',
  Cl = R.forwardRef((l, o) => {
    const { __scopeToast: i, onFocusFromOutsideViewport: u, ...c } = l,
      f = di(Nf, i);
    return Q.jsx(Ll, {
      'aria-hidden': !0,
      tabIndex: 0,
      ...c,
      ref: o,
      style: { position: 'fixed' },
      onFocus: p => {
        var m;
        const h = p.relatedTarget;
        !((m = f.viewport) != null && m.contains(h)) && u();
      },
    });
  });
Cl.displayName = Nf;
var Hr = 'Toast',
  dm = 'toast.swipeStart',
  pm = 'toast.swipeMove',
  hm = 'toast.swipeCancel',
  mm = 'toast.swipeEnd',
  Rf = R.forwardRef((l, o) => {
    const { forceMount: i, open: u, defaultOpen: c, onOpenChange: f, ...p } = l,
      [h, v] = rm({ prop: u, defaultProp: c ?? !0, onChange: f, caller: Hr });
    return Q.jsx(Ef, {
      present: i || h,
      children: Q.jsx(ym, {
        open: h,
        ...p,
        ref: o,
        onClose: () => v(!1),
        onPause: Sn(l.onPause),
        onResume: Sn(l.onResume),
        onSwipeStart: lt(l.onSwipeStart, m => {
          m.currentTarget.setAttribute('data-swipe', 'start');
        }),
        onSwipeMove: lt(l.onSwipeMove, m => {
          const { x: S, y: E } = m.detail.delta;
          m.currentTarget.setAttribute('data-swipe', 'move'),
            m.currentTarget.style.setProperty('--radix-toast-swipe-move-x', `${S}px`),
            m.currentTarget.style.setProperty('--radix-toast-swipe-move-y', `${E}px`);
        }),
        onSwipeCancel: lt(l.onSwipeCancel, m => {
          m.currentTarget.setAttribute('data-swipe', 'cancel'),
            m.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            m.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            m.currentTarget.style.removeProperty('--radix-toast-swipe-end-x'),
            m.currentTarget.style.removeProperty('--radix-toast-swipe-end-y');
        }),
        onSwipeEnd: lt(l.onSwipeEnd, m => {
          const { x: S, y: E } = m.detail.delta;
          m.currentTarget.setAttribute('data-swipe', 'end'),
            m.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            m.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            m.currentTarget.style.setProperty('--radix-toast-swipe-end-x', `${S}px`),
            m.currentTarget.style.setProperty('--radix-toast-swipe-end-y', `${E}px`),
            v(!1);
        }),
      }),
    });
  });
Rf.displayName = Hr;
var [gm, vm] = kf(Hr, { onClose() {} }),
  ym = R.forwardRef((l, o) => {
    const {
        __scopeToast: i,
        type: u = 'foreground',
        duration: c,
        open: f,
        onClose: p,
        onEscapeKeyDown: h,
        onPause: v,
        onResume: m,
        onSwipeStart: S,
        onSwipeMove: E,
        onSwipeCancel: T,
        onSwipeEnd: I,
        ..._
      } = l,
      L = di(Hr, i),
      [N, b] = R.useState(null),
      F = xn(o, H => b(H)),
      G = R.useRef(null),
      V = R.useRef(null),
      te = c || L.duration,
      ne = R.useRef(0),
      J = R.useRef(te),
      ie = R.useRef(0),
      { onToastAdd: se, onToastRemove: re } = L,
      we = Sn(() => {
        var xe;
        (N == null ? void 0 : N.contains(document.activeElement)) &&
          ((xe = L.viewport) == null || xe.focus()),
          p();
      }),
      ae = R.useCallback(
        H => {
          !H ||
            H === 1 / 0 ||
            (window.clearTimeout(ie.current),
            (ne.current = new Date().getTime()),
            (ie.current = window.setTimeout(we, H)));
        },
        [we],
      );
    R.useEffect(() => {
      const H = L.viewport;
      if (H) {
        const xe = () => {
            ae(J.current), m == null || m();
          },
          de = () => {
            const ce = new Date().getTime() - ne.current;
            (J.current = J.current - ce), window.clearTimeout(ie.current), v == null || v();
          };
        return (
          H.addEventListener(El, de),
          H.addEventListener(kl, xe),
          () => {
            H.removeEventListener(El, de), H.removeEventListener(kl, xe);
          }
        );
      }
    }, [L.viewport, te, v, m, ae]),
      R.useEffect(() => {
        f && !L.isClosePausedRef.current && ae(te);
      }, [f, te, L.isClosePausedRef, ae]),
      R.useEffect(() => (se(), () => re()), [se, re]);
    const ge = R.useMemo(() => (N ? Df(N) : null), [N]);
    return L.viewport
      ? Q.jsxs(Q.Fragment, {
          children: [
            ge &&
              Q.jsx(wm, {
                __scopeToast: i,
                role: 'status',
                'aria-live': u === 'foreground' ? 'assertive' : 'polite',
                'aria-atomic': !0,
                children: ge,
              }),
            Q.jsx(gm, {
              scope: i,
              onClose: we,
              children: Rl.createPortal(
                Q.jsx(_l.ItemSlot, {
                  scope: i,
                  children: Q.jsx(Xh, {
                    asChild: !0,
                    onEscapeKeyDown: lt(h, () => {
                      L.isFocusedToastEscapeKeyDownRef.current || we(),
                        (L.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: Q.jsx(Nt.li, {
                      role: 'status',
                      'aria-live': 'off',
                      'aria-atomic': !0,
                      tabIndex: 0,
                      'data-state': f ? 'open' : 'closed',
                      'data-swipe-direction': L.swipeDirection,
                      ..._,
                      ref: F,
                      style: { userSelect: 'none', touchAction: 'none', ...l.style },
                      onKeyDown: lt(l.onKeyDown, H => {
                        H.key === 'Escape' &&
                          (h == null || h(H.nativeEvent),
                          H.nativeEvent.defaultPrevented ||
                            ((L.isFocusedToastEscapeKeyDownRef.current = !0), we()));
                      }),
                      onPointerDown: lt(l.onPointerDown, H => {
                        H.button === 0 && (G.current = { x: H.clientX, y: H.clientY });
                      }),
                      onPointerMove: lt(l.onPointerMove, H => {
                        if (!G.current) return;
                        const xe = H.clientX - G.current.x,
                          de = H.clientY - G.current.y,
                          ce = !!V.current,
                          A = ['left', 'right'].includes(L.swipeDirection),
                          W = ['left', 'up'].includes(L.swipeDirection) ? Math.min : Math.max,
                          $ = A ? W(0, xe) : 0,
                          w = A ? 0 : W(0, de),
                          O = H.pointerType === 'touch' ? 10 : 2,
                          ee = { x: $, y: w },
                          ue = { originalEvent: H, delta: ee };
                        ce
                          ? ((V.current = ee), ii(pm, E, ue, { discrete: !1 }))
                          : Bc(ee, L.swipeDirection, O)
                            ? ((V.current = ee),
                              ii(dm, S, ue, { discrete: !1 }),
                              H.target.setPointerCapture(H.pointerId))
                            : (Math.abs(xe) > O || Math.abs(de) > O) && (G.current = null);
                      }),
                      onPointerUp: lt(l.onPointerUp, H => {
                        const xe = V.current,
                          de = H.target;
                        if (
                          (de.hasPointerCapture(H.pointerId) &&
                            de.releasePointerCapture(H.pointerId),
                          (V.current = null),
                          (G.current = null),
                          xe)
                        ) {
                          const ce = H.currentTarget,
                            A = { originalEvent: H, delta: xe };
                          Bc(xe, L.swipeDirection, L.swipeThreshold)
                            ? ii(mm, I, A, { discrete: !0 })
                            : ii(hm, T, A, { discrete: !0 }),
                            ce.addEventListener('click', W => W.preventDefault(), { once: !0 });
                        }
                      }),
                    }),
                  }),
                }),
                L.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  wm = l => {
    const { __scopeToast: o, children: i, ...u } = l,
      c = di(Hr, o),
      [f, p] = R.useState(!1),
      [h, v] = R.useState(!1);
    return (
      Em(() => p(!0)),
      R.useEffect(() => {
        const m = window.setTimeout(() => v(!0), 1e3);
        return () => window.clearTimeout(m);
      }, []),
      h
        ? null
        : Q.jsx(Sf, {
            asChild: !0,
            children: Q.jsx(Ll, {
              ...u,
              children: f && Q.jsxs(Q.Fragment, { children: [c.label, ' ', i] }),
            }),
          })
    );
  },
  xm = 'ToastTitle',
  Lf = R.forwardRef((l, o) => {
    const { __scopeToast: i, ...u } = l;
    return Q.jsx(Nt.div, { ...u, ref: o });
  });
Lf.displayName = xm;
var Sm = 'ToastDescription',
  Of = R.forwardRef((l, o) => {
    const { __scopeToast: i, ...u } = l;
    return Q.jsx(Nt.div, { ...u, ref: o });
  });
Of.displayName = Sm;
var _f = 'ToastAction',
  If = R.forwardRef((l, o) => {
    const { altText: i, ...u } = l;
    return i.trim()
      ? Q.jsx(Mf, { altText: i, asChild: !0, children: Q.jsx(Il, { ...u, ref: o }) })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${_f}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
If.displayName = _f;
var zf = 'ToastClose',
  Il = R.forwardRef((l, o) => {
    const { __scopeToast: i, ...u } = l,
      c = vm(zf, i);
    return Q.jsx(Mf, {
      asChild: !0,
      children: Q.jsx(Nt.button, {
        type: 'button',
        ...u,
        ref: o,
        onClick: lt(l.onClick, c.onClose),
      }),
    });
  });
Il.displayName = zf;
var Mf = R.forwardRef((l, o) => {
  const { __scopeToast: i, altText: u, ...c } = l;
  return Q.jsx(Nt.div, {
    'data-radix-toast-announce-exclude': '',
    'data-radix-toast-announce-alt': u || void 0,
    ...c,
    ref: o,
  });
});
function Df(l) {
  const o = [];
  return (
    Array.from(l.childNodes).forEach(u => {
      if ((u.nodeType === u.TEXT_NODE && u.textContent && o.push(u.textContent), km(u))) {
        const c = u.ariaHidden || u.hidden || u.style.display === 'none',
          f = u.dataset.radixToastAnnounceExclude === '';
        if (!c)
          if (f) {
            const p = u.dataset.radixToastAnnounceAlt;
            p && o.push(p);
          } else o.push(...Df(u));
      }
    }),
    o
  );
}
function ii(l, o, i, { discrete: u }) {
  const c = i.originalEvent.currentTarget,
    f = new CustomEvent(l, { bubbles: !0, cancelable: !0, detail: i });
  o && c.addEventListener(l, o, { once: !0 }), u ? gf(c, f) : c.dispatchEvent(f);
}
var Bc = (l, o, i = 0) => {
  const u = Math.abs(l.x),
    c = Math.abs(l.y),
    f = u > c;
  return o === 'left' || o === 'right' ? f && u > i : !f && c > i;
};
function Em(l = () => {}) {
  const o = Sn(l);
  br(() => {
    let i = 0,
      u = 0;
    return (
      (i = window.requestAnimationFrame(() => (u = window.requestAnimationFrame(o)))),
      () => {
        window.cancelAnimationFrame(i), window.cancelAnimationFrame(u);
      }
    );
  }, [o]);
}
function km(l) {
  return l.nodeType === l.ELEMENT_NODE;
}
function Cm(l) {
  const o = [],
    i = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
      acceptNode: u => {
        const c = u.tagName === 'INPUT' && u.type === 'hidden';
        return u.disabled || u.hidden || c
          ? NodeFilter.FILTER_SKIP
          : u.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; i.nextNode(); ) o.push(i.currentNode);
  return o;
}
function hl(l) {
  const o = document.activeElement;
  return l.some(i => (i === o ? !0 : (i.focus(), document.activeElement !== o)));
}
var Pm = Cf,
  jf = Tf,
  Af = Rf,
  Ff = Lf,
  $f = Of,
  Uf = If,
  Vf = Il;
const Wc = l => (typeof l == 'boolean' ? ''.concat(l) : l === 0 ? '0' : l),
  Hc = function () {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    return o
      .flat(1 / 0)
      .filter(Boolean)
      .join(' ');
  },
  Tm = (l, o) => i => {
    var u;
    if ((o == null ? void 0 : o.variants) == null)
      return Hc(l, i == null ? void 0 : i.class, i == null ? void 0 : i.className);
    const { variants: c, defaultVariants: f } = o,
      p = Object.keys(c).map(m => {
        const S = i == null ? void 0 : i[m],
          E = f == null ? void 0 : f[m];
        if (S === null) return null;
        const T = Wc(S) || Wc(E);
        return c[m][T];
      }),
      h =
        i &&
        Object.entries(i).reduce((m, S) => {
          let [E, T] = S;
          return T === void 0 || (m[E] = T), m;
        }, {}),
      v =
        o == null || (u = o.compoundVariants) === null || u === void 0
          ? void 0
          : u.reduce((m, S) => {
              let { class: E, className: T, ...I } = S;
              return Object.entries(I).every(_ => {
                let [L, N] = _;
                return Array.isArray(N) ? N.includes({ ...f, ...h }[L]) : { ...f, ...h }[L] === N;
              })
                ? [...m, E, T]
                : m;
            }, []);
    return Hc(l, p, v, i == null ? void 0 : i.class, i == null ? void 0 : i.className);
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nm = l => l.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  bf = (...l) => l.filter((o, i, u) => !!o && u.indexOf(o) === i).join(' ');
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Rm = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = R.forwardRef(
  (
    {
      color: l = 'currentColor',
      size: o = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: u,
      className: c = '',
      children: f,
      iconNode: p,
      ...h
    },
    v,
  ) =>
    R.createElement(
      'svg',
      {
        ref: v,
        ...Rm,
        width: o,
        height: o,
        stroke: l,
        strokeWidth: u ? (Number(i) * 24) / Number(o) : i,
        className: bf('lucide', c),
        ...h,
      },
      [...p.map(([m, S]) => R.createElement(m, S)), ...(Array.isArray(f) ? f : [f])],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Om = (l, o) => {
  const i = R.forwardRef(({ className: u, ...c }, f) =>
    R.createElement(Lm, { ref: f, iconNode: o, className: bf(`lucide-${Nm(l)}`, u), ...c }),
  );
  return (i.displayName = `${l}`), i;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _m = Om('X', [
  ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
  ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
]);
function Bf(l) {
  var o,
    i,
    u = '';
  if (typeof l == 'string' || typeof l == 'number') u += l;
  else if (typeof l == 'object')
    if (Array.isArray(l)) {
      var c = l.length;
      for (o = 0; o < c; o++) l[o] && (i = Bf(l[o])) && (u && (u += ' '), (u += i));
    } else for (i in l) l[i] && (u && (u += ' '), (u += i));
  return u;
}
function Im() {
  for (var l, o, i = 0, u = '', c = arguments.length; i < c; i++)
    (l = arguments[i]) && (o = Bf(l)) && (u && (u += ' '), (u += o));
  return u;
}
const zl = '-',
  zm = l => {
    const o = Dm(l),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: u } = l;
    return {
      getClassGroupId: p => {
        const h = p.split(zl);
        return h[0] === '' && h.length !== 1 && h.shift(), Wf(h, o) || Mm(p);
      },
      getConflictingClassGroupIds: (p, h) => {
        const v = i[p] || [];
        return h && u[p] ? [...v, ...u[p]] : v;
      },
    };
  },
  Wf = (l, o) => {
    var p;
    if (l.length === 0) return o.classGroupId;
    const i = l[0],
      u = o.nextPart.get(i),
      c = u ? Wf(l.slice(1), u) : void 0;
    if (c) return c;
    if (o.validators.length === 0) return;
    const f = l.join(zl);
    return (p = o.validators.find(({ validator: h }) => h(f))) == null ? void 0 : p.classGroupId;
  },
  Kc = /^\[(.+)\]$/,
  Mm = l => {
    if (Kc.test(l)) {
      const o = Kc.exec(l)[1],
        i = o == null ? void 0 : o.substring(0, o.indexOf(':'));
      if (i) return 'arbitrary..' + i;
    }
  },
  Dm = l => {
    const { theme: o, prefix: i } = l,
      u = { nextPart: new Map(), validators: [] };
    return (
      Am(Object.entries(l.classGroups), i).forEach(([f, p]) => {
        Pl(p, u, f, o);
      }),
      u
    );
  },
  Pl = (l, o, i, u) => {
    l.forEach(c => {
      if (typeof c == 'string') {
        const f = c === '' ? o : Qc(o, c);
        f.classGroupId = i;
        return;
      }
      if (typeof c == 'function') {
        if (jm(c)) {
          Pl(c(u), o, i, u);
          return;
        }
        o.validators.push({ validator: c, classGroupId: i });
        return;
      }
      Object.entries(c).forEach(([f, p]) => {
        Pl(p, Qc(o, f), i, u);
      });
    });
  },
  Qc = (l, o) => {
    let i = l;
    return (
      o.split(zl).forEach(u => {
        i.nextPart.has(u) || i.nextPart.set(u, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(u));
      }),
      i
    );
  },
  jm = l => l.isThemeGetter,
  Am = (l, o) =>
    o
      ? l.map(([i, u]) => {
          const c = u.map(f =>
            typeof f == 'string'
              ? o + f
              : typeof f == 'object'
                ? Object.fromEntries(Object.entries(f).map(([p, h]) => [o + p, h]))
                : f,
          );
          return [i, c];
        })
      : l,
  Fm = l => {
    if (l < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      i = new Map(),
      u = new Map();
    const c = (f, p) => {
      i.set(f, p), o++, o > l && ((o = 0), (u = i), (i = new Map()));
    };
    return {
      get(f) {
        let p = i.get(f);
        if (p !== void 0) return p;
        if ((p = u.get(f)) !== void 0) return c(f, p), p;
      },
      set(f, p) {
        i.has(f) ? i.set(f, p) : c(f, p);
      },
    };
  },
  Hf = '!',
  $m = l => {
    const { separator: o, experimentalParseClassName: i } = l,
      u = o.length === 1,
      c = o[0],
      f = o.length,
      p = h => {
        const v = [];
        let m = 0,
          S = 0,
          E;
        for (let N = 0; N < h.length; N++) {
          let b = h[N];
          if (m === 0) {
            if (b === c && (u || h.slice(N, N + f) === o)) {
              v.push(h.slice(S, N)), (S = N + f);
              continue;
            }
            if (b === '/') {
              E = N;
              continue;
            }
          }
          b === '[' ? m++ : b === ']' && m--;
        }
        const T = v.length === 0 ? h : h.substring(S),
          I = T.startsWith(Hf),
          _ = I ? T.substring(1) : T,
          L = E && E > S ? E - S : void 0;
        return {
          modifiers: v,
          hasImportantModifier: I,
          baseClassName: _,
          maybePostfixModifierPosition: L,
        };
      };
    return i ? h => i({ className: h, parseClassName: p }) : p;
  },
  Um = l => {
    if (l.length <= 1) return l;
    const o = [];
    let i = [];
    return (
      l.forEach(u => {
        u[0] === '[' ? (o.push(...i.sort(), u), (i = [])) : i.push(u);
      }),
      o.push(...i.sort()),
      o
    );
  },
  Vm = l => ({ cache: Fm(l.cacheSize), parseClassName: $m(l), ...zm(l) }),
  bm = /\s+/,
  Bm = (l, o) => {
    const { parseClassName: i, getClassGroupId: u, getConflictingClassGroupIds: c } = o,
      f = [],
      p = l.trim().split(bm);
    let h = '';
    for (let v = p.length - 1; v >= 0; v -= 1) {
      const m = p[v],
        {
          modifiers: S,
          hasImportantModifier: E,
          baseClassName: T,
          maybePostfixModifierPosition: I,
        } = i(m);
      let _ = !!I,
        L = u(_ ? T.substring(0, I) : T);
      if (!L) {
        if (!_) {
          h = m + (h.length > 0 ? ' ' + h : h);
          continue;
        }
        if (((L = u(T)), !L)) {
          h = m + (h.length > 0 ? ' ' + h : h);
          continue;
        }
        _ = !1;
      }
      const N = Um(S).join(':'),
        b = E ? N + Hf : N,
        F = b + L;
      if (f.includes(F)) continue;
      f.push(F);
      const G = c(L, _);
      for (let V = 0; V < G.length; ++V) {
        const te = G[V];
        f.push(b + te);
      }
      h = m + (h.length > 0 ? ' ' + h : h);
    }
    return h;
  };
function Wm() {
  let l = 0,
    o,
    i,
    u = '';
  for (; l < arguments.length; ) (o = arguments[l++]) && (i = Kf(o)) && (u && (u += ' '), (u += i));
  return u;
}
const Kf = l => {
  if (typeof l == 'string') return l;
  let o,
    i = '';
  for (let u = 0; u < l.length; u++) l[u] && (o = Kf(l[u])) && (i && (i += ' '), (i += o));
  return i;
};
function Hm(l, ...o) {
  let i,
    u,
    c,
    f = p;
  function p(v) {
    const m = o.reduce((S, E) => E(S), l());
    return (i = Vm(m)), (u = i.cache.get), (c = i.cache.set), (f = h), h(v);
  }
  function h(v) {
    const m = u(v);
    if (m) return m;
    const S = Bm(v, i);
    return c(v, S), S;
  }
  return function () {
    return f(Wm.apply(null, arguments));
  };
}
const Ne = l => {
    const o = i => i[l] || [];
    return (o.isThemeGetter = !0), o;
  },
  Qf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Km = /^\d+\/\d+$/,
  Qm = new Set(['px', 'full', 'screen']),
  Gm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ym =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Xm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Jm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  qm =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  jt = l => Gn(l) || Qm.has(l) || Km.test(l),
  rn = l => Yn(l, 'length', sg),
  Gn = l => !!l && !Number.isNaN(Number(l)),
  ml = l => Yn(l, 'number', Gn),
  Ar = l => !!l && Number.isInteger(Number(l)),
  Zm = l => l.endsWith('%') && Gn(l.slice(0, -1)),
  fe = l => Qf.test(l),
  on = l => Gm.test(l),
  eg = new Set(['length', 'size', 'percentage']),
  tg = l => Yn(l, eg, Gf),
  ng = l => Yn(l, 'position', Gf),
  rg = new Set(['image', 'url']),
  og = l => Yn(l, rg, ag),
  ig = l => Yn(l, '', lg),
  Fr = () => !0,
  Yn = (l, o, i) => {
    const u = Qf.exec(l);
    return u ? (u[1] ? (typeof o == 'string' ? u[1] === o : o.has(u[1])) : i(u[2])) : !1;
  },
  sg = l => Ym.test(l) && !Xm.test(l),
  Gf = () => !1,
  lg = l => Jm.test(l),
  ag = l => qm.test(l),
  ug = () => {
    const l = Ne('colors'),
      o = Ne('spacing'),
      i = Ne('blur'),
      u = Ne('brightness'),
      c = Ne('borderColor'),
      f = Ne('borderRadius'),
      p = Ne('borderSpacing'),
      h = Ne('borderWidth'),
      v = Ne('contrast'),
      m = Ne('grayscale'),
      S = Ne('hueRotate'),
      E = Ne('invert'),
      T = Ne('gap'),
      I = Ne('gradientColorStops'),
      _ = Ne('gradientColorStopPositions'),
      L = Ne('inset'),
      N = Ne('margin'),
      b = Ne('opacity'),
      F = Ne('padding'),
      G = Ne('saturate'),
      V = Ne('scale'),
      te = Ne('sepia'),
      ne = Ne('skew'),
      J = Ne('space'),
      ie = Ne('translate'),
      se = () => ['auto', 'contain', 'none'],
      re = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      we = () => ['auto', fe, o],
      ae = () => [fe, o],
      ge = () => ['', jt, rn],
      H = () => ['auto', Gn, fe],
      xe = () => [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ],
      de = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      ce = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      A = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
      W = () => ['', '0', fe],
      $ = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      w = () => [Gn, fe];
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [Fr],
        spacing: [jt, rn],
        blur: ['none', '', on, fe],
        brightness: w(),
        borderColor: [l],
        borderRadius: ['none', '', 'full', on, fe],
        borderSpacing: ae(),
        borderWidth: ge(),
        contrast: w(),
        grayscale: W(),
        hueRotate: w(),
        invert: W(),
        gap: ae(),
        gradientColorStops: [l],
        gradientColorStopPositions: [Zm, rn],
        inset: we(),
        margin: we(),
        opacity: w(),
        padding: ae(),
        saturate: w(),
        scale: w(),
        sepia: W(),
        skew: w(),
        space: ae(),
        translate: ae(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', fe] }],
        container: ['container'],
        columns: [{ columns: [on] }],
        'break-after': [{ 'break-after': $() }],
        'break-before': [{ 'break-before': $() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: [...xe(), fe] }],
        overflow: [{ overflow: re() }],
        'overflow-x': [{ 'overflow-x': re() }],
        'overflow-y': [{ 'overflow-y': re() }],
        overscroll: [{ overscroll: se() }],
        'overscroll-x': [{ 'overscroll-x': se() }],
        'overscroll-y': [{ 'overscroll-y': se() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [L] }],
        'inset-x': [{ 'inset-x': [L] }],
        'inset-y': [{ 'inset-y': [L] }],
        start: [{ start: [L] }],
        end: [{ end: [L] }],
        top: [{ top: [L] }],
        right: [{ right: [L] }],
        bottom: [{ bottom: [L] }],
        left: [{ left: [L] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', Ar, fe] }],
        basis: [{ basis: we() }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', fe] }],
        grow: [{ grow: W() }],
        shrink: [{ shrink: W() }],
        order: [{ order: ['first', 'last', 'none', Ar, fe] }],
        'grid-cols': [{ 'grid-cols': [Fr] }],
        'col-start-end': [{ col: ['auto', { span: ['full', Ar, fe] }, fe] }],
        'col-start': [{ 'col-start': H() }],
        'col-end': [{ 'col-end': H() }],
        'grid-rows': [{ 'grid-rows': [Fr] }],
        'row-start-end': [{ row: ['auto', { span: [Ar, fe] }, fe] }],
        'row-start': [{ 'row-start': H() }],
        'row-end': [{ 'row-end': H() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', fe] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', fe] }],
        gap: [{ gap: [T] }],
        'gap-x': [{ 'gap-x': [T] }],
        'gap-y': [{ 'gap-y': [T] }],
        'justify-content': [{ justify: ['normal', ...A()] }],
        'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
        'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        'align-content': [{ content: ['normal', ...A(), 'baseline'] }],
        'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
        'place-content': [{ 'place-content': [...A(), 'baseline'] }],
        'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
        'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
        p: [{ p: [F] }],
        px: [{ px: [F] }],
        py: [{ py: [F] }],
        ps: [{ ps: [F] }],
        pe: [{ pe: [F] }],
        pt: [{ pt: [F] }],
        pr: [{ pr: [F] }],
        pb: [{ pb: [F] }],
        pl: [{ pl: [F] }],
        m: [{ m: [N] }],
        mx: [{ mx: [N] }],
        my: [{ my: [N] }],
        ms: [{ ms: [N] }],
        me: [{ me: [N] }],
        mt: [{ mt: [N] }],
        mr: [{ mr: [N] }],
        mb: [{ mb: [N] }],
        ml: [{ ml: [N] }],
        'space-x': [{ 'space-x': [J] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [J] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', fe, o] }],
        'min-w': [{ 'min-w': [fe, o, 'min', 'max', 'fit'] }],
        'max-w': [
          { 'max-w': [fe, o, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [on] }, on] },
        ],
        h: [{ h: [fe, o, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [{ 'min-h': [fe, o, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'max-h': [{ 'max-h': [fe, o, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        size: [{ size: [fe, o, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', on, rn] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [
          {
            font: [
              'thin',
              'extralight',
              'light',
              'normal',
              'medium',
              'semibold',
              'bold',
              'extrabold',
              'black',
              ml,
            ],
          },
        ],
        'font-family': [{ font: [Fr] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', fe] }],
        'line-clamp': [{ 'line-clamp': ['none', Gn, ml] }],
        leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', jt, fe] }],
        'list-image': [{ 'list-image': ['none', fe] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', fe] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [l] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [b] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'text-color': [{ text: [l] }],
        'text-opacity': [{ 'text-opacity': [b] }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...de(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: ['auto', 'from-font', jt, rn] }],
        'underline-offset': [{ 'underline-offset': ['auto', jt, fe] }],
        'text-decoration-color': [{ decoration: [l] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: ae() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              fe,
            ],
          },
        ],
        whitespace: [
          { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', fe] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [b] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...xe(), ng] }],
        'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', tg] }],
        'bg-image': [
          { bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, og] },
        ],
        'bg-color': [{ bg: [l] }],
        'gradient-from-pos': [{ from: [_] }],
        'gradient-via-pos': [{ via: [_] }],
        'gradient-to-pos': [{ to: [_] }],
        'gradient-from': [{ from: [I] }],
        'gradient-via': [{ via: [I] }],
        'gradient-to': [{ to: [I] }],
        rounded: [{ rounded: [f] }],
        'rounded-s': [{ 'rounded-s': [f] }],
        'rounded-e': [{ 'rounded-e': [f] }],
        'rounded-t': [{ 'rounded-t': [f] }],
        'rounded-r': [{ 'rounded-r': [f] }],
        'rounded-b': [{ 'rounded-b': [f] }],
        'rounded-l': [{ 'rounded-l': [f] }],
        'rounded-ss': [{ 'rounded-ss': [f] }],
        'rounded-se': [{ 'rounded-se': [f] }],
        'rounded-ee': [{ 'rounded-ee': [f] }],
        'rounded-es': [{ 'rounded-es': [f] }],
        'rounded-tl': [{ 'rounded-tl': [f] }],
        'rounded-tr': [{ 'rounded-tr': [f] }],
        'rounded-br': [{ 'rounded-br': [f] }],
        'rounded-bl': [{ 'rounded-bl': [f] }],
        'border-w': [{ border: [h] }],
        'border-w-x': [{ 'border-x': [h] }],
        'border-w-y': [{ 'border-y': [h] }],
        'border-w-s': [{ 'border-s': [h] }],
        'border-w-e': [{ 'border-e': [h] }],
        'border-w-t': [{ 'border-t': [h] }],
        'border-w-r': [{ 'border-r': [h] }],
        'border-w-b': [{ 'border-b': [h] }],
        'border-w-l': [{ 'border-l': [h] }],
        'border-opacity': [{ 'border-opacity': [b] }],
        'border-style': [{ border: [...de(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [h] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [h] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [b] }],
        'divide-style': [{ divide: de() }],
        'border-color': [{ border: [c] }],
        'border-color-x': [{ 'border-x': [c] }],
        'border-color-y': [{ 'border-y': [c] }],
        'border-color-s': [{ 'border-s': [c] }],
        'border-color-e': [{ 'border-e': [c] }],
        'border-color-t': [{ 'border-t': [c] }],
        'border-color-r': [{ 'border-r': [c] }],
        'border-color-b': [{ 'border-b': [c] }],
        'border-color-l': [{ 'border-l': [c] }],
        'divide-color': [{ divide: [c] }],
        'outline-style': [{ outline: ['', ...de()] }],
        'outline-offset': [{ 'outline-offset': [jt, fe] }],
        'outline-w': [{ outline: [jt, rn] }],
        'outline-color': [{ outline: [l] }],
        'ring-w': [{ ring: ge() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [l] }],
        'ring-opacity': [{ 'ring-opacity': [b] }],
        'ring-offset-w': [{ 'ring-offset': [jt, rn] }],
        'ring-offset-color': [{ 'ring-offset': [l] }],
        shadow: [{ shadow: ['', 'inner', 'none', on, ig] }],
        'shadow-color': [{ shadow: [Fr] }],
        opacity: [{ opacity: [b] }],
        'mix-blend': [{ 'mix-blend': [...ce(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': ce() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [i] }],
        brightness: [{ brightness: [u] }],
        contrast: [{ contrast: [v] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', on, fe] }],
        grayscale: [{ grayscale: [m] }],
        'hue-rotate': [{ 'hue-rotate': [S] }],
        invert: [{ invert: [E] }],
        saturate: [{ saturate: [G] }],
        sepia: [{ sepia: [te] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [i] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [u] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [v] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [m] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [S] }],
        'backdrop-invert': [{ 'backdrop-invert': [E] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [b] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [G] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [te] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [p] }],
        'border-spacing-x': [{ 'border-spacing-x': [p] }],
        'border-spacing-y': [{ 'border-spacing-y': [p] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          { transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', fe] },
        ],
        duration: [{ duration: w() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', fe] }],
        delay: [{ delay: w() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', fe] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [V] }],
        'scale-x': [{ 'scale-x': [V] }],
        'scale-y': [{ 'scale-y': [V] }],
        rotate: [{ rotate: [Ar, fe] }],
        'translate-x': [{ 'translate-x': [ie] }],
        'translate-y': [{ 'translate-y': [ie] }],
        'skew-x': [{ 'skew-x': [ne] }],
        'skew-y': [{ 'skew-y': [ne] }],
        'transform-origin': [
          {
            origin: [
              'center',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
              fe,
            ],
          },
        ],
        accent: [{ accent: ['auto', l] }],
        appearance: [{ appearance: ['none', 'auto'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              fe,
            ],
          },
        ],
        'caret-color': [{ caret: [l] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': ae() }],
        'scroll-mx': [{ 'scroll-mx': ae() }],
        'scroll-my': [{ 'scroll-my': ae() }],
        'scroll-ms': [{ 'scroll-ms': ae() }],
        'scroll-me': [{ 'scroll-me': ae() }],
        'scroll-mt': [{ 'scroll-mt': ae() }],
        'scroll-mr': [{ 'scroll-mr': ae() }],
        'scroll-mb': [{ 'scroll-mb': ae() }],
        'scroll-ml': [{ 'scroll-ml': ae() }],
        'scroll-p': [{ 'scroll-p': ae() }],
        'scroll-px': [{ 'scroll-px': ae() }],
        'scroll-py': [{ 'scroll-py': ae() }],
        'scroll-ps': [{ 'scroll-ps': ae() }],
        'scroll-pe': [{ 'scroll-pe': ae() }],
        'scroll-pt': [{ 'scroll-pt': ae() }],
        'scroll-pr': [{ 'scroll-pr': ae() }],
        'scroll-pb': [{ 'scroll-pb': ae() }],
        'scroll-pl': [{ 'scroll-pl': ae() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', fe] }],
        fill: [{ fill: [l, 'none'] }],
        'stroke-w': [{ stroke: [jt, rn, ml] }],
        stroke: [{ stroke: [l, 'none'] }],
        sr: ['sr-only', 'not-sr-only'],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
    };
  },
  cg = Hm(ug);
function Xn(...l) {
  return cg(Im(l));
}
const fg = Pm,
  Yf = R.forwardRef(({ className: l, ...o }, i) =>
    Q.jsx(jf, {
      ref: i,
      className: Xn(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        l,
      ),
      ...o,
    }),
  );
Yf.displayName = jf.displayName;
const dg = Tm(
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    {
      variants: {
        variant: {
          default: 'border bg-background text-foreground',
          destructive:
            'destructive group border-destructive bg-destructive text-destructive-foreground',
        },
      },
      defaultVariants: { variant: 'default' },
    },
  ),
  Xf = R.forwardRef(({ className: l, variant: o, ...i }, u) =>
    Q.jsx(Af, { ref: u, className: Xn(dg({ variant: o }), l), ...i }),
  );
Xf.displayName = Af.displayName;
const pg = R.forwardRef(({ className: l, ...o }, i) =>
  Q.jsx(Uf, {
    ref: i,
    className: Xn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      l,
    ),
    ...o,
  }),
);
pg.displayName = Uf.displayName;
const Jf = R.forwardRef(({ className: l, ...o }, i) =>
  Q.jsx(Vf, {
    ref: i,
    className: Xn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      l,
    ),
    'toast-close': '',
    ...o,
    children: Q.jsx(_m, { className: 'h-4 w-4' }),
  }),
);
Jf.displayName = Vf.displayName;
const qf = R.forwardRef(({ className: l, ...o }, i) =>
  Q.jsx(Ff, { ref: i, className: Xn('text-sm font-semibold', l), ...o }),
);
qf.displayName = Ff.displayName;
const Zf = R.forwardRef(({ className: l, ...o }, i) =>
  Q.jsx($f, { ref: i, className: Xn('text-sm opacity-90', l), ...o }),
);
Zf.displayName = $f.displayName;
function hg() {
  const { toasts: l } = zh();
  return Q.jsxs(fg, {
    children: [
      l.map(function ({ id: o, title: i, description: u, action: c, ...f }) {
        return Q.jsxs(
          Xf,
          {
            ...f,
            children: [
              Q.jsxs('div', {
                className: 'grid gap-1',
                children: [i && Q.jsx(qf, { children: i }), u && Q.jsx(Zf, { children: u })],
              }),
              c,
              Q.jsx(Jf, {}),
            ],
          },
          o,
        );
      }),
      Q.jsx(Yf, {}),
    ],
  });
}
const le = l => typeof l == 'string',
  $r = () => {
    let l, o;
    const i = new Promise((u, c) => {
      (l = u), (o = c);
    });
    return (i.resolve = l), (i.reject = o), i;
  },
  Gc = l => (l == null ? '' : '' + l),
  mg = (l, o, i) => {
    l.forEach(u => {
      o[u] && (i[u] = o[u]);
    });
  },
  gg = /###/g,
  Yc = l => (l && l.indexOf('###') > -1 ? l.replace(gg, '.') : l),
  Xc = l => !l || le(l),
  Vr = (l, o, i) => {
    const u = le(o) ? o.split('.') : o;
    let c = 0;
    for (; c < u.length - 1; ) {
      if (Xc(l)) return {};
      const f = Yc(u[c]);
      !l[f] && i && (l[f] = new i()),
        Object.prototype.hasOwnProperty.call(l, f) ? (l = l[f]) : (l = {}),
        ++c;
    }
    return Xc(l) ? {} : { obj: l, k: Yc(u[c]) };
  },
  Jc = (l, o, i) => {
    const { obj: u, k: c } = Vr(l, o, Object);
    if (u !== void 0 || o.length === 1) {
      u[c] = i;
      return;
    }
    let f = o[o.length - 1],
      p = o.slice(0, o.length - 1),
      h = Vr(l, p, Object);
    for (; h.obj === void 0 && p.length; )
      (f = `${p[p.length - 1]}.${f}`),
        (p = p.slice(0, p.length - 1)),
        (h = Vr(l, p, Object)),
        h != null && h.obj && typeof h.obj[`${h.k}.${f}`] < 'u' && (h.obj = void 0);
    h.obj[`${h.k}.${f}`] = i;
  },
  vg = (l, o, i, u) => {
    const { obj: c, k: f } = Vr(l, o, Object);
    (c[f] = c[f] || []), c[f].push(i);
  },
  ui = (l, o) => {
    const { obj: i, k: u } = Vr(l, o);
    if (i && Object.prototype.hasOwnProperty.call(i, u)) return i[u];
  },
  yg = (l, o, i) => {
    const u = ui(l, i);
    return u !== void 0 ? u : ui(o, i);
  },
  ed = (l, o, i) => {
    for (const u in o)
      u !== '__proto__' &&
        u !== 'constructor' &&
        (u in l
          ? le(l[u]) || l[u] instanceof String || le(o[u]) || o[u] instanceof String
            ? i && (l[u] = o[u])
            : ed(l[u], o[u], i)
          : (l[u] = o[u]));
    return l;
  },
  Qn = l => l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var wg = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const xg = l => (le(l) ? l.replace(/[&<>"'\/]/g, o => wg[o]) : l);
class Sg {
  constructor(o) {
    (this.capacity = o), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(o) {
    const i = this.regExpMap.get(o);
    if (i !== void 0) return i;
    const u = new RegExp(o);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(o, u),
      this.regExpQueue.push(o),
      u
    );
  }
}
const Eg = [' ', ',', '?', '!', ';'],
  kg = new Sg(20),
  Cg = (l, o, i) => {
    (o = o || ''), (i = i || '');
    const u = Eg.filter(p => o.indexOf(p) < 0 && i.indexOf(p) < 0);
    if (u.length === 0) return !0;
    const c = kg.getRegExp(`(${u.map(p => (p === '?' ? '\\?' : p)).join('|')})`);
    let f = !c.test(l);
    if (!f) {
      const p = l.indexOf(i);
      p > 0 && !c.test(l.substring(0, p)) && (f = !0);
    }
    return f;
  },
  Tl = (l, o, i = '.') => {
    if (!l) return;
    if (l[o]) return Object.prototype.hasOwnProperty.call(l, o) ? l[o] : void 0;
    const u = o.split(i);
    let c = l;
    for (let f = 0; f < u.length; ) {
      if (!c || typeof c != 'object') return;
      let p,
        h = '';
      for (let v = f; v < u.length; ++v)
        if ((v !== f && (h += i), (h += u[v]), (p = c[h]), p !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof p) > -1 && v < u.length - 1) continue;
          f += v - f + 1;
          break;
        }
      c = p;
    }
    return c;
  },
  Br = l => (l == null ? void 0 : l.replace('_', '-')),
  Pg = {
    type: 'logger',
    log(l) {
      this.output('log', l);
    },
    warn(l) {
      this.output('warn', l);
    },
    error(l) {
      this.output('error', l);
    },
    output(l, o) {
      var i, u;
      (u = (i = console == null ? void 0 : console[l]) == null ? void 0 : i.apply) == null ||
        u.call(i, console, o);
    },
  };
class ci {
  constructor(o, i = {}) {
    this.init(o, i);
  }
  init(o, i = {}) {
    (this.prefix = i.prefix || 'i18next:'),
      (this.logger = o || Pg),
      (this.options = i),
      (this.debug = i.debug);
  }
  log(...o) {
    return this.forward(o, 'log', '', !0);
  }
  warn(...o) {
    return this.forward(o, 'warn', '', !0);
  }
  error(...o) {
    return this.forward(o, 'error', '');
  }
  deprecate(...o) {
    return this.forward(o, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(o, i, u, c) {
    return c && !this.debug
      ? null
      : (le(o[0]) && (o[0] = `${u}${this.prefix} ${o[0]}`), this.logger[i](o));
  }
  create(o) {
    return new ci(this.logger, { prefix: `${this.prefix}:${o}:`, ...this.options });
  }
  clone(o) {
    return (o = o || this.options), (o.prefix = o.prefix || this.prefix), new ci(this.logger, o);
  }
}
var Tt = new ci();
class pi {
  constructor() {
    this.observers = {};
  }
  on(o, i) {
    return (
      o.split(' ').forEach(u => {
        this.observers[u] || (this.observers[u] = new Map());
        const c = this.observers[u].get(i) || 0;
        this.observers[u].set(i, c + 1);
      }),
      this
    );
  }
  off(o, i) {
    if (this.observers[o]) {
      if (!i) {
        delete this.observers[o];
        return;
      }
      this.observers[o].delete(i);
    }
  }
  emit(o, ...i) {
    this.observers[o] &&
      Array.from(this.observers[o].entries()).forEach(([c, f]) => {
        for (let p = 0; p < f; p++) c(...i);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach(([c, f]) => {
          for (let p = 0; p < f; p++) c.apply(c, [o, ...i]);
        });
  }
}
class qc extends pi {
  constructor(o, i = { ns: ['translation'], defaultNS: 'translation' }) {
    super(),
      (this.data = o || {}),
      (this.options = i),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(o) {
    this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
  }
  removeNamespaces(o) {
    const i = this.options.ns.indexOf(o);
    i > -1 && this.options.ns.splice(i, 1);
  }
  getResource(o, i, u, c = {}) {
    var m, S;
    const f = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
      p =
        c.ignoreJSONStructure !== void 0 ? c.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let h;
    o.indexOf('.') > -1
      ? (h = o.split('.'))
      : ((h = [o, i]),
        u && (Array.isArray(u) ? h.push(...u) : le(u) && f ? h.push(...u.split(f)) : h.push(u)));
    const v = ui(this.data, h);
    return (
      !v && !i && !u && o.indexOf('.') > -1 && ((o = h[0]), (i = h[1]), (u = h.slice(2).join('.'))),
      v || !p || !le(u)
        ? v
        : Tl((S = (m = this.data) == null ? void 0 : m[o]) == null ? void 0 : S[i], u, f)
    );
  }
  addResource(o, i, u, c, f = { silent: !1 }) {
    const p = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let h = [o, i];
    u && (h = h.concat(p ? u.split(p) : u)),
      o.indexOf('.') > -1 && ((h = o.split('.')), (c = i), (i = h[1])),
      this.addNamespaces(i),
      Jc(this.data, h, c),
      f.silent || this.emit('added', o, i, u, c);
  }
  addResources(o, i, u, c = { silent: !1 }) {
    for (const f in u)
      (le(u[f]) || Array.isArray(u[f])) && this.addResource(o, i, f, u[f], { silent: !0 });
    c.silent || this.emit('added', o, i, u);
  }
  addResourceBundle(o, i, u, c, f, p = { silent: !1, skipCopy: !1 }) {
    let h = [o, i];
    o.indexOf('.') > -1 && ((h = o.split('.')), (c = u), (u = i), (i = h[1])),
      this.addNamespaces(i);
    let v = ui(this.data, h) || {};
    p.skipCopy || (u = JSON.parse(JSON.stringify(u))),
      c ? ed(v, u, f) : (v = { ...v, ...u }),
      Jc(this.data, h, v),
      p.silent || this.emit('added', o, i, u);
  }
  removeResourceBundle(o, i) {
    this.hasResourceBundle(o, i) && delete this.data[o][i],
      this.removeNamespaces(i),
      this.emit('removed', o, i);
  }
  hasResourceBundle(o, i) {
    return this.getResource(o, i) !== void 0;
  }
  getResourceBundle(o, i) {
    return i || (i = this.options.defaultNS), this.getResource(o, i);
  }
  getDataByLanguage(o) {
    return this.data[o];
  }
  hasLanguageSomeTranslations(o) {
    const i = this.getDataByLanguage(o);
    return !!((i && Object.keys(i)) || []).find(c => i[c] && Object.keys(i[c]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var td = {
  processors: {},
  addPostProcessor(l) {
    this.processors[l.name] = l;
  },
  handle(l, o, i, u, c) {
    return (
      l.forEach(f => {
        var p;
        o = ((p = this.processors[f]) == null ? void 0 : p.process(o, i, u, c)) ?? o;
      }),
      o
    );
  },
};
const Zc = {},
  ef = l => !le(l) && typeof l != 'boolean' && typeof l != 'number';
class fi extends pi {
  constructor(o, i = {}) {
    super(),
      mg(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        o,
        this,
      ),
      (this.options = i),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Tt.create('translator'));
  }
  changeLanguage(o) {
    o && (this.language = o);
  }
  exists(o, i = { interpolation: {} }) {
    const u = { ...i };
    if (o == null) return !1;
    const c = this.resolve(o, u);
    return (c == null ? void 0 : c.res) !== void 0;
  }
  extractFromKey(o, i) {
    let u = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ':');
    const c = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let f = i.ns || this.options.defaultNS || [];
    const p = u && o.indexOf(u) > -1,
      h =
        !this.options.userDefinedKeySeparator &&
        !i.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !i.nsSeparator &&
        !Cg(o, u, c);
    if (p && !h) {
      const v = o.match(this.interpolator.nestingRegexp);
      if (v && v.length > 0) return { key: o, namespaces: le(f) ? [f] : f };
      const m = o.split(u);
      (u !== c || (u === c && this.options.ns.indexOf(m[0]) > -1)) && (f = m.shift()),
        (o = m.join(c));
    }
    return { key: o, namespaces: le(f) ? [f] : f };
  }
  translate(o, i, u) {
    let c = typeof i == 'object' ? { ...i } : i;
    if (
      (typeof c != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (c = this.options.overloadTranslationOptionHandler(arguments)),
      typeof options == 'object' && (c = { ...c }),
      c || (c = {}),
      o == null)
    )
      return '';
    Array.isArray(o) || (o = [String(o)]);
    const f = c.returnDetails !== void 0 ? c.returnDetails : this.options.returnDetails,
      p = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
      { key: h, namespaces: v } = this.extractFromKey(o[o.length - 1], c),
      m = v[v.length - 1];
    let S = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
    S === void 0 && (S = ':');
    const E = c.lng || this.language,
      T = c.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((E == null ? void 0 : E.toLowerCase()) === 'cimode')
      return T
        ? f
          ? {
              res: `${m}${S}${h}`,
              usedKey: h,
              exactUsedKey: h,
              usedLng: E,
              usedNS: m,
              usedParams: this.getUsedParamsDetails(c),
            }
          : `${m}${S}${h}`
        : f
          ? {
              res: h,
              usedKey: h,
              exactUsedKey: h,
              usedLng: E,
              usedNS: m,
              usedParams: this.getUsedParamsDetails(c),
            }
          : h;
    const I = this.resolve(o, c);
    let _ = I == null ? void 0 : I.res;
    const L = (I == null ? void 0 : I.usedKey) || h,
      N = (I == null ? void 0 : I.exactUsedKey) || h,
      b = ['[object Number]', '[object Function]', '[object RegExp]'],
      F = c.joinArrays !== void 0 ? c.joinArrays : this.options.joinArrays,
      G = !this.i18nFormat || this.i18nFormat.handleAsObject,
      V = c.count !== void 0 && !le(c.count),
      te = fi.hasDefaultValue(c),
      ne = V ? this.pluralResolver.getSuffix(E, c.count, c) : '',
      J = c.ordinal && V ? this.pluralResolver.getSuffix(E, c.count, { ordinal: !1 }) : '',
      ie = V && !c.ordinal && c.count === 0,
      se =
        (ie && c[`defaultValue${this.options.pluralSeparator}zero`]) ||
        c[`defaultValue${ne}`] ||
        c[`defaultValue${J}`] ||
        c.defaultValue;
    let re = _;
    G && !_ && te && (re = se);
    const we = ef(re),
      ae = Object.prototype.toString.apply(re);
    if (G && re && we && b.indexOf(ae) < 0 && !(le(F) && Array.isArray(re))) {
      if (!c.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const ge = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(L, re, { ...c, ns: v })
          : `key '${h} (${this.language})' returned an object instead of string.`;
        return f ? ((I.res = ge), (I.usedParams = this.getUsedParamsDetails(c)), I) : ge;
      }
      if (p) {
        const ge = Array.isArray(re),
          H = ge ? [] : {},
          xe = ge ? N : L;
        for (const de in re)
          if (Object.prototype.hasOwnProperty.call(re, de)) {
            const ce = `${xe}${p}${de}`;
            te && !_
              ? (H[de] = this.translate(ce, {
                  ...c,
                  defaultValue: ef(se) ? se[de] : void 0,
                  joinArrays: !1,
                  ns: v,
                }))
              : (H[de] = this.translate(ce, { ...c, joinArrays: !1, ns: v })),
              H[de] === ce && (H[de] = re[de]);
          }
        _ = H;
      }
    } else if (G && le(F) && Array.isArray(_))
      (_ = _.join(F)), _ && (_ = this.extendTranslation(_, o, c, u));
    else {
      let ge = !1,
        H = !1;
      !this.isValidLookup(_) && te && ((ge = !0), (_ = se)),
        this.isValidLookup(_) || ((H = !0), (_ = h));
      const de =
          (c.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && H
            ? void 0
            : _,
        ce = te && se !== _ && this.options.updateMissing;
      if (H || ge || ce) {
        if ((this.logger.log(ce ? 'updateKey' : 'missingKey', E, m, h, ce ? se : _), p)) {
          const w = this.resolve(h, { ...c, keySeparator: !1 });
          w &&
            w.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let A = [];
        const W = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          c.lng || this.language,
        );
        if (this.options.saveMissingTo === 'fallback' && W && W[0])
          for (let w = 0; w < W.length; w++) A.push(W[w]);
        else
          this.options.saveMissingTo === 'all'
            ? (A = this.languageUtils.toResolveHierarchy(c.lng || this.language))
            : A.push(c.lng || this.language);
        const $ = (w, O, ee) => {
          var he;
          const ue = te && ee !== _ ? ee : de;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(w, m, O, ue, ce, c)
            : (he = this.backendConnector) != null &&
              he.saveMissing &&
              this.backendConnector.saveMissing(w, m, O, ue, ce, c),
            this.emit('missingKey', w, m, O, _);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && V
            ? A.forEach(w => {
                const O = this.pluralResolver.getSuffixes(w, c);
                ie &&
                  c[`defaultValue${this.options.pluralSeparator}zero`] &&
                  O.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  O.push(`${this.options.pluralSeparator}zero`),
                  O.forEach(ee => {
                    $([w], h + ee, c[`defaultValue${ee}`] || se);
                  });
              })
            : $(A, h, se));
      }
      (_ = this.extendTranslation(_, o, c, I, u)),
        H && _ === h && this.options.appendNamespaceToMissingKey && (_ = `${m}${S}${h}`),
        (H || ge) &&
          this.options.parseMissingKeyHandler &&
          (_ = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${m}${S}${h}` : h,
            ge ? _ : void 0,
            c,
          ));
    }
    return f ? ((I.res = _), (I.usedParams = this.getUsedParamsDetails(c)), I) : _;
  }
  extendTranslation(o, i, u, c, f) {
    var v, m;
    if ((v = this.i18nFormat) != null && v.parse)
      o = this.i18nFormat.parse(
        o,
        { ...this.options.interpolation.defaultVariables, ...u },
        u.lng || this.language || c.usedLng,
        c.usedNS,
        c.usedKey,
        { resolved: c },
      );
    else if (!u.skipInterpolation) {
      u.interpolation &&
        this.interpolator.init({
          ...u,
          interpolation: { ...this.options.interpolation, ...u.interpolation },
        });
      const S =
        le(o) &&
        (((m = u == null ? void 0 : u.interpolation) == null ? void 0 : m.skipOnVariables) !==
        void 0
          ? u.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let E;
      if (S) {
        const I = o.match(this.interpolator.nestingRegexp);
        E = I && I.length;
      }
      let T = u.replace && !le(u.replace) ? u.replace : u;
      if (
        (this.options.interpolation.defaultVariables &&
          (T = { ...this.options.interpolation.defaultVariables, ...T }),
        (o = this.interpolator.interpolate(o, T, u.lng || this.language || c.usedLng, u)),
        S)
      ) {
        const I = o.match(this.interpolator.nestingRegexp),
          _ = I && I.length;
        E < _ && (u.nest = !1);
      }
      !u.lng && c && c.res && (u.lng = this.language || c.usedLng),
        u.nest !== !1 &&
          (o = this.interpolator.nest(
            o,
            (...I) =>
              (f == null ? void 0 : f[0]) === I[0] && !u.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${I[0]} in key: ${i[0]}`,
                  ),
                  null)
                : this.translate(...I, i),
            u,
          )),
        u.interpolation && this.interpolator.reset();
    }
    const p = u.postProcess || this.options.postProcess,
      h = le(p) ? [p] : p;
    return (
      o != null &&
        h != null &&
        h.length &&
        u.applyPostProcessor !== !1 &&
        (o = td.handle(
          h,
          o,
          i,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...c, usedParams: this.getUsedParamsDetails(u) }, ...u }
            : u,
          this,
        )),
      o
    );
  }
  resolve(o, i = {}) {
    let u, c, f, p, h;
    return (
      le(o) && (o = [o]),
      o.forEach(v => {
        if (this.isValidLookup(u)) return;
        const m = this.extractFromKey(v, i),
          S = m.key;
        c = S;
        let E = m.namespaces;
        this.options.fallbackNS && (E = E.concat(this.options.fallbackNS));
        const T = i.count !== void 0 && !le(i.count),
          I = T && !i.ordinal && i.count === 0,
          _ =
            i.context !== void 0 &&
            (le(i.context) || typeof i.context == 'number') &&
            i.context !== '',
          L = i.lngs
            ? i.lngs
            : this.languageUtils.toResolveHierarchy(i.lng || this.language, i.fallbackLng);
        E.forEach(N => {
          var b, F;
          this.isValidLookup(u) ||
            ((h = N),
            !Zc[`${L[0]}-${N}`] &&
              (b = this.utils) != null &&
              b.hasLoadedNamespace &&
              !((F = this.utils) != null && F.hasLoadedNamespace(h)) &&
              ((Zc[`${L[0]}-${N}`] = !0),
              this.logger.warn(
                `key "${c}" for languages "${L.join(', ')}" won't get resolved as namespace "${h}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            L.forEach(G => {
              var ne;
              if (this.isValidLookup(u)) return;
              p = G;
              const V = [S];
              if ((ne = this.i18nFormat) != null && ne.addLookupKeys)
                this.i18nFormat.addLookupKeys(V, S, G, N, i);
              else {
                let J;
                T && (J = this.pluralResolver.getSuffix(G, i.count, i));
                const ie = `${this.options.pluralSeparator}zero`,
                  se = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (T &&
                    (V.push(S + J),
                    i.ordinal &&
                      J.indexOf(se) === 0 &&
                      V.push(S + J.replace(se, this.options.pluralSeparator)),
                    I && V.push(S + ie)),
                  _)
                ) {
                  const re = `${S}${this.options.contextSeparator}${i.context}`;
                  V.push(re),
                    T &&
                      (V.push(re + J),
                      i.ordinal &&
                        J.indexOf(se) === 0 &&
                        V.push(re + J.replace(se, this.options.pluralSeparator)),
                      I && V.push(re + ie));
                }
              }
              let te;
              for (; (te = V.pop()); )
                this.isValidLookup(u) || ((f = te), (u = this.getResource(G, N, te, i)));
            }));
        });
      }),
      { res: u, usedKey: c, exactUsedKey: f, usedLng: p, usedNS: h }
    );
  }
  isValidLookup(o) {
    return (
      o !== void 0 &&
      !(!this.options.returnNull && o === null) &&
      !(!this.options.returnEmptyString && o === '')
    );
  }
  getResource(o, i, u, c = {}) {
    var f;
    return (f = this.i18nFormat) != null && f.getResource
      ? this.i18nFormat.getResource(o, i, u, c)
      : this.resourceStore.getResource(o, i, u, c);
  }
  getUsedParamsDetails(o = {}) {
    const i = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      u = o.replace && !le(o.replace);
    let c = u ? o.replace : o;
    if (
      (u && typeof o.count < 'u' && (c.count = o.count),
      this.options.interpolation.defaultVariables &&
        (c = { ...this.options.interpolation.defaultVariables, ...c }),
      !u)
    ) {
      c = { ...c };
      for (const f of i) delete c[f];
    }
    return c;
  }
  static hasDefaultValue(o) {
    const i = 'defaultValue';
    for (const u in o)
      if (
        Object.prototype.hasOwnProperty.call(o, u) &&
        i === u.substring(0, i.length) &&
        o[u] !== void 0
      )
        return !0;
    return !1;
  }
}
class tf {
  constructor(o) {
    (this.options = o),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Tt.create('languageUtils'));
  }
  getScriptPartFromCode(o) {
    if (((o = Br(o)), !o || o.indexOf('-') < 0)) return null;
    const i = o.split('-');
    return i.length === 2 || (i.pop(), i[i.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(i.join('-'));
  }
  getLanguagePartFromCode(o) {
    if (((o = Br(o)), !o || o.indexOf('-') < 0)) return o;
    const i = o.split('-');
    return this.formatLanguageCode(i[0]);
  }
  formatLanguageCode(o) {
    if (le(o) && o.indexOf('-') > -1) {
      let i;
      try {
        i = Intl.getCanonicalLocales(o)[0];
      } catch {}
      return (
        i && this.options.lowerCaseLng && (i = i.toLowerCase()),
        i || (this.options.lowerCaseLng ? o.toLowerCase() : o)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? o.toLowerCase() : o;
  }
  isSupportedCode(o) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (o = this.getLanguagePartFromCode(o)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(o) > -1
    );
  }
  getBestMatchFromCodes(o) {
    if (!o) return null;
    let i;
    return (
      o.forEach(u => {
        if (i) return;
        const c = this.formatLanguageCode(u);
        (!this.options.supportedLngs || this.isSupportedCode(c)) && (i = c);
      }),
      !i &&
        this.options.supportedLngs &&
        o.forEach(u => {
          if (i) return;
          const c = this.getScriptPartFromCode(u);
          if (this.isSupportedCode(c)) return (i = c);
          const f = this.getLanguagePartFromCode(u);
          if (this.isSupportedCode(f)) return (i = f);
          i = this.options.supportedLngs.find(p => {
            if (p === f) return p;
            if (
              !(p.indexOf('-') < 0 && f.indexOf('-') < 0) &&
              ((p.indexOf('-') > 0 && f.indexOf('-') < 0 && p.substring(0, p.indexOf('-')) === f) ||
                (p.indexOf(f) === 0 && f.length > 1))
            )
              return p;
          });
        }),
      i || (i = this.getFallbackCodes(this.options.fallbackLng)[0]),
      i
    );
  }
  getFallbackCodes(o, i) {
    if (!o) return [];
    if ((typeof o == 'function' && (o = o(i)), le(o) && (o = [o]), Array.isArray(o))) return o;
    if (!i) return o.default || [];
    let u = o[i];
    return (
      u || (u = o[this.getScriptPartFromCode(i)]),
      u || (u = o[this.formatLanguageCode(i)]),
      u || (u = o[this.getLanguagePartFromCode(i)]),
      u || (u = o.default),
      u || []
    );
  }
  toResolveHierarchy(o, i) {
    const u = this.getFallbackCodes((i === !1 ? [] : i) || this.options.fallbackLng || [], o),
      c = [],
      f = p => {
        p &&
          (this.isSupportedCode(p)
            ? c.push(p)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${p}`));
      };
    return (
      le(o) && (o.indexOf('-') > -1 || o.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && f(this.formatLanguageCode(o)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            f(this.getScriptPartFromCode(o)),
          this.options.load !== 'currentOnly' && f(this.getLanguagePartFromCode(o)))
        : le(o) && f(this.formatLanguageCode(o)),
      u.forEach(p => {
        c.indexOf(p) < 0 && f(this.formatLanguageCode(p));
      }),
      c
    );
  }
}
const nf = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  rf = {
    select: l => (l === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class Tg {
  constructor(o, i = {}) {
    (this.languageUtils = o),
      (this.options = i),
      (this.logger = Tt.create('pluralResolver')),
      (this.pluralRulesCache = {});
  }
  addRule(o, i) {
    this.rules[o] = i;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(o, i = {}) {
    const u = Br(o === 'dev' ? 'en' : o),
      c = i.ordinal ? 'ordinal' : 'cardinal',
      f = JSON.stringify({ cleanedCode: u, type: c });
    if (f in this.pluralRulesCache) return this.pluralRulesCache[f];
    let p;
    try {
      p = new Intl.PluralRules(u, { type: c });
    } catch {
      if (!Intl) return this.logger.error('No Intl support, please use an Intl polyfill!'), rf;
      if (!o.match(/-|_/)) return rf;
      const v = this.languageUtils.getLanguagePartFromCode(o);
      p = this.getRule(v, i);
    }
    return (this.pluralRulesCache[f] = p), p;
  }
  needsPlural(o, i = {}) {
    let u = this.getRule(o, i);
    return (
      u || (u = this.getRule('dev', i)),
      (u == null ? void 0 : u.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(o, i, u = {}) {
    return this.getSuffixes(o, u).map(c => `${i}${c}`);
  }
  getSuffixes(o, i = {}) {
    let u = this.getRule(o, i);
    return (
      u || (u = this.getRule('dev', i)),
      u
        ? u
            .resolvedOptions()
            .pluralCategories.sort((c, f) => nf[c] - nf[f])
            .map(
              c =>
                `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ''}${c}`,
            )
        : []
    );
  }
  getSuffix(o, i, u = {}) {
    const c = this.getRule(o, u);
    return c
      ? `${this.options.prepend}${u.ordinal ? `ordinal${this.options.prepend}` : ''}${c.select(i)}`
      : (this.logger.warn(`no plural rule found for: ${o}`), this.getSuffix('dev', i, u));
  }
}
const of = (l, o, i, u = '.', c = !0) => {
    let f = yg(l, o, i);
    return !f && c && le(i) && ((f = Tl(l, i, u)), f === void 0 && (f = Tl(o, i, u))), f;
  },
  gl = l => l.replace(/\$/g, '$$$$');
class Ng {
  constructor(o = {}) {
    var i;
    (this.logger = Tt.create('interpolator')),
      (this.options = o),
      (this.format =
        ((i = o == null ? void 0 : o.interpolation) == null ? void 0 : i.format) || (u => u)),
      this.init(o);
  }
  init(o = {}) {
    o.interpolation || (o.interpolation = { escapeValue: !0 });
    const {
      escape: i,
      escapeValue: u,
      useRawValueToEscape: c,
      prefix: f,
      prefixEscaped: p,
      suffix: h,
      suffixEscaped: v,
      formatSeparator: m,
      unescapeSuffix: S,
      unescapePrefix: E,
      nestingPrefix: T,
      nestingPrefixEscaped: I,
      nestingSuffix: _,
      nestingSuffixEscaped: L,
      nestingOptionsSeparator: N,
      maxReplaces: b,
      alwaysFormat: F,
    } = o.interpolation;
    (this.escape = i !== void 0 ? i : xg),
      (this.escapeValue = u !== void 0 ? u : !0),
      (this.useRawValueToEscape = c !== void 0 ? c : !1),
      (this.prefix = f ? Qn(f) : p || '{{'),
      (this.suffix = h ? Qn(h) : v || '}}'),
      (this.formatSeparator = m || ','),
      (this.unescapePrefix = S ? '' : E || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : S || ''),
      (this.nestingPrefix = T ? Qn(T) : I || Qn('$t(')),
      (this.nestingSuffix = _ ? Qn(_) : L || Qn(')')),
      (this.nestingOptionsSeparator = N || ','),
      (this.maxReplaces = b || 1e3),
      (this.alwaysFormat = F !== void 0 ? F : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const o = (i, u) =>
      (i == null ? void 0 : i.source) === u ? ((i.lastIndex = 0), i) : new RegExp(u, 'g');
    (this.regexp = o(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = o(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = o(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      ));
  }
  interpolate(o, i, u, c) {
    var I;
    let f, p, h;
    const v =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      m = _ => {
        if (_.indexOf(this.formatSeparator) < 0) {
          const F = of(i, v, _, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat
            ? this.format(F, void 0, u, { ...c, ...i, interpolationkey: _ })
            : F;
        }
        const L = _.split(this.formatSeparator),
          N = L.shift().trim(),
          b = L.join(this.formatSeparator).trim();
        return this.format(
          of(i, v, N, this.options.keySeparator, this.options.ignoreJSONStructure),
          b,
          u,
          { ...c, ...i, interpolationkey: N },
        );
      };
    this.resetRegExp();
    const S =
        (c == null ? void 0 : c.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      E =
        ((I = c == null ? void 0 : c.interpolation) == null ? void 0 : I.skipOnVariables) !== void 0
          ? c.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: _ => gl(_) },
        { regex: this.regexp, safeValue: _ => (this.escapeValue ? gl(this.escape(_)) : gl(_)) },
      ].forEach(_ => {
        for (h = 0; (f = _.regex.exec(o)); ) {
          const L = f[1].trim();
          if (((p = m(L)), p === void 0))
            if (typeof S == 'function') {
              const b = S(o, f, c);
              p = le(b) ? b : '';
            } else if (c && Object.prototype.hasOwnProperty.call(c, L)) p = '';
            else if (E) {
              p = f[0];
              continue;
            } else
              this.logger.warn(`missed to pass in variable ${L} for interpolating ${o}`), (p = '');
          else !le(p) && !this.useRawValueToEscape && (p = Gc(p));
          const N = _.safeValue(p);
          if (
            ((o = o.replace(f[0], N)),
            E
              ? ((_.regex.lastIndex += p.length), (_.regex.lastIndex -= f[0].length))
              : (_.regex.lastIndex = 0),
            h++,
            h >= this.maxReplaces)
          )
            break;
        }
      }),
      o
    );
  }
  nest(o, i, u = {}) {
    let c, f, p;
    const h = (v, m) => {
      const S = this.nestingOptionsSeparator;
      if (v.indexOf(S) < 0) return v;
      const E = v.split(new RegExp(`${S}[ ]*{`));
      let T = `{${E[1]}`;
      (v = E[0]), (T = this.interpolate(T, p));
      const I = T.match(/'/g),
        _ = T.match(/"/g);
      ((((I == null ? void 0 : I.length) ?? 0) % 2 === 0 && !_) || _.length % 2 !== 0) &&
        (T = T.replace(/'/g, '"'));
      try {
        (p = JSON.parse(T)), m && (p = { ...m, ...p });
      } catch (L) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${v}`, L),
          `${v}${S}${T}`
        );
      }
      return p.defaultValue && p.defaultValue.indexOf(this.prefix) > -1 && delete p.defaultValue, v;
    };
    for (; (c = this.nestingRegexp.exec(o)); ) {
      let v = [];
      (p = { ...u }),
        (p = p.replace && !le(p.replace) ? p.replace : p),
        (p.applyPostProcessor = !1),
        delete p.defaultValue;
      let m = !1;
      if (c[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(c[1])) {
        const S = c[1].split(this.formatSeparator).map(E => E.trim());
        (c[1] = S.shift()), (v = S), (m = !0);
      }
      if (((f = i(h.call(this, c[1].trim(), p), p)), f && c[0] === o && !le(f))) return f;
      le(f) || (f = Gc(f)),
        f || (this.logger.warn(`missed to resolve ${c[1]} for nesting ${o}`), (f = '')),
        m &&
          (f = v.reduce(
            (S, E) => this.format(S, E, u.lng, { ...u, interpolationkey: c[1].trim() }),
            f.trim(),
          )),
        (o = o.replace(c[0], f)),
        (this.regexp.lastIndex = 0);
    }
    return o;
  }
}
const Rg = l => {
    let o = l.toLowerCase().trim();
    const i = {};
    if (l.indexOf('(') > -1) {
      const u = l.split('(');
      o = u[0].toLowerCase().trim();
      const c = u[1].substring(0, u[1].length - 1);
      o === 'currency' && c.indexOf(':') < 0
        ? i.currency || (i.currency = c.trim())
        : o === 'relativetime' && c.indexOf(':') < 0
          ? i.range || (i.range = c.trim())
          : c.split(';').forEach(p => {
              if (p) {
                const [h, ...v] = p.split(':'),
                  m = v
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  S = h.trim();
                i[S] || (i[S] = m),
                  m === 'false' && (i[S] = !1),
                  m === 'true' && (i[S] = !0),
                  isNaN(m) || (i[S] = parseInt(m, 10));
              }
            });
    }
    return { formatName: o, formatOptions: i };
  },
  sf = l => {
    const o = {};
    return (i, u, c) => {
      let f = c;
      c &&
        c.interpolationkey &&
        c.formatParams &&
        c.formatParams[c.interpolationkey] &&
        c[c.interpolationkey] &&
        (f = { ...f, [c.interpolationkey]: void 0 });
      const p = u + JSON.stringify(f);
      let h = o[p];
      return h || ((h = l(Br(u), c)), (o[p] = h)), h(i);
    };
  },
  Lg = l => (o, i, u) => l(Br(i), u)(o);
class Og {
  constructor(o = {}) {
    (this.logger = Tt.create('formatter')), (this.options = o), this.init(o);
  }
  init(o, i = { interpolation: {} }) {
    this.formatSeparator = i.interpolation.formatSeparator || ',';
    const u = i.cacheInBuiltFormats ? sf : Lg;
    this.formats = {
      number: u((c, f) => {
        const p = new Intl.NumberFormat(c, { ...f });
        return h => p.format(h);
      }),
      currency: u((c, f) => {
        const p = new Intl.NumberFormat(c, { ...f, style: 'currency' });
        return h => p.format(h);
      }),
      datetime: u((c, f) => {
        const p = new Intl.DateTimeFormat(c, { ...f });
        return h => p.format(h);
      }),
      relativetime: u((c, f) => {
        const p = new Intl.RelativeTimeFormat(c, { ...f });
        return h => p.format(h, f.range || 'day');
      }),
      list: u((c, f) => {
        const p = new Intl.ListFormat(c, { ...f });
        return h => p.format(h);
      }),
    };
  }
  add(o, i) {
    this.formats[o.toLowerCase().trim()] = i;
  }
  addCached(o, i) {
    this.formats[o.toLowerCase().trim()] = sf(i);
  }
  format(o, i, u, c = {}) {
    const f = i.split(this.formatSeparator);
    if (
      f.length > 1 &&
      f[0].indexOf('(') > 1 &&
      f[0].indexOf(')') < 0 &&
      f.find(h => h.indexOf(')') > -1)
    ) {
      const h = f.findIndex(v => v.indexOf(')') > -1);
      f[0] = [f[0], ...f.splice(1, h)].join(this.formatSeparator);
    }
    return f.reduce((h, v) => {
      var E;
      const { formatName: m, formatOptions: S } = Rg(v);
      if (this.formats[m]) {
        let T = h;
        try {
          const I =
              ((E = c == null ? void 0 : c.formatParams) == null
                ? void 0
                : E[c.interpolationkey]) || {},
            _ = I.locale || I.lng || c.locale || c.lng || u;
          T = this.formats[m](h, _, { ...S, ...c, ...I });
        } catch (I) {
          this.logger.warn(I);
        }
        return T;
      } else this.logger.warn(`there was no format function for ${m}`);
      return h;
    }, o);
  }
}
const _g = (l, o) => {
  l.pending[o] !== void 0 && (delete l.pending[o], l.pendingCount--);
};
class Ig extends pi {
  constructor(o, i, u, c = {}) {
    var f, p;
    super(),
      (this.backend = o),
      (this.store = i),
      (this.services = u),
      (this.languageUtils = u.languageUtils),
      (this.options = c),
      (this.logger = Tt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = c.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = c.maxRetries >= 0 ? c.maxRetries : 5),
      (this.retryTimeout = c.retryTimeout >= 1 ? c.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (p = (f = this.backend) == null ? void 0 : f.init) == null || p.call(f, u, c.backend, c);
  }
  queueLoad(o, i, u, c) {
    const f = {},
      p = {},
      h = {},
      v = {};
    return (
      o.forEach(m => {
        let S = !0;
        i.forEach(E => {
          const T = `${m}|${E}`;
          !u.reload && this.store.hasResourceBundle(m, E)
            ? (this.state[T] = 2)
            : this.state[T] < 0 ||
              (this.state[T] === 1
                ? p[T] === void 0 && (p[T] = !0)
                : ((this.state[T] = 1),
                  (S = !1),
                  p[T] === void 0 && (p[T] = !0),
                  f[T] === void 0 && (f[T] = !0),
                  v[E] === void 0 && (v[E] = !0)));
        }),
          S || (h[m] = !0);
      }),
      (Object.keys(f).length || Object.keys(p).length) &&
        this.queue.push({
          pending: p,
          pendingCount: Object.keys(p).length,
          loaded: {},
          errors: [],
          callback: c,
        }),
      {
        toLoad: Object.keys(f),
        pending: Object.keys(p),
        toLoadLanguages: Object.keys(h),
        toLoadNamespaces: Object.keys(v),
      }
    );
  }
  loaded(o, i, u) {
    const c = o.split('|'),
      f = c[0],
      p = c[1];
    i && this.emit('failedLoading', f, p, i),
      !i && u && this.store.addResourceBundle(f, p, u, void 0, void 0, { skipCopy: !0 }),
      (this.state[o] = i ? -1 : 2),
      i && u && (this.state[o] = 0);
    const h = {};
    this.queue.forEach(v => {
      vg(v.loaded, [f], p),
        _g(v, o),
        i && v.errors.push(i),
        v.pendingCount === 0 &&
          !v.done &&
          (Object.keys(v.loaded).forEach(m => {
            h[m] || (h[m] = {});
            const S = v.loaded[m];
            S.length &&
              S.forEach(E => {
                h[m][E] === void 0 && (h[m][E] = !0);
              });
          }),
          (v.done = !0),
          v.errors.length ? v.callback(v.errors) : v.callback());
    }),
      this.emit('loaded', h),
      (this.queue = this.queue.filter(v => !v.done));
  }
  read(o, i, u, c = 0, f = this.retryTimeout, p) {
    if (!o.length) return p(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: o, ns: i, fcName: u, tried: c, wait: f, callback: p });
      return;
    }
    this.readingCalls++;
    const h = (m, S) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const E = this.waitingReads.shift();
          this.read(E.lng, E.ns, E.fcName, E.tried, E.wait, E.callback);
        }
        if (m && S && c < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, o, i, u, c + 1, f * 2, p);
          }, f);
          return;
        }
        p(m, S);
      },
      v = this.backend[u].bind(this.backend);
    if (v.length === 2) {
      try {
        const m = v(o, i);
        m && typeof m.then == 'function' ? m.then(S => h(null, S)).catch(h) : h(null, m);
      } catch (m) {
        h(m);
      }
      return;
    }
    return v(o, i, h);
  }
  prepareLoading(o, i, u = {}, c) {
    if (!this.backend)
      return (
        this.logger.warn('No backend was added via i18next.use. Will not load resources.'), c && c()
      );
    le(o) && (o = this.languageUtils.toResolveHierarchy(o)), le(i) && (i = [i]);
    const f = this.queueLoad(o, i, u, c);
    if (!f.toLoad.length) return f.pending.length || c(), null;
    f.toLoad.forEach(p => {
      this.loadOne(p);
    });
  }
  load(o, i, u) {
    this.prepareLoading(o, i, {}, u);
  }
  reload(o, i, u) {
    this.prepareLoading(o, i, { reload: !0 }, u);
  }
  loadOne(o, i = '') {
    const u = o.split('|'),
      c = u[0],
      f = u[1];
    this.read(c, f, 'read', void 0, void 0, (p, h) => {
      p && this.logger.warn(`${i}loading namespace ${f} for language ${c} failed`, p),
        !p && h && this.logger.log(`${i}loaded namespace ${f} for language ${c}`, h),
        this.loaded(o, p, h);
    });
  }
  saveMissing(o, i, u, c, f, p = {}, h = () => {}) {
    var v, m, S, E, T;
    if (
      (m = (v = this.services) == null ? void 0 : v.utils) != null &&
      m.hasLoadedNamespace &&
      !((E = (S = this.services) == null ? void 0 : S.utils) != null && E.hasLoadedNamespace(i))
    ) {
      this.logger.warn(
        `did not save key "${u}" as the namespace "${i}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(u == null || u === '')) {
      if ((T = this.backend) != null && T.create) {
        const I = { ...p, isUpdate: f },
          _ = this.backend.create.bind(this.backend);
        if (_.length < 6)
          try {
            let L;
            _.length === 5 ? (L = _(o, i, u, c, I)) : (L = _(o, i, u, c)),
              L && typeof L.then == 'function' ? L.then(N => h(null, N)).catch(h) : h(null, L);
          } catch (L) {
            h(L);
          }
        else _(o, i, u, c, h, I);
      }
      !o || !o[0] || this.store.addResource(o[0], i, u, c);
    }
  }
}
const lf = () => ({
    debug: !1,
    initAsync: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: l => {
      let o = {};
      if (
        (typeof l[1] == 'object' && (o = l[1]),
        le(l[1]) && (o.defaultValue = l[1]),
        le(l[2]) && (o.tDescription = l[2]),
        typeof l[2] == 'object' || typeof l[3] == 'object')
      ) {
        const i = l[3] || l[2];
        Object.keys(i).forEach(u => {
          o[u] = i[u];
        });
      }
      return o;
    },
    interpolation: {
      escapeValue: !0,
      format: l => l,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  af = l => {
    var o, i;
    return (
      le(l.ns) && (l.ns = [l.ns]),
      le(l.fallbackLng) && (l.fallbackLng = [l.fallbackLng]),
      le(l.fallbackNS) && (l.fallbackNS = [l.fallbackNS]),
      ((i = (o = l.supportedLngs) == null ? void 0 : o.indexOf) == null
        ? void 0
        : i.call(o, 'cimode')) < 0 && (l.supportedLngs = l.supportedLngs.concat(['cimode'])),
      typeof l.initImmediate == 'boolean' && (l.initAsync = l.initImmediate),
      l
    );
  },
  si = () => {},
  zg = l => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(l)).forEach(i => {
      typeof l[i] == 'function' && (l[i] = l[i].bind(l));
    });
  };
class Wr extends pi {
  constructor(o = {}, i) {
    if (
      (super(),
      (this.options = af(o)),
      (this.services = {}),
      (this.logger = Tt),
      (this.modules = { external: [] }),
      zg(this),
      i && !this.isInitialized && !o.isClone)
    ) {
      if (!this.options.initAsync) return this.init(o, i), this;
      setTimeout(() => {
        this.init(o, i);
      }, 0);
    }
  }
  init(o = {}, i) {
    (this.isInitializing = !0),
      typeof o == 'function' && ((i = o), (o = {})),
      o.defaultNS == null &&
        o.ns &&
        (le(o.ns)
          ? (o.defaultNS = o.ns)
          : o.ns.indexOf('translation') < 0 && (o.defaultNS = o.ns[0]));
    const u = lf();
    (this.options = { ...u, ...this.options, ...af(o) }),
      (this.options.interpolation = { ...u.interpolation, ...this.options.interpolation }),
      o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator),
      o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    const c = m => (m ? (typeof m == 'function' ? new m() : m) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Tt.init(c(this.modules.logger), this.options)
        : Tt.init(null, this.options);
      let m;
      this.modules.formatter ? (m = this.modules.formatter) : (m = Og);
      const S = new tf(this.options);
      this.store = new qc(this.options.resources, this.options);
      const E = this.services;
      (E.logger = Tt),
        (E.resourceStore = this.store),
        (E.languageUtils = S),
        (E.pluralResolver = new Tg(S, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        m &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === u.interpolation.format) &&
          ((E.formatter = c(m)),
          E.formatter.init(E, this.options),
          (this.options.interpolation.format = E.formatter.format.bind(E.formatter))),
        (E.interpolator = new Ng(this.options)),
        (E.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (E.backendConnector = new Ig(c(this.modules.backend), E.resourceStore, E, this.options)),
        E.backendConnector.on('*', (T, ...I) => {
          this.emit(T, ...I);
        }),
        this.modules.languageDetector &&
          ((E.languageDetector = c(this.modules.languageDetector)),
          E.languageDetector.init &&
            E.languageDetector.init(E, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((E.i18nFormat = c(this.modules.i18nFormat)),
          E.i18nFormat.init && E.i18nFormat.init(this)),
        (this.translator = new fi(this.services, this.options)),
        this.translator.on('*', (T, ...I) => {
          this.emit(T, ...I);
        }),
        this.modules.external.forEach(T => {
          T.init && T.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = si),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const m = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      m.length > 0 && m[0] !== 'dev' && (this.options.lng = m[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(m => {
        this[m] = (...S) => this.store[m](...S);
      }),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach(m => {
        this[m] = (...S) => (this.store[m](...S), this);
      });
    const h = $r(),
      v = () => {
        const m = (S, E) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!',
              ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            h.resolve(E),
            i(S, E);
        };
        if (this.languages && !this.isInitialized) return m(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, m);
      };
    return this.options.resources || !this.options.initAsync ? v() : setTimeout(v, 0), h;
  }
  loadResources(o, i = si) {
    var f, p;
    let u = i;
    const c = le(o) ? o : this.language;
    if (
      (typeof o == 'function' && (u = o),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (c == null ? void 0 : c.toLowerCase()) === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return u();
      const h = [],
        v = m => {
          if (!m || m === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(m).forEach(E => {
            E !== 'cimode' && h.indexOf(E) < 0 && h.push(E);
          });
        };
      c
        ? v(c)
        : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(S => v(S)),
        (p = (f = this.options.preload) == null ? void 0 : f.forEach) == null ||
          p.call(f, m => v(m)),
        this.services.backendConnector.load(h, this.options.ns, m => {
          !m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            u(m);
        });
    } else u(null);
  }
  reloadResources(o, i, u) {
    const c = $r();
    return (
      typeof o == 'function' && ((u = o), (o = void 0)),
      typeof i == 'function' && ((u = i), (i = void 0)),
      o || (o = this.languages),
      i || (i = this.options.ns),
      u || (u = si),
      this.services.backendConnector.reload(o, i, f => {
        c.resolve(), u(f);
      }),
      c
    );
  }
  use(o) {
    if (!o)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
      );
    if (!o.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
      );
    return (
      o.type === 'backend' && (this.modules.backend = o),
      (o.type === 'logger' || (o.log && o.warn && o.error)) && (this.modules.logger = o),
      o.type === 'languageDetector' && (this.modules.languageDetector = o),
      o.type === 'i18nFormat' && (this.modules.i18nFormat = o),
      o.type === 'postProcessor' && td.addPostProcessor(o),
      o.type === 'formatter' && (this.modules.formatter = o),
      o.type === '3rdParty' && this.modules.external.push(o),
      this
    );
  }
  setResolvedLanguage(o) {
    if (!(!o || !this.languages) && !(['cimode', 'dev'].indexOf(o) > -1)) {
      for (let i = 0; i < this.languages.length; i++) {
        const u = this.languages[i];
        if (!(['cimode', 'dev'].indexOf(u) > -1) && this.store.hasLanguageSomeTranslations(u)) {
          this.resolvedLanguage = u;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(o) < 0 &&
        this.store.hasLanguageSomeTranslations(o) &&
        ((this.resolvedLanguage = o), this.languages.unshift(o));
    }
  }
  changeLanguage(o, i) {
    this.isLanguageChangingTo = o;
    const u = $r();
    this.emit('languageChanging', o);
    const c = h => {
        (this.language = h),
          (this.languages = this.services.languageUtils.toResolveHierarchy(h)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(h);
      },
      f = (h, v) => {
        v
          ? this.isLanguageChangingTo === o &&
            (c(v),
            this.translator.changeLanguage(v),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', v),
            this.logger.log('languageChanged', v))
          : (this.isLanguageChangingTo = void 0),
          u.resolve((...m) => this.t(...m)),
          i && i(h, (...m) => this.t(...m));
      },
      p = h => {
        var S, E;
        !o && !h && this.services.languageDetector && (h = []);
        const v = le(h) ? h : h && h[0],
          m = this.store.hasLanguageSomeTranslations(v)
            ? v
            : this.services.languageUtils.getBestMatchFromCodes(le(h) ? [h] : h);
        m &&
          (this.language || c(m),
          this.translator.language || this.translator.changeLanguage(m),
          (E = (S = this.services.languageDetector) == null ? void 0 : S.cacheUserLanguage) ==
            null || E.call(S, m)),
          this.loadResources(m, T => {
            f(T, m);
          });
      };
    return (
      !o && this.services.languageDetector && !this.services.languageDetector.async
        ? p(this.services.languageDetector.detect())
        : !o && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(p)
            : this.services.languageDetector.detect(p)
          : p(o),
      u
    );
  }
  getFixedT(o, i, u) {
    const c = (f, p, ...h) => {
      let v;
      typeof p != 'object'
        ? (v = this.options.overloadTranslationOptionHandler([f, p].concat(h)))
        : (v = { ...p }),
        (v.lng = v.lng || c.lng),
        (v.lngs = v.lngs || c.lngs),
        (v.ns = v.ns || c.ns),
        v.keyPrefix !== '' && (v.keyPrefix = v.keyPrefix || u || c.keyPrefix);
      const m = this.options.keySeparator || '.';
      let S;
      return (
        v.keyPrefix && Array.isArray(f)
          ? (S = f.map(E => `${v.keyPrefix}${m}${E}`))
          : (S = v.keyPrefix ? `${v.keyPrefix}${m}${f}` : f),
        this.t(S, v)
      );
    };
    return le(o) ? (c.lng = o) : (c.lngs = o), (c.ns = i), (c.keyPrefix = u), c;
  }
  t(...o) {
    var i;
    return (i = this.translator) == null ? void 0 : i.translate(...o);
  }
  exists(...o) {
    var i;
    return (i = this.translator) == null ? void 0 : i.exists(...o);
  }
  setDefaultNamespace(o) {
    this.options.defaultNS = o;
  }
  hasLoadedNamespace(o, i = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages,
        ),
        !1
      );
    const u = i.lng || this.resolvedLanguage || this.languages[0],
      c = this.options ? this.options.fallbackLng : !1,
      f = this.languages[this.languages.length - 1];
    if (u.toLowerCase() === 'cimode') return !0;
    const p = (h, v) => {
      const m = this.services.backendConnector.state[`${h}|${v}`];
      return m === -1 || m === 0 || m === 2;
    };
    if (i.precheck) {
      const h = i.precheck(this, p);
      if (h !== void 0) return h;
    }
    return !!(
      this.hasResourceBundle(u, o) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (p(u, o) && (!c || p(f, o)))
    );
  }
  loadNamespaces(o, i) {
    const u = $r();
    return this.options.ns
      ? (le(o) && (o = [o]),
        o.forEach(c => {
          this.options.ns.indexOf(c) < 0 && this.options.ns.push(c);
        }),
        this.loadResources(c => {
          u.resolve(), i && i(c);
        }),
        u)
      : (i && i(), Promise.resolve());
  }
  loadLanguages(o, i) {
    const u = $r();
    le(o) && (o = [o]);
    const c = this.options.preload || [],
      f = o.filter(p => c.indexOf(p) < 0 && this.services.languageUtils.isSupportedCode(p));
    return f.length
      ? ((this.options.preload = c.concat(f)),
        this.loadResources(p => {
          u.resolve(), i && i(p);
        }),
        u)
      : (i && i(), Promise.resolve());
  }
  dir(o) {
    var c, f;
    if (
      (o ||
        (o =
          this.resolvedLanguage ||
          (((c = this.languages) == null ? void 0 : c.length) > 0
            ? this.languages[0]
            : this.language)),
      !o)
    )
      return 'rtl';
    const i = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      u = ((f = this.services) == null ? void 0 : f.languageUtils) || new tf(lf());
    return i.indexOf(u.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance(o = {}, i) {
    return new Wr(o, i);
  }
  cloneInstance(o = {}, i = si) {
    const u = o.forkResourceStore;
    u && delete o.forkResourceStore;
    const c = { ...this.options, ...o, isClone: !0 },
      f = new Wr(c);
    if (
      ((o.debug !== void 0 || o.prefix !== void 0) && (f.logger = f.logger.clone(o)),
      ['store', 'services', 'language'].forEach(h => {
        f[h] = this[h];
      }),
      (f.services = { ...this.services }),
      (f.services.utils = { hasLoadedNamespace: f.hasLoadedNamespace.bind(f) }),
      u)
    ) {
      const h = Object.keys(this.store.data).reduce(
        (v, m) => (
          (v[m] = { ...this.store.data[m] }),
          (v[m] = Object.keys(v[m]).reduce((S, E) => ((S[E] = { ...v[m][E] }), S), v[m])),
          v
        ),
        {},
      );
      (f.store = new qc(h, c)), (f.services.resourceStore = f.store);
    }
    return (
      (f.translator = new fi(f.services, c)),
      f.translator.on('*', (h, ...v) => {
        f.emit(h, ...v);
      }),
      f.init(c, i),
      (f.translator.options = c),
      (f.translator.backendConnector.services.utils = {
        hasLoadedNamespace: f.hasLoadedNamespace.bind(f),
      }),
      f
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const Qe = Wr.createInstance();
Qe.createInstance = Wr.createInstance;
Qe.createInstance;
Qe.dir;
Qe.init;
Qe.loadResources;
Qe.reloadResources;
Qe.use;
Qe.changeLanguage;
Qe.getFixedT;
Qe.t;
Qe.exists;
Qe.setDefaultNamespace;
Qe.hasLoadedNamespace;
Qe.loadNamespaces;
Qe.loadLanguages;
const Mg = {
    'appointment.back': 'Retour',
    'appointment.description': 'Prenez rendez-vous facilement en ligne avec notre équipe médicale.',
    'appointment.finalNote': 'Nous vous contacterons pour confirmer votre rendez-vous.',
    'appointment.preparationDescription':
      "Veuillez vous présenter 15 minutes à l'avance et apporter vos documents médicaux.",
    'appointment.preparationTitle': 'Préparation',
    'appointment.stepsDescription':
      'Remplissez le formulaire, sélectionnez un service, et envoyez votre demande.',
    'appointment.stepsTitle': 'Étapes',
    'appointment.title': 'Prendre rendez-vous',
    'doctors.section_title': 'Notre équipe médicale',
    'footer.rights': 'Tous droits réservés.',
    'footer.subtitle': 'Excellence en imagerie médicale à Oran',
    'footer.title': "Centre D'Imagerie Benameur",
    'form.back': 'Retour',
    'form.contactUsLabel': 'Contactez-nous',
    'form.email': 'Email',
    'form.emailLabel': 'Adresse e-mail',
    'form.emailPlaceholder': 'votre.email@exemple.com',
    'form.error.message': 'Une erreur est survenue. Veuillez réessayer.',
    'form.error.title': 'Erreur',
    'form.fastResponseDesc': 'Réponses rapides à vos demandes en ligne.',
    'form.fastResponseTitle': 'Réactivité',
    'form.loading': 'Chargement...',
    'form.message': 'Message',
    'form.messageLabel': 'Votre message',
    'form.messagePlaceholder': 'Précisez votre demande ou vos questions',
    'form.name': 'Nom',
    'form.nameLabel': 'Nom complet',
    'form.namePlaceholder': 'Votre nom complet',
    'form.phone': 'Téléphone',
    'form.phoneLabel': 'Numéro de téléphone',
    'form.phonePlaceholder': 'Votre numéro de téléphone',
    'form.qualityServiceDesc': 'Des soins d’imagerie de qualité, avec professionnalisme.',
    'form.qualityServiceTitle': 'Qualité de service',
    'form.sendButton': 'Envoyer',
    'form.sending': 'Envoi en cours...',
    'form.sendMessageSubtitle': 'Nous vous répondrons dans les plus brefs délais.',
    'form.sendMessageTitle': 'Message envoyé',
    'form.service': 'Service',
    'form.servicePlaceholder': 'Sélectionnez un service',
    'form.submit': 'Soumettre',
    'form.success.message': 'Votre demande a été envoyée avec succès.',
    'form.success.title': 'Demande envoyée',
    'hero.cta': 'Prendre rendez-vous',
    'hero.description': "Des examens d'imagerie de pointe réalisés par des experts à Oran.",
    'hero.title': 'Votre santé entre de bonnes mains',
    'nav.appointment': 'Rendez-vous',
    'nav.contact': 'Contact',
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.testimonials': 'Témoignages',
    'practicalInfo.section_title': 'Informations pratiques',
    'services.section_title': 'Nos services',
    'testimonials.appointment': 'Réservez votre examen dès maintenant',
    'testimonials.care.points': 'Écoute, accompagnement, suivi personnalisé',
    'testimonials.care.text': 'Nous plaçons les patients au cœur de nos préoccupations.',
    'testimonials.care.title': 'Soins attentionnés',
    'testimonials.commitmentTitle': 'Engagement et transparence',
    'testimonials.ctaButton': 'Prendre rendez-vous',
    'testimonials.ctaText': 'Découvrez pourquoi nos patients nous recommandent.',
    'testimonials.ctaTitle': 'Ils nous font confiance',
    'testimonials.excellence.points': 'Technologie moderne, expertise reconnue',
    'testimonials.excellence.text': 'Des examens précis pour un diagnostic fiable.',
    'testimonials.excellence.title': 'Excellence médicale',
    'testimonials.extended.0.author': 'Nadia K.',
    'testimonials.extended.0.role': 'Patiente',
    'testimonials.extended.0.text': 'Une équipe très professionnelle et accueillante.',
    'testimonials.extended.1.author': 'Dr. Lounis',
    'testimonials.extended.1.role': 'Médecin référent',
    'testimonials.extended.1.text': 'Des résultats fiables et un service rapide.',
    'testimonials.extended.2.author': 'Ahmed Z.',
    'testimonials.extended.2.role': 'Patient',
    'testimonials.extended.2.text': 'J’ai été pris en charge rapidement avec beaucoup de respect.',
    'testimonials.intro': 'Témoignages de nos patients',
    'testimonials.section_title': 'Ils parlent de nous',
    'testimonials.title': 'Témoignages',
    'toast.errorDescription': "Impossible d'envoyer le message.",
    'toast.errorTitle': 'Échec',
    'toast.messageSentDescription': 'Nous avons bien reçu votre message.',
    'toast.messageSentTitle': 'Message envoyé',
  },
  Dg = {
    'appointment.back': 'رجوع',
    'appointment.description': 'احجز موعدًا بسهولة مع فريقنا الطبي عبر الإنترنت.',
    'appointment.finalNote': 'سنتصل بك قريبًا لتأكيد الموعد.',
    'appointment.preparationDescription':
      'يرجى الحضور قبل الموعد بـ 15 دقيقة وإحضار مستنداتك الطبية.',
    'appointment.preparationTitle': 'التحضير',
    'appointment.stepsDescription': 'املأ النموذج، اختر الخدمة، وأرسل الطلب.',
    'appointment.stepsTitle': 'الخطوات',
    'appointment.title': 'حجز موعد',
    'doctors.section_title': 'فريقنا الطبي',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.subtitle': 'التميز في التصوير الطبي في وهران',
    'footer.title': 'مركز بن عامر للتصوير الطبي',
    'form.back': 'رجوع',
    'form.contactUsLabel': 'اتصل بنا',
    'form.email': 'البريد الإلكتروني',
    'form.emailLabel': 'عنوان البريد الإلكتروني',
    'form.emailPlaceholder': 'you@example.com',
    'form.error.message': 'حدث خطأ، يرجى المحاولة مرة أخرى.',
    'form.error.title': 'خطأ',
    'form.fastResponseDesc': 'ردود سريعة على طلباتك عبر الإنترنت.',
    'form.fastResponseTitle': 'الاستجابة',
    'form.loading': 'جارٍ التحميل...',
    'form.message': 'الرسالة',
    'form.messageLabel': 'رسالتك',
    'form.messagePlaceholder': 'حدد طلبك أو استفساراتك',
    'form.name': 'الاسم',
    'form.nameLabel': 'الاسم الكامل',
    'form.namePlaceholder': 'اسمك الكامل',
    'form.phone': 'الهاتف',
    'form.phoneLabel': 'رقم الهاتف',
    'form.phonePlaceholder': 'رقم هاتفك',
    'form.qualityServiceDesc': 'رعاية تصوير طبي عالية الجودة ومهنية.',
    'form.qualityServiceTitle': 'جودة الخدمة',
    'form.sendButton': 'إرسال',
    'form.sending': 'جارٍ الإرسال...',
    'form.sendMessageSubtitle': 'سوف نرد عليك في أقرب وقت.',
    'form.sendMessageTitle': 'تم الإرسال',
    'form.service': 'الخدمة',
    'form.servicePlaceholder': 'اختر خدمة',
    'form.submit': 'إرسال',
    'form.success.message': 'تم إرسال طلبك بنجاح.',
    'form.success.title': 'تم الطلب',
    'hero.cta': 'احجز موعدًا',
    'hero.description': 'فحوصات تصوير متقدمة تُجرى بواسطة خبراء في وهران.',
    'hero.title': 'صحتك بأيدٍ أمينة',
    'nav.appointment': 'الموعد',
    'nav.contact': 'اتصال',
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.testimonials': 'الشهادات',
    'practicalInfo.section_title': 'معلومات عملية',
    'services.section_title': 'خدماتنا',
    'testimonials.appointment': 'احجز فحصك الآن',
    'testimonials.care.points': 'الاهتمام، الدعم، المتابعة الشخصية',
    'testimonials.care.text': 'نضع المرضى في قلب اهتمامنا.',
    'testimonials.care.title': 'رعاية متميزة',
    'testimonials.commitmentTitle': 'الشفافية والالتزام',
    'testimonials.ctaButton': 'احجز موعدًا',
    'testimonials.ctaText': 'اكتشف لماذا يوصي المرضى بنا.',
    'testimonials.ctaTitle': 'ثقة مرضانا',
    'testimonials.excellence.points': 'تقنيات حديثة، خبرة موثوقة',
    'testimonials.excellence.text': 'فحوصات دقيقة لتشخيص موثوق.',
    'testimonials.excellence.title': 'التميّز الطبي',
    'testimonials.extended.0.author': 'نادية ك.',
    'testimonials.extended.0.role': 'مريضة',
    'testimonials.extended.0.text': 'فريق محترف وودود جدًا.',
    'testimonials.extended.1.author': 'د. لونيس',
    'testimonials.extended.1.role': 'طبيب محول',
    'testimonials.extended.1.text': 'نتائج موثوقة وخدمة سريعة.',
    'testimonials.extended.2.author': 'أحمد ز.',
    'testimonials.extended.2.role': 'مريض',
    'testimonials.extended.2.text': 'تم استقبالي بسرعة وبكل احترام.',
    'testimonials.intro': 'آراء مرضانا',
    'testimonials.section_title': 'ماذا يقولون عنا',
    'testimonials.title': 'الشهادات',
    'toast.errorDescription': 'تعذر إرسال الرسالة.',
    'toast.errorTitle': 'فشل',
    'toast.messageSentDescription': 'لقد استلمنا رسالتك.',
    'toast.messageSentTitle': 'تم الإرسال',
  },
  jg = {
    'appointment.back': 'Back',
    'appointment.description': 'Easily book an appointment with our medical team online.',
    'appointment.finalNote': 'We will contact you shortly to confirm your appointment.',
    'appointment.preparationDescription':
      'Please arrive 15 minutes early and bring your medical documents.',
    'appointment.preparationTitle': 'Preparation',
    'appointment.stepsDescription': 'Fill in the form, choose a service, and submit your request.',
    'appointment.stepsTitle': 'Steps',
    'appointment.title': 'Book an Appointment',
    'doctors.section_title': 'Our Medical Team',
    'footer.rights': 'All rights reserved.',
    'footer.subtitle': 'Excellence in medical imaging in Oran',
    'footer.title': 'Benameur Imaging Center',
    'form.back': 'Back',
    'form.contactUsLabel': 'Contact Us',
    'form.email': 'Email',
    'form.emailLabel': 'Email Address',
    'form.emailPlaceholder': 'your.email@example.com',
    'form.error.message': 'An error occurred. Please try again.',
    'form.error.title': 'Error',
    'form.fastResponseDesc': 'Quick responses to your online requests.',
    'form.fastResponseTitle': 'Responsiveness',
    'form.loading': 'Loading...',
    'form.message': 'Message',
    'form.messageLabel': 'Your Message',
    'form.messagePlaceholder': 'Detail your request or questions',
    'form.name': 'Name',
    'form.nameLabel': 'Full Name',
    'form.namePlaceholder': 'Your full name',
    'form.phone': 'Phone',
    'form.phoneLabel': 'Phone Number',
    'form.phonePlaceholder': 'Your phone number',
    'form.qualityServiceDesc': 'High-quality imaging care with professionalism.',
    'form.qualityServiceTitle': 'Service Quality',
    'form.sendButton': 'Send',
    'form.sending': 'Sending...',
    'form.sendMessageSubtitle': 'We will reply as soon as possible.',
    'form.sendMessageTitle': 'Message Sent',
    'form.service': 'Service',
    'form.servicePlaceholder': 'Select a service',
    'form.submit': 'Submit',
    'form.success.message': 'Your request has been sent successfully.',
    'form.success.title': 'Request Sent',
    'hero.cta': 'Book an Appointment',
    'hero.description': 'Advanced imaging exams performed by experts in Oran.',
    'hero.title': 'Your Health in Good Hands',
    'nav.appointment': 'Appointment',
    'nav.contact': 'Contact',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'practicalInfo.section_title': 'Practical Information',
    'services.section_title': 'Our Services',
    'testimonials.appointment': 'Book your exam now',
    'testimonials.care.points': 'Listening, support, personalized follow-up',
    'testimonials.care.text': 'We put patients at the center of our focus.',
    'testimonials.care.title': 'Caring Care',
    'testimonials.commitmentTitle': 'Commitment and Transparency',
    'testimonials.ctaButton': 'Book an Appointment',
    'testimonials.ctaText': 'See why our patients recommend us.',
    'testimonials.ctaTitle': 'They Trust Us',
    'testimonials.excellence.points': 'Modern technology, recognized expertise',
    'testimonials.excellence.text': 'Accurate exams for reliable diagnosis.',
    'testimonials.excellence.title': 'Medical Excellence',
    'testimonials.extended.0.author': 'Nadia K.',
    'testimonials.extended.0.role': 'Patient',
    'testimonials.extended.0.text': 'Very professional and welcoming team.',
    'testimonials.extended.1.author': 'Dr. Lounis',
    'testimonials.extended.1.role': 'Referring Doctor',
    'testimonials.extended.1.text': 'Reliable results and fast service.',
    'testimonials.extended.2.author': 'Ahmed Z.',
    'testimonials.extended.2.role': 'Patient',
    'testimonials.extended.2.text': 'I was taken care of quickly and respectfully.',
    'testimonials.intro': 'What our patients say',
    'testimonials.section_title': 'They Talk About Us',
    'testimonials.title': 'Testimonials',
    'toast.errorDescription': 'Could not send the message.',
    'toast.errorTitle': 'Failed',
    'toast.messageSentDescription': 'We have received your message.',
    'toast.messageSentTitle': 'Message Sent',
  },
  Ag = { fr: { translation: Mg }, ar: { translation: Dg }, en: { translation: jg } };
Qe.use(Sh).init({
  resources: Ag,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: { escapeValue: !1 },
});
const nd = document.getElementById('root');
if (!nd) throw new Error('Root container introuvable');
const Fg = ah.createRoot(nd);
Fg.render(Q.jsxs(At.StrictMode, { children: [Q.jsx(Nh, {}), Q.jsx(hg, {})] }));
//# sourceMappingURL=index-Z0kcGvwy.js.map
