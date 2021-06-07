<template>
  <div class="header">
    <el-row>
      <el-col :span="18">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#0a0a0a"
          text-color="#fff"
          active-text-color="#fff"
          :router="true"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/post">发表文章</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#0a0a0a"
          text-color="#fff"
          active-text-color="#fff"
        >
          <el-menu-item index="signin">
            <router-link to="/signin">登录</router-link>
          </el-menu-item>
          <el-menu-item index="signup">
            <router-link to="/signup">注册</router-link>
          </el-menu-item>
          <el-submenu index="profile">
            <template slot="title">Egret</template>
            <el-menu-item index="logout">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  a {
    text-decoration: none;
  }
}
</style>