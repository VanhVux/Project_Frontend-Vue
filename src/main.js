import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store'
import './axios'
import '@fortawesome/fontawesome-free/js/all'
loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
