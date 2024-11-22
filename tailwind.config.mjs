/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'titre': ['Bebas'],
				'creative': ['Ingrid'],
				'corps': 'var(--ff-rm)',
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
