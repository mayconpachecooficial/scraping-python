const l = new Set(),
  a = new WeakSet();
let s,
  d,
  u = !1;
function g(e) {
  u ||
    ((u = !0),
    (s ??= e?.prefetchAll ?? !1),
    (d ??= e?.defaultStrategy ?? "hover"),
    m(),
    p(),
    w());
}
function m() {
  for (const e of ["touchstart", "mousedown"])
    document.body.addEventListener(
      e,
      (t) => {
        c(t.target, "tap") &&
          f(t.target.href, { with: "fetch", ignoreSlowConnection: !0 });
      },
      { passive: !0 }
    );
}
function p() {
  let e;
  document.body.addEventListener(
    "focusin",
    (o) => {
      c(o.target, "hover") && t(o);
    },
    { passive: !0 }
  ),
    document.body.addEventListener("focusout", n, { passive: !0 }),
    v(() => {
      for (const o of document.getElementsByTagName("a"))
        a.has(o) ||
          (c(o, "hover") &&
            (a.add(o),
            o.addEventListener("mouseenter", t, { passive: !0 }),
            o.addEventListener("mouseleave", n, { passive: !0 })));
    });
  function t(o) {
    const r = o.target.href;
    e && clearTimeout(e),
      (e = setTimeout(() => {
        f(r, { with: "fetch" });
      }, 80));
  }
  function n() {
    e && (clearTimeout(e), (e = 0));
  }
}
function w() {
  let e;
  v(() => {
    for (const t of document.getElementsByTagName("a"))
      a.has(t) || (c(t, "viewport") && (a.add(t), (e ??= y()), e.observe(t)));
  });
}
function y() {
  const e = new WeakMap();
  return new IntersectionObserver((t, n) => {
    for (const o of t) {
      const r = o.target,
        i = e.get(r);
      o.isIntersecting
        ? (i && clearTimeout(i),
          e.set(
            r,
            setTimeout(() => {
              n.unobserve(r), e.delete(r), f(r.href, { with: "link" });
            }, 300)
          ))
        : i && (clearTimeout(i), e.delete(r));
    }
  });
}
function f(e, t) {
  const n = t?.ignoreSlowConnection ?? !1;
  if (!S(e, n)) return;
  if ((l.add(e), (t?.with ?? "link") === "link")) {
    const r = document.createElement("link");
    (r.rel = "prefetch"), r.setAttribute("href", e), document.head.append(r);
  } else
    fetch(e).catch((r) => {
      console.log(`[astro] Failed to prefetch ${e}`), console.error(r);
    });
}
function S(e, t) {
  if (!navigator.onLine || (!t && h())) return !1;
  try {
    const n = new URL(e, location.href);
    return (
      location.origin === n.origin &&
      (location.pathname !== n.pathname || location.search !== n.search) &&
      !l.has(e)
    );
  } catch {}
  return !1;
}
function c(e, t) {
  if (e?.tagName !== "A") return !1;
  const n = e.dataset.astroPrefetch;
  return n === "false"
    ? !1
    : t === "tap" && (n != null || s) && h()
    ? !0
    : (n == null && s) || n === ""
    ? t === d
    : n === t;
}
function h() {
  if ("connection" in navigator) {
    const e = navigator.connection;
    return e.saveData || /(2|3)g/.test(e.effectiveType);
  }
  return !1;
}
function v(e) {
  e();
  let t = !1;
  document.addEventListener("astro:page-load", () => {
    if (!t) {
      t = !0;
      return;
    }
    e();
  });
}
g();
