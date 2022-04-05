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
</style>