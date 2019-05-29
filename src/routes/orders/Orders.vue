
<template>
  <div>
    <h2 :class="style.title">订单管理</h2>
    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column prop="date" label="订单号" width="180"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="用户名" width="180"></el-table-column>
      <el-table-column prop="status" label="订单状态" width="180">
        <template slot-scope="scope">
          <el-tag size="small" type="success">{{ statusText[scope.row.status] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="opration" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleDetil(scope.row)">详情</el-button>
          <el-button size="mini" type="text" @click="handleEdit(scope.row)">更改状态</el-button>
          <el-button size="mini" type="text" @click="handleDelete(scope.row)">删除</el-button>
        </template>
        <el-button type="text">更改状态</el-button>
      </el-table-column>
    </el-table>
    <order-detil
      v-bind:dialogVisible="dialogVisible"
      v-bind:handleClose="handleClose"
      v-bind:data="currentOrder"
    />
  </div>
</template>

<script>
import OrderDetil from "./OrderDetil";

import style from "./Orders.module.scss";

export default {
  /* eslint-disable */
  name: "orders",
  components: {
    "order-detil": OrderDetil
  },
  data() {
    const statusText = {
      0: "未支付",
      1: "支付成功",
      2: "正在准备",
      3: "正在配送",
      4: "已完成"
    };
    return {
      style,
      statusText,
      dialogVisible: false,
      currentOrder: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: 1
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: 1
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: 1
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: 1
        }
      ]
    };
  },
  methods: {
    handleEdit(data) {
      //   console.log(data);
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
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleDetil(data) {
      this.dialogVisible = true;
      this.currentOrder = data;
    },
    handleClose(data) {
      this.dialogVisible = false;
      this.currentOrder = data;
    }
  }
};
</script>

