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
<script setup>
  import { getCurrentInstance } from "vue";
  const internalInstance = getCurrentInstance()
  const $utils = internalInstance.appContext.config.globalProperties.$utils
  const getCloudUrl = (url) => {
    return $utils.getCloudUrl(url)
  }

</script>
