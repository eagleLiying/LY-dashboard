
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Orders from "./orders/Orders.vue";

const Bar = { template: "<div>bar</div>" };
const App = { template: "<div>foo</div>" };


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: "/foo", component: App },
  { path: "/bar", component: Bar },
  { path: "/", component: Orders }
];

export default routes;
