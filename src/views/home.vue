<template>
  <div style="background:#000000;width:100%;height:100%">
    <home-page></home-page>
    <about-me></about-me>
    <port-folio></port-folio>
    <more-work></more-work>
  </div>
</template>

<script>
import homePage from './homePage.vue'
import aboutMe from './aboutMe.vue'
import portFolio from './portFolio.vue'
import moreWork from './moreWork.vue'
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "home",
  components: { homePage, aboutMe, portFolio, moreWork },
  setup() {
    return {};
  },
});
</script>