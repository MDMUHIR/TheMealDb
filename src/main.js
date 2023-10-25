import { createApp } from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


createApp(App).use(router).use(store).mount("#app");
