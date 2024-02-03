module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    },
  },
  plugins: ["react-hooks", "@typescript-eslint", 'react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    'prettier/prettier': [
      "error", {
        "printWidth": 100,
        "trailingComma": "es5",
        "semi": true,
        "singleQuote": true,
        "endOfLine": "auto",
        "max-len": ["error", { "code": 100 }],
        "no-duplicate-imports": "error",
      },
    ]
  },
}
