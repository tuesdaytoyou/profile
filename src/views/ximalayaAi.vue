<template>
  <div style="background:#000000;width:100%;height:100%">
    <div class="ai_page1">
      <div class="ai_page1_left">
        <p>喜马拉雅AI平台</p>
        <p>智能音频内容创作、分发、内容转化一站式平台 </p>
        <p>对内对外展示喜马拉雅Al算法能力的展示平台。通过交互demo体验算法能力，展示平台能力和企业的服务能力，增加行业内知名度。</p>
        <p></p>
        <p>喜马拉雅实习项目，负责交互＆UI</p>
      </div>
      <div class="ai_page1_right">
        <img :src="getCloudUrl('ai_page1_ellipse.png')" />
        <img :src="getCloudUrl('ai_page1_imac.png')" />
        <img style="width: 295px;height: 280px;" :src="getCloudUrl('ai_page_cube.gif')" />
        <img :src="getCloudUrl('ai_page1_mac.png')" />
        <img :src="getCloudUrl('ai_gif1.gif')" />
      </div>
    </div>
    <div class="ai_img_list" style="margin-top:100px">
      <div class="list_box">
        <img :src="getCloudUrl('ai_img1.png')" />
        <img :src="getCloudUrl('ai_img2.png')" />
        <img :src="getCloudUrl('ai_img3.png')" />
        <img :src="getCloudUrl('ai_img4.png')" />
        <div class="img4_icons">
          <img :src="getCloudUrl('ai_gif1.gif')" />
          <img :src="getCloudUrl('ai_gif2.gif')" />
          <img :src="getCloudUrl('ai_gif3.gif')" />
          <img :src="getCloudUrl('ai_gif4.gif')" />
          <img :src="getCloudUrl('ai_gif5.gif')" />
        </div>
        <div class="scroll_box ai_desgin" style="position: relative;">
          <div class="title">设计落地</div>
          <div class="underline"></div>
          <img :src="getCloudUrl('ai_design_img1.png')" />
          <img style="width: 508px;height: 479px;position: absolute;top: 100px;right: 35px;" :src="getCloudUrl('ai_page_cube.gif')" />
          <div class="ai_desgin_contain">
            <div class="icons">
              <div v-for="(icon, index) in iconList">
                <img style="cursor: pointer;" :style="{width:index === showSlide ? '90px' : '70px',height:index === showSlide ? '90px' : '70px'}" @click="changSlide(index+1)" :src="getSlideIcon(index+1)" />
                <p :style="{fontSize:index === showSlide ? '14px' : ''}">{{icon.title}}</p>
              </div>
            </div>
          </div>
          <div class="swiper_contain">
            <div class="swiper_slide" v-for="(slide, index) in slideList">
              <div class="box" v-if="index === showSlide">
                <img :src="slide.img" />
                <div class="text">
                  <p>{{slide.title1}}</p>
                  <p>{{slide.title2}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="ai_card">
            <div>
              <img :src="getCloudUrl('ai_desgin_card1.png')" />
              <img :src="getCloudUrl('ai_card_arrow.png')" />
            </div>
            <div>
              <img :src="getCloudUrl('ai_desgin_card2.png')" />
              <img :src="getCloudUrl('ai_card_arrow.png')" />
            </div>
            <div>
              <img :src="getCloudUrl('ai_desgin_card3.png')" />
              <img :src="getCloudUrl('ai_card_arrow.png')" />
            </div>
            <div>
              <img :src="getCloudUrl('ai_desgin_card4.png')" />
              <img :src="getCloudUrl('ai_card_arrow.png')" />
            </div>
          </div>
        </div>
        <img class="" :src="getCloudUrl('ai_img5.png')" />
        <img style="margin-top: 40px;" :src="getCloudUrl('ai_img6.png')" />
        <div class=" ai_gifs">
          <img :src="getCloudUrl('ai_gif1.gif')" />
          <img :src="getCloudUrl('ai_gif2.gif')" />
          <img :src="getCloudUrl('ai_gif3.gif')" />
          <img :src="getCloudUrl('ai_gif4.gif')" />
        </div>
        <div class=" ai_gifs">
          <img :src="getCloudUrl('ai_gif5.gif')" />
          <img :src="getCloudUrl('ai_gif6.gif')" />
          <img :src="getCloudUrl('ai_gif7.gif')" />
          <img :src="getCloudUrl('ai_gif8.gif')" />
        </div>
      </div>
    </div>
    <div class="ai_foot">
      <p>该项目目前正在开发。从0搭建过程中，我根据用户体验五要素从五个层次指定设计目标。此外，通过了解网页设计流行趋势，和另外一名设计师合作完成全部的UI工作。</p>
    </div>
    <div class="back_foot">
      <div @click="handlePre()" class="back_left">
        <em></em>
        <p>上一篇：喜韵音坊</p>
      </div>
      <div @click="handleNext()" class="back_right">
        <p>下一篇：游戏直播互动体验</p>
        <em></em>
      </div>
    </div>
    <nav-box :navList="navList" :navName="navName"></nav-box>
    <div class="anchor">
      <p v-for="(item, index) in anchor_tops" :style="{top:item.top+'px'}" class="ai_title" :id="'ai_title'+(index+1)"></p>
    </div>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import navBox from './navigationBox.vue'
import useMenuChange from "../hooks/useMenuChange"

export default defineComponent({
  name: "ximalayaai",
  components: {
    navBox,
  },
  setup() {
    useMenuChange()
    const internalInstance = getCurrentInstance()
    const $utils = internalInstance.appContext.config.globalProperties.$utils
    const getCloudUrl = (url) => {
      return $utils.getCloudUrl(url)
    }
    const router = useRouter()
    const navList = reactive([
      {title:'项目背景',cur: false,anchor:'ai_title1'},
      {title:'设计原则',cur: false,anchor:'ai_title2'},
      {title:'设计目标',cur: false,anchor:'ai_title3'},
      {title:'框架设计',cur: false,anchor:'ai_title4'},
      {title:'视觉规范',cur: false,anchor:'ai_title5'},
      {title:'设计落地',cur: false,anchor:'ai_title6'},
      {title:'功能体验',cur: false,anchor:'ai_title7'},
      {title:'动效设计',cur: false,anchor:'ai_title8'},
    ])
    const anchor_tops = [
      {top:1070},
      {top:2135},
      {top:2650},
      {top:3525},
      {top:6140},
      {top:7680},
      {top:11420},
      {top:12500},
    ]
    const navName = 'ai_title'
    const iconList = [
      {title:'语音合成'},
      {title:'语音识别'},
      {title:'有声内容创作'},
      {title:'音频信号处理'},
      {title:'语音分析'},
      {title:'声纹技术'},
      {title:'图像与虚拟人'},
      {title:'智能硬件'},
    ]
    const handlePre = () => {
      router.push({name: 'ximalayaMusic'})
    }
    const handleNext = () => {
      router.push({name: 'gameLive'})
    }
    const slideList = [
      {img:getCloudUrl('ai_gif1.gif'),title1:'语音合成',title2:'语音合成（Text-to-Speech，TTS）是将文本转换成语音的技术，应用于有声书、有声新闻、有声广告、智能助手等场景。喜马拉雅智能语音实验室自研HiTTS技术，聚焦有声内容，实现了多播多情感的语音合成，同时可预测不同文本的情感极性和节奏，并为不同内容自动匹配适合的说话角色以及合适的风格、音色和情绪。'},
      {img:getCloudUrl('ai_gif2.gif'),title1:'语音识别',title2:'录音文件识别（Automatic Speech Recognition, ASR）是机器自动将人的声音转化为文字的算法，可将批量音频文件识别为带时间戳、标点的文本数据。应用于语音转写、字幕对轨、语音、音频审核等场景。'},
      {img:getCloudUrl('ai_gif3.gif'),title1:'有声内容创作',title2:'有声内容创作让你能直观地实时调整语音参数，例如声音发音人、发音人风格、语速、停顿和情感等。你可以定义各种形式的声音。实现更准确、更具表现力以及更个性化的声音输出。'},
      {img:getCloudUrl('ai_gif4.gif'),title1:'音频信号处理',title2:'智能区分并提取音频中的背景音和人声干音，根据目标声音自动调整配乐音量，将不同音频信号源的音量级别保持不变。'},
      {img:getCloudUrl('ai_gif5.gif'),title1:'语音分析',title2:'语音评测（Computer Assisted Pronunciation Training，CAPT）指通过智能语音技术，自动对音频流中的朗读发音进行评分、问题定位及纠错。支持字、词、句、篇章等多种类型语音评测，并返回准确度、流畅度、完整度、声韵调型等多维度评分。可用于语音教学、普通话考核、主播培训等场景。'},
      {img:getCloudUrl('ai_gif6.gif'),title1:'声纹技术',title2:'角色分离（speaker diarization）也叫说话人日志，是指从一个连续的多人说话的语音中切分出不同说话人的片段，并且判断出每个片段是哪个说话人的过程。可以辅助会议、电话数据进行自动转写构建说话人的音频档案；也可以利用说话人分离技术，实现语料库的自动跟踪和标注。'},
      {img:getCloudUrl('ai_gif7.gif'),title1:'图像与虚拟人',title2:'通过虚拟人为AIGC内容赋能增加订阅与互动助力商业化，输入的图像，自动生成对应的描述性文本'},
      {img:getCloudUrl('ai_gif8.gif'),title1:'智能硬件',title2:'语音评测（Computer Assisted Pronunciation Training，CAPT）指通过智能语音技术，自动对音频流中的朗读发音进行评分、问题定位及纠错。支持字、词、句、篇章等多种类型语音评测，并返回准确度、流畅度、完整度、声韵调型等多维度评分。可用于语音教学、普通话考核、主播培训等场景。'},
    ]
    let showSlide = ref(0)
    const slideLoop = setInterval(() => {
      showSlide.value ++
      if(showSlide.value >= 8) showSlide.value = 0
    }, 3000);
    const getSlideIcon = (item) => {
      if(showSlide.value === item - 1) {
        return getCloudUrl('ai_desgin_gif'+item+'_h.png')
      }else {
        return getCloudUrl('ai_desgin_gif'+item+'_g.png')
      }
    }
    const changSlide = (item) => {
      showSlide.value = item - 1
    }
    return {
      navList,
      navName,
      anchor_tops,
      slideList,
      showSlide,
      iconList,
      changSlide,
      handlePre,
      handleNext,
      getSlideIcon,
      getCloudUrl
    };
  },
});
</script>