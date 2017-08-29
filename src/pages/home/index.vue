<template>
  <div class="index">
    <!--banner-->
    <banner-list></banner-list>
    <!--导航-->
    <nav>
      <ul>
        <li v-for="item in navList">
          <a href="">
            <img :src="item.img" alt="">
            <span v-html="item.span"></span>
          </a>
        </li>
      </ul>
    </nav>
    <!--新闻列表上下滚动-->
    <div class="newsBox">
      <p>系统公告</p>
      <ul content="newsIn" :style="{ top, transition }">
        <li v-for="item in newsList">{{item.news}}</li>
      </ul>
    </div>
    <!--新手专享-->
    <div class="noviceArea">
      <h3>新手专享 <span class="line"></span><span class="people">已有 <i>81.639人</i> 购买</span></h3>
      <div class="numberBox">
        <dl>
          <dt class="left">12.0<i>%</i></dt>
          <dd>预期年化利率</dd>
        </dl>
        <dl>
          <dt>30<i>天</i></dt>
          <dd>投资期限</dd>
        </dl>
      </div>
      <ul class="tips">
        <li><img src="../../assets/images/home_icon_gift@2x.png" alt=""><span>注册送大礼</span></li>
        <li><img src="../../assets/images/home_icon_money@2x.png" alt=""><span>资金安全</span></li>
        <li class="three"><img src="../../assets/images/home_icon_safe1@2x.png" alt=""><span>100元起投</span></li>
      </ul>
      <a href="javascript:;" class="button">抢购</a>
      <p class="font"><img src="../../assets/images/home_icon_safe2@2x.png" alt="">海口联合农商银行资金存管</p>
    </div>
    <!--有料-->
    <div class="material">
      <h3>有料</h3>
      <p>实力、信心、有保障   <span><i>{{swiperIndex}}</i>/3</span></p>
      <div class="swiperBox">
        <swipe :auto="0" :show-indicators="false" @change="handleChange">
          <swipe-item v-for="(item, index) in materialList" :key="index"><img :src="item.img" alt=""></swipe-item>
        </swipe>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerList from '../../components/banner/banner.vue';
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    components: {
      BannerList,
      Swipe,
      SwipeItem
    },
    data () {
      return {
        navList: [
          {
            span: '新手特权',
            img: require('../../assets/images/banner-icon1.png')
          },
          {
            span: '点我领钱',
            img: require('../../assets/images/banner-icon2.png')
          },
          {
            span: '邀请有礼',
            img: require('../../assets/images/banner-icon3.png')
          },
          {
            span: '安全保障',
            img: require('../../assets/images/banner-icon4.png')
          }
        ],
        newsList: [
          {
            news: '习近平谈党规:从严治党首先要尊崇党章1'
          },
          {
            news: '习近平谈党规:从严治党首先要尊崇党章2'
          },
          {
            news: '习近平谈党规:从严治党首先要尊崇党章3'
          },
          {
            news: '习近平谈党规:从严治党首先要尊崇党章4'
          }
        ],
        activeIndex: 0,
        materialList: [
          {
            img: require('../../assets/images/普惠金融.png')
          },
          {
            img: require('../../assets/images/会员单位.png')
          },
          {
            img: require('../../assets/images/银行存管.png')
          }
        ],
        swiperIndex: 1
      };
    },
    computed: {
      top () {
        return -this.activeIndex * 2.25 + 'rem';
      },
      transition () {
        return this.activeIndex === 0 ? 'none' : 'top 1.5s';
      }
    },
    mounted () {
      setInterval(_ => {
        if (this.activeIndex < this.newsList.length - 1) {
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
      }, 5000);
    },
    methods: {
      handleChange (index) {
        this.swiperIndex = index + 1;
      }
    }
  };
</script>

