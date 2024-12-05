import animations from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "rgb(var(--color-bg))",
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				primary: "#1d4ed8",
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
        specialBlue: "#172554",
		specialRose: "#bf195e",
			},
			screens:{
				midmd:"880px"
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		animations,
		({ addComponents }) => {
		  addComponents({
			".cp-v": {
			  clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 50% 100%, 0 85%)",
			},
		});
	},
],
}
