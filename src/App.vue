<template>
  <div id="app">
    <el-container>
      <el-header><the-header></the-header></el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer><the-footer></the-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #0a0a0a;
}
.el-main {
  min-height: calc(100vh - 120px);
}
.el-footer {
  background-color: #0a0a0a;
}
</style>
