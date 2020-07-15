<template>
  <div class="base-info">
    <div class="into-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span :style="discountStyle" v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.services[goods.services.length-1].name }}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index">
        <img class="icon" :src="goods.services[index-1].icon" alt />
        <span class="desc">{{ goods.services[index-1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    discountStyle() {
      return {
        backgroundColor: this.goods.discountBgColor
      };
    }
  }
};
</script>

<style scoped>
.base-info {
  width: 100%;
  margin-top: 15px;
  padding: 0 10px;
  color: #999999;
  border-bottom: 5px solid #f2f5f8;
}

.into-title {
  text-align: justify;
  color: #222222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: #ff5777;
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  position: relative;
  font-size: 12px;
  color: #ffffff;
  border-radius: 8px;
  padding: 3px 6px;
  /* background-color: #ff5777; */
  top: -4px;
  margin-left: 6px;
}

.info-other {
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
  font-size: 13px;
  /* border-bottom: 1px solid rgba(100, 100, 100, 0.1); */
}

.info-service {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 10px;
  padding-bottom: 8px;
}

.info-service .icon {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
</style>>
