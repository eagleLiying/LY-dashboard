import Mock from "mockjs";

import ordersData from "mock/orders.json";
import usersData from "mock/users.json";
import userData from "mock/user.json";

// 订单列表
Mock.mock("/mock/orders", () => {
  return ordersData
});

// 用户列表
Mock.mock("/mock/users", () => {
  return usersData
});

// 用户详情
Mock.mock("/mock/user", () => {
  return userData
});
