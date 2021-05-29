module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['relay', { artifactDirectory: './src/__generated__' }],
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
};
