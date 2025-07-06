/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CxW1gua2.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CaJr0Evu.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<h1 id=\"esto-es-un-ejemplo-de-alticulo\">Esto es un ejemplo de alticulo</h1>\n<p>lorem ipsun</p>\n<h2 id=\"subtitulo\">Subtitulo</h2>\n<p>lorem ipsum dolor</p>\n<h2 id=\"subtitulo-2\">Subtitulo 2</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">function</span><span style=\"color:#E1E4E8\"> () {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    console.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'HolaMundo'</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span></code></pre>";

				const frontmatter = {"title":"Contenido de la pagina","layout":"../../layouts/Layout.astro"};
				const file = "C:/Users/Javier/Desktop/space/curso-astro-demo/src/pages/blog/mi-primer-articulo.md";
				const url = "/blog/mi-primer-articulo";
				function rawContent() {
					return "   \r\n                               \r\n                                    \r\n   \r\n\r\n# Esto es un ejemplo de alticulo\r\n\r\nlorem ipsun\r\n\r\n## Subtitulo\r\n\r\nlorem ipsum dolor \r\n\r\n## Subtitulo 2\r\n\r\n```javascript\r\nfunction () {\r\n    console.log('HolaMundo')\r\n}\r\n```";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"esto-es-un-ejemplo-de-alticulo","text":"Esto es un ejemplo de alticulo"},{"depth":2,"slug":"subtitulo","text":"Subtitulo"},{"depth":2,"slug":"subtitulo-2","text":"Subtitulo 2"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
