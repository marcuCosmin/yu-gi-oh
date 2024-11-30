import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import importPlugin from "eslint-plugin-import"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      ...tseslint.configs.recommended,
      js.configs.recommended,
      importPlugin.flatConfigs.recommended
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    settings: {
      "import/resolver": {
        alias: [["", "./public"]]
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-useless-assignment": "error",
      "require-await": "error",
      "prefer-destructuring": "error",
      "prefer-arrow-callback": "error",
      "no-useless-return": "error",
      "no-unneeded-ternary": "error",
      "no-nested-ternary": "error",
      "no-empty-function": "error",
      "no-else-return": "error",
      "no-console": "error",
      "func-style": ["error", "expression"],
      "curly": ["error", "all"],
      "eqeqeq": "error",
      "camelcase": "error",
      "import/no-default-export": "error",
      "import/default": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ]
    }
  }
)
