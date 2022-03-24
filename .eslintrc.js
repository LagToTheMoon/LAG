module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: ["airbnb-base", "plugin:vue/vue3-essential", "prettier"],
  plugins: ["prettier"],
  rules: {
    "comma-dangle": "off",
    "class-methods-use-this": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    "no-restricted-syntax": false,
    "prettier/prettier": ["error", { singleQuote: true, endOfLine: "auto" }],
  },
};
