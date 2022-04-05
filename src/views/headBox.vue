<template>
  <div class="head_box" :class="menuColor+'_btn'">
    <div class="menu_button" @click="menuOpen()"></div>
    <div class="menu_text"></div>
    <div class="menu_list">
      <ul>
        <li v-for="item in menuList">
          <p @click="handleMenu(item)">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="menu_name"></div>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: "headbox",
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute
    const menuOpen = () => {
      if(route.path === 'home'){
        store.commit("setMenuDlg", true);
      }
    }
    const handleMenu = (item) => {
      const path = item.path
      router.push({path})
    }
    const menuColor = computed(() => {
      return store.state.menuColor
    })
    const menuList = [
      {name:'首页', cur: false, path: '/'},
      {name:'喜韵音坊', cur: false, path: 'ximalayaMusic'},
      {name:'喜马云网站', cur: false, path: 'ximalayaAi'},
      {name:'游戏直播互动体验', cur: false, path: 'gameLive'},
      {name:'AMAZON-NLP', cur: false, path: 'amazon'},
      // {name:'食研', cur: false, path: ''},
    ]
    return {
      menuList,
      menuColor,
      menuOpen,
      handleMenu,
    };
  },
});
</script>
