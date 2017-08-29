<template>
  <footer>
    <section class="footer mint-1px-t">
      <!-- 当route是 / 的时候会有cur-page 这个class-->
      <nav class="nav nav-index" :class="{'cur-page': route === '/'}">
        <!-- router-link标签配置vue-router插件会路由到to 后面对应的页面 -->
        <router-link to="/">
          <div class="nav-icon">
            <img v-show="route !== '/'" src="../../assets/images/tab_menu_home_default@2x.png" alt="">
            <img v-show="route === '/'" src="../../assets/images/tab_menu_home_pressed@2x.png" alt="">
          </div>
        </router-link>
      </nav>
      <nav class="nav nav-money" :class="{'cur-page': route === '/money'}">
        <router-link to="/money">
          <div class="nav-icon">
            <img v-show="route !== '/money'" src="../../assets/images/tab_menu_invest_default@2x.png" alt="">
            <img v-show="route === '/money'" src="../../assets/images/tab_menu_invest_pressed@2x.png" alt="">
          </div>
        </router-link>
      </nav>
      <nav class="nav nav-find" :class="{'cur-page': route === '/find'}">
        <router-link to="/find">
          <div class="nav-icon">
            <img v-show="route !== '/find'" src="../../assets/images/tab_menu_find_default@2x.png" alt="">
            <img v-show="route === '/find'" src="../../assets/images/tab_menu_find_pressed@2x.png" alt="">
          </div>
        </router-link>
      </nav>
      <nav class="nav nav-me" :class="{'cur-page': route === '/me'}">
        <router-link to="/me">
          <div class="nav-icon">
            <img v-show="route !== '/me'" src="../../assets/images/tab_menu_my_default@2x.png" alt="">
            <img v-show="route === '/me'" src="../../assets/images/tab_menu_my_pressed@2x.png" alt="">
          </div>
        </router-link>
      </nav>
    </section>
  </footer>
</template>
<script>
  export default{
    data () {
      return {};
    },
    computed: {
      route () {
        return this.$route.path;
      }
//      等价于 route : function(){
//                  return this.$route.path
//              }
//      这种写法
//
    }
  };
</script>
<style scoped lang="scss">
  /*这里是样式文件*/
  footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: (98rem/40);
    background-color: #fff;
    z-index: 10000;
  }
  .footer {
    width: 100%;
    height: (98rem/40);
    display: -webkit-box;
    padding-top: (10rem/40);
    box-sizing: border-box;
  }
  footer nav {
    -webkit-box-flex: 1;
    text-align: center;
    color: #8a869e;
  }
  footer nav a{
    display: block;
    width: 100%;
    height: 100%;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  footer .cur-page.nav{
    color: rgb(107,36,128);
  }
  .nav-icon {
    width: (46rem/40);
    height: (46rem/40);
    margin: 0 auto;
  }
  .nav-icon img {
    width: 100%;
    height: 100%;
  }
  .nav-index::after,
  .nav-money::after,
  .nav-find::after,
  .nav-me::after {
    padding-top: (2rem/40);
    text-align: center;
    width:(80rem/40);
    display: inline-block;
    font-size: (12rem/40);
    margin-top:(5rem/40);
  }
  .nav-index::after {
    content: "首页";
  }
  .nav-money::after {
    content: "理财";
  }
  .nav-find::after {
    content: "发现";
  }
  .nav-me::after {
    content: "我";
  }

  .go-back {
    background: #ff2c43;
  }
  .back {
    font-size: (30rem/40);
    color: #fff;
    padding-left: (35rem/40);
    margin-top: (-4rem/40);
    transform: scaleY(1.5);
  }
</style>
