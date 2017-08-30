<template>
  <div class="footer">
    <!-- tabcontainer -->
  <tab-container v-model="selected">
    <tab-container-item id="首页">
      <cell value="首页"></cell>
    </tab-container-item>
    <tab-container-item id="理财">
      <cell value="理财"></cell>
    </tab-container-item>
    <tab-container-item id="发现">
      <cell value="发现"></cell>
    </tab-container-item>
    <tab-container-item id="我">
      <cell value="我"></cell>
    </tab-container-item>
  </tab-container>


  <tabbar v-model="selected" fixed>
      <tab-item id="首页">
        <img slot="icon" src="../../assets/logo.png">
        首页
      </tab-item>
      <tab-item id="理财">
        <img slot="icon" src="../../assets/logo.png">
        理财
      </tab-item>
      <tab-item id="发现">
        <img slot="icon" src="../../assets/logo.png">
        发现
      </tab-item>
      <tab-item id="我">
        <img slot="icon" src="../../assets/logo.png">
        我
      </tab-item>
    </tabbar>
  </div>
</template>

<script>
  import { TabContainer, TabContainerItem, Cell, Tabbar, TabItem } from "mint-ui";
  export default {
    components: {
      TabContainer,
      TabContainerItem,
      Cell,
      Tabbar,
      TabItem
    },
    data () {
      return {
        selected: "首页"
      };
    }
  };
</script>

<style scoped lang="scss">
  .footer {
    /*position: fixed;*/
    /*left:0;*/
    /*bottom: 0;*/
    /*width: 100%;*/
    /*height: 50px;*/
    .mint-tabbar{
      width: 100%;
      height: 50px;
      .mint-tab-item{
        display: block;
        float: left;
        width: 25%;
        height: 50px;
      }
    }
  }
</style>
