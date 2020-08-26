<template>
  <div class="wrap">
    <!-- 头部 -->
    <div class="header">
      <div class="login">
        <img src="../../assets/./images/index_images/logo.jpg" alt />
      </div>
      <div class="search">
        <input type="search" placeholder="寻找商品"  @keydown.enter="search" />
      </div>
      <div class="set">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- 导航 -->
    <nav class="clearfix">
      <div class="nav-item fl active">
        <a href="#">推荐</a>
        <span></span>
      </div>
      <div class="nav-item fl">
        <a href="#">女装</a>
      </div>
      <div class="nav-item fl">
        <a href="#">鞋包</a>
      </div>
      <div class="nav-item fl">
        <a href="#">居家</a>
      </div>
      <div class="nav-item fl">
        <a href="#">母婴儿童</a>
      </div>
      <div class="nav-item fl">
        <a href="#">美食</a>
      </div>
      <div class="nav-item fl">
        <a href="#">男装</a>
      </div>
      <div>
        <img src="../../assets/./images/index_images/arrow.jpg" alt />
      </div>
    </nav>
    <!-- 轮播图 -->
    <div class="banner">
      <img src="../../assets/./images/index_images/banner.jpg" alt />
    </div>
    <!-- 商品列表 -->
    <div class="list-box">
      <ul>
        <li>
          <img src="../../assets/./images/index_images/icon_1.jpg" alt />
          <p>限时抢购</p>
        </li>
        <li>
          <img src="../../assets/./images/index_images/icon_2.jpg" alt />
          <p>积分商城</p>
        </li>
        <li>
          <img src="../../assets/./images/index_images/icon_3.jpg" alt />
          <p>联系我们</p>
        </li>
        <li>
          <img src="../../assets/./images/index_images/icon_4.jpg" alt />
          <p @click="goList">商品分类</p>
        </li>
      </ul>
    </div>
    <!-- 内容区 -->
    <div class="clearfix">
      <!-- 左侧盒子 -->
      <div class="content fl">
        <div class="tit">
          <img src="../../assets/./images/index_images/timer.jpg" alt />
          <span>限时秒杀</span>
        </div>
        <div>
          <p>每天零点场 好货秒不停</p>
        </div>
        <div class="time">
          <p>02</p>
          <span>:</span>
          <p>16</p>
          <span>:</span>
          <p>45</p>
          <b>秒杀</b>
        </div>
        <img src="../../assets/./images/index_images/shop_5.jpg" alt class="img1" />
        <div class="pos">
          <p>￥14.8</p>
        </div>
      </div>
      <!-- 右侧盒子 -->
      <div class="fl right clearfix">
        <div class="fl item">
          <p>
            品牌上新
            <span>折</span>
          </p>
          <b>每日9点 抢大牌</b>
          <img src="../../assets/./images/index_images/brand.jpg" alt />
        </div>
        <img src="../../assets/./images/index_images/shop_1.jpg" alt />
      </div>
      <div class="item2 fl">
        <p>每日十件</p>
        <span>只为你选好货</span>
        <img src="../../assets/./images/index_images/shop_2.jpg" alt />
      </div>
      <div class="item3 fl">
        <p>拼啊</p>
        <span>超级好价拼团</span>
        <img src="../../assets/./images/index_images/shop_3.jpg" alt />
      </div>
    </div>
    <!-- 背景盒子 -->
    <div class="bg-box"></div>
    <!-- 列表盒子 -->
    <div class="list_box">
      <ul>
        <li>
          <span @click="tabCom='one'">热门推荐</span>
        </li>
        <li>
          <span @click="tabCom='two'">发现好货</span>
        </li>
        <li>
          <span @click="tabCom='three'">只看专场</span>
        </li>
        <li>
          <span @click="tabCom='fove'">只看商品</span>
        </li>
      </ul>
      <div :is='tabCom'></div>
      <!-- <div class="list-item clearfix"  v-for="item in listItem" :key="item.id">
        <img :src="item.img"/>
        <div class="fl">
          <p>{{item.title}}</p>
          <p>{{item.pir}}</p>
          <p>{{item.name}}</p>
          <span>{{item.sp}}</span>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import two from './two'
import one from './one'
import three from './three'
import fove from './fove'
export default {
  data() {
    return {
      listItem: [
        {
          id: "1",
          img: require('../../assets/images/index_images/shop_4.jpg'),
          name: "雅诗兰黛染发膏60ml",
          pir: "123",
          title: "已售800件",
          sp: "立即抢购",
        },
        {
          id: "2",
          img: require('../../assets/images/index_images/shop_4.jpg'),
          name: "雅诗兰黛染发膏60ml",
          pir: "123",
          title: "已售432件",
          sp: "立即抢购",
        },
        {
          id: "3",
          img: require('../../assets/images/index_images/shop_4.jpg'),
          name: "雅诗兰黛染发膏60ml",
          pir: "123",
          title: "已售672件",
          sp: "立即抢购",
        },
      ],
      tabCom:'one'
    };
  },
  methods: {
    goList() {
      this.$router.push("/first");
    },
    search(){
      this.$router.push('/list')
    }
    
  },
  components:{
    one,
    two,
    three,
    fove
    
  }
};
</script>
<style scoped>
@import "../../assets/css/index.css";
</style>