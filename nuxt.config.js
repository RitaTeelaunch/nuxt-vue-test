export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'public',

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'nuxt-vue-test',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: {
      name: 'fade-slide',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout-slide',
      mode: 'out-in',
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/antd.ts', '~/plugins/error-handler.ts'],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/public/assets/fonts/fonts.css', // to import font
    '@/public/assets/transition/main.css', // for transition
    '@/public/assets/styles/antd.css', // for override antd
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/eslint', '@pinia/nuxt'],

  // for prettier
  eslint: {
    config: {
      stylistic: true,
      checker: {
        configType: 'eslint.config',
      },
    },
  },

  // Enable SSR globally
  ssr: true,

  pages: true,

  devtools: { enabled: true },

  router: {
    middleware: ['logger'],
  },

  compatibilityDate: '2024-09-27',
})
