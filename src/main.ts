import { createApp } from 'vue'
import App from './App.vue'
import './style/style.css'
import 'vant/lib/index.css'; // 全局引入样式
import './rem'
import Vant from 'vant'; //h5UI组件引入
import router from "./router/index"; // 挂载路由
import store from './store/index'

import 'amfe-flexible'

import api from './api/index'

const pageApp = createApp(App)
pageApp.config.globalProperties.$API = api

pageApp
  .use(Vant)
  .use(store)
  .use(router)
  .mount('#app')
