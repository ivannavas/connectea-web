import { f as createComponent, r as renderTemplate, k as renderHead } from '../chunks/astro/server_DFzfzJwW.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RecoverOwnership = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html><head><meta charset="utf-8"><script>
    var supported = ['en', 'es', 'zh'];
    var lang = (navigator.language || 'en').split('-')[0].toLowerCase();
    var target = supported.includes(lang) ? lang : 'en';
    window.location.replace('/' + target + '/recover-ownership/' + window.location.search);
  <\/script>`, "</head> <body></body></html>"])), renderHead());
}, "C:/connectea-web/src/pages/recover-ownership.astro", void 0);

const $$file = "C:/connectea-web/src/pages/recover-ownership.astro";
const $$url = "/recover-ownership/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RecoverOwnership,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
