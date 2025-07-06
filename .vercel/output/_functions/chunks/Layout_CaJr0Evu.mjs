import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, f as renderSlot, a as renderTemplate, r as renderComponent, g as renderScript, h as renderHead } from './astro/server_CxW1gua2.mjs';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(Astro2.props.href || "#", "href")} class="flex-row justify-center text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none
focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55
mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70
hover:opacity-100"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/src/components/HeaderButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  console.log("javascript");
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5xl tracking-tight text-white font-extrabold">
SpaceX Launches 🚀
</h2> <p class="font-light text-gray-500 sm:text-xl ">
All the information about the SpaceX launches.
</p> </div> <nav class="flex flex-col items-center justify-between w-full text-center md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white ", "href": "/" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path> <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path> <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path> </svg>`, "default": ($$result2) => renderTemplate`Ultimos Lanzamientos
 ` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white ", "href": "/about" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M12 9h.01"></path> <path d="M11 12h1v4h1"></path> </svg>`, "default": ($$result2) => renderTemplate`Sobre el proyecto
 ` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white ", "href": "/oldest" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-down"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M20.984 12.535a9 9 0 1 0 -8.431 8.448"></path> <path d="M12 7v5l3 3"></path> <path d="M19 16v6"></path> <path d="M22 19l-3 3l-3 -3"></path> </svg>`, "default": ($$result2) => renderTemplate`Los mas viejos
 ` })} </nav> </header>`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Javier/Desktop/space/curso-astro-demo/node_modules/.pnpm/astro@5.10.2_@types+node@24_eda439b5e1bb0f0ec97dc210dd1887b0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/node_modules/.pnpm/astro@5.10.2_@types+node@24_eda439b5e1bb0f0ec97dc210dd1887b0/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${Astro2.props.title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <!-- 
		Si queremos que una barra lateral, el footer o cualquier componente se mantenga pasando de una página a otra, debe ir en el Layout 
	--> <body class="bg-gray-900 min-h-screen pb-32"> <!-- Header del sitio --> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl mx-auto px-4 m-auto"> <!-- Aquí se renderiza el contenido de cada página --> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
