// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // Supprime les warnings des variables inutilisées
    'no-shadow': 'off', // Désactive le conflit de nom avec les variables globales
    'react/react-in-jsx-scope': 'off', // Désactive l'erreur liée à React
    '@typescript-eslint/no-explicit-any': 'off', // Autorise `any` pour éviter les erreurs bloquantes
    'react/no-unescaped-entities': 'off', // Désactive l'avertissement sur les entités HTML non échappées
  },
};