<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt />
        <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt />
        <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt />
        <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style  scoped>
</style>
