module.exports = {
  ignorePatterns: ['**/*.stories.tsx'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'unused-imports'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-boolean-value': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-cycle': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': false,
      },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: [
          'TSTypeAliasDeclaration',
          'TSTypeReference *',
          'TSUnionType',
          'TemplateLiteral',
          'TemplateLiteral *',
          'TSTypeParameterInstantiation',
        ],
        SwitchCase: 1,
      },
    ],
    'unused-imports/no-unused-imports-ts': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
};
