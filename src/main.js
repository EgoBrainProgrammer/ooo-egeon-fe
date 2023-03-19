import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)
  .use(router)
  .use(store)
  .use(vuetify);

export default app;
app.mount('#app');