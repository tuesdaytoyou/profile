<template>
  <menu-box></menu-box>
  <head-box></head-box>
  <router-view></router-view>
  <!-- <home-box v-show="selectMenu === 'home'"></home-box>
  <ximalaya-music v-show="selectMenu === 'ximalayaMusic'"></ximalaya-music>
  <ximalaya-ai v-show="selectMenu === 'ximalayaAi'"></ximalaya-ai>
  <game-live v-show="selectMenu === 'gameLive'"></game-live>
  <amazon-box v-show="selectMenu === 'amazon'"></amazon-box>
  <planetarium-box v-show="selectMenu === 'planetarium'"></planetarium-box>
  <solar-term v-show="selectMenu === 'solarterm'"></solar-term> -->
  <foot-box></foot-box>
</template>

<script>
import { defineComponent } from "vue";
import menuBox from "./views/menuBox.vue";
import footBox from "./views/footBox.vue";
import headBox from './views/headBox.vue'

import homeBox from './views/home.vue'
import ximalayaMusic from './views/ximalayaMusic.vue'
import ximalayaAi from './views/ximalayaAi.vue'
import gameLive from './views/gameLive.vue'
import amazonBox from './views/amazon.vue'
import planetariumBox from './views/planetarium.vue'
import solarTerm from './views/solarterm.vue'
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";


export default defineComponent({
  name: "App",
  components: { menuBox, headBox, footBox, homeBox, ximalayaMusic, ximalayaAi, gameLive, amazonBox, planetariumBox, solarTerm },
  setup() {
    const store = useStore()
    let selectMenu = computed(() => {
      return store.state.selectMenu
    })
    return {
      selectMenu
    };
  },
});
</script>

<style>

</style>
