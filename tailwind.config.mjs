export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontWeight: {
        medium: '500',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}