<template>
    <div class="planetarium_box flex_column">
        <div style="margin-top: 100px;position: relative;">
            <!-- <div class="video_iframe"></div> -->
            <video controls style="width: 1280px;" :src="getCloudUrl('planetarium.mp4')"></video>
        </div>
        <div class="planetarium_imgs flex_column">
            <img v-for="index in 61"  :src="getCloudUrl('planetarium_wrapper_Page'+index+'.jpg')" alt="" />
        </div>
    </div>
</template>
<script>
import { defineComponent, getCurrentInstance } from "vue";


export default defineComponent({
  name: "planetarium",
  setup() {
    const internalInstance = getCurrentInstance()
    const $utils = internalInstance.appContext.config.globalProperties.$utils
    const getCloudUrl = (url) => {
      return $utils.getCloudUrl(url)
    }
    return {
        getCloudUrl
    };
  },
});
</script>