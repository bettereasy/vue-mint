<template>
  <div class="invest">
    <h1>投资</h1>
    <novice-welfare></novice-welfare>
  </div>
</template>

<script>
  import noviceWelfare from "../../components/invest/noviceWelfare.vue";
  export default {
    name: "invest",
    components: {
      noviceWelfare
    },
    data () {
      return {};
    }
  };
</script>

<style scoped lang="scss">
  .invest{
    width: 100%;
    padding-top:2.25rem;
    h1{
      width: 100%;
      height: 2.25rem;
      line-height:2.25rem;
      background: #fff;
      font-size:0.85rem;
      color: #4d4d4d;
      text-align: center;
      margin-bottom: 0.45rem;
      position: fixed;
      left:0;
      top:0;
    }
  }
</style>
