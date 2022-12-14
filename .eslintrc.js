module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules'],
  rules: {
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 'off',
    'import/extensions': ['error', 'ignorePackages'],
  },
};
