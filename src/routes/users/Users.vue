
<template>
  <div>
    <h2 :class="style.title">用户列表</h2>
    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column prop="name" label="用户名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import style from "./Users.module.scss";

export default {
  name: "users",
  data() {
    return {
      style,
      tableData:[]
    };
  },

  beforeCreate() {
    this.$http.get("/mock/users").then(({ data }) => {
      if (data && data.status) {
        this.tableData = data.data;
      }
    });
  }
};
</script>

