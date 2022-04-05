<template>
  <div class="more_box">
    <div class="more_head">
      <div>MORE</div>
      <div>MORE WORK</div>
      <div></div>
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
            <img src="@/assets/images/more_list1.png" />
            <div @click="jumpTo('hok')">
              <p></p>
              <p>需求分析、心智模型简历、用户群体划分、设计心理学分析、问题发掘与建议</p>
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
            <img src="@/assets/images/more_list2.png" />
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
            <img src="@/assets/images/more_list3.png" />
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
                <a-image :src="getAssetsFile('more_img1.gif')" />
              </div>
              <div class="mask"></div>
              <p>动效设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box" style="width:380px;height:380px;background:#212122;">
                <a-image :src="getAssetsFile('more_img2.gif')" />
              </div>
              <div class="mask" @click="visible = true"></div>
              <p>动效设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box" style="width:380px;height:380px;background:#212122;">
                <a-image :src="getAssetsFile('more_img3.gif')" />
              </div>
              <div class="mask"></div>
              <p>动效设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getAssetsFile('more_img4.png')" />
              </div>
              <!-- <img src="../assets/images/more_img4.png" /> -->
              <div class="mask"></div>
              <p>智能产品设计－全息投影香薰仪</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getAssetsFile('more_img5.png')" />
              </div>
              <!-- <img src="../assets/images/more_img5.png" /> -->
              <div class="mask"></div>
              <p>图标设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getAssetsFile('more_img6.png')" />
              </div>
              <!-- <img src="../assets/images/more_img6.png" /> -->
              <div class="mask"></div>
              <p>插画设计－卡面</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getAssetsFile('more_img7.png')" />
              </div>
              <!-- <img src="../assets/images/more_img7.png" /> -->
              <div class="mask"></div>
              <p>珠宝设计－海洋的眼泪</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getAssetsFile('more_img8.png')" />
              </div>
              <!-- <img src="../assets/images/more_img8.png" /> -->
              <div class="mask"></div>
              <p>海报设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box" style="margin-top:-250px">
                <a-image :src="getAssetsFile('more_img9.png')" />
              </div>
              <!-- <img style="margin-top:-250px" src="../assets/images/more_img9.png" /> -->
              <div class="mask"></div>
              <p>品牌设计</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getAssetsFile('more_img10.png')" />
              </div>
              <!-- <img src="../assets/images/more_img10.png" /> -->
              <div class="mask"></div>
              <p>信息可视化研究</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box" style="width:380px;height:535px;margin-top:-300px">
                <a-image :src="getAssetsFile('more_img11.png')" />
              </div>
              <!-- <img style="width:380px;height:535px;margin-top:-300px" src="../assets/images/more_img11.png" /> -->
              <div class="mask"></div>
              <p>信息可视化研究</p>
            </div>
          </li>
          <li>
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getAssetsFile('more_img12.png')" />
              </div>
              <!-- <img src="../assets/images/more_img12.png" /> -->
              <div class="mask"></div>
              <p>彩铅作品</p>
            </div>
          </li>
          <li style="margin-top:-300px">
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getAssetsFile('more_img13.png')" />
              </div>
              <!-- <img src="../assets/images/more_img13.png" /> -->
              <div class="mask"></div>
              <p>彩铅作品</p>
            </div>
          </li>
          <li style="margin-top:-300px;margin-left: 480px;">
            <div style="position: relative;">
              <div class="img_box">
                <a-image :src="getAssetsFile('more_img14.png')" />
              </div>
              <!-- <img src="../assets/images/more_img14.png" /> -->
              <div class="mask"></div>
              <p>彩铅作品</p>
            </div>
          </li>
          <li style="clear:both;">
            <div style="position: relative;">
            <div class="img_box">
                <a-image :src="getAssetsFile('more_img15.png')" />
              </div>
              <!-- <img src="../assets/images/more_img15.png" /> -->
              <div class="mask"></div>
              <p>彩铅作品</p>
            </div>
          </li>
        </ul>
      </a-image-preview-group>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "home",
  setup() {
    const router = useRouter()
    const jumpTo = (name) => {
      if(name === 'hok') {
        window.open('https://tuesdaytoyou.github.io/docs/HOK.pdf')
        return
      }
      router.push({name})
    }
    const getAssetsFile = (url) => {
      return new URL(`../assets/images/${url}`, import.meta.url).href
    }
    let imgList = [
      {}
    ]
    return {
      jumpTo,
      getAssetsFile,
    };
  },
});
</script>
<style scoped>
.more_box {
  position: relative;
  width: 100%;
  margin: auto;
  margin-top: 35px;
  height: 4550px;
  filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.1));
}
.more_head {
  margin: auto;
  padding-top: 58px;
}
.more_head div:nth-child(1) {
  position: relative;
  width: 143px;
  height: 41px;
  margin: auto;
  text-align: center;
  font-family: "Archivo Black";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 160%;
  /* or 48px */

  color: #ffffff;

  opacity: 0.5;
}

.more_head div:nth-child(2) {
  position: relative;
  width: 300px;
  height: 41px;
  margin: 3px auto;
  font-family: "Archivo Black";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 160%;
  /* or 72px */

  display: flex;
  align-items: center;

  color: #ffffff;
}
.more_head div:nth-child(3) {
  position: relative;
  margin: 10px auto;
  width: 96px;
  height: 5px;
  background: #ffffff;
}
.images_list_box {
  display: flex;
  justify-content: center;
  max-width: 1980px;
  margin: 0 auto 0 auto;
  height: 550px;
}
.images_list {
  width: 1340px;
}
.images_list li{
  float: left;
  margin-left: 50px;
  margin-bottom: 50px;
  transition:0.5s ease;
}
.images_list li:hover{
  transform:scale(1.1);
}
.images_list li:hover p{
  display: block;
}
.images_list li:hover .mask{
  display: block;
}
.images_list li p{
  position: absolute;
  left: 5%;
  bottom: 5%;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 103.97%;
  display: none;
  color: #FFFFFF;;
}
.more_menu_box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 40px;
}
.more_menu_box ul{
  width: 1244px;
}
.more_menu_box ul li{
  display: inline-block;
  margin-right: 41px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 160%;
  color: rgba(255, 255, 255, 0.8);
}
.images_list .mask{width: 100%;height: 100%;position: absolute;background: rgba(0, 0, 0, 0.3);top: 0;display: none;cursor: pointer;pointer-events: none;}
.images_list .img_box{cursor: pointer;}
</style>