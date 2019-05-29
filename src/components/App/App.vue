<template>
  <div id="app">
    <el-container>
      <AppSidebar/>
      <el-container>
        <AppHeader/>
        <el-main>
          <pre id="query-t">{{ $route.query.t }}</pre>
          <pre id="hash">{{ $route.hash }}</pre>
          <router-view class="view"></router-view>
        </el-main>
        <el-footer :class="style.footer">生鲜超市管理系统</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppSidebar from "../AppSidebar/AppSidebar";
import AppHeader from "../AppHeader/AppHeader";

import style from "./App.module.scss";

export default {
  name: "app",
  components: {
    AppSidebar,
    AppHeader
  },
  data() {
    return {
      isCollapse: true,
      style
    };
  }
};
</script>

<style lang="scss" >
#app {
  display: flex;
  min-height: 100vh;
  text-align: center;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

