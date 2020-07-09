<template>
  <div>
    <detail-nav />
    <detail-swiper :bannerList="bannerList" />
  </div>
</template>

<script>
import { getDetailData } from "network/detail.js";

import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      bannerList: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.loadDetailData();
  },
  components: {
    DetailNav,
    DetailSwiper
  },
  methods: {
    loadDetailData() {
      getDetailData(this.id).then(res => {
        console.log(res);
        this.bannerList = res.result.itemInfo.topImages;
      });
    }
  }
};
</script>

<style  scoped>
</style>>
