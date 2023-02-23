module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-empty": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
}
