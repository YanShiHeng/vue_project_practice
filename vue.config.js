// 这个检查机制太严格，需要去配置把这个ESLint去掉
// 因为是使用的vue-cli脚手架，所以需要对这个脚手架进行配置：需要新起一个配置文件 -> vue.config.js
// 因为当前项目是由webpack来进行运行，webpack是基于NodeJS的，因此配置文件由webpack读取和执行，所以vue.config.js应该是一个CommonJS规范的文件
// 是一个配置文件，因此需要把配置好的配置导出给webpack使用
// 因为这个配置是webpack来进行加载的，也就是这个文件需要使用NodeJS来执行，因此这个文件修改以后需要重新启动服务

module.exports = {
  // 需要把lint on save这个检查时机去掉
  lintOnSave: false,

  // 配置多页应用
  pages: {
    // 需要指定名字
    index: {
      // 指定index页面应用的js实例
      entry: "./src/index.js",
      // 指定index页面应用的模板
      template: "./public/index.html",
    },
  },
  devServer: {
    port: 666,
    open: true,
    proxy: {
      "/apis": {
        target: "http://localhost:9999",
        // 需要对地址中的多余字段"/apis"去掉
        pathRewrite: { "/apis": "" },
      },
    },
  },
};

// webpack 用过没有？
// webpack自己做技术研究时候用过，在项目中多用脚手架，vue使用vue.config.js对webpack进行配置
// 那你都配置过什么？
