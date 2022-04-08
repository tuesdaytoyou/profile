<template>
    <div class="solarterm_box flex_column">
        <div style="margin-top: 100px;">
            <video controls style="width: 1280px;" :src="getCloudUrl('solarterm.mp4')" ></video>
        </div>
        <div class="solarterm_imgs flex_column">
            <img style="width: 1280px;" :src="getCloudUrl('solarterm.png')" alt="">
        </div>
    </div>
</template>
<script>
import { defineComponent, getCurrentInstance } from "vue";


export default defineComponent({
  name: "sloarterm",
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
<style>
.flex_column{display: flex;justify-content: center;align-items: center;flex-direction: column;}
</style>