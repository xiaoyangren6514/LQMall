<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommendList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: {
      type: Array
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 5px;
  padding-bottom: 15px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
  margin-top: 6px;
}
.recommend-item img {
  height: 70px;
  width: 70px;
  margin-bottom: 5px;
  
}
</style>