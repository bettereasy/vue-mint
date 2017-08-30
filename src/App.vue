<template>
  <div id="app">
    <router-view></router-view>
    <footer-list></footer-list>
  </div>
</template>

<script>
import FooterList from "../src/components/footer/footer2.vue";
export default {
  name: "app",
  components: {
    FooterList
  }
};
</script>

<style scoped lang="scss">
  #app{
    padding-bottom:2.45rem;
    width: 100%;
  }
</style>
