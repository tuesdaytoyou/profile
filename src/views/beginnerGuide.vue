<template>
  <div class="guide_box flex_column">
    <div class="guide_imgs flex_column" style="position:relative;">
      <div v-for="i in 7">
        <img style="width:1920px" :src="getCloudUrl('guide_img' + i + '.png')" />
      </div>
      <div style="margin:50px 0">
        <div class="blog_title">更多研究详情</div>
        <div class="blog_card_list_box" style="margin-top:20px">
          <ul class="blog_card_list">
            <li v-for="(item, index) in blogCardList">
              <div class="blog_card_left">
                <img :src="getCloudUrl(item.img)" />
              </div>
              <div class="blog_card_right" @click="jumpTo(item.url)">
                <div class="left">
                  <p>{{item.title}}</p>
                  <p>{{item.description}}</p>
                </div>
                <div class="right">
                  <div v-for="key in item.keys">
                    <p>{{key}}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="back_foot">
        <div @click="handlePre()" class="back_left">
          <em></em>
          <p>上一篇：Audio Library</p>
        </div>
        <div @click="handleNext()" class="back_right">
          <p>下一篇：喜韵音坊</p>
          <em></em>
        </div>
      </div>
      <div style="position:absolute;top:1160px">
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1680" height="930"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDtWj0la9QVsWkWgTQSZtxQ%2F%25F0%259F%2596%25A5-New-Guide%3Fpage-id%3D24%253A59978%26node-id%3D434%253A14689%26viewport%3D1916%252C-1147%252C0.07%26scaling%3Dscale-down-width%26starting-point-node-id%3D434%253A14689"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance, reactive, ref, onMounted } from "vue";
import useMenuChange from "../hooks/useMenuChange"
import { useRouter } from "vue-router";

export default defineComponent({
  name: "guide",
  setup() {
    useMenuChange()
    const router = useRouter()
    const internalInstance = getCurrentInstance()
    const $utils = internalInstance.appContext.config.globalProperties.$utils
    const getCloudUrl = (url) => {
      return $utils.getCloudUrl(url)
    }
    const blogCardList = [
      {
        title: "工具类产品新手引导设计规范研究",
        description:
          "为快速提高产品的活跃用户、核心用户的增长，通过用户分层，在不同用户的不同场景下探索针对性新手引导解决方案。",
        keys: ["字节实习", "设计自驱"],
        img: 'gblog_img1.png',
        url: 'https://www.notion.so/80b92b7a3d924fd599315a53339a261c'
      },
      {
        title: "如何组织设计Workshop助力设计规范研究",
        description:
          "实习期间，通过组织两场面向设计、业务的workshop，了解平台新手引导的最佳案例，探索平台多工具合作潜力。",
        keys: ["字节实习", "Workshop"],
        img: 'gblog_img2.png',
        url: 'https://ludicrous-harmony-bcc.notion.site/c086347e638e46b282abb6de593244ff'
      },
    ];
    const handlePre = () => {
      router.push({name: 'audioLibrary'})
    }
    const handleNext = () => {
      router.push({name: 'ximalayaMusic'})
    }
    const jumpTo = url => {
      window.open(url)
    };
    return {
      handlePre,
      handleNext,
      getCloudUrl,
      jumpTo,
      blogCardList,
    };
  },
});
</script>
<style>
.guide_box {
  background: black
}

.guide_contain {
  display: flex;
  justify-content: center;
  align-items: center;
}

.guide_list {
  margin: 0 12px;
  cursor: pointer;
  width: 180px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
}

.guide_list span {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 180%;
  text-align: center;
  color: #FFFFFF;
}

.guide_cur {
  background: #25F4EE;
  color: #010201;
}

.blog_title {
  margin: auto;
  width: 181px;
  height: 31px;
  font-family: 'Sofia Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 28.4924px;
  line-height: 110%;
  letter-spacing: -0.01em;
  color: #FFFFFF;
}
</style>