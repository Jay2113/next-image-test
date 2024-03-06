const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms-tc.pbskids.org',
        port: '',
        pathname: '/global/theme-backgrounds/*',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes : [7680],
  },
  webpack(config, options) {
    if (!options.dev) {
        // Remove content hash from JavaScript file names
        config.output.filename = config.output.filename.replace('-[contenthash]', '');
        config.output.chunkFilename = config.output.chunkFilename.replace('.[contenthash]', '');

        // Remove hash from CSS file names
        const NextMiniCssExtractPlugin = config.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin');
        if (NextMiniCssExtractPlugin) {
            NextMiniCssExtractPlugin.options.filename = NextMiniCssExtractPlugin.options.filename.replace('[contenthash]', '[name]');
            NextMiniCssExtractPlugin.options.chunkFilename = NextMiniCssExtractPlugin.options.chunkFilename.replace('[contenthash]', '[name]');
        }

        return config;
    }
  }
}