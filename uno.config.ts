import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        ep: () => import('@iconify-json/ep/icons.json').then((i) => i.default),
        lucide: () => import('@iconify-json/lucide/icons.json').then((i) => i.default),
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--es-color-primary)',
        light: {
          3: 'var(--es-color-primary-light-3)',
          5: 'var(--es-color-primary-light-5)',
          7: 'var(--es-color-primary-light-7)',
          8: 'var(--es-color-primary-light-8)',
          9: 'var(--es-color-primary-light-9)',
        },
        dark: {
          2: 'var(--es-color-primary-dark-2)',
        },
      },
      success: {
        DEFAULT: 'var(--es-color-success)',
        light: {
          3: 'var(--es-color-success-light-3)',
          5: 'var(--es-color-success-light-5)',
          7: 'var(--es-color-success-light-7)',
          8: 'var(--es-color-success-light-8)',
          9: 'var(--es-color-success-light-9)',
        },
        dark: {
          2: 'var(--es-color-success-dark-2)',
        },
      },
      warning: {
        DEFAULT: 'var(--es-color-warning)',
        light: {
          3: 'var(--es-color-warning-light-3)',
          5: 'var(--es-color-warning-light-5)',
          7: 'var(--es-color-warning-light-7)',
          8: 'var(--es-color-warning-light-8)',
          9: 'var(--es-color-warning-light-9)',
        },
        dark: {
          2: 'var(--es-color-warning-dark-2)',
        },
      },
      danger: {
        DEFAULT: 'var(--es-color-danger)',
        light: {
          3: 'var(--es-color-danger-light-3)',
          5: 'var(--es-color-danger-light-5)',
          7: 'var(--es-color-danger-light-7)',
          8: 'var(--es-color-danger-light-8)',
          9: 'var(--es-color-danger-light-9)',
        },
        dark: {
          2: 'var(--es-color-danger-dark-2)',
        },
      },
      info: {
        DEFAULT: 'var(--es-color-info)',
        light: {
          3: 'var(--es-color-info-light-3)',
          5: 'var(--es-color-info-light-5)',
          7: 'var(--es-color-info-light-7)',
          8: 'var(--es-color-info-light-8)',
          9: 'var(--es-color-info-light-9)',
        },
        dark: {
          2: 'var(--es-color-info-dark-2)',
        },
      },
      error: {
        DEFAULT: 'var(--es-color-error)',
        light: {
          3: 'var(--es-color-error-light-3)',
          5: 'var(--es-color-error-light-5)',
          7: 'var(--es-color-error-light-7)',
          8: 'var(--es-color-error-light-8)',
          9: 'var(--es-color-error-light-9)',
        },
        dark: {
          2: 'var(--es-color-error-dark-2)',
        },
      },
    },
  },
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    [
      'btn',
      'px-4 py-2 font-bold rounded-lg inline-block cursor-pointer transition duration-100 disabled:cursor-not-allowed focus:outline-none border-none bg-gray-100 hover:bg-gray-200 active:bg-gray-300 dark:bg-dark-500 dark:hover:bg-dark-400 dark:active:bg-dark-300 dark:text-gray-200 font-[var(--es-font-weight-primary)]',
    ],

    // primary按钮
    [
      'btn-primary',
      'btn bg-primary hover:bg-primary-light-3 active:bg-primary-dark-2 disabled:bg-primary-light-5 disabled:opacity-50 text-white dark:bg-primary dark:hover:bg-primary-light-3 dark:active:bg-primary-dark-2',
    ],

    // success按钮
    [
      'btn-success',
      'btn bg-success hover:bg-success-light-3 active:bg-success-dark-2 disabled:bg-success-light-5 disabled:opacity-50 text-white dark:bg-success dark:hover:bg-success-light-3 dark:active:bg-success-dark-2',
    ],

    // warning按钮
    [
      'btn-warning',
      'btn bg-warning hover:bg-warning-light-3 active:bg-warning-dark-2 disabled:bg-warning-light-5 disabled:opacity-50 text-white dark:bg-warning dark:hover:bg-warning-light-3 dark:active:bg-warning-dark-2',
    ],

    // danger按钮
    [
      'btn-danger',
      'btn bg-danger hover:bg-danger-light-3 active:bg-danger-dark-2 disabled:bg-danger-light-5 disabled:opacity-50 text-white dark:bg-danger dark:hover:bg-danger-light-3 dark:active:bg-danger-dark-2',
    ],

    // error按钮
    [
      'btn-error',
      'btn bg-error hover:bg-error-light-3 active:bg-error-dark-2 disabled:bg-error-light-5 disabled:opacity-50 text-white dark:bg-error dark:hover:bg-error-light-3 dark:active:bg-error-dark-2',
    ],

    // info按钮
    [
      'btn-info',
      'btn bg-info hover:bg-info-light-3 active:bg-info-dark-2 disabled:bg-info-light-5 disabled:opacity-50 text-white dark:bg-info dark:hover:bg-info-light-3 dark:active:bg-info-dark-2',
    ],

    ['gradient-bg', 'fixed inset-0 -z-1 pointer-events-none'],
    [
      /^gradient-primary-(\d+)$/,
      ([, size]) =>
        `bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),var(--es-color-primary-light-8)_0%,transparent_${size}px)]`,
    ],
  ],
  rules: [
    [
      /^bg-(\d+)$/,
      ([, size]) => ({
        'background-size': `${size}px ${size}px`,
      }),
    ],
  ],
})
