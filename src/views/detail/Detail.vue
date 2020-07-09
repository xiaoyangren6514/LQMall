<template>
  <div>
    <detail-nav></detail-nav>
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav";
export default {
  name: "Detail",
  data() {
    return {
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  components: {
    DetailNav
  }
};
</script>

<style  scoped>
</style>>
