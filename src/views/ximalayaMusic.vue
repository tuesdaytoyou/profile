<template>
  <div style="background:#E5E5E5;width:100%;height:100%;position: relative;">
    <div class="music_page1">
      <div class="music_page1_left">
        <p>喜韵音坊</p>
        <p>智能音频内容创作、分发、内容转化一站式平台  </p>
        <p>面向C端用户的有声内容生产工具，打通登陆-生产-发布链路，帮助创作者快速便捷的生产个性化内容，从而繁荣AIGC和UGC生态。</p>
        <p></p>
        <p>喜马拉雅实习项目，负责交互＆UI</p>
      </div>
      <div class="music_page1_right">
        <img src="../assets/images/music_page1_mac.png" />
      </div>
    </div>
    <div class="music_img_list">
      <div>
        <img src="../assets/images/music_img1.png" />
        <img src="../assets/images/music_img2.png" />
        <img src="../assets/images/music_img3.png" />
        <img src="../assets/images/music_img4.png" />
        <img src="../assets/images/music_img5.png" />
        <img src="../assets/images/music_img6.png" />
        <img src="../assets/images/music_img7.png" />
        <img src="../assets/images/music_img8.png" />
      </div>
    </div>
    <div class="music_foot">
      <p>该项目目前正在开发。从0搭建过程中，我根据用户体验五要素从五个层次指定设计目标。此外，通过了解网页设计流行趋势，和另外一名设计师合作完成全部的UI工作。</p>
    </div>
    <div class="back_foot">
      <div @click="handlePre()" class="back_left">
        <em></em>
        <p>返回主页</p>
      </div>
      <div @click="handleNext()" class="back_right">
        <p>下一篇：喜马云网站</p>
        <em></em>
      </div>
    </div>
    <nav-box :navList="navList" :navName="navName"></nav-box>
    <div class="anchor">
      <p v-for="(item, index) in anchor_tops" :style="{top:item.top+'px'}" class="music_title" :id="'music_title'+(index+1)"></p>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import navBox from './navigationBox.vue'
import useMenuChange from "../hooks/useMenuChange";

export default defineComponent({
  name: "home",
  components: {navBox},
  setup() {
    useMenuChange()
    const router = useRouter()
    const navList = reactive([
      {title:'项目介绍',cur: false,anchor:'music_title1'},
      {title:'工作推荐',cur: false,anchor:'music_title2'},
      {title:'用户研究',cur: false,anchor:'music_title3'},
      {title:'需求提取',cur: false,anchor:'music_title4'},
      {title:'设计目标',cur: false,anchor:'music_title5'},
      {title:'框架布局',cur: false,anchor:'music_title6'},
      {title:'设计规范',cur: false,anchor:'music_title7'},
      {title:'页面展示',cur: false,anchor:'music_title8'},
    ])
    const anchor_tops = [
      {top:990},
      {top:1650},
      {top:2340},
      {top:4150},
      {top:4490},
      {top:6160},
      {top:8360},
      {top:11550},
    ]
    const navName = 'music_title'
    const handlePre = () => {
      router.push({name: 'home'})
    }
    const handleNext = () => {
      router.push({name: 'ximalayaAi'})
    }
    return {
      navList,
      navName,
      anchor_tops,
      handlePre,
      handleNext,
    };
  },
});
</script>