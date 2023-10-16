/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%' : { opacity: 0},
          '100%' : { opacity: 1}
        }
      },
      animation: {
        fade: 'fadeIn .25s'
      }
    },
  },
  plugins: [],
}

