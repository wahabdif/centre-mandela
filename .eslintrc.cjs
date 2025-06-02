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
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-shadow': ['error', { builtinGlobals: true }],
    'react/react-in-jsx-scope': 'off', // Désactive l'erreur liée à React
  },
};