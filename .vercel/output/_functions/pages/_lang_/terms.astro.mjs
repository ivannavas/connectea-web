import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, k as renderHead, n as renderComponent } from '../../chunks/astro/server_DFzfzJwW.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                    */
import { t as translations } from '../../chunks/translations_BO3RrnSn.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://connectea.net");
const $$TermsPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TermsPage;
  const { t, lang } = Astro2.props;
  const tp = t.termsPage;
  const langLabels = { en: "EN", es: "ES", zh: "\u4E2D\u6587" };
  return renderTemplate(_a || (_a = __template(["<html", ' dir="ltr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="robots" content="index, follow"><link rel="canonical"', `><link rel="alternate" hreflang="en" href="https://connectea.net/en/terms/"><link rel="alternate" hreflang="es" href="https://connectea.net/es/terms/"><link rel="alternate" hreflang="zh" href="https://connectea.net/zh/terms/"><link rel="alternate" hreflang="x-default" href="https://connectea.net/en/terms/"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png"><link rel="apple-touch-icon" sizes="192x192" href="/favicon-192.png"><link rel="manifest" href="/site.webmanifest"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"><!-- Google Ads --><script async src="https://www.googletagmanager.com/gtag/js?id=AW-18149030492"><\/script><script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-18149030492');
  <\/script><!-- Google Ads End -->`, '</head> <body> <div class="bg-deco" aria-hidden="true"> <div class="blob blob-1"></div> <div class="blob blob-2"></div> </div> <nav id="nav" role="navigation" aria-label="Main navigation"> <div class="container nav-inner"> <a', ' class="logo" aria-label="Connectea home"> <div class="logo-icon" aria-hidden="true"> <svg width="20" height="20" viewBox="0 0 32 32" fill="none"> <circle cx="10" cy="16" r="4" fill="white"></circle> <circle cx="24" cy="9" r="3" fill="white" opacity="0.85"></circle> <circle cx="24" cy="23" r="3" fill="white" opacity="0.85"></circle> <line x1="10" y1="16" x2="24" y2="9" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.7"></line> <line x1="10" y1="16" x2="24" y2="23" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.7"></line> </svg> </div> <span>Connectea</span> </a> <div style="flex:1"></div> <div class="lang-switcher" role="group" aria-label="Language selector"> ', ' </div> </div> </nav> <main> <header class="page-header"> <div class="container"> <a', ' class="back-link">\u2190 ', '</a> <h1 class="page-title">', '</h1> <p class="page-date">', '</p> </div> </header> <div class="terms-body"> <div class="container"> <div class="terms-inner"> ', ' </div> </div> </div> </main> <footer role="contentinfo"> <div class="container"> <div class="footer-row"> <p class="footer-copy">', '</p> <div class="lang-switcher" role="group" aria-label="Language selector"> ', " </div> </div> </div> </footer> </body></html>"])), addAttribute(lang, "lang"), tp.pageTitle, addAttribute(tp.metaDescription, "content"), addAttribute(`https://connectea.net/${lang}/terms/`, "href"), renderHead(), addAttribute(`/${lang}/`, "href"), ["en", "es", "zh"].map((l) => renderTemplate`<a${addAttribute(`/${l}/terms/`, "href")}${addAttribute(`lang-btn${l === lang ? " active" : ""}`, "class")}${addAttribute(l, "lang")}>${langLabels[l]}</a>`), addAttribute(`/${lang}/`, "href"), tp.backHome, tp.heading, tp.lastUpdated, tp.sections.map((section) => renderTemplate`<section class="terms-section"> <h2>${section.title}</h2> ${section.paragraphs.map((p) => renderTemplate`<p>${p}</p>`)} ${section.items && renderTemplate`<ul> ${section.items.map((item) => renderTemplate`<li>${item}</li>`)} </ul>`} ${section.warning && renderTemplate`<div class="warning-box" role="note"> <span aria-hidden="true">⚠️</span> <p>${section.warning}</p> </div>`} </section>`), t.footer.copyright, ["en", "es", "zh"].map((l) => renderTemplate`<a${addAttribute(`/${l}/terms/`, "href")}${addAttribute(`lang-btn${l === lang ? " active" : ""}`, "class")}${addAttribute(l, "lang")}>${langLabels[l]}</a>`));
}, "C:/connectea-web/src/layouts/TermsPage.astro", void 0);

const $$Astro = createAstro("https://connectea.net");
function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "es" } },
    { params: { lang: "zh" } }
  ];
}
const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Terms;
  const { lang } = Astro2.params;
  const t = translations[lang];
  return renderTemplate`${renderComponent($$result, "TermsPage", $$TermsPage, { "t": t, "lang": lang })}`;
}, "C:/connectea-web/src/pages/[lang]/terms.astro", void 0);

const $$file = "C:/connectea-web/src/pages/[lang]/terms.astro";
const $$url = "/[lang]/terms/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
