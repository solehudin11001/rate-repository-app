module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:prettier/recommended", // Integrasi Prettier
  ],
  plugins: [
    "react",
    "react-native",
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "prettier",
  ],
  env: {
    "react-native/react-native": true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": ["error"],
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "off",
    "react-native/split-platform-components": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
