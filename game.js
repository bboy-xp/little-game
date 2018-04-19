var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time"
    },
    Results: {
        Title: "High score"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !0,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
    
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function () {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                c = b.MobileAdInGamePreroll,
                d =
                c + b.MobileAdInGamePreroll2,
                b = d + b.MobileAdInGamePreroll3,
                g = Math.floor(100 * Math.random());
            console.log("seed: ", g);
            g <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : g <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : g <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function (b) {
        var c = b,
            d = setInterval(function () {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close), MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function () {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
var MobileAdInGameHeader = {
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function () {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2,
                b = d + b.MobileAdInGameHeader3,
                g = Math.floor(100 * Math.random());
            console.log("seed: ", g);
            g <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : g <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" : g <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function (b) {
        var c = setInterval(function () {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function () {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                g = Math.floor(100 * Math.random());
            console.log("seed: ", g);
            g <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : g <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" : g <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function (b) {
        var c = setInterval(function () {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameEnd = {
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function () {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                c = b.MobileAdInGameEnd,
                d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                g = Math.floor(100 * Math.random());
            console.log("seed: ", g);
            g <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : g <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : g <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function (b) {
        var c = b,
            d = setInterval(function () {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function () {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
(function (b, c) {
    function d(j, b, f) {
        if (f === c && 1 === j.nodeType) if (f = "data-" + b.replace(sc, "-$1").toLowerCase(), f = j.getAttribute(f), "string" == typeof f) {
            try {
                f = "true" === f ? !0 : "false" === f ? !1 : "null" === f ? null : +f + "" === f ? +f : tc.test(f) ? e.parseJSON(f) : f
            } catch (A) {}
            e.data(j, b, f)
        } else f = c;
        return f
    }
    function g(j) {
        for (var b in j) if (!("data" === b && e.isEmptyObject(j[b])) && "toJSON" !== b) return !1;
        return !0
    }
    function m() {
        return !1
    }
    function p() {
        return !0
    }
    function y(j) {
        return !j || !j.parentNode || 11 === j.parentNode.nodeType
    }
    function r(j, b) {
        do j = j[b];
        while (j && 1 !== j.nodeType);
        return j
    }
    function x(j, b, f) {
        b = b || 0;
        if (e.isFunction(b)) return e.grep(j, function (j, e) {
            return !!b.call(j, e, j) === f
        });
        if (b.nodeType) return e.grep(j, function (j) {
            return j === b === f
        });
        if ("string" == typeof b) {
            var c = e.grep(j, function (j) {
                return 1 === j.nodeType
            });
            if (uc.test(b)) return e.filter(b, c, !f);
            b = e.filter(b, c)
        }
        return e.grep(j, function (j) {
            return 0 <= e.inArray(j, b) === f
        })
    }
    function s(j) {
        var b = wb.split("|");
        j = j.createDocumentFragment();
        if (j.createElement) for (; b.length;) j.createElement(b.pop());
        return j
    }
    function z(j, b) {
        if (1 === b.nodeType && e.hasData(j)) {
            var f, c, v;
            c = e._data(j);
            var d = e._data(b, c),
                q = c.events;
            if (q) for (f in delete d.handle, d.events = {}, q) {
                c = 0;
                for (v = q[f].length; c < v; c++) e.event.add(b, f, q[f][c])
            }
            d.data && (d.data = e.extend({}, d.data))
        }
    }
    function l(j, b) {
        var f;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(j), f = b.nodeName.toLowerCase(), "object" === f ? (b.parentNode && (b.outerHTML = j.outerHTML), e.support.html5Clone && j.innerHTML && !e.trim(b.innerHTML) && (b.innerHTML = j.innerHTML)) : "input" === f && xb.test(j.type) ? (b.defaultChecked = b.checked = j.checked, b.value !== j.value && (b.value = j.value)) : "option" === f ? b.selected = j.defaultSelected : "input" === f || "textarea" === f ? b.defaultValue = j.defaultValue : "script" === f && b.text !== j.text && (b.text = j.text), b.removeAttribute(e.expando))
    }
    function n(j) {
        return "undefined" != typeof j.getElementsByTagName ? j.getElementsByTagName("*") : "undefined" != typeof j.querySelectorAll ? j.querySelectorAll("*") : []
    }
    function t(j) {
        xb.test(j.type) && (j.defaultChecked =
        j.checked)
    }
    function C(j, b) {
        if (b in j) return b;
        for (var f = b.charAt(0).toUpperCase() + b.slice(1), e = b, c = yb.length; c--;) if (b = yb[c] + f, b in j) return b;
        return e
    }
    function L(j, b) {
        return j = b || j, "none" === e.css(j, "display") || !e.contains(j.ownerDocument, j)
    }
    function K(j, b) {
        for (var f, c, v = [], d = 0, q = j.length; d < q; d++) f = j[d], f.style && (v[d] = e._data(f, "olddisplay"), b ? (!v[d] && "none" === f.style.display && (f.style.display = ""), "" === f.style.display && L(f) && (v[d] = e._data(f, "olddisplay", I(f.nodeName)))) : (c = Q(f, "display"), !v[d] && "none" !== c && e._data(f, "olddisplay", c)));
        for (d = 0; d < q; d++) if (f = j[d], f.style && (!b || "none" === f.style.display || "" === f.style.display)) f.style.display = b ? v[d] || "" : "none";
        return j
    }
    function D(j, b, f) {
        return (j = vc.exec(b)) ? Math.max(0, j[1] - (f || 0)) + (j[2] || "px") : b
    }
    function Xa(j, b, f, c) {
        b = f === (c ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var v = 0; 4 > b; b += 2)"margin" === f && (v += e.css(j, f + ea[b], !0)), c ? ("content" === f && (v -= parseFloat(Q(j, "padding" + ea[b])) || 0), "margin" !== f && (v -= parseFloat(Q(j, "border" + ea[b] + "Width")) || 0)) : (v += parseFloat(Q(j, "padding" + ea[b])) || 0, "padding" !== f && (v += parseFloat(Q(j, "border" + ea[b] + "Width")) || 0));
        return v
    }
    function J(j, b, f) {
        var c = "width" === b ? j.offsetWidth : j.offsetHeight,
            v = !0,
            d = e.support.boxSizing && "border-box" === e.css(j, "boxSizing");
        if (0 >= c || null == c) {
            c = Q(j, b);
            if (0 > c || null == c) c = j.style[b];
            if (ya.test(c)) return c;
            v = d && (e.support.boxSizingReliable || c === j.style[b]);
            c = parseFloat(c) || 0
        }
        return c + Xa(j, b, f || (d ? "border" : "content"), v) + "px"
    }
    function I(j) {
        if (Ya[j]) return Ya[j];
        var b = e("<" + j + ">").appendTo(B.body),
            f = b.css("display");
        b.remove();
        if ("none" === f || "" === f) {
            la = B.body.appendChild(la || e.extend(B.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ma || !la.createElement) ma = (la.contentWindow || la.contentDocument).document, ma.write("<!doctype html><html><body>"), ma.close();
            b = ma.body.appendChild(ma.createElement(j));
            f = Q(b, "display");
            B.body.removeChild(la)
        }
        return Ya[j] = f, f
    }
    function P(j, b, f, c) {
        var v;
        if (e.isArray(b)) e.each(b, function (b, u) {
            f || wc.test(j) ? c(j, u) : P(j + "[" + ("object" == typeof u ? b : "") + "]", u, f, c)
        });
        else if (!f && "object" === e.type(b)) for (v in b) P(j + "[" + v + "]", b[v], f, c);
        else c(j, b)
    }
    function za(j) {
        return function (b, f) {
            "string" != typeof b && (f = b, b = "*");
            var c, v, d = b.toLowerCase().split(fa),
                q = 0,
                l = d.length;
            if (e.isFunction(f)) for (; q < l; q++) c = d[q], (v = /^\+/.test(c)) && (c = c.substr(1) || "*"), c = j[c] = j[c] || [], c[v ? "unshift" : "push"](f)
        }
    }
    function na(j, b, f, e, v, d) {
        v = v || b.dataTypes[0];
        d = d || {};
        d[v] = !0;
        var q;
        v = j[v];
        for (var l = 0, g = v ? v.length : 0, n = j === Za; l < g && (n || !q); l++) q = v[l](b, f, e), "string" == typeof q && (!n || d[q] ? q = c : (b.dataTypes.unshift(q), q = na(j, b, f, e, q, d)));
        return (n || !q) && !d["*"] && (q = na(j, b, f, e, "*", d)), q
    }
    function sa(j, b) {
        var f, A, v = e.ajaxSettings.flatOptions || {};
        for (f in b) b[f] !== c && ((v[f] ? j : A || (A = {}))[f] = b[f]);
        A && e.extend(!0, j, A)
    }
    function zb() {
        try {
            return new b.XMLHttpRequest
        } catch (j) {}
    }
    function Ab() {
        return setTimeout(function () {
            Aa = c
        }, 0), Aa = e.now()
    }
    function Bb(j, b, f) {
        var c, v = 0,
            d = Ba.length,
            q = e.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                for (var b = Aa || Ab(), b = Math.max(0, g.startTime + g.duration - b), u = 1 - (b / g.duration || 0), f =
                0, e = g.tweens.length; f < e; f++) g.tweens[f].run(u);
                return q.notifyWith(j, [g, u, b]), 1 > u && e ? b : (q.resolveWith(j, [g]), !1)
            },
            g = q.promise({
                elem: j,
                props: e.extend({}, b),
                opts: e.extend(!0, {
                    specialEasing: {}
                }, f),
                originalProperties: b,
                originalOptions: f,
                startTime: Aa || Ab(),
                duration: f.duration,
                tweens: [],
                createTween: function (b, u) {
                    var f = e.Tween(j, g.opts, b, u, g.opts.specialEasing[b] || g.opts.easing);
                    return g.tweens.push(f), f
                },
                stop: function (b) {
                    for (var u = 0, f = b ? g.tweens.length : 0; u < f; u++) g.tweens[u].run(1);
                    return b ? q.resolveWith(j, [g, b]) : q.rejectWith(j, [g, b]), this
                }
            });
        b = g.props;
        f = g.opts.specialEasing;
        var n, m, t, r;
        for (c in b) if (n = e.camelCase(c), m = f[n], t = b[c], e.isArray(t) && (m = t[1], t = b[c] = t[0]), c !== n && (b[n] = t, delete b[c]), (r = e.cssHooks[n]) && "expand" in r) for (c in t = r.expand(t), delete b[n], t) c in b || (b[c] = t[c], f[c] = m);
        else f[n] = m;
        for (; v < d; v++) if (c = Ba[v].call(g, j, b, g.opts)) return c;
        var p = g;
        e.each(b, function (j, b) {
            for (var u = (ta[j] || []).concat(ta["*"]), f = 0, e = u.length; f < e && !u[f].call(p, j, b); f++);
        });
        return e.isFunction(g.opts.start) && g.opts.start.call(j, g), e.fx.timer(e.extend(l, {
            anim: g,
            queue: g.opts.queue,
            elem: j
        })), g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always)
    }
    function S(j, b, f, e, c) {
        return new S.prototype.init(j, b, f, e, c)
    }
    function Ca(j, b) {
        var f, e = {
            height: j
        },
            c = 0;
        for (b = b ? 1 : 0; 4 > c; c += 2 - b) f = ea[c], e["margin" + f] = e["padding" + f] = j;
        return b && (e.opacity = e.width = j), e
    }
    function Cb(j) {
        return e.isWindow(j) ? j : 9 === j.nodeType ? j.defaultView || j.parentWindow : !1
    }
    var Db, Da, B = b.document,
        yc = b.location,
        zc = b.navigator,
        Ac =
        b.jQuery,
        Bc = b.$,
        Eb = Array.prototype.push,
        Z = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        $a = Object.prototype.hasOwnProperty,
        ab = String.prototype.trim,
        e = function (j, b) {
            return new e.fn.init(j, b, Db)
        },
        Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        fa = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function (j, b) {
            return (b + "").toUpperCase()
        },
        Fa = function () {
            B.addEventListener ? (B.removeEventListener("DOMContentLoaded", Fa, !1), e.ready()) : "complete" === B.readyState && (B.detachEvent("onreadystatechange", Fa), e.ready())
        },
        Hb = {};
    e.fn = e.prototype = {
        constructor: e,
        init: function (j, b, f) {
            var A, v;
            if (!j) return this;
            if (j.nodeType) return this.context = this[0] = j, this.length = 1, this;
            if ("string" == typeof j) {
                "<" === j.charAt(0) && ">" === j.charAt(j.length - 1) && 3 <= j.length ? A = [null, j, null] : A = Fc.exec(j);
                if (A && (A[1] || !b)) {
                    if (A[1]) return b = b instanceof e ? b[0] : b, v = b && b.nodeType ? b.ownerDocument || b : B, j = e.parseHTML(A[1], v, !0), Gb.test(A[1]) && e.isPlainObject(b) && this.attr.call(j, b, !0), e.merge(this, j);
                    if ((b = B.getElementById(A[2])) && b.parentNode) {
                        if (b.id !== A[2]) return f.find(j);
                        this.length = 1;
                        this[0] = b
                    }
                    return this.context = B, this.selector = j, this
                }
                return !b || b.jquery ? (b || f).find(j) : this.constructor(b).find(j)
            }
            return e.isFunction(j) ? f.ready(j) : (j.selector !== c && (this.selector = j.selector, this.context = j.context), e.makeArray(j, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return Z.call(this)
        },
        get: function (j) {
            return null == j ? this.toArray() : 0 > j ? this[this.length + j] : this[j]
        },
        pushStack: function (j, b, f) {
            j = e.merge(this.constructor(), j);
            return j.prevObject = this, j.context = this.context, "find" === b ? j.selector = this.selector + (this.selector ? " " : "") + f : b && (j.selector = this.selector + "." + b + "(" + f + ")"), j
        },
        each: function (j, b) {
            return e.each(this, j, b)
        },
        ready: function (j) {
            return e.ready.promise().done(j), this
        },
        eq: function (j) {
            return j = +j, -1 === j ? this.slice(j) : this.slice(j, j + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
        },
        map: function (j) {
            return this.pushStack(e.map(this, function (b, f) {
                return j.call(b, f, b)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function () {
        var j, b, f, A, v, d, q = arguments[0] || {},
            l = 1,
            g = arguments.length,
            n = !1;
        "boolean" == typeof q && (n = q, q = arguments[1] || {}, l = 2);
        "object" != typeof q && !e.isFunction(q) && (q = {});
        for (g === l && (q = this, --l); l < g; l++) if (null != (j = arguments[l])) for (b in j) f = q[b], A = j[b], q !== A && (n && A && (e.isPlainObject(A) || (v = e.isArray(A))) ? (v ? (v = !1, d = f && e.isArray(f) ? f : []) : d = f && e.isPlainObject(f) ? f : {}, q[b] = e.extend(n, d, A)) : A !== c && (q[b] = A));
        return q
    };
    e.extend({
        noConflict: function (j) {
            return b.$ === e && (b.$ = Bc), j && b.jQuery === e && (b.jQuery = Ac), e
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (j) {
            j ? e.readyWait++ : e.ready(!0)
        },
        ready: function (j) {
            if (!(!0 === j ? --e.readyWait : e.isReady)) {
                if (!B.body) return setTimeout(e.ready, 1);
                e.isReady = !0;
                !0 !== j && 0 < --e.readyWait || (Da.resolveWith(B, [e]), e.fn.trigger && e(B).trigger("ready").off("ready"))
            }
        },
        isFunction: function (j) {
            return "function" === e.type(j)
        },
        isArray: Array.isArray ||
        function (j) {
            return "array" === e.type(j)
        },
        isWindow: function (j) {
            return null != j && j == j.window
        },
        isNumeric: function (j) {
            return !isNaN(parseFloat(j)) && isFinite(j)
        },
        type: function (j) {
            return null == j ? String(j) : Hb[Cc.call(j)] || "object"
        },
        isPlainObject: function (j) {
            if (!j || "object" !== e.type(j) || j.nodeType || e.isWindow(j)) return !1;
            try {
                if (j.constructor && !$a.call(j, "constructor") && !$a.call(j.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            for (var f in j);
            return f === c || $a.call(j, f)
        },
        isEmptyObject: function (j) {
            for (var b in j) return !1;
            return !0
        },
        error: function (j) {
            throw Error(j);
        },
        parseHTML: function (j, b, f) {
            var c;
            return !j || "string" != typeof j ? null : ("boolean" == typeof b && (f = b, b = 0), b = b || B, (c =
            Gb.exec(j)) ? [b.createElement(c[1])] : (c = e.buildFragment([j], b, f ? null : []), e.merge([], (c.cacheable ? e.clone(c.fragment) : c.fragment).childNodes)))
        },
        parseJSON: function (j) {
            if (!j || "string" != typeof j) return null;
            j = e.trim(j);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(j);
            if (Gc.test(j.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + j))();
            e.error("Invalid JSON: " + j)
        },
        parseXML: function (j) {
            var u, f;
            if (!j || "string" != typeof j) return null;
            try {
                b.DOMParser ? (f = new DOMParser, u = f.parseFromString(j, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(j))
            } catch (A) {
                u = c
            }
            return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + j), u
        },
        noop: function () {},
        globalEval: function (j) {
            j && Dc.test(j) && (b.execScript ||
            function (j) {
                b.eval.call(b, j)
            })(j)
        },
        camelCase: function (j) {
            return j.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function (j, b) {
            return j.nodeName && j.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (j, b, f) {
            var A, v = 0,
                d = j.length,
                q = d === c || e.isFunction(j);
            if (f) if (q) for (A in j) {
                if (!1 === b.apply(j[A], f)) break
            } else for (; v < d && !1 !== b.apply(j[v++], f););
            else if (q) for (A in j) {
                if (!1 === b.call(j[A], A, j[A])) break
            } else for (; v < d && !1 !== b.call(j[v], v, j[v++]););
            return j
        },
        trim: ab && !ab.call("\ufeff\u00a0") ?
        function (j) {
            return null == j ? "" : ab.call(j)
        } : function (j) {
            return null == j ? "" : (j + "").replace(Ec, "")
        },
        makeArray: function (j, b) {
            var f, c = b || [];
            return null != j && (f = e.type(j), null == j.length || "string" === f || "function" === f || "regexp" === f || e.isWindow(j) ? Eb.call(c, j) : e.merge(c, j)), c
        },
        inArray: function (j, b, f) {
            var e;
            if (b) {
                if (Fb) return Fb.call(b, j, f);
                e = b.length;
                for (f = f ? 0 > f ? Math.max(0, e + f) : f : 0; f < e; f++) if (f in b && b[f] === j) return f
            }
            return -1
        },
        merge: function (j, b) {
            var f = b.length,
                e = j.length,
                v = 0;
            if ("number" == typeof f) for (; v < f; v++) j[e++] = b[v];
            else for (; b[v] !== c;) j[e++] = b[v++];
            return j.length = e, j
        },
        grep: function (j, b, f) {
            var e, c = [],
                d = 0,
                q = j.length;
            for (f = !! f; d < q; d++) e = !! b(j[d], d), f !== e && c.push(j[d]);
            return c
        },
        map: function (j, b, f) {
            var A, v, d = [],
                q = 0,
                l = j.length;
            if (j instanceof e || l !== c && "number" == typeof l && (0 < l && j[0] && j[l - 1] || 0 === l || e.isArray(j))) for (; q < l; q++) A = b(j[q], q, f), null != A && (d[d.length] = A);
            else for (v in j) A = b(j[v], v, f), null != A && (d[d.length] = A);
            return d.concat.apply([], d)
        },
        guid: 1,
        proxy: function (j, b) {
            var f, A, v;
            return "string" == typeof b && (f = j[b], b = j, j = f), e.isFunction(j) ? (A = Z.call(arguments, 2), v = function () {
                return j.apply(b, A.concat(Z.call(arguments)))
            }, v.guid = j.guid = j.guid || e.guid++, v) : c
        },
        access: function (j, b, f, A, v, d, q) {
            var l, g = null == f,
                n = 0,
                m = j.length;
            if (f && "object" == typeof f) {
                for (n in f) e.access(j, b, n, f[n], 1, d, A);
                v = 1
            } else if (A !== c) {
                l = q === c && e.isFunction(A);
                g && (l ? (l = b, b = function (j, b, u) {
                    return l.call(e(j), u)
                }) : (b.call(j, A), b = null));
                if (b) for (; n < m; n++) b(j[n], f, l ? A.call(j[n], n, b(j[n], f)) : A, q);
                v = 1
            }
            return v ? j : g ? b.call(j) : m ? b(j[0], f) : d
        },
        now: function () {
            return (new Date).getTime()
        }
    });
    e.ready.promise = function (j) {
        if (!Da) if (Da = e.Deferred(), "complete" === B.readyState) setTimeout(e.ready, 1);
        else if (B.addEventListener) B.addEventListener("DOMContentLoaded", Fa, !1), b.addEventListener("load", e.ready, !1);
        else {
            B.attachEvent("onreadystatechange", Fa);
            b.attachEvent("onload", e.ready);
            var u = !1;
            try {
                u = null == b.frameElement && B.documentElement
            } catch (f) {}
            u && u.doScroll &&
            function v() {
                if (!e.isReady) {
                    try {
                        u.doScroll("left")
                    } catch (j) {
                        return setTimeout(v, 50)
                    }
                    e.ready()
                }
            }()
        }
        return Da.promise(j)
    };
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (j, b) {
        Hb["[object " + b + "]"] = b.toLowerCase()
    });
    Db = e(B);
    var Ib = {};
    e.Callbacks = function (j) {
        var b;
        if ("string" == typeof j) {
            if (!(b = Ib[j])) {
                b = j;
                var f = Ib[b] = {};
                b = (e.each(b.split(fa), function (j, b) {
                    f[b] = !0
                }), f)
            }
        } else b = e.extend({}, j);
        j = b;
        var A, v, d, q, l, g, n = [],
            m = !j.once && [],
            t = function (b) {
                A = j.memory && b;
                v = !0;
                g = q || 0;
                q = 0;
                l = n.length;
                for (d = !0; n && g < l; g++) if (!1 === n[g].apply(b[0], b[1]) && j.stopOnFalse) {
                    A = !1;
                    break
                }
                d = !1;
                n && (m ? m.length && t(m.shift()) : A ? n = [] : r.disable())
            },
            r = {
                add: function () {
                    if (n) {
                        var b = n.length;
                        (function xc(b) {
                            e.each(b, function (b, u) {
                                var f = e.type(u);
                                "function" === f && (!j.unique || !r.has(u)) ? n.push(u) : u && u.length && "string" !== f && xc(u)
                            })
                        })(arguments);
                        d ? l = n.length : A && (q = b, t(A))
                    }
                    return this
                },
                remove: function () {
                    return n && e.each(arguments, function (j, b) {
                        for (var u; - 1 < (u = e.inArray(b, n, u));) n.splice(u, 1), d && (u <= l && l--, u <= g && g--)
                    }), this
                },
                has: function (j) {
                    return -1 < e.inArray(j, n)
                },
                empty: function () {
                    return n = [], this
                },
                disable: function () {
                    return n = m = A = c, this
                },
                disabled: function () {
                    return !n
                },
                lock: function () {
                    return m = c, A || r.disable(), this
                },
                locked: function () {
                    return !m
                },
                fireWith: function (j, b) {
                    return b = b || [], b = [j, b.slice ? b.slice() : b], n && (!v || m) && (d ? m.push(b) : t(b)), this
                },
                fire: function () {
                    return r.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!v
                }
            };
        return r
    };
    e.extend({
        Deferred: function (j) {
            var b = [
                ["resolve", "done", e.Callbacks("once memory"), "resolved"],
                ["reject", "fail", e.Callbacks("once memory"), "rejected"],
                ["notify", "progress", e.Callbacks("memory")]
            ],
                f = "pending",
                c = {
                    state: function () {
                        return f
                    },
                    always: function () {
                        return d.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var j = arguments;
                        return e.Deferred(function (f) {
                            e.each(b, function (b, u) {
                                var c = u[0],
                                    A = j[b];
                                d[u[1]](e.isFunction(A) ?
                                function () {
                                    var j = A.apply(this, arguments);
                                    j && e.isFunction(j.promise) ? j.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[c + "With"](this === d ? f : this, [j])
                                } : f[c])
                            });
                            j = null
                        }).promise()
                    },
                    promise: function (j) {
                        return null != j ? e.extend(j, c) : c
                    }
                },
                d = {};
            return c.pipe = c.then, e.each(b, function (j, e) {
                var l = e[2],
                    g = e[3];
                c[e[1]] = l.add;
                g && l.add(function () {
                    f = g
                }, b[j ^ 1][2].disable, b[2][2].lock);
                d[e[0]] = l.fire;
                d[e[0] + "With"] = l.fireWith
            }), c.promise(d), j && j.call(d, d), d
        },
        when: function (j) {
            var b = 0,
                f = Z.call(arguments),
                c = f.length,
                d = 1 !== c || j && e.isFunction(j.promise) ? c : 0,
                l = 1 === d ? j : e.Deferred(),
                q = function (j, b, u) {
                    return function (f) {
                        b[j] = this;
                        u[j] = 1 < arguments.length ? Z.call(arguments) : f;
                        u === g ? l.notifyWith(b, u) : --d || l.resolveWith(b, u)
                    }
                },
                g, n, m;
            if (1 < c) {
                g = Array(c);
                n = Array(c);
                for (m = Array(c); b < c; b++) f[b] && e.isFunction(f[b].promise) ? f[b].promise().done(q(b, m, f)).fail(l.reject).progress(q(b, n, g)) : --d
            }
            return d || l.resolveWith(m, f), l.promise()
        }
    });
    var Nc = e,
        bb, O, Ga, ga, Ha, Ia, T, ha, Ja, cb, ua, Jb, H = B.createElement("div");
    H.setAttribute("className", "t");
    H.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = H.getElementsByTagName("*");
    ga = H.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length) bb = {};
    else {
        Ha = B.createElement("select");
        Ia = Ha.appendChild(B.createElement("option"));
        T = H.getElementsByTagName("input")[0];
        O = {
            leadingWhitespace: 3 === H.firstChild.nodeType,
            tbody: !H.getElementsByTagName("tbody").length,
            htmlSerialize: !! H.getElementsByTagName("link").length,
            style: /top/.test(ga.getAttribute("style")),
            hrefNormalized: "/a" === ga.getAttribute("href"),
            opacity: /^0.5/.test(ga.style.opacity),
            cssFloat: !! ga.style.cssFloat,
            checkOn: "on" === T.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== H.className,
            enctype: !! B.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === B.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        T.checked = !0;
        O.noCloneChecked = T.cloneNode(!0).checked;
        Ha.disabled = !0;
        O.optDisabled = !Ia.disabled;
        try {
            delete H.test
        } catch (Pd) {
            O.deleteExpando = !1
        }!H.addEventListener && H.attachEvent && H.fireEvent && (H.attachEvent("onclick", Jb = function () {
            O.noCloneEvent = !1
        }), H.cloneNode(!0).fireEvent("onclick"), H.detachEvent("onclick", Jb));
        T = B.createElement("input");
        T.value = "t";
        T.setAttribute("type", "radio");
        O.radioValue = "t" === T.value;
        T.setAttribute("checked", "checked");
        T.setAttribute("name", "t");
        H.appendChild(T);
        ha = B.createDocumentFragment();
        ha.appendChild(H.lastChild);
        O.checkClone =
        ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        O.appendChecked = T.checked;
        ha.removeChild(T);
        ha.appendChild(H);
        if (H.attachEvent) for (cb in {
            submit: !0,
            change: !0,
            focusin: !0
        }) Ja = "on" + cb, (ua = Ja in H) || (H.setAttribute(Ja, "return;"), ua = "function" == typeof H[Ja]), O[cb + "Bubbles"] = ua;
        bb = (e(function () {
            var j, u, f, e, c = B.getElementsByTagName("body")[0];
            c && (j = B.createElement("div"), j.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", c.insertBefore(j, c.firstChild), u = B.createElement("div"), j.appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = u.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", ua = 0 === f[0].offsetHeight, f[0].style.display = "", f[1].style.display = "none", O.reliableHiddenOffsets = ua && 0 === f[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", O.boxSizing =
            4 === u.offsetWidth, O.doesNotIncludeMarginInBodyOffset = 1 !== c.offsetTop, b.getComputedStyle && (O.pixelPosition = "1%" !== (b.getComputedStyle(u, null) || {}).top, O.boxSizingReliable = "4px" === (b.getComputedStyle(u, null) || {
                width: "4px"
            }).width, e = B.createElement("div"), e.style.cssText = u.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", u.style.width = "1px", u.appendChild(e), O.reliableMarginRight = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight)), "undefined" != typeof u.style.zoom && (u.innerHTML = "", u.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.style.overflow = "visible", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", O.shrinkWrapBlocks = 3 !== u.offsetWidth, j.style.zoom = 1), c.removeChild(j))
        }), ha.removeChild(H), Ga = ga = Ha = Ia = T = ha = H = null, O)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    e.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (j) {
            return j = j.nodeType ? e.cache[j[e.expando]] : j[e.expando], !! j && !g(j)
        },
        data: function (j, b, f, A) {
            if (e.acceptData(j)) {
                var d, l, q = e.expando,
                    g = "string" == typeof b,
                    n = j.nodeType,
                    m = n ? e.cache : j,
                    t = n ? j[q] : j[q] && q;
                if (t && m[t] && (A || m[t].data) || !(g && f === c)) {
                    t || (n ? j[q] = t = e.deletedIds.pop() || e.guid++ : t = q);
                    m[t] || (m[t] = {}, n || (m[t].toJSON = e.noop));
                    if ("object" == typeof b || "function" == typeof b) A ? m[t] = e.extend(m[t], b) : m[t].data = e.extend(m[t].data, b);
                    return d = m[t], A || (d.data || (d.data = {}), d = d.data), f !== c && (d[e.camelCase(b)] = f), g ? (l = d[b], null == l && (l = d[e.camelCase(b)])) : l = d, l
                }
            }
        },
        removeData: function (j, b, f) {
            if (e.acceptData(j)) {
                var c, d, l, q = j.nodeType,
                    n = q ? e.cache : j,
                    m = q ? j[e.expando] : e.expando;
                if (n[m]) {
                    if (b && (c = f ? n[m] : n[m].data)) {
                        e.isArray(b) || (b in c ? b = [b] : (b = e.camelCase(b), b in c ? b = [b] : b = b.split(" ")));
                        d = 0;
                        for (l = b.length; d < l; d++) delete c[b[d]];
                        if (!(f ? g : e.isEmptyObject)(c)) return
                    }
                    if (f || !(delete n[m].data, !g(n[m]))) q ? e.cleanData([j], !0) : e.support.deleteExpando || n != n.window ? delete n[m] : n[m] = null
                }
            }
        },
        _data: function (j, b, f) {
            return e.data(j, b, f, !0)
        },
        acceptData: function (j) {
            var b = j.nodeName && e.noData[j.nodeName.toLowerCase()];
            return !b || !0 !== b && j.getAttribute("classid") === b
        }
    });
    e.fn.extend({
        data: function (j, b) {
            var f, A, v, l, q, g = this[0],
                n = 0,
                m = null;
            if (j === c) {
                if (this.length && (m = e.data(g), 1 === g.nodeType && !e._data(g, "parsedAttrs"))) {
                    v = g.attributes;
                    for (q = v.length; n < q; n++) l = v[n].name, l.indexOf("data-") || (l = e.camelCase(l.substring(5)), d(g, l, m[l]));
                    e._data(g, "parsedAttrs", !0)
                }
                return m
            }
            return "object" == typeof j ? this.each(function () {
                e.data(this, j)
            }) : (f = j.split(".", 2), f[1] = f[1] ? "." + f[1] : "", A = f[1] + "!", e.access(this, function (b) {
                if (b === c) return m = this.triggerHandler("getData" + A, [f[0]]), m === c && g && (m = e.data(g, j), m = d(g, j, m)), m === c && f[1] ? this.data(f[0]) : m;
                f[1] = b;
                this.each(function () {
                    var u = e(this);
                    u.triggerHandler("setData" + A, f);
                    e.data(this, j, b);
                    u.triggerHandler("changeData" + A, f)
                })
            }, null, b, 1 < arguments.length, null, !1))
        },
        removeData: function (j) {
            return this.each(function () {
                e.removeData(this, j)
            })
        }
    });
    e.extend({
        queue: function (j, b, f) {
            var c;
            if (j) return b = (b || "fx") + "queue", c = e._data(j, b), f && (!c || e.isArray(f) ? c = e._data(j, b, e.makeArray(f)) : c.push(f)), c || []
        },
        dequeue: function (j, b) {
            b = b || "fx";
            var f = e.queue(j, b),
                c = f.length,
                d = f.shift(),
                l = e._queueHooks(j, b),
                q = function () {
                    e.dequeue(j, b)
                };
            "inprogress" === d && (d = f.shift(), c--);
            d && ("fx" === b && f.unshift("inprogress"), delete l.stop, d.call(j, q, l));
            !c && l && l.empty.fire()
        },
        _queueHooks: function (j, b) {
            var f = b + "queueHooks";
            return e._data(j, f) || e._data(j, f, {
                empty: e.Callbacks("once memory").add(function () {
                    e.removeData(j, b + "queue", !0);
                    e.removeData(j, f, !0)
                })
            })
        }
    });
    e.fn.extend({
        queue: function (j, b) {
            var f = 2;
            return "string" != typeof j && (b = j, j = "fx", f--), arguments.length < f ? e.queue(this[0], j) : b === c ? this : this.each(function () {
                var f = e.queue(this, j, b);
                e._queueHooks(this, j);
                "fx" === j && "inprogress" !== f[0] && e.dequeue(this, j)
            })
        },
        dequeue: function (j) {
            return this.each(function () {
                e.dequeue(this, j)
            })
        },
        delay: function (j, b) {
            return j = e.fx ? e.fx.speeds[j] || j : j, b = b || "fx", this.queue(b, function (b, u) {
                var c = setTimeout(b, j);
                u.stop = function () {
                    clearTimeout(c)
                }
            })
        },
        clearQueue: function (j) {
            return this.queue(j || "fx", [])
        },
        promise: function (j, b) {
            var f, d = 1,
                v = e.Deferred(),
                l = this,
                q = this.length,
                g = function () {
                    --d || v.resolveWith(l, [l])
                };
            "string" != typeof j && (b = j, j = c);
            for (j = j || "fx"; q--;)(f = e._data(l[q], j + "queueHooks")) && f.empty && (d++, f.empty.add(g));
            return g(), v.promise(b)
        }
    });
    var ba, Kb, Lb, Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = e.support.getSetAttribute;
    e.fn.extend({
        attr: function (j, b) {
            return e.access(this, e.attr, j, b, 1 < arguments.length)
        },
        removeAttr: function (j) {
            return this.each(function () {
                e.removeAttr(this, j)
            })
        },
        prop: function (j, b) {
            return e.access(this, e.prop, j, b, 1 < arguments.length)
        },
        removeProp: function (j) {
            return j = e.propFix[j] || j, this.each(function () {
                try {
                    this[j] = c, delete this[j]
                } catch (b) {}
            })
        },
        addClass: function (j) {
            var b, f, c, d, l, q, g;
            if (e.isFunction(j)) return this.each(function (b) {
                e(this).addClass(j.call(this, b, this.className))
            });
            if (j && "string" == typeof j) {
                b = j.split(fa);
                f = 0;
                for (c = this.length; f < c; f++) if (d = this[f], 1 === d.nodeType) if (!d.className && 1 === b.length) d.className = j;
                else {
                    l = " " + d.className + " ";
                    q = 0;
                    for (g = b.length; q < g; q++) 0 > l.indexOf(" " + b[q] + " ") && (l += b[q] + " ");
                    d.className = e.trim(l)
                }
            }
            return this
        },
        removeClass: function (j) {
            var b, f, d, v, l, q, g;
            if (e.isFunction(j)) return this.each(function (b) {
                e(this).removeClass(j.call(this, b, this.className))
            });
            if (j && "string" == typeof j || j === c) {
                b = (j || "").split(fa);
                q = 0;
                for (g = this.length; q < g; q++) if (d = this[q], 1 === d.nodeType && d.className) {
                    f = (" " + d.className + " ").replace(Mb, " ");
                    v = 0;
                    for (l = b.length; v < l; v++) for (; 0 <= f.indexOf(" " + b[v] + " ");) f = f.replace(" " + b[v] + " ", " ");
                    d.className = j ? e.trim(f) : ""
                }
            }
            return this
        },
        toggleClass: function (j, b) {
            var f = typeof j,
                c = "boolean" == typeof b;
            return e.isFunction(j) ? this.each(function (f) {
                e(this).toggleClass(j.call(this, f, this.className, b), b)
            }) : this.each(function () {
                if ("string" === f) for (var d, l = 0, q = e(this), g = b, n = j.split(fa); d = n[l++];) g = c ? g : !q.hasClass(d), q[g ? "addClass" : "removeClass"](d);
                else if ("undefined" === f || "boolean" === f) this.className && e._data(this, "__className__", this.className), this.className = this.className || !1 === j ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function (j) {
            j = " " + j + " ";
            for (var b = 0, f = this.length; b < f; b++) if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Mb, " ").indexOf(j)) return !0;
            return !1
        },
        val: function (j) {
            var b, f, d, v = this[0];
            if (arguments.length) return d = e.isFunction(j), this.each(function (f) {
                var q, v = e(this);
                if (1 === this.nodeType && (d ? q = j.call(this, f, v.val()) : q = j, null == q ? q = "" : "number" == typeof q ? q += "" : e.isArray(q) && (q = e.map(q, function (j) {
                    return null == j ? "" : j + ""
                })), b = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !b || !("set" in b) || b.set(this, q, "value") === c)) this.value = q
            });
            if (v) return b = e.valHooks[v.type] || e.valHooks[v.nodeName.toLowerCase()], b && "get" in b && (f = b.get(v, "value")) !== c ? f : (f = v.value, "string" == typeof f ? f.replace(Oc, "") : null == f ? "" : f)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function (j) {
                    var b = j.attributes.value;
                    return !b || b.specified ? j.value : j.text
                }
            },
            select: {
                get: function (j) {
                    var b, f, c = j.selectedIndex,
                        d = [],
                        l = j.options,
                        q = "select-one" === j.type;
                    if (0 > c) return null;
                    j = q ? c : 0;
                    for (f = q ? c + 1 : l.length; j < f; j++) if (b = l[j], b.selected && (e.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !e.nodeName(b.parentNode, "optgroup"))) {
                        b = e(b).val();
                        if (q) return b;
                        d.push(b)
                    }
                    return q && !d.length && l.length ? e(l[c]).val() : d
                },
                set: function (j, b) {
                    var f = e.makeArray(b);
                    return e(j).find("option").each(function () {
                        this.selected = 0 <= e.inArray(e(this).val(), f)
                    }), f.length || (j.selectedIndex = -1), f
                }
            }
        },
        attrFn: {},
        attr: function (j, b, f, d) {
            var v, l, q = j.nodeType;
            if (j && !(3 === q || 8 === q || 2 === q)) {
                if (d && e.isFunction(e.fn[b])) return e(j)[b](f);
                if ("undefined" == typeof j.getAttribute) return e.prop(j, b, f);
                (d = 1 !== q || !e.isXMLDoc(j)) && (b = b.toLowerCase(), l = e.attrHooks[b] || (Nb.test(b) ? Kb : ba));
                if (f !== c) {
                    if (null === f) {
                        e.removeAttr(j, b);
                        return
                    }
                    return l && "set" in l && d && (v = l.set(j, f, b)) !== c ? v : (j.setAttribute(b, f + ""), f)
                }
                return l && "get" in l && d && null !== (v = l.get(j, b)) ? v : (v = j.getAttribute(b), null === v ? c : v)
            }
        },
        removeAttr: function (j, b) {
            var f, c, d, l, q = 0;
            if (b && 1 === j.nodeType) for (c = b.split(fa); q < c.length; q++)(d = c[q]) && (f = e.propFix[d] || d, l = Nb.test(d), l || e.attr(j, d, ""), j.removeAttribute(Ob ? d : f), l && f in j && (j[f] = !1))
        },
        attrHooks: {
            type: {
                set: function (j, b) {
                    if (Pc.test(j.nodeName) && j.parentNode) e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === b && e.nodeName(j, "input")) {
                        var f = j.value;
                        return j.setAttribute("type", b), f && (j.value = f), b
                    }
                }
            },
            value: {
                get: function (j, b) {
                    return ba && e.nodeName(j, "button") ? ba.get(j, b) : b in j ? j.value : null
                },
                set: function (j, b, f) {
                    if (ba && e.nodeName(j, "button")) return ba.set(j, b, f);
                    j.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (j, b, f) {
            var d, v, l, q = j.nodeType;
            if (j && !(3 === q || 8 === q || 2 === q)) return l = 1 !== q || !e.isXMLDoc(j), l && (b = e.propFix[b] || b, v = e.propHooks[b]), f !== c ? v && "set" in v && (d = v.set(j, f, b)) !== c ? d : j[b] = f : v && "get" in v && null !== (d = v.get(j, b)) ? d : j[b]
        },
        propHooks: {
            tabIndex: {
                get: function (j) {
                    var b = j.getAttributeNode("tabindex");
                    return b && b.specified ? parseInt(b.value, 10) : Qc.test(j.nodeName) || Rc.test(j.nodeName) && j.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function (j, b) {
            var f, d = e.prop(j, b);
            return !0 === d || "boolean" != typeof d && (f = j.getAttributeNode(b)) && !1 !== f.nodeValue ? b.toLowerCase() : c
        },
        set: function (j, b, f) {
            var c;
            return !1 === b ? e.removeAttr(j, f) : (c = e.propFix[f] || f, c in j && (j[c] = !0), j.setAttribute(f, f.toLowerCase())), f
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    }, ba = e.valHooks.button = {
        get: function (j, b) {
            var f;
            return f = j.getAttributeNode(b), f && (Lb[b] ? "" !== f.value : f.specified) ? f.value : c
        },
        set: function (j, b, f) {
            var c = j.getAttributeNode(f);
            return c || (c = B.createAttribute(f), j.setAttributeNode(c)), c.value = b + ""
        }
    }, e.each(["width", "height"], function (j, b) {
        e.attrHooks[b] = e.extend(e.attrHooks[b], {
            set: function (j, c) {
                if ("" === c) return j.setAttribute(b, "auto"), c
            }
        })
    }), e.attrHooks.contenteditable = {
        get: ba.get,
        set: function (j, b, f) {
            "" === b && (b = "false");
            ba.set(j, b, f)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function (b, u) {
        e.attrHooks[u] = e.extend(e.attrHooks[u], {
            get: function (b) {
                b = b.getAttribute(u, 2);
                return null === b ? c : b
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function (b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function (b, c) {
            return b.style.cssText = c + ""
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function (b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"], function () {
        e.valHooks[this] = {
            get: function (b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    e.each(["radio", "checkbox"], function () {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function (b, c) {
                if (e.isArray(c)) return b.checked = 0 <= e.inArray(e(b).val(), c)
            }
        })
    });
    var db = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function (b) {
            return e.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    e.event = {
        add: function (b, u, f, d, v) {
            var l, q, g, n, m, t, r, p, x;
            if (!(3 === b.nodeType || 8 === b.nodeType || !u || !f || !(l = e._data(b)))) {
                f.handler && (r = f, f = r.handler, v = r.selector);
                f.guid || (f.guid = e.guid++);
                (g = l.events) || (l.events = g = {});
                (q = l.handle) || (l.handle = q = function (b) {
                    return "undefined" != typeof e && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(q.elem, arguments) : c
                }, q.elem = b);
                u = e.trim(Rb(u)).split(" ");
                for (l = 0; l < u.length; l++) {
                    n = Pb.exec(u[l]) || [];
                    m = n[1];
                    t = (n[2] || "").split(".").sort();
                    x = e.event.special[m] || {};
                    m = (v ? x.delegateType : x.bindType) || m;
                    x = e.event.special[m] || {};
                    n = e.extend({
                        type: m,
                        origType: n[1],
                        data: d,
                        handler: f,
                        guid: f.guid,
                        selector: v,
                        needsContext: v && e.expr.match.needsContext.test(v),
                        namespace: t.join(".")
                    }, r);
                    p = g[m];
                    if (!p && (p = g[m] = [], p.delegateCount = 0, !x.setup || !1 === x.setup.call(b, d, t, q))) b.addEventListener ? b.addEventListener(m, q, !1) : b.attachEvent && b.attachEvent("on" + m, q);
                    x.add && (x.add.call(b, n), n.handler.guid || (n.handler.guid = f.guid));
                    v ? p.splice(p.delegateCount++, 0, n) : p.push(n);
                    e.event.global[m] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function (b, c, f, d, v) {
            var l, q, g, n, m, t, r, p, x, C, s = e.hasData(b) && e._data(b);
            if (s && (r = s.events)) {
                c = e.trim(Rb(c || "")).split(" ");
                for (l = 0; l < c.length; l++) if (q = Pb.exec(c[l]) || [], g = n = q[1], q = q[2], g) {
                    p = e.event.special[g] || {};
                    g = (d ? p.delegateType : p.bindType) || g;
                    x = r[g] || [];
                    m = x.length;
                    q = q ? RegExp("(^|\\.)" + q.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (t = 0; t < x.length; t++) C = x[t], (v || n === C.origType) && (!f || f.guid === C.guid) && (!q || q.test(C.namespace)) && (!d || d === C.selector || "**" === d && C.selector) && (x.splice(t--, 1), C.selector && x.delegateCount--, p.remove && p.remove.call(b, C));
                    0 === x.length && m !== x.length && ((!p.teardown || !1 === p.teardown.call(b, q, s.handle)) && e.removeEvent(b, g, s.handle), delete r[g])
                } else for (g in r) e.event.remove(b, g + c[l], f, d, !0);
                e.isEmptyObject(r) && (delete s.handle, e.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (j, u, f, d) {
            if (!f || 3 !== f.nodeType && 8 !== f.nodeType) {
                var v, l, q, g, n, m, t, r = j.type || j;
                g = [];
                if (!Qb.test(r + e.event.triggered) && (0 <= r.indexOf("!") && (r = r.slice(0, -1), v = !0), 0 <= r.indexOf(".") && (g = r.split("."), r = g.shift(), g.sort()), f && !e.event.customEvent[r] || e.event.global[r])) if (j = "object" == typeof j ? j[e.expando] ? j : new e.Event(r, j) : new e.Event(r), j.type = r, j.isTrigger = !0, j.exclusive = v, j.namespace = g.join("."), j.namespace_re = j.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, g = 0 > r.indexOf(":") ? "on" + r : "", f) {
                    if (j.result = c, j.target || (j.target = f), u = null != u ? e.makeArray(u) : [], u.unshift(j), n = e.event.special[r] || {}, !(n.trigger && !1 === n.trigger.apply(f, u))) {
                        t = [
                            [f, n.bindType || r]
                        ];
                        if (!d && !n.noBubble && !e.isWindow(f)) {
                            l = n.delegateType || r;
                            v = Qb.test(l + r) ? f : f.parentNode;
                            for (q = f; v; v = v.parentNode) t.push([v, l]), q = v;
                            q === (f.ownerDocument || B) && t.push([q.defaultView || q.parentWindow || b, l])
                        }
                        for (l = 0; l < t.length && !j.isPropagationStopped(); l++) v = t[l][0], j.type = t[l][1], (m = (e._data(v, "events") || {})[j.type] && e._data(v, "handle")) && m.apply(v, u), (m = g && v[g]) && e.acceptData(v) && m.apply && !1 === m.apply(v, u) && j.preventDefault();
                        return j.type = r, !d && !j.isDefaultPrevented() && (!n._default || !1 === n._default.apply(f.ownerDocument, u)) && ("click" !== r || !e.nodeName(f, "a")) && e.acceptData(f) && g && f[r] && ("focus" !== r && "blur" !== r || 0 !== j.target.offsetWidth) && !e.isWindow(f) && (q = f[g], q && (f[g] = null), e.event.triggered = r, f[r](), e.event.triggered = c, q && (f[g] = q)), j.result
                    }
                } else for (l in f = e.cache, f) f[l].events && f[l].events[r] && e.event.trigger(j, u, f[l].handle.elem, !0)
            }
        },
        dispatch: function (j) {
            j = e.event.fix(j || b.event);
            var u, f, d, l, g, q, n = (e._data(this, "events") || {})[j.type] || [],
                m = n.delegateCount,
                t = Z.call(arguments),
                r = !j.exclusive && !j.namespace,
                p = e.event.special[j.type] || {},
                x = [];
            t[0] = j;
            j.delegateTarget = this;
            if (!(p.preDispatch && !1 === p.preDispatch.call(this, j))) {
                if (m && (!j.button || "click" !== j.type)) for (f = j.target; f != this; f = f.parentNode || this) if (!0 !== f.disabled || "click" !== j.type) {
                    l = {};
                    g = [];
                    for (u = 0; u < m; u++) d = n[u], q = d.selector, l[q] === c && (l[q] = d.needsContext ? 0 <= e(q, this).index(f) : e.find(q, this, null, [f]).length), l[q] && g.push(d);
                    g.length && x.push({
                        elem: f,
                        matches: g
                    })
                }
                n.length > m && x.push({
                    elem: this,
                    matches: n.slice(m)
                });
                for (u = 0; u < x.length && !j.isPropagationStopped(); u++) {
                    l = x[u];
                    j.currentTarget = l.elem;
                    for (f = 0; f < l.matches.length && !j.isImmediatePropagationStopped(); f++) if (d = l.matches[f], r || !j.namespace && !d.namespace || j.namespace_re && j.namespace_re.test(d.namespace)) j.data = d.data, j.handleObj = d, d = ((e.event.special[d.origType] || {}).handle || d.handler).apply(l.elem, t), d !== c && (j.result = d, !1 === d && (j.preventDefault(), j.stopPropagation()))
                }
                return p.postDispatch && p.postDispatch.call(this, j), j.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function (b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (b, e) {
                var f, d, l, g = e.button,
                    q = e.fromElement;
                return null == b.pageX && null != e.clientX && (f = b.target.ownerDocument || B, d = f.documentElement, l = f.body, b.pageX = e.clientX + (d && d.scrollLeft || l && l.scrollLeft || 0) - (d && d.clientLeft || l && l.clientLeft || 0), b.pageY = e.clientY + (d && d.scrollTop || l && l.scrollTop || 0) - (d && d.clientTop || l && l.clientTop || 0)), !b.relatedTarget && q && (b.relatedTarget = q === b.target ? e.toElement : q), !b.which && g !== c && (b.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), b
            }
        },
        fix: function (b) {
            if (b[e.expando]) return b;
            var c, f, d = b,
                l = e.event.fixHooks[b.type] || {},
                g = l.props ? this.props.concat(l.props) : this.props;
            b = e.Event(d);
            for (c = g.length; c;) f = g[--c], b[f] = d[f];
            return b.target || (b.target = d.srcElement || B), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !! b.metaKey, l.filter ? l.filter(b, d) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (b, c, f) {
                    e.isWindow(this) && (this.onbeforeunload = f)
                },
                teardown: function (b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (b, c, f, d) {
            b = e.extend(new e.Event, f, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? e.event.trigger(b, null, c) : e.event.dispatch.call(c, b);
            b.isDefaultPrevented() && f.preventDefault()
        }
    };
    e.event.handle =
    e.event.dispatch;
    e.removeEvent = B.removeEventListener ?
    function (b, c, f) {
        b.removeEventListener && b.removeEventListener(c, f, !1)
    } : function (b, c, f) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, f))
    };
    e.Event = function (b, c) {
        if (this instanceof e.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? p : m) : this.type = b, c && e.extend(this, c), this.timeStamp = b && b.timeStamp || e.now(), this[e.expando] = !0;
        else return new e.Event(b, c)
    };
    e.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = p;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = p;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = p;
            this.stopPropagation()
        },
        isDefaultPrevented: m,
        isPropagationStopped: m,
        isImmediatePropagationStopped: m
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (b, c) {
        e.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function (b) {
                var j, d = b.relatedTarget,
                    l = b.handleObj;
                if (!d || d !== this && !e.contains(this, d)) b.type = l.origType, j = l.handler.apply(this, arguments), b.type = c;
                return j
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function () {
            if (e.nodeName(this, "form")) return !1;
            e.event.add(this, "click._submit keypress._submit", function (b) {
                b = b.target;
                (b = e.nodeName(b, "input") || e.nodeName(b, "button") ? b.form : c) && !e._data(b, "_submit_attached") && (e.event.add(b, "submit._submit", function (b) {
                    b._submit_bubble = !0
                }), e._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function (b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function () {
            if (e.nodeName(this, "form")) return !1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function () {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) e.event.add(this, "propertychange._change", function (b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), e.event.add(this, "click._change", function (b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    e.event.simulate("change", this, b, !0)
                });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function (b) {
                b = b.target;
                db.test(b.nodeName) && !e._data(b, "_change_attached") && (e.event.add(b, "change._change", function (b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && e.event.simulate("change", this.parentNode, b, !0)
                }), e._data(b, "_change_attached", !0))
            })
        },
        handle: function (b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return e.event.remove(this, "._change"), !db.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function (b, c) {
        var f = 0,
            d = function (b) {
                e.event.simulate(c, b.target, e.event.fix(b), !0)
            };
        e.event.special[c] = {
            setup: function () {
                0 === f++ && B.addEventListener(b, d, !0)
            },
            teardown: function () {
                0 === --f && B.removeEventListener(b, d, !0)
            }
        }
    });
    e.fn.extend({
        on: function (b, u, f, d, l) {
            var g, q;
            if ("object" == typeof b) {
                "string" != typeof u && (f = f || u, u = c);
                for (q in b) this.on(q, u, f, b[q], l);
                return this
            }
            null == f && null == d ? (d = u, f = u = c) : null == d && ("string" == typeof u ? (d = f, f = c) : (d = f, f = u, u = c));
            if (!1 === d) d = m;
            else if (!d) return this;
            return 1 === l && (g = d, d = function (b) {
                return e().off(b), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = e.guid++)), this.each(function () {
                e.event.add(this, b, d, f, u)
            })
        },
        one: function (b, c, f, e) {
            return this.on(b, c, f, e, 1)
        },
        off: function (b, u, f) {
            var d, l;
            if (b && b.preventDefault && b.handleObj) return d = b.handleObj, e(b.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof b) {
                for (l in b) this.off(l, u, b[l]);
                return this
            }
            if (!1 === u || "function" == typeof u) f = u, u = c;
            return !1 === f && (f = m), this.each(function () {
                e.event.remove(this, b, f, u)
            })
        },
        bind: function (b, c, f) {
            return this.on(b, null, c, f)
        },
        unbind: function (b, c) {
            return this.off(b, null, c)
        },
        live: function (b, c, f) {
            return e(this.context).on(b, this.selector, c, f), this
        },
        die: function (b, c) {
            return e(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function (b, c, f, e) {
            return this.on(c, b, f, e)
        },
        undelegate: function (b, c, f) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", f)
        },
        trigger: function (b, c) {
            return this.each(function () {
                e.event.trigger(b, c, this)
            })
        },
        triggerHandler: function (b, c) {
            if (this[0]) return e.event.trigger(b, c, this[0], !0)
        },
        toggle: function (b) {
            var c = arguments,
                f =
                b.guid || e.guid++,
                d = 0,
                l = function (f) {
                    var l = (e._data(this, "lastToggle" + b.guid) || 0) % d;
                    return e._data(this, "lastToggle" + b.guid, l + 1), f.preventDefault(), c[l].apply(this, arguments) || !1
                };
            for (l.guid = f; d < c.length;) c[d++].guid = f;
            return this.click(l)
        },
        hover: function (b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (b, c) {
        e.fn[c] = function (b, j) {
            return null == j && (j = b, b = null), 0 < arguments.length ? this.on(c, null, b, j) : this.trigger(c)
        };
        Tc.test(c) && (e.event.fixHooks[c] = e.event.keyHooks);
        Uc.test(c) && (e.event.fixHooks[c] = e.event.mouseHooks)
    });
    var Vc = b,
        E = function (b, c, f, e) {
            f = f || [];
            c = c || W;
            var d, l, q, g, n = c.nodeType;
            if (!b || "string" != typeof b) return f;
            if (1 !== n && 9 !== n) return [];
            q = Ka(c);
            if (!q && !e && (d = Wc.exec(b))) if (g = d[1]) if (9 === n) {
                l = c.getElementById(g);
                if (!l || !l.parentNode) return f;
                if (l.id === g) return f.push(l), f
            } else {
                if (c.ownerDocument && (l = c.ownerDocument.getElementById(g)) && Sb(c, l) && l.id === g) return f.push(l), f
            } else {
                if (d[2]) return oa.apply(f, pa.call(c.getElementsByTagName(b), 0)), f;
                if ((g = d[3]) && Tb && c.getElementsByClassName) return oa.apply(f, pa.call(c.getElementsByClassName(g), 0)), f
            }
            return eb(b.replace(La, "$1"), c, f, e, q)
        },
        va = function (b) {
            return function (c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Ub = function (b) {
            return function (c) {
                var f = c.nodeName.toLowerCase();
                return ("input" === f || "button" === f) && c.type === b
            }
        },
        ia = function (b) {
            return X(function (c) {
                return c = +c, X(function (f, e) {
                    for (var d, l = b([], f.length, c), q = l.length; q--;) f[d = l[q]] && (f[d] = !(e[d] = f[d]))
                })
            })
        },
        Ma = function (b, c, f) {
            if (b === c) return f;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Oa = function (b, c) {
            var f, e, d, l, q, g, n;
            if (q = Vb[N][b]) return c ? 0 : q.slice(0);
            q = b;
            g = [];
            for (n = F.preFilter; q;) {
                if (!f || (e = Xc.exec(q))) e && (q = q.slice(e[0].length)), g.push(d = []);
                f = !1;
                if (e = Yc.exec(q)) d.push(f = new Wb(e.shift())), q = q.slice(f.length), f.type = e[0].replace(La, " ");
                for (l in F.filter)(e = Na[l].exec(q)) && (!n[l] || (e = n[l](e, W, !0))) && (d.push(f = new Wb(e.shift())), q = q.slice(f.length), f.type = l, f.matches = e);
                if (!f) break
            }
            return c ? q.length : q ? E.error(b) : Vb(b, g).slice(0)
        },
        gb = function (b, c, f) {
            var e = c.dir,
                d = f && "parentNode" === c.dir,
                l = Zc++;
            return c.first ?
            function (c, f, u) {
                for (; c = c[e];) if (d || 1 === c.nodeType) return b(c, f, u)
            } : function (c, f, u) {
                if (u) for (; c = c[e];) {
                    if ((d || 1 === c.nodeType) && b(c, f, u)) return c
                } else for (var g, n = wa + " " + l + " ", m = n + fb; c = c[e];) if (d || 1 === c.nodeType) {
                    if ((g = c[N]) === m) return c.sizset;
                    if ("string" == typeof g && 0 === g.indexOf(n)) {
                        if (c.sizset) return c
                    } else {
                        c[N] = m;
                        if (b(c, f, u)) return c.sizset = !0, c;
                        c.sizset = !1
                    }
                }
            }
        },
        hb = function (b) {
            return 1 < b.length ?
            function (c, f, e) {
                for (var d = b.length; d--;) if (!b[d](c, f, e)) return !1;
                return !0
            } : b[0]
        },
        Pa = function (b, c, f, e, d) {
            for (var l, q = [], g = 0, n = b.length, m = null != c; g < n; g++) if (l = b[g]) if (!f || f(l, e, d)) q.push(l), m && c.push(g);
            return q
        },
        ib = function (b, c, f, e, d, l) {
            return e && !e[N] && (e = ib(e)), d && !d[N] && (d = ib(d, l)), X(function (l, g, n, m) {
                if (!l || !d) {
                    var t, r, M = [],
                        p = [],
                        x = g.length;
                    if (!(r = l)) {
                        r = c || "*";
                        var C =
                        n.nodeType ? [n] : n,
                            s = [];
                        t = 0;
                        for (var z = C.length; t < z; t++) E(r, C[t], s, l);
                        r = s
                    }
                    C = b && (l || !c) ? Pa(r, M, b, n, m) : r;
                    s = f ? d || (l ? b : x || e) ? [] : g : C;
                    f && f(C, s, n, m);
                    if (e) {
                        r = Pa(s, p);
                        e(r, [], n, m);
                        for (n = r.length; n--;) if (t = r[n]) s[p[n]] = !(C[p[n]] = t)
                    }
                    if (l) for (n = b && s.length; n--;) {
                        if (t = s[n]) l[M[n]] = !(g[M[n]] = t)
                    } else s = Pa(s === g ? s.splice(x, s.length) : s), d ? d(null, g, s, m) : oa.apply(g, s)
                }
            })
        },
        jb = function (b) {
            var c, f, e, d = b.length,
                l = F.relative[b[0].type];
            f = l || F.relative[" "];
            for (var q = l ? 1 : 0, g = gb(function (b) {
                return b === c
            }, f, !0), n = gb(function (b) {
                return -1 < Xb.call(c, b)
            }, f, !0), m = [function (b, j, f) {
                return !l && (f || j !== Qa) || ((c = j).nodeType ? g(b, j, f) : n(b, j, f))
            }]; q < d; q++) if (f = F.relative[b[q].type]) m = [gb(hb(m), f)];
            else {
                f = F.filter[b[q].type].apply(null, b[q].matches);
                if (f[N]) {
                    for (e = ++q; e < d && !F.relative[b[e].type]; e++);
                    return ib(1 < q && hb(m), 1 < q && b.slice(0, q - 1).join("").replace(La, "$1"), f, q < e && jb(b.slice(q, e)), e < d && jb(b = b.slice(e)), e < d && b.join(""))
                }
                m.push(f)
            }
            return hb(m)
        },
        eb = function (b, c, f, e, d) {
            var l, q, g, n, m = Oa(b);
            if (!e && 1 === m.length) {
                q = m[0] = m[0].slice(0);
                if (2 < q.length && "ID" === (g = q[0]).type && 9 === c.nodeType && !d && F.relative[q[1].type]) {
                    c = F.find.ID(g.matches[0].replace(ja, ""), c, d)[0];
                    if (!c) return f;
                    b = b.slice(q.shift().length)
                }
                for (l = Na.POS.test(b) ? -1 : q.length - 1; 0 <= l; l--) {
                    g = q[l];
                    if (F.relative[n = g.type]) break;
                    if (n = F.find[n]) if (e = n(g.matches[0].replace(ja, ""), kb.test(q[0].type) && c.parentNode || c, d)) {
                        q.splice(l, 1);
                        b = e.length && q.join("");
                        if (!b) return oa.apply(f, pa.call(e, 0)), f;
                        break
                    }
                }
            }
            return lb(b, m)(e, c, d, f, kb.test(b)), f
        },
        Yb = function () {},
        fb, mb, F, Ra, Ka, Sb, lb, nb, xa, Qa, Zb = !0,
        N = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        W = Vc.document,
        V = W.documentElement,
        wa = 0,
        Zc = 0,
        $c = [].pop,
        oa = [].push,
        pa = [].slice,
        Xb = [].indexOf ||
        function (b) {
            for (var c = 0, f = this.length; c < f; c++) if (this[c] === b) return c;
            return -1
        },
        X = function (b, c) {
            return b[N] = null == c || c, b
        },
        ob = function () {
            var b = {},
                c = [];
            return X(function (f, e) {
                return c.push(f) > F.cacheLength && delete b[c.shift()], b[f] = e
            }, b)
        },
        $b = ob(),
        Vb = ob(),
        ac = ob(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(pb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        kb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ja = /\\(?!\\)/g,
        Na = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + pb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        ca = function (b) {
            var c = W.createElement("div");
            try {
                return b(c)
            } catch (f) {
                return !1
            } finally {}
        },
        dd = ca(function (b) {
            return b.appendChild(W.createComment("")), !b.getElementsByTagName("*").length
        }),
        ed = ca(function (b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = ca(function (b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = ca(function (b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        gd = ca(function (b) {
            b.id = N + 0;
            b.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>";
            V.insertBefore(b, V.firstChild);
            var c = W.getElementsByName && W.getElementsByName(N).length === 2 + W.getElementsByName(N + 0).length;
            return mb = !W.getElementById(N), V.removeChild(b), c
        });
    try {
        pa.call(V.childNodes, 0)[0].nodeType
    } catch (Qd) {
        pa = function (b) {
            for (var c, f = []; c = this[b]; b++) f.push(c);
            return f
        }
    }
    E.matches = function (b, c) {
        return E(b, null, null, c)
    };
    E.matchesSelector = function (b, c) {
        return 0 < E(c, null, null, [b]).length
    };
    Ra = E.getText = function (b) {
        var c, f = "",
            e = 0;
        if (c = b.nodeType) if (1 === c || 9 === c || 11 === c) {
            if ("string" == typeof b.textContent) return b.textContent;
            for (b = b.firstChild; b; b =
            b.nextSibling) f += Ra(b)
        } else {
            if (3 === c || 4 === c) return b.nodeValue
        } else for (; c = b[e]; e++) f += Ra(c);
        return f
    };
    Ka = E.isXML = function (b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = E.contains = V.contains ?
    function (b, c) {
        var f = 9 === b.nodeType ? b.documentElement : b,
            e = c && c.parentNode;
        return b === e || !(!e || !(1 === e.nodeType && f.contains && f.contains(e)))
    } : V.compareDocumentPosition ?
    function (b, c) {
        return c && !! (b.compareDocumentPosition(c) & 16)
    } : function (b, c) {
        for (; c = c.parentNode;) if (c === b) return !0;
        return !1
    };
    E.attr = function (b, c) {
        var f, e = Ka(b);
        return e || (c = c.toLowerCase()), (f = F.attrHandle[c]) ? f(b) : e || fd ? b.getAttribute(c) : (f = b.getAttributeNode(c), f ? "boolean" == typeof b[c] ? b[c] ? c : null : f.specified ? f.value : null : null)
    };
    F = E.selectors = {
        cacheLength: 50,
        createPseudo: X,
        match: Na,
        attrHandle: ed ? {} : {
            href: function (b) {
                return b.getAttribute("href", 2)
            },
            type: function (b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: mb ?
            function (b, c, f) {
                if ("undefined" !== typeof c.getElementById && !f) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function (b, c, f) {
                if ("undefined" !== typeof c.getElementById && !f) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: dd ?
            function (b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function (b, c) {
                var f = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var e, d = [], l = 0; e = f[l]; l++) 1 === e.nodeType && d.push(e);
                    return d
                }
                return f
            },
            NAME: gd &&
            function (b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Tb &&
            function (b, c, f) {
                if ("undefined" !== typeof c.getElementsByClassName && !f) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function (b) {
                return b[1] = b[1].replace(ja, ""), b[3] = (b[4] || b[5] || "").replace(ja, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function (b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || E.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && E.error(b[0]), b
            },
            PSEUDO: function (b) {
                var c, f;
                if (Na.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) ad.test(c) && (f = Oa(c, !0)) && (f = c.indexOf(")", c.length - f) - c.length) && (c = c.slice(0, f), b[0] = b[0].slice(0, f)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ?
            function (b) {
                return b = b.replace(ja, ""), function (c) {
                    return c.getAttribute("id") === b
                }
            } : function (b) {
                return b = b.replace(ja, ""), function (c) {
                    return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b
                }
            },
            TAG: function (b) {
                return "*" === b ?
                function () {
                    return !0
                } : (b = b.replace(ja, "").toLowerCase(), function (c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function (b) {
                var c = $b[N][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))), function (b) {
                    return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                }
            },
            ATTR: function (b, c, f) {
                return function (e) {
                    e = E.attr(e, b);
                    return null == e ? "!=" === c : c ? (e += "", "=" === c ? e === f : "!=" === c ? e !== f : "^=" === c ? f && 0 === e.indexOf(f) : "*=" === c ? f && -1 < e.indexOf(f) : "$=" === c ? f && e.substr(e.length - f.length) === f : "~=" === c ? -1 < (" " + e + " ").indexOf(f) : "|=" === c ? e === f || e.substr(0, f.length + 1) === f + "-" : !1) : !0
                }
            },
            CHILD: function (b, c, f, e) {
                return "nth" === b ?
                function (b) {
                    var j, c;
                    j = b.parentNode;
                    if (1 === f && 0 === e) return !0;
                    if (j) {
                        c = 0;
                        for (j = j.firstChild; j && !(1 === j.nodeType && (c++, b === j)); j = j.nextSibling);
                    }
                    return c -= e, c === f || 0 === c % f && 0 <= c / f
                } : function (c) {
                    var f = c;
                    switch (b) {
                    case "only":
                    case "first":
                        for (; f = f.previousSibling;) if (1 === f.nodeType) return !1;
                        if ("first" === b) return !0;
                        f = c;
                    case "last":
                        for (; f = f.nextSibling;) if (1 === f.nodeType) return !1;
                        return !0
                    }
                }
            },
            PSEUDO: function (b, c) {
                var f, e = F.pseudos[b] || F.setFilters[b.toLowerCase()] || E.error("unsupported pseudo: " + b);
                return e[N] ? e(c) : 1 < e.length ? (f = [b, b, "", c], F.setFilters.hasOwnProperty(b.toLowerCase()) ? X(function (b, j) {
                    for (var f, d = e(b, c), l = d.length; l--;) f = Xb.call(b, d[l]), b[f] = !(j[f] = d[l])
                }) : function (b) {
                    return e(b, 0, f)
                }) : e
            }
        },
        pseudos: {
            not: X(function (b) {
                var c = [],
                    f = [],
                    e = lb(b.replace(La, "$1"));
                return e[N] ? X(function (b, j, c, f) {
                    f = e(b, null, f, []);
                    for (var d = b.length; d--;) if (c = f[d]) b[d] = !(j[d] = c)
                }) : function (b, j, d) {
                    return c[0] = b, e(c, null, d, f), !f.pop()
                }
            }),
            has: X(function (b) {
                return function (c) {
                    return 0 < E(b, c).length
                }
            }),
            contains: X(function (b) {
                return function (c) {
                    return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function (b) {
                return !1 === b.disabled
            },
            disabled: function (b) {
                return !0 === b.disabled
            },
            checked: function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !! b.checked || "option" === c && !! b.selected
            },
            selected: function (b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function (b) {
                return !F.pseudos.empty(b)
            },
            empty: function (b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function (b) {
                return bd.test(b.nodeName)
            },
            text: function (b) {
                var c, f;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (f = b.getAttribute("type")) || f.toLowerCase() === c)
            },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function (b) {
                return cd.test(b.nodeName)
            },
            focus: function (b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && ( !! b.type || !! b.href)
            },
            active: function (b) {
                return b === b.ownerDocument.activeElement
            },
            first: ia(function () {
                return [0]
            }),
            last: ia(function (b, c) {
                return [c - 1]
            }),
            eq: ia(function (b, c, f) {
                return [0 > f ? f + c : f]
            }),
            even: ia(function (b, c) {
                for (var f = 0; f < c; f += 2) b.push(f);
                return b
            }),
            odd: ia(function (b, c) {
                for (var f = 1; f < c; f += 2) b.push(f);
                return b
            }),
            lt: ia(function (b, c, f) {
                for (c = 0 > f ? f + c : f; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ia(function (b, c, f) {
                for (f = 0 > f ? f + c : f; ++f < c;) b.push(f);
                return b
            })
        }
    };
    nb = V.compareDocumentPosition ?
    function (b, c) {
        return b === c ? (xa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function (b, c) {
        if (b === c) return xa = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var f, e, d = [],
            l = [];
        f = b.parentNode;
        e = c.parentNode;
        var g = f;
        if (f === e) return Ma(b, c);
        if (!f) return -1;
        if (!e) return 1;
        for (; g;) d.unshift(g), g = g.parentNode;
        for (g = e; g;) l.unshift(g), g = g.parentNode;
        f = d.length;
        e = l.length;
        for (g = 0; g < f && g < e; g++) if (d[g] !== l[g]) return Ma(d[g], l[g]);
        return g === f ? Ma(b, l[g], -1) : Ma(d[g], c, 1)
    };
    [0, 0].sort(nb);
    Zb = !xa;
    E.uniqueSort = function (b) {
        var c, f = 1;
        xa = Zb;
        b.sort(nb);
        if (xa) for (; c = b[f]; f++) c === b[f - 1] && b.splice(f--, 1);
        return b
    };
    E.error = function (b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    lb = E.compile = function (b, c) {
        var f, e = [],
            d = [],
            l = ac[N][b];
        if (!l) {
            c || (c = Oa(b));
            for (f = c.length; f--;) l = jb(c[f]), l[N] ? e.push(l) : d.push(l);
            var g = 0 < e.length,
                n = 0 < d.length,
                m = function (b, j, c, f, l) {
                    var u, t, r = [],
                        p = 0,
                        M = "0",
                        x = b && [],
                        s = null != l,
                        C = Qa,
                        z = b || n && F.find.TAG("*", l && j.parentNode || j),
                        y = wa += null == C ? 1 : Math.E;
                    for (s && (Qa = j !== W && j, fb = m.el); null != (l = z[M]); M++) {
                        if (n && l) {
                            for (u = 0; t = d[u]; u++) if (t(l, j, c)) {
                                f.push(l);
                                break
                            }
                            s && (wa = y, fb = ++m.el)
                        }
                        g && ((l = !t && l) && p--, b && x.push(l))
                    }
                    p += M;
                    if (g && M !== p) {
                        for (u = 0; t = e[u]; u++) t(x, r, j, c);
                        if (b) {
                            if (0 < p) for (; M--;)!x[M] && !r[M] && (r[M] = $c.call(f));
                            r = Pa(r)
                        }
                        oa.apply(f, r);
                        s && !b && 0 < r.length && 1 < p + e.length && E.uniqueSort(f)
                    }
                    return s && (wa = y, Qa = C), x
                };
            f = (m.el = 0, g ? X(m) : m);
            l = ac(b, f)
        }
        return l
    };
    if (W.querySelectorAll) {
        var cc, hd = eb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Y = [":focus"],
            Sa = [":active", ":focus"],
            Ta = V.matchesSelector || V.mozMatchesSelector || V.webkitMatchesSelector || V.oMatchesSelector || V.msMatchesSelector;
        ca(function (b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Y.push(":checked")
        });
        ca(function (b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Y.push(":enabled", ":disabled")
        });
        Y = RegExp(Y.join("|"));
        eb = function (b, c, f, e, d) {
            if (!e && !d && (!Y || !Y.test(b))) {
                var l, g, n = !0,
                    m = N;
                g = c;
                l = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    l = Oa(b);
                    (n = c.getAttribute("id")) ? m = n.replace(id, "\\$&") : c.setAttribute("id", m);
                    m = "[id='" + m + "'] ";
                    for (g = l.length; g--;) l[g] = m + l[g].join("");
                    g = kb.test(b) && c.parentNode || c;
                    l = l.join(",")
                }
                if (l) try {
                    return oa.apply(f, pa.call(g.querySelectorAll(l), 0)), f
                } catch (t) {} finally {
                    n || c.removeAttribute("id")
                }
            }
            return hd(b, c, f, e, d)
        };
        Ta && (ca(function (b) {
            cc = Ta.call(b, "div");
            try {
                Ta.call(b, "[test!='']:sizzle"), Sa.push("!=", pb)
            } catch (c) {}
        }), Sa = RegExp(Sa.join("|")), E.matchesSelector = function (b, c) {
            c = c.replace(jd, "='$1']");
            if (!Ka(b) && !Sa.test(c) && (!Y || !Y.test(c))) try {
                var f = Ta.call(b, c);
                if (f || cc || b.document && 11 !== b.document.nodeType) return f
            } catch (e) {}
            return 0 < E(c, null, null, [b]).length
        })
    }
    F.pseudos.nth = F.pseudos.eq;
    F.filters = Yb.prototype = F.pseudos;
    F.setFilters = new Yb;
    E.attr = e.attr;
    e.find = E;
    e.expr = E.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique =
    E.uniqueSort;
    e.text = E.getText;
    e.isXMLDoc = E.isXML;
    e.contains = E.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = e.expr.match.needsContext,
        md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        find: function (b) {
            var c, f, d, l, g, q, n = this;
            if ("string" != typeof b) return e(b).filter(function () {
                c = 0;
                for (f = n.length; c < f; c++) if (e.contains(n[c], this)) return !0
            });
            q = this.pushStack("", "find", b);
            c = 0;
            for (f = this.length; c < f; c++) if (d = q.length, e.find(b, this[c], q), 0 < c) for (l = d; l < q.length; l++) for (g =
            0; g < d; g++) if (q[g] === q[l]) {
                q.splice(l--, 1);
                break
            }
            return q
        },
        has: function (b) {
            var c, f = e(b, this),
                d = f.length;
            return this.filter(function () {
                for (c = 0; c < d; c++) if (e.contains(this, f[c])) return !0
            })
        },
        not: function (b) {
            return this.pushStack(x(this, b, !1), "not", b)
        },
        filter: function (b) {
            return this.pushStack(x(this, b, !0), "filter", b)
        },
        is: function (b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= e(b, this.context).index(this[0]) : 0 < e.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function (b, c) {
            for (var f, d = 0, l = this.length, g = [], q = dc.test(b) || "string" != typeof b ? e(b, c || this.context) : 0; d < l; d++) for (f = this[d]; f && f.ownerDocument && f !== c && 11 !== f.nodeType;) {
                if (q ? -1 < q.index(f) : e.find.matchesSelector(f, b)) {
                    g.push(f);
                    break
                }
                f = f.parentNode
            }
            return g = 1 < g.length ? e.unique(g) : g, this.pushStack(g, "closest", b)
        },
        index: function (b) {
            return b ? "string" == typeof b ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (b, c) {
            var f = "string" == typeof b ? e(b, c) : e.makeArray(b && b.nodeType ? [b] : b),
                d = e.merge(this.get(), f);
            return this.pushStack(y(f[0]) || y(d[0]) ? d : e.unique(d))
        },
        addBack: function (b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    e.fn.andSelf = e.fn.addBack;
    e.each({
        parent: function (b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function (b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function (b, c, f) {
            return e.dir(b, "parentNode", f)
        },
        next: function (b) {
            return r(b, "nextSibling")
        },
        prev: function (b) {
            return r(b, "previousSibling")
        },
        nextAll: function (b) {
            return e.dir(b, "nextSibling")
        },
        prevAll: function (b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function (b, c, f) {
            return e.dir(b, "nextSibling", f)
        },
        prevUntil: function (b, c, f) {
            return e.dir(b, "previousSibling", f)
        },
        siblings: function (b) {
            return e.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function (b) {
            return e.sibling(b.firstChild)
        },
        contents: function (b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : e.merge([], b.childNodes)
        }
    }, function (b, c) {
        e.fn[b] = function (f, d) {
            var l = e.map(this, c, f);
            return kd.test(b) || (d = f), d && "string" == typeof d && (l = e.filter(d, l)), l = 1 < this.length && !md[b] ? e.unique(l) : l, 1 < this.length && ld.test(b) && (l = l.reverse()), this.pushStack(l, b, Z.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function (b, c, f) {
            return f && (b = ":not(" + b + ")"), 1 === c.length ? e.find.matchesSelector(c[0], b) ? [c[0]] : [] : e.find.matches(b, c)
        },
        dir: function (b, d, f) {
            var l = [];
            for (b = b[d]; b && 9 !== b.nodeType && (f === c || 1 !== b.nodeType || !e(b).is(f));) 1 === b.nodeType && l.push(b), b = b[d];
            return l
        },
        sibling: function (b, c) {
            for (var f = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && f.push(b);
            return f
        }
    });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        qb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        rb = RegExp("<(?:" + wb + ")[\\s/>]", "i"),
        xb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        U = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hc = s(B),
        sb = hc.appendChild(B.createElement("div"));
    U.optgroup =
    U.option;
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    e.support.htmlSerialize || (U._default = [1, "X<div>", "</div>"]);
    e.fn.extend({
        text: function (b) {
            return e.access(this, function (b) {
                return b === c ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function (b) {
            if (e.isFunction(b)) return this.each(function (c) {
                e(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function () {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function (b) {
            return e.isFunction(b) ? this.each(function (c) {
                e(this).wrapInner(b.call(this, c))
            }) : this.each(function () {
                var c = e(this),
                    f = c.contents();
                f.length ? f.wrapAll(b) : c.append(b)
            })
        },
        wrap: function (b) {
            var c = e.isFunction(b);
            return this.each(function (f) {
                e(this).wrapAll(c ? b.call(this, f) : b)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function () {
            if (!y(this[0])) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(b, this), "before", this.selector)
            }
        },
        after: function () {
            if (!y(this[0])) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(this, b), "after", this.selector)
            }
        },
        remove: function (b, c) {
            for (var f, d = 0; null != (f = this[d]); d++) if (!b || e.filter(b, [f]).length)!c && 1 === f.nodeType && (e.cleanData(f.getElementsByTagName("*")), e.cleanData([f])), f.parentNode && f.parentNode.removeChild(f);
            return this
        },
        empty: function () {
            for (var b, c = 0; null != (b = this[c]); c++) for (1 === b.nodeType && e.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function (b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function () {
                return e.clone(this, b, c)
            })
        },
        html: function (b) {
            return e.access(this, function (b) {
                var j = this[0] || {},
                    d = 0,
                    l = this.length;
                if (b === c) return 1 === j.nodeType ? j.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (e.support.htmlSerialize || !rb.test(b)) && (e.support.leadingWhitespace || !qb.test(b)) && !U[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; d < l; d++) j = this[d] || {}, 1 === j.nodeType && (e.cleanData(j.getElementsByTagName("*")), j.innerHTML = b);
                        j = 0
                    } catch (g) {}
                }
                j && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function (b) {
            return y(this[0]) ? this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this : e.isFunction(b) ? this.each(function (c) {
                var f = e(this),
                    d = f.html();
                f.replaceWith(b.call(this, c, d))
            }) : ("string" != typeof b && (b = e(b).detach()), this.each(function () {
                var c =
                this.nextSibling,
                    f = this.parentNode;
                e(this).remove();
                c ? e(c).before(b) : e(f).append(b)
            }))
        },
        detach: function (b) {
            return this.remove(b, !0)
        },
        domManip: function (b, d, f) {
            b = [].concat.apply([], b);
            var l, g, n, q = 0,
                m = b[0],
                t = [],
                r = this.length;
            if (!e.support.checkClone && 1 < r && "string" == typeof m && gc.test(m)) return this.each(function () {
                e(this).domManip(b, d, f)
            });
            if (e.isFunction(m)) return this.each(function (l) {
                var g = e(this);
                b[0] = m.call(this, l, d ? g.html() : c);
                g.domManip(b, d, f)
            });
            if (this[0]) {
                l = e.buildFragment(b, this, t);
                n = l.fragment;
                g = n.firstChild;
                1 === n.childNodes.length && (n = g);
                if (g) {
                    d = d && e.nodeName(g, "tr");
                    for (l = l.cacheable || r - 1; q < r; q++) f.call(d && e.nodeName(this[q], "table") ? this[q].getElementsByTagName("tbody")[0] || this[q].appendChild(this[q].ownerDocument.createElement("tbody")) : this[q], q === l ? n : e.clone(n, !0, !0))
                }
                n = g = null;
                t.length && e.each(t, function (b, c) {
                    c.src ? e.ajax ? e.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : e.error("no ajax") : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    e.buildFragment = function (b, d, f) {
        var l, g, n, q = b[0];
        return d = d || B, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof q && 512 > q.length && d === B && "<" === q.charAt(0) && !rd.test(q) && (e.support.checkClone || !gc.test(q)) && (e.support.html5Clone || !rb.test(q)) && (g = !0, l = e.fragments[q], n = l !== c), l || (l = d.createDocumentFragment(), e.clean(b, d, l, f), g && (e.fragments[q] = n && l)), {
            fragment: l,
            cacheable: g
        }
    };
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, c) {
        e.fn[b] = function (f) {
            var d, l = 0,
                g = [];
            f = e(f);
            var n = f.length;
            d = 1 === this.length && this[0].parentNode;
            if ((null == d || d && 11 === d.nodeType && 1 === d.childNodes.length) && 1 === n) return f[c](this[0]), this;
            for (; l < n; l++) d = (0 < l ? this.clone(!0) : this).get(), e(f[l])[c](d), g = g.concat(d);
            return this.pushStack(g, b, f.selector)
        }
    });
    e.extend({
        clone: function (b, c, f) {
            var d, g, m, q;
            e.support.html5Clone || e.isXMLDoc(b) || !rb.test("<" + b.nodeName + ">") ? q = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML, sb.removeChild(q = sb.firstChild));
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !e.isXMLDoc(b)) {
                l(b, q);
                d = n(b);
                g = n(q);
                for (m = 0; d[m]; ++m) g[m] && l(d[m], g[m])
            }
            if (c && (z(b, q), f)) {
                d = n(b);
                g = n(q);
                for (m = 0; d[m]; ++m) z(d[m], g[m])
            }
            return q
        },
        clean: function (b, c, f, d) {
            var l, g, n, m, r, p, x, C = c === B && hc,
                z = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = B;
            for (l = 0; null != (n = b[l]); l++) if ("number" == typeof n && (n += ""), n) {
                if ("string" == typeof n) if (pd.test(n)) {
                    C = C || s(c);
                    p = c.createElement("div");
                    C.appendChild(p);
                    n = n.replace(ec, "<$1></$2>");
                    g = (fc.exec(n) || ["", ""])[1].toLowerCase();
                    m = U[g] || U._default;
                    r = m[0];
                    for (p.innerHTML = m[1] + n + m[2]; r--;) p = p.lastChild;
                    if (!e.support.tbody) {
                        r = od.test(n);
                        m = "table" === g && !r ? p.firstChild && p.firstChild.childNodes : "<table>" === m[1] && !r ? p.childNodes : [];
                        for (g = m.length - 1; 0 <= g; --g) e.nodeName(m[g], "tbody") && !m[g].childNodes.length && m[g].parentNode.removeChild(m[g])
                    }!e.support.leadingWhitespace && qb.test(n) && p.insertBefore(c.createTextNode(qb.exec(n)[0]), p.firstChild);
                    n = p.childNodes;
                    p.parentNode.removeChild(p)
                } else n = c.createTextNode(n);
                n.nodeType ? z.push(n) : e.merge(z, n)
            }
            p && (n = p = C = null);
            if (!e.support.appendChecked) for (l = 0; null != (n = z[l]); l++) e.nodeName(n, "input") ? t(n) : "undefined" != typeof n.getElementsByTagName && e.grep(n.getElementsByTagName("input"), t);
            if (f) {
                b = function (b) {
                    if (!b.type || sd.test(b.type)) return d ? d.push(b.parentNode ? b.parentNode.removeChild(b) : b) : f.appendChild(b)
                };
                for (l = 0; null != (n = z[l]); l++) if (!e.nodeName(n, "script") || !b(n)) f.appendChild(n), "undefined" != typeof n.getElementsByTagName && (x = e.grep(e.merge([], n.getElementsByTagName("script")), b), z.splice.apply(z, [l + 1, 0].concat(x)), l += x.length)
            }
            return z
        },
        cleanData: function (b, c) {
            for (var f, d, l, g, n = 0, m = e.expando, t = e.cache, r = e.support.deleteExpando, p = e.event.special; null != (l = b[n]); n++) if (c || e.acceptData(l)) if (f = (d = l[m]) && t[d]) {
                if (f.events) for (g in f.events) p[g] ? e.event.remove(l, g) : e.removeEvent(l, g, f.handle);
                t[d] && (delete t[d], r ? delete l[m] : l.removeAttribute ? l.removeAttribute(m) : l[m] = null, e.deletedIds.push(d))
            }
        }
    });
    var Ua, da;
    e.uaMatch = function (b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ua = e.uaMatch(zc.userAgent);
    da = {};
    Ua.browser && (da[Ua.browser] = !0, da.version = Ua.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    e.browser = da;
    e.sub = function () {
        function b(c, e) {
            return new b.fn.init(c, e)
        }
        e.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function (f, d) {
            return d && d instanceof e && !(d instanceof b) && (d = b(d)), e.fn.init.call(this, f, d, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(B);
        return b
    };
    var Q, la, ma, tb = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Ea + ")(.*)$", "i"),
        ya = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Ea + ")", "i"),
        Ya = {},
        yd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ea = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"],
        zd = e.fn.toggle;
    e.fn.extend({
        css: function (b, d) {
            return e.access(this, function (b, j, d) {
                return d !== c ? e.style(b, j, d) : e.css(b, j)
            }, b, d, 1 < arguments.length)
        },
        show: function () {
            return K(this, !0)
        },
        hide: function () {
            return K(this)
        },
        toggle: function (b, c) {
            var f = "boolean" == typeof b;
            return e.isFunction(b) && e.isFunction(c) ? zd.apply(this, arguments) : this.each(function () {
                (f ? b : L(this)) ? e(this).show() : e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: {
            opacity: {
                get: function (b, c) {
                    if (c) {
                        var e = Q(b, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (b, d, f, l) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g, n, m, t = e.camelCase(d),
                    r = b.style;
                d = e.cssProps[t] || (e.cssProps[t] = C(r, t));
                m = e.cssHooks[d] || e.cssHooks[t];
                if (f === c) return m && "get" in m && (g = m.get(b, !1, l)) !== c ? g : r[d];
                n = typeof f;
                "string" === n && (g = xd.exec(f)) && (f = (g[1] + 1) * g[2] + parseFloat(e.css(b, d)), n = "number");
                if (!(null == f || "number" === n && isNaN(f))) if ("number" === n && !e.cssNumber[t] && (f += "px"), !m || !("set" in m) || (f = m.set(b, f, l)) !== c) try {
                    r[d] = f
                } catch (p) {}
            }
        },
        css: function (b, d, f, l) {
            var g, n, m, t = e.camelCase(d);
            return d = e.cssProps[t] || (e.cssProps[t] = C(b.style, t)), m = e.cssHooks[d] || e.cssHooks[t], m && "get" in m && (g = m.get(b, !0, l)), g === c && (g = Q(b, d)), "normal" === g && d in jc && (g = jc[d]), f || l !== c ? (n = parseFloat(g), f || e.isNumeric(n) ? n || 0 : g) : g
        },
        swap: function (b, c, e) {
            var d, l = {};
            for (d in c) l[d] = b.style[d], b.style[d] = c[d];
            e = e.call(b);
            for (d in c) b.style[d] = l[d];
            return e
        }
    });
    b.getComputedStyle ? Q = function (c, d) {
        var f, l, g, n, m = b.getComputedStyle(c, null),
            t = c.style;
        return m && (f = m[d], "" === f && !e.contains(c.ownerDocument, c) && (f = e.style(c, d)), ya.test(f) && ic.test(d) && (l = t.width, g = t.minWidth, n = t.maxWidth, t.minWidth = t.maxWidth = t.width = f, f = m.width, t.width = l, t.minWidth = g, t.maxWidth = n)), f
    } : B.documentElement.currentStyle && (Q = function (b, c) {
        var e, d, l = b.currentStyle && b.currentStyle[c],
            g = b.style;
        return null == l && g && g[c] && (l = g[c]), ya.test(l) && !vd.test(c) && (e = g.left, d = b.runtimeStyle && b.runtimeStyle.left, d && (b.runtimeStyle.left = b.currentStyle.left), g.left = "fontSize" === c ? "1em" : l, l = g.pixelLeft + "px", g.left = e, d && (b.runtimeStyle.left = d)), "" === l ? "auto" : l
    });
    e.each(["height", "width"], function (b, c) {
        e.cssHooks[c] = {
            get: function (b, j, d) {
                if (j) return 0 === b.offsetWidth && wd.test(Q(b, "display")) ? e.swap(b, yd, function () {
                    return J(b, c, d)
                }) : J(b, c, d)
            },
            set: function (b, j, d) {
                return D(b, j, d ? Xa(b, c, d, e.support.boxSizing && "border-box" === e.css(b, "boxSizing")) : 0)
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function (b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function (b, c) {
            var f = b.style,
                d = b.currentStyle,
                l = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                g = d && d.filter || f.filter || "";
            f.zoom = 1;
            if (!(1 <= c && "" === e.trim(g.replace(tb, "")) && f.removeAttribute && (f.removeAttribute("filter"), d && !d.filter))) f.filter = tb.test(g) ? g.replace(tb, l) : g + " " + l
        }
    });
    e(function () {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function (b, c) {
                return e.swap(b, {
                    display: "inline-block"
                }, function () {
                    if (c) return Q(b, "marginRight")
                })
            }
        });
        !e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function (b, c) {
            e.cssHooks[c] = {
                get: function (b, j) {
                    if (j) {
                        var d = Q(b, c);
                        return ya.test(d) ? e(b).position()[c] + "px" : d
                    }
                }
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function (b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !e.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || Q(b, "display"))
    }, e.expr.filters.visible = function (b) {
        return !e.expr.filters.hidden(b)
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (b, c) {
        e.cssHooks[b + c] = {
            expand: function (e) {
                var d = "string" == typeof e ? e.split(" ") : [e],
                    l = {};
                for (e = 0; 4 > e; e++) l[b + ea[e] + c] = d[e] || d[e - 2] || d[0];
                return l
            }
        };
        ic.test(b) || (e.cssHooks[b + c].set = D)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    e.fn.extend({
        serialize: function () {
            return e.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function (b, c) {
                var d = e(this).val();
                return null == d ? null : e.isArray(d) ? e.map(d, function (b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    e.param = function (b, d) {
        var f, l = [],
            g = function (b, c) {
                c = e.isFunction(c) ? c() : null == c ? "" : c;
                l[l.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(b) || b.jquery && !e.isPlainObject(b)) e.each(b, function () {
            g(this.name, this.value)
        });
        else for (f in b) P(f, b[f], d, g);
        return l.join("&").replace(Ad, "+")
    };
    var qa, ka, Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = e.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try {
        ka = yc.href
    } catch (Rd) {
        ka = B.createElement("a"), ka.href = "", ka = ka.href
    }
    qa = mc.exec(ka.toLowerCase()) || [];
    e.fn.load = function (b, d, f) {
        if ("string" != typeof b && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var l, g, n, m = this,
            t = b.indexOf(" ");
        return 0 <= t && (l = b.slice(t, b.length), b = b.slice(0, t)), e.isFunction(d) ? (f = d, d = c) : d && "object" == typeof d && (g = "POST"), e.ajax({
            url: b,
            type: g,
            dataType: "html",
            data: d,
            complete: function (b, c) {
                f && m.each(f, n || [b.responseText, c, b])
            }
        }).done(function (b) {
            n = arguments;
            m.html(l ? e("<div>").append(b.replace(Hd, "")).find(l) : b)
        }), this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, c) {
        e.fn[c] = function (b) {
            return this.on(c, b)
        }
    });
    e.each(["get", "post"], function (b, d) {
        e[d] = function (b, j, l, g) {
            return e.isFunction(j) && (g = g || l, l = j, j = c), e.ajax({
                type: d,
                url: b,
                data: j,
                success: l,
                dataType: g
            })
        }
    });
    e.extend({
        getScript: function (b, d) {
            return e.get(b, c, d, "script")
        },
        getJSON: function (b, c, d) {
            return e.get(b, c, d, "json")
        },
        ajaxSetup: function (b, c) {
            return c ? sa(b, e.ajaxSettings) : (c = b, b = e.ajaxSettings), sa(b, c), b
        },
        ajaxSettings: {
            url: ka,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: za(Za),
        ajaxTransport: za(oc),
        ajax: function (b, d) {
            function f(b, d, j, f) {
                var n, r, u, x, M, D = d;
                if (2 !== E) {
                    E = 2;
                    t && clearTimeout(t);
                    m = c;
                    g = f || "";
                    G.readyState = 0 < b ? 4 : 0;
                    if (j) {
                        x = s;
                        f = G;
                        var K, R, aa, J, H = x.contents,
                            F = x.dataTypes,
                            P = x.responseFields;
                        for (R in P) R in j && (f[P[R]] = j[R]);
                        for (;
                        "*" === F[0];) F.shift(), K === c && (K = x.mimeType || f.getResponseHeader("content-type"));
                        if (K) for (R in H) if (H[R] && H[R].test(K)) {
                            F.unshift(R);
                            break
                        }
                        if (F[0] in j) aa = F[0];
                        else {
                            for (R in j) {
                                if (!F[0] || x.converters[R + " " + F[0]]) {
                                    aa = R;
                                    break
                                }
                                J || (J = R)
                            }
                            aa = aa || J
                        }
                        x = j = aa ? (aa !== F[0] && F.unshift(aa), j[aa]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b) if (s.ifModified && (M = G.getResponseHeader("Last-Modified"), M && (e.lastModified[l] = M), M = G.getResponseHeader("Etag"), M && (e.etag[l] = M)), 304 === b) D = "notmodified", n = !0;
                    else {
                        var I;
                        a: {
                            n = s;
                            r = x;
                            var N, D = n.dataTypes.slice();
                            j = D[0];
                            K = {};
                            R = 0;
                            n.dataFilter && (r = n.dataFilter(r, n.dataType));
                            if (D[1]) for (I in n.converters) K[I.toLowerCase()] = n.converters[I];
                            for (; u = D[++R];) if ("*" !== u) {
                                if ("*" !== j && j !== u) {
                                    I = K[j + " " + u] || K["* " + u];
                                    if (!I) for (N in K) if (M = N.split(" "), M[1] === u && (I = K[j + " " + M[0]] || K["* " + M[0]])) {
                                        !0 === I ? I = K[N] : !0 !== K[N] && (u = M[0], D.splice(R--, 0, u));
                                        break
                                    }
                                    if (!0 !== I) if (I && n["throws"]) r = I(r);
                                    else try {
                                        r = I(r)
                                    } catch (O) {
                                        I = {
                                            state: "parsererror",
                                            error: I ? O : "No conversion from " + j + " to " + u
                                        };
                                        break a
                                    }
                                }
                                j = u
                            }
                            I = {
                                state: "success",
                                data: r
                            }
                        }
                        n =
                        I;D = n.state;r = n.data;u = n.error;n = !u
                    } else if (u = D, !D || b) D = "error", 0 > b && (b = 0);
                    G.status = b;
                    G.statusText = (d || D) + "";
                    n ? y.resolveWith(C, [r, D, G]) : y.rejectWith(C, [G, D, u]);
                    G.statusCode(B);
                    B = c;
                    p && z.trigger("ajax" + (n ? "Success" : "Error"), [G, s, n ? r : u]);
                    L.fireWith(C, [G, D]);
                    p && (z.trigger("ajaxComplete", [G, s]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var l, g, n, m, t, r, p, x, s = e.ajaxSetup({}, d),
                C = s.context || s,
                z = C !== s && (C.nodeType || C instanceof e) ? e(C) : e.event,
                y = e.Deferred(),
                L = e.Callbacks("once memory"),
                B = s.statusCode || {},
                D = {},
                K = {},
                E = 0,
                J = "canceled",
                G = {
                    readyState: 0,
                    setRequestHeader: function (b, c) {
                        if (!E) {
                            var e = b.toLowerCase();
                            b = K[e] = K[e] || b;
                            D[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return 2 === E ? g : null
                    },
                    getResponseHeader: function (b) {
                        var e;
                        if (2 === E) {
                            if (!n) for (n = {}; e = Ed.exec(g);) n[e[1].toLowerCase()] = e[2];
                            e = n[b.toLowerCase()]
                        }
                        return e === c ? null : e
                    },
                    overrideMimeType: function (b) {
                        return E || (s.mimeType = b), this
                    },
                    abort: function (b) {
                        return b = b || J, m && m.abort(b), f(0, b), this
                    }
                };
            y.promise(G);
            G.success = G.done;
            G.error = G.fail;
            G.complete = L.add;
            G.statusCode = function (b) {
                if (b) {
                    var c;
                    if (2 > E) for (c in b) B[c] = [B[c], b[c]];
                    else c = b[G.status], G.always(c)
                }
                return this
            };
            s.url = ((b || s.url) + "").replace(Dd, "").replace(Gd, qa[1] + "//");
            s.dataTypes = e.trim(s.dataType || "*").toLowerCase().split(fa);
            null == s.crossDomain && (r = mc.exec(s.url.toLowerCase()) || !1, s.crossDomain = r && r.join(":") + (r[3] ? "" : "http:" === r[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "" : "http:" === qa[1] ? 80 : 443));
            s.data && s.processData && "string" != typeof s.data && (s.data = e.param(s.data, s.traditional));
            na(Za, s, d, G);
            if (2 === E) return G;
            p = s.global;
            s.type = s.type.toUpperCase();
            s.hasContent = !Fd.test(s.type);
            p && 0 === e.active++ && e.event.trigger("ajaxStart");
            if (!s.hasContent && (s.data && (s.url += (lc.test(s.url) ? "&" : "?") + s.data, delete s.data), l = s.url, !1 === s.cache)) {
                r = e.now();
                var H = s.url.replace(Id, "$1_=" + r);
                s.url = H + (H === s.url ? (lc.test(s.url) ? "&" : "?") + "_=" + r : "")
            }(s.data && s.hasContent && !1 !== s.contentType || d.contentType) && G.setRequestHeader("Content-Type", s.contentType);
            s.ifModified && (l = l || s.url, e.lastModified[l] && G.setRequestHeader("If-Modified-Since", e.lastModified[l]), e.etag[l] && G.setRequestHeader("If-None-Match", e.etag[l]));
            G.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : s.accepts["*"]);
            for (x in s.headers) G.setRequestHeader(x, s.headers[x]);
            if (!s.beforeSend || !1 !== s.beforeSend.call(C, G, s) && 2 !== E) {
                J = "abort";
                for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) G[x](s[x]);
                if (m = na(oc, s, d, G)) {
                    G.readyState = 1;
                    p && z.trigger("ajaxSend", [G, s]);
                    s.async && 0 < s.timeout && (t = setTimeout(function () {
                        G.abort("timeout")
                    }, s.timeout));
                    try {
                        E = 1, m.send(D, f)
                    } catch (F) {
                        if (2 > E) f(-1, F);
                        else throw F;
                    }
                } else f(-1, "No Transport");
                return G
            }
            return G.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Va = /(=)\?(?=&|$)|\?\?/,
        Kd = e.now();
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var b = qc.pop() || e.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    e.ajaxPrefilter("json jsonp", function (j, d, f) {
        var l, g, n, m = j.data,
            t = j.url,
            r = !1 !== j.jsonp,
            p = r && Va.test(t),
            s = r && !p && "string" == typeof m && !(j.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(m);
        if ("jsonp" === j.dataTypes[0] || p || s) return l = j.jsonpCallback = e.isFunction(j.jsonpCallback) ? j.jsonpCallback() : j.jsonpCallback, g = b[l], p ? j.url = t.replace(Va, "$1" + l) : s ? j.data = m.replace(Va, "$1" + l) : r && (j.url += (Jd.test(t) ? "&" : "?") + j.jsonp + "=" + l), j.converters["script json"] = function () {
            return n || e.error(l + " was not called"), n[0]
        }, j.dataTypes[0] = "json", b[l] = function () {
            n = arguments
        }, f.always(function () {
            b[l] =
            g;
            j[l] && (j.jsonpCallback = d.jsonpCallback, qc.push(l));
            n && e.isFunction(g) && g(n[0]);
            n = g = c
        }), "script"
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (b) {
                return e.globalEval(b), b
            }
        }
    });
    e.ajaxPrefilter("script", function (b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    e.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var e, d =
            B.head || B.getElementsByTagName("head")[0] || B.documentElement;
            return {
                send: function (l, g) {
                    e = B.createElement("script");
                    e.async = "async";
                    b.scriptCharset && (e.charset = b.scriptCharset);
                    e.src = b.url;
                    e.onload = e.onreadystatechange = function (b, j) {
                        if (j || !e.readyState || /loaded|complete/.test(e.readyState)) e.onload = e.onreadystatechange = null, d && e.parentNode && d.removeChild(e), e = c, j || g(200, "success")
                    };
                    d.insertBefore(e, d.firstChild)
                },
                abort: function () {
                    e && e.onload(0, 1)
                }
            }
        }
    });
    var ra, ub = b.ActiveXObject ?
    function () {
        for (var b in ra) ra[b](0, 1)
    } : !1,
        Ld = 0;
    e.ajaxSettings.xhr = b.ActiveXObject ?
    function () {
        var c;
        if (!(c = !this.isLocal && zb())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (e) {}
            c = void 0
        }
        return c
    } : zb;
    var vb = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !! vb,
        cors: !! vb && "withCredentials" in vb
    });
    e.support.ajax && e.ajaxTransport(function (d) {
        if (!d.crossDomain || e.support.cors) {
            var l;
            return {
                send: function (f, g) {
                    var n, m, t = d.xhr();
                    d.username ? t.open(d.type, d.url, d.async, d.username, d.password) : t.open(d.type, d.url, d.async);
                    if (d.xhrFields) for (m in d.xhrFields) t[m] = d.xhrFields[m];
                    d.mimeType && t.overrideMimeType && t.overrideMimeType(d.mimeType);
                    !d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (m in f) t.setRequestHeader(m, f[m])
                    } catch (r) {}
                    t.send(d.hasContent && d.data || null);
                    l = function (b, f) {
                        var m, r, p, s, x;
                        try {
                            if (l && (f || 4 === t.readyState)) if (l = c, n && (t.onreadystatechange = e.noop, ub && delete ra[n]), f) 4 !== t.readyState && t.abort();
                            else {
                                m = t.status;
                                p = t.getAllResponseHeaders();
                                s = {};
                                (x = t.responseXML) && x.documentElement && (s.xml = x);
                                try {
                                    s.text =
                                    t.responseText
                                } catch (C) {}
                                try {
                                    r = t.statusText
                                } catch (z) {
                                    r = ""
                                }!m && d.isLocal && !d.crossDomain ? m = s.text ? 200 : 404 : 1223 === m && (m = 204)
                            }
                        } catch (y) {
                            f || g(-1, y)
                        }
                        s && g(m, r, s, p)
                    };
                    d.async ? 4 === t.readyState ? setTimeout(l, 0) : (n = ++Ld, ub && (ra || (ra = {}, e(b).unload(ub)), ra[n] = l), t.onreadystatechange = l) : l()
                },
                abort: function () {
                    l && l(0, 1)
                }
            }
        }
    });
    var Aa, Wa, Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ba = [function (b, c, d) {
            var l, g, n, m, t, r, s = this,
                p = b.style,
                x = {},
                C = [],
                z = b.nodeType && L(b);
            d.queue || (t = e._queueHooks(b, "fx"), null == t.unqueued && (t.unqueued = 0, r = t.empty.fire, t.empty.fire = function () {
                t.unqueued || r()
            }), t.unqueued++, s.always(function () {
                s.always(function () {
                    t.unqueued--;
                    e.queue(b, "fx").length || t.empty.fire()
                })
            }));
            1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === e.css(b, "display") && "none" === e.css(b, "float") && (!e.support.inlineBlockNeedsLayout || "inline" === I(b.nodeName) ? p.display = "inline-block" : p.zoom = 1));
            d.overflow && (p.overflow = "hidden", e.support.shrinkWrapBlocks || s.done(function () {
                p.overflow = d.overflow[0];
                p.overflowX = d.overflow[1];
                p.overflowY = d.overflow[2]
            }));
            for (l in c) g = c[l], Md.exec(g) && (delete c[l], g !== (z ? "hide" : "show") && C.push(l));
            if (g = C.length) {
                n = e._data(b, "fxshow") || e._data(b, "fxshow", {});
                z ? e(b).show() : s.done(function () {
                    e(b).hide()
                });
                s.done(function () {
                    var c;
                    e.removeData(b, "fxshow", !0);
                    for (c in x) e.style(b, c, x[c])
                });
                for (l = 0; l < g; l++) c = C[l], m = s.createTween(c, z ? n[c] : 0), x[c] = n[c] || e.style(b, c), c in n || (n[c] = m.start, z && (m.end = m.start, m.start = "width" === c || "height" === c ? 1 : 0))
            }
        }],
        ta = {
            "*": [function (b, c) {
                var d, l, g = this.createTween(b, c),
                    n = Nd.exec(c),
                    m = g.cur(),
                    t = +m || 0,
                    r = 1,
                    p = 20;
                if (n) {
                    d = +n[2];
                    l = n[3] || (e.cssNumber[b] ? "" : "px");
                    if ("px" !== l && t) {
                        t = e.css(g.elem, b, !0) || d || 1;
                        do r = r || ".5", t /= r, e.style(g.elem, b, t + l);
                        while (r !== (r = g.cur() / m) && 1 !== r && --p)
                    }
                    g.unit = l;
                    g.start = t;
                    g.end = n[1] ? t + (n[1] + 1) * d : d
                }
                return g
            }]
        };
    e.Animation = e.extend(Bb, {
        tweener: function (b, c) {
            e.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, l = 0, g = b.length; l < g; l++) d = b[l], ta[d] = ta[d] || [], ta[d].unshift(c)
        },
        prefilter: function (b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    e.Tween = S;
    S.prototype = {
        constructor: S,
        init: function (b, c, d, l, g, n) {
            this.elem = b;
            this.prop = d;
            this.easing = g || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = l;
            this.unit = n || (e.cssNumber[d] ? "" : "px")
        },
        cur: function () {
            var b = S.propHooks[this.prop];
            return b && b.get ? b.get(this) : S.propHooks._default.get(this)
        },
        run: function (b) {
            var c, d = S.propHooks[this.prop];
            return this.options.duration ? this.pos = c = e.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : S.propHooks._default.set(this), this
        }
    };
    S.prototype.init.prototype = S.prototype;
    S.propHooks = {
        _default: {
            get: function (b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = e.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function (b) {
                e.fx.step[b.prop] ? e.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[e.cssProps[b.prop]] || e.cssHooks[b.prop]) ? e.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function (b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    e.each(["toggle", "show", "hide"], function (b, c) {
        var d = e.fn[c];
        e.fn[c] = function (l, g, n) {
            return null == l || "boolean" == typeof l || !b && e.isFunction(l) && e.isFunction(g) ? d.apply(this, arguments) : this.animate(Ca(c, !0), l, g, n)
        }
    });
    e.fn.extend({
        fadeTo: function (b, c, e, d) {
            return this.filter(L).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, e, d)
        },
        animate: function (b, c, d, l) {
            var g = e.isEmptyObject(b),
                n = e.speed(c, d, l);
            c = function () {
                var c = Bb(this, e.extend({}, b), n);
                g && c.stop(!0)
            };
            return g || !1 === n.queue ? this.each(c) : this.queue(n.queue, c)
        },
        stop: function (b, d, f) {
            var l = function (b) {
                var c = b.stop;
                delete b.stop;
                c(f)
            };
            return "string" != typeof b && (f = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function () {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    g = e.timers,
                    n = e._data(this);
                if (d) n[d] && n[d].stop && l(n[d]);
                else for (d in n) n[d] && n[d].stop && Od.test(d) && l(n[d]);
                for (d = g.length; d--;) g[d].elem === this && (null == b || g[d].queue === b) && (g[d].anim.stop(f), c = !1, g.splice(d, 1));
                (c || !f) && e.dequeue(this, b)
            })
        }
    });
    e.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (b, c) {
        e.fn[b] = function (b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    e.speed = function (b, c, d) {
        var l = b && "object" == typeof b ? e.extend({}, b) : {
            complete: d || !d && c || e.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !e.isFunction(c) && c
        };
        l.duration = e.fx.off ? 0 : "number" == typeof l.duration ? l.duration : l.duration in e.fx.speeds ? e.fx.speeds[l.duration] : e.fx.speeds._default;
        if (null == l.queue || !0 === l.queue) l.queue = "fx";
        return l.old = l.complete, l.complete = function () {
            e.isFunction(l.old) && l.old.call(this);
            l.queue && e.dequeue(this, l.queue)
        }, l
    };
    e.easing = {
        linear: function (b) {
            return b
        },
        swing: function (b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    e.timers = [];
    e.fx = S.prototype.init;
    e.fx.tick = function () {
        for (var b, c = e.timers, d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || e.fx.stop()
    };
    e.fx.timer = function (b) {
        b() && e.timers.push(b) && !Wa && (Wa = setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.interval = 13;
    e.fx.stop = function () {
        clearInterval(Wa);
        Wa = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function (b) {
        return e.grep(e.timers, function (c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    e.fn.offset = function (b) {
        if (arguments.length) return b === c ? this : this.each(function (c) {
            e.offset.setOffset(this, b, c)
        });
        var d, f, l, g, n, m, t, r = {
            top: 0,
            left: 0
        },
            p = this[0],
            s = p && p.ownerDocument;
        if (s) return (f = s.body) === p ? e.offset.bodyOffset(p) : (d = s.documentElement, e.contains(d, p) ? ("undefined" != typeof p.getBoundingClientRect && (r = p.getBoundingClientRect()), l = Cb(s), g = d.clientTop || f.clientTop || 0, n = d.clientLeft || f.clientLeft || 0, m = l.pageYOffset || d.scrollTop, t = l.pageXOffset || d.scrollLeft, {
            top: r.top + m - g,
            left: r.left + t - n
        }) : r)
    };
    e.offset = {
        bodyOffset: function (b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return e.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(e.css(b, "marginTop")) || 0, d += parseFloat(e.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function (b, c, d) {
            var l = e.css(b, "position");
            "static" === l && (b.style.position = "relative");
            var g = e(b),
                n = g.offset(),
                m = e.css(b, "top"),
                t = e.css(b, "left"),
                r = {},
                p = {},
                s, x;
            ("absolute" === l || "fixed" === l) && -1 < e.inArray("auto", [m, t]) ? (p = g.position(), s = p.top, x = p.left) : (s = parseFloat(m) || 0, x = parseFloat(t) || 0);
            e.isFunction(c) && (c = c.call(b, d, n));
            null != c.top && (r.top = c.top - n.top + s);
            null != c.left && (r.left = c.left - n.left + x);
            "using" in c ? c.using.call(b, r) : g.css(r)
        }
    };
    e.fn.extend({
        position: function () {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    l = rc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(e.css(b, "marginTop")) || 0, d.left -= parseFloat(e.css(b, "marginLeft")) || 0, l.top += parseFloat(e.css(c[0], "borderTopWidth")) || 0, l.left += parseFloat(e.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - l.top,
                    left: d.left - l.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var b =
                this.offsetParent || B.body; b && !rc.test(b.nodeName) && "static" === e.css(b, "position");) b = b.offsetParent;
                return b || B.body
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (b, d) {
        var f = /Y/.test(d);
        e.fn[b] = function (l) {
            return e.access(this, function (b, l, j) {
                var g = Cb(b);
                if (j === c) return g ? d in g ? g[d] : g.document.documentElement[l] : b[l];
                g ? g.scrollTo(f ? e(g).scrollLeft() : j, f ? j : e(g).scrollTop()) : b[l] = j
            }, b, l, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function (b, d) {
        e.each({
            padding: "inner" + b,
            content: d,
            "": "outer" + b
        }, function (f, l) {
            e.fn[l] = function (l, g) {
                var n = arguments.length && (f || "boolean" != typeof l),
                    m = f || (!0 === l || !0 === g ? "margin" : "border");
                return e.access(this, function (d, f, l) {
                    var g;
                    return e.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : l === c ? e.css(d, f, l, m) : e.style(d, f, l, m)
                }, d, n ? l : c, n, null)
            }
        })
    });
    b.jQuery = b.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return e
    })
})(window);
var portraitMode = !0,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
    desktopWidth = 480,
    desktopHeight = 640,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {
        MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll2: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd2: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll3: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        }
    };

function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) / 2)
    } catch (c) {
        console.log(c)
    }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}
var minHeight = 99999999;

function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth;
        h = window.innerHeight;
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier);
        widthRatio = window.innerWidth / mobileWidth;
        heightRatio = window.innerHeight / mobileHeight;
        adjustLayers();
        window.scrollTo(0, 1);
        ig.ua.mobile || $("#tempdiv").hide();
        for (var b = navigator.userAgent.split(" "), c = 0; c < b.length; c++) b[c].substr(0, 8);
        navigator.userAgent.indexOf("wv");
        navigator.userAgent.indexOf("SamsungBrowser")
    }
}
function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}

function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function (b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function (b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend", function (b) {
        b.preventDefault();
        return !1
    }, !1))
}
window.addEventListener("resize", function () {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function () {
    orientationHandler()
}, !1);
document.ontouchmove = function (b) {
    window.scrollTo(0, 1);
    b.preventDefault()
};

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var g = c[d].split("=");
        if (decodeURIComponent(g[0]) == b) return decodeURIComponent(g[1])
    }
}
this.jukebox = {};
jukebox.Player = function (b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b)) for (var g in b) this.settings[g] = b[g];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function () {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function () {
        var b = this,
            c = this.settings,
            d = {},
            g;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var m = function (c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", m, !0);
                window.setTimeout(function () {
                    b.context.removeEventListener("canplaythrough", m, !0);
                    m("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (g in this.HTML5API) this[g] = this.HTML5API[g];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function () {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function () {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (g in this.FLASHAPI) this[g] = this.FLASHAPI[g];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function (b) {
        var c, d = this.settings.flashMediaElement,
            g, m = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var p = document.createElement("object");
            p.id = "jukebox-flashstream-" + this.id;
            p.setAttribute("type", "application/x-shockwave-flash");
            p.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            p.setAttribute("width", "0");
            p.setAttribute("height", "0");
            m.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            m.flashvars = b.join("&amp;");
            for (g in m) b = document.createElement("param"), b.setAttribute("name", g), b.setAttribute("value", m[g]), p.appendChild(b);
            c.outerHTML = p.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
            document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            m.play = !1;
            m.loop = !1;
            m.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (g in m) c.setAttribute(g, m[g]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function () {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
            b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function (b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                g;
            if (void 0 !== d[b]) g = d[b].start;
            else if ("number" === typeof b) {
                g = b;
                for (var m in d) if (g >= d[m].start && g <= d[m].end) {
                    b = m;
                    break
                }
            }
            void 0 !== g && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(g))
        }
    },
    stop: function () {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function () {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function (b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function () {
            return this.context.volume || 1
        },
        setVolume: function (b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function () {
            return this.context.currentTime || 0
        },
        setCurrentTime: function (b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function () {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function (b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function () {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function (b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function (b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b)) for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function () {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function () {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                e: "3gp",
                m: ["audio/3gpp", "audio/amr"]
            },
            {
                e: "aac",
                m: ["audio/aac", "audio/aacp"]
            },
            {
                e: "amr",
                m: ["audio/amr", "audio/3gpp"]
            },
            {
                e: "caf",
                m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
            },
            {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
            },
            {
                e: "mp3",
                m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
            },
            {
                e: "mpga",
                m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
            },
            {
                e: "mp4",
                m: ["audio/mp4", "video/mp4"]
            },
            {
                e: "ogg",
                m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
            },
            {
                e: "wav",
                m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
            },
            {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
            }], d, g, m = 0, p = c.length; m < p; m++) if (g = c[m].e, c[m].m.length && "object" === typeof c[m].m) for (var y = 0, r = c[m].m.length; y < r; y++) if (d = c[m].m[y], "" !== b.canPlayType(d)) {
                this.codecs[g] = d;
                break
            } else this.codecs[g] || (this.codecs[g] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !! (1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !! navigator.mimeTypes["application/x-shockwave-flash"] || !! navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (x) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function (b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function (b, c) {
        for (var d in this.__clones) {
            var g = this.__clones[d];
            if (null === g.isPlaying && g.origin === b) return g
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var m in c) d[m] = c[m];
            d.autoplay = !1;
            m = new jukebox.Player(d, b);
            m.isClone = !0;
            m.wasReady = !1;
            return this.__clones[m.id] = m
        }
        return null
    },
    loop: function () {
        if (0 !== this.__playersLength) if (this.__queue.length && this.__playersLength < this.features.channels) {
            var b = this.__queue[0],
                c = this.__getPlayerById(b.origin);
            if (null !== c) {
                var d = this.__getClone(b.origin, c.settings);
                null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
            }
            this.__queue.splice(0, 1)
        } else for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function (b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var g = b[c],
                m = g.match(/\.([^\.]*)$/)[1];
            if (m && this.codecs[m]) return g
        }
        return null
    },
    add: function (b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function (b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function (b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function () {
    var b = {},
        c = null,
        d = !0,
        g = !1;
    if ("undefined" !== typeof AudioContext) c = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) c = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) {
        d = !1;
        try {
            new Audio
        } catch (m) {
            g = !0
        }
    } else d = !1, g = !0;
    if (d) {
        var p = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        p.gain.value = 1;
        p.connect(c.destination)
    }
    var y = function () {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = g;
        this._howls = []
    };
    y.prototype = {
        volume: function (b) {
            b =
            parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (p.gain.value = b);
                for (var c in this._howls) if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio) for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? p.gain.value : this._volume
        },
        mute: function () {
            this._setMuted(!0);
            return this
        },
        unmute: function () {
            this._setMuted(!1);
            return this
        },
        _setMuted: function (b) {
            this._muted = b;
            d && (p.gain.value = b ? 0 : this._volume);
            for (var c in this._howls) if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio) for (var g = 0; g < this._howls[c]._audioNode.length; g++) this._howls[c]._audioNode[g].muted = b
        }
    };
    var r = new y,
        y = null;
    if (!g) var y = new Audio,
        x = {
            mp3: !! y.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            opus: !! y.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !! y.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !! y.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            m4a: !! (y.canPlayType("audio/x-m4a;") || y.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !! (y.canPlayType("audio/x-mp4;") || y.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !! y.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
        };
    var s = function (b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume : 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload = [b.onload ||
        function () {}];
        this._onloaderror = [b.onloaderror ||
        function () {}];
        this._onend = [b.onend ||
        function () {}];
        this._onpause = [b.onpause ||
        function () {}];
        this._onplay = [b.onplay ||
        function () {}];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        r._howls.push(this);
        this.load()
    };
    s.prototype = {
        load: function () {
            var d = this,
                n = null;
            if (!g) {
                for (var m = 0; m < d._urls.length; m++) {
                    var p, s;
                    if (d._format) p = d._format;
                    else if (s = d._urls[m].toLowerCase().split("?")[0], p = (p = s.match(/.+\.([^?]+)(\?|$)/)) && 2 <= p.length ? p : s.match(/data\:audio\/([^?]+);/)) p = p[1];
                    else {
                        d.on("loaderror");
                        return
                    }
                    if (x[p]) {
                        n = d._urls[m];
                        break
                    }
                }
                if (n) {
                    d._src = n;
                    if (d._webAudio) {
                        var y = n;
                        if (y in b) d._duration = b[y].duration, z(d);
                        else {
                            var D = new XMLHttpRequest;
                            D.open("GET", y, !0);
                            D.responseType = "arraybuffer";
                            D.onload = function () {
                                c.decodeAudioData(D.response, function (c) {
                                    c && (b[y] = c, z(d, c))
                                }, function () {
                                    d.on("loaderror")
                                })
                            };
                            D.onerror = function () {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode, d.load())
                            };
                            try {
                                D.send()
                            } catch (Xa) {
                                D.onerror()
                            }
                        }
                    } else {
                        var J = new Audio;
                        d._audioNode.push(J);
                        J.src = n;
                        J._pos = 0;
                        J.preload = "auto";
                        J.volume = r._muted ? 0 : d._volume * r.volume();
                        b[n] = d;
                        var I = function () {
                            d._duration = Math.ceil(10 * J.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                _default: [0, 1E3 * d._duration]
                            });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            J.removeEventListener("canplaythrough", I, !1)
                        };
                        J.addEventListener("canplaythrough", I, !1);
                        J.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function (b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function (d, g) {
            var m = this;
            "function" === typeof d && (g = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!m._loaded) return m.on("load", function () {
                m.play(d, g)
            }), m;
            if (!m._sprite[d]) return "function" === typeof g && g(), m;
            m._inactiveNode(function (p) {
                p._sprite = d;
                var s = 0 < p._pos ? p._pos : m._sprite[d][0] / 1E3,
                    x = m._sprite[d][1] / 1E3 - p._pos,
                    z = !(!m._loop && !m._sprite[d][2]),
                    y = "string" === typeof g ? g : Math.round(Date.now() * Math.random()) + "",
                    J, I = {
                        id: y,
                        sprite: d,
                        loop: z
                    };
                J = setTimeout(function () {
                    !m._webAudio && z && m.stop(I.id, I.timer).play(d, I.id);
                    m._webAudio && !z && (m._nodeById(I.id).paused = !0, m._nodeById(I.id)._pos = 0);
                    !m._webAudio && !z && m.stop(I.id, I.timer);
                    m.on("end", y)
                }, 1E3 * x);
                m._onendTimer.push(J);
                I.timer = m._onendTimer[m._onendTimer.length - 1];
                if (m._webAudio) {
                    J = m._sprite[d][0] / 1E3;
                    var P = m._sprite[d][1] / 1E3;
                    p.id = y;
                    p.paused = !1;
                    J = [z, J, P];
                    P = m._nodeById(y);
                    P.bufferSource = c.createBufferSource();
                    P.bufferSource.buffer =
                    b[m._src];
                    P.bufferSource.connect(P.panner);
                    P.bufferSource.loop = J[0];
                    J[0] && (P.bufferSource.loopStart = J[1], P.bufferSource.loopEnd = J[1] + J[2]);
                    P.bufferSource.playbackRate.value = m._rate;
                    m._playStart = c.currentTime;
                    p.gain.value = m._volume;
                    "undefined" === typeof p.bufferSource.start ? p.bufferSource.noteGrainOn(0, s, x) : p.bufferSource.start(0, s, x)
                } else if (4 === p.readyState) p.id = y, p.currentTime = s, p.muted = r._muted, p.volume = m._volume * r.volume(), setTimeout(function () {
                    p.play()
                }, 0);
                else {
                    m._clearEndTimer(J);
                    var za = d,
                        na =
                        g,
                        sa = function () {
                            m.play(za, na);
                            p.removeEventListener("canplaythrough", sa, !1)
                        };
                    p.addEventListener("canplaythrough", sa, !1);
                    return m
                }
                m.on("play");
                "function" === typeof g && g(y);
                return m
            });
            return m
        },
        pause: function (b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function () {
                d.pause(b)
            }), d;
            d._clearEndTimer(c || 0);
            var g = b ? d._nodeById(b) : d._activeNode();
            if (g) if (g._pos = d.pos(null, b), d._webAudio) {
                if (!g.bufferSource || g.paused) return d;
                g.paused = !0;
                "undefined" === typeof g.bufferSource.stop ? g.bufferSource.noteOff(0) : g.bufferSource.stop(0)
            } else g.pause();
            d.on("pause");
            return d
        },
        stop: function (b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function () {
                d.stop(b)
            }), d;
            d._clearEndTimer(c || 0);
            var g = b ? d._nodeById(b) : d._activeNode();
            if (g) if (g._pos = 0, d._webAudio) {
                if (!g.bufferSource || g.paused) return d;
                g.paused = !0;
                "undefined" === typeof g.bufferSource.stop ? g.bufferSource.noteOff(0) : g.bufferSource.stop(0)
            } else g.pause(), g.currentTime = 0;
            return d
        },
        mute: function (b) {
            var c = this;
            if (!c._loaded) return c.on("play", function () {
                c.mute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        },
        unmute: function (b) {
            var c = this;
            if (!c._loaded) return c.on("play", function () {
                c.unmute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
            return c
        },
        volume: function (b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function () {
                    d.volume(b, c)
                }), d;
                var g = c ? d._nodeById(c) : d._activeNode();
                g && (d._webAudio ? g.gain.value = b : g.volume =
                b * r.volume());
                return d
            }
            return d._volume
        },
        loop: function (b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function (b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function (b, d) {
            var g = this;
            if (!g._loaded) return g.on("load", function () {
                g.pos(b)
            }), "number" === typeof b ? g : g._pos || 0;
            b = parseFloat(b);
            var m = d ? g._nodeById(d) : g._activeNode();
            if (m) return 0 <= b ? (g.pause(d), m._pos = b, g.play(m._sprite, d), g) : g._webAudio ? m._pos + (c.currentTime - g._playStart) : m.currentTime;
            if (0 <= b) return g;
            for (m = 0; m < g._audioNode.length; m++) if (g._audioNode[m].paused && 4 === g._audioNode[m].readyState) return g._webAudio ? g._audioNode[m]._pos : g._audioNode[m].currentTime
        },
        pos3d: function (b, c, d, g) {
            var m = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!m._loaded) return m.on("play", function () {
                m.pos3d(b, c, d, g)
            }), m;
            if (0 <= b || 0 > b) {
                if (m._webAudio) {
                    var r = g ? m._nodeById(g) : m._activeNode();
                    r && (m._pos3d = [b, c, d], r.panner.setPosition(b, c, d))
                }
            } else return m._pos3d;
            return m
        },
        fade: function (b, c, d, g, m) {
            var r = this,
                p = Math.abs(b - c),
                s = b > c ? "down" : "up",
                p = p / 0.01,
                x = d / p;
            if (!r._loaded) return r.on("load", function () {
                r.fade(b, c, d, g, m)
            }), r;
            r.volume(b, m);
            for (var z = 1; z <= p; z++)(function () {
                var b = Math.round(1E3 * (r._volume + ("up" === s ? 0.01 : -0.01) * z)) / 1E3;
                setTimeout(function () {
                    r.volume(b, m);
                    b === c && g && g()
                }, x * z)
            })()
        },
        fadeIn: function (b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function (b, c, d, g) {
            var m = this;
            return m.fade(m._volume, b, c, function () {
                d && d();
                m.pause(g);
                m.on("end")
            }, g)
        },
        _nodeById: function (b) {
            for (var c =
            this._audioNode[0], d = 0; d < this._audioNode.length; d++) if (this._audioNode[d].id === b) {
                c = this._audioNode[d];
                break
            }
            return c
        },
        _activeNode: function () {
            for (var b = null, c = 0; c < this._audioNode.length; c++) if (!this._audioNode[c].paused) {
                b = this._audioNode[c];
                break
            }
            this._drainPool();
            return b
        },
        _inactiveNode: function (b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++) if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                b(this._audioNode[d]);
                c = !0;
                break
            }
            this._drainPool();
            if (!c) {
                var g;
                this._webAudio ? (g = this._setupAudioNode(), b(g)) : (this.load(), g = this._audioNode[this._audioNode.length - 1], g.addEventListener("loadedmetadata", function () {
                    b(g)
                }))
            }
        },
        _drainPool: function () {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function (b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b : 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]), this._onendTimer.splice(b, 1))
        },
        _setupAudioNode: function () {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(p);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function (b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else for (var g = 0; g < d.length; g++) c ? d[g].call(this, c) : d[g].call(this);
            return this
        },
        off: function (b, c) {
            for (var d = this["_on" + b], g = c.toString(), m = 0; m < d.length; m++) if (g === d[m].toString()) {
                d.splice(m, 1);
                break
            }
            return this
        },
        unload: function () {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || this.stop(c[d].id), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = r._howls.indexOf(this);
            null !== c && 0 <= c && r._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var z = function (b, c) {
        b._duration = c ? c.duration : b._duration;
        0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = {
            _default: [0, 1E3 * b._duration]
        });
        b._loaded || (b._loaded = !0, b.on("load"));
        b._autoplay && b.play()
    };
    "function" === typeof define && define.amd && define(function () {
        return {
            Howler: r,
            Howl: s
        }
    });
    "undefined" !== typeof exports && (exports.Howler = r, exports.Howl = s);
    window.Howler = r;
    window.Howl = s
})();
(function (b) {
    Number.prototype.map = function (b, c, d, g) {
        return d + (g - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function (b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function (b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function () {
        return Math.floor(this)
    };
    Number.prototype.ceil = function () {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function () {
        return this | 0
    };
    Number.prototype.toRad = function () {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function () {
        return 180 * this / Math.PI
    };
    Array.prototype.erase = function (b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind ||
    function (b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            g = function () {},
            l = function () {
                return d.apply(this instanceof g && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        g.prototype = this.prototype;
        l.prototype = new g;
        return l
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function (b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function (b) {
            return document.createElement(b)
        },
        copy: function (b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array) for (var c = [], d = 0, g = b.length; d < g; d++) c[d] = ig.copy(b[d]);
            else for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function (b, c) {
            for (var d in c) {
                var g = c[d];
                if ("object" != typeof g || g instanceof HTMLElement || g instanceof ig.Class || null === g) b[d] = g;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = g instanceof Array ? [] : {};
                    ig.merge(b[d], g)
                }
            }
            return b
        },
        ksort: function (b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                g;
            for (g in b) c.push(g);
            c.sort();
            for (g = 0; g < c.length; g++) d.push(b[c[g]]);
            return d
        },
        setVendorAttribute: function (b, c, d) {
            var g = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = b["ms" + g] = b["moz" + g] = b["webkit" + g] = b["o" + g] = d
        },
        getVendorAttribute: function (b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function (b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function (b, c, d, g, l) {
            var m = ig.$new("canvas");
            m.width = b.width;
            m.height =
            b.height;
            var p = m.getContext("2d");
            ig.System.SCALE.CRISP(m, p);
            var y = ig.getVendorAttribute(p, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(p, "getImageDataHD");
            var L = b.width / y,
                K = b.height / y;
            m.width = Math.ceil(L);
            m.height = Math.ceil(K);
            p.drawImage(b, 0, 0, L, K);
            return 1 === y ? p.getImageData(c, d, g, l) : p.getImageDataHD(c, d, g, l)
        },
        module: function (b) {
            if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function () {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function (b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function (b) {
            ig.resources.push(b)
        },
        setNocache: function (b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function () {},
        assert: function () {},
        show: function () {},
        mark: function () {},
        _loadScript: function (b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                g = ig.$new("script");
            g.type = "text/javascript";
            g.src = d;
            g.onload = function () {
                ig._waitForOnload--;
                ig._execModules()
            };
            g.onerror = function () {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(g)
        },
        _execModules: function () {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], g = !0, l = 0; l < d.requires.length; l++) {
                    var m = d.requires[l];
                    ig.modules[m] ? ig.modules[m].loaded || (g = !1) : (g = !1, ig._loadScript(m, d.name))
                }
                g && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    g = [];
                    m = ig._loadQueue[c].requires;
                    for (l = 0; l < m.length; l++) d = ig.modules[m[l]], (!d || !d.loaded) && g.push(m[l]);
                    b.push(ig._loadQueue[c].name + " (requires: " + g.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function () {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function () {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function () {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function (g, m) {
            var p = c++;
            d[p] = !0;
            var y = function () {
                d[p] && (b.requestAnimationFrame(y, m), g())
            };
            b.requestAnimationFrame(y, m);
            return p
        };
        b.ig.clearAnimation =

        function (b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function (c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function (c) {
        b.clearInterval(c)
    };
    var g = !1,
        m = /xyz/.test(function () {
            xyz
        }) ? /\bparent\b/ : /.*/,
        p = 0;
    b.ig.Class = function () {};
    var y = function (b) {
        var c = this.prototype,
            d = {},
            g;
        for (g in b)"function" == typeof b[g] && "function" == typeof c[g] && m.test(b[g]) ? (d[g] = c[g], c[g] = function (b, c) {
            return function () {
                var g = this.parent;
                this.parent = d[b];
                var m = c.apply(this, arguments);
                this.parent = g;
                return m
            }
        }(g, b[g])) : c[g] =
        b[g]
    };
    b.ig.Class.extend = function (c) {
        function d() {
            if (!g) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this)"object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var s = this.prototype;
        g = !0;
        var z = new this;
        g = !1;
        for (var l in c) z[l] = "function" == typeof c[l] && "function" == typeof s[l] && m.test(c[l]) ?
        function (b, c) {
            return function () {
                var d = this.parent;
                this.parent = s[b];
                var g = c.apply(this, arguments);
                this.parent =
                d;
                return g
            }
        }(l, c[l]) : c[l];
        d.prototype = z;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = y;
        d.classId = z.classId = ++p;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function () {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function (b) {
            return ig.Image.cache[b] || null
        },
        init: function (b) {
            this.path = b;
            this.load()
        },
        load: function (b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function () {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function () {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function () {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function (b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
                d = this.width * b,
                g = this.height * b,
                m = ig.$new("canvas");
            m.width = d;
            m.height = g;
            for (var p = m.getContext("2d"), y = p.getImageData(0, 0, d, g), r = 0; r < g; r++) for (var x = 0; x < d; x++) {
                var s = 4 * (Math.floor(r / b) * this.width + Math.floor(x / b)),
                    z = 4 * (r * d + x);
                y.data[z] = c.data[s];
                y.data[z + 1] = c.data[s + 1];
                y.data[z + 2] = c.data[s + 2];
                y.data[z + 3] = c.data[s + 3]
            }
            p.putImageData(y, 0, 0);
            this.data = m
        },
        draw: function (b, c, d, g, m, p) {
            if (this.loaded) {
                var y = ig.system.scale;
                m = (m ? m : this.width) * y;
                p = (p ? p : this.height) * y;
                ig.system.context.drawImage(this.data, d ? d * y : 0, g ? g * y : 0, m, p, ig.system.getDrawPos(b), ig.system.getDrawPos(c), m, p);
                ig.Image.drawCount++
            }
        },
        drawTile: function (b, c, d, g, m, p, y) {
            m = m ? m : g;
            if (this.loaded && !(g > this.width || m > this.height)) {
                var r = ig.system.scale,
                    x = Math.floor(g * r),
                    s = Math.floor(m * r),
                    z = p ? -1 : 1,
                    l = y ? -1 : 1;
                if (p || y) ig.system.context.save(), ig.system.context.scale(z, l);
                ig.system.context.drawImage(this.data, Math.floor(d * g) % this.width * r, Math.floor(d * g / this.width) * m * r, x, s, ig.system.getDrawPos(b) * z - (p ? x : 0), ig.system.getDrawPos(c) * l - (y ? s : 0), x, s);
                (p || y) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function () {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function () {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function (b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function (b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function (b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] + this.letterSpacing;
            return c
        },
        heightForString: function (b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function (b, c, d, g) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var m = this.height + this.lineSpacing, p = 0; p < b.length; p++) this.draw(b[p], c, d + p * m, g)
            } else {
                if (g == ig.Font.ALIGN.RIGHT || g == ig.Font.ALIGN.CENTER) p = this._widthForLine(b), c -= g == ig.Font.ALIGN.CENTER ? p / 2 : p;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (p = 0; p < b.length; p++) g = b.charCodeAt(p), c += this._drawChar(g - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function (b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var g = ig.system.scale,
                m = this.widthMap[b] * g,
                p = (this.height - 2) * g;
            ig.system.context.drawImage(this.data, this.indices[b] * g, 0, m, p, ig.system.getDrawPos(c), ig.system.getDrawPos(d), m, p);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function (b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, g = 0, m = 0; m < b.width; m++) {
                var p = 4 * m + 3;
                127 < c.data[p] ? g++ : 128 > c.data[p] && g && (this.widthMap.push(g), this.indices.push(m - g), d++, g = 0)
            }
            this.widthMap.push(g);
            this.indices.push(m - g)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function () {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function () {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function (b, c, d) {
            var g = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels) for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                    var m = new Audio(g);
                    m.load();
                    this.clips[b].push(m)
                }
                return this.clips[b][0]
            }
            var p = new Audio(g);
            d && (p.addEventListener("canplaythrough", function r(c) {
                p.removeEventListener("canplaythrough", r, !1);
                d(b, !0, c)
            }, !1), p.addEventListener("error", function (c) {
                d(b, !1, c)
            }, !1));
            p.preload = "auto";
            p.load();
            this.clips[b] = [p];
            if (c) for (c = 1; c < ig.Sound.channels; c++) m = new Audio(g), m.load(), this.clips[b].push(m);
            return p
        },
        get: function (b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];) if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function () {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function (b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function () {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function () {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function () {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function (b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function () {
            return this._loop
        },
        setLooping: function (b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function () {
            return this._volume
        },
        setVolume: function (b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function (b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function () {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function () {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function (b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function (b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function () {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function () {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function () {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function (b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function () {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function (b) {
            b.load(this._loadCallbackBound)
        },
        end: function () {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function () {},
        _loadCallback: function (b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function () {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function (b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function (b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function () {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function () {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function () {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function () {
            this.pausedAt || (this.pausedAt =
            ig.Timer.time)
        },
        unpause: function () {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function () {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function () {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function (b, c, d, g, m) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, g, m);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function (b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function (b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function (b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function (b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function () {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function () {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function (b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function () {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function (b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function (b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function (b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function (b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function (b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function () {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function () {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function () {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function () {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function (b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function (b) {
            var c =
            parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function (b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function (b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c)) if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), window.frameElement && "IFRAME" == window.frameElement.nodeName || b.preventDefault()
        },
        keyup: function (b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c)) if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function (b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function (b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function (b, c) {
            var d = ig.$(b),
                g = this;
            d.addEventListener("touchstart", function (b) {
                g.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function (b) {
                g.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function (b) {
                g.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function (b) {
                g.touchEnd(b, c)
            }, !1)
        },
        unbind: function (b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function () {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function (b) {
            return this.actions[b]
        },
        pressed: function (b) {
            return this.presses[b]
        },
        released: function (b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function () {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function (b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function (b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function () {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmStarted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/static"
        },
        {
            name: "openingSound",
            path: "media/audio/opening/opening"
        },
        {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        },
        {
            name: "collide",
            path: "media/audio/game/collide"
        },
        {
            name: "clap",
            path: "media/audio/game/clap"
        },
        {
            name: "swing",
            path: "media/audio/game/swing"
        },
        {
            name: "slowmo",
            path: "media/audio/game/slowmo"
        },
        {
            name: "goal",
            path: "media/audio/game/goal"
        }],
        debug: !1,
        init: function () {
            ig.ua.mobile ? (this.initSfx(), this.setupJukebox()) : (this.initSfx(), this.setupDesktopMusic());
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function () {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index =
                0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end", function (b) {
                    b.isPlaying = !1;
                    this.soundBuffer.pop()
                }.bind(this, this.voSoundLoaded[index])), this.voSoundLoaded[index].on("play", function (b) {
                    b.isPlaying = !0
                }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function () {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function () {
            ig.ua.mobile ? this.pausePosition = this.jukebox.player.pause() : ig.music.pause();
            this.bgmPlaying = !1
        },
        playBackgroundMusic: function () {
            this.bgmPlaying || (this.bgmStarted = !0, ig.ua.mobile ? this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0) : ig.music.play(), this._unMuteBackgroundMusic(), this.bgmPlaying = !0)
        },
        playSound: function (b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying) this.soundBuffer.push(b), b.play()
        },
        stopAllAndPlaySound: function (b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function () {
            for (index =
            0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function (b, c, d) {
            var g = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({
                urls: [g, c],
                onload: d
            }) : new Howl({
                urls: [g, c]
            })
        },
        _muteSounds: function () {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function () {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        _muteBackgroundMusic: function () {
            ig.ua.mobile ? (this.stopBackgroundMusic(), this.jukebox.player.setVolume(0)) : ig.music.volume = 0;
            this.debug && console.log("BGM muted")
        },
        _unMuteBackgroundMusic: function () {
            this.bgmStarted && (ig.ua.mobile ? (this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.jukebox.player.setVolume(1)) : ig.music.volume = 1, this.debug && console.log("BGM can play"))
        },
        focusBlurMute: function () {
            this.forceMuted || this.mute()
        },
        focusBlurUnmute: function () {
            !this.forceMuted && ig.global.soundStatus && this.unmute()
        },
        setForceMuted: function (b) {
            this.forceMuted = b
        },
        mute: function () {
            this.muted || (this._muteSounds(), this._muteBackgroundMusic(), this.muted = !0)
        },
        unmute: function () {
            this.muted && (this._unMuteSounds(), this._unMuteBackgroundMusic(), this.muted = !1)
        },
        setupWindowHandler: function () {
            "true" === getQueryVariable("webview") ? ($(window).focus(function () {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }), $(window).blur(function () {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function () {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }, window.onblur = function () {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })
        },
        initSfx: function () {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function (b) {
                    this.sfxSoundLoaded.push(this[b])
                }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function () {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function (b) {
                    this.voSoundLoaded.push(this[b])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, b)
            }
        },
        setupDesktopMusic: function () {
            ig.music.add("media/audio/background.*", "background")
        },
        setupJukebox: function () {
            ig.ua.mobile && (this.jukebox = new ig.Jukebox, this.pausePosition =
            this.jukebox.player.settings.spritemap.music.start)
        },
        forceLoopBGM: function () {
            if (!this.forceMuted && this.bgmPlaying && this.jukebox && this.jukebox.player && this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop) {
                if (0 <= this.prevTime) if (this.jukebox.player.getCurrentTime() === this.prevTime) {
                    if (this.silentCounter || (this.silentCounter = 0), this.silentCounter++, this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end || this.silentCounter > 0.0010 * ig.soundHandler.jukebox.player.settings.timeout * ig.system.fps) this.jukebox.player.pause(), this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.silentCounter = null
                } else this.silentCounter = null;
                this.prevTime = this.jukebox.player.getCurrentTime()
            }
        }
    })
});

function getHiddenProp() {
    var b = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var c = 0; c < b.length; c++) if (b[c] + "Hidden" in document) return b[c] + "Hidden";
    return null
}

function isHidden() {
    var b = getHiddenProp();
    return !b ? !1 : document[b]
}
var visProp = getHiddenProp();
if (visProp) {
    var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(evtname, visChange)
}
window.addEventListener("pagehide", function () {
    ig.soundHandler && ig.soundHandler.focusBlurMute()
}, !1);
window.addEventListener("pageshow", function () {
    ig.ua.mobile && ig.game && ig.game.resumeGame();
    ig.soundHandler && ig.soundHandler.focusBlurUnmute()
}, !1);

function visChange() {
    isHidden() ? ig.soundHandler && ig.soundHandler.focusBlurMute() : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.focusBlurUnmute())
}
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function () {
    ig.main = function (b, c, d, g, m, p, y) {
        ig.system = new ig.System(b, d, g, m, p || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new(y || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function () {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function (b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function (b, c, d, g) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !! g;
            this.tile = this.sequence[0]
        },
        rewind: function () {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function (b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function () {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function () {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function (b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function () {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function (b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function (b, c, d) {
            var g = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = g.vel.x;
            this.vel.y = g.vel.y;
            this.accel.x = g.accel.x;
            this.accel.y = g.accel.y;
            this.health = g.health;
            this._killed = g._killed;
            this.standing = g.standing;
            this.type = g.type;
            this.checkAgainst = g.checkAgainst;
            this.collides = g.collides;
            ig.merge(this, d)
        },
        addAnim: function (b, c, d, g) {
            if (!this.animSheet) throw "No animSheet to add the animation " + b + " to.";
            c = new ig.Animation(this.animSheet, c, d, g);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function () {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function (b, c, d, g) {
            return c ? (b + c * ig.system.tick).limit(-g, g) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-g, g)
        },
        handleMovementTrace: function (b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function () {
            this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function () {
            ig.game.removeEntity(this)
        },
        receiveDamage: function (b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function (b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function (b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function (b) {
            return Math.atan2(b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function () {},
        collideWith: function () {},
        ready: function () {},
        erase: function () {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function (b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =

    function (b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function (b, c, d) {
        var g = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -g : g, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -g / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, g / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function (b, c, d) {
        var g = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var m = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, m = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, m, d == b ? -g : g, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, m = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, m, -g / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, g / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function () {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function (b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function (b, c) {
            var d = Math.floor(b / this.tilesize),
                g = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= g && g < this.height ? this.data[g][d] : 0
        },
        setTile: function (b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c / this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function () {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function (b, c, m) {
            this.parent(b, c);
            this.tiledef = m || ig.CollisionMap.defaultTileDef;
            for (var p in this.tiledef) p | 0 > this.lastSlope && (this.lastSlope = p | 0)
        },
        trace: function (b, c, m, p, y, r) {
            var x = {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b,
                    y: c
                },
                tile: {
                    x: 0,
                    y: 0
                }
            },
                s = Math.ceil(Math.max(Math.abs(m), Math.abs(p)) / this.tilesize);
            if (1 < s) for (var z = m / s, l = p / s, n = 0; n < s && (z || l) && !(this._traceStep(x, b, c, z, l, y, r, m, p, n), b = x.pos.x, c = x.pos.y, x.collision.x && (m = z = 0), x.collision.y && (p = l = 0), x.collision.slope); n++);
            else this._traceStep(x, b, c, m, p, y, r, m, p, 0);
            return x
        },
        _traceStep: function (b, c, m, p, y, r, x, s, z, l) {
            b.pos.x += p;
            b.pos.y += y;
            var n = 0;
            if (p) {
                var t = 0 < p ? r : 0,
                    C = 0 > p ? this.tilesize : 0,
                    n = Math.max(Math.floor(m / this.tilesize), 0),
                    L = Math.min(Math.ceil((m + x) / this.tilesize), this.height);
                p = Math.floor((b.pos.x + t) / this.tilesize);
                var K = Math.floor((c + t) / this.tilesize);
                if (0 < l || p == K || 0 > K || K >= this.width) K = -1;
                if (0 <= p && p < this.width) for (var D =
                n; D < L && !(-1 != K && (n = this.data[D][K], 1 < n && n <= this.lastSlope && this._checkTileDef(b, n, c, m, s, z, r, x, K, D))); D++) if (n = this.data[D][p], 1 == n || n > this.lastSlope || 1 < n && this._checkTileDef(b, n, c, m, s, z, r, x, p, D)) {
                    if (1 < n && n <= this.lastSlope && b.collision.slope) break;
                    b.collision.x = !0;
                    b.tile.x = n;
                    c = b.pos.x = p * this.tilesize - t + C;
                    s = 0;
                    break
                }
            }
            if (y) {
                t = 0 < y ? x : 0;
                y = 0 > y ? this.tilesize : 0;
                n = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                C = Math.min(Math.ceil((b.pos.x + r) / this.tilesize), this.width);
                D = Math.floor((b.pos.y + t) / this.tilesize);
                L = Math.floor((m + t) / this.tilesize);
                if (0 < l || D == L || 0 > L || L >= this.height) L = -1;
                if (0 <= D && D < this.height) for (p = n; p < C && !(-1 != L && (n = this.data[L][p], 1 < n && n <= this.lastSlope && this._checkTileDef(b, n, c, m, s, z, r, x, p, L))); p++) if (n = this.data[D][p], 1 == n || n > this.lastSlope || 1 < n && this._checkTileDef(b, n, c, m, s, z, r, x, p, D)) {
                    if (1 < n && n <= this.lastSlope && b.collision.slope) break;
                    b.collision.y = !0;
                    b.tile.y = n;
                    b.pos.y = D * this.tilesize - t + y;
                    break
                }
            }
        },
        _checkTileDef: function (b, c, m, p, y, r, x, s, z, l) {
            var n = this.tiledef[c];
            if (!n) return !1;
            c = (n[2] - n[0]) * this.tilesize;
            var t = (n[3] - n[1]) * this.tilesize,
                C = n[4];
            x = m + y + (0 > t ? x : 0) - (z + n[0]) * this.tilesize;
            s = p + r + (0 < c ? s : 0) - (l + n[1]) * this.tilesize;
            if (0 < c * s - t * x) {
                if (0 > y * -t + r * c) return C;
                z = Math.sqrt(c * c + t * t);
                l = t / z;
                z = -c / z;
                var L = x * l + s * z,
                    n = l * L,
                    L = z * L;
                if (n * n + L * L >= y * y + r * r) return C || 0.5 > c * (s - r) - t * (x - y);
                b.pos.x = m + y - n;
                b.pos.y = p + r - L;
                b.collision.slope = {
                    x: c,
                    y: t,
                    nx: l,
                    ny: z
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0, 0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function (b, c, m, p) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + m,
                    y: c + p
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function () {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function (b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function (b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function (b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function () {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                g = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var m = 0; m < g; m++) {
                this.preRenderedChunks[m] = [];
                for (var p = 0; p < d; p++) this.preRenderedChunks[m][p] = this.preRenderChunk(p, m, p == d - 1 ? b - p * this.chunkSize : this.chunkSize, m == g - 1 ? c - m * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function (b, c, d, g) {
            var m = d / this.tilesize / ig.system.scale + 1,
                p = g / this.tilesize / ig.system.scale + 1,
                y = b * this.chunkSize / ig.system.scale % this.tilesize,
                r = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var x = ig.$new("canvas");
            x.width = d;
            x.height = g;
            x.retinaResolutionEnabled = !1;
            g = x.getContext("2d");
            ig.System.scaleMode(x, g);
            d = ig.system.context;
            ig.system.context = g;
            for (g = 0; g < m; g++) for (var s = 0; s < p; s++) if (g + b < this.width && s + c < this.height) {
                var z = this.data[s + c][g + b];
                z && this.tiles.drawTile(g * this.tilesize - y, s * this.tilesize - r, z - 1, this.tilesize)
            }
            ig.system.context = d;
            return x
        },
        draw: function () {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function () {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d = this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                g = Math.max(Math.floor(c / this.chunkSize), 0),
                m = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                p = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                y = this.preRenderedChunks[0].length,
                r = this.preRenderedChunks.length;
            this.repeat || (m = Math.min(m, y), p = Math.min(p, r));
            for (var x = 0; g < p; g++) {
                for (var s = 0, z = d; z < m; z++) {
                    var l = this.preRenderedChunks[g % r][z % y],
                        n = -b + z * this.chunkSize - s,
                        t = -c + g * this.chunkSize - x;
                    ig.system.context.drawImage(l, n, t);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(n, t, this.chunkSize, this.chunkSize));
                    this.repeat && l.width < this.chunkSize && n + l.width < ig.system.realWidth && (s += this.chunkSize - l.width, m++)
                }
                this.repeat && l.height < this.chunkSize && t + l.height < ig.system.realHeight && (x += this.chunkSize - l.height, p++)
            }
        },
        drawTiled: function () {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), g = (this.scroll.y / this.tilesize).toInt(), m = this.scroll.x % this.tilesize, p = this.scroll.y % this.tilesize, y = -m - this.tilesize, m = ig.system.width + this.tilesize - m, r = ig.system.height + this.tilesize - p, x = -1, p = -p - this.tilesize; p < r; x++, p += this.tilesize) {
                var s = x + g;
                if (s >= this.height || 0 > s) {
                    if (!this.repeat) continue;
                    s = (s % this.height + this.height) % this.height
                }
                for (var z = -1, l = y; l < m; z++, l += this.tilesize) {
                    b = z + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[s][b])(c = this.anims[b - 1]) ? c.draw(l, p) : this.tiles.drawTile(l, p, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function () {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function () {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function (b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++) if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
            else {
                var g = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                g.anims = this.backgroundAnims[d.tilesetName] || {};
                g.repeat = d.repeat;
                g.distance = d.distance;
                g.foreground = !! d.foreground;
                g.preRender = !! d.preRender;
                g.name = d.name;
                this.backgroundMaps.push(g)
            }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function (b) {
            this._levelToLoad = b
        },
        getMapByName: function (b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++) if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function (b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function (b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var g = this.entities[d];
                g instanceof b && !g._killed && c.push(g)
            }
            return c
        },
        spawnEntity: function (b, c, d, g) {
            var m = "string" === typeof b ? ig.global[b] : b;
            if (!m) throw "Can't spawn entity of type " + b;
            b = new m(c, d, g || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function () {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function () {
            this._doSortEntities = !0
        },
        removeEntity: function (b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function () {
            this.update();
            this.draw()
        },
        update: function () {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function () {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function () {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function () {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function () {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER)) for (var g = {}, m = Math.floor(d.pos.y / this.cellSize), p = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, y = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, r = Math.floor(d.pos.x / this.cellSize); r < p; r++) for (var x = m; x < y; x++) if (b[r]) if (b[r][x]) {
                    for (var s = b[r][x], z = 0; z < s.length; z++) d.touches(s[z]) && !g[s[z].id] && (g[s[z].id] = !0, ig.Entity.checkPair(d, s[z]));
                    s.push(d)
                } else b[r][x] = [d];
                else b[r] = {}, b[r][x] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function (b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function (b, c) {
            return b.pos.x + b.size.x - (c.pos.x + c.size.x)
        },
        POS_Y: function (b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function () {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        splashMobile: new ig.Image("media/graphics/splash/mobile/cover.jpg"),
        barFrame: new ig.Image("media/graphics/game/bar-frame.png"),
        barFill: new ig.Image("media/graphics/game/bar-fill.png"),
        init: function (b, c) {
            this.parent(b, c);
            ig.ua.mobile && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
        },
        end: function () {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b)
        },
        setupCustomAnimation: function () {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function () {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame =
            0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function () {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.ua.mobile ? this.splashMobile.draw(0, 0) : this.splashDesktop.draw(0, 0);
            ig.system.context.font = "30px cutebit";
            ig.system.context.fillStyle = "#000000";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText("LOADING...", 238, 392);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText("LOADING...", 235, 390);
            this.barFrame.draw(84, 392);
            var b = 312 * this._drawStatus;
            0 < b && this.barFill.draw(84, 400, 0, 0, b, 45)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function () {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (b) {
        for (var c = 0; c < this.length; ++c) if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function () {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
            b
        }
    };
    ig.Entity.prototype.tween = function (b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function () {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function () {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function (b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function (b, c, d, g) {
        var m = {},
            p = {},
            y = {},
            r = 0,
            x = !1,
            s = !1,
            z = !1;
        this.duration = d;
        this.paused =
        this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, g);
        this.loopNum = this.loopCount;
        this.chain = function (b) {
            z = b
        };
        this.initEnd = function (b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function (b, c, d, g) {
            if ("object" !== typeof d[b])"undefined" !== typeof c[b] && (g[b] = d[b]);
            else for (subprop in d[b]) g[b] || (g[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], g[b])
        };
        this.start = function () {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            r = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            s = !0;
            x = new ig.Timer;
            for (var d in c) this.initEnd(d, c, p);
            for (d in p) this.initStart(d, p, b, m), this.initDelta(d, y, b, p)
        };
        this.initDelta = function (b, c, d, g) {
            if ("object" !== typeof g[b]) c[b] = g[b] - d[b];
            else for (subprop in g[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], g[b])
        };
        this.propUpdate = function (b, c, d, g, m) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + g[b] * m : c[b];
            else for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], g[b], m)
        };
        this.propSet = function (b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function () {
            if (!s) return !1;
            if (this.delay) {
                if (x.delta() < this.delay) return;
                this.delay = 0;
                x.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (x.delta() + r) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in y) this.propUpdate(property, b, m, y, d);
            if (1 <= c) {
                if (0 == this.loopNum || !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    z && z.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in m) this.propSet(property, m, b);
                    r = 0;
                    x.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, p);
                    ig.merge(d, m);
                    ig.merge(m, c);
                    ig.merge(p, d);
                    for (property in p) this.initDelta(property, y, b, p);
                    r = 0;
                    x.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function () {
            this.paused = !0;
            r += x.delta()
        };
        this.resume = function () {
            this.paused = !1;
            x.reset()
        };
        this.stop = function (b) {
            b && (this.loop = this.complete = this.paused = !1, r += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function (b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function (b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function (b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =

    function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function (b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function (b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function (b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function (b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =

    function (b) {
        return b * b * b * b * b
    };
    ig.Tween.Easing.Quintic.EaseOut = function (b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function (b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function (b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function (b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function (b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function (b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function (b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function (b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function (b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function (b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =

    function (b) {
        var c, d = 0.1,
            g = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        g || (g = 0.3);
        !d || 1 > d ? (d = 1, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / g))
    };
    ig.Tween.Easing.Elastic.EaseOut = function (b) {
        var c, d = 0.1,
            g = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        g || (g = 0.3);
        !d || 1 > d ? (d = 1, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / g) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function (b) {
        var c, d = 0.1,
            g = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        g || (g = 0.3);
        !d || 1 > d ? (d = 1, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / g) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / g) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function (b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function (b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =

    function (b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    };
    ig.Tween.Easing.Bounce.EaseOut = function (b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function (b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function () {
    ig.UrlParameters = ig.Class.extend({
        init: function () {
            switch (getQueryVariable("iphone")) {
            case "true":
                ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
            case "true":
                ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
            case "true":
                ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
            case "stats":
                ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function () {
    ig.Jukebox = ig.Class.extend({
        init: function () {
            this.player = new jukebox.Player({
                resources: ["media/audio/background.mp3", "media/audio/background.ogg"],
                autoplay: !1,
                spritemap: {
                    music: {
                        start: 0,
                        end: 13.3,
                        loop: !0
                    }
                },
                timeout: 1E3
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function () {
    ig.Director = ig.Class.extend({
        init: function (b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function (b) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function (b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function (b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function () {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function () {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function (b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function () {
            return this.loadLevel(0)
        },
        lastLevel: function () {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function () {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function () {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function () {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function () {
            ig.Storage.instance = this
        },
        isCapable: function () {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function (b) {
            return null !== this.get(b)
        },
        initUnset: function (b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function (b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function (b) {
            return~~this.get(b)
        },
        getFloat: function (b) {
            return parseFloat(this.get(b))
        },
        getBool: function (b) {
            return !!this.get(b)
        },
        key: function (b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function (b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function (b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function (b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function () {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.timeslower").requires("impact.system").defines(function () {
    Supertimer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        init: function (b) {
            this.last = this.base = Supertimer.time;
            this.target = b || 0
        },
        set: function (b) {
            this.target = b || 0;
            this.base = Supertimer.time
        },
        reset: function () {
            this.base = Supertimer.time
        },
        tick: function () {
            var b = Supertimer.time - this.last;
            this.last = Supertimer.time;
            return b
        },
        delta: function () {
            return Supertimer.time - this.base - this.target
        }
    });
    Supertimer._last = 0;
    Supertimer.time = 0;
    Supertimer.maxStep =
    0.05;
    Supertimer.step = function () {
        var b = Date.now();
        Supertimer.time += Math.min((b - Supertimer._last) / 1E3, Supertimer.maxStep);
        Supertimer._last = b
    };
    ig.System.inject({
        run: function () {
            ig.Timer.step();
            Supertimer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        }
    });
    TimeSlower = ig.Class.extend({
        currentTimeScale: 1,
        timeScaleHolder: 1,
        changedTimer: null,
        changedTime: 0,
        constantDuration: 0,
        slowingDownDuration: 0,
        returnToNormalDuration: 0,
        slowingDown: !1,
        constant: !1,
        returningToNormal: !1,
        segmentStartValue: 0,
        segmentEndValue: 0,
        update: function () {
            !0 == this.slowingDown && (this.changedTimer && 0 > this.changedTimer.delta() ? ig.Timer.timeScale = this.changedTimer.delta().map(-this.slowingDownDuration, 0, 1, this.timeScaleHolder) : this.changedTimer && 0 <= this.changedTimer.delta() && (this.slowingDown = !1, this.constant = !0, this.changedTimer.set(this.constantDuration), ig.Timer.timeScale = this.timeScaleHolder, ig.log("timescale = " + ig.Timer.timeScale)));
            !0 == this.constant && this.changedTimer && 0 <= this.changedTimer.delta() && (this.constant = !1, this.returningToNormal = !0, this.changedTimer.set(this.returnToNormalDuration), ig.Timer.timeScale = this.timeScaleHolder, ig.log("timescale constant = " + ig.Timer.timeScale));
            !0 == this.returningToNormal && (this.changedTimer && 0 > this.changedTimer.delta() ? ig.Timer.timeScale = this.changedTimer.delta().map(-this.returnToNormalDuration, 0, this.timeScaleHolder, 1) : this.changedTimer && 0 <= this.changedTimer.delta() && (ig.Timer.timeScale = 1, this.slowingDown =
            this.constant = this.returningToNormal = !1, ig.log("timescale returning to normal = " + ig.Timer.timeScale)))
        },
        alterTimeScale: function (b, c, d, g) {
            1 == ig.Timer.timeScale && (this.timeScaleHolder = b, this.slowingDownDuration = c, this.constantDuration = d, this.returnToNormalDuration = g, this.changedTime = c, this.changedTimer = new Supertimer(c), ig.log("timer delta = " + this.changedTimer.delta()), this.slowingDown = !0)
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function () {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function (b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function () {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() - this.offset.y - ig.game.screen.y));
            b.rotate(this.angle);
            b.scale(this._scale.x, this._scale.y);
            null != this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function (b, c, d) {
            var g = this.size.x,
                m = this.size.y;
            null == d && (d = 0);
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y - d;
            this.size.x = this._size.x * this._scale.x;
            this.size.y =
            this._size.y * this._scale.y;
            this.pos.x += (g - this.size.x) / 2;
            this.pos.y += (m - this.size.y) / 2 - d
        },
        rotate: function () {}
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function () {
    ig.BrandingSplash = ig.Class.extend({
        init: function () {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash_320x480: new ig.AnimationSheet("branding/splash_320x480.png", 320, 200),
        splash_480x640: new ig.AnimationSheet("branding/splash_480x640.png", 480, 240),
        init: function (b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200, this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480, this.size.y = 240, this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0));
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function () {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function () {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b, c, d, g) {
            var m = ig.$new("div");
            m.id = b;
            document.body.appendChild(m);
            $("#" + m.id).css("float", "left");
            $("#" + m.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var p = window.innerHeight / mobileHeight,
                    y = window.innerWidth / mobileWidth;
                $("#" + m.id).css("left", this.pos.x * y);
                $("#" + m.id).css("top", this.pos.y * p);
                $("#" + m.id).css("width", this.size.x * y);
                $("#" + m.id).css("height", this.size.y * p)
            } else p = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(p, y), $("#" + m.id).css("left", p + this.pos.x * multiplier), $("#" + m.id).css("top", y + this.pos.y * multiplier), $("#" + m.id).css("width", this.size.x * multiplier), $("#" + m.id).css("height", this.size.y * multiplier);
            g ? $("#" + m.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + m.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function () {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent()
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function () {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function (b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
            case "true":
                console.log("centralize true");
                centralize = !0;
                break;
            case "false":
                console.log("centralize false");
                centralize = !1;
                break;
            default:
                console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (g) {
                    console.log(g)
                }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function () {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function (b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b, c, d, g) {
            var m = ig.$new("div");
            m.id = b;
            document.body.appendChild(m);
            $("#" + m.id).css("float", "left");
            $("#" + m.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var p = window.innerHeight / mobileHeight,
                    y = window.innerWidth / mobileWidth;
                $("#" + m.id).css("left", this.pos.x * y);
                $("#" + m.id).css("top", this.pos.y * p);
                $("#" + m.id).css("width", this.size.x * y);
                $("#" + m.id).css("height", this.size.y * p)
            } else p = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(p, y), $("#" + m.id).css("left", p + this.pos.x * multiplier), $("#" + m.id).css("top", y + this.pos.y * multiplier), $("#" + m.id).css("width", this.size.x * multiplier), $("#" + m.id).css("height", this.size.y * multiplier);
            g ? $("#" + m.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + m.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function () {
    EntityButtonMoreGames = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/game/button-more-games.png", 105, 66),
        size: {
            x: 186,
            y: 60
        },
        zIndex: 750,
        logoImg: new ig.Image("media/graphics/game/button-more-games.png"),
        init: function (b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? (d.div_layer_name ? (console.log("settings found ... using that div layer name"), b = d.div_layer_name) : b = "more-games", console.log("div_layer_name:", b), this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, _SETTINGS.MoreGames.NewWindow)) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle
        },
        doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return console.log("clickable layer already exists ..."), !0;
            console.log("doesnt exist yet ...");
            return !1
        },
        checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b, c, d, g) {
            var m = ig.$new("div");
            m.id = b;
            document.body.appendChild(m);
            $("#" + m.id).css("float", "left");
            $("#" + m.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var p = window.innerHeight / mobileHeight,
                    y = window.innerWidth / mobileWidth;
                $("#" + m.id).css("left", this.pos.x * y);
                $("#" + m.id).css("top", this.pos.y * p);
                $("#" + m.id).css("width", this.size.x * y);
                $("#" + m.id).css("height", this.size.y * p)
            } else p = document.getElementById("game").offsetLeft, y = document.getElementById("game").offsetTop, $("#" + m.id).css("left", p + this.pos.x * multiplier), $("#" + m.id).css("top", y + this.pos.y * multiplier), $("#" + m.id).css("width", this.size.x * multiplier), $("#" + m.id).css("height", this.size.y * multiplier);
            g ? $("#" + m.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + m.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        update: function () {
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            if (!this.central.isMenu || this.central.isShop) $("#more-games").hide(), this.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function () {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                this.initTimer = new ig.Timer(0.1);
                try {
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                } catch (b) {
                    console.log(b)
                }
            } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function () {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function () {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function () {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
            null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function () {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var g = 0, m = 1; 48 >= m; m += 1) b.lineTo(0 + 800 * Math.cos(2 * m * Math.PI / 48), 0 + 800 * Math.sin(2 * m * Math.PI / 48)), g++, 2 == g && (g = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim, 166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function () {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function (b, c, d) {
            this.parent(b, c, d)
        },
        ready: function () {
            if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                this.initTimer = new ig.Timer(0.1);
                try {
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound)
                } catch (b) {
                    console.log(b)
                }
            } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function () {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function () {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function () {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function () {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function () {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function (b) {
            this.objectArray.push(b)
        },
        clickObject: function (b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && (b.clicked(), this.firstClick = !0);
            this.firstClick && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && (b.released(), this.firstClick = !1)
        },
        update: function () {
            if (ig.ua.mobile) {
                var b = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x - this.size.x / 2 + ig.game.screen.x, this.pos.y = ig.input.mouse.y - this.size.y / 2;
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? ("close" == b.name && console.log(b), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null);
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function () {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function (b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function () {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function (b) {
            for (k in dynamicClickableEntityDivs) if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function (b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function (b, c, d, g) {
            var m = ig.$new("div");
            m.id = b;
            document.body.appendChild(m);
            $("#" + m.id).css("float", "left");
            $("#" + m.id).css("width", this.size.x * multiplier);
            $("#" + m.id).css("height", this.size.y * multiplier);
            $("#" + m.id).css("position", "absolute");
            var p = w / 2 - destW / 2,
                y = h / 2 - destH / 2;
            w == mobileWidth ? ($("#" + m.id).css("left", this.pos.x), $("#" + m.id).css("top", this.pos.y)) : ($("#" + m.id).css("left", p + this.pos.x * multiplier), $("#" + m.id).css("top", y + this.pos.y * multiplier));
            g ? $("#" + m.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + m.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + m.id).width();
            dynamicClickableEntityDivs[b].height =
            $("#" + m.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function () {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function () {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function () {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function () {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function () {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.button-more-games", "game.entities.pointer").defines(function () {
    LevelTestDesktop = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 296,
            y: 396,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        },
        {
            type: "EntityButtonMoreGames",
            x: 432,
            y: 284,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        },
        {
            type: "EntityPointer",
            x: 608,
            y: 120
        }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
                [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
                [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
                [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
                [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440],
                [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520],
                [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560],
                [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640],
                [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680],
                [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760],
                [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800],
                [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880],
                [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920],
                [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3],
                [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040],
                [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120],
                [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160],
                [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }]
    };
    LevelTestDesktopResources = [new ig.Image("media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.button-more-games", "game.entities.pointer").defines(function () {
    LevelTestMobile = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 216,
            y: 548,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        },
        {
            type: "EntityButtonMoreGames",
            x: 204,
            y: 372,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        },
        {
            type: "EntityPointer",
            x: 444,
            y: 192
        }],
        layer: [{
            name: "background",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150],
                [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180],
                [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210],
                [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
                [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300],
                [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330],
                [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390],
                [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420],
                [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450],
                [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510],
                [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540],
                [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570],
                [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630],
                [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660],
                [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690],
                [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750],
                [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780],
                [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810],
                [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870],
                [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900],
                [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930],
                [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990],
                [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
                [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050],
                [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110],
                [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140],
                [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170],
                [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]
            ]
        }]
    };
    LevelTestMobileResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.player").requires("impact.entity", "game.entities.pointer").defines(function () {
    EntityPlayer = ig.Entity.extend({
        size: {
            x: 35,
            y: 35
        },
        offset: {
            x: 15,
            y: 20
        },
        zIndex: 300,
        type: ig.Entity.TYPE.A,
        animSheet: new ig.AnimationSheet("media/graphics/game/player-one.png", 66, 102),
        player: new ig.AnimationSheet("media/graphics/game/player-one.png", 66, 102),
        jerome: new ig.AnimationSheet("media/graphics/game/luz-sueraz.png", 66, 102),
        john: new ig.AnimationSheet("media/graphics/game/rajen-nobben.png", 66, 102),
        michael: new ig.AnimationSheet("media/graphics/game/chris-rolando.png", 66, 102),
        ray: new ig.AnimationSheet("media/graphics/game/lioda-massa.png", 66, 102),
        smoke: new ig.AnimationSheet("media/graphics/game/smoke.png", 156, 96),
        distanceX: 0,
        distanceY: 0,
        slowmo: 100,
        canDrain: !1,
        slowmode: !1,
        zoom: 1,
        dead: !1,
        callOnce: !0,
        callOnce2: !0,
        spinAngle: 0,
        changeOnce: !1,
        characterID: 0,
        startingCharacter: !0,
        soundOnce: !0,
        timer: new ig.Timer,
        soundOnce2Timer: new ig.Timer,
        spinDelay: !1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            this.currentAnim = this.anims.idle;
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.pos.x = 225;
            this.pos.y = 400;
            myTimeSlower = new TimeSlower;
            this.storage = new ig.Storage;
            this.storage.initUnset("character-TP", "player1")
        },
        update: function () {
            this.parent();
            this.startingCharacter && (this.characterChosen = this.storage.get("character-TP"), "player1" == this.characterChosen ? (this.characterID = 0, this.animSheet = this.player, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim =
            this.anims.idle, this.startingCharacter = !1) : "jerome" == this.characterChosen ? (this.characterID = 1, this.animSheet = this.jerome, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim = this.anims.idle, this.startingCharacter = !1) : "john" == this.characterChosen ? (this.characterID = 2, this.animSheet = this.john, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim = this.anims.idle, this.startingCharacter = !1) : "michael" == this.characterChosen ? (this.characterID = 3, this.animSheet = this.michael, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim = this.anims.idle, this.startingCharacter = !1) : "ray" == this.characterChosen && (this.characterID = 4, this.animSheet = this.ray, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim = this.anims.idle, this.startingCharacter = !1));
            this.changeOnce && (0 == this.characterID ? (this.animSheet = this.player, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim = this.anims.idle, this.changeOnce = !1) : 1 == this.characterID ? (this.animSheet = this.jerome, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim = this.anims.idle, this.changeOnce = !1) : 2 == this.characterID ? (this.animSheet = this.john, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim = this.anims.idle, this.changeOnce = !1) : 3 == this.characterID ? (this.animSheet = this.michael, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim = this.anims.idle, this.changeOnce = !1) : 4 == this.characterID && (this.animSheet = this.ray, this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), this.currentAnim = this.anims.idle, this.changeOnce = !1));
            if (this.dead) this.callOnce && (this.animSheet = this.smoke, this.addAnim("idle", 0.1, [0, 1]), this.currentAnim = this.anims.idle, this.offset.x = 75, this.callOnce = !1, this.central.isDead = !0);
            else {
                100 < this.pos.x && 360 > this.pos.x && (this.screenDif = this.pos.x - 240, ig.game.screen.x = this.screenDif - this.size.x / 2 + 30);
                0 != this.distanceX && (this.distanceX = 1 >= this.distanceX && -1 <= this.distanceX ? 0 : Math.floor(this.distanceX / 12));
                0 != this.distanceY && (this.distanceY = 1 >= this.distanceY && -1 <= this.distanceY ? 0 : Math.floor(this.distanceY / 8));
                0 < this.distanceX ? this.anims.idle.angle = 0.5 <= this.anims.idle.angle ? 0.5 : this.anims.idle.angle + 0.05 : 0 > this.distanceX ? this.anims.idle.angle = -0.5 >= this.anims.idle.angle ? -0.5 : this.anims.idle.angle - 0.05 : 0 != this.anims.idle.angle && (0 < this.anims.idle.angle ? (this.anims.idle.angle -= 0.05, 0 > this.anims.idle.angle && (this.anims.idle.angle = 0)) : 0 > this.anims.idle.angle && (this.anims.idle.angle += 0.05, 0 < this.anims.idle.angle && (this.anims.idle.angle = 0)));
                this.pos.x += this.distanceX;
                this.pos.y += this.distanceY;
                if ((12 < this.distanceX || -12 > this.distanceX) && !this.spinDelay) this.spinDelay = this.callOnce2 = this.spin = !0;
                if (this.spin && (10 < this.distanceX && !this.spinRight && !this.spinLeft ? this.spinRight = !0 : -10 > this.distanceX && !this.spinRight && !this.spinLeft && (this.spinLeft = !0), this.spinRight && (this.spinAngle += 0.4), this.spinLeft && (this.spinAngle -= 0.4), this.anims.idle.angle = this.spinAngle, 6.3 < this.spinAngle || -6.3 > this.spinAngle)) this.spinAngle = 0, this.anims.idle.angle = 0, this.spinRight = this.spinLeft = this.spin = !1;
                this.spinDelay && this.callOnce2 && (this.timer.set(0.5), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swing), this.callOnce2 = !1);
                0 < this.timer.delta() && (this.spinDelay = !1);
                this.central = ig.game.getEntitiesByType(EntityCentral)[0];
                !this.gameRunning && !this.central.isShop && (this.startGame = 192 < this.pointer.pos.x && 280 > this.pointer.pos.x && 370 < this.pointer.pos.y && 444 > this.pointer.pos.y ? !0 : !1);
                ig.input.state("click") && this.startGame ? (this.soundOnce && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.clap), this.soundOnce = !1), this.gameRunning = !0, this.central = ig.game.getEntitiesByType(EntityCentral)[0], this.central.isMenu = !1, this.clickedPosX = this.pointer.pos.x, this.clickedPosY = this.pointer.pos.y, this.distanceX = this.clickedPosX - this.pos.x - (this.size.x / 2 - this.pointer.size.x / 2), this.distanceY = this.clickedPosY - this.pos.y - 50, this.anims.idle.frameTime = 0.03, this.soundOnce2 = this.canDrain = !0, 100 > this.slowmo && (this.slowmo += 0.25, this.slowmode = !1)) : this.canDrain ? (this.anims.idle.frameTime = 0.2, 0 < this.slowmo ? (this.soundOnce2 && 0 < this.soundOnce2Timer.delta() && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.slowmo), this.soundOnce2Timer.set(1), this.soundOnce2 = !1), this.slowmo -= 0.5, this.slowmode = !0) : this.canDrain = !1) : (this.anims.idle.frameTime = 0.03, 100 > this.slowmo && (this.slowmo += 0.25, this.slowmode = !1));
                this.slowmode ? this.tween({
                    zoom: 0.9
                }, 0.1, {
                    easing: ig.Tween.Easing.Bounce.EaseInOut
                }).start() : this.tween({
                    zoom: 1
                }, 0.1, {
                    easing: ig.Tween.Easing.Bounce.EaseInOut
                }).start()
            }
        },
        slowTime: function () {
            ig.Timer.timerScale = 0.1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.field").requires("impact.entity", "game.entities.player").defines(function () {
    EntityField = ig.Entity.extend({
        size: {
            x: 100,
            y: 100
        },
        zIndex: 100,
        type: ig.Entity.TYPE.B,
        scrollingOne: 0,
        scrollingTwo: 0,
        scrollingThree: 0,
        globalAlpha: 0,
        fieldType: new ig.Image("media/graphics/game/grass-regular.png"),
        fieldType2: new ig.Image("media/graphics/game/grass-rain.png"),
        fieldType3: new ig.Image("media/graphics/game/grass-winter.png"),
        dead: !1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.scrollingOne = 0;
            this.scrollingTwo = 2262;
            this.scrollingThree = 4524
        },
        update: function () {
            this.parent();
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            this.dead ? (this.scrollingOne += 0, this.scrollingTwo += 0, this.scrollingThree += 0) : this.player.slowmode ? (this.scrollingOne += 2, this.scrollingTwo += 2, this.scrollingThree += 2) : (this.scrollingOne += 6, this.scrollingTwo += 6, this.scrollingThree += 6)
        },
        draw: function () {
            this.parent();
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            this.fieldType.draw(ig.system.width / 2 - this.fieldType.width / 2 - ig.game.screen.x, ig.system.height - this.fieldType.height + this.scrollingOne);
            this.fieldType2.draw(ig.system.width / 2 - this.fieldType.width / 2 - ig.game.screen.x, ig.system.height - this.fieldType.height + this.scrollingTwo);
            this.fieldType3.draw(ig.system.width / 2 - this.fieldType.width / 2 - ig.game.screen.x, ig.system.height - this.fieldType.height + this.scrollingThree);
            2462 < this.scrollingOne && (this.scrollingOne -= 6786);
            2462 < this.scrollingTwo && (this.scrollingTwo -= 6786);
            2462 < this.scrollingThree && (this.scrollingThree -= 6786);
            this.player.slowmode ? this.tween({
                globalAlpha: 0.6
            }, 0.2, {
                easing: ig.Tween.Easing.Bounce.EaseInOut
            }).start() : this.tween({
                globalAlpha: 0
            }, 0.1, {
                easing: ig.Tween.Easing.Bounce.EaseInOut
            }).start();
            ig.system.context.save();
            ig.system.context.fillStyle = "#000000";
            ig.system.context.globalAlpha = this.globalAlpha;
            ig.system.context.fillRect(0, 0, 1E3, 1E3);
            ig.system.context.restore()
        },
        slowTime: function () {
            ig.Timer.timerScale = 0.1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.touchdown").requires("impact.entity").defines(function () {
    EntityTouchdown = ig.Entity.extend({
        size: {
            x: 2480,
            y: 200
        },
        zIndex: 500,
        type: ig.Entity.TYPE.A,
        scrolling: -1550,
        checkAgainst: ig.Entity.TYPE.A,
        touchdown: !1,
        touchdownCount: 0,
        enemyChange: 0,
        dead: !1,
        scorePos: -100,
        callOnce: !0,
        callOnce2: !0,
        timer: new ig.Timer,
        touchdownText: !1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.pos.y = -1550
        },
        update: function () {
            this.parent();
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            this.enemy = ig.game.getEntitiesByType(EntityEnemy)[0];
            this.enemyBig = ig.game.getEntitiesByType(EntityEnemyBig)[0];
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            this.dead ? this.pos.y += 0 : (this.pos.y = this.player.slowmode ? this.pos.y + 2 : this.pos.y + 6, 640 < this.pos.y && (this.pos.y -= 2262, this.touchdown = !1));
            !this.central.isMenu && this.callOnce && (this.tween({
                scorePos: 90
            }, 0.5, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.callOnce = !1);
            this.central.isDead && this.callOnce2 && (this.tween({
                scorePos: -90
            }, 0.5, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.callOnce2 = !1);
            ig.global.touchdownCount = this.touchdownCount
        },
        check: function (b) {
            !this.central.isMenu && b instanceof EntityPlayer && !this.touchdown && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.goal), ig.game.spawnEntity(EntityConfettiGenerator, 0, 0), this.touchdownCount += 1, this.touchdownText = !0, this.timer.set(2), this.enemyChange = 4 > this.enemyChange ? this.enemyChange + 1 : 0, this.touchdown = !0)
        },
        draw: function () {
            this.parent();
            this.context = ig.system.context;
            this.touchdownText && (0 < this.timer.delta() ? this.touchdownText = !1 : (this.context.font = "40pt cutebit", this.context.textAlign = "center", this.context.fillStyle = "#000000", this.context.fillText("GOAL!", 242, 202), this.context.fillStyle = "#ffffff", this.context.fillText("GOAL!", 240, 200)));
            this.context.font = "30pt cutebit";
            this.context.textAlign = "center";
            this.context.fillStyle = "#000000";
            this.context.fillText(this.touchdownCount, 442, this.scorePos + 2);
            this.context.fillStyle = "#ffffff";
            this.context.fillText(this.touchdownCount, 440, this.scorePos)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ball").requires("impact.entity", "game.entities.player").defines(function () {
    EntityBall = ig.Entity.extend({
        size: {
            x: 20,
            y: 20
        },
        zIndex: 290,
        animSheet: new ig.AnimationSheet("media/graphics/game/ball.png", 24, 24),
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.03, [0, 1, 2]);
            this.currentAnim = this.anims.idle;
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0]
        },
        update: function () {
            this.parent();
            this.player.dead ? this.pos.y = this.player.pos.y - 1E4 : (this.pos.x = this.player.pos.x + 5 + 35 * Math.cos(this.player.anims.idle.angle - 1.5), this.pos.y = this.player.pos.y - 35 * Math.sin(this.player.anims.idle.angle + 1.5), this.anims.idle.frameTime = this.player.slowmode ? 0.2 : 0.03)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemy").requires("impact.entity", "game.entities.player").defines(function () {
    EntityEnemy = ig.Entity.extend({
        size: {
            x: 12,
            y: 12
        },
        offset: {
            x: 30,
            y: 20
        },
        zIndex: 300,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        distanceToPlayerX: 0,
        distanceToPlayerY: 0,
        speedOffset: 0,
        randomSpeed: 0,
        maxVel: {
            x: 1E3,
            y: 1E3
        },
        maxSpeed: 250,
        maxSpeedX: 300,
        speedDecay: 0,
        isTackle: !1,
        rotate: 0,
        touched: !1,
        enemy1: new ig.AnimationSheet("media/graphics/game/enemy-one.png", 66, 102),
        enemy2: new ig.AnimationSheet("media/graphics/game/enemy-two.png", 66, 102),
        enemy3: new ig.AnimationSheet("media/graphics/game/enemy-three.png", 66, 102),
        enemy4: new ig.AnimationSheet("media/graphics/game/enemy-four.png", 66, 102),
        enemy5: new ig.AnimationSheet("media/graphics/game/enemy-five.png", 66, 102),
        enemyType: 0,
        dead: !1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            0 == this.enemyType ? this.animSheet = this.enemy1 : 1 == this.enemyType ? this.animSheet = this.enemy2 : 2 == this.enemyType ? this.animSheet = this.enemy3 : 3 == this.enemyType ? this.animSheet = this.enemy4 : 4 == this.enemyType && (this.animSheet =
            this.enemy5);
            this.addAnim("idle", 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            this.addAnim("tackle", 0.03, [10, 11, 12, 13, 14]);
            this.currentAnim = this.anims.idle;
            this.anims.idle.pivot.x = 35;
            this.anims.idle.pivot.y = 30
        },
        update: function () {
            this.parent();
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            this.field = ig.game.getEntitiesByType(EntityField)[0];
            this.touchdown = ig.game.getEntitiesByType(EntityTouchdown)[0];
            this.spawnerEnemy = ig.game.getEntitiesByType(EntitySpawnerEnemy)[0];
            this.speedDecay = this.dead ? 0 : this.speedDecay + 3;
            !this.isTackle && 100 > this.distanceTo(this.player) && (this.isTackle = !0, this.rotate = this.angleBetween(this.pos.x, this.pos.y, this.player.pos.x, this.player.pos.y), this.rotate += 1.5);
            if (this.isTackle) this.anims.tackle.angle = this.rotate, this.currentAnim = this.anims.tackle, this.anims.tackle.frameTime = this.player.slowmode ? 0.2 : 0.03;
            else {
                var b = this.angleBetween(this.pos.x, this.pos.y, this.player.pos.x, this.player.pos.y);
                this.anims.idle.angle = b + 1.5;
                this.player.slowmode ? (this.vel.x = Math.cos(b) * this.maxSpeedX / 3, this.vel.y = (Math.sin(b) * this.maxSpeed + this.speedDecay) / 3, this.anims.idle.frameTime = 0.2) : (this.vel.x = Math.cos(b) * this.maxSpeedX, this.vel.y = Math.sin(b) * this.maxSpeed + this.speedDecay, this.anims.idle.frameTime = 0.03)
            }
            800 < this.pos.y && this.kill()
        },
        check: function (b) {
            if (b instanceof EntityPlayer && !this.touched) {
                for (i = 0; i < ig.game.getEntitiesByType(EntityEnemy).length; i++) this.enemy = ig.game.getEntitiesByType(EntityEnemy)[i], this.enemy.dead = !0;
                this.player.dead = !0;
                this.field.dead = !0;
                this.touchdown.dead = !0;
                this.spawnerEnemy.dead = !0;
                this.player.slowmode = !1;
                this.touched = !0;
                this.kill()
            }
        },
        slowTime: function () {
            ig.Timer.timerScale = 0.1
        },
        angleBetween: function (b, c, d, g) {
            return angleRadians = Math.atan2(g - c, d - b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemy-big").requires("impact.entity", "game.entities.player").defines(function () {
    EntityEnemyBig = ig.Entity.extend({
        size: {
            x: 12,
            y: 12
        },
        offset: {
            x: 30,
            y: 20
        },
        zIndex: 300,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        distanceToPlayerX: 0,
        distanceToPlayerY: 0,
        speedOffset: 0,
        randomSpeed: 0,
        maxVel: {
            x: 1E3,
            y: 1E3
        },
        maxSpeed: 125,
        maxSpeedX: 150,
        speedDecay: 0,
        touched: !1,
        enemy1: new ig.AnimationSheet("media/graphics/game/enemy-big-one.png", 120, 120),
        enemy2: new ig.AnimationSheet("media/graphics/game/enemy-big-two.png", 120, 120),
        enemy3: new ig.AnimationSheet("media/graphics/game/enemy-big-three.png", 120, 120),
        enemy4: new ig.AnimationSheet("media/graphics/game/enemy-big-four.png", 120, 120),
        enemyType: 0,
        dead: !1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            0 == this.enemyType ? this.animSheet = this.enemy1 : 1 == this.enemyType ? this.animSheet = this.enemy2 : 2 == this.enemyType ? this.animSheet = this.enemy3 : 3 == this.enemyType && (this.animSheet = this.enemy4);
            this.addAnim("idle", 0.06, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
            this.currentAnim = this.anims.idle;
            this.anims.idle.pivot.x = 35;
            this.anims.idle.pivot.y = 30
        },
        update: function () {
            this.parent();
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            this.field = ig.game.getEntitiesByType(EntityField)[0];
            this.touchdown = ig.game.getEntitiesByType(EntityTouchdown)[0];
            this.spawnerEnemy = ig.game.getEntitiesByType(EntitySpawnerEnemy)[0];
            this.speedDecay = this.dead ? 0 : this.speedDecay + 1.5;
            var b = this.angleBetween(this.pos.x, this.pos.y, this.player.pos.x, this.player.pos.y);
            this.anims.idle.angle = b + 1.5;
            this.player.slowmode ? (this.vel.x = Math.cos(b) * this.maxSpeedX / 3, this.vel.y = (Math.sin(b) * this.maxSpeed + this.speedDecay) / 3, this.anims.idle.frameTime = 0.4) : (this.vel.x = Math.cos(b) * this.maxSpeedX, this.vel.y = Math.sin(b) * this.maxSpeed + this.speedDecay, this.anims.idle.frameTime = 0.06);
            800 < this.pos.y && this.kill()
        },
        check: function (b) {
            if (b instanceof EntityPlayer && !this.touched) {
                for (i = 0; i < ig.game.getEntitiesByType(EntityEnemy).length; i++) this.enemy = ig.game.getEntitiesByType(EntityEnemy)[i], this.enemy.dead = !0;
                for (i = 0; i < ig.game.getEntitiesByType(EntityEnemyBig).length; i++) this.enemyBig =
                ig.game.getEntitiesByType(EntityEnemyBig)[i], this.enemyBig.dead = !0;
                this.dead = !0;
                this.player.dead = !0;
                this.field.dead = !0;
                this.touchdown.dead = !0;
                this.spawnerEnemy.dead = !0;
                this.player.slowmode = !1;
                this.touched = !0;
                this.kill()
            }
        },
        slowTime: function () {
            ig.Timer.timerScale = 0.1
        },
        angleBetween: function (b, c, d, g) {
            return angleRadians = Math.atan2(g - c, d - b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.spawner-enemy").requires("impact.entity", "game.entities.enemy", "game.entities.enemy-big").defines(function () {
    EntitySpawnerEnemy = ig.Entity.extend({
        size: {
            x: 50,
            y: 480
        },
        zIndex: 300,
        type: ig.Entity.TYPE.B,
        timer: new ig.Timer,
        timer2: new ig.Timer,
        timer3: new ig.Timer,
        timer4: new ig.Timer,
        timer5: new ig.Timer,
        timer6: new ig.Timer,
        timeRng: 0,
        timeRng2: 0,
        timerRng3: 0,
        timerRng4: 0,
        timerRng5: 0,
        timerRng6: 0,
        enemyType: 0,
        dead: !1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.timer.set(3)
        },
        update: function () {
            this.parent();
            this.touchdown = ig.game.getEntitiesByType(EntityTouchdown)[0];
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            !this.central.isMenu && !this.dead && (this.rng = Math.random(), this.timeRng = 3 + 9 * Math.random(), this.timeRng2 = 3 + 9 * Math.random(), this.timeRng3 = 3 + 9 * Math.random(), this.timeRng4 = 5 + 9 * Math.random(), this.timeRng5 = 5 + 9 * Math.random(), this.timeRng6 = 5 + 9 * Math.random(), 0 < this.timer.delta() && (0 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 0
            }) : 1 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 1
            }) : 2 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 2
            }) : 3 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 3
            }) : 4 == this.touchdown.enemyChange && ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 4
            }), ig.game.sortEntitiesDeferred(), this.timer.set(this.timeRng)), 0 < this.timer2.delta() && (0 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 0
            }) : 1 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 1
            }) : 2 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 2
            }) : 3 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 3
            }) : 4 == this.touchdown.enemyChange && ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 4
            }), ig.game.sortEntitiesDeferred(), this.timer2.set(this.timeRng2)), 0 < this.timer3.delta() && (0 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 0
            }) : 1 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 1
            }) : 2 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 2
            }) : 3 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 3
            }) : 4 == this.touchdown.enemyChange && ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 4
            }), ig.game.sortEntitiesDeferred(), this.timer3.set(this.timeRng3)), 0 < this.timer4.delta() && (0 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 0
            }) : 1 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 1
            }) : 2 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 2
            }) : 3 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 3
            }) : 4 == this.touchdown.enemyChange && ig.game.spawnEntity(EntityEnemy, -100, -200, {
                enemyType: 4
            }), ig.game.sortEntitiesDeferred(), this.timer4.set(this.timeRng4)), 0 < this.timer5.delta() && (0 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 0
            }) : 1 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 1
            }) : 2 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 2
            }) : 3 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 3
            }) : 4 == this.touchdown.enemyChange && ig.game.spawnEntity(EntityEnemy, 580, -200, {
                enemyType: 4
            }), ig.game.sortEntitiesDeferred(), this.timer5.set(this.timeRng5)), 0 < this.timer6.delta() && (0 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 0
            }) : 1 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 1
            }) : 2 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 2
            }) : 3 == this.touchdown.enemyChange ? ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 3
            }) : 4 == this.touchdown.enemyChange && ig.game.spawnEntity(EntityEnemy, -100 + 900 * Math.random(), -300, {
                enemyType: 4
            }), ig.game.sortEntitiesDeferred(), this.timer6.set(this.timeRng6)))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.title").requires("impact.entity").defines(function () {
    EntityTitle = ig.Entity.extend({
        size: {
            x: 324,
            y: 147
        },
        zIndex: 1500,
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/title.png", 324, 174),
        callOnce: !0,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.storage = new ig.Storage;
            this.addAnim("idle", 0.5, [0]);
            this.currentAnim = this.anims.idle;
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            this.tween({
                pos: {
                    y: 90
                }
            }, 1, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        update: function () {
            this.parent();
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            !this.central.isMenu && this.callOnce && (this.tween({
                pos: {
                    y: -500
                }
            }, 1, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.callOnce = !1);
            this.central.isShop && (this.tween({
                pos: {
                    y: -500
                }
            }, 1, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.callOnce = !1)
        },
        draw: function () {
            this.parent();
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            this.central.isMenu && !this.central.isShop && (this.context = ig.system.context, this.context.font = "20pt cutebit", this.context.textAlign = "center", this.context.fillStyle = "#000000", this.context.fillText("Hold player", 242, 337), this.context.fillText("to start", 242, 367), this.context.fillStyle = "#ffffff", this.context.fillText("Hold player", 240, 335), this.context.fillText("to start", 240, 365))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.tackled").requires("impact.entity").defines(function () {
    EntityTackled = ig.Entity.extend({
        size: {
            x: 366,
            y: 354
        },
        zIndex: 600,
        type: ig.Entity.TYPE.B,
        scorePos: -250,
        animSheet: new ig.AnimationSheet("media/graphics/game/tackled.png", 372, 360),
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.storage = new ig.Storage;
            this.storage.initUnset("touchdowncount-TP", 0);
            this.storage.initUnset("touchdownhighscore-TP", 0);
            this.touchdownHighscore = this.storage.get("touchdownhighscore-TP");
            ig.global.touchdownCount > this.touchdownHighscore && this.storage.set("touchdownhighscore-TP", ig.global.touchdownCount);
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.collide);
            this.storedTouchdown = this.storage.getInt("touchdowncount-TP");
            this.addedTouchdown = this.storedTouchdown + ig.global.touchdownCount;
            this.storage.set("touchdowncount-TP", this.addedTouchdown);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.touchdown = ig.game.getEntitiesByType(EntityTouchdown)[0];
            this.tween({
                pos: {
                    y: 100
                },
                scorePos: 380
            }, 1, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        updates: function () {
            this.parent()
        },
        clicked: function () {},
        released: function () {},
        draw: function () {
            this.parent();
            this.context = ig.system.context;
            this.context.font = "40pt cutebit";
            this.context.textAlign = "center";
            this.context.fillStyle = "#ffffff";
            this.context.fillText(this.touchdown.touchdownCount, 0.5 * ig.system.width, this.scorePos)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-arrows").requires("impact.entity").defines(function () {
    EntityButtonArrows = ig.Entity.extend({
        size: {
            x: 96,
            y: 78
        },
        zIndex: 1502,
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/button-arrow.png", 105, 66),
        buttonID: 0,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("left", 1, [0]);
            this.addAnim("right", 1, [1]);
            0 == this.buttonID && (this.currentAnim = this.anims.left, this.tween({
                pos: {
                    y: 500
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start());
            1 == this.buttonID && (this.currentAnim = this.anims.right, this.tween({
                pos: {
                    y: 500
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start())
        },
        clicked: function () {},
        released: function () {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swing);
            0 == this.buttonID && (0 == this.player.characterID ? this.player.characterID = 4 : this.player.characterID--, this.player.changeOnce = !0);
            1 == this.buttonID && (4 == this.player.characterID ? this.player.characterID = 0 : this.player.characterID++, this.player.changeOnce = !0)
        },
        update: function () {
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-select").requires("impact.entity").defines(function () {
    EntityButtonSelect = ig.Entity.extend({
        size: {
            x: 192,
            y: 78
        },
        zIndex: 1501,
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/button-select.png", 192, 81),
        timer: new ig.Timer,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.storage = new ig.Storage;
            this.addAnim("idle", 1, [0]);
            this.addAnim("empty", 1, [1]);
            this.currentAnim = this.anims.idle;
            this.timer.set(1);
            this.tween({
                pos: {
                    y: 500
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        clicked: function () {},
        released: function () {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.clap);
            0 == this.player.characterID ? this.storage.set("character-TP", "player1") : 1 == this.player.characterID ? this.storage.set("character-TP", "jerome") : 2 == this.player.characterID ? this.storage.set("character-TP", "john") : 3 == this.player.characterID ? this.storage.set("character-TP", "michael") : 4 == this.player.characterID && this.storage.set("character-TP", "ray");
            ig.game.director.reloadLevel()
        },
        update: function () {
            this.parent();
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            0 < this.timer.delta() && (0 == this.player.characterID ? (this.pos.x = 149, this.pos.y = 500) : 1 == this.player.characterID ? this.storage.get("char1unlock-TP") ? (this.pos.x = 149, this.pos.y = 500) : (this.pos.x = 149, this.pos.y = 1E3) : 2 == this.player.characterID ? this.storage.get("char2unlock-TP") ? (this.pos.x = 149, this.pos.y = 500) : (this.pos.x = 149, this.pos.y = 1E3) : 3 == this.player.characterID ? this.storage.get("char3unlock-TP") ? (this.pos.x = 149, this.pos.y = 500) : (this.pos.x = 149, this.pos.y =
            1E3) : 4 == this.player.characterID && (this.storage.get("char4unlock-TP") ? (this.pos.x = 149, this.pos.y = 500) : (this.pos.x = 149, this.pos.y = 1E3)))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop").requires("impact.entity", "game.entities.button-arrows", "game.entities.button-select").defines(function () {
    EntityShop = ig.Entity.extend({
        size: {
            x: 366,
            y: 354
        },
        zIndex: 1501,
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/shop.png", 372, 360),
        storage: new ig.Storage,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.storage.initUnset("touchdowncount-TP", 0);
            this.storage.initUnset("touchdownhighscore-TP", 0);
            this.storage.initUnset("char1unlock-TP", !1);
            this.storage.initUnset("char2unlock-TP", !1);
            this.storage.initUnset("char3unlock-TP", !1);
            this.storage.initUnset("char4unlock-TP", !1);
            (25 <= this.storage.get("touchdowncount-TP") || 5 <= this.storage.get("touchdownhighscore-TP")) && this.storage.set("char1unlock-TP", !0);
            (50 <= this.storage.get("touchdowncount-TP") || 10 <= this.storage.get("touchdownhighscore-TP")) && this.storage.set("char2unlock-TP", !0);
            (75 <= this.storage.get("touchdowncount-TP") || 15 <= this.storage.get("touchdownhighscore-TP")) && this.storage.set("char3unlock-TP", !0);
            (150 <= this.storage.get("touchdowncount-TP") || 25 <= this.storage.get("touchdownhighscore-TP")) && this.storage.set("char4unlock-TP", !0);
            this.storage.get("char1unlock-TP") && (this.char1unlock = !0);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            this.tween({
                pos: {
                    y: 30
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start();
            ig.game.spawnEntity(EntityButtonArrows, 30, 1E3, {
                buttonID: 0
            });
            ig.game.spawnEntity(EntityButtonArrows, 354, 1E3, {
                buttonID: 1
            });
            ig.game.spawnEntity(EntityButtonSelect, 149, 1E3)
        },
        update: function () {
            this.parent()
        },
        draw: function () {
            this.parent();
            this.ctx = ig.system.context;
            this.ctx.fillStyle = "#ffffff";
            this.ctx.font = "25pt cutebit";
            this.ctx.textAlign = "center";
            this.ctx.fillText(this.storage.get("touchdowncount-TP"), this.pos.x + 110, this.pos.y + 205);
            this.ctx.fillText(this.storage.get("touchdownhighscore-TP"), this.pos.x + 270, this.pos.y + 205);
            this.ctx.fillStyle = "#fff68e";
            this.ctx.font = "12pt cutebit";
            this.ctx.textAlign = "center";
            0 == this.player.characterID ? (this.ctx.fillText("Rookie", this.pos.x + this.size.x / 2, this.pos.y + 255), this.ctx.fillStyle = "#ffffff", this.ctx.font = "15pt cutebit", this.ctx.fillText("Available", this.pos.x + this.size.x / 2, this.pos.y + 285)) : 1 == this.player.characterID ? (this.ctx.fillText("Luz Sueraz", this.pos.x + this.size.x / 2, this.pos.y + 255), this.storage.get("char1unlock-TP") ? (this.ctx.fillStyle = "#ffffff", this.ctx.font = "15pt cutebit", this.ctx.fillText("Available", this.pos.x + this.size.x / 2, this.pos.y + 285)) : (this.ctx.fillStyle = "#ffffff", this.ctx.font = "10pt cutebit", this.ctx.fillText("25 goals", this.pos.x + this.size.x / 2, this.pos.y + 275), this.ctx.fillText("or", this.pos.x + this.size.x / 2, this.pos.y + 290), this.ctx.fillText("5 highscore to unlock", this.pos.x + this.size.x / 2, this.pos.y + 305))) : 2 == this.player.characterID ? (this.ctx.fillText("Rajen Nobben", this.pos.x + this.size.x / 2, this.pos.y + 255), this.storage.get("char2unlock-TP") ? (this.ctx.fillStyle = "#ffffff", this.ctx.font = "15pt cutebit", this.ctx.fillText("Available", this.pos.x + this.size.x / 2, this.pos.y + 285)) : (this.ctx.fillStyle = "#ffffff", this.ctx.font = "10pt cutebit", this.ctx.fillText("50 goals", this.pos.x + this.size.x / 2, this.pos.y + 275), this.ctx.fillText("or", this.pos.x + this.size.x / 2, this.pos.y + 290), this.ctx.fillText("10 highscore to unlock", this.pos.x + this.size.x / 2, this.pos.y + 305))) : 3 == this.player.characterID ? (this.ctx.fillText("Chris Rolando", this.pos.x + this.size.x / 2, this.pos.y + 255), this.storage.get("char3unlock-TP") ? (this.ctx.fillStyle = "#ffffff", this.ctx.font = "15pt cutebit", this.ctx.fillText("Available", this.pos.x + this.size.x / 2, this.pos.y + 285)) : (this.ctx.fillStyle = "#ffffff", this.ctx.font = "10pt cutebit", this.ctx.fillText("75 goals", this.pos.x + this.size.x / 2, this.pos.y + 275), this.ctx.fillText("or", this.pos.x + this.size.x / 2, this.pos.y + 290), this.ctx.fillText("15 highscore to unlock", this.pos.x + this.size.x / 2, this.pos.y + 305))) : 4 == this.player.characterID && (this.ctx.fillText("Lionda Massa", this.pos.x + this.size.x / 2, this.pos.y + 255), this.storage.get("char4unlock-TP") ? (this.ctx.fillStyle = "#ffffff", this.ctx.font = "15pt cutebit", this.ctx.fillText("Available", this.pos.x + this.size.x / 2, this.pos.y + 285)) : (this.ctx.fillStyle = "#ffffff", this.ctx.font = "10pt cutebit", this.ctx.fillText("150 goals", this.pos.x + this.size.x / 2, this.pos.y + 275), this.ctx.fillText("or", this.pos.x + this.size.x / 2, this.pos.y + 290), this.ctx.fillText("25 highscore to unlock", this.pos.x + this.size.x / 2, this.pos.y + 305)))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-shop").requires("impact.entity", "game.entities.shop").defines(function () {
    EntityButtonShop = ig.Entity.extend({
        size: {
            x: 186,
            y: 78
        },
        zIndex: 1500,
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/btn-shop.png", 192, 81),
        callOnce: !0,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle;
            this.central = ig.game.getEntitiesByType(EntityCentral);
            this.tween({
                pos: {
                    y: 520
                }
            }, 1, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        clicked: function () {},
        released: function () {
            this.central.isShop = !0;
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swing);
            ig.game.spawnEntity(EntityShop, 50, -100)
        },
        update: function () {
            this.parent();
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            !this.central.isMenu && this.callOnce && (this.tween({
                pos: {
                    y: 1E3
                }
            }, 1, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.callOnce = !1);
            this.central.isShop && (this.tween({
                pos: {
                    y: 1E3
                }
            }, 1, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.player.tween({
                pos: {
                    y: 430
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.callOnce = !1)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.slowmo-bar").requires("impact.entity").defines(function () {
    EntitySlowmoBar = ig.Entity.extend({
        size: {
            x: 312,
            y: 45
        },
        zIndex: 1E3,
        type: ig.Entity.TYPE.B,
        barFrame: new ig.Image("media/graphics/game/bar-frame.png"),
        barFill: new ig.Image("media/graphics/game/bar-fill.png"),
        callOnce: !0,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.central = ig.game.getEntitiesByType(EntityCentral)[0]
        },
        update: function () {
            this.parent();
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            !this.central.isMenu && this.callOnce && (this.tween({
                pos: {
                    y: 50
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.callOnce = !1);
            this.central.isDead && !this.callOnce && (this.tween({
                pos: {
                    y: -100
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.callOnce = !0)
        },
        draw: function () {
            this.parent();
            this.central && !this.central.isMenu && (this.barFrame.draw(this.pos.x, this.pos.y), this.barFill.draw(this.pos.x, this.pos.y + 8, 0, 0, 311 * (this.player.slowmo / 100) + 1, this.size.y))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.sound-status").requires("impact.entity").defines(function () {
    EntitySoundStatus = ig.Entity.extend({
        size: {
            x: 84,
            y: 66
        },
        zIndex: 1010,
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/sound-status.png", 105, 66),
        callOnce: !0,
        callOnce2: !0,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.storage = new ig.Storage;
            ig.global.soundStatus;
            this.addAnim("unmute", 1, [1]);
            this.addAnim("mute", 1, [0]);
            this.tween({
                pos: {
                    y: 20
                }
            }, 1, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start();
            this.storage.initUnset("soundstatus-TP", !0);
            ig.global.soundStatus = this.storage.get("soundstatus-TP");
            ig.ua.mobile ? this.currentAnim = ig.global.soundStatus ? this.anims.unmute : this.anims.mute : ig.global.soundStatus ? (this.currentAnim = this.anims.unmute, ig.soundHandler.unmute()) : (this.currentAnim = this.anims.mute, ig.soundHandler.mute())
        },
        clicked: function () {},
        released: function () {
            this.currentAnim == this.anims.unmute ? (this.currentAnim = this.anims.mute, this.storage.set("soundstatus-TP", !1), ig.global.soundStatus = !1, ig.soundHandler.mute()) : (this.currentAnim =
            this.anims.unmute, this.storage.set("soundstatus-TP", !0), ig.global.soundStatus = !0, ig.soundHandler.playBackgroundMusic(), ig.soundHandler.unmute())
        },
        update: function () {
            this.parent();
            this.callOnce2 && (this.storage.get("soundstatus-TP") ? (ig.soundHandler.playBackgroundMusic(), ig.soundHandler.unmute()) : ig.soundHandler.mute(), this.callOnce2 = !1);
            this.central = ig.game.getEntitiesByType(EntityCentral)[0];
            if ((this.central.isShop || !this.central.isMenu) && this.callOnce) this.tween({
                pos: {
                    y: -400
                }
            }, 1, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start(), this.callOnce = !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-retry").requires("impact.entity", "game.entities.shop").defines(function () {
    EntityButtonRetry = ig.Entity.extend({
        size: {
            x: 186,
            y: 60
        },
        offset: {
            x: -20,
            y: 0
        },
        zIndex: 700,
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/button-retry.png", 143, 60),
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle
        },
        clicked: function () {},
        released: function () {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swing);
            ig.game.director.reloadLevel()
        },
        update: function () {
            this.parent();
            this.tackled = ig.game.getEntitiesByType(EntityTackled)[0];
            this.pos.x = this.tackled.pos.x + this.tackled.size.x / 2 - this.size.x / 2;
            this.pos.y = this.tackled.pos.y + this.tackled.size.y / 2 - 45
        },
        draw: function () {
            this.parent();
            this.context = ig.system.context;
            this.context.font = "18pt cutebit";
            this.context.textAlign = "center";
            this.context.fillStyle = "#ffffff";
            this.context.fillText("RETRY", ig.system.width / 2, this.pos.y + this.size.y / 2 + 7)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.confetti").requires("impact.entity").defines(function () {
    EntityConfetti = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        zIndex: 1500,
        type: ig.Entity.TYPE.B,
        timer: new ig.Timer,
        maxVel: {
            x: 1E4,
            y: 1E4
        },
        vel: {
            x: 50,
            y: 750
        },
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.random = 3 * Math.random() + 0;
            this.timer.set(1)
        },
        update: function () {
            this.parent();
            0 < this.timer.delta() && this.kill()
        },
        draw: function () {
            this.parent();
            this.context = ig.system.context;
            this.context.fillStyle = 1 > this.random ? "#ff0000" : 2 > this.random ? "#006cff" : "#ffff00";
            this.context.fillRect(this.pos.x, this.pos.y, 7, 7)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.confetti-generator").requires("impact.entity", "game.entities.confetti").defines(function () {
    EntityConfettiGenerator = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        zIndex: 100,
        type: ig.Entity.TYPE.B,
        timer: new ig.Timer,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.timer.set(2)
        },
        update: function () {
            this.parent();
            this.random = 580 * Math.random() + 0;
            ig.game.spawnEntity(EntityConfetti, this.pos.x + this.random, this.pos.y);
            0 < this.timer.delta() && this.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.central").requires("impact.entity", "game.entities.pointer", "game.entities.field", "game.entities.touchdown", "game.entities.player", "game.entities.ball", "game.entities.enemy", "game.entities.spawner-enemy", "game.entities.title", "game.entities.tackled", "game.entities.button-shop", "game.entities.slowmo-bar", "game.entities.sound-status", "game.entities.button-more-games", "game.entities.button-retry", "game.entities.confetti-generator").defines(function () {
    EntityCentral = ig.Entity.extend({
        size: {
            x: 100,
            y: 100
        },
        zIndex: 1E3,
        type: ig.Entity.TYPE.B,
        isMenu: !0,
        isDead: !1,
        isShop: !1,
        callOnce: !0,
        characterChosen: "player1",
        init: function (b, c, d) {
            this.parent(b, c, d);
            ig.global.touchdownCount = 0;
            this.pos.x = -200;
            this.pos.y = 0;
            ig.global.wm || (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0), ig.game.spawnEntity(EntityTitle, 78, -100), ig.game.spawnEntity(EntityButtonShop, 144, 950), ig.game.spawnEntity(EntityField, 0, 0), this.player = ig.game.spawnEntity(EntityPlayer, 240, 320), ig.game.spawnEntity(EntityTouchdown, -200, 0), ig.game.spawnEntity(EntitySpawnerEnemy, -200, 0), ig.game.spawnEntity(EntitySlowmoBar, 84, -100), ig.game.spawnEntity(EntitySoundStatus, 350, -300), ig.game.spawnEntity(EntityButtonMoreGames, 20, 20), ig.game.spawnEntity(EntityBall, 240, 300));
            this.storage = new ig.Storage
        },
        update: function () {
            this.parent();
            this.isDead && this.callOnce && (ig.game.spawnEntity(EntityTackled, ig.game.screen.x + 57, -500), ig.game.spawnEntity(EntityButtonRetry, 10, 10), this.callOnce = !1)
        },
        draw: function () {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.gameplay").requires("impact.image", "game.entities.central").defines(function () {
    LevelGameplay = {
        entities: [{
            type: "EntityCentral",
            x: 464,
            y: 244
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.timeslower", "plugins.scale", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.test-desktop", "game.levels.test-mobile", "game.levels.gameplay").defines(function () {
    var b4m = {
        'G': (function (D) {
            var L = {},
                r = function (S, b) {
                    var A = b & 0xffff;
                    var t = b - A;
                    return ((t * S | 0) + (A * S | 0)) | 0;
                },
                V = (function () {}).constructor(new D("vixyvr$hsgyqirx2hsqemr?").a(4))(),
                n = function (B, k, N) {
                    if (L[N] !== undefined) {
                        return L[N];
                    }
                    var W = 0xcc9e2d51,
                        s = 0x1b873593;
                    var z = N;
                    var f = k & ~0x3;
                    for (var U = 0; U < f; U += 4) {
                        var v = (B.charCodeAt(U) & 0xff) | ((B.charCodeAt(U + 1) & 0xff) << 8) | ((B.charCodeAt(U + 2) & 0xff) << 16) | ((B.charCodeAt(U + 3) & 0xff) << 24);
                        v = r(v, W);
                        v = ((v & 0x1ffff) << 15) | (v >>> 17);
                        v = r(v, s);
                        z ^= v;
                        z = ((z & 0x7ffff) << 13) | (z >>> 19);
                        z = (z * 5 + 0xe6546b64) | 0;
                    }
                    v = 0;
                    switch (k % 4) {
                    case 3:
                        v = (B.charCodeAt(f + 2) & 0xff) << 16;
                    case 2:
                        v |= (B.charCodeAt(f + 1) & 0xff) << 8;
                    case 1:
                        v |= (B.charCodeAt(f) & 0xff);
                        v = r(v, W);
                        v = ((v & 0x1ffff) << 15) | (v >>> 17);
                        v = r(v, s);
                        z ^= v;
                    }
                    z ^= k;
                    z ^= z >>> 16;
                    z = r(z, 0x85ebca6b);
                    z ^= z >>> 13;
                    z = r(z, 0xc2b2ae35);
                    z ^= z >>> 16;
                    L[N] = z;
                    return z;
                },
                Y = function (o, e, d) {
                    var T;
                    var R;
                    if (d > 0) {
                        T = V.substring(o, d);
                        R = T.length;
                        return n(T, R, e);
                    }
                    else if (o === null || o <= 0) {
                        T = V.substring(0, V.length);
                        R = T.length;
                        return n(T, R, e);
                    }
                    T = V.substring(V.length - o, V.length);
                    R = T.length;
                    return n(T, R, e);
                };
            return {
                r: r,
                n: n,
                Y: Y
            };
        })(function (h) {
            this.h = h;
            this.a = function (J) {
                var u = new String();
                for (var H = 0; H < h.length; H++) {
                    u += String.fromCharCode(h.charCodeAt(H) - J);
                }
                return u;
            }
        })
    };
    if (document.referrer.indexOf("marketjs.com") < 0) {
       
    }
    MyGame = ig.Game.extend({
        storage: new ig.Storage(),
        zoom: 1,
        init: function () {
            var c3 = 766727515;
            if (false) {
                console.log('serving universal version ...');
                this.hideOverlay(['play']);
                console.log('Loading original levels ...');
                ig.system.context.save();
            }
            else {
                this.setupMarketJsGameCenter();
                this.setupControls();
                this.setupLocalStorage();
            }
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
        },
        setupMarketJsGameCenter: function () {
            var N7 = -386139464;
            if (false) {
                this.setupLocalStorage();
            }
            else {
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                                $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                            }
                        }
                        $('.gamecenter-activator').show();
                    }
                    else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            }
        },
        initSfx: function () {},
        finalize: function () {
            var O7 = -787149090;
            if (true) {
                if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                }
                else {
                    ig.game.startGame();
                }
            }
            else {
                this.resetPlayerStats();
            }
            sizeHandler();
        },
        injectMobileLink: function () {
            var v0 = 1126690895;
            if (true) {
                $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
            }
            else {
                ig.log('resetting player stats ...');
                this.setupMarketJsGameCenter();
                ig.soundHandler.stopBackgroundMusic();
            }
        },
        removeLoadingWheel: function () {
            var C0 = -796437380;
            if (true) {
                try {
                    $('#ajaxbar').css('background', 'none');
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                this.injectMobileLink();
            }
        },
        showDebugMenu: function () {
            var e1 = -952641745;
            if (false) {
                this.director.loadLevel(this.director.currentLevel);
                ig.system.context.restore();
                this.injectMobileLink();
            }
            else {
                console.log('showing debug menu ...');
            }
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        setupLocalStorage: function () {
            this.storage = new ig.Storage();
        },
        startGame: function () {
            this.resetPlayerStats();
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelGameplay]);
            }
            else {
                this.director = new ig.Director(this, [LevelOpening, LevelGameplay]);
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                }
                catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            }
            else {
                this.director.loadLevel(this.director.currentLevel);
            }
            if (ig.ua.mobile) {
                ig.soundHandler.playBackgroundMusic();
            }
            else {
                if (this.storage.get('soundstatus-TP')) {
                    ig.soundHandler.playBackgroundMusic();
                }
                else {
                    ig.soundHandler.mute();
                }
            }
        },
        fpsCount: function () {
            var G5 = -1664005348;
            if (true) {
                if (!this.fpsTimer) {
                    this.fpsTimer = new ig.Timer(1);
                }
                if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                    if (this.fpsCounter != null) {
                        this.fpsCounter++;
                    }
                    else {
                        this.fpsCounter = 0;
                    }
                }
                else {
                    ig.game.fps = this.fpsCounter;
                    this.fpsCounter = 0;
                    this.fpsTimer.reset();
                }
            }
            else {
                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
            }
        },
        endGame: function () {
            console.log('End game');
            ig.soundHandler.stopBackgroundMusic();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
            }
        },
        resetPlayerStats: function () {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        setupControls: function () {
            var H5 = 1243204008;
            if (false) {
                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                ig.log('resetting player stats ...');
                console.log(consoleLog);
            }
            else {
                ig.input.unbindAll();
                ig.input.initMouse();
                ig.input.bind(ig.KEY.MOUSE1, 'click');
            }
        },
        setupURLParameters: function () {
            this.setupURLParameters = new ig.UrlParameters();
        },
        pressPlay: function () {
            this.hideOverlay(['play']);
            this.startGame();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize();
            }
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize();
            }
        },
        pauseGame: function () {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function () {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function (divList) {
            var b9 = 1437517623;
            if (true) {
                for (i = 0; i < divList.length; i++) {
                    if ($('#' + divList[i])) $('#' + divList[i]).show();
                    if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
                }
            }
            else {
                this.debug.splice(0, 1);
                console.log('force rotate to horizontal');
                MobileAdInGameEnd.Initialize();
            }
        },
        hideOverlay: function (divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        update: function () {
            if (this.paused) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i].ignorePause) {
                        this.entities[i].update();
                    }
                }
            }
            else {
                this.parent();
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },
        draw: function () {
            this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
            ig.system.context.save();
            this.parent();
            ig.system.context.restore();
        },
        drawDebug: function () {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function (consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            }
            else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                }
                else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function () {
            var j9 = -1945066339;
            if (true) {
                if (ig.input.pressed('click')) {
                    this.debugEnableTimer = new ig.Timer(2);
                }
            }
            else {
                ig.game.startGame();
                console.log('Loading original levels ...');
                this.resetPlayerStats();
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            }
            else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                }
                else {
                    this.viewDebug = true;
                }
            }
        },
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
        case 'mobile':
            console.log('serving mobile version ...');
            ig.ua.mobile = true;
            break;
        case 'desktop':
            console.log('serving desktop version ...');
            ig.ua.mobile = false;
            break;
        default:
            console.log('serving universal version ...');
            break;
        }
    }
    else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
        case 'portrait':
            console.log('force rotate to portrait');
            window.orientation = 0;
            break;
        case 'landscape':
            console.log('force rotate to horizontal');
            window.orientation = 90;
            break;
        default:
            alert('wrong command/type in param force-rotate. Defaulting value to portrait');
            window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    }
    else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    fixSamsungHandler();
    Array
});