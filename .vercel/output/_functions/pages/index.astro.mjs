/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderTransition, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CxW1gua2.mjs';
import { $ as $$Layout } from '../chunks/Layout_CaJr0Evu.mjs';
/* empty css                                 */
import { a as getLatestLaunches } from '../chunks/spacex_kRsCm4RR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardLaunch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { id, flightNumber, img, details = "", success = false } = Astro2.props;
  const successText = success ? "\xC9xito" : "Fracaso";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/launch/${id}`, "href")} class="relative rounded-lg border shadow-sm bg-gray-800 border-gray-400 transition-transform
    flex flex-col overflow-hidden
    before:content-[''] before:absolute before:inset-0 before:rounded-lg
    before:pointer-events-none
    before:bg-gradient-to-br before:from-red-500 before:via-sky-500 before:to-red-300
    before:opacity-0 hover:before:opacity-80 before:transition-colors before:z-10
    before:p-[2px] hover:text-white group " style="
      --tw-before-mask-image: linear-gradient(#fff 0 0) content-box, linear-gradient(#205cca 0 0);
      --tw-before-mask-composite: exclude;
      --tw-before-mask-repeat: no-repeat;
      --tw-before-mask-size: 100% 100%;
      --tw-before-mask-position: center;
      mask-image: var(--tw-before-mask-image);
      mask-composite: var(--tw-before-mask-composite);
      -webkit-mask-image: var(--tw-before-mask-image);
      -webkit-mask-composite: var(--tw-before-mask-composite);
      -webkit-mask-repeat: var(--tw-before-mask-repeat);
      -webkit-mask-size: var(--tw-before-mask-size);
      -webkit-mask-position: var(--tw-before-mask-position);
    "> <picture class="flex justify-center p-4 z-20 relative"> <img class="mb-5 rounded-lg"${addAttribute(img, "src")}${addAttribute(`Patch for launch ${id}`, "alt")}${addAttribute(`launch-${id}`, "data-astro-transition-persist")}${addAttribute(renderTransition($$result, "wczufvlc", "fade", `launch-${id}`), "data-astro-transition-scope")}> </picture> <header class="p-4 flex-grow z-20 relative"> <span${addAttribute([
    "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded",
    {
      "bg-green-200 text-green-900": success,
      "bg-red-200 text-red-900": !success
    }
  ], "class:list")}> ${successText} </span> <h2 class="my-2 text-2xl font-bold tracking-tight text-white">
Fligth #${flightNumber} </h2> <p class="mb-4 font-light text-gray-400 w-40 h-10 overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-white"> ${details} </p> </header> </a>`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/src/components/CardLaunch.astro", "self");

const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const launches = await getLatestLaunches();
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${launches.map((launch) => renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "id": launch.id, "flightNumber": launch.flight_number, "img": launch.links.patch.small, "details": launch.details, "success": launch.success })}`)} </div>`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/src/components/Launches.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SpaceX Launches" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Launches", $$Launches, {})} ` })}`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/src/pages/index.astro", void 0);

const $$file = "C:/Users/Javier/Desktop/space/curso-astro-demo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
