
<template>
  <div>
    <h2 :class="style.title">商铺管理</h2>
    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column prop="name" label="商铺名称" width="180"></el-table-column>
      <el-table-column prop="date" label="加盟日期" width="180" sortable></el-table-column>
      <el-table-column
        prop="status"
        label="审核状态"
        width="180"
        :filters="statusFiltes"
        :filter-method="filterStatus"
      >
        <template slot-scope="scope">
          <el-tag
            size="small"
            :type="statusText[scope.row.status].type"
          >{{ statusText[scope.row.status].name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="opration" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleDetil(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import style from "./Shops.module.scss";

export default {
  name: "shops",
  data() {
    const statusText = {
      0: { name: "未审核", type: "info" },
      1: { name: "审核通过", type: "success" },
      2: { name: "审核失败", type: "danger" }
    };
    const statusFiltes = [
      { text: "未审核", value: 0 },
      { text: "审核通过", value: 1 },
      { text: "审核失败", value: 2 }
    ];
    return {
      style,
      statusText,
      dialogVisible: false,
      currentOrder: {},
      statusFiltes,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: 2
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
          status: 0
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
      this.dialogVisible = true;
      this.currentOrder = data;
    },
    handleClose(data) {
      this.dialogVisible = false;
      this.currentOrder = data;
    },
    filterStatus(value, row) {
      return row.status === value;
    }
  }
};
</script>

