const path = require("path");

module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "~@/assets/scss/element-variables.scss";
          @import "~@/assets/scss/common.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        mock: path.resolve(__dirname, "mock/")
      }
    }
  },
  devServer: {
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // 配置多个代理
    proxy: {
      "/api/*": {
        target: "http://localhost:8888",
        ws: true,
        changeOrigin: true
      },
    }
  }
};
