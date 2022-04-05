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
<style scoped>
.left-menu {
  position: fixed;
  z-index: 200;
  width: 313px;
  height: 100%;
  left: 0;
  top: 0;
  background: #2A2A2E;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.08);
}
.menu-close {
  position: absolute;
  width: 14px;
  height: 14px;
  left: 282px;
  top: 17px;
  cursor: pointer;
  background: url(@/assets/images/menu_close.png);
}
/* .menu-close:hover {
  cursor: pointer;
} */
.menu-list {
  position: absolute;
  left: 49px;
  top: 87px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: #FFFFFF;
}
.menu-list li {
  margin-top: 20px;
}
.menu-list li:hover {
  cursor: pointer;
}
.menu-contact{
  position: absolute;
  width: 239px;
  height: 32px;
  left: 49px;
  top: 876px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: #FFFFFF;
}
</style>