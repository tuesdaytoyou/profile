<template>
  <div class='left-menu' v-show="menuDlg">
    <div class="menu-close" @click="menuClose()"></div>
    <ul class="menu-list">
      <li v-for="menu in menuList">{{menu.name}}</li>
    </ul>
    <div class="menu-contact">1597537908@qq.com</div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "menubox",
  setup() {
    let menuList = [
      {name: 'HOME', path: '/'},
      {name: 'ABOUT ME', path: '/'},
      {name: 'PORTFOLIO', path: '/'},
      {name: 'MORE WORK', path: '/'},
      {name: 'CONTACT', path: '/'},
    ]
    const store = useStore();
    const menuDlg = computed(() => {
      return store.state.menuDlg;
    });
    const menuClose = () => {
      store.commit("setMenuDlg", false);
    }
    return {
      menuList,
      menuDlg,
      menuClose
    };
  },
});
</script>