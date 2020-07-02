<template>
  <div class="index">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-banner-swiper :bannerList="bannerList" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData } from "network/home.js";
import HomeBannerSwiper from "./childComps/HomeSwiper";

export default {
  name: "Home",
  data() {
    return {
      bannerList: [],
      recommends: []
    };
  },
  components: {
    NavBar,
    HomeBannerSwiper
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.bannerList = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  mounted() {},
  methods: {}
};
</script>
<style  scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
