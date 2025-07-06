/* empty css                                 */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CxW1gua2.mjs';
import { $ as $$Layout } from '../chunks/Layout_CaJr0Evu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SpaceX Launches - About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>
About the project
</h1> <p>
The SpaceX launches project is a demo for the Astro course.
</p> ` })}`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/src/pages/about.astro", void 0);

const $$file = "C:/Users/Javier/Desktop/space/curso-astro-demo/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
