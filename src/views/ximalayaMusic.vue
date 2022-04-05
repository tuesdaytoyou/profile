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
      <div class="back_left">
        <em @click="handlePre()"></em>
        <p>返回主页</p>
      </div>
      <div class="back_right">
        <p>下一篇：喜马AI云网站</p>
        <em @click="handleNext()"></em>
      </div>
    </div>
    <nav-box :navList="navList" @nav-change="handleNav"></nav-box>
    <div class="anchor">
      <p v-for="(item, index) in anchor_tops" :style="{top:item.top+'px'}" class="music_title" :id="'music_title'+(index+1)"></p>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import navBox from './navigationBox.vue'

export default defineComponent({
  name: "home",
  components: {navBox},
  setup() {
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
    const listenScroll = () => {
      document.addEventListener('scroll', navMenu)
    }
    const unlistenScroll = () => {
      document.removeEventListener('scroll', navMenu)
    }
    const navMenu = () => {
      const imgList = document.querySelectorAll('.music_title')
      imgList.forEach((imgitem, index) => {
        navList[index].cur = false
        if(index === imgList.length - 1){
          if(imgitem.getBoundingClientRect().top <= 0){
              navList[index].cur = true
          }
        }else {
          if(imgitem.getBoundingClientRect().top <= 0 && imgList[index+1].getBoundingClientRect().top > 0){
              navList[index].cur = true
          }
        }
      })
    }
    onMounted(listenScroll)
    const handlePre = () => {
      router.push({name: 'home'})
    }
    const handleNext = () => {
      router.push({name: 'ximalayaAi'})
    }
    const handleNav = async(type, index) => {
      switch(type) {
        case 'top': 
          window.scrollTo(0, 0)
          break
        case 'center': 
          const id = navList[index].anchor
          document.getElementById(id).scrollIntoView();
          break
        case 'bottom':
          window.scrollTo(0, document.documentElement.scrollHeight - window.innerHeight)
          break
      }
    }
    const anchor_tops = [
      {top:980},
      {top:1550},
      {top:2240},
      {top:4050},
      {top:4390},
      {top:6060},
      {top:8260},
      {top:11450},
    ]
    return {
      navList,
      anchor_tops,
      handlePre,
      handleNext,
      handleNav,
    };
  },
});
</script>
<style scoped>
.music_img_list {display: flex;justify-content: center;align-items: center;}
.music_img_list div{display: flex;justify-content: center;align-items: center;flex-direction: column;}
.music_foot{width: 1920px;height: 248px;margin:auto;background-color: #FF5A83;;display: flex;justify-content: center;align-items: center;}
.music_foot p {
  width: 1425px;
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: #ffffff;
}
.music_page1 {width:1920px;height: 1079px;background: url(@/assets/images/music_page1_bg.png) no-repeat;position: relative;margin: auto;}
.music_page1_left{position: absolute;top: 325px;left: 118px;}
.music_page1_left p{margin: 37px 0;}
.music_page1_left p:nth-child(1) {
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.9);
}
.music_page1_left p:nth-child(2) {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.9);
}
.music_page1_left p:nth-child(3) {
  width: 500px;
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.9);
}
.music_page1_left p:nth-child(4) {
  width: 342px;
  height: 5px;
  left: 185px;
  background: #DB3434;
}
.music_page1_left p:nth-child(5) {
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.9);
}
.music_page1_right{position: absolute;left: 654px;}
</style>