<template>
  <div id="appHeader">
    <el-header :class="style.header">
      <h1>生鲜超市管理系统</h1>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <img :class="style.avater" src="../../assets/images/avater.jpeg">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  </div>
</template>

<script>
import style from "./PageHeader.module.scss";

export default {
  name: "pageHeader",
  data() {
    return {
      style
    };
  }
};
</script>


