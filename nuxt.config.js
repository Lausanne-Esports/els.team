require('dotenv').config()

export default {
  // Headers of the page
  head: {
    title: 'Lausanne eSports',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lausanne Sport eSports' },
      { name: 'msapplication-TileColor', content: "#384168" },
      { name: 'theme-color', content: '#384168' },
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#384168', href: '/safari-pinned-tab.svg' },
      { rel: 'preconnect', href: 'https://els.team' },
      { rel: 'preconnect', href: 'https://api.els.team' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://platform.twitter.com' },
      { rel: 'dns-prefetch', href: 'https://els.team' },
      { rel: 'dns-prefetch', href: 'https://api.els.team' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://platform.twitter.com' },
    ],
    script: [
      { src: 'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver' },
    ],
  },

  modern: true,

  // Customize the progress bar color
  loading: { color: '#384168' },

  meta: {
    name: 'Lausanne eSports',
    description: 'Site Internet du club Lausanne Sport eSports',
    theme_color: '#384168',
  },

  manifest: {
    name: 'Lausanne Sport eSports',
    short_name: 'eLS Website',
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', { id: 'UA-96607341-1' }],
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/lazyload.js', ssr: false },
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/api': { target: process.env.PROXY_API_URL, pathRewrite: {'^/api/': ''} },
  },

  // Build configuration
  build: {
    extractCSS: true,

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          },
        },
      },
    },

    // Run ESLint on save
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
