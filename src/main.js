import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import cookie from 'vue-cookie'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)
// var Vue = require('vue');
// var VueCookie = require('vue-cookie');
// // Tell Vue to use the plugin
// Vue.use(VueCookie);
// const $cookie = inject(cookie)
createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')
