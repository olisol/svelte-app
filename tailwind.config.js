module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  content: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/index.html',
  ],
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },

  theme: {
    extend: {
      colors: {
        main: "#2F5C74",
        bg: "#FFF1E5",
      },
      fontFamily: {
        main: "Futura PT Cond Bold Italic",
        p: "Futura" 
      },
      boxShadow: {
        strong: '-3px -3px 0px #A7CBDC',
        dark:'-10px -10px 0px #2F5C74',
      },
      dropShadow: {
        strong: '-3px -3px 0px #A7CBDC',
      }

},
  },
  plugins: [],
}
