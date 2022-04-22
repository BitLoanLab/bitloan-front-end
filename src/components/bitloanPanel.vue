<template>
  <div class="bitloanPanel r-shadow">
<!--    <div class="line r-shadow"></div>-->
    <div class="bitloanPanel-header">
<!--      <div class="left-border"></div>-->
      <img src="../assets/img/title_icon.png" alt="" class="title-icon">
      <div class="name"><slot name="name"></slot></div>
    </div>
    <div class="bitloanPanel-content ">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "bitloanPanel"
}
</script>

<style lang="scss" scoped>
.bitloanPanel{
  background: white;
  width: 1100px;
  margin: 0 auto;
  padding-bottom: 20px;
  >.line{
    width: 100%;
    height: 3px;
    background: linear-gradient(225deg,#7700ff, #ff3b3b);
  }
  overflow: hidden;
  border-radius: 10px;
  .bitloanPanel-header{
    padding:20px;
    display: flex;
    text-align: left;

    .name{
      padding-left: 6px;
      line-height: 20px;
      font-size: 16px;
      font-weight: bold;
      font-family: Roboto;
      color: #333333;
      width: 100%;
    }
    .title-icon{
      width: 18px;
      height: 18px;
      margin-top: 2px;
    }
    .left-border{
      width: 4px;
      height: 20px;
      opacity: 1;
      background: linear-gradient(270deg,#7700ff, #ff3b3b);
    }
  }
  .bitloanPanel-content{
    padding: 0 20px;
  }
}
</style>
