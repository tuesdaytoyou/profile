<template>
  <div class="port_box">
    <div class="port_head">
      <div>Portfolio</div>
      <div>Portfolio</div>
      <div></div>
    </div>
    <div class="card_list_box">
      <ul class="card_list">
        <li>
          <div class="card_list_top">
            <img src="@/assets/images/port_list1.png" />
            <div @click="jumpTo('ximalayaMusic')">
              <p>工具产品设计</p>
              <p>面向C端用户的对外内容生产工具，打通登陆-生产-发布链路，帮助创作者快速便捷的生产个性化内容，从而繁荣AIGC和UGC生态。</p>
            </div>
          </div>
          <div class="card_list_bottom">
            <p>喜韵音坊－AI音频内容创作平台</p>
            <p><span>喜马拉雅实习</span><span>2021</span></p>
            <p><span>交互</span><span>UI</span></p>
            <p @click="jumpTo('ximalayaMusic')"></p>
          </div>
        </li>
        <li>
          <div class="card_list_top">
            <img src="@/assets/images/port_list2.png" />
            <div @click="jumpTo('ximalayaAi')">
              <p>Web网站设计</p>
              <p>对内对外展示喜马拉雅Al算法能力的展示平台。通过交互demo体验算法能力，展示平台能力和企业的服务能力，增加行业内知名度。</p>
            </div>
          </div>
          <div class="card_list_bottom">
            <p>喜马拉雅AI云网站</p>
            <p><span>喜马拉雅实习</span><span>2021</span></p>
            <p><span>交互</span><span>UI</span></p>
            <p @click="jumpTo('ximalayaAi')"></p>
          </div>
        </li>
        <li>
          <div class="card_list_top">
            <img src="@/assets/images/port_list3.png" />
            <div @click="jumpTo('gameLive')">
              <p>C端用户体验设计</p>
              <p>旨在通过设计新的互动模式增强用户的游戏直播互动体验负责用户研究，交互及可用性测试</p>
            </div>
          </div>
          <div class="card_list_bottom">
            <p>游戏直播体验创新设计</p>
            <p><span>小组课程</span><span>2020</span></p>
            <p><span>用户研究</span><span>交互</span><span>可用性测试</span></p>
            <p @click="jumpTo('gameLive')"></p>
          </div>
        </li>
        <li>
          <div class="card_list_top">
            <img src="@/assets/images/port_list4.png" />
            <div @click="jumpTo('amazon')">
              <p>B端体验设计</p>
              <p>亚马逊人工智能研究院NLP算法产品落地项目:语义解析工具，旨在分析长文档，展示处理结果。</p>
            </div>
          </div>
          <div class="card_list_bottom">
            <p>NLP－人工智能交互产品设计</p>
            <p><span>亚马逊实习</span><span>2021</span></p>
            <p><span>交互</span><span>UI</span></p>
            <p @click="jumpTo('amazon')"></p>
          </div>
        </li>
        <!-- <li>
          <div class="card_list_top">
            <img src="@/assets/images/port_list5.png" />
            <div>
              <p>C端web产品体验设计</p>
              <p>搭建以科研文献阅读社交互动为核心的文献阅读平台。项目唯一设计师，负责整个产品的需求-方案落地，项目已完成部分开发。</p>
            </div>
          </div>
          <div class="card_list_bottom">
            <p>食研－科研共享阅读平台</p>
            <p><span>交大科创项目</span><span>2021-2022</span></p>
            <p><span>交互</span><span>UI</span><span>0-1设计开发</span></p>
            <p></p>
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "home",
  setup() {
    const router = useRouter()
    const jumpTo = (name) => {
      router.push({name})
    }
    return {
      jumpTo
    };
  },
});
</script>
<style scoped>
.port_box {
  position: relative;
  width: 98%;
  margin: auto;
  margin-top: 35px;
  height: 1349px;
  background: rgba(0, 71, 209, 1);
  filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.1));
}
.port_head {padding-top: 58px;display: flex;justify-content: center;align-items: center;flex-direction: column;}
.port_head div:nth-child(1) {
  position: relative;
  height: 41px;
  margin: auto;
  text-align: center;
  font-family: "Archivo Black";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 160%;
  color: #ffffff;
  opacity: 0.5;
}

.port_head div:nth-child(2) {
  position: relative;
  height: 41px;
  font-family: "Archivo Black";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;

  color: #ffffff;
}
.port_head div:nth-child(3) {
  position: relative;
  margin: 20px auto;
  width: 96px;
  height: 5px;
  background: #ffffff;
}


</style>