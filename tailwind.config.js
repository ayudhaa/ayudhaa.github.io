/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: {
  //         DEFAULT: '#ffffff',
  //         dark: '#0a0a0a'
  //       },
  //       foreground: {
  //         DEFAULT: '#000000',
  //         dark: '#ffffff'
  //       }
  //     }
  //   },
  // },
  theme: {
    extend: {
      colors: {
        darkbg: "#6E6E6E",
        darktext: "#ffffff",
      },
    },
  },
  plugins: [],
}