<style scoped lang="scss">
  $gray: #4d4d4d;
  $fontSize: (28rem/40);
  .index{
    font-size: $fontSize;
    /*导航*/
    nav{
      height: (190rem/40);
      background: #fff;
      ul{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        li{
          text-align: center;
          flex:1;
          img{
            width: (50rem/40);
            height: (50rem/40);
            display: block;
            margin:0 auto 0.5rem;
          }
          span{
            color: $gray;
          }
        }
      }
    }
    /*分割线*/
    .line{
      width: 100%;
      height: 1px;
      background: #eee;
    }
    /*新闻列表*/
    .newsBox{
      width: 100%;
      height: (90rem/40);
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left:(30rem/40);
      box-sizing: border-box;
      background: #fff;
      overflow: hidden;
      p{
        width: (110rem/40);
        height:(36rem/40);
        line-height:(36rem/40);
        font-size:(24rem/40);
        border: 1px solid #fe2525;
        color: #fe2525;
        border-radius: 0.15rem;
        text-align: center;
        margin-right:(26rem/40);
      }
      ul{
        flex: 1;
        height: (90rem/40);
        position: relative;
        transition: top 1.5s;

        li{
          width: 100%;
          height: (90rem/40);
          line-height:(90rem/40);
        }
      }
    }
    /*新手专享*/
    .noviceArea{
      width: 100%;
      height:auto;
      overflow: hidden;
      background: #fff;
      margin-top:(18rem/40);
      padding-top: (48rem/40);
      padding-bottom:(25rem/40);
      box-sizing: border-box;
      text-align: center;
      margin-bottom:(18rem/40);
      h3{
        font-size: $fontSize;
        color: $gray;
        .line{
          display: inline-block;
          width: 1px;
          height: (20rem/40);
          background: #9e9e9e;
          margin:0 (20rem/40);
        }
        .people {
          color: #9e9e9e;
          i{
            color: $gray;
          }
        }
      }
      .numberBox{
        width: 100%;
        height: auto;
        overflow: hidden;
        margin:(52rem/40) 0;
        dl{
          float: left;
          width: 50%;
          height: 100%;
          dt{
            font-size:(58rem/40);
            margin-bottom:(20rem/40);
            margin-top:0.35rem;
            i{
              font-size:(28rem/40);
            }
          }
          .left{
            color: #ff9c00;
            font-size:(72rem/40);
            margin-top:0;
            i{
              font-size:(30rem/40);
            }
          }
          dd{
            font-size:(24rem/40);
            color: #9e9e9e;
          }
        }
      }
      .tips{
        width: (537rem/40);
        height: (30rem/40);
        margin:0 auto;
        li{
          float: left;
          width: 33.3%;
          height: (30rem/40);
          line-height:(30rem/40);
          font-size:(24rem/40);
          img{
            display:block;
            width: (30rem/40);
            height: (30rem/40);
            float: left;
            margin-right:(10rem/40);
          }
          span{
            line-height:(29rem/40);
            float: left;
          }
        }
        .three{
          text-align: right;
        }
      }
      .button{
        display: block;
        width: (490rem/40);
        height: (76rem/40);
        line-height:(76rem/40);
        background: rgb(255,183,24);
        margin:(22rem/40) auto;
        color: #fff;
        font-size:(34rem/40);
        border-radius: 1rem;
      }
      .font{
        font-size:(22rem/40);
        color: #9e9e9e;
        img{
          width: (22rem/40);
          height: (22rem/40);
          display: inline-block;
          margin-right:(5rem/40);
        }
      }
    }
    /*有料*/
    .material {
      width: 100%;
      height: (380rem/40);
      margin-bottom:(116rem/40);
      background: #fff;
      padding-top:(44rem/40);
      padding-bottom:(40rem/40);
      padding-left:(30rem/40);
      box-sizing: border-box;
      h3{
        font-size:(30rem/40);
        margin-bottom:(15rem/40);
      }
      p{
        font-size:(22rem/40);
        color: $gray;
        margin-bottom:(28rem/40);
        span{
          float: right;
          margin-right:1rem;
        }
      }
      .swiperBox{
        width: (680rem/40);
        height: (200rem/40);
        .mint-swipe{
          margin-right:(16rem/40);
        }
        .mint-swipe-item{
          margin-right:(16rem/40);
        }
      }
  }
  }
</style>
