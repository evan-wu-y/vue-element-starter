import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from '@unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      // targets to transform
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      // Automatically import Vue composition API functions
      imports: [
        'vue',
        {
          'vue-router': ['createRouter', 'createWebHistory', 'useRoute', 'useRouter'],
        },
        'pinia',
        '@vueuse/core',
        // {
        //   'element-plus': ['ElMessage', 'ElMessageBox', 'ElNotification', 'ElLoading'],
        // },
      ],
      // Generate typescript declaration file
      dts: 'types/auto-imports.d.ts',
      // Auto import for all module exports under directories
      dirs: ['src/composables/**', 'src/components/**', 'src/stores/**', 'src/router/**'],
      // Filepath to generate corresponding .eslintrc-auto-import.json file
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
    Components({
      // Allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md', 'tsx'],
      // Allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'types/components.d.ts',
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
})
