<template>
  <div id="detail">
    <!-- 头部导航 -->
    <detail-nav class="detail-nav"/>
    <scroll class="detail-content" >
      <!-- 商品轮播图 -->
      <detail-swiper :bannerList="bannerList" />
      <!-- 商品基本信息 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 商铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
import { getDetailData, Goods, Shop } from "network/detail.js";

import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      bannerList: [],
      goods: {},
      shop: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.loadDetailData();
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
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
        // 3. 获取店铺信息
        this.shop = new Shop(data.shopInfo);
      });
    }
  }
};
</script>

<style  scoped>

#detail {
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}

.detail-nav{
  position: relative;
  z-index: 9;
}

.detail-content{
  position: absolute;
  top: 44px;
  overflow: hidden;
  background-color: white;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>>
