<template>
  <div class="box">
    <div class="contain">
      <div class="hello">
        <img src="@/assets/images/hello.png"/>
      </div>
      <div class="home_info">
        <div class="profile">A User Experience Designer</div>
        <div class="profile_line"></div>
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
<style scoped>
.box {
  position: relative;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: #000000;
}
.contain {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.home_info {
  margin-left: 400px;
}
.profile {
  display: inline-block;
  width: 334px;
  height: 38px;
  margin-left: 170px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: #ffffff;
}
.profile_line {
  display: inline-block;
  width: 5px;
  height: 30px;
  background: #ffffff;
}
.my_name {
  position: relative;
  width: 530px;
  height: 119px;
  background: url(@/assets/images/my_name.png);
}
.name_underline {
  width: 342px;
  height: 5px;
  margin-left: 170px;
  background: #0057ff;
}
.contact_button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 29.4444px 29.7365px 29.4444px 33.0406px;
  width: 220px;
  height: 72px;
  margin-top: 40px;
  margin-left: 300px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 58.8889px;
}
.contact_text {
  width: 200px;
  height: 24px;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
}
.mouse_slide {position: absolute;display: flex;justify-content: center;align-items: center;flex-direction: column;bottom: 10px;}
.mouse_slide .top{height:15px;width:88px;background: url('@/assets/images/mouse_text.png') no-repeat;}
.mouse_slide .bottom{position: relative;}
.mouse_slide .bottom div:nth-child(1){width: 32px;height: 55px;background: url('@/assets/images/mouse_rect.png') no-repeat;}
.mouse_slide .bottom div:nth-child(2){width: 6px;height: 6px;background: url('@/assets/images/mouse_dot.png') no-repeat;position: absolute;top: 9px;left: 13px;animation: mymove 1.5s infinite;}
@keyframes mymove{
  100% {
    top: 25px;
    opacity: 0.2;
  }
}
</style>