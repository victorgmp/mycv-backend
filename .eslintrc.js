module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,

  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always',
    ],
    'arrow-spacing': [
      'error', { before: true, after: true },
    ],
    'no-console': 0,
    'no-unused-vars': 0,
    'consistent-return': 0,
  },
};
