// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "order" */ "./orders/Orders.vue")
  },
  {
    path: "/shops",
    component: () => import(/* webpackChunkName: "shop" */ "./shops/index.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "user" */ "./shops/list/Shops.vue")
      },
      {
        path: "create",
        component: () =>
          import(/* webpackChunkName: "user" */ "./shops/create/CreateShop.vue")
      },
      {
        path: ":id",
        component: () =>
          import(/* webpackChunkName: "user" */ "./user/detil/User.vue")
      }
    ]
  },
  {
    path: "/users",
    component: () => import(/* webpackChunkName: "user" */ "./user/User.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "user" */ "./user/list/Users.vue")
      },
      {
        path: ":id",
        component: () =>
          import(/* webpackChunkName: "user" */ "./user/detil/User.vue")
      }
    ]
  }
];

export default routes;
