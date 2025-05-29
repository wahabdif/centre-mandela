module.exports = {
  locales: ['fr', 'en', 'ar'],
  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  defaultNamespace: 'default',
  keySeparator: false,
  namespaceSeparator: false,
  createOldCatalogs: false,
  keepRemoved: false,
  sort: true,
  useKeysAsDefaultValue: true,
};
