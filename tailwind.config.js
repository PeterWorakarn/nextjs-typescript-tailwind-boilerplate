module.exports = {
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.js',
      './src/**/*.tsx'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
