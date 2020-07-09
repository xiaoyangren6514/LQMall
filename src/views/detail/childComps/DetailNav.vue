<template>
  <div class="detail">
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/images/common/back.svg" alt class="img-back" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{active:index===currentIndex}"
          @click="itemClick(index)"
        >{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNav",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-tint);
}
.img-back {
  margin-left: 12px;
  margin-top: 12px;
}
</style>>
