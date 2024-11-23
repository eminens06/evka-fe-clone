module.exports = {
  presets: ['next/babel'], // Next.js için gerekli Babel preset'i
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: true, // LESS kullanımı için true yapıyoruz
      },
    ],
  ],
};
