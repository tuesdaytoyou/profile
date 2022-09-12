<template>
  <div class="audio_box flex_column">
    <div class="audio_imgs flex_column" style="position:relative;">
      <!-- <img style="width:1920px" :src="getCloudUrl('audio_img1.png')" alt="" />
      <img style="width:1920px" :src="getCloudUrl('audio_img2.png')" alt="" />
      <img style="width:1688px;position:absolute;top:2192px;" :src="getCloudUrl('audio_img3.png')" alt="" />
      <img style="width:1819px;position:absolute;top:3360px;" :src="getCloudUrl('audio_img4.png')" alt="" />
      <img style="width:1688px;position:absolute;top:7462px;" :src="getCloudUrl('audio_img5.png')" alt="" />
      <img style="width:1921px;position:absolute;top:9000px;left:-106px;clip-path:polygon(116px 0, 100% 0, 100% 100%, 116px 100%);" :src="getCloudUrl('audio_img6.png')" alt="" />
      <img style="width:1507px;position:absolute;top:12100px;" :src="getCloudUrl('audio_img7.png')" alt="" />
      <div class="flex_column" style="position:absolute;top:5570px;background-color:black;width:100%;height:100px;">
        <ul class="audio_contain">
          <li @click="handleAudioList(audio, index)" v-for="(audio, index) in audioList" :key="audio.id"
            class="audio_list flex_column" :class="{ 'audio_cur': audio.cur }"><span>{{ audio.name }}</span></li>
        </ul>
      </div> -->
      <div v-for="i in 6">
        <img style="width:1920px" :src="getCloudUrl('audio_img' + i + '.png')" />
      </div>
      <div class="back_foot">
        <div @click="handlePre()" class="back_left">
          <em></em>
          <p>返回主页</p>
        </div>
        <div @click="handleNext()" class="back_right">
          <p>下一篇：Beginner's guide</p>
          <em></em>
        </div>
      </div>
      <div class="flex_column" style="position:absolute;top:6040px;background-color:black;width:100%;height:100px;">
        <ul class="audio_contain">
          <li @click="handleAudioList(audio, index)" v-for="(audio, index) in audioList" :key="audio.id"
            class="audio_list flex_column" :class="{ 'audio_cur': audio.cur }"><span>{{ audio.name }}</span></li>
        </ul>
      </div>
      <div class="flex_column" style="position:absolute;top:6330px;background-color:black;width:100%;height:1080px;">
        <img style="width:1688px" v-show="curIndex == 1" :src="getCloudUrl('audio_list1.png')" />
        <iframe v-show="curIndex == 2" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1600" height="1362"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9C4FkOastcC6AIpjh8PkuA%2F%25E9%25A1%25B9%25E7%259B%25AE%25E6%2595%25B4%25E7%2590%2586%3Fnode-id%3D141%253A40848%26scaling%3Dcontain%26page-id%3D141%253A33439%26starting-point-node-id%3D141%253A40848%26show-proto-sidebar%3D1"
          allowfullscreen></iframe>
        <img style="width:1688px" v-show="curIndex == 3" :src="getCloudUrl('audio_list3.png')" />
        <img style="width:1688px" v-show="curIndex == 4" :src="getCloudUrl('audio_list4.png')" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance, reactive, ref, onMounted } from "vue";
import useMenuChange from "../hooks/useMenuChange"

export default defineComponent({
  name: "audio",
  setup() {
    useMenuChange()
    const internalInstance = getCurrentInstance()
    const $utils = internalInstance.appContext.config.globalProperties.$utils
    const getCloudUrl = (url) => {
      return $utils.getCloudUrl(url)
    }
    const audioList = reactive([
      { id: "1", name: '终案说明', cur: true },
      { id: "2", name: '终案演示', cur: false },
      { id: "3", name: '探索1', cur: false },
      { id: "4", name: '探索2', cur: false },
    ])
    let curIndex = ref(1);
    const handleAudioList = (item, index) => {
      audioList.forEach(audio => {
        audio.cur = false;
      })
      item.cur = true;
      curIndex.value = index + 1
    }
    const handlePre = () => {
      router.push({name: 'home'})
    }
    const handleNext = () => {
      router.push({name: 'beginnerGuide'})
    }
    return {
      handlePre,
      handleNext,
      getCloudUrl,
      audioList,
      curIndex,
      handleAudioList
    };
  },
});
</script>
<style>
.audio_box {
  background: black
}

.audio_contain {
  display: flex;
  justify-content: center;
  align-items: center;
}

.audio_list {
  margin: 0 12px;
  cursor: pointer;
  width: 180px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
}

.audio_list span {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 180%;
  text-align: center;
  color: #FFFFFF;
}

.audio_cur {
  background: #25F4EE;
  color: #010201;
}
</style>