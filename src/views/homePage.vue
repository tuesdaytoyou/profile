<template>
  <div class="home_box">
    <div class="home_contain">
      <div class="hello">
        <img :src="getCloudUrl('hello.png')"/>
        <!-- <p>I am li lu yun, and you can call me </p> -->
      </div>
      <div class="home_info">
        <div class="profile_box">
          <div class="profile">A <span>User Experience</span> Designer</div>
          <div class="profile_line"></div>
        </div>
        <div class="my_name"></div>
        <div class="name_underline"></div>
        <div class="contact_button">
          <span class="contact_text">Contact me</span>
        </div>
      </div>
      <div class="mouse_slide"> 
        <div class="top"></div>
        <div class="bottom">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { getCurrentInstance, onMounted, onUnmounted } from "vue";
  const internalInstance = getCurrentInstance()
  const $utils = internalInstance.appContext.config.globalProperties.$utils
  const getCloudUrl = (url) => {
    return $utils.getCloudUrl(url)
  }
  let timer = null
  const oneByOne = () => {
    const element = document.querySelector('.profile')
    if(!element) return
    const titleList = [
      'A User Experience Designer',
      'A UI Designer ',
      'A Product Designer',
      'A Curious Designer ',
    ]
    let titleIndex = 0
    let count = 0
    element.innerHTML = ''
    timer = setInterval(() => {
      let char = titleList[titleIndex].charAt(count)
      if(char){
        element.innerHTML += char
        count++
      }else{
        element.innerHTML = ''
        titleIndex++
        count = 0
        if(!titleList[titleIndex]){
          titleIndex = 0
        }
      }
    }, 250)
  }
  onMounted(() => {
    setTimeout(() => {
      oneByOne()
    }, 2000);
  })
  onUnmounted(() => {
    clearInterval(timer)
  })
</script>