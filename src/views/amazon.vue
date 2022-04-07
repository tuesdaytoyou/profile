<template>
  <div style="background:#000000;width:100%;height:100%">
    <div class="amazon_img_list">
      <div>
        <img src="../assets/images/amazon_img1.png" />
        <img src="../assets/images/amazon_img2.png" />
      </div>
    </div>
    <div class="amazon_iframe_box">
      <div class="">
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1920" height="1080" 
                src="https://www.figma.com/embed?embed_host=share&url=
                https%3A%2F%2Fwww.figma.com%2Fproto%2FAahCNLFqTWa2VFiHYHXWWL%2FNLP-Amazon%3Fnode-id%3D2353%253A35746%26starting-point-node-id%3D2358%253A35753" 
                allowfullscreen></iframe>
        <!-- <iframe id="amazonIframe" name="amazonIframe" 
                src="https://www.figma.com/proto/AahCNLFqTWa2VFiHYHXWWL/NLP-Amazon?node-id=2358%3A35753&starting-point-node-id=2358%3A35753" 
                frameborder="0" scrolling="auto" ></iframe> -->
      </div>
    </div>
    <div class="amazon_img_list">
      <div>
        <img src="../assets/images/amazon_img3.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import useMenuChange from "../hooks/useMenuChange"

export default defineComponent({
  setup() {
    useMenuChange()
  }
})
</script>
<style scoped>
.amazon_img_list {display: flex;justify-content: center;align-items: center;}
.amazon_img_list div{display: flex;justify-content: center;align-items: center;flex-direction: column;}
.amazon_iframe_box{display: flex;justify-content: center;align-items: center;}
</style>