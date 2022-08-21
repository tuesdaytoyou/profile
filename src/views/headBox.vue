<template>
  <div class="head_box" :class="menuColor+'_btn'">
    <!-- <div class="menu_button" @click="menuOpen()"></div>
    <div class="menu_text"></div> -->
    <div class="menu_title">
      <p>Luyun`s Portfolio</p>
    </div>
    <div class="menu_list">
      <ul>
        <li v-for="(item, index) in menuList">
          <p :class="{cur: selectMenu === item.name}" @click="handleMenu(item, index)">{{item.title}}</p>
          <template v-if="item.type == 'link'">
            <img v-if="menuColor == 'fixwhite' || menuColor == 'black' || menuColor == 'blue'" src="@/assets/images/openlink_black.png" />
            <img v-else src="@/assets/images/openlink.png" />
          </template>
        </li>
      </ul>
    </div>
    <!-- <div class="menu_name"></div> -->
  </div>
</template>
<script>
import { defineComponent, computed, reactive } from "vue";
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
    const selectMenu = computed(() => {return store.state.selectMenu})
    const handleMenu = (item, index) => {
      if(item.type == 'link'){
        window.open(item.url)
      }else {
        const name = item.name
        router.push({name})
        menuList.forEach((el)=>{el.cur=false})
      }

    }
    const menuColor = computed(() => {
      return store.state.menuColor
    })
    const menuList = reactive([
      {title:'首页', name: 'home'},
      {title:"Beginner's Guide", name: '',type: 'link',url: 'https://ludicrous-harmony-bcc.notion.site/80b92b7a3d924fd599315a53339a261c'},
      {title:"Audio Library", name: 'audioLibrary'},
      {title:'喜韵音坊', name: 'ximalayaMusic'},
      {title:'喜马云网站', name: 'ximalayaAi'},
      {title:'游戏直播互动体验', name: 'gameLive'},
      {title:'AMAZON-NLP', name: 'amazon'},
      // {title:'食研', name: ''},
    ])
    return {
      menuList,
      menuColor,
      selectMenu,
      menuOpen,
      handleMenu,
    };
  },
});
</script>
