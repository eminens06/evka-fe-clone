const withPlugins = require('next-compose-plugins');
const withLess = require('next-with-less');

module.exports = withPlugins([
  [
    withLess,
    {
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ],
  {
    webpack: (config) => {
      // LESS ve CSS dosyalarını devre dışı bırak
      config.module.rules.push({
        test: /\.less$/,
        use: 'null-loader',
      });

      config.module.rules.push({
        test: /\.css$/,
        use: 'null-loader',
      });

      return config;
    },
  },
]);

