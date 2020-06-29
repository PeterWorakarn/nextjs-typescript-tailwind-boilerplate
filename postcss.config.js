const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./src/**/*.js", "./src/**/*.tsx"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];

module.exports = {
  plugins: [
    ['postcss-easy-import', { prefix: "_" }],
    ['postcss-url', { url: "inline" }],
    "tailwindcss",
    "autoprefixer",
    ...(['staging', 'production'].includes(process.env.NODE_ENV) ? [purgecss] : [])
  ]
}
