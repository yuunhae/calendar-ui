import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(["dist/**", 'tailwind.config.js']),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import : importPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
    "prefer-const": "warn",
    "no-undef": "off",
    "import/order": [
    "warn",
    {
    "groups": ["builtin", "external", ["parent", "sibling"], "index"],
    "newlines-between": "always"
    }
  ],
  "@typescript-eslint/no-unnecessary-type-constraint": "off",
  "@typescript-eslint/no-explicit-any": "warn",
  "@next/next/no-img-element": "off",
  "@typescript-eslint/no-empty-interface": "off",
  }}

])
