/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        'shine-pulse': {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      backgroundSize: {
        'shine-size': '300% 300%',
      },
    },
  },
  plugins: [],
};
