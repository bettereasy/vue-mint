<template>
  <div class="banner">
    <swipe :auto="4000">
      <swipe-item><img src="../../assets/images/banner.png" alt=""></swipe-item>
      <swipe-item><img src="../../assets/images/banner.png" alt=""></swipe-item>
      <swipe-item><img src="../../assets/images/banner.png" alt=""></swipe-item>
      <swipe-item><img src="../../assets/images/banner.png" alt=""></swipe-item>
      <swipe-item><img src="../../assets/images/banner.png" alt=""></swipe-item>
    </swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    components: {
      Swipe,
      SwipeItem
    },
    data () {
      return {};
    }
  };
</script>

<style scoped lang="scss">
  .banner {
    width: 100%;
    height: (380rem/40);

    img{
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>
