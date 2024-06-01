import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAE208',
        'my-black': '#181818',
        'my-dark-grey': '#201F22',
        'my-light-grey': '#3A393E',
        'my-light-light-grey': '#CECECE',
        'my-red': '#DA0000',
        'my-white-bone': '#EEEAEA',
      },
      height: {
        nav: '64px',
        footer: '70px',
      },
    },
  },
  plugins: [],
};
export default config;
