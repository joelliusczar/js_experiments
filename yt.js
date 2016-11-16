var _yt_www = {};
(function(g) {
    var window = this;
    var baa, caa, Ca, addThrowExceptionToEventLoopEnd, kaa, bb, cb, db, eb, jb, laa, kb, maa, naa, rb, Db, Tb, tc, uc, saa, Ic, Lc, vaa, Nc, Oc, Qc, Rc, Sc, ad, ed, hd, fd, sd, zaa, Aaa, yaa, $d, be, Baa, ge, ke, ee, ce, Daa, je, he, ie, ne, Caa, Eaa, ve, Ce, Be, Faa, Ge, Oe, Ne, Haa, Iaa, Pe, Qe, Se, Kaa, rf, Maa, Naa, sf, zf, Oaa, Df, Jf, If, Ef, Nf, Uaa, Sf, Of, Qf, Saa, Vf, Uf, Xf, Hf, Bf, Af, Cf, Yf, Lf, Wf, Mf, $f, Waa, Raa, cba, bba, aba, cg, $aa, Yaa, Zaa, dba, eba, ig, fba, gba, jg, og, jba, pg, sg, qg, tg, oba, rba, pba, vg, wg, vba, xg, Bg, wba, Cg, xba, yba, Gg, Eg, Lg, Mg, Aba, zba, Qg, Tg, Vg, ih, jh, kh, nh, ph, qh, rh, uh, th, wh, sh, xh, lh, oh, Jba, yh, zh,
        Kba, Lba, Fh, Hh, Jh, Nh, Mba, Oh, Qh, Nba, Oba, Rh, Sh, Xh, ai, bi, ci, fi, ii, ji, Uba, Vba, Yh, $h, Wh, Tba, Zh, ni, Xba, mi, Yba, pi, ri, Zba, qi, bca, ui, aca, $ba, si, ti, cca, eca, dca, fca, gca, Ai, Bi, na, aaa;
    g.ba = function(a) {
        return function() {
            return g.aa[a].apply(this, arguments)
        }
    };
    g.isNotDefined = function(a) {
        return void 0 !== a
    };
    g.p = function(a, b, c) {
        a = a.split(".");
        c = c || g.bigThis;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && g.isNotDefined(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
    };
    g.q = function(strThenArray, b) {
        strThenArray = strThenArray.split(".");
        b = b || g.bigThis;
        for (var frontElement; frontElement = a.shift();)
            if (null != b[frontElement]) b = b[frontElement];
            else return null;
        return b
    };
    g.emptyFunction = function() {};
    g.ea = function(a) {
        a.getInstance = function() {
            return a.Gc ? a.Gc : a.Gc = new a
        }
    };
    g.spGetType = function(a) {
        var typeOfArg = typeof a;
        if ("object" == typeOfArg)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return typeOfArg;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == typeOfArg && "undefined" == typeof a.call) return "object";
        return typeOfArg
    };
    g.isArray = function(a) {
        return "array" == g.spGetType(a)
    };
    g.isArrayOrHasLength = function(a) {
        var b = g.spGetType(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    g.isStr = function(a) {
        return "string" == typeof a
    };
    g.isANumber = function(a) {
        return "number" == typeof a
    };
    g.isAFunction = function(a) {
        return "function" == g.spGetType(a)
    };
    g.isObjectOrFunction = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    g.oa = function(a) {
        return a[na] || (a[na] = ++aaa)
    };
    baa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    caa = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    g.r = function(a, b, c) {
        g.r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? baa : caa;
        return g.r.apply(null, arguments)
    };
    g.u = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    };
    g.v = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.M = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.K_ = function(a, c, h) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    g.pa = function(a) {
        g.pa[" "](a);
        return a
    };
    g.qa = function(a, b) {
        try {
            return g.pa(a[b]), true
        } catch (c) {}
        return false
    };
    g.sa = function(a, b, c) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
    };
    g.ta = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, g.ta);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    g.ua = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    g.isKindOfWhiteSpace = function(str) {
        return /^[\s\xa0]*$/.test(str)
    };
    g.wa = function(a) {
        return (0, window.encodeURIComponent)(String(a))
    };
    g.xa = function(a) {
        if (!daa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(eaa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(faa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(gaa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(haa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(iaa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(jaa, "&#0;"));
        return a
    };
    g.isSubStrOf = function(superStr, possibleSubStr) {
        return -1 != superStr.indexOf(possibleSubStr)
    };
    g.replaceIfNullWithEmptyStr = function(a) {
        return null == a ? "" : String(a)
    };
    g.Da = function(a, b) {
        var c = 0;
        a = (0, g.Ba)(String(a)).split(".");
        b = (0, g.Ba)(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var h = a[e] || "",
                k = b[e] || "";
            do {
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                if (0 == h[0].length && 0 == k[0].length) break;
                c = Ca(0 == h[1].length ? 0 : (0, window.parseInt)(h[1], 10), 0 == k[1].length ? 0 : (0, window.parseInt)(k[1], 10)) || Ca(0 == h[2].length, 0 == k[2].length) || Ca(h[2], k[2]);
                h = h[3];
                k = k[3]
            } while (0 == c)
        }
        return c
    };
    Ca = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.hashStr = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    };
    g.Ha = function(a, b, c) {
        b = g.Fa(a, b, c);
        return 0 > b ? null : g.isStr(a) ? a.charAt(b) : a[b]
    };
    g.Fa = function(a, b, c) {
        for (var d = a.length, e = g.isStr(a) ? a.split("") : a, h = 0; h < d; h++)
            if (h in e && b.call(c, e[h], h, a)) return h;
        return -1
    };
    g.Ja = function(a, b) {
        return 0 <= (0, g.Ia)(a, b)
    };
    g.La = function(a, b) {
        b = (0, g.Ia)(a, b);
        var c;
        (c = 0 <= b) && g.Ka(a, b);
        return c
    };
    g.Ka = function(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    };
    g.Ma = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    g.getCallbackThatReturnsGivenArg = function(a) {
        return function() {
            return a
        }
    };
    g.Oa = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    g.Pa = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    };
    g.Qa = function(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return d
    };
    g.Ra = function(a) {
        for (var b in a) return false;
        return true
    };
    g.Sa = function(a, b) {
        b in a && delete a[b]
    };
    g.Ta = function(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    };
    g.copyObjectBasic = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    g.Wa = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var h = 0; h < Va.length; h++) c = Va[h], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    g.Ya = function(a) {
        return g.isSubStrOf(g.Xa, a)
    };
    g.Za = function() {
        return g.Ya("Trident") || g.Ya("MSIE")
    };
    g.$a = function() {
        return (g.Ya("Chrome") || g.Ya("CriOS")) && !g.Ya("Edge")
    };
    addThrowExceptionToEventLoopEnd = function(a) {
        g.bigThis.setTimeout(function() {
            throw a;
        }, 0)
    };
    kaa = function() {
        var a = g.bigThis.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !g.Ya("Presto") && (a = function() {
            var a = window.document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var b = a.contentWindow,
                a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = (0, g.r)(function(a) {
                    if (("*" ==
                            d || a.origin == d) && a.data == c) this.port1.onmessage()
                }, this);
            b.addEventListener("message", a, false);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !g.Za()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (g.isNotDefined(c.next)) {
                    c = c.next;
                    var a = c.Zp;
                    c.Zp = null;
                    a()
                }
            };
            return function(a) {
                d.next = {
                    Zp: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
            var b = window.document.createElement("SCRIPT");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            window.document.documentElement.appendChild(b)
        } : function(a) {
            g.bigThis.setTimeout(a, 0)
        }
    };
    bb = function(a, b, c) {
        this.H = c;
        this.D = a;
        this.G = b;
        this.F = 0;
        this.C = null
    };
    cb = function(a, b) {
        a.G(b);
        a.F < a.H && (a.F++, b.next = a.C, a.C = b)
    };
    db = function() {
        this.F = this.C = null
    };
    eb = function() {
        this.next = this.scope = this.Bc = null
    };
    jb = function(a, b) {
        fb || laa();
        gb || (fb(), gb = true);
        var c = hb,
            d = ib.get();
        d.set(a, b);
        c.F ? c.F.next = d : c.C = d;
        c.F = d
    };
    laa = function() {
        var a = g.bigThis.Promise;
        if (-1 != String(a).indexOf("[native code]")) {
            var b = a.resolve(void 0);
            fb = function() {
                b.then(kb)
            }
        } else fb = function() {
            var a = kb;
            !g.isAFunction(g.bigThis.setImmediate) || g.bigThis.Window && g.bigThis.Window.prototype && !g.Ya("Edge") && g.bigThis.Window.prototype.setImmediate == g.bigThis.setImmediate ? (lb || (lb = kaa()), lb(a)) : g.bigThis.setImmediate(a)
        }
    };
    kb = function() {
        for (var a; a = hb.remove();) {
            try {
                a.Bc.call(a.scope)
            } catch (b) {
                addThrowExceptionToEventLoopEnd(b)
            }
            cb(ib, a)
        }
        gb = false
    };
    g.mb = function() {
        this.ud = this.ud;
        this.Kb = this.Kb
    };
    g.pb = function(a, b) {
        g.nb(a, g.u(g.ob, b))
    };
    g.nb = function(a, b) {
        a.ud ? g.isNotDefined(void 0) ? b.call(void 0) : b() : (a.Kb || (a.Kb = []), a.Kb.push(g.isNotDefined(void 0) ? (0, g.r)(b, void 0) : b))
    };
    g.ob = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    g.qb = function(a) {
        g.mb.call(this);
        this.G = 1;
        this.F = [];
        this.D = 0;
        this.C = [];
        this.Cd = {};
        this.H = !!a
    };
    maa = function(a, b, c) {
        jb(function() {
            a.apply(b, c)
        })
    };
    g.ub = function(a) {
        rb(g.settingsObject1, arguments)
    };
    g.w = function(a, b) {
        return a in g.settingsObject1 ? g.settingsObject1[a] : b
    };
    g.wb = function(a, b) {
        g.isAFunction(a) && (a = g.vb(a));
        return window.setTimeout(a, b)
    };
    g.xb = function(a, b) {
        g.isAFunction(a) && (a = g.vb(a));
        return window.setInterval(a, b)
    };
    g.yb = function(a) {
        window.clearTimeout(a)
    };
    g.zb = function(a) {
        window.clearInterval(a)
    };
    g.vb = function(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                g.Ab(b)
            }
        } : a
    };
    g.Ab = function(a, b, c, d, e) {
        var h = g.q("yt.logging.errors.log");
        h ? h(a, b, c, d, e) : (h = g.w("ERRORS", []), h.push([a, b, c, d, e]), g.ub("ERRORS", h))
    };
    naa = function(a, b, c, d, e) {
        var h = false;
        if (g.settingsObject1.mp && g.settingsObject1.mp.log_window_onerror_fraction && Math.random() < g.settingsObject1.mp.log_window_onerror_fraction) h = true;
        else
            for (var k = window.document.getElementsByTagName("script"), l = 0, n = k.length; l < n; l++)
                if (0 < k[l].src.indexOf("/debug-")) {
                    h = true;
                    break
                }
        h && (e || (e = Error(), e.message = a, e.fileName = b, e.lineNumber = c, (0, window.isNaN)(d) || (e.columnNumber = d)), g.Ab(e))
    };
    g.Cb = function(a) {
        return a in g.Bb
    };
    rb = function(a, b) {
        if (1 < b.length) {
            var c = b[0];
            a[c] = b[1]
        } else
            for (c in b = b[0], b) a[c] = b[c]
    };
    g.Ib = function(a, b, c) {
        var d = Db();
        if (d) {
            var e = d.subscribe(a, function() {
                if (!Eb || Eb != e) {
                    var d = arguments,
                        k;
                    k = function() {
                        Fb[e] && b.apply(c || window, d)
                    };
                    try {
                        Gb[a] ? k() : g.wb(k, 0)
                    } catch (l) {
                        g.Ab(l)
                    }
                }
            }, c);
            Fb[e] = true;
            Hb[a] || (Hb[a] = []);
            Hb[a].push(e);
            return e
        }
        return 0
    };
    g.Jb = function(a) {
        var b = Db();
        b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [(0, window.parseInt)(a, 10)]), (0, g.y)(a, function(a) {
            b.unsubscribeByKey(a);
            delete Fb[a]
        }))
    };
    g.z = function(a, b) {
        var c = Db();
        return c ? c.publish.apply(c, arguments) : false
    };
    g.Kb = function(a, b) {
        Gb[a] = true;
        var c = Db(),
            c = c ? c.publish.apply(c, arguments) : false;
        Gb[a] = false;
        return c
    };
    Db = function() {
        return g.q("yt.pubsub.instance_")
    };
    g.Lb = function() {
        return !!g.q("yt.scheduler.instance")
    };
    g.Mb = function(a, b) {
        (0, window.isNaN)(b) && (b = void 0);
        var c = g.q("yt.scheduler.instance.addJob");
        return c ? c(a, 1, b) : void 0 === b ? (a(), window.NaN) : g.wb(a, b || 0)
    };
    g.Nb = function(a, b) {
        return g.Mb(a, b)
    };
    g.Ob = function(a) {
        if (!(0, window.isNaN)(a)) {
            var b = g.q("yt.scheduler.instance.cancelJob");
            b ? b(a) : g.yb(a)
        }
    };
    g.Pb = function(a) {
        for (var b = 0, c = a.length; b < c; b++) g.Ob(a[b])
    };
    g.Qb = function(a, b, c, d, e) {
        this.name = a;
        this.deps = b || [];
        this.page = c || "";
        this.K = d ? g.vb(d) : null;
        this.H = e ? g.vb(e) : null;
        this.G = [];
        this.C = this.F = 0
    };
    g.Rb = function(a) {
        g.Ob(a.F);
        a.F = g.Nb((0, g.r)(a.init, a))
    };
    g.Ub = function(a) {
        a.name in Sb && Tb(a.name);
        Sb[a.name] = {
            reqs: [],
            disable: (0, g.r)(a.disable, a)
        };
        (0, g.y)(a.deps, function(b) {
            if (!(b in Sb)) throw Error("Module " + b + " required by " + a.name);
            Sb[b].reqs.push(a.name)
        });
        a.enable()
    };
    Tb = function(a) {
        if (a in Sb) {
            var b = Sb[a];
            (0, g.y)(b.reqs, function(a) {
                Tb(a)
            });
            try {
                b.disable()
            } catch (c) {}
            delete Sb[a]
        }
    };
    g.Wb = function() {
        this.C = "";
        this.F = g.Vb
    };
    g.Xb = function(a) {
        var b = new g.Wb;
        b.C = a;
        return b
    };
    g.Zb = function() {
        this.C = "";
        this.F = g.Yb
    };
    g.$b = function(a) {
        var b = new g.Zb;
        b.url = a;
        return b
    };
    g.addressInfo = function() {
        this.url = "";
        this.dict = dict
    };
    g.getAddressInfoUrl = function(a) {
        if (a instanceof g.addressInfo && a.constructor === g.addressInfo && a.dict === dict) return a.url;
        g.spGetType(a);
        return "type_error:SafeUrl"
    };
    g.ec = function(a) {
        if (a instanceof g.addressInfo) return a;
        a = a.vg ? a.kf() : String(a);
        oaa.test(a) || (a = "about:invalid#zClosurez");
        return g.constructAddressInfoWithUrl(a)
    };
    g.constructAddressInfoWithUrl = function(a) {
        var b = new g.addressInfo;
        b.url = a;
        return b
    };
    g.gc = function() {
        this.C = "";
        this.D = g.fc;
        this.F = null
    };
    g.hc = function(a, b) {
        var c = new g.gc;
        c.C = a;
        c.F = b;
        return c
    };
    g.ic = function(a, b) {
        b = b instanceof g.addressInfo ? b : g.ec(b);
        a.href = g.getAddressInfoUrl(b)
    };
    g.jc = function(a, b) {
        b = b instanceof g.addressInfo ? b : g.ec(b);
        a.href = g.getAddressInfoUrl(b)
    };
    g.A = function(a, b) {
        return a ? a.dataset ? a.dataset[g.kc(b)] : a.getAttribute("data-" + b) : null
    };
    g.kc = function(a) {
        return lc[a] || (lc[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }))
    };
    g.nc = function(a, b) {
        var c = g.mc(a);
        window.spf.script.load(a, c, b)
    };
    g.mc = function(a) {
        var b = "";
        if (a) {
            var c = a.indexOf("jsbin/"),
                d = a.lastIndexOf(".js"),
                e = c + 6; - 1 < c && -1 < d && d > e && (b = a.substring(e, d), b = b.replace(paa, ""), b = b.replace(qaa, ""), b = b.replace("debug-", ""), b = b.replace("tracing-", ""))
        }
        return b
    };
    g.oc = function(a) {
        return /^\s*$/.test(a) ? false : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    };
    g.qc = function(a) {
        a = String(a);
        if (g.oc(a)) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };
    g.sc = function(a, b) {
        return (new g.rc(b)).fc(a)
    };
    g.rc = function(a) {
        this.C = a
    };
    tc = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (g.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", h = 0; h < b; h++) c.push(e), e = d[h], tc(a, a.C ? a.C.call(d, String(h), e) : e, c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    h = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(h), uc(d, c), c.push(":"), tc(a, a.C ? a.C.call(b, d, e) : e, c), h = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    uc(b,
                        c);
                    break;
                case "number":
                    c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    };
    uc = function(a, b) {
        b.push('"', a.replace(raa, function(a) {
            var b = vc[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), vc[a] = b);
            return b
        }), '"')
    };
    g.size = function(a, b) {
        this.width = a;
        this.height = b
    };
    g.xc = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = true
    };
    g.yc = function(a) {
        if (!a) return false;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return false
        }
    };
    saa = function() {};
    g.zc = function(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.shiftKey = this.ctrlKey = this.altKey = false;
        this.rotation = this.clientY = this.clientX = 0;
        this.scale = 1;
        this.changedTouches = this.touches = null;
        if (a = a || window.event) {
            this.event = a;
            for (var b in a) b in taa || (this[b] = a[b]);
            this.scale = a.scale;
            this.rotation = a.rotation;
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            if (b = a.relatedTarget) try {
                b =
                    b.nodeName ? b : null
            } catch (c) {
                b = null
            } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            this.Pn = a.pageX;
            this.Qn = a.pageY
        }
    };
    g.Ac = function(a, b, c) {
        this.C = a;
        this.D = b;
        this.F = c
    };
    g.Bc = function(a) {
        var b = {};
        void 0 !== a.C ? b.trackingParams = a.C : (b.veType = a.D, null != a.F && (b.veCounter = a.F));
        return b
    };
    g.Cc = function(a, b) {
        this.version = a;
        this.args = b
    };
    g.Dc = function(a, b) {
        this.topic = a;
        this.Vf = b
    };
    g.Fc = function(a) {
        return !(!a || !a[Ec])
    };
    g.Gc = function(a) {
        this.C = a
    };
    Ic = function() {
        return String(g.Hc("service_worker_scope") || "")
    };
    g.Hc = function(a) {
        return g.w("EXPERIMENT_FLAGS", {})[a]
    };
    g.Jc = function() {
        return {
            apiaryHost: g.w("APIARY_HOST", void 0),
            Lp: g.w("APIARY_HOST_FIRSTPARTY", void 0),
            gapiHintOverride: g.w("GAPI_HINT_OVERRIDE"),
            gapiHintParams: g.w("GAPI_HINT_PARAMS", void 0),
            innertubeApiKey: g.w("INNERTUBE_API_KEY", void 0),
            innertubeApiVersion: g.w("INNERTUBE_API_VERSION", void 0),
            QE: g.w("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            innertubeContextClientVersion: g.w("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
            SE: g.w("INNERTUBE_CONTEXT_HL", void 0),
            RE: g.w("INNERTUBE_CONTEXT_GL", void 0),
            SP: g.w("XHR_APIARY_HOST",
                void 0)
        }
    };
    g.Kc = function(a) {
        a = {
            client: {
                hl: a.SE,
                gl: a.RE,
                clientName: a.QE,
                clientVersion: a.innertubeContextClientVersion
            }
        };
        g.w("DELEGATED_SESSION_ID") && (a.user = {
            onBehalfOfUser: g.w("DELEGATED_SESSION_ID")
        });
        return a
    };
    Lc = function(a) {
        g.Cc.call(this, 1, arguments)
    };
    g.Mc = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Cg = false;
        this.Sv = true
    };
    vaa = function(a, b, c, d, e) {
        this.listener = a;
        this.C = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Ad = e;
        this.key = ++uaa;
        this.uh = this.ij = false
    };
    Nc = function(a) {
        a.uh = true;
        a.listener = null;
        a.C = null;
        a.src = null;
        a.Ad = null
    };
    Oc = function() {
        return g.Ya("iPhone") && !g.Ya("iPod") && !g.Ya("iPad")
    };
    g.Pc = function() {
        return Oc() || g.Ya("iPad") || g.Ya("iPod")
    };
    Qc = function(a) {
        this.C = a
    };
    Rc = function(a) {
        this.data = a
    };
    Sc = function(a) {
        return !g.isNotDefined(a) || a instanceof Rc ? a : new Rc(a)
    };
    g.Tc = function(a, b, c, d, e, h, k) {
        var l = "";
        a && (l += a + ":");
        c && (l += "//", b && (l += b + "@"), l += c, d && (l += ":" + d));
        e && (l += e);
        h && (l += "?" + h);
        k && (l += "#" + k);
        return l
    };
    g.Uc = function(a) {
        return a ? (0, window.decodeURI)(a) : a
    };
    g.Wc = function(a, b) {
        return b.match(g.Vc)[a] || null
    };
    g.Xc = function(a) {
        return g.Uc(g.Wc(3, a))
    };
    g.Yc = function(a) {
        a = a.match(g.Vc);
        return g.Tc(null, null, null, null, a[5], a[6], a[7])
    };
    g.Zc = function(a) {
        if (a[1]) {
            var b = a[0],
                c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    };
    g.$c = function(a, b, c) {
        if (g.isArray(b))
            for (var d = 0; d < b.length; d++) g.$c(a, String(b[d]), c);
        else null != b && c.push("&", a, "" === b ? "" : "=", g.wa(b))
    };
    ad = function(a, b) {
        for (var c in b) g.$c(c, b[c], a);
        return a
    };
    g.bd = function(a) {
        a = ad([], a);
        a[0] = "";
        return a.join("")
    };
    g.cd = function(a, b) {
        return g.Zc(ad([a], b))
    };
    g.dd = function(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return g.isStr(a) && a.match(/\S+/g) || []
    };
    g.B = function(a, b) {
        return a.classList ? a.classList.contains(b) : g.Ja(g.dd(a), b)
    };
    ed = function(a) {
        this.src = a;
        this.C = {};
        this.F = 0
    };
    g.gd = function(a, b, c, d, e, h) {
        var k = b.toString();
        b = a.C[k];
        b || (b = a.C[k] = [], a.F++);
        var l = fd(b, c, e, h); - 1 < l ? (a = b[l], d || (a.ij = false)) : (a = new vaa(c, a.src, k, !!e, h), a.ij = d, b.push(a));
        return a
    };
    hd = function(a, b) {
        var c = b.type;
        if (!(c in a.C)) return false;
        var d = g.La(a.C[c], b);
        d && (Nc(b), 0 == a.C[c].length && (delete a.C[c], a.F--));
        return d
    };
    g.id = function(a, b, c, d, e) {
        a = a.C[b.toString()];
        b = -1;
        a && (b = fd(a, c, d, e));
        return -1 < b ? a[b] : null
    };
    fd = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var h = a[e];
            if (!h.uh && h.listener == b && h.capture == !!c && h.Ad == d) return e
        }
        return -1
    };
    g.jd = function(a) {
        this.C = a
    };
    g.kd = function(a) {
        var b = a.creation;
        a = a.expiration;
        return !!a && a < (0, g.C)() || !!b && b > (0, g.C)()
    };
    g.ld = function() {};
    g.nd = function(a) {
        if (a instanceof g.ld) return a;
        if ("function" == typeof a.yc) return a.yc(false);
        if (g.isArrayOrHasLength(a)) {
            var b = 0,
                c = new g.ld;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw g.md;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    };
    g.od = function(a, b, c) {
        if (g.isArrayOrHasLength(a)) try {
            (0, g.y)(a, b, c)
        } catch (d) {
            if (d !== g.md) throw d;
        } else {
            a = g.nd(a);
            try {
                for (;;) b.call(c, a.next(), void 0, a)
            } catch (d) {
                if (d !== g.md) throw d;
            }
        }
    };
    g.pd = function(a) {
        if (g.isArrayOrHasLength(a)) return g.Ma(a);
        a = g.nd(a);
        var b = [];
        g.od(a, function(a) {
            b.push(a)
        });
        return b
    };
    g.coord = function(a, b) {
        this.x = g.isNotDefined(a) ? a : 0;
        this.y = g.isNotDefined(b) ? b : 0
    };
    g.rd = function(a, b) {
        return a == b ? true : a && b ? a.x == b.x && a.y == b.y : false
    };
    sd = function() {
        var a = g.bigThis.document;
        return a ? a.documentMode : void 0
    };
    g.ud = function(a) {
        return g.sa(waa, a, function() {
            return 0 <= g.Da(g.td, a)
        })
    };
    g.wd = function(a) {
        return Number(g.vd) >= a
    };
    g.xd = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    g.yd = function(a, b) {
        return a && b ? b instanceof g.xd ? b.left >= a.left && b.right <= a.right && b.top >= a.top && b.bottom <= a.bottom : b.x >= a.left && b.x <= a.right && b.y >= a.top && b.y <= a.bottom : false
    };
    g.zd = function(a) {
        this.C = a
    };
    g.Ad = function() {};
    g.D = function(a) {
        return g.isStr(a) ? window.document.getElementById(a) : a
    };
    g.Bd = function(a) {
        return g.isStr(a) ? window.document.getElementById(a) : a
    };
    g.Dd = function(a, b) {
        g.Oa(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Cd.hasOwnProperty(d) ? a.setAttribute(Cd[d], b) : g.ua(d, "aria-") || g.ua(d, "data-") ? a.setAttribute(d, b) : a[d] = b
        })
    };
    g.Fd = function(a) {
        return g.Ed(a || window)
    };
    g.Ed = function(a) {
        a = a.document;
        a = g.Gd(a) ? a.documentElement : a.body;
        return new g.size(a.clientWidth, a.clientHeight)
    };
    g.Id = function(a) {
        var b = g.Hd(a);
        a = a.parentWindow || a.defaultView;
        return g.F && g.ud("10") && a.pageYOffset != b.scrollTop ? new g.coord(b.scrollLeft, b.scrollTop) : new g.coord(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    g.Hd = function(a) {
        return a.scrollingElement ? a.scrollingElement : !g.Jd && g.Gd(a) ? a.documentElement : a.body || a.documentElement
    };
    g.Ld = function(a, b, c) {
        return g.Kd(window.document, arguments)
    };
    g.Kd = function(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!xaa && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', g.xa(d.name), '"');
            if (d.type) {
                c.push(' type="', g.xa(d.type), '"');
                var e = {};
                g.Wa(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (g.isStr(d) ? c.className = d : g.isArray(d) ? c.className = d.join(" ") : g.Dd(c, d));
        2 < b.length && g.Md(a, c, b, 2);
        return c
    };
    g.Md = function(a, b, c, d) {
        function e(c) {
            c && b.appendChild(g.isStr(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var h = c[d];
            !g.isArrayOrHasLength(h) || g.isObjectOrFunction(h) && 0 < h.nodeType ? e(h) : (0, g.y)(yaa(h) ? g.Ma(h) : h, e)
        }
    };
    g.Nd = function(a) {
        return window.document.createElement(String(a))
    };
    g.Gd = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    g.Od = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    g.Pd = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    };
    g.Rd = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    zaa = function(a) {
        if (!a) return null;
        if (a.firstChild) return a.firstChild;
        for (; a && !a.nextSibling;) a = a.parentNode;
        return a ? a.nextSibling : null
    };
    Aaa = function(a) {
        if (!a) return null;
        if (!a.previousSibling) return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
        return a
    };
    g.Sd = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    yaa = function(a) {
        if (a && "number" == typeof a.length) {
            if (g.isObjectOrFunction(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (g.isAFunction(a)) return "function" == typeof a.item
        }
        return false
    };
    g.Td = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    g.Ud = function(a, b) {
        g.Mc.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
        this.state = null;
        this.Tn = false;
        this.zb = null;
        a && this.init(a, b)
    };
    g.Vd = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    g.Wd = function(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            b = Math.min(a.top + a.height, b.top + b.height);
            if (e <= b) return a.left = c, a.top = e, a.width = d - c, a.height = b - e, true
        }
        return false
    };
    g.Xd = function(a) {
        return new g.size(a.width, a.height)
    };
    g.Zd = function(a, b) {
        this.C = 0;
        this.N = void 0;
        this.G = this.F = this.D = null;
        this.H = this.K = false;
        if (a != g.emptyFunction) try {
            var c = this;
            a.call(b, function(a) {
                g.Yd(c, 2, a)
            }, function(a) {
                g.Yd(c, 3, a)
            })
        } catch (d) {
            g.Yd(this, 3, d)
        }
    };
    $d = function() {
        this.next = this.context = this.F = this.D = this.C = null;
        this.G = false
    };
    be = function(a, b, c) {
        var d = ae.get();
        d.D = a;
        d.F = b;
        d.context = c;
        return d
    };
    Baa = function(a, b, c) {
        ce(a, b, c, null) || jb(g.u(b, a))
    };
    g.de = function(a) {
        return new g.Zd(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var h = function(a, c) {
                        d--;
                        e[a] = c;
                        0 == d && b(e)
                    }, k = function(a) {
                        c(a)
                    }, l = 0, n; l < a.length; l++) n = a[l], Baa(n, g.u(h, l), k);
            else b(e)
        })
    };
    g.fe = function(a, b) {
        ee(a, null, b, void 0)
    };
    ge = function(a, b) {
        if (0 == a.C)
            if (a.D) {
                var c = a.D;
                if (c.F) {
                    for (var d = 0, e = null, h = null, k = c.F; k && (k.G || (d++, k.C == a && (e = k), !(e && 1 < d))); k = k.next) e || (h = k);
                    e && (0 == c.C && 1 == d ? ge(c, b) : (h ? (d = h, d.next == c.G && (c.G = d), d.next = d.next.next) : he(c), ie(c, e, 3, b)))
                }
                a.D = null
            } else g.Yd(a, 3, b)
    };
    ke = function(a, b) {
        a.F || 2 != a.C && 3 != a.C || je(a);
        a.G ? a.G.next = b : a.F = b;
        a.G = b
    };
    ee = function(a, b, c, d) {
        var e = be(null, null, null);
        e.C = new g.Zd(function(a, k) {
            e.D = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (t) {
                    k(t)
                }
            } : a;
            e.F = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !g.isNotDefined(e) && b instanceof g.le ? k(b) : a(e)
                } catch (t) {
                    k(t)
                }
            } : k
        });
        e.C.D = a;
        ke(a, e);
        return e.C
    };
    g.Yd = function(a, b, c) {
        0 == a.C && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.C = 1, ce(c, a.W, a.ia, a) || (a.N = c, a.C = b, a.D = null, je(a), 3 != b || c instanceof g.le || Caa(a, c)))
    };
    ce = function(a, b, c, d) {
        if (a instanceof g.Zd) return ke(a, be(b || g.emptyFunction, c || null, d)), true;
        if (g.yc(a)) return a.then(b, c, d), true;
        if (g.isObjectOrFunction(a)) try {
            var e = a.then;
            if (g.isAFunction(e)) return Daa(a, e, b, c, d), true
        } catch (h) {
            return c.call(d, h), true
        }
        return false
    };
    Daa = function(a, b, c, d, e) {
        function h(a) {
            l || (l = true, d.call(e, a))
        }

        function k(a) {
            l || (l = true, c.call(e, a))
        }
        var l = false;
        try {
            b.call(a, k, h)
        } catch (n) {
            h(n)
        }
    };
    je = function(a) {
        a.K || (a.K = true, jb(a.J, a))
    };
    he = function(a) {
        var b = null;
        a.F && (b = a.F, a.F = b.next, b.next = null);
        a.F || (a.G = null);
        return b
    };
    ie = function(a, b, c, d) {
        if (3 == c && b.F && !b.G)
            for (; a && a.H; a = a.D) a.H = false;
        if (b.C) b.C.D = null, ne(b, c, d);
        else try {
            b.G ? b.D.call(b.context) : ne(b, c, d)
        } catch (e) {
            oe.call(null, e)
        }
        cb(ae, b)
    };
    ne = function(a, b, c) {
        2 == b ? a.D.call(a.context, c) : a.F && a.F.call(a.context, c)
    };
    Caa = function(a, b) {
        a.H = true;
        jb(function() {
            a.H && oe.call(null, b)
        })
    };
    g.le = function(a) {
        g.ta.call(this, a)
    };
    g.pe = function(a) {
        this.C = a
    };
    g.qe = function(a, b, c, d, e) {
        if (g.isArray(b)) {
            for (var h = 0; h < b.length; h++) g.qe(a, b[h], c, d, e);
            return null
        }
        c = g.re(c);
        return g.Fc(a) ? a.R(b, c, d, e) : g.se(a, b, c, false, d, e)
    };
    g.se = function(a, b, c, d, e, h) {
        if (!b) throw Error("Invalid event type");
        var k = !!e,
            l = g.te(a);
        l || (a[ue] = l = new ed(a));
        c = g.gd(l, b, c, d, e, h);
        if (c.C) return c;
        d = Eaa();
        c.C = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) a.addEventListener(b.toString(), d, k);
        else if (a.attachEvent) a.attachEvent(ve(b.toString()), d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        we++;
        return c
    };
    Eaa = function() {
        var a = Faa,
            b = xe ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    };
    g.ye = function(a, b, c, d, e) {
        if (g.isArray(b))
            for (var h = 0; h < b.length; h++) g.ye(a, b[h], c, d, e);
        else c = g.re(c), g.Fc(a) ? a.$a(b, c, d, e) : a && (a = g.te(a)) && (b = g.id(a, b, c, !!d, e)) && g.ze(b)
    };
    g.ze = function(a) {
        if (g.isANumber(a) || !a || a.uh) return false;
        var b = a.src;
        if (g.Fc(b)) return hd(b.ia, a);
        var c = a.type,
            d = a.C;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(ve(c), d);
        we--;
        (c = g.te(b)) ? (hd(c, a), 0 == c.F && (c.src = null, b[ue] = null)) : Nc(a);
        return true
    };
    ve = function(a) {
        return a in Ae ? Ae[a] : Ae[a] = "on" + a
    };
    Ce = function(a, b, c, d) {
        var e = true;
        if (a = g.te(a))
            if (b = a.C[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var h = b[a];
                    h && h.capture == c && !h.uh && (h = Be(h, d), e = e && false !== h)
                }
            return e
    };
    Be = function(a, b) {
        var c = a.listener,
            d = a.Ad || a.src;
        a.ij && g.ze(a);
        return c.call(d, b)
    };
    Faa = function(a, b) {
        if (a.uh) return true;
        if (!xe) {
            var c = b || g.q("window.event");
            b = new g.Ud(c, this);
            var d = true;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = false;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (k) {
                        e = true
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = true
                }
                c = [];
                for (e = b.currentTarget; e; e = e.parentNode) c.push(e);a = a.type;
                for (e = c.length - 1; !b.Cg && 0 <= e; e--) {
                    b.currentTarget = c[e];
                    var h = Ce(c[e], a, true, b),
                        d = d && h
                }
                for (e = 0; !b.Cg && e < c.length; e++) b.currentTarget = c[e],
                h = Ce(c[e], a, false, b),
                d = d && h
            }
            return d
        }
        return Be(a, new g.Ud(b,
            this))
    };
    g.te = function(a) {
        a = a[ue];
        return a instanceof ed ? a : null
    };
    g.re = function(a) {
        if (g.isAFunction(a)) return a;
        a[De] || (a[De] = function(b) {
            return a.handleEvent(b)
        });
        return a[De]
    };
    g.Fe = function() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.C = a
    };
    Ge = function() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {}
        this.C = a
    };
    g.Ie = function(a) {
        var b = a.__yt_uid_key;
        b || (b = He(), a.__yt_uid_key = b);
        return b
    };
    g.Je = function(a) {
        var b = a.cloneNode(false);
        "TR" == b.tagName || "SELECT" == b.tagName ? (0, g.y)(a.childNodes, function(a) {
            b.appendChild(g.Je(a))
        }) : b.innerHTML = a.innerHTML;
        return b
    };
    g.Ke = function() {
        var a = window.document;
        if ("visibilityState" in a) return a.visibilityState;
        var b = Gaa + "VisibilityState";
        if (b in a) return a[b]
    };
    g.Me = function(a, b) {
        var c = g.Le();
        return c ? c.publish.call(c, a.toString(), a, b) : false
    };
    g.Le = function() {
        return g.q("yt.pubsub2.instance_")
    };
    Oe = function(a) {
        this.C = a || window;
        this.W = this.D = 0;
        if (this.C.performance && this.C.performance.timing && this.C.performance.getEntriesByType) {
            a = g.Fd(this.C);
            this.J = new g.Vd(0, 0, a.width, a.height);
            a = [];
            for (var b = this.C.document.getElementsByTagName("*"), c = 0, d = b.length; c < d; c++) {
                var e = b[c];
                if ("IMG" == e.tagName || "IFRAME" == e.tagName) {
                    var h = Ne(this, e, e.src);
                    if (h) {
                        if ("IFRAME" == e.tagName) {
                            var k;
                            try {
                                k = (new Oe(e.contentWindow)).D
                            } catch (l) {
                                k = 0
                            }
                            0 < k && (h.timing = k)
                        }
                        a.push(h)
                    }
                }(h = this.C.getComputedStyle(e)["background-image"]) &&
                (h = Oe.C.exec(h)) && 1 < h.length && (h = Ne(this, e, h[1])) && a.push(h)
            }
            this.F = a;
            this.H = this.C.performance.getEntriesByType("resource");
            this.N = this.C.performance.getEntriesByType("mark");
            k = {};
            a = 0;
            for (b = this.H.length; a < b; a++) c = this.H[a], k[c.name] = c.responseEnd;
            a = 0;
            for (b = this.N.length; a < b; a++) c = this.N[a], "mark_iframe_loaded: " == c.name.slice(0, 20) && (k[c.name.slice(20)] = c.startTime);
            a = 0;
            for (b = this.F.length; a < b; a++) c = this.F[a], c.timing || (c.timing = k[c.url] || 0);
            this.K = Haa(this);
            this.G = Iaa(this);
            e = k = 0;
            if (this.G.length)
                for (b =
                    a = 0, c = this.G.length; b < c; b++) d = this.G[b], e = d.timing - e, 0 < e && 1 > a && (k += (1 - a) * e), e = d.timing, a = d.progress;
            this.D = Math.round(k || this.K);
            this.W = e
        }
    };
    Ne = function(a, b, c) {
        return c && b.getBoundingClientRect && (b = b.getBoundingClientRect(), b = new g.Vd(b.left, b.top, b.width, b.height), g.Wd(b, a.J)) ? new Pe(b, c) : null
    };
    Haa = function(a) {
        var b, c = a.C,
            d = c.performance.timing.navigationStart;
        if ("msFirstPaint" in c.performance.timing) b = c.performance.timing.C - d;
        else if ("chrome" in c && "loadTimes" in c.chrome) {
            var e = c.chrome.loadTimes(),
                h = e.firstPaintTime;
            if (0 < h) {
                var k = e.startLoadTime;
                "requestTime" in e && (k = e.requestTime);
                h >= k && (b = 1E3 * (h - k))
            }
        }
        if (void 0 === b || 0 > b || 12E4 < b) {
            b = c.performance.timing.responseStart - d;
            for (var l = {}, c = c.document.getElementsByTagName("head")[0].children, d = 0, e = c.length; d < e; d++) h = c[d], "SCRIPT" == h.tagName && h.src &&
                !h.async ? l[h.src] = true : "LINK" == h.tagName && "stylesheet" == h.rel && h.href && (l[h.href] = true);
            a.H.some(function(a) {
                if (!l[a.name] || "script" != a.initiatorType && "link" != a.initiatorType) return true;
                a = a.responseEnd;
                if (void 0 === b || a > b) b = a
            })
        }
        return Math.max(b, 0) || 0
    };
    Iaa = function(a) {
        for (var b = {
                0: 0
            }, c = 0, d = a.K, e = 0, h = a.F.length; e < h; e++) {
            var k = a.F[e],
                l = d;
            k.timing > d && (l = k.timing);
            b[l] || (b[l] = 0);
            k = g.Xd(k.region).Qg(); //Qg might be area
            b[l] += k;
            c += k
        }
        e = g.Xd(a.J).Qg(); //Qg might be area
        0 < e && (e = .1 * Math.max(e - c, 0), d in b || (b[d] = 0), b[d] += e, c += e);
        d = [];
        if (c) {
            for (var n in b) a = new Qe((0, window.parseFloat)(n), b[n]), d.push(a);
            d.sort(function(a, b) {
                return a.timing - b.timing
            });
            e = b = 0;
            for (h = d.length; e < h; e++) a = d[e], b += a.Qg, a.progress = b / c //Qg might be area
        }
        return d
    };
    Pe = function(a, b) {
        this.region = a;
        this.url = b
    };
    Qe = function(a, b) {
        this.Qg = b; //Qg might be area
        this.timing = a
    };
    g.Re = function() {
        g.mb.call(this);
        this.ia = new ed(this);
        this.oy = this;
        this.Yi = null
    };
    Se = function(a, b, c, d) {
        b = a.ia.C[String(b)];
        if (!b) return true;
        b = b.concat();
        for (var e = true, h = 0; h < b.length; ++h) {
            var k = b[h];
            if (k && !k.uh && k.capture == c) {
                var l = k.listener,
                    n = k.Ad || k.src;
                k.ij && hd(a.ia, k);
                e = false !== l.call(n, d) && e
            }
        }
        return e && 0 != d.Sv
    };
    g.Ue = function(a, b, c, d) {
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in window.document ? "mouseleave" != b || "onmouseenter" in window.document ? "mousewheel" == b && "MozBoxSizing" in window.document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return g.Qa(Te, function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        })
    };
    g.G = function(a, b, c, d) {
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        d = !!d;
        var e = g.Ue(a, b, c, d);
        if (e) return e;
        var e = ++Ve.count + "",
            h = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in window.document),
            k;
        k = h ? function(d) {
            d = new g.zc(d);
            if (!g.Td(d.relatedTarget, function(b) {
                    return b == a
                }, true)) return d.currentTarget = a, d.type = b, c.call(a, d)
        } : function(b) {
            b = new g.zc(b);
            b.currentTarget = a;
            return c.call(a, b)
        };
        k = g.vb(k);
        a.addEventListener ? ("mouseenter" == b && h ? b = "mouseover" : "mouseleave" == b && h ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in window.document.documentElement.style && (b = "MozMousePixelScroll"), a.addEventListener(b, k, d)) : a.attachEvent("on" + b, k);
        Te[e] = [a, b, c, k, d];
        return e
    };
    g.We = function(a) {
        a && ("string" == typeof a && (a = [a]), (0, g.y)(a, function(a) {
            if (a in Te) {
                var b = Te[a],
                    d = b[0],
                    e = b[1],
                    h = b[3],
                    b = b[4];
                d.removeEventListener ? d.removeEventListener(e, h, b) : d.detachEvent && d.detachEvent("on" + e, h);
                delete Te[a]
            }
        }))
    };
    g.Xe = function(a) {
        for (var b in Te) Te[b][0] == a && g.We(b)
    };
    g.Ye = function(a) {
        a = a || window.event;
        a.returnValue = false;
        a.preventDefault && a.preventDefault()
    };
    g.cf = function(a, b) {
        g.Ze[a.endpoint] = g.Ze[a.endpoint] || [];
        var c = g.Ze[a.endpoint];
        c.push(a.Gb);
        $e[a.endpoint] = b;
        c.length >= (Number(g.Hc("web_logging_max_batch") || 0) || 20) ? g.af() : g.bf()
    };
    g.af = function() {
        g.yb(g.df);
        if (!g.Ra(g.Ze)) {
            for (var a in g.Ze) {
                var b = g.ef[a];
                if (!b) {
                    b = $e[a];
                    if (!b) continue;
                    b = new b;
                    g.ef[a] = b
                }
                var c = b.C();
                c.requestTimeMs = Math.round((0, g.ff)());
                c[Jaa[a]] = g.Ze[a];
                b.F(a, c, {});
                delete g.Ze[a]
            }
            g.Ra(g.Ze) || g.bf()
        }
    };
    g.bf = function() {
        g.yb(g.df);
        g.df = g.wb(g.af, g.w("LOGGING_BATCH_TIMEOUT", 1E4))
    };
    g.gf = function(a, b, c) {
        a && (c && (c = g.Xa, c = !(c && 0 <= c.toLowerCase().indexOf("cobalt"))), c ? a && (a = g.Ld("IFRAME", {
            src: 'javascript:"data:text/html,<body><img src=\\"' + a + '\\"></body>"',
            style: "display:none"
        }), g.Sd(a).body.appendChild(a)) : Kaa(a, b))
    };
    g.hf = function(a) {
        try {
            window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, "") || g.gf(a, void 0)
        } catch (b) {
            g.gf(a, void 0)
        }
    };
    Kaa = function(a, b) {
        var c = new window.Image,
            d = "" + Laa++;
        jf[d] = c;
        c.onload = c.onerror = function() {
            b && jf[d] && b();
            delete jf[d]
        };
        c.src = a
    };
    g.mf = function(a) {
        if (!g.kf && !g.lf || !window.JSON) return null;
        var b;
        try {
            b = g.kf.get(a)
        } catch (c) {}
        if (!g.isStr(b)) try {
            b = g.lf.get(a)
        } catch (c) {}
        if (!g.isStr(b)) return null;
        try {
            b = JSON.parse(b, void 0)
        } catch (c) {}
        return b
    };
    g.nf = function(a, b, c) {
        if (g.isAFunction(a)) c && (a = (0, g.r)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, g.r)(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : g.bigThis.setTimeout(a, b || 0)
    };
    g.of = function(a) {
        g.bigThis.clearTimeout(a)
    };
    g.pf = function(a, b, c, d) {
        var e = {};
        e.eventTimeMs = Math.round(d || (0, g.ff)());
        e[a] = b;
        g.cf({
            endpoint: "log_event",
            Gb: e
        }, c)
    };
    rf = function() {
        this.D = g.Jc();
        qf || (qf = Maa(this.D))
    };
    Maa = function(a) {
        return (new g.Zd(function(b) {
            g.nc(g.w("GAPI_LOADER_URL", void 0), function() {
                try {
                    g.q("yt.gapi.load")("client", {
                        gapiHintOverride: a.gapiHintOverride,
                        _c: {
                            jsl: {
                                h: a.gapiHintParams
                            }
                        },
                        callback: b
                    })
                } catch (c) {
                    g.Ab(c)
                }
            })
        })).then(function() {})
    };
    Naa = function(a, b, c, d) {
        var e = {
                path: "/youtubei/" + a.D.innertubeApiVersion + "/" + b,
                headers: {
                    "X-Goog-Visitor-Id": g.w("VISITOR_DATA")
                },
                method: "POST",
                body: g.sc(c)
            },
            h = (0, g.r)(a.G, a);
        qf.then(function() {
            h();
            g.q("gapi.client.request")(e).execute(d || g.emptyFunction)
        })
    };
    g.tf = function() {
        if (null == g.q("_lact", window)) {
            var a = (0, window.parseInt)(g.w("LACT"), 10),
                a = (0, window.isFinite)(a) ? (0, g.C)() - Math.max(a, 0) : -1;
            g.p("_lact", a, window); - 1 == a && sf();
            g.G(window.document, "keydown", sf);
            g.G(window.document, "keyup", sf);
            g.G(window.document, "mousedown", sf);
            g.G(window.document, "mouseup", sf);
            g.Ib("page-mouse", sf);
            g.Ib("page-scroll", sf);
            g.Ib("page-resize", sf)
        }
    };
    sf = function() {
        null == g.q("_lact", window) && (g.tf(), g.q("_lact", window));
        var a = (0, g.C)();
        g.p("_lact", a, window);
        g.z("USER_ACTIVE")
    };
    g.uf = function() {
        var a = g.q("_lact", window);
        return null == a ? -1 : Math.max((0, g.C)() - a, 0)
    };
    g.vf = function(a, b, c) {
        g.mb.call(this);
        this.C = a;
        this.D = b || 0;
        this.F = c;
        this.Oc = (0, g.r)(this.xm, this)
    };
    g.wf = function() {
        return g.mf("yt-interaction-logging-parent")
    };
    g.xf = function() {
        var a = g.w("client-screen-nonce", void 0);
        a || (a = g.w("EVENT_ID", void 0));
        return a
    };
    zf = function(a, b) {
        yf.mark && (g.ua(a, "mark_") || (a = "mark_" + a), b && (a += " (" + b + ")"), yf.mark(a))
    };
    Oaa = function() {
        if ("cold" == Af().yt_lt) {
            var a = Bf(),
                b = Cf(),
                c;
            for (c in a) g.ua(c, "_") || "tick_" + c in b || Df(c, a[c]);
            a = Af();
            for (c in a) "info_" + c in b || Ef(c, a[c])
        }
    };
    g.Gf = function(a, b, c) {
        b || "_" == a[0] || zf(a, c);
        var d = Bf(c),
            e = b || (0, g.ff)();
        d[a] && (d["_" + a] = d["_" + a] || [d[a]], d["_" + a].push(e));
        d[a] = e;
        Df(a, b, c) || g.Ff(false, c);
        return d[a]
    };
    Df = function(a, b, c) {
        Cf(c)["tick_" + a] = b;
        c || b || (0, g.ff)();
        return g.Hc("csi_on_gel") ? (c = Hf(c), "_start" == a ? g.pf("latencyActionBaselined", {
            clientActionNonce: c
        }, rf, b) : g.pf("latencyActionTicked", {
            tickName: a,
            clientActionNonce: c
        }, rf, b), true) : false
    };
    Jf = function(a, b) {
        If("yt_sts", a, void 0);
        g.Gf("_start", b, void 0)
    };
    If = function(a, b, c) {
        Af(c)[a] = b;
        Ef(a, b, c)
    };
    Ef = function(a, b, c) {
        Cf(c)["info_" + a] = b;
        if (g.Hc("csi_on_gel"))
            if (a in Kf) {
                var d = {};
                a = Kf[a];
                g.Ja(Paa, a) && (b = !!b);
                d[a] = b;
                b = Hf(c);
                d.clientActionNonce = b;
                g.pf("latencyActionInfo", d, rf)
            } else g.Ab(Error("Unknown label " + a + " logged with GEL CSI."))
    };
    Nf = function(a) {
        Lf(a);
        Qaa();
        Mf(false, a)
    };
    Uaa = function() {
        var a = g.w("TIMING_INFO", {}),
            b;
        for (b in a) If(b, a[b]);
        (a = g.xf()) && If("csn", a);
        (a = g.w("PREVIOUS_ACTION", void 0)) && If("pa", a);
        b = Af();
        b.p = g.w("CLIENT_PROTOCOL") || "unknown";
        b.t = g.w("CLIENT_TRANSPORT") || "unknown";
        yf.now && yf.timing ? (a = yf.timing.navigationStart + yf.now(), a = Math.round((0, g.C)() - a)) : a = null;
        null != a && If("yt_hrd", a);
        window.navigator && window.navigator.sendBeacon && If("ba", 1);
        If("yt_vis", Raa());
        if ("cold" == b.yt_lt) {
            a = yf.timing || {};
            g.Hc("cold_load_nav_start_web") && a.navigationStart && (g.Gf("srt",
                a.responseStart), 1 != b.prerender && Jf("n", a.navigationStart));
            a: if (a.msFirstPaint) b = Math.max(0, a.msFirstPaint);
                else {
                    if (b = window.chrome)
                        if (b = b.loadTimes, g.isAFunction(b)) {
                            b = b();
                            var c = 1E3 * Math.min(b.requestTime || window.Infinity, b.startLoadTime || window.Infinity),
                                c = window.Infinity === c ? 0 : a.navigationStart - c;
                            b = Math.max(0, Math.round(1E3 * b.firstPaintTime + c) || 0);
                            break a
                        }
                    b = 0
                }
            0 < b && g.Gf("fpt", b);
            Of(a);
            yf.getEntriesByType && Saa();
            a = g.w("SPEEDINDEX_FOR_ACTIONS", void 0);
            b = g.w("TIMING_ACTION", void 0);
            a && -1 < a.indexOf(b) && (a =
                (0, g.ff)(), b = new Oe, c = (0, g.ff)(), 0 < b.D && (If("si", b.D), g.Gf("vsc", Qf(b.W)), g.Gf("sics", a), g.Gf("sice", c)));
            a = [];
            if (window.document.querySelector && yf && yf.getEntriesByName)
                for (var d in Rf) {
                    b = a;
                    var c = Rf[d],
                        e = window.document.querySelector(d);
                    if (e) {
                        var h = "",
                            k = e.nodeName;
                        "SCRIPT" == k ? (h = e.src, h || (h = e.getAttribute("data-timing-href")) && (h = window.location.protocol + h)) : "LINK" == k && (h = e.href);
                        h && (e = yf.getEntriesByName(h)) && e[0] && b.push(c + "." + Math.round(e[0].duration))
                    }
                }
            a.length && If("rs", a.join(","))
        }
        g.Hc("csi_on_gel") &&
            (d = {}, d.actionType = Taa[g.w("TIMING_ACTION", void 0)] || "LATENCY_ACTION_UNKNOWN", a = Hf(), d.clientActionNonce = a, g.pf("latencyActionInfo", d, rf))
    };
    Sf = function(a) {
        var b = Bf(a);
        if (b.aft) return b.aft;
        a = g.w((a || "") + "TIMING_AFT_KEYS", ["ol"]);
        for (var c = a.length, d = 0; d < c; d++) {
            var e = b[a[d]];
            if (e) return e
        }
        return window.NaN
    };
    Of = function(a) {
        g.Gf("nreqs", a.requestStart, void 0);
        g.Gf("nress", a.responseStart, void 0);
        g.Gf("nrese", a.responseEnd, void 0);
        0 < a.redirectEnd - a.redirectStart && (g.Gf("nrs", a.redirectStart, void 0), g.Gf("nre", a.redirectEnd, void 0));
        0 < a.domainLookupEnd - a.domainLookupStart && (g.Gf("ndnss", a.domainLookupStart, void 0), g.Gf("ndnse", a.domainLookupEnd, void 0));
        0 < a.connectEnd - a.connectStart && (g.Gf("ntcps", a.connectStart, void 0), g.Gf("ntcpe", a.connectEnd, void 0));
        a.secureConnectionStart >= a.navigationStart && 0 < a.connectEnd -
            a.secureConnectionStart && (g.Gf("nstcps", a.secureConnectionStart, void 0), g.Gf("ntcpe", a.connectEnd, void 0))
    };
    Qf = function(a) {
        return Math.round(yf.timing.navigationStart + a)
    };
    Saa = function() {
        var a = window.location.protocol,
            b = yf.getEntriesByType("resource"),
            c = b.filter(function(b) {
                return 0 == b.name.indexOf(a + "//fonts.googleapis.com/css?family=")
            })[0],
            b = b.filter(function(b) {
                return 0 == b.name.indexOf(a + "//fonts.gstatic.com/s/")
            }).reduce(function(a, b) {
                return b.duration > a.duration ? b : a
            }, {
                duration: 0
            });
        c && 0 < c.startTime && 0 < c.responseEnd && (g.Gf("wfcs", Qf(c.startTime)), g.Gf("wfce", Qf(c.responseEnd)));
        b && 0 < b.startTime && 0 < b.responseEnd && (g.Gf("wffs", Qf(b.startTime)), g.Gf("wffe", Qf(b.responseEnd)))
    };
    Vf = function(a) {
        if (!g.Hc("csi_on_gel")) {
            var b = Bf(a),
                c = Af(a),
                d = b._start,
                e;
            for (e in b)
                if (g.ua(e, "_") && g.isArray(b[e])) {
                    var h = e.slice(1);
                    if (h in Vaa) {
                        var k = (0, g.Tf)(b[e], function(a) {
                            return Math.round(a - d)
                        });
                        c["all_" + h] = k.join()
                    }
                    delete b[e]
                }
            h = !!c.ap;
            if (k = g.q("yt.timing.reportbuilder_")) {
                if (k = k(b, c, a)) Uf(k, h), Nf(a)
            } else {
                var l = g.w("CSI_SERVICE_NAME", "youtube"),
                    k = {
                        v: 2,
                        s: l,
                        action: g.w((a || "") + "TIMING_ACTION", void 0)
                    },
                    n = c.srt;
                delete c.srt;
                void 0 === b.srt && (n || 0 === n || (n = yf.timing || {}, n = Math.max(0, n.responseStart - n.navigationStart), (0, window.isNaN)(n) && c.pt && (n = c.pt)), n || 0 === n) && (c.srt = Math.round(n));
                if (c.h5jse) {
                    var t = window.location.protocol + g.q("ytplayer.config.assets.js");
                    (t = yf.getEntriesByName ? yf.getEntriesByName(t)[0] :
                        null) ? c.h5jse = Math.round(c.h5jse - t.responseEnd): delete c.h5jse
                }
                b.aft = Sf(a);
                Waa(a) && "youtube" == l && (If("yt_lt", "hot_bg", a), l = b.vc, t = b.pbs, delete b.aft, c.aft = Math.round(t - l));
                for (var x in c) "_" != x.charAt(0) && (k[x] = c[x]);
                b.ps = (0, g.ff)();
                c = {};
                x = [];
                for (e in b) "_" != e.charAt(0) && (l = Math.round(b[e] - d), c[e] = l, x.push(e + "." + l));
                k.rt = x.join(",");
                (b = g.q("ytdebug.logTiming")) && b(k, c);
                g.Hc("navigation_only_csi_reset") || Nf(a);
                Uf(k, h, a);
                g.Me(Xaa, new Lc(c.aft + (n || 0)))
            }
        }
    };
    g.Ff = function(a, b) {
        if (!Wf(b) || !g.Hc("navigation_only_csi_reset") && !b) {
            var c = g.w((b || "") + "TIMING_ACTION", void 0),
                d = Bf(b);
            if (g.q("yt.timing." + (b || "") + "ready_") && c && d._start && Sf(b))
                if (a || b) Vf(b);
                else {
                    a = true;
                    c = g.w("TIMING_WAIT", []);
                    if (c.length)
                        for (var e = 0, h = c.length; e < h; ++e)
                            if (!(c[e] in d)) {
                                a = false;
                                break
                            }
                    a && Vf(b)
                }
        }
    };
    Uf = function(a, b, c) {
        if (g.Hc("debug_csi_data")) {
            var d = g.q("yt.timing.csiData");
            d || (d = [], g.p("yt.timing.csiData", d, void 0));
            d.push({
                page: window.location.href,
                time: new Date,
                args: a
            })
        }
        var d = "",
            e;
        for (e in a) d += "&" + e + "=" + a[e];
        a = "/csi_204?" + d.substring(1);
        window.navigator && window.navigator.sendBeacon && b ? g.hf(a) : g.gf(a);
        Mf(true, c)
    };
    Xf = function(a) {
        g.p("yt.timing.ready_", a, void 0)
    };
    Hf = function(a) {
        var b = Yf(a).nonce;
        if (!b) {
            var c;
            a: {
                if (window.crypto && window.crypto.getRandomValues) try {
                    var d = Array(16),
                        e = new window.Uint8Array(16);
                    window.crypto.getRandomValues(e);
                    for (b = 0; b < d.length; b++) d[b] = e[b];
                    c = d;
                    break a
                } catch (h) {}
                c = Array(16);
                for (d = 0; 16 > d; d++) {
                    e = (0, g.C)();
                    for (b = 0; b < e % 23; b++) c[d] = Math.random();
                    c[d] = Math.floor(256 * Math.random())
                }
                if (Zf)
                    for (d = 1, e = 0; e < Zf.length; e++) c[d % 16] = c[d % 16] ^ c[(d - 1) % 16] / 4 ^ Zf.charCodeAt(e), d++
            }
            d = [];
            for (e = 0; e < c.length; e++) d.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(c[e] &
                63));
            b = d.join("");
            Yf(a).nonce = b
        }
        return b
    };
    Bf = function(a) {
        return Yf(a).tick
    };
    Af = function(a) {
        return Yf(a).info
    };
    Cf = function(a) {
        a = Yf(a);
        "gel" in a || (a.gel = {});
        return a.gel
    };
    Yf = function(a) {
        return g.q("ytcsi." + (a || "") + "data_") || Lf(a)
    };
    Lf = function(a) {
        var b = {
            tick: {},
            info: {}
        };
        g.p("ytcsi." + (a || "") + "data_", b, void 0);
        return b
    };
    Wf = function(a) {
        return !!g.q("yt.timing." + (a || "") + "pingSent_")
    };
    Mf = function(a, b) {
        g.p("yt.timing." + (b || "") + "pingSent_", a, void 0)
    };
    $f = function(a) {
        if (!Wf(void 0)) {
            if (!g.Hc("send_empty_timing")) {
                var b = g.w("CSI_SERVICE_NAME", "youtube");
                if (!g.w("TIMING_ACTION", void 0) || !b) return
            }
            g.Gf("aa", void 0, void 0);
            If("ap", 1, void 0);
            If("yt_fss", a, void 0);
            Vf(void 0)
        }
    };
    Waa = function(a) {
        var b = Bf(a),
            c = b.pbr,
            d = b.vc,
            b = b.pbs;
        return c && d && b && c < d && d < b && 1 == Af(a).yt_pvis
    };
    Raa = function() {
        switch (g.Ke()) {
            case "hidden":
                return 0;
            case "visible":
                return 1;
            case "prerender":
                return 2;
            case "unloaded":
                return 3
        }
        return -1
    };
    cba = function() {
        ag++;
        var a = g.Fd(),
            b = new g.Vd(0, 0, a.width, a.height);
        If("vps", a.width + "." + a.height);
        g.Gf("vpc");
        var a = window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]"),
            c = a.length,
            d = [],
            e = true;
        bg.start();
        for (var h = 0; h < c; h++) {
            var k = a[h];
            if (cg(k, b)) {
                var l = Yaa(k);
                l.then(Zaa);
                d.push(l);
                dg.push(l);
                k.loadTime || (e = false)
            }
        }
        e && If("yt_eil", 1);
        If("vpni", d.length);
        g.Gf("vpcc");
        b = g.de(d).then($aa);
        g.fe(b, aba);
        b.then(bba);
        dg.push(b);
        return b
    };
    bba = function() {
        bg.stop()
    };
    aba = function() {
        g.Gf("vpr")
    };
    cg = function(a, b) {
        for (var c = window.document.body; a != c;) {
            var d = g.Ie(a);
            if (d in eg) break;
            var e = window.getComputedStyle(a);
            if ("none" == e.display || "hidden" == e.visibility) return false;
            e = a.getBoundingClientRect();
            if (!(b.left <= e.left + e.width && e.left <= b.left + b.width && b.top <= e.top + e.height && e.top <= b.top + b.height)) return false;
            eg[d] = true;
            a = a.parentElement
        }
        return true
    };
    $aa = function(a) {
        for (var b = g.Fd(), b = new g.Vd(0, 0, b.width, b.height), c = 0, d = 0, e = a.length; d < e; d++) {
            var h = a[d].time;
            cg(a[d].F, b) && c < h && (c = h)
        }
        return c
    };
    Yaa = function(a) {
        var b = ag;
        return new g.Zd(function(c, d) {
            var e = {
                F: a,
                time: 0
            };
            if (a.loadTime) e.time = (0, window.parseInt)(a.loadTime, 10), c(e);
            else {
                var h = g.G(a, "load", function() {
                    ag != b && (g.We(h), d());
                    if (a.loadTime) {
                        var k = (0, window.parseInt)(a.loadTime, 10);
                        g.We(h);
                        e.time = k;
                        c(e)
                    }
                });
                fg.push(h)
            }
        })
    };
    Zaa = function(a) {
        bg.start();
        If("vpil", ++gg);
        a = a.time;
        hg < a && (hg = a, g.Gf("lim", a))
    };
    dba = function() {
        g.Gf("vptl", hg);
        g.Gf("vpl", hg)
    };
    eba = function() {};
    ig = function(a, b, c) {
        return a[b] = a[b] || c
    };
    fba = function(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a) return b;
        return -1
    };
    gba = function(a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
    };
    jg = function() {
        var a;
        if ((a = Object.create) && hba.test(a)) a = a(null);
        else {
            a = {};
            for (var b in a) a[b] = void 0
        }
        return a
    };
    g.kg = function(a) {
        this.C = a || {
            cookie: ""
        }
    };
    g.mg = function(a) {
        a = (a.C.cookie || "").split(g.lg);
        for (var b = [], c = [], d, e, h = 0; e = a[h]; h++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    og = function() {
        var a = iba.href,
            b;
        if (ng.dpo) b = ng.h;
        else {
            b = ng.h;
            var c = /([#].*&|[#])jsh=([^&#]*)/g,
                d = /([?#].*&|[?#])jsh=([^&#]*)/g;
            if (a = a && (c.exec(a) || d.exec(a))) try {
                b = (0, window.decodeURIComponent)(a[2])
            } catch (e) {}
        }
        return b
    };
    jba = function(a) {
        var b = ig(ng, "PQ", []);
        ng.PQ = [];
        var c = b.length;
        if (0 === c) a();
        else
            for (var d = 0, e = function() {
                    ++d === c && a()
                }, h = 0; h < c; h++) b[h](e)
    };
    pg = function(a) {
        return ig(ig(ng, "H", jg()), a, jg())
    };
    sg = function(a, b, c) {
        b && 0 < b.length && (b = qg(b), c && 0 < c.length && (b += "___" + qg(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = ig(kba, "_p", jg()), ig(b, c, jg())[a] = (new Date).getTime(), b = rg.r, "function" === typeof b ? b(a, "_p", c) : b.push([a, "_p", c]))
    };
    qg = function(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
    };
    tg = function(a) {
        throw Error("Bad hint" + (a ? ": " + a : ""));
    };
    oba = function(a, b, c, d) {
        var e = a.split(";"),
            h = e.shift(),
            k = ug[h],
            l = null;
        k ? l = k(e, b, c, d) : tg("no hint processor for: " + h);
        l || tg("failed to generate load url");
        b = l;
        c = b.match(lba);
        (d = b.match(mba)) && 1 === d.length && nba.test(b) && c && 1 === c.length || tg("failed sanity: " + a);
        return l
    };
    rba = function(a, b, c, d) {
        function e(a) {
            return (0, window.encodeURIComponent)(a).replace(/%2C/g, ",")
        }
        a = pba(a);
        qba.test(c) || tg("invalid_callback");
        b = vg(b);
        d = d && d.length ? vg(d) : null;
        return [(0, window.encodeURIComponent)(a.DM).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.Fp ? "/am=" + e(a.Fp) : "", a.Ov ? "/rs=" + e(a.Ov) : "", a.Ex ? "/t=" + e(a.Ex) : "", "/cb=", e(c)].join("")
    };
    pba = function(a) {
        "/" !== a.charAt(0) && tg("relative path");
        for (var b = a.substring(1).split("/"), c = []; b.length;) {
            a = b.shift();
            if (!a.length || 0 == a.indexOf(".")) tg("empty/relative directory");
            else if (0 < a.indexOf("=")) {
                b.unshift(a);
                break
            }
            c.push(a)
        }
        a = {};
        for (var d = 0, e = b.length; d < e; ++d) {
            var h = b[d].split("="),
                k = (0, window.decodeURIComponent)(h[0]),
                l = (0, window.decodeURIComponent)(h[1]);
            2 == h.length && k && l && (a[k] = a[k] || l)
        }
        b = "/" + c.join("/");
        sba.test(b) || tg("invalid_prefix");
        c = wg(a, "k", true);
        d = wg(a, "am");
        e = wg(a, "rs");
        a =
            wg(a, "t");
        return {
            DM: b,
            version: c,
            Fp: d,
            Ov: e,
            Ex: a
        }
    };
    vg = function(a) {
        for (var b = [], c = 0, d = a.length; c < d; ++c) {
            var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
            tba.test(e) && b.push(e)
        }
        return b.join(",")
    };
    wg = function(a, b, c) {
        a = a[b];
        !a && c && tg("missing: " + b);
        if (a) {
            if (uba.test(a)) return a;
            tg("invalid: " + b)
        }
        return null
    };
    vba = function() {
        var a = og();
        if (!a) throw Error("Bad hint");
        return a
    };
    xg = function(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && 0 > fba.call(b, e) && c.push(e)
        }
        return c
    };
    Bg = function() {
        var a = ng.nonce;
        if (void 0 !== a) return a && a === String(a) && a.match(yg) ? a : ng.nonce = null;
        var b = ig(ng, "us", []);
        if (!b || !b.length) return ng.nonce = null;
        for (var c = zg.getElementsByTagName(Ag), d = 0, e = c.length; d < e; ++d) {
            var h = c[d];
            if (h.src && (a = String(h.getAttribute("nonce") || "") || null)) {
                for (var k = 0, l = b.length; k < l && b[k] !== h.src; ++k);
                if (k !== l && a && a === String(a) && a.match(yg)) return ng.nonce = a
            }
        }
        return null
    };
    wba = function(a) {
        if ("loading" != zg.readyState) Cg(a);
        else {
            var b = Bg(),
                c = "";
            null !== b && (c = ' nonce="' + b + '"');
            zg.write("<" + Ag + ' src="' + (0, window.encodeURI)(a) + '"' + c + "></" + Ag + ">")
        }
    };
    Cg = function(a) {
        var b = zg.createElement(Ag);
        b.setAttribute("src", a);
        a = Bg();
        null !== a && b.setAttribute("nonce", a);
        b.async = "true";
        (a = zg.getElementsByTagName(Ag)[0]) ? a.parentNode.insertBefore(b, a): (zg.head || zg.body || zg.documentElement).appendChild(b)
    };
    xba = function(a, b) {
        var c = b && b._c;
        if (c)
            for (var d = 0; d < Dg.length; d++) {
                var e = Dg[d][0],
                    h = Dg[d][1];
                h && Object.prototype.hasOwnProperty.call(c, e) && h(c[e], a, b)
            }
    };
    yba = function(a, b, c) {
        Eg(function() {
            var c;
            c = b === og() ? ig(Fg, "_", jg()) : jg();
            c = ig(pg(b), "_", c);
            a(c)
        }, c)
    };
    g.Hg = function(a, b) {
        var c = b || {};
        "function" == typeof b && (c = {}, c.callback = b);
        xba(a, c);
        b = a ? a.split(":") : [];
        var d = c.h || vba(),
            e = ig(ng, "ah", jg());
        if (e["::"] && b.length) {
            a = [];
            for (var h = null; h = b.shift();) {
                var k = h.split("."),
                    k = e[h] || e[k[1] && "ns:" + k[0] || ""] || d,
                    l = a.length && a[a.length - 1] || null,
                    n = l;
                l && l.hint == k || (n = {
                    hint: k,
                    features: []
                }, a.push(n));
                n.features.push(h)
            }
            var t = a.length;
            if (1 < t) {
                var x = c.callback;
                x && (c.callback = function() {
                    0 == --t && x()
                })
            }
            for (; b = a.shift();) Gg(b.features, c, b.hint)
        } else Gg(b || [], c, d)
    };
    Gg = function(a, b, c) {
        function d(a, b) {
            if (E) return 0;
            Ig.clearTimeout(x);
            V.push.apply(V, ja);
            var d = ((Fg || {}).config || {}).update;
            d ? d(h) : h && ig(ng, "cu", []).push(h);
            if (b) {
                sg("me0", a, T);
                try {
                    yba(b, c, t)
                } finally {
                    sg("me1", a, T)
                }
            }
            return 1
        }
        a = gba(a) || [];
        var e = b.callback,
            h = b.config,
            k = b.timeout,
            l = b.ontimeout,
            n = b.onerror,
            t = void 0;
        "function" == typeof n && (t = n);
        var x = null,
            E = false;
        if (k && !l || !k && l) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
        var n = ig(pg(c), "r", []).sort(),
            V = ig(pg(c), "L", []).sort(),
            T = [].concat(n);
        0 < k && (x = Ig.setTimeout(function() {
            E = true;
            l()
        }, k));
        var ja = xg(a, V);
        if (ja.length) {
            var ja = xg(a, n),
                za = ig(ng, "CP", []),
                Ga = za.length;
            za[Ga] = function(a) {
                function b() {
                    var a = za[Ga + 1];
                    a && a()
                }

                function c(b) {
                    za[Ga] = null;
                    d(ja, a) && jba(function() {
                        e && e();
                        b()
                    })
                }
                if (!a) return 0;
                sg("ml1", ja, T);
                0 < Ga && za[Ga - 1] ? za[Ga] = function() {
                    c(b)
                } : c(b)
            };
            if (ja.length) {
                var sb = "loaded_" + ng.I++;
                Fg[sb] = function(a) {
                    za[Ga](a);
                    Fg[sb] = null
                };
                a = oba(c, ja, "gapi." + sb, n);
                n.push.apply(n, ja);
                sg("ml0", ja, T);
                b.sync || Ig.___gapisync ? wba(a) : Cg(a)
            } else za[Ga](eba)
        } else d(ja) && e && e()
    };
    Eg = function(a, b) {
        if (ng.hee && 0 < ng.hel) try {
            return a()
        } catch (c) {
            b && b(c), ng.hel--, g.Hg("debug_error", function() {
                try {
                    window.___jsl.hefn(c)
                } catch (d) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    };
    g.Kg = function(a, b, c, d) {
        g.Jg.set("" + a, b, c, "/", d || "youtube.com")
    };
    g.Ng = function(a, b, c) {
        var d = g.w("VALID_SESSION_TEMPDATA_DOMAINS", []),
            e = g.Xc(window.location.href);
        e && d.push(e);
        e = g.Xc(a);
        if (g.Ja(d, e) || !e && g.ua(a, "/"))
            if (g.Hc("autoescape_tempdata_url") && (d = window.document.createElement("a"), g.ic(d, a), a = d.href), a = g.Yc(a), d = a.indexOf("#"), a = 0 > d ? a : a.substr(0, d)) g.Hc("enable_more_related_ve_logging") && (b.itct || b.ved) && (b.csn = b.csn || g.xf()), c ? (c = (0, window.parseInt)(c, 10), (0, window.isFinite)(c) && 0 < c && (Lg(a, b, c), Mg(b))) : (Lg(a, b), Mg(b))
    };
    Lg = function(a, b, c) {
        a = "ST-" + g.hashStr(a).toString(36);
        c = c || 5;
        b = b ? g.bd(b) : "";
        g.Kg(a, b, c)
    };
    Mg = function(a) {
        if (a) {
            a = a.itct || a.ved;
            var b = g.q("yt.logging.screen.storeParentElement");
            a && b && b(new g.Ac(a))
        }
    };
    g.Og = function(a, b) {
        g.gf("/gen_204?" + a, b)
    };
    g.Pg = function(a) {
        if (g.isArrayOrHasLength(a)) return zba(a);
        if (g.isObjectOrFunction(a) && !g.isAFunction(a) && !(g.isObjectOrFunction(a) && 0 < a.nodeType)) return Aba(a);
        try {
            return g.bigThis.JSON.stringify(a), a
        } catch (b) {}
    };
    Aba = function(a) {
        var b = {};
        g.Oa(a, function(a, d) {
            b[d] = g.Pg(a)
        });
        return b
    };
    zba = function(a) {
        var b = [];
        (0, g.y)(a, function(a, d) {
            b[d] = g.Pg(a)
        });
        return b
    };
    Qg = function(a) {
        a = a || {};
        this.url = a.url || "";
        this.urlV9As2 = a.url_v9as2 || "";
        this.args = a.args || g.copyObjectBasic(Bba);
        this.assets = a.assets || {};
        this.attrs = a.attrs || g.copyObjectBasic(Cba);
        this.params = a.params || g.copyObjectBasic(Dba);
        this.minVersion = a.min_version || "8.0.0";
        this.fallback = a.fallback || null;
        this.fallbackMessage = a.fallbackMessage || null;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded;
        this.messages = a.messages || {}
    };
    g.Rg = function(a) {
        a instanceof Qg || (a = new Qg(a));
        return a
    };
    Tg = function() {
        return null != g.Sg
    };
    g.Ug = function() {
        return g.Sg ? g.Sg.invoke() : null
    };
    Vg = function() {
        return (0, window.parseInt)(g.w("DCLKSTAT", 0), 10)
    };
    g.Wg = function(a, b) {
        g.jc(window.location, g.cd(a, b || {}) + "")
    };
    g.Xg = function(a, b) {
        b && g.Ng(a, b);
        (window.ytspf || {}).enabled ? window.spf.navigate(a) : g.Wg(a)
    };
    g.Yg = function(a, b, c) {
        var d = g.w("EVENT_ID");
        d && (b || (b = {}), b.ei || (b.ei = d));
        b && g.Ng(a, b);
        if (c) return false;
        g.Xg(a);
        return true
    };
    g.roundAndConvertToPX = function(toBeRounded, roundingFlag) {
        "number" == typeof toBeRounded && (toBeRounded = (roundingFlag ? Math.round(toBeRounded) : toBeRounded) + "px");
        return toBeRounded
    };
    g.$g = function(a, b) {
        a.style.height = g.roundAndConvertToPX(b, true)
    };
    g.ah = function(a, b) {
        a.style.width = g.roundAndConvertToPX(b, true)
    };
    g.ch = function() {
        this.C = this.minor = this.major = 0;
        this.F = "";
        var a = g.q("window.navigator.plugins"),
            b = g.q("window.navigator.mimeTypes"),
            a = a && a["Shockwave Flash"],
            b = b && b["application/x-shockwave-flash"],
            b = a && b && b.enabledPlugin && a.description || "";
        if (a = b) {
            var c = a.indexOf("Shockwave Flash");
            0 <= c && (a = a.substr(c + 15));
            for (var c = a.split(" "), d = "", a = "", e = 0, h = c.length; e < h; e++)
                if (d)
                    if (a) break;
                    else a = c[e];
            else d = c[e];
            d = d.split(".");
            c = (0, window.parseInt)(d[0], 10) || 0;
            d = (0, window.parseInt)(d[1], 10) || 0;
            e = 0;
            if ("r" == a.charAt(0) ||
                "d" == a.charAt(0)) e = (0, window.parseInt)(a.substr(1), 10) || 0;
            a = [c, d, e]
        } else a = [0, 0, 0];
        this.F = b;
        b = a;
        this.major = b[0];
        this.minor = b[1];
        this.C = b[2];
        if (0 >= this.major) {
            var k, l, n, t;
            if (g.isIE) try {
                k = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (x) {
                k = null
            } else n = window.document.body, t = window.document.createElement("object"), t.setAttribute("type", "application/x-shockwave-flash"), k = n.appendChild(t);
            if (k && "GetVariable" in k) try {
                l = k.GetVariable("$version")
            } catch (x) {
                l = ""
            }
            n && t && n.removeChild(t);
            (k = l ||
                "") ? (k = k.split(" ")[1].split(","), k = [(0, window.parseInt)(k[0], 10) || 0, (0, window.parseInt)(k[1], 10) || 0, (0, window.parseInt)(k[2], 10) || 0]) : k = [0, 0, 0];
            this.major = k[0];
            this.minor = k[1];
            this.C = k[2]
        }
    };
    g.dh = function(a, b, c, d) {
        b = "string" == typeof b ? b.split(".") : [b, c, d];
        b[0] = (0, window.parseInt)(b[0], 10) || 0;
        b[1] = (0, window.parseInt)(b[1], 10) || 0;
        b[2] = (0, window.parseInt)(b[2], 10) || 0;
        return a.major > b[0] || a.major == b[0] && a.minor > b[1] || a.major == b[0] && a.minor == b[1] && a.C >= b[2]
    };
    g.eh = function(a) {
        return -1 < a.F.indexOf("Gnash") && -1 == a.F.indexOf("AVM2") || 9 == a.major && 1 == a.minor || 9 == a.major && 0 == a.minor && 1 == a.C ? false : 9 <= a.major
    };
    g.fh = function(a) {
        return -1 < window.navigator.userAgent.indexOf("Sony/COM2") && !g.dh(a, 9, 1, 58) ? false : true
    };
    g.gh = function(a, b, c) {
        if (b) {
            a = g.isStr(a) ? g.Bd(a) : a;
            var d = g.copyObjectBasic(c.attrs);
            d.tabindex = 0;
            var e = g.copyObjectBasic(c.params);
            e.flashvars = g.bd(c.args);
            if (g.isIE) {
                d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                e.movie = b;
                b = window.document.createElement("object");
                for (var h in d) b.setAttribute(h, d[h]);
                for (h in e) d = window.document.createElement("param"), d.setAttribute("name", h), d.setAttribute("value", e[h]), b.appendChild(d)
            } else {
                d.type = "application/x-shockwave-flash";
                d.src = b;
                b = window.document.createElement("embed");
                b.setAttribute("name",
                    d.id);
                for (h in d) b.setAttribute(h, d[h]);
                for (h in e) b.setAttribute(h, e[h])
            }
            e = window.document.createElement("div");
            e.appendChild(b);
            a.innerHTML = e.innerHTML
        }
    };
    g.hh = function(a, b) {
        var c = a.match(Eba);
        window.spf.style.load(a, c ? c[1] : "", b)
    };
    ih = function(a) {
        g.mb.call(this);
        this.C = [];
        this.F = a || this
    };
    jh = function(a, b, c, d) {
        d = g.vb((0, g.r)(d, a.F));
        d = {
            target: b,
            name: c,
            Rb: d
        };
        b.addEventListener(c, d.Rb, void 0);
        a.C.push(d)
    };
    kh = function(a) {
        for (; a.C.length;) {
            var b = a.C.pop();
            b.target.removeEventListener(b.name, b.Rb)
        }
    };
    nh = function(a, b) {
        g.mb.call(this);
        this.N = this.G = a;
        this.qa = b;
        this.K = false;
        this.api = {};
        this.ua = this.Y = null;
        this.ea = new g.qb;
        g.pb(this, this.ea);
        this.D = {};
        this.J = this.Xa = this.F = this.pb = this.C = null;
        this.la = false;
        this.W = this.H = this.O = this.T = null;
        this.bb = {};
        this.Hb = ["onReady"];
        this.na = new ih(this);
        g.pb(this, this.na);
        this.sb = null;
        this.Bb = window.NaN;
        this.oa = {};
        lh(this);
        this.we("onDetailedError", (0, g.r)(this.UJ, this));
        this.we("onTabOrderChange", (0, g.r)(this.cz, this));
        this.we("onTabAnnounce", (0, g.r)(this.Ep, this));
        this.we("WATCH_LATER_VIDEO_ADDED", (0, g.r)(this.XJ, this));
        this.we("WATCH_LATER_VIDEO_REMOVED", (0, g.r)(this.YJ, this));
        g.mh || (this.we("onMouseWheelCapture", (0, g.r)(this.DJ, this)), this.we("onMouseWheelRelease", (0, g.r)(this.EJ, this)));
        this.we("onAdAnnounce", (0, g.r)(this.Ep, this));
        this.ia = new ih(this);
        g.pb(this, this.ia);
        this.jb = false;
        this.hb = null
    };
    ph = function(a, b) {
        a.pb = b;
        a.C = b.clone();
        a.F = a.C.attrs.id || a.F;
        "video-player" == a.F && (a.F = a.qa, a.C.attrs.id = a.qa);
        a.N.id == a.F && (a.F += "-player", a.C.attrs.id = a.F);
        a.C.args.enablejsapi = "1";
        a.C.args.playerapiid = a.qa;
        a.Xa || (a.Xa = oh(a, a.C.args.jsapicallback || "onYouTubePlayerReady"));
        a.C.args.jsapicallback = null;
        (b = a.C.attrs.width) && g.ah(a.N, Number(b) || b);
        (b = a.C.attrs.height) && g.$g(a.N, Number(b) || b)
    };
    qh = function(a) {
        a.C.loaded || (a.C.loaded = true, "0" != a.C.args.autoplay ? a.api.loadVideoByPlayerVars(a.C.args) : a.api.cueVideoByPlayerVars(a.C.args))
    };
    rh = function(a) {
        if (!g.isNotDefined(a.C.disable.flash)) {
            var b = a.C.disable,
                c;
            c = g.dh(g.ch.getInstance(), a.C.minVersion);
            b.flash = !c
        }
        return !a.C.disable.flash
    };
    uh = function(a, b) {
        if ((!b || (5 != (Fba[b.errorCode] || 5) ? 0 : -1 != Gba.indexOf(b.errorCode))) && rh(a)) {
            (b = sh(a)) && b.stopVideo && b.stopVideo();
            var c = a.C;
            b && b.getUpdatedConfigurationData && (b = b.getUpdatedConfigurationData(), c = g.Rg(b));
            c.args.autoplay = 1;
            c.args.html5_unavailable = "1";
            ph(a, c);
            th(a, "flash")
        }
    };
    th = function(a, b) {
        if (!a.ob()) {
            if (!b) {
                if (!(b = !a.C.html5 && rh(a))) {
                    if (!g.isNotDefined(a.C.disable.html5)) {
                        var c;
                        b = true;
                        void 0 != a.C.args.deviceHasDisplay && (b = a.C.args.deviceHasDisplay);
                        if (2.2 == vh) c = true;
                        else {
                            a: {
                                var d = b;
                                b = g.q("yt.player.utils.videoElement_");
                                b || (b = g.Nd("VIDEO"), g.p("yt.player.utils.videoElement_", b, void 0));
                                try {
                                    if (b.canPlayType)
                                        for (var d = d ? Hba : Iba, e = 0; e < d.length; e++)
                                            if (b.canPlayType(d[e])) {
                                                c = null;
                                                break a
                                            }
                                    c = "fmt.noneavailable"
                                } catch (h) {
                                    c = "html5.missingapi"
                                }
                            }
                            c = !c
                        }
                        c && (c = wh(a) || a.C.assets.js);
                        a.C.disable.html5 = !c;
                        c || (a.C.args.html5_unavailable = "1")
                    }
                    b = !!a.C.disable.html5
                }
                b = b ? rh(a) ? "flash" : "unsupported" : "html5"
            }("flash" == b ? a.QP : a.RP).call(a)
        }
    };
    wh = function(a) {
        var b = true,
            c = sh(a);
        c && a.C && (a = a.C, b = g.A(c, "version") == a.assets.js);
        return b && !!g.q("yt.player.Application.create")
    };
    sh = function(a) {
        var b = g.D(a.F);
        !b && a.N && a.N.querySelector && (b = a.N.querySelector("#" + a.F));
        return b
    };
    xh = function(a, b, c) {
        var d = b[c];
        return function() {
            try {
                return a.sb = null, d.apply(b, arguments)
            } catch (e) {
                "Bad NPObject as private data!" != e.message && "sendAbandonmentPing" != c && (e.message += " (" + c + ")", a.sb = e, g.Ab(e, "WARNING"))
            }
        }
    };
    lh = function(a) {
        a.K = false;
        if (a.ua)
            for (var b in a.D) a.ua(b, a.D[b]);
        for (var c in a.oa) g.yb((0, window.parseInt)(c, 10));
        a.oa = {};
        a.Y = null;
        a.ua = null;
        for (var d in a.api) a.api[d] = null;
        a.api.addEventListener = (0, g.r)(a.we, a);
        a.api.removeEventListener = (0, g.r)(a.nO, a);
        a.api.destroy = (0, g.r)(a.dispose, a);
        a.api.getLastError = (0, g.r)(a.CA, a);
        a.api.getPlayerType = (0, g.r)(a.TA, a);
        a.api.getCurrentVideoConfig = (0, g.r)(a.bA, a);
        a.api.loadNewVideoConfig = (0, g.r)(a.Yo, a);
        a.api.isReady = (0, g.r)(a.dQ, a)
    };
    oh = function(a, b) {
        var c = b;
        if ("string" == typeof b) {
            if (a.bb[b]) return a.bb[b];
            c = function() {
                var a = g.q(b);
                a && a.apply(g.bigThis, arguments)
            };
            a.bb[b] = c
        }
        return c ? c : null
    };
    Jba = function(a, b) {
        var c = "ytPlayer" + b + a.qa;
        a.D[b] = c;
        g.bigThis[c] = function(c) {
            var d = g.wb(function() {
                a.ob() || (a.ea.ab(b, c), g.Sa(a.oa, String(d)))
            }, 0);
            g.Ta(a.oa, String(d), true)
        };
        return c
    };
    yh = function(a) {
        return (a = sh(a)) ? "div" == a.tagName.toLowerCase() ? "html5" : "flash" : null
    };
    zh = function(a) {
        g.Gf("dcp");
        a.cancel();
        lh(a);
        a.J = null;
        a.C && (a.C.loaded = false);
        var b = sh(a);
        "html5" == yh(a) ? a.O = b : b && b.destroy && b.destroy();
        g.Od(a.G);
        kh(a.na);
        a.H = null;
        a.W = null
    };
    g.Ch = function(a, b) {
        a = g.isStr(a) ? g.Bd(a) : a;
        b = g.Rg(b);
        var c = g.Ah + "_" + g.oa(a),
            d = g.Bh[c];
        if (d) return d.Yo(b), d.api;
        d = new nh(a, c);
        g.Bh[c] = d;
        g.z("player-added", d.api);
        g.nb(d, g.u(Kba, d));
        g.wb(function() {
            d.Yo(b)
        }, 0);
        return d.api
    };
    Kba = function(a) {
        g.Bh[a.getId()] = null
    };
    g.Dh = function(a) {
        a = g.D(a);
        if (!a) return null;
        var b = g.Ah + "_" + g.oa(a),
            c = g.Bh[b];
        c || (c = new nh(a, b), g.Bh[b] = c);
        return c.api
    };
    g.Eh = function() {
        return g.B(g.D("page-container"), "remote-connected")
    };
    Lba = function() {
        g.p("yt.abuse.botguardInitialized", Tg, void 0);
        g.p("yt.abuse.invokeBotguard", g.Ug, void 0);
        g.p("yt.abuse.dclkstatus.checkDclkStatus", Vg, void 0);
        g.p("yt.player.exports.navigate", g.Yg, void 0);
        g.p("yt.player.embed", g.Ch, void 0);
        g.p("yt.player.getPlayerByElement", g.Dh, void 0);
        g.p("yt.util.activity.init", g.tf, void 0);
        g.p("yt.util.activity.getTimeSinceActive", g.uf, void 0);
        g.p("yt.util.activity.setTimestamp", sf, void 0);
        var a = g.q("ytplayer.config");
        Fh(a);
        g.q("ytspf.enabled") && (Gh = g.xb(Hh, 5E3), (a = g.Ih()) ? (a.addEventListener("onReady", Hh), a.addEventListener("onStateChange", Hh)) : Jh("unable to init PP monitor"))
    };
    Fh = function(a) {
        for (var b in g.Bh) {
            var c = g.Bh[b];
            c && c.cancel()
        }
        if (a = a || null) {
            b = g.Ih();
            var d = true,
                c = g.Kh;
            g.Kh = null;
            b && b.getVideoData && c && (d = b.getVideoData(), d = !!c.fullscreen || d.video_id != a.args.video_id || d.list != a.args.list || d.video_id != c.videoId || d.list != c.listId);
            d ? (Lh = "", g.Ch("player-api", a)) : b.playVideo();
            a = g.Rg(a);
            a.loaded = true
        }
        Hh();
        g.p("ytplayer.config", a, void 0)
    };
    g.Ih = function() {
        var a = g.q("yt.player.getPlayerByElement");
        return a ? a("player-api") : null
    };
    Hh = function() {
        var a = g.Ih();
        if (a) {
            var b;
            b = g.D("player");
            b = !b || g.B(b, "off-screen");
            var c = 1 == (a && a.isReady() ? a.getPlayerState() : void 0),
                d = "watch" == g.w("PAGE_NAME"),
                e = g.Eh();
            !c || d || e || (Jh("PP playing off watch (paused)"), a.pauseVideo());
            b && d ? Jh("PP off-screen on watch") : b || d || Jh("PP !off-screen off watch")
        }
    };
    Jh = function(a) {
        var b = g.w("PAGE_NAME");
        b && (b = [b, Lh, g.q("_spf_state.nav-counter")], a += "(" + b.join(",") + ")", g.p("yt.www.persistentplayer.issue", a, void 0), g.Ab(Error(a), "WARNING"))
    };
    Nh = function() {
        g.Gf("ol");
        window.requestAnimationFrame && !window.document.hidden ? window.requestAnimationFrame(function() {
            (0, window.setTimeout)(function() {
                g.Gf("cpt")
            }, 0)
        }) : window.document.hidden ? g.Gf("cpt") : (0, window.setTimeout)(function() {
            g.Gf("cpt")
        }, 0);
        Mba();
        g.w("CSI_VIEWPORT") && (Mh = cba(), Mh.then(function(a) {
            g.Gf("vpl", a);
            Mh = null
        }, function() {}))
    };
    Mba = function() {
        Oh("init");
        var a = g.w("PAGE_NAME", void 0);
        a && Oh("init-" + a)
    };
    Oh = function(a) {
        g.Lb() ? Ph.push(g.Mb(g.u(g.Kb, a), 0)) : g.z(a)
    };
    Qh = function() {
        g.Pb(Ph);
        Ph.length = 0;
        for (var a = dg.length, b = 0; b < a; b++) dg[b].cancel();
        hg = gg = dg.length = 0;
        eg = {};
        g.We(fg);
        fg.length = 0;
        Mh && (Mh.cancel(), Mh = null);
        (a = g.w("PAGE_NAME", void 0)) && g.Kb("dispose-" + a);
        g.Kb("dispose")
    };
    Nba = function() {
        Nh()
    };
    Oba = function() {
        g.w("TIMING_REPORT_ON_UNLOAD") && g.Ff(true);
        $f("u");
        g.af();
        Qh();
        g.Kb("pageunload")
    };
    Rh = function() {
        sf()
    };
    Sh = function(a) {
        a = a.detail.url;
        window.yt_spf_loaded_history = true;
        sf();
        var b = g.wf();
        if (b && a) {
            var c = g.Bc(b.visualElement),
                b = {
                    csn: b.clientScreenNonce
                };
            "trackingParams" in c ? b.itct = c.trackingParams : (b.veType = c.veType, b.veCounter = c.veCounter);
            g.Ng(a, b)
        }
    };
    Xh = function() {
        Th = 1;
        Uh = Vh = 0;
        g.w("TIMING_REPORT_ON_UNLOAD") && g.Ff(true);
        if (g.Hc("warm_load_nav_start_web")) {
            $f("n");
            Nf();
            Xf(false);
            g.ub("TIMING_AFT_KEYS", []);
            If("yt_lt", "warm");
            var a = g.w("TIMING_ACTION", void 0);
            g.ub("TIMING_ACTION", "");
            g.ub("TIMING_WAIT", []);
            Jf("n");
            a && If("pa", a)
        } else $f("n"), Nf(), Jf("n");
        zf("nr");
        Wh(Pba);
        g.Kb("navigate")
    };
    ai = function(a) {
        a = a.detail.part || a.detail.partial;
        g.Gf("nc" + Vh);
        ++Vh;
        if (a.data && a.data.deferDispose) "watch" == a.name && g.Gf("bc");
        else {
            var b = 1 == Th;
            Th = 2;
            b ? (Wh(Qba), Yh()) : Wh(Rba);
            if (b = a.data && a.data.swfcfg) Zh(a.timing, b.args), $h(b)
        }
    };
    bi = function() {
        g.Gf("np" + Uh);
        ++Uh
    };
    ci = function(a) {
        a = a.detail.response;
        var b = 1 == Th;
        Th = 3;
        b && (Wh(Sba), Yh());
        if (b = a.data && a.data.swfcfg) Zh(a.timing, b.args), $h(b)
    };
    fi = function(a) {
        g.Gf("nd");
        a = a.detail.response;
        g.di = a.cacheKey;
        a = a.timing;
        var b = window._spf_state;
        If("yt_nav", b && b["nav-counter"] || 0);
        g.Hc("warm_load_nav_start_web") ? g.Gf("srt", a.responseStart) : (Jf("ne", a.responseStart), If("srt", Math.max(0, a.responseStart - a.navigationStart)));
        If("yt_lt", a.spfCached ? "hot" : "warm");
        If("yt_pft", +!!a.spfPrefetched);
        g.Gf("pfs", a.fetchStart);
        g.Gf("pfrs", a.responseStart);
        "redirectStart" in a && Of(a);
        Wh(ei);
        window.document.getElementById("content").style.height = "";
        Nh();
        Th = 0
    };
    ii = function(a) {
        var b = a.detail.url;
        if (a = a.detail.err) a.message && (a.message += " (url: " + b + ")"), g.Ab(a)
    };
    ji = function(a) {
        g.Og(g.bd({
            spfreload: "1",
            url: a.detail.url,
            reason: a.detail.reason
        }))
    };
    Uba = function() {
        Tba();
        g.ub("SERVED_VIA_SPF_HISTORY", !!window.yt_spf_loaded_history);
        window.yt_spf_loaded_history = false
    };
    Vba = function() {};
    Yh = function() {
        var a = window.document.getElementById("content"); - 1 < a.className.indexOf("spf-animate") && (a.style.height = a.clientHeight + "px");
        Qh();
        var a = g.w("TIMING_ACTION"),
            b;
        for (b in g.settingsObject1) delete g.settingsObject1[b];
        g.ub("PREVIOUS_ACTION", a);
        g.p("ytplayer.config", null, void 0);
        if ((b = g.Ih()) && b.stopVideo) {
            if (b.stopVideo(), b = b.getLastError()) Lh = b, (b = g.D("movie_player")) && b.stopVideo ? (b.stopVideo(), Lh = "recovered") : Lh = "missing2"
        } else Lh = "missing";
        Hh()
    };
    $h = function(a) {
        "cfg" in Bf(void 0) || g.Gf("cfg");
        Fh(a)
    };
    Wh = function(a) {
        var b = window.document.getElementById("progress");
        b || (b = window.document.createElement("div"), b.id = "progress", b.appendChild(window.document.createElement("dt")), b.appendChild(window.document.createElement("dd")), window.document.body.appendChild(b));
        g.Ob(ki);
        ki = g.Nb(function() {
            var c = a[0],
                d = a[1],
                e = a[2];
            b.className = "";
            var h = b.style;
            h.transitionDuration = h.webkitTransitionDuration = c + "ms";
            h.width = d + "%";
            g.yb(li);
            li = g.wb(function() {
                b.className = e
            }, c)
        }, 0)
    };
    Tba = function() {
        var a = ei[0] + 50;
        g.yb(li);
        li = g.wb(function() {
            var a = window.document.getElementById("progress");
            a && a.parentNode.removeChild(a)
        }, a)
    };
    Zh = function(a, b) {
        var c = a && a.spfCached;
        a = a && a.spfPrefetched;
        var d = [];
        c && !a && (0, g.y)(Wba, function(a) {
            a in b && (delete b[a], d.push(a))
        });
        g.w("EXP_DEBUG_PREFETCH") && (d.sort(), c = {
            a: "removeNonCacheableVideoVars",
            cached: c,
            prefetched: a,
            deleted: d.join("")
        }, g.Og(g.bd(c)))
    };
    ni = function(a, b) {
        var c = {};
        c.key = a;
        c.value = b;
        mi().then(function(a) {
            return new window.Promise(function(b, d) {
                var e = a.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
                e.onsuccess = b;
                e.onerror = d
            })
        })
    };
    Xba = function() {
        return mi().then(function(a) {
            return new window.Promise(function(b, c) {
                var d = a.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get("HideTicker");
                d.onsuccess = function() {
                    var a = d.result;
                    b(a ? a.value : null)
                };
                d.onerror = function() {
                    c('Unable to get key "HideTicker" from object store.')
                }
            })
        }, function() {
            return window.Promise.reject("Unable to open IndexedDB.")
        })
    };
    mi = function() {
        return oi ? window.Promise.resolve(oi) : new window.Promise(function(a, b) {
            var c = window.indexedDB.open("swpushnotificationsdb");
            c.onerror = b;
            c.onsuccess = function() {
                var b = c.result;
                if (b.objectStoreNames.contains("swpushnotificationsstore")) oi = b, a(oi);
                else return window.indexedDB.deleteDatabase("swpushnotificationsdb"), mi()
            };
            c.onupgradeneeded = Yba
        })
    };
    Yba = function(a) {
        a = a.target.result;
        a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
        a.createObjectStore("swpushnotificationsstore", {
            keyPath: "key"
        })
    };
    pi = function() {
        return window.navigator.serviceWorker.getRegistration(Ic()).then(function(a) {
            return a ? a.pushManager.getSubscription().then(function(b) {
                return b ? window.Promise.resolve() : a.pushManager.subscribe({
                    userVisibleOnly: true
                }).then(function() {
                    return window.Promise.resolve()
                }, function() {
                    return window.Promise.resolve()
                })
            }) : window.Promise.resolve()
        })
    };
    ri = function() {
        qi({
            type: "notifications_register",
            data: g.w("ID_TOKEN")
        })
    };
    Zba = function() {
        qi({
            type: "notifications_check_registration",
            data: g.w("ID_TOKEN")
        })
    };
    qi = function(a) {
        window.navigator.serviceWorker.getRegistration(Ic()).then(function(b) {
            if (!b || !b.active) return window.Promise.reject();
            b.active.postMessage(a);
            return window.Promise.resolve()
        })
    };
    bca = function() {
        g.w("LOGGED_IN", void 0) && (g.Hc("service_worker_push_ticker_enabled") ? $ba().then(function(a) {
            if (a && (a = si())) {
                var b = ti();
                if (b) {
                    var c;
                    if (c = (c = si()) ? c.querySelector(".yt-uix-button-close") : null) g.G(b, "click", ui), g.G(c, "click", aca), a.classList.add("show")
                }
            }
        }) : ui())
    };
    ui = function() {
        return window.Notification.requestPermission().then(function(a) {
            var b = window.document.getElementById("ticker");
            b && (b.className = b.classList.remove("show"));
            if ("granted" == a) return pi().then(function() {
                ni("NotificationsDisabled", false)
            }).then(function() {
                ri();
                return window.Promise.resolve(true)
            });
            "denied" == a && ri();
            return window.Promise.resolve(false)
        })
    };
    aca = function() {
        ni("HideTicker", (0, g.C)())
    };
    $ba = function() {
        return Xba().then(function(a) {
            return (0, g.C)() > a + 2592E6
        })
    };
    si = function() {
        var a = window.document.getElementById("ticker");
        return a && "TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT" == g.A(a, "trigger-condition") ? a : null
    };
    ti = function() {
        var a = si();
        return a ? a.querySelector(".yt-uix-button-alert-info") : null
    };
    cca = function(a) {
        g.vi && !g.wi && !g.xi && !g.zi && window.navigator.serviceWorker && window.navigator.serviceWorker.getRegistration && a && a.pushManager && ("default" != window.Notification.permission ? pi().then(Zba) : g.w("SERVICE_WORKER_PROMPT_NOTIFICATIONS", void 0) && bca())
    };
    eca = function() {
        var a = "/sw.js",
            b = g.w("SERVICE_WORKER_VFL", void 0);
        b && (a += "?vfl=" + b);
        a = window.navigator.serviceWorker.register(a, {
            scope: Ic() || "/"
        });
        g.Hc("service_worker_push_enabled") && a.then(dca).then(cca)
    };
    dca = function(a) {
        var b = a.installing || a.waiting;
        return a.active || !b ? window.Promise.resolve(a) : new window.Promise(function(c) {
            function d(e) {
                if ("activated" == e.target.state || "redundant" == e.target.state) b.removeEventListener("statechange", d), c(a)
            }
            b.addEventListener("statechange", d)
        })
    };
    fca = function(a) {
        a && window.navigator.serviceWorker.register("/sw.js?0", {
            scope: a.scope || Ic() || "/"
        })
    };
    gca = function() {
        window.navigator.serviceWorker.getRegistrations().then(function(a) {
            a.forEach(fca)
        })
    };
    Ai = function() {
        g.Qb.call(this, "www/base");
        this.D = 0
    };
    Bi = function(a) {
        (a = a.detail.name) && Tb(a)
    };
    g.aa = [];
    g.Ci = g.Ci || {};
    g.bigThis = this;
    na = "closure_uid_" + (1E9 * Math.random() >>> 0);
    aaa = 0;
    g.C = Date.now || function() {
        return +new Date
    };
    g.pa[" "] = g.emptyFunction;
    g.v(g.ta, Error);
    g.ta.prototype.name = "CustomError";
    var eaa, faa, gaa, haa, iaa, jaa, daa;
    g.Ba = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    eaa = /&/g;
    faa = /</g;
    gaa = />/g;
    haa = /"/g;
    iaa = /'/g;
    jaa = /\x00/g;
    daa = /[\x00&<>"']/;
    g.Di = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    g.hca = 2147483648 * Math.random() | 0;
    g.Ia = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (g.isStr(a)) return g.isStr(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    g.ica = Array.prototype.lastIndexOf ? function(a, b, c) {
        return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
    } : function(a, b, c) {
        c = null == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (g.isStr(a)) return g.isStr(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
        for (; 0 <= c; c--)
            if (c in a && a[c] === b) return c;
        return -1
    };
    g.y = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = g.isStr(a) ? a.split("") : a, h = 0; h < d; h++) h in e && b.call(c, e[h], h, a)
    };
    g.Ei = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], h = 0, k = g.isStr(a) ? a.split("") : a, l = 0; l < d; l++)
            if (l in k) {
                var n = k[l];
                b.call(c, n, l, a) && (e[h++] = n)
            }
        return e
    };
    g.Tf = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), h = g.isStr(a) ? a.split("") : a, k = 0; k < d; k++) k in h && (e[k] = b.call(c, h[k], k, a));
        return e
    };
    g.Fi = Array.prototype.reduce ? function(a, b, c, d) {
        d && (b = (0, g.r)(b, d));
        return Array.prototype.reduce.call(a, b, c)
    } : function(a, b, c, d) {
        var e = c;
        (0, g.y)(a, function(c, k) {
            e = b.call(d, e, c, k, a)
        });
        return e
    };
    g.Gi = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = g.isStr(a) ? a.split("") : a, h = 0; h < d; h++)
            if (h in e && b.call(c, e[h], h, a)) return true;
        return false
    };
    g.Hi = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = g.isStr(a) ? a.split("") : a, h = 0; h < d; h++)
            if (h in e && !b.call(c, e[h], h, a)) return false;
        return true
    };
    g.willReturnNotOne = g.getCallbackThatReturnsGivenArg(false);
    g.willReturnNotZero = g.getCallbackThatReturnsGivenArg(true);
    g.willReturnNull = g.getCallbackThatReturnsGivenArg(null);
    var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    a: {
        var Li = g.bigThis.navigator;
        if (Li) {
            var Mi = Li.userAgent;
            if (Mi) {
                g.Xa = Mi;
                break a
            }
        }
        g.Xa = ""
    };
    var lb;
    bb.prototype.get = function() {
        var a;
        0 < this.F ? (this.F--, a = this.C, this.C = a.next, a.next = null) : a = this.D();
        return a
    };
    var ib = new bb(function() {
        return new eb
    }, function(a) {
        a.reset()
    }, 100);
    db.prototype.remove = function() {
        var a = null;
        this.C && (a = this.C, this.C = this.C.next, this.C || (this.F = null), a.next = null);
        return a
    };
    eb.prototype.set = function(a, b) {
        this.Bc = a;
        this.scope = b;
        this.next = null
    };
    eb.prototype.reset = function() {
        this.next = this.scope = this.Bc = null
    };
    var fb, gb = false,
        hb = new db;
    g.mb.prototype.ud = false;
    g.mb.prototype.ob = function() {
        return this.ud
    };
    g.mb.prototype.dispose = function() {
        this.ud || (this.ud = true, this.$())
    };
    g.mb.prototype.$ = function() {
        if (this.Kb)
            for (; this.Kb.length;) this.Kb.shift()()
    };
    g.v(g.qb, g.mb);
    g.spatialHelper = g.qb.prototype;
    g.spatialHelper.subscribe = function(a, b, c) {
        var d = this.Cd[a];
        d || (d = this.Cd[a] = []);
        var e = this.G;
        this.C[e] = a;
        this.C[e + 1] = b;
        this.C[e + 2] = c;
        this.G = e + 3;
        d.push(e);
        return e
    };
    g.spatialHelper.unsubscribe = function(a, b, c) {
        if (a = this.Cd[a]) {
            var d = this.C;
            if (a = g.Ha(a, function(a) {
                    return d[a + 1] == b && d[a + 2] == c
                })) return this.Te(a)
        }
        return false
    };
    g.spatialHelper.Te = function(a) {
        var b = this.C[a];
        if (b) {
            var c = this.Cd[b];
            0 != this.D ? (this.F.push(a), this.C[a + 1] = g.emptyFunction) : (c && g.La(c, a), delete this.C[a], delete this.C[a + 1], delete this.C[a + 2])
        }
        return !!b
    };
    g.spatialHelper.ab = function(a, b) {
        var c = this.Cd[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, h = arguments.length; e < h; e++) d[e - 1] = arguments[e];
            if (this.H)
                for (e = 0; e < c.length; e++) {
                    var k = c[e];
                    maa(this.C[k + 1], this.C[k + 2], d)
                } else {
                    this.D++;
                    try {
                        for (e = 0, h = c.length; e < h; e++) k = c[e], this.C[k + 1].apply(this.C[k + 2], d)
                    } finally {
                        if (this.D--, 0 < this.F.length && 0 == this.D)
                            for (; c = this.F.pop();) this.Te(c)
                    }
                }
            return 0 != e
        }
        return false
    };
    g.spatialHelper.clear = function(a) {
        if (a) {
            var b = this.Cd[a];
            b && ((0, g.y)(b, this.Te, this), delete this.Cd[a])
        } else this.C.length = 0, this.Cd = {}
    };
    g.spatialHelper.wb = g.ba(3);
    g.spatialHelper.$ = function() {
        g.qb.M.$.call(this);
        this.clear();
        this.F.length = 0
    };
    g.settingsObject1 = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    g.p("yt.config_", g.settingsObject1, void 0);
    g.p("yt.tokens_", window.yt && window.yt.tokens_ || {}, void 0);
    g.Bb = window.yt && window.yt.msgs_ || g.q("window.ytcfg.msgs") || {};
    g.p("yt.msgs_", g.Bb, void 0);
    g.ff = window.performance && window.performance.timing && window.performance.now ? function() {
        return window.performance.timing.navigationStart + window.performance.now()
    } : function() {
        return (new Date).getTime()
    };
    g.isIE = "Microsoft Internet Explorer" == window.navigator.appName;
    var jca = g.q("yt.pubsub.instance_") || new g.qb;
    g.qb.prototype.subscribe = g.qb.prototype.subscribe;
    g.qb.prototype.unsubscribeByKey = g.qb.prototype.Te;
    g.qb.prototype.publish = g.qb.prototype.ab;
    g.qb.prototype.clear = g.qb.prototype.clear;
    g.p("yt.pubsub.instance_", jca, void 0);
    var Fb = g.q("yt.pubsub.subscribedKeys_") || {};
    g.p("yt.pubsub.subscribedKeys_", Fb, void 0);
    var Hb = g.q("yt.pubsub.topicToKeys_") || {};
    g.p("yt.pubsub.topicToKeys_", Hb, void 0);
    var Gb = g.q("yt.pubsub.isSynchronous_") || {};
    g.p("yt.pubsub.isSynchronous_", Gb, void 0);
    var Eb = g.q("yt.pubsub.skipSubId_") || null;
    g.p("yt.pubsub.skipSubId_", Eb, void 0);
    g.spatialHelper = g.Qb.prototype;
    g.spatialHelper.zO = function() {
        this.kk() || this.init()
    };
    g.spatialHelper.enable = function() {
        this.initState = 1;
        (0, g.y)("string" == typeof this.page ? [this.page] : this.page, function(a) {
            a && (this.subscribe("init-" + a, this.zO, this), this.subscribe("dispose-" + a, this.dispose, this), g.w("PAGE_NAME") == a && g.Rb(this))
        }, this)
    };
    g.spatialHelper.init = function() {
        g.Ob(this.F);
        this.initState = 2;
        this.K && this.K()
    };
    g.spatialHelper.kk = function() {
        return 2 == this.initState
    };
    g.spatialHelper.dispose = function() {
        this.initState = 3;
        g.Ob(this.F);
        this.H && this.H()
    };
    g.spatialHelper.disable = function() {
        this.initState = 4;
        this.clear();
        try {
            this.dispose()
        } catch (a) {
            g.Ab(a)
        }
    };
    g.spatialHelper.subscribe = function(a, b, c) {
        a = g.Ib(a, b, c);
        this.G.push(a);
        return a
    };
    g.spatialHelper.clear = function() {
        g.Jb(this.G);
        this.G = []
    };
    var Sb = g.q("yt.modules.registry_") || {};
    g.p("yt.modules.registry_", Sb, void 0);
    g.Wb.prototype.vg = true;
    g.Wb.prototype.kf = function() {
        return this.C
    };
    g.Wb.prototype.toString = function() {
        return "Const{" + this.C + "}"
    };
    g.Vb = {};
    g.Xb("");
    g.Zb.prototype.vg = true;
    g.Yb = {};
    g.Zb.prototype.kf = function() {
        return this.C
    };
    g.Ni = g.$b("");
    g.addressInfo.prototype.vg = true;
    g.addressInfo.prototype.getUrl = function() {
        return this.url
    };
    g.addressInfo.prototype.Ym = true;
    g.addressInfo.prototype.ff = g.ba(5);
    var oaa = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        dict = {};
    g.constructAddressInfoWithUrl("about:blank");
    g.gc.prototype.Ym = true;
    g.gc.prototype.ff = g.ba(4);
    g.gc.prototype.vg = true;
    g.gc.prototype.kf = function() {
        return this.C
    };
    g.fc = {};
    g.kca = g.hc("<!DOCTYPE html>", 0);
    g.Oi = g.hc("", 0);
    g.Pi = g.hc("<br>", 0);
    var lc = {};
    var paa = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/,
        qaa = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;
    g.rc.prototype.fc = function(a) {
        var b = [];
        tc(this, a, b);
        return b.join("")
    };
    var vc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        raa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    g.spatialHelper = g.size.prototype;
    g.spatialHelper.clone = function() {
        return new g.size(this.width, this.height)
    };
    g.spatialHelper.area = function() {
        return this.width * this.height
    };
    g.spatialHelper.aspectRatio = function() {
        return this.width / this.height
    };
    g.spatialHelper.isEmpty = function() {
        return !this.area()
    };
    g.spatialHelper.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.spatialHelper.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.spatialHelper.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    g.spatialHelper.scale = function(a, b) {
        b = g.isANumber(b) ? b : a;
        this.width *= a;
        this.height *= b;
        return this
    };
    g.zc.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = false, this.event.preventDefault && this.event.preventDefault())
    };
    g.zc.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = true, this.event.stopPropagation && this.event.stopPropagation())
    };
    g.zc.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = true, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
    var taa = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };
    g.Cc.prototype.fc = function() {
        return {
            version: this.version,
            args: this.args
        }
    };
    g.Dc.prototype.toString = function() {
        return this.topic
    };
    var yf = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
    var Ec = "closure_listenable_" + (1E6 * Math.random() | 0),
        uaa = 0;
    g.Gc.prototype.set = function(a, b) {
        g.isNotDefined(b) ? this.C.set(a, g.sc(b)) : this.C.remove(a)
    };
    g.Gc.prototype.get = function(a) {
        var b;
        try {
            b = this.C.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return g.qc(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    g.Gc.prototype.remove = function(a) {
        this.C.remove(a)
    };
    g.v(Lc, g.Cc);
    var Xaa = new g.Dc("timing-sent", Lc);
    g.Mc.prototype.stopPropagation = function() {
        this.Cg = true
    };
    g.Mc.prototype.preventDefault = function() {
        this.defaultPrevented = true;
        this.Sv = false
    };
    g.v(Qc, g.Gc);
    Qc.prototype.set = function(a, b) {
        Qc.M.set.call(this, a, Sc(b))
    };
    Qc.prototype.F = function(a) {
        a = Qc.M.get.call(this, a);
        if (!g.isNotDefined(a) || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    Qc.prototype.get = function(a) {
        if (a = this.F(a)) {
            if (a = a.data, !g.isNotDefined(a)) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };
    g.Vc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    ed.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.C)) return false;
        var e = this.C[a];
        b = fd(e, b, c, d);
        return -1 < b ? (Nc(e[b]), g.Ka(e, b), 0 == e.length && (delete this.C[a], this.F--), true) : false
    };
    ed.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.C)
            if (!a || c == a) {
                for (var d = this.C[c], e = 0; e < d.length; e++) ++b, Nc(d[e]);
                delete this.C[c];
                this.F--
            }
        return b
    };
    g.v(g.jd, Qc);
    g.jd.prototype.set = function(a, b, c) {
        if (b = Sc(b)) {
            if (c) {
                if (c < (0, g.C)()) {
                    g.jd.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = (0, g.C)()
        }
        g.jd.M.set.call(this, a, b)
    };
    g.jd.prototype.F = function(a, b) {
        var c = g.jd.M.F.call(this, a);
        if (c)
            if (!b && g.kd(c)) g.jd.prototype.remove.call(this, a);
            else return c
    };
    var Zf = (0, g.C)().toString();
    g.md = "StopIteration" in g.bigThis ? g.bigThis.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    g.ld.prototype.next = function() {
        throw g.md;
    };
    g.ld.prototype.yc = function() {
        return this
    };
    g.spatialHelper = g.coord.prototype;
    g.spatialHelper.clone = function() {
        return new g.coord(this.x, this.y)
    };
    g.spatialHelper.equals = function(a) {
        return a instanceof g.coord && g.rd(this, a)
    };
    g.spatialHelper.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    g.spatialHelper.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    g.spatialHelper.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    g.spatialHelper.translate = function(a, b) {
        a instanceof g.coord ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), g.isANumber(b) && (this.y += b));
        return this
    };
    g.spatialHelper.scale = function(a, b) {
        b = g.isANumber(b) ? b : a;
        this.x *= a;
        this.y *= b;
        return this
    };
    var Wi, waa, aj;
    g.Qi = g.Ya("Opera");
    g.F = g.Za();
    g.Ri = g.Ya("Edge");
    g.Si = g.Ri || g.F;
    g.Ti = g.Ya("Gecko") && !(g.isSubStrOf(g.Xa.toLowerCase(), "webkit") && !g.Ya("Edge")) && !(g.Ya("Trident") || g.Ya("MSIE")) && !g.Ya("Edge");
    g.Jd = g.isSubStrOf(g.Xa.toLowerCase(), "webkit") && !g.Ya("Edge");
    g.Jd && g.Ya("Mobile");
    g.Ui = g.Ya("Macintosh");
    g.Vi = g.Ya("Windows");
    g.lca = g.Ya("Linux") || g.Ya("CrOS");
    Wi = g.bigThis.navigator || null;
    Wi && g.isSubStrOf(Wi.appVersion || "", "X11");
    g.mca = g.Ya("Android");
    g.xi = Oc();
    g.zi = g.Ya("iPad");
    g.nca = g.Ya("iPod");
    g.Pc();
    var Xi;
    a: {
        var Yi = "",
            Zi = function() {
                var a = g.Xa;
                if (g.Ti) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (g.Ri) return /Edge\/([\d\.]+)/.exec(a);
                if (g.F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (g.Jd) return /WebKit\/(\S+)/.exec(a);
                if (g.Qi) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        Zi && (Yi = Zi ? Zi[1] : "");
        if (g.F) {
            var $i = sd();
            if (null != $i && $i > (0, window.parseFloat)(Yi)) {
                Xi = String($i);
                break a
            }
        }
        Xi = Yi
    }
    g.td = Xi;
    waa = {};
    var bj = g.bigThis.document;
    aj = bj && g.F ? sd() || ("CSS1Compat" == bj.compatMode ? (0, window.parseInt)(g.td, 10) : 5) : void 0;
    g.vd = aj;
    var xaa;
    xaa = !g.F || g.wd(9);
    g.oca = !g.Ti && !g.F || g.F && g.wd(9) || g.Ti && g.ud("1.9.1");
    g.cj = g.F && !g.ud("9");
    g.pca = g.F || g.Qi || g.Jd;
    g.qca = g.F && !g.wd(9);
    var xe, sca;
    g.rca = !g.F || g.wd(9);
    xe = !g.F || g.wd(9);
    sca = g.F && !g.ud("9");
    !g.Jd || g.ud("528");
    g.Ti && g.ud("1.9b") || g.F && g.ud("8") || g.Qi && g.ud("9.5") || g.Jd && g.ud("528");
    g.Ti && !g.ud("8") || g.F && g.ud("9");
    g.dj = g.F ? "focusin" : "DOMFocusIn";
    g.ej = g.F ? "focusout" : "DOMFocusOut";
    g.fj = g.Jd ? "webkitTransitionEnd" : g.Qi ? "otransitionend" : "transitionend";
    g.spatialHelper = g.xd.prototype;
    g.spatialHelper.getWidth = function() {
        return this.right - this.left
    };
    g.spatialHelper.getHeight = function() {
        return this.bottom - this.top
    };
    g.spatialHelper.clone = function() {
        return new g.xd(this.top, this.right, this.bottom, this.left)
    };
    g.spatialHelper.contains = function(a) {
        return g.yd(this, a)
    };
    g.spatialHelper.expand = function(a, b, c, d) {
        g.isObjectOrFunction(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    g.spatialHelper.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    g.spatialHelper.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    g.spatialHelper.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    g.spatialHelper.translate = function(a, b) {
        a instanceof g.coord ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, g.isANumber(b) && (this.top += b, this.bottom += b));
        return this
    };
    g.spatialHelper.scale = function(a, b) {
        b = g.isANumber(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    g.v(g.zd, g.jd);
    g.v(g.Ad, saa);
    g.Ad.prototype.wb = g.ba(2);
    g.Ad.prototype.clear = function() {
        var a = g.pd(this.yc(true)),
            b = this;
        (0, g.y)(a, function(a) {
            b.remove(a)
        })
    };
    g.mh = g.Ya("Firefox");
    g.gj = Oc() || g.Ya("iPod");
    g.hj = g.Ya("iPad");
    g.wi = g.Ya("Android") && !(g.$a() || g.Ya("Firefox") || g.Ya("Opera") || g.Ya("Silk"));
    g.vi = g.$a();
    g.ij = g.Ya("Safari") && !(g.$a() || g.Ya("Coast") || g.Ya("Opera") || g.Ya("Edge") || g.Ya("Silk") || g.Ya("Android")) && !g.Pc();
    g.tca = g.Ti || g.Jd && !g.ij || g.Qi || "function" == typeof g.bigThis.btoa;
    var Cd = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    g.v(g.Ud, g.Mc);
    g.Ud.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? g.Ti && (g.qa(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        null === d ? (this.offsetX = g.Jd || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = g.Jd || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ?
            a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Tn = g.Ui ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.zb = a;
        a.defaultPrevented && this.preventDefault()
    };
    g.Ud.prototype.stopPropagation = function() {
        g.Ud.M.stopPropagation.call(this);
        this.zb.stopPropagation ? this.zb.stopPropagation() : this.zb.cancelBubble = true
    };
    g.Ud.prototype.preventDefault = function() {
        g.Ud.M.preventDefault.call(this);
        var a = this.zb;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = false, sca) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    g.Ud.prototype.dr = g.ba(6);
    g.spatialHelper = g.Vd.prototype;
    g.spatialHelper.clone = function() {
        return new g.Vd(this.left, this.top, this.width, this.height)
    };
    g.spatialHelper.contains = function(a) {
        return a instanceof g.coord ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    g.spatialHelper.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.spatialHelper.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.spatialHelper.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    g.spatialHelper.translate = function(a, b) {
        a instanceof g.coord ? (this.left += a.x, this.top += a.y) : (this.left += a, g.isANumber(b) && (this.top += b));
        return this
    };
    g.spatialHelper.scale = function(a, b) {
        b = g.isANumber(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    $d.prototype.reset = function() {
        this.context = this.F = this.D = this.C = null;
        this.G = false
    };
    var ae = new bb(function() {
        return new $d
    }, function(a) {
        a.reset()
    }, 100);
    g.Zd.prototype.then = function(a, b, c) {
        return ee(this, g.isAFunction(a) ? a : null, g.isAFunction(b) ? b : null, c)
    };
    g.xc(g.Zd);
    g.Zd.prototype.cancel = function(a) {
        0 == this.C && jb(function() {
            var b = new g.le(a);
            ge(this, b)
        }, this)
    };
    g.Zd.prototype.W = function(a) {
        this.C = 0;
        g.Yd(this, 2, a)
    };
    g.Zd.prototype.ia = function(a) {
        this.C = 0;
        g.Yd(this, 3, a)
    };
    g.Zd.prototype.J = function() {
        for (var a; a = he(this);) ie(this, a, this.C, this.N);
        this.K = false
    };
    var oe = ab;
    g.v(g.le, g.ta);
    g.le.prototype.name = "cancel";
    g.v(g.pe, g.Ad);
    g.spatialHelper = g.pe.prototype;
    g.spatialHelper.isAvailable = function() {
        if (!this.C) return false;
        try {
            return this.C.setItem("__sak", "1"), this.C.removeItem("__sak"), true
        } catch (a) {
            return false
        }
    };
    g.spatialHelper.set = function(a, b) {
        try {
            this.C.setItem(a, b)
        } catch (c) {
            if (0 == this.C.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    g.spatialHelper.get = function(a) {
        a = this.C.getItem(a);
        if (!g.isStr(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    g.spatialHelper.remove = function(a) {
        this.C.removeItem(a)
    };
    g.spatialHelper.wb = g.ba(1);
    g.spatialHelper.yc = function(a) {
        var b = 0,
            c = this.C,
            d = new g.ld;
        d.next = function() {
            if (b >= c.length) throw g.md;
            var d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            if (!g.isStr(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    g.spatialHelper.clear = function() {
        this.C.clear()
    };
    g.spatialHelper.key = function(a) {
        return this.C.key(a)
    };
    var ue = "closure_lm_" + (1E6 * Math.random() | 0),
        Ae = {},
        we = 0,
        De = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    g.v(g.Fe, g.pe);
    g.v(Ge, g.pe);
    var Gaa = g.Jd ? "webkit" : g.Ti ? "moz" : g.F ? "ms" : g.Qi ? "o" : "",
        He = g.q("yt.dom.getNextId_");
    if (!He) {
        He = function() {
            return ++uca
        };
        g.p("yt.dom.getNextId_", He, void 0);
        var uca = 0
    };
    var vca = g.q("yt.pubsub2.instance_") || new g.qb;
    g.qb.prototype.subscribe = g.qb.prototype.subscribe;
    g.qb.prototype.unsubscribeByKey = g.qb.prototype.Te;
    g.qb.prototype.publish = g.qb.prototype.ab;
    g.qb.prototype.clear = g.qb.prototype.clear;
    g.p("yt.pubsub2.instance_", vca, void 0);
    g.jj = g.q("yt.pubsub2.subscribedKeys_") || {};
    g.p("yt.pubsub2.subscribedKeys_", g.jj, void 0);
    g.kj = g.q("yt.pubsub2.topicToKeys_") || {};
    g.p("yt.pubsub2.topicToKeys_", g.kj, void 0);
    g.lj = g.q("yt.pubsub2.isAsync_") || {};
    g.p("yt.pubsub2.isAsync_", g.lj, void 0);
    g.p("yt.pubsub2.skipSubKey_", null, void 0);
    Pe.prototype.toString = function() {
        return this.region.toString() + ": " + this.timing + " => " + this.url
    };
    Qe.prototype.toString = function() {
        return ["progress", this.progress, "timing", this.timing, "area", this.area].join(": ")
    };
    Oe.F = .1;
    Oe.C = /url\(["']?(http[^'"\)]+)['"]?\)/i;
    Oe.D = "mark_iframe_loaded: ";
    Oe.G = 20;
    g.v(g.Re, g.mb);
    g.Re.prototype[Ec] = true;
    g.spatialHelper = g.Re.prototype;
    g.spatialHelper.Gj = function() {
        return this.Yi
    };
    g.spatialHelper.Ki = g.ba(7);
    g.spatialHelper.addEventListener = function(a, b, c, d) {
        g.qe(this, a, b, c, d)
    };
    g.spatialHelper.removeEventListener = function(a, b, c, d) {
        g.ye(this, a, b, c, d)
    };
    g.spatialHelper.dispatchEvent = function(a) {
        var b, c = this.Gj();
        if (c) {
            b = [];
            for (var d = 1; c; c = c.Gj()) b.push(c), ++d
        }
        c = this.oy;
        d = a.type || a;
        if (g.isStr(a)) a = new g.Mc(a, c);
        else if (a instanceof g.Mc) a.target = a.target || c;
        else {
            var e = a;
            a = new g.Mc(d, c);
            g.Wa(a, e)
        }
        var e = true,
            h;
        if (b)
            for (var k = b.length - 1; !a.Cg && 0 <= k; k--) h = a.currentTarget = b[k], e = Se(h, d, true, a) && e;
        a.Cg || (h = a.currentTarget = c, e = Se(h, d, true, a) && e, a.Cg || (e = Se(h, d, false, a) && e));
        if (b)
            for (k = 0; !a.Cg && k < b.length; k++) h = a.currentTarget = b[k], e = Se(h, d, false, a) && e;
        return e
    };
    g.spatialHelper.$ = function() {
        g.Re.M.$.call(this);
        this.removeAllListeners();
        this.Yi = null
    };
    g.spatialHelper.R = function(a, b, c, d) {
        return g.gd(this.ia, String(a), b, false, c, d)
    };
    g.spatialHelper.$a = function(a, b, c, d) {
        return this.ia.remove(String(a), b, c, d)
    };
    g.spatialHelper.removeAllListeners = function(a) {
        return this.ia ? this.ia.removeAll(a) : 0
    };
    var Te = g.q("yt.events.listeners_") || {};
    g.p("yt.events.listeners_", Te, void 0);
    var Ve = g.q("yt.events.counter_") || {
        count: 0
    };
    g.p("yt.events.counter_", Ve, void 0);
    var Jaa, $e;
    Jaa = {
        log_event: "events",
        log_interaction: "interactions"
    };
    g.ef = {};
    $e = {};
    g.df = 0;
    g.Ze = g.q("yt.logging.transport.logsQueue_") || {};
    g.p("yt.logging.transport.logsQueue_", g.Ze, void 0);
    var jf = {},
        Laa = 0;
    var mj, nj;
    mj = new g.Fe;
    g.lf = mj.isAvailable() ? new g.zd(mj) : null;
    nj = new Ge;
    g.kf = nj.isAvailable() ? new g.zd(nj) : null;
    var qf = null;
    rf.prototype.G = function() {
        var a = g.q("gapi.config.update");
        a("googleapis.config/auth/useFirstPartyAuth", true);
        var b = this.D.apiaryHost;
        g.isKindOfWhiteSpace(g.replaceIfNullWithEmptyStr(b)) || a("googleapis.config/root", (-1 == b.indexOf("://") ? "//" : "") + b);
        b = this.D.Lp;
        g.isKindOfWhiteSpace(g.replaceIfNullWithEmptyStr(b)) || a("googleapis.config/root-1p", (-1 == b.indexOf("://") ? "//" : "") + b);
        a("googleapis.config/sessionIndex", g.w("SESSION_INDEX"));
        g.q("gapi.client.setApiKey")(this.D.innertubeApiKey)
    };
    rf.prototype.C = function() {
        return {
            context: g.Kc(this.D)
        }
    };
    rf.prototype.F = function(a, b, c) {
        var d, e = false;
        0 < c.timeout && (d = g.wb(function() {
            e || (e = true, c.Yb && c.Yb())
        }, c.timeout));
        Naa(this, a, b, function(a) {
            if (!e)
                if (e = true, d && g.yb(d), a) c.aa && c.aa(a);
                else if (c.onError) c.onError()
        })
    };
    g.v(g.vf, g.mb);
    g.spatialHelper = g.vf.prototype;
    g.spatialHelper.Cb = 0;
    g.spatialHelper.$ = function() {
        g.vf.M.$.call(this);
        this.stop();
        delete this.C;
        delete this.F
    };
    g.spatialHelper.start = function(a) {
        this.stop();
        this.Cb = g.nf(this.Oc, g.isNotDefined(a) ? a : this.D)
    };
    g.spatialHelper.stop = function() {
        this.isActive() && g.of(this.Cb);
        this.Cb = 0
    };
    g.spatialHelper.isActive = function() {
        return 0 != this.Cb
    };
    g.spatialHelper.xm = function() {
        this.Cb = 0;
        this.C && this.C.call(this.F)
    };
    var Vaa = {
            vc: true
        },
        Rf = {
            'script[name="scheduler/scheduler"]': "sj",
            'script[name="player/base"]': "pj",
            'link[rel="stylesheet"][name="www-player"]': "pc",
            'script[name="desktop_polymer/desktop_polymer"]': "dpj",
            'link[rel="import"][name="desktop_polymer"]': "dph",
            'script[name="desktop_polymer_nohtmlinline/desktop_polymer_nohtmlinline"]': "dpj",
            'script[data-timing-href$="desktop_polymer_nohtmlinline.html"]': "dph",
            'script[name="mobile_polymer/mobile_polymer"]': "mpj",
            'link[rel="import"][name="mobile_polymer"]': "mph",
            'script[name="player-plasma-phone/base"]': "mpppj",
            'script[name="player-plasma-tablet/base"]': "mpptj",
            'link[rel="stylesheet"][name="mobile-polymer-player"]': "mppc"
        },
        Kf = {
            ad_at: "adType",
            cpn: "clientPlaybackNonce",
            csn: "clientScreenNonce",
            yt_lt: "loadType",
            yt_ad: "isMonetized",
            yt_ad_pr: "prerollAllowed",
            yt_red: "isRedSubscriber",
            yt_vis: "isVisible"
        },
        Taa = {
            ad_to_video: "LATENCY_ACTION_AD_TO_VIDEO",
            browse: "LATENCY_ACTION_BROWSE",
            channels: "LATENCY_ACTION_CHANNELS",
            channels4: "LATENCY_ACTION_CHANNELS",
            embed: "LATENCY_ACTION_EMBED",
            gli: "LATENCY_ACTION_HOME",
            glo: "LATENCY_ACTION_HOME",
            home: "LATENCY_ACTION_HOME",
            results: "LATENCY_ACTION_RESULTS",
            video_to_ad: "LATENCY_ACTION_VIDEO_TO_AD",
            watch: "LATENCY_ACTION_WATCH",
            "watch,watch7": "LATENCY_ACTION_WATCH",
            "watch,watch7_html5": "LATENCY_ACTION_WATCH",
            "watch,watch7ad": "LATENCY_ACTION_WATCH",
            "watch,watch7ad_html5": "LATENCY_ACTION_WATCH"
        },
        Paa = ["isMonetized", "prerollAllowed", "isRedSubscriber", "isVisible"],
        Qaa = (0, g.r)(yf.clearResourceTimings || yf.webkitClearResourceTimings || yf.mozClearResourceTimings ||
            yf.msClearResourceTimings || yf.oClearResourceTimings || g.emptyFunction, yf);
    var fg = [],
        gg = 0,
        hg = 0,
        dg = [],
        ag = 0,
        eg = {},
        bg = new g.vf(dba, 1E3);
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var Ig = window,
        zg = window.document,
        iba = Ig.location,
        hba = /\[native code\]/,
        Fg = ig(Ig, "gapi", {});
    g.lg = /\s*;\s*/;
    g.spatialHelper = g.kg.prototype;
    g.spatialHelper.isEnabled = function() {
        return window.navigator.cookieEnabled
    };
    g.spatialHelper.set = function(a, b, c, d, e, h) {
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        g.isNotDefined(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        h = h ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, g.C)() + 1E3 * c)).toUTCString();
        this.C.cookie = a + "=" + b + e + d + c + h
    };
    g.spatialHelper.get = function(a, b) {
        for (var c = a + "=", d = (this.C.cookie || "").split(g.lg), e = 0, h; h = d[e]; e++) {
            if (0 == h.lastIndexOf(c, 0)) return h.substr(c.length);
            if (h == a) return ""
        }
        return b
    };
    g.spatialHelper.remove = function(a, b, c) {
        var d = g.isNotDefined(this.get(a));
        this.set(a, "", 0, b, c);
        return d
    };
    g.spatialHelper.Tb = g.ba(8);
    g.spatialHelper.tb = g.ba(9);
    g.spatialHelper.isEmpty = function() {
        return !this.C.cookie
    };
    g.spatialHelper.wb = g.ba(0);
    g.spatialHelper.Ce = g.ba(10);
    g.spatialHelper.clear = function() {
        for (var a = g.mg(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    g.Jg = new g.kg("undefined" == typeof window.document ? null : window.document);
    g.Jg.F = 3950;
    g.oj = null;
    "undefined" != typeof window.XMLHttpRequest ? g.oj = function() {
        return new window.XMLHttpRequest
    } : "undefined" != typeof window.ActiveXObject && (g.oj = function() {
        return new window.ActiveXObject("Microsoft.XMLHTTP")
    });
    var ng;
    ng = ig(Ig, "___jsl", jg());
    ig(ng, "I", 0);
    ig(ng, "hel", 10);
    var rg = ig(ng, "perf", jg());
    ig(rg, "g", jg());
    var kba = ig(rg, "i", jg());
    ig(rg, "r", []);
    jg();
    jg();
    var ug = jg(),
        Dg = [];
    Dg.push(["jsl", function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                "object" == typeof c ? ng[b] = ig(ng, b, []).concat(c) : ig(ng, b, c)
            }
        if (b = a.u) a = ig(ng, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var sba = /^(\/[a-zA-Z0-9_\-]+)+$/,
        uba = /^[a-zA-Z0-9\-_\.,!]+$/,
        qba = /^gapi\.loaded_[0-9]+$/,
        tba = /^[a-zA-Z0-9,._-]+$/,
        nba = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        mba = /\/cb=/g,
        lba = /\/\//g;
    ug.m = function(a, b, c, d) {
        (a = a[0]) || tg("missing_hint");
        return "https://apis.google.com" + rba(a, b, c, d)
    };
    var Ag = (0, window.decodeURI)("%73cript"),
        yg = /^[-+_0-9\/A-Za-z]+={0,2}$/;
    Fg.load = function(a, b) {
        return Eg(function() {
            return g.Hg(a, b)
        })
    };
    var Bba = {
            enablejsapi: 1
        },
        Cba = {},
        Dba = {
            allowscriptaccess: "always",
            allowfullscreen: "true",
            bgcolor: "#000000"
        };
    Qg.prototype.clone = function() {
        var a = new Qg,
            b;
        for (b in this)
            if (this.hasOwnProperty(b)) {
                var c = this[b];
                "object" == g.spGetType(c) ? a[b] = g.copyObjectBasic(c) : a[b] = c
            }
        return a
    };
    g.Sg = null;
    g.pj = g.Ti ? "MozUserSelect" : g.Jd || g.Ri ? "WebkitUserSelect" : null;
    g.ea(g.ch);
    g.ch.prototype.getVersion = function() {
        return [this.major, this.minor, this.C]
    };
    var Eba = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
    var vh;
    var qj = g.Xa,
        qj = qj.toLowerCase();
    if (g.isSubStrOf(qj, "android")) {
        var rj = qj.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
        if (rj) vh = Number(rj[1]);
        else {
            var sj = {
                    cupcake: 1.5,
                    donut: 1.6,
                    eclair: 2,
                    froyo: 2.2,
                    gingerbread: 2.3,
                    honeycomb: 3,
                    "ice cream sandwich": 4,
                    jellybean: 4.1
                },
                tj = qj.match("(" + g.Pa(sj).join("|") + ")");
            vh = tj ? sj[tj[0]] : 0
        }
    } else vh = void 0;
    var Hba = ['video/mp4; codecs="avc1.42001E, mp4a.40.2"', 'video/webm; codecs="vp8.0, vorbis"'],
        Iba = ['audio/mp4; codecs="mp4a.40.2"'];
    var uj;
    var vj = g.Xa,
        wj = vj.match(/\((iPad|iPhone|iPod)( Simulator)?;/);
    if (!wj || 2 > wj.length) uj = void 0;
    else {
        var xj = vj.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);
        uj = xj && 6 == xj.length ? Number(xj[5].replace("_", ".")) : 0
    }
    0 <= uj && 0 <= g.Xa.search("Safari") && g.Xa.search("Version");
    g.v(ih, g.mb);
    ih.prototype.$a = function(a) {
        for (var b = 0; b < this.C.length; b++)
            if (this.C[b] == a) {
                this.C.splice(b, 1);
                a.target.removeEventListener(a.name, a.Rb);
                break
            }
    };
    ih.prototype.$ = function() {
        kh(this);
        ih.M.$.call(this)
    };
    var Fba = {
        "api.invalidparam": 2,
        auth: 150,
        "drm.auth": 150,
        "heartbeat.net": 150,
        "heartbeat.servererror": 150,
        "heartbeat.stop": 150,
        "html5.unsupportedads": 5,
        "fmt.noneavailable": 5,
        "fmt.decode": 5,
        "fmt.unplayable": 5,
        "html5.missingapi": 5,
        "html5.unsupportedlive": 5,
        "drm.unavailable": 5
    };
    g.v(nh, g.mb);
    var Gba = ["drm.unavailable", "fmt.noneavailable", "html5.missingapi", "html5.unsupportedads", "html5.unsupportedlive"];
    g.spatialHelper = nh.prototype;
    g.spatialHelper.getId = function() {
        return this.qa
    };
    g.spatialHelper.Yo = function(a, b) {
        this.ob() || (ph(this, a), th(this, b), this.K && qh(this))
    };
    g.spatialHelper.bA = function() {
        return this.pb
    };
    g.spatialHelper.RP = function() {
        if (!this.la) {
            var a = wh(this);
            a && "html5" == yh(this) ? (this.J = "html5", this.K || this.sh()) : (zh(this), this.J = "html5", a && this.O ? (this.G.appendChild(this.O), this.sh()) : (this.C.loaded = true, this.T = (0, g.r)(function() {
                var a = this.G,
                    c = this.C.clone();
                g.q("yt.player.Application.create")(a, c);
                this.sh()
            }, this), this.la = true, a ? this.T() : (g.nc(this.C.assets.js, this.T), g.hh(this.C.assets.css))))
        }
    };
    g.spatialHelper.QP = function() {
        var a = this.C.clone();
        if (!this.H) {
            var b = sh(this);
            b && (this.H = g.Nd("SPAN"), this.H.tabIndex = 0, jh(this.na, this.H, "focus", this.ju), this.W = g.Nd("SPAN"), this.W.tabIndex = 0, jh(this.na, this.W, "focus", this.ju), g.Pd(this.H, b), g.Rd(this.W, b))
        }
        a.attrs.width = a.attrs.width || "100%";
        a.attrs.height = a.attrs.height || "100%";
        "flash" == yh(this) ? (this.J = "flash", this.K || this.sh()) : (zh(this), this.J = "flash", this.C.loaded = true, b = g.ch.getInstance(), b = g.eh(b) || !g.fh(b) ? a.url : a.urlV9As2, window != window.top && window.document.referrer &&
            (a.args.framer = window.document.referrer.substring(0, 128)), g.gh(this.G, b, a), this.sh())
    };
    g.spatialHelper.ju = function() {
        sh(this).focus()
    };
    g.spatialHelper.sh = function() {
        if (!this.ob()) {
            var a = sh(this),
                b = false;
            try {
                a && a.getApiInterface && a.getApiInterface() && (b = true)
            } catch (h) {}
            if (b)
                if (this.la = false, a.isNotServable && a.isNotServable(this.C.args.video_id)) uh(this);
                else {
                    lh(this);
                    this.K = true;
                    a = sh(this);
                    a.addEventListener && (this.Y = xh(this, a, "addEventListener"));
                    a.removeEventListener && (this.ua = xh(this, a, "removeEventListener"));
                    for (var b = a.getApiInterface(), b = b.concat(a.getInternalApiInterface()), c = 0; c < b.length; c++) {
                        var d = b[c];
                        this.api[d] || (this.api[d] = xh(this, a, d))
                    }
                    for (var e in this.D) this.Y(e,
                        this.D[e]);
                    qh(this);
                    this.Xa && this.Xa(this.api);
                    this.ea.ab("onReady", this.api)
                } else this.Bb = g.wb((0, g.r)(this.sh, this), 50)
        }
    };
    g.spatialHelper.dQ = function() {
        return this.K
    };
    g.spatialHelper.we = function(a, b) {
        if (!this.ob() && (b = oh(this, b))) {
            if (!g.Ja(this.Hb, a) && !this.D[a]) {
                var c = Jba(this, a);
                this.Y && this.Y(a, c)
            }
            this.ea.subscribe(a, b);
            "onReady" == a && this.K && g.wb(g.u(b, this.api), 0)
        }
    };
    g.spatialHelper.nO = function(a, b) {
        this.ob() || (b = oh(this, b)) && this.ea.unsubscribe(a, b)
    };
    g.spatialHelper.cz = function(a) {
        a = a ? Aaa : zaa;
        for (var b = a(window.document.activeElement); b && (1 != b.nodeType || b == this.H || b == this.W || (b.focus(), b != window.document.activeElement));) b = a(b)
    };
    g.spatialHelper.Ep = function(a) {
        g.z("a11y-announce", a)
    };
    g.spatialHelper.UJ = function(a) {
        uh(this, a)
    };
    g.spatialHelper.XJ = function(a) {
        g.z("WATCH_LATER_VIDEO_ADDED", a)
    };
    g.spatialHelper.YJ = function(a) {
        g.z("WATCH_LATER_VIDEO_REMOVED", a)
    };
    g.spatialHelper.DJ = function() {
        this.jb || (g.vi ? (this.hb = g.Id(window.document), jh(this.ia, window, "scroll", this.tM), jh(this.ia, this.G, "touchmove", this.WL)) : (jh(this.ia, this.G, "mousewheel", this.Au), jh(this.ia, this.G, "wheel", this.Au)), this.jb = true)
    };
    g.spatialHelper.EJ = function() {
        kh(this.ia);
        this.jb = false
    };
    g.spatialHelper.Au = function(a) {
        g.Ye(a)
    };
    g.spatialHelper.tM = function() {
        window.scrollTo(this.hb.x, this.hb.y)
    };
    g.spatialHelper.WL = function(a) {
        a.preventDefault()
    };
    g.spatialHelper.TA = function() {
        return this.J || yh(this)
    };
    g.spatialHelper.CA = function() {
        return this.sb
    };
    g.spatialHelper.cancel = function() {
        if (this.T) {
            var a = this.T,
                b = g.mc(this.C.assets.js);
            window.spf.script.ignore(b, a)
        }
        g.yb(this.Bb);
        this.la = false
    };
    g.spatialHelper.$ = function() {
        zh(this);
        if (this.O && this.C) try {
            this.O.destroy()
        } catch (b) {
            g.Ab(b)
        }
        this.bb = null;
        for (var a in this.D) g.bigThis[this.D[a]] = null;
        this.pb = this.C = this.api = null;
        delete this.G;
        delete this.N;
        nh.M.$.call(this)
    };
    g.Bh = {};
    g.Ah = "player_uid_" + (1E9 * Math.random() >>> 0);
    var wca = g.q("yt.abuse.botguardInitialized") || Tg;
    g.p("yt.abuse.botguardInitialized", wca, void 0);
    var xca = g.q("yt.abuse.invokeBotguard") || g.Ug;
    g.p("yt.abuse.invokeBotguard", xca, void 0);
    var yca = g.q("yt.abuse.dclkstatus.checkDclkStatus") || Vg;
    g.p("yt.abuse.dclkstatus.checkDclkStatus", yca, void 0);
    var zca = g.q("yt.player.exports.navigate") || g.Yg;
    g.p("yt.player.exports.navigate", zca, void 0);
    var Aca = g.q("yt.player.embed") || g.Ch;
    g.p("yt.player.embed", Aca, void 0);
    var Bca = g.q("yt.player.getPlayerByElement") || g.Dh;
    g.p("yt.player.getPlayerByElement", Bca, void 0);
    var Cca = g.q("yt.util.activity.init") || g.tf;
    g.p("yt.util.activity.init", Cca, void 0);
    var Dca = g.q("yt.util.activity.getTimeSinceActive") || g.uf;
    g.p("yt.util.activity.getTimeSinceActive", Dca, void 0);
    var Eca = g.q("yt.util.activity.setTimestamp") || sf;
    g.p("yt.util.activity.setTimestamp", Eca, void 0);
    var Gh, Lh;
    g.Kh = null;
    Lh = "";
    var Mh = null,
        Ph = [];
    var Th, li, ki, Vh, Uh, Wba, Pba, Sba, Qba, Rba, ei;
    Vh = 0;
    Uh = 0;
    Wba = ["server_prefetched_vast", "vmap"];
    Pba = [900, 60, "waiting"];
    Sba = [500, 99, "waiting"];
    Qba = [300, 60, "waiting"];
    Rba = [400, 99, "waiting"];
    ei = [300, 101, "done"];
    var oi = null;
    window.yt = window.yt || {};
    g.p("yt.setConfig", g.ub, void 0);
    g.p("yt.pushConfigArray", function(a, b) {
        var c = g.w(a, void 0);
        c ? c.push(b) : g.ub(a, [b])
    }, void 0);
    g.p("yt.getConfig", g.w, void 0);
    g.p("yt.hasMsg", g.Cb, void 0);
    g.p("yt.pubsub.publish", g.z, void 0);
    g.p("yt.pubsub.subscribe", g.Ib, void 0);
    g.p("yt.setMsg", function(a) {
        rb(g.Bb, arguments)
    }, void 0);
    g.p("yt.setGoogMsg", function(a) {
        rb(g.Bb, arguments)
    }, void 0);
    g.p("ytcsi.tick", g.Gf, void 0);
    g.v(Ai, g.Qb);
    Ai.prototype.enable = function() {
        window.onload = Nba;
        window.onunload = Oba;
        window.onerror = naa;
        var a = window.ytspf || {};
        a.enabled ? (window.addEventListener && (window.addEventListener("spfclick", Rh), window.addEventListener("spfhistory", Sh), window.addEventListener("spfrequest", Xh), window.addEventListener("spfpartprocess", ai), window.addEventListener("spfpartdone", bi), window.addEventListener("spfprocess", ci), window.addEventListener("spfdone", fi), window.addEventListener("spferror", ii), window.addEventListener("spfreload",
            ji), window.addEventListener("spfjsbeforeunload", Bi)), a.config = a.config || {}, window.ytdepmap ? window.spf.script.ready("spf", function() {
            a.enabled = window.spf.init(a.config)
        }) : a.enabled = window.spf.init(a.config), this.subscribe("init", Uba), this.subscribe("dispose", Vba)) : window.spf.dispose();
        this.subscribe("init", this.init, this);
        this.subscribe("dispose", this.dispose, this)
    };
    Ai.prototype.init = function() {
        Ai.M.init.call(this);
        (window.ytspf || {}).enabled || window.spf.dispose();
        var a = window.ytPageFrameLoaded || false,
            b, c;
        !a && g.w("PAGEFRAME_JS") ? (b = g.w("PAGEFRAME_JS", void 0), c = function() {
            window.ytPageFrameLoaded = true;
            g.q("ytbin.www.pageframe.setup")()
        }) : a && (a = g.q("yt.www.masthead.loadSearchbox")) && a();
        var a = g.w("JS_COMMON_MODULE"),
            d = g.w("JS_PAGE_MODULES");
        d || (d = [a]);
        a = g.w("JS_DELAY_LOAD", 0);
        0 < a ? (g.yb(this.D), this.D = g.wb(function() {
            b && g.nc(b, c);
            window.spf.script.require(d)
        }, a)) : (b && g.nc(b, c), window.spf.script.require(d));
        Lba();
        Uaa();
        Oaa();
        Xf(true);
        g.Ff(false);
        g.w("SERVICE_WORKER_KILLSWITCH", void 0) || window.navigator.serviceWorker && window.navigator.serviceWorker.getRegistrations && "https:" == window.location.protocol && (g.Hc("service_worker_enabled") ? eca() : gca())
    };
    Ai.prototype.dispose = function() {
        g.yb(this.D);
        var a = g.q("ytbin.www.pageframe.cancelSetup");
        a && a();
        g.zb(Gh);
        if (a = g.Ih()) a.removeEventListener("onReady", Hh), a.removeEventListener("onStateChange", Hh);
        Xf(false);
        (a = ti()) && g.Xe(a);
        Ai.M.dispose.call(this)
    };
    Ai.prototype.disable = function() {
        Ai.M.disable.call(this);
        window.removeEventListener && (window.removeEventListener("spfclick", Rh), window.removeEventListener("spfhistory", Sh), window.removeEventListener("spfrequest", Xh), window.removeEventListener("spfpartprocess", ai), window.removeEventListener("spfpartdone", bi), window.removeEventListener("spfprocess", ci), window.removeEventListener("spfdone", fi), window.removeEventListener("spferror", ii), window.removeEventListener("spfreload", ji), window.removeEventListener("spfjsbeforeunload",
            Bi));
        window.onload = null;
        window.onunload = null;
        window.onerror = null
    };
    g.Ub(new Ai);
})(_yt_www);
