<template>
  <div style="background:#000000;width:100%;height:100%">
    <home-page></home-page>
    <about-me></about-me>
    <port-folio></port-folio>
    <blog-box></blog-box>
    <more-work></more-work>
    <!-- <nav-box :navList="navList" :navName="navName"></nav-box> -->
  </div>
</template>

<script>
import homePage from './homePage.vue'
import aboutMe from './aboutMe.vue'
import portFolio from './portFolio.vue'

import moreWork from './moreWork.vue'
import navBox from './navigationBox.vue'
import { defineComponent, onMounted, reactive, onUnmounted } from "vue";
import BlogBox from "./blogBox.vue";

export default defineComponent({
  name: "home",
  components: { homePage, aboutMe, portFolio, moreWork, navBox, BlogBox },
  setup() {
    const navList = reactive([
      {title:'About me',cur: false,anchor:'home_title1'},
      {title:'Portfolio',cur: false,anchor:'home_title2'},
      {title:'Blog',cur: false,anchor:'home_title3'},
      {title:'More work',cur: false,anchor:'home_title4'},
      // {title:'Contact me',cur: false,anchor:'home_title5'},
    ])
    const navName = 'home_title'
    return {
      navList,
      navName,
    };
  },
});
</script>