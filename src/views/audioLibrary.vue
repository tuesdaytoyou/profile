<template>
    <div class="audio_box flex_column">
        <div class="audio_imgs flex_column">
            <img v-for="index in 61"  :src="getCloudUrl('audio'+index+'.jpg')" alt="" />
        </div>
    </div>
</template>
<script>
import { defineComponent, getCurrentInstance } from "vue";


export default defineComponent({
  name: "audio",
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