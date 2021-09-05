module.exports = {
   purge: {
      //enabled: true,
      content: ["./docs/**/*.html"],
   },
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            brand: {
               DEFAULT: "#04e8b9"
            },
            shiny: {
               DEFAULT: "#a2c3a4"
            }
         }
      }
   },
   variants: {},
   plugins: [],
};
