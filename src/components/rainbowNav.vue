<template>
  <div class="rainbow-nav" @click="isShowMore=false">
    <!-- navbar-nav -->
    <div class="nav-box">
      <img class="logo" src="../assets/imgs/logo.png" @click="$router.push('/')"/>
      <ul class="navbar-nav">
        <li :class="{'active':$route.name=='RainbowCity'}" @click="openNew('/RainbowCity')">
          <a class="w-font" href="#RainbowCity">HOME</a>
          <a class="re-active" href="#RainbowCity">HOME</a>
        </li>


        <li :class="{'active':$route.name=='RainbowWarrior'}" @click="openNew('/RainbowWarrior')">
          <a class="w-font" href="#RainbowWarrior">RAINBOW WARRIOR</a>
          <a class="re-active" href="#RainbowWarrior">RAINBOW WARRIOR</a>
        </li>

        <li>
          <div class="language">
            EN
          </div>
        </li>
      </ul><!-- /.navbar-nav -->
    </div>
  </div>
</template>

<script>
export default {
  name: "rainbowNav",
  props: ['isShowMore'],
  data() {
    return {}
  },
  methods: {
    openNew(pathStr) {
      let path = this.$router.resolve({path: pathStr, query: {}})
      window.open(path.href)
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin backlight($x, $y, $spread, $size, $colorA, $colorB, $duration) {
  &:after {
    position: absolute;
    content: "";
    top: $y;
    left: $x;
    right: 0;
    z-index: -10;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale($size);
    -webkit-filter: blur($spread);
    -moz-filter: blur($spread);
    -ms-filter: blur($spread);
    filter: blur($spread);
    background: linear-gradient(270deg, $colorA, $colorB);
    background-size: 200% 200%;
    animation: animateGlow $duration ease infinite;

    @keyframes animateGlow {
      0% {
        background-position: 0% 50%
      }
      50% {
        background-position: 100% 50%
      }
      100% {
        background-position: 0% 50%
      }
    }
  }
}

.rainbow-nav {

  .nav-box {
    display: flex;
    margin: 0 auto;
    width: 100%;
    min-width: 1180px;
    padding: 0 200px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.3);

    .logo {
      cursor: pointer;
      width: 120px;
      height: 24px;
    }

    .language {
      cursor: pointer;
      width: 80px;
      height: 30px;
      margin-top: 12px;
      text-align: center;
      line-height: 30px;
      background: rgba(255, 255, 255, 0.10);
      border: 1px solid rgba(255, 255, 255, 0.20);
      border-radius: 16px;
    }

  }

  .navbar-nav {
    display: flex;
    height: 50px;
    align-items: center;
    position: relative;
    z-index: 10;

    li {
      height: 100%;
      line-height: 50px;
      position: relative;
      overflow: hidden;

      &:hover {
        .re-active {
          top: 0;
        }
        .w-font{
          top: -40px;
        }
      }

    }

    .masking {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }

    .more-btn {
      position: relative;
      cursor: pointer;
      overflow: visible!important;
      .down {
        float: right;
        margin: 3px 0 0 3px;
      }
    }

    .more-box {
      position: absolute;
      left: -40px;
      top: 60px;
      width: 150px;
      height: 162px;
      font-size: 12px;
      border: 1px solid #333333;
      border-radius: 10px;
      z-index: 2;

      .more-box-content {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background: #141423;
      }

      @include backlight(0, 30px, 5vw, 0.75, #0fffc1, #7e0fff, 3s);

      .more-item {
        z-index: 10;
        text-align: center;
        cursor: pointer;
        height: 50px;
        font-size: 12px;
        &:hover {
          background: #000;
        }
      }
    }
    .w-font{
      position: relative;
      top: 0;
      left: 0;
      transition: 0.2s;
    }
    .re-active{
      position: absolute;
      top: 40px;

      left: 0;
      transition: 0.2s;
      background-image: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .active {
      &:hover{
        .w-font{
          top: 0;
        }
        .re-active{
          top: 40px;
        }
      }
      .w-font{
        position: relative;
        background-image: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      }
    }

    li {
      margin: 0 10px;
    }
  }
}
</style>
