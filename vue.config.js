const { defineConfig } = require('@vue/cli-service')
// const apiTarget = "http://localhost:3000/api/v1"

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//禁用ESlint
  devServer: {
    host: '0.0.0.0',
    allowedHosts: "all",
    port:8080,
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  // proxy:{
  //   'proxy':{
  //     target:apiTarget, // 这是根路径
  //     changeOrigin:true,
  //     pathRewrite: {
  //       '^/proxy': ''
  //     },
  //     fallback: {
  //       "fs": false
  //     },
  //   }
  // }
  }
})

    
