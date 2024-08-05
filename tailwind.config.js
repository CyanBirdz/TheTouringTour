/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        customBlue: '#081825',
        customDarkBlue: '#010E17',

      },
      maxWidth: {
        'custom-max': '45rem', // Replace '45rem' with your desired value
      },
      minWidth: {
        'custom-max': '45rem', // Replace '45rem' with your desired value
      },

      screens: {
        'xl': '1400px',
        'xs': '480px',
        'xml': '1340px',
        // Add more custom breakpoints if necessary
      },


      animation: {
        marquee: 'marquee 70s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

      borderWidth: {
        '0.5': '0.1px',   // Custom border width of 3px
       
      },

      inset: {
        '1/5': '28%',
        '1/6': '16%',
      },
      spacing: {
        'screen-third': '7vw', // Define a custom spacing for 1/3 of the screen width
      },


      
      height: {
        '0.5': '0.1rem', 
        '180': '85rem', 
        '1/1': '100%',
        '3/12': '90%',
        '170': '80rem', 
        '150': '67.5rem',
        '120': '46rem', 
        '100': '40rem', // Set a custom height value (e.g., 30rem)
        '93': '22rem', 
        '99': '35rem', 
        '98': '28rem',
      },

      width: {
        '1/2.5': '55.5%',
        '1/3.5': '28.5714286%',
        '90': '21rem',
        '93': '25rem',
        '99': '28rem',
        '100': '30rem',
        '120': '36rem',
        '160': '80rem',
        '140': '60rem',
        '130': '45rem',
        '162': '85rem',
        '180': '105rem',
        
      },

      borderRadius: {
        '4xl': '2rem', // Set a custom border-radius value (e.g., 2rem)
        '5xl': '4rem', // Set another custom border-radius value
      },




    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

