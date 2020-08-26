<template>
  <div class="wrap">
    <div class="list_box">
      <div class="list-item clearfix" v-for="item in listItem" :key="item.id">
        <img :src="item.img" />
        <div class="fl">
          <p>{{item.title}}</p>
          <p>{{item.pir}}</p>
          <p>{{item.name}}</p>
          <span>{{item.sp}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItem: [
        {
          id: "1",
          img: require('../../assets/images/index_images/shop_5.jpg'),
          name: "雅诗兰黛染发膏60ml",
          pir: "123",
          title: "已售800件",
          sp: "立即抢购",
        },
        {
          id: "2",
          img: require('../../assets/images/index_images/shop_5.jpg'),
          name: "雅诗兰黛染发膏60ml",
          pir: "123",
          title: "已售432件",
          sp: "立即抢购",
        },
        {
          id: "3",
          img: require('../../assets/images/index_images/shop_5.jpg'),
          name: "雅诗兰黛染发膏60ml",
          pir: "123",
          title: "已售672件",
          sp: "立即抢购",
        },
      ],
    };
  },
};
</script>

<style lang="" scoped>
@import '../../assets/css/index.css';
</style>
