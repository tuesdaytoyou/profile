import { onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default function() {
  const store = useStore()
  const route = useRoute()
  const colorList = store.state.colorList
  const listenMenuColor = () => {
    document.addEventListener("scroll", changeColor)
  }
  const unlistenMenuColor = () => {
    document.removeEventListener("scroll", changeColor)
  }
  const changeColor = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTop > 100){
      store.commit("setMenuColor", "fixwhite")
    }else{
      store.commit("setMenuColor", colorList[route.name])
    }
  }
  onMounted(listenMenuColor)
  onUnmounted(unlistenMenuColor)
}