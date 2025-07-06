/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_CxW1gua2.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CaJr0Evu.mjs';
import { g as getLaunchBy } from '../../chunks/spacex_kRsCm4RR.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await getLaunchBy({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Launch ${launch?.name || ""}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a${addAttribute("/", "href")} class="flex hover:underline opacity-70 justify-center items-center mb-5" onclick="if(history.length > 1){ event.preventDefault(); history.back(); }">← Volver atras</a> <article class="flex flex-col gap-y-4 p-4 bg-gray-800 rounded-lg shadow-md"> <aside class="flex flex-col items-center gap-4"> <img${addAttribute(launch?.links?.patch?.small, "src")}${addAttribute(launch?.name, "alt")} class="w-52 h-auto"${addAttribute(renderTransition($$result2, "5whsexuw", "fade", `launch-${id}`), "data-astro-transition-scope")}> <h2 class="text-2xl font-bold mb-2">${launch?.name}</h2> <p>${launch?.details}</p> <p class="text-sm text-gray-400">${launch?.date_utc}</p> </aside> </article> ` })}`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/src/pages/launch/[id].astro", "self");

const $$file = "C:/Users/Javier/Desktop/space/curso-astro-demo/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
