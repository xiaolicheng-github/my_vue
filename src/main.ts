import { createApp } from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(router).use(store).mount('#app')
