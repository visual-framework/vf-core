module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  globals: {
    test: "readonly",
    expect: "readonly",
    describe: "readonly",
    beforeEach: "readonly",
    afterEach: "readonly",
    jest: "readonly"
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
        jsx: true
    }
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
