module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['simple-import-sort'],
  extends: ['airbnb-typescript'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            "^react",
            "^@?\\w",
            "^(main|core|arc-storybook|viz|design-system|placement|reporting|onboarding)(/.*|$)",
            "^\\u0000",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^.+\\.s?css$",
          ],
        ],
      }
    ],
  },
};
