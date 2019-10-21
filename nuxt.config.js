module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Webshop WRAutomaten' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#7C0000' },
  /*
  ** Build configuration
  */
  build: {
    // Add exception
    transpile: [
      'vee-validate/dist/rules',
    ],
  },
  vue: {
    config: {
      performance: true,
    },
  },
  vendor: ['axios', 'vue-cookie', 'vue-notifications'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  plugins: [
    '~plugins/vue-cookie.ts',
    '~plugins/axios.ts',
    '~plugins/lazyload.ts',
    '~plugins/vuelidate.ts',
    '~plugins/composition-api.ts',
    '~plugins/validator.ts',
  ],
  css: [
    '@/assets/scss/style.scss',
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_vars.scss',
    ],
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  axios: {
    baseURL: 'https://backend.wrautomaten.nl/api',
  },
  buildModules: [
    '@nuxt/typescript-build',
  ],
};
