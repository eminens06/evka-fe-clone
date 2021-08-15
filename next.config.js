/** See https://github.com/zeit/next.js/tree/canary/examples/with-ant-design */
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const lessToJs = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const withPlugins = require('next-compose-plugins');

const themeVariables = lessToJs(
  fs.readFileSync(path.resolve(__dirname, './less/antd-custom.less'), 'utf-8'),
);

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    spaceID: process.env.spaceID,
    accessTokenDelivery: process.env.accessTokenDelivery,
    API_URL: process.env.API_URL,
    VERSION: process.env.VERSION,
    GIT_COMMIT: process.env.GIT_COMMIT,
  },
  distDir: '.next',
};

const plugins = [
  withCss,
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }
      return config;
    },
  }),
];

module.exports = withPlugins(plugins, nextConfig);

/* module.exports = withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    return config;
  },
}); */
