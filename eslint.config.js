import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import unocss from '@unocss/eslint-config/flat'

export default [
  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      'src/auto-imports.d.ts',
      'src/components.d.ts',
    ],
  },

  {
    name: 'app/auto-imports',
    languageOptions: {
      globals: {
        // Add your auto-imported functions here if needed
      },
    },
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    name: 'app/vue-jsx',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,vue}'],
    languageOptions: {
      parser: pluginVue.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        parser: '@typescript-eslint/parser', // For TypeScript
      },
    },
  },

  {
    name: 'app/vue-rules',
    rules: {
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: ['ts', 'tsx'],
          },
        },
      ],
    },
  },

  unocss,
  skipFormatting,
]
