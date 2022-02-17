/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
!(function (t) {
  'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery);
})(function (t) {
  function e(e, n, l, a) {
    var r = {
      data: a || 0 === a || a === !1 ? a : n ? n.data : {},
      _wrap: n ? n._wrap : null,
      tmpl: null,
      parent: n || null,
      nodes: [],
      calls: u,
      nest: c,
      wrap: f,
      html: m,
      update: s,
    };
    return (
      e && t.extend(r, e, { nodes: [], parent: n }),
      l &&
        ((r.tmpl = l),
        (r._ctnt = r._ctnt || r.tmpl(t, r)),
        (r.key = ++w),
        ((T.length ? g : y)[w] = r)),
      r
    );
  }
  function n(e, a, r) {
    var i,
      p = r
        ? t.map(r, function (t) {
            return 'string' == typeof t
              ? e.key
                ? t.replace(
                    /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,
                    '$1 ' + _ + '="' + e.key + '" $2',
                  )
                : t
              : n(t, e, t._ctnt);
          })
        : e;
    return a
      ? p
      : ((p = p.join('')),
        p.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (e, n, a, r) {
          (i = t(a).get()), o(i), n && (i = l(n).concat(i)), r && (i = i.concat(l(r)));
        }),
        i ? i : l(p));
  }
  function l(e) {
    var n = document.createElement('div');
    return (n.innerHTML = e), t.makeArray(n.childNodes);
  }
  function a(e) {
    return Function(
      'jQuery',
      '$item',
      "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" +
        t
          .trim(e)
          .replace(/([\\'])/g, '\\$1')
          .replace(/[\r\t\n]/g, ' ')
          .replace(/\$\{([^\}]*)\}/g, '{{= $1}}')
          .replace(
            /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
            function (e, n, l, a, r, p, o) {
              var u,
                c,
                f,
                m = t.tmpl.tag[l];
              if (!m) throw 'Unknown template tag: ' + l;
              return (
                (u = m._default || []),
                p && !/\w$/.test(r) && ((r += p), (p = '')),
                r
                  ? ((r = i(r)),
                    (o = o ? ',' + i(o) + ')' : p ? ')' : ''),
                    (c = p ? (r.indexOf('.') > -1 ? r + i(p) : '(' + r + ').call($item' + o) : r),
                    (f = p
                      ? c
                      : '(typeof(' + r + ")==='function'?(" + r + ').call($item):(' + r + '))'))
                  : (f = c = u.$1 || 'null'),
                (a = i(a)),
                "');" +
                  m[n ? 'close' : 'open']
                    .split('$notnull_1')
                    .join(r ? 'typeof(' + r + ")!=='undefined' && (" + r + ')!=null' : 'true')
                    .split('$1a')
                    .join(f)
                    .split('$1')
                    .join(c)
                    .split('$2')
                    .join(a || u.$2 || '') +
                  "__.push('"
              );
            },
          ) +
        "');}return __;",
    );
  }
  function r(e, l) {
    e._wrap = n(e, !0, t.isArray(l) ? l : [h.test(l) ? l : t(l).html()]).join('');
  }
  function i(t) {
    return t ? t.replace(/\\'/g, "'").replace(/\\\\/g, '\\') : null;
  }
  function p(t) {
    var e = document.createElement('div');
    return e.appendChild(t.cloneNode(!0)), e.innerHTML;
  }
  function o(n) {
    function l(n) {
      function l(t) {
        (t += u), (i = c[t] = c[t] || e(i, y[i.parent.key + u] || i.parent));
      }
      var a,
        r,
        i,
        p,
        o = n;
      if ((p = n.getAttribute(_))) {
        for (; o.parentNode && 1 === (o = o.parentNode).nodeType && !(a = o.getAttribute(_)); );
        a !== p &&
          ((o = o.parentNode ? (11 === o.nodeType ? 0 : o.getAttribute(_) || 0) : 0),
          (i = y[p]) || ((i = g[p]), (i = e(i, y[o] || g[o])), (i.key = ++w), (y[w] = i)),
          k && l(p)),
          n.removeAttribute(_);
      } else k && (i = t.data(n, 'tmplItem')) && (l(i.key), (y[i.key] = i), (o = t.data(n.parentNode, 'tmplItem')), (o = o ? o.key : 0));
      if (i) {
        for (r = i; r && r.key != o; ) r.nodes.push(n), (r = r.parent);
        delete i._ctnt, delete i._wrap, t.data(n, 'tmplItem', i);
      }
    }
    var a,
      r,
      i,
      p,
      o,
      u = '_' + k,
      c = {};
    for (i = 0, p = n.length; p > i; i++)
      if (1 === (a = n[i]).nodeType) {
        for (r = a.getElementsByTagName('*'), o = r.length - 1; o >= 0; o--) l(r[o]);
        l(a);
      }
  }
  function u(t, e, n, l) {
    return t ? void T.push({ _: t, tmpl: e, item: this, data: n, options: l }) : T.pop();
  }
  function c(e, n, l) {
    return t.tmpl(t.template(e), n, l, this);
  }
  function f(e, n) {
    var l = e.options || {};
    return (l.wrapped = n), t.tmpl(t.template(e.tmpl), e.data, l, e.item);
  }
  function m(e, n) {
    var l = this._wrap;
    return t.map(t(t.isArray(l) ? l.join('') : l).filter(e || '*'), function (t) {
      return n ? t.innerText || t.textContent : t.outerHTML || p(t);
    });
  }
  function s() {
    var e = this.nodes;
    t.tmpl(null, null, null, this).insertBefore(e[0]), t(e).remove();
  }
  var d,
    $ = t.fn.domManip,
    _ = '_tmplitem',
    h = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
    y = {},
    g = {},
    v = { key: 0, data: {} },
    w = 0,
    k = 0,
    T = [];
  t.each(
    {
      appendTo: 'append',
      prependTo: 'prepend',
      insertBefore: 'before',
      insertAfter: 'after',
      replaceAll: 'replaceWith',
    },
    function (e, n) {
      t.fn[e] = function (l) {
        var a,
          r,
          i,
          p,
          o = [],
          u = t(l),
          c = 1 === this.length && this[0].parentNode;
        if (((d = y || {}), c && 11 === c.nodeType && 1 === c.childNodes.length && 1 === u.length))
          u[n](this[0]), (o = this);
        else {
          for (r = 0, i = u.length; i > r; r++)
            (k = r), (a = (r > 0 ? this.clone(!0) : this).get()), t(u[r])[n](a), (o = o.concat(a));
          (k = 0), (o = this.pushStack(o, e, u.selector));
        }
        return (p = d), (d = null), t.tmpl.complete(p), o;
      };
    },
  ),
    t.fn.extend({
      tmpl: function (e, n, l) {
        return t.tmpl(this[0], e, n, l);
      },
      tmplItem: function () {
        return t.tmplItem(this[0]);
      },
      template: function (e) {
        return t.template(e, this[0]);
      },
      domManip: function (e, n, l) {
        if (e[0] && t.isArray(e[0])) {
          for (
            var a, r = t.makeArray(arguments), i = e[0], p = i.length, o = 0;
            p > o && !(a = t.data(i[o++], 'tmplItem'));

          );
          a &&
            k &&
            (r[2] = function (e) {
              t.tmpl.afterManip(this, e, l);
            }),
            $.apply(this, r);
        } else $.apply(this, arguments);
        return (k = 0), d || t.tmpl.complete(y), this;
      },
    }),
    t.extend({
      tmpl: function (l, a, i, p) {
        var o,
          u = !p;
        if (u) (p = v), (l = t.template[l] || t.template(null, l)), (g = {});
        else if (!l)
          return (
            (l = p.tmpl),
            (y[p.key] = p),
            (p.nodes = []),
            p.wrapped && r(p, p.wrapped),
            t(n(p, null, p.tmpl(t, p)))
          );
        return l
          ? ('function' == typeof a && (a = a.call(p || {})),
            i && i.wrapped && r(i, i.wrapped),
            (o = t.isArray(a)
              ? t.map(a, function (t) {
                  return t ? e(i, p, l, t) : null;
                })
              : [e(i, p, l, a)]),
            u ? t(n(p, null, o)) : o)
          : [];
      },
      tmplItem: function (e) {
        var n;
        for (
          e instanceof t && (e = e[0]);
          e && 1 === e.nodeType && !(n = t.data(e, 'tmplItem')) && (e = e.parentNode);

        );
        return n || v;
      },
      template: function (e, n) {
        return n
          ? ('string' == typeof n ? (n = a(n)) : n instanceof t && (n = n[0] || {}),
            n.nodeType && (n = t.data(n, 'tmpl') || t.data(n, 'tmpl', a(n.innerHTML))),
            'string' == typeof e ? (t.template[e] = n) : n)
          : e
          ? 'string' != typeof e
            ? t.template(null, e)
            : t.template[e] || t.template(null, h.test(e) ? e : t(e))
          : null;
      },
      encode: function (t) {
        return ('' + t)
          .split('<')
          .join('&lt;')
          .split('>')
          .join('&gt;')
          .split('"')
          .join('&#34;')
          .split("'")
          .join('&#39;');
      },
    }),
    t.extend(t.tmpl, {
      tag: {
        tmpl: {
          _default: { $2: 'null' },
          open: 'if($notnull_1){__=__.concat($item.nest($1,$2));}',
        },
        wrap: {
          _default: { $2: 'null' },
          open: '$item.calls(__,$1,$2);__=[];',
          close: 'call=$item.calls();__=call._.concat($item.wrap(call,__));',
        },
        each: {
          _default: { $2: '$index, $value' },
          open: 'if($notnull_1){$.each($1a,function($2){with(this){',
          close: '}});}',
        },
        if: { open: 'if(($notnull_1) && $1a){', close: '}' },
        else: { _default: { $1: 'true' }, open: '}else if(($notnull_1) && $1a){' },
        html: { open: 'if($notnull_1){__.push($1a);}' },
        '=': { _default: { $1: '$data' }, open: 'if($notnull_1){__.push($.encode($1a));}' },
        '!': { open: '' },
      },
      complete: function () {
        y = {};
      },
      afterManip: function (e, n, l) {
        var a = 11 === n.nodeType ? t.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
        l.call(e, n), o(a), k++;
      },
    });
});
