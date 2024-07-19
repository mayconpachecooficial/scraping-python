import { _ as e } from "./astro/assets-service.adgvQEOQ.js";
function g(t, o) {
  t.classList.toggle(o);
}
function b(t, o) {
  return t.classList.contains(o);
}
function l() {
  return b(document.documentElement, "dark");
}
typeof process < "u" && process.stdout && process.stdout.isTTY;
const { replace: v } = "",
  y = /[&<>'"]/g,
  L = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
  T = (t) => L[t],
  w = (t) => v.call(t, y, T);
function C(t) {
  return !!t && typeof t == "object" && typeof t.then == "function";
}
async function* R(t) {
  const o = t.getReader();
  try {
    for (;;) {
      const { done: n, value: i } = await o.read();
      if (n) return;
      yield i;
    }
  } finally {
    o.releaseLock();
  }
}
const B = w;
class p extends Uint8Array {}
Object.defineProperty(p.prototype, Symbol.toStringTag, {
  get() {
    return "HTMLBytes";
  },
});
class u extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const O = (t) => (t instanceof u ? t : typeof t == "string" ? new u(t) : t);
function x(t) {
  return Object.prototype.toString.call(t) === "[object HTMLString]";
}
function I(t) {
  return new p(t);
}
function E(t) {
  return typeof t.getReader == "function";
}
async function* m(t) {
  if (E(t)) for await (const o of R(t)) yield s(o);
  else for await (const o of t) yield s(o);
}
function* D(t) {
  for (const o of t) yield s(o);
}
function s(t) {
  if (t && typeof t == "object") {
    if (t instanceof Uint8Array) return I(t);
    if (t instanceof Response && t.body) {
      const o = t.body;
      return m(o);
    } else {
      if (typeof t.then == "function")
        return Promise.resolve(t).then((o) => s(o));
      if (Symbol.iterator in t) return D(t);
      if (Symbol.asyncIterator in t || E(t)) return m(t);
    }
  }
  return O(t);
}
new TextEncoder();
new TextDecoder();
function H(t) {
  return (
    !!t &&
    typeof t == "object" &&
    "render" in t &&
    typeof t.render == "function"
  );
}
function r({ globResult: t, contentDir: o }) {
  const n = {};
  for (const i in t) {
    const _ = i.replace(new RegExp(`^${o}`), "").split("/");
    if (_.length <= 1) continue;
    const a = _[0];
    (n[a] ??= {}), (n[a][i] = t[i]);
  }
  return n;
}
const c = "/src/content/",
  h = Object.assign({
    "/src/content/post/alt-text.md": () =>
      e(() => import("./alt-text.JmXgNDVB.js"), __vite__mapDeps([])),
    "/src/content/post/azure.md": () =>
      e(() => import("./azure.wwnBbk9U.js"), __vite__mapDeps([])),
    "/src/content/post/buddy.md": () =>
      e(() => import("./buddy.Q-gMtvi2.js"), __vite__mapDeps([])),
    "/src/content/post/career-in-tech.md": () =>
      e(() => import("./career-in-tech.aGLDe2V1.js"), __vite__mapDeps([])),
    "/src/content/post/center-css.md": () =>
      e(() => import("./center-css.2i6XDNPc.js"), __vite__mapDeps([])),
    "/src/content/post/focus-within.md": () =>
      e(() => import("./focus-within.1jaqKFYz.js"), __vite__mapDeps([])),
    "/src/content/post/git-branch/index.md": () =>
      e(() => import("./index.sBHTwY2Q.js"), __vite__mapDeps([])),
    "/src/content/post/media-queries.md": () =>
      e(() => import("./media-queries.uqZKFLiI.js"), __vite__mapDeps([])),
    "/src/content/post/ms-ignite-2019.md": () =>
      e(() => import("./ms-ignite-2019.7npJnsaq.js"), __vite__mapDeps([])),
    "/src/content/post/own-a-blog.md": () =>
      e(() => import("./own-a-blog.ROnO_hxV.js"), __vite__mapDeps([])),
    "/src/content/post/productivity-tips.md": () =>
      e(() => import("./productivity-tips.jRcFKnFi.js"), __vite__mapDeps([])),
    "/src/content/post/show-your-work.md": () =>
      e(() => import("./show-your-work.6uxzubf_.js"), __vite__mapDeps([])),
    "/src/content/post/soft-skills.md": () =>
      e(() => import("./soft-skills.8eNxNQ-j.js"), __vite__mapDeps([])),
    "/src/content/post/tailwind.md": () =>
      e(() => import("./tailwind.wpsi7KqW.js"), __vite__mapDeps([])),
    "/src/content/post/travis-setup.md": () =>
      e(() => import("./travis-setup.c9iqtCsH.js"), __vite__mapDeps([])),
    "/src/content/post/vue-global.md": () =>
      e(() => import("./vue-global.DODl7-rh.js"), __vite__mapDeps([])),
    "/src/content/post/web-accessibility.md": () =>
      e(() => import("./web-accessibility.17q055MY.js"), __vite__mapDeps([])),
    "/src/content/post/workflow/index.md": () =>
      e(() => import("./index.rPisyN7H.js"), __vite__mapDeps([])),
    "/src/content/post/year-in-review-2018.md": () =>
      e(() => import("./year-in-review-2018.4t5t35Xj.js"), __vite__mapDeps([])),
    "/src/content/post/year-in-review-2019.md": () =>
      e(() => import("./year-in-review-2019.n1fSflFl.js"), __vite__mapDeps([])),
  });
r({ globResult: h, contentDir: c });
const f = Object.assign({});
r({ globResult: f, contentDir: c });
r({ globResult: { ...h, ...f }, contentDir: c });
const A = Object.assign({
  "/src/content/post/alt-text.md": () =>
    e(() => import("./alt-text.if6l-enK.js"), __vite__mapDeps([0, 1])),
  "/src/content/post/azure.md": () =>
    e(() => import("./azure.PDTlcaLJ.js"), __vite__mapDeps([2, 1])),
  "/src/content/post/buddy.md": () =>
    e(() => import("./buddy.UGdjtvqM.js"), __vite__mapDeps([3, 1])),
  "/src/content/post/career-in-tech.md": () =>
    e(() => import("./career-in-tech.kCwNqyCI.js"), __vite__mapDeps([4, 1])),
  "/src/content/post/center-css.md": () =>
    e(() => import("./center-css.6_7BsDal.js"), __vite__mapDeps([5, 1])),
  "/src/content/post/focus-within.md": () =>
    e(() => import("./focus-within.mZ5odRVr.js"), __vite__mapDeps([6, 1])),
  "/src/content/post/git-branch/index.md": () =>
    e(() => import("./index.ajM6-1kv.js"), __vite__mapDeps([7, 1])),
  "/src/content/post/media-queries.md": () =>
    e(() => import("./media-queries.BU_VGbL9.js"), __vite__mapDeps([8, 1])),
  "/src/content/post/ms-ignite-2019.md": () =>
    e(() => import("./ms-ignite-2019.goqpaYx-.js"), __vite__mapDeps([9, 1])),
  "/src/content/post/own-a-blog.md": () =>
    e(() => import("./own-a-blog.I8WnaoG0.js"), __vite__mapDeps([10, 1])),
  "/src/content/post/productivity-tips.md": () =>
    e(
      () => import("./productivity-tips.j7OmmU3n.js"),
      __vite__mapDeps([11, 1])
    ),
  "/src/content/post/show-your-work.md": () =>
    e(() => import("./show-your-work.mIbLVaWf.js"), __vite__mapDeps([12, 1])),
  "/src/content/post/soft-skills.md": () =>
    e(() => import("./soft-skills.gmchIET1.js"), __vite__mapDeps([13, 1])),
  "/src/content/post/tailwind.md": () =>
    e(() => import("./tailwind.UsOfPeo9.js"), __vite__mapDeps([14, 1])),
  "/src/content/post/travis-setup.md": () =>
    e(() => import("./travis-setup.qm2gsrMG.js"), __vite__mapDeps([15, 1])),
  "/src/content/post/vue-global.md": () =>
    e(() => import("./vue-global.BkT1Ya6S.js"), __vite__mapDeps([16, 1])),
  "/src/content/post/web-accessibility.md": () =>
    e(
      () => import("./web-accessibility.D4DV9zq1.js"),
      __vite__mapDeps([17, 1])
    ),
  "/src/content/post/workflow/index.md": () =>
    e(() => import("./index.dw-jSukP.js"), __vite__mapDeps([18, 1])),
  "/src/content/post/year-in-review-2018.md": () =>
    e(
      () => import("./year-in-review-2018.DVdT6Cl6.js"),
      __vite__mapDeps([19, 1])
    ),
  "/src/content/post/year-in-review-2019.md": () =>
    e(
      () => import("./year-in-review-2019.hHifSwV7.js"),
      __vite__mapDeps([20, 1])
    ),
});
r({ globResult: A, contentDir: c });
const P = "https://giftegwuenu.com";
new URL(P).hostname;
class k extends HTMLElement {
  headerEl;
  mobileButtonEl;
  menuOpen;
  constructor() {
    super(),
      (this.headerEl = document.getElementById("main-header")),
      (this.mobileButtonEl = this.querySelector("button")),
      (this.menuOpen = !1),
      this.mobileButtonEl.addEventListener("click", this.toggleMobileMenu);
  }
  toggleMobileMenu = () => {
    g(this.headerEl, "menu-open"),
      (this.menuOpen = !this.menuOpen),
      this.mobileButtonEl.setAttribute(
        "aria-expanded",
        this.menuOpen.toString()
      );
  };
}
customElements.define("mobile-button", k);
class V extends HTMLElement {
  button;
  observer;
  constructor() {
    super(),
      (this.button = this.querySelector("button")),
      (this.observer = null),
      this.button.setAttribute("aria-pressed", String(l())),
      this.button.addEventListener("click", this.handleThemeBtnClick);
  }
  connectedCallback() {
    const o = document.documentElement;
    (this.observer = new MutationObserver((n) => {
      for (const i of n)
        if (i.type === "attributes" && i.attributeName === "class") {
          const d = i.target.classList.contains("dark");
          this.button.setAttribute("aria-pressed", String(d));
        }
    })),
      this.observer.observe(o, { attributeFilter: ["class"] });
  }
  disconnectedCallback() {
    this.observer?.disconnect();
  }
  handleThemeBtnClick = () => {
    let o = l(),
      n = new CustomEvent("theme-change", {
        detail: { theme: o ? "light" : "dark" },
      });
    document.dispatchEvent(n);
  };
}
customElements.define("theme-toggle", V);
class M extends HTMLElement {
  openBtn;
  closeBtn;
  dialog;
  dialogFrame;
  constructor() {
    super(),
      (this.openBtn = this.querySelector("button[data-open-modal]")),
      (this.closeBtn = this.querySelector("button[data-close-modal]")),
      (this.dialog = this.querySelector("dialog")),
      (this.dialogFrame = this.querySelector(".dialog-frame")),
      this.openBtn.addEventListener("click", this.openModal),
      (this.openBtn.disabled = !1),
      this.closeBtn.addEventListener("click", this.closeModal);
  }
  connectedCallback() {
    window.addEventListener("keydown", this.onWindowKeydown),
      (window.requestIdleCallback || ((n) => setTimeout(n, 1)))(async () => {
        const { PagefindUI: n } = await e(
          () => import("./ui-core.0T0hr4Y-.js"),
          __vite__mapDeps([21, 1])
        );
        new n({
          element: "#cactus__search",
          baseUrl: "/",
          bundlePath: "/".replace(/\/$/, "") + "/pagefind/",
          showImages: !1,
          showSubResults: !0,
        });
      });
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this.onWindowKeydown);
  }
  onWindowClick = (o) => {
    ("href" in (o.target || {}) ||
      (document.body.contains(o.target) &&
        !this.dialogFrame.contains(o.target))) &&
      this.closeModal();
  };
  onWindowKeydown = (o) => {
    o.key === "/" &&
      !this.dialog.open &&
      (this.openModal(), o.preventDefault());
  };
  openModal = (o) => {
    this.dialog.showModal(),
      this.querySelector("input")?.focus(),
      o?.stopPropagation(),
      window.addEventListener("click", this.onWindowClick);
  };
  closeModal = () => {
    this.dialog.open &&
      (this.dialog.close(),
      window.removeEventListener("click", this.onWindowClick));
  };
}
customElements.define("site-search", M);
export { u as H, H as a, C as b, B as e, x as i, O as m, s as u };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "_astro/alt-text.if6l-enK.js",
      "_astro/astro/assets-service.adgvQEOQ.js",
      "_astro/azure.PDTlcaLJ.js",
      "_astro/buddy.UGdjtvqM.js",
      "_astro/career-in-tech.kCwNqyCI.js",
      "_astro/center-css.6_7BsDal.js",
      "_astro/focus-within.mZ5odRVr.js",
      "_astro/index.ajM6-1kv.js",
      "_astro/media-queries.BU_VGbL9.js",
      "_astro/ms-ignite-2019.goqpaYx-.js",
      "_astro/own-a-blog.I8WnaoG0.js",
      "_astro/productivity-tips.j7OmmU3n.js",
      "_astro/show-your-work.mIbLVaWf.js",
      "_astro/soft-skills.gmchIET1.js",
      "_astro/tailwind.UsOfPeo9.js",
      "_astro/travis-setup.qm2gsrMG.js",
      "_astro/vue-global.BkT1Ya6S.js",
      "_astro/web-accessibility.D4DV9zq1.js",
      "_astro/index.dw-jSukP.js",
      "_astro/year-in-review-2018.DVdT6Cl6.js",
      "_astro/year-in-review-2019.hHifSwV7.js",
      "_astro/ui-core.0T0hr4Y-.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
