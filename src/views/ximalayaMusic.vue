<template>
  <div style="background:#E5E5E5;width:100%;height:100%;position: relative;">
    <div class="music_page1">
      <div class="music_page1_left">
        <p>喜韵音坊</p>
        <p>智能音频内容创作、分发、内容转化一站式平台 </p>
        <p>面向C端用户的有声内容生产工具，打通登陆-生产-发布链路，帮助创作者快速便捷的生产个性化内容，从而繁荣AIGC和UGC生态。</p>
        <p></p>
        <ul class="music_tips">
          <li><em></em>喜马拉雅实习项目，0-1搭建平台搭建</li>
          <li><em></em>团队：独立负责担任UX设计，后期与UI实习生合作完成所有内容交付</li>
          <li><em></em>成果：作品完播率提升20%，优质率提升30%，用户整体满意度较高。</li>
          <li><em></em>可优化方向：新手引导策略</li>
        </ul>
      </div>
      <div class="music_page1_right" style="margin-top: 100px;">
        <img :src="getCloudUrl('music_page1_mac.png')" />
      </div>
    </div>
    <div class="music_img_list">
      <div>
        <img v-for="i in 10" style="width:1920px" :src="getCloudUrl('music_img' + i + '.png')" />
      </div>
      <!-- <div>
        <img :src="getCloudUrl('music_img1.png')" />
        <img :src="getCloudUrl('music_img2.png')" />
        <img :src="getCloudUrl('music_img3.png')" />
        <img :src="getCloudUrl('music_img4.png')" />
        <img :src="getCloudUrl('music_img5.png')" />
        <img :src="getCloudUrl('music_img6.png')" />
        <img :src="getCloudUrl('music_img7.png')" />
        <img :src="getCloudUrl('music_img8.png')" />
      </div> -->
    </div>
    <!-- <div class="music_foot">
      <p>该项目目前正在开发。从0搭建过程中，我根据用户体验五要素从五个层次指定设计目标。此外，通过了解网页设计流行趋势，和另外一名设计师合作完成全部的UI工作。</p>
    </div> -->
    <div class="back_foot">
      <div @click="handlePre()" class="back_left">
        <em></em>
        <p>上一篇：Beginner's guide</p>
      </div>
      <div @click="handleNext()" class="back_right">
        <p>下一篇：喜马云网站</p>
        <em></em>
      </div>
    </div>
    <!-- <nav-box :navList="navList" :navName="navName"></nav-box>
    <div class="anchor">
      <p v-for="(item, index) in anchor_tops" :style="{top:item.top+'px'}" class="music_title"
        :id="'music_title'+(index+1)"></p>
    </div> -->
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance, reactive, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import navBox from './navigationBox.vue'
import useMenuChange from "../hooks/useMenuChange";

export default defineComponent({
  name: "ximalayamusic",
  components: {navBox},
  setup() {
    useMenuChange()
    const router = useRouter()
    const internalInstance = getCurrentInstance()
    const $utils = internalInstance.appContext.config.globalProperties.$utils
    const getCloudUrl = (url) => {
      return $utils.getCloudUrl(url)
    }
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
      router.push({name: 'beginnerGuide'})
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
      getCloudUrl,
    };
  },
});
</script>
<style>
.music_tips {
  margin:10px 0;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: #000000;
}
.music_tips em{
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius:5px;
  margin: 5px;
  background-color:black;
}
</style>