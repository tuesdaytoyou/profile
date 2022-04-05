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
        <iframe id="amazonIframe" name="amazonIframe" 
                src="https://www.figma.com/proto/AahCNLFqTWa2VFiHYHXWWL/NLP-Amazon?node-id=2358%3A35753&starting-point-node-id=2358%3A35753" 
                frameborder="0" scrolling="auto" ></iframe>
      </div>
    </div>
    <div class="amazon_img_list">
      <div>
        <img src="../assets/images/amazon_img3.png" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.amazon_img_list {display: flex;justify-content: center;align-items: center;}
.amazon_img_list div{display: flex;justify-content: center;align-items: center;flex-direction: column;}
</style>