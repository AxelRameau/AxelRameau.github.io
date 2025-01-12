/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        titre: ["Bebas"],
        creative: ["Ingrid"],
        corps: "var(--ff-rm)",
      },
      colors: {
        rouge: "var(--clr-rouge)",
        beige: "var(--clr-beige)",
        noir: "var(--clr-noir)",
      },
      backgroundImage: {
        "gallerie1": "url('/img-portfolio/bmw-axel-concours.jpg')",
        "gallerie2": "url('/img-portfolio/chag-blanc-post.jpg')",
		    "gallerie3": "url('/img-portfolio/cherie.jpg')",
		    "gallerie4": "url('/img-portfolio/fredo_chien.jpg')",
		    "gallerie5": "url('/img-portfolio/lily_miroir.jpg')",
        "moi": "url('/moi-classe.jpg')",
      },
    },
  },

  plugins: [],
};
