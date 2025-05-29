module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    ['i18next-extract', {
      // Dossier où les fichiers de traductions seront générés
      outputPath: 'locales/{{locale}}/{{ns}}.json',
      locales: ['fr', 'en', 'ar'],
      keyAsDefaultValue: true, // pour que la valeur soit la clé si pas trouvée
      useI18nextDefaultValue: ['fr'], // langue source (français ici)
      discardOldKeys: true,
      failOnMissing: false,
    }]
  ]
};
