"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1410], {
        61410: function(n, t, a) {
            function e(n, t) {
                var a = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(n);
                    t && (e = e.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    })), a.push.apply(a, e)
                }
                return a
            }

            function i(n) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e(Object(a), !0).forEach(function(t) {
                        s(n, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach(function(t) {
                        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return n
            }

            function r(n) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                    return typeof n
                } : function(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(n)
            }

            function o(n, t) {
                for (var a = 0; a < t.length; a++) {
                    var e = t[a];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
                }
            }

            function s(n, t, a) {
                return t in n ? Object.defineProperty(n, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = a, n
            }

            function c(n, t) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, t) {
                    var a, e, i = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != i) {
                        var r = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(n); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (n) {
                            s = !0, e = n
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (s) throw e
                            }
                        }
                        return r
                    }
                }(n, t) || l(n, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(n) {
                return function(n) {
                    if (Array.isArray(n)) return u(n)
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || l(n) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(n, t) {
                if (n) {
                    if ("string" == typeof n) return u(n, t);
                    var a = Object.prototype.toString.call(n).slice(8, -1);
                    if ("Object" === a && n.constructor && (a = n.constructor.name), "Map" === a || "Set" === a) return Array.from(n);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return u(n, t)
                }
            }

            function u(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var a = 0, e = Array(t); a < t; a++) e[a] = n[a];
                return e
            }
            a.d(t, {
                Qc: function() {
                    return tR
                },
                qv: function() {
                    return tD
                },
                vc: function() {
                    return tY
                }
            });
            var m, d, v, b, p, g, h, y, k = function() {},
                w = {},
                x = {},
                A = null,
                O = {
                    mark: k,
                    measure: k
                };
            try {
                "undefined" != typeof window && (w = window), "undefined" != typeof document && (x = document), "undefined" != typeof MutationObserver && (A = MutationObserver), "undefined" != typeof performance && (O = performance)
            } catch (n) {}
            var N = (w.navigator || {}).userAgent,
                P = void 0 === N ? "" : N,
                C = w,
                S = x,
                j = A,
                E = O;
            C.document;
            var z = !!S.documentElement && !!S.head && "function" == typeof S.addEventListener && "function" == typeof S.createElement,
                M = ~P.indexOf("MSIE") || ~P.indexOf("Trident/"),
                I = "___FONT_AWESOME___",
                L = "svg-inline--fa",
                Y = "data-fa-i2svg",
                R = "data-fa-pseudo-element",
                D = "data-prefix",
                T = "data-icon",
                F = "fontawesome-i2svg",
                _ = ["HTML", "HEAD", "STYLE", "SCRIPT"],
                H = function() {
                    try {
                        return !0
                    } catch (n) {
                        return !1
                    }
                }(),
                W = "classic",
                U = "sharp",
                X = [W, U];

            function q(n) {
                return new Proxy(n, {
                    get: function(n, t) {
                        return t in n ? n[t] : n[W]
                    }
                })
            }
            var B = q((s(m = {}, W, {
                    fa: "solid",
                    fas: "solid",
                    "fa-solid": "solid",
                    far: "regular",
                    "fa-regular": "regular",
                    fal: "light",
                    "fa-light": "light",
                    fat: "thin",
                    "fa-thin": "thin",
                    fad: "duotone",
                    "fa-duotone": "duotone",
                    fab: "brands",
                    "fa-brands": "brands",
                    fak: "kit",
                    "fa-kit": "kit"
                }), s(m, U, {
                    fa: "solid",
                    fass: "solid",
                    "fa-solid": "solid",
                    fasr: "regular",
                    "fa-regular": "regular",
                    fasl: "light",
                    "fa-light": "light"
                }), m)),
                V = q((s(d = {}, W, {
                    solid: "fas",
                    regular: "far",
                    light: "fal",
                    thin: "fat",
                    duotone: "fad",
                    brands: "fab",
                    kit: "fak"
                }), s(d, U, {
                    solid: "fass",
                    regular: "fasr",
                    light: "fasl"
                }), d)),
                G = q((s(v = {}, W, {
                    fab: "fa-brands",
                    fad: "fa-duotone",
                    fak: "fa-kit",
                    fal: "fa-light",
                    far: "fa-regular",
                    fas: "fa-solid",
                    fat: "fa-thin"
                }), s(v, U, {
                    fass: "fa-solid",
                    fasr: "fa-regular",
                    fasl: "fa-light"
                }), v)),
                K = q((s(b = {}, W, {
                    "fa-brands": "fab",
                    "fa-duotone": "fad",
                    "fa-kit": "fak",
                    "fa-light": "fal",
                    "fa-regular": "far",
                    "fa-solid": "fas",
                    "fa-thin": "fat"
                }), s(b, U, {
                    "fa-solid": "fass",
                    "fa-regular": "fasr",
                    "fa-light": "fasl"
                }), b)),
                Q = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
                J = "fa-layers-text",
                Z = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
                $ = q((s(p = {}, W, {
                    900: "fas",
                    400: "far",
                    normal: "far",
                    300: "fal",
                    100: "fat"
                }), s(p, U, {
                    900: "fass",
                    400: "fasr",
                    300: "fasl"
                }), p)),
                nn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                nt = nn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                na = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
                ne = {
                    GROUP: "duotone-group",
                    SWAP_OPACITY: "swap-opacity",
                    PRIMARY: "primary",
                    SECONDARY: "secondary"
                },
                ni = new Set;
            Object.keys(V[W]).map(ni.add.bind(ni)), Object.keys(V[U]).map(ni.add.bind(ni));
            var nr = [].concat(X, f(ni), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ne.GROUP, ne.SWAP_OPACITY, ne.PRIMARY, ne.SECONDARY]).concat(nn.map(function(n) {
                    return "".concat(n, "x")
                })).concat(nt.map(function(n) {
                    return "w-".concat(n)
                })),
                no = C.FontAwesomeConfig || {};
            S && "function" == typeof S.querySelector && [
                ["data-family-prefix", "familyPrefix"],
                ["data-css-prefix", "cssPrefix"],
                ["data-family-default", "familyDefault"],
                ["data-style-default", "styleDefault"],
                ["data-replacement-class", "replacementClass"],
                ["data-auto-replace-svg", "autoReplaceSvg"],
                ["data-auto-add-css", "autoAddCss"],
                ["data-auto-a11y", "autoA11y"],
                ["data-search-pseudo-elements", "searchPseudoElements"],
                ["data-observe-mutations", "observeMutations"],
                ["data-mutate-approach", "mutateApproach"],
                ["data-keep-original-source", "keepOriginalSource"],
                ["data-measure-performance", "measurePerformance"],
                ["data-show-missing-icons", "showMissingIcons"]
            ].forEach(function(n) {
                var t, a = c(n, 2),
                    e = a[0],
                    i = a[1],
                    r = "" === (t = function(n) {
                        var t = S.querySelector("script[" + n + "]");
                        if (t) return t.getAttribute(n)
                    }(e)) || "false" !== t && ("true" === t || t);
                null != r && (no[i] = r)
            });
            var ns = {
                styleDefault: "solid",
                familyDefault: "classic",
                cssPrefix: "fa",
                replacementClass: L,
                autoReplaceSvg: !0,
                autoAddCss: !0,
                autoA11y: !0,
                searchPseudoElements: !1,
                observeMutations: !0,
                mutateApproach: "async",
                keepOriginalSource: !0,
                measurePerformance: !1,
                showMissingIcons: !0
            };
            no.familyPrefix && (no.cssPrefix = no.familyPrefix);
            var nc = i(i({}, ns), no);
            nc.autoReplaceSvg || (nc.observeMutations = !1);
            var nf = {};
            Object.keys(ns).forEach(function(n) {
                Object.defineProperty(nf, n, {
                    enumerable: !0,
                    set: function(t) {
                        nc[n] = t, nl.forEach(function(n) {
                            return n(nf)
                        })
                    },
                    get: function() {
                        return nc[n]
                    }
                })
            }), Object.defineProperty(nf, "familyPrefix", {
                enumerable: !0,
                set: function(n) {
                    nc.cssPrefix = n, nl.forEach(function(n) {
                        return n(nf)
                    })
                },
                get: function() {
                    return nc.cssPrefix
                }
            }), C.FontAwesomeConfig = nf;
            var nl = [],
                nu = {
                    size: 16,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    flipX: !1,
                    flipY: !1
                };

            function nm() {
                for (var n = 12, t = ""; n-- > 0;) t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
                return t
            }

            function nd(n) {
                for (var t = [], a = (n || []).length >>> 0; a--;) t[a] = n[a];
                return t
            }

            function nv(n) {
                return n.classList ? nd(n.classList) : (n.getAttribute("class") || "").split(" ").filter(function(n) {
                    return n
                })
            }

            function nb(n) {
                return "".concat(n).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function np(n) {
                return Object.keys(n || {}).reduce(function(t, a) {
                    return t + "".concat(a, ": ").concat(n[a].trim(), ";")
                }, "")
            }

            function ng(n) {
                return n.size !== nu.size || n.x !== nu.x || n.y !== nu.y || n.rotate !== nu.rotate || n.flipX || n.flipY
            }

            function nh() {
                var n = nf.cssPrefix,
                    t = nf.replacementClass,
                    a = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
                if ("fa" !== n || t !== L) {
                    var e = RegExp("\\.".concat("fa", "\\-"), "g"),
                        i = RegExp("\\--".concat("fa", "\\-"), "g"),
                        r = RegExp("\\.".concat(L), "g");
                    a = a.replace(e, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(r, ".".concat(t))
                }
                return a
            }
            var ny = !1;

            function nk() {
                nf.autoAddCss && !ny && (! function(n) {
                    if (n && z) {
                        var t = S.createElement("style");
                        t.setAttribute("type", "text/css"), t.innerHTML = n;
                        for (var a = S.head.childNodes, e = null, i = a.length - 1; i > -1; i--) {
                            var r = a[i];
                            ["STYLE", "LINK"].indexOf((r.tagName || "").toUpperCase()) > -1 && (e = r)
                        }
                        S.head.insertBefore(t, e)
                    }
                }(nh()), ny = !0)
            }
            var nw = C || {};
            nw[I] || (nw[I] = {}), nw[I].styles || (nw[I].styles = {}), nw[I].hooks || (nw[I].hooks = {}), nw[I].shims || (nw[I].shims = []);
            var nx = nw[I],
                nA = [],
                nO = !1;

            function nN(n) {
                var t, a = n.tag,
                    e = n.attributes,
                    i = n.children;
                return "string" == typeof n ? nb(n) : "<".concat(a, " ").concat(Object.keys((t = void 0 === e ? {} : e) || {}).reduce(function(n, a) {
                    return n + "".concat(a, '="').concat(nb(t[a]), '" ')
                }, "").trim(), ">").concat((void 0 === i ? [] : i).map(nN).join(""), "</").concat(a, ">")
            }

            function nP(n, t, a) {
                if (n && n[t] && n[t][a]) return {
                    prefix: t,
                    iconName: a,
                    icon: n[t][a]
                }
            }!z || (nO = (S.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(S.readyState)) || S.addEventListener("DOMContentLoaded", function n() {
                S.removeEventListener("DOMContentLoaded", n), nO = 1, nA.map(function(n) {
                    return n()
                })
            });
            var nC = function(n, t, a, e) {
                var i, r, o, s = Object.keys(n),
                    c = s.length,
                    f = void 0 !== e ? function(n, a, i, r) {
                        return t.call(e, n, a, i, r)
                    } : t;
                for (void 0 === a ? (i = 1, o = n[s[0]]) : (i = 0, o = a); i < c; i++) o = f(o, n[r = s[i]], r, n);
                return o
            };

            function nS(n) {
                var t = function(n) {
                    for (var t = [], a = 0, e = n.length; a < e;) {
                        var i = n.charCodeAt(a++);
                        if (i >= 55296 && i <= 56319 && a < e) {
                            var r = n.charCodeAt(a++);
                            (64512 & r) == 56320 ? t.push(((1023 & i) << 10) + (1023 & r) + 65536) : (t.push(i), a--)
                        } else t.push(i)
                    }
                    return t
                }(n);
                return 1 === t.length ? t[0].toString(16) : null
            }

            function nj(n) {
                return Object.keys(n).reduce(function(t, a) {
                    var e = n[a];
                    return e.icon ? t[e.iconName] = e.icon : t[a] = e, t
                }, {})
            }

            function nE(n, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    e = a.skipHooks,
                    r = nj(t);
                "function" != typeof nx.hooks.addPack || void 0 !== e && e ? nx.styles[n] = i(i({}, nx.styles[n] || {}), r) : nx.hooks.addPack(n, nj(t)), "fas" === n && nE("fa", t)
            }
            var nz = nx.styles,
                nM = nx.shims,
                nI = (s(g = {}, W, Object.values(G[W])), s(g, U, Object.values(G[U])), g),
                nL = null,
                nY = {},
                nR = {},
                nD = {},
                nT = {},
                nF = {},
                n_ = (s(h = {}, W, Object.keys(B[W])), s(h, U, Object.keys(B[U])), h),
                nH = function() {
                    var n = function(n) {
                        return nC(nz, function(t, a, e) {
                            return t[e] = nC(a, n, {}), t
                        }, {})
                    };
                    nY = n(function(n, t, a) {
                        return t[3] && (n[t[3]] = a), t[2] && t[2].filter(function(n) {
                            return "number" == typeof n
                        }).forEach(function(t) {
                            n[t.toString(16)] = a
                        }), n
                    }), nR = n(function(n, t, a) {
                        return n[a] = a, t[2] && t[2].filter(function(n) {
                            return "string" == typeof n
                        }).forEach(function(t) {
                            n[t] = a
                        }), n
                    }), nF = n(function(n, t, a) {
                        var e = t[2];
                        return n[a] = a, e.forEach(function(t) {
                            n[t] = a
                        }), n
                    });
                    var t = "far" in nz || nf.autoFetchSvg,
                        a = nC(nM, function(n, a) {
                            var e = a[0],
                                i = a[1],
                                r = a[2];
                            return "far" !== i || t || (i = "fas"), "string" == typeof e && (n.names[e] = {
                                prefix: i,
                                iconName: r
                            }), "number" == typeof e && (n.unicodes[e.toString(16)] = {
                                prefix: i,
                                iconName: r
                            }), n
                        }, {
                            names: {},
                            unicodes: {}
                        });
                    nD = a.names, nT = a.unicodes, nL = nB(nf.styleDefault, {
                        family: nf.familyDefault
                    })
                };

            function nW(n, t) {
                return (nY[n] || {})[t]
            }

            function nU(n, t) {
                return (nF[n] || {})[t]
            }

            function nX(n) {
                return nD[n] || {
                    prefix: null,
                    iconName: null
                }
            }
            nl.push(function(n) {
                nL = nB(n.styleDefault, {
                    family: nf.familyDefault
                })
            }), nH();
            var nq = function() {
                return {
                    prefix: null,
                    iconName: null,
                    rest: []
                }
            };

            function nB(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = t.family,
                    e = void 0 === a ? W : a,
                    i = B[e][n],
                    r = V[e][n] || V[e][i],
                    o = n in nx.styles ? n : null;
                return r || o || null
            }
            var nV = (s(y = {}, W, Object.keys(G[W])), s(y, U, Object.keys(G[U])), y);

            function nG(n) {
                var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    e = a.skipLookups,
                    i = void 0 !== e && e,
                    r = (s(t = {}, W, "".concat(nf.cssPrefix, "-").concat(W)), s(t, U, "".concat(nf.cssPrefix, "-").concat(U)), t),
                    o = null,
                    c = W;
                (n.includes(r[W]) || n.some(function(n) {
                    return nV[W].includes(n)
                })) && (c = W), (n.includes(r[U]) || n.some(function(n) {
                    return nV[U].includes(n)
                })) && (c = U);
                var f = n.reduce(function(n, t) {
                    var a, e, s, f, l = (a = nf.cssPrefix, s = (e = t.split("-"))[0], f = e.slice(1).join("-"), s !== a || "" === f || ~nr.indexOf(f) ? null : f);
                    if (nz[t] ? (o = t = nI[c].includes(t) ? K[c][t] : t, n.prefix = t) : n_[c].indexOf(t) > -1 ? (o = t, n.prefix = nB(t, {
                            family: c
                        })) : l ? n.iconName = l : t !== nf.replacementClass && t !== r[W] && t !== r[U] && n.rest.push(t), !i && n.prefix && n.iconName) {
                        var u = "fa" === o ? nX(n.iconName) : {},
                            m = nU(n.prefix, n.iconName);
                        u.prefix && (o = null), n.iconName = u.iconName || m || n.iconName, n.prefix = u.prefix || n.prefix, "far" !== n.prefix || nz.far || !nz.fas || nf.autoFetchSvg || (n.prefix = "fas")
                    }
                    return n
                }, nq());
                return (n.includes("fa-brands") || n.includes("fab")) && (f.prefix = "fab"), (n.includes("fa-duotone") || n.includes("fad")) && (f.prefix = "fad"), !f.prefix && c === U && (nz.fass || nf.autoFetchSvg) && (f.prefix = "fass", f.iconName = nU(f.prefix, f.iconName) || f.iconName), ("fa" === f.prefix || "fa" === o) && (f.prefix = nL || "fas"), f
            }
            var nK = function() {
                    var n, t;

                    function a() {
                        ! function(n, t) {
                            if (!(n instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, a), this.definitions = {}
                    }
                    return n = [{
                        key: "add",
                        value: function() {
                            for (var n = this, t = arguments.length, a = Array(t), e = 0; e < t; e++) a[e] = arguments[e];
                            var r = a.reduce(this._pullDefinitions, {});
                            Object.keys(r).forEach(function(t) {
                                n.definitions[t] = i(i({}, n.definitions[t] || {}), r[t]), nE(t, r[t]);
                                var a = G[W][t];
                                a && nE(a, r[t]), nH()
                            })
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.definitions = {}
                        }
                    }, {
                        key: "_pullDefinitions",
                        value: function(n, t) {
                            var a = t.prefix && t.iconName && t.icon ? {
                                0: t
                            } : t;
                            return Object.keys(a).map(function(t) {
                                var e = a[t],
                                    i = e.prefix,
                                    r = e.iconName,
                                    o = e.icon,
                                    s = o[2];
                                n[i] || (n[i] = {}), s.length > 0 && s.forEach(function(t) {
                                    "string" == typeof t && (n[i][t] = o)
                                }), n[i][r] = o
                            }), n
                        }
                    }], o(a.prototype, n), t && o(a, t), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), a
                }(),
                nQ = [],
                nJ = {},
                nZ = {},
                n$ = Object.keys(nZ);

            function n1(n, t) {
                for (var a = arguments.length, e = Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++) e[i - 2] = arguments[i];
                return (nJ[n] || []).forEach(function(n) {
                    t = n.apply(null, [t].concat(e))
                }), t
            }

            function n0(n) {
                for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++) a[e - 1] = arguments[e];
                (nJ[n] || []).forEach(function(n) {
                    n.apply(null, a)
                })
            }

            function n2() {
                var n = arguments[0],
                    t = Array.prototype.slice.call(arguments, 1);
                return nZ[n] ? nZ[n].apply(null, t) : void 0
            }

            function n5(n) {
                "fa" === n.prefix && (n.prefix = "fas");
                var t = n.iconName,
                    a = n.prefix || nL;
                if (t) return t = nU(a, t) || t, nP(n4.definitions, a, t) || nP(nx.styles, a, t)
            }
            var n4 = new nK,
                n6 = {
                    noAuto: function() {
                        nf.autoReplaceSvg = !1, nf.observeMutations = !1, n0("noAuto")
                    },
                    config: nf,
                    dom: {
                        i2svg: function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return z ? (n0("beforeI2svg", n), n2("pseudoElements2svg", n), n2("i2svg", n)) : Promise.reject("Operation requires a DOM of some kind.")
                        },
                        watch: function() {
                            var n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                a = t.autoReplaceSvgRoot;
                            !1 === nf.autoReplaceSvg && (nf.autoReplaceSvg = !0), nf.observeMutations = !0, n = function() {
                                n3({
                                    autoReplaceSvgRoot: a
                                }), n0("watch", t)
                            }, z && (nO ? setTimeout(n, 0) : nA.push(n))
                        }
                    },
                    parse: {
                        icon: function(n) {
                            if (null === n) return null;
                            if ("object" === r(n) && n.prefix && n.iconName) return {
                                prefix: n.prefix,
                                iconName: nU(n.prefix, n.iconName) || n.iconName
                            };
                            if (Array.isArray(n) && 2 === n.length) {
                                var t = 0 === n[1].indexOf("fa-") ? n[1].slice(3) : n[1],
                                    a = nB(n[0]);
                                return {
                                    prefix: a,
                                    iconName: nU(a, t) || t
                                }
                            }
                            if ("string" == typeof n && (n.indexOf("".concat(nf.cssPrefix, "-")) > -1 || n.match(Q))) {
                                var e = nG(n.split(" "), {
                                    skipLookups: !0
                                });
                                return {
                                    prefix: e.prefix || nL,
                                    iconName: nU(e.prefix, e.iconName) || e.iconName
                                }
                            }
                            if ("string" == typeof n) {
                                var i = nL;
                                return {
                                    prefix: i,
                                    iconName: nU(i, n) || n
                                }
                            }
                        }
                    },
                    library: n4,
                    findIconDefinition: n5,
                    toHtml: nN
                },
                n3 = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.autoReplaceSvgRoot,
                        a = void 0 === t ? S : t;
                    (Object.keys(nx.styles).length > 0 || nf.autoFetchSvg) && z && nf.autoReplaceSvg && n6.dom.i2svg({
                        node: a
                    })
                };

            function n9(n, t) {
                return Object.defineProperty(n, "abstract", {
                    get: t
                }), Object.defineProperty(n, "html", {
                    get: function() {
                        return n.abstract.map(function(n) {
                            return nN(n)
                        })
                    }
                }), Object.defineProperty(n, "node", {
                    get: function() {
                        if (z) {
                            var t = S.createElement("div");
                            return t.innerHTML = n.html, t.children
                        }
                    }
                }), n
            }

            function n7(n) {
                var t, a, e, r, o, s, c = n.icons,
                    f = c.main,
                    l = c.mask,
                    u = n.prefix,
                    m = n.iconName,
                    d = n.transform,
                    v = n.symbol,
                    b = n.title,
                    p = n.maskId,
                    g = n.titleId,
                    h = n.extra,
                    y = n.watchable,
                    k = l.found ? l : f,
                    w = k.width,
                    x = k.height,
                    A = "fak" === u,
                    O = [nf.replacementClass, m ? "".concat(nf.cssPrefix, "-").concat(m) : ""].filter(function(n) {
                        return -1 === h.classes.indexOf(n)
                    }).filter(function(n) {
                        return "" !== n || !!n
                    }).concat(h.classes).join(" "),
                    N = {
                        children: [],
                        attributes: i(i({}, h.attributes), {}, {
                            "data-prefix": u,
                            "data-icon": m,
                            class: O,
                            role: h.attributes.role || "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 ".concat(w, " ").concat(x)
                        })
                    },
                    P = A && !~h.classes.indexOf("fa-fw") ? {
                        width: "".concat(w / x * 1, "em")
                    } : {};
                void 0 !== y && y && (N.attributes[Y] = ""), b && (N.children.push({
                    tag: "title",
                    attributes: {
                        id: N.attributes["aria-labelledby"] || "title-".concat(g || nm())
                    },
                    children: [b]
                }), delete N.attributes.title);
                var C = i(i({}, N), {}, {
                        prefix: u,
                        iconName: m,
                        main: f,
                        mask: l,
                        maskId: p,
                        transform: d,
                        symbol: v,
                        styles: i(i({}, P), h.styles)
                    }),
                    S = l.found && f.found ? n2("generateAbstractMask", C) || {
                        children: [],
                        attributes: {}
                    } : n2("generateAbstractIcon", C) || {
                        children: [],
                        attributes: {}
                    },
                    j = S.children,
                    E = S.attributes;
                return (C.children = j, C.attributes = E, v) ? (t = C.prefix, a = C.iconName, e = C.children, r = C.attributes, s = !0 === (o = C.symbol) ? "".concat(t, "-").concat(nf.cssPrefix, "-").concat(a) : o, [{
                    tag: "svg",
                    attributes: {
                        style: "display: none;"
                    },
                    children: [{
                        tag: "symbol",
                        attributes: i(i({}, r), {}, {
                            id: s
                        }),
                        children: e
                    }]
                }]) : function(n) {
                    var t = n.children,
                        a = n.main,
                        e = n.mask,
                        r = n.attributes,
                        o = n.styles,
                        s = n.transform;
                    if (ng(s) && a.found && !e.found) {
                        var c = {
                            x: a.width / a.height / 2,
                            y: .5
                        };
                        r.style = np(i(i({}, o), {}, {
                            "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
                        }))
                    }
                    return [{
                        tag: "svg",
                        attributes: r,
                        children: t
                    }]
                }(C)
            }

            function n8(n) {
                var t, a, e, r, o, s, c, f = n.content,
                    l = n.width,
                    u = n.height,
                    m = n.transform,
                    d = n.title,
                    v = n.extra,
                    b = n.watchable,
                    p = i(i(i({}, v.attributes), d ? {
                        title: d
                    } : {}), {}, {
                        class: v.classes.join(" ")
                    });
                void 0 !== b && b && (p[Y] = "");
                var g = i({}, v.styles);
                ng(m) && (g.transform = (a = (t = {
                    transform: m,
                    startCentered: !0,
                    width: l,
                    height: u
                }).transform, e = t.width, r = t.height, s = void 0 !== (o = t.startCentered) && o, c = "", s && M ? c += "translate(".concat(a.x / 16 - (void 0 === e ? 16 : e) / 2, "em, ").concat(a.y / 16 - (void 0 === r ? 16 : r) / 2, "em) ") : s ? c += "translate(calc(-50% + ".concat(a.x / 16, "em), calc(-50% + ").concat(a.y / 16, "em)) ") : c += "translate(".concat(a.x / 16, "em, ").concat(a.y / 16, "em) "), c += "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") ") + "rotate(".concat(a.rotate, "deg) ")), g["-webkit-transform"] = g.transform);
                var h = np(g);
                h.length > 0 && (p.style = h);
                var y = [];
                return y.push({
                    tag: "span",
                    attributes: p,
                    children: [f]
                }), d && y.push({
                    tag: "span",
                    attributes: {
                        class: "sr-only"
                    },
                    children: [d]
                }), y
            }
            var tn = nx.styles;

            function tt(n) {
                var t = n[0],
                    a = n[1],
                    e = c(n.slice(4), 1)[0];
                return {
                    found: !0,
                    width: t,
                    height: a,
                    icon: Array.isArray(e) ? {
                        tag: "g",
                        attributes: {
                            class: "".concat(nf.cssPrefix, "-").concat(ne.GROUP)
                        },
                        children: [{
                            tag: "path",
                            attributes: {
                                class: "".concat(nf.cssPrefix, "-").concat(ne.SECONDARY),
                                fill: "currentColor",
                                d: e[0]
                            }
                        }, {
                            tag: "path",
                            attributes: {
                                class: "".concat(nf.cssPrefix, "-").concat(ne.PRIMARY),
                                fill: "currentColor",
                                d: e[1]
                            }
                        }]
                    } : {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: e
                        }
                    }
                }
            }
            var ta = {
                found: !1,
                width: 512,
                height: 512
            };

            function te(n, t) {
                var a = t;
                return "fa" === t && null !== nf.styleDefault && (t = nL), new Promise(function(e, r) {
                    if (n2("missingIconAbstract"), "fa" === a) {
                        var o, s, c = nX(n) || {};
                        n = c.iconName || n, t = c.prefix || t
                    }
                    if (n && t && tn[t] && tn[t][n]) return e(tt(tn[t][n]));
                    o = n, s = t, H || nf.showMissingIcons || !o || console.error('Icon with name "'.concat(o, '" and prefix "').concat(s, '" is missing.')), e(i(i({}, ta), {}, {
                        icon: nf.showMissingIcons && n && n2("missingIconAbstract") || {}
                    }))
                })
            }
            var ti = function() {},
                tr = nf.measurePerformance && E && E.mark && E.measure ? E : {
                    mark: ti,
                    measure: ti
                },
                to = 'FA "6.4.0"',
                ts = function(n) {
                    tr.mark("".concat(to, " ").concat(n, " ends")), tr.measure("".concat(to, " ").concat(n), "".concat(to, " ").concat(n, " begins"), "".concat(to, " ").concat(n, " ends"))
                },
                tc = {
                    begin: function(n) {
                        return tr.mark("".concat(to, " ").concat(n, " begins")),
                            function() {
                                return ts(n)
                            }
                    },
                    end: ts
                },
                tf = function() {};

            function tl(n) {
                return "string" == typeof(n.getAttribute ? n.getAttribute(Y) : null)
            }

            function tu(n) {
                return S.createElementNS("http://www.w3.org/2000/svg", n)
            }

            function tm(n) {
                return S.createElement(n)
            }
            var td = {
                replace: function(n) {
                    var t = n[0];
                    if (t.parentNode) {
                        if (n[1].forEach(function(n) {
                                t.parentNode.insertBefore(function n(t) {
                                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        e = a.ceFn,
                                        i = void 0 === e ? "svg" === t.tag ? tu : tm : e;
                                    if ("string" == typeof t) return S.createTextNode(t);
                                    var r = i(t.tag);
                                    return Object.keys(t.attributes || []).forEach(function(n) {
                                        r.setAttribute(n, t.attributes[n])
                                    }), (t.children || []).forEach(function(t) {
                                        r.appendChild(n(t, {
                                            ceFn: i
                                        }))
                                    }), r
                                }(n), t)
                            }), null === t.getAttribute(Y) && nf.keepOriginalSource) {
                            var a, e = S.createComment((a = " ".concat(t.outerHTML, " "), a = "".concat(a, "Font Awesome fontawesome.com ")));
                            t.parentNode.replaceChild(e, t)
                        } else t.remove()
                    }
                },
                nest: function(n) {
                    var t = n[0],
                        a = n[1];
                    if (~nv(t).indexOf(nf.replacementClass)) return td.replace(n);
                    var e = new RegExp("".concat(nf.cssPrefix, "-.*"));
                    if (delete a[0].attributes.id, a[0].attributes.class) {
                        var i = a[0].attributes.class.split(" ").reduce(function(n, t) {
                            return t === nf.replacementClass || t.match(e) ? n.toSvg.push(t) : n.toNode.push(t), n
                        }, {
                            toNode: [],
                            toSvg: []
                        });
                        a[0].attributes.class = i.toSvg.join(" "), 0 === i.toNode.length ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "))
                    }
                    var r = a.map(function(n) {
                        return nN(n)
                    }).join("\n");
                    t.setAttribute(Y, ""), t.innerHTML = r
                }
            };

            function tv(n) {
                n()
            }

            function tb(n, t) {
                var a = "function" == typeof t ? t : tf;
                if (0 === n.length) a();
                else {
                    var e = tv;
                    "async" === nf.mutateApproach && (e = C.requestAnimationFrame || tv), e(function() {
                        var t = !0 === nf.autoReplaceSvg ? td.replace : td[nf.autoReplaceSvg] || td.replace,
                            e = tc.begin("mutate");
                        n.map(t), e(), a()
                    })
                }
            }
            var tp = !1,
                tg = null;

            function th(n) {
                if (j && nf.observeMutations) {
                    var t = n.treeCallback,
                        a = void 0 === t ? tf : t,
                        e = n.nodeCallback,
                        i = void 0 === e ? tf : e,
                        r = n.pseudoElementsCallback,
                        o = void 0 === r ? tf : r,
                        s = n.observeMutationsRoot,
                        c = void 0 === s ? S : s;
                    tg = new j(function(n) {
                        if (!tp) {
                            var t = nL;
                            nd(n).forEach(function(n) {
                                if ("childList" === n.type && n.addedNodes.length > 0 && !tl(n.addedNodes[0]) && (nf.searchPseudoElements && o(n.target), a(n.target)), "attributes" === n.type && n.target.parentNode && nf.searchPseudoElements && o(n.target.parentNode), "attributes" === n.type && tl(n.target) && ~na.indexOf(n.attributeName)) {
                                    if ("class" === n.attributeName && (r = (e = n.target).getAttribute ? e.getAttribute(D) : null, s = e.getAttribute ? e.getAttribute(T) : null, r && s)) {
                                        var e, r, s, c, f = nG(nv(n.target)),
                                            l = f.prefix,
                                            u = f.iconName;
                                        n.target.setAttribute(D, l || t), u && n.target.setAttribute(T, u)
                                    } else(c = n.target) && c.classList && c.classList.contains && c.classList.contains(nf.replacementClass) && i(n.target)
                                }
                            })
                        }
                    }), z && tg.observe(c, {
                        childList: !0,
                        attributes: !0,
                        characterData: !0,
                        subtree: !0
                    })
                }
            }

            function ty(n) {
                var t, a, e, r, o, s, c, f, l, u, m, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        styleParser: !0
                    },
                    v = (e = n.getAttribute("data-prefix"), r = n.getAttribute("data-icon"), o = void 0 !== n.innerText ? n.innerText.trim() : "", (s = nG(nv(n))).prefix || (s.prefix = nL), e && r && (s.prefix = e, s.iconName = r), s.iconName && s.prefix || (s.prefix && o.length > 0 && (s.iconName = (t = s.prefix, a = n.innerText, (nR[t] || {})[a] || nW(s.prefix, nS(n.innerText)))), !s.iconName && nf.autoFetchSvg && n.firstChild && n.firstChild.nodeType === Node.TEXT_NODE && (s.iconName = n.firstChild.data)), s),
                    b = v.iconName,
                    p = v.prefix,
                    g = v.rest,
                    h = (c = nd(n.attributes).reduce(function(n, t) {
                        return "class" !== n.name && "style" !== n.name && (n[t.name] = t.value), n
                    }, {}), f = n.getAttribute("title"), l = n.getAttribute("data-fa-title-id"), nf.autoA11y && (f ? c["aria-labelledby"] = "".concat(nf.replacementClass, "-title-").concat(l || nm()) : (c["aria-hidden"] = "true", c.focusable = "false")), c),
                    y = n1("parseNodeAttributes", {}, n),
                    k = d.styleParser ? (u = n.getAttribute("style"), m = [], u && (m = u.split(";").reduce(function(n, t) {
                        var a = t.split(":"),
                            e = a[0],
                            i = a.slice(1);
                        return e && i.length > 0 && (n[e] = i.join(":").trim()), n
                    }, {})), m) : [];
                return i({
                    iconName: b,
                    title: n.getAttribute("title"),
                    titleId: n.getAttribute("data-fa-title-id"),
                    prefix: p,
                    transform: nu,
                    mask: {
                        iconName: null,
                        prefix: null,
                        rest: []
                    },
                    maskId: null,
                    symbol: !1,
                    extra: {
                        classes: g,
                        styles: k,
                        attributes: h
                    }
                }, y)
            }
            var tk = nx.styles;

            function tw(n) {
                var t = "nest" === nf.autoReplaceSvg ? ty(n, {
                    styleParser: !1
                }) : ty(n);
                return ~t.extra.classes.indexOf(J) ? n2("generateLayersText", n, t) : n2("generateSvgReplacementMutation", n, t)
            }
            var tx = new Set;

            function tA(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!z) return Promise.resolve();
                var a = S.documentElement.classList,
                    e = function(n) {
                        return a.add("".concat(F, "-").concat(n))
                    },
                    i = function(n) {
                        return a.remove("".concat(F, "-").concat(n))
                    },
                    r = nf.autoFetchSvg ? tx : X.map(function(n) {
                        return "fa-".concat(n)
                    }).concat(Object.keys(tk));
                r.includes("fa") || r.push("fa");
                var o = [".".concat(J, ":not([").concat(Y, "])")].concat(r.map(function(n) {
                    return ".".concat(n, ":not([").concat(Y, "])")
                })).join(", ");
                if (0 === o.length) return Promise.resolve();
                var s = [];
                try {
                    s = nd(n.querySelectorAll(o))
                } catch (n) {}
                if (!(s.length > 0)) return Promise.resolve();
                e("pending"), i("complete");
                var c = tc.begin("onTree"),
                    f = s.reduce(function(n, t) {
                        try {
                            var a = tw(t);
                            a && n.push(a)
                        } catch (n) {
                            H || "MissingIcon" !== n.name || console.error(n)
                        }
                        return n
                    }, []);
                return new Promise(function(n, a) {
                    Promise.all(f).then(function(a) {
                        tb(a, function() {
                            e("active"), e("complete"), i("pending"), "function" == typeof t && t(), c(), n()
                        })
                    }).catch(function(n) {
                        c(), a(n)
                    })
                })
            }

            function tO(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                tw(n).then(function(n) {
                    n && tb([n], t)
                })
            }
            X.map(function(n) {
                tx.add("fa-".concat(n))
            }), Object.keys(B[W]).map(tx.add.bind(tx)), Object.keys(B[U]).map(tx.add.bind(tx)), tx = f(tx);
            var tN = function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = t.transform,
                        e = void 0 === a ? nu : a,
                        r = t.symbol,
                        o = void 0 !== r && r,
                        s = t.mask,
                        c = void 0 === s ? null : s,
                        f = t.maskId,
                        l = void 0 === f ? null : f,
                        u = t.title,
                        m = void 0 === u ? null : u,
                        d = t.titleId,
                        v = void 0 === d ? null : d,
                        b = t.classes,
                        p = void 0 === b ? [] : b,
                        g = t.attributes,
                        h = void 0 === g ? {} : g,
                        y = t.styles,
                        k = void 0 === y ? {} : y;
                    if (n) {
                        var w = n.prefix,
                            x = n.iconName,
                            A = n.icon;
                        return n9(i({
                            type: "icon"
                        }, n), function() {
                            return n0("beforeDOMElementCreation", {
                                iconDefinition: n,
                                params: t
                            }), nf.autoA11y && (m ? h["aria-labelledby"] = "".concat(nf.replacementClass, "-title-").concat(v || nm()) : (h["aria-hidden"] = "true", h.focusable = "false")), n7({
                                icons: {
                                    main: tt(A),
                                    mask: c ? tt(c.icon) : {
                                        found: !1,
                                        width: null,
                                        height: null,
                                        icon: {}
                                    }
                                },
                                prefix: w,
                                iconName: x,
                                transform: i(i({}, nu), e),
                                symbol: o,
                                title: m,
                                maskId: l,
                                titleId: v,
                                extra: {
                                    attributes: h,
                                    styles: k,
                                    classes: p
                                }
                            })
                        })
                    }
                },
                tP = RegExp('"', "ug");

            function tC(n, t) {
                var a = "".concat("data-fa-pseudo-element-pending").concat(t.replace(":", "-"));
                return new Promise(function(e, r) {
                    if (null !== n.getAttribute(a)) return e();
                    var o = nd(n.children).filter(function(n) {
                            return n.getAttribute(R) === t
                        })[0],
                        s = C.getComputedStyle(n, t),
                        c = s.getPropertyValue("font-family").match(Z),
                        f = s.getPropertyValue("font-weight"),
                        l = s.getPropertyValue("content");
                    if (o && !c) return n.removeChild(o), e();
                    if (c && "none" !== l && "" !== l) {
                        var u = s.getPropertyValue("content"),
                            m = ~["Sharp"].indexOf(c[2]) ? U : W,
                            d = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(c[2]) ? V[m][c[2].toLowerCase()] : $[m][f],
                            v = (x = (k = u.replace(tP, "")).length, O = (A = k.charCodeAt(0)) >= 55296 && A <= 56319 && x > 1 && (w = k.charCodeAt(1)) >= 56320 && w <= 57343 ? (A - 55296) * 1024 + w - 56320 + 65536 : A, {
                                value: (N = 2 === k.length && k[0] === k[1]) ? nS(k[0]) : nS(k),
                                isSecondary: O >= 1105920 && O <= 1112319 || N
                            }),
                            b = v.value,
                            p = v.isSecondary,
                            g = c[0].startsWith("FontAwesome"),
                            h = nW(d, b),
                            y = h;
                        if (g) {
                            var k, w, x, A, O, N, P, j, E = (P = nT[b], j = nW("fas", b), P || (j ? {
                                prefix: "fas",
                                iconName: j
                            } : null) || {
                                prefix: null,
                                iconName: null
                            });
                            E.iconName && E.prefix && (h = E.iconName, d = E.prefix)
                        }
                        if (!h || p || o && o.getAttribute(D) === d && o.getAttribute(T) === y) e();
                        else {
                            n.setAttribute(a, y), o && n.removeChild(o);
                            var z = {
                                    iconName: null,
                                    title: null,
                                    titleId: null,
                                    prefix: null,
                                    transform: nu,
                                    symbol: !1,
                                    mask: {
                                        iconName: null,
                                        prefix: null,
                                        rest: []
                                    },
                                    maskId: null,
                                    extra: {
                                        classes: [],
                                        styles: {},
                                        attributes: {}
                                    }
                                },
                                M = z.extra;
                            M.attributes[R] = t, te(h, d).then(function(r) {
                                var o = n7(i(i({}, z), {}, {
                                        icons: {
                                            main: r,
                                            mask: nq()
                                        },
                                        prefix: d,
                                        iconName: y,
                                        extra: M,
                                        watchable: !0
                                    })),
                                    s = S.createElement("svg");
                                "::before" === t ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.outerHTML = o.map(function(n) {
                                    return nN(n)
                                }).join("\n"), n.removeAttribute(a), e()
                            }).catch(r)
                        }
                    } else e()
                })
            }

            function tS(n) {
                return Promise.all([tC(n, "::before"), tC(n, "::after")])
            }

            function tj(n) {
                return n.parentNode !== document.head && !~_.indexOf(n.tagName.toUpperCase()) && !n.getAttribute(R) && (!n.parentNode || "svg" !== n.parentNode.tagName)
            }

            function tE(n) {
                if (z) return new Promise(function(t, a) {
                    var e = nd(n.querySelectorAll("*")).filter(tj).map(tS),
                        i = tc.begin("searchPseudoElements");
                    tp = !0, Promise.all(e).then(function() {
                        i(), tp = !1, t()
                    }).catch(function() {
                        i(), tp = !1, a()
                    })
                })
            }
            var tz = !1,
                tM = function(n) {
                    return n.toLowerCase().split(" ").reduce(function(n, t) {
                        var a = t.toLowerCase().split("-"),
                            e = a[0],
                            i = a.slice(1).join("-");
                        if (e && "h" === i) return n.flipX = !0, n;
                        if (e && "v" === i) return n.flipY = !0, n;
                        if (isNaN(i = parseFloat(i))) return n;
                        switch (e) {
                            case "grow":
                                n.size = n.size + i;
                                break;
                            case "shrink":
                                n.size = n.size - i;
                                break;
                            case "left":
                                n.x = n.x - i;
                                break;
                            case "right":
                                n.x = n.x + i;
                                break;
                            case "up":
                                n.y = n.y - i;
                                break;
                            case "down":
                                n.y = n.y + i;
                                break;
                            case "rotate":
                                n.rotate = n.rotate + i
                        }
                        return n
                    }, {
                        size: 16,
                        x: 0,
                        y: 0,
                        flipX: !1,
                        flipY: !1,
                        rotate: 0
                    })
                },
                tI = {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: "100%"
                };

            function tL(n) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return n.attributes && (n.attributes.fill || t) && (n.attributes.fill = "black"), n
            }
            nQ = [{
                mixout: function() {
                    return {
                        dom: {
                            css: nh,
                            insertCss: nk
                        }
                    }
                },
                hooks: function() {
                    return {
                        beforeDOMElementCreation: function() {
                            nk()
                        },
                        beforeI2svg: function() {
                            nk()
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        icon: function(n) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                a = (n || {}).icon ? n : n5(n || {}),
                                e = t.mask;
                            return e && (e = (e || {}).icon ? e : n5(e || {})), tN(a, i(i({}, t), {}, {
                                mask: e
                            }))
                        }
                    }
                },
                hooks: function() {
                    return {
                        mutationObserverCallbacks: function(n) {
                            return n.treeCallback = tA, n.nodeCallback = tO, n
                        }
                    }
                },
                provides: function(n) {
                    n.i2svg = function(n) {
                        var t = n.node,
                            a = void 0 === t ? S : t,
                            e = n.callback;
                        return tA(a, void 0 === e ? function() {} : e)
                    }, n.generateSvgReplacementMutation = function(n, t) {
                        var a = t.iconName,
                            e = t.title,
                            i = t.titleId,
                            r = t.prefix,
                            o = t.transform,
                            s = t.symbol,
                            f = t.mask,
                            l = t.maskId,
                            u = t.extra;
                        return new Promise(function(t, m) {
                            Promise.all([te(a, r), f.iconName ? te(f.iconName, f.prefix) : Promise.resolve({
                                found: !1,
                                width: 512,
                                height: 512,
                                icon: {}
                            })]).then(function(f) {
                                var m = c(f, 2);
                                t([n, n7({
                                    icons: {
                                        main: m[0],
                                        mask: m[1]
                                    },
                                    prefix: r,
                                    iconName: a,
                                    transform: o,
                                    symbol: s,
                                    maskId: l,
                                    title: e,
                                    titleId: i,
                                    extra: u,
                                    watchable: !0
                                })])
                            }).catch(m)
                        })
                    }, n.generateAbstractIcon = function(n) {
                        var t, a = n.children,
                            e = n.attributes,
                            i = n.main,
                            r = n.transform,
                            o = np(n.styles);
                        return o.length > 0 && (e.style = o), ng(r) && (t = n2("generateAbstractTransformGrouping", {
                            main: i,
                            transform: r,
                            containerWidth: i.width,
                            iconWidth: i.width
                        })), a.push(t || i.icon), {
                            children: a,
                            attributes: e
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        layer: function(n) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                a = t.classes,
                                e = void 0 === a ? [] : a;
                            return n9({
                                type: "layer"
                            }, function() {
                                n0("beforeDOMElementCreation", {
                                    assembler: n,
                                    params: t
                                });
                                var a = [];
                                return n(function(n) {
                                    Array.isArray(n) ? n.map(function(n) {
                                        a = a.concat(n.abstract)
                                    }) : a = a.concat(n.abstract)
                                }), [{
                                    tag: "span",
                                    attributes: {
                                        class: ["".concat(nf.cssPrefix, "-layers")].concat(f(e)).join(" ")
                                    },
                                    children: a
                                }]
                            })
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        counter: function(n) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                a = t.title,
                                e = void 0 === a ? null : a,
                                r = t.classes,
                                o = void 0 === r ? [] : r,
                                s = t.attributes,
                                c = void 0 === s ? {} : s,
                                l = t.styles,
                                u = void 0 === l ? {} : l;
                            return n9({
                                type: "counter",
                                content: n
                            }, function() {
                                var a, r, s, l, m, d, v;
                                return n0("beforeDOMElementCreation", {
                                    content: n,
                                    params: t
                                }), r = (a = {
                                    content: n.toString(),
                                    title: e,
                                    extra: {
                                        attributes: c,
                                        styles: u,
                                        classes: ["".concat(nf.cssPrefix, "-layers-counter")].concat(f(o))
                                    }
                                }).content, s = a.title, m = i(i(i({}, (l = a.extra).attributes), s ? {
                                    title: s
                                } : {}), {}, {
                                    class: l.classes.join(" ")
                                }), (d = np(l.styles)).length > 0 && (m.style = d), (v = []).push({
                                    tag: "span",
                                    attributes: m,
                                    children: [r]
                                }), s && v.push({
                                    tag: "span",
                                    attributes: {
                                        class: "sr-only"
                                    },
                                    children: [s]
                                }), v
                            })
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        text: function(n) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                a = t.transform,
                                e = void 0 === a ? nu : a,
                                r = t.title,
                                o = void 0 === r ? null : r,
                                s = t.classes,
                                c = void 0 === s ? [] : s,
                                l = t.attributes,
                                u = void 0 === l ? {} : l,
                                m = t.styles,
                                d = void 0 === m ? {} : m;
                            return n9({
                                type: "text",
                                content: n
                            }, function() {
                                return n0("beforeDOMElementCreation", {
                                    content: n,
                                    params: t
                                }), n8({
                                    content: n,
                                    transform: i(i({}, nu), e),
                                    title: o,
                                    extra: {
                                        attributes: u,
                                        styles: d,
                                        classes: ["".concat(nf.cssPrefix, "-layers-text")].concat(f(c))
                                    }
                                })
                            })
                        }
                    }
                },
                provides: function(n) {
                    n.generateLayersText = function(n, t) {
                        var a = t.title,
                            e = t.transform,
                            i = t.extra,
                            r = null,
                            o = null;
                        if (M) {
                            var s = parseInt(getComputedStyle(n).fontSize, 10),
                                c = n.getBoundingClientRect();
                            r = c.width / s, o = c.height / s
                        }
                        return nf.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([n, n8({
                            content: n.innerHTML,
                            width: r,
                            height: o,
                            transform: e,
                            title: a,
                            extra: i,
                            watchable: !0
                        })])
                    }
                }
            }, {
                hooks: function() {
                    return {
                        mutationObserverCallbacks: function(n) {
                            return n.pseudoElementsCallback = tE, n
                        }
                    }
                },
                provides: function(n) {
                    n.pseudoElements2svg = function(n) {
                        var t = n.node,
                            a = void 0 === t ? S : t;
                        nf.searchPseudoElements && tE(a)
                    }
                }
            }, {
                mixout: function() {
                    return {
                        dom: {
                            unwatch: function() {
                                tp = !0, tz = !0
                            }
                        }
                    }
                },
                hooks: function() {
                    return {
                        bootstrap: function() {
                            th(n1("mutationObserverCallbacks", {}))
                        },
                        noAuto: function() {
                            tg && tg.disconnect()
                        },
                        watch: function(n) {
                            var t = n.observeMutationsRoot;
                            tz ? tp = !1 : th(n1("mutationObserverCallbacks", {
                                observeMutationsRoot: t
                            }))
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        parse: {
                            transform: function(n) {
                                return tM(n)
                            }
                        }
                    }
                },
                hooks: function() {
                    return {
                        parseNodeAttributes: function(n, t) {
                            var a = t.getAttribute("data-fa-transform");
                            return a && (n.transform = tM(a)), n
                        }
                    }
                },
                provides: function(n) {
                    n.generateAbstractTransformGrouping = function(n) {
                        var t = n.main,
                            a = n.transform,
                            e = n.containerWidth,
                            r = n.iconWidth,
                            o = "translate(".concat(32 * a.x, ", ").concat(32 * a.y, ") "),
                            s = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "),
                            c = "rotate(".concat(a.rotate, " 0 0)"),
                            f = {
                                transform: "".concat(o, " ").concat(s, " ").concat(c)
                            },
                            l = {
                                outer: {
                                    transform: "translate(".concat(e / 2, " 256)")
                                },
                                inner: f,
                                path: {
                                    transform: "translate(".concat(-(r / 2 * 1), " -256)")
                                }
                            };
                        return {
                            tag: "g",
                            attributes: i({}, l.outer),
                            children: [{
                                tag: "g",
                                attributes: i({}, l.inner),
                                children: [{
                                    tag: t.icon.tag,
                                    children: t.icon.children,
                                    attributes: i(i({}, t.icon.attributes), l.path)
                                }]
                            }]
                        }
                    }
                }
            }, {
                hooks: function() {
                    return {
                        parseNodeAttributes: function(n, t) {
                            var a = t.getAttribute("data-fa-mask"),
                                e = a ? nG(a.split(" ").map(function(n) {
                                    return n.trim()
                                })) : nq();
                            return e.prefix || (e.prefix = nL), n.mask = e, n.maskId = t.getAttribute("data-fa-mask-id"), n
                        }
                    }
                },
                provides: function(n) {
                    n.generateAbstractMask = function(n) {
                        var t, a, e, r, o, s, c, f, l = n.children,
                            u = n.attributes,
                            m = n.main,
                            d = n.mask,
                            v = n.maskId,
                            b = n.transform,
                            p = m.width,
                            g = m.icon,
                            h = d.width,
                            y = d.icon,
                            k = (a = (t = {
                                transform: b,
                                containerWidth: h,
                                iconWidth: p
                            }).transform, e = t.containerWidth, r = t.iconWidth, o = "translate(".concat(32 * a.x, ", ").concat(32 * a.y, ") "), s = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), f = {
                                transform: "".concat(o, " ").concat(s, " ").concat(c)
                            }, {
                                outer: {
                                    transform: "translate(".concat(e / 2, " 256)")
                                },
                                inner: f,
                                path: {
                                    transform: "translate(".concat(-(r / 2 * 1), " -256)")
                                }
                            }),
                            w = {
                                tag: "rect",
                                attributes: i(i({}, tI), {}, {
                                    fill: "white"
                                })
                            },
                            x = g.children ? {
                                children: g.children.map(tL)
                            } : {},
                            A = {
                                tag: "g",
                                attributes: i({}, k.inner),
                                children: [tL(i({
                                    tag: g.tag,
                                    attributes: i(i({}, g.attributes), k.path)
                                }, x))]
                            },
                            O = {
                                tag: "g",
                                attributes: i({}, k.outer),
                                children: [A]
                            },
                            N = "mask-".concat(v || nm()),
                            P = "clip-".concat(v || nm()),
                            C = {
                                tag: "mask",
                                attributes: i(i({}, tI), {}, {
                                    id: N,
                                    maskUnits: "userSpaceOnUse",
                                    maskContentUnits: "userSpaceOnUse"
                                }),
                                children: [w, O]
                            },
                            S = {
                                tag: "defs",
                                children: [{
                                    tag: "clipPath",
                                    attributes: {
                                        id: P
                                    },
                                    children: "g" === y.tag ? y.children : [y]
                                }, C]
                            };
                        return l.push(S, {
                            tag: "rect",
                            attributes: i({
                                fill: "currentColor",
                                "clip-path": "url(#".concat(P, ")"),
                                mask: "url(#".concat(N, ")")
                            }, tI)
                        }), {
                            children: l,
                            attributes: u
                        }
                    }
                }
            }, {
                provides: function(n) {
                    var t = !1;
                    C.matchMedia && (t = C.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function() {
                        var n = [],
                            a = {
                                fill: "currentColor"
                            },
                            e = {
                                attributeType: "XML",
                                repeatCount: "indefinite",
                                dur: "2s"
                            };
                        n.push({
                            tag: "path",
                            attributes: i(i({}, a), {}, {
                                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                            })
                        });
                        var r = i(i({}, e), {}, {
                                attributeName: "opacity"
                            }),
                            o = {
                                tag: "circle",
                                attributes: i(i({}, a), {}, {
                                    cx: "256",
                                    cy: "364",
                                    r: "28"
                                }),
                                children: []
                            };
                        return t || o.children.push({
                            tag: "animate",
                            attributes: i(i({}, e), {}, {
                                attributeName: "r",
                                values: "28;14;28;28;14;28;"
                            })
                        }, {
                            tag: "animate",
                            attributes: i(i({}, r), {}, {
                                values: "1;0;1;1;0;1;"
                            })
                        }), n.push(o), n.push({
                            tag: "path",
                            attributes: i(i({}, a), {}, {
                                opacity: "1",
                                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                            }),
                            children: t ? [] : [{
                                tag: "animate",
                                attributes: i(i({}, r), {}, {
                                    values: "1;0;0;0;0;1;"
                                })
                            }]
                        }), t || n.push({
                            tag: "path",
                            attributes: i(i({}, a), {}, {
                                opacity: "0",
                                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                            }),
                            children: [{
                                tag: "animate",
                                attributes: i(i({}, r), {}, {
                                    values: "0;0;1;1;0;0;"
                                })
                            }]
                        }), {
                            tag: "g",
                            attributes: {
                                class: "missing"
                            },
                            children: n
                        }
                    }
                }
            }, {
                hooks: function() {
                    return {
                        parseNodeAttributes: function(n, t) {
                            var a = t.getAttribute("data-fa-symbol");
                            return n.symbol = null !== a && ("" === a || a), n
                        }
                    }
                }
            }], nJ = {}, Object.keys(nZ).forEach(function(n) {
                -1 === n$.indexOf(n) && delete nZ[n]
            }), nQ.forEach(function(n) {
                var t = n.mixout ? n.mixout() : {};
                if (Object.keys(t).forEach(function(n) {
                        "function" == typeof t[n] && (n6[n] = t[n]), "object" === r(t[n]) && Object.keys(t[n]).forEach(function(a) {
                            n6[n] || (n6[n] = {}), n6[n][a] = t[n][a]
                        })
                    }), n.hooks) {
                    var a = n.hooks();
                    Object.keys(a).forEach(function(n) {
                        nJ[n] || (nJ[n] = []), nJ[n].push(a[n])
                    })
                }
                n.provides && n.provides(nZ)
            }), n6.noAuto;
            var tY = n6.config;
            n6.library, n6.dom;
            var tR = n6.parse;
            n6.findIconDefinition, n6.toHtml;
            var tD = n6.icon;
            n6.layer, n6.text, n6.counter
        }
    }
]);