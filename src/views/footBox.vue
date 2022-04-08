<template>
  <div class="foot_box">
    <ul>
      <li>
        <img :src="getCloudUrl('foot_btn1.png')" />
        <p>15162115113</p>
      </li>
      <li>
        <img :src="getCloudUrl('foot_btn2.png')" />
        <p>1597537908@qq.com</p>
      </li>
      <li>
        <img :src="getCloudUrl('foot_btn3.png')" />
        <p>UX/交互/UI设计</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance } from "vue";


export default defineComponent({
  name: "footbox",
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
