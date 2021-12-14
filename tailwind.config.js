module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         colors:{
           primary: '#2E5EA0',
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }