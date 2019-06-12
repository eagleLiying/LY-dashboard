<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/users' }">用户列表</el-breadcrumb-item>
      <el-breadcrumb-item>用户详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h2 :class="styles.title">用户详情页</h2>
    <div :class="styles.content">
      <div :class="styles.infoItem">
        <h4>基本信息</h4>
        <el-row>
          <el-col :lg="6" :md="8" :sm="24">
            <filed-item :value="data.name" title="用户名"></filed-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="24">
            <filed-item :value="data.name" title="用户名"></filed-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="24">
            <filed-item :value="data.name" title="用户名"></filed-item>
          </el-col>
          <el-col :lg="6" :md="8" :sm="24">
            <filed-item :value="data.name" title="用户名"></filed-item>
          </el-col>
        </el-row>
      </div>
      <div :class="styles.infoItem">
        <h4>收货地址</h4>
        <el-row>
          <el-col v-for="(item, index) in data.address" :key="item + index" :sm="24">
            <filed-item :value="item" :title="'收货地址' + (index + 1)"></filed-item>
          </el-col>
        </el-row>
      </div>
      <div v-show="data.orders.length > 0" :class="styles.infoItem">
        <h4>订单</h4>
        <el-row>
          <el-col v-for="(item, index) in data.address" :key="item + index" :sm="24">
            <filed-item :value="item" :title="'收货地址' + (index + 1)"></filed-item>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>


<script>
import FeildItem from "./UserFeildItem";

import styles from "./User.module.scss";

export default {
  name: "userDetil",
  components: {
    "filed-item": FeildItem
  },
  data() {
    return {
      styles,
      data: {}
    };
  },
  beforeCreate() {
    this.$http.get("/mock/user").then(({ data }) => {
      if (data && data.status) {
        this.data = data.data;
      }
    });
  }
};
</script>

