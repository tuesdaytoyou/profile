<template>
  <div id="home_title4" class="more_box home_title">
    <div class="home_title_head">
      <div>MORE</div>
      <div>MORE WORK</div>
      <div style="background:rgba(0, 87, 255, 1)"></div>
    </div>
    <div class="more_menu_box">
      <ul>
        <li>所有</li>
        <li>AR</li>
        <li>智能产品</li>
        <li>研究</li>
        <li>视觉</li>
        <li>品牌</li>
        <li>3D建模</li>
      </ul>
    </div>
    <div class="card_list_box" style="margin-top:20px">
      <ul class="card_list">
        <li>
          <div class="card_list_top">
            <img :src="getCloudUrl('more_list1.png')" />
            <div @click="jumpTo('hok')">
              <p></p>
              <p>需求分析、心智模型建立、用户群体划分、设计心理学分析、问题发掘与建议</p>
            </div>
          </div>
          <div class="card_list_bottom">
            <p>王者荣耀产品分析报告</p>
            <p><span>设计心理学课程</span></p>
            <p><span>设计心理学</span><span>功能需求分析</span></p>
            <p @click="jumpTo('hok')"></p>
          </div>
        </li>
        <li>
          <div class="card_list_top">
            <img :src="getCloudUrl('more_list2.png')" />
            <div @click="jumpTo('planetarium')">
              <p></p>
              <p>天文物理知识转化为游戏，并用一个科幻离奇的未来故事串联，打造沉浸、趣味的游览体验。</p>
            </div>
          </div>
          <div class="card_list_bottom">
            <p>单人玩家天文馆游戏化互动体验</p>
            <p><span>上海天文馆项目</span></p>
            <p><span>体验设计</span><span>游戏化</span><span>关卡</span></p>
            <p @click="jumpTo('planetarium')"></p>
          </div>
        </li>
        <li>
          <div class="card_list_top">
            <img :src="getCloudUrl('more_list3.png')" />
            <div @click="jumpTo('solarterm')">
              <p></p>
              <p>结合传统二十四节气中关于农耕的运作知识，设定老年人健身常用动作，将二者融入到游戏机制中，激励老人持续健身，同时也可以借助节气知识进行社交等。</p>
            </div>
          </div>
          <div class="card_list_bottom">
            <p>老年游戏化复健产品《24节气》</p>
            <p><span>课程项目</span></p>
            <p><span>Unity</span><span>健身游戏</span><span>关卡</span></p>
            <p @click="jumpTo('solarterm')"></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="images_list_box">
      <a-image-preview-group>
        <ul class="images_list">
          <li>
            <div style="position: relative;">
              <div class="img_box" style="width:380px;height:380px;background:#212122;">
                <a-image :src="getCloudUrl('more_img1.gif')" />
              </div>
              <div class="mask"></div>
              <p>动效设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box" style="width:380px;height:380px;background:#212122;">
                <a-image :src="getCloudUrl('more_img2.gif')" />
              </div>
              <div class="mask" @click="visible = true"></div>
              <p>动效设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box" style="width:380px;height:380px;background:#212122;">
                <a-image :src="getCloudUrl('more_img3.gif')" />
              </div>
              <div class="mask"></div>
              <p>动效设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getCloudUrl('more_img4.png')" />
              </div>
              <div class="mask"></div>
              <p>智能产品设计－全息投影香薰仪</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getCloudUrl('more_img5.png')" />
              </div>
              <div class="mask"></div>
              <p>图标设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getCloudUrl('more_img6.png')" />
              </div>
              <div class="mask"></div>
              <p>插画设计－卡面</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getCloudUrl('more_img7.png')" />
              </div>
              <div class="mask"></div>
              <p>珠宝设计－海洋的眼泪</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getCloudUrl('more_img8.png')" />
              </div>
              <div class="mask"></div>
              <p>海报设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box" style="margin-top:-250px">
                <a-image :src="getCloudUrl('more_img9.png')" />
              </div>
              <div class="mask"></div>
              <p>品牌设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getCloudUrl('more_img10.png')" />
              </div>
              <div class="mask"></div>
              <p>品牌CV设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box" style="width:380px;height:535px;margin-top:-300px">
                <a-image :src="getCloudUrl('more_img11.png')" />
              </div>
              <div class="mask"></div>
              <p>信息可视化研究</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getCloudUrl('more_img12.png')" />
              </div>
              <div class="mask"></div>
              <p>彩铅作品</p>
            </div>
          </li>
          <li style="margin-top:-300px">
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getCloudUrl('more_img13.png')" />
              </div>
              <div class="mask"></div>
              <p>产品设计</p>
            </div>
          </li>
          <li style="margin-top:-300px;margin-left: 480px;">
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getCloudUrl('more_img14.png')" />
              </div>
              <div class="mask"></div>
              <p>彩铅作品</p>
            </div>
          </li>
          <li style="clear:both;">
            <div style="position: relative;">
            <div class="img_box">
                <a-image :src="getCloudUrl('more_img15.png')" />
              </div>
              <div class="mask"></div>
              <p>插画</p>
            </div>
          </li>
        </ul>
      </a-image-preview-group>
    </div>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "home",
  setup() {
    const router = useRouter()
    const internalInstance = getCurrentInstance()
    const $utils = internalInstance.appContext.config.globalProperties.$utils
    const jumpTo = (name) => {
      if(name === 'hok') {
        const url = $utils.getCloudUrl('HOK.pdf')
        window.open(url)
        return
      }
      router.push({name})
    }
    const getCloudUrl = (url) => {
      return $utils.getCloudUrl(url)
    }
    return {
      jumpTo,
      getCloudUrl,
    };
  },
});
</script>