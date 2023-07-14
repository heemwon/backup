import { works } from './static/data/work'
export default {
  target: 'static',
  generate: {
    fallback: '404.html',
    routes() {
      const ko = works.keys.map((w) => '/work/' + w)
      const en = works.keys.map((w) => '/en/work/' + w)
      const jobs = [
        '/jobs/55',
        '/jobs/56',
        '/jobs/57',
        '/jobs/58',
        '/jobs/59',
        '/jobs/60',
        '/jobs/61',
        '/jobs/62',
      ]
      return [...ko, ...en, ...jobs]
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes',
      },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'keywords',
        content:
          'UX, CX, SX, GUI, Visual Service 디자인 컨설팅, 퍼블리싱, UI 개발, 프론트엔드 개발, pxd 블로그, UX Tech Lab, UX 얼라이언스, User 모델링, GUX Design',
      },
      { property: 'og:type', content: 'Website' },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'google-site-verification',
        content: 'ubsDF01pIRMskofEvhu9lWYu0kf-GOGCQ7K4nieizJY',
      },
    ],
    script: [
      {
        src: '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=aa4bfcc25280627e100b802871dcb662&libraries=services',
      },
      {
        src: 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
      },
      {
        src: '/IE.js',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://storage.googleapis.com/pxd-dev-server.appspot.com/images/ico/pxd_favi.png',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/reset.css',
    '@assets/scss/common.scss',
    '@assets/scss/responsive/pc.scss',
    '@assets/scss/responsive/tablet.scss',
    '@assets/scss/responsive/mo.scss',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@plugins/vee-validate', '@plugins/i18n.js'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss'],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/firebase',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  // firebase config
  firebase: {
    config: {
      apiKey: 'AIzaSyDfKzHzNwkwl0GmydvSOGFbAFWPcfBIjCA',
      authDomain: 'pxd-co-kr.firebaseapp.com',
      projectId: 'pxd-co-kr',
      storageBucket: 'pxd-co-kr.appspot.com',
      messagingSenderId: '171751375586',
      appId: '1:171751375586:web:9edb98411da7433f9714bb',
    },
    // firebase services
    services: {
      storage: true, // Just as example. Can be any other service.
      functions: {
        location: 'us-central1',
        emulatorPort: 5001,
        emulatorHost: 'http://0.0.0.0',
      },
    },
    // firebase options
    // storage: {
    //   emulatorPort: 9199,
    //   emulatorHost: 'localhost',
    // },
  },

  // sitemap, robots config
  sitemap: {
    hostname: 'https://www.pxd.co.kr',
    defaults: {
      changefreq: 'monthly',
      priority: 1,
      trailingSlash: true,
    },
    exclude: ['roi', 'pricing'],
    trailingSlash: true, // if necessary
  },

  robots: [
    {
      UserAgent: 'Googlebot',
      Allow: '/',
      Sitemap: 'https://www.pxd.co.kr/sitemap.xml',
    },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //
    // },
  },
  storybook: {
    addons: ['@storybook/addon-controls'],
  },
  watchers: {
    webpack: {
      poll: true,
    },
  },
  dev: process.env.NODE_ENV !== 'production',
  env: {
    password: '353a8e9765c88e13c4e42924307589d862b331c13e961afc19f49ea973860918',
    instaToken:
      'IGQVJWMmNWaXlpT1IzRkotT1NrWERyc09SS1QtSXFmRjZAtdUg5anZA3RlAyOFZAjOGxyLWs0d0Jyd2daUF92OFl6aWhaTXppVmxzYUFRU0k1a0otT3JQNE14OW5iSkQ3b3hHZA002MEx5dmtNVGlja21OdQZDZD',
    serverUrl: 'https://proxy.pxd.systems/pxd-recruitment/',
  },
  i18n: {
    defaultLocale: 'ko',
    locales: [
      { code: 'ko', file: 'ko.js', dir: 'ltr' },
      { code: 'en', file: 'en.js', dir: 'ltr' },
      // 'ko', 'en'
    ],
    langDir: './locales/',
  },
  router: {
    middleware: ['language', 'routeCheck'],
  },
}
