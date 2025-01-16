import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettier,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      indent: ["error", 2, { SwitchCase: 1 }], // Enforce 2 spaces for indentation
      "no-trailing-spaces": "error", // Disallow trailing whitespace at the end of lines
      "no-mixed-spaces-and-tabs": "error", // Disallow mixed spaces and tabs for indentation
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      "no-plusplus": [
        "error",
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      "import/newline-after-import": ["error", { count: 1 }],
      "no-unused-vars": "error",
      "no-console": "warn",
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true },
      ], // Enforce double quotes
    },
  },
);
