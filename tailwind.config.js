module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      overscrollBehavior: ['hover', 'focus'],
      margin: ['responsive', 'hover', 'first'],
  },
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [require('tailwind-scrollbar-hide')],
  
}
