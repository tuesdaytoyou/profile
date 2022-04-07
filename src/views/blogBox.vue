<template>
  <div id="home_title3" class="blog_box home_title">
    <div class="home_title_head">
      <div>Design Thinking</div>
      <div>Blog</div>
      <div></div>
    </div>
    <div class="blog_card_list_box" style="margin-top:20px">
      <ul class="blog_card_list">
        <li>
          <div class="blog_card_left">
            <img src="@/assets/images/more_list2.png" />
          </div>
          <div class="blog_card_right">
            <div class="left">
              <p>MR Design System</p>
              <p>个人学习总结，想想</p>
            </div>
            <div class="right">
              <div><p>设计系统</p></div>
              <div><p>VR、AR、MR</p></div>
            </div>
          </div>
        </li>
        <li>
          <div class="blog_card_left">
            <img src="@/assets/images/more_list2.png" />
          </div>
          <div class="blog_card_right">
            <div class="left">
              <p>用户体验走查方法论思考</p>
              <p>个人学习总结，想想</p>
            </div>
            <div class="right">
              <div><p>企业实习</p></div>
              <div><p>体验走查</p></div>
            </div>
          </div>
        </li>
        <li>
          <div class="blog_card_left">
            <img src="@/assets/images/more_list2.png" />
          </div>
          <div class="blog_card_right">
            <div class="left">
              <p>企业C端产品交互设计规范制定</p>
              <p>个人学习总结，想想</p>
            </div>
            <div class="right">
              <div><p>设计系统</p></div>
              <div><p>设计规范</p></div>
            </div>
          </div>
        </li>
      </ul>
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
.blog_card_list {display: flex;justify-content: center;align-items: center;flex-direction: column;}
.blog_card_list li{display: flex;justify-content: center;align-items: center;margin-bottom: 20px;}
.blog_card_left img{width: 100px;height: 100px;border-radius: 5px;}
.blog_card_right{width: 1120px;height: 100px;background-color: #ffffff;border-radius: 5px;margin-left: 17px;position: relative;}
.blog_card_right .left{display: inline-block;height: 100px;padding: 20px 36px;position: absolute;left: 0;}
.blog_card_right .right{display: inline-block;height: 100px;padding: 30px 19px;position: absolute;right: 0;display: flex;justify-content: center;align-items: center;}
.blog_card_right .right div{background: #0047D1;border-radius: 20px;display: inline-block;margin-left: 16px;padding: 0 20px;}
.blog_card_right .left p:nth-child(1){
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: #000000;
}
.blog_card_right .left p:nth-child(2){
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #000000;
}
.blog_card_right .right div p{
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: rgba(255, 255, 255, 0.8);
}
</style>