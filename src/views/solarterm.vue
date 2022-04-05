<template>
    <div class="solarterm_box flex_column">
        <div style="margin-top: 100px;">
            <video controls style="width: 1280px;" src="../assets/video/solarterm.mp4"></video>
        </div>
        <div class="solarterm_imgs flex_column">
            <img style="width: 1280px;" src="@/assets/images/solarterm.png" alt="">
            <!-- <img v-for="index in 61"  :src="getAssetsFile('solarterm_wrapper_Page'+index+'.jpg')" alt="" /> -->
        </div>
    </div>
</template>

<style>
.flex_column{display: flex;justify-content: center;align-items: center;flex-direction: column;}
</style>