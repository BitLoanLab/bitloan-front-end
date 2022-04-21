<template>
  <div class="page-footer">

    <div class="page-footer-part2 ">
      <div class="icon-box">
        <span></span>
        <a class="icon" href="https://t.me/RainbowDAO" target="_blank">
          <img src="../assets/img/telegram@2x.png" alt="">
        </a>
      </div>
      <div class="icon-box">
        <span></span>
        <a class="icon" href="https://twitter.com/RainbowcityDAO" target="_blank">
          <img src="../assets/img/twitter@2x.png" alt="">
        </a>
      </div>
      <div class="icon-box">
        <span></span>
        <a class="icon" href="https://medium.com/rainbowcity" target="_blank">
          <img src="../assets/img/medium@2x.png" alt="">
        </a>
      </div>
      <div class="icon-box">
        <span></span>
        <a class="icon" href="https://discord.gg/vbnvFEeYRr" target="_blank">
          <img src="../assets/img/Discord@2x.png" alt="">
        </a>
      </div>
      <div class="icon-box">
        <span></span>
        <a class="icon" href="https://github.com/RainbowDAO" target="_blank">
          <img src="../assets/img/github@2x.png" alt="">
        </a>
      </div>

    </div>
    <div class="page-footer-part3">
      Copyright@2021 www.rainbowdao.io
    </div>
  </div>
</template>

<script>
export default {
  name: "pageFooter",
  methods:{

  }
}
</script>

<style lang="scss" scoped>

.page-footer {

  padding: 20px 100px;
  .page-footer-part2 {
    width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .icon-box {
      cursor: pointer;
      width: 30px;
      height: 30px;
      background: rgba(255,255,255,0.12);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 10px;
      a{
        width: 30px;
        height: 30px;
        display: block;
        img{
          width: 30px;
          height: 30px;
        }
      }
      .icon path{
        fill: white!important;
      }
      &:hover .icon path{
        fill: #10101B!important;
      }




    }
  }

  .page-footer-part3 {
    color: #A8A8A8;
    padding: 10px 0 0;
    text-align: center;
  }
}
</style>
