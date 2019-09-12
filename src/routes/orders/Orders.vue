
<template>
  <page>
    <h2 :class="style.title">订单管理</h2>
    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column prop="id" label="订单号" width="180"></el-table-column>
      <el-table-column prop="createDate" label="日期" width="180"></el-table-column>
      <el-table-column prop="user.name" label="用户名" width="180"></el-table-column>
      <el-table-column prop="status" label="订单状态" width="180">
        <template slot-scope="scope">
          <el-tag size="small" v-show="statusText[scope.row.status]" :type="statusText[scope.row.status] && statusText[scope.row.status].type">{{ statusText[scope.row.status] && statusText[scope.row.status].name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="user.address" label="地址"></el-table-column>
      <el-table-column prop="deliveryDriver.name" label="送货员"></el-table-column>
      <el-table-column prop="deliveryDriver.mobile" label="送货员电话"></el-table-column>
      <el-table-column prop="opration" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleDetil(scope.row)">详情</el-button>
          <el-button size="mini" type="text" @click="handleEdit(scope.row)">更改状态</el-button>
        </template>
        <el-button type="text">更改状态</el-button>
      </el-table-column>
    </el-table>
    <order-detil
      v-bind:visible="visible"
      v-bind:handleclose="handleClose"
      v-bind:data="currentOrder"
    />
  </page>
</template>

<script>
import OrderDetil from "./OrderDetil";
import Page from "../../components/Page";

import style from "./Orders.module.scss";

export default {
  name: "orders",
  components: {
    "order-detil": OrderDetil,
    "page": Page,
  },
  data() {
    const statusText = {
      0: {name: "未支付", type: "info"},
      1: {name: "支付成功", type: "success"},
      2: {name: "正在准备", type: "warning"},
      3: {name: "正在配送", type: "warning"},
      4: {name: "已完成", type: "success"}
    };
    return {
      style,
      statusText,
      visible: false,
      currentOrder: {},
      tableData: []
    };
  },
  methods: {
    handleEdit() {
      this.$confirm("你确定此订单已经进行到下个状态了吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
        this.$message({
          type: "success",
          message: "修改成功!"
        });
      });
    },
    handleDetil(data) {
      this.visible = true;
      this.currentOrder = data;
    },
    handleClose() {
      this.visible = false;
      this.currentOrder = {};
    }
  },
  beforeCreate() {
    this.$http
      .get("/mock/orders")
      .then(({ data }) => {
        if(data && data.status) {
          this.tableData = data.data
        }
      });
  }
};
</script>

