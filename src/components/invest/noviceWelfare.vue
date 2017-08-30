<template>
  <div class="noviceWelfare">
    <h3 class="title"><img src="../../assets/images/invest_icon_gift@2x.png">新手福利 <span>已有<i>875,574人</i>购买</span></h3>
  </div>
</template>

<script>
  export default {
    name: "noviceWelfare",
    data () {
      return {};
    }
  };
</script>

<style scoped lang="scss">
  .noviceWelfare{
    width: 100%;
    background: #fff;
    height: auto;
    overflow: hidden;
    margin:(18rem/40) auto;
    .title{
      width: 100%;
      height: (98rem/40);
      font-size:(30rem/40);
      padding-left:(30rem/40);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      img {
        width: 1rem;
        height: 1rem;
        margin-right:(20rem/40);
        margin-bottom:0.1rem;
      }
      span {
        font-size:0.6rem;
        color: #999;
        margin-left:0.875rem;
      }
    }
  }
</style>
