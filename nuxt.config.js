import head from "./config/head";
import css from "./config/css";
import plugins from "./config/plugins";
import build from './config/build'
import { modules, modulesSettings } from './config/modules'
import { buildModules } from './config/buildModules'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: head,
  /*
  ** Global CSS
  */
  css,
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: plugins,
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: buildModules,
  /*
  ** Nuxt.js modules
  */
  modules: modules,
  ...modulesSettings,
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: build
}
