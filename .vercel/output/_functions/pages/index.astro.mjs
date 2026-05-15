import { f as createComponent, r as renderTemplate, k as renderHead, o as renderScript } from '../chunks/astro/server_DFzfzJwW.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Connectea \u2014 Share files & play together, no account needed</title><meta name="description" content="Connectea lets you share files with friends and create Minecraft servers instantly, no account required."><link rel="canonical" href="https://connectea.net/en/"><meta name="robots" content="index, follow"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"><link rel="apple-touch-icon" sizes="192x192" href="/favicon-192.png"><link rel="manifest" href="/site.webmanifest"><script>
    var supported = ['en', 'es', 'zh'];
    var lang = (navigator.language || 'en').split('-')[0].toLowerCase();
    var target = supported.includes(lang) ? lang : 'en';
    window.location.replace('/' + target + '/');
  <\/script><!-- TikTok Pixel Code Start -->`, "<!-- TikTok Pixel Code End -->", "</head> <body></body></html>"])), renderScript($$result, "C:/connectea-web/src/pages/index.astro?astro&type=script&index=0&lang.ts"), renderHead());
}, "C:/connectea-web/src/pages/index.astro", void 0);

const $$file = "C:/connectea-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
