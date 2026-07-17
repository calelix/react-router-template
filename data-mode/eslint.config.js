import js from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import onlyWarn from "eslint-plugin-only-warn"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "@stylistic": stylistic,
      "simple-import-sort": simpleImportSort,
      // only-warn: merely registering it downgrades every error severity to warn.
      "only-warn": onlyWarn,
    },
    rules: {
      "@stylistic/semi": ["error", "never"],
      // Keep a space after commas so import member reordering never leaves "a,b".
      "@stylistic/comma-spacing": ["error", { before: false, after: true }],
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/no-tabs": "error",
      "@stylistic/linebreak-style": ["error", "unix"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          enums: "always-multiline",
          tuples: "always-multiline",
          functions: "never",
          generics: "never",
        },
      ],

      // Auto-sort imports/exports. Workspace group dropped for a single project.
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Side-effect imports (e.g. global stylesheets) first.
            ["^\\u0000"],
            // Node builtins + third-party.
            ["^node:", "^@?\\w"],
            // Absolute path alias (@/*).
            ["^@/"],
            // Relative imports.
            ["^\\."],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
])
