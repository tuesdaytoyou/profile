<template>
  <div class="nav_box">
    <div class="nav_contain">
      <p class="nav_top" @click="handleNav('top')"></p>
      <ul class="nav_list">
        <li v-for="(item, index) in navList" @click="handleNav('center', index)" :class="{'cur': item.cur}">
          <p :style="{width:(new RegExp('[\\u4E00-\\u9FFF]+','g')).test(item.title) && item.title.length > 5 ? '48px' :''}">{{item.title}}</p>
        </li>
      </ul>
      <p class="nav_bottom" @click="handleNav('bottom')"></p>
    </div>
  </div>
</template>
<script>
import { defineComponent, toRefs, onMounted, reactive, onUnmounted } from "vue";

export default defineComponent({
  name: "navbox",
  props: {
    navList: Array,
    navName: String,
  },
  setup(props, { emit }) {
    const { navList, navName } = toRefs(props)
    const listenScroll = () => {
      document.addEventListener('scroll', navMenu)
    }
    const unlistenScroll = () => {
      document.removeEventListener('scroll', navMenu)
    }
    const navMenu = () => {
      const imgList = document.querySelectorAll('.'+navName.value)
      imgList.forEach((imgitem, index) => {
        navList.value[index].cur = false
        if(index === imgList.length - 1){
          if(imgitem.getBoundingClientRect().top <= 100){
              navList.value[index].cur = true
          }
        }else {
          if(imgitem.getBoundingClientRect().top <= 100 && imgList[index+1].getBoundingClientRect().top > 100){
              navList.value[index].cur = true
          }
        }
      })
    }
    onMounted(listenScroll)
    onUnmounted(unlistenScroll)
    const handleNav = (type, index) => {
      switch(type) {
        case 'top': 
          window.scrollTo(0, 0)
          break
        case 'center': 
          const id = navList.value[index].anchor
          const yOffset = -100; 
          const element = document.getElementById(id);
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
          break
        case 'bottom':
          window.scrollTo(0, document.documentElement.scrollHeight - window.innerHeight)
          break
      }
    }
    return {
      navList,
      handleNav,
    };
  },
});
</script>