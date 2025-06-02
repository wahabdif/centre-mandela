// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: { version: 'detect' },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/', 'client/dist'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-bind': ['warn', { ignoreRefs: true, allowArrowFunctions: false }],
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'error',
  },
};
