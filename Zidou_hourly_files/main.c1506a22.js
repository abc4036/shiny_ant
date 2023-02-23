let startDate = new Date(2021, 5, 19, 0, 0, 0, 0);
let todayDate = new Date();
let curHours = new Date().getHours();
let curDate = todayDate.setHours(curHours, 0, 0, 0) - startDate.setHours(0, 0, 0, 0);
let sharingDate = todayDate;
let roundNumber = Math.round(curDate * 24 / 864e5);

(this.wordle = this.wordle || {}),
  (this.wordle.bundle = (function (e) {
    "use strict";
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function s(e, a) {
      if (!(e instanceof a))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(e, a) {
      for (var s = 0; s < a.length; s++) {
        var t = a[s];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          "value" in t && (t.writable = !0),
          Object.defineProperty(e, t.key, t);
      }
    }
    function o(e, a, s) {
      return a && t(e.prototype, a), s && t(e, s), e;
    }
    function n(e, a, s) {
      return (
        a in e
          ? Object.defineProperty(e, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[a] = s),
        e
      );
    }
    function r(e, a) {
      if ("function" != typeof a && null !== a)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(a && a.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        a && l(e, a);
    }
    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function l(e, a) {
      return (l =
        Object.setPrototypeOf ||
        function (e, a) {
          return (e.__proto__ = a), e;
        })(e, a);
    }
    function d() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function u(e, a, s) {
      return (u = d()
        ? Reflect.construct
        : function (e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t))();
            return s && l(o, s.prototype), o;
          }).apply(null, arguments);
    }
    function c(e) {
      var a = "function" == typeof Map ? new Map() : void 0;
      return (c = function (e) {
        if (
          null === e ||
          ((s = e), -1 === Function.toString.call(s).indexOf("[native code]"))
        )
          return e;
        var s;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== a) {
          if (a.has(e)) return a.get(e);
          a.set(e, t);
        }
        function t() {
          return u(e, arguments, i(this).constructor);
        }
        return (
          (t.prototype = Object.create(e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          l(t, e)
        );
      })(e);
    }
    function p(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function m(e, a) {
      return !a || ("object" != typeof a && "function" != typeof a) ? p(e) : a;
    }
    function h(e) {
      var a = d();
      return function () {
        var s,
          t = i(e);
        if (a) {
          var o = i(this).constructor;
          s = Reflect.construct(t, arguments, o);
        } else s = t.apply(this, arguments);
        return m(this, s);
      };
    }
    function y(e, a) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, a) {
          var s =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == s) return;
          var t,
            o,
            n = [],
            r = !0,
            i = !1;
          try {
            for (
              s = s.call(e);
              !(r = (t = s.next()).done) &&
              (n.push(t.value), !a || n.length !== a);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, a) ||
        b(e, a) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function g(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return f(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        b(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function b(e, a) {
      if (e) {
        if ("string" == typeof e) return f(e, a);
        var s = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === s && e.constructor && (s = e.constructor.name),
          "Map" === s || "Set" === s
            ? Array.from(e)
            : "Arguments" === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            ? f(e, a)
            : void 0
        );
      }
    }
    function f(e, a) {
      (null == a || a > e.length) && (a = e.length);
      for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
      return t;
    }
    var k = document.createElement("template");
    k.innerHTML =
      "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return (
          s(this, t),
          n(p((e = a.call(this))), "_letter", ""),
          n(p(e), "_state", "empty"),
          n(p(e), "_animation", "idle"),
          n(p(e), "_last", !1),
          n(p(e), "_reveal", !1),
          e.attachShadow({ mode: "open" }),
          e
        );
      }
      return (
        o(
          t,
          [
            {
              key: "last",
              set: function (e) {
                this._last = e;
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                  (this.$tile = this.shadowRoot.querySelector(".tile")),
                  this.$tile.addEventListener("animationend", function (a) {
                    "PopIn" === a.animationName && (e._animation = "idle"),
                      "FlipIn" === a.animationName &&
                        ((e.$tile.dataset.state = e._state),
                        (e._animation = "flip-out")),
                      "FlipOut" === a.animationName &&
                        ((e._animation = "idle"),
                        e._last &&
                          e.dispatchEvent(
                            new CustomEvent("game-last-tile-revealed-in-row", {
                              bubbles: !0,
                              composed: !0,
                            })
                          )),
                      e._render();
                  }),
                  this._render();
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (e, a, s) {
                switch (e) {
                  case "letter":
                    if (s === a) break;
                    var t = "null" === s ? "" : s;
                    (this._letter = t),
                      (this._state = t ? "tbd" : "empty"),
                      (this._animation = t ? "pop" : "idle");
                    break;
                  case "evaluation":
                    if (!s) break;
                    this._state = s;
                    break;
                  case "reveal":
                    (this._animation = "flip-in"), (this._reveal = !0);
                }
                this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                this.$tile &&
                  ((this.$tile.textContent = this._letter),
                  ["empty", "tbd"].includes(this._state) &&
                    (this.$tile.dataset.state = this._state),
                  (["empty", "tbd"].includes(this._state) || this._reveal) &&
                    this.$tile.dataset.animation != this._animation &&
                    (this.$tile.dataset.animation = this._animation));
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["letter", "evaluation", "reveal"];
              },
            },
          ]
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML =
      '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(6, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return (
          s(this, t),
          (e = a.call(this)).attachShadow({ mode: "open" }),
          (e._letters = ""),
          (e._evaluation = []),
          e._length,
          e
        );
      }
      return (
        o(
          t,
          [
            {
              key: "evaluation",
              get: function () {
                return this._evaluation;
              },
              set: function (e) {
                var a = this;
                (this._evaluation = e),
                  this.$tiles &&
                    this.$tiles.forEach(function (e, s) {
                      e.setAttribute("evaluation", a._evaluation[s]),
                        setTimeout(function () {
                          e.setAttribute("reveal", "");
                        }, 300 * s);
                    });
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                  (this.$row = this.shadowRoot.querySelector(".row"));
                for (
                  var a = function (a) {
                      var s = document.createElement("game-tile"),
                        t = e._letters[a];
                      (t && s.setAttribute("letter", t), e._evaluation[a]) &&
                        (s.setAttribute("evaluation", e._evaluation[a]),
                        setTimeout(function () {
                          s.setAttribute("reveal", "");
                        }, 100 * a));
                      a === e._length - 1 && (s.last = !0),
                        e.$row.appendChild(s);
                    },
                    s = 0;
                  s < this._length;
                  s++
                )
                  a(s);
                (this.$tiles = this.shadowRoot.querySelectorAll("game-tile")),
                  this.addEventListener("animationend", function (a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid");
                  });
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (e, a, s) {
                switch (e) {
                  case "letters":
                    this._letters = s || "";
                    break;
                  case "length":
                    this._length = parseInt(s, 10);
                    break;
                  case "win":
                    if (null === s) {
                      this.$tiles.forEach(function (e) {
                        e.classList.remove("win");
                      });
                      break;
                    }
                    this.$tiles.forEach(function (e, a) {
                      e.classList.add("win"),
                        (e.style.animationDelay = "".concat(100 * a, "ms"));
                    });
                }
                this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                var e = this;
                this.$row &&
                  this.$tiles.forEach(function (a, s) {
                    var t = e._letters[s];
                    t
                      ? a.setAttribute("letter", t)
                      : a.removeAttribute("letter");
                  });
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["letters", "length", "invalid", "win"];
              },
            },
          ]
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme",
      S = "colorBlindTheme",
      _ = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), "isDarkTheme", !1),
            n(p(e), "isColorBlindTheme", !1),
            e.attachShadow({ mode: "open" });
          var o = JSON.parse(window.localStorage.getItem(j)),
            r = window.matchMedia("(prefers-color-scheme: dark)").matches,
            i = JSON.parse(window.localStorage.getItem(S));
          return (
            !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0),
            (!0 !== i && !1 !== i) || e.setColorBlindTheme(i),
            e
          );
        }
        return (
          o(t, [
            {
              key: "setDarkTheme",
              value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("nightmode")
                  ? a.classList.add("nightmode")
                  : a.classList.remove("nightmode"),
                  (this.isDarkTheme = e),
                  window.localStorage.setItem(j, JSON.stringify(e));
              },
            },
            {
              key: "setColorBlindTheme",
              value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("colorblind")
                  ? a.classList.add("colorblind")
                  : a.classList.remove("colorblind"),
                  (this.isColorBlindTheme = e),
                  window.localStorage.setItem(S, JSON.stringify(e));
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                  this.shadowRoot.addEventListener(
                    "game-setting-change",
                    function (a) {
                      var s = a.detail,
                        t = s.name,
                        o = s.checked;
                      switch (t) {
                        case "dark-theme":
                          return void e.setDarkTheme(o);
                        case "color-blind-theme":
                          return void e.setColorBlindTheme(o);
                      }
                    }
                  );
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    function q(e, a) {
      return e === a || (e != e && a != a);
    }
    function E(e, a) {
      for (var s = e.length; s--; ) if (q(e[s][0], a)) return s;
      return -1;
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;
    function C(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    (C.prototype.clear = function () {
      (this.__data__ = []), (this.size = 0);
    }),
      (C.prototype.delete = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return (
          !(s < 0) &&
          (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
        );
      }),
      (C.prototype.get = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return s < 0 ? void 0 : a[s][1];
      }),
      (C.prototype.has = function (e) {
        return E(this.__data__, e) > -1;
      }),
      (C.prototype.set = function (e, a) {
        var s = this.__data__,
          t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : (s[t][1] = a), this;
      });
    var L =
        "object" == ("undefined" == typeof global ? "undefined" : a(global)) &&
        global &&
        global.Object === Object &&
        global,
      T =
        "object" == ("undefined" == typeof self ? "undefined" : a(self)) &&
        self &&
        self.Object === Object &&
        self,
      I = L || T || Function("return this")(),
      M = I.Symbol,
      O = Object.prototype,
      R = O.hasOwnProperty,
      $ = O.toString,
      P = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;
    function D(e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : N && N in Object(e)
        ? (function (e) {
            var a = R.call(e, P),
              s = e[P];
            try {
              e[P] = void 0;
              var t = !0;
            } catch (e) {}
            var o = $.call(e);
            return t && (a ? (e[P] = s) : delete e[P]), o;
          })(e)
        : (function (e) {
            return H.call(e);
          })(e);
    }
    function G(e) {
      var s = a(e);
      return null != e && ("object" == s || "function" == s);
    }
    function B(e) {
      if (!G(e)) return !1;
      var a = D(e);
      return (
        "[object Function]" == a ||
        "[object GeneratorFunction]" == a ||
        "[object AsyncFunction]" == a ||
        "[object Proxy]" == a
      );
    }
    var F,
      W = I["__core-js_shared__"],
      Y = (F = /[^.]+$/.exec((W && W.keys && W.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + F
        : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
      X = Function.prototype,
      V = Object.prototype,
      K = X.toString,
      Q = V.hasOwnProperty,
      Z = RegExp(
        "^" +
          K.call(Q)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function ee(e) {
      return (
        !(!G(e) || ((a = e), Y && Y in a)) &&
        (B(e) ? Z : U).test(
          (function (e) {
            if (null != e) {
              try {
                return J.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          })(e)
        )
      );
      var a;
    }
    function ae(e, a) {
      var s = (function (e, a) {
        return null == e ? void 0 : e[a];
      })(e, a);
      return ee(s) ? s : void 0;
    }
    var se = ae(I, "Map"),
      te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;
    function re(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    function ie(e, s) {
      var t,
        o,
        n = e.__data__;
      return (
        "string" == (o = a((t = s))) ||
        "number" == o ||
        "symbol" == o ||
        "boolean" == o
          ? "__proto__" !== t
          : null === t
      )
        ? n["string" == typeof s ? "string" : "hash"]
        : n.map;
    }
    function le(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    (re.prototype.clear = function () {
      (this.__data__ = te ? te(null) : {}), (this.size = 0);
    }),
      (re.prototype.delete = function (e) {
        var a = this.has(e) && delete this.__data__[e];
        return (this.size -= a ? 1 : 0), a;
      }),
      (re.prototype.get = function (e) {
        var a = this.__data__;
        if (te) {
          var s = a[e];
          return "__lodash_hash_undefined__" === s ? void 0 : s;
        }
        return oe.call(a, e) ? a[e] : void 0;
      }),
      (re.prototype.has = function (e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e);
      }),
      (re.prototype.set = function (e, a) {
        var s = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a),
          this
        );
      }),
      (le.prototype.clear = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new re(),
            map: new (se || C)(),
            string: new re(),
          });
      }),
      (le.prototype.delete = function (e) {
        var a = ie(this, e).delete(e);
        return (this.size -= a ? 1 : 0), a;
      }),
      (le.prototype.get = function (e) {
        return ie(this, e).get(e);
      }),
      (le.prototype.has = function (e) {
        return ie(this, e).has(e);
      }),
      (le.prototype.set = function (e, a) {
        var s = ie(this, e),
          t = s.size;
        return s.set(e, a), (this.size += s.size == t ? 0 : 1), this;
      });
    function de(e) {
      var a = (this.__data__ = new C(e));
      this.size = a.size;
    }
    (de.prototype.clear = function () {
      (this.__data__ = new C()), (this.size = 0);
    }),
      (de.prototype.delete = function (e) {
        var a = this.__data__,
          s = a.delete(e);
        return (this.size = a.size), s;
      }),
      (de.prototype.get = function (e) {
        return this.__data__.get(e);
      }),
      (de.prototype.has = function (e) {
        return this.__data__.has(e);
      }),
      (de.prototype.set = function (e, a) {
        var s = this.__data__;
        if (s instanceof C) {
          var t = s.__data__;
          if (!se || t.length < 199)
            return t.push([e, a]), (this.size = ++s.size), this;
          s = this.__data__ = new le(t);
        }
        return s.set(e, a), (this.size = s.size), this;
      });
    var ue = (function () {
      try {
        var e = ae(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch (e) {}
    })();
    function ce(e, a, s) {
      "__proto__" == a && ue
        ? ue(e, a, { configurable: !0, enumerable: !0, value: s, writable: !0 })
        : (e[a] = s);
    }
    function pe(e, a, s) {
      ((void 0 !== s && !q(e[a], s)) || (void 0 === s && !(a in e))) &&
        ce(e, a, s);
    }
    var me,
      he = function (e, a, s) {
        for (var t = -1, o = Object(e), n = s(e), r = n.length; r--; ) {
          var i = n[me ? r : ++t];
          if (!1 === a(o[i], i, o)) break;
        }
        return e;
      },
      ye =
        "object" == (void 0 === e ? "undefined" : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      ge =
        ye &&
        "object" == ("undefined" == typeof module ? "undefined" : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      be = ge && ge.exports === ye ? I.Buffer : void 0,
      fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;
    function ve(e, a) {
      var s,
        t,
        o = a
          ? ((s = e.buffer),
            (t = new s.constructor(s.byteLength)),
            new ke(t).set(new ke(s)),
            t)
          : e.buffer;
      return new e.constructor(o, e.byteOffset, e.length);
    }
    var we = Object.create,
      xe = (function () {
        function e() {}
        return function (a) {
          if (!G(a)) return {};
          if (we) return we(a);
          e.prototype = a;
          var s = new e();
          return (e.prototype = void 0), s;
        };
      })();
    var ze,
      je,
      Se =
        ((ze = Object.getPrototypeOf),
        (je = Object),
        function (e) {
          return ze(je(e));
        }),
      _e = Object.prototype;
    function qe(e) {
      var a = e && e.constructor;
      return e === (("function" == typeof a && a.prototype) || _e);
    }
    function Ee(e) {
      return null != e && "object" == a(e);
    }
    function Ae(e) {
      return Ee(e) && "[object Arguments]" == D(e);
    }
    var Ce = Object.prototype,
      Le = Ce.hasOwnProperty,
      Te = Ce.propertyIsEnumerable,
      Ie = Ae(
        (function () {
          return arguments;
        })()
      )
        ? Ae
        : function (e) {
            return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee");
          },
      Me = Array.isArray;
    function Oe(e) {
      return (
        "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      );
    }
    function Re(e) {
      return null != e && Oe(e.length) && !B(e);
    }
    var $e =
        "object" == (void 0 === e ? "undefined" : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      Pe =
        $e &&
        "object" == ("undefined" == typeof module ? "undefined" : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      He = Pe && Pe.exports === $e ? I.Buffer : void 0,
      Ne =
        (He ? He.isBuffer : void 0) ||
        function () {
          return !1;
        },
      De = Function.prototype,
      Ge = Object.prototype,
      Be = De.toString,
      Fe = Ge.hasOwnProperty,
      We = Be.call(Object);
    var Ye = {};
    (Ye["[object Float32Array]"] =
      Ye["[object Float64Array]"] =
      Ye["[object Int8Array]"] =
      Ye["[object Int16Array]"] =
      Ye["[object Int32Array]"] =
      Ye["[object Uint8Array]"] =
      Ye["[object Uint8ClampedArray]"] =
      Ye["[object Uint16Array]"] =
      Ye["[object Uint32Array]"] =
        !0),
      (Ye["[object Arguments]"] =
        Ye["[object Array]"] =
        Ye["[object ArrayBuffer]"] =
        Ye["[object Boolean]"] =
        Ye["[object DataView]"] =
        Ye["[object Date]"] =
        Ye["[object Error]"] =
        Ye["[object Function]"] =
        Ye["[object Map]"] =
        Ye["[object Number]"] =
        Ye["[object Object]"] =
        Ye["[object RegExp]"] =
        Ye["[object Set]"] =
        Ye["[object String]"] =
        Ye["[object WeakMap]"] =
          !1);
    var Je =
        "object" == (void 0 === e ? "undefined" : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      Ue =
        Je &&
        "object" == ("undefined" == typeof module ? "undefined" : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      Xe = Ue && Ue.exports === Je && L.process,
      Ve = (function () {
        try {
          var e = Ue && Ue.require && Ue.require("util").types;
          return e || (Xe && Xe.binding && Xe.binding("util"));
        } catch (e) {}
      })(),
      Ke = Ve && Ve.isTypedArray,
      Qe = Ke
        ? (function (e) {
            return function (a) {
              return e(a);
            };
          })(Ke)
        : function (e) {
            return Ee(e) && Oe(e.length) && !!Ye[D(e)];
          };
    function Ze(e, a) {
      if (
        ("constructor" !== a || "function" != typeof e[a]) &&
        "__proto__" != a
      )
        return e[a];
    }
    var ea = Object.prototype.hasOwnProperty;
    function aa(e, a, s) {
      var t = e[a];
      (ea.call(e, a) && q(t, s) && (void 0 !== s || a in e)) || ce(e, a, s);
    }
    var sa = /^(?:0|[1-9]\d*)$/;
    function ta(e, s) {
      var t = a(e);
      return (
        !!(s = null == s ? 9007199254740991 : s) &&
        ("number" == t || ("symbol" != t && sa.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < s
      );
    }
    var oa = Object.prototype.hasOwnProperty;
    function na(e, a) {
      var s = Me(e),
        t = !s && Ie(e),
        o = !s && !t && Ne(e),
        n = !s && !t && !o && Qe(e),
        r = s || t || o || n,
        i = r
          ? (function (e, a) {
              for (var s = -1, t = Array(e); ++s < e; ) t[s] = a(s);
              return t;
            })(e.length, String)
          : [],
        l = i.length;
      for (var d in e)
        (!a && !oa.call(e, d)) ||
          (r &&
            ("length" == d ||
              (o && ("offset" == d || "parent" == d)) ||
              (n &&
                ("buffer" == d || "byteLength" == d || "byteOffset" == d)) ||
              ta(d, l))) ||
          i.push(d);
      return i;
    }
    var ra = Object.prototype.hasOwnProperty;
    function ia(e) {
      if (!G(e))
        return (function (e) {
          var a = [];
          if (null != e) for (var s in Object(e)) a.push(s);
          return a;
        })(e);
      var a = qe(e),
        s = [];
      for (var t in e)
        ("constructor" != t || (!a && ra.call(e, t))) && s.push(t);
      return s;
    }
    function la(e) {
      return Re(e) ? na(e, !0) : ia(e);
    }
    function da(e) {
      return (function (e, a, s, t) {
        var o = !s;
        s || (s = {});
        for (var n = -1, r = a.length; ++n < r; ) {
          var i = a[n],
            l = t ? t(s[i], e[i], i, s, e) : void 0;
          void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l);
        }
        return s;
      })(e, la(e));
    }
    function ua(e, a, s, t, o, n, r) {
      var i = Ze(e, s),
        l = Ze(a, s),
        d = r.get(l);
      if (d) pe(e, s, d);
      else {
        var u,
          c = n ? n(i, l, s + "", e, a, r) : void 0,
          p = void 0 === c;
        if (p) {
          var m = Me(l),
            h = !m && Ne(l),
            y = !m && !h && Qe(l);
          (c = l),
            m || h || y
              ? Me(i)
                ? (c = i)
                : Ee((u = i)) && Re(u)
                ? (c = (function (e, a) {
                    var s = -1,
                      t = e.length;
                    for (a || (a = Array(t)); ++s < t; ) a[s] = e[s];
                    return a;
                  })(i))
                : h
                ? ((p = !1),
                  (c = (function (e, a) {
                    if (a) return e.slice();
                    var s = e.length,
                      t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t;
                  })(l, !0)))
                : y
                ? ((p = !1), (c = ve(l, !0)))
                : (c = [])
              : (function (e) {
                  if (!Ee(e) || "[object Object]" != D(e)) return !1;
                  var a = Se(e);
                  if (null === a) return !0;
                  var s = Fe.call(a, "constructor") && a.constructor;
                  return (
                    "function" == typeof s && s instanceof s && Be.call(s) == We
                  );
                })(l) || Ie(l)
              ? ((c = i),
                Ie(i)
                  ? (c = da(i))
                  : (G(i) && !B(i)) ||
                    (c = (function (e) {
                      return "function" != typeof e.constructor || qe(e)
                        ? {}
                        : xe(Se(e));
                    })(l)))
              : (p = !1);
        }
        p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c);
      }
    }
    function ca(e, a, s, t, o) {
      e !== a &&
        he(
          a,
          function (n, r) {
            if ((o || (o = new de()), G(n))) ua(e, a, r, s, ca, t, o);
            else {
              var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
              void 0 === i && (i = n), pe(e, r, i);
            }
          },
          la
        );
    }
    function pa(e) {
      return e;
    }
    function ma(e, a, s) {
      switch (s.length) {
        case 0:
          return e.call(a);
        case 1:
          return e.call(a, s[0]);
        case 2:
          return e.call(a, s[0], s[1]);
        case 3:
          return e.call(a, s[0], s[1], s[2]);
      }
      return e.apply(a, s);
    }
    var ha = Math.max;
    var ya = ue
        ? function (e, a) {
            return ue(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value:
                ((s = a),
                function () {
                  return s;
                }),
              writable: !0,
            });
            var s;
          }
        : pa,
      ga = Date.now;
    var ba = (function (e) {
      var a = 0,
        s = 0;
      return function () {
        var t = ga(),
          o = 16 - (t - s);
        if (((s = t), o > 0)) {
          if (++a >= 800) return arguments[0];
        } else a = 0;
        return e.apply(void 0, arguments);
      };
    })(ya);
    function fa(e, a) {
      return ba(
        (function (e, a, s) {
          return (
            (a = ha(void 0 === a ? e.length - 1 : a, 0)),
            function () {
              for (
                var t = arguments,
                  o = -1,
                  n = ha(t.length - a, 0),
                  r = Array(n);
                ++o < n;

              )
                r[o] = t[a + o];
              o = -1;
              for (var i = Array(a + 1); ++o < a; ) i[o] = t[o];
              return (i[a] = s(r)), ma(e, this, i);
            }
          );
        })(e, a, pa),
        e + ""
      );
    }
    var ka,
      va =
        ((ka = function (e, a, s) {
          ca(e, a, s);
        }),
        fa(function (e, s) {
          var t = -1,
            o = s.length,
            n = o > 1 ? s[o - 1] : void 0,
            r = o > 2 ? s[2] : void 0;
          for (
            n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0,
              r &&
                (function (e, s, t) {
                  if (!G(t)) return !1;
                  var o = a(s);
                  return (
                    !!("number" == o
                      ? Re(t) && ta(s, t.length)
                      : "string" == o && (s in t)) && q(t[s], e)
                  );
                })(s[0], s[1], r) &&
                ((n = o < 3 ? void 0 : n), (o = 1)),
              e = Object(e);
            ++t < o;

          ) {
            var i = s[t];
            i && ka(e, i, t, n);
          }
          return e;
        })),
      wa = "gameState",
      xa = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1,
      };
    function za() {
      var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
      return JSON.parse(e);
    }
    function ja(e) {
      var a = za();
      !(function (e) {
        window.localStorage.setItem(wa, JSON.stringify(e));
      })(va(a, e));
    }
    var Sa = document.createElement("template");
    Sa.innerHTML =
      '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">困難模式</div>\n          <div class="description">任何提示都必須要喺下一次估答嘅時候用</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">黑夜模式</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">色盲模式</div>\n          <div class="description">高對比度顏色</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">提出建議</div>\n        </div>\n        <div class="control">\n          <a href="https://twitter.com/chaakming">Twitter</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright">Copyright Josh Wardle 2021-2022. He actually made it! All Rights Reserved.</div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return (
          s(this, t),
          n(p((e = a.call(this))), "gameApp", void 0),
          e.attachShadow({ mode: "open" }),
          e
        );
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e,
                a = this;
              this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                (this.shadowRoot.querySelector("#hash").textContent =
                  null === (e = window.wordle) || void 0 === e
                    ? void 0
                    : e.hash),
                (this.shadowRoot.querySelector("#puzzle-number").textContent =
                  "#".concat(this.gameApp.dayOffset)),
                this.shadowRoot.addEventListener(
                  "game-switch-change",
                  function (e) {
                    e.stopPropagation();
                    var s = e.detail,
                      t = s.name,
                      o = s.checked,
                      n = s.disabled;
                    a.dispatchEvent(
                      new CustomEvent("game-setting-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: { name: t, checked: o, disabled: n },
                      })
                    ),
                      a.render();
                  }
                ),
                this.render();
            },
          },
          {
            key: "render",
            value: function () {
              var e = document.querySelector("body");
              e.classList.contains("nightmode") &&
                this.shadowRoot
                  .querySelector("#dark-theme")
                  .setAttribute("checked", ""),
                e.classList.contains("colorblind") &&
                  this.shadowRoot
                    .querySelector("#color-blind-theme")
                    .setAttribute("checked", "");
              var a = za();
              a.hardMode &&
                this.shadowRoot
                  .querySelector("#hard-mode")
                  .setAttribute("checked", ""),
                a.hardMode ||
                  "IN_PROGRESS" !== a.gameStatus ||
                  0 === a.rowIndex ||
                  (this.shadowRoot
                    .querySelector("#hard-mode")
                    .removeAttribute("checked"),
                  this.shadowRoot
                    .querySelector("#hard-mode")
                    .setAttribute("disabled", ""));
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML =
      '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea,
      Aa = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), "_duration", void 0),
            e.attachShadow({ mode: "open" }),
            e
          );
        }
        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                (a.textContent = this.getAttribute("text")),
                  (this._duration = this.getAttribute("duration") || 1e3),
                  "Infinity" !== this._duration &&
                    setTimeout(function () {
                      a.classList.add("fade");
                    }, this._duration),
                  a.addEventListener("transitionend", function (a) {
                    e.parentNode.removeChild(e);
                  });
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    function Ca() {
      dataLayer.push(arguments);
    }
    customElements.define("game-toast", Aa),
      (window.dataLayer = window.dataLayer || []),
      Ca("js", new Date());
    Ca("config", "GTM-MZ46P2L", {
      app_version:
        null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
      debug_mode: !1,
    });
    var Rev = {
        jiluk: "26",
        gauap: "鳩噏",
        eimet: "A.math",
        eikei: "AK",
        aaudi: "Audi",
        eizai: "A仔",
        eipin: "A片",
        bensi: "Benz",
        bikfo: "Big 4",
        bizai: "B仔",
        siluk: "C6",
        siwai: "示威/思維",
        dikiu: "DQ",
        diesi: "DSE",
        feisi: "Face",
        zidim: "指點/G點",
        aaidi: "ID",
        aaiti: "IT",
        incyu: "Inch",
        keibi: "KB",
        keiou: "KO",
        keigo: "K歌",
        legou: "Lego",
        emkei: "MK",
        emfiu: "MPhil",
        minni: "Mini",
        mitsi: "Miss",
        emdou: "M到",
        emgan: "M巾",
        emgei: "M記",
        ennin: "N年",
        ensin: "N線",
        ennoi: "N耐",
        oukei: "ok/OK",
        ouzai: "O仔",
        ougei: "O記",
        pikei: "PK",
        pitou: "P圖",
        kiusi: "QC",
        lobat: "羅拔",
        sefan: "些粉",
        tibek: "T-back",
        ticek: "T尺",
        wiaau: "VR",
        iksou: "XO",
        jutup: "YouTube",
        jiset: "Z",
        eksep: "accept",
        etmin: "admin",
        engei: "an機",
        aasou: "阿嫂",
        aanti: "auntie",
        bekap: "backup",
        baaio: "bio",
        kafei: "café",
        kotoi: "call台",
        kogei: "call機",
        keisi: "歧視",
        kesou: "casual",
        cekau: "奢求",
        sifou: "civil",
        konsi: "cons",
        kiuti: "cutie",
        difoe: "defer",
        daang: "down",
        diusi: "due 時",
        dapce: "dup車",
        jikon: "econ",
        jimeu: "email",
        jifan: "意粉",
        fensi: "fans",
        fenzi: "fd子",
        folou: "火爐",
        futim: "full team",
        fiusi: "fuse",
        fupei: "負皮",
        gugou: "google",
        hogai: "hall雞",
        heppi: "happy",
        hinsi: "顯示",
        hausi: "後事/後市",
        zemje: "jam嘢",
        zampi: "jumpy",
        kibot: "keyboard",
        kikaa: "ki ka",
        kilou: "kilo",
        laasi: "last",
        lefou: "level",
        laiki: "likey",
        lufaa: "louvre",
        metsi: "maths",
        mimou: "memo",
        modou: "磨刀",
        mausi: "謀私",
        neifi: "navy",
        nuksi: "notes",
        oukem: "ocamp",
        oupan: "open",
        okbaa: "oppa",
        aufou: "out fo",
        audei: "outdate",
        aulet: "outlet",
        oufaa: "over",
        oufao: "overall",
        paati: "party",
        fisik: "physics",
        pikap: "pick up",
        pisaa: "pizza",
        pousi: "post",
        pifet: "prefect",
        pisen: "present",
        piuaa: "pure",
        kwoli: "quali",
        seusi: "sales",
        sensi: "sense",
        sitap: "sit-up",
        sousi: "soci",
        siwit: "sweet",
        tikje: "take嘢",
        teisi: "taste",
        ankou: "uncl",
        andaa: "under",
        apdei: "update",
        aplou: "upload",
        wisaa: "visa",
        wokki: "walkie",
        wikki: "wiki",
        jaang: "young",
        gaawo: "㗎喎/嫁禍",
        gausi: "舊時/鳩屎",
        saang: "生/省/㨘",
        bokje: "扑嘢/㩧嘢",
        zaang: "爭/掙/踭",
        ngong: "戇/昂",
        jatsi: "一時/一絲",
        jatse: "一些",
        jatgo: "一哥",
        jatdi: "一啲",
        jatje: "一嘢/日夜",
        jatze: "一姐",
        jaton: "一按",
        jatzi: "日子/一致",
        catze: "七姐",
        zoeng: "將/張/象",
        soeng: "上/想/相",
        haang: "行/坑",
        haaco: "下挫",
        haaci: "下次/瑕疵",
        haafo: "下火/下課",
        haazi: "蝦子/夏至",
        batzi: "不止/不致",
        batho: "不可/拔河",
        batwo: "不和",
        baton: "不安",
        batji: "不宜/不已",
        batsi: "不時/筆試",
        batfu: "不符",
        batam: "不諳",
        batco: "不錯",
        batgu: "不顧",
        batci: "不齒",
        cehon: "且看",
        saisi: "世事/西史",
        saizi: "細緻/世子",
        saigu: "世故",
        diuso: "丟疏",
        loeng: "兩/量/良",
        aacaa: "亞差/阿叉",
        aatau: "阿頭/丫頭",
        zyusi: "諸事/注視",
        zyufu: "主婦",
        zyuzi: "主旨/主子",
        zyuji: "主義/注意",
        zyuci: "主持",
        zyubo: "主播",
        zyugo: "主歌",
        zyufo: "主科",
        zyugu: "主顧",
        zijat: "之一",
        zihaa: "之下",
        zisin: "之先/支線",
        zinoi: "之內",
        zilit: "之列",
        zicin: "之前/紙錢",
        zimaa: "之嘛/芝麻",
        zihau: "之後/子喉",
        zizai: "之際/自製",
        zijyu: "至於/之餘",
        gwaai: "怪/乖/拐",
        matje: "乜嘢/乜野",
        hatji: "乞兒/乞衣",
        hatci: "乞嚏/乞嗤",
        jyuzi: "預知/乳脂",
        jyuci: "如此/魚翅",
        gonde: "乾爹",
        gonfo: "乾貨/趕貨",
        liusi: "了事",
        liugo: "了哥",
        jyuji: "如意/寓意",
        sizyu: "事主/施主",
        sigin: "事件",
        silai: "事例",
        sigaa: "私家/市價",
        sisin: "事先/視線",
        sicin: "事前/史前",
        simou: "事務/時務",
        sisat: "事實/史實",
        sigon: "事幹/屍肝",
        sihau: "時候/事後",
        sibit: "是必/事必",
        sijip: "事業",
        simat: "事物/絲襪",
        silei: "事理/私利",
        sizik: "市值/事跡",
        sitau: "事頭",
        jigai: "二偈",
        jisuk: "二叔",
        jifau: "二埠",
        jizin: "二戰/椅墊",
        jisau: "二手",
        jiduk: "二讀",
        wuwai: "污穢/互惠",
        ngdoi: "五代",
        ngmei: "五味",
        nggun: "五官",
        ngmou: "五毛",
        ngfuk: "五福",
        ngguk: "五穀",
        ngwan: "五藴",
        nggok: "五覺",
        ngjap: "五邑",
        nggam: "五金",
        ngjam: "五音",
        sesiu: "些少/些小",
        semei: "些微",
        aahet: "亞head",
        aazau: "亞洲",
        hoeng: "香/向/響",
        jansi: "人士/人事",
        janfu: "人夫/孕婦",
        janci: "因此/仁慈",
        janzi: "人質/引致",
        janwo: "人禍",
        janse: "人蛇",
        sammo: "甚麼/什麼",
        janoi: "恩愛/仁愛",
        janji: "因而/仁義",
        cekzi: "赤字/仄紙",
        sausi: "壽司/收市",
        gamje: "今夜",
        gamci: "今次",
        zaije: "仔爺",
        zisai: "仔細/自細",
        sisan: "時辰/士紳",
        sitou: "試圖/仕途",
        fujyu: "呼籲/賦予",
        fujan: "夫人/婦人",
        futok: "付托",
        fufun: "付款",
        fuzyu: "苦主/付諸",
        fuwan: "付運",
        singu: "仙姑/仙股",
        doici: "代詞",
        doifo: "代課",
        limso: "令梳",
        jihaa: "以下",
        jiloi: "以來",
        jibin: "以便/依便",
        jimin: "以免/伊麪",
        jinoi: "以內",
        jicin: "以前",
        jikap: "以及",
        jilai: "以嚟",
        jihau: "以後",
        jiwai: "以為/移位",
        joeng: "樣/養/陽",
        ngzok: "仵作",
        jamho: "任何",
        jamji: "任意",
        fanzi: "分子/份子",
        keime: "企歪",
        jijan: "怡人/伊人",
        fuksi: "服侍/福士",
        jausi: "有時/有事",
        jauzi: "幼稚/有之",
        fobun: "伙伴/課本",
        fosou: "伙數/火數",
        fogei: "科技/伙記",
        fotau: "伙頭/火頭",
        fosik: "貨色/伙食",
        guzik: "估值/古籍",
        gugaa: "股價/顧家",
        gugai: "估計",
        guwaa: "估話",
        zigei: "自己/知己",
        cidik: "似的",
        cizuk: "持續/似足",
        bouzi: "報紙/佈置",
        waizi: "為之/位置",
        daibi: "低B",
        daigu: "低估",
        daibo: "低波",
        zyuuk: "住屋",
        zyuwu: "住户",
        zyuso: "住所",
        hobat: "何不",
        hojan: "何人/可人",
        hozai: "何仔",
        holoi: "何來",
        hokei: "何其",
        homaa: "河馬/何媽",
        hobit: "何必",
        hocyu: "何處",
        howai: "可謂/何謂",
        tozai: "陀仔/佗仔",
        todei: "陀地/拖地",
        tobiu: "佗錶/砣錶",
        totit: "佗鐵/跎鐵",
        fatje: "佛爺",
        fatto: "佛陀",
        zokau: "作嘔",
        zokok: "作惡",
        zokon: "作案",
        zokgo: "作歌",
        zokze: "作者",
        zokci: "作詞",
        neine: "你呢",
        saipo: "使婆/細婆",
        sijin: "使然/私煙",
        sizit: "時節/使節",
        sigun: "史觀/使館",
        loiji: "來意",
        loize: "來者",
        loizi: "來自",
        laizi: "例子/嚟自",
        laici: "例遲",
        sizai: "侍仔",
        jiwan: "依勻/疑雲",
        jigaa: "依家/而家",
        jidou: "依度/耳道",
        jijap: "依挹/依揖",
        jikei: "依期",
        jijin: "依然/易燃",
        jiziu: "依照",
        jihei: "兒嬉/意氣",
        jigau: "依舊",
        jizuk: "依足",
        jijuk: "意欲/依郁",
        binsi: "鞭屍/便士",
        pinji: "便宜",
        binji: "貶義/便意",
        haiaa: "係呀",
        haine: "係呢",
        haime: "係咩",
        haibo: "係波",
        cuksi: "促使",
        zukzi: "俗字/竹枝",
        fuwok: "俘獲",
        fulou: "骷髏/俘虜",
        bouon: "保安/報案",
        bouci: "保持",
        bouwu: "保護",
        hapji: "俠義/合意",
        sauwu: "守護/修護",
        sauci: "手持/修辭",
        fuham: "俯瞰",
        fungo: "俯臥",
        fusau: "扶手/俯首",
        caang: "撐/橙/撑",
        gojan: "個人",
        gowai: "個位",
        gobit: "個別",
        gosai: "個勢",
        gotai: "個體",
        douci: "都似/倒刺",
        douse: "倒瀉",
        douce: "倒車",
        zedoi: "借代",
        zelik: "借力",
        zesai: "謝世/借勢",
        zehau: "借口",
        zejyu: "借喻",
        zesuk: "借宿",
        zegei: "借機",
        zehok: "借殼",
        zecin: "借錢",
        coeng: "長/場/唱",
        gaasi: "家事/傢俬",
        gaaze: "家姐/假借",
        gaaji: "加以/假意",
        gaafo: "傢伙/家伙",
        waigo: "偉哥",
        pinoi: "偏愛",
        pinsi: "偏私",
        pinpo: "偏頗",
        zousi: "做事/早市",
        zoume: "做咩",
        zouje: "做嘢",
        zouoi: "做愛",
        ginji: "建議/健兒",
        tauje: "偷嘢",
        tausi: "透視/偷師",
        beion: "備案",
        beifo: "備課",
        sojan: "傻人",
        sozai: "傻仔",
        solou: "傻佬",
        somui: "傻妹",
        sohei: "傻氣/梳起",
        sosiu: "傻笑",
        sozyu: "傻豬",
        ganci: "近似/僅次",
        guzyu: "僱主/顧住",
        goeng: "僵/薑/疆",
        jisik: "意識/儀式",
        jibiu: "儀表/姨表",
        jauji: "有意/幼兒",
        sinho: "先河",
        sinfu: "先父",
        sinzi: "先至/先知",
        gwong: "光/廣",
        minzi: "面子/免治",
        touzi: "兔子",
        dauje: "兜嘢",
        japng: "入伍",
        japfo: "入貨/入伙",
        japje: "入夜",
        japuk: "入屋",
        japsi: "入市/入時",
        japzo: "入座",
        japbo: "入波",
        japzi: "入紙",
        japgu: "入股",
        noizi: "內置/內子",
        noifo: "內科",
        noiji: "內衣/內耳",
        noifu: "內褲",
        keici: "其次/旗幟",
        dingu: "典故",
        gimce: "兼且",
        gimgu: "兼顧",
        mousi: "冇事/無視",
        mouje: "冇嘢",
        moubo: "冇波",
        moufu: "冇符",
        mouco: "冇錯",
        zoici: "再次",
        zoize: "再者",
        zoisi: "再試",
        hamdi: "冚啲",
        gunji: "冠以",
        lamsi: "臨時/冧市",
        lamgo: "冧歌",
        jejim: "冶豔",
        jejau: "夜遊/冶遊",
        jegam: "冶金",
        laang: "冷/唥",
        diuze: "凋謝",
        datzi: "凸字",
        fansi: "粉絲/訓示",
        fanje: "分野",
        citco: "切磋",
        citsi: "設施/切絲",
        litzi: "列子",
        litce: "列車",
        cojat: "初一",
        coman: "初吻",
        cohok: "初學",
        cosam: "初心",
        cokei: "初期",
        cobou: "初步",
        cociu: "初潮",
        cokap: "初級",
        cocoi: "初賽",
        cotau: "初頭/鋤頭",
        punpe: "判啤",
        punon: "判案",
        punci: "判詞/判辭",
        bitzi: "別字/別緻",
        laisi: "利是/利市",
        gwaat: "刮/摑/颳",
        douau: "到嘔",
        dousi: "到時/都市",
        zaizi: "制止/祭祀",
        cidou: "遲到/刺刀",
        cigik: "刺激",
        cisau: "刺繡",
        ciwai: "刺蝟",
        cisan: "刺身/黐身",
        cibei: "慈悲/刺鼻",
        hakji: "刻意",
        ziksi: "即使/即時",
        hakfu: "剋夫",
        cinfu: "前夫",
        cinfo: "前科",
        cinze: "前者",
        fuhon: "副刊",
        fugun: "副官/褲管",
        fubun: "副本",
        fujip: "副業",
        fucoi: "副菜",
        gotoi: "割愛",
        gaaci: "加持/架次",
        gaaon: "加按",
        zolik: "阻力/助力",
        zosau: "助手",
        zolei: "助理",
        gipon: "劫案",
        louzi: "老子/勞資",
        kandi: "勤啲",
        bakgu: "北菇/北姑",
        bakoi: "北愛",
        bakau: "北歐",
        sibui: "匙胚",
        cingu: "千古",
        saaaa: "卅/沙啞",
        ngjin: "午宴",
        bunje: "半夜",
        beisi: "比試/鼻屎",
        hipzo: "協助",
        hipji: "歉意/協議",
        boksi: "博士",
        bokoi: "博愛",
        kaasi: "卡士",
        kaace: "卡車",
        sehaa: "卸下/舍下",
        sejam: "卸任",
        selik: "卸力",
        sezik: "社稷/卸職",
        sebok: "卸膊",
        sezoi: "卸載",
        akwan: "厄運",
        hauoi: "厚愛",
        jimwu: "厭惡/掩護",
        caaje: "叉嘢/猜嘢",
        caato: "叉拖",
        caace: "叉車",
        kapsi: "及時",
        kapzi: "及至",
        jauoi: "友愛",
        sukpo: "叔婆",
        sukfu: "叔父",
        saugu: "受僱/受雇",
        sauco: "受挫",
        saufu: "受苦/首府",
        sauzo: "受阻",
        hauso: "口疏",
        haufu: "口苦/後父",
        hauci: "口齒",
        gujan: "古人/故人",
        gugam: "古今",
        guzai: "故仔/古仔",
        gudoi: "古代",
        gudin: "古典",
        gubou: "古堡",
        gumou: "鼓舞/古墓",
        gubaa: "古巴",
        guman: "顧問/古文",
        gusyu: "古書",
        guhei: "古氣/鼓起",
        gumat: "古物",
        guwun: "古玩",
        gukam: "古琴",
        gusuk: "古縮/古肅",
        gulou: "古老",
        gugau: "古舊",
        kauze: "叩謝",
        zihai: "只係",
        zihou: "只好/自豪",
        zidak: "只得/至得",
        zipaa: "只怕",
        ziwui: "只會",
        zijau: "只有/自由",
        zikau: "只求",
        zigun: "只管",
        zijiu: "只要/滋擾",
        giuzo: "叫座",
        giuwu: "叫糊",
        hohau: "可口",
        hofau: "可否",
        hohei: "可喜/呵氣",
        hopaa: "可怕",
        hobou: "可怖",
        hohan: "可恨",
        hobei: "可悲/可比",
        hosik: "可惜",
        holin: "可憐",
        holok: "可樂",
        hosiu: "可笑",
        hogin: "可見",
        hocan: "可親",
        hogun: "可觀/荷官",
        hopei: "可鄙/河皮",
        toize: "台姐",
        toici: "台詞/臺詞",
        sihok: "史學",
        siliu: "史料/私了",
        sigei: "司機/時機",
        sikam: "司琴",
        sidok: "司鐸",
        simaa: "司馬",
        hekfu: "吃苦",
        gokzi: "各自/擱置",
        hapfu: "合乎",
        hapfo: "合夥/合伙",
        hapsi: "合時",
        hapgu: "合股",
        hapzi: "合資",
        gatji: "吉儀",
        gatsi: "吉時/吉士",
        gatou: "吉澳",
        diuce: "吊車",
        leizi: "理智/離子",
        tousi: "圖示/吐司",
        toubo: "吐蕃",
        aamaa: "阿媽/呀嘛",
        aanaa: "吖嗱",
        aaban: "吖笨",
        jamsi: "吟詩/陰私",
        faise: "吠舍",
        fanfu: "吩咐",
        hamji: "含意/含義",
        hamwu: "含糊",
        zizaa: "吱喳",
        aabou: "阿布/呀布",
        ngaak: "呃/額",
        gouzi: "告知/稿子",
        gousi: "告示",
        gouci: "告辭",
        nibin: "呢邊/呢便",
        ligaa: "呢家",
        nisyu: "呢處/呢樹",
        nizan: "呢陣",
        nitau: "呢頭",
        nibok: "呢駁",
        zausi: "就是/走私",
        baang: "呯/砰/嘭",
        holik: "呵力/呵瀝",
        hohim: "呵欠",
        fugiu: "呼叫",
        fukap: "呼吸/負笈",
        fuwun: "呼喚",
        fuhot: "呼喝",
        fusiu: "苦笑/呼嘯",
        fugau: "呼救/扶柩",
        fuhei: "呼氣/負起",
        zaawo: "咋喎",
        womei: "和味",
        wosin: "和善",
        wohou: "和好",
        wojin: "和弦",
        wofuk: "和服",
        wohei: "和氣",
        womuk: "和睦",
        wowai: "和胃",
        wojam: "和音",
        gulei: "咕喱/咕哩",
        guzit: "咕唧",
        gaafe: "咖啡",
        mezaa: "咩喳",
        meliu: "咩料",
        mewaa: "咩話",
        maizi: "咪自",
        zicek: "咫尺",
        ngaau: "咬/淆/撓",
        oihou: "愛好/哀號",
        oigaa: "哀家",
        oidou: "哀悼",
        oisau: "哀愁",
        oikau: "哀求",
        banci: "奔馳/品詞",
        aijaa: "哎呀/哎吔",
        aaijo: "哎喲",
        gogei: "哥基/哥記",
        lilaa: "哩啦",
        naase: "那些/哪些",
        naago: "那個/哪個",
        naaji: "哪兒",
        angji: "哽耳",
        gukgu: "唂咕/谷古",
        sosai: "梳洗/唆使",
        mtung: "唔同/唔通",
        mding: "唔定",
        mfong: "唔方/唔慌",
        mkeoi: "唔拘",
        mcang: "唔曾",
        mseon: "唔順",
        zikce: "唧車/積車",
        saufo: "收貨/售貨",
        kaisi: "啓市/啓示",
        kaizi: "啓智",
        kaici: "啓齒",
        aajan: "啞人",
        aazai: "阿仔/啞仔",
        aabaa: "阿爸/啞巴",
        aasik: "啞色",
        aamai: "啞謎",
        fesik: "啡色",
        fezau: "啡走",
        bezyu: "睥住/啤住",
        bebaa: "啤把",
        belei: "啤梨",
        begei: "啤機",
        behok: "啤殼",
        befui: "啤灰",
        bezau: "啤酒",
        zehai: "姐係/啫係",
        zelei: "啫喱/啫哩",
        zemaa: "啫嘛",
        zekek: "啫屐",
        difen: "啲fd",
        dijan: "啲人",
        didaa: "啲打/啲咑",
        waiaa: "喂呀",
        sinsi: "善事",
        sinok: "善惡",
        sinji: "善意",
        heisi: "豈是/喜事",
        heiwu: "喜惡",
        heioi: "喜愛",
        leisi: "喱士/理事",
        gipzi: "喼紙",
        maafe: "嗎啡",
        wujin: "嗚咽",
        sihou: "絲毫/嗜好",
        gohaa: "嗰吓",
        godou: "嗰度/嗰道",
        gozai: "嗰濟/過濟",
        gosyu: "嗰處/歌書",
        gozan: "嗰陣",
        gotau: "嗰頭",
        dedim: "嗲掂",
        gezek: "嘅啫",
        gewaa: "嘅話",
        laulo: "嘍囉",
        autou: "嘔吐",
        ausam: "嘔心",
        audin: "嘔電",
        jesik: "嘢食/夜色",
        jejam: "嘢飲",
        gigat: "嘰趷/嘰屹",
        sigiu: "嘶叫",
        oksam: "噁心",
        apdap: "噏耷/罨耷",
        panse: "噴射",
        ngaat: "嚙/餲",
        leiem: "嚟M",
        jimho: "嚴苛",
        jimci: "嚴詞",
        hiusi: "囂屎",
        lopet: "囉pat",
        lojau: "囉柚/籮柚",
        lohei: "囉氣",
        zukfu: "囑咐",
        cauce: "囚車",
        seisi: "死士/四時",
        seizi: "四肢",
        wuifo: "回火",
        wuigu: "回顧",
        guzap: "固執",
        gujau: "固有/故友",
        gujin: "固然",
        gutai: "固體",
        waiau: "圍毆",
        touon: "圖案",
        zoifu: "在乎",
        zoizo: "在座",
        zoiji: "在意",
        zoion: "在案",
        zoije: "在野",
        deizi: "地址/地支",
        deifu: "地府/地庫",
        deito: "地拖",
        deibo: "地波",
        deici: "地磁",
        deiwu: "地糊",
        hamho: "坎坷",
        codai: "坐低",
        zodei: "坐地/座地",
        zozin: "坐墊",
        zosat: "坐實",
        zodai: "坐底/座底",
        zosip: "坐攝",
        cotoi: "坐枱/坐檯",
        zolou: "坐牢",
        copun: "坐盤",
        zolok: "坐落/座落",
        colin: "坐蓮",
        zozan: "坐鎮",
        cogun: "坐館",
        bomui: "坡妹",
        bobai: "坡幣",
        oikap: "埃及",
        zapsi: "執事/執屍",
        zapji: "執意",
        geipo: "基婆",
        geizo: "基座",
        geico: "基礎",
        gingu: "堅固",
        ginci: "堅持",
        bousi: "報時/補時",
        bouse: "報社/暴瀉",
        touwu: "塗污",
        touaa: "塗鴉",
        sakce: "塞車",
        tinse: "填寫",
        tinci: "填詞",
        canoi: "親愛/塵埃",
        zinzi: "墊支",
        makzi: "墨子",
        maksi: "墨屎",
        dojap: "墮入",
        dohau: "多口/墮後",
        dotoi: "墮胎",
        dolok: "墮落",
        domaa: "墮馬",
        bikfu: "壁虎",
        sijan: "私人/私隱",
        silek: "士叻",
        sizuk: "士族/氏族",
        sihei: "士氣",
        sisaa: "士沙/時沙",
        sidik: "士的",
        sauji: "獸醫/授意",
        dogau: "多久",
        dobun: "多半",
        dosiu: "多少",
        dodak: "多得",
        dosam: "多心",
        dosau: "多手",
        dosou: "多數",
        dojyu: "多餘/多於",
        jesiu: "夜宵",
        jemok: "夜幕",
        jedim: "夜店",
        jegei: "夜機",
        jesam: "野心/夜深",
        jeang: "夜鶯",
        janje: "夤夜",
        tinsi: "天使/天時",
        tinzi: "天子/天資",
        tinji: "天意",
        tinfu: "天賦/天父",
        tinwu: "天糊",
        fucai: "夫妻",
        fusai: "夫婿/虎噬",
        fugaa: "附加/富家",
        satsi: "實事/實施",
        satji: "失意",
        satto: "失拖",
        satbo: "失波",
        satfo: "失火",
        satng: "失誤",
        amlit: "奄列",
        keiji: "歧義/奇異",
        noiho: "奈何",
        kaigo: "契哥",
        kaize: "契姐",
        kaije: "契爺",
        banbo: "奔波",
        banfu: "奔赴/稟賦",
        touci: "陶瓷/肚臍",
        cewaa: "奢華",
        oumiu: "奧妙",
        oubei: "奧秘/奧祕",
        ouwan: "奧運",
        house: "好些",
        houci: "好似",
        houje: "好嘢",
        houdo: "好多",
        housi: "好市/蠔豉",
        houji: "好意/好耳",
        houbo: "好波",
        jyugu: "如估",
        jyuho: "如何",
        feizi: "痱滋/飛滋",
        jiuje: "妖冶",
        jiumo: "要麼/妖魔",
        kampo: "妗婆",
        tohip: "妥協",
        tosin: "妥善",
        totip: "妥貼",
        muifu: "妹夫",
        caiji: "妻兒",
        caizi: "妻子",
        cipsi: "妾侍",
        zimui: "姊妹/紙媒",
        cijyu: "詞語/始於",
        cimut: "始末",
        cizou: "遲早/詞組",
        zedai: "姐弟",
        gumaa: "姑媽",
        gunim: "姑念",
        gusik: "姑息/股息",
        gusou: "姑蘇",
        gubiu: "姑表",
        jizai: "耳仔/姨仔",
        jimaa: "姨媽",
        jimou: "義務/醫務",
        zatji: "質疑/姪兒",
        zisik: "知識/紫色",
        waisi: "威士",
        noeng: "娘",
        ponaa: "婆乸",
        pozai: "婆仔",
        posik: "婆媳",
        pomaa: "婆媽",
        pogaa: "婆家",
        sikfu: "媳婦",
        maami: "媽咪",
        maaze: "媽姐/馬姐",
        gauwo: "媾和",
        souzi: "數字/嫂子",
        jimji: "嫌疑/扊扅",
        dikzi: "嫡子",
        giude: "嬌嗲",
        zizat: "資質/子侄",
        zidai: "子弟",
        ziman: "自問/子民",
        zigai: "子雞/雉雞",
        zijam: "知音/子音",
        maabi: "孖B",
        maati: "孖T",
        maazi: "孖芝/孖指",
        zidin: "字典/致電",
        zimak: "字墨",
        zitip: "字帖",
        zimok: "字幕",
        zisou: "字數/指數",
        zigan: "紙巾/字根",
        zitiu: "字條/紙條",
        zilau: "字樓",
        zifun: "字款",
        zimou: "字母/至無",
        ziwaa: "至話/字畫",
        zinap: "字粒",
        zifaa: "字花",
        zizik: "字跡/治績",
        zibin: "自便/字邊",
        zimin: "字面",
        zitau: "字頭/枝頭",
        zitai: "字體/肢體",
        maang: "猛/盲/孟",
        gupik: "孤僻",
        guhon: "孤寒",
        guduk: "孤獨",
        gusan: "孤身",
        mesou: "孭數",
        mehei: "孭起",
        metit: "孭鐵",
        mewok: "孭鑊",
        mefei: "孭飛",
        fufaa: "腐化/孵化",
        hokci: "學似",
        hoksi: "學士/學師",
        hokzi: "學姊",
        hokze: "學者/學姐",
        hokfu: "學府",
        hokfo: "學科",
        hokwu: "學護",
        hokce: "學車",
        sauje: "守夜/收嘢",
        onjan: "安人",
        onfan: "安分",
        onpui: "安培",
        onhou: "安好",
        ondou: "安度",
        onfai: "安徽",
        onsam: "安心",
        onsik: "安息",
        onwai: "安慰",
        onlok: "安樂",
        ongim: "安檢",
        onjin: "安然",
        onmin: "安眠",
        onwan: "安穩",
        ontoi: "安胎",
        onsan: "安身",
        onjat: "安逸",
        gunsi: "官司",
        gunfu: "觀乎/官府",
        gungu: "官股",
        jidak: "醫德/宜得",
        siuje: "宵夜/少爺",
        gaagu: "家姑",
        gaapo: "家婆",
        gaafu: "家父",
        sukse: "宿舍/縮寫",
        matsi: "密使/蜜絲",
        fusyu: "富庶",
        fujau: "富有/附有",
        fuhou: "符號/富豪",
        fuzuk: "富足/腐竹",
        fujiu: "富饒",
        honji: "寒意/寒衣",
        honse: "寒舍",
        jyuso: "寓所",
        satci: "實詞",
        samsi: "心思/心事",
        samji: "心意/心儀",
        sedai: "寫低",
        sezok: "寫作",
        sesat: "寫實",
        sesau: "射手/寫手",
        seziu: "寫照",
        sezan: "寫真",
        sefaa: "寫花",
        secoi: "寫菜",
        liuuk: "寮屋",
        bouzo: "寶座/補助",
        boufu: "寶庫/暴富",
        zimiu: "寺廟",
        zimun: "寺門/自滿",
        sezyu: "射住",
        segik: "射擊",
        sezin: "射箭",
        semun: "射門",
        watci: "尉遲",
        douzi: "導致",
        siusi: "小時/小事",
        siuji: "笑意/小兒",
        siuze: "小姐",
        siugu: "小姑",
        siuzi: "小子",
        siuse: "小寫",
        siuho: "少可",
        siufu: "少婦",
        zimzi: "尖子",
        zauzo: "就座",
        zauzi: "就至/袖子",
        neigu: "尼姑",
        meiji: "尾二/屘二",
        meizi: "美資/尾指",
        meice: "尾車",
        niuwu: "尿壺",
        peigu: "屁股",
        watse: "屈蛇",
        ukzyu: "屋主",
        ukkei: "屋企",
        ukkai: "屋契",
        ukjyu: "屋宇",
        ukzou: "屋租",
        uksim: "屋簷",
        ukzek: "屋脊",
        sicau: "屍臭/絲綢",
        sisau: "屍首/試手",
        sitai: "屍體/試題",
        sifat: "屎忽/屎窟",
        sigap: "屎急",
        sidau: "私竇/屎斗",
        sikiu: "屎橋",
        sifun: "死款/屎款",
        sitam: "屎氹",
        sipin: "屎片/詩篇",
        sipei: "屎皮",
        sigai: "屎計",
        zinsi: "戰士/展示",
        zinci: "展翅",
        odaai: "屙大",
        ngoke: "屙茄/屙𡲢",
        toufu: "屠夫",
        sukji: "屬意",
        ngaam: "岩/癌/巖",
        ngaai: "捱/艾/涯",
        zobin: "左邊/左便",
        zojau: "左右",
        zojik: "左翼",
        zogan: "左近",
        zomin: "左面",
        moupo: "巫婆",
        caadi: "差啲",
        caaci: "茶匙/差池",
        caaji: "差異/詫異",
        caaco: "差錯",
        baasi: "巴士/巴絲",
        sikui: "市儈",
        siman: "市民/試問",
        silou: "思路/絲路",
        sidou: "市道",
        sizan: "市鎮",
        simin: "市面/絲棉",
        simui: "師妹",
        sidai: "師弟/視帝",
        mouzi: "無知/母子",
        gonzi: "干支",
        ninco: "年初",
        ninfo: "年貨",
        ninzi: "年資",
        gonsi: "幹事",
        jauam: "幽暗",
        jaufo: "幽科",
        geifu: "幾乎/肌膚",
        geiho: "幾何",
        geido: "幾多",
        geisi: "幾時/技師",
        beiwu: "庇護",
        daizi: "弟子/底子",
        daifu: "底褲/弟婦",
        zowai: "座位",
        zotoi: "座枱/座檯",
        zobiu: "座標",
        zogaa: "座駕",
        cigoi: "廁蓋",
        limci: "廉恥",
        cyusi: "廚師/處事",
        faisi: "費事/廢事",
        faizi: "廢紙/廢置",
        jinng: "延誤",
        jinci: "言詞/延遲",
        fatge: "忽嘅/弗嘅",
        wudou: "弧度",
        koeng: "強/彊/蔃",
        coici: "彩池",
        paang: "棒/彭/棚",
        beici: "彼此",
        haubo: "後波",
        hauze: "後者",
        touji: "徒兒",
        dakji: "得意/得以",
        dakzo: "得咗",
        dakdi: "得啲",
        dakgo: "得嗰",
        dakdo: "得多",
        dakzi: "得知",
        jyuze: "雨遮/御姐",
        fukgu: "復古",
        fukfo: "復課",
        meibo: "微波",
        daksi: "特使/德士",
        citje: "徹夜",
        samdo: "心多",
        samon: "心安",
        samoi: "深愛/心愛",
        samzi: "甚至/深知",
        samce: "心邪",
        samje: "深夜/心野",
        janze: "忍者",
        zizoi: "自在/志在",
        zihei: "稚氣/志氣",
        ngjik: "忤逆",
        fatji: "忽而",
        fatsi: "忽視",
        zammo: "怎麼",
        noufo: "怒火",
        nousi: "怒視",
        paace: "怕且",
        paasi: "怕事",
        paame: "怕咩",
        sinim: "思念",
        siciu: "思潮",
        sisok: "思索",
        sisuk: "思縮/私縮",
        gapsi: "急屎",
        gapzi: "急智",
        hipno: "怯懦",
        cilik: "恥力/磁力",
        cisiu: "恥笑",
        cijuk: "恥辱",
        hanco: "恨錯",
        janfo: "恩科",
        hapci: "恰似",
        fuiji: "悔意",
        beioi: "悲哀",
        beigo: "鼻哥/悲歌",
        waigu: "惠顧",
        okfaa: "惡化",
        okbou: "惡報/惡補",
        okgwo: "惡果",
        oksei: "惡死",
        okduk: "惡毒",
        okzat: "惡疾",
        okkik: "惡𠽤",
        jemei: "野味/惹味",
        jimei: "意味/異味",
        jitou: "意圖/醫肚",
        jinim: "意念",
        jiliu: "意料/醫療",
        jiwui: "議會/意會",
        jijam: "意淫",
        jigin: "意見/異見",
        jitau: "意頭",
        oijan: "愛人",
        oilai: "愛嚟",
        oisam: "愛心",
        oisik: "愛惜",
        oimou: "愛慕",
        oimiu: "愛苗",
        oisek: "愛錫",
        gamzi: "禁止/感知",
        gamze: "感謝/甘蔗",
        cisin: "痴線/黐線",
        cimou: "慈母",
        gwaan: "關/慣/躀",
        jukfo: "慾火",
        linoi: "憐愛",
        hamsi: "憾事",
        oufui: "懊悔",
        ounou: "懊惱",
        zitzi: "截止/截至",
        zitwu: "截糊",
        zinfu: "戰俘",
        zinfo: "戰火/賤貨",
        zinji: "戰衣",
        zince: "戰車",
        heizi: "棄子/戲子",
        wuzyu: "户主",
        wunoi: "户內",
        wuhau: "糊口/户口",
        wuzik: "户籍/污漬",
        sozoi: "所在",
        sosuk: "所屬",
        sodak: "所得",
        sojau: "所有",
        sogin: "所見",
        sowai: "所謂",
        saudo: "手多",
        sause: "手寫",
        sauzi: "手指/收支",
        sauso: "手疏",
        sauce: "手車",
        coizi: "才子/才智",
        daawo: "打和",
        daaik: "打噎",
        daazo: "打坐",
        daazi: "打字",
        daace: "打斜",
        daaho: "打河/打荷",
        daabo: "打波",
        daafo: "打火",
        daapo: "打破",
        daamo: "打磨",
        daaji: "打耳",
        daase: "打蛇",
        daaco: "打錯",
        daalo: "打鑼",
        toksi: "托市",
        tokci: "托辭",
        dikbo: "扚波/的波",
        caawo: "扠喎/扠禍",
        naubo: "扭波",
        cejan: "扯人",
        cekei: "扯旗",
        cehaa: "扯蝦",
        fugei: "扶乩",
        fuzik: "扶植",
        fupan: "扶貧",
        paisi: "批示",
        aksau: "扼守",
        akjiu: "扼要",
        mansi: "抿屎/抆屎",
        baaci: "把持",
        baaak: "把握",
        baafo: "把火/罷課",
        jikzi: "益智/抑止",
        waazi: "話之/話知",
        tause: "投射",
        tauon: "投案",
        tauzi: "投資/透支",
        zitdo: "折墮",
        zitse: "折射",
        zitmo: "折磨",
        poufu: "抱負",
        cause: "抽射",
        jaufu: "抽褲/拞褲",
        tokaa: "拖卡",
        tojau: "拖友",
        tojin: "拖延",
        tosau: "拖手/舵手",
        tobaa: "拖把",
        tosou: "拖數",
        togaa: "拖架",
        tohim: "拖欠",
        todou: "拖渡/拖艔",
        totau: "拖頭",
        tomaa: "拖馬",
        ziufu: "招呼",
        ziuon: "招安",
        ziuje: "招惹",
        ziuzi: "招致/招紙",
        ziugu: "照顧/招股",
        kutwu: "括弧",
        cigau: "持久",
        cigaa: "治家/持家",
        cijau: "持有",
        ziaat: "指壓",
        zidou: "知道/至到",
        zizim: "指尖",
        zijan: "指引/智人",
        zifai: "指揮/自費",
        zibiu: "指標/治標",
        zisip: "指涉",
        onlai: "案例/按例",
        onkit: "按揭",
        onziu: "按照",
        onlei: "按理",
        ongam: "按金",
        onnau: "按鈕",
        ongin: "案件/按鍵",
        waafu: "挖苦/華府",
        nowai: "挪威",
        nolin: "挪摙",
        cozit: "挫折",
        gaang: "更/耕/挭",
        hipci: "脅持/挾持",
        zukmo: "觸摸/捉摸",
        zukse: "捉蛇",
        sedak: "捨得",
        sehei: "捨棄",
        souse: "掃射",
        soufo: "掃貨",
        aazaa: "掗拃/𦜖䐱",
        zipzi: "接枝",
        cousi: "措施",
        couci: "措辭/措詞",
        miuse: "描寫",
        taizi: "提子/題字",
        taion: "提案",
        taisi: "提示",
        taiji: "提議",
        taifo: "睇火/提貨",
        aksat: "握實",
        wunzo: "援助",
        jejyu: "揶揄",
        zaabo: "揸波",
        zaace: "揸車",
        wanje: "揾嘢",
        saulo: "搜羅",
        bunuk: "搬屋",
        wudai: "烏低/摀低",
        lince: "摙車/鍊車",
        modaa: "摩打",
        motok: "摩托",
        modai: "摸底",
        mosuk: "摸熟",
        mosok: "摸索",
        mohin: "摸蜆",
        mohak: "摸黑",
        zipze: "摺遮",
        louje: "老嘢/老爺",
        sipiu: "撕票",
        silit: "撕裂",
        citzi: "設置/撤資",
        fuwai: "枯萎/撫慰",
        fujuk: "撫育",
        bojam: "播音/波音",
        kamke: "擒騎",
        kwong: "狂/鄺/擴",
        sipsi: "攝氏",
        lowai: "攞位",
        logaa: "攞假",
        lolai: "攞嚟",
        locoi: "攞彩",
        lodim: "攞掂",
        lotoi: "攞枱",
        lozau: "攞走",
        ziwun: "支援",
        zigaa: "自家/支架",
        zicyu: "支柱",
        zipiu: "支票",
        zilou: "支路",
        zinaa: "支那",
        zipui: "支配",
        zilei: "治理/支離",
        saude: "收嗲",
        goise: "改寫",
        goici: "改詞",
        guzok: "故作",
        gusau: "故手/鼓手",
        gauzo: "救助",
        gauzi: "救治/究治",
        gaufo: "救火",
        gauwu: "救護/鳩嗚",
        gauce: "苟且/救車",
        dikji: "敵意",
        diksi: "的士/敵視",
        fuliu: "敷料",
        fuhin: "敷衍",
        souji: "數以",
        souci: "數詞",
        manji: "民意/文儀",
        manzi: "文字/民智",
        manfo: "文科/文火",
        liuzi: "料子",
        cebou: "斜布",
        cedou: "斜度",
        cesin: "車綫/斜線",
        cebok: "斜膊/斜髆",
        celou: "斜路",
        cemin: "斜面",
        cetai: "斜體",
        ganje: "斤嘢",
        cikzi: "斥資",
        futau: "斧頭/褲頭",
        sanji: "新意/神醫",
        sansi: "新詩/紳士",
        jyusi: "於是/預示",
        sijyu: "施予/施與",
        siaat: "施壓",
        sizin: "施展",
        sigau: "施救",
        sibou: "施暴/私補",
        sisai: "時勢/時世",
        sifei: "是非/施肥",
        zouon: "早安",
        zouji: "早已",
        zouzi: "早知",
        honci: "看似/旱廁",
        fanam: "昏暗",
        zokje: "昨夜",
        ciuwo: "昭和",
        sifau: "是否",
        simai: "是咪",
        sijat: "是日/時日",
        sihaa: "試吓/時下",
        sidoi: "時代",
        sijam: "時任/試音",
        sifan: "時份/時分",
        sihak: "時刻",
        siguk: "時局",
        sicaa: "時差",
        sikei: "時期",
        sicoi: "時菜",
        sicuk: "時速",
        siwan: "時運",
        sizam: "時針",
        zauje: "晝夜",
        poulo: "普羅",
        zilik: "智力/致力",
        ziwai: "智慧/自慰",
        zimau: "智謀",
        amhap: "暗合",
        amjyu: "暗語/暗喻",
        amdei: "暗地",
        ambiu: "暗標",
        ampun: "暗盤",
        amziu: "暗礁",
        amsiu: "暗笑",
        amfaa: "暗花",
        amcyu: "暗處",
        amhou: "暗號",
        amgok: "暗角",
        amdou: "暗道",
        amhak: "暗黑",
        cimlo: "暹羅",
        oimui: "曖昧",
        kukzi: "曲子",
        syuse: "書寫",
        wuiji: "會議/會意",
        wuiso: "猥瑣/會所",
        wuing: "會晤",
        wuisi: "會試",
        jause: "有些",
        jauzo: "有咗/有助",
        jaudi: "有啲",
        jaudo: "有多",
        jauso: "有所",
        jaulo: "有籮",
        ciuje: "朝野",
        keizi: "期指/棋子",
        keifo: "期貨",
        mukuk: "木屋",
        mukji: "木耳",
        bunsi: "本事",
        bunji: "本意",
        bunou: "本澳",
        bunfo: "本科",
        podou: "朴刀",
        geizi: "機智/杞子",
        buiji: "杯耳",
        lamci: "林柿",
        gwozi: "過至/果子",
        gwoto: "果陀",
        zizuk: "自足/知足",
        zizit: "枝節",
        zijip: "枝葉/置業",
        zidau: "枝豆",
        fugon: "父幹/枯乾",
        funau: "腐朽/枯朽",
        fucou: "枯燥",
        fukit: "枯竭",
        toibo: "枱波/檯波",
        gaazi: "架子",
        gaaso: "枷鎖",
        mause: "某些",
        jimzi: "染指",
        jauwo: "柔和",
        caaon: "查案",
        hatsi: "核試",
        ganzi: "根治",
        kwaak: "框/𡃈",
        ondai: "案底",
        ontau: "案頭",
        leiwo: "梨渦/梨窩",
        taiso: "梯梳",
        sofaa: "梳化",
        sodaa: "梳打",
        solei: "疏離/梳理",
        sogon: "梳肝/疏肝",
        socoi: "蔬菜/梳菜",
        sobin: "梳辮",
        sotau: "梳頭/鎖頭",
        minji: "面議/棉衣",
        jezap: "椰汁",
        jejuk: "椰肉",
        jecoi: "椰菜",
        gikzi: "極之",
        kausi: "構思",
        loksi: "樂事",
        lokfu: "樂富",
        lokji: "樂意",
        lausi: "樓市",
        biubo: "標波",
        biusi: "表示/標示",
        biuzi: "標誌/標緻",
        mouji: "無意/無疑",
        mouwu: "模糊",
        ciufu: "超乎/樵夫",
        syuzi: "樹枝/樹脂",
        geice: "機車",
        waang: "橫/軭",
        jimse: "鹽蛇/檐蛇",
        gimsi: "檢視",
        cisou: "次數",
        cijat: "次日",
        cijiu: "次要",
        heifu: "欺負",
        gokek: "歌劇",
        gohau: "歌喉",
        gosau: "歌手",
        gokuk: "歌曲",
        godip: "歌碟",
        gosan: "歌神",
        gomou: "歌舞",
        gojiu: "歌謠",
        gomai: "歌迷",
        aumou: "歐姆",
        auzau: "歐洲",
        funfu: "歡呼",
        zikat: "止咳",
        zibou: "自保/止步",
        zihot: "止渴",
        zidit: "止跌",
        cihau: "此後",
        moufo: "武火",
        memou: "歪帽",
        liksi: "歷史/歷時",
        seije: "死嘢",
        seipo: "死婆",
        seifo: "死火/死貨",
        seize: "死者",
        seice: "死車",
        limsi: "殮屍",
        banji: "殯儀",
        dinsi: "電視/殿試",
        audaa: "毆打",
        aubai: "毆跛",
        audau: "毆鬥",
        mouoi: "母愛",
        houzi: "毫子/耗資",
        jinzi: "胭脂/毽子",
        manco: "民初",
        mango: "民歌",
        heigu: "氣鼓",
        kauzo: "求助",
        kauoi: "求愛",
        kauji: "求醫/球衣",
        wugau: "污垢",
        wujim: "污染",
        wunai: "污泥",
        wuzuk: "污濁",
        wuzou: "污糟",
        wumit: "污衊",
        wujuk: "污辱",
        wudim: "污點",
        heice: "汽車",
        camsi: "沉思",
        saade: "沙嗲",
        saasi: "沙士",
        saazi: "沙紙/砂紙",
        saawo: "沙鍋",
        honoi: "河內",
        hobak: "河北",
        hotou: "河套",
        holau: "河流",
        hobun: "河畔",
        hofan: "河粉",
        hodou: "河道",
        hobin: "河邊",
        hosin: "河鮮",
        jauwu: "油污/遊湖",
        zihok: "自學/治學",
        zibun: "資本/治本",
        ziliu: "資料/治療",
        zimwu: "沾污/玷污",
        bobut: "波boot",
        bokap: "波及",
        botou: "波濤/波圖",
        bodei: "波地",
        bomou: "波帽",
        bofuk: "波幅",
        bojan: "波恩",
        bodaa: "波打",
        bopai: "波批",
        bozit: "波折",
        bokuk: "波曲",
        botoi: "波枱/波檯",
        bolau: "波樓",
        boman: "波紋",
        bolaa: "波罅",
        bomai: "波迷",
        bobaa: "波霸",
        bofei: "波飛",
        naigu: "泥古",
        zyuse: "注射",
        wutzi: "活字",
        laufe: "流啡",
        lauje: "漏夜/流嘢",
        fausi: "浮屍",
        faubo: "浮波",
        hoisi: "開市/海獅",
        siuci: "消磁",
        siumo: "消磨",
        sipon: "涉案",
        fedai: "淝低",
        jamfu: "音符/淫婦",
        jammo: "淫魔",
        samou: "深奧",
        wanwo: "混和/温和",
        timzi: "添置",
        zaagu: "渣古",
        zaaje: "渣嘢/鮓嘢",
        zaazi: "渣滓",
        hotsi: "渴市",
        wubak: "湖北",
        wupok: "湖泊",
        wubun: "湖畔",
        kaufo: "溝貨",
        nikoi: "溺愛",
        mitfo: "滅火",
        zimei: "滋味/知微",
        zaisi: "滯市/祭司",
        munzo: "滿座",
        munji: "滿意",
        munse: "滿瀉",
        jyufu: "漁夫/迂腐",
        jyufo: "預科/漁火",
        lauem: "漏M",
        jinje: "演嘢",
        auzai: "漚仔",
        aujyu: "漚雨",
        moksi: "漠視",
        honzi: "漢字/漢子",
        linji: "漣漪",
        putfu: "潑婦",
        ouzau: "澳洲",
        ouduk: "澳督",
        ounau: "澳紐",
        oumun: "澳門",
        gikon: "激安",
        sapfo: "濕貨",
        fohau: "火候/課後",
        folik: "火力",
        fosai: "火勢",
        fofaa: "火花/火化",
        fomei: "貨尾/火尾",
        fobaa: "火把",
        fohei: "火起/火氣",
        fojau: "火油",
        fohoi: "火海",
        fofui: "火灰",
        fozoi: "火災",
        fojim: "火焰/火燄",
        fojit: "火熱",
        fosiu: "火燒",
        fozuk: "火燭",
        fopun: "火盆",
        fosek: "火石",
        fozin: "火箭",
        fosin: "火線",
        fogun: "火罐",
        fosit: "火舌",
        focuk: "火速",
        fozau: "火酒",
        fokim: "火鉗",
        folim: "火鐮",
        fohim: "火險",
        fogai: "火雞",
        fuici: "灰匙/灰柿",
        fuiam: "灰暗",
        zoiwo: "災禍",
        zekfo: "炙火",
        waiho: "為何",
        waizo: "為咗",
        litsi: "烈士",
        litfo: "烈火",
        wusaa: "烏紗",
        wugai: "烏雞",
        wuwan: "烏雲/胡混",
        wutau: "芋頭/烏頭",
        mouzo: "無助",
        mouci: "無恥/舞池",
        mougu: "無辜/無故",
        ziuji: "焦耳",
        jinji: "然而",
        jinsi: "現時/煙士",
        jinbo: "煙波",
        muisi: "煤屎",
        ziuse: "照射",
        siksi: "食屎/食肆",
        sukzi: "熟知",
        jitbe: "熱啤",
        jitoi: "熱愛",
        jitbo: "熱播",
        jitfu: "熱褲",
        cijit: "熾熱",
        jinso: "燕梳",
        jinwo: "燕窩",
        fumou: "父母",
        fuhai: "父系",
        fujam: "輔音/父蔭",
        fucan: "父親",
        baabi: "爸B",
        delei: "爹利",
        pince: "片車",
        lougu: "牢固/蘆菇",
        muksi: "牧師",
        mukze: "牧者",
        matzi: "物資/襪子",
        dakse: "特寫/特赦",
        dakci: "特此",
        wusin: "狐仙",
        wulei: "狐狸/護理",
        wucau: "狐臭",
        hauzi: "猴子",
        dukzi: "獨自/獨子",
        duksi: "獨市/督師",
        bolei: "玻璃",
        jinfo: "現貨",
        leifo: "理科",
        jiuji: "瑤台",
        cihei: "瓷器",
        timgu: "甜故",
        latto: "甩拖",
        latfu: "甩褲",
        tinlo: "田螺",
        tinje: "田野",
        lauji: "留意/留醫",
        waasi: "話事/畫師",
        jigei: "耳機/異己",
        jisam: "疑心/異心",
        jisou: "異數",
        jimat: "異物/衣物",
        jitai: "議題/異體",
        dipzi: "疊字",
        sodou: "疏導",
        sofat: "疏忽",
        somun: "疏門",
        jifei: "疑匪",
        jiman: "移民/疑問",
        jidim: "疑點",
        zatfu: "疾呼/疾苦",
        cisam: "痴心/癡心",
        cihon: "痴漢/癡漢",
        cicin: "痴纏/癡纏",
        cifei: "痴肥/癡肥",
        cimai: "痴迷/癡迷",
        odaan: "痾蛋",
        dinpo: "癲婆",
        peije: "皮嘢",
        peifu: "皮膚",
        punco: "盤坐",
        zikzi: "直至/直指",
        zikbo: "直播",
        honwu: "看護",
        hongu: "看顧",
        zango: "真個",
        zanzi: "真摯",
        zansi: "真是",
        zando: "真朵",
        ngaan: "眼/顏/雁",
        taije: "睇夜",
        dukje: "督爺",
        hatzi: "瞎子",
        zisam: "資深/知心",
        zisei: "致死/知死",
        zigok: "自覺/知覺",
        zicau: "知醜",
        aizai: "矮仔",
        aifaa: "矮化",
        aisiu: "矮小",
        aisai: "矮細",
        aidan: "矮躉",
        aimun: "矮門/翳悶",
        giusi: "矯視",
        seksi: "碩士/石屎",
        seklo: "石螺",
        caici: "砌辭",
        polai: "破例",
        potoi: "破台",
        pojat: "破日",
        pohei: "破氣",
        pomit: "破滅",
        powok: "破獲",
        pogau: "破舊",
        polok: "破落",
        pocyu: "破處",
        polit: "破裂",
        pocoi: "破財",
        pofai: "破費",
        lukje: "碌嘢",
        luksi: "碌士/錄事",
        lukze: "碌蔗",
        bikci: "碧池",
        bikbo: "碧波",
        cifaa: "磁化",
        citiu: "詞條/磁條",
        cisek: "磁石",
        cidip: "磁碟",
        citit: "磁鐵",
        citau: "磁頭",
        mohap: "磨合",
        mosam: "磨心",
        momit: "磨滅",
        mofui: "磨灰",
        moluk: "磨碌",
        molin: "磨練",
        sekei: "社企",
        sebou: "社保",
        sewui: "社會",
        secuk: "社畜",
        sefuk: "社福",
        sewan: "社運",
        zouuk: "祖屋/組屋",
        zoufu: "祖父",
        zouci: "造次/祖祠",
        zukho: "祝賀",
        sanci: "神似",
        sanje: "神嘢",
        sanpo: "神婆",
        sanzi: "神智/神志",
        sanfu: "辛苦/神父",
        sanse: "神社",
        sanfo: "神科",
        gambo: "禁播",
        gamgu: "禁錮",
        wohoi: "禍害",
        wogan: "禍根",
        fukzi: "福祉",
        laiji: "禮儀",
        wogon: "禾稈",
        wolim: "禾鐮",
        siban: "私奔",
        sisam: "私心",
        sijuk: "私慾",
        sijau: "豉油/私有",
        silau: "私樓",
        sicyu: "私處",
        sizau: "私酒",
        cauji: "秋意",
        cauke: "秋茄",
        fohok: "科學",
        foman: "課文/科文",
        fopou: "科普",
        fofun: "科款/課款",
        fomuk: "科目",
        fojin: "科研",
        focin: "科錢",
        zouze: "租借",
        jizik: "議席/移植",
        heiso: "稀疏",
        zikso: "積梳",
        wangu: "穩固",
        wanto: "穩妥",
        wanpo: "穩婆",
        datpo: "突破",
        wolei: "窩利/窩梨",
        wobaa: "窩巴/窩粑",
        wosam: "窩心",
        zukze: "竹蔗/續借",
        dekzi: "笛子",
        fufit: "符fit",
        fuhap: "符合",
        fuluk: "負碌/附錄",
        daiji: "第二",
        daisi: "第時",
        batze: "筆者",
        kubou: "箍煲",
        gunzi: "管治",
        dukbo: "篤波",
        cimzi: "簽字/簽紙",
        lobaa: "籮霸",
        fanci: "粉刺",
        napzi: "粒子",
        couje: "粗野/粗嘢",
        couso: "粗疏",
        wuzai: "糊仔",
        wutou: "糊塗",
        nomai: "糯米",
        zisit: "紙屑",
        zibai: "紙幣/自閉",
        zipei: "紙皮",
        zizan: "紙鎮",
        sokzi: "索子",
        zicoi: "紫菜/自裁",
        saien: "細N",
        saigo: "細個",
        saize: "細姐",
        saimo: "細摩",
        giton: "結案",
        gitse: "結社",
        sigan: "絲巾",
        sidaa: "絲打",
        simiu: "絲苗",
        lukji: "綠衣",
        waici: "維持",
        waiwu: "維護",
        ganfo: "緊火",
        capsi: "緝私",
        pinse: "編寫",
        pinze: "編者",
        wunwo: "緩和",
        linzi: "練字/蓮子",
        giufu: "繳付",
        gaizi: "雞子/繼嗣",
        gaifu: "繼父",
        gaiji: "繼而",
        kwang: "纊",
        zisan: "自身/置身",
        lolit: "羅列",
        lolak: "羅勒",
        lodau: "羅斗",
        lohon: "羅漢",
        lopun: "羅盤",
        lomaa: "羅馬",
        meifu: "美孚",
        meigu: "美股",
        jijyu: "耳語/義乳",
        kiuco: "翹楚",
        louji: "老二",
        louco: "老坐",
        loupo: "老婆",
        loufu: "老婦/老虎",
        lousi: "老師/老是",
        louwo: "老撾",
        noizo: "耐咗",
        nausi: "耨市",
        jisak: "耳塞",
        jizyu: "耳珠",
        jibui: "耳背",
        jimok: "耳膜",
        jelan: "耶撚",
        jesou: "耶穌",
        jijip: "肄業",
        siuwo: "肇禍",
        juksi: "肉絲",
        touse: "肚瀉",
        gufan: "股份",
        gubun: "股本",
        guzoi: "股災",
        gupiu: "股票",
        feipo: "肥婆",
        ginfu: "肩負",
        buifu: "背負",
        toiji: "胎兒",
        wuziu: "護照/胡椒",
        wukam: "胡琴",
        zifan: "自焚/脂粉",
        zekji: "脊醫",
        butzi: "脖子",
        jikwo: "腋窩",
        namci: "腍柿",
        fusik: "膚色/腐蝕",
        fukse: "輻射/腹瀉",
        fucin: "膚淺/負錢",
        lamuk: "臨屋",
        zipou: "自po",
        zizyu: "自主/蜘蛛",
        zisau: "自修/自首",
        zibei: "自卑/自備",
        zingo: "自我",
        zigau: "自救",
        ziduk: "自瀆",
        zijin: "自然",
        zizou: "自組",
        zifei: "自肥",
        zizin: "自薦",
        zihim: "自謙",
        zizam: "自鴆",
        cauwu: "臭狐",
        caufo: "臭貨",
        zigam: "至今/資金",
        zisiu: "至少",
        zican: "至親",
        zihip: "致歉",
        kauci: "臼齒",
        kaufu: "舅父",
        kauje: "舅爺",
        gauoi: "舊愛",
        sikmo: "色魔",
        wugok: "芋角",
        faasi: "花市",
        faado: "花朵",
        faazi: "花枝/花紙",
        faaci: "花癡",
        faagu: "花菇/花鼓",
        faace: "花車",
        hohak: "苛刻",
        hokau: "苛求",
        fulik: "苦力",
        fuhok: "苦學",
        fusam: "苦心/負心",
        fumun: "苦悶",
        funou: "苦惱",
        fuzin: "苦戰/附薦",
        fuhoi: "苦海",
        fugip: "苦澀",
        fulin: "苦練",
        fucaa: "苦茶",
        fumak: "苦麥",
        kezap: "茄汁",
        cisat: "茨實",
        caawu: "茶壺",
        caasi: "茶市/茶師",
        caazo: "茶座",
        couji: "草擬/醋意",
        couon: "草案",
        couzi: "草紙",
        cougu: "草菇",
        laiwu: "荔芋",
        daufu: "豆腐/荳腐",
        hofaa: "荷花",
        hojip: "荷葉",
        wunji: "莞爾",
        bocoi: "菠菜",
        lokdi: "落D",
        lokng: "落伍",
        lokwu: "落户",
        lokon: "落案",
        lokbo: "落波",
        lokfo: "落貨",
        lokce: "落車",
        pouzi: "葡紙",
        wulou: "葫蘆",
        sitin: "蒔田",
        cukji: "蓄意",
        zekde: "蓆嗲",
        zezaa: "蔗渣",
        zegai: "蔗雞",
        sogwo: "蔬果",
        bokho: "薄荷",
        jimai: "薏米",
        zikci: "藉此",
        miusi: "藐視",
        lolei: "蘿莉",
        fuhau: "虎口",
        fumaa: "駙馬/虎媽",
        fuhaa: "虎蝦",
        fukim: "虎鉗",
        cyuso: "處所",
        cyuzi: "處置",
        segwe: "蛇gwe",
        sezai: "蛇仔",
        selou: "蛇佬",
        sejin: "蛇宴",
        secek: "蛇尺",
        segwo: "蛇果",
        sehok: "蛇殼",
        sedau: "蛇竇",
        setau: "蛇頭",
        fodau: "蝌蚪",
        wudip: "蝴蝶",
        siham: "螄蚶",
        lomou: "螺帽/螺母",
        kitzi: "蠍子",
        waiji: "衞衣",
        jigun: "衣冠",
        jifuk: "衣服",
        jibut: "衣缽",
        jikam: "衣襟",
        biugo: "表哥",
        biuze: "表姐/表姊",
        peiwo: "被窩",
        boufo: "補課",
        lozek: "裸脊",
        lolou: "裸露",
        lotai: "裸體",
        zaiji: "製衣",
        bouji: "褒義",
        tance: "褪車",
        matfu: "襪褲",
        canzi: "親自/親子",
        canji: "襯衣/親耳",
        saiaa: "西亞",
        saion: "西安",
        saice: "西斜",
        saiau: "西歐",
        saifu: "西褲",
        saiji: "西醫",
        jiusi: "要是/要事",
        sizok: "詩作/視作",
        silik: "視力",
        sigok: "視覺/視角",
        sipou: "視譜",
        sipan: "視頻",
        cansi: "親事/陳屍",
        gokng: "覺悟",
        gunmo: "觀摩",
        fugou: "訃告",
        fuman: "訃聞",
        gaisi: "雞絲/計時",
        tokfu: "託付",
        geize: "記者",
        soufu: "訴苦",
        canso: "診所",
        zaade: "詐嗲",
        zaawu: "詐糊",
        zozau: "詛咒",
        cidin: "詞典/辭典",
        ciwui: "詞彙/詞匯",
        cigon: "詞幹",
        cigan: "詞根/黐筋",
        sihon: "試刊",
        silin: "試煉",
        sigwo: "試過",
        sijim: "試驗",
        sidim: "試點",
        waame: "話咩",
        waaze: "話啫/話嗻",
        saici: "誓詞",
        ngpun: "誤判",
        ngdou: "誤導",
        ngcaa: "誤差",
        ngwui: "誤會",
        fosat: "課室",
        fogam: "課金",
        fotai: "課題",
        fojyu: "課餘",
        tiuwo: "調和",
        zyudo: "諸多",
        zemok: "謝幕",
        zezou: "謝灶",
        zepei: "謝皮",
        zepiu: "謝票",
        zelai: "謝禮",
        maung: "謬誤",
        sikdu: "識do",
        sikzi: "識字/食指",
        sikpo: "識破",
        sikfo: "識貨",
        pouse: "譜寫",
        wugin: "護肩",
        wujam: "護蔭",
        dukze: "讀者",
        bingu: "變故",
        gukem: "谷M",
        dausi: "鬥士/豆豉",
        sizap: "豉汁",
        zyulo: "豬玀/豬羅",
        fusou: "負數",
        fugik: "負極",
        fupin: "負片",
        fumin: "負面",
        coifu: "財富",
        coije: "財爺",
        panfu: "貧苦/貧富",
        fowen: "貨van",
        fozai: "貨仔",
        fogin: "貨件",
        fokaa: "貨卡",
        foban: "貨品",
        fobai: "貨幣",
        fodai: "貨底",
        fomat: "貨物",
        fowan: "貨運",
        fomin: "貨面",
        folip: "貨𨋢",
        tipsi: "貼士",
        tipzi: "貼紙",
        jisiu: "貽笑",
        hosau: "賀壽",
        honin: "賀年",
        holai: "賀禮",
        hodin: "賀電",
        sesou: "賒數",
        banpo: "賓婆",
        banzi: "賓治",
        zatzi: "質子",
        doupe: "賭啤",
        doubo: "賭波",
        coisi: "賽事",
        coice: "賽車",
        ceklo: "赤裸",
        semin: "赦免",
        zaufo: "走火",
        fujin: "赴宴",
        fuwui: "赴會",
        fusei: "赴死",
        heico: "起初",
        heici: "起始",
        heiuk: "起屋",
        heiji: "起義/起疑",
        heido: "起朵",
        heifo: "起火/起貨",
        ciusi: "超市/超時",
        ciuzi: "超支",
        zukji: "足以",
        ditsi: "跌市",
        gance: "跟車",
        louci: "路痴/路癡",
        mauci: "踎廁",
        tekto: "踢拖",
        tekbo: "踢波",
        danfu: "躉符",
        dobei: "躲避",
        cekem: "車cam",
        cezyu: "車主",
        cezai: "車仔",
        cewai: "車位",
        cekaa: "車卡",
        cemei: "車尾",
        cesau: "車手",
        cesei: "車死",
        cepiu: "車票",
        cesan: "車身/車臣",
        cejip: "車葉",
        celit: "車裂",
        cecan: "車親",
        cefai: "車費",
        celuk: "車轆",
        cecuk: "車速",
        cecin: "車錢",
        cemun: "車門/邪門",
        cezan: "車震",
        cetau: "車頭",
        cefei: "車飛",
        fudou: "輔導",
        fubai: "輔幣",
        kiuce: "轎車",
        gwang: "轟",
        pikce: "辟邪",
        cisai: "辭世",
        cijam: "辭任",
        cisyu: "辭書",
        cizik: "辭職",
        binwu: "辯護",
        ganfu: "近乎",
        gansi: "近視",
        biksi: "迫使/逼使",
        maisi: "迷思",
        maiwu: "迷糊",
        jiksi: "逆市",
        taufo: "透火",
        zukgo: "逐個",
        zukdi: "逐啲",
        zebun: "這般",
        cukse: "速寫",
        linje: "連夜",
        linci: "連詞",
        linso: "連鎖",
        bikwo: "逼和",
        bikce: "逼車",
        wanho: "運河",
        wanfo: "運貨",
        gwodo: "過多",
        gwoje: "過夜",
        gwowu: "過户",
        gwosi: "過時",
        gwofo: "過火",
        gwoco: "過錯",
        aatzi: "遏止",
        haasi: "遐思",
        dougu: "道姑",
        doufu: "道符",
        douji: "道義",
        douze: "道謝",
        douho: "道賀",
        waiwo: "違和",
        sikji: "適宜/釋義",
        zejim: "遮掩",
        zehaa: "遮瑕",
        zemun: "遮瞞",
        zekoi: "遮蓋",
        zejam: "遮蔭",
        zebai: "遮蔽",
        zecau: "遮醜",
        cihaa: "遲下/遲吓",
        ciwun: "遲緩",
        cinji: "遷移",
        bingo: "邊個",
        bindi: "邊啲",
        locap: "邏輯",
        naamo: "那麼",
        cenim: "邪念",
        cehei: "邪氣",
        jukdi: "郁啲",
        peiji: "鄙夷",
        peisi: "鄙視",
        puisi: "配匙",
        puizi: "配置",
        puigu: "配股",
        zauwo: "酒渦/酒窩",
        cauze: "酬謝",
        hukci: "酷似",
        hukoi: "酷愛",
        causi: "醜事",
        cauok: "醜惡",
        jibou: "醫保",
        jihok: "醫學",
        jiguk: "醫局",
        jezai: "野仔",
        jehap: "野合",
        jezin: "野戰",
        jesau: "野獸",
        jefaa: "野花",
        jecou: "野草",
        jezyu: "野豬",
        jegai: "野雞",
        zambo: "針波",
        zamce: "針車",
        zamzi: "針黹",
        siuon: "銷案",
        cosyu: "鋤書",
        cosei: "鋤死",
        goeci: "鋸齒",
        sekzi: "錫紙",
        cosat: "錯失",
        cosau: "錯手",
        colok: "錯落",
        cogok: "錯覺",
        cogwo: "錯過",
        copui: "錯配",
        wotip: "鍋貼",
        solin: "鎖鏈",
        titzi: "鐵枝",
        munsi: "門市/門匙",
        munwu: "門户",
        munso: "門鎖",
        baiai: "閉翳",
        hoipi: "開P",
        hoigu: "開估/開古",
        hoico: "開初",
        hoije: "開夜",
        hoici: "開始",
        hoiwu: "開户",
        hoito: "開拖",
        hoizi: "開支",
        hoibo: "開波",
        hoifo: "開火",
        hoilo: "開鑼/開羅",
        hoice: "開車",
        hoiso: "開鎖",
        haizi: "閪吱",
        zosak: "阻塞",
        zozit: "阻截",
        zozai: "阻滯",
        aakiu: "阿Q",
        aazoe: "阿ger",
        aasoe: "阿sir",
        aajat: "阿一",
        aamun: "阿門/阿們",
        aasuk: "阿叔",
        aasei: "阿四",
        aakam: "阿妗",
        aamui: "阿妹",
        aasim: "阿嬋",
        aasam: "阿嬸",
        aamou: "阿毛",
        aafuk: "阿福",
        aakap: "阿給",
        aakau: "阿舅",
        aamau: "阿茂",
        aazyu: "阿豬",
        aabai: "阿跛",
        aafei: "阿飛",
        aalai: "阿麗",
        fugin: "附件",
        fulai: "附例",
        fusuk: "附屬",
        fucit: "附設",
        fugan: "附近",
        puico: "陪坐",
        jamdi: "陰啲",
        jamam: "陰暗",
        jamzi: "陰枝",
        jamai: "陰翳",
        canci: "陳詞",
        touje: "陶冶",
        himse: "險些",
        himok: "險惡",
        himzo: "險阻",
        cogei: "雛妓",
        gaimo: "雞摩",
        gaiwu: "雞糊",
        leiji: "離異",
        wanji: "雲耳",
        dinzi: "電子",
        dinwu: "電弧",
        dinci: "電磁/電池",
        dinbo: "電波/顛簸",
        dinho: "電荷/電賀",
        dince: "電車",
        dinzo: "電阻",
        feiji: "非議",
        minfu: "面褲",
        minsi: "面試/麪豉",
        onmaa: "鞍馬",
        jamci: "音痴/音癡",
        wansi: "韻事",
        powai: "頗為",
        tauku: "頭箍",
        tauce: "頭車",
        taulo: "頭鑼",
        fonap: "顆粒",
        gukap: "顧及",
        gugei: "顧忌",
        piuji: "飄移",
        biuce: "飆車",
        feice: "飛車",
        feici: "飛馳",
        sikje: "食嘢",
        sikwu: "食糊",
        jamje: "飲嘢",
        jamgo: "飲歌",
        ngobo: "餓波",
        jyubo: "餘波",
        saubo: "首播",
        maafu: "馬虎/馬伕",
        maace: "馬車",
        maaon: "馬鞍",
        bokfo: "駁火",
        tobui: "駝背",
        toniu: "鴕鳥/駝鳥",
        lokto: "駱駝",
        kegip: "騎劫",
        kelau: "騎樓",
        pinzi: "騙子",
        pinon: "騙案",
        lozai: "騾仔",
        jimsi: "驗屍",
        gougu: "高估",
        goufu: "高呼",
        gougo: "高歌",
        goubo: "高波",
        wusou: "鬍鬚",
        dauzi: "鬥志",
        daubo: "鬥波",
        fuing: "魁梧",
        molik: "魔力",
        motau: "魔頭",
        louse: "魯蛇",
        aapin: "鴉片",
        fuzat: "麩質",
        minwu: "麪糊",
        nimfu: "黏附",
        cidai: "黐底",
        cifai: "黐肺",
        hakam: "黑暗",
        hakje: "黑夜",
        haksi: "黑絲",
        hakce: "黑車",
        makoi: "默哀",
        makse: "默寫",
        dimzi: "點知/點止",
        dimaa: "點呀/點啊",
        dimgo: "點歌",
        dimfo: "點火",
        amjin: "黯然",
        gulai: "鼓勵",
        gucou: "鼓噪",
        gupei: "鼓皮",
        gumok: "鼓膜",
        syumo: "鼠摸",
        ngsyu: "鼯鼠",
        beizi: "鼻子",
        napno: "𣲷懦/𥹉懦",
        lomei: "𤓓味",
      },
      La = [
        "laisi",
        "godou",
        "citiu",
        "soeng",
        "dolok",
        "zicin",
        "douzi",
        "geido",
        "siumo",
        "zibun",
        "fujan",
        "jauzo",
        "gauap",
        "gwaan",
        "sihau",
        "jatsi",
        "jansi",
        "sihak",
        "soeng",
        "lousi",
        "ngpun",
        "zokze",
        "kwong",
        "sizyu",
        "jisik",
        "cezai",
        "zisik",
        "binwu",
        "fudou",
        "datpo",
        "cauok",
        "fogei",
        "kwong",
        "zaang",
        "gaawo",
        "ngaai",
        "aasam",
        "seksi",
        "sauzi",
        "sukse",
        "sauci",
        "sewan",
        "hatji",
        "fosai",
        "goeng",
        "leizi",
        "hobit",
        "molik",
        "fomuk",
        "zausi",
        "sausi",
        "zilau",
        "laaif",
        "sihou",
        "jesik",
        "jaudi",
        "noiji",
        "hokze",
        "siksi",
        "ngaak",
        "gwaai",
        "oihou",
        "zosau",
        "zoeng",
        "soeng",
        "laulo",
        "loeng",
        "cingu",
        "waici",
        "samje",
        "jiliu",
        "jamje",
        "zijau",
        "zizyu",
        "batco",
        "jinji",
        "sozai",
        "jauzi",
        "coeng",
        "laang",
        "zibei",
        "baaak",
        "feipo",
        "bouwu",
        "dakji",
        "sikje",
        "citsi",
        "haime",
        "naigu",
        "mimou",
        "pocyu",
        "bolei",
        "zojau",
        "zisiu",
        "gaafe",
        "sifat",
        "zyuzi",
        "coeng",
        "jiluk",
        "hoeng",
        "biusi",
        "jiwui",
        "loupo",
        "daapo",
        "miuse",
        "seksi",
        "saifu",
        "fanzi",
        "gaaze",
        "fatsi",
        "zisai",
        "jamho",
        "sewui",
        "feisi",
        "keiji",
        "laizi",
        "samsi",
        "simai",
        "holok",
        "joeng",
        "soeng",
        "kausi",
        "hogun",
        "loufu",
        "sisin",
        "hipzo",
        "lokce",
        "saasi",
        "keici",
        "zikzi",
        "zyuuk",
        "haiaa",
        "zyuci",
        "zidou",
        "fuhin",
        "gugai",
        "daifu",
        "waizi",
        "coeng",
        "zimui",
        "jatdi",
        "tojin",
        "linso",
        "sesiu",
        "gewaa",
        "douci",
        "modaa",
        "zimei",
        "sosiu",
        "bitzi",
        "boksi",
        "ngaak",
        "canzi",
        "bindi",
        "jicin",
        "gikzi",
        "batgu",
        "siman",
        "kwaak",
        "zigam",
        "zobin",
        "jiwai",
        "jigaa",
        "gokzi",
        "coeng",
        "zyudo",
        "gojan",
        "gujan",
        "cemei",
        "lolai",
        "zyuji",
        "limci",
        "ngaam",
        "bunfo",
        "lomaa",
        "foban",
        "sigei",
        "sozyu",
        "faizi",
        "japuk",
        "sisok",
        "jauji",
        "jamji",
        "noeng",
        "fucai",
        "wudip",
        "sisin",
        "fulik",
        "ngaan",
        "biugo",
        "zidak",
        "aasuk",
        "samoi",
        "fohok",
        "beioi",
        "hoeng",
        "joeng",
        "loeng",
        "gwaai",
        "zikzi",
        "sikei",
        "sinok",
        "coeng",
        "jausi",
        "silou",
        "tipsi",
        "houzi",
        "sogin",
        "joeng",
        "pousi",
        "manfo",
        "batho",
        "dimzi",
        "saiji",
        "honzi",
        "maang",
        "todei",
        "zigok",
        "loeng",
        "aasoe",
        "hipci",
        "bikce",
        "mfong",
        "jinci",
        "hipji",
        "hoeng",
        "oikau",
        "laisi",
        "japuk",
        "gamzi",
        "daisi",
        "caizi",
        "mousi",
        "joeng",
        "toici",
        "bouzi",
        "jizik",
        "hakam",
        "liusi",
        "laiji",
        "fuhap",
        "sijau",
        "jyuji",
        "haang",
        "sisat",
        "jiziu",
        "peisi",
        "zoume",
        "mouji",
        "fogei",
        "zaang",
        "mtung",
        "zizai",
        "jikon",
        "batji",
        "heico",
        "fogei",
        "fesik",
        "baang",
        "zifai",
        "sikzi",
        "jihei",
        "houbo",
        "coisi",
        "sigaa",
        "taiji",
        "hapfu",
        "zyuji",
        "cijyu",
        "gwodo",
        "aizai",
        "fulin",
        "siugu",
        "hoibo",
        "janci",
        "siwai",
        "dobun",
        "aazai",
        "fujyu",
        "canoi",
        "onlok",
        "laizi",
        "loeng",
        "joeng",
        "guzyu",
        "zojik",
        "sausi",
        "aamaa",
        "gukap",
        "dousi",
        "haaci",
        "tinci",
        "gunfu",
        "saazi",
        "hoizi",
        "ceklo",
        "minsi",
        "mougu",
        "fujyu",
        "ziwai",
        "ganfu",
        "aamaa",
        "jimei",
        "biuzi",
        "coije",
        "zoeng",
        "saigo",
        "canso",
        "sijan",
        "simaa",
        "jifan",
        "ziwai",
        "dinbo",
        "joeng",
        "loeng",
        "gudoi",
        "ziwun",
        "simin",
        "zibiu",
        "honci",
        "konsi",
        "gosau",
        "guduk",
        "fugiu",
        "tinji",
        "aaiti",
        "fozin",
        "touon",
        "siman",
        "sanfo",
        "gujan",
        "houci",
        "zikau",
        "dausi",
        "wuiji",
        "cizou",
        "soeng",
        "waazi",
        "jifan",
        "zihau",
        "faisi",
        "sigin",
        "jesou",
        "sauwu",
        "zouoi",
        "dakdo",
        "zijat",
        "hokei",
        "zoeng",
        "soeng",
        "tinzi",
        "onwai",
        "aaidi",
        "pinji",
        "aamaa",
        "aasou",
        "ukzyu",
        "cizou",
        "zijau",
        "fuhou",
        "ngaai",
        "gaaji",
        "sousi",
        "jauso",
        "siguk",
        "howai",
        "zouzi",
        "jiusi",
        "jyuci",
        "zikci",
        "gotau",
        "hipji",
        "jikap",
        "sijat",
        "zitdo",
        "onziu",
        "sigwo",
        "gozan",
        "geifu",
        "dimaa",
        "hoice",
        "sedai",
        "janzi",
        "maaon",
        "jidou",
        "laizi",
        "jaudo",
        "coeng",
        "coeng",
        "ausam",
        "mouji",
        "zoeng",
        "gezek",
        "waizi",
        "zoeng",
        "fugan",
        "keiou",
        "siksi",
        "fugip",
        "zokau",
        "ziwaa",
        "kwong",
        "gwaan",
        "fobai",
        "dosam",
        "sitai",
        "jamam",
        "siusi",
        "hoeng",
        "noizo",
        "geize",
        "fugaa",
        "tohip",
        "sitou",
        "seize",
        "japbo",
        "zimin",
        "oisik",
        "samzi",
        "soeng",
        "wujim",
        "zoici",
        "sigei",
        "geiho",
        "jause",
        "dousi",
        "jiliu",
        "zoeng",
        "samsi",
        "coeng",
        "zukji",
        "hoici",
        "ziliu",
        "zoeng",
        "mouje",
        "jisuk",
        "tinsi",
        "howai",
        "timgu",
        "jauji",
        "jihok",
        "jigau",
        "jauji",
        "zoeng",
        "ngaau",
        "jisik",
        "jatzi",
        "sikfo",
        "sifan",
        "ngwui",
        "loizi",
        "dinzi",
        "jiman",
        "sijat",
        "dinsi",
        "gokuk",
        "zijam",
        "cisek",
        "aatau",
        "bunji",
        "satsi",
        "gaaze",
        "lauji",
        "cizuk",
        "samon",
        "ngaau",
        "bunje",
        "guman",
        "zaace",
        "sammo",
        "waazi",
        "biusi",
        "simou",
        "zukgo",
        "zousi",
        "mding",
        "louzi",
        "zitai",
        "ziwui",
        "zijyu",
        "cisou",
        "naase",
        "oumun",
        "zifan",
        "jizai",
        "paang",
        "zowai",
        "zoeng",
        "pikei",
        "zipui",
        "cijiu",
        "emgei",
        "joeng",
        "jitai",
        "gujin",
        "zikzi",
        "soeng",
        "gwang",
        "zoeng",
        "loeng",
        "maami",
        "hoeng",
        "belei",
        "aijaa",
        "poulo",
        "jyuho",
        "ongin",
        "fusiu",
        "tinsi",
        "daufu",
        "koeng",
        "autou",
        "heioi",
        "mouzi",
        "zinoi",
        "sidoi",
        "daang",
        "haine",
        "houji",
        "taisi",
        "sigaa",
        "haang",
        "simat",
        "souji",
        "wudai",
        "jatje",
        "zigan",
        "jyuji",
        "ngaai",
        "wuiji",
        "zouje",
        "joeng",
        "zimok",
        "cizuk",
        "mouzi",
        "jigin",
        "wulou",
        "zitai",
        "japzo",
        "zigei",
        "zisou",
        "zihai",
        "mewaa",
        "zigai",
        "guman",
        "zigei",
        "oufaa",
        "siman",
        "dojyu",
        "bingo",
        "sicin",
        "joeng",
        "soeng",
        "siciu",
        "cekaa",
        "cisin",
        "amhak",
        "caadi",
        "zoeng",
        "gowai",
        "tauzi",
        "ziksi",
        "baasi",
        "sakce",
        "syuse",
        "keisi",
        "ngong",
        "waiho",
        "dodak",
        "zisai",
        "sojau",
        "liksi",
        "baang",
        "wusou",
        "coifu",
        "waang",
        "guzai",
        "soeng",
        "leifo",
        "ciwui",
        "goufu",
        "hoito",
        "hokfo",
        "diesi",
        "zisai",
        "dimaa",
        "gugaa",
        "lokji",
        "cobou",
        "ziliu",
        "samji",
        "zatji",
        "geico",
        "jimwu",
        "zidin",
        "souzi",
        "oukei",
        "sigok",
        "gulou",
        "hojan",
        "zoeng",
        "batfu",
        "manzi",
        "sanfu",
        "holin",
        "zikbo",
        "maizi",
        "sause",
        "litce",
        "ouwan",
        "zukho",
        "hatji",
        "zoize",
        "hopaa",
        "gamci",
        "gimce",
        "gaang",
        "zinsi",
        "gaang",
        "zisau",
        "cinze",
        "manji",
        "joeng",
        "loufu",
        "jisik",
        "batze",
        "fojim",
        "oijan",
        "zisan",
        "maang",
        "ouzau",
        "fofaa",
        "ziugu",
        "zijyu",
        "cotau",
        "janji",
        "zijyu",
        "zitau",
        "jilai",
        "joeng",
        "ngaai",
        "diksi",
        "jimou",
        "jigei",
        "fensi",
        "bouon",
        "gwaat",
        "beici",
        "wuigu",
        "jiman",
        "cizik",
        "gamze",
        "siusi",
        "lauje",
        "paang",
        "oimui",
        "gunzi",
        "soeng",
        "keisi",
        "jauwo",
        "gotai",
        "zizoi",
        "hauze",
        "cisiu",
        "zigaa",
        "auzau",
        "douau",
        "matje",
        "jausi",
        "gauap",
        "waizo",
        "zoeng",
        "jimin",
        "zouji",
        "wuziu",
        "gulai",
        "sesau",
        "mouzo",
        "soeng",
        "sihau",
        "amdei",
        "zoeng",
        "nitau",
        "zyuji",
        "loeng",
        "cidin",
        "jimji",
        "onwan",
        "bezau",
        "sijan",
        "mause",
        "hoisi",
        "dosiu",
        "naago",
        "hofau",
        "gwaat",
        "sijip",
        "caang",
        "joeng",
        "sikzi",
        "pinse",
        "gwosi",
        "jizin",
        "jatje",
        "gokng",
        "satng",
        "gwong",
        "saigu",
        "mouci",
        "loeng",
        "tosau",
        "naamo",
        "zipiu",
        "bouzi",
        "fujau",
        "jauzo",
        "buifu",
        "sijim",
        "ukkei",
        "neine",
        "saang",
        "siwai",
        "hamji",
        "dukzi",
        "batzi",
        "jatse",
        "joeng",
        "zijiu",
        "holoi",
        "solou",
        "faisi",
        "canzi",
        "dimfo",
        "zidou",
        "caaji",
        "zijan",
        "zatfu",
        "gobit",
        "mouji",
        "sofaa",
        "wutou",
        "honzi",
        "pomit",
        "aabaa",
        "cogwo",
        "dakzo",
        "jyusi",
        "jijuk",
        "zigok",
        "gausi",
        "waiaa",
        "zisou",
        "jiloi",
        "gwong",
        "batsi",
        "dince",
        "colin",
        "aamaa",
        "zoeng",
        "daazi",
        "bunsi",
        "seizi",
        "mseon",
        "ngaam",
        "fuhot",
        "waasi",
        "zimaa",
        "hobat",
        "ginci",
        "nibin",
        "eikei",
        "dosou",
        "geisi",
        "zoeng",
        "kapsi",
        "hobei",
        "fumou",
        "zijin",
        "sammo",
        "nggun",
        "lausi",
        "bouci",
        "joeng",
        "gwaai",
        "jatsi",
        "gudin",
        "sifei",
        "leizi",
        "sijan",
        "zoeng",
        "waiwu",
        "ngaan",
        "zitiu",
        "sihaa",
        "jihau",
        "fucin",
        "fosiu",
        "fotai",
        "siuze",
        "dakgo",
        "minzi",
        "cojat",
        "caang",
        "saisi",
        "joeng",
        "coeng",
        "saisi",
        "fumin",
        "ziman",
        "jejam",
        "haang",
        "mouco",
        "oksam",
        "simat",
        "peije",
        "hosik",
        "gaiji",
        "zoeng",
        "wuzou",
        "sedak",
        "sihou",
        "zoeng",
        "munji",
        "zaufo",
        "maang",
        "fujan",
        "mitsi",
        "ziksi",
        "cisin",
        "zisan",
        "zoifu",
        "sisai",
        "zidim",
        "fanzi",
        "peifu",
        "zidou",
        "tause",
        "zisam",
        "fanfu",
        "waame",
        "sinzi",
        "gupiu",
        "soeng",
        "jitou",
        "cemun",
        "zigam",
        "soeng",
        "matje",
        "jiset",
        "maang",
        "sizan",
        "dakji",
        "keiji",
        "sihaa",
        "onsik",
        "zizai",
        "dukze",
        "cidou",
        "soeng",
        "dakdi",
        "zimou",
        "jisau",
        "jinsi",
        "waisi",
        "hoksi",
        "locap",
        "hamwu",
        "daiji",
        "baang",
        "zoiji",
        "ngong",
        "hakji",
        "paang",
        "cihon",
        "paang",
        "ginji",
        "matzi",
        "loize",
        "fukap",
        "hobei",
        "dousi",
        "hoeng",
        "goise",
        "zilit",
        "mousi",
        "hogin",
        "hinsi",
        "cousi",
        "jausi",
        "zihou",
        "kafei",
        "fanam",
        "baton",
        "coeng",
        "hoeng",
        "sansi",
        "emkei",
        "cigik",
        "dakzi",
        "zingo",
        "funfu",
        "cisin",
        "sehei",
        "hapsi",
        "zolei",
        "houje",
        "jesam",
        "mougu",
        "mouwu",
        "jigaa",
        "zinsi",
        "hoeng",
        "jyufo",
        "jitoi",
        "goeng",
        "coeng",
        "daabo",
        "mousi",
        "jatsi",
        "ziksi",
        "jinzi",
        "loeng",
        "zihaa",
        "saang",
        "jauzi",
        "sozoi",
        "zihou",
        "wuziu",
        "zecin",
        "bokje",
        "ziduk",
        "coeng",
        "jijin",
        "samsi",
        "sezok",
        "noiho",
        "jihaa",
        "zihou",
        "kwong",
        "zimou",
        "moksi",
        "aazau",
        "dojyu",
        "codai",
        "sinzi",
        "ziufu",
        "soeng",
        "ciusi",
        "zisik",
        "house",
        "guzok",
        "zaawo",
        "siwai",
        "sifau",
        "sodak",
        "onsam",
        "fosat",
        "jansi",
        "zidak",
        "deizi",
        "jatzi",
        "tekbo",
        "dijan",
        "haazi",
        "cogok",
        "tipzi",
        "sikji",
        "zoeng",
        "gwoje",
        "fusau",
        "jauji",
        "jihei",
        "zitmo",
        "dohau",
        "houdo",
        "sikje",
        "zammo",
        "fucan",
        "waizi",
        "lamsi",
        "gohaa",
        "samji",
        "batci",
        "japfo",
        "coeng",
        "sowai",
        "gugam",
        "mouji",
        "jihei",
      ],
      Ta = [
        "lozek",
        "satci",
        "zikce",
        "linci",
        "sigun",
        "bikce",
        "jaufo",
        "bodei",
        "aksat",
        "secek",
        "pouzi",
        "cisau",
        "sihei",
        "punpe",
        "zikce",
        "dauzi",
        "zizik",
        "gaafo",
        "zitzi",
        "noizi",
        "mango",
        "segwe",
        "zauzi",
        "zaade",
        "aafei",
        "funau",
        "hekfu",
        "keime",
        "zitzi",
        "kaufu",
        "moufu",
        "seice",
        "bojam",
        "fomin",
        "siban",
        "haufu",
        "engei",
        "ounou",
        "cewai",
        "guhon",
        "incyu",
        "ngcaa",
        "segwe",
        "difoe",
        "wujin",
        "cyuzi",
        "toniu",
        "jaang",
        "wuzik",
        "zezou",
        "cihau",
        "cigan",
        "tokfu",
        "oikap",
        "daawo",
        "zyulo",
        "cebok",
        "fuzuk",
        "punci",
        "banpo",
        "himzo",
        "fuzyu",
        "boman",
        "toibo",
        "daksi",
        "womei",
        "seisi",
        "zouuk",
        "gugei",
        "fowen",
        "jauoi",
        "touzi",
        "baaci",
        "leiwo",
        "nousi",
        "aakiu",
        "cosei",
        "jaulo",
        "sisan",
        "gauwu",
        "cukji",
        "zicek",
        "lauem",
        "saipo",
        "ngoke",
        "cauke",
        "sanci",
        "siliu",
        "gigat",
        "cecuk",
        "cehaa",
        "saude",
        "zimau",
        "wojam",
        "mofui",
        "napno",
        "janfu",
        "beizi",
        "jyuzi",
        "siwan",
        "waiji",
        "futau",
        "hokce",
        "beisi",
        "heifo",
        "fatji",
        "sanzi",
        "guzik",
        "zizat",
        "fatge",
        "janje",
        "faaci",
        "zinfo",
        "jyuzi",
        "wuiso",
        "cimut",
        "okfaa",
        "jikei",
        "siliu",
        "onpui",
        "daaji",
        "silin",
        "lamuk",
        "gauzi",
        "doici",
        "boufu",
        "zaaje",
        "folou",
        "guzap",
        "zepei",
        "noizi",
        "solei",
        "botoi",
        "touaa",
        "laici",
        "citit",
        "fatto",
        "aapin",
        "aacaa",
        "fukzi",
        "wudim",
        "jidak",
        "cekau",
        "kaufo",
        "zibou",
        "hotou",
        "zapsi",
        "cidai",
        "wohoi",
        "bikbo",
        "tauje",
        "jyuso",
        "keibi",
        "sifun",
        "gunim",
        "zihei",
        "leiem",
        "kauji",
        "folim",
        "matfu",
        "jitbe",
        "jinje",
        "gaaci",
        "dimgo",
        "jamai",
        "beisi",
        "singu",
        "boufo",
        "aacaa",
        "fuham",
        "giusi",
        "zejyu",
        "cesin",
        "cedou",
        "cebou",
        "jimai",
        "zoufu",
        "jejyu",
        "binji",
        "funau",
        "daafo",
        "gusuk",
        "niuwu",
        "munso",
        "wutau",
        "louci",
        "jauwu",
        "fuwai",
        "zukzi",
        "zijip",
        "biksi",
        "folip",
        "feizi",
        "laiwu",
        "hohei",
        "zouze",
        "cuksi",
        "kotoi",
        "ciwai",
        "tikje",
        "fenzi",
        "sijam",
        "uksim",
        "fumak",
        "sofat",
        "gokek",
        "honse",
        "segik",
        "kaisi",
        "fausi",
        "jukdi",
        "fupei",
        "gaasi",
        "cijau",
        "ganje",
        "jemei",
        "ounau",
        "goubo",
        "seipo",
        "hosau",
        "fupei",
        "fopou",
        "janze",
        "nisyu",
        "hoiso",
        "jamci",
        "bakoi",
        "focin",
        "fogun",
        "zehaa",
        "aaudi",
        "gujau",
        "futim",
        "ziuzi",
        "munsi",
        "sifun",
        "jibut",
        "bofei",
        "sidau",
        "fojit",
        "zaagu",
        "zisit",
        "jinng",
        "gusan",
        "wujuk",
        "saufu",
        "cosyu",
        "sesat",
        "cinji",
        "couzi",
        "holau",
        "sauco",
        "jibin",
        "zyufo",
        "hozai",
        "powok",
        "gusau",
        "miusi",
        "mitfo",
        "fuluk",
        "couon",
        "doubo",
        "gougo",
        "jeang",
        "ciwun",
        "saufo",
        "saufo",
        "sidai",
        "touji",
        "homaa",
        "gupik",
        "jimeu",
        "zibou",
        "zifei",
        "zotoi",
        "titzi",
        "fujiu",
        "tiuwo",
        "eipin",
        "daalo",
        "hoilo",
        "tinlo",
        "minwu",
        "zizuk",
        "himok",
        "baabi",
        "kukzi",
        "faise",
        "sidaa",
        "aasei",
        "kauje",
        "fozoi",
        "beisi",
        "zesai",
        "gukem",
        "peigu",
        "saaaa",
        "ouzai",
        "heice",
        "hoije",
        "hipno",
        "hohei",
        "wanje",
        "gusau",
        "zizaa",
        "gaimo",
        "tohim",
        "bezyu",
        "zicoi",
        "akwan",
        "namci",
        "fupin",
        "beigo",
        "socoi",
        "lokng",
        "sinji",
        "aaban",
        "eizai",
        "gauzi",
        "zauzi",
        "tobui",
        "daigu",
        "siham",
        "waafu",
        "gauce",
        "fenzi",
        "dikbo",
        "zukdi",
        "fugon",
        "bobut",
        "diusi",
        "saizi",
        "bokoi",
        "gulei",
        "sigap",
        "sibui",
        "touje",
        "cesin",
        "hapfo",
        "jimat",
        "fotau",
        "putfu",
        "sizuk",
        "memou",
        "tousi",
        "sogon",
        "zemje",
        "wusaa",
        "zelei",
        "wunoi",
        "zizin",
        "minni",
        "jyuze",
        "sezik",
        "sisau",
        "sihok",
        "gumou",
        "biuze",
        "bocoi",
        "oukem",
        "oisau",
        "banfu",
        "gumou",
        "saugu",
        "hopei",
        "catze",
        "seisi",
        "zyulo",
        "gusyu",
        "kapzi",
        "sigon",
        "cinfo",
        "zinci",
        "feizi",
        "zolok",
        "zukze",
        "sidok",
        "zinfu",
        "lopun",
        "wogan",
        "hatci",
        "daizi",
        "oufui",
        "jimse",
        "douho",
        "wunai",
        "meigu",
        "binji",
        "celuk",
        "holai",
        "fohei",
        "saize",
        "gouzi",
        "sizap",
        "zukse",
        "gauzo",
        "maazi",
        "fuhaa",
        "feice",
        "jesiu",
        "seklo",
        "muksi",
        "honji",
        "heiji",
        "sijin",
        "japsi",
        "luksi",
        "aakap",
        "ngwan",
        "banci",
        "gaaso",
        "gamgu",
        "bokap",
        "sisan",
        "daazo",
        "hosin",
        "zizat",
        "jutup",
        "sikfu",
        "bomui",
        "causi",
        "hobak",
        "sisau",
        "jijan",
        "akjiu",
        "sidim",
        "fohei",
        "teisi",
        "jitfu",
        "tozai",
        "ngsyu",
        "sinho",
        "sigon",
        "zogaa",
        "gitse",
        "audau",
        "lobat",
        "zozit",
        "paasi",
        "haasi",
        "fobun",
        "cidip",
        "wanfo",
        "maati",
        "gujau",
        "fansi",
        "mohap",
        "mouoi",
        "touwu",
        "posik",
        "zizou",
        "fuhai",
        "bunou",
        "befui",
        "gukgu",
        "cekei",
        "dinci",
        "wudou",
        "tobiu",
        "caiji",
        "aanti",
        "tinfu",
        "aisai",
        "giufu",
        "saiaa",
        "gwozi",
        "gohau",
        "zaaje",
        "minji",
        "haizi",
        "janse",
        "difen",
        "bikfo",
        "daibo",
        "couci",
        "daksi",
        "maafu",
        "zosak",
        "ukjyu",
        "heizi",
        "sisan",
        "fugun",
        "heizi",
        "sehaa",
        "secuk",
        "sizok",
        "bikwo",
        "dikji",
        "folik",
        "pince",
        "sicau",
        "cibei",
        "fuhok",
        "aifaa",
        "cigan",
        "cijit",
        "gugou",
        "kwoli",
        "naubo",
        "munsi",
        "fuing",
        "nisyu",
        "hokau",
        "fanje",
        "lokto",
        "butzi",
        "cefai",
        "waafu",
        "womuk",
        "zemaa",
        "mansi",
        "bofuk",
        "heiji",
        "cihaa",
        "hukci",
        "siluk",
        "cihaa",
        "nuksi",
        "zoizo",
        "nibok",
        "lomou",
        "jigun",
        "zipzi",
        "gosyu",
        "bozit",
        "sipan",
        "fuksi",
        "saion",
        "noifu",
        "zoion",
        "aamou",
        "fuiam",
        "timzi",
        "paace",
        "louwo",
        "nizan",
        "ligaa",
        "cejan",
        "jejau",
        "haafo",
        "beisi",
        "ziuji",
        "hatzi",
        "aabai",
        "gonfo",
        "noufo",
        "aakam",
        "cimai",
        "logaa",
        "gusik",
        "fucou",
        "jimok",
        "hobun",
        "faace",
        "jibui",
        "jijip",
        "mauci",
        "zaisi",
        "lobat",
        "zoisi",
        "sezoi",
        "hohan",
        "dikbo",
        "fohim",
        "jibin",
        "hanco",
        "ankou",
        "mansi",
        "puigu",
        "difen",
        "canji",
        "silau",
        "jaang",
        "cefei",
        "doifo",
        "domaa",
        "munse",
        "sanzi",
        "zitse",
        "fupan",
        "gusou",
        "jaufu",
        "kauze",
        "fukfo",
        "pohei",
        "jifuk",
        "kezap",
        "folou",
        "oigaa",
        "faado",
        "souse",
        "japng",
        "zihok",
        "sapfo",
        "wugok",
        "jifau",
        "fuwui",
        "pifet",
        "sejin",
        "sanji",
        "ngoke",
        "pogau",
        "cohok",
        "cimou",
        "hauci",
        "saizi",
        "deiwu",
        "fansi",
        "mezaa",
        "momit",
        "lokdi",
        "wuwai",
        "zicyu",
        "godip",
        "wohei",
        "aakau",
        "ginfu",
        "mosam",
        "sauji",
        "sipsi",
        "cinfu",
        "futau",
        "aacaa",
        "ngjap",
        "wunji",
        "fosou",
        "wohou",
        "fugin",
        "sisuk",
        "linje",
        "tauon",
        "banji",
        "kaizi",
        "coizi",
        "zekde",
        "pitou",
        "deibo",
        "sauce",
        "bodaa",
        "amcyu",
        "onjan",
        "setau",
        "zodai",
        "daibi",
        "sihon",
        "hoilo",
        "ngguk",
        "kaije",
        "ougei",
        "zizim",
        "wanpo",
        "kubou",
        "futim",
        "punon",
        "jikam",
        "giuwu",
        "gupei",
        "makse",
        "aajan",
        "cidik",
        "sesou",
        "nikoi",
        "bouse",
        "noifo",
        "wugin",
        "odaan",
        "wolei",
        "cifaa",
        "amjyu",
        "locoi",
        "fusai",
        "hofan",
        "behok",
        "zokci",
        "lamgo",
        "syuzi",
        "zinap",
        "heisi",
        "jauwu",
        "zimun",
        "cansi",
        "fodau",
        "waiwo",
        "sigiu",
        "fuliu",
        "sijin",
        "banfu",
        "gaizi",
        "saice",
        "sikwu",
        "batwo",
        "fufit",
        "bakgu",
        "kaize",
        "laasi",
        "cehei",
        "tousi",
        "cenim",
        "hapgu",
        "wuzyu",
        "jiksi",
        "gunsi",
        "bomai",
        "ngjam",
        "ukkai",
        "jijap",
        "jikzi",
        "silei",
        "okduk",
        "zauzi",
        "semin",
        "saufu",
        "fukgu",
        "wokki",
        "touci",
        "aazyu",
        "fupei",
        "jejau",
        "cebok",
        "zehau",
        "hatci",
        "wansi",
        "meizi",
        "kaasi",
        "cemin",
        "dipzi",
        "somun",
        "zando",
        "maafu",
        "sipou",
        "zosat",
        "fiusi",
        "hobou",
        "taizi",
        "wusin",
        "heizi",
        "zicoi",
        "zimak",
        "polit",
        "zinji",
        "jaton",
        "tekto",
        "gatsi",
        "giton",
        "sanse",
        "angji",
        "aamau",
        "zitzi",
        "louco",
        "lohon",
        "siuho",
        "peiji",
        "zican",
        "louci",
        "gingu",
        "couji",
        "moupo",
        "jiwan",
        "lokfo",
        "gouci",
        "sikiu",
        "zizat",
        "siwit",
        "begei",
        "onfai",
        "sigau",
        "gubun",
        "giuzo",
        "gaisi",
        "gusik",
        "biuze",
        "eksep",
        "peiwo",
        "sauji",
        "siuwo",
        "aujyu",
        "bopai",
        "didaa",
        "aimun",
        "kiusi",
        "fisik",
        "zinfo",
        "toufu",
        "cisat",
        "lukji",
        "beifo",
        "fobaa",
        "cesei",
        "limso",
        "kandi",
        "ondou",
        "fohau",
        "matsi",
        "sodaa",
        "fugau",
        "cewaa",
        "cigaa",
        "hamdi",
        "laufe",
        "sigon",
        "cukse",
        "kiuco",
        "wanwo",
        "douze",
        "toize",
        "fuhei",
        "heiuk",
        "zotoi",
        "wujam",
        "jisam",
        "gaasi",
        "lukze",
        "siuje",
        "siuji",
        "bojan",
        "liugo",
        "mohin",
        "jimci",
        "kogei",
        "boufu",
        "bingu",
        "wanwo",
        "sauso",
        "legou",
        "jinbo",
        "jijam",
        "ninfo",
        "latfu",
        "heigu",
        "sijyu",
        "tousi",
        "gugau",
        "amhou",
        "apdei",
        "meiji",
        "cipsi",
        "wojin",
        "fulou",
        "lefou",
        "wucau",
        "guhei",
        "cifei",
        "citzi",
        "fungo",
        "coizi",
        "aahet",
        "sikui",
        "fufaa",
        "aazaa",
        "cilik",
        "zilei",
        "fomei",
        "tobiu",
        "loksi",
        "toksi",
        "meice",
        "fuhei",
        "hoigu",
        "jyuzi",
        "cepiu",
        "folou",
        "toiji",
        "kaici",
        "dinwu",
        "douji",
        "jinim",
        "fufun",
        "silit",
        "siuji",
        "sukfu",
        "siuje",
        "cisam",
        "leisi",
        "fuluk",
        "bouzo",
        "zozau",
        "fufit",
        "zisin",
        "lolak",
        "zokgo",
        "gaufo",
        "zizit",
        "ampun",
        "giude",
        "seifo",
        "gatsi",
        "heisi",
        "zekfo",
        "jijyu",
        "eimet",
        "jezin",
        "wisaa",
        "caaje",
        "zaabo",
        "datzi",
        "heisi",
        "tobiu",
        "litfo",
        "seisi",
        "geipo",
        "zouuk",
        "dakse",
        "ngmei",
        "fulai",
        "lokbo",
        "sikmo",
        "oidou",
        "cesan",
        "ziuse",
        "faagu",
        "jitbo",
        "wukam",
        "fugon",
        "zebai",
        "cyusi",
        "botou",
        "audaa",
        "sefan",
        "gotoi",
        "togaa",
        "dakse",
        "tausi",
        "ganci",
        "gauce",
        "onhou",
        "paame",
        "fofun",
        "dogau",
        "hiusi",
        "gumok",
        "lodim",
        "fuksi",
        "sotau",
        "jijan",
        "onlai",
        "gance",
        "moubo",
        "kwang",
        "zauwo",
        "fusuk",
        "homaa",
        "gikon",
        "zodai",
        "gaasi",
        "caufo",
        "goeci",
        "wofuk",
        "fofui",
        "zisin",
        "onmin",
        "baaio",
        "maace",
        "fozuk",
        "makzi",
        "caasi",
        "sejam",
        "hausi",
        "zyugo",
        "bouji",
        "jijyu",
        "liuzi",
        "wuing",
        "fukse",
        "hakce",
        "sojan",
        "mkeoi",
        "daaco",
        "ngdou",
        "fosit",
        "zedai",
        "piuaa",
        "wubak",
        "zejim",
        "cokap",
        "kiuce",
        "fugun",
        "waaze",
        "mukze",
        "deici",
        "fosik",
        "saufu",
        "hukoi",
        "tinwu",
        "saien",
        "loiji",
        "leiji",
        "sizik",
        "maisi",
        "zauzo",
        "oilai",
        "gomai",
        "zemok",
        "zobiu",
        "watci",
        "fuksi",
        "sidou",
        "baafo",
        "hohau",
        "bousi",
        "fosek",
        "fumaa",
        "syumo",
        "futau",
        "cotoi",
        "jamfu",
        "sefuk",
        "bousi",
        "saipo",
        "zilei",
        "hamsi",
        "cigoi",
        "fomat",
        "jinso",
        "sizau",
        "cesan",
        "aamun",
        "zokok",
        "hauoi",
        "zimwu",
        "mosok",
        "zoiwo",
        "cekzi",
        "gonde",
        "sezin",
        "zauzi",
        "zampi",
        "bokuk",
        "zatzi",
        "ontoi",
        "saaaa",
        "sehok",
        "hodin",
        "sijyu",
        "zokje",
        "nimfu",
        "fujuk",
        "cigon",
        "meizi",
        "aatzi",
        "tosin",
        "keigo",
        "fugau",
        "tinje",
        "amgok",
        "hoipi",
        "cifei",
        "tobaa",
        "cosam",
        "sidai",
        "fusam",
        "daase",
        "wuiso",
        "zehok",
        "fobun",
        "fujin",
        "onlei",
        "fofun",
        "caasi",
        "gonzi",
        "coice",
        "simiu",
        "jikzi",
        "amjin",
        "jezai",
        "kauci",
        "sinsi",
        "zimun",
        "cetai",
        "jejuk",
        "wuhau",
        "gaaci",
        "fujam",
        "japje",
        "apdap",
        "gomou",
        "ciuje",
        "tomaa",
        "sijuk",
        "japgu",
        "botou",
        "fuzin",
        "jelan",
        "gogei",
        "jegai",
        "guzik",
        "nggok",
        "fonap",
        "guwaa",
        "jamsi",
        "linji",
        "zyuso",
        "deito",
        "gigat",
        "fojyu",
        "saufo",
        "maiwu",
        "punci",
        "selik",
        "zanzi",
        "touci",
        "jisam",
        "janwo",
        "meifu",
        "jyuzi",
        "funou",
        "gaapo",
        "zibai",
        "sohei",
        "housi",
        "jecoi",
        "taulo",
        "hauso",
        "ngfuk",
        "citco",
        "fodai",
        "zyusi",
        "cehon",
        "iksou",
        "honoi",
        "aamai",
        "litzi",
        "zibin",
        "zukze",
        "cilik",
        "bousi",
        "oisek",
        "saade",
        "haafo",
        "duksi",
        "zapji",
        "pinpo",
        "caici",
        "hoico",
        "sanje",
        "hokwu",
        "ambiu",
        "camsi",
        "fogin",
        "canji",
        "ganzi",
        "siuje",
        "wutau",
        "kitzi",
        "zolou",
        "sohei",
        "caaci",
        "jaufu",
        "housi",
        "hogai",
        "zukmo",
        "fupei",
        "wugau",
        "folou",
        "jimzi",
        "sedau",
        "jimse",
        "totip",
        "gaisi",
        "cocoi",
        "cicin",
        "fusyu",
        "zamce",
        "zihot",
        "zukzi",
        "soufo",
        "onjat",
        "jibin",
        "jamgo",
        "faagu",
        "heifo",
        "cociu",
        "zizan",
        "wolei",
        "taizi",
        "sensi",
        "zyugu",
        "buiji",
        "zolik",
        "wobaa",
        "fomei",
        "geizo",
        "saulo",
        "audei",
        "hosiu",
        "cetau",
        "meliu",
        "bouse",
        "samce",
        "dinpo",
        "faazi",
        "hapzi",
        "doufu",
        "bojam",
        "bensi",
        "fukse",
        "wokki",
        "dobei",
        "sauzo",
        "jijyu",
        "fuhoi",
        "hausi",
        "dedim",
        "latto",
        "gaizi",
        "zigau",
        "daaik",
        "pocoi",
        "saawo",
        "haksi",
        "bousi",
        "zelei",
        "aazoe",
        "citje",
        "jidim",
        "bensi",
        "fukim",
        "jemei",
        "bekap",
        "piuji",
        "aazaa",
        "jyufu",
        "hokci",
        "sefan",
        "socoi",
        "dosau",
        "leisi",
        "zoije",
        "silik",
        "aacaa",
        "sukpo",
        "sanzi",
        "samdo",
        "kampo",
        "louji",
        "gaizi",
        "cause",
        "gapzi",
        "cosau",
        "sefaa",
        "jifei",
        "sifou",
        "litsi",
        "lobaa",
        "sipin",
        "sogwo",
        "nolin",
        "gipon",
        "heisi",
        "bensi",
        "andaa",
        "amjyu",
        "zodei",
        "celou",
        "wosin",
        "jiwan",
        "onnau",
        "molin",
        "japzi",
        "beiwu",
        "sizok",
        "ngdoi",
        "zipou",
        "guzik",
        "foman",
        "zibin",
        "fusik",
        "guzik",
        "wuifo",
        "simui",
        "pinon",
        "cecin",
        "audin",
        "amfaa",
        "sizik",
        "mukji",
        "pozai",
        "ciuzi",
        "louse",
        "ennoi",
        "paisi",
        "coman",
        "nowai",
        "jijap",
        "emgan",
        "gaafo",
        "aimun",
        "caaci",
        "hohim",
        "waaze",
        "zizam",
        "sitam",
        "zizuk",
        "gucou",
        "lamci",
        "toniu",
        "diuso",
        "fansi",
        "canci",
        "tibek",
        "gwoto",
        "muifu",
        "aplou",
        "potoi",
        "jibiu",
        "fogai",
        "amhap",
        "zansi",
        "louje",
        "onfan",
        "wuwan",
        "onjin",
        "zitip",
        "jisak",
        "bolaa",
        "seusi",
        "jemok",
        "makoi",
        "wumit",
        "cezyu",
        "soufu",
        "sobin",
        "wiaau",
        "sekzi",
        "fedai",
        "gulei",
        "aufou",
        "gwoco",
        "lopet",
        "fezau",
        "aamun",
        "fugou",
        "banci",
        "heici",
        "zemun",
        "wuzuk",
        "jesau",
        "sotau",
        "zizat",
        "dapce",
        "ponaa",
        "gaafo",
        "diuce",
        "liuuk",
        "jatgo",
        "fozau",
        "jezap",
        "zyubo",
        "jyuzi",
        "dauje",
        "hoiwu",
        "zizik",
        "sijam",
        "cauji",
        "deifu",
        "zaisi",
        "saufo",
        "sauje",
        "pinoi",
        "kaigo",
        "seziu",
        "nomai",
        "touse",
        "mukuk",
        "wunwo",
        "jimsi",
        "munzo",
        "zamzi",
        "ziuzi",
        "cigau",
        "sikam",
        "tokaa",
        "gaiwu",
        "cauce",
        "gufan",
        "hamho",
        "polai",
        "gigat",
        "zukfu",
        "fuici",
        "gamje",
        "cisan",
        "ouduk",
        "limsi",
        "bikfo",
        "lotoi",
        "cicin",
        "hapci",
        "motau",
        "sukji",
        "mansi",
        "modou",
        "daubo",
        "dikzi",
        "zihok",
        "gwofo",
        "aanaa",
        "linzi",
        "onkit",
        "fucoi",
        "heido",
        "satfo",
        "nausi",
        "zisip",
        "gaafu",
        "douce",
        "aumou",
        "gojiu",
        "zimwu",
        "cihei",
        "sosai",
        "ukzek",
        "tinse",
        "maabi",
        "siaat",
        "paati",
        "wupok",
        "ngjik",
        "bokfo",
        "sizuk",
        "wulei",
        "ngjin",
        "cozit",
        "sitin",
        "gaasi",
        "sanji",
        "poufu",
        "pisen",
        "gosan",
        "cifai",
        "pogaa",
        "guzit",
        "hakfu",
        "segwe",
        "maung",
        "ciufu",
        "gumou",
        "kikaa",
        "sigan",
        "zipze",
        "zince",
        "danfu",
        "gigat",
        "holik",
        "jitau",
        "sehaa",
        "neifi",
        "sinim",
        "gosyu",
        "fosin",
        "zibou",
        "lolei",
        "tozai",
        "mosuk",
        "daizi",
        "gonsi",
        "lolou",
        "heizi",
        "cijam",
        "celit",
        "sezan",
        "caazo",
        "zolok",
        "zauzi",
        "tance",
        "heiji",
        "dinho",
        "binsi",
        "fosou",
        "jimse",
        "juksi",
        "duksi",
        "lilaa",
        "toibo",
        "fuhei",
        "tauku",
        "solei",
        "seifo",
        "jamfu",
        "cauze",
        "jimat",
        "modai",
        "sezik",
        "honin",
        "sauji",
        "lokwu",
        "siufu",
        "jehap",
        "gwowu",
        "gubaa",
        "ngaat",
        "podou",
        "bokho",
        "mausi",
        "jidak",
        "fojin",
        "zokon",
        "sokzi",
        "gaaci",
        "sibit",
        "fojau",
        "totit",
        "ninzi",
        "linoi",
        "fucaa",
        "pinzi",
        "wosam",
        "oimiu",
        "aahet",
        "segwo",
        "hocan",
        "zimiu",
        "jezyu",
        "watse",
        "panse",
        "fuhon",
        "zelai",
        "ontau",
        "cekzi",
        "louje",
        "selou",
        "hopei",
        "gozai",
        "cekau",
        "zouci",
        "cisyu",
        "sidik",
        "himse",
        "gumat",
        "gubiu",
        "hobin",
        "hongu",
        "dingu",
        "cimai",
        "diuze",
        "lohei",
        "saugu",
        "zihei",
        "cosat",
        "guhei",
        "wuhau",
        "heiso",
        "zinzi",
        "dapce",
        "futok",
        "kibot",
        "haubo",
        "aalai",
        "satbo",
        "okgwo",
        "cikzi",
        "wanji",
        "leiwo",
        "zomin",
        "sezyu",
        "banbo",
        "wuwai",
        "aubai",
        "sanzi",
        "caaje",
        "gauwu",
        "douse",
        "zedoi",
        "fenzi",
        "jiguk",
        "zicau",
        "amdou",
        "zezaa",
        "waigo",
        "zelik",
        "zilei",
        "kauoi",
        "cimlo",
        "fatje",
        "oksei",
        "zilou",
        "tinfu",
        "fucit",
        "manco",
        "sizuk",
        "jegam",
        "zikat",
        "dikiu",
        "emdou",
        "daaho",
        "taifo",
        "cibei",
        "fanci",
        "dukje",
        "ngoke",
        "semun",
        "jisou",
        "singu",
        "beigo",
        "bolau",
        "sanpo",
        "onmaa",
        "lowai",
        "puizi",
        "lozai",
        "apdap",
        "gaizi",
        "wanho",
        "zauwo",
        "cisam",
        "lukje",
        "zegai",
        "mcang",
        "bobaa",
        "gumaa",
        "gungu",
        "kilou",
        "gaafo",
        "cekem",
        "zilik",
        "pikce",
        "daace",
        "sibit",
        "siuzi",
        "fuksi",
        "ongam",
        "souci",
        "caaon",
        "maazi",
        "botoi",
        "matsi",
        "citau",
        "panfu",
        "couje",
        "zango",
        "lopet",
        "cigaa",
        "zitzi",
        "gosai",
        "moufo",
        "hapji",
        "sikpo",
        "hapji",
        "linzi",
        "zitwu",
        "hokfu",
        "zauje",
        "hauzi",
        "minji",
        "fubai",
        "lobat",
        "fogam",
        "bakau",
        "keifo",
        "okbou",
        "sosai",
        "hakje",
        "wugai",
        "aulet",
        "ngobo",
        "cecan",
        "motok",
        "oubei",
        "doupe",
        "beion",
        "capsi",
        "zaije",
        "auzai",
        "gaisi",
        "leisi",
        "maaze",
        "sizam",
        "fuwan",
        "zidau",
        "hofaa",
        "fukit",
        "baafo",
        "zijip",
        "sitau",
        "coici",
        "dotoi",
        "zozai",
        "feiji",
        "maksi",
        "bizai",
        "jiduk",
        "okbaa",
        "hausi",
        "oimou",
        "homaa",
        "aplou",
        "janfu",
        "siuji",
        "oufao",
        "mewok",
        "hapfo",
        "wogon",
        "ganfo",
        "wolim",
        "bezyu",
        "saufo",
        "jisiu",
        "aabou",
        "aisiu",
        "wuzai",
        "sidau",
        "saiau",
        "jyufu",
        "zikso",
        "pouse",
        "pojat",
        "gaaci",
        "pofai",
        "lince",
        "daaho",
        "sizik",
        "gozai",
        "heiwu",
        "aabou",
        "zyusi",
        "keizi",
        "fuici",
        "nggam",
        "banzi",
        "sitap",
        "zolik",
        "maaze",
        "cimzi",
        "zambo",
        "biubo",
        "sipei",
        "semei",
        "wunzo",
        "sicyu",
        "gousi",
        "aaijo",
        "fugik",
        "hausi",
        "tauce",
        "maafe",
        "ziuon",
        "caawu",
        "jaufu",
        "ditsi",
        "metit",
        "meibo",
        "fufaa",
        "binsi",
        "janfo",
        "totau",
        "ngzok",
        "janoi",
        "honwu",
        "gimgu",
        "jijan",
        "sigun",
        "amsiu",
        "totit",
        "hojip",
        "sigun",
        "zegei",
        "zidai",
        "sisuk",
        "janoi",
        "fugei",
        "wuwai",
        "zipei",
        "onsan",
        "emfiu",
        "gauoi",
        "lougu",
        "zaizi",
        "cijuk",
        "aafuk",
        "binji",
        "fuzik",
        "couji",
        "fulou",
        "wowai",
        "wangu",
        "zihip",
        "gukgu",
        "zisei",
        "moluk",
        "biksi",
        "cokei",
        "toubo",
        "zekek",
        "gauwo",
        "zekji",
        "zizuk",
        "kegip",
        "sifun",
        "sezai",
        "zyufu",
        "fusai",
        "lodau",
        "goici",
        "faubo",
        "saufu",
        "zouci",
        "pomaa",
        "jammo",
        "fuluk",
        "zesuk",
        "feici",
        "satji",
        "lomei",
        "fusik",
        "jamdi",
        "sicaa",
        "zecau",
        "zouon",
        "cilik",
        "punpe",
        "jejim",
        "fujip",
        "audei",
        "gaagu",
        "zosip",
        "cekzi",
        "jauwu",
        "napno",
        "fujam",
        "honji",
        "pinze",
        "zebun",
        "puico",
        "cogei",
        "cauwu",
        "jamci",
        "ennin",
        "gugou",
        "gukam",
        "wuwan",
        "gutai",
        "gatou",
        "sisaa",
        "jauam",
        "pinsi",
        "colok",
        "fuwun",
        "bouzo",
        "kauzo",
        "biuce",
        "hatsi",
        "syuzi",
        "todou",
        "metsi",
        "singu",
        "lopet",
        "sizit",
        "panfu",
        "silai",
        "copui",
        "pikap",
        "gauzi",
        "fokaa",
        "haaco",
        "gusuk",
        "daamo",
        "satto",
        "jyuze",
        "siuji",
        "jiumo",
        "sodou",
        "fosou",
        "napzi",
        "jibiu",
        "jegei",
        "aacaa",
        "gaifu",
        "cimzi",
        "gunmo",
        "mesou",
        "zejam",
        "powai",
        "sidau",
        "bobut",
        "holik",
        "lozau",
        "jinoi",
        "waiau",
        "zaazi",
        "zehai",
        "cyuso",
        "jukfo",
        "zapsi",
        "meiji",
        "zyuwu",
        "mehei",
        "puisi",
        "zaawu",
        "cesau",
        "sosuk",
        "faazi",
        "amlit",
        "pisaa",
        "didaa",
        "sogon",
        "amziu",
        "meizi",
        "gaaon",
        "zigun",
        "sikdu",
        "zyusi",
        "jigai",
        "jijap",
        "jecou",
        "zyuse",
        "fuzat",
        "wutzi",
        "caaci",
        "fansi",
        "couci",
        "ziuje",
        "aamui",
        "fuzyu",
        "fubun",
        "hocyu",
        "mefei",
        "zinaa",
        "baiai",
        "taiso",
        "gipzi",
        "zekoi",
        "jyugu",
        "bakgu",
        "fotau",
        "lufaa",
        "geice",
        "fumun",
        "ukzou",
        "zifun",
        "fuksi",
        "luksi",
        "gouzi",
        "gonfo",
        "jimho",
        "zodei",
        "heifu",
        "sibou",
        "oupan",
        "feizi",
        "zimzi",
        "mohak",
        "bebaa",
        "kesou",
        "caawo",
        "modou",
        "oumiu",
        "cisai",
        "okkik",
        "ciuwo",
        "bomou",
        "dinci",
        "binji",
        "taufo",
        "cezan",
        "sizit",
        "lolit",
        "haibo",
        "hoifo",
        "sebok",
        "dinho",
        "zidit",
        "ticek",
        "guwun",
        "zisei",
        "hohak",
        "siuon",
        "fuman",
        "gogei",
        "secoi",
        "cyusi",
        "silek",
        "sigai",
        "jibou",
        "gauzi",
        "fuzuk",
        "dekzi",
        "sizin",
        "copun",
        "lince",
        "jyufu",
        "samou",
        "gwozi",
        "gaazi",
        "laiki",
        "cogun",
        "sisan",
        "ongim",
        "ensin",
        "sauje",
        "fusei",
        "sisuk",
        "sauje",
        "cejip",
        "oubei",
        "saici",
        "sinfu",
        "ziaat",
        "jefaa",
        "zozin",
        "kiuti",
        "sisam",
        "jaufu",
        "wanto",
        "waigu",
        "ngmou",
        "geizi",
        "jedim",
        "hodou",
        "keizi",
        "minfu",
        "sipon",
        "siuse",
        "jizyu",
        "jimaa",
        "tokci",
        "zibai",
        "japsi",
        "guzik",
        "dukbo",
        "aajat",
        "couso",
        "zapsi",
        "beisi",
        "solei",
        "totit",
        "fohoi",
        "fokim",
        "zepiu",
        "sipin",
        "hokzi",
        "fusou",
        "bobai",
        "onlai",
        "touci",
        "cansi",
        "jiumo",
        "sipiu",
        "jinfo",
        "wuisi",
        "zozan",
        "cigaa",
        "wulei",
        "okzat",
        "hotsi",
        "louci",
        "cicin",
        "aasik",
        "sicuk",
        "zipaa",
        "mausi",
        "aacaa",
        "sibou",
        "jikzi",
        "solin",
        "guzoi",
        "wuzik",
        "sekei",
        "focuk",
        "deifu",
        "gubou",
        "geizi",
        "sisaa",
        "jamzi",
        "tozai",
        "sizik",
        "lokon",
        "zogan",
        "zilik",
        "tosou",
        "taifo",
        "cesin",
        "louje",
        "fobun",
        "silei",
        "kutwu",
        "jyubo",
        "tojau",
        "ngoke",
        "caato",
        "wubun",
        "fumaa",
        "taion",
        "saudo",
        "fuzin",
        "fopun",
        "dougu",
        "oisam",
        "tausi",
        "zukmo",
        "zesai",
        "dojap",
        "fuhau",
        "lougu",
        "sizai",
        "lokfu",
        "muisi",
        "jamsi",
        "cisan",
        "saizi",
        "cougu",
        "fusam",
        "aasim",
        "sicoi",
        "hoigu",
        "lojau",
        "sebou",
        "todou",
        "gigat",
        "fuwok",
        "gambo",
        "munwu",
        "jikwo",
        "polok",
        "diusi",
        "faasi",
        "fosik",
        "fozai",
        "caasi",
        "fohau",
        "sauji",
        "batam",
        "delei",
        "seije",
        "zehai",
        "lotai",
        "sicau",
        "caace",
        "citzi",
        "fuiji",
        "jinwo",
        "caaco",
        "jizuk",
        "wobaa",
        "wotip",
        "kaace",
        "couje",
        "gansi",
        "foman",
        "kelau",
        "dakci",
        "kamke",
        "fuwai",
        "zihim",
        "zifaa",
        "heppi",
        "fuzyu",
        "saimo",
        "okbou",
        "dinzo",
        "cotoi",
        "punco",
        "kaisi",
        "aidan",
        "taije",
        "neigu",
        "sukzi",
        "jiuje",
        "somui",
        "jatze",
        "lomou",
        "gimsi",
        "naaji",
        "ciufu",
        "cijat",
        "caawo",
        "gapsi",
        "ngaat",
        "zaizi",
        "saubo",
        "etmin",
        "ondai",
        "zilik",
        "kauji",
        "fowan",
        "bikci",
        "fiusi",
        "gougu",
        "aksau",
        "bunuk",
        "jiuji",
        "odaai",
        "gatji",
        "haufu",
        "gunji",
        "fatge",
        "lojau",
        "siuci",
        "bikfu",
        "ganci",
        "zaiji",
      ],
      Ia = "present",
      Ma = "correct",
      Oa = "absent";
    var Ra = { unknown: 0, absent: 1, present: 2, correct: 3 };
    function $a(e, a) {
      var s = {};
      return (
        e.forEach(function (e, t) {
          if (a[t])
            for (var o = 0; o < e.length; o++) {
              var n = e[o],
                r = a[t][o],
                i = s[n] || "unknown";
              Ra[r] > Ra[i] && (s[n] = r);
            }
        }),
        s
      );
    }
    function Pa(e) {
      var a = ["th", "st", "nd", "rd"],
        s = e % 100;
      return e + (a[(s - 20) % 10] || a[s] || a[0]);
    }
    var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);
    function Na(e, a) {
      var s = new Date(e),
        t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
      return roundNumber;
    }
    function Da(e) {
      var a,
        s = Ga(e);
      return (a = s % La.length), La[a];
    }
    function Ga(e) {
      return Na(Ha, e);
    }
    //var Ba = "abcdefghijklmnopqrstuvwxyzàìòùè",
    // CHANGE THIS
    //var Ba = "日月金木水火土竹戈十大中一弓人心手口尸廿山女田難卜",
    var Ba = "abcdefghijklmnopstuwyz",
      Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));
    function Wa(e) {
      for (var a = "", s = 0; s < e.length; s++) {
        var t = Ba.indexOf(e[s]);
        a += t >= 0 ? Fa[t] : "_";
      }
      return a;
    }
    var Ya = "statistics",
      Ja = "fail",
      Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, Ja, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0,
      };
    function Xa() {
      var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
      return JSON.parse(e);
    }
    function Va(e) {
      var a = e.isWin,
        s = e.isStreak,
        t = e.numGuesses,
        o = Xa();
      a
        ? ((o.guesses[t] += 1),
          s ? (o.currentStreak += 1) : (o.currentStreak = 1))
        : ((o.currentStreak = 0), (o.guesses.fail += 1)),
        (o.maxStreak = Math.max(o.currentStreak, o.maxStreak)),
        (o.gamesPlayed += 1),
        (o.gamesWon += a ? 1 : 0),
        (o.winPercentage = Math.round((o.gamesWon / o.gamesPlayed) * 100)),
        (o.averageGuesses = Math.round(
          Object.entries(o.guesses).reduce(function (e, a) {
            var s = y(a, 2),
              t = s[0],
              o = s[1];
            return t !== Ja ? (e += t * o) : e;
          }, 0) / o.gamesWon
        )),
        (function (e) {
          window.localStorage.setItem(Ya, JSON.stringify(e));
        })(o);
    }
    var Ka = document.createElement("template");
    Ka.innerHTML =
      "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: "
        .concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ")
        .concat(
          4e3, // CHANGE THIS
          ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         Zidou <sub><span style="font-size:0.7em; font-color:gray">粵拼版Wordle</span></sub>\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n'
        );
    var Qa = document.createElement("template");
    Qa.innerHTML =
      '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS",
      es = "WIN",
      as = "FAIL",
      // CHANGE THIS
      ss = [
        "恭喜晒！ gung1 hei2 saai3!",
        "好勁喎！ hou2 ging6 wo3!",
        "真係犀利！ zan1 hai6 sai1 lei6!",
        "噉都畀你估到！ gam2 dou1 bei2 nei5 gu2 dou2!",
        "認真勁揪！ jing2 zan1 ging6 cau1!",
        "小弟佩服！ siu2 dai6 pui3 fuk6!",
      ],
      ts = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), "tileIndex", 0),
            n(p(e), "rowIndex", 0),
            n(p(e), "solution", void 0),
            n(p(e), "boardState", void 0),
            n(p(e), "evaluations", void 0),
            n(p(e), "canInput", !0),
            n(p(e), "gameStatus", Za),
            n(p(e), "letterEvaluations", {}),
            n(p(e), "$board", void 0),
            n(p(e), "$keyboard", void 0),
            n(p(e), "$game", void 0),
            n(p(e), "today", void 0),
            n(p(e), "lastPlayedTs", void 0),
            n(p(e), "lastCompletedTs", void 0),
            n(p(e), "hardMode", void 0),
            n(p(e), "dayOffset", void 0),
            e.attachShadow({ mode: "open" }),
            (e.today = new Date());
          var o = za();
          return (
            (e.lastPlayedTs = o.lastPlayedTs),
            !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1
              ? ((e.boardState = new Array(6).fill("")),
                (e.evaluations = new Array(6).fill(null)),
                (e.solution = Da(e.today)),
                (e.dayOffset = Ga(e.today)),
                (e.lastCompletedTs = o.lastCompletedTs),
                (e.hardMode = o.hardMode),
                (e.restoringFromLocalStorage = !1),
                ja({
                  rowIndex: e.rowIndex,
                  boardState: e.boardState,
                  evaluations: e.evaluations,
                  solution: e.solution,
                  gameStatus: e.gameStatus,
                }),
                Ca("event", "level_start", { level_name: Wa(e.solution) }))
              : ((e.boardState = o.boardState),
                (e.evaluations = o.evaluations),
                (e.rowIndex = o.rowIndex),
                (e.solution = o.solution),
                (e.dayOffset = Ga(e.today)),
                (e.letterEvaluations = $a(e.boardState, e.evaluations)),
                (e.gameStatus = o.gameStatus),
                (e.lastCompletedTs = o.lastCompletedTs),
                (e.hardMode = o.hardMode),
                e.gameStatus !== Za && (e.canInput = !1),
                (e.restoringFromLocalStorage = !0)),
            e
          );
        }
        return (
          o(t, [
            {
              key: "evaluateRow",
              value: function () {
                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                  var e,
                    a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                    honzi = document.createElement("span"), // ADDED BY CHAAK
                    s = this.boardState[this.rowIndex];
                  if (((e = s), !Ta.includes(e) && !La.includes(e)))
                    return (
                      a.setAttribute("invalid", ""),
                      void this.addToast("冇呢個字喎！")
                    );
                  if (this.hardMode) {
                    var t = (function (e, a, s) {
                        if (!e || !a || !s) return { validGuess: !0 };
                        for (var t = 0; t < s.length; t++)
                          if (s[t] === Ma && e[t] !== a[t])
                            return {
                              validGuess: !1,
                              errorMessage: ""
                                .concat(Pa(t + 1), " letter must be ")
                                .concat(a[t].toUpperCase()),
                            };
                        for (var o = {}, n = 0; n < s.length; n++)
                          [Ma, Ia].includes(s[n]) &&
                            (o[a[n]] ? (o[a[n]] += 1) : (o[a[n]] = 1));
                        var r = e.split("").reduce(function (e, a) {
                          return e[a] ? (e[a] += 1) : (e[a] = 1), e;
                        }, {});
                        for (var i in o)
                          if ((r[i] || 0) < o[i])
                            return {
                              validGuess: !1,
                              errorMessage: "今次嘅估答一定要有 ".concat(
                                i.toUpperCase()
                              ),
                            };
                        return { validGuess: !0 };
                      })(
                        s,
                        this.boardState[this.rowIndex - 1],
                        this.evaluations[this.rowIndex - 1]
                      ),
                      o = t.validGuess,
                      n = t.errorMessage;
                    if (!o)
                      return (
                        a.setAttribute("invalid", ""),
                        void this.addToast(n || "Hard mode 唔用得")
                      );
                  }
                  honzi.innerHTML = Rev[e]; //ADDED By CHAAK
                  honzi.style.fontSize = "16px";
                  honzi.style.color = "var(--color-tone-1)";
                  honzi.style.fontStyle = "bold";
                  honzi.style.verticalAlign = "center";
                  a.$row.appendChild(honzi); //ADDED By CHAAK
                  var r = (function (e, a) {
                    for (
                      var s = Array(a.length).fill(Oa),
                        t = Array(a.length).fill(!0),
                        o = Array(a.length).fill(!0),
                        n = 0;
                      n < e.length;
                      n++
                    )
                      e[n] === a[n] &&
                        o[n] &&
                        ((s[n] = Ma), (t[n] = !1), (o[n] = !1));
                    for (var r = 0; r < e.length; r++) {
                      var i = e[r];
                      if (t[r])
                        for (var l = 0; l < a.length; l++) {
                          var d = a[l];
                          if (o[l] && i === d) {
                            (s[r] = Ia), (o[l] = !1);
                            break;
                          }
                        }
                    }
                    return s;
                  })(s, this.solution);
                  (this.evaluations[this.rowIndex] = r),
                    (this.letterEvaluations = $a(
                      this.boardState,
                      this.evaluations
                    )),
                    (a.evaluation = this.evaluations[this.rowIndex]),
                    (this.rowIndex += 1);
                  var i = this.rowIndex >= 6,
                    l = r.every(function (e) {
                      return "correct" === e;
                    });
                  if (i || l)
                    Va({
                      isWin: l,
                      isStreak:
                        !!this.lastCompletedTs &&
                        1 === Na(new Date(this.lastCompletedTs), new Date()),
                      numGuesses: this.rowIndex,
                    }),
                      ja({ lastCompletedTs: Date.now() }),
                      (this.gameStatus = l ? es : as),
                      Ca("event", "level_end", {
                        level_name: Wa(this.solution),
                        num_guesses: this.rowIndex,
                        success: l,
                      });
                  (this.tileIndex = 0),
                    (this.canInput = !1),
                    ja({
                      rowIndex: this.rowIndex,
                      boardState: this.boardState,
                      evaluations: this.evaluations,
                      solution: this.solution,
                      gameStatus: this.gameStatus,
                      lastPlayedTs: Date.now(),
                    });
                }
              },
            },
            {
              key: "addLetter",
              value: function (e) {
                console.log(e);
                this.gameStatus === Za &&
                  this.canInput &&
                  (this.tileIndex >= 5 ||
                    ((this.boardState[this.rowIndex] += e),
                    this.$board
                      .querySelectorAll("game-row")
                      [this.rowIndex].setAttribute(
                        "letters",
                        this.boardState[this.rowIndex]
                      ),
                    (this.tileIndex += 1)));
              },
            },
            {
              key: "removeLetter",
              value: function () {
                if (
                  this.gameStatus === Za &&
                  this.canInput &&
                  !(this.tileIndex <= 0)
                ) {
                  this.boardState[this.rowIndex] = this.boardState[
                    this.rowIndex
                  ].slice(0, this.boardState[this.rowIndex].length - 1);
                  var e =
                    this.$board.querySelectorAll("game-row")[this.rowIndex];
                  this.boardState[this.rowIndex]
                    ? e.setAttribute("letters", this.boardState[this.rowIndex])
                    : e.removeAttribute("letters"),
                    e.removeAttribute("invalid"),
                    (this.tileIndex -= 1);
                }
              },
            },
            {
              key: "submitGuess",
              value: function () {
                if (this.gameStatus === Za && this.canInput) {
                  if (5 !== this.tileIndex)
                    return (
                      this.$board
                        .querySelectorAll("game-row")
                        [this.rowIndex].setAttribute("invalid", ""),
                      void this.addToast("記得打齊五個碼喎！")
                    );
                  this.evaluateRow();
                }
              },
            },
            {
              key: "addToast",
              value: function (e, a) {
                var s =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  t = document.createElement("game-toast");
                t.setAttribute("text", e),
                  a && t.setAttribute("duration", a),
                  s
                    ? this.shadowRoot
                        .querySelector("#system-toaster")
                        .prepend(t)
                    : this.shadowRoot.querySelector("#game-toaster").prepend(t);
              },
            },
            {
              key: "sizeBoard",
              value: function () {
                var e = this.shadowRoot.querySelector("#board-container"),
                  a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 500),
                  s = 6 * Math.floor(a / 5);
                (this.$board.style.width = "".concat(a, "px")),
                  (this.$board.style.height = "".concat(s, "px"));
              },
            },
            {
              key: "showStatsModal",
              value: function () {
                var e = this.$game.querySelector("game-modal"),
                  a = document.createElement("game-stats");
                this.gameStatus === es &&
                  this.rowIndex <= 6 &&
                  a.setAttribute("highlight-guess", this.rowIndex),
                  (a.gameApp = this),
                  e.appendChild(a),
                  e.setAttribute("open", "");
              },
            },
            {
              key: "showHelpModal",
              value: function () {
                var e = this.$game.querySelector("game-modal");
                e.appendChild(document.createElement("game-help")),
                  e.setAttribute("open", "");
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                  (this.$game = this.shadowRoot.querySelector("#game")),
                  (this.$board = this.shadowRoot.querySelector("#board")),
                  (this.$keyboard =
                    this.shadowRoot.querySelector("game-keyboard")),
                  this.sizeBoard(),
                  this.lastPlayedTs ||
                    setTimeout(function () {
                      return e.showHelpModal();
                    }, 100);
                for (var a = 0; a < 6; a++) {
                  var s = document.createElement("game-row");
                  s.setAttribute("letters", this.boardState[a]),
                    s.setAttribute("length", 5),
                    this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                    this.$board.appendChild(s);
                }
                this.$game.addEventListener("game-key-press", function (a) {
                  var s = a.detail.key;
                  "â†" === s || "Backspace" === s
                    ? e.removeLetter()
                    : "â†µ" === s || "Enter" === s
                    ? e.submitGuess()
                    : Ba.includes(s.toLowerCase()) &&
                      e.addLetter(s.toLowerCase());
                }),
                  this.$game.addEventListener(
                    "game-last-tile-revealed-in-row",
                    function (a) {
                      (e.$keyboard.letterEvaluations = e.letterEvaluations),
                        e.rowIndex < 6 && (e.canInput = !0);
                      var s =
                        e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      (a.path || (a.composedPath && a.composedPath())).includes(
                        s
                      ) &&
                        ([es, as].includes(e.gameStatus) &&
                          (e.restoringFromLocalStorage
                            ? e.showStatsModal()
                            : (e.gameStatus === es &&
                                (s.setAttribute("win", ""),
                                e.addToast(ss[e.rowIndex - 1], 2e3)),
                              e.gameStatus === as &&
                                e.addToast(
                                  "答案其實係 " +
                                    e.solution.toUpperCase() +
                                    "【" +
                                    Rev[e.solution] +
                                    "】",
                                  1 / 0
                                ),
                              setTimeout(function () {
                                e.showStatsModal();
                              }, 2500))),
                        (e.restoringFromLocalStorage = !1));
                    }
                  ),
                  this.shadowRoot.addEventListener(
                    "game-setting-change",
                    function (a) {
                      var s = a.detail,
                        t = s.name,
                        o = s.checked,
                        n = s.disabled;
                      switch (t) {
                        case "hard-mode":
                          return void (n
                            ? e.addToast("困難模式淨係可以一開頭度開", 1500, !0)
                            : ((e.hardMode = o), ja({ hardMode: o })));
                      }
                    }
                  ),
                  this.shadowRoot
                    .getElementById("settings-button")
                    .addEventListener("click", function (a) {
                      var s = e.$game.querySelector("game-page"),
                        t = document.createTextNode("設定");
                      s.appendChild(t);
                      var o = document.createElement("game-settings");
                      o.setAttribute("slot", "content"),
                        (o.gameApp = e),
                        s.appendChild(o),
                        s.setAttribute("open", "");
                    }),
                  this.shadowRoot
                    .getElementById("help-button")
                    .addEventListener("click", function (a) {
                      var s = e.$game.querySelector("game-page"),
                        t = document.createTextNode("點樣玩");
                      s.appendChild(t);
                      var o = document.createElement("game-help");
                      o.setAttribute("page", ""),
                        o.setAttribute("slot", "content"),
                        s.appendChild(o),
                        s.setAttribute("open", "");
                    }),
                  this.shadowRoot
                    .getElementById("statistics-button")
                    .addEventListener("click", function (a) {
                      e.showStatsModal();
                    }),
                  window.addEventListener("resize", this.sizeBoard.bind(this));
              },
            },
            { key: "disconnectedCallback", value: function () {} },
            {
              key: "debugTools",
              value: function () {
                var e = this;
                this.shadowRoot
                  .getElementById("debug-tools")
                  .appendChild(Qa.content.cloneNode(!0)),
                  this.shadowRoot
                    .getElementById("toast")
                    .addEventListener("click", function (a) {
                      e.addToast("hello world");
                    }),
                  this.shadowRoot
                    .getElementById("modal")
                    .addEventListener("click", function (a) {
                      var s = e.$game.querySelector("game-modal");
                      (s.textContent = "hello plz"), s.setAttribute("open", "");
                    }),
                  this.shadowRoot
                    .getElementById("reveal")
                    .addEventListener("click", function () {
                      e.evaluateRow();
                    }),
                  this.shadowRoot
                    .getElementById("shake")
                    .addEventListener("click", function () {
                      e.$board
                        .querySelectorAll("game-row")
                        [e.rowIndex].setAttribute("invalid", "");
                    }),
                  this.shadowRoot
                    .getElementById("bounce")
                    .addEventListener("click", function () {
                      var a =
                        e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      "" === a.getAttribute("win")
                        ? a.removeAttribute("win")
                        : a.setAttribute("win", "");
                    });
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML =
      "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(
        3e3,
        ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n'
      );
    var ns = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                this.addEventListener("click", function (a) {
                  e.shadowRoot
                    .querySelector(".content")
                    .classList.add("closing");
                }),
                this.shadowRoot.addEventListener("animationend", function (a) {
                  "SlideOut" === a.animationName &&
                    (e.shadowRoot
                      .querySelector(".content")
                      .classList.remove("closing"),
                    e.removeChild(e.firstChild),
                    e.removeAttribute("open"));
                });
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML =
      "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    // CHANGE THIS
    var ds = [
        ["-", "w", "e", "t", "y", "u", "i", "o", "p", "-"],
        ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
        ["-", "â†µ", "z", "c", "b", "n", "m", "â†", "-"],
      ],
      us = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), "_letterEvaluations", {}),
            e.attachShadow({ mode: "open" }),
            e
          );
        }
        return (
          o(t, [
            {
              key: "letterEvaluations",
              set: function (e) {
                (this._letterEvaluations = e), this._render();
              },
            },
            {
              key: "dispatchKeyPressEvent",
              value: function (e) {
                this.dispatchEvent(
                  new CustomEvent("game-key-press", {
                    bubbles: !0,
                    composed: !0,
                    detail: { key: e },
                  })
                );
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                  (this.$keyboard = this.shadowRoot.getElementById("keyboard")),
                  this.$keyboard.addEventListener("click", function (a) {
                    var s = a.target.closest("button");
                    s &&
                      e.$keyboard.contains(s) &&
                      e.dispatchKeyPressEvent(s.dataset.key);
                  }),
                  window.addEventListener("keydown", function (a) {
                    if (!0 !== a.repeat) {
                      var s = a.key,
                        t = a.metaKey,
                        o = a.ctrlKey;
                      t ||
                        o ||
                        ((Ba.includes(s.toLowerCase()) ||
                          "Backspace" === s ||
                          "Enter" === s) &&
                          e.dispatchKeyPressEvent(s));
                    }
                  }),
                  this.$keyboard.addEventListener(
                    "transitionend",
                    function (a) {
                      var s = a.target.closest("button");
                      s &&
                        e.$keyboard.contains(s) &&
                        s.classList.remove("fade");
                    }
                  ),
                  ds.forEach(function (a) {
                    var s = document.createElement("div");
                    s.classList.add("row"),
                      a.forEach(function (e) {
                        var a;
                        // CHANGE THIS
                        if (
                          "a" == e ||
                          "b" == e ||
                          "c" == e ||
                          "d" == e ||
                          "e" == e ||
                          "f" == e ||
                          "g" == e ||
                          "h" == e ||
                          "i" == e ||
                          "j" == e ||
                          "k" == e ||
                          "l" == e ||
                          "m" == e ||
                          "n" == e ||
                          "o" == e ||
                          "p" == e ||
                          "s" == e ||
                          "t" == e ||
                          "u" == e ||
                          "w" == e ||
                          "y" == e ||
                          "z" == e ||
                          "â†" === e ||
                          "â†µ" === e
                        ) {
                          if (
                            (((a = is.content.cloneNode(
                              !0
                            ).firstElementChild).dataset.key = e),
                            (a.textContent = e),
                            "â†" === e)
                          ) {
                            var t = document.createElement("game-icon");
                            t.setAttribute("icon", "backspace"),
                              (a.textContent = ""),
                              a.appendChild(t),
                              a.classList.add("one-and-a-half");
                          }
                          "â†µ" == e &&
                            ((a.textContent = "enter"),
                            a.classList.add("one-and-a-half"));
                        } else (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                        s.appendChild(a);
                      }),
                      e.$keyboard.appendChild(s);
                  }),
                  this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                for (var e in this._letterEvaluations) {
                  var a = this.$keyboard.querySelector(
                    '[data-key="'.concat(e, '"]')
                  );
                  (a.dataset.state = this._letterEvaluations[e]),
                    a.classList.add("fade");
                }
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
    function cs(e, a, s, t) {
      return new (s || (s = Promise))(function (o, n) {
        function r(e) {
          try {
            l(t.next(e));
          } catch (e) {
            n(e);
          }
        }
        function i(e) {
          try {
            l(t.throw(e));
          } catch (e) {
            n(e);
          }
        }
        function l(e) {
          var a;
          e.done
            ? o(e.value)
            : ((a = e.value),
              a instanceof s
                ? a
                : new s(function (e) {
                    e(a);
                  })).then(r, i);
        }
        l((t = t.apply(e, a || [])).next());
      });
    }
    function ps(e, a) {
      var s,
        t,
        o,
        n,
        r = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (n = { next: i(0), throw: i(1), return: i(2) }),
        "function" == typeof Symbol &&
          (n[Symbol.iterator] = function () {
            return this;
          }),
        n
      );
      function i(n) {
        return function (i) {
          return (function (n) {
            if (s) throw new TypeError("Generator is already executing.");
            for (; r; )
              try {
                if (
                  ((s = 1),
                  t &&
                    (o =
                      2 & n[0]
                        ? t.return
                        : n[0]
                        ? t.throw || ((o = t.return) && o.call(t), 0)
                        : t.next) &&
                    !(o = o.call(t, n[1])).done)
                )
                  return o;
                switch (((t = 0), o && (n = [2 & n[0], o.value]), n[0])) {
                  case 0:
                  case 1:
                    o = n;
                    break;
                  case 4:
                    return r.label++, { value: n[1], done: !1 };
                  case 5:
                    r.label++, (t = n[1]), (n = [0]);
                    continue;
                  case 7:
                    (n = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (o = (o = r.trys).length > 0 && o[o.length - 1]) ||
                        (6 !== n[0] && 2 !== n[0])
                      )
                    ) {
                      r = 0;
                      continue;
                    }
                    if (3 === n[0] && (!o || (n[1] > o[0] && n[1] < o[3]))) {
                      r.label = n[1];
                      break;
                    }
                    if (6 === n[0] && r.label < o[1]) {
                      (r.label = o[1]), (o = n);
                      break;
                    }
                    if (o && r.label < o[2]) {
                      (r.label = o[2]), r.ops.push(n);
                      break;
                    }
                    o[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                n = a.call(e, r);
              } catch (e) {
                (n = [6, e]), (t = 0);
              } finally {
                s = o = 0;
              }
            if (5 & n[0]) throw n[1];
            return { value: n[0] ? n[1] : void 0, done: !0 };
          })([n, i]);
        };
      }
    }
    customElements.define("game-keyboard", us),
      function () {
        (console.warn || console.log).apply(console, arguments);
      }.bind("[clipboard-polyfill]");
    var ms,
      hs,
      ys,
      gs,
      bs = "undefined" == typeof navigator ? void 0 : navigator,
      fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) ||
      void 0 === ms ||
      ms.bind(fs),
      null === (hs = null == fs ? void 0 : fs.readText) ||
        void 0 === hs ||
        hs.bind(fs);
    var ks =
        (null === (ys = null == fs ? void 0 : fs.write) ||
          void 0 === ys ||
          ys.bind(fs),
        null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs
          ? void 0
          : gs.bind(fs)),
      vs = "undefined" == typeof window ? void 0 : window,
      ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function () {
      this.success = !1;
    };
    function zs(e, a, s) {
      for (var t in ((e.success = !0), a)) {
        var o = a[t],
          n = s.clipboardData;
        n.setData(t, o),
          "text/plain" === t && n.getData(t) !== o && (e.success = !1);
      }
      s.preventDefault();
    }
    function js(e) {
      var a = new xs(),
        s = zs.bind(this, a, e);
      document.addEventListener("copy", s);
      try {
        document.execCommand("copy");
      } finally {
        document.removeEventListener("copy", s);
      }
      return a.success;
    }
    function Ss(e, a) {
      _s(e);
      var s = js(a);
      return qs(), s;
    }
    function _s(e) {
      var a = document.getSelection();
      if (a) {
        var s = document.createRange();
        s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s);
      }
    }
    function qs() {
      var e = document.getSelection();
      e && e.removeAllRanges();
    }
    function Es(e) {
      return cs(this, void 0, void 0, function () {
        var a;
        return ps(this, function (s) {
          if (
            ((a = "text/plain" in e),
            "undefined" == typeof ClipboardEvent &&
              void 0 !== ws.clipboardData &&
              void 0 !== ws.clipboardData.setData)
          ) {
            if (!a) throw new Error("No `text/plain` value was specified.");
            if (((t = e["text/plain"]), ws.clipboardData.setData("Text", t)))
              return [2, !0];
            throw new Error(
              "Copying failed, possibly because the user rejected it."
            );
          }
          var t;
          return js(e) ||
            navigator.userAgent.indexOf("Edge") > -1 ||
            Ss(document.body, e) ||
            (function (e) {
              var a = document.createElement("div");
              a.setAttribute("style", "-webkit-user-select: text !important"),
                (a.textContent = "temporary element"),
                document.body.appendChild(a);
              var s = Ss(a, e);
              return document.body.removeChild(a), s;
            })(e) ||
            (function (e) {
              var a = document.createElement("div");
              a.setAttribute("style", "-webkit-user-select: text !important");
              var s = a;
              a.attachShadow && (s = a.attachShadow({ mode: "open" }));
              var t = document.createElement("span");
              (t.innerText = e),
                s.appendChild(t),
                document.body.appendChild(a),
                _s(t);
              var o = document.execCommand("copy");
              return qs(), document.body.removeChild(a), o;
            })(e["text/plain"])
            ? [2, !0]
            : [2, !1];
        });
      });
    }
    function As(e, a, s) {
      try {
        (t = navigator.userAgent || navigator.vendor || window.opera),
          (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            t
          ) &&
            !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              t.substr(0, 4)
            )) ||
          navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ||
          void 0 === navigator.share ||
          !navigator.canShare ||
          !navigator.canShare(e)
            ? (function (e) {
                return cs(this, void 0, void 0, function () {
                  return ps(this, function (a) {
                    if (ks) return [2, ks(e)];
                    if (
                      !Es(
                        (function (e) {
                          var a = {};
                          return (a["text/plain"] = e), a;
                        })(e)
                      )
                    )
                      throw new Error("writeText() failed");
                    return [2];
                  });
                });
              })(e.text).then(a, s)
            : navigator.share(e);
      } catch (e) {
        s();
      }
      var t;
    }
    var Cs = document.createElement("template");
    // CHANGE THIS
    Cs.innerHTML =
      '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>統計數據</h1>\n    <div id="statistics"></div>\n    <h1>估答次數數目分佈</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement("template");
    Ls.innerHTML =
      '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML =
      '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    // CHANGE THIS
    Is.innerHTML =
      '\n  <div class="countdown">\n    <h1>距離下個「字道」仲有</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      分享 <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    // CHANGE THIS
    var Ms = {
        currentStreak: "目前一次過贏幾多",
        maxStreak: "連續贏嘅最長記錄",
        winPercentage: "% 贏咗",
        gamesPlayed: "玩咗幾多次",
        gamesWon: "贏咗幾多次",
        averageGuesses: "平均估答次數",
      },
      Os = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), "stats", {}),
            n(p(e), "gameApp", void 0),
            e.attachShadow({ mode: "open" }),
            (e.stats = Xa()),
            e
          );
        }
        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                var a = this.shadowRoot.getElementById("statistics"),
                  s = this.shadowRoot.getElementById("guess-distribution"),
                  t = Math.max.apply(
                    Math,
                    g(Object.values(this.stats.guesses))
                  );
                if (
                  Object.values(this.stats.guesses).every(function (e) {
                    return 0 === e;
                  })
                ) {
                  var o = document.createElement("div");
                  o.classList.add("no-data"),
                    (o.innerText = "No Data"),
                    s.appendChild(o);
                } else
                  for (
                    var n = 1;
                    n < Object.keys(this.stats.guesses).length;
                    n++
                  ) {
                    var r = n,
                      i = this.stats.guesses[n],
                      l = Ts.content.cloneNode(!0),
                      d = Math.max(7, Math.round((i / t) * 100));
                    l.querySelector(".guess").textContent = r;
                    var u = l.querySelector(".graph-bar");
                    if (
                      ((u.style.width = "".concat(d, "%")),
                      "number" == typeof i)
                    ) {
                      (l.querySelector(".num-guesses").textContent = i),
                        i > 0 && u.classList.add("align-right");
                      var c = parseInt(
                        this.getAttribute("highlight-guess"),
                        10
                      );
                      c && n === c && u.classList.add("highlight");
                    }
                    s.appendChild(l);
                  }
                if (
                  ([
                    "gamesPlayed",
                    "winPercentage",
                    "currentStreak",
                    "maxStreak",
                  ].forEach(function (s) {
                    var t = Ms[s],
                      o = e.stats[s],
                      n = Ls.content.cloneNode(!0);
                    (n.querySelector(".label").textContent = t),
                      (n.querySelector(".statistic").textContent = o),
                      a.appendChild(n);
                  }),
                  this.gameApp.gameStatus !== Za)
                ) {
                  var p = this.shadowRoot.querySelector(".footer"),
                    m = Is.content.cloneNode(!0);
                  p.appendChild(m),
                    this.shadowRoot
                      .querySelector("button#share-button")
                      .addEventListener("click", function (a) {
                        a.preventDefault(), a.stopPropagation();
                        As(
                          (function (e) {
                            var a = e.evaluations,
                              s = e.dayOffset,
                              t = e.rowIndex,
                              o = e.isHardMode,
                              n = e.isWin,
                              r = JSON.parse(window.localStorage.getItem(j)),
                              i = JSON.parse(window.localStorage.getItem(S)),
                              l = "Zidou ".concat(s).concat("\n日期 : " + sharingDate.getDate() + "/" + (sharingDate.getMonth()+1) + "/" + sharingDate.getFullYear() + 
                              " " + (sharingDate.getHours() < 10 ? '0' : '') + sharingDate.getHours() + ":00");
                            (l += "\n次數 : ".concat(n ? t : "X", "/").concat(6)),
                              o && (l += "*");
                            var d = "";
                            return (
                              a.forEach(function (e) {
                                e &&
                                  (e.forEach(function (e) {
                                    if (e) {
                                      var a = "";
                                      switch (e) {
                                        case Ma:
                                          a = (function (e) {
                                            return e ? "🟩" : "🟩";
                                          })(i);
                                          break;
                                        case Ia:
                                          a = (function (e) {
                                            return e ? "🟨" : "🟨";
                                          })(i);
                                          break;
                                        case Oa:
                                          a = (function (e) {
                                            return e ? "⬛" : "⬛";
                                          })(r);
                                      }
                                      d += a;
                                    }
                                  }),
                                  (d += "\n"));
                              }),
                              {
                                text: ""
                                  .concat(l, "\n\n")
                                  .concat(
                                    d
                                      .trimEnd()
                                      .concat(
                                        "\nhttps://chaaklau.github.io/zidou/"
                                      )
                                  ),
                              }
                            );
                          })({
                            evaluations: e.gameApp.evaluations,
                            dayOffset: e.gameApp.dayOffset,
                            rowIndex: e.gameApp.rowIndex,
                            isHardMode: e.gameApp.hardMode,
                            isWin: e.gameApp.gameStatus === es,
                          }),
                          function () {
                            e.gameApp.addToast(
                              "Copied results to clipboard",
                              2e3,
                              !0
                            );
                          },
                          function () {
                            e.gameApp.addToast("Share failed", 2e3, !0);
                          }
                        );
                      });
                }
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML =
      '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var $s = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(
          t,
          [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                  this.shadowRoot
                    .querySelector(".container")
                    .addEventListener("click", function (a) {
                      a.stopPropagation(),
                        e.hasAttribute("checked")
                          ? e.removeAttribute("checked")
                          : e.setAttribute("checked", ""),
                        e.dispatchEvent(
                          new CustomEvent("game-switch-change", {
                            bubbles: !0,
                            composed: !0,
                            detail: {
                              name: e.getAttribute("name"),
                              checked: e.hasAttribute("checked"),
                              disabled: e.hasAttribute("disabled"),
                            },
                          })
                        );
                    });
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["checked"];
              },
            },
          ]
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-switch", $s);
    var Ps = document.createElement("template");
    // CHANGE THIS
    Ps.innerHTML =
      '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>喺六次之內估中是日粵拼！</p>\n      <p>答案可能係一隻單字，亦可能係一個詞語。每一次估嘅答案都一定要係五個粵拼字母（唔包括標示聲調嘅數目字），撳「ENTER」掣就可以提交。</p>\n      <p>每次提交答案之後，啲方格會變成唔同嘅顏色，作為你下一次估嘅提示。</p>\n      <div class="examples">\n        <p><strong>例子</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="B"></game-tile>\n            <game-tile letter="A"></game-tile>\n            <game-tile letter="A"></game-tile>\n            <game-tile letter="S"></game-tile>\n            <game-tile letter="I" evaluation="correct" reveal></game-tile>\n          </div>\n          <p>答案入面有 <strong>I</strong> 呢個字母，而且位置正確。</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="N"></game-tile>\n            <game-tile letter="G" evaluation="present" reveal></game-tile>\n            <game-tile letter="A"></game-tile>\n            <game-tile letter="A"></game-tile>\n            <game-tile letter="N"></game-tile>\n          </div>\n          <p>個答案係有<strong>G</strong>呢個字母，但係位置唔啱。</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="H" evaluation="absent" reveal></game-tile>\n            <game-tile letter="O"></game-tile>\n            <game-tile letter="B"></game-tile>\n            <game-tile letter="I"></game-tile>\n            <game-tile letter="N"></game-tile>\n          </div>\n          <p>答案裏面冇<strong>H</strong>呢個字母。</p>\n        </div>\n      </div>\n      <p><strong>每日都會有新嘅粵拼！<strong></p>\n   </div>\n      </div>\n      <p><strong>呢個遊戲本身係由 Josh Wardle 設計嘅，Samuel Lo 改版嘅倉頡版「JNDLE字道」再激發咗<a href="https://twitter.com/chaakming">阿擇</a>整呢個粵拼版。<strong></p>\n  </div>\n  </section>\n';
    var Hs = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              this.shadowRoot.appendChild(Ps.content.cloneNode(!0));
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML =
      "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(
        2e3,
        ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n'
      );
    var Ds = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                this.shadowRoot
                  .querySelector("game-icon")
                  .addEventListener("click", function (a) {
                    e.shadowRoot
                      .querySelector(".overlay")
                      .classList.add("closing");
                  }),
                this.shadowRoot.addEventListener("animationend", function (a) {
                  "SlideOut" === a.animationName &&
                    (e.shadowRoot
                      .querySelector(".overlay")
                      .classList.remove("closing"),
                    Array.from(e.childNodes).forEach(function (a) {
                      e.removeChild(a);
                    }),
                    e.removeAttribute("open"));
                });
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML =
      '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings:
          "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace:
          "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close:
          "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share:
          "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics:
          "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
      },
      Fs = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e
          );
        }
        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                  "backspace" === e &&
                    this.shadowRoot
                      .querySelector("path")
                      .setAttribute("fill", "var(--color-tone-1)"),
                  "share" === e &&
                    this.shadowRoot
                      .querySelector("path")
                      .setAttribute("fill", "var(--white)");
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4,
      Js = 36e5,
      Us = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), "targetEpochMS", void 0),
            n(p(e), "intervalId", void 0),
            n(p(e), "$timer", void 0),
            e.attachShadow({ mode: "open" });
          var o = new Date();
          return (
            o.setDate(o.getDate() + 1),
            o.setHours(0, 0, 0, 0),
            (e.targetEpochMS = o.getTime()),
            e
          );
        }
        return (
          o(t, [
            {
              key: "padDigit",
              value: function (e) {
                return e.toString().padStart(2, "0");
              },
            },
            {
              key: "updateTimer",
              value: function () {
                var e,
                  a = new Date().getTime(),
                  s = Math.floor(this.targetEpochMS - a);
                if (s <= 0) e = "00:00:00";
                else {
                  var t = Math.floor((s % 864e5) / Js),
                    o = Math.floor((s % Js) / Ys),
                    n = Math.floor((s % Ys) / 1e3);
                  e = ""
                    .concat(this.padDigit(t), ":")
                    .concat(this.padDigit(o), ":")
                    .concat(this.padDigit(n));
                }
                this.$timer.textContent = e;
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                  (this.$timer = this.shadowRoot.querySelector("#timer")),
                  (this.intervalId = setInterval(function () {
                    e.updateTimer();
                  }, 200));
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                clearInterval(this.intervalId);
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    return (
      customElements.define("countdown-timer", Us),
      (e.CountdownTimer = Us),
      (e.GameApp = ts),
      (e.GameHelp = Hs),
      (e.GameIcon = Fs),
      (e.GameKeyboard = us),
      (e.GameModal = ns),
      (e.GamePage = Ds),
      (e.GameRow = x),
      (e.GameSettings = _a),
      (e.GameStats = Os),
      (e.GameSwitch = $s),
      (e.GameThemeManager = _),
      (e.GameTile = v),
      (e.GameToast = Aa),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      e
    );
  })({}));
