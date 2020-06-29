const nextConfig = {
  webpack: (config, { isServer, dev }) => {
    config.module.rules.unshift({
      enforce: 'pre',
      test: /\.tsx?$/,
      exclude: [/node_modules/],
      use: ['eslint-loader']
    });
    return config;
  },
};

module.exports = nextConfig;
