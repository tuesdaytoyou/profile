<template>
  <div id="home_title3" class="blog_box home_title">
    <div class="home_title_head">
      <div>Design Thinking</div>
      <div>Blog</div>
      <div></div>
    </div>
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
</template>
<script>
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
  name: "blog",
  setup() {
    const internalInstance = getCurrentInstance()
    const $utils = internalInstance.appContext.config.globalProperties.$utils
    const blogCardList = [
      {
        title: "用户体验走查方法论总结与思考",
        description:
          "在喜马拉雅实习期间，通过体验指标，进行体验走查项目，发掘体验问题，为产品体验改进提供方向。",
        keys: ["企业实习", "体验走查"],
        img: 'blog_img2.png',
        url: 'https://ludicrous-harmony-bcc.notion.site/677fd60d273a46b5812d3f3c23072405'
      },
      {
        title: "如何组织设计Workshop助力设计规范研究",
        description:
          "实习期间，通过组织两场面向设计、业务的workshop，了解平台新手引导的最佳案例，探索平台多工具合作潜力。",
        keys: ["字节实习", "workshop"],
        img: 'blog_img4.png',
        url: 'https://ludicrous-harmony-bcc.notion.site/Workshop-c086347e638e46b282abb6de593244ff'
      },
      {
        title: "MR Design System (WIP个人兴趣，持续研究)",
        description:
          "随着元宇宙到来，MR混合现实的设计系统存在什么样的特点？通过研究世界先进企业的探索，并进行总结，并尝试提出假设和验证。",
        keys: ["设计系统", "VR、AR、MR"],
        img: 'blog_img1.png',
        url: 'https://ludicrous-harmony-bcc.notion.site/MR-Design-System-e9861a5358f4461d9d53e1d175a00525'
      },
      // {
      //   title: "企业C端产品交互设计规范制定",
      //   description:
      //     "喜马拉雅实习期间，曾负责制定“异常场景设计规范”、“模态控件使用规范”。",
      //   keys: ["企业实习", "设计规范"],
      //   img: 'blog_img3.png',
      //   url: 'https://ludicrous-harmony-bcc.notion.site/C-024f6fd380ea4621b384788591404257'
      // }
    ];
    const getCloudUrl = (url) => {
      return $utils.getCloudUrl(url)
    }
    const jumpTo = url => {
      window.open(url)
    };
    return {
      blogCardList,
      getCloudUrl,
      jumpTo
    };
  }
});
</script>