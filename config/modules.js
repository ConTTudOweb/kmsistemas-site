// import URL from 'url-parse'
import siteConfig from './_siteConfig'
import {BButton} from "bootstrap-vue";
// let url = false
let axiosSettings = {}
// if (process.env.URL && process.argv[2] === 'generate') {
//   url = new URL(process.env.URL)
//   axiosSettings = {
//     baseURL: url
//   }
// }

export const modules = [
  // Doc: https://bootstrap-vue.js.org
  'bootstrap-vue/nuxt',
  // Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios',
  // Doc: https://github.com/nuxt/content
  '@nuxt/content',

  // '@nuxtjs/eslint-module',
  // '@nuxtjs/style-resources',
  'nuxt-fontawesome',
  // 'nuxt-responsive-loader'
]
if (siteConfig.googleAnalytics.on && siteConfig.googleAnalytics.id) {
  modules.push('@nuxtjs/google-gtag')
}

export const modulesSettings = {
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: ['LayoutPlugin', 'NavbarPlugin', 'CardPlugin', 'IconsPlugin', 'ImagePlugin', 'ButtonPlugin', 'AlertPlugin'],
    directivePlugins: []
  },
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faTshirt', 'faUtensils', 'faAtom', 'faDesktop', 'faCheck']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faFacebookSquare', 'faInstagram']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['faCommentDots']
      }
    ]
  },
  // styleResources: {
  //   scss: ['./assets/scss/_vars.scss']
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: axiosSettings,
  // responsiveLoader: {
  //   name: 'uploads/[hash:7]-[width].[ext]',
  //   min: 640, // minimum image width generated
  //   max: 1800, // maximum image width generated
  //   steps: 4, // five sizes per image will be generated
  //   placeholder: false, // no placeholder will be generated
  //   quality: 65, // images are compressed with medium quality
  //   adapter: require('responsive-loader/sharp'),
  //   disable: process.env.NODE_ENV === 'development'
  // },
  'google-gtag': {
    // id: siteConfig.googleAnalytics.id
    ...siteConfig.googleAnalytics.params
  }
}
