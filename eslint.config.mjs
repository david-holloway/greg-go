// eslint.config.mjs
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import eslintParserTs from '@typescript-eslint/parser';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: ['eslint.config.mjs'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['eslint.config.mjs'],
    languageOptions: {
      parser: eslintParserTs,
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
    },
  },
];
