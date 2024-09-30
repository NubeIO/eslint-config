const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked'
  ],
  env: {
    es2022: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { project: true },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', '@stylistic/js'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    // Note: you must disable the base rule as it can report incorrect errors
    'max-params': 'off',
    '@typescript-eslint/max-params': ['error'],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' }
    ],
    '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: { attributes: false } }],
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: true
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'brace-style': 'error',
    camelcase: 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    curly: 'error',
    eqeqeq: ['error', 'always'],
    'key-spacing': 'error',
    'eol-last': ['warn', 'always'],
    'linebreak-style': ['error', 'unix'],
    'newline-before-return': 'error',
    'no-await-in-loop': 'error',
    'no-console': ['error'],
    'no-multi-spaces': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'require-await': 'error',
    semi: ['error', 'always'],
    'space-before-blocks': 'error',
    'spaced-comment': ['error', 'always'],
    'space-infix-ops': 'error',
    'import/newline-after-import': ['error', { count: 1, exactCount: true, considerComments: true }],
    '@stylistic/js/padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: ['function'],
        next: ['function']
      }
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Style imports.
          ['^.+\\.?(css)$'],
          // `react` related packages.
          ['^react', '^@?\\w'],
          // `@nubeio` related packages.
          ['^@nubeio', '^@?\\w'],
          // Absolute imports.
          ['^src?\\w'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
        ]
      }
    ]
  },
  ignorePatterns: [
    '**/*.config.js',
    '**/*.config.ts',
    '**/*.d.ts',
    '**/*.config.cjs',
    '**/.eslintrc.cjs',
    'dist',
    'pnpm-lock.yaml'
  ],
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      // Define specific rules for test files
      files: ['*.test.ts', '*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        'no-console': 'off',
        '@typescript-eslint/dot-notation': 'off', // Allow access to private variables
        '@typescript-eslint/no-explicit-any': 'off', // Allow to cast to any to spy on private methods
        '@typescript-eslint/unbound-method': 'off' // Knows when it's ok to pass an unbound method to expect calls
      }
    }
  ]
};

module.exports = config;
