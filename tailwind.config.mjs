/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'titre': ['Bebas', 'monospace'],
				'creative': ['Ingrid', 'monospace'],
			  },
			  colors:{
				"rouge": "var(--clr-rouge)",
				"beige": "var(--clr-beige)",
				"noir": "var(--clr-noir)"
				},
		},
	},
	plugins: [],
}
