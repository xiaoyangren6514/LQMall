<template>
  <div>
    <!-- 头部导航 -->
    <detail-nav />
    <!-- 商品轮播图 -->
    <detail-swiper :bannerList="bannerList" />
    <!-- 商品基本信息 -->
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import { getDetailData, Goods } from "network/detail.js";

import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      bannerList: [],
      goods: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.loadDetailData();
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo
  },
  methods: {
    loadDetailData() {
      getDetailData(this.id).then(res => {
        console.log(res);
        const data = res.result;
        // 1. 取banner数据
        this.bannerList = data.itemInfo.topImages;
        // 2. 获取商品基本信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
      });
    }
  }
};
</script>

<style  scoped>
</style>>
