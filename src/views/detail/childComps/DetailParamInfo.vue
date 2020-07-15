<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length">
    <p>参数信息</p>
    <table class="info-size" v-for="(item, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr, indey) in item" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
        <tr v-for="(item, index) in paramInfo.infos" :key="index">
            <td class="info-param-key">{{item.key}}</td>
            <td class="param-value">{{item.value}}</td>
        </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
        <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.param-info {
  font-size: 14px;
  padding: 20px 15px;
}

.param-info p {
  font-size: 15px;
  margin-bottom: 10px;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr{
    height: 42px;
}

.param-info table tr td{
    border-bottom: 1px solid rgba(102, 20, 88, 0.1);
}

.info-param-key{
    width: 100px;
}

.param-value{
    color: #eb4868;
}

.info-img img{
    width: 100%;
}

</style>