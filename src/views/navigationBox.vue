<template>
  <div class="nav_box">
    <div class="nav_contain">
      <p class="nav_top" @click="handleNav('top')"></p>
      <ul class="nav_list">
        <li v-for="(item, index) in navList" @click="handleNav('center', index)" :class="{'cur': item.cur}"><p :style="{width:item.title.length > 5 ? '48px' :''}">{{item.title}}</p></li>
      </ul>
      <p class="nav_bottom" @click="handleNav('bottom')"></p>
    </div>
  </div>
</template>
<script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "navbox",
  props: {
    navList: Array
  },
  setup(props, { emit }) {
    const { navList } = toRefs(props)
    const handleNav = (type, index) => {
      emit('nav-change', type, index)
    }
    return {
      navList,
      handleNav,
    };
  },
});
</script>
<style scoped>
.nav_box {
  position: fixed;
  top: 50%;
  right: 45px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
}

.nav_list li{
  height: 60px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.nav_list .cur {
  background: rgba(209, 209, 209, 1);
}
.nav_top {height: 60px;width: 90px;background: url(@/assets/images/nav_top.png) no-repeat;cursor: pointer;}
.nav_bottom {height: 60px;width: 90px;background: url(@/assets/images/nav_bottom.png) no-repeat;cursor: pointer;}
</style>