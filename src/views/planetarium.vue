<template>
    <div class="planetarium_box flex_column">
        <div style="margin-top: 100px;position: relative;">
            <!-- <div class="video_iframe"></div> -->
            <video controls style="width: 1280px;" src="../assets/video/planetarium.mp4"></video>
        </div>
        <div class="planetarium_imgs flex_column">
            <img v-for="index in 61"  :src="getAssetsFile('planetarium_wrapper_Page'+index+'.jpg')" alt="" />
        </div>
    </div>
</template>
<script>
import { defineComponent, onMounted, reactive } from "vue";


export default defineComponent({
  name: "planetarium",
  setup() {
    const getAssetsFile = (url) => {
        return new URL(`../assets/images/planetarium/${url}`, import.meta.url).href
    }
    return {
        getAssetsFile
    };
  },
});
</script>
<style>
.flex_column{display: flex;justify-content: center;align-items: center;flex-direction: column;}
.video_iframe{background: url(@/assets/images/video_iframe.png) no-repeat;position: absolute;height: 100%;width: 100%;background-size: contain;}
</style>