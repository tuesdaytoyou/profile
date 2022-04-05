<template>
    <a-carousel autoplay arrows dots-class="slick-dots slick-thumb">
        <template #customPaging="props">
            <a>
                <img :src="getAssetsFile('ai_desgin_card1.png')" />
            </a>
        </template>
        <div v-for="item in 4" :key="item">
            <div>
                <img :src="getAssetsFile('ai_gif1.gif')" />
                <div class="text">
                    <p>语音合成</p>
                    <p>语音合成（Text-to-Speech，TTS）是将文本转换成语音的技术，应用于有声书、有声新闻、有声广告、智能助手等场景。喜马拉雅智能语音实验室自研HiTTS技术，聚焦有声内容，实现了多播多情感的语音合成，同时可预测不同文本的情感极性和节奏，并为不同内容自动匹配适合的说话角色以及合适的风格、音色和情绪。</p>
                </div>
            </div>
        </div>
    </a-carousel>
</template>
<script>
import { defineComponent } from 'vue';
const baseUrl = 'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
export default defineComponent({
    setup() {
        const getImgUrl = i => {
            return `${baseUrl}abstract0${i + 1}.jpg`;
        };
        const getAssetsFile = (url) => {
            return new URL(`../assets/images/${url}`, import.meta.url).href
        }
        return {
            baseUrl,
            getImgUrl,
            getAssetsFile,
        };
    },

});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-dots) {
    position: relative;
    height: auto;
}
.ant-carousel :deep(.slick-slide img) {
    border: 5px solid #fff;
    display: block;
    margin: auto;
    max-width: 80%;
}
.ant-carousel :deep(.slick-arrow) {
    display: none !important;
}
.ant-carousel :deep(.slick-thumb) {
    bottom: 0px;
}
.ant-carousel :deep(.slick-thumb li) {
    width: 60px;
    height: 45px;
}
.ant-carousel :deep(.slick-thumb li img) {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    display: block;
}
.ant-carousel :deep .slick-thumb li.slick-active img {
    filter: grayscale(0%);
}
</style>