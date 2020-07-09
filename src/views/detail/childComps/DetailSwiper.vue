<template>
  <div>
    <swiper class="d-swiper">
      <swiper-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";

export default {
  name: "DetailSwip",
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.d-swiper {
  height: 300px;
}
</style>