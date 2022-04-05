import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import '@/assets/css/index.css'


const app = createApp(App)


app.use(store).use(router).use(Antd).mount('#app')

