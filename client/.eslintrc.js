module.exports = {
  env: {
    node: true,
    browser: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};

// parser: '@typescript-eslint/parser' tells ESLint to use the parser package you installed (@typescript-eslint/parser).
// This allows ESLint to understand TypeScript syntax.
// This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.

// plugins: ['@typescript-eslint'] tells ESLint to load the plugin package you installed (@typescript-eslint/eslint-plugin).
// This allows you to use the rules within your codebase.

// extends: [ ... ] tells ESLint that your config extends the given configurations.
// eslint:recommended is ESLint's inbuilt "recommended" config - it turns on a small, sensible set of rules which lint for well-known best-practices.
// plugin:@typescript-eslint/recommended is our "recommended" config - it's just like eslint:recommended, except it only turns on rules from our TypeScript-specific plugin.

// I have added two more plugins eslint-plugin-react and eslint-plugin-react-hooks. You can find more info about them here https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#plugins
