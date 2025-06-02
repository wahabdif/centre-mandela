// client/babel.config.js
module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [
    [
      'i18next-extract',
      {
        outputPath: 'src/locales/{{locale}}/{{ns}}.json',
        locales: ['fr', 'en', 'ar'],
        keyAsDefaultValue: true,
        useI18nextDefaultValue: ['fr'],
        discardOldKeys: true,
        failOnMissing: false,
      },
    ],
  ],
};
