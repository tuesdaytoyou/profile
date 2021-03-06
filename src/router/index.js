import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/ximalayaMusic',
    name: 'ximalayaMusic',
    component: () => import('@/views/ximalayaMusic.vue')
  },
  {
    path: '/ximalayaAi',
    name: 'ximalayaAi',
    component: () => import('@/views/ximalayaAi.vue')
  },
  {
    path: '/gameLive',
    name: 'gameLive',
    component: () => import('@/views/gameLive.vue')
  },
  {
    path: '/amazon',
    name: 'amazon',
    component: () => import('@/views/amazon.vue')
  },
  {
    path: '/planetarium',
    name: 'planetarium',
    component: () => import('@/views/planetarium.vue')
  },
  {
    path: '/solarterm',
    name: 'solarterm',
    component: () => import('@/views/solarterm.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const colorList = store.state.colorList
router.beforeEach((to,from)=>{
  store.commit("setMenuColor", colorList[to.name]);
  store.commit("setSelectMenu", to.name);
})
router.afterEach(() => {
  window.scrollTo(0,0);
});

export default router