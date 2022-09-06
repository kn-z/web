const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//禁用ESlint
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
    proxy:{
      'proxy':{
        target:'http://go.knyun.xyz:3000/api/v1', // 这是根路径
        changeOrigin:true,
        pathRewrite: {
          '^/proxy': ''
        }
      }
    }
  }
})