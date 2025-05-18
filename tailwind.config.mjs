export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['font-heading'], // ← force this class to always exist
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        dark: 'var(--color-dark)',
      },
    },
  },
  plugins: [],
};
