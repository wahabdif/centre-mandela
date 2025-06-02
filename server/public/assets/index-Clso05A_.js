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
        for (const m of f.addedNodes) m.tagName === 'LINK' && m.rel === 'modulepreload' && u(m);
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
var al = { exports: {} },
  jr = {},
  ul = { exports: {} },
  ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rc;
function em() {
  if (Rc) return ce;
  Rc = 1;
  var l = Symbol.for('react.element'),
    o = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    m = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    v = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    S = Symbol.for('react.lazy'),
    E = Symbol.iterator;
  function R(w) {
    return w === null || typeof w != 'object'
      ? null
      : ((w = (E && w[E]) || w['@@iterator']), typeof w == 'function' ? w : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    O = {};
  function N(w, L, ne) {
    (this.props = w), (this.context = L), (this.refs = O), (this.updater = ne || z);
  }
  (N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (w, L) {
      if (typeof w != 'object' && typeof w != 'function' && w != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, w, L, 'setState');
    }),
    (N.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, 'forceUpdate');
    });
  function K() {}
  K.prototype = N.prototype;
  function F(w, L, ne) {
    (this.props = w), (this.context = L), (this.refs = O), (this.updater = ne || z);
  }
  var Y = (F.prototype = new K());
  (Y.constructor = F), M(Y, N.prototype), (Y.isPureReactComponent = !0);
  var $ = Array.isArray,
    Z = Object.prototype.hasOwnProperty,
    q = { current: null },
    X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xe(w, L, ne) {
    var ie,
      pe = {},
      me = null,
      Ee = null;
    if (L != null)
      for (ie in (L.ref !== void 0 && (Ee = L.ref), L.key !== void 0 && (me = '' + L.key), L))
        Z.call(L, ie) && !X.hasOwnProperty(ie) && (pe[ie] = L[ie]);
    var ye = arguments.length - 2;
    if (ye === 1) pe.children = ne;
    else if (1 < ye) {
      for (var Ne = Array(ye), nt = 0; nt < ye; nt++) Ne[nt] = arguments[nt + 2];
      pe.children = Ne;
    }
    if (w && w.defaultProps)
      for (ie in ((ye = w.defaultProps), ye)) pe[ie] === void 0 && (pe[ie] = ye[ie]);
    return { $$typeof: l, type: w, key: me, ref: Ee, props: pe, _owner: q.current };
  }
  function ge(w, L) {
    return { $$typeof: l, type: w.type, key: L, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function fe(w) {
    return typeof w == 'object' && w !== null && w.$$typeof === l;
  }
  function Ie(w) {
    var L = { '=': '=0', ':': '=2' };
    return (
      '$' +
      w.replace(/[=:]/g, function (ne) {
        return L[ne];
      })
    );
  }
  var se = /\/+/g;
  function ve(w, L) {
    return typeof w == 'object' && w !== null && w.key != null ? Ie('' + w.key) : L.toString(36);
  }
  function Q(w, L, ne, ie, pe) {
    var me = typeof w;
    (me === 'undefined' || me === 'boolean') && (w = null);
    var Ee = !1;
    if (w === null) Ee = !0;
    else
      switch (me) {
        case 'string':
        case 'number':
          Ee = !0;
          break;
        case 'object':
          switch (w.$$typeof) {
            case l:
            case o:
              Ee = !0;
          }
      }
    if (Ee)
      return (
        (Ee = w),
        (pe = pe(Ee)),
        (w = ie === '' ? '.' + ve(Ee, 0) : ie),
        $(pe)
          ? ((ne = ''),
            w != null && (ne = w.replace(se, '$&/') + '/'),
            Q(pe, L, ne, '', function (nt) {
              return nt;
            }))
          : pe != null &&
            (fe(pe) &&
              (pe = ge(
                pe,
                ne +
                  (!pe.key || (Ee && Ee.key === pe.key)
                    ? ''
                    : ('' + pe.key).replace(se, '$&/') + '/') +
                  w,
              )),
            L.push(pe)),
        1
      );
    if (((Ee = 0), (ie = ie === '' ? '.' : ie + ':'), $(w)))
      for (var ye = 0; ye < w.length; ye++) {
        me = w[ye];
        var Ne = ie + ve(me, ye);
        Ee += Q(me, L, ne, Ne, pe);
      }
    else if (((Ne = R(w)), typeof Ne == 'function'))
      for (w = Ne.call(w), ye = 0; !(me = w.next()).done; )
        (me = me.value), (Ne = ie + ve(me, ye++)), (Ee += Q(me, L, ne, Ne, pe));
    else if (me === 'object')
      throw (
        ((L = String(w)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (L === '[object Object]' ? 'object with keys {' + Object.keys(w).join(', ') + '}' : L) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    return Ee;
  }
  function Se(w, L, ne) {
    if (w == null) return w;
    var ie = [],
      pe = 0;
    return (
      Q(w, ie, '', '', function (me) {
        return L.call(ne, me, pe++);
      }),
      ie
    );
  }
  function ue(w) {
    if (w._status === -1) {
      var L = w._result;
      (L = L()),
        L.then(
          function (ne) {
            (w._status === 0 || w._status === -1) && ((w._status = 1), (w._result = ne));
          },
          function (ne) {
            (w._status === 0 || w._status === -1) && ((w._status = 2), (w._result = ne));
          },
        ),
        w._status === -1 && ((w._status = 0), (w._result = L));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var le = { current: null },
    A = { transition: null },
    B = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: A, ReactCurrentOwner: q };
  function U() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ce.Children = {
      map: Se,
      forEach: function (w, L, ne) {
        Se(
          w,
          function () {
            L.apply(this, arguments);
          },
          ne,
        );
      },
      count: function (w) {
        var L = 0;
        return (
          Se(w, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (w) {
        return (
          Se(w, function (L) {
            return L;
          }) || []
        );
      },
      only: function (w) {
        if (!fe(w))
          throw Error('React.Children.only expected to receive a single React element child.');
        return w;
      },
    }),
    (ce.Component = N),
    (ce.Fragment = i),
    (ce.Profiler = c),
    (ce.PureComponent = F),
    (ce.StrictMode = u),
    (ce.Suspense = v),
    (ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
    (ce.act = U),
    (ce.cloneElement = function (w, L, ne) {
      if (w == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            w +
            '.',
        );
      var ie = M({}, w.props),
        pe = w.key,
        me = w.ref,
        Ee = w._owner;
      if (L != null) {
        if (
          (L.ref !== void 0 && ((me = L.ref), (Ee = q.current)),
          L.key !== void 0 && (pe = '' + L.key),
          w.type && w.type.defaultProps)
        )
          var ye = w.type.defaultProps;
        for (Ne in L)
          Z.call(L, Ne) &&
            !X.hasOwnProperty(Ne) &&
            (ie[Ne] = L[Ne] === void 0 && ye !== void 0 ? ye[Ne] : L[Ne]);
      }
      var Ne = arguments.length - 2;
      if (Ne === 1) ie.children = ne;
      else if (1 < Ne) {
        ye = Array(Ne);
        for (var nt = 0; nt < Ne; nt++) ye[nt] = arguments[nt + 2];
        ie.children = ye;
      }
      return { $$typeof: l, type: w.type, key: pe, ref: me, props: ie, _owner: Ee };
    }),
    (ce.createContext = function (w) {
      return (
        (w = {
          $$typeof: m,
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
    (ce.createElement = xe),
    (ce.createFactory = function (w) {
      var L = xe.bind(null, w);
      return (L.type = w), L;
    }),
    (ce.createRef = function () {
      return { current: null };
    }),
    (ce.forwardRef = function (w) {
      return { $$typeof: p, render: w };
    }),
    (ce.isValidElement = fe),
    (ce.lazy = function (w) {
      return { $$typeof: S, _payload: { _status: -1, _result: w }, _init: ue };
    }),
    (ce.memo = function (w, L) {
      return { $$typeof: h, type: w, compare: L === void 0 ? null : L };
    }),
    (ce.startTransition = function (w) {
      var L = A.transition;
      A.transition = {};
      try {
        w();
      } finally {
        A.transition = L;
      }
    }),
    (ce.unstable_act = U),
    (ce.useCallback = function (w, L) {
      return le.current.useCallback(w, L);
    }),
    (ce.useContext = function (w) {
      return le.current.useContext(w);
    }),
    (ce.useDebugValue = function () {}),
    (ce.useDeferredValue = function (w) {
      return le.current.useDeferredValue(w);
    }),
    (ce.useEffect = function (w, L) {
      return le.current.useEffect(w, L);
    }),
    (ce.useId = function () {
      return le.current.useId();
    }),
    (ce.useImperativeHandle = function (w, L, ne) {
      return le.current.useImperativeHandle(w, L, ne);
    }),
    (ce.useInsertionEffect = function (w, L) {
      return le.current.useInsertionEffect(w, L);
    }),
    (ce.useLayoutEffect = function (w, L) {
      return le.current.useLayoutEffect(w, L);
    }),
    (ce.useMemo = function (w, L) {
      return le.current.useMemo(w, L);
    }),
    (ce.useReducer = function (w, L, ne) {
      return le.current.useReducer(w, L, ne);
    }),
    (ce.useRef = function (w) {
      return le.current.useRef(w);
    }),
    (ce.useState = function (w) {
      return le.current.useState(w);
    }),
    (ce.useSyncExternalStore = function (w, L, ne) {
      return le.current.useSyncExternalStore(w, L, ne);
    }),
    (ce.useTransition = function () {
      return le.current.useTransition();
    }),
    (ce.version = '18.3.1'),
    ce
  );
}
var Lc;
function Nl() {
  return Lc || ((Lc = 1), (ul.exports = em())), ul.exports;
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
function tm() {
  if (Oc) return jr;
  Oc = 1;
  var l = Nl(),
    o = Symbol.for('react.element'),
    i = Symbol.for('react.fragment'),
    u = Object.prototype.hasOwnProperty,
    c = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(p, v, h) {
    var S,
      E = {},
      R = null,
      z = null;
    h !== void 0 && (R = '' + h),
      v.key !== void 0 && (R = '' + v.key),
      v.ref !== void 0 && (z = v.ref);
    for (S in v) u.call(v, S) && !f.hasOwnProperty(S) && (E[S] = v[S]);
    if (p && p.defaultProps) for (S in ((v = p.defaultProps), v)) E[S] === void 0 && (E[S] = v[S]);
    return { $$typeof: o, type: p, key: R, ref: z, props: E, _owner: c.current };
  }
  return (jr.Fragment = i), (jr.jsx = m), (jr.jsxs = m), jr;
}
var _c;
function nm() {
  return _c || ((_c = 1), (al.exports = tm())), al.exports;
}
var W = nm(),
  T = Nl();
const At = uf(T),
  rm = Zp({ __proto__: null, default: At }, [T]);
var ri = {},
  cl = { exports: {} },
  tt = {},
  fl = { exports: {} },
  dl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic;
function om() {
  return (
    Ic ||
      ((Ic = 1),
      (function (l) {
        function o(A, B) {
          var U = A.length;
          A.push(B);
          e: for (; 0 < U; ) {
            var w = (U - 1) >>> 1,
              L = A[w];
            if (0 < c(L, B)) (A[w] = B), (A[U] = L), (U = w);
            else break e;
          }
        }
        function i(A) {
          return A.length === 0 ? null : A[0];
        }
        function u(A) {
          if (A.length === 0) return null;
          var B = A[0],
            U = A.pop();
          if (U !== B) {
            A[0] = U;
            e: for (var w = 0, L = A.length, ne = L >>> 1; w < ne; ) {
              var ie = 2 * (w + 1) - 1,
                pe = A[ie],
                me = ie + 1,
                Ee = A[me];
              if (0 > c(pe, U))
                me < L && 0 > c(Ee, pe)
                  ? ((A[w] = Ee), (A[me] = U), (w = me))
                  : ((A[w] = pe), (A[ie] = U), (w = ie));
              else if (me < L && 0 > c(Ee, U)) (A[w] = Ee), (A[me] = U), (w = me);
              else break e;
            }
          }
          return B;
        }
        function c(A, B) {
          var U = A.sortIndex - B.sortIndex;
          return U !== 0 ? U : A.id - B.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var f = performance;
          l.unstable_now = function () {
            return f.now();
          };
        } else {
          var m = Date,
            p = m.now();
          l.unstable_now = function () {
            return m.now() - p;
          };
        }
        var v = [],
          h = [],
          S = 1,
          E = null,
          R = 3,
          z = !1,
          M = !1,
          O = !1,
          N = typeof setTimeout == 'function' ? setTimeout : null,
          K = typeof clearTimeout == 'function' ? clearTimeout : null,
          F = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Y(A) {
          for (var B = i(h); B !== null; ) {
            if (B.callback === null) u(h);
            else if (B.startTime <= A) u(h), (B.sortIndex = B.expirationTime), o(v, B);
            else break;
            B = i(h);
          }
        }
        function $(A) {
          if (((O = !1), Y(A), !M))
            if (i(v) !== null) (M = !0), ue(Z);
            else {
              var B = i(h);
              B !== null && le($, B.startTime - A);
            }
        }
        function Z(A, B) {
          (M = !1), O && ((O = !1), K(xe), (xe = -1)), (z = !0);
          var U = R;
          try {
            for (Y(B), E = i(v); E !== null && (!(E.expirationTime > B) || (A && !Ie())); ) {
              var w = E.callback;
              if (typeof w == 'function') {
                (E.callback = null), (R = E.priorityLevel);
                var L = w(E.expirationTime <= B);
                (B = l.unstable_now()),
                  typeof L == 'function' ? (E.callback = L) : E === i(v) && u(v),
                  Y(B);
              } else u(v);
              E = i(v);
            }
            if (E !== null) var ne = !0;
            else {
              var ie = i(h);
              ie !== null && le($, ie.startTime - B), (ne = !1);
            }
            return ne;
          } finally {
            (E = null), (R = U), (z = !1);
          }
        }
        var q = !1,
          X = null,
          xe = -1,
          ge = 5,
          fe = -1;
        function Ie() {
          return !(l.unstable_now() - fe < ge);
        }
        function se() {
          if (X !== null) {
            var A = l.unstable_now();
            fe = A;
            var B = !0;
            try {
              B = X(!0, A);
            } finally {
              B ? ve() : ((q = !1), (X = null));
            }
          } else q = !1;
        }
        var ve;
        if (typeof F == 'function')
          ve = function () {
            F(se);
          };
        else if (typeof MessageChannel < 'u') {
          var Q = new MessageChannel(),
            Se = Q.port2;
          (Q.port1.onmessage = se),
            (ve = function () {
              Se.postMessage(null);
            });
        } else
          ve = function () {
            N(se, 0);
          };
        function ue(A) {
          (X = A), q || ((q = !0), ve());
        }
        function le(A, B) {
          xe = N(function () {
            A(l.unstable_now());
          }, B);
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
            M || z || ((M = !0), ue(Z));
          }),
          (l.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (ge = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return i(v);
          }),
          (l.unstable_next = function (A) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = R;
            }
            var U = R;
            R = B;
            try {
              return A();
            } finally {
              R = U;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (A, B) {
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
            var U = R;
            R = A;
            try {
              return B();
            } finally {
              R = U;
            }
          }),
          (l.unstable_scheduleCallback = function (A, B, U) {
            var w = l.unstable_now();
            switch (
              (typeof U == 'object' && U !== null
                ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? w + U : w))
                : (U = w),
              A)
            ) {
              case 1:
                var L = -1;
                break;
              case 2:
                L = 250;
                break;
              case 5:
                L = 1073741823;
                break;
              case 4:
                L = 1e4;
                break;
              default:
                L = 5e3;
            }
            return (
              (L = U + L),
              (A = {
                id: S++,
                callback: B,
                priorityLevel: A,
                startTime: U,
                expirationTime: L,
                sortIndex: -1,
              }),
              U > w
                ? ((A.sortIndex = U),
                  o(h, A),
                  i(v) === null && A === i(h) && (O ? (K(xe), (xe = -1)) : (O = !0), le($, U - w)))
                : ((A.sortIndex = L), o(v, A), M || z || ((M = !0), ue(Z))),
              A
            );
          }),
          (l.unstable_shouldYield = Ie),
          (l.unstable_wrapCallback = function (A) {
            var B = R;
            return function () {
              var U = R;
              R = B;
              try {
                return A.apply(this, arguments);
              } finally {
                R = U;
              }
            };
          });
      })(dl)),
    dl
  );
}
var Dc;
function im() {
  return Dc || ((Dc = 1), (fl.exports = om())), fl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zc;
function sm() {
  if (zc) return tt;
  zc = 1;
  var l = Nl(),
    o = im();
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
    m(e, t), m(e + 'Capture', t);
  }
  function m(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var p = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    v = Object.prototype.hasOwnProperty,
    h =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    S = {},
    E = {};
  function R(e) {
    return v.call(E, e) ? !0 : v.call(S, e) ? !1 : h.test(e) ? (E[e] = !0) : ((S[e] = !0), !1);
  }
  function z(e, t, n, r) {
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
  function M(e, t, n, r) {
    if (t === null || typeof t > 'u' || z(e, t, n, r)) return !0;
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
  function O(e, t, n, r, s, a, d) {
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
      N[e] = new O(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      N[t] = new O(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      N[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        N[e] = new O(e, 2, !1, e, null, !1, !1);
      },
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        N[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      N[e] = new O(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      N[e] = new O(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      N[e] = new O(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      N[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var K = /[\-:]([a-z])/g;
  function F(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(K, F);
      N[t] = new O(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(K, F);
        N[t] = new O(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(K, F);
      N[t] = new O(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      N[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (N.xlinkHref = new O('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      N[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Y(e, t, n, r) {
    var s = N.hasOwnProperty(t) ? N[t] : null;
    (s !== null
      ? s.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (M(t, n, s, r) && (n = null),
      r || s === null
        ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
  var $ = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Z = Symbol.for('react.element'),
    q = Symbol.for('react.portal'),
    X = Symbol.for('react.fragment'),
    xe = Symbol.for('react.strict_mode'),
    ge = Symbol.for('react.profiler'),
    fe = Symbol.for('react.provider'),
    Ie = Symbol.for('react.context'),
    se = Symbol.for('react.forward_ref'),
    ve = Symbol.for('react.suspense'),
    Q = Symbol.for('react.suspense_list'),
    Se = Symbol.for('react.memo'),
    ue = Symbol.for('react.lazy'),
    le = Symbol.for('react.offscreen'),
    A = Symbol.iterator;
  function B(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (A && e[A]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var U = Object.assign,
    w;
  function L(e) {
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
  var ne = !1;
  function ie(e, t) {
    if (!e || ne) return '';
    ne = !0;
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
      (ne = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? L(e) : '';
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L('Lazy');
      case 13:
        return L('Suspense');
      case 19:
        return L('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = ie(e.type, !1)), e;
      case 11:
        return (e = ie(e.type.render, !1)), e;
      case 1:
        return (e = ie(e.type, !0)), e;
      default:
        return '';
    }
  }
  function me(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case X:
        return 'Fragment';
      case q:
        return 'Portal';
      case ge:
        return 'Profiler';
      case xe:
        return 'StrictMode';
      case ve:
        return 'Suspense';
      case Q:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ie:
          return (e.displayName || 'Context') + '.Consumer';
        case fe:
          return (e._context.displayName || 'Context') + '.Provider';
        case se:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Se:
          return (t = e.displayName || null), t !== null ? t : me(e.type) || 'Memo';
        case ue:
          (t = e._payload), (e = e._init);
          try {
            return me(e(t));
          } catch {}
      }
    return null;
  }
  function Ee(e) {
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
        return me(t);
      case 8:
        return t === xe ? 'StrictMode' : 'Mode';
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
  function ye(e) {
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
  function Ne(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function nt(e) {
    var t = Ne(e) ? 'checked' : 'value',
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
  function zl(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = Ne(e) ? (e.checked ? 'true' : 'false') : e.value),
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
    return U({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ml(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ye(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function jl(e, t) {
    (t = t.checked), t != null && Y(e, 'checked', t, !1);
  }
  function gi(e, t) {
    jl(e, t);
    var n = ye(t.value),
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
      ? vi(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && vi(e, t.type, ye(t.defaultValue)),
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
  function vi(e, t, n) {
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
      for (n = '' + ye(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          (e[s].selected = !0), r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return U({}, t, {
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
    e._wrapperState = { initialValue: ye(n) };
  }
  function $l(e, t) {
    var n = ye(t.value),
      r = ye(t.defaultValue);
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
  function wi(e, t) {
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
  function Hl(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          s = Bl(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, s) : (e[n] = s);
      }
  }
  var od = U(
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
  function xi(e, t) {
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
  function Si(e, t) {
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
  var Ei = null;
  function ki(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ci = null,
    kn = null,
    Cn = null;
  function Wl(e) {
    if ((e = Sr(e))) {
      if (typeof Ci != 'function') throw Error(i(280));
      var t = e.stateNode;
      t && ((t = yo(t)), Ci(e.stateNode, e.type, t));
    }
  }
  function Kl(e) {
    kn ? (Cn ? Cn.push(e) : (Cn = [e])) : (kn = e);
  }
  function Ql() {
    if (kn) {
      var e = kn,
        t = Cn;
      if (((Cn = kn = null), Wl(e), t)) for (e = 0; e < t.length; e++) Wl(t[e]);
    }
  }
  function Gl(e, t) {
    return e(t);
  }
  function Yl() {}
  var Pi = !1;
  function Xl(e, t, n) {
    if (Pi) return e(t, n);
    Pi = !0;
    try {
      return Gl(e, t, n);
    } finally {
      (Pi = !1), (kn !== null || Cn !== null) && (Yl(), Ql());
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
  var Ti = !1;
  if (p)
    try {
      var tr = {};
      Object.defineProperty(tr, 'passive', {
        get: function () {
          Ti = !0;
        },
      }),
        window.addEventListener('test', tr, tr),
        window.removeEventListener('test', tr, tr);
    } catch {
      Ti = !1;
    }
  function id(e, t, n, r, s, a, d, g, y) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (I) {
      this.onError(I);
    }
  }
  var nr = !1,
    Yr = null,
    Xr = !1,
    Ni = null,
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
      Xr || ((Xr = !0), (Ni = P));
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
    De = o.unstable_now,
    dd = o.unstable_getCurrentPriorityLevel,
    Ri = o.unstable_ImmediatePriority,
    ra = o.unstable_UserBlockingPriority,
    Jr = o.unstable_NormalPriority,
    pd = o.unstable_LowPriority,
    oa = o.unstable_IdlePriority,
    qr = null,
    St = null;
  function md(e) {
    if (St && typeof St.onCommitFiberRoot == 'function')
      try {
        St.onCommitFiberRoot(qr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var mt = Math.clz32 ? Math.clz32 : vd,
    hd = Math.log,
    gd = Math.LN2;
  function vd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((hd(e) / gd) | 0)) | 0;
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
        (n = 31 - mt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
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
      var d = 31 - mt(a),
        g = 1 << d,
        y = s[d];
      y === -1
        ? ((g & n) === 0 || (g & r) !== 0) && (s[d] = yd(g, t))
        : y <= t && (e.expiredLanes |= g),
        (a &= ~g);
    }
  }
  function Li(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ia() {
    var e = Zr;
    return (Zr <<= 1), (Zr & 4194240) === 0 && (Zr = 64), e;
  }
  function Oi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function or(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - mt(t)),
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
      var s = 31 - mt(n),
        a = 1 << s;
      (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~a);
    }
  }
  function _i(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - mt(n),
        s = 1 << r;
      (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
    }
  }
  var we = 0;
  function sa(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var la,
    Ii,
    aa,
    ua,
    ca,
    Di = !1,
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
        t !== null && ((t = Sr(t)), t !== null && Ii(t)),
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
        (Ei = r), n.target.dispatchEvent(r), (Ei = null);
      } else return (t = Sr(n)), t !== null && Ii(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function pa(e, t, n) {
    ro(e) && n.delete(t);
  }
  function kd() {
    (Di = !1),
      Ft !== null && ro(Ft) && (Ft = null),
      $t !== null && ro($t) && ($t = null),
      Ut !== null && ro(Ut) && (Ut = null),
      ir.forEach(pa),
      sr.forEach(pa);
  }
  function ar(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Di || ((Di = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, kd)));
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
  var Pn = $.ReactCurrentBatchConfig,
    oo = !0;
  function Cd(e, t, n, r) {
    var s = we,
      a = Pn.transition;
    Pn.transition = null;
    try {
      (we = 1), zi(e, t, n, r);
    } finally {
      (we = s), (Pn.transition = a);
    }
  }
  function Pd(e, t, n, r) {
    var s = we,
      a = Pn.transition;
    Pn.transition = null;
    try {
      (we = 4), zi(e, t, n, r);
    } finally {
      (we = s), (Pn.transition = a);
    }
  }
  function zi(e, t, n, r) {
    if (oo) {
      var s = Mi(e, t, n, r);
      if (s === null) qi(e, t, r, io, n), fa(e, r);
      else if (Ed(s, e, t, n, r)) r.stopPropagation();
      else if ((fa(e, r), t & 4 && -1 < Sd.indexOf(e))) {
        for (; s !== null; ) {
          var a = Sr(s);
          if (
            (a !== null && la(a), (a = Mi(e, t, n, r)), a === null && qi(e, t, r, io, n), a === s)
          )
            break;
          s = a;
        }
        s !== null && r.stopPropagation();
      } else qi(e, t, r, null, n);
    }
  }
  var io = null;
  function Mi(e, t, n, r) {
    if (((io = null), (e = ki(r)), (e = ln(e)), e !== null))
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
  function ma(e) {
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
          case Ri:
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
    ji = null,
    so = null;
  function ha() {
    if (so) return so;
    var e,
      t = ji,
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
      U(t.prototype, {
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
    Ai = rt(Tn),
    cr = U({}, Tn, { view: 0, detail: 0 }),
    Td = rt(cr),
    Fi,
    $i,
    fr,
    uo = U({}, cr, {
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
      getModifierState: Vi,
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
                ? ((Fi = e.screenX - fr.screenX), ($i = e.screenY - fr.screenY))
                : ($i = Fi = 0),
              (fr = e)),
            Fi);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : $i;
      },
    }),
    va = rt(uo),
    Nd = U({}, uo, { dataTransfer: 0 }),
    Rd = rt(Nd),
    Ld = U({}, cr, { relatedTarget: 0 }),
    Ui = rt(Ld),
    Od = U({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _d = rt(Od),
    Id = U({}, Tn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Dd = rt(Id),
    zd = U({}, Tn, { data: 0 }),
    ya = rt(zd),
    Md = {
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
  function Vi() {
    return Fd;
  }
  var $d = U({}, cr, {
      key: function (e) {
        if (e.key) {
          var t = Md[e.key] || e.key;
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
      getModifierState: Vi,
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
    Vd = U({}, uo, {
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
    bd = U({}, cr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vi,
    }),
    Bd = rt(bd),
    Hd = U({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wd = rt(Hd),
    Kd = U({}, uo, {
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
    bi = p && 'CompositionEvent' in window,
    dr = null;
  p && 'documentMode' in document && (dr = document.documentMode);
  var Yd = p && 'TextEvent' in window && !dr,
    xa = p && (!bi || (dr && 8 < dr && 11 >= dr)),
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
      return e === 'compositionend' || (!bi && ka(e, t))
        ? ((e = ha()), (so = ji = bt = null), (Nn = !1), e)
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
      (t = ho(t, 'onChange')),
      0 < t.length &&
        ((n = new Ai('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
  }
  var pr = null,
    mr = null;
  function Zd(e) {
    Ha(e, 0);
  }
  function co(e) {
    var t = In(e);
    if (zl(t)) return e;
  }
  function ep(e, t) {
    if (e === 'change') return t;
  }
  var Na = !1;
  if (p) {
    var Bi;
    if (p) {
      var Hi = 'oninput' in document;
      if (!Hi) {
        var Ra = document.createElement('div');
        Ra.setAttribute('oninput', 'return;'), (Hi = typeof Ra.oninput == 'function');
      }
      Bi = Hi;
    } else Bi = !1;
    Na = Bi && (!document.documentMode || 9 < document.documentMode);
  }
  function La() {
    pr && (pr.detachEvent('onpropertychange', Oa), (mr = pr = null));
  }
  function Oa(e) {
    if (e.propertyName === 'value' && co(mr)) {
      var t = [];
      Ta(t, mr, e, ki(e)), Xl(Zd, t);
    }
  }
  function tp(e, t, n) {
    e === 'focusin'
      ? (La(), (pr = t), (mr = n), pr.attachEvent('onpropertychange', Oa))
      : e === 'focusout' && La();
  }
  function np(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return co(mr);
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
  var ht = typeof Object.is == 'function' ? Object.is : ip;
  function hr(e, t) {
    if (ht(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!v.call(t, s) || !ht(e[s], t[s])) return !1;
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
  function Da(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Da(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function za() {
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
    var t = za(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Da(n.ownerDocument.documentElement, n)) {
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
  var lp = p && 'documentMode' in document && 11 >= document.documentMode,
    Rn = null,
    Ki = null,
    gr = null,
    Qi = !1;
  function Ma(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qi ||
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
      (gr && hr(gr, r)) ||
        ((gr = r),
        (r = ho(Ki, 'onSelect')),
        0 < r.length &&
          ((t = new Ai('onSelect', 'select', null, t, n)),
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
    Gi = {},
    ja = {};
  p &&
    ((ja = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ln.animationend.animation,
      delete Ln.animationiteration.animation,
      delete Ln.animationstart.animation),
    'TransitionEvent' in window || delete Ln.transitionend.transition);
  function po(e) {
    if (Gi[e]) return Gi[e];
    if (!Ln[e]) return e;
    var t = Ln[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ja) return (Gi[e] = t[n]);
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
  for (var Yi = 0; Yi < ba.length; Yi++) {
    var Xi = ba[Yi],
      ap = Xi.toLowerCase(),
      up = Xi[0].toUpperCase() + Xi.slice(1);
    Bt(ap, 'on' + up);
  }
  Bt(Aa, 'onAnimationEnd'),
    Bt(Fa, 'onAnimationIteration'),
    Bt($a, 'onAnimationStart'),
    Bt('dblclick', 'onDoubleClick'),
    Bt('focusin', 'onFocus'),
    Bt('focusout', 'onBlur'),
    Bt(Ua, 'onTransitionEnd'),
    m('onMouseEnter', ['mouseout', 'mouseover']),
    m('onMouseLeave', ['mouseout', 'mouseover']),
    m('onPointerEnter', ['pointerout', 'pointerover']),
    m('onPointerLeave', ['pointerout', 'pointerover']),
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
  function Ha(e, t) {
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
    if (Xr) throw ((e = Ni), (Xr = !1), (Ni = null), e);
  }
  function Ce(e, t) {
    var n = t[os];
    n === void 0 && (n = t[os] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Wa(t, e, 2, !1), n.add(r));
  }
  function Ji(e, t, n) {
    var r = 0;
    t && (r |= 4), Wa(n, e, r, t);
  }
  var mo = '_reactListening' + Math.random().toString(36).slice(2);
  function yr(e) {
    if (!e[mo]) {
      (e[mo] = !0),
        u.forEach(function (n) {
          n !== 'selectionchange' && (cp.has(n) || Ji(n, !1, e), Ji(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mo] || ((t[mo] = !0), Ji('selectionchange', !1, t));
    }
  }
  function Wa(e, t, n, r) {
    switch (ma(t)) {
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
      !Ti || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (s = !0),
      r
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, { passive: s })
          : e.addEventListener(t, n, !1);
  }
  function qi(e, t, n, r, s) {
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
        I = ki(n),
        D = [];
      e: {
        var _ = Va.get(e);
        if (_ !== void 0) {
          var V = Ai,
            H = e;
          switch (e) {
            case 'keypress':
              if (lo(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              V = Ud;
              break;
            case 'focusin':
              (H = 'focus'), (V = Ui);
              break;
            case 'focusout':
              (H = 'blur'), (V = Ui);
              break;
            case 'beforeblur':
            case 'afterblur':
              V = Ui;
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
              V = va;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              V = Rd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              V = Bd;
              break;
            case Aa:
            case Fa:
            case $a:
              V = _d;
              break;
            case Ua:
              V = Wd;
              break;
            case 'scroll':
              V = Td;
              break;
            case 'wheel':
              V = Qd;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              V = Dd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              V = wa;
          }
          var G = (t & 4) !== 0,
            ze = !G && e === 'scroll',
            k = G ? (_ !== null ? _ + 'Capture' : null) : _;
          G = [];
          for (var x = P, C; x !== null; ) {
            C = x;
            var j = C.stateNode;
            if (
              (C.tag === 5 &&
                j !== null &&
                ((C = j), k !== null && ((j = er(x, k)), j != null && G.push(wr(x, j, C)))),
              ze)
            )
              break;
            x = x.return;
          }
          0 < G.length && ((_ = new V(_, H, null, n, I)), D.push({ event: _, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_ = e === 'mouseover' || e === 'pointerover'),
            (V = e === 'mouseout' || e === 'pointerout'),
            _ && n !== Ei && (H = n.relatedTarget || n.fromElement) && (ln(H) || H[Rt]))
          )
            break e;
          if (
            (V || _) &&
            ((_ =
              I.window === I
                ? I
                : (_ = I.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            V
              ? ((H = n.relatedTarget || n.toElement),
                (V = P),
                (H = H ? ln(H) : null),
                H !== null &&
                  ((ze = sn(H)), H !== ze || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : ((V = null), (H = P)),
            V !== H)
          ) {
            if (
              ((G = va),
              (j = 'onMouseLeave'),
              (k = 'onMouseEnter'),
              (x = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((G = wa), (j = 'onPointerLeave'), (k = 'onPointerEnter'), (x = 'pointer')),
              (ze = V == null ? _ : In(V)),
              (C = H == null ? _ : In(H)),
              (_ = new G(j, x + 'leave', V, n, I)),
              (_.target = ze),
              (_.relatedTarget = C),
              (j = null),
              ln(I) === P &&
                ((G = new G(k, x + 'enter', H, n, I)),
                (G.target = C),
                (G.relatedTarget = ze),
                (j = G)),
              (ze = j),
              V && H)
            )
              t: {
                for (G = V, k = H, x = 0, C = G; C; C = On(C)) x++;
                for (C = 0, j = k; j; j = On(j)) C++;
                for (; 0 < x - C; ) (G = On(G)), x--;
                for (; 0 < C - x; ) (k = On(k)), C--;
                for (; x--; ) {
                  if (G === k || (k !== null && G === k.alternate)) break t;
                  (G = On(G)), (k = On(k));
                }
                G = null;
              }
            else G = null;
            V !== null && Ka(D, _, V, G, !1), H !== null && ze !== null && Ka(D, ze, H, G, !0);
          }
        }
        e: {
          if (
            ((_ = P ? In(P) : window),
            (V = _.nodeName && _.nodeName.toLowerCase()),
            V === 'select' || (V === 'input' && _.type === 'file'))
          )
            var J = ep;
          else if (Pa(_))
            if (Na) J = op;
            else {
              J = np;
              var ee = tp;
            }
          else
            (V = _.nodeName) &&
              V.toLowerCase() === 'input' &&
              (_.type === 'checkbox' || _.type === 'radio') &&
              (J = rp);
          if (J && (J = J(e, P))) {
            Ta(D, J, n, I);
            break e;
          }
          ee && ee(e, _, P),
            e === 'focusout' &&
              (ee = _._wrapperState) &&
              ee.controlled &&
              _.type === 'number' &&
              vi(_, 'number', _.value);
        }
        switch (((ee = P ? In(P) : window), e)) {
          case 'focusin':
            (Pa(ee) || ee.contentEditable === 'true') && ((Rn = ee), (Ki = P), (gr = null));
            break;
          case 'focusout':
            gr = Ki = Rn = null;
            break;
          case 'mousedown':
            Qi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Qi = !1), Ma(D, n, I);
            break;
          case 'selectionchange':
            if (lp) break;
          case 'keydown':
          case 'keyup':
            Ma(D, n, I);
        }
        var te;
        if (bi)
          e: {
            switch (e) {
              case 'compositionstart':
                var re = 'onCompositionStart';
                break e;
              case 'compositionend':
                re = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                re = 'onCompositionUpdate';
                break e;
            }
            re = void 0;
          }
        else
          Nn
            ? ka(e, n) && (re = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (re = 'onCompositionStart');
        re &&
          (xa &&
            n.locale !== 'ko' &&
            (Nn || re !== 'onCompositionStart'
              ? re === 'onCompositionEnd' && Nn && (te = ha())
              : ((bt = I), (ji = 'value' in bt ? bt.value : bt.textContent), (Nn = !0))),
          (ee = ho(P, re)),
          0 < ee.length &&
            ((re = new ya(re, e, null, n, I)),
            D.push({ event: re, listeners: ee }),
            te ? (re.data = te) : ((te = Ca(n)), te !== null && (re.data = te)))),
          (te = Yd ? Xd(e, n) : Jd(e, n)) &&
            ((P = ho(P, 'onBeforeInput')),
            0 < P.length &&
              ((I = new ya('onBeforeInput', 'beforeinput', null, n, I)),
              D.push({ event: I, listeners: P }),
              (I.data = te)));
      }
      Ha(D, t);
    });
  }
  function wr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ho(e, t) {
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
  var Zi = null,
    es = null;
  function ts(e, t) {
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
  var ns = typeof setTimeout == 'function' ? setTimeout : void 0,
    pp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Ga = typeof Promise == 'function' ? Promise : void 0,
    mp =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Ga < 'u'
          ? function (e) {
              return Ga.resolve(null).then(e).catch(hp);
            }
          : ns;
  function hp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function rs(e, t) {
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
  function Ht(e) {
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
    os = '__reactEvents$' + _n,
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
  var is = [],
    Dn = -1;
  function Wt(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > Dn || ((e.current = is[Dn]), (is[Dn] = null), Dn--);
  }
  function ke(e, t) {
    Dn++, (is[Dn] = e.current), (e.current = t);
  }
  var Kt = {},
    Be = Wt(Kt),
    Xe = Wt(!1),
    an = Kt;
  function zn(e, t) {
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
    Pe(Xe), Pe(Be);
  }
  function Xa(e, t, n) {
    if (Be.current !== Kt) throw Error(i(168));
    ke(Be, t), ke(Xe, n);
  }
  function Ja(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(i(108, Ee(e) || 'Unknown', s));
    return U({}, n, r);
  }
  function xo(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
      (an = Be.current),
      ke(Be, e),
      ke(Xe, Xe.current),
      !0
    );
  }
  function qa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(i(169));
    n
      ? ((e = Ja(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Pe(Xe),
        Pe(Be),
        ke(Be, e))
      : Pe(Xe),
      ke(Xe, n);
  }
  var Lt = null,
    So = !1,
    ss = !1;
  function Za(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
  }
  function yp(e) {
    (So = !0), Za(e);
  }
  function Qt() {
    if (!ss && Lt !== null) {
      ss = !0;
      var e = 0,
        t = we;
      try {
        var n = Lt;
        for (we = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Lt = null), (So = !1);
      } catch (s) {
        throw (Lt !== null && (Lt = Lt.slice(e + 1)), ta(Ri, Qt), s);
      } finally {
        (we = t), (ss = !1);
      }
    }
    return null;
  }
  var Mn = [],
    jn = 0,
    Eo = null,
    ko = 0,
    at = [],
    ut = 0,
    un = null,
    Ot = 1,
    _t = '';
  function cn(e, t) {
    (Mn[jn++] = ko), (Mn[jn++] = Eo), (Eo = e), (ko = t);
  }
  function eu(e, t, n) {
    (at[ut++] = Ot), (at[ut++] = _t), (at[ut++] = un), (un = e);
    var r = Ot;
    e = _t;
    var s = 32 - mt(r) - 1;
    (r &= ~(1 << s)), (n += 1);
    var a = 32 - mt(t) + s;
    if (30 < a) {
      var d = s - (s % 5);
      (a = (r & ((1 << d) - 1)).toString(32)),
        (r >>= d),
        (s -= d),
        (Ot = (1 << (32 - mt(t) + s)) | (n << s) | r),
        (_t = a + e);
    } else (Ot = (1 << a) | (n << s) | r), (_t = e);
  }
  function ls(e) {
    e.return !== null && (cn(e, 1), eu(e, 1, 0));
  }
  function as(e) {
    for (; e === Eo; ) (Eo = Mn[--jn]), (Mn[jn] = null), (ko = Mn[--jn]), (Mn[jn] = null);
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
    Re = !1,
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
          t !== null ? ((e.stateNode = t), (ot = e), (it = Ht(t.firstChild)), !0) : !1
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
  function us(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function cs(e) {
    if (Re) {
      var t = it;
      if (t) {
        var n = t;
        if (!nu(e, t)) {
          if (us(e)) throw Error(i(418));
          t = Ht(n.nextSibling);
          var r = ot;
          t && nu(e, t) ? tu(r, n) : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (ot = e));
        }
      } else {
        if (us(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (Re = !1), (ot = e);
      }
    }
  }
  function ru(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ot = e;
  }
  function Co(e) {
    if (e !== ot) return !1;
    if (!Re) return ru(e), (Re = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !ts(e.type, e.memoizedProps))),
      t && (t = it))
    ) {
      if (us(e)) throw (ou(), Error(i(418)));
      for (; t; ) tu(e, t), (t = Ht(t.nextSibling));
    }
    if ((ru(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                it = Ht(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        it = null;
      }
    } else it = ot ? Ht(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ou() {
    for (var e = it; e; ) e = Ht(e.nextSibling);
  }
  function An() {
    (it = ot = null), (Re = !1);
  }
  function fs(e) {
    gt === null ? (gt = [e]) : gt.push(e);
  }
  var wp = $.ReactCurrentBatchConfig;
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
        ? ((x = nl(C, k.mode, j)), (x.return = k), x)
        : ((x = s(x, C)), (x.return = k), x);
    }
    function y(k, x, C, j) {
      var J = C.type;
      return J === X
        ? I(k, x, C.props.children, j, C.key)
        : x !== null &&
            (x.elementType === J ||
              (typeof J == 'object' && J !== null && J.$$typeof === ue && iu(J) === x.type))
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
        ? ((x = rl(C, k.mode, j)), (x.return = k), x)
        : ((x = s(x, C.children || [])), (x.return = k), x);
    }
    function I(k, x, C, j, J) {
      return x === null || x.tag !== 7
        ? ((x = yn(C, k.mode, j, J)), (x.return = k), x)
        : ((x = s(x, C)), (x.return = k), x);
    }
    function D(k, x, C) {
      if ((typeof x == 'string' && x !== '') || typeof x == 'number')
        return (x = nl('' + x, k.mode, C)), (x.return = k), x;
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case Z:
            return (
              (C = Yo(x.type, x.key, x.props, null, k.mode, C)),
              (C.ref = Er(k, null, x)),
              (C.return = k),
              C
            );
          case q:
            return (x = rl(x, k.mode, C)), (x.return = k), x;
          case ue:
            var j = x._init;
            return D(k, j(x._payload), C);
        }
        if (Jn(x) || B(x)) return (x = yn(x, k.mode, C, null)), (x.return = k), x;
        Po(k, x);
      }
      return null;
    }
    function _(k, x, C, j) {
      var J = x !== null ? x.key : null;
      if ((typeof C == 'string' && C !== '') || typeof C == 'number')
        return J !== null ? null : g(k, x, '' + C, j);
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case Z:
            return C.key === J ? y(k, x, C, j) : null;
          case q:
            return C.key === J ? P(k, x, C, j) : null;
          case ue:
            return (J = C._init), _(k, x, J(C._payload), j);
        }
        if (Jn(C) || B(C)) return J !== null ? null : I(k, x, C, j, null);
        Po(k, C);
      }
      return null;
    }
    function V(k, x, C, j, J) {
      if ((typeof j == 'string' && j !== '') || typeof j == 'number')
        return (k = k.get(C) || null), g(x, k, '' + j, J);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case Z:
            return (k = k.get(j.key === null ? C : j.key) || null), y(x, k, j, J);
          case q:
            return (k = k.get(j.key === null ? C : j.key) || null), P(x, k, j, J);
          case ue:
            var ee = j._init;
            return V(k, x, C, ee(j._payload), J);
        }
        if (Jn(j) || B(j)) return (k = k.get(C) || null), I(x, k, j, J, null);
        Po(x, j);
      }
      return null;
    }
    function H(k, x, C, j) {
      for (
        var J = null, ee = null, te = x, re = (x = 0), Ue = null;
        te !== null && re < C.length;
        re++
      ) {
        te.index > re ? ((Ue = te), (te = null)) : (Ue = te.sibling);
        var he = _(k, te, C[re], j);
        if (he === null) {
          te === null && (te = Ue);
          break;
        }
        e && te && he.alternate === null && t(k, te),
          (x = a(he, x, re)),
          ee === null ? (J = he) : (ee.sibling = he),
          (ee = he),
          (te = Ue);
      }
      if (re === C.length) return n(k, te), Re && cn(k, re), J;
      if (te === null) {
        for (; re < C.length; re++)
          (te = D(k, C[re], j)),
            te !== null &&
              ((x = a(te, x, re)), ee === null ? (J = te) : (ee.sibling = te), (ee = te));
        return Re && cn(k, re), J;
      }
      for (te = r(k, te); re < C.length; re++)
        (Ue = V(te, k, re, C[re], j)),
          Ue !== null &&
            (e && Ue.alternate !== null && te.delete(Ue.key === null ? re : Ue.key),
            (x = a(Ue, x, re)),
            ee === null ? (J = Ue) : (ee.sibling = Ue),
            (ee = Ue));
      return (
        e &&
          te.forEach(function (nn) {
            return t(k, nn);
          }),
        Re && cn(k, re),
        J
      );
    }
    function G(k, x, C, j) {
      var J = B(C);
      if (typeof J != 'function') throw Error(i(150));
      if (((C = J.call(C)), C == null)) throw Error(i(151));
      for (
        var ee = (J = null), te = x, re = (x = 0), Ue = null, he = C.next();
        te !== null && !he.done;
        re++, he = C.next()
      ) {
        te.index > re ? ((Ue = te), (te = null)) : (Ue = te.sibling);
        var nn = _(k, te, he.value, j);
        if (nn === null) {
          te === null && (te = Ue);
          break;
        }
        e && te && nn.alternate === null && t(k, te),
          (x = a(nn, x, re)),
          ee === null ? (J = nn) : (ee.sibling = nn),
          (ee = nn),
          (te = Ue);
      }
      if (he.done) return n(k, te), Re && cn(k, re), J;
      if (te === null) {
        for (; !he.done; re++, he = C.next())
          (he = D(k, he.value, j)),
            he !== null &&
              ((x = a(he, x, re)), ee === null ? (J = he) : (ee.sibling = he), (ee = he));
        return Re && cn(k, re), J;
      }
      for (te = r(k, te); !he.done; re++, he = C.next())
        (he = V(te, k, re, he.value, j)),
          he !== null &&
            (e && he.alternate !== null && te.delete(he.key === null ? re : he.key),
            (x = a(he, x, re)),
            ee === null ? (J = he) : (ee.sibling = he),
            (ee = he));
      return (
        e &&
          te.forEach(function (qp) {
            return t(k, qp);
          }),
        Re && cn(k, re),
        J
      );
    }
    function ze(k, x, C, j) {
      if (
        (typeof C == 'object' &&
          C !== null &&
          C.type === X &&
          C.key === null &&
          (C = C.props.children),
        typeof C == 'object' && C !== null)
      ) {
        switch (C.$$typeof) {
          case Z:
            e: {
              for (var J = C.key, ee = x; ee !== null; ) {
                if (ee.key === J) {
                  if (((J = C.type), J === X)) {
                    if (ee.tag === 7) {
                      n(k, ee.sibling), (x = s(ee, C.props.children)), (x.return = k), (k = x);
                      break e;
                    }
                  } else if (
                    ee.elementType === J ||
                    (typeof J == 'object' && J !== null && J.$$typeof === ue && iu(J) === ee.type)
                  ) {
                    n(k, ee.sibling),
                      (x = s(ee, C.props)),
                      (x.ref = Er(k, ee, C)),
                      (x.return = k),
                      (k = x);
                    break e;
                  }
                  n(k, ee);
                  break;
                } else t(k, ee);
                ee = ee.sibling;
              }
              C.type === X
                ? ((x = yn(C.props.children, k.mode, j, C.key)), (x.return = k), (k = x))
                : ((j = Yo(C.type, C.key, C.props, null, k.mode, j)),
                  (j.ref = Er(k, x, C)),
                  (j.return = k),
                  (k = j));
            }
            return d(k);
          case q:
            e: {
              for (ee = C.key; x !== null; ) {
                if (x.key === ee)
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
              (x = rl(C, k.mode, j)), (x.return = k), (k = x);
            }
            return d(k);
          case ue:
            return (ee = C._init), ze(k, x, ee(C._payload), j);
        }
        if (Jn(C)) return H(k, x, C, j);
        if (B(C)) return G(k, x, C, j);
        Po(k, C);
      }
      return (typeof C == 'string' && C !== '') || typeof C == 'number'
        ? ((C = '' + C),
          x !== null && x.tag === 6
            ? (n(k, x.sibling), (x = s(x, C)), (x.return = k), (k = x))
            : (n(k, x), (x = nl(C, k.mode, j)), (x.return = k), (k = x)),
          d(k))
        : n(k, x);
    }
    return ze;
  }
  var Fn = su(!0),
    lu = su(!1),
    To = Wt(null),
    No = null,
    $n = null,
    ds = null;
  function ps() {
    ds = $n = No = null;
  }
  function ms(e) {
    var t = To.current;
    Pe(To), (e._currentValue = t);
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
      (ds = $n = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (qe = !0), (e.firstContext = null));
  }
  function ct(e) {
    var t = e._currentValue;
    if (ds !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
        if (No === null) throw Error(i(308));
        ($n = e), (No.dependencies = { lanes: 0, firstContext: e });
      } else $n = $n.next = e;
    return t;
  }
  var fn = null;
  function gs(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  function au(e, t, n, r) {
    var s = t.interleaved;
    return (
      s === null ? ((n.next = n), gs(t)) : ((n.next = s.next), (s.next = n)),
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
  function vs(e) {
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
  function Dt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (de & 2) !== 0)) {
      var s = r.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)), (r.pending = t), It(e, n)
      );
    }
    return (
      (s = r.interleaved),
      s === null ? ((t.next = t), gs(r)) : ((t.next = s.next), (s.next = t)),
      (r.interleaved = t),
      It(e, n)
    );
  }
  function Ro(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), _i(e, n);
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
      var I = e.alternate;
      I !== null &&
        ((I = I.updateQueue),
        (g = I.lastBaseUpdate),
        g !== d && (g === null ? (I.firstBaseUpdate = P) : (g.next = P), (I.lastBaseUpdate = y)));
    }
    if (a !== null) {
      var D = s.baseState;
      (d = 0), (I = P = y = null), (g = a);
      do {
        var _ = g.lane,
          V = g.eventTime;
        if ((r & _) === _) {
          I !== null &&
            (I = I.next =
              {
                eventTime: V,
                lane: 0,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null,
              });
          e: {
            var H = e,
              G = g;
            switch (((_ = t), (V = n), G.tag)) {
              case 1:
                if (((H = G.payload), typeof H == 'function')) {
                  D = H.call(V, D, _);
                  break e;
                }
                D = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = G.payload), (_ = typeof H == 'function' ? H.call(V, D, _) : H), _ == null)
                )
                  break e;
                D = U({}, D, _);
                break e;
              case 2:
                Gt = !0;
            }
          }
          g.callback !== null &&
            g.lane !== 0 &&
            ((e.flags |= 64), (_ = s.effects), _ === null ? (s.effects = [g]) : _.push(g));
        } else
          (V = {
            eventTime: V,
            lane: _,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            I === null ? ((P = I = V), (y = D)) : (I = I.next = V),
            (d |= _);
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          (_ = g), (g = _.next), (_.next = null), (s.lastBaseUpdate = _), (s.shared.pending = null);
        }
      } while (!0);
      if (
        (I === null && (y = D),
        (s.baseState = y),
        (s.firstBaseUpdate = P),
        (s.lastBaseUpdate = I),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do (d |= s.lane), (s = s.next);
        while (s !== t);
      } else a === null && (s.shared.lanes = 0);
      (mn |= d), (e.lanes = d), (e.memoizedState = D);
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
    kt = Wt(kr),
    Cr = Wt(kr),
    Pr = Wt(kr);
  function dn(e) {
    if (e === kr) throw Error(i(174));
    return e;
  }
  function ys(e, t) {
    switch ((ke(Pr, t), ke(Cr, e), ke(kt, kr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : wi(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = wi(t, e));
    }
    Pe(kt), ke(kt, t);
  }
  function Vn() {
    Pe(kt), Pe(Cr), Pe(Pr);
  }
  function du(e) {
    dn(Pr.current);
    var t = dn(kt.current),
      n = wi(t, e.type);
    t !== n && (ke(Cr, e), ke(kt, n));
  }
  function ws(e) {
    Cr.current === e && (Pe(kt), Pe(Cr));
  }
  var Le = Wt(0);
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
  var xs = [];
  function Ss() {
    for (var e = 0; e < xs.length; e++) xs[e]._workInProgressVersionPrimary = null;
    xs.length = 0;
  }
  var _o = $.ReactCurrentDispatcher,
    Es = $.ReactCurrentBatchConfig,
    pn = 0,
    Oe = null,
    je = null,
    Fe = null,
    Io = !1,
    Tr = !1,
    Nr = 0,
    xp = 0;
  function He() {
    throw Error(i(321));
  }
  function ks(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
    return !0;
  }
  function Cs(e, t, n, r, s, a) {
    if (
      ((pn = a),
      (Oe = t),
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
      ((_o.current = Mo),
      (t = je !== null && je.next !== null),
      (pn = 0),
      (Fe = je = Oe = null),
      (Io = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function Ps() {
    var e = Nr !== 0;
    return (Nr = 0), e;
  }
  function Ct() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fe === null ? (Oe.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
  }
  function ft() {
    if (je === null) {
      var e = Oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Fe === null ? Oe.memoizedState : Fe.next;
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
        Fe === null ? (Oe.memoizedState = Fe = e) : (Fe = Fe.next = e);
    }
    return Fe;
  }
  function Rr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ts(e) {
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
        var I = P.lane;
        if ((pn & I) === I)
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
            lane: I,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          y === null ? ((g = y = D), (d = r)) : (y = y.next = D), (Oe.lanes |= I), (mn |= I);
        }
        P = P.next;
      } while (P !== null && P !== a);
      y === null ? (d = r) : (y.next = g),
        ht(r, t.memoizedState) || (qe = !0),
        (t.memoizedState = r),
        (t.baseState = d),
        (t.baseQueue = y),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      s = e;
      do (a = s.lane), (Oe.lanes |= a), (mn |= a), (s = s.next);
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ns(e) {
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
      ht(a, t.memoizedState) || (qe = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a);
    }
    return [a, r];
  }
  function pu() {}
  function mu(e, t) {
    var n = Oe,
      r = ft(),
      s = t(),
      a = !ht(r.memoizedState, s);
    if (
      (a && ((r.memoizedState = s), (qe = !0)),
      (r = r.queue),
      Rs(vu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || a || (Fe !== null && Fe.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Lr(9, gu.bind(null, n, r, s, t), void 0, null), $e === null))
        throw Error(i(349));
      (pn & 30) !== 0 || hu(n, t, s);
    }
    return s;
  }
  function hu(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Oe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Oe.updateQueue = t), (t.stores = [e]))
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
      return !ht(e, n);
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
      (e = e.dispatch = kp.bind(null, Oe, e)),
      [t.memoizedState, e]
    );
  }
  function Lr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Oe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Oe.updateQueue = t),
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
  function Do(e, t, n, r) {
    var s = Ct();
    (Oe.flags |= e), (s.memoizedState = Lr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function zo(e, t, n, r) {
    var s = ft();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (je !== null) {
      var d = je.memoizedState;
      if (((a = d.destroy), r !== null && ks(r, d.deps))) {
        s.memoizedState = Lr(t, n, a, r);
        return;
      }
    }
    (Oe.flags |= e), (s.memoizedState = Lr(1 | t, n, a, r));
  }
  function Eu(e, t) {
    return Do(8390656, 8, e, t);
  }
  function Rs(e, t) {
    return zo(2048, 8, e, t);
  }
  function ku(e, t) {
    return zo(4, 2, e, t);
  }
  function Cu(e, t) {
    return zo(4, 4, e, t);
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
    return (n = n != null ? n.concat([e]) : null), zo(4, 4, Pu.bind(null, t, e), n);
  }
  function Ls() {}
  function Nu(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ks(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ru(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ks(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Lu(e, t, n) {
    return (pn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n))
      : (ht(n, t) || ((n = ia()), (Oe.lanes |= n), (mn |= n), (e.baseState = !0)), t);
  }
  function Sp(e, t) {
    var n = we;
    (we = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Es.transition;
    Es.transition = {};
    try {
      e(!1), t();
    } finally {
      (we = n), (Es.transition = r);
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
      xt(n, e, r, s), Du(n, t, r);
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
          if (((s.hasEagerState = !0), (s.eagerState = g), ht(g, d))) {
            var y = t.interleaved;
            y === null ? ((s.next = s), gs(t)) : ((s.next = y.next), (y.next = s)),
              (t.interleaved = s);
            return;
          }
        } catch {
        } finally {
        }
      (n = au(e, t, s, r)), n !== null && ((s = Ye()), xt(n, e, r, s), Du(n, t, r));
    }
  }
  function _u(e) {
    var t = e.alternate;
    return e === Oe || (t !== null && t === Oe);
  }
  function Iu(e, t) {
    Tr = Io = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function Du(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), _i(e, n);
    }
  }
  var Mo = {
      readContext: ct,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useInsertionEffect: He,
      useLayoutEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useMutableSource: He,
      useSyncExternalStore: He,
      useId: He,
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
        return (n = n != null ? n.concat([e]) : null), Do(4194308, 4, Pu.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return Do(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Do(4, 2, e, t);
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
          (e = e.dispatch = Ep.bind(null, Oe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ct();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: xu,
      useDebugValue: Ls,
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
        var r = Oe,
          s = Ct();
        if (Re) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), $e === null)) throw Error(i(349));
          (pn & 30) !== 0 || hu(r, t, n);
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
        if (Re) {
          var n = _t,
            r = Ot;
          (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
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
      useEffect: Rs,
      useImperativeHandle: Tu,
      useInsertionEffect: ku,
      useLayoutEffect: Cu,
      useMemo: Ru,
      useReducer: Ts,
      useRef: Su,
      useState: function () {
        return Ts(Rr);
      },
      useDebugValue: Ls,
      useDeferredValue: function (e) {
        var t = ft();
        return Lu(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = Ts(Rr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: pu,
      useSyncExternalStore: mu,
      useId: Ou,
      unstable_isNewReconciler: !1,
    },
    Tp = {
      readContext: ct,
      useCallback: Nu,
      useContext: ct,
      useEffect: Rs,
      useImperativeHandle: Tu,
      useInsertionEffect: ku,
      useLayoutEffect: Cu,
      useMemo: Ru,
      useReducer: Ns,
      useRef: Su,
      useState: function () {
        return Ns(Rr);
      },
      useDebugValue: Ls,
      useDeferredValue: function (e) {
        var t = ft();
        return je === null ? (t.memoizedState = e) : Lu(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = Ns(Rr)[0],
          t = ft().memoizedState;
        return [e, t];
      },
      useMutableSource: pu,
      useSyncExternalStore: mu,
      useId: Ou,
      unstable_isNewReconciler: !1,
    };
  function vt(e, t) {
    if (e && e.defaultProps) {
      (t = U({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Os(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : U({}, t, n)),
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
        a = Dt(r, s);
      (a.payload = t),
        n != null && (a.callback = n),
        (t = Yt(e, a, s)),
        t !== null && (xt(t, e, s, r), Ro(t, e, s));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        s = Zt(e),
        a = Dt(r, s);
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
        s = Dt(n, r);
      (s.tag = 2),
        t != null && (s.callback = t),
        (t = Yt(e, s, r)),
        t !== null && (xt(t, e, r, n), Ro(t, e, r));
    },
  };
  function zu(e, t, n, r, s, a, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, a, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !hr(n, r) || !hr(s, a)
          : !0
    );
  }
  function Mu(e, t, n) {
    var r = !1,
      s = Kt,
      a = t.contextType;
    return (
      typeof a == 'object' && a !== null
        ? (a = ct(a))
        : ((s = Je(t) ? an : Be.current),
          (r = t.contextTypes),
          (a = (r = r != null) ? zn(e, s) : Kt)),
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
  function _s(e, t, n, r) {
    var s = e.stateNode;
    (s.props = n), (s.state = e.memoizedState), (s.refs = {}), vs(e);
    var a = t.contextType;
    typeof a == 'object' && a !== null
      ? (s.context = ct(a))
      : ((a = Je(t) ? an : Be.current), (s.context = zn(e, a))),
      (s.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == 'function' && (Os(e, t, a, n), (s.state = e.memoizedState)),
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
      do (n += pe(r)), (r = r.return);
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
  function Is(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ds(e, t) {
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
    (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Bo || ((Bo = !0), (Gs = r)), Ds(e, t);
      }),
      n
    );
  }
  function Fu(e, t, n) {
    (n = Dt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var s = t.value;
      (n.payload = function () {
        return r(s);
      }),
        (n.callback = function () {
          Ds(e, t);
        });
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == 'function' &&
        (n.callback = function () {
          Ds(e, t), typeof r != 'function' && (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
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
              (n.alternate === null ? (n.tag = 17) : ((t = Dt(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = s), e);
  }
  var Rp = $.ReactCurrentOwner,
    qe = !1;
  function Ge(e, t, n, r) {
    t.child = e === null ? lu(t, null, n, r) : Fn(t, e.child, n, r);
  }
  function bu(e, t, n, r, s) {
    n = n.render;
    var a = t.ref;
    return (
      Un(t, s),
      (r = Cs(e, t, n, r, a, s)),
      (n = Ps()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), zt(e, t, s))
        : (Re && n && ls(t), (t.flags |= 1), Ge(e, t, r, s), t.child)
    );
  }
  function Bu(e, t, n, r, s) {
    if (e === null) {
      var a = n.type;
      return typeof a == 'function' &&
        !tl(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Hu(e, t, a, r, s))
        : ((e = Yo(n.type, null, r, t, t.mode, s)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((a = e.child), (e.lanes & s) === 0)) {
      var d = a.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : hr), n(d, r) && e.ref === t.ref))
        return zt(e, t, s);
    }
    return (t.flags |= 1), (e = tn(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Hu(e, t, n, r, s) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (hr(a, r) && e.ref === t.ref)
        if (((qe = !1), (t.pendingProps = r = a), (e.lanes & s) !== 0))
          (e.flags & 131072) !== 0 && (qe = !0);
        else return (t.lanes = e.lanes), zt(e, t, s);
    }
    return zs(e, t, n, r, s);
  }
  function Wu(e, t, n) {
    var r = t.pendingProps,
      s = r.children,
      a = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ke(Hn, st),
          (st |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ke(Hn, st),
            (st |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = a !== null ? a.baseLanes : n),
          ke(Hn, st),
          (st |= r);
      }
    else
      a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ke(Hn, st),
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
      (a = zn(t, a)),
      Un(t, s),
      (n = Cs(e, t, n, r, a, s)),
      (r = Ps()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), zt(e, t, s))
        : (Re && r && ls(t), (t.flags |= 1), Ge(e, t, n, s), t.child)
    );
  }
  function Qu(e, t, n, r, s) {
    if (Je(n)) {
      var a = !0;
      xo(t);
    } else a = !1;
    if ((Un(t, s), t.stateNode === null)) Fo(e, t), Mu(t, n, r), _s(t, n, r, s), (r = !0);
    else if (e === null) {
      var d = t.stateNode,
        g = t.memoizedProps;
      d.props = g;
      var y = d.context,
        P = n.contextType;
      typeof P == 'object' && P !== null
        ? (P = ct(P))
        : ((P = Je(n) ? an : Be.current), (P = zn(t, P)));
      var I = n.getDerivedStateFromProps,
        D = typeof I == 'function' || typeof d.getSnapshotBeforeUpdate == 'function';
      D ||
        (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof d.componentWillReceiveProps != 'function') ||
        ((g !== r || y !== P) && ju(t, d, r, P)),
        (Gt = !1);
      var _ = t.memoizedState;
      (d.state = _),
        Lo(t, r, d, s),
        (y = t.memoizedState),
        g !== r || _ !== y || Xe.current || Gt
          ? (typeof I == 'function' && (Os(t, n, I, r), (y = t.memoizedState)),
            (g = Gt || zu(t, n, g, r, _, y, P))
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
        (_ = d.context),
        (y = n.contextType),
        typeof y == 'object' && y !== null
          ? (y = ct(y))
          : ((y = Je(n) ? an : Be.current), (y = zn(t, y)));
      var V = n.getDerivedStateFromProps;
      (I = typeof V == 'function' || typeof d.getSnapshotBeforeUpdate == 'function') ||
        (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof d.componentWillReceiveProps != 'function') ||
        ((g !== D || _ !== y) && ju(t, d, r, y)),
        (Gt = !1),
        (_ = t.memoizedState),
        (d.state = _),
        Lo(t, r, d, s);
      var H = t.memoizedState;
      g !== D || _ !== H || Xe.current || Gt
        ? (typeof V == 'function' && (Os(t, n, V, r), (H = t.memoizedState)),
          (P = Gt || zu(t, n, P, r, _, H, y) || !1)
            ? (I ||
                (typeof d.UNSAFE_componentWillUpdate != 'function' &&
                  typeof d.componentWillUpdate != 'function') ||
                (typeof d.componentWillUpdate == 'function' && d.componentWillUpdate(r, H, y),
                typeof d.UNSAFE_componentWillUpdate == 'function' &&
                  d.UNSAFE_componentWillUpdate(r, H, y)),
              typeof d.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof d.componentDidUpdate != 'function' ||
                (g === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != 'function' ||
                (g === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = H)),
          (d.props = r),
          (d.state = H),
          (d.context = y),
          (r = P))
        : (typeof d.componentDidUpdate != 'function' ||
            (g === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != 'function' ||
            (g === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ms(e, t, n, r, a, s);
  }
  function Ms(e, t, n, r, s, a) {
    Ku(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return s && qa(t, n, !1), zt(e, t, a);
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
      ys(e, t.containerInfo);
  }
  function Yu(e, t, n, r, s) {
    return An(), fs(s), (t.flags |= 256), Ge(e, t, n, r), t.child;
  }
  var js = { dehydrated: null, treeContext: null, retryLane: 0 };
  function As(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xu(e, t, n) {
    var r = t.pendingProps,
      s = Le.current,
      a = !1,
      d = (t.flags & 128) !== 0,
      g;
    if (
      ((g = d) || (g = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      g ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (s |= 1),
      ke(Le, s & 1),
      e === null)
    )
      return (
        cs(t),
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
                (t.child.memoizedState = As(n)),
                (t.memoizedState = js),
                e)
              : Fs(t, d))
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
            ? As(n)
            : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }),
        (a.memoizedState = d),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = js),
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
  function Fs(e, t) {
    return (
      (t = Xo({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    );
  }
  function Ao(e, t, n, r) {
    return (
      r !== null && fs(r),
      Fn(t, e.child, null, n),
      (e = Fs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Lp(e, t, n, r, s, a, d) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Is(Error(i(422)))), Ao(e, t, d, r))
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
            (t.child.memoizedState = As(d)),
            (t.memoizedState = js),
            a);
    if ((t.mode & 1) === 0) return Ao(e, t, d, null);
    if (s.data === '$!') {
      if (((r = s.nextSibling && s.nextSibling.dataset), r)) var g = r.dgst;
      return (r = g), (a = Error(i(419))), (r = Is(a, r, void 0)), Ao(e, t, d, r);
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
      return el(), (r = Is(Error(i(421)))), Ao(e, t, d, r);
    }
    return s.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = bp.bind(null, e)), (s._reactRetry = t), null)
      : ((e = a.treeContext),
        (it = Ht(s.nextSibling)),
        (ot = t),
        (Re = !0),
        (gt = null),
        e !== null &&
          ((at[ut++] = Ot),
          (at[ut++] = _t),
          (at[ut++] = un),
          (Ot = e.id),
          (_t = e.overflow),
          (un = t)),
        (t = Fs(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ju(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), hs(e.return, t, n);
  }
  function $s(e, t, n, r, s) {
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
    if ((Ge(e, t, r.children, n), (r = Le.current), (r & 2) !== 0))
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
    if ((ke(Le, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (s) {
        case 'forwards':
          for (n = t.child, s = null; n !== null; )
            (e = n.alternate), e !== null && Oo(e) === null && (s = n), (n = n.sibling);
          (n = s),
            n === null ? ((s = t.child), (t.child = null)) : ((s = n.sibling), (n.sibling = null)),
            $s(t, !1, s, n, a);
          break;
        case 'backwards':
          for (n = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && Oo(e) === null)) {
              t.child = s;
              break;
            }
            (e = s.sibling), (s.sibling = n), (n = s), (s = e);
          }
          $s(t, !0, n, null, a);
          break;
        case 'together':
          $s(t, !1, null, null, void 0);
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
  function zt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (mn |= t.lanes), (n & t.childLanes) === 0)
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
        ys(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          s = t.memoizedProps.value;
        ke(To, r._currentValue), (r._currentValue = s);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ke(Le, Le.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Xu(e, t, n)
              : (ke(Le, Le.current & 1), (e = zt(e, t, n)), e !== null ? e.sibling : null);
        ke(Le, Le.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return qu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          ke(Le, Le.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Wu(e, t, n);
    }
    return zt(e, t, n);
  }
  var Zu, Us, ec, tc;
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
    (Us = function () {}),
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
            (s = U({}, s, { value: void 0 })), (r = U({}, r, { value: void 0 })), (a = []);
            break;
          case 'textarea':
            (s = yi(e, s)), (r = yi(e, r)), (a = []);
            break;
          default:
            typeof s.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = vo);
        }
        xi(n, r);
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
          if (((g = s?.[P]), r.hasOwnProperty(P) && y !== g && (y != null || g != null)))
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
                      ? (y != null && P === 'onScroll' && Ce('scroll', e), a || g === y || (a = []))
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
    if (!Re)
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
  function We(e) {
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
    switch ((as(t), t.tag)) {
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
        return We(t), null;
      case 1:
        return Je(t.type) && wo(), We(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Vn(),
          Pe(Xe),
          Pe(Be),
          Ss(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Co(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), gt !== null && (Js(gt), (gt = null)))),
          Us(e, t),
          We(t),
          null
        );
      case 5:
        ws(t);
        var s = dn(Pr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ec(e, t, n, r, s), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return We(t), null;
          }
          if (((e = dn(kt.current)), Co(t))) {
            (r = t.stateNode), (n = t.type);
            var a = t.memoizedProps;
            switch (((r[Et] = t), (r[xr] = a), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                Ce('cancel', r), Ce('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ce('load', r);
                break;
              case 'video':
              case 'audio':
                for (s = 0; s < vr.length; s++) Ce(vr[s], r);
                break;
              case 'source':
                Ce('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ce('error', r), Ce('load', r);
                break;
              case 'details':
                Ce('toggle', r);
                break;
              case 'input':
                Ml(r, a), Ce('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!a.multiple }), Ce('invalid', r);
                break;
              case 'textarea':
                Fl(r, a), Ce('invalid', r);
            }
            xi(n, a), (s = null);
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
                  : c.hasOwnProperty(d) && g != null && d === 'onScroll' && Ce('scroll', r);
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
              switch (((d = Si(n, r)), n)) {
                case 'dialog':
                  Ce('cancel', e), Ce('close', e), (s = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  Ce('load', e), (s = r);
                  break;
                case 'video':
                case 'audio':
                  for (s = 0; s < vr.length; s++) Ce(vr[s], e);
                  s = r;
                  break;
                case 'source':
                  Ce('error', e), (s = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  Ce('error', e), Ce('load', e), (s = r);
                  break;
                case 'details':
                  Ce('toggle', e), (s = r);
                  break;
                case 'input':
                  Ml(e, r), (s = hi(e, r)), Ce('invalid', e);
                  break;
                case 'option':
                  s = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (s = U({}, r, { value: void 0 })),
                    Ce('invalid', e);
                  break;
                case 'textarea':
                  Fl(e, r), (s = yi(e, r)), Ce('invalid', e);
                  break;
                default:
                  s = r;
              }
              xi(n, s), (g = s);
              for (a in g)
                if (g.hasOwnProperty(a)) {
                  var y = g[a];
                  a === 'style'
                    ? Hl(e, y)
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
                            ? y != null && a === 'onScroll' && Ce('scroll', e)
                            : y != null && Y(e, a, y, d));
                }
              switch (n) {
                case 'input':
                  Kr(e), Al(e, r, !1);
                  break;
                case 'textarea':
                  Kr(e), Ul(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ye(r.value));
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
        return We(t), null;
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
        return We(t), null;
      case 13:
        if (
          (Pe(Le),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Re && it !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            ou(), An(), (t.flags |= 98560), (a = !1);
          else if (((a = Co(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(i(318));
              if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                throw Error(i(317));
              a[Et] = t;
            } else An(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            We(t), (a = !1);
          } else gt !== null && (Js(gt), (gt = null)), (a = !0);
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Le.current & 1) !== 0 ? Ae === 0 && (Ae = 3) : el())),
            t.updateQueue !== null && (t.flags |= 4),
            We(t),
            null);
      case 4:
        return Vn(), Us(e, t), e === null && yr(t.stateNode.containerInfo), We(t), null;
      case 10:
        return ms(t.type._context), We(t), null;
      case 17:
        return Je(t.type) && wo(), We(t), null;
      case 19:
        if ((Pe(Le), (a = t.memoizedState), a === null)) return We(t), null;
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
                  return ke(Le, (Le.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null &&
              De() > Wn &&
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
                a.tail === null && a.tailMode === 'hidden' && !d.alternate && !Re)
              )
                return We(t), null;
            } else
              2 * De() - a.renderingStartTime > Wn &&
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
            (a.renderingStartTime = De()),
            (t.sibling = null),
            (n = Le.current),
            ke(Le, r ? (n & 1) | 2 : n & 1),
            t)
          : (We(t), null);
      case 22:
      case 23:
        return (
          Zs(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (st & 1073741824) !== 0 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : We(t),
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
    switch ((as(t), t.tag)) {
      case 1:
        return (
          Je(t.type) && wo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Vn(),
          Pe(Xe),
          Pe(Be),
          Ss(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ws(t), null;
      case 13:
        if ((Pe(Le), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          An();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return Pe(Le), null;
      case 4:
        return Vn(), null;
      case 10:
        return ms(t.type._context), null;
      case 22:
      case 23:
        return Zs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var $o = !1,
    Ke = !1,
    Dp = typeof WeakSet == 'function' ? WeakSet : Set,
    b = null;
  function Bn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          _e(e, t, r);
        }
      else n.current = null;
  }
  function Vs(e, t, n) {
    try {
      n();
    } catch (r) {
      _e(e, t, r);
    }
  }
  var nc = !1;
  function zp(e, t) {
    if (((Zi = oo), (e = za()), Wi(e))) {
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
              I = 0,
              D = e,
              _ = null;
            t: for (;;) {
              for (
                var V;
                D !== n || (s !== 0 && D.nodeType !== 3) || (g = d + s),
                  D !== a || (r !== 0 && D.nodeType !== 3) || (y = d + r),
                  D.nodeType === 3 && (d += D.nodeValue.length),
                  (V = D.firstChild) !== null;

              )
                (_ = D), (D = V);
              for (;;) {
                if (D === e) break t;
                if (
                  (_ === n && ++P === s && (g = d),
                  _ === a && ++I === r && (y = d),
                  (V = D.nextSibling) !== null)
                )
                  break;
                (D = _), (_ = D.parentNode);
              }
              D = V;
            }
            n = g === -1 || y === -1 ? null : { start: g, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (es = { focusedElem: e, selectionRange: n }, oo = !1, b = t; b !== null; )
      if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (b = e);
      else
        for (; b !== null; ) {
          t = b;
          try {
            var H = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (H !== null) {
                    var G = H.memoizedProps,
                      ze = H.memoizedState,
                      k = t.stateNode,
                      x = k.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? G : vt(t.type, G),
                        ze,
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
            _e(t, t.return, j);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (b = e);
            break;
          }
          b = t.return;
        }
    return (H = nc), (nc = !1), H;
  }
  function _r(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var s = (r = r.next);
      do {
        if ((s.tag & e) === e) {
          var a = s.destroy;
          (s.destroy = void 0), a !== void 0 && Vs(t, n, a);
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
  function bs(e) {
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
        t !== null && (delete t[Et], delete t[xr], delete t[os], delete t[gp], delete t[vp])),
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
  function Bs(e, t, n) {
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
      for (Bs(e, t, n), e = e.sibling; e !== null; ) Bs(e, t, n), (e = e.sibling);
  }
  function Hs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Hs(e, t, n), e = e.sibling; e !== null; ) Hs(e, t, n), (e = e.sibling);
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
              e.nodeType === 8 ? rs(e.parentNode, n) : e.nodeType === 1 && rs(e, n),
              ur(e))
            : rs(Ve, n.stateNode));
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
              d !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Vs(n, t, d),
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
            _e(n, t, g);
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
      n === null && (n = e.stateNode = new Dp()),
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
          _e(s, t, P);
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
          } catch (G) {
            _e(e, e.return, G);
          }
          try {
            _r(5, e, e.return);
          } catch (G) {
            _e(e, e.return, G);
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
          } catch (G) {
            _e(e, e.return, G);
          }
        }
        if (r & 4 && ((s = e.stateNode), s != null)) {
          var a = e.memoizedProps,
            d = n !== null ? n.memoizedProps : a,
            g = e.type,
            y = e.updateQueue;
          if (((e.updateQueue = null), y !== null))
            try {
              g === 'input' && a.type === 'radio' && a.name != null && jl(s, a), Si(g, d);
              var P = Si(g, a);
              for (d = 0; d < y.length; d += 2) {
                var I = y[d],
                  D = y[d + 1];
                I === 'style'
                  ? Hl(s, D)
                  : I === 'dangerouslySetInnerHTML'
                    ? bl(s, D)
                    : I === 'children'
                      ? qn(s, D)
                      : Y(s, I, D, P);
              }
              switch (g) {
                case 'input':
                  gi(s, a);
                  break;
                case 'textarea':
                  $l(s, a);
                  break;
                case 'select':
                  var _ = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!a.multiple;
                  var V = a.value;
                  V != null
                    ? En(s, !!a.multiple, V, !1)
                    : _ !== !!a.multiple &&
                      (a.defaultValue != null
                        ? En(s, !!a.multiple, a.defaultValue, !0)
                        : En(s, !!a.multiple, a.multiple ? [] : '', !1));
              }
              s[xr] = a;
            } catch (G) {
              _e(e, e.return, G);
            }
        }
        break;
      case 6:
        if ((wt(t, e), Pt(e), r & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (s = e.stateNode), (a = e.memoizedProps);
          try {
            s.nodeValue = a;
          } catch (G) {
            _e(e, e.return, G);
          }
        }
        break;
      case 3:
        if ((wt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            ur(t.containerInfo);
          } catch (G) {
            _e(e, e.return, G);
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
            !a || (s.alternate !== null && s.alternate.memoizedState !== null) || (Qs = De())),
          r & 4 && lc(e);
        break;
      case 22:
        if (
          ((I = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ke = (P = Ke) || I), wt(t, e), (Ke = P)) : wt(t, e),
          Pt(e),
          r & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null), (e.stateNode.isHidden = P) && !I && (e.mode & 1) !== 0)
          )
            for (b = e, I = e.child; I !== null; ) {
              for (D = b = I; b !== null; ) {
                switch (((_ = b), (V = _.child), _.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _r(4, _, _.return);
                    break;
                  case 1:
                    Bn(_, _.return);
                    var H = _.stateNode;
                    if (typeof H.componentWillUnmount == 'function') {
                      (r = _), (n = _.return);
                      try {
                        (t = r),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount();
                      } catch (G) {
                        _e(r, n, G);
                      }
                    }
                    break;
                  case 5:
                    Bn(_, _.return);
                    break;
                  case 22:
                    if (_.memoizedState !== null) {
                      fc(D);
                      continue;
                    }
                }
                V !== null ? ((V.return = _), (b = V)) : fc(D);
              }
              I = I.sibling;
            }
          e: for (I = null, D = e; ; ) {
            if (D.tag === 5) {
              if (I === null) {
                I = D;
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
                } catch (G) {
                  _e(e, e.return, G);
                }
              }
            } else if (D.tag === 6) {
              if (I === null)
                try {
                  D.stateNode.nodeValue = P ? '' : D.memoizedProps;
                } catch (G) {
                  _e(e, e.return, G);
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
              I === D && (I = null), (D = D.return);
            }
            I === D && (I = null), (D.sibling.return = D.return), (D = D.sibling);
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
            Hs(e, a, s);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo,
              g = ic(e);
            Bs(e, g, d);
            break;
          default:
            throw Error(i(161));
        }
      } catch (y) {
        _e(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mp(e, t, n) {
    (b = e), uc(e);
  }
  function uc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; b !== null; ) {
      var s = b,
        a = s.child;
      if (s.tag === 22 && r) {
        var d = s.memoizedState !== null || $o;
        if (!d) {
          var g = s.alternate,
            y = (g !== null && g.memoizedState !== null) || Ke;
          g = $o;
          var P = Ke;
          if ((($o = d), (Ke = y) && !P))
            for (b = s; b !== null; )
              (d = b),
                (y = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? dc(s)
                  : y !== null
                    ? ((y.return = d), (b = y))
                    : dc(s);
          for (; a !== null; ) (b = a), uc(a), (a = a.sibling);
          (b = s), ($o = g), (Ke = P);
        }
        cc(e);
      } else (s.subtreeFlags & 8772) !== 0 && a !== null ? ((a.return = s), (b = a)) : cc(e);
    }
  }
  function cc(e) {
    for (; b !== null; ) {
      var t = b;
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
                    var I = P.memoizedState;
                    if (I !== null) {
                      var D = I.dehydrated;
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
          Ke || (t.flags & 512 && bs(t));
        } catch (_) {
          _e(t, t.return, _);
        }
      }
      if (t === e) {
        b = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (b = n);
        break;
      }
      b = t.return;
    }
  }
  function fc(e) {
    for (; b !== null; ) {
      var t = b;
      if (t === e) {
        b = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (b = n);
        break;
      }
      b = t.return;
    }
  }
  function dc(e) {
    for (; b !== null; ) {
      var t = b;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Uo(4, t);
            } catch (y) {
              _e(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                _e(t, s, y);
              }
            }
            var a = t.return;
            try {
              bs(t);
            } catch (y) {
              _e(t, a, y);
            }
            break;
          case 5:
            var d = t.return;
            try {
              bs(t);
            } catch (y) {
              _e(t, d, y);
            }
        }
      } catch (y) {
        _e(t, t.return, y);
      }
      if (t === e) {
        b = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        (g.return = t.return), (b = g);
        break;
      }
      b = t.return;
    }
  }
  var jp = Math.ceil,
    Vo = $.ReactCurrentDispatcher,
    Ws = $.ReactCurrentOwner,
    dt = $.ReactCurrentBatchConfig,
    de = 0,
    $e = null,
    Me = null,
    be = 0,
    st = 0,
    Hn = Wt(0),
    Ae = 0,
    Ir = null,
    mn = 0,
    bo = 0,
    Ks = 0,
    Dr = null,
    Ze = null,
    Qs = 0,
    Wn = 1 / 0,
    Mt = null,
    Bo = !1,
    Gs = null,
    Jt = null,
    Ho = !1,
    qt = null,
    Wo = 0,
    zr = 0,
    Ys = null,
    Ko = -1,
    Qo = 0;
  function Ye() {
    return (de & 6) !== 0 ? De() : Ko !== -1 ? Ko : (Ko = De());
  }
  function Zt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (de & 2) !== 0 && be !== 0
        ? be & -be
        : wp.transition !== null
          ? (Qo === 0 && (Qo = ia()), Qo)
          : ((e = we), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ma(e.type))), e);
  }
  function xt(e, t, n, r) {
    if (50 < zr) throw ((zr = 0), (Ys = null), Error(i(185)));
    or(e, n, r),
      ((de & 2) === 0 || e !== $e) &&
        (e === $e && ((de & 2) === 0 && (bo |= n), Ae === 4 && en(e, be)),
        et(e, r),
        n === 1 && de === 0 && (t.mode & 1) === 0 && ((Wn = De() + 500), So && Qt()));
  }
  function et(e, t) {
    var n = e.callbackNode;
    wd(e, t);
    var r = to(e, e === $e ? be : 0);
    if (r === 0) n !== null && na(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && na(n), t === 1))
        e.tag === 0 ? yp(mc.bind(null, e)) : Za(mc.bind(null, e)),
          mp(function () {
            (de & 6) === 0 && Qt();
          }),
          (n = null);
      else {
        switch (sa(r)) {
          case 1:
            n = Ri;
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
    if (((Ko = -1), (Qo = 0), (de & 6) !== 0)) throw Error(i(327));
    var n = e.callbackNode;
    if (Kn() && e.callbackNode !== n) return null;
    var r = to(e, e === $e ? be : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Go(e, r);
    else {
      t = r;
      var s = de;
      de |= 2;
      var a = gc();
      ($e !== e || be !== t) && ((Mt = null), (Wn = De() + 500), gn(e, t));
      do
        try {
          $p();
          break;
        } catch (g) {
          hc(e, g);
        }
      while (!0);
      ps(), (Vo.current = a), (de = s), Me !== null ? (t = 0) : (($e = null), (be = 0), (t = Ae));
    }
    if (t !== 0) {
      if ((t === 2 && ((s = Li(e)), s !== 0 && ((r = s), (t = Xs(e, s)))), t === 1))
        throw ((n = Ir), gn(e, 0), en(e, r), et(e, De()), n);
      if (t === 6) en(e, r);
      else {
        if (
          ((s = e.current.alternate),
          (r & 30) === 0 &&
            !Ap(s) &&
            ((t = Go(e, r)),
            t === 2 && ((a = Li(e)), a !== 0 && ((r = a), (t = Xs(e, a)))),
            t === 1))
        )
          throw ((n = Ir), gn(e, 0), en(e, r), et(e, De()), n);
        switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            vn(e, Ze, Mt);
            break;
          case 3:
            if ((en(e, r), (r & 130023424) === r && ((t = Qs + 500 - De()), 10 < t))) {
              if (to(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & r) !== r)) {
                Ye(), (e.pingedLanes |= e.suspendedLanes & s);
                break;
              }
              e.timeoutHandle = ns(vn.bind(null, e, Ze, Mt), t);
              break;
            }
            vn(e, Ze, Mt);
            break;
          case 4:
            if ((en(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var d = 31 - mt(r);
              (a = 1 << d), (d = t[d]), d > s && (s = d), (r &= ~a);
            }
            if (
              ((r = s),
              (r = De() - r),
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
              e.timeoutHandle = ns(vn.bind(null, e, Ze, Mt), r);
              break;
            }
            vn(e, Ze, Mt);
            break;
          case 5:
            vn(e, Ze, Mt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return et(e, De()), e.callbackNode === n ? pc.bind(null, e) : null;
  }
  function Xs(e, t) {
    var n = Dr;
    return (
      e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
      (e = Go(e, t)),
      e !== 2 && ((t = Ze), (Ze = n), t !== null && Js(t)),
      e
    );
  }
  function Js(e) {
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
              if (!ht(a(), s)) return !1;
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
      t &= ~Ks, t &= ~bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - mt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function mc(e) {
    if ((de & 6) !== 0) throw Error(i(327));
    Kn();
    var t = to(e, 0);
    if ((t & 1) === 0) return et(e, De()), null;
    var n = Go(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Li(e);
      r !== 0 && ((t = r), (n = Xs(e, r)));
    }
    if (n === 1) throw ((n = Ir), gn(e, 0), en(e, t), et(e, De()), n);
    if (n === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      vn(e, Ze, Mt),
      et(e, De()),
      null
    );
  }
  function qs(e, t) {
    var n = de;
    de |= 1;
    try {
      return e(t);
    } finally {
      (de = n), de === 0 && ((Wn = De() + 500), So && Qt());
    }
  }
  function hn(e) {
    qt !== null && qt.tag === 0 && (de & 6) === 0 && Kn();
    var t = de;
    de |= 1;
    var n = dt.transition,
      r = we;
    try {
      if (((dt.transition = null), (we = 1), e)) return e();
    } finally {
      (we = r), (dt.transition = n), (de = t), (de & 6) === 0 && Qt();
    }
  }
  function Zs() {
    (st = Hn.current), Pe(Hn);
  }
  function gn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), pp(n)), Me !== null))
      for (n = Me.return; n !== null; ) {
        var r = n;
        switch ((as(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && wo();
            break;
          case 3:
            Vn(), Pe(Xe), Pe(Be), Ss();
            break;
          case 5:
            ws(r);
            break;
          case 4:
            Vn();
            break;
          case 13:
            Pe(Le);
            break;
          case 19:
            Pe(Le);
            break;
          case 10:
            ms(r.type._context);
            break;
          case 22:
          case 23:
            Zs();
        }
        n = n.return;
      }
    if (
      (($e = e),
      (Me = e = tn(e.current, null)),
      (be = st = t),
      (Ae = 0),
      (Ir = null),
      (Ks = bo = mn = 0),
      (Ze = Dr = null),
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
  function hc(e, t) {
    do {
      var n = Me;
      try {
        if ((ps(), (_o.current = Mo), Io)) {
          for (var r = Oe.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), (r = r.next);
          }
          Io = !1;
        }
        if (
          ((pn = 0),
          (Fe = je = Oe = null),
          (Tr = !1),
          (Nr = 0),
          (Ws.current = null),
          n === null || n.return === null)
        ) {
          (Ae = 1), (Ir = t), (Me = null);
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
              I = g,
              D = I.tag;
            if ((I.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
              var _ = I.alternate;
              _
                ? ((I.updateQueue = _.updateQueue),
                  (I.memoizedState = _.memoizedState),
                  (I.lanes = _.lanes))
                : ((I.updateQueue = null), (I.memoizedState = null));
            }
            var V = Uu(d);
            if (V !== null) {
              (V.flags &= -257), Vu(V, d, g, a, t), V.mode & 1 && $u(a, P, t), (t = V), (y = P);
              var H = t.updateQueue;
              if (H === null) {
                var G = new Set();
                G.add(y), (t.updateQueue = G);
              } else H.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                $u(a, P, t), el();
                break e;
              }
              y = Error(i(426));
            }
          } else if (Re && g.mode & 1) {
            var ze = Uu(d);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), Vu(ze, d, g, a, t), fs(bn(y, g));
              break e;
            }
          }
          (a = y = bn(y, g)), Ae !== 4 && (Ae = 2), Dr === null ? (Dr = [a]) : Dr.push(a), (a = d);
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
      } catch (J) {
        (t = J), Me === n && n !== null && (Me = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function gc() {
    var e = Vo.current;
    return (Vo.current = Mo), e === null ? Mo : e;
  }
  function el() {
    (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
      $e === null || ((mn & 268435455) === 0 && (bo & 268435455) === 0) || en($e, be);
  }
  function Go(e, t) {
    var n = de;
    de |= 2;
    var r = gc();
    ($e !== e || be !== t) && ((Mt = null), gn(e, t));
    do
      try {
        Fp();
        break;
      } catch (s) {
        hc(e, s);
      }
    while (!0);
    if ((ps(), (de = n), (Vo.current = r), Me !== null)) throw Error(i(261));
    return ($e = null), (be = 0), Ae;
  }
  function Fp() {
    for (; Me !== null; ) vc(Me);
  }
  function $p() {
    for (; Me !== null && !cd(); ) vc(Me);
  }
  function vc(e) {
    var t = Sc(e.alternate, e, st);
    (e.memoizedProps = e.pendingProps), t === null ? yc(e) : (Me = t), (Ws.current = null);
  }
  function yc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = _p(n, t, st)), n !== null)) {
          Me = n;
          return;
        }
      } else {
        if (((n = Ip(n, t)), n !== null)) {
          (n.flags &= 32767), (Me = n);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ae = 6), (Me = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    Ae === 0 && (Ae = 5);
  }
  function vn(e, t, n) {
    var r = we,
      s = dt.transition;
    try {
      (dt.transition = null), (we = 1), Up(e, t, n, r);
    } finally {
      (dt.transition = s), (we = r);
    }
    return null;
  }
  function Up(e, t, n, r) {
    do Kn();
    while (qt !== null);
    if ((de & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var a = n.lanes | n.childLanes;
    if (
      (xd(e, a),
      e === $e && ((Me = $e = null), (be = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ho ||
        ((Ho = !0),
        Ec(Jr, function () {
          return Kn(), null;
        })),
      (a = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || a)
    ) {
      (a = dt.transition), (dt.transition = null);
      var d = we;
      we = 1;
      var g = de;
      (de |= 4),
        (Ws.current = null),
        zp(e, n),
        ac(n, e),
        sp(es),
        (oo = !!Zi),
        (es = Zi = null),
        (e.current = n),
        Mp(n),
        fd(),
        (de = g),
        (we = d),
        (dt.transition = a);
    } else e.current = n;
    if (
      (Ho && ((Ho = !1), (qt = e), (Wo = s)),
      (a = e.pendingLanes),
      a === 0 && (Jt = null),
      md(n.stateNode),
      et(e, De()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
    if (Bo) throw ((Bo = !1), (e = Gs), (Gs = null), e);
    return (
      (Wo & 1) !== 0 && e.tag !== 0 && Kn(),
      (a = e.pendingLanes),
      (a & 1) !== 0 ? (e === Ys ? zr++ : ((zr = 0), (Ys = e))) : (zr = 0),
      Qt(),
      null
    );
  }
  function Kn() {
    if (qt !== null) {
      var e = sa(Wo),
        t = dt.transition,
        n = we;
      try {
        if (((dt.transition = null), (we = 16 > e ? 16 : e), qt === null)) var r = !1;
        else {
          if (((e = qt), (qt = null), (Wo = 0), (de & 6) !== 0)) throw Error(i(331));
          var s = de;
          for (de |= 4, b = e.current; b !== null; ) {
            var a = b,
              d = a.child;
            if ((b.flags & 16) !== 0) {
              var g = a.deletions;
              if (g !== null) {
                for (var y = 0; y < g.length; y++) {
                  var P = g[y];
                  for (b = P; b !== null; ) {
                    var I = b;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _r(8, I, a);
                    }
                    var D = I.child;
                    if (D !== null) (D.return = I), (b = D);
                    else
                      for (; b !== null; ) {
                        I = b;
                        var _ = I.sibling,
                          V = I.return;
                        if ((rc(I), I === P)) {
                          b = null;
                          break;
                        }
                        if (_ !== null) {
                          (_.return = V), (b = _);
                          break;
                        }
                        b = V;
                      }
                  }
                }
                var H = a.alternate;
                if (H !== null) {
                  var G = H.child;
                  if (G !== null) {
                    H.child = null;
                    do {
                      var ze = G.sibling;
                      (G.sibling = null), (G = ze);
                    } while (G !== null);
                  }
                }
                b = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && d !== null) (d.return = a), (b = d);
            else
              e: for (; b !== null; ) {
                if (((a = b), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(9, a, a.return);
                  }
                var k = a.sibling;
                if (k !== null) {
                  (k.return = a.return), (b = k);
                  break e;
                }
                b = a.return;
              }
          }
          var x = e.current;
          for (b = x; b !== null; ) {
            d = b;
            var C = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && C !== null) (C.return = d), (b = C);
            else
              e: for (d = x; b !== null; ) {
                if (((g = b), (g.flags & 2048) !== 0))
                  try {
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Uo(9, g);
                    }
                  } catch (J) {
                    _e(g, g.return, J);
                  }
                if (g === d) {
                  b = null;
                  break e;
                }
                var j = g.sibling;
                if (j !== null) {
                  (j.return = g.return), (b = j);
                  break e;
                }
                b = g.return;
              }
          }
          if (((de = s), Qt(), St && typeof St.onPostCommitFiberRoot == 'function'))
            try {
              St.onPostCommitFiberRoot(qr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (we = n), (dt.transition = t);
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
  function _e(e, t, n) {
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
        (Ae === 4 || (Ae === 3 && (be & 130023424) === be && 500 > De() - Qs)
          ? gn(e, 0)
          : (Ks |= n)),
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
    else (qe = !1), Re && (t.flags & 1048576) !== 0 && eu(t, ko, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Fo(e, t), (e = t.pendingProps);
        var s = zn(t, Be.current);
        Un(t, n), (s = Cs(null, t, r, e, s, n));
        var a = Ps();
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
              vs(t),
              (s.updater = jo),
              (t.stateNode = s),
              (s._reactInternals = t),
              _s(t, r, e, n),
              (t = Ms(null, t, r, !0, a, n)))
            : ((t.tag = 0), Re && a && ls(t), Ge(null, t, s, n), (t = t.child)),
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
            (s = t.tag = Wp(r)),
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
                it = Ht(t.stateNode.containerInfo.firstChild),
                  ot = t,
                  Re = !0,
                  gt = null,
                  n = lu(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((An(), r === s)) {
              t = zt(e, t, n);
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
          e === null && cs(t),
          (r = t.type),
          (s = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (d = s.children),
          ts(r, s) ? (d = null) : a !== null && ts(r, a) && (t.flags |= 32),
          Ku(e, t),
          Ge(e, t, d, n),
          t.child
        );
      case 6:
        return e === null && cs(t), null;
      case 13:
        return Xu(e, t, n);
      case 4:
        return (
          ys(t, t.stateNode.containerInfo),
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
            ke(To, r._currentValue),
            (r._currentValue = d),
            a !== null)
          )
            if (ht(a.value, d)) {
              if (a.children === s.children && !Xe.current) {
                t = zt(e, t, n);
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
                        (y = Dt(-1, n & -n)), (y.tag = 2);
                        var P = a.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var I = P.pending;
                          I === null ? (y.next = y) : ((y.next = I.next), (I.next = y)),
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
        return Hu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : vt(r, s)),
          Fo(e, t),
          (t.tag = 1),
          Je(r) ? ((e = !0), xo(t)) : (e = !1),
          Un(t, n),
          Mu(t, r, s),
          _s(t, r, s, n),
          Ms(null, t, r, !0, e, n)
        );
      case 19:
        return qu(e, t, n);
      case 22:
        return Wu(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Ec(e, t) {
    return ta(e, t);
  }
  function Hp(e, t, n, r) {
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
    return new Hp(e, t, n, r);
  }
  function tl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Wp(e) {
    if (typeof e == 'function') return tl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === se)) return 11;
      if (e === Se) return 14;
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
    if (((r = e), typeof e == 'function')) tl(e) && (d = 1);
    else if (typeof e == 'string') d = 5;
    else
      e: switch (e) {
        case X:
          return yn(n.children, s, a, t);
        case xe:
          (d = 8), (s |= 8);
          break;
        case ge:
          return (e = pt(12, n, t, s | 2)), (e.elementType = ge), (e.lanes = a), e;
        case ve:
          return (e = pt(13, n, t, s)), (e.elementType = ve), (e.lanes = a), e;
        case Q:
          return (e = pt(19, n, t, s)), (e.elementType = Q), (e.lanes = a), e;
        case le:
          return Xo(n, s, a, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case fe:
                d = 10;
                break e;
              case Ie:
                d = 9;
                break e;
              case se:
                d = 11;
                break e;
              case Se:
                d = 14;
                break e;
              case ue:
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
      (e.elementType = le),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function nl(e, t, n) {
    return (e = pt(6, e, null, t)), (e.lanes = n), e;
  }
  function rl(e, t, n) {
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
      (this.eventTimes = Oi(0)),
      (this.expirationTimes = Oi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Oi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ol(e, t, n, r, s, a, d, g, y) {
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
      vs(a),
      e
    );
  }
  function Qp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
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
      (e = ol(n, r, !0, e, s, a, d, g, y)),
      (e.context = kc(null)),
      (n = e.current),
      (r = Ye()),
      (s = Zt(n)),
      (a = Dt(r, s)),
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
      (t = Dt(a, d)),
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
  function il(e, t) {
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
  function sl(e) {
    this._internalRoot = e;
  }
  (Zo.prototype.render = sl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Jo(e, t, null, null);
    }),
    (Zo.prototype.unmount = sl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          hn(function () {
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
  function ll(e) {
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
        hn(),
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
    var y = ol(e, 0, !1, null, null, !1, !1, '', Nc);
    return (
      (e._reactRootContainer = y),
      (e[Rt] = y.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      hn(function () {
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
          n !== 0 && (_i(t, n | 1), et(t, De()), (de & 6) === 0 && ((Wn = De() + 500), Qt()));
        }
        break;
      case 13:
        hn(function () {
          var r = It(e, 1);
          if (r !== null) {
            var s = Ye();
            xt(r, e, 1, s);
          }
        }),
          il(e, 1);
    }
  }),
    (Ii = function (e) {
      if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
          var n = Ye();
          xt(t, e, 134217728, n);
        }
        il(e, 134217728);
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
        il(e, t);
      }
    }),
    (ua = function () {
      return we;
    }),
    (ca = function (e, t) {
      var n = we;
      try {
        return (we = e), t();
      } finally {
        we = n;
      }
    }),
    (Ci = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((gi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
                zl(r), gi(r, s);
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
    (Gl = qs),
    (Yl = hn);
  var Xp = { usingClientEntryPoint: !1, Events: [Sr, In, yo, Kl, Ql, qs] },
    Mr = {
      findFiberByHostInstance: ln,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Jp = {
      bundleType: Mr.bundleType,
      version: Mr.version,
      rendererPackageName: Mr.rendererPackageName,
      rendererConfig: Mr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: $.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Zl(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Mr.findFiberByHostInstance || Gp,
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
      if (!ll(t)) throw Error(i(200));
      return Qp(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!ll(e)) throw Error(i(299));
      var n = !1,
        r = '',
        s = Tc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = ol(e, 1, !1, null, null, n, !1, r, s)),
        (e[Rt] = t.current),
        yr(e.nodeType === 8 ? e.parentNode : e),
        new sl(t)
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
      return hn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!ei(t)) throw Error(i(200));
      return ti(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!ll(e)) throw Error(i(405));
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
        ? (hn(function () {
            ti(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Rt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = qs),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ei(n)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return ti(e, t, n, !1, r);
    }),
    (tt.version = '18.3.1-next-f1338f8080-20240426'),
    tt
  );
}
var Mc;
function cf() {
  if (Mc) return cl.exports;
  Mc = 1;
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
  return l(), (cl.exports = sm()), cl.exports;
}
var jc;
function lm() {
  if (jc) return ri;
  jc = 1;
  var l = cf();
  return (ri.createRoot = l.createRoot), (ri.hydrateRoot = l.hydrateRoot), ri;
}
var am = lm();
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const um = l => l.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  ff = (...l) => l.filter((o, i, u) => !!o && u.indexOf(o) === i).join(' ');
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var cm = {
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
 */ const fm = T.forwardRef(
  (
    {
      color: l = 'currentColor',
      size: o = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: u,
      className: c = '',
      children: f,
      iconNode: m,
      ...p
    },
    v,
  ) =>
    T.createElement(
      'svg',
      {
        ref: v,
        ...cm,
        width: o,
        height: o,
        stroke: l,
        strokeWidth: u ? (Number(i) * 24) / Number(o) : i,
        className: ff('lucide', c),
        ...p,
      },
      [...m.map(([h, S]) => T.createElement(h, S)), ...(Array.isArray(f) ? f : [f])],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dm = (l, o) => {
  const i = T.forwardRef(({ className: u, ...c }, f) =>
    T.createElement(fm, { ref: f, iconNode: o, className: ff(`lucide-${um(l)}`, u), ...c }),
  );
  return (i.displayName = `${l}`), i;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pm = dm('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  mm = [
    {
      id: 1,
      title: 'IRM',
      description: 'Imagerie par Résonance Magnétique pour le diagnostic précis des tissus mous.',
      image: '/images/irm.jpg',
      icon: 'brain',
    },
    {
      id: 2,
      title: 'Scanner (CT)',
      description: 'Tomodensitométrie pour une visualisation en coupe des structures internes.',
      image: '/images/scanner.jpg',
      icon: 'cpu',
    },
    {
      id: 3,
      title: 'Radiologie Numérique',
      description: 'Radiographies numériques de haute qualité avec faible dose de rayons.',
      image: '/images/radiologie.jpg',
      icon: 'camera',
    },
    {
      id: 4,
      title: 'Échographie',
      description: "Imagerie par ultrasons pour l'examen des tissus mous et organes internes.",
      image: '/images/echo.jpg',
      icon: 'waveform',
    },
    {
      id: 5,
      title: 'Mammographie',
      description: 'Dépistage et diagnostic des affections mammaires.',
      image: '/images/mammo.jpg',
      icon: 'scan-face',
    },
    {
      id: 6,
      title: 'Ostéodensitométrie',
      description: 'Mesure de la densité osseuse pour diagnostiquer l’ostéoporose.',
      image: '/images/osteo.jpg',
      icon: 'bone',
    },
  ],
  hm = (l, o, i, u) => {
    const c = [i, { code: o, ...(u || {}) }];
    if (l?.services?.logger?.forward)
      return l.services.logger.forward(c, 'warn', 'react-i18next::', !0);
    wn(c[0]) && (c[0] = `react-i18next:: ${c[0]}`),
      l?.services?.logger?.warn
        ? l.services.logger.warn(...c)
        : console?.warn && console.warn(...c);
  },
  Ac = {},
  vl = (l, o, i, u) => {
    (wn(i) && Ac[i]) || (wn(i) && (Ac[i] = new Date()), hm(l, o, i, u));
  },
  df = (l, o) => () => {
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
    l.loadNamespaces(o, df(l, i));
  },
  Fc = (l, o, i, u) => {
    if ((wn(i) && (i = [i]), l.options.preload && l.options.preload.indexOf(o) > -1))
      return yl(l, i, u);
    i.forEach(c => {
      l.options.ns.indexOf(c) < 0 && l.options.ns.push(c);
    }),
      l.loadLanguages(o, df(l, u));
  },
  gm = (l, o, i = {}) =>
    !o.languages || !o.languages.length
      ? (vl(o, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
          languages: o.languages,
        }),
        !0)
      : o.hasLoadedNamespace(l, {
          lng: i.lng,
          precheck: (u, c) => {
            if (
              i.bindI18n?.indexOf('languageChanging') > -1 &&
              u.services.backendConnector.backend &&
              u.isLanguageChangingTo &&
              !c(u.isLanguageChangingTo, l)
            )
              return !1;
          },
        }),
  wn = l => typeof l == 'string',
  vm = l => typeof l == 'object' && l !== null,
  ym =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  wm = {
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
  xm = l => wm[l],
  Sm = l => l.replace(ym, xm);
let wl = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: Sm,
};
const Em = (l = {}) => {
    wl = { ...wl, ...l };
  },
  km = () => wl;
let pf;
const Cm = l => {
    pf = l;
  },
  Pm = () => pf,
  Tm = {
    type: '3rdParty',
    init(l) {
      Em(l.options.react), Cm(l);
    },
  },
  Nm = T.createContext();
class Rm {
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
const Lm = (l, o) => {
    const i = T.useRef();
    return (
      T.useEffect(() => {
        i.current = l;
      }, [l, o]),
      i.current
    );
  },
  mf = (l, o, i, u) => l.getFixedT(o, i, u),
  Om = (l, o, i, u) => T.useCallback(mf(l, o, i, u), [l, o, i, u]),
  _m = (l, o = {}) => {
    const { i18n: i } = o,
      { i18n: u, defaultNS: c } = T.useContext(Nm) || {},
      f = i || u || Pm();
    if ((f && !f.reportNamespaces && (f.reportNamespaces = new Rm()), !f)) {
      vl(
        f,
        'NO_I18NEXT_INSTANCE',
        'useTranslation: You will need to pass in an i18next instance by using initReactI18next',
      );
      const $ = (q, X) =>
          wn(X)
            ? X
            : vm(X) && wn(X.defaultValue)
              ? X.defaultValue
              : Array.isArray(q)
                ? q[q.length - 1]
                : q,
        Z = [$, {}, !1];
      return (Z.t = $), (Z.i18n = {}), (Z.ready = !1), Z;
    }
    f.options.react?.wait &&
      vl(
        f,
        'DEPRECATED_OPTION',
        'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
      );
    const m = { ...km(), ...f.options.react, ...o },
      { useSuspense: p, keyPrefix: v } = m;
    let h = c || f.options?.defaultNS;
    (h = wn(h) ? [h] : h || ['translation']), f.reportNamespaces.addUsedNamespaces?.(h);
    const S = (f.isInitialized || f.initializedStoreOnce) && h.every($ => gm($, f, m)),
      E = Om(f, o.lng || null, m.nsMode === 'fallback' ? h : h[0], v),
      R = () => E,
      z = () => mf(f, o.lng || null, m.nsMode === 'fallback' ? h : h[0], v),
      [M, O] = T.useState(R);
    let N = h.join();
    o.lng && (N = `${o.lng}${N}`);
    const K = Lm(N),
      F = T.useRef(!0);
    T.useEffect(() => {
      const { bindI18n: $, bindI18nStore: Z } = m;
      (F.current = !0),
        !S &&
          !p &&
          (o.lng
            ? Fc(f, o.lng, h, () => {
                F.current && O(z);
              })
            : yl(f, h, () => {
                F.current && O(z);
              })),
        S && K && K !== N && F.current && O(z);
      const q = () => {
        F.current && O(z);
      };
      return (
        $ && f?.on($, q),
        Z && f?.store.on(Z, q),
        () => {
          (F.current = !1),
            f && $?.split(' ').forEach(X => f.off(X, q)),
            Z && f && Z.split(' ').forEach(X => f.store.off(X, q));
        }
      );
    }, [f, N]),
      T.useEffect(() => {
        F.current && S && O(R);
      }, [f, v, S]);
    const Y = [M, f, S];
    if (((Y.t = M), (Y.i18n = f), (Y.ready = S), S || (!S && !p))) return Y;
    throw new Promise($ => {
      o.lng ? Fc(f, o.lng, h, () => $()) : yl(f, h, () => $());
    });
  },
  Im = () => {
    const { t: l, i18n: o } = _m();
    return W.jsxs('section', {
      className: 'py-12 px-4 max-w-7xl mx-auto',
      children: [
        W.jsx('h1', {
          className: 'text-3xl font-bold text-center mb-10',
          children: l('services.title', 'Nos Services'),
        }),
        W.jsx('div', {
          className: 'grid gap-8 sm:grid-cols-2 lg:grid-cols-3',
          children: mm.map(i =>
            W.jsxs(
              'div',
              {
                className:
                  'border rounded-lg shadow hover:shadow-lg transition bg-white overflow-hidden',
                children: [
                  W.jsx('img', {
                    src: i.image,
                    alt: i.title,
                    className: 'w-full h-48 object-cover',
                  }),
                  W.jsxs('div', {
                    className: 'p-4',
                    children: [
                      W.jsx('h2', {
                        className: 'text-xl font-semibold mb-2',
                        children: l(`services.items.${i.id}.title`, i.title),
                      }),
                      W.jsx('p', {
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
  Dm = 1,
  zm = 1e6;
let oi = 0;
function Mm(l) {
  if (typeof l != 'number' || l <= 0 || isNaN(l))
    throw new Error("L'ID doit être un nombre positif valide.");
}
function jm() {
  return (oi = (oi + 1) % Number.MAX_SAFE_INTEGER), Mm(oi), oi.toString();
}
const pl = new Map(),
  $c = l => {
    if (pl.has(l)) return;
    const o = setTimeout(() => {
      pl.delete(l), Ur({ type: 'REMOVE_TOAST', toastId: l });
    }, zm);
    pl.set(l, o);
  },
  Am = (l, o) => {
    switch (o.type) {
      case 'ADD_TOAST':
        return { ...l, toasts: [o.toast, ...l.toasts].slice(0, Dm) };
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
  ai = [];
let ui = { toasts: [] };
function Ur(l) {
  (ui = Am(ui, l)),
    ai.forEach(o => {
      o(ui);
    });
}
function Fm({ ...l }) {
  const o = jm(),
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
function $m() {
  const [l, o] = T.useState(ui);
  return (
    T.useEffect(
      () => (
        ai.push(o),
        () => {
          const i = ai.indexOf(o);
          i > -1 && ai.splice(i, 1);
        }
      ),
      [l],
    ),
    { ...l, toast: Fm, dismiss: i => Ur({ type: 'DISMISS_TOAST', toastId: i }) }
  );
}
var Rl = cf();
const Um = uf(Rl);
function lt(l, o, { checkForDefaultPrevented: i = !0 } = {}) {
  return function (c) {
    if ((l?.(c), i === !1 || !c.defaultPrevented)) return o?.(c);
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
  return T.useCallback(hf(...l), l);
}
function gf(l, o = []) {
  let i = [];
  function u(f, m) {
    const p = T.createContext(m),
      v = i.length;
    i = [...i, m];
    const h = E => {
      const { scope: R, children: z, ...M } = E,
        O = R?.[l]?.[v] || p,
        N = T.useMemo(() => M, Object.values(M));
      return W.jsx(O.Provider, { value: N, children: z });
    };
    h.displayName = f + 'Provider';
    function S(E, R) {
      const z = R?.[l]?.[v] || p,
        M = T.useContext(z);
      if (M) return M;
      if (m !== void 0) return m;
      throw new Error(`\`${E}\` must be used within \`${f}\``);
    }
    return [h, S];
  }
  const c = () => {
    const f = i.map(m => T.createContext(m));
    return function (p) {
      const v = p?.[l] || f;
      return T.useMemo(() => ({ [`__scope${l}`]: { ...p, [l]: v } }), [p, v]);
    };
  };
  return (c.scopeName = l), [u, Vm(c, ...o)];
}
function Vm(...l) {
  const o = l[0];
  if (l.length === 1) return o;
  const i = () => {
    const u = l.map(c => ({ useScope: c(), scopeName: c.scopeName }));
    return function (f) {
      const m = u.reduce((p, { useScope: v, scopeName: h }) => {
        const E = v(f)[`__scope${h}`];
        return { ...p, ...E };
      }, {});
      return T.useMemo(() => ({ [`__scope${o.scopeName}`]: m }), [m]);
    };
  };
  return (i.scopeName = o.scopeName), i;
}
function xl(l) {
  const o = bm(l),
    i = T.forwardRef((u, c) => {
      const { children: f, ...m } = u,
        p = T.Children.toArray(f),
        v = p.find(Hm);
      if (v) {
        const h = v.props.children,
          S = p.map(E =>
            E === v
              ? T.Children.count(h) > 1
                ? T.Children.only(null)
                : T.isValidElement(h)
                  ? h.props.children
                  : null
              : E,
          );
        return W.jsx(o, {
          ...m,
          ref: c,
          children: T.isValidElement(h) ? T.cloneElement(h, void 0, S) : null,
        });
      }
      return W.jsx(o, { ...m, ref: c, children: f });
    });
  return (i.displayName = `${l}.Slot`), i;
}
function bm(l) {
  const o = T.forwardRef((i, u) => {
    const { children: c, ...f } = i;
    if (T.isValidElement(c)) {
      const m = Km(c),
        p = Wm(f, c.props);
      return c.type !== T.Fragment && (p.ref = u ? hf(u, m) : m), T.cloneElement(c, p);
    }
    return T.Children.count(c) > 1 ? T.Children.only(null) : null;
  });
  return (o.displayName = `${l}.SlotClone`), o;
}
var Bm = Symbol('radix.slottable');
function Hm(l) {
  return (
    T.isValidElement(l) &&
    typeof l.type == 'function' &&
    '__radixId' in l.type &&
    l.type.__radixId === Bm
  );
}
function Wm(l, o) {
  const i = { ...o };
  for (const u in o) {
    const c = l[u],
      f = o[u];
    /^on[A-Z]/.test(u)
      ? c && f
        ? (i[u] = (...p) => {
            const v = f(...p);
            return c(...p), v;
          })
        : c && (i[u] = c)
      : u === 'style'
        ? (i[u] = { ...c, ...f })
        : u === 'className' && (i[u] = [c, f].filter(Boolean).join(' '));
  }
  return { ...l, ...i };
}
function Km(l) {
  let o = Object.getOwnPropertyDescriptor(l.props, 'ref')?.get,
    i = o && 'isReactWarning' in o && o.isReactWarning;
  return i
    ? l.ref
    : ((o = Object.getOwnPropertyDescriptor(l, 'ref')?.get),
      (i = o && 'isReactWarning' in o && o.isReactWarning),
      i ? l.props.ref : l.props.ref || l.ref);
}
function Qm(l) {
  const o = l + 'CollectionProvider',
    [i, u] = gf(o),
    [c, f] = i(o, { collectionRef: { current: null }, itemMap: new Map() }),
    m = O => {
      const { scope: N, children: K } = O,
        F = At.useRef(null),
        Y = At.useRef(new Map()).current;
      return W.jsx(c, { scope: N, itemMap: Y, collectionRef: F, children: K });
    };
  m.displayName = o;
  const p = l + 'CollectionSlot',
    v = xl(p),
    h = At.forwardRef((O, N) => {
      const { scope: K, children: F } = O,
        Y = f(p, K),
        $ = xn(N, Y.collectionRef);
      return W.jsx(v, { ref: $, children: F });
    });
  h.displayName = p;
  const S = l + 'CollectionItemSlot',
    E = 'data-radix-collection-item',
    R = xl(S),
    z = At.forwardRef((O, N) => {
      const { scope: K, children: F, ...Y } = O,
        $ = At.useRef(null),
        Z = xn(N, $),
        q = f(S, K);
      return (
        At.useEffect(() => (q.itemMap.set($, { ref: $, ...Y }), () => void q.itemMap.delete($))),
        W.jsx(R, { [E]: '', ref: Z, children: F })
      );
    });
  z.displayName = S;
  function M(O) {
    const N = f(l + 'CollectionConsumer', O);
    return At.useCallback(() => {
      const F = N.collectionRef.current;
      if (!F) return [];
      const Y = Array.from(F.querySelectorAll(`[${E}]`));
      return Array.from(N.itemMap.values()).sort(
        (q, X) => Y.indexOf(q.ref.current) - Y.indexOf(X.ref.current),
      );
    }, [N.collectionRef, N.itemMap]);
  }
  return [{ Provider: m, Slot: h, ItemSlot: z }, M, u];
}
var Gm = [
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
  Nt = Gm.reduce((l, o) => {
    const i = xl(`Primitive.${o}`),
      u = T.forwardRef((c, f) => {
        const { asChild: m, ...p } = c,
          v = m ? i : o;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), W.jsx(v, { ...p, ref: f })
        );
      });
    return (u.displayName = `Primitive.${o}`), { ...l, [o]: u };
  }, {});
function vf(l, o) {
  l && Rl.flushSync(() => l.dispatchEvent(o));
}
function Sn(l) {
  const o = T.useRef(l);
  return (
    T.useEffect(() => {
      o.current = l;
    }),
    T.useMemo(
      () =>
        (...i) =>
          o.current?.(...i),
      [],
    )
  );
}
function Ym(l, o = globalThis?.document) {
  const i = Sn(l);
  T.useEffect(() => {
    const u = c => {
      c.key === 'Escape' && i(c);
    };
    return (
      o.addEventListener('keydown', u, { capture: !0 }),
      () => o.removeEventListener('keydown', u, { capture: !0 })
    );
  }, [i, o]);
}
var Xm = 'DismissableLayer',
  Sl = 'dismissableLayer.update',
  Jm = 'dismissableLayer.pointerDownOutside',
  qm = 'dismissableLayer.focusOutside',
  Vc,
  yf = T.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  wf = T.forwardRef((l, o) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: f,
        onInteractOutside: m,
        onDismiss: p,
        ...v
      } = l,
      h = T.useContext(yf),
      [S, E] = T.useState(null),
      R = S?.ownerDocument ?? globalThis?.document,
      [, z] = T.useState({}),
      M = xn(o, X => E(X)),
      O = Array.from(h.layers),
      [N] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      K = O.indexOf(N),
      F = S ? O.indexOf(S) : -1,
      Y = h.layersWithOutsidePointerEventsDisabled.size > 0,
      $ = F >= K,
      Z = eh(X => {
        const xe = X.target,
          ge = [...h.branches].some(fe => fe.contains(xe));
        !$ || ge || (c?.(X), m?.(X), X.defaultPrevented || p?.());
      }, R),
      q = th(X => {
        const xe = X.target;
        [...h.branches].some(fe => fe.contains(xe)) ||
          (f?.(X), m?.(X), X.defaultPrevented || p?.());
      }, R);
    return (
      Ym(X => {
        F === h.layers.size - 1 && (u?.(X), !X.defaultPrevented && p && (X.preventDefault(), p()));
      }, R),
      T.useEffect(() => {
        if (S)
          return (
            i &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Vc = R.body.style.pointerEvents), (R.body.style.pointerEvents = 'none')),
              h.layersWithOutsidePointerEventsDisabled.add(S)),
            h.layers.add(S),
            bc(),
            () => {
              i &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (R.body.style.pointerEvents = Vc);
            }
          );
      }, [S, R, i, h]),
      T.useEffect(
        () => () => {
          S && (h.layers.delete(S), h.layersWithOutsidePointerEventsDisabled.delete(S), bc());
        },
        [S, h],
      ),
      T.useEffect(() => {
        const X = () => z({});
        return document.addEventListener(Sl, X), () => document.removeEventListener(Sl, X);
      }, []),
      W.jsx(Nt.div, {
        ...v,
        ref: M,
        style: { pointerEvents: Y ? ($ ? 'auto' : 'none') : void 0, ...l.style },
        onFocusCapture: lt(l.onFocusCapture, q.onFocusCapture),
        onBlurCapture: lt(l.onBlurCapture, q.onBlurCapture),
        onPointerDownCapture: lt(l.onPointerDownCapture, Z.onPointerDownCapture),
      })
    );
  });
wf.displayName = Xm;
var Zm = 'DismissableLayerBranch',
  xf = T.forwardRef((l, o) => {
    const i = T.useContext(yf),
      u = T.useRef(null),
      c = xn(o, u);
    return (
      T.useEffect(() => {
        const f = u.current;
        if (f)
          return (
            i.branches.add(f),
            () => {
              i.branches.delete(f);
            }
          );
      }, [i.branches]),
      W.jsx(Nt.div, { ...l, ref: c })
    );
  });
xf.displayName = Zm;
function eh(l, o = globalThis?.document) {
  const i = Sn(l),
    u = T.useRef(!1),
    c = T.useRef(() => {});
  return (
    T.useEffect(() => {
      const f = p => {
          if (p.target && !u.current) {
            let v = function () {
              Sf(Jm, i, h, { discrete: !0 });
            };
            const h = { originalEvent: p };
            p.pointerType === 'touch'
              ? (o.removeEventListener('click', c.current),
                (c.current = v),
                o.addEventListener('click', c.current, { once: !0 }))
              : v();
          } else o.removeEventListener('click', c.current);
          u.current = !1;
        },
        m = window.setTimeout(() => {
          o.addEventListener('pointerdown', f);
        }, 0);
      return () => {
        window.clearTimeout(m),
          o.removeEventListener('pointerdown', f),
          o.removeEventListener('click', c.current);
      };
    }, [o, i]),
    { onPointerDownCapture: () => (u.current = !0) }
  );
}
function th(l, o = globalThis?.document) {
  const i = Sn(l),
    u = T.useRef(!1);
  return (
    T.useEffect(() => {
      const c = f => {
        f.target && !u.current && Sf(qm, i, { originalEvent: f }, { discrete: !1 });
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
function Sf(l, o, i, { discrete: u }) {
  const c = i.originalEvent.target,
    f = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: i });
  o && c.addEventListener(l, o, { once: !0 }), u ? vf(c, f) : c.dispatchEvent(f);
}
var nh = wf,
  rh = xf,
  br = globalThis?.document ? T.useLayoutEffect : () => {},
  oh = 'Portal',
  Ef = T.forwardRef((l, o) => {
    const { container: i, ...u } = l,
      [c, f] = T.useState(!1);
    br(() => f(!0), []);
    const m = i || (c && globalThis?.document?.body);
    return m ? Um.createPortal(W.jsx(Nt.div, { ...u, ref: o }), m) : null;
  });
Ef.displayName = oh;
function ih(l, o) {
  return T.useReducer((i, u) => o[i][u] ?? i, l);
}
var kf = l => {
  const { present: o, children: i } = l,
    u = sh(o),
    c = typeof i == 'function' ? i({ present: u.isPresent }) : T.Children.only(i),
    f = xn(u.ref, lh(c));
  return typeof i == 'function' || u.isPresent ? T.cloneElement(c, { ref: f }) : null;
};
kf.displayName = 'Presence';
function sh(l) {
  const [o, i] = T.useState(),
    u = T.useRef(null),
    c = T.useRef(l),
    f = T.useRef('none'),
    m = l ? 'mounted' : 'unmounted',
    [p, v] = ih(m, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    T.useEffect(() => {
      const h = ii(u.current);
      f.current = p === 'mounted' ? h : 'none';
    }, [p]),
    br(() => {
      const h = u.current,
        S = c.current;
      if (S !== l) {
        const R = f.current,
          z = ii(h);
        l
          ? v('MOUNT')
          : z === 'none' || h?.display === 'none'
            ? v('UNMOUNT')
            : v(S && R !== z ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (c.current = l);
      }
    }, [l, v]),
    br(() => {
      if (o) {
        let h;
        const S = o.ownerDocument.defaultView ?? window,
          E = z => {
            const O = ii(u.current).includes(z.animationName);
            if (z.target === o && O && (v('ANIMATION_END'), !c.current)) {
              const N = o.style.animationFillMode;
              (o.style.animationFillMode = 'forwards'),
                (h = S.setTimeout(() => {
                  o.style.animationFillMode === 'forwards' && (o.style.animationFillMode = N);
                }));
            }
          },
          R = z => {
            z.target === o && (f.current = ii(u.current));
          };
        return (
          o.addEventListener('animationstart', R),
          o.addEventListener('animationcancel', E),
          o.addEventListener('animationend', E),
          () => {
            S.clearTimeout(h),
              o.removeEventListener('animationstart', R),
              o.removeEventListener('animationcancel', E),
              o.removeEventListener('animationend', E);
          }
        );
      } else v('ANIMATION_END');
    }, [o, v]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(p),
      ref: T.useCallback(h => {
        (u.current = h ? getComputedStyle(h) : null), i(h);
      }, []),
    }
  );
}
function ii(l) {
  return l?.animationName || 'none';
}
function lh(l) {
  let o = Object.getOwnPropertyDescriptor(l.props, 'ref')?.get,
    i = o && 'isReactWarning' in o && o.isReactWarning;
  return i
    ? l.ref
    : ((o = Object.getOwnPropertyDescriptor(l, 'ref')?.get),
      (i = o && 'isReactWarning' in o && o.isReactWarning),
      i ? l.props.ref : l.props.ref || l.ref);
}
var ah = rm[' useInsertionEffect '.trim().toString()] || br;
function uh({ prop: l, defaultProp: o, onChange: i = () => {}, caller: u }) {
  const [c, f, m] = ch({ defaultProp: o, onChange: i }),
    p = l !== void 0,
    v = p ? l : c;
  {
    const S = T.useRef(l !== void 0);
    T.useEffect(() => {
      const E = S.current;
      E !== p &&
        console.warn(
          `${u} is changing from ${E ? 'controlled' : 'uncontrolled'} to ${p ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (S.current = p);
    }, [p, u]);
  }
  const h = T.useCallback(
    S => {
      if (p) {
        const E = fh(S) ? S(l) : S;
        E !== l && m.current?.(E);
      } else f(S);
    },
    [p, l, f, m],
  );
  return [v, h];
}
function ch({ defaultProp: l, onChange: o }) {
  const [i, u] = T.useState(l),
    c = T.useRef(i),
    f = T.useRef(o);
  return (
    ah(() => {
      f.current = o;
    }, [o]),
    T.useEffect(() => {
      c.current !== i && (f.current?.(i), (c.current = i));
    }, [i, c]),
    [i, u, f]
  );
}
function fh(l) {
  return typeof l == 'function';
}
var dh = Object.freeze({
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
  ph = 'VisuallyHidden',
  Ll = T.forwardRef((l, o) => W.jsx(Nt.span, { ...l, ref: o, style: { ...dh, ...l.style } }));
Ll.displayName = ph;
var Ol = 'ToastProvider',
  [_l, mh, hh] = Qm('Toast'),
  [Cf, Ug] = gf('Toast', [hh]),
  [gh, pi] = Cf(Ol),
  Pf = l => {
    const {
        __scopeToast: o,
        label: i = 'Notification',
        duration: u = 5e3,
        swipeDirection: c = 'right',
        swipeThreshold: f = 50,
        children: m,
      } = l,
      [p, v] = T.useState(null),
      [h, S] = T.useState(0),
      E = T.useRef(!1),
      R = T.useRef(!1);
    return (
      i.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Ol}\`. Expected non-empty \`string\`.`,
        ),
      W.jsx(_l.Provider, {
        scope: o,
        children: W.jsx(gh, {
          scope: o,
          label: i,
          duration: u,
          swipeDirection: c,
          swipeThreshold: f,
          toastCount: h,
          viewport: p,
          onViewportChange: v,
          onToastAdd: T.useCallback(() => S(z => z + 1), []),
          onToastRemove: T.useCallback(() => S(z => z - 1), []),
          isFocusedToastEscapeKeyDownRef: E,
          isClosePausedRef: R,
          children: m,
        }),
      })
    );
  };
Pf.displayName = Ol;
var Tf = 'ToastViewport',
  vh = ['F8'],
  El = 'toast.viewportPause',
  kl = 'toast.viewportResume',
  Nf = T.forwardRef((l, o) => {
    const { __scopeToast: i, hotkey: u = vh, label: c = 'Notifications ({hotkey})', ...f } = l,
      m = pi(Tf, i),
      p = mh(i),
      v = T.useRef(null),
      h = T.useRef(null),
      S = T.useRef(null),
      E = T.useRef(null),
      R = xn(o, E, m.onViewportChange),
      z = u.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
      M = m.toastCount > 0;
    T.useEffect(() => {
      const N = K => {
        u.length !== 0 && u.every(Y => K[Y] || K.code === Y) && E.current?.focus();
      };
      return (
        document.addEventListener('keydown', N), () => document.removeEventListener('keydown', N)
      );
    }, [u]),
      T.useEffect(() => {
        const N = v.current,
          K = E.current;
        if (M && N && K) {
          const F = () => {
              if (!m.isClosePausedRef.current) {
                const q = new CustomEvent(El);
                K.dispatchEvent(q), (m.isClosePausedRef.current = !0);
              }
            },
            Y = () => {
              if (m.isClosePausedRef.current) {
                const q = new CustomEvent(kl);
                K.dispatchEvent(q), (m.isClosePausedRef.current = !1);
              }
            },
            $ = q => {
              !N.contains(q.relatedTarget) && Y();
            },
            Z = () => {
              N.contains(document.activeElement) || Y();
            };
          return (
            N.addEventListener('focusin', F),
            N.addEventListener('focusout', $),
            N.addEventListener('pointermove', F),
            N.addEventListener('pointerleave', Z),
            window.addEventListener('blur', F),
            window.addEventListener('focus', Y),
            () => {
              N.removeEventListener('focusin', F),
                N.removeEventListener('focusout', $),
                N.removeEventListener('pointermove', F),
                N.removeEventListener('pointerleave', Z),
                window.removeEventListener('blur', F),
                window.removeEventListener('focus', Y);
            }
          );
        }
      }, [M, m.isClosePausedRef]);
    const O = T.useCallback(
      ({ tabbingDirection: N }) => {
        const F = p().map(Y => {
          const $ = Y.ref.current,
            Z = [$, ...Oh($)];
          return N === 'forwards' ? Z : Z.reverse();
        });
        return (N === 'forwards' ? F.reverse() : F).flat();
      },
      [p],
    );
    return (
      T.useEffect(() => {
        const N = E.current;
        if (N) {
          const K = F => {
            const Y = F.altKey || F.ctrlKey || F.metaKey;
            if (F.key === 'Tab' && !Y) {
              const Z = document.activeElement,
                q = F.shiftKey;
              if (F.target === N && q) {
                h.current?.focus();
                return;
              }
              const ge = O({ tabbingDirection: q ? 'backwards' : 'forwards' }),
                fe = ge.findIndex(Ie => Ie === Z);
              ml(ge.slice(fe + 1))
                ? F.preventDefault()
                : q
                  ? h.current?.focus()
                  : S.current?.focus();
            }
          };
          return N.addEventListener('keydown', K), () => N.removeEventListener('keydown', K);
        }
      }, [p, O]),
      W.jsxs(rh, {
        ref: v,
        role: 'region',
        'aria-label': c.replace('{hotkey}', z),
        tabIndex: -1,
        style: { pointerEvents: M ? void 0 : 'none' },
        children: [
          M &&
            W.jsx(Cl, {
              ref: h,
              onFocusFromOutsideViewport: () => {
                const N = O({ tabbingDirection: 'forwards' });
                ml(N);
              },
            }),
          W.jsx(_l.Slot, { scope: i, children: W.jsx(Nt.ol, { tabIndex: -1, ...f, ref: R }) }),
          M &&
            W.jsx(Cl, {
              ref: S,
              onFocusFromOutsideViewport: () => {
                const N = O({ tabbingDirection: 'backwards' });
                ml(N);
              },
            }),
        ],
      })
    );
  });
Nf.displayName = Tf;
var Rf = 'ToastFocusProxy',
  Cl = T.forwardRef((l, o) => {
    const { __scopeToast: i, onFocusFromOutsideViewport: u, ...c } = l,
      f = pi(Rf, i);
    return W.jsx(Ll, {
      'aria-hidden': !0,
      tabIndex: 0,
      ...c,
      ref: o,
      style: { position: 'fixed' },
      onFocus: m => {
        const p = m.relatedTarget;
        !f.viewport?.contains(p) && u();
      },
    });
  });
Cl.displayName = Rf;
var Wr = 'Toast',
  yh = 'toast.swipeStart',
  wh = 'toast.swipeMove',
  xh = 'toast.swipeCancel',
  Sh = 'toast.swipeEnd',
  Lf = T.forwardRef((l, o) => {
    const { forceMount: i, open: u, defaultOpen: c, onOpenChange: f, ...m } = l,
      [p, v] = uh({ prop: u, defaultProp: c ?? !0, onChange: f, caller: Wr });
    return W.jsx(kf, {
      present: i || p,
      children: W.jsx(Ch, {
        open: p,
        ...m,
        ref: o,
        onClose: () => v(!1),
        onPause: Sn(l.onPause),
        onResume: Sn(l.onResume),
        onSwipeStart: lt(l.onSwipeStart, h => {
          h.currentTarget.setAttribute('data-swipe', 'start');
        }),
        onSwipeMove: lt(l.onSwipeMove, h => {
          const { x: S, y: E } = h.detail.delta;
          h.currentTarget.setAttribute('data-swipe', 'move'),
            h.currentTarget.style.setProperty('--radix-toast-swipe-move-x', `${S}px`),
            h.currentTarget.style.setProperty('--radix-toast-swipe-move-y', `${E}px`);
        }),
        onSwipeCancel: lt(l.onSwipeCancel, h => {
          h.currentTarget.setAttribute('data-swipe', 'cancel'),
            h.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            h.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            h.currentTarget.style.removeProperty('--radix-toast-swipe-end-x'),
            h.currentTarget.style.removeProperty('--radix-toast-swipe-end-y');
        }),
        onSwipeEnd: lt(l.onSwipeEnd, h => {
          const { x: S, y: E } = h.detail.delta;
          h.currentTarget.setAttribute('data-swipe', 'end'),
            h.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            h.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            h.currentTarget.style.setProperty('--radix-toast-swipe-end-x', `${S}px`),
            h.currentTarget.style.setProperty('--radix-toast-swipe-end-y', `${E}px`),
            v(!1);
        }),
      }),
    });
  });
Lf.displayName = Wr;
var [Eh, kh] = Cf(Wr, { onClose() {} }),
  Ch = T.forwardRef((l, o) => {
    const {
        __scopeToast: i,
        type: u = 'foreground',
        duration: c,
        open: f,
        onClose: m,
        onEscapeKeyDown: p,
        onPause: v,
        onResume: h,
        onSwipeStart: S,
        onSwipeMove: E,
        onSwipeCancel: R,
        onSwipeEnd: z,
        ...M
      } = l,
      O = pi(Wr, i),
      [N, K] = T.useState(null),
      F = xn(o, Q => K(Q)),
      Y = T.useRef(null),
      $ = T.useRef(null),
      Z = c || O.duration,
      q = T.useRef(0),
      X = T.useRef(Z),
      xe = T.useRef(0),
      { onToastAdd: ge, onToastRemove: fe } = O,
      Ie = Sn(() => {
        N?.contains(document.activeElement) && O.viewport?.focus(), m();
      }),
      se = T.useCallback(
        Q => {
          !Q ||
            Q === 1 / 0 ||
            (window.clearTimeout(xe.current),
            (q.current = new Date().getTime()),
            (xe.current = window.setTimeout(Ie, Q)));
        },
        [Ie],
      );
    T.useEffect(() => {
      const Q = O.viewport;
      if (Q) {
        const Se = () => {
            se(X.current), h?.();
          },
          ue = () => {
            const le = new Date().getTime() - q.current;
            (X.current = X.current - le), window.clearTimeout(xe.current), v?.();
          };
        return (
          Q.addEventListener(El, ue),
          Q.addEventListener(kl, Se),
          () => {
            Q.removeEventListener(El, ue), Q.removeEventListener(kl, Se);
          }
        );
      }
    }, [O.viewport, Z, v, h, se]),
      T.useEffect(() => {
        f && !O.isClosePausedRef.current && se(Z);
      }, [f, Z, O.isClosePausedRef, se]),
      T.useEffect(() => (ge(), () => fe()), [ge, fe]);
    const ve = T.useMemo(() => (N ? jf(N) : null), [N]);
    return O.viewport
      ? W.jsxs(W.Fragment, {
          children: [
            ve &&
              W.jsx(Ph, {
                __scopeToast: i,
                role: 'status',
                'aria-live': u === 'foreground' ? 'assertive' : 'polite',
                'aria-atomic': !0,
                children: ve,
              }),
            W.jsx(Eh, {
              scope: i,
              onClose: Ie,
              children: Rl.createPortal(
                W.jsx(_l.ItemSlot, {
                  scope: i,
                  children: W.jsx(nh, {
                    asChild: !0,
                    onEscapeKeyDown: lt(p, () => {
                      O.isFocusedToastEscapeKeyDownRef.current || Ie(),
                        (O.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: W.jsx(Nt.li, {
                      role: 'status',
                      'aria-live': 'off',
                      'aria-atomic': !0,
                      tabIndex: 0,
                      'data-state': f ? 'open' : 'closed',
                      'data-swipe-direction': O.swipeDirection,
                      ...M,
                      ref: F,
                      style: { userSelect: 'none', touchAction: 'none', ...l.style },
                      onKeyDown: lt(l.onKeyDown, Q => {
                        Q.key === 'Escape' &&
                          (p?.(Q.nativeEvent),
                          Q.nativeEvent.defaultPrevented ||
                            ((O.isFocusedToastEscapeKeyDownRef.current = !0), Ie()));
                      }),
                      onPointerDown: lt(l.onPointerDown, Q => {
                        Q.button === 0 && (Y.current = { x: Q.clientX, y: Q.clientY });
                      }),
                      onPointerMove: lt(l.onPointerMove, Q => {
                        if (!Y.current) return;
                        const Se = Q.clientX - Y.current.x,
                          ue = Q.clientY - Y.current.y,
                          le = !!$.current,
                          A = ['left', 'right'].includes(O.swipeDirection),
                          B = ['left', 'up'].includes(O.swipeDirection) ? Math.min : Math.max,
                          U = A ? B(0, Se) : 0,
                          w = A ? 0 : B(0, ue),
                          L = Q.pointerType === 'touch' ? 10 : 2,
                          ne = { x: U, y: w },
                          ie = { originalEvent: Q, delta: ne };
                        le
                          ? (($.current = ne), si(wh, E, ie, { discrete: !1 }))
                          : Bc(ne, O.swipeDirection, L)
                            ? (($.current = ne),
                              si(yh, S, ie, { discrete: !1 }),
                              Q.target.setPointerCapture(Q.pointerId))
                            : (Math.abs(Se) > L || Math.abs(ue) > L) && (Y.current = null);
                      }),
                      onPointerUp: lt(l.onPointerUp, Q => {
                        const Se = $.current,
                          ue = Q.target;
                        if (
                          (ue.hasPointerCapture(Q.pointerId) &&
                            ue.releasePointerCapture(Q.pointerId),
                          ($.current = null),
                          (Y.current = null),
                          Se)
                        ) {
                          const le = Q.currentTarget,
                            A = { originalEvent: Q, delta: Se };
                          Bc(Se, O.swipeDirection, O.swipeThreshold)
                            ? si(Sh, z, A, { discrete: !0 })
                            : si(xh, R, A, { discrete: !0 }),
                            le.addEventListener('click', B => B.preventDefault(), { once: !0 });
                        }
                      }),
                    }),
                  }),
                }),
                O.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Ph = l => {
    const { __scopeToast: o, children: i, ...u } = l,
      c = pi(Wr, o),
      [f, m] = T.useState(!1),
      [p, v] = T.useState(!1);
    return (
      Rh(() => m(!0)),
      T.useEffect(() => {
        const h = window.setTimeout(() => v(!0), 1e3);
        return () => window.clearTimeout(h);
      }, []),
      p
        ? null
        : W.jsx(Ef, {
            asChild: !0,
            children: W.jsx(Ll, {
              ...u,
              children: f && W.jsxs(W.Fragment, { children: [c.label, ' ', i] }),
            }),
          })
    );
  },
  Th = 'ToastTitle',
  Of = T.forwardRef((l, o) => {
    const { __scopeToast: i, ...u } = l;
    return W.jsx(Nt.div, { ...u, ref: o });
  });
Of.displayName = Th;
var Nh = 'ToastDescription',
  _f = T.forwardRef((l, o) => {
    const { __scopeToast: i, ...u } = l;
    return W.jsx(Nt.div, { ...u, ref: o });
  });
_f.displayName = Nh;
var If = 'ToastAction',
  Df = T.forwardRef((l, o) => {
    const { altText: i, ...u } = l;
    return i.trim()
      ? W.jsx(Mf, { altText: i, asChild: !0, children: W.jsx(Il, { ...u, ref: o }) })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${If}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Df.displayName = If;
var zf = 'ToastClose',
  Il = T.forwardRef((l, o) => {
    const { __scopeToast: i, ...u } = l,
      c = kh(zf, i);
    return W.jsx(Mf, {
      asChild: !0,
      children: W.jsx(Nt.button, {
        type: 'button',
        ...u,
        ref: o,
        onClick: lt(l.onClick, c.onClose),
      }),
    });
  });
Il.displayName = zf;
var Mf = T.forwardRef((l, o) => {
  const { __scopeToast: i, altText: u, ...c } = l;
  return W.jsx(Nt.div, {
    'data-radix-toast-announce-exclude': '',
    'data-radix-toast-announce-alt': u || void 0,
    ...c,
    ref: o,
  });
});
function jf(l) {
  const o = [];
  return (
    Array.from(l.childNodes).forEach(u => {
      if ((u.nodeType === u.TEXT_NODE && u.textContent && o.push(u.textContent), Lh(u))) {
        const c = u.ariaHidden || u.hidden || u.style.display === 'none',
          f = u.dataset.radixToastAnnounceExclude === '';
        if (!c)
          if (f) {
            const m = u.dataset.radixToastAnnounceAlt;
            m && o.push(m);
          } else o.push(...jf(u));
      }
    }),
    o
  );
}
function si(l, o, i, { discrete: u }) {
  const c = i.originalEvent.currentTarget,
    f = new CustomEvent(l, { bubbles: !0, cancelable: !0, detail: i });
  o && c.addEventListener(l, o, { once: !0 }), u ? vf(c, f) : c.dispatchEvent(f);
}
var Bc = (l, o, i = 0) => {
  const u = Math.abs(l.x),
    c = Math.abs(l.y),
    f = u > c;
  return o === 'left' || o === 'right' ? f && u > i : !f && c > i;
};
function Rh(l = () => {}) {
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
function Lh(l) {
  return l.nodeType === l.ELEMENT_NODE;
}
function Oh(l) {
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
function ml(l) {
  const o = document.activeElement;
  return l.some(i => (i === o ? !0 : (i.focus(), document.activeElement !== o)));
}
var _h = Pf,
  Af = Nf,
  Ff = Lf,
  $f = Of,
  Uf = _f,
  Vf = Df,
  bf = Il;
const Hc = l => (typeof l == 'boolean' ? ''.concat(l) : l === 0 ? '0' : l),
  Wc = function () {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    return o
      .flat(1 / 0)
      .filter(Boolean)
      .join(' ');
  },
  Ih = (l, o) => i => {
    var u;
    if (o?.variants == null) return Wc(l, i?.class, i?.className);
    const { variants: c, defaultVariants: f } = o,
      m = Object.keys(c).map(h => {
        const S = i?.[h],
          E = f?.[h];
        if (S === null) return null;
        const R = Hc(S) || Hc(E);
        return c[h][R];
      }),
      p =
        i &&
        Object.entries(i).reduce((h, S) => {
          let [E, R] = S;
          return R === void 0 || (h[E] = R), h;
        }, {}),
      v =
        o == null || (u = o.compoundVariants) === null || u === void 0
          ? void 0
          : u.reduce((h, S) => {
              let { class: E, className: R, ...z } = S;
              return Object.entries(z).every(M => {
                let [O, N] = M;
                return Array.isArray(N) ? N.includes({ ...f, ...p }[O]) : { ...f, ...p }[O] === N;
              })
                ? [...h, E, R]
                : h;
            }, []);
    return Wc(l, m, v, i?.class, i?.className);
  };
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
function Dh() {
  for (var l, o, i = 0, u = '', c = arguments.length; i < c; i++)
    (l = arguments[i]) && (o = Bf(l)) && (u && (u += ' '), (u += o));
  return u;
}
const Dl = '-',
  zh = l => {
    const o = jh(l),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: u } = l;
    return {
      getClassGroupId: m => {
        const p = m.split(Dl);
        return p[0] === '' && p.length !== 1 && p.shift(), Hf(p, o) || Mh(m);
      },
      getConflictingClassGroupIds: (m, p) => {
        const v = i[m] || [];
        return p && u[m] ? [...v, ...u[m]] : v;
      },
    };
  },
  Hf = (l, o) => {
    if (l.length === 0) return o.classGroupId;
    const i = l[0],
      u = o.nextPart.get(i),
      c = u ? Hf(l.slice(1), u) : void 0;
    if (c) return c;
    if (o.validators.length === 0) return;
    const f = l.join(Dl);
    return o.validators.find(({ validator: m }) => m(f))?.classGroupId;
  },
  Kc = /^\[(.+)\]$/,
  Mh = l => {
    if (Kc.test(l)) {
      const o = Kc.exec(l)[1],
        i = o?.substring(0, o.indexOf(':'));
      if (i) return 'arbitrary..' + i;
    }
  },
  jh = l => {
    const { theme: o, prefix: i } = l,
      u = { nextPart: new Map(), validators: [] };
    return (
      Fh(Object.entries(l.classGroups), i).forEach(([f, m]) => {
        Pl(m, u, f, o);
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
        if (Ah(c)) {
          Pl(c(u), o, i, u);
          return;
        }
        o.validators.push({ validator: c, classGroupId: i });
        return;
      }
      Object.entries(c).forEach(([f, m]) => {
        Pl(m, Qc(o, f), i, u);
      });
    });
  },
  Qc = (l, o) => {
    let i = l;
    return (
      o.split(Dl).forEach(u => {
        i.nextPart.has(u) || i.nextPart.set(u, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(u));
      }),
      i
    );
  },
  Ah = l => l.isThemeGetter,
  Fh = (l, o) =>
    o
      ? l.map(([i, u]) => {
          const c = u.map(f =>
            typeof f == 'string'
              ? o + f
              : typeof f == 'object'
                ? Object.fromEntries(Object.entries(f).map(([m, p]) => [o + m, p]))
                : f,
          );
          return [i, c];
        })
      : l,
  $h = l => {
    if (l < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      i = new Map(),
      u = new Map();
    const c = (f, m) => {
      i.set(f, m), o++, o > l && ((o = 0), (u = i), (i = new Map()));
    };
    return {
      get(f) {
        let m = i.get(f);
        if (m !== void 0) return m;
        if ((m = u.get(f)) !== void 0) return c(f, m), m;
      },
      set(f, m) {
        i.has(f) ? i.set(f, m) : c(f, m);
      },
    };
  },
  Wf = '!',
  Uh = l => {
    const { separator: o, experimentalParseClassName: i } = l,
      u = o.length === 1,
      c = o[0],
      f = o.length,
      m = p => {
        const v = [];
        let h = 0,
          S = 0,
          E;
        for (let N = 0; N < p.length; N++) {
          let K = p[N];
          if (h === 0) {
            if (K === c && (u || p.slice(N, N + f) === o)) {
              v.push(p.slice(S, N)), (S = N + f);
              continue;
            }
            if (K === '/') {
              E = N;
              continue;
            }
          }
          K === '[' ? h++ : K === ']' && h--;
        }
        const R = v.length === 0 ? p : p.substring(S),
          z = R.startsWith(Wf),
          M = z ? R.substring(1) : R,
          O = E && E > S ? E - S : void 0;
        return {
          modifiers: v,
          hasImportantModifier: z,
          baseClassName: M,
          maybePostfixModifierPosition: O,
        };
      };
    return i ? p => i({ className: p, parseClassName: m }) : m;
  },
  Vh = l => {
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
  bh = l => ({ cache: $h(l.cacheSize), parseClassName: Uh(l), ...zh(l) }),
  Bh = /\s+/,
  Hh = (l, o) => {
    const { parseClassName: i, getClassGroupId: u, getConflictingClassGroupIds: c } = o,
      f = [],
      m = l.trim().split(Bh);
    let p = '';
    for (let v = m.length - 1; v >= 0; v -= 1) {
      const h = m[v],
        {
          modifiers: S,
          hasImportantModifier: E,
          baseClassName: R,
          maybePostfixModifierPosition: z,
        } = i(h);
      let M = !!z,
        O = u(M ? R.substring(0, z) : R);
      if (!O) {
        if (!M) {
          p = h + (p.length > 0 ? ' ' + p : p);
          continue;
        }
        if (((O = u(R)), !O)) {
          p = h + (p.length > 0 ? ' ' + p : p);
          continue;
        }
        M = !1;
      }
      const N = Vh(S).join(':'),
        K = E ? N + Wf : N,
        F = K + O;
      if (f.includes(F)) continue;
      f.push(F);
      const Y = c(O, M);
      for (let $ = 0; $ < Y.length; ++$) {
        const Z = Y[$];
        f.push(K + Z);
      }
      p = h + (p.length > 0 ? ' ' + p : p);
    }
    return p;
  };
function Wh() {
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
function Kh(l, ...o) {
  let i,
    u,
    c,
    f = m;
  function m(v) {
    const h = o.reduce((S, E) => E(S), l());
    return (i = bh(h)), (u = i.cache.get), (c = i.cache.set), (f = p), p(v);
  }
  function p(v) {
    const h = u(v);
    if (h) return h;
    const S = Hh(v, i);
    return c(v, S), S;
  }
  return function () {
    return f(Wh.apply(null, arguments));
  };
}
const Te = l => {
    const o = i => i[l] || [];
    return (o.isThemeGetter = !0), o;
  },
  Qf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Qh = /^\d+\/\d+$/,
  Gh = new Set(['px', 'full', 'screen']),
  Yh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Xh =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Jh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  qh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Zh =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  jt = l => Gn(l) || Gh.has(l) || Qh.test(l),
  rn = l => Yn(l, 'length', lg),
  Gn = l => !!l && !Number.isNaN(Number(l)),
  hl = l => Yn(l, 'number', Gn),
  Ar = l => !!l && Number.isInteger(Number(l)),
  eg = l => l.endsWith('%') && Gn(l.slice(0, -1)),
  ae = l => Qf.test(l),
  on = l => Yh.test(l),
  tg = new Set(['length', 'size', 'percentage']),
  ng = l => Yn(l, tg, Gf),
  rg = l => Yn(l, 'position', Gf),
  og = new Set(['image', 'url']),
  ig = l => Yn(l, og, ug),
  sg = l => Yn(l, '', ag),
  Fr = () => !0,
  Yn = (l, o, i) => {
    const u = Qf.exec(l);
    return u ? (u[1] ? (typeof o == 'string' ? u[1] === o : o.has(u[1])) : i(u[2])) : !1;
  },
  lg = l => Xh.test(l) && !Jh.test(l),
  Gf = () => !1,
  ag = l => qh.test(l),
  ug = l => Zh.test(l),
  cg = () => {
    const l = Te('colors'),
      o = Te('spacing'),
      i = Te('blur'),
      u = Te('brightness'),
      c = Te('borderColor'),
      f = Te('borderRadius'),
      m = Te('borderSpacing'),
      p = Te('borderWidth'),
      v = Te('contrast'),
      h = Te('grayscale'),
      S = Te('hueRotate'),
      E = Te('invert'),
      R = Te('gap'),
      z = Te('gradientColorStops'),
      M = Te('gradientColorStopPositions'),
      O = Te('inset'),
      N = Te('margin'),
      K = Te('opacity'),
      F = Te('padding'),
      Y = Te('saturate'),
      $ = Te('scale'),
      Z = Te('sepia'),
      q = Te('skew'),
      X = Te('space'),
      xe = Te('translate'),
      ge = () => ['auto', 'contain', 'none'],
      fe = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      Ie = () => ['auto', ae, o],
      se = () => [ae, o],
      ve = () => ['', jt, rn],
      Q = () => ['auto', Gn, ae],
      Se = () => [
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
      ue = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      le = () => [
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
      B = () => ['', '0', ae],
      U = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      w = () => [Gn, ae];
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [Fr],
        spacing: [jt, rn],
        blur: ['none', '', on, ae],
        brightness: w(),
        borderColor: [l],
        borderRadius: ['none', '', 'full', on, ae],
        borderSpacing: se(),
        borderWidth: ve(),
        contrast: w(),
        grayscale: B(),
        hueRotate: w(),
        invert: B(),
        gap: se(),
        gradientColorStops: [l],
        gradientColorStopPositions: [eg, rn],
        inset: Ie(),
        margin: Ie(),
        opacity: w(),
        padding: se(),
        saturate: w(),
        scale: w(),
        sepia: B(),
        skew: w(),
        space: se(),
        translate: se(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', ae] }],
        container: ['container'],
        columns: [{ columns: [on] }],
        'break-after': [{ 'break-after': U() }],
        'break-before': [{ 'break-before': U() }],
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
        'object-position': [{ object: [...Se(), ae] }],
        overflow: [{ overflow: fe() }],
        'overflow-x': [{ 'overflow-x': fe() }],
        'overflow-y': [{ 'overflow-y': fe() }],
        overscroll: [{ overscroll: ge() }],
        'overscroll-x': [{ 'overscroll-x': ge() }],
        'overscroll-y': [{ 'overscroll-y': ge() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [O] }],
        'inset-x': [{ 'inset-x': [O] }],
        'inset-y': [{ 'inset-y': [O] }],
        start: [{ start: [O] }],
        end: [{ end: [O] }],
        top: [{ top: [O] }],
        right: [{ right: [O] }],
        bottom: [{ bottom: [O] }],
        left: [{ left: [O] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', Ar, ae] }],
        basis: [{ basis: Ie() }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', ae] }],
        grow: [{ grow: B() }],
        shrink: [{ shrink: B() }],
        order: [{ order: ['first', 'last', 'none', Ar, ae] }],
        'grid-cols': [{ 'grid-cols': [Fr] }],
        'col-start-end': [{ col: ['auto', { span: ['full', Ar, ae] }, ae] }],
        'col-start': [{ 'col-start': Q() }],
        'col-end': [{ 'col-end': Q() }],
        'grid-rows': [{ 'grid-rows': [Fr] }],
        'row-start-end': [{ row: ['auto', { span: [Ar, ae] }, ae] }],
        'row-start': [{ 'row-start': Q() }],
        'row-end': [{ 'row-end': Q() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', ae] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', ae] }],
        gap: [{ gap: [R] }],
        'gap-x': [{ 'gap-x': [R] }],
        'gap-y': [{ 'gap-y': [R] }],
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
        'space-x': [{ 'space-x': [X] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [X] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', ae, o] }],
        'min-w': [{ 'min-w': [ae, o, 'min', 'max', 'fit'] }],
        'max-w': [
          { 'max-w': [ae, o, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [on] }, on] },
        ],
        h: [{ h: [ae, o, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [{ 'min-h': [ae, o, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'max-h': [{ 'max-h': [ae, o, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        size: [{ size: [ae, o, 'auto', 'min', 'max', 'fit'] }],
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
              hl,
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
        tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', ae] }],
        'line-clamp': [{ 'line-clamp': ['none', Gn, hl] }],
        leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', jt, ae] }],
        'list-image': [{ 'list-image': ['none', ae] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', ae] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [l] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [K] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'text-color': [{ text: [l] }],
        'text-opacity': [{ 'text-opacity': [K] }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...ue(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: ['auto', 'from-font', jt, rn] }],
        'underline-offset': [{ 'underline-offset': ['auto', jt, ae] }],
        'text-decoration-color': [{ decoration: [l] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: se() }],
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
              ae,
            ],
          },
        ],
        whitespace: [
          { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', ae] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [K] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...Se(), rg] }],
        'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', ng] }],
        'bg-image': [
          { bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, ig] },
        ],
        'bg-color': [{ bg: [l] }],
        'gradient-from-pos': [{ from: [M] }],
        'gradient-via-pos': [{ via: [M] }],
        'gradient-to-pos': [{ to: [M] }],
        'gradient-from': [{ from: [z] }],
        'gradient-via': [{ via: [z] }],
        'gradient-to': [{ to: [z] }],
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
        'border-w': [{ border: [p] }],
        'border-w-x': [{ 'border-x': [p] }],
        'border-w-y': [{ 'border-y': [p] }],
        'border-w-s': [{ 'border-s': [p] }],
        'border-w-e': [{ 'border-e': [p] }],
        'border-w-t': [{ 'border-t': [p] }],
        'border-w-r': [{ 'border-r': [p] }],
        'border-w-b': [{ 'border-b': [p] }],
        'border-w-l': [{ 'border-l': [p] }],
        'border-opacity': [{ 'border-opacity': [K] }],
        'border-style': [{ border: [...ue(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [p] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [p] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [K] }],
        'divide-style': [{ divide: ue() }],
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
        'outline-style': [{ outline: ['', ...ue()] }],
        'outline-offset': [{ 'outline-offset': [jt, ae] }],
        'outline-w': [{ outline: [jt, rn] }],
        'outline-color': [{ outline: [l] }],
        'ring-w': [{ ring: ve() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [l] }],
        'ring-opacity': [{ 'ring-opacity': [K] }],
        'ring-offset-w': [{ 'ring-offset': [jt, rn] }],
        'ring-offset-color': [{ 'ring-offset': [l] }],
        shadow: [{ shadow: ['', 'inner', 'none', on, sg] }],
        'shadow-color': [{ shadow: [Fr] }],
        opacity: [{ opacity: [K] }],
        'mix-blend': [{ 'mix-blend': [...le(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': le() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [i] }],
        brightness: [{ brightness: [u] }],
        contrast: [{ contrast: [v] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', on, ae] }],
        grayscale: [{ grayscale: [h] }],
        'hue-rotate': [{ 'hue-rotate': [S] }],
        invert: [{ invert: [E] }],
        saturate: [{ saturate: [Y] }],
        sepia: [{ sepia: [Z] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [i] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [u] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [v] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [h] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [S] }],
        'backdrop-invert': [{ 'backdrop-invert': [E] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [K] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [Y] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [Z] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [m] }],
        'border-spacing-x': [{ 'border-spacing-x': [m] }],
        'border-spacing-y': [{ 'border-spacing-y': [m] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          { transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', ae] },
        ],
        duration: [{ duration: w() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', ae] }],
        delay: [{ delay: w() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', ae] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [$] }],
        'scale-x': [{ 'scale-x': [$] }],
        'scale-y': [{ 'scale-y': [$] }],
        rotate: [{ rotate: [Ar, ae] }],
        'translate-x': [{ 'translate-x': [xe] }],
        'translate-y': [{ 'translate-y': [xe] }],
        'skew-x': [{ 'skew-x': [q] }],
        'skew-y': [{ 'skew-y': [q] }],
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
              ae,
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
              ae,
            ],
          },
        ],
        'caret-color': [{ caret: [l] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': se() }],
        'scroll-mx': [{ 'scroll-mx': se() }],
        'scroll-my': [{ 'scroll-my': se() }],
        'scroll-ms': [{ 'scroll-ms': se() }],
        'scroll-me': [{ 'scroll-me': se() }],
        'scroll-mt': [{ 'scroll-mt': se() }],
        'scroll-mr': [{ 'scroll-mr': se() }],
        'scroll-mb': [{ 'scroll-mb': se() }],
        'scroll-ml': [{ 'scroll-ml': se() }],
        'scroll-p': [{ 'scroll-p': se() }],
        'scroll-px': [{ 'scroll-px': se() }],
        'scroll-py': [{ 'scroll-py': se() }],
        'scroll-ps': [{ 'scroll-ps': se() }],
        'scroll-pe': [{ 'scroll-pe': se() }],
        'scroll-pt': [{ 'scroll-pt': se() }],
        'scroll-pr': [{ 'scroll-pr': se() }],
        'scroll-pb': [{ 'scroll-pb': se() }],
        'scroll-pl': [{ 'scroll-pl': se() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', ae] }],
        fill: [{ fill: [l, 'none'] }],
        'stroke-w': [{ stroke: [jt, rn, hl] }],
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
  fg = Kh(cg);
function Xn(...l) {
  return fg(Dh(l));
}
const dg = _h,
  Yf = T.forwardRef(({ className: l, ...o }, i) =>
    W.jsx(Af, {
      ref: i,
      className: Xn(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        l,
      ),
      ...o,
    }),
  );
Yf.displayName = Af.displayName;
const pg = Ih(
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
  Xf = T.forwardRef(({ className: l, variant: o, ...i }, u) =>
    W.jsx(Ff, { ref: u, className: Xn(pg({ variant: o }), l), ...i }),
  );
Xf.displayName = Ff.displayName;
const mg = T.forwardRef(({ className: l, ...o }, i) =>
  W.jsx(Vf, {
    ref: i,
    className: Xn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      l,
    ),
    ...o,
  }),
);
mg.displayName = Vf.displayName;
const Jf = T.forwardRef(({ className: l, ...o }, i) =>
  W.jsx(bf, {
    ref: i,
    className: Xn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      l,
    ),
    'toast-close': '',
    ...o,
    children: W.jsx(pm, { className: 'h-4 w-4' }),
  }),
);
Jf.displayName = bf.displayName;
const qf = T.forwardRef(({ className: l, ...o }, i) =>
  W.jsx($f, { ref: i, className: Xn('text-sm font-semibold', l), ...o }),
);
qf.displayName = $f.displayName;
const Zf = T.forwardRef(({ className: l, ...o }, i) =>
  W.jsx(Uf, { ref: i, className: Xn('text-sm opacity-90', l), ...o }),
);
Zf.displayName = Uf.displayName;
function hg() {
  const { toasts: l } = $m();
  return W.jsxs(dg, {
    children: [
      l.map(function ({ id: o, title: i, description: u, action: c, ...f }) {
        return W.jsxs(
          Xf,
          {
            ...f,
            children: [
              W.jsxs('div', {
                className: 'grid gap-1',
                children: [i && W.jsx(qf, { children: i }), u && W.jsx(Zf, { children: u })],
              }),
              c,
              W.jsx(Jf, {}),
            ],
          },
          o,
        );
      }),
      W.jsx(Yf, {}),
    ],
  });
}
const oe = l => typeof l == 'string',
  $r = () => {
    let l, o;
    const i = new Promise((u, c) => {
      (l = u), (o = c);
    });
    return (i.resolve = l), (i.reject = o), i;
  },
  Gc = l => (l == null ? '' : '' + l),
  gg = (l, o, i) => {
    l.forEach(u => {
      o[u] && (i[u] = o[u]);
    });
  },
  vg = /###/g,
  Yc = l => (l && l.indexOf('###') > -1 ? l.replace(vg, '.') : l),
  Xc = l => !l || oe(l),
  Vr = (l, o, i) => {
    const u = oe(o) ? o.split('.') : o;
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
      m = o.slice(0, o.length - 1),
      p = Vr(l, m, Object);
    for (; p.obj === void 0 && m.length; )
      (f = `${m[m.length - 1]}.${f}`),
        (m = m.slice(0, m.length - 1)),
        (p = Vr(l, m, Object)),
        p?.obj && typeof p.obj[`${p.k}.${f}`] < 'u' && (p.obj = void 0);
    p.obj[`${p.k}.${f}`] = i;
  },
  yg = (l, o, i, u) => {
    const { obj: c, k: f } = Vr(l, o, Object);
    (c[f] = c[f] || []), c[f].push(i);
  },
  ci = (l, o) => {
    const { obj: i, k: u } = Vr(l, o);
    if (i && Object.prototype.hasOwnProperty.call(i, u)) return i[u];
  },
  wg = (l, o, i) => {
    const u = ci(l, i);
    return u !== void 0 ? u : ci(o, i);
  },
  ed = (l, o, i) => {
    for (const u in o)
      u !== '__proto__' &&
        u !== 'constructor' &&
        (u in l
          ? oe(l[u]) || l[u] instanceof String || oe(o[u]) || o[u] instanceof String
            ? i && (l[u] = o[u])
            : ed(l[u], o[u], i)
          : (l[u] = o[u]));
    return l;
  },
  Qn = l => l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var xg = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const Sg = l => (oe(l) ? l.replace(/[&<>"'\/]/g, o => xg[o]) : l);
class Eg {
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
const kg = [' ', ',', '?', '!', ';'],
  Cg = new Eg(20),
  Pg = (l, o, i) => {
    (o = o || ''), (i = i || '');
    const u = kg.filter(m => o.indexOf(m) < 0 && i.indexOf(m) < 0);
    if (u.length === 0) return !0;
    const c = Cg.getRegExp(`(${u.map(m => (m === '?' ? '\\?' : m)).join('|')})`);
    let f = !c.test(l);
    if (!f) {
      const m = l.indexOf(i);
      m > 0 && !c.test(l.substring(0, m)) && (f = !0);
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
      let m,
        p = '';
      for (let v = f; v < u.length; ++v)
        if ((v !== f && (p += i), (p += u[v]), (m = c[p]), m !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof m) > -1 && v < u.length - 1) continue;
          f += v - f + 1;
          break;
        }
      c = m;
    }
    return c;
  },
  Br = l => l?.replace('_', '-'),
  Tg = {
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
      console?.[l]?.apply?.(console, o);
    },
  };
class fi {
  constructor(o, i = {}) {
    this.init(o, i);
  }
  init(o, i = {}) {
    (this.prefix = i.prefix || 'i18next:'),
      (this.logger = o || Tg),
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
      : (oe(o[0]) && (o[0] = `${u}${this.prefix} ${o[0]}`), this.logger[i](o));
  }
  create(o) {
    return new fi(this.logger, { prefix: `${this.prefix}:${o}:`, ...this.options });
  }
  clone(o) {
    return (o = o || this.options), (o.prefix = o.prefix || this.prefix), new fi(this.logger, o);
  }
}
var Tt = new fi();
class mi {
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
        for (let m = 0; m < f; m++) c(...i);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach(([c, f]) => {
          for (let m = 0; m < f; m++) c.apply(c, [o, ...i]);
        });
  }
}
class qc extends mi {
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
    const f = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
      m =
        c.ignoreJSONStructure !== void 0 ? c.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let p;
    o.indexOf('.') > -1
      ? (p = o.split('.'))
      : ((p = [o, i]),
        u && (Array.isArray(u) ? p.push(...u) : oe(u) && f ? p.push(...u.split(f)) : p.push(u)));
    const v = ci(this.data, p);
    return (
      !v && !i && !u && o.indexOf('.') > -1 && ((o = p[0]), (i = p[1]), (u = p.slice(2).join('.'))),
      v || !m || !oe(u) ? v : Tl(this.data?.[o]?.[i], u, f)
    );
  }
  addResource(o, i, u, c, f = { silent: !1 }) {
    const m = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let p = [o, i];
    u && (p = p.concat(m ? u.split(m) : u)),
      o.indexOf('.') > -1 && ((p = o.split('.')), (c = i), (i = p[1])),
      this.addNamespaces(i),
      Jc(this.data, p, c),
      f.silent || this.emit('added', o, i, u, c);
  }
  addResources(o, i, u, c = { silent: !1 }) {
    for (const f in u)
      (oe(u[f]) || Array.isArray(u[f])) && this.addResource(o, i, f, u[f], { silent: !0 });
    c.silent || this.emit('added', o, i, u);
  }
  addResourceBundle(o, i, u, c, f, m = { silent: !1, skipCopy: !1 }) {
    let p = [o, i];
    o.indexOf('.') > -1 && ((p = o.split('.')), (c = u), (u = i), (i = p[1])),
      this.addNamespaces(i);
    let v = ci(this.data, p) || {};
    m.skipCopy || (u = JSON.parse(JSON.stringify(u))),
      c ? ed(v, u, f) : (v = { ...v, ...u }),
      Jc(this.data, p, v),
      m.silent || this.emit('added', o, i, u);
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
        o = this.processors[f]?.process(o, i, u, c) ?? o;
      }),
      o
    );
  },
};
const Zc = {},
  ef = l => !oe(l) && typeof l != 'boolean' && typeof l != 'number';
class di extends mi {
  constructor(o, i = {}) {
    super(),
      gg(
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
    return o == null ? !1 : this.resolve(o, u)?.res !== void 0;
  }
  extractFromKey(o, i) {
    let u = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ':');
    const c = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let f = i.ns || this.options.defaultNS || [];
    const m = u && o.indexOf(u) > -1,
      p =
        !this.options.userDefinedKeySeparator &&
        !i.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !i.nsSeparator &&
        !Pg(o, u, c);
    if (m && !p) {
      const v = o.match(this.interpolator.nestingRegexp);
      if (v && v.length > 0) return { key: o, namespaces: oe(f) ? [f] : f };
      const h = o.split(u);
      (u !== c || (u === c && this.options.ns.indexOf(h[0]) > -1)) && (f = h.shift()),
        (o = h.join(c));
    }
    return { key: o, namespaces: oe(f) ? [f] : f };
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
      m = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
      { key: p, namespaces: v } = this.extractFromKey(o[o.length - 1], c),
      h = v[v.length - 1];
    let S = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
    S === void 0 && (S = ':');
    const E = c.lng || this.language,
      R = c.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (E?.toLowerCase() === 'cimode')
      return R
        ? f
          ? {
              res: `${h}${S}${p}`,
              usedKey: p,
              exactUsedKey: p,
              usedLng: E,
              usedNS: h,
              usedParams: this.getUsedParamsDetails(c),
            }
          : `${h}${S}${p}`
        : f
          ? {
              res: p,
              usedKey: p,
              exactUsedKey: p,
              usedLng: E,
              usedNS: h,
              usedParams: this.getUsedParamsDetails(c),
            }
          : p;
    const z = this.resolve(o, c);
    let M = z?.res;
    const O = z?.usedKey || p,
      N = z?.exactUsedKey || p,
      K = ['[object Number]', '[object Function]', '[object RegExp]'],
      F = c.joinArrays !== void 0 ? c.joinArrays : this.options.joinArrays,
      Y = !this.i18nFormat || this.i18nFormat.handleAsObject,
      $ = c.count !== void 0 && !oe(c.count),
      Z = di.hasDefaultValue(c),
      q = $ ? this.pluralResolver.getSuffix(E, c.count, c) : '',
      X = c.ordinal && $ ? this.pluralResolver.getSuffix(E, c.count, { ordinal: !1 }) : '',
      xe = $ && !c.ordinal && c.count === 0,
      ge =
        (xe && c[`defaultValue${this.options.pluralSeparator}zero`]) ||
        c[`defaultValue${q}`] ||
        c[`defaultValue${X}`] ||
        c.defaultValue;
    let fe = M;
    Y && !M && Z && (fe = ge);
    const Ie = ef(fe),
      se = Object.prototype.toString.apply(fe);
    if (Y && fe && Ie && K.indexOf(se) < 0 && !(oe(F) && Array.isArray(fe))) {
      if (!c.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const ve = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(O, fe, { ...c, ns: v })
          : `key '${p} (${this.language})' returned an object instead of string.`;
        return f ? ((z.res = ve), (z.usedParams = this.getUsedParamsDetails(c)), z) : ve;
      }
      if (m) {
        const ve = Array.isArray(fe),
          Q = ve ? [] : {},
          Se = ve ? N : O;
        for (const ue in fe)
          if (Object.prototype.hasOwnProperty.call(fe, ue)) {
            const le = `${Se}${m}${ue}`;
            Z && !M
              ? (Q[ue] = this.translate(le, {
                  ...c,
                  defaultValue: ef(ge) ? ge[ue] : void 0,
                  joinArrays: !1,
                  ns: v,
                }))
              : (Q[ue] = this.translate(le, { ...c, joinArrays: !1, ns: v })),
              Q[ue] === le && (Q[ue] = fe[ue]);
          }
        M = Q;
      }
    } else if (Y && oe(F) && Array.isArray(M))
      (M = M.join(F)), M && (M = this.extendTranslation(M, o, c, u));
    else {
      let ve = !1,
        Q = !1;
      !this.isValidLookup(M) && Z && ((ve = !0), (M = ge)),
        this.isValidLookup(M) || ((Q = !0), (M = p));
      const ue =
          (c.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Q
            ? void 0
            : M,
        le = Z && ge !== M && this.options.updateMissing;
      if (Q || ve || le) {
        if ((this.logger.log(le ? 'updateKey' : 'missingKey', E, h, p, le ? ge : M), m)) {
          const w = this.resolve(p, { ...c, keySeparator: !1 });
          w &&
            w.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let A = [];
        const B = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          c.lng || this.language,
        );
        if (this.options.saveMissingTo === 'fallback' && B && B[0])
          for (let w = 0; w < B.length; w++) A.push(B[w]);
        else
          this.options.saveMissingTo === 'all'
            ? (A = this.languageUtils.toResolveHierarchy(c.lng || this.language))
            : A.push(c.lng || this.language);
        const U = (w, L, ne) => {
          const ie = Z && ne !== M ? ne : ue;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(w, h, L, ie, le, c)
            : this.backendConnector?.saveMissing &&
              this.backendConnector.saveMissing(w, h, L, ie, le, c),
            this.emit('missingKey', w, h, L, M);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && $
            ? A.forEach(w => {
                const L = this.pluralResolver.getSuffixes(w, c);
                xe &&
                  c[`defaultValue${this.options.pluralSeparator}zero`] &&
                  L.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  L.push(`${this.options.pluralSeparator}zero`),
                  L.forEach(ne => {
                    U([w], p + ne, c[`defaultValue${ne}`] || ge);
                  });
              })
            : U(A, p, ge));
      }
      (M = this.extendTranslation(M, o, c, z, u)),
        Q && M === p && this.options.appendNamespaceToMissingKey && (M = `${h}${S}${p}`),
        (Q || ve) &&
          this.options.parseMissingKeyHandler &&
          (M = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${h}${S}${p}` : p,
            ve ? M : void 0,
            c,
          ));
    }
    return f ? ((z.res = M), (z.usedParams = this.getUsedParamsDetails(c)), z) : M;
  }
  extendTranslation(o, i, u, c, f) {
    if (this.i18nFormat?.parse)
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
      const v =
        oe(o) &&
        (u?.interpolation?.skipOnVariables !== void 0
          ? u.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let h;
      if (v) {
        const E = o.match(this.interpolator.nestingRegexp);
        h = E && E.length;
      }
      let S = u.replace && !oe(u.replace) ? u.replace : u;
      if (
        (this.options.interpolation.defaultVariables &&
          (S = { ...this.options.interpolation.defaultVariables, ...S }),
        (o = this.interpolator.interpolate(o, S, u.lng || this.language || c.usedLng, u)),
        v)
      ) {
        const E = o.match(this.interpolator.nestingRegexp),
          R = E && E.length;
        h < R && (u.nest = !1);
      }
      !u.lng && c && c.res && (u.lng = this.language || c.usedLng),
        u.nest !== !1 &&
          (o = this.interpolator.nest(
            o,
            (...E) =>
              f?.[0] === E[0] && !u.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${E[0]} in key: ${i[0]}`,
                  ),
                  null)
                : this.translate(...E, i),
            u,
          )),
        u.interpolation && this.interpolator.reset();
    }
    const m = u.postProcess || this.options.postProcess,
      p = oe(m) ? [m] : m;
    return (
      o != null &&
        p?.length &&
        u.applyPostProcessor !== !1 &&
        (o = td.handle(
          p,
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
    let u, c, f, m, p;
    return (
      oe(o) && (o = [o]),
      o.forEach(v => {
        if (this.isValidLookup(u)) return;
        const h = this.extractFromKey(v, i),
          S = h.key;
        c = S;
        let E = h.namespaces;
        this.options.fallbackNS && (E = E.concat(this.options.fallbackNS));
        const R = i.count !== void 0 && !oe(i.count),
          z = R && !i.ordinal && i.count === 0,
          M =
            i.context !== void 0 &&
            (oe(i.context) || typeof i.context == 'number') &&
            i.context !== '',
          O = i.lngs
            ? i.lngs
            : this.languageUtils.toResolveHierarchy(i.lng || this.language, i.fallbackLng);
        E.forEach(N => {
          this.isValidLookup(u) ||
            ((p = N),
            !Zc[`${O[0]}-${N}`] &&
              this.utils?.hasLoadedNamespace &&
              !this.utils?.hasLoadedNamespace(p) &&
              ((Zc[`${O[0]}-${N}`] = !0),
              this.logger.warn(
                `key "${c}" for languages "${O.join(', ')}" won't get resolved as namespace "${p}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            O.forEach(K => {
              if (this.isValidLookup(u)) return;
              m = K;
              const F = [S];
              if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(F, S, K, N, i);
              else {
                let $;
                R && ($ = this.pluralResolver.getSuffix(K, i.count, i));
                const Z = `${this.options.pluralSeparator}zero`,
                  q = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (R &&
                    (F.push(S + $),
                    i.ordinal &&
                      $.indexOf(q) === 0 &&
                      F.push(S + $.replace(q, this.options.pluralSeparator)),
                    z && F.push(S + Z)),
                  M)
                ) {
                  const X = `${S}${this.options.contextSeparator}${i.context}`;
                  F.push(X),
                    R &&
                      (F.push(X + $),
                      i.ordinal &&
                        $.indexOf(q) === 0 &&
                        F.push(X + $.replace(q, this.options.pluralSeparator)),
                      z && F.push(X + Z));
                }
              }
              let Y;
              for (; (Y = F.pop()); )
                this.isValidLookup(u) || ((f = Y), (u = this.getResource(K, N, Y, i)));
            }));
        });
      }),
      { res: u, usedKey: c, exactUsedKey: f, usedLng: m, usedNS: p }
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
    return this.i18nFormat?.getResource
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
      u = o.replace && !oe(o.replace);
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
    if (oe(o) && o.indexOf('-') > -1) {
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
          i = this.options.supportedLngs.find(m => {
            if (m === f) return m;
            if (
              !(m.indexOf('-') < 0 && f.indexOf('-') < 0) &&
              ((m.indexOf('-') > 0 && f.indexOf('-') < 0 && m.substring(0, m.indexOf('-')) === f) ||
                (m.indexOf(f) === 0 && f.length > 1))
            )
              return m;
          });
        }),
      i || (i = this.getFallbackCodes(this.options.fallbackLng)[0]),
      i
    );
  }
  getFallbackCodes(o, i) {
    if (!o) return [];
    if ((typeof o == 'function' && (o = o(i)), oe(o) && (o = [o]), Array.isArray(o))) return o;
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
      f = m => {
        m &&
          (this.isSupportedCode(m)
            ? c.push(m)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${m}`));
      };
    return (
      oe(o) && (o.indexOf('-') > -1 || o.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && f(this.formatLanguageCode(o)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            f(this.getScriptPartFromCode(o)),
          this.options.load !== 'currentOnly' && f(this.getLanguagePartFromCode(o)))
        : oe(o) && f(this.formatLanguageCode(o)),
      u.forEach(m => {
        c.indexOf(m) < 0 && f(this.formatLanguageCode(m));
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
class Ng {
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
    let m;
    try {
      m = new Intl.PluralRules(u, { type: c });
    } catch {
      if (!Intl) return this.logger.error('No Intl support, please use an Intl polyfill!'), rf;
      if (!o.match(/-|_/)) return rf;
      const v = this.languageUtils.getLanguagePartFromCode(o);
      m = this.getRule(v, i);
    }
    return (this.pluralRulesCache[f] = m), m;
  }
  needsPlural(o, i = {}) {
    let u = this.getRule(o, i);
    return u || (u = this.getRule('dev', i)), u?.resolvedOptions().pluralCategories.length > 1;
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
    let f = wg(l, o, i);
    return !f && c && oe(i) && ((f = Tl(l, i, u)), f === void 0 && (f = Tl(o, i, u))), f;
  },
  gl = l => l.replace(/\$/g, '$$$$');
class Rg {
  constructor(o = {}) {
    (this.logger = Tt.create('interpolator')),
      (this.options = o),
      (this.format = o?.interpolation?.format || (i => i)),
      this.init(o);
  }
  init(o = {}) {
    o.interpolation || (o.interpolation = { escapeValue: !0 });
    const {
      escape: i,
      escapeValue: u,
      useRawValueToEscape: c,
      prefix: f,
      prefixEscaped: m,
      suffix: p,
      suffixEscaped: v,
      formatSeparator: h,
      unescapeSuffix: S,
      unescapePrefix: E,
      nestingPrefix: R,
      nestingPrefixEscaped: z,
      nestingSuffix: M,
      nestingSuffixEscaped: O,
      nestingOptionsSeparator: N,
      maxReplaces: K,
      alwaysFormat: F,
    } = o.interpolation;
    (this.escape = i !== void 0 ? i : Sg),
      (this.escapeValue = u !== void 0 ? u : !0),
      (this.useRawValueToEscape = c !== void 0 ? c : !1),
      (this.prefix = f ? Qn(f) : m || '{{'),
      (this.suffix = p ? Qn(p) : v || '}}'),
      (this.formatSeparator = h || ','),
      (this.unescapePrefix = S ? '' : E || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : S || ''),
      (this.nestingPrefix = R ? Qn(R) : z || Qn('$t(')),
      (this.nestingSuffix = M ? Qn(M) : O || Qn(')')),
      (this.nestingOptionsSeparator = N || ','),
      (this.maxReplaces = K || 1e3),
      (this.alwaysFormat = F !== void 0 ? F : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const o = (i, u) => (i?.source === u ? ((i.lastIndex = 0), i) : new RegExp(u, 'g'));
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
    let f, m, p;
    const v =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      h = z => {
        if (z.indexOf(this.formatSeparator) < 0) {
          const K = of(i, v, z, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat
            ? this.format(K, void 0, u, { ...c, ...i, interpolationkey: z })
            : K;
        }
        const M = z.split(this.formatSeparator),
          O = M.shift().trim(),
          N = M.join(this.formatSeparator).trim();
        return this.format(
          of(i, v, O, this.options.keySeparator, this.options.ignoreJSONStructure),
          N,
          u,
          { ...c, ...i, interpolationkey: O },
        );
      };
    this.resetRegExp();
    const S = c?.missingInterpolationHandler || this.options.missingInterpolationHandler,
      E =
        c?.interpolation?.skipOnVariables !== void 0
          ? c.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: z => gl(z) },
        { regex: this.regexp, safeValue: z => (this.escapeValue ? gl(this.escape(z)) : gl(z)) },
      ].forEach(z => {
        for (p = 0; (f = z.regex.exec(o)); ) {
          const M = f[1].trim();
          if (((m = h(M)), m === void 0))
            if (typeof S == 'function') {
              const N = S(o, f, c);
              m = oe(N) ? N : '';
            } else if (c && Object.prototype.hasOwnProperty.call(c, M)) m = '';
            else if (E) {
              m = f[0];
              continue;
            } else
              this.logger.warn(`missed to pass in variable ${M} for interpolating ${o}`), (m = '');
          else !oe(m) && !this.useRawValueToEscape && (m = Gc(m));
          const O = z.safeValue(m);
          if (
            ((o = o.replace(f[0], O)),
            E
              ? ((z.regex.lastIndex += m.length), (z.regex.lastIndex -= f[0].length))
              : (z.regex.lastIndex = 0),
            p++,
            p >= this.maxReplaces)
          )
            break;
        }
      }),
      o
    );
  }
  nest(o, i, u = {}) {
    let c, f, m;
    const p = (v, h) => {
      const S = this.nestingOptionsSeparator;
      if (v.indexOf(S) < 0) return v;
      const E = v.split(new RegExp(`${S}[ ]*{`));
      let R = `{${E[1]}`;
      (v = E[0]), (R = this.interpolate(R, m));
      const z = R.match(/'/g),
        M = R.match(/"/g);
      (((z?.length ?? 0) % 2 === 0 && !M) || M.length % 2 !== 0) && (R = R.replace(/'/g, '"'));
      try {
        (m = JSON.parse(R)), h && (m = { ...h, ...m });
      } catch (O) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${v}`, O),
          `${v}${S}${R}`
        );
      }
      return m.defaultValue && m.defaultValue.indexOf(this.prefix) > -1 && delete m.defaultValue, v;
    };
    for (; (c = this.nestingRegexp.exec(o)); ) {
      let v = [];
      (m = { ...u }),
        (m = m.replace && !oe(m.replace) ? m.replace : m),
        (m.applyPostProcessor = !1),
        delete m.defaultValue;
      let h = !1;
      if (c[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(c[1])) {
        const S = c[1].split(this.formatSeparator).map(E => E.trim());
        (c[1] = S.shift()), (v = S), (h = !0);
      }
      if (((f = i(p.call(this, c[1].trim(), m), m)), f && c[0] === o && !oe(f))) return f;
      oe(f) || (f = Gc(f)),
        f || (this.logger.warn(`missed to resolve ${c[1]} for nesting ${o}`), (f = '')),
        h &&
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
const Lg = l => {
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
          : c.split(';').forEach(m => {
              if (m) {
                const [p, ...v] = m.split(':'),
                  h = v
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  S = p.trim();
                i[S] || (i[S] = h),
                  h === 'false' && (i[S] = !1),
                  h === 'true' && (i[S] = !0),
                  isNaN(h) || (i[S] = parseInt(h, 10));
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
      const m = u + JSON.stringify(f);
      let p = o[m];
      return p || ((p = l(Br(u), c)), (o[m] = p)), p(i);
    };
  },
  Og = l => (o, i, u) => l(Br(i), u)(o);
class _g {
  constructor(o = {}) {
    (this.logger = Tt.create('formatter')), (this.options = o), this.init(o);
  }
  init(o, i = { interpolation: {} }) {
    this.formatSeparator = i.interpolation.formatSeparator || ',';
    const u = i.cacheInBuiltFormats ? sf : Og;
    this.formats = {
      number: u((c, f) => {
        const m = new Intl.NumberFormat(c, { ...f });
        return p => m.format(p);
      }),
      currency: u((c, f) => {
        const m = new Intl.NumberFormat(c, { ...f, style: 'currency' });
        return p => m.format(p);
      }),
      datetime: u((c, f) => {
        const m = new Intl.DateTimeFormat(c, { ...f });
        return p => m.format(p);
      }),
      relativetime: u((c, f) => {
        const m = new Intl.RelativeTimeFormat(c, { ...f });
        return p => m.format(p, f.range || 'day');
      }),
      list: u((c, f) => {
        const m = new Intl.ListFormat(c, { ...f });
        return p => m.format(p);
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
      f.find(p => p.indexOf(')') > -1)
    ) {
      const p = f.findIndex(v => v.indexOf(')') > -1);
      f[0] = [f[0], ...f.splice(1, p)].join(this.formatSeparator);
    }
    return f.reduce((p, v) => {
      const { formatName: h, formatOptions: S } = Lg(v);
      if (this.formats[h]) {
        let E = p;
        try {
          const R = c?.formatParams?.[c.interpolationkey] || {},
            z = R.locale || R.lng || c.locale || c.lng || u;
          E = this.formats[h](p, z, { ...S, ...c, ...R });
        } catch (R) {
          this.logger.warn(R);
        }
        return E;
      } else this.logger.warn(`there was no format function for ${h}`);
      return p;
    }, o);
  }
}
const Ig = (l, o) => {
  l.pending[o] !== void 0 && (delete l.pending[o], l.pendingCount--);
};
class Dg extends mi {
  constructor(o, i, u, c = {}) {
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
      this.backend?.init?.(u, c.backend, c);
  }
  queueLoad(o, i, u, c) {
    const f = {},
      m = {},
      p = {},
      v = {};
    return (
      o.forEach(h => {
        let S = !0;
        i.forEach(E => {
          const R = `${h}|${E}`;
          !u.reload && this.store.hasResourceBundle(h, E)
            ? (this.state[R] = 2)
            : this.state[R] < 0 ||
              (this.state[R] === 1
                ? m[R] === void 0 && (m[R] = !0)
                : ((this.state[R] = 1),
                  (S = !1),
                  m[R] === void 0 && (m[R] = !0),
                  f[R] === void 0 && (f[R] = !0),
                  v[E] === void 0 && (v[E] = !0)));
        }),
          S || (p[h] = !0);
      }),
      (Object.keys(f).length || Object.keys(m).length) &&
        this.queue.push({
          pending: m,
          pendingCount: Object.keys(m).length,
          loaded: {},
          errors: [],
          callback: c,
        }),
      {
        toLoad: Object.keys(f),
        pending: Object.keys(m),
        toLoadLanguages: Object.keys(p),
        toLoadNamespaces: Object.keys(v),
      }
    );
  }
  loaded(o, i, u) {
    const c = o.split('|'),
      f = c[0],
      m = c[1];
    i && this.emit('failedLoading', f, m, i),
      !i && u && this.store.addResourceBundle(f, m, u, void 0, void 0, { skipCopy: !0 }),
      (this.state[o] = i ? -1 : 2),
      i && u && (this.state[o] = 0);
    const p = {};
    this.queue.forEach(v => {
      yg(v.loaded, [f], m),
        Ig(v, o),
        i && v.errors.push(i),
        v.pendingCount === 0 &&
          !v.done &&
          (Object.keys(v.loaded).forEach(h => {
            p[h] || (p[h] = {});
            const S = v.loaded[h];
            S.length &&
              S.forEach(E => {
                p[h][E] === void 0 && (p[h][E] = !0);
              });
          }),
          (v.done = !0),
          v.errors.length ? v.callback(v.errors) : v.callback());
    }),
      this.emit('loaded', p),
      (this.queue = this.queue.filter(v => !v.done));
  }
  read(o, i, u, c = 0, f = this.retryTimeout, m) {
    if (!o.length) return m(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: o, ns: i, fcName: u, tried: c, wait: f, callback: m });
      return;
    }
    this.readingCalls++;
    const p = (h, S) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const E = this.waitingReads.shift();
          this.read(E.lng, E.ns, E.fcName, E.tried, E.wait, E.callback);
        }
        if (h && S && c < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, o, i, u, c + 1, f * 2, m);
          }, f);
          return;
        }
        m(h, S);
      },
      v = this.backend[u].bind(this.backend);
    if (v.length === 2) {
      try {
        const h = v(o, i);
        h && typeof h.then == 'function' ? h.then(S => p(null, S)).catch(p) : p(null, h);
      } catch (h) {
        p(h);
      }
      return;
    }
    return v(o, i, p);
  }
  prepareLoading(o, i, u = {}, c) {
    if (!this.backend)
      return (
        this.logger.warn('No backend was added via i18next.use. Will not load resources.'), c && c()
      );
    oe(o) && (o = this.languageUtils.toResolveHierarchy(o)), oe(i) && (i = [i]);
    const f = this.queueLoad(o, i, u, c);
    if (!f.toLoad.length) return f.pending.length || c(), null;
    f.toLoad.forEach(m => {
      this.loadOne(m);
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
    this.read(c, f, 'read', void 0, void 0, (m, p) => {
      m && this.logger.warn(`${i}loading namespace ${f} for language ${c} failed`, m),
        !m && p && this.logger.log(`${i}loaded namespace ${f} for language ${c}`, p),
        this.loaded(o, m, p);
    });
  }
  saveMissing(o, i, u, c, f, m = {}, p = () => {}) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(i)) {
      this.logger.warn(
        `did not save key "${u}" as the namespace "${i}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(u == null || u === '')) {
      if (this.backend?.create) {
        const v = { ...m, isUpdate: f },
          h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let S;
            h.length === 5 ? (S = h(o, i, u, c, v)) : (S = h(o, i, u, c)),
              S && typeof S.then == 'function' ? S.then(E => p(null, E)).catch(p) : p(null, S);
          } catch (S) {
            p(S);
          }
        else h(o, i, u, c, p, v);
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
        oe(l[1]) && (o.defaultValue = l[1]),
        oe(l[2]) && (o.tDescription = l[2]),
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
  af = l => (
    oe(l.ns) && (l.ns = [l.ns]),
    oe(l.fallbackLng) && (l.fallbackLng = [l.fallbackLng]),
    oe(l.fallbackNS) && (l.fallbackNS = [l.fallbackNS]),
    l.supportedLngs?.indexOf?.('cimode') < 0 &&
      (l.supportedLngs = l.supportedLngs.concat(['cimode'])),
    typeof l.initImmediate == 'boolean' && (l.initAsync = l.initImmediate),
    l
  ),
  li = () => {},
  zg = l => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(l)).forEach(i => {
      typeof l[i] == 'function' && (l[i] = l[i].bind(l));
    });
  };
class Hr extends mi {
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
        (oe(o.ns)
          ? (o.defaultNS = o.ns)
          : o.ns.indexOf('translation') < 0 && (o.defaultNS = o.ns[0]));
    const u = lf();
    (this.options = { ...u, ...this.options, ...af(o) }),
      (this.options.interpolation = { ...u.interpolation, ...this.options.interpolation }),
      o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator),
      o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    const c = h => (h ? (typeof h == 'function' ? new h() : h) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Tt.init(c(this.modules.logger), this.options)
        : Tt.init(null, this.options);
      let h;
      this.modules.formatter ? (h = this.modules.formatter) : (h = _g);
      const S = new tf(this.options);
      this.store = new qc(this.options.resources, this.options);
      const E = this.services;
      (E.logger = Tt),
        (E.resourceStore = this.store),
        (E.languageUtils = S),
        (E.pluralResolver = new Ng(S, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        h &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === u.interpolation.format) &&
          ((E.formatter = c(h)),
          E.formatter.init(E, this.options),
          (this.options.interpolation.format = E.formatter.format.bind(E.formatter))),
        (E.interpolator = new Rg(this.options)),
        (E.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (E.backendConnector = new Dg(c(this.modules.backend), E.resourceStore, E, this.options)),
        E.backendConnector.on('*', (R, ...z) => {
          this.emit(R, ...z);
        }),
        this.modules.languageDetector &&
          ((E.languageDetector = c(this.modules.languageDetector)),
          E.languageDetector.init &&
            E.languageDetector.init(E, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((E.i18nFormat = c(this.modules.i18nFormat)),
          E.i18nFormat.init && E.i18nFormat.init(this)),
        (this.translator = new di(this.services, this.options)),
        this.translator.on('*', (R, ...z) => {
          this.emit(R, ...z);
        }),
        this.modules.external.forEach(R => {
          R.init && R.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = li),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      h.length > 0 && h[0] !== 'dev' && (this.options.lng = h[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(h => {
        this[h] = (...S) => this.store[h](...S);
      }),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach(h => {
        this[h] = (...S) => (this.store[h](...S), this);
      });
    const p = $r(),
      v = () => {
        const h = (S, E) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!',
              ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            p.resolve(E),
            i(S, E);
        };
        if (this.languages && !this.isInitialized) return h(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, h);
      };
    return this.options.resources || !this.options.initAsync ? v() : setTimeout(v, 0), p;
  }
  loadResources(o, i = li) {
    let u = i;
    const c = oe(o) ? o : this.language;
    if (
      (typeof o == 'function' && (u = o),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        c?.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return u();
      const f = [],
        m = p => {
          if (!p || p === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(p).forEach(h => {
            h !== 'cimode' && f.indexOf(h) < 0 && f.push(h);
          });
        };
      c
        ? m(c)
        : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(v => m(v)),
        this.options.preload?.forEach?.(p => m(p)),
        this.services.backendConnector.load(f, this.options.ns, p => {
          !p && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            u(p);
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
      u || (u = li),
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
    const c = p => {
        (this.language = p),
          (this.languages = this.services.languageUtils.toResolveHierarchy(p)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(p);
      },
      f = (p, v) => {
        v
          ? this.isLanguageChangingTo === o &&
            (c(v),
            this.translator.changeLanguage(v),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', v),
            this.logger.log('languageChanged', v))
          : (this.isLanguageChangingTo = void 0),
          u.resolve((...h) => this.t(...h)),
          i && i(p, (...h) => this.t(...h));
      },
      m = p => {
        !o && !p && this.services.languageDetector && (p = []);
        const v = oe(p) ? p : p && p[0],
          h = this.store.hasLanguageSomeTranslations(v)
            ? v
            : this.services.languageUtils.getBestMatchFromCodes(oe(p) ? [p] : p);
        h &&
          (this.language || c(h),
          this.translator.language || this.translator.changeLanguage(h),
          this.services.languageDetector?.cacheUserLanguage?.(h)),
          this.loadResources(h, S => {
            f(S, h);
          });
      };
    return (
      !o && this.services.languageDetector && !this.services.languageDetector.async
        ? m(this.services.languageDetector.detect())
        : !o && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(m)
            : this.services.languageDetector.detect(m)
          : m(o),
      u
    );
  }
  getFixedT(o, i, u) {
    const c = (f, m, ...p) => {
      let v;
      typeof m != 'object'
        ? (v = this.options.overloadTranslationOptionHandler([f, m].concat(p)))
        : (v = { ...m }),
        (v.lng = v.lng || c.lng),
        (v.lngs = v.lngs || c.lngs),
        (v.ns = v.ns || c.ns),
        v.keyPrefix !== '' && (v.keyPrefix = v.keyPrefix || u || c.keyPrefix);
      const h = this.options.keySeparator || '.';
      let S;
      return (
        v.keyPrefix && Array.isArray(f)
          ? (S = f.map(E => `${v.keyPrefix}${h}${E}`))
          : (S = v.keyPrefix ? `${v.keyPrefix}${h}${f}` : f),
        this.t(S, v)
      );
    };
    return oe(o) ? (c.lng = o) : (c.lngs = o), (c.ns = i), (c.keyPrefix = u), c;
  }
  t(...o) {
    return this.translator?.translate(...o);
  }
  exists(...o) {
    return this.translator?.exists(...o);
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
    const m = (p, v) => {
      const h = this.services.backendConnector.state[`${p}|${v}`];
      return h === -1 || h === 0 || h === 2;
    };
    if (i.precheck) {
      const p = i.precheck(this, m);
      if (p !== void 0) return p;
    }
    return !!(
      this.hasResourceBundle(u, o) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (m(u, o) && (!c || m(f, o)))
    );
  }
  loadNamespaces(o, i) {
    const u = $r();
    return this.options.ns
      ? (oe(o) && (o = [o]),
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
    oe(o) && (o = [o]);
    const c = this.options.preload || [],
      f = o.filter(m => c.indexOf(m) < 0 && this.services.languageUtils.isSupportedCode(m));
    return f.length
      ? ((this.options.preload = c.concat(f)),
        this.loadResources(m => {
          u.resolve(), i && i(m);
        }),
        u)
      : (i && i(), Promise.resolve());
  }
  dir(o) {
    if (
      (o ||
        (o =
          this.resolvedLanguage ||
          (this.languages?.length > 0 ? this.languages[0] : this.language)),
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
      u = this.services?.languageUtils || new tf(lf());
    return i.indexOf(u.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance(o = {}, i) {
    return new Hr(o, i);
  }
  cloneInstance(o = {}, i = li) {
    const u = o.forkResourceStore;
    u && delete o.forkResourceStore;
    const c = { ...this.options, ...o, isClone: !0 },
      f = new Hr(c);
    if (
      ((o.debug !== void 0 || o.prefix !== void 0) && (f.logger = f.logger.clone(o)),
      ['store', 'services', 'language'].forEach(p => {
        f[p] = this[p];
      }),
      (f.services = { ...this.services }),
      (f.services.utils = { hasLoadedNamespace: f.hasLoadedNamespace.bind(f) }),
      u)
    ) {
      const p = Object.keys(this.store.data).reduce(
        (v, h) => (
          (v[h] = { ...this.store.data[h] }),
          (v[h] = Object.keys(v[h]).reduce((S, E) => ((S[E] = { ...v[h][E] }), S), v[h])),
          v
        ),
        {},
      );
      (f.store = new qc(p, c)), (f.services.resourceStore = f.store);
    }
    return (
      (f.translator = new di(f.services, c)),
      f.translator.on('*', (p, ...v) => {
        f.emit(p, ...v);
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
const Qe = Hr.createInstance();
Qe.createInstance = Hr.createInstance;
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
  jg = {
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
  Ag = {
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
  Fg = { fr: { translation: Mg }, ar: { translation: jg }, en: { translation: Ag } };
Qe.use(Tm).init({
  resources: Fg,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: { escapeValue: !1 },
});
const nd = document.getElementById('root');
if (!nd) throw new Error('Root container introuvable');
const $g = am.createRoot(nd);
$g.render(W.jsxs(At.StrictMode, { children: [W.jsx(Im, {}), W.jsx(hg, {})] }));
//# sourceMappingURL=index-Clso05A_.js.map
