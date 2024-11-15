// tailwind.config.js o tailwind.config.mjs
import animations from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#6EC1E4',
        customPink: '#FF69B4', // Añade el color rosa personalizado
      },
    },
  },
  plugins: [
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