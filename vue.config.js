const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false ,
   devServer: { // 自定义服务配置
    open: true, // 自动打开浏览器
    host: "10.201.80.170",
    port: 3001
  }
})
