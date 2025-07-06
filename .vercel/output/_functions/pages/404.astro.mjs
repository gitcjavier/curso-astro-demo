/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CxW1gua2.mjs';
import { $ as $$Layout } from '../chunks/Layout_CaJr0Evu.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center "> <h1 class="text-3xl font-bold text-white text-center">Esta pagina no existe</h1> <img src="https://midu.dev/images/this-is-fine-404.gif" alt=""> </div> ` })}`;
}, "C:/Users/Javier/Desktop/space/curso-astro-demo/src/pages/404.astro", void 0);

const $$file = "C:/Users/Javier/Desktop/space/curso-astro-demo/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
