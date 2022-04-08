import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { ImagePreviewGroup, Image } from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
import '@/assets/css/index.css'
import utils from './utils';


const app = createApp(App)

app.config.globalProperties.$utils = utils

app.use(store).use(router)
app.use(ImagePreviewGroup).use(Image)
app.mount('#app')

