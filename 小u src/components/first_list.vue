<template >
  <div class="wrap">
    <!-- 头部盒子开始 -->
    <header>
      <i @click="$router.go(-1)"></i>
      <p>商品分类</p>
      <div class="set">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <!-- 主体内容开始 -->
    <div class="content clearfix">
      <!-- 左侧导航 -->
      <div class="fl dorpdown">
        <ul>
          <li v-for="item in dorpList" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <!-- 右侧内容 -->
      <div class="content-box">
        <div class="list">
          <p>洗发类</p>
          <p>更多&gt;</p>
        </div>
        <div class="img-box clearfix">
          <div v-for="item in shopList" :key="item.id">
            <img :src="item.img"  @click="goShop" />
            <p>{{item.title}}</p>
          </div>
        </div>
        <div class="list">
          <p>染发类</p>
          <p>更多&gt;</p>
        </div>
        <div class="img-box clearfix">
          <div v-for="item in shop" :key="item.id">
            <img :src="item.img" alt />
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dorpList: [
        {
          id: 1,
          name: "施华寇",
        },
        {
          id: 2,
          name: "沙宣",
        },
        {
          id: 3,
          name: "欧莱雅",
        },
        {
          id: 4,
          name: "潘婷",
        },
        {
          id: 5,
          name: "姿生堂",
        },
        {
          id: 6,
          name: "阿道夫",
        },
        {
          id: 7,
          name: "卡特",
        },
        {
          id: 8,
          name: "海飞丝",
        },
        {
          id: 9,
          name: "姿生堂",
        },
      ],
      shopList: [
        {
          id: 1,
          img: require("../assets/images/list_images/pic.jpg"),
          title: "护亮泽洗发水",
        },
        {
          id: 2,
          img: require("../assets/images/list_images/pic.jpg"),
          title: "护亮泽洗发水",
        },
        {
          id: 3,
          img: require("../assets/images/list_images/pic.jpg"),
          title: "护亮泽洗发水",
        },
        {
          id: 4,
          img: require("../assets/images/list_images/pic.jpg"),
          title: "护亮泽洗发水",
        },
        {
          id: 5,
          img: require("../assets/images/list_images/pic.jpg"),
          title: "护亮泽洗发水",
        },
        {
          id: 6,
          img: require("../assets/images/list_images/pic.jpg"),
          title: "护亮泽洗发水",
        },
      ],
      shop: [
        {
          id: 1,
          img: require("../assets/images/list_images/pic.jpg"),
          title: "护亮泽洗发水",
        },
        {
          id: 2,
          img: require("../assets/images/list_images/pic.jpg"),
          title: "护亮泽洗发水",
        },
        {
          id: 3,
          img: require("../assets/images/list_images/pic.jpg"),
          title: "护亮泽洗发水",
        },
      ],
    };
  },
  methods: {
    goShop(){
      this.$router.push('/detail')
    }
  },
};
</script>
<style scoped>
@import "../assets/css/first_list.css";
</style>
