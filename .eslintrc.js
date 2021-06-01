module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['*.test.*'],
      env: {
        jest: true,
      },
    },
  ],
  plugins: [
    '@babel',
    '@typescript-eslint',
    'import',
    'jsx-max-len',
    'simple-import-sort',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
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
    'simple-import-sort/exports': 'error',
  },
};
