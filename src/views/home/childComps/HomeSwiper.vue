<template>
  <swiper>
    <swiper-item v-for="(item, index) in bannerList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    bannerList: Array
  },
  data() {
    return {
      isFirstLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if (!this.isFirstLoad) {
        this.$emit("swiperImageLoad");
        this.isFirstLoad = true;
      }
    }
  }
};
</script>

<style>
</style>