
export default {
  mode: 'universal',
  server: {
    host: "0.0.0.0", // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "Max Zaxster",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Art studio Max Zaxster" },
      { property: 'og:image', content: "~/assets/img/hero_2.jpg"  }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/maxzaxster_flaticon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/aos", ssr: false},
    { src: '@/plugins/ga.js', mode: 'client' },
    { src: '@/plugins/sweet-modal', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-31027116-5'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['bootstrap-vue/nuxt'],
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
],
[
  "nuxt-i18n",
  {
    // pages: {
    //   privacyPolicy: {
    //     sl: "/politika-zasebnosti", // -> mydomain.com/en/politika-zasebnosti
    //     en: "/privacy-policy", // -> mydomain.com/en/privacy-policy
    //   },
    // },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    },
    locales: [
      {
        name: "SL",
        code: "sl",
        iso: "sl-SL",
        file: "sl-SL.js",
      },
      {
        name: "EN",
        code: "en",
        iso: "en-US",
        file: "en-US.js",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "sl",
    fallbackLocale: "sl",
    silentFallbackWarn: true,
    silentTranslationWarn: true
  },
], // multilanguage website using Nuxt.js and nuxt-i18n module
],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  }
}
