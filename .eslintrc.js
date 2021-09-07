module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      "plugin:react/recommended"
    ],
    plugins: [
      "@typescript-eslint",
      "react"
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "comma-dangle": ["error", "never"],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "react/jsx-uses-vars": "error",
      "react/prop-types": "off",
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "semi": ["error", "always"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1, "maxBOF": 1 }],
      "eol-last": ["error", "always"],
      "no-multi-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "no-param-reassign": ["error", { "props": false }],
      "no-extra-parens": "off",
      "@typescript-eslint/no-extra-parens": ["error", "all", { "ignoreJSX": "multi-line" }],
      "space-before-blocks": "error",
      "keyword-spacing": ["error", { "before": true, "after": true }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  