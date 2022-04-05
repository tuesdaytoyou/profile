<template>
  <div class="foot_box">
    <ul>
      <li>
        <img src="../assets/images/foot_btn1.png" />
        <p>15162115113</p>
      </li>
      <li>
        <img src="../assets/images/foot_btn1.png" />
        <p>1597537908@qq.com</p>
      </li>
      <li>
        <img src="../assets/images/foot_btn1.png" />
        <p>UX/交互/UI设计</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.foot_box ul{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 159px;
  bottom: 0;
  background: rgba(33, 33, 34, 1);
}
.foot_box ul li {
  width: 151px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.foot_box ul li:nth-child(2) {
  margin: 0 208px;
}
.foot_box ul li p{
  margin-top: 10px;
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #FFFFFF;
}
</style>