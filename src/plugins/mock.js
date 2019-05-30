import Mock from "mockjs";

import ordersData from "mock/orders.json";
import usersData from "mock/users.json";

// 订单列表
Mock.mock("/mock/orders", () => {
  return ordersData
});

// 用户列表
Mock.mock("/mock/users", () => {
  return usersData
});
