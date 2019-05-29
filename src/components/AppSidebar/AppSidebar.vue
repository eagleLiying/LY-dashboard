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
            @click="isCollapse = !isCollapse"
            :icon="isCollapse ? 'el-icon-caret-right' : 'el-icon-caret-left'"
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
import style from "./AppSidebar.module.scss";

export default {
  name: "app",
  data() {
    return {
      style,
      isCollapse: true,
      menus: [
        {
          path: "/",
          name: "订单",
          icon: "el-icon-s-order"
        },
        {
          path: "/foo",
          name: "foo",
          icon: "el-icon-menu"
        },
        {
          path: "/bar",
          name: "bar",
          icon: "el-icon-menu"
        },
      ]
    };
  },
  methods: {}
};
</script>