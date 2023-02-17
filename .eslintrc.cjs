/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'multiline-comment-style': ['error', 'starred-block'],
    'no-warning-comments': [
      'warn',
      { terms: ['BUG', 'HACK', 'FIXME', 'TODO', 'XXX', 'NOTE'], location: 'start' },
    ],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
  },
};
