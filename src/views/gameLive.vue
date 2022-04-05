<template>
  <div style="background:#F7F7FC;width:100%;height:100%">
    <div class="game_page1">
        <div class="game_page1_left">
            <img src="../assets/images/game_page1_left.png" />
        </div>
        <div class="game_page1_middle">
            <p>游戏直播互动体验</p>
            <p>旨在通过设计新的互动模式增强用户的游戏直播互动体验。   </p>
            <p></p>
            <p></p>
            <p>课程项目，主要负责用户研究，互动玩法部分的方案设计及可用性测试。</p>
        </div>
        <div class="game_page1_right">
            <img src="../assets/images/game_page1_right.png" />
        </div>
    </div>
    <div class="game_img_list">
      <div>
        <div class="title">
            <div>
                <p>背景研究</p>
                <p></p>
            </div>
        </div>
        <img src="../assets/images/game_img1.png" />
        <div class="title">
            <div>
                <p>用户研究</p>
                <p></p>
            </div>
        </div>
        <img src="../assets/images/game_img2.png" />
        <img src="../assets/images/game_img3.png" />
        <img src="../assets/images/game_img4.png" />
        <img src="../assets/images/game_img5.png" />
        <img src="../assets/images/game_img6.png" />
        <div class="title">
            <div>
                <p>设计定位</p>
                <p></p>
            </div>
            <div>
                <p>设计价值</p>
                <p></p>
            </div>
        </div>
        <img src="../assets/images/game_img7.png" />
        <div class="title">
            <div>
                <p>低模与可用性验证</p>
                <p></p>
            </div>
        </div>
        <img src="../assets/images/game_img8.png" />
        <img src="../assets/images/game_img9.png" />
        <div class="title">
            <div>
                <p>设计落地</p>
                <p></p>
            </div>
        </div>
        <img src="../assets/images/game_img10.png" />
        <div class="bg_title">
            <div>
                <p>「互动模式」</p>
                <p>分为【互玩】与【捣蛋】两种互动模式，由主播设置游戏模式，观众可以根据模式筛选直播</p>
            </div>
        </div>
        <img src="../assets/images/game_img11.png" />
        <div class="game_select">
          <div class="img">图文</div>
          <div class="video">视频</div>
        </div>
        <img src="../assets/images/game_img12.png" />
        <div class="game_select">
          <div class="img">图文</div>
          <div class="video">视频</div>
        </div>
        <img src="../assets/images/game_img13.png" />
        <img src="../assets/images/game_img14.png" />
        <div class="game_select">
          <div class="img">图文</div>
          <div class="video">视频</div>
        </div>
        <img src="../assets/images/game_img15.png" />
        <div class="title">
            <div>
                <p>战后反馈</p>
                <p></p>
            </div>
        </div>
        <img src="../assets/images/game_img16.png" />
        <img src="../assets/images/game_img17.png" />
        <div class="title">
            <div>
                <p>测试与修改</p>
                <p></p>
            </div>
        </div>
        <img src="../assets/images/game_img18.png" />
        <img src="../assets/images/game_img19.png" />
      </div>
    </div>
    <div class="game_foot">
      <p>本作品为课程合作项目，我在其中全程参与用户研究工作、并负责互动、捣蛋的交互设计与可用性测试。通过对用户需求进行细致挖掘，为设计创新提供灵感与依据。后续阶段通过可用性测试，站在用户视角，提供合理的方案。作品有不成熟之处，但对直播体验新形式的探索与商业化构思，使其具有创新性、可落地性。</p>
    </div>
    <div class="back_foot">
      <div class="back_left">
        <em @click="handlePre()"></em>
        <p>喜马AI云网站</p>
      </div>
      <div class="back_right">
        <p>下一篇：亚马逊NLP</p>
        <em @click="handleNext()"></em>
      </div>
    </div>
    <nav-box :navList="navList" @nav-change="handleNav"></nav-box>
    <div class="anchor">
      <p v-for="(item, index) in anchor_tops" :style="{top:item.top+'px'}" class="game_title" :id="'game_title'+(index+1)"></p>
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
      {title:'背景介绍',cur: false,anchor:'game_title1'},
      {title:'用户研究',cur: false,anchor:'game_title2'},
      {title:'定位价值',cur: false,anchor:'game_title3'},
      {title:'低模与可用性验证',cur: false,anchor:'game_title4'},
      {title:'设计落地',cur: false,anchor:'game_title5'},
      {title:'互动模式',cur: false,anchor:'game_title6'},
      {title:'趣味弹幕',cur: false,anchor:'game_title7'},
      {title:'战后反馈',cur: false,anchor:'game_title8'},
      {title:'应用拓展',cur: false,anchor:'game_title9'},
      {title:'测试与修改',cur: false,anchor:'game_title10'},
    ])
    const listenScroll = () => {
      document.addEventListener('scroll', navMenu)
    }
    const unlistenScroll = () => {
      document.removeEventListener('scroll', navMenu)
    }
    const navMenu = () => {
      const imgList = document.querySelectorAll('.game_title')
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
      router.push({name: 'ximalayaAi'})
    }
    const handleNext = () => {
      router.push({name: 'amazon'})
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
      {top:1010},
      {top:2260},
      {top:5340},
      {top:6055},
      {top:7840},
      {top:9230},
      {top:11210},
      {top:12435},
      {top:13940},
      {top:16420},
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
<style>
.game_img_list {display: flex;justify-content: center;align-items: center;}
.game_img_list div{display: flex;justify-content: center;align-items: center;flex-direction: column;}
.game_img_list .title{margin: 79px 0 52px 0;}
.game_img_list .title {flex-direction: row!important;}
.game_img_list .title div{width: 600px;}
.game_img_list .title div p:nth-child(1){
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 160%;
    color: #7152E1;
}
.game_img_list .title div p:nth-child(2){
    width: 96px;
    height: 5px;
    background: #7455E2;
}
.game_img_list .bg_title {width: 1244px;height: 118px;background-color: #7152E1;border-radius: 15px;}
.game_img_list .bg_title div p:nth-child(1) {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 180%;
  color: #FFFFFF;
}
.game_img_list .bg_title div p:nth-child(2) {
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 160%;
  color: #FFFFFF;
}
.game_select{
  flex-direction: row!important;margin-top: 26px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 180%;
  color: #FFFFFF;
}
.game_select .img{width: 100px;height: 60px;background-color: #7152E1;border-radius: 15px;margin-right: 36px;}
.game_select .video{width: 100px;height: 60px;background-color: rgba(113, 82, 225, 0.2);border-radius: 15px;}
.game_page1 {width:1920px;height: 1079px;background: url(@/assets/images/game_page1_bg.png) no-repeat;position: relative;margin: auto;}
.game_page1_left{position: absolute;top: 400px;left: 152px;}
.game_page1_middle{position: absolute;top: 405px;left: 535px;}
.game_page1_right{position: absolute;top: -10px;right: 0;}
.game_page1_middle p{margin: 37px 0;}
.game_page1_middle p:nth-child(1) {
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.9);
}
.game_page1_middle p:nth-child(2) {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.9);
}
.game_page1_middle p:nth-child(3) {
  width: 500px;
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.9);
}
.game_page1_middle p:nth-child(4) {
  width: 342px;
  height: 5px;
  left: 185px;
  background: #DB3434;
}
.game_page1_middle p:nth-child(5) {
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.9);
}
.game_foot{width: 1920px;height: 248px;margin:auto;background-color: #6648D5;;display: flex;justify-content: center;align-items: center;}
.game_foot p {
  width: 1425px;
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: #ffffff;
}
</style>