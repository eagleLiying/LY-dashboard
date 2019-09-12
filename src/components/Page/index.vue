<template>
  <div class="page-container">
    <el-container>
      <PageSidebar/>
      <el-container>
        <PageHeader/>
        <el-main>
          <pre id="query-t">{{ $route.query.t }}</pre>
          <pre id="hash">{{ $route.hash }}</pre>
          <slot></slot>
        </el-main>
        <el-footer :class="style.footer">生鲜超市管理系统</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PageSidebar from "../PageSidebar/PageSidebar";
import PageHeader from "../PageHeader/PageHeader";

import style from "./Page.module.scss";

export default {
  name: "page",
  components: {
    PageSidebar,
    PageHeader
  },
  data() {
    return {
      isCollapse: true,
      style
    };
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
}
</style>
