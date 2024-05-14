export const css = "\n\n";
var o = Object.defineProperty;
var s = (t, e, n) => e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var c = (t, e, n) => (s(t, typeof e != "symbol" ? e + "" : e, n), n);
var a = { icon: "", name: "12", description: "", version: "1.0.0" };
const { defineComponent: i } = __Context.vue, { openBlock: l, createElementBlock: _ } = __Context.vue, d = /* @__PURE__ */ i({
  __name: "Page",
  setup(t) {
    return console.log("__APP_DATA__", a), (e, n) => (l(), _("div", null, "dsddd"));
  }
});
var p = { icon: "", name: "12", description: "", version: "1.0.0" };
class r {
  constructor() {
    c(this, "icon", "");
    c(this, "name", "tts");
    c(this, "description", "1111");
    c(this, "isUninstallReload", !1);
  }
  install(e) {
    const n = {
      path: "/tts",
      name: "tts",
      meta: {
        title: "TTS",
        content: p.name,
        icon: '<svg t="1705562973022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4335" width="200" height="200"><path d="M801.792 1016.832h-283.648c-279.552 0-509.952-225.792-508.416-505.344 1.536-274.432 224.768-497.664 499.2-499.2 279.552-1.536 505.344 228.864 505.344 508.416v60.928c0 9.728-7.68 17.408-17.408 17.408s-17.408-7.68-17.408-17.408v-60.928c0-257.024-204.8-471.04-461.824-474.112C254.976 43.52 40.96 257.536 44.032 520.192c3.072 257.024 217.088 461.824 474.112 461.824h283.648c53.76 0 72.192-26.112 75.776-79.36v-135.168c0-9.728 7.68-17.408 17.408-17.408s17.408 7.68 17.408 17.408v139.776c-5.632 69.632-39.424 109.568-110.592 109.568z" p-id="4336"></path><path d="M512 799.232c-18.432 0-33.28-14.848-33.28-33.28V263.168c0-18.432 14.848-33.28 33.28-33.28s33.28 14.848 33.28 33.28v502.784c0 18.432-14.848 33.28-33.28 33.28z m-148.992-83.456c-18.432 0-33.28-14.848-33.28-33.28V346.624c0-18.432 14.848-33.28 33.28-33.28s33.28 14.848 33.28 33.28v335.872c0 18.432-14.848 33.28-33.28 33.28z m297.984 0c-18.432 0-33.28-14.848-33.28-33.28V346.624c0-18.432 14.848-33.28 33.28-33.28s33.28 14.848 33.28 33.28v335.872c0 18.432-14.848 33.28-33.28 33.28zM1006.592 771.072h-221.696c-9.216 0-16.896-7.68-16.896-16.896 0-9.216 7.68-16.896 16.896-16.896h221.696c9.216 0 16.896 7.68 16.896 16.896 0.512 9.216-7.168 16.896-16.896 16.896z" p-id="4337"></path></svg>',
        cache: !0
      },
      component: d
    };
    e.usePage(n);
  }
  uninstall() {
    console.log("uninstall");
  }
}
const m = new r();
export {
  m as default
};
