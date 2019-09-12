<template>
  <div id="appSidebar">
    <el-aside>
      <el-menu :collapse="isCollapse" router>
        <el-menu-item index="/" :class="style.header">
          <el-button
            circle
            size="mini"
            type="text"
            :class="style.sidebarButton"
            @click="handleChangeCollapse"
            :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          ></el-button>
          <div v-show="!isCollapse" :class="style.logoContainer">
          <img src="../../assets/logo.png" :class="style.logo" />
          </div>
        </el-menu-item>
        <el-menu-item v-for="menu in menus" :key="menu.path" :index="menu.path">
          <i :class="menu.icon"></i>
          <span slot="title" v-text="menu.name">fdsfdsf</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>


<script>
import style from "./PageSidebar.module.scss";

export default {
  name: "pageSidebar",
  data() {
    return {
      style,
      isCollapse: true,
      menus: [
        {
          path: "/",
          name: "订单管理",
          icon: "el-icon-s-order"
        },
        {
          path: "/shops",
          name: "商铺管理",
          icon: "el-icon-s-shop"
        },
        {
          path: "/users",
          name: "用户管理",
          icon: "el-icon-user-solid"
        },
      ]
    };
  },
  methods: {
    handleChangeCollapse(e) {
      e.stopPropagation();
      this.isCollapse = !this.isCollapse
    }
  }
};
</script>