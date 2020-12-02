module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx'],
  theme: {
    themeVariants: ['dark'],
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive','hover', 'focus', 'dark'],
    textColor: ['responsive','hover', 'focus', 'dark'],
  },
  plugins: [require('tailwindcss-multi-theme')],
}
