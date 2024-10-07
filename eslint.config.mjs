import simpleImportSort from 'eslint-plugin-simple-import-sort'
import spellcheck from 'eslint-plugin-spellcheck'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import vue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default createConfigForNuxt({
  features: {
    stylistic: true,
    tooling: true,
  },
})
  .prepend({
    languageOptions: {
      globals: {
        defineNuxtConfig: 'readonly',
        NodeJS: 'readonly',
        vueIndentScriptAndStyle: true, // for prettier
      },
    },
  })
  // Override some rules in a specific config, based on their name
  .override('nuxt/typescript/rules', {
    rules: {
      'vue/no-mutating-props': ['warn'], // this for form.username or formState
      'vue/no-lone-template': ['warn'], // this for template inside another template
      'vue/require-default-prop': ['warn'], // this for props (set type and required is obligatory)
      '@typescript-eslint/no-explicit-any': 'warn', // for any
      '@typescript-eslint/no-wrapper-object-types': 'warn', // for String, Boolean, Number ..
      '@typescript-eslint/explicit-function-return-type': ['off', { allowExpressions: true }],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-use-before-define': ['warn', { functions: false }],
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-namespace': ['warn', { allowDeclarations: true }],
      '@typescript-eslint/no-inferrable-types': ['warn', { ignoreProperties: true }],
      'no-unused-expressions': 'off',
      'object-curly-spacing': 'off',
      'space-in-parens': ['warn', 'never'],
      'computed-property-spacing': ['warn', 'never', { enforceForClassMembers: false }],
      'no-whitespace-before-property': ['warn'],
      'no-multi-spaces': ['warn', { ignoreEOLComments: false }],
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      'no-unnecessary-boolean-literal-compare': 'off',
      'no-console': ['error'], // for console.log
      'space-before-blocks': 'off',
      'space-infix-ops': ['warn', { int32Hint: false }],
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/ban-types': 'off',
      'vue/no-unused-vars': 'error',
    },
  })
  // Stylistic rules
  .override('nuxt/stylistic', {
    rules: {
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/indent-binary-ops': 'off',
      '@stylistic/max-statements-per-line': 'off',
      '@stylistic/operator-linebreak': 'off',
      '@stylistic/quote-props': ['error', 'consistent'],
      '@stylistic/space-before-function-paren': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/max-attributes-per-line': 'off',
      '@stylistic/member-delimiter-style': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/ html-indent': 'off',
    },
  })
  .append({
    files: ['**/*.vue', '**/*.ts'],
    ignores: ['node_modules/**'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      spellcheck,
      vue,
      'eslint-config-prettier': eslintConfigPrettier,
    },
    rules: {
      'spellcheck/spell-checker': 'off', // for warning under axios;
      'simple-import-sort/imports': 'off', // for import;
      'simple-import-sort/exports': 'warn',
    },
  })
