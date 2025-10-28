import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      // Add custom rules here
    },
  },
  {
    ignores: ['**/*.html', 'node_modules/**', '.git/**'],
  },
];