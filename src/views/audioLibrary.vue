<template>
  <div class="audio_box flex_column">
    <div class="flex_column" style="position:absolute;top:5600px;background-color:black;width:100%;height:100px;">
      <ul class="audio_contain">
        <li @click="handleAudioList(audio, index)" v-for="(audio, index) in audioList" :key="audio.id"
          class="audio_list flex_column" :class="{ 'audio_cur': audio.cur }"><span>{{ audio.name }}</span></li>
      </ul>
    </div>
    <div class="flex_column" style="position:absolute;top:5900px;background-color:black;width:100%;height:1080px;">
      <img v-show="curIndex == 1" :src="getCloudUrl('audio_list1.png')" />
      <iframe v-show="curIndex == 2" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1600" height="1362"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9C4FkOastcC6AIpjh8PkuA%2F%25E9%25A1%25B9%25E7%259B%25AE%25E6%2595%25B4%25E7%2590%2586%3Fnode-id%3D141%253A40848%26scaling%3Dcontain%26page-id%3D141%253A33439%26starting-point-node-id%3D141%253A40848%26show-proto-sidebar%3D1"
        allowfullscreen></iframe>
      <img v-show="curIndex == 3" :src="getCloudUrl('audio_list3.png')" />
      <img v-show="curIndex == 4" :src="getCloudUrl('audio_list4.png')" />
    </div>
    <div class="audio_imgs flex_column">
      <img v-for="index in 2" :src="getCloudUrl('audio_img' + index + '.png')" alt="" />
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
    return {
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