<template>
  <div id="home">
    <!-- 标题栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      ref="tabControl2"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
    />
    <!-- 内如区域 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @scrollToEnd="loadMore"
    >
      <home-banner-swiper :bannerList="bannerList" @swiperImageLoad="swiperImageLoad" />
      <home-recommend :recommendList="recommendList"></home-recommend>
      <feature-view />
      <tab-control ref="tabControl" :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goodsList="showGoods" />
    </scroll>
    <!-- 返回顶部 -->
    <back-top @click.native="topClick" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/contents/tabcontrol/TabControl";
import GoodsList from "components/contents/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/contents/backTop/BackTop";

import { getHomeMultiData, getHomeCategoryData } from "network/home.js";
import HomeBannerSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FeatureView from "./childComps/FeatureView";

// import { debounce } from "@/common/utils.js";

export default {
  name: "Home",
  data() {
    return {
      tabTopoffSet: 0,
      isTabFixed: false,
      bannerList: [],
      recommendList: [],
      currentType: "pop",
      showBackTop: false,
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      saveY: 0
    };
  },
  components: {
    NavBar,
    HomeBannerSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  mounted() {
    // 图片加载完成监听
    // const refresh = debounce(this.$refs.scroll.scrollTo, 500);
    this.$bus.$on("imageFinishLoad", () => {
      // console.log("imageFinishLoad");
      // refresh();
    });
  },
  created() {
    getHomeMultiData().then(res => {
      // console.log(res);
      this.bannerList = res.data.banner.list;
      this.recommendList = res.data.recommend.list;
    });
    this.getHomeCategotryData("pop");
    this.getHomeCategotryData("new");
    this.getHomeCategotryData("sell");
  },
  methods: {
    getHomeCategotryData(type) {
      const page = this.goods[type].page + 1;
      getHomeCategoryData(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    topClick() {
      // 不建议直接调用，可以在scroll中封装
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500);
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // 判断返回顶部是否出现
      this.showBackTop = -position.y > 1000;
      // 判断tab-control是否固定
      this.isTabFixed = -position.y > this.tabTopoffSet;
    },
    loadMore() {
      console.log("开始加载更多");
      this.getHomeCategotryData(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImageLoad() {
      this.tabTopoffSet = this.$refs.tabControl.$el.offsetTop;
      // console.log("tabTopoffSet:", this.tabTopoffSet);
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  destroyed() {
    console.log("destoryd");
  }
};
</script>
<style  scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  background-color: #fff;
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
