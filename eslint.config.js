import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"], // Updated file extensions
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module", // Added for JS modules
      globals: {
        ...globals.browser,
      },
      parserOptions: { // Added for JSX support
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Use JS recommended rules
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Removed '@typescript-eslint/no-unused-vars'
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Standard JS rule for unused vars
    },
  }
];
