<template>
  <div style="background:#000000;width:100%;height:100%">
    <div class="amazon_img_list">
      <div>
        <img :src="getCloudUrl('amazon_img1.png')" />
        <img :src="getCloudUrl('amazon_img2.png')" />
      </div>
    </div>
    <div class="amazon_iframe_box">
      <div class="iframe">
        <img :src="getCloudUrl('figma_bg1.png')" />
        <img :src="getCloudUrl('figma_bg2.png')" />
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);z-index:100" width="917" height="600" 
                src="https://www.figma.com/embed?embed_host=share&url=
                https%3A%2F%2Fwww.figma.com%2Fproto%2FAahCNLFqTWa2VFiHYHXWWL%2FNLP-Amazon%3Fnode-id%3D2353%253A35746%26starting-point-node-id%3D2358%253A35753" 
                allowfullscreen></iframe>
        <!-- <iframe id="amazonIframe" name="amazonIframe" 
                src="https://www.figma.com/proto/AahCNLFqTWa2VFiHYHXWWL/NLP-Amazon?node-id=2358%3A35753&starting-point-node-id=2358%3A35753" 
                frameborder="0" scrolling="auto" ></iframe> -->
      </div>
    </div>
    <div class="amazon_img_list">
      <div>
        <img :src="getCloudUrl('amazon_img3.png')" />
      </div>
    </div>
    <div class="back_foot">
      <div @click="handlePre()" class="back_left">
        <em></em>
        <p>上一篇：游戏直播互动体验</p>
      </div>
      <div @click="handleNext()" class="back_right">
        <p>MORE WORK</p>
        <em></em>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance } from 'vue'
import { useRouter } from "vue-router";
import useMenuChange from "../hooks/useMenuChange"

export default defineComponent({
  setup() {
    useMenuChange()
    const internalInstance = getCurrentInstance()
    const $utils = internalInstance.appContext.config.globalProperties.$utils
    const getCloudUrl = (url) => {
      return $utils.getCloudUrl(url)
    }
    const router = useRouter()
    const handlePre = () => {
      router.push({name: 'gameLive'})
    }
    const handleNext = () => {
      router.push({name: 'home', query:{nav:'more'}})
    }
    return { handlePre, handleNext, getCloudUrl }
  }
})
</script>
<style scoped>
.amazon_img_list {display: flex;justify-content: center;align-items: center;}
.amazon_img_list div{display: flex;justify-content: center;align-items: center;flex-direction: column;}
.amazon_iframe_box{display: flex;justify-content: center;align-items: center;}
.amazon_iframe_box .iframe{display: flex;justify-content: center;align-items: center;}
.amazon_iframe_box .iframe img{position: absolute;}
</style>