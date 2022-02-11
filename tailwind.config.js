module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        500: '#0e101c',
        200:"#666666"
      },

      pink: '#ec5990',
      purple: '#081229',
      pinkLight: '#bf1650'
    },
    extend: {
      maxWidth: {
        125: '31.25rem',
      },
    },
  },
  plugins: [],
};